import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { CheckCircle2, XCircle, Check, ChevronRight, RotateCcw, ArrowLeft, Clock, Brain, AlertTriangle, BookOpen, Dumbbell, TrendingUp, Target, Keyboard, X, Sparkles } from 'lucide-react';
import { useRouter } from '@/router';
import { useData } from '@/hooks/useData';
import { buildMistakePrompt, isTutorAvailable, buildTopicContext, buildStudentContext } from '@/lib/ai-tutor';
import { AiTutorChat } from '@/components/AiTutorChat';
import { allQuestions, questionsByTopic } from '@/data/questions';
import { getTopic } from '@/data/topics';
import { sectionMap } from '@/data/sections';
import { useSubjectData } from '@/hooks/useSubjectData';
import { subjectsByTrack } from '@/data/subjects';
import { subjectMap } from '@/data/subjects';
import { BackButton, Breadcrumbs, HomeButton } from '@/components/layout/Breadcrumbs';
import { PageContainer, Card, ProgressBar, Button, EmptyState, LoadingSpinner } from '@/components/ui';
import { loadAllQuestions, loadSubjectQuestions, loadQuestionsForTopic } from '@/data/lazy-data';
import type { Question, DifficultyFilter, PracticeMode, TimeLimitSetting, SubjectId, TopicProgress } from '@/types';
// SubjectId used for workspace scope checks
import { quizSignature } from '@/lib/quiz-signature';
import { selectQuizPool, filterRestoredQuestions, targetPoolCount } from '@/lib/quiz-pool';
import { resolveLearningScope, scopeInputFromData } from '@/lib/learning-scope';
import {
  validateDraftShape,
  validateQuizRequest,
  questionsMatchRequest,
  isValidOptionPermutation,
  reconcileRestoredDraft,
  gradeAnswer,
  type QuizSessionSnapshot,
} from '@/lib/quiz-session';
import { pickAdaptiveQuestions, recentQuestionIdsFromResults } from '@/lib/adaptive-select';
import { instantiatePool } from '@/lib/quant-template';

const VALID_MODES: PracticeMode[] = ['topic', 'quick', 'mock', 'review', 'challenge'];
const VALID_SUBJECT_IDS = Object.keys(subjectMap);

/** Pack matching answers: optionIdx * MATCH_PACK + matchIdx (supports up to MATCH_PACK match options). */
const MATCH_PACK = 1000;
function packMatchSelect(optionIdx: number, matchIdx: number): number {
  return optionIdx * MATCH_PACK + matchIdx;
}
function unpackMatchSelect(idx: number): { optionIdx: number; matchIdx: number } {
  return { optionIdx: Math.floor(idx / MATCH_PACK), matchIdx: idx % MATCH_PACK };
}

