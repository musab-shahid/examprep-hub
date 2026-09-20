import { useState, useEffect, useCallback, useRef } from 'react';
import { CheckCircle, XCircle, ChevronRight, RotateCcw, ArrowLeft, Clock, Brain, AlertTriangle, BookOpen, Dumbbell, TrendingUp, Target } from 'lucide-react';
import { useRouter } from '@/router';
import { useData } from '@/hooks/useData';
import { allQuestions, questionsByTopic } from '@/data/questions';
import { getTopic } from '@/data/topics';
import { sectionMap } from '@/data/sections';
import { useSubjectSelection } from '@/contexts/subject-selection-context';
import { subjectsByTrack } from '@/data/subjects';
import { subjectMap } from '@/data/subjects';
import { BackButton, Breadcrumbs, HomeButton } from '@/components/layout/Breadcrumbs';
import { PageContainer, Card, ProgressBar, Button, EmptyState, LoadingSpinner } from '@/components/ui';
import { loadAllQuestions, loadSubjectQuestions, loadQuestionsForTopic } from '@/data/lazy-data';
import type { Question, DifficultyFilter, PracticeMode, TimeLimitSetting, SubjectId } from '@/types';

const VALID_MODES: PracticeMode[] = ['topic', 'quick', 'mock', 'review', 'challenge'];
const VALID_SUBJECT_IDS = Object.keys(subjectMap);

function validateQuizParams(params: {
  mode?: PracticeMode;
  count?: number;
  topicId?: string;
  subjectId?: string;
}): string | null {
  if (!params.mode || !VALID_MODES.includes(params.mode)) {
    return `Invalid quiz mode: "${params.mode ?? 'undefined'}". Expected one of: ${VALID_MODES.join(', ')}.`;
  }
  if (params.count !== undefined) {
    if (!Number.isInteger(params.count) || params.count < 1 || params.count > 999) {
      return `Invalid question count: "${params.count}". Expected a positive integer between 1 and 999.`;
    }
  }
  if (params.topicId !== undefined && params.topicId !== '' && !getTopic(params.topicId)) {
    return `Invalid topic ID: "${params.topicId}" does not exist.`;
  }
  if (params.subjectId !== undefined && params.subjectId !== '' && !VALID_SUBJECT_IDS.includes(params.subjectId)) {
    return `Invalid subject ID: "${params.subjectId}" does not exist.`;
  }
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

function pickQuestions(
  mode: PracticeMode,
  topicId?: string,
  topicIds?: string[],
  scope?: 'subject' | 'all',
  subjectId?: string,
  count?: number,
  difficulty?: DifficultyFilter,
  wrongPool?: boolean,
  questionResults?: Record<string, { correct: boolean; timestamp: number }>,
  track?: 'fpsc' | 'hat',
): Question[] {
  const fullPool = allQuestions();
  let pool: Question[];
  if (mode === 'topic' && topicId) {
    pool = questionsByTopic(topicId);
  } else if (topicIds && topicIds.length > 0) {
    const idSet = new Set(topicIds);
    pool = fullPool.filter((q) => idSet.has(q.topicId));
  } else if (scope === 'subject' && subjectId) {
    pool = fullPool.filter((q) => sectionMap[q.sectionId]?.subjectId === subjectId);
  } else {
    const trackSubjectIds = new Set(subjectsByTrack(track).map((s) => s.id));
    pool = fullPool.filter((q) => trackSubjectIds.has(sectionMap[q.sectionId]?.subjectId));
  }
  if (wrongPool && questionResults) {
    const wrongIds = new Set(Object.entries(questionResults).filter(([, r]) => !r.correct).map(([qid]) => qid));
    pool = pool.filter((q) => wrongIds.has(q.id));
  }
  if (difficulty && difficulty !== 'any') {
    pool = pool.filter((q) => q.difficulty === difficulty);
  }
  const targetCount = count ?? (mode === 'mock' ? 60 : 10);
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
    // Fill from leftover if a difficulty band is short
    if (picked.length < targetCount) {
      const pickedIds = new Set(picked.map((q) => q.id));
      const leftover = pool.filter((q) => !pickedIds.has(q.id));
      const need = targetCount - picked.length;
      picked.push(...shuffleArray(leftover).slice(0, need));
    }
    return shuffleArray(picked);
  }
  return shuffleArray(pool).slice(0, Math.min(targetCount, pool.length));
}