function validateQuizParams(params: {
  mode?: PracticeMode;
  count?: number | 'all';
  topicId?: string;
  topicIds?: string[];
  scope?: 'subject' | 'all';
  subjectId?: string;
}): string | null {
  if (!params.mode || !VALID_MODES.includes(params.mode)) {
    return `Invalid quiz mode: "${params.mode ?? 'undefined'}". Expected one of: ${VALID_MODES.join(', ')}.`;
  }
  if (params.count !== undefined && params.count !== 'all') {
    if (typeof params.count !== 'number' || !Number.isInteger(params.count) || params.count < 1 || params.count > 500) {
      return `Invalid question count: "${params.count}". Expected a positive integer, or "all".`;
    }
  }
  if (params.topicId !== undefined && params.topicId !== '' && !getTopic(params.topicId)) {
    return `Invalid topic ID: "${params.topicId}" does not exist.`;
  }
  if (params.subjectId !== undefined && params.subjectId !== '' && !VALID_SUBJECT_IDS.includes(params.subjectId)) {
    return `Invalid subject ID: "${params.subjectId}" does not exist.`;
  }
  const coherence = validateQuizRequest({
    mode: params.mode,
    topicId: params.topicId,
    topicIds: params.topicIds,
    scope: params.scope,
    subjectId: params.subjectId,
  });
  if (!coherence.ok) return coherence.reason;
  return null;
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Session-stable option order: order[i] = original bank index of the option
 * shown at display position i. Remaps correctAnswer so grading stays correct.
 */
function applyOptionOrder(q: Question, order: number[]): Question {
  if (!q.options?.length || order.length !== q.options.length) return q;
  const options = order.map((oi) => q.options[oi]);
  const inv: number[] = new Array(order.length);
  order.forEach((oi, newIdx) => {
    inv[oi] = newIdx;
  });

  let correctAnswer: number | number[];
  if (q.type === 'matching' && Array.isArray(q.correctAnswer)) {
    // correctAnswer[i] = matchOptions index for options[i]; permute with options
    const mapped = order.map((oi) => (q.correctAnswer as number[])[oi]);
    if (mapped.some((v) => v === undefined)) return q;
    correctAnswer = mapped;
  } else if (Array.isArray(q.correctAnswer)) {
    const mapped = (q.correctAnswer as number[]).map((oi) => inv[oi]);
    if (mapped.some((v) => v === undefined)) return q;
    correctAnswer = mapped.sort((a, b) => a - b);
  } else {
    const mapped = inv[q.correctAnswer as number];
    if (mapped === undefined) return q; // fail closed — never keep bank index after shuffle
    correctAnswer = mapped;
  }
  return { ...q, options, correctAnswer };
}

function shuffleQuestionOptions(q: Question): { question: Question; order: number[] } {
  if (!q.options || q.options.length < 2) {
    return { question: q, order: (q.options ?? []).map((_, i) => i) };
  }
  const order = shuffleArray(q.options.map((_, i) => i));
  return { question: applyOptionOrder(q, order), order };
}

function applySavedOptionOrders(
  questions: Question[],
  questionIds: string[],
  optionOrders?: number[][],
): Question[] {
  // Align orders by question id — not by filtered array index (missing bank IDs would shift rows)
  const orderById = new Map<string, number[]>();
  if (optionOrders?.length) {
    questionIds.forEach((id, i) => {
      const order = optionOrders[i];
      if (order) orderById.set(id, order);
    });
  }
  return questions.map((q) => {
    const order = orderById.get(q.id);
    if (!order || !isValidOptionPermutation(order, q.options?.length ?? 0)) return q;
    return applyOptionOrder(q, order);
  });
}

function pickQuestions(
  mode: PracticeMode,
  topicId: string | undefined,
  topicIds: string[] | undefined,
  scope: 'subject' | 'all' | undefined,
  subjectId: string | undefined,
  count: number | 'all' | undefined,
  difficulty: DifficultyFilter | undefined,
  wrongPool: boolean | undefined,
  questionResults: Record<string, { correct: boolean; timestamp: number }> | undefined,
  track: 'fpsc' | 'hat' | null | undefined,
  topicProgress: Record<string, TopicProgress> | undefined,
  allowedSubjectIds: Set<string>,
  scopeInput: import('@/lib/track-scope').ScopeInput | null,
): Question[] {
  const pool = selectQuizPool({
    mode,
    topicId,
    topicIds,
    scope,
    subjectId,
    count,
    difficulty,
    wrongPool,
    questionResults,
    track,
    allowedSubjectIds,
    scopeInput,
    topicProgress,
  });
  if (pool.length === 0) return [];

  const targetCount = targetPoolCount(mode, count, pool.length);

  if (mode === 'mock') {
    if (pool.length <= targetCount) return shuffleArray(pool);
    const easyPool = pool.filter((q) => q.difficulty === 'easy');
    const mediumPool = pool.filter((q) => q.difficulty === 'medium');
    const hardPool = pool.filter((q) => q.difficulty === 'hard');
    const targetEasy = Math.round(targetCount * 0.2);
    const targetMedium = Math.round(targetCount * 0.5);
    const targetHard = targetCount - targetEasy - targetMedium;
    const picked = [
      ...shuffleArray(easyPool).slice(0, Math.min(targetEasy, easyPool.length)),
      ...shuffleArray(mediumPool).slice(0, Math.min(targetMedium, mediumPool.length)),
      ...shuffleArray(hardPool).slice(0, Math.min(targetHard, hardPool.length)),
    ];
    if (picked.length < targetCount) {
      const pickedIds = new Set(picked.map((q) => q.id));
      const leftover = pool.filter((q) => !pickedIds.has(q.id));
      const need = targetCount - picked.length;
      picked.push(...shuffleArray(leftover).slice(0, need));
    }
    return shuffleArray(picked);
  }
  return pickAdaptiveQuestions(pool, Math.min(targetCount, pool.length), {
    mode,
    questionResults,
    topicProgress,
    recentQuestionIds: recentQuestionIdsFromResults(questionResults),
  });
}

function isCorrect(question: Question, selectedIndex: number[]): boolean {
  return gradeAnswer(question, selectedIndex);
}

type AnswerRecord = {
  questionId: string;
  correct: boolean;
  selectedIndices: number[];
};

interface QuizState {
  questions: Question[];
  /** Parallel to questions: order[i] = original option index at display slot i */
  optionOrders: number[][];
  currentIdx: number;
  selectedIndices: number[];
  checked: boolean;
  answers: AnswerRecord[];
  startTime: number;
  elapsed: number;
}

type ResultsData = {
  score: number;
  total: number;
  answers: AnswerRecord[];
  questions: Question[];
  perTopic: Record<string, { correct: number; total: number }>;
  perDifficulty: Record<string, { correct: number; total: number }>;
};

function buildBreakdown(questions: Question[], answers: AnswerRecord[]) {
  const byId = new Map(answers.map((a) => [a.questionId, a]));
  const perTopic: Record<string, { correct: number; total: number }> = {};
  const perDifficulty: Record<string, { correct: number; total: number }> = {};
  for (const q of questions) {
    const ans = byId.get(q.id);
    if (!perTopic[q.topicId]) perTopic[q.topicId] = { correct: 0, total: 0 };
    perTopic[q.topicId].total++;
    if (ans?.correct) perTopic[q.topicId].correct++;
    if (!perDifficulty[q.difficulty]) perDifficulty[q.difficulty] = { correct: 0, total: 0 };
    perDifficulty[q.difficulty].total++;
    if (ans?.correct) perDifficulty[q.difficulty].correct++;
  }
  return { perTopic, perDifficulty };
}

const QUIZ_PROGRESS_KEY = 'examprep-quiz-progress';

interface SavedQuizProgress {
  questionIds: string[];
  /** Parallel to questionIds; session-stable option permutation */
  optionOrders?: number[][];
  answers: AnswerRecord[];
  /** Seconds already elapsed when progress was saved (timer resume) */
  elapsedSeconds?: number;
  currentIdx: number;
  mode: PracticeMode;
  topicId?: string;
  topicIds?: string[];
  scope?: 'subject' | 'all';
  subjectId?: string;
  count?: number | 'all';
  difficulty?: DifficultyFilter;
  timeLimit?: TimeLimitSetting;
  wrongPool?: boolean;
  track?: 'fpsc' | 'hat';
  examId?: string | null;
}

function saveQuizProgress(
  state: QuizState,
  mode: PracticeMode,
  topicId?: string,
  subjectId?: string,
  topicIds?: string[],
  scope?: 'subject' | 'all',
  count?: number | 'all',
  difficulty?: DifficultyFilter,
  timeLimit?: TimeLimitSetting,
  wrongPool?: boolean,
  track?: 'fpsc' | 'hat' | null,
  examId?: string | null,
): void {
  try {
    const progress: SavedQuizProgress = {
      questionIds: state.questions.map((q) => q.id),
      optionOrders: state.optionOrders,
      answers: state.answers,
      elapsedSeconds: state.elapsed,
      currentIdx: state.currentIdx,
      mode,
      topicId,
      subjectId,
      topicIds,
      scope,
      count,
      difficulty,
      timeLimit,
      wrongPool,
      track: track ?? undefined,
      examId: examId ?? null,
    };
    localStorage.setItem(QUIZ_PROGRESS_KEY, JSON.stringify(progress));
  } catch { /* ignore */ }
}

function loadQuizProgress(): SavedQuizProgress | null {
  try {
    const raw = localStorage.getItem(QUIZ_PROGRESS_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    const v = validateDraftShape(parsed);
    if (!v.ok) return null;
    return v.draft as SavedQuizProgress;
  } catch { return null; }
}

function clearQuizProgress(): void {
  try { localStorage.removeItem(QUIZ_PROGRESS_KEY); } catch { /* ignore */ }
}

export function QuizScreen({ mode, topicId, topicIds, scope, subjectId, count, difficulty, timeLimit, wrongPool }: {
  mode: PracticeMode;
  topicId?: string;
  topicIds?: string[];
  scope?: 'subject' | 'all';
  subjectId?: string;
  count?: number | 'all';
  difficulty?: DifficultyFilter;
  timeLimit?: TimeLimitSetting;
  wrongPool?: boolean;
}) {
  const { back, canGoBack, navigate } = useRouter();
  /** Prefer in-app stack; from Home CTAs (3-min / recommendation) fall back to Home. */
  const exitToOrigin = useCallback(() => {
    if (canGoBack) back();
    else navigate({ screen: 'home', parent: null });
  }, [canGoBack, back, navigate]);
  const { recordQuiz, data } = useData();
  const dataRef = useRef(data);
  dataRef.current = data;
  const sd = useSubjectData();
  const learningScope = resolveLearningScope(data);
  const activeTrack = learningScope?.trackId ?? null;
  const activeExamId = learningScope?.examId ?? null;
  const [state, setState] = useState<QuizState | null>(null);
  const [finished, setFinished] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showKeysHelp, setShowKeysHelp] = useState(false);
  const exitModalRef = useRef<HTMLDivElement>(null);
  const keysHelpModalRef = useRef<HTMLDivElement>(null);
  const [results, setResults] = useState<ResultsData | null>(null);

  // Snapshot question results once at mount — do not rewrite every render
  const questionResultsSnapshot = useRef(data.questionResults);
  // Lock track for this quiz session so mid-quiz track switches do not re-init
  /** Locked at init/resume — one workspace for the whole session */
  const sessionRef = useRef<QuizSessionSnapshot | null>(null);
  const trackRef = useRef(activeTrack);

  // Refs for stable handlers in keyboard / timer effects
  const stateRef = useRef(state);
  stateRef.current = state;
  const finishedRef = useRef(finished);
  finishedRef.current = finished;
  const finishQuizRef = useRef<(s: QuizState, a: AnswerRecord[]) => void>(() => {});
  // Debounce for second-tap check / third-tap next (avoids accidental double-taps)
  const lastTapRef = useRef<{ idx: number; at: number } | null>(null);
  const TAP_DEBOUNCE_MS = 280;
  // Guard against StrictMode double-invocation of setState updaters
  const recordedRef = useRef(false);

  const [questionsLoading, setQuestionsLoading] = useState(true);
  const [questionsLoadError, setQuestionsLoadError] = useState(false);
  const [resumeOffer, setResumeOffer] = useState<SavedQuizProgress | null>(null);
  const [retakeEmpty, setRetakeEmpty] = useState(false);

  const initQuiz = useCallback(() => {
    recordedRef.current = false;
    // Prefer existing locked session workspace (mid-session membership changes must not re-scope)
    let snap = sessionRef.current;
    if (!snap) {
      const ls = resolveLearningScope(dataRef.current);
      if (!ls) {
        setState(null);
        setFinished(false);
        setResults(null);
        sessionRef.current = null;
        return;
      }
      snap = {
        trackId: ls.trackId,
        examId: ls.examId,
        allowedSubjectIds: Array.from(ls.subjectIds),
        scopeInput: { trackId: ls.trackId, examId: ls.examId },
      };
      sessionRef.current = snap;
      trackRef.current = ls.trackId;
    }
    const pool = pickQuestions(
      mode, topicId, topicIds, scope, subjectId, count, difficulty, wrongPool,
      questionResultsSnapshot.current, snap.trackId, dataRef.current.topicProgress,
      new Set(snap.allowedSubjectIds), snap.scopeInput,
    );
    // Phase D: materialize quant templates (new numbers); strength stays on base id
    const sessionSeed = `${Date.now()}-${mode}-${topicId ?? subjectId ?? 'all'}`;
    const materialized = instantiatePool(pool, sessionSeed);
    const optionOrders: number[][] = [];
    const qs = materialized.map((q) => {
      const { question, order } = shuffleQuestionOptions(q);
      optionOrders.push(order);
      return question;
    });
    setState({ questions: qs, optionOrders, currentIdx: 0, selectedIndices: [], checked: false, answers: [], startTime: Date.now(), elapsed: 0 });
    setFinished(false);
    setResults(null);
  }, [mode, topicId, topicIds, scope, subjectId, count, difficulty, wrongPool]);

  // Check for saved quiz progress on mount — only offer resume if full signature matches
  useEffect(() => {
    const saved = loadQuizProgress();
    if (!saved || saved.answers.length === 0) return;
    // Without an active workspace, do not discard a potentially valid draft
    if (!activeTrack) return;
    const currentSig = quizSignature({
      mode, topicId, topicIds, scope, subjectId, count, difficulty, wrongPool,
      track: activeTrack, examId: activeExamId, timeLimit,
    });
    const savedSig = quizSignature({
      mode: saved.mode,
      topicId: saved.topicId,
      topicIds: saved.topicIds,
      scope: saved.scope,
      subjectId: saved.subjectId,
      count: saved.count,
      difficulty: saved.difficulty,
      wrongPool: saved.wrongPool,
      track: saved.track,
      examId: saved.examId ?? null,
      timeLimit: saved.timeLimit,
    });
    if (currentSig === savedSig) {
      setResumeOffer(saved);
    } else {
      // Only clear when we can positively prove mismatch against a real workspace
      clearQuizProgress();
      setResumeOffer(null);
    }
  }, [mode, topicId, topicIds, scope, subjectId, count, difficulty, wrongPool, activeTrack, activeExamId, timeLimit]);

  // Save quiz progress whenever answers or currentIdx changes
  useEffect(() => {
    if (state && !finished && state.questions.length > 0) {
      const sess = sessionRef.current;
      if (!sess) return;
      saveQuizProgress(
        state, mode, topicId, subjectId, topicIds, scope, count, difficulty, timeLimit, wrongPool,
        sess.trackId,
        sess.examId,
      );
    }
  }, [state?.answers, state?.currentIdx, finished, mode, topicId, subjectId, topicIds, scope, count, difficulty, timeLimit, wrongPool]);

  const resumeQuiz = useCallback(async () => {
    const saved = resumeOffer;
    if (!saved) return;
    setResumeOffer(null);
    setQuestionsLoading(true);
    try {
      if (saved.mode === 'topic' && saved.topicId) {
        await loadQuestionsForTopic(saved.topicId);
      } else if (saved.scope === 'subject' && saved.subjectId) {
        await loadSubjectQuestions(saved.subjectId as SubjectId);
      } else {
        await loadAllQuestions();
      }
    } catch (err) {
      console.error('Failed to load questions for resume:', err);
      setQuestionsLoading(false);
      clearQuizProgress();
      initQuiz();
      return;
    }
    const ls = resolveLearningScope(data);
    if (!ls) {
      clearQuizProgress();
      setQuestionsLoading(false);
      initQuiz();
      return;
    }
    // Draft workspace must match current canonical workspace
    if ((saved.track ?? null) !== ls.trackId || (saved.examId ?? null) !== (ls.examId ?? null)) {
      clearQuizProgress();
      setQuestionsLoading(false);
      initQuiz();
      return;
    }
    const snap: QuizSessionSnapshot = {
      trackId: ls.trackId,
      examId: ls.examId,
      allowedSubjectIds: Array.from(ls.subjectIds),
      scopeInput: { trackId: ls.trackId, examId: ls.examId },
    };
    sessionRef.current = snap;
    trackRef.current = ls.trackId;
    const allQs = allQuestions();
    const scoped = filterRestoredQuestions(
      allQs,
      saved.questionIds,
      new Set(snap.allowedSubjectIds),
      snap.scopeInput,
    );
    if (!scoped || scoped.length === 0) {
      clearQuizProgress();
      setQuestionsLoading(false);
      initQuiz();
      return;
    }
    if (!questionsMatchRequest(scoped, {
      mode: saved.mode,
      topicId: saved.topicId,
      topicIds: saved.topicIds,
      scope: saved.scope,
      subjectId: saved.subjectId,
      difficulty: saved.difficulty,
      wrongPool: saved.wrongPool,
    }, dataRef.current.questionResults)) {
      clearQuizProgress();
      setQuestionsLoading(false);
      initQuiz();
      return;
    }
    const bankQuestions = scoped;
    const reconciled = reconcileRestoredDraft(bankQuestions, saved);
    if (!reconciled.ok) {
      clearQuizProgress();
      setQuestionsLoading(false);
      initQuiz();
      return;
    }
    recordedRef.current = false;
    const resumedElapsed = Math.max(0, saved.elapsedSeconds ?? 0);
    setState({
      questions: reconciled.questions,
      optionOrders: reconciled.optionOrders,
      currentIdx: Math.min(saved.currentIdx, reconciled.questions.length - 1),
      selectedIndices: [],
      checked: false,
      // Correctness recomputed — never trust stored boolean alone
      answers: reconciled.answers,
      startTime: Date.now() - resumedElapsed * 1000,
      elapsed: resumedElapsed,
    });
    setFinished(false);
    setResults(null);
    setQuestionsLoading(false);
  }, [resumeOffer, initQuiz, data]);

  const declineResume = useCallback(() => {
    setResumeOffer(null);
    clearQuizProgress();
  }, []);

  const handleRetry = useCallback(() => {
    if (wrongPool) {
      const sess = sessionRef.current;
      if (!sess) {
        setRetakeEmpty(true);
        return;
      }
      const pool = pickQuestions(
        mode, topicId, topicIds, scope, subjectId, count, difficulty, true,
        data.questionResults, sess.trackId, data.topicProgress,
        new Set(sess.allowedSubjectIds), sess.scopeInput,
      );
      if (pool.length === 0) {
        setRetakeEmpty(true);
        return;
      }
    }
    setRetakeEmpty(false);
    initQuiz();
  }, [wrongPool, data.questionResults, mode, topicId, topicIds, scope, subjectId, count, difficulty, initQuiz]);

  // Load questions first, then init quiz.
  // Param-key change starts a *new* session (clears snapshot). Membership-only
  // AppData updates must not re-run this effect or wipe in-progress answers.
  const quizParamKey = [
    mode,
    topicId ?? '',
    (topicIds ?? []).slice().sort().join(','),
    scope ?? '',
    subjectId ?? '',
    String(count ?? ''),
    difficulty ?? '',
    String(wrongPool ?? false),
    String(timeLimit ?? ''),
  ].join('|');

  useEffect(() => {
    let cancelled = false;
    sessionRef.current = null;
    trackRef.current = null;
    setQuestionsLoadError(false);
    setRetakeEmpty(false);
    const load = async () => {
      setQuestionsLoading(true);
      try {
        if (mode === 'topic' && topicId) {
          await loadQuestionsForTopic(topicId);
        } else if (scope === 'subject' && subjectId) {
          await loadSubjectQuestions(subjectId as SubjectId);
        } else {
          await loadAllQuestions();
        }
      } catch (err) {
        console.error('Failed to load questions:', err);
        if (cancelled) return;
        setQuestionsLoading(false);
        setQuestionsLoadError(true);
        return;
      }
      if (cancelled) return;
      setQuestionsLoading(false);
      initQuiz();
    };
    load();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- keyed by quizParamKey
  }, [quizParamKey]);

  // ── Shared finish helper — side effects only outside setState updaters ──
  const finishQuiz = useCallback((s: QuizState, finalAnswers: AnswerRecord[]) => {
    if (recordedRef.current) return;
    recordedRef.current = true;
    const correctCount = finalAnswers.filter((a) => a.correct).length;
    const { perTopic, perDifficulty } = buildBreakdown(s.questions, finalAnswers);
    const effectiveTopicId = topicId ?? null;
    recordQuiz(effectiveTopicId, finalAnswers, s.questions, mode, subjectId, difficulty);
    setResults({
      score: correctCount,
      total: s.questions.length,
      answers: finalAnswers,
      questions: s.questions,
      perTopic,
      perDifficulty,
    });
    setFinished(true);
    clearQuizProgress();
  }, [recordQuiz, topicId, mode, subjectId, difficulty]);
  finishQuizRef.current = finishQuiz;

  // Pause wall-clock when exit modal is open so confirm time does not burn the quiz timer
  const exitPauseStartedRef = useRef<number | null>(null);
  useEffect(() => {
    if (showExitConfirm) {
      if (exitPauseStartedRef.current === null) exitPauseStartedRef.current = Date.now();
      return;
    }
    if (exitPauseStartedRef.current !== null) {
      const pausedMs = Date.now() - exitPauseStartedRef.current;
      exitPauseStartedRef.current = null;
      setState((prev) =>
        prev ? { ...prev, startTime: prev.startTime + pausedMs } : prev,
      );
    }
  }, [showExitConfirm]);

  // Timer: depends only on startTime / finished / timeLimit (finish via ref)
  useEffect(() => {
    if (!state || finished || showExitConfirm) return;
    if (timeLimit === 'none' || timeLimit === undefined) return;
    if (timeLimit === 'auto') return;
    if (typeof timeLimit !== 'number') return;

    const totalSeconds = timeLimit * 60;
    const interval = setInterval(() => {
      const currentState = stateRef.current;
      if (!currentState || finishedRef.current) return;
      const newElapsed = Math.floor((Date.now() - currentState.startTime) / 1000);
      if (newElapsed >= totalSeconds) {
        clearInterval(interval);
        setState((prev) => (prev ? { ...prev, elapsed: totalSeconds } : prev));
        const finalAnswers: AnswerRecord[] = [...currentState.answers];
        for (let i = finalAnswers.length; i < currentState.questions.length; i++) {
          finalAnswers.push({ questionId: currentState.questions[i].id, correct: false, selectedIndices: [] });
        }
        finishQuizRef.current(currentState, finalAnswers);
      } else {
        setState((prev) => (prev ? { ...prev, elapsed: newElapsed } : prev));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [state?.startTime, finished, timeLimit, showExitConfirm]);

  // Shared focus trap for exit confirmation modal
  useFocusTrap(exitModalRef, showExitConfirm, {
    onEscape: () => setShowExitConfirm(false),
  });
  useFocusTrap(keysHelpModalRef, showKeysHelp, {
    onEscape: () => setShowKeysHelp(false),
  });

  // ── All hooks MUST be above any early return (Rules of Hooks) ──
  const handleCheck = useCallback(() => {
    setState((prev) => {
      if (!prev || prev.selectedIndices.length === 0 || prev.checked) return prev;
      const q = prev.questions[prev.currentIdx];
      const correct = isCorrect(q, prev.selectedIndices);
      const record: AnswerRecord = {
        questionId: q.id,
        correct,
        selectedIndices: [...prev.selectedIndices],
      };
      const already = prev.answers.some((a) => a.questionId === q.id);
      return {
        ...prev,
        checked: true,
        answers: already
          ? prev.answers.map((a) => (a.questionId === q.id ? record : a))
          : [...prev.answers, record],
      };
    });
  }, []);

  const handleNext = useCallback(() => {
    lastTapRef.current = null;
    const snapshot = stateRef.current;
    if (!snapshot) return;
    if (snapshot.currentIdx + 1 >= snapshot.questions.length) {
      // Side effects outside setState
      finishQuiz(snapshot, snapshot.answers);
      return;
    }
    setState((prev) =>
      prev
        ? {
            ...prev,
            currentIdx: prev.currentIdx + 1,
            selectedIndices: [],
            checked: false,
          }
        : prev,
    );
  }, [finishQuiz]);

  /**
   * Option interaction:
   * - multi: always toggle selection (Check button still required)
   * - single / true_false:
   *   1st tap → select
   *   2nd tap on same option (after debounce) → check
   *   3rd tap (after checked) → next
   */
  const toggleOption = useCallback((idx: number) => {
    const s = stateRef.current;
    if (!s || s.questions.length === 0) return;
    const q = s.questions[s.currentIdx];
    const now = Date.now();

    if (s.checked) {
      const last = lastTapRef.current;
      if (last && now - last.at < TAP_DEBOUNCE_MS) return;
      lastTapRef.current = { idx, at: now };
      handleNext();
      return;
    }

    if (q.type === 'multi') {
      setState((prev) => {
        if (!prev || prev.checked) return prev;
        const exists = prev.selectedIndices.includes(idx);
        return {
          ...prev,
          selectedIndices: exists
            ? prev.selectedIndices.filter((i) => i !== idx)
            : [...prev.selectedIndices, idx],
        };
      });
      return;
    }

    if (q.type === 'fill_blank') {
      setState((prev) => (prev && !prev.checked ? { ...prev, selectedIndices: [idx] } : prev));
      return;
    }

    if (q.type === 'matching') {
      // idx is packed as optionIndex * MATCH_PACK + matchOptionIndex
      const { optionIdx, matchIdx } = unpackMatchSelect(idx);
      setState((prev) => {
        if (!prev || prev.checked) return prev;
        // Keep a dense array so length/every/some never skip holes
        const next =
          prev.selectedIndices.length === q.options.length
            ? [...prev.selectedIndices]
            : Array.from({ length: q.options.length }, () => -1);
        next[optionIdx] = matchIdx;
        return { ...prev, selectedIndices: next };
      });
      return;
    }

    const alreadySelected = s.selectedIndices.length === 1 && s.selectedIndices[0] === idx;
    if (alreadySelected) {
      const last = lastTapRef.current;
      if (last && last.idx === idx && now - last.at < TAP_DEBOUNCE_MS) return;
      lastTapRef.current = { idx, at: now };
      handleCheck();
      return;
    }

    lastTapRef.current = { idx, at: now };
    setState((prev) => (prev && !prev.checked ? { ...prev, selectedIndices: [idx] } : prev));
  }, [handleCheck, handleNext]);

  const handleExit = useCallback(() => {
    const s = stateRef.current;
    if (s && (s.answers.length > 0 || s.currentIdx > 0) && !finishedRef.current) {
      setShowExitConfirm(true);
    } else {
      exitToOrigin();
    }
  }, [exitToOrigin]);

  // Keyboard shortcuts
  useEffect(() => {
    if (finished) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (showExitConfirm) return;
      if (showKeysHelp) {
        if (e.key === 'Escape') {
          e.preventDefault();
          setShowKeysHelp(false);
        }
        return;
      }
      const s = stateRef.current;
      if (!s || s.questions.length === 0) return;
      const q = s.questions[s.currentIdx];

      if (e.key === 'Enter') {
        e.preventDefault();
        if (!s.checked) {
          if (s.selectedIndices.length > 0) handleCheck();
        } else {
          handleNext();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        handleExit();
      } else if (e.key === '?' || (e.key === '/' && e.shiftKey)) {
        e.preventDefault();
        setShowKeysHelp(true);
      } else if (!s.checked && q.type === 'multi') {
        if (['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(e.key)) {
          const idx = parseInt(e.key, 10) - 1;
          if (idx < q.options.length) toggleOption(idx);
        }
      } else if (!s.checked && (q.type === 'single' || q.type === 'true_false' || q.type === 'fill_blank')) {
        if (['1', '2', '3', '4'].includes(e.key)) {
          const idx = parseInt(e.key, 10) - 1;
          if (idx < q.options.length) toggleOption(idx);
        } else if (['a', 'b', 'c', 'd', 'A', 'B', 'C', 'D'].includes(e.key)) {
          const idx = e.key.toLowerCase().charCodeAt(0) - 97;
          if (idx < q.options.length) toggleOption(idx);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [finished, showExitConfirm, showKeysHelp, handleCheck, handleNext, handleExit, toggleOption]);

  // ── Early returns only AFTER all hooks ──
  const validationError = validateQuizParams({ mode, count, topicId, topicIds, scope, subjectId });
  if (validationError) {
    return (
      <PageContainer>
        <div className="flex items-center gap-2 mb-4"><BackButton fallbackToHome /><Breadcrumbs /></div>
        <Card className="p-8">
          <EmptyState
            title="Invalid quiz parameters"
            message={validationError}
            icon={<AlertTriangle className="w-12 h-12" />}
          />
          <div className="flex justify-center mt-4">
            <Button variant="secondary" onClick={() => navigate({ screen: 'practice', parent: null })}>
              Back to Practice
            </Button>
          </div>
        </Card>
      </PageContainer>
    );
  }

  if (!learningScope) {
    return (
      <PageContainer>
        <div className="flex items-center gap-2 mb-4"><BackButton fallbackToHome /><Breadcrumbs /></div>
        <Card className="p-8">
          <EmptyState
            title="No active workspace"
            message="Enroll in a track and set it active before starting a quiz."
            icon={<AlertTriangle className="w-12 h-12" />}
          />
          <div className="flex justify-center mt-4">
            <Button variant="secondary" onClick={() => navigate({ screen: 'home', parent: null })}>
              Go Home
            </Button>
          </div>
        </Card>
      </PageContainer>
    );
  }

  // Workspace scope: subject must belong to active track + exam profile
  if (subjectId && subjectId !== '' && !learningScope.subjectIds.has(subjectId as SubjectId)) {
    return (
      <PageContainer>
        <div className="flex items-center gap-2 mb-4"><BackButton fallbackToHome /><Breadcrumbs /></div>
        <Card className="p-8">
          <EmptyState
            title="Subject outside active workspace"
            message="This quiz targets a subject that is not in your current track or exam profile. Switch workspace or choose another subject."
            icon={<AlertTriangle className="w-12 h-12" />}
          />
          <div className="flex justify-center mt-4">
            <Button variant="secondary" onClick={() => navigate({ screen: 'practice', parent: null })}>
              Back to Practice
            </Button>
          </div>
        </Card>
      </PageContainer>
    );
  }

  // Topic mode without subjectId still must resolve inside workspace (selector fail-closed; UI message)
  if (mode === 'topic' && topicId) {
    const scopedTopic = sd.getTopicById(topicId);
    if (!scopedTopic) {
      return (
        <PageContainer>
          <div className="flex items-center gap-2 mb-4"><BackButton fallbackToHome /><Breadcrumbs /></div>
          <Card className="p-8">
            <EmptyState
              title="Topic outside active workspace"
              message="This topic is not available in your current track or exam profile."
              icon={<AlertTriangle className="w-12 h-12" />}
            />
            <div className="flex justify-center mt-4">
              <Button variant="secondary" onClick={() => navigate({ screen: 'practice', parent: null })}>
                Back to Practice
              </Button>
            </div>
          </Card>
        </PageContainer>
      );
    }
  }

  if (resumeOffer) {
    const subjectLabel = resumeOffer.subjectId
      ? subjectMap[resumeOffer.subjectId]?.title ?? resumeOffer.subjectId
      : resumeOffer.topicId
        ? (getTopic(resumeOffer.topicId)?.title ?? resumeOffer.topicId)
        : 'All Subjects';
    const modeLabel = resumeOffer.mode === 'topic' ? 'Topic Practice'
      : resumeOffer.mode === 'quick' ? 'Quick Practice'
      : resumeOffer.mode === 'mock' ? 'Mock Exam'
      : resumeOffer.mode === 'review' ? 'Review'
      : 'Challenge';
    return (
      <PageContainer>
        <div className="flex items-center gap-2 mb-4"><BackButton fallbackToHome /><Breadcrumbs /></div>
        <Card className="p-8">
          <EmptyState
            title={`Resume ${subjectLabel} · ${modeLabel}?`}
            message={`You have ${resumeOffer.answers.length} answered question${resumeOffer.answers.length !== 1 ? 's' : ''} saved from a previous session.`}
            icon={<RotateCcw className="w-12 h-12" />}
          />
          <div className="flex gap-3 justify-center mt-4">
            <Button variant="secondary" onClick={declineResume}>Start New</Button>
            <Button onClick={resumeQuiz}>Resume</Button>
          </div>
        </Card>
      </PageContainer>
    );
  }

  if (questionsLoading || !state) {
    if (questionsLoadError) {
      return (
        <PageContainer>
          <div className="flex items-center gap-2 mb-4"><BackButton fallbackToHome /><Breadcrumbs /></div>
          <Card className="p-8">
            <EmptyState title="Failed to load" message="Something went wrong while loading questions. Please try again." icon={<AlertTriangle className="w-12 h-12" />} />
            <div className="flex justify-center mt-4">
              <Button onClick={() => { setQuestionsLoadError(false); setQuestionsLoading(true); window.location.reload(); }}>Retry</Button>
            </div>
          </Card>
        </PageContainer>
      );
    }
    return <PageContainer><LoadingSpinner label="Loading questions…" /></PageContainer>;
  }

  if (state.questions.length === 0) {
    const emptyReturnTarget = mode === 'topic' && topicId
      ? () => navigate({ screen: 'topic', topicId, parent: null })
      : exitToOrigin;
    return (
      <PageContainer>
        <div className="flex items-center gap-2 mb-4"><BackButton fallbackToHome /><Breadcrumbs /></div>
        <Card className="p-8">
          <EmptyState title="No questions available" message={mode === 'topic' && topicId ? "This topic doesn't have any questions yet." : "No questions are available yet."} icon={<Brain className="w-12 h-12" />} />
          <div className="flex justify-center mt-4"><Button variant="secondary" onClick={emptyReturnTarget}>Back</Button></div>
        </Card>
      </PageContainer>
    );
  }

  if (finished && retakeEmpty) {
    return (
      <PageContainer>
        <div className="flex items-center gap-2 mb-4"><BackButton fallbackToHome /><Breadcrumbs /></div>
        <Card className="p-8">
          <EmptyState
            title="No wrong answers left"
            message="You've answered all previously wrong questions correctly. Great job!"
            icon={<CheckCircle2 className="w-12 h-12" />}
          />
          <div className="flex justify-center mt-4">
            <Button onClick={() => navigate({ screen: 'practice', parent: null })}>Back to Practice</Button>
          </div>
        </Card>
      </PageContainer>
    );
  }

  if (finished && results) {
    return (
      <QuizResults
        results={results}
        mode={mode}
        onRetry={handleRetry}
        onNavigateToTopic={(tid) => navigate({ screen: 'topic', topicId: tid, parent: null })}
        onPracticeTopic={(tid) => navigate({ screen: 'quiz', mode: 'topic', topicId: tid, count: 5 })}
        onNavigateToProgress={() => navigate({ screen: 'progress', parent: null })}
        onBack={exitToOrigin}
      />
    );
  }

  const currentQ = state.questions[state.currentIdx];
  const correctAns = isCorrect(currentQ, state.selectedIndices);
  const difficultyLabel = currentQ.difficulty.charAt(0).toUpperCase() + currentQ.difficulty.slice(1);
  const topicInfo = getTopic(currentQ.topicId);

  const mockShortPool = mode === 'mock' && state.questions.length > 0 && state.questions.length < 60;

  // Display remaining time when a numeric limit is set; otherwise elapsed
  const showTimer = timeLimit !== 'none' && timeLimit !== undefined && timeLimit !== 'auto';
  const totalSeconds = typeof timeLimit === 'number' ? timeLimit * 60 : 0;
  const displaySeconds = typeof timeLimit === 'number'
    ? Math.max(0, totalSeconds - state.elapsed)
    : state.elapsed;
  const timerUrgent = typeof timeLimit === 'number' && displaySeconds <= 60;

  return (
    <PageContainer className="max-w-3xl">
      {/* Compact focus header */}
      <div className="mb-4">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1 min-w-0">
            <button
              onClick={handleExit}
              className="flex items-center justify-center w-10 h-10 rounded-btn text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors shrink-0"
              aria-label="Exit quiz"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <span className="text-sm font-medium text-slate-700 truncate hidden sm:inline">Quiz</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setShowKeysHelp(true)}
              className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors"
              aria-label="Keyboard shortcuts"
              title="Keyboard shortcuts"
            >
              <Keyboard className="w-4 h-4" />
            </button>
            <span className="text-slate-500 text-sm font-medium">
              Q {state.currentIdx + 1} of {state.questions.length}
            </span>
          </div>
          {showTimer && (
            <span
              className={`flex items-center gap-1 text-sm font-mono ${timerUrgent ? 'text-danger-600 font-semibold' : 'text-slate-600'}`}
              role="timer"
              aria-live={timerUrgent ? 'assertive' : 'off'}
              aria-atomic="true"
            >
              <Clock className="w-4 h-4" aria-hidden />
              <span className="sr-only">Time remaining </span>
              {Math.floor(displaySeconds / 60)}:{String(displaySeconds % 60).padStart(2, '0')}
            </span>
          )}
        </div>
        {/* ENHANCEMENT 2B: progress by answers completed */}
        {mockShortPool && (
          <p className="text-warning-700 bg-warning-50 border border-warning-100 rounded-btn px-3 py-2 text-xs mb-2">
            Only {state.questions.length} questions available for this mock (full mock targets 60). Continuing with the full available set.
          </p>
        )}
        <ProgressBar value={state.answers.length} max={state.questions.length} color="sky" />
      </div>

      {/* Topic + difficulty + source citation */}
      {topicInfo && (
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-slate-100 text-slate-700">
            Topic: {topicInfo.title}
          </span>
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${
              currentQ.difficulty === 'easy'
                ? 'bg-success-100 text-success-700'
                : currentQ.difficulty === 'medium'
                  ? 'bg-warning-100 text-warning-700'
                  : 'bg-danger-100 text-danger-700'
            }`}
          >
            {difficultyLabel}
          </span>
          {currentQ.sourceCitation && (
            <span className="text-xs text-slate-500 italic">{currentQ.sourceCitation}</span>
          )}
        </div>
      )}

      {/* Question */}
      <Card className="p-3.5 sm:p-5 sm:p-6 mb-4">
        <p className="text-slate-900 text-lg font-medium leading-relaxed mb-5">{currentQ.question}</p>
        {currentQ.type === 'matching' ? (
          <MatchingOptions question={currentQ} selectedIndices={state.selectedIndices} checked={state.checked} onSelect={toggleOption} />
        ) : (
        <div className="space-y-2" role={currentQ.type === 'multi' ? 'group' : 'radiogroup'} aria-label="Answer options">
          {currentQ.options.map((opt, idx) => {
            const isSelected = state.selectedIndices.includes(idx);
            const isCorrectOption =
              currentQ.type === 'multi'
                ? (currentQ.correctAnswer as number[]).includes(idx)
                : currentQ.correctAnswer === idx;
            let bgClass = 'bg-white border-slate-200 hover:border-brand-300 hover:bg-brand-50/50';
            if (state.checked) {
              if (isCorrectOption) bgClass = 'bg-success-50 border-success-500';
              else if (isSelected && !isCorrectOption) bgClass = 'bg-danger-50 border-danger-500';
              else bgClass = 'bg-white border-slate-200 opacity-60';
            } else if (isSelected) {
              bgClass = 'bg-brand-50 border-brand-500';
            }
            const ariaExtra = state.checked
              ? isCorrectOption
                ? ' (correct)'
                : isSelected
                  ? ' (your selection, incorrect)'
                  : ''
              : '';
            // Multi stays disabled after check; single allows 3rd-tap → next
            const optionDisabled = state.checked && currentQ.type === 'multi';
            return (
              <button
                key={idx}
                onClick={() => toggleOption(idx)}
                disabled={optionDisabled}
                role={currentQ.type === 'multi' ? 'checkbox' : 'radio'}
                aria-checked={isSelected}
                aria-label={`Option ${idx + 1}: ${opt}${ariaExtra}${state.checked && currentQ.type !== 'multi' ? ' — tap to continue' : ''}`}
                className={`w-full flex items-center gap-3 p-3.5 rounded-btn border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1 text-left transition-all ${bgClass} ${state.checked && currentQ.type !== 'multi' ? 'cursor-pointer' : ''}`}
              >
                <div
                  className={`w-6 h-6 shrink-0 flex items-center justify-center text-xs font-bold ${
                    currentQ.type === 'multi' ? 'rounded' : 'rounded-full'
                  } ${
                    isSelected || (state.checked && isCorrectOption)
                      ? state.checked && isCorrectOption
                        ? 'bg-success-500 text-white'
                        : state.checked && isSelected && !isCorrectOption
                          ? 'bg-danger-500 text-white'
                          : 'bg-brand-500 text-white'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {currentQ.type === 'multi' ? (isSelected ? <Check className="w-3 h-3" /> : '') : String.fromCharCode(65 + idx)}
                </div>
                <span className="text-slate-800 text-sm flex-1">{opt}</span>
                {state.checked && isCorrectOption && <CheckCircle2 className="w-5 h-5 text-success-500 shrink-0" />}
                {state.checked && isSelected && !isCorrectOption && <XCircle className="w-5 h-5 text-danger-500 shrink-0" />}
              </button>
            );
          })}
        </div>
        )}
      </Card>

      {/* After-answer feedback — live region + multi-correct + tap to advance */}
      {state.checked && (
        <div
          className={`rounded-card border bg-white shadow-card p-3.5 sm:p-5 mb-4 cursor-pointer select-none ${correctAns ? 'border-success-100 hover:border-success-100' : 'border-danger-100 hover:border-danger-100'}`}
          role="button"
          tabIndex={0}
          aria-label="Tap or press Enter to continue to next question"
          onClick={handleNext}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleNext(); } }}
          title="Tap or press Enter to continue"
        >
          <div className="flex items-center gap-2 mb-3">
            {correctAns ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-success-500" />
                <span className="font-semibold text-success-700">Correct!</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-danger-500" />
                <span className="font-semibold text-danger-700">Incorrect</span>
              </>
            )}
            <span className="ml-auto text-xs text-slate-400 font-medium">Tap or press Enter to continue →</span>
          </div>
          {!correctAns && (currentQ.type === 'multi') && (
            <div className="mb-3 space-y-1">
              <p className="text-slate-600 text-sm">
                You answered:{' '}
                <span className="font-medium text-danger-600">
                  {state.selectedIndices.map((i) => currentQ.options[i]).join(', ') || 'None'}
                </span>
              </p>
              <p className="text-slate-600 text-sm">
                Correct answer(s):{' '}
                <span className="font-medium text-success-600">
                  {(currentQ.correctAnswer as number[]).map((i) => currentQ.options[i]).join(', ')}
                </span>
              </p>
            </div>
          )}
          {!correctAns && currentQ.type === 'matching' && (
            <div className="mb-3 space-y-1">
              <p className="text-slate-600 text-sm">
                You matched:{' '}
                <span className="font-medium text-danger-600">
                  {currentQ.options.map((opt, i) => `${opt} → ${currentQ.matchOptions?.[state.selectedIndices[i] ?? -1] ?? '—'}`).join(', ')}
                </span>
              </p>
              <p className="text-slate-600 text-sm">
                Correct matches:{' '}
                <span className="font-medium text-success-600">
                  {currentQ.options.map((opt, i) => `${opt} → ${currentQ.matchOptions?.[(currentQ.correctAnswer as number[])[i]] ?? '—'}`).join(', ')}
                </span>
              </p>
            </div>
          )}
          {!correctAns && currentQ.type !== 'multi' && currentQ.type !== 'matching' && (
            <div className="mb-3 space-y-1">
              <p className="text-slate-600 text-sm">
                You answered:{' '}
                <span className="font-medium text-danger-600">
                  {currentQ.options[state.selectedIndices[0]] ?? 'None'}
                </span>
              </p>
              <p className="text-slate-600 text-sm">
                Correct answer:{' '}
                <span className="font-medium text-success-600">
                  {currentQ.options[currentQ.correctAnswer as number]}
                </span>
              </p>
            </div>
          )}
          <p className="text-slate-600 text-sm leading-relaxed">{currentQ.explanation}</p>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex gap-3">
        {!state.checked ? (
          <Button onClick={handleCheck} disabled={state.selectedIndices.length === 0 || (currentQ.type === 'matching' && (state.selectedIndices.length !== currentQ.options.length || state.selectedIndices.some((i) => i === undefined || i === null || i < 0)))} className="flex-1">
            Check Answer
          </Button>
        ) : (
          <Button onClick={handleNext} className="flex-1">
            {state.currentIdx + 1 >= state.questions.length ? 'View Results' : 'Next Question'}
            <ChevronRight className="w-4 h-4 inline ml-1" />
          </Button>
        )}
      </div>

      {/* Exit confirmation */}
      
      {showKeysHelp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40" onClick={() => setShowKeysHelp(false)}>
          <div
            ref={keysHelpModalRef}
            className="bg-white rounded-2xl shadow-xl border border-slate-200 max-w-sm w-full p-5"
            role="dialog"
            aria-modal="true"
            aria-labelledby="keys-help-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3">
              <h2 id="keys-help-title" className="font-semibold text-slate-900 text-base flex items-center gap-2">
                <Keyboard className="w-4 h-4 text-brand-600" />
                Keyboard shortcuts
              </h2>
              <button type="button" onClick={() => setShowKeysHelp(false)} className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100" aria-label="Close">
                <X className="w-4 h-4" />
              </button>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex justify-between gap-4"><span>Select option</span><kbd className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">A–D</kbd> <kbd className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">1–4</kbd></li>
              <li className="flex justify-between gap-4"><span>Multi-select toggle</span><kbd className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">1–9</kbd></li>
              <li className="flex justify-between gap-4"><span>Check / Next</span><kbd className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Enter</kbd></li>
              <li className="flex justify-between gap-4"><span>Exit quiz</span><kbd className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Esc</kbd></li>
              <li className="flex justify-between gap-4"><span>This help</span><kbd className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">?</kbd></li>
            </ul>
            <p className="text-xs text-slate-500 mt-3">Matching questions still use tap/click. Shortcuts are disabled while this dialog or the exit prompt is open.</p>
            <Button className="w-full mt-4" onClick={() => setShowKeysHelp(false)}>Got it</Button>
          </div>
        </div>
      )}

      {showExitConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setShowExitConfirm(false)}
        >
          <div
            ref={exitModalRef}
            className="max-w-sm w-full p-6 rounded-card border border-slate-200 bg-white shadow-lg"
            id="exit-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-btn bg-warning-100 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-warning-500" />
              </div>
              <h3 id="exit-modal-title" className="font-bold text-slate-900 text-lg">Exit quiz?</h3>
            </div>
            <p className="text-slate-600 text-sm mb-5">
              You&apos;ve answered {state.answers.length} of {state.questions.length} questions. Your progress will be lost.
            </p>
            <div className="flex gap-3">
              <Button variant="secondary" onClick={() => setShowExitConfirm(false)} className="flex-1">
                Stay
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  setShowExitConfirm(false);
                  clearQuizProgress();
                  exitToOrigin();
                }}
                className="flex-1"
              >
                Exit
              </Button>
            </div>
          </div>
        </div>
      )}
    </PageContainer>
  );
}