function isCorrect(question: Question, selectedIndex: number[]): boolean {
  if (question.type === 'multi') {
    const correct = [...(question.correctAnswer as number[])].sort();
    const selected = [...selectedIndex].sort();
    return correct.length === selected.length && correct.every((v, i) => v === selected[i]);
  }
  if (question.type === 'fill_blank') {
    if (selectedIndex.length === 0) return false;
    const correctIdx = question.correctAnswer as number;
    return selectedIndex[0] === correctIdx;
  }
  if (question.type === 'matching') {
    const correct = question.correctAnswer as number[];
    if (selectedIndex.length !== correct.length) return false;
    return selectedIndex.every((v, i) => v === correct[i]);
  }
  return selectedIndex.length === 1 && selectedIndex[0] === question.correctAnswer;
}

type AnswerRecord = {
  questionId: string;
  correct: boolean;
  selectedIndices: number[];
};

interface QuizState {
  questions: Question[];
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
  const perTopic: Record<string, { correct: number; total: number }> = {};
  const perDifficulty: Record<string, { correct: number; total: number }> = {};
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    if (!perTopic[q.topicId]) perTopic[q.topicId] = { correct: 0, total: 0 };
    perTopic[q.topicId].total++;
    if (answers[i]?.correct) perTopic[q.topicId].correct++;
    if (!perDifficulty[q.difficulty]) perDifficulty[q.difficulty] = { correct: 0, total: 0 };
    perDifficulty[q.difficulty].total++;
    if (answers[i]?.correct) perDifficulty[q.difficulty].correct++;
  }
  return { perTopic, perDifficulty };
}

const QUIZ_PROGRESS_KEY = 'examprep-quiz-progress';

interface SavedQuizProgress {
  questionIds: string[];
  answers: AnswerRecord[];
  currentIdx: number;
  mode: PracticeMode;
  topicId?: string;
  subjectId?: string;
}

function saveQuizProgress(state: QuizState, mode: PracticeMode, topicId?: string, subjectId?: string): void {
  try {
    const progress: SavedQuizProgress = {
      questionIds: state.questions.map((q) => q.id),
      answers: state.answers,
      currentIdx: state.currentIdx,
      mode,
      topicId,
      subjectId,
    };
    localStorage.setItem(QUIZ_PROGRESS_KEY, JSON.stringify(progress));
  } catch { /* ignore */ }
}