function QuizResults({
  results,
  mode,
  onRetry,
  onNavigateToTopic,
  onNavigateToProgress,
  onPracticeTopic,
  onBack,
}: {
  results: ResultsData;
  mode: PracticeMode;
  onRetry: () => void;
  onNavigateToTopic: (topicId: string) => void;
  onNavigateToProgress: () => void;
  onPracticeTopic: (topicId: string) => void;
  onBack: () => void;
}) {
  const { navigate } = useRouter();
  const tutorReady = isTutorAvailable();
  const { data } = useData();
  const [explainSession, setExplainSession] = useState<{
    topicId: string;
    topicTitle: string;
    topicContext?: string;
    studentContext?: string;
    message: string;
  } | null>(null);
  const pct = results.total > 0 ? Math.round((results.score / results.total) * 100) : 0;
  const topicEntries = Object.entries(results.perTopic);
  const sortedByAccuracy = topicEntries
    .map(([tid, { correct, total }]) => ({
      topicId: tid,
      accuracy: total > 0 ? Math.round((correct / total) * 100) : 0,
      correct,
      total,
    }))
    .sort((a, b) => b.accuracy - a.accuracy);
  const weakTopics = sortedByAccuracy.filter((t) => t.accuracy < 70);

  type ReviewFilter = 'all' | 'wrong' | 'correct';
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>('all');
  const reviewItems = useMemo(() => {
    return results.answers
      .map((ans, idx) => ({ ans, idx, q: results.questions[idx] }))
      .filter((row) => row.q)
      .filter((row) => {
        if (reviewFilter === 'wrong') return !row.ans.correct;
        if (reviewFilter === 'correct') return row.ans.correct;
        return true;
      });
  }, [results.answers, results.questions, reviewFilter]);
  const wrongCount = results.answers.filter((a) => !a.correct).length;
  const correctCount = results.answers.filter((a) => a.correct).length;

  const modeLabel =
    mode === 'topic'
      ? 'Topic Quiz'
      : mode === 'quick'
        ? 'Quick Practice'
        : mode === 'mock'
          ? 'Mock Exam'
          : mode === 'review'
            ? 'Review Wrong Answers'
            : 'Challenge Mode';

  const handleDone = () => onBack();
  const doneLabel = 'Done';

  return (
    <PageContainer className="max-w-3xl">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xs font-medium text-slate-500">{modeLabel}</p>
          <h1 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">Results</h1>
        </div>
        <HomeButton />
      </div>

      {/* Score summary */}
      <Card className="p-5 sm:p-6 mb-4">
        <p className="text-slate-500 text-sm font-medium mb-2">{modeLabel}</p>
        <div className="relative inline-flex items-center justify-center mb-3">
          <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="52" fill="none" stroke="#e2e8f0" strokeWidth="10" />
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke={pct >= 75 ? '#10b981' : pct >= 50 ? '#f59e0b' : '#ef4444'}
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={`${(pct / 100) * 327} 327`}
              className="transition-all duration-700"
            />
          </svg>
          <div className="absolute">
            <span className="text-3xl font-bold text-slate-900 font-mono tabular-nums">{pct}%</span>
          </div>
        </div>
        <p className="text-slate-700 font-semibold text-lg">
          <span className="font-mono tabular-nums">{results.score}/{results.total}</span> correct
        </p>
        <p className="text-slate-500 text-sm mt-1"><span className="font-mono tabular-nums">{results.total - results.score}</span> incorrect</p>
      </Card>

      {/* Performance breakdown */}
      <Card className="p-3.5 sm:p-5 mb-4 bg-slate-50/50">
        <h3 className="font-semibold text-slate-900 mb-4">Performance Breakdown</h3>
        {sortedByAccuracy.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">By Topic</p>
            <div className="space-y-2">
              {sortedByAccuracy.map((t) => {
                const topicInfo = getTopic(t.topicId);
                if (!topicInfo) return null;
                return (
                  <div key={t.topicId} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0">
                      {t.accuracy >= 70 ? (
                        <CheckCircle2 className="w-4 h-4 text-success-500 shrink-0" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-warning-500 shrink-0" />
                      )}
                      <span className="text-slate-700 text-sm truncate">{topicInfo.title}</span>
                    </div>
                    <span
                      className={`text-sm font-bold shrink-0 ml-2 ${
                        t.accuracy >= 75 ? 'text-success-600' : t.accuracy >= 50 ? 'text-warning-600' : 'text-danger-600'
                      }`}
                    >
                      {t.accuracy}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">By Difficulty</p>
          <div className="grid grid-cols-3 gap-2 max-w-xs">
            {(['easy', 'medium', 'hard'] as const).map((diff) => {
              const d = results.perDifficulty[diff];
              if (!d) return null;
              const dPct = d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0;
              return (
                <div key={diff} className="text-center p-2 rounded-lg bg-white">
                  <p className="text-xs text-slate-500 capitalize">{diff}</p>
                  <p
                    className={`text-lg font-bold ${
                      dPct >= 75 ? 'text-success-600' : dPct >= 50 ? 'text-warning-600' : 'text-danger-600'
                    }`}
                  >
                    {dPct}%
                  </p>
                  <p className="text-xs text-slate-400">
                    {d.correct}/{d.total}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      {/* Recommendations */}
      {weakTopics.length > 0 && (
        <div className="space-y-2 mb-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
            {mode === 'mock' ? 'Biggest score-gain focus' : 'Recommendations'}
          </p>
          {mode === 'mock' && (
            <p className="text-xs text-slate-500 -mt-1 mb-1">
              Estimated study impact from this mock — not official marks. Fix these first.
            </p>
          )}
          {weakTopics.slice(0, 3).map((t) => {
            const topicInfo = getTopic(t.topicId);
            if (!topicInfo) return null;
            if (t.accuracy < 50) {
              return (
                <Card key={t.topicId} className="p-4 border-l-4 border-l-red-500">
                  <p className="text-slate-900 text-sm font-medium">
                    {topicInfo.title} — {t.accuracy}%
                  </p>
                  <p className="text-slate-500 text-xs mt-1 mb-2">Practice 5 questions on this topic</p>
                  <button
                    onClick={() => onPracticeTopic(t.topicId)}
                    className="inline-flex items-center gap-1 text-danger-600 text-sm font-medium hover:text-danger-700"
                  >
                    <Target className="w-4 h-4" /> Practice this topic
                  </button>
                </Card>
              );
            }
            return (
              <Card key={t.topicId} className="p-4 border-l-4 border-l-amber-500">
                <p className="text-slate-900 text-sm font-medium">
                  {topicInfo.title} — {t.accuracy}%
                </p>
                <p className="text-slate-500 text-xs mt-1 mb-2">Re-read the material to strengthen understanding</p>
                <button
                  onClick={() => onNavigateToTopic(t.topicId)}
                  className="inline-flex items-center gap-1 text-warning-600 text-sm font-medium hover:text-warning-700"
                >
                  <BookOpen className="w-4 h-4" /> Re-read topic
                </button>
              </Card>
            );
          })}
        </div>
      )}

      {weakTopics.length === 0 && pct >= 75 && (
        <Card className="p-4 mb-4 border-l-4 border-l-violet-500 bg-violet-50/50">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-5 h-5 text-violet-600" />
            <p className="text-slate-900 text-sm font-medium">Great work! Try Challenge mode for harder questions.</p>
          </div>
        </Card>
      )}

      {mode === 'mock' && (
        <Card className="p-4 mb-4 border-l-4 border-l-brand-500">
          <button
            onClick={onNavigateToProgress}
            className="flex items-center gap-2 text-brand-600 text-sm font-medium hover:text-brand-700"
          >
            <TrendingUp className="w-4 h-4" /> See your full progress
          </button>
        </Card>
      )}

      {/* Per-question review with filter + jump */}
      {results.answers.length > 0 && results.questions.length > 0 && (
        <Card className="p-3.5 sm:p-5 mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
            <h3 className="font-semibold text-slate-900">Review Answers</h3>
            <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter reviewed answers">
              {([
                ['all', `All (${results.answers.length})`],
                ['wrong', `Incorrect (${wrongCount})`],
                ['correct', `Correct (${correctCount})`],
              ] as const).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setReviewFilter(key)}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
                    reviewFilter === key
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {results.answers.length > 8 && (
            <div className="flex flex-wrap gap-1 mb-3 max-h-20 overflow-y-auto" aria-label="Jump to question">
              {results.answers.map((ans, idx) => {
                if (!results.questions[idx]) return null;
                if (reviewFilter === 'wrong' && ans.correct) return null;
                if (reviewFilter === 'correct' && !ans.correct) return null;
                return (
                  <button
                    key={`jump-${results.questions[idx].id}`}
                    type="button"
                    onClick={() => {
                      document.getElementById(`review-q-${idx}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }}
                    className={`w-7 h-7 rounded-md text-[11px] font-mono font-semibold tabular-nums ${
                      ans.correct
                        ? 'bg-success-50 text-success-700 border border-success-100'
                        : 'bg-danger-50 text-danger-700 border border-danger-100'
                    }`}
                    title={`Question ${idx + 1}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          )}

          <div className="space-y-3 max-h-96 overflow-y-auto">
            {reviewItems.length === 0 ? (
              <p className="text-sm text-slate-500 py-4 text-center">No answers in this filter.</p>
            ) : (
              reviewItems.map(({ ans, idx, q }) => {
                const isOk = ans.correct;
                const yourText =
                  ans.selectedIndices.length === 0
                    ? 'No answer (time expired)'
                    : q.type === 'matching'
                      ? q.options.map((opt, i) => `${opt} → ${q.matchOptions?.[ans.selectedIndices[i] ?? -1] ?? '—'}`).join(', ')
                      : ans.selectedIndices.map((i) => q.options[i]).join(', ');
                const correctText =
                  q.type === 'multi'
                    ? (q.correctAnswer as number[]).map((i) => q.options[i]).join(', ')
                    : q.type === 'matching'
                      ? q.options.map((opt, i) => `${opt} → ${q.matchOptions?.[(q.correctAnswer as number[])[i]] ?? '—'}`).join(', ')
                      : q.options[q.correctAnswer as number];
                return (
                  <div key={q.id} id={`review-q-${idx}`} className="border-b border-slate-100 pb-3 last:border-b-0 last:pb-0 scroll-mt-2">
                    <div className="flex items-start gap-2 mb-1">
                      {isOk ? (
                        <CheckCircle2 className="w-4 h-4 text-success-500 mt-0.5 shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-danger-500 mt-0.5 shrink-0" />
                      )}
                      <p className="text-sm text-slate-700 flex-1">
                        <span className="text-slate-400 font-medium mr-1">Q{idx + 1}.</span>
                        {q.question}
                      </p>
                    </div>
                    {!isOk && (
                      <div className="ml-6 text-xs text-slate-500 space-y-0.5">
                        <p>
                          Your answer: <span className="text-danger-600 font-medium">{yourText}</span>
                        </p>
                        <p>
                          Correct: <span className="text-success-600 font-medium">{correctText}</span>
                        </p>
                        {tutorReady && (
                          <button
                            type="button"
                            className="mt-1.5 inline-flex items-center gap-1.5 rounded-lg border border-sky-200 bg-sky-50 px-2.5 py-1 text-[11px] font-semibold text-sky-700 hover:bg-sky-100 hover:border-sky-300 transition-colors"
                            onClick={() => {
                              const message = buildMistakePrompt(q, ans.selectedIndices);
                              const topic = getTopic(q.topicId);
                              const topicQs = results.questions.filter((qq) => qq.topicId === q.topicId);
                              setExplainSession({
                                topicId: q.topicId,
                                topicTitle: topic?.title ?? q.topicId,
                                topicContext: topic ? buildTopicContext(topic) : undefined,
                                studentContext: buildStudentContext(data, q.topicId, topicQs),
                                message,
                              });
                            }}
                          >
                            <Sparkles className="w-3 h-3" />
                            Explain with AI Tutor
                          </button>
                        )}
                      </div>
                    )}
                    {q.explanation && (
                      <p className="ml-6 text-xs text-slate-500 italic mt-1">{q.explanation}</p>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </Card>
      )}

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button variant="secondary" onClick={onRetry} className="flex-1">
          <RotateCcw className="w-4 h-4 inline mr-1" /> Retake
        </Button>
        <Button onClick={handleDone} className="flex-1">
          {doneLabel}
        </Button>
      </div>

      {/* In-place AI tutor: explains wrong answers without leaving quiz results */}
      {explainSession && (
        <AiTutorChat
          topicId={explainSession.topicId}
          topicTitle={explainSession.topicTitle}
          topicContext={explainSession.topicContext}
          studentContext={explainSession.studentContext}
          initialMessage={explainSession.message}
          autoOpen
          onInitialMessageConsumed={() => {
            /* keep session so panel stays open; clear message only via key remount */
          }}
          key={explainSession.topicId + explainSession.message.slice(0, 40)}
        />
      )}
    </PageContainer>
  );
}

function MatchingOptions({ question, selectedIndices, checked, onSelect }: {
  question: Question;
  selectedIndices: number[];
  checked: boolean;
  onSelect: (idx: number) => void;
}) {
  const matchOptions = question.matchOptions ?? [];
  const correctAnswer = question.correctAnswer as number[];

  return (
    <div className="space-y-3" role="group" aria-label="Match items">
      {question.options.map((opt, optIdx) => {
        const selectedMatch = selectedIndices[optIdx];
        const correctMatch = correctAnswer[optIdx];
        const isCorrectMatch = checked && selectedMatch === correctMatch;

        let rowClass = 'bg-white border-slate-200';
        if (checked) {
          if (isCorrectMatch) rowClass = 'bg-success-50 border-success-500';
          else if (selectedMatch !== undefined) rowClass = 'bg-danger-50 border-danger-500';
        }

        return (
          <div key={optIdx} className={`flex items-center gap-3 p-3 rounded-btn border-2 ${rowClass}`}>
            <span className="text-slate-800 text-sm font-medium flex-1 min-w-0">{opt}</span>
            <span className="text-slate-400 text-xs">→</span>
            <select
              value={selectedMatch ?? ''}
              disabled={checked}
              onChange={(e) => onSelect(packMatchSelect(optIdx, parseInt(e.target.value, 10)))}
              className="flex-1 min-w-0 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-brand-400 focus:outline-none disabled:opacity-60"
              aria-label={`Match for ${opt}`}
            >
              <option value="" disabled>Choose...</option>
              {matchOptions.map((mOpt, mIdx) => (
                <option key={mIdx} value={mIdx}>{mOpt}</option>
              ))}
            </select>
            {checked && isCorrectMatch && <CheckCircle2 className="w-5 h-5 text-success-500 shrink-0" />}
            {checked && !isCorrectMatch && selectedMatch !== undefined && <XCircle className="w-5 h-5 text-danger-500 shrink-0" />}
          </div>
        );
      })}
    </div>
  );
}