function loadQuizProgress(): SavedQuizProgress | null {
  try {
    const raw = localStorage.getItem(QUIZ_PROGRESS_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.questionIds) || !Array.isArray(parsed.answers)) return null;
    return parsed as SavedQuizProgress;
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
  count?: number;
  difficulty?: DifficultyFilter;
  timeLimit?: TimeLimitSetting;
  wrongPool?: boolean;
}) {
  const { back, navigate } = useRouter();
  const { recordQuiz, data } = useData();
  const { activeTrack } = useSubjectSelection();
  const [state, setState] = useState<QuizState | null>(null);
  const [finished, setFinished] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [results, setResults] = useState<ResultsData | null>(null);

  // Snapshot question results at mount so recordQuiz updating data doesn't re-init the quiz
  const questionResultsSnapshot = useRef(data.questionResults);
  questionResultsSnapshot.current = data.questionResults;

  // Refs for stable handlers in keyboard / timer effects
  const stateRef = useRef(state);
  stateRef.current = state;
  const finishedRef = useRef(finished);
  finishedRef.current = finished;
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
    const qs = pickQuestions(mode, topicId, topicIds, scope, subjectId, count, difficulty, wrongPool, questionResultsSnapshot.current, activeTrack);
    setState({ questions: qs, currentIdx: 0, selectedIndices: [], checked: false, answers: [], startTime: Date.now(), elapsed: 0 });
    setFinished(false);
    setResults(null);
  }, [mode, topicId, topicIds, scope, subjectId, count, difficulty, wrongPool, activeTrack]);

  // Check for saved quiz progress on mount
  useEffect(() => {
    const saved = loadQuizProgress();
    if (saved && saved.answers.length > 0 && saved.mode === mode) {
      setResumeOffer(saved);
    }
  }, [mode]);

  // Save quiz progress whenever answers or currentIdx changes
  useEffect(() => {
    if (state && !finished && state.questions.length > 0) {
      saveQuizProgress(state, mode, topicId, subjectId);
    }
  }, [state?.answers, state?.currentIdx, finished, mode, topicId, subjectId]);

  const resumeQuiz = useCallback(() => {
    const saved = resumeOffer;
    if (!saved) return;
    setResumeOffer(null);
    const allQs = allQuestions();
    const qMap = new Map(allQs.map((q) => [q.id, q]));
    const restoredQuestions = saved.questionIds.map((id) => qMap.get(id)).filter((q): q is Question => q !== undefined);
    if (restoredQuestions.length === 0) {
      clearQuizProgress();
      initQuiz();
      return;
    }
    recordedRef.current = false;
    setState({
      questions: restoredQuestions,
      currentIdx: Math.min(saved.currentIdx, restoredQuestions.length - 1),
      selectedIndices: [],
      checked: false,
      answers: saved.answers,
      startTime: Date.now(),
      elapsed: 0,
    });
    setFinished(false);
    setResults(null);
    setQuestionsLoading(false);
  }, [resumeOffer, initQuiz]);

  const declineResume = useCallback(() => {
    setResumeOffer(null);
    clearQuizProgress();
  }, []);

  const handleRetry = useCallback(() => {
    if (wrongPool) {
      const pool = pickQuestions(mode, topicId, topicIds, scope, subjectId, count, difficulty, true, data.questionResults, activeTrack);
      if (pool.length === 0) {
        setRetakeEmpty(true);
        return;
      }
    }
    setRetakeEmpty(false);
    initQuiz();
  }, [wrongPool, data.questionResults, mode, topicId, topicIds, scope, subjectId, count, difficulty, initQuiz, activeTrack]);

  // Load questions first, then init quiz
  useEffect(() => {
    let cancelled = false;
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
  }, [initQuiz]);

  // ── Shared finish helper — runs side effects OUTSIDE setState updaters ──
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

  // ── BUG 1A: Timer counts down when timeLimit is a number; auto-submits at 0 ──
  useEffect(() => {
    if (!state || finished) return;
    if (timeLimit === 'none' || timeLimit === undefined) return;
    if (timeLimit === 'auto') return; // no-op for now
    if (typeof timeLimit !== 'number') return;

    const totalSeconds = timeLimit * 60;
    const interval = setInterval(() => {
      const currentState = stateRef.current;
      if (!currentState || finishedRef.current) return;
      const newElapsed = Math.floor((Date.now() - currentState.startTime) / 1000);
      if (newElapsed >= totalSeconds) {
        clearInterval(interval);
        // Pure state update only
        setState((prev) => (prev ? { ...prev, elapsed: totalSeconds } : prev));
        // Side effects run outside the updater
        const finalAnswers: AnswerRecord[] = [...currentState.answers];
        for (let i = finalAnswers.length; i < currentState.questions.length; i++) {
          finalAnswers.push({ questionId: currentState.questions[i].id, correct: false, selectedIndices: [] });
        }
        finishQuiz(currentState, finalAnswers);
      } else {
        setState((prev) => (prev ? { ...prev, elapsed: newElapsed } : prev));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [state?.startTime, finished, timeLimit, finishQuiz]);

  // ── ENHANCEMENT 5C: Focus trap on exit modal ──
  useEffect(() => {
    if (!showExitConfirm) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const modal = document.getElementById('exit-modal');
    if (!modal) return;

    const focusable = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    focusable[0]?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setShowExitConfirm(false);
        previouslyFocused?.focus();
      } else if (e.key === 'Tab' && focusable.length > 0) {
        if (e.shiftKey && document.activeElement === focusable[0]) {
          e.preventDefault();
          focusable[focusable.length - 1].focus();
        } else if (!e.shiftKey && document.activeElement === focusable[focusable.length - 1]) {
          e.preventDefault();
          focusable[0].focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [showExitConfirm]);

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

  const finishWithAnswers = useCallback((prev: QuizState, finalAnswers: AnswerRecord[]) => {
    finishQuiz(prev, finalAnswers);
  }, [finishQuiz]);

  const handleNext = useCallback(() => {
    lastTapRef.current = null;
    setState((prev) => {
      if (!prev) return prev;
      if (prev.currentIdx + 1 >= prev.questions.length) {
        finishWithAnswers(prev, prev.answers);
        return prev;
      }
      return {
        ...prev,
        currentIdx: prev.currentIdx + 1,
        selectedIndices: [],
        checked: false,
      };
    });
  }, [finishWithAnswers]);

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
      // idx is encoded as optionIndex * 100 + matchOptionIndex
      const optionIdx = Math.floor(idx / 100);
      const matchIdx = idx % 100;
      setState((prev) => {
        if (!prev || prev.checked) return prev;
        const next = [...prev.selectedIndices];
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
      clearQuizProgress();
      back();
    }
  }, [back]);

  // Keyboard shortcuts
  useEffect(() => {
    if (finished) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
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
  }, [finished, handleCheck, handleNext, handleExit, toggleOption]);

  // ── Early returns only AFTER all hooks ──
  const validationError = validateQuizParams({ mode, count, topicId, subjectId });
  if (validationError) {
    return (
      <PageContainer>
        <div className="flex items-center gap-2 mb-4"><BackButton /><Breadcrumbs /></div>
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

  if (resumeOffer) {
    return (
      <PageContainer>
        <div className="flex items-center gap-2 mb-4"><BackButton /><Breadcrumbs /></div>
        <Card className="p-8">
          <EmptyState
            title="Resume quiz?"
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
          <div className="flex items-center gap-2 mb-4"><BackButton /><Breadcrumbs /></div>
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
      ? () => navigate({ screen: 'topic', topicId })
      : () => back();
    return (
      <PageContainer>
        <div className="flex items-center gap-2 mb-4"><BackButton /><Breadcrumbs /></div>
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
        <div className="flex items-center gap-2 mb-4"><BackButton /><Breadcrumbs /></div>
        <Card className="p-8">
          <EmptyState
            title="No wrong answers left"
            message="You've answered all previously wrong questions correctly. Great job!"
            icon={<CheckCircle className="w-12 h-12" />}
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
        onBack={back}
      />
    );
  }

  const currentQ = state.questions[state.currentIdx];
  const correctAns = isCorrect(currentQ, state.selectedIndices);
  const difficultyLabel = currentQ.difficulty.charAt(0).toUpperCase() + currentQ.difficulty.slice(1);
  const topicInfo = getTopic(currentQ.topicId);

  // Display remaining time when a numeric limit is set; otherwise elapsed
  const showTimer = timeLimit !== 'none' && timeLimit !== undefined && timeLimit !== 'auto';
  const totalSeconds = typeof timeLimit === 'number' ? timeLimit * 60 : 0;
  const displaySeconds = typeof timeLimit === 'number'
    ? Math.max(0, totalSeconds - state.elapsed)
    : state.elapsed;
  const timerUrgent = typeof timeLimit === 'number' && displaySeconds <= 60;

  return (
    <PageContainer>
      {/* Top bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <button
              onClick={handleExit}
              className="flex items-center justify-center w-11 h-11 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors shrink-0"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <Breadcrumbs />
          </div>
          <span className="text-slate-500 text-sm font-medium">
            Q {state.currentIdx + 1} of {state.questions.length}
          </span>
          {showTimer && (
            <span className={`flex items-center gap-1 text-sm font-mono ${timerUrgent ? 'text-red-600 font-semibold' : 'text-slate-600'}`}>
              <Clock className="w-4 h-4" />
              {Math.floor(displaySeconds / 60)}:{String(displaySeconds % 60).padStart(2, '0')}
            </span>
          )}
        </div>
        {/* ENHANCEMENT 2B: progress by answers completed */}
        <ProgressBar value={state.answers.length} max={state.questions.length} color="sky" />
      </div>

      {/* Topic + difficulty + source citation */}
      {topicInfo && (
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
            Topic: {topicInfo.title}
          </span>
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${
              currentQ.difficulty === 'easy'
                ? 'bg-emerald-100 text-emerald-700'
                : currentQ.difficulty === 'medium'
                  ? 'bg-amber-100 text-amber-700'
                  : 'bg-red-100 text-red-700'
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
      <Card className="p-5 sm:p-6 mb-4">
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
            let bgClass = 'bg-white border-slate-200 hover:border-sky-300 hover:bg-sky-50/50';
            if (state.checked) {
              if (isCorrectOption) bgClass = 'bg-emerald-50 border-emerald-400';
              else if (isSelected && !isCorrectOption) bgClass = 'bg-red-50 border-red-400';
              else bgClass = 'bg-white border-slate-200 opacity-60';
            } else if (isSelected) {
              bgClass = 'bg-sky-50 border-sky-500';
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
                className={`w-full flex items-center gap-3 p-3.5 rounded-xl border-2 text-left transition-all ${bgClass} ${state.checked && currentQ.type !== 'multi' ? 'cursor-pointer' : ''}`}
              >
                <div
                  className={`w-6 h-6 shrink-0 flex items-center justify-center text-xs font-bold ${
                    currentQ.type === 'multi' ? 'rounded' : 'rounded-full'
                  } ${
                    isSelected || (state.checked && isCorrectOption)
                      ? state.checked && isCorrectOption
                        ? 'bg-emerald-500 text-white'
                        : state.checked && isSelected && !isCorrectOption
                          ? 'bg-red-500 text-white'
                          : 'bg-sky-500 text-white'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {currentQ.type === 'multi' ? (isSelected ? '\u2713' : '') : String.fromCharCode(65 + idx)}
                </div>
                <span className="text-slate-800 text-sm flex-1">{opt}</span>
                {state.checked && isCorrectOption && <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />}
                {state.checked && isSelected && !isCorrectOption && <XCircle className="w-5 h-5 text-red-500 shrink-0" />}
              </button>
            );
          })}
        </div>
        )}
      </Card>

      {/* After-answer feedback — live region + multi-correct + tap to advance */}
      {state.checked && (
        <div
          className={`rounded-2xl border bg-white shadow-sm p-5 mb-4 cursor-pointer select-none ${correctAns ? 'border-emerald-200 hover:border-emerald-300' : 'border-red-200 hover:border-red-300'}`}
          role="status"
          aria-live="polite"
          onClick={handleNext}
          title="Tap to continue"
        >
          <div className="flex items-center gap-2 mb-3">
            {correctAns ? (
              <>
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="font-semibold text-emerald-700">Correct!</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-red-500" />
                <span className="font-semibold text-red-700">Incorrect</span>
              </>
            )}
            <span className="ml-auto text-xs text-slate-400 font-medium">Tap to continue →</span>
          </div>
          {!correctAns && (currentQ.type === 'multi') && (
            <div className="mb-3 space-y-1">
              <p className="text-slate-600 text-sm">
                You answered:{' '}
                <span className="font-medium text-red-600">
                  {state.selectedIndices.map((i) => currentQ.options[i]).join(', ') || 'None'}
                </span>
              </p>
              <p className="text-slate-600 text-sm">
                Correct answer(s):{' '}
                <span className="font-medium text-emerald-600">
                  {(currentQ.correctAnswer as number[]).map((i) => currentQ.options[i]).join(', ')}
                </span>
              </p>
            </div>
          )}
          {!correctAns && currentQ.type === 'matching' && (
            <div className="mb-3 space-y-1">
              <p className="text-slate-600 text-sm">
                You matched:{' '}
                <span className="font-medium text-red-600">
                  {currentQ.options.map((opt, i) => `${opt} → ${currentQ.matchOptions?.[state.selectedIndices[i] ?? -1] ?? '—'}`).join(', ')}
                </span>
              </p>
              <p className="text-slate-600 text-sm">
                Correct matches:{' '}
                <span className="font-medium text-emerald-600">
                  {currentQ.options.map((opt, i) => `${opt} → ${currentQ.matchOptions?.[(currentQ.correctAnswer as number[])[i]] ?? '—'}`).join(', ')}
                </span>
              </p>
            </div>
          )}
          {!correctAns && currentQ.type !== 'multi' && currentQ.type !== 'matching' && (
            <div className="mb-3 space-y-1">
              <p className="text-slate-600 text-sm">
                You answered:{' '}
                <span className="font-medium text-red-600">
                  {currentQ.options[state.selectedIndices[0]] ?? 'None'}
                </span>
              </p>
              <p className="text-slate-600 text-sm">
                Correct answer:{' '}
                <span className="font-medium text-emerald-600">
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
          <Button onClick={handleCheck} disabled={state.selectedIndices.length === 0 || (currentQ.type === 'matching' && state.selectedIndices.some((i) => i === undefined || i === null))} className="flex-1">
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
      {showExitConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setShowExitConfirm(false)}
        >
          <div
            className="max-w-sm w-full p-6 rounded-2xl border border-slate-200 bg-white shadow-lg"
            id="exit-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
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
                  back();
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
  const doneLabel = 'Back';

  return (
    <PageContainer>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Quiz Complete!</h1>
        <HomeButton />
      </div>

      {/* Score card */}
      <Card className="p-6 mb-4 text-center">
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
            <span className="text-3xl font-bold text-slate-900">{pct}%</span>
          </div>
        </div>
        <p className="text-slate-700 font-semibold text-lg">
          {results.score}/{results.total} correct
        </p>
        <p className="text-slate-500 text-sm mt-1">{results.total - results.score} incorrect</p>
      </Card>

      {/* Performance breakdown */}
      <Card className="p-5 mb-4 bg-slate-50/50">
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
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                      )}
                      <span className="text-slate-700 text-sm truncate">{topicInfo.title}</span>
                    </div>
                    <span
                      className={`text-sm font-bold shrink-0 ml-2 ${
                        t.accuracy >= 75 ? 'text-emerald-600' : t.accuracy >= 50 ? 'text-amber-600' : 'text-red-600'
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
                      dPct >= 75 ? 'text-emerald-600' : dPct >= 50 ? 'text-amber-600' : 'text-red-600'
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
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Recommendations</p>
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
                    className="inline-flex items-center gap-1 text-red-600 text-sm font-medium hover:text-red-700"
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
                  className="inline-flex items-center gap-1 text-amber-600 text-sm font-medium hover:text-amber-700"
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
        <Card className="p-4 mb-4 border-l-4 border-l-sky-500">
          <button
            onClick={onNavigateToProgress}
            className="flex items-center gap-2 text-sky-600 text-sm font-medium hover:text-sky-700"
          >
            <TrendingUp className="w-4 h-4" /> See your full progress
          </button>
        </Card>
      )}

      {/* ENHANCEMENT 3A: Per-question review */}
      {results.answers.length > 0 && results.questions.length > 0 && (
        <Card className="p-5 mb-4">
          <h3 className="font-semibold text-slate-900 mb-3">Review Answers</h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {results.answers.map((ans, idx) => {
              const q = results.questions[idx];
              if (!q) return null;
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
                <div key={q.id} className="border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
                  <div className="flex items-start gap-2 mb-1">
                    {isOk ? (
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                    )}
                    <p className="text-sm text-slate-700 flex-1">
                      <span className="text-slate-400 font-medium mr-1">Q{idx + 1}.</span>
                      {q.question}
                    </p>
                  </div>
                  {!isOk && (
                    <div className="ml-6 text-xs text-slate-500 space-y-0.5">
                      <p>
                        Your answer: <span className="text-red-600 font-medium">{yourText}</span>
                      </p>
                      <p>
                        Correct: <span className="text-emerald-600 font-medium">{correctText}</span>
                      </p>
                    </div>
                  )}
                  <p className="ml-6 text-xs text-slate-500 italic mt-1">{q.explanation}</p>
                </div>
              );
            })}
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
          if (isCorrectMatch) rowClass = 'bg-emerald-50 border-emerald-400';
          else if (selectedMatch !== undefined) rowClass = 'bg-red-50 border-red-400';
        }

        return (
          <div key={optIdx} className={`flex items-center gap-3 p-3 rounded-xl border-2 ${rowClass}`}>
            <span className="text-slate-800 text-sm font-medium flex-1 min-w-0">{opt}</span>
            <span className="text-slate-400 text-xs">→</span>
            <select
              value={selectedMatch ?? ''}
              disabled={checked}
              onChange={(e) => onSelect(optIdx * 100 + parseInt(e.target.value, 10))}
              className="flex-1 min-w-0 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-sky-400 focus:outline-none disabled:opacity-60"
              aria-label={`Match for ${opt}`}
            >
              <option value="" disabled>Choose...</option>
              {matchOptions.map((mOpt, mIdx) => (
                <option key={mIdx} value={mIdx}>{mOpt}</option>
              ))}
            </select>
            {checked && isCorrectMatch && <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />}
            {checked && !isCorrectMatch && selectedMatch !== undefined && <XCircle className="w-5 h-5 text-red-500 shrink-0" />}
          </div>
        );
      })}
    </div>
  );
}
