import type { AppData, TopicProgress, Question, DifficultyFilter, PracticeMode } from '@/types';
import { STORAGE_KEYS, REVIEW_STAGES_DAYS } from '@/lib/constants';

const STORAGE_KEY = STORAGE_KEYS.appData;
const LEGACY_KEY = STORAGE_KEYS.legacyAppData;

const emptyData: AppData = {
  studiedTopics: [],
  topicProgress: {},
  questionResults: {},
  quizHistory: [],
  revisionDates: {},
  lastOpenedTopic: '',
};

/** Debounced write so rapid markStudied/recordQuiz bursts don't thrash localStorage */
let saveTimer: ReturnType<typeof setTimeout> | null = null;
let pendingData: AppData | null = null;
const SAVE_DEBOUNCE_MS = 120;

function flushSave(): void {
  if (pendingData === null) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pendingData));
  } catch {
    // QuotaExceeded or private mode — ignore
  }
  pendingData = null;
  saveTimer = null;
}
function isObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}
function validateAppData(data: unknown): data is AppData {
  if (!isObject(data)) {
    console.warn('[storage] Invalid data: not an object');
    return false;
  }
  if (data.quizHistory !== undefined && !Array.isArray(data.quizHistory)) {
    console.warn('[storage] Invalid data: quizHistory is not an array');
    return false;
  }
  if (data.topicProgress !== undefined && !isObject(data.topicProgress)) {
    console.warn('[storage] Invalid data: topicProgress is not an object');
    return false;
  }
  if (data.questionResults !== undefined && !isObject(data.questionResults)) {
    console.warn('[storage] Invalid data: questionResults is not an object');
    return false;
  }
  if (data.studiedTopics !== undefined && !Array.isArray(data.studiedTopics)) {
    console.warn('[storage] Invalid data: studiedTopics is not an array');
    return false;
  }
  if (data.revisionDates !== undefined && !isObject(data.revisionDates)) {
    console.warn('[storage] Invalid data: revisionDates is not an object');
    return false;
  }
  if (data.lastOpenedTopic !== undefined && typeof data.lastOpenedTopic !== 'string') {
    console.warn('[storage] Invalid data: lastOpenedTopic is not a string');
    return false;
  }
  return true;
}
export function loadData(): AppData {
  try {
    // Migrate from legacy key if the new key doesn't exist yet
    let raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const legacy = localStorage.getItem(LEGACY_KEY);
      if (legacy) {
        localStorage.setItem(STORAGE_KEY, legacy);
        localStorage.removeItem(LEGACY_KEY);
        raw = legacy;
      }
    }
    if (!raw) return { ...emptyData };
    const parsed = JSON.parse(raw);
    if (!validateAppData(parsed)) {
      console.warn('[storage] Stored data failed validation, resetting to defaults');
      return { ...emptyData };
    }
    return { ...emptyData, ...parsed };
  } catch {
    return { ...emptyData };
  }
}
export function saveData(data: AppData): void {
  pendingData = data;
  if (saveTimer !== null) clearTimeout(saveTimer);
  saveTimer = setTimeout(flushSave, SAVE_DEBOUNCE_MS);
}

/** Force any pending debounced write immediately (e.g. before unload). */
export function flushPendingSave(): void {
  if (saveTimer !== null) {
    clearTimeout(saveTimer);
    saveTimer = null;
  }
  flushSave();
}

export function resetData(): void {
  if (saveTimer !== null) {
    clearTimeout(saveTimer);
    saveTimer = null;
  }
  pendingData = null;
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(LEGACY_KEY);
    localStorage.removeItem(STORAGE_KEYS.subjectSelection);
    localStorage.removeItem(STORAGE_KEYS.practicePrefs);
    localStorage.removeItem(STORAGE_KEYS.quizProgress);
    localStorage.removeItem(STORAGE_KEYS.sidebarExpanded);
  } catch {
    // ignore
  }
}

// Spaced repetition stages: New → 1 → 3 → 7 → 14 → 30 days
const STAGES = [...REVIEW_STAGES_DAYS];
function getCurrentStage(nextReview: string | null): number {
  if (!nextReview) return -1; // new, never studied
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const reviewDate = new Date(nextReview);
  reviewDate.setHours(0, 0, 0, 0);
  const diffDays = Math.round((reviewDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  // Find the smallest stage whose interval is >= diffDays
  for (let i = 0; i < STAGES.length; i++) {
    if (diffDays <= STAGES[i]) return i;
  }
  return STAGES.length - 1;
}
function computeNextReviewDate(currentStage: number, accuracy: number): string {
  let stage = currentStage;
  // If accuracy < 65%, pull back one stage (not below 0)
  if (accuracy < 65) {
    stage = Math.max(stage - 1, 0);
  } else {
    stage = Math.min(stage + 1, STAGES.length - 1);
  }
  const days = STAGES[stage];
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().split('T')[0];
}
function defaultProgress(): TopicProgress {
  return {
    status: 'not_started',
    lastStudied: null,
    nextReview: null,
    accuracy: 0,
    attempts: 0,
    lastQuizDate: null,
    quizAccuracy: 0,
    quizAttempts: 0,
    quizNextReview: null,
  };
}

/** Read-only lookup — does not mutate `data`. */
export function getOrCreateProgress(data: AppData, topicId: string): TopicProgress {
  return data.topicProgress[topicId] ?? defaultProgress();
}

export function markTopicStudied(data: AppData, topicId: string): AppData {
  const prog = { ...getOrCreateProgress(data, topicId) };
  const currentStage = getCurrentStage(prog.nextReview);
  prog.lastStudied = new Date().toISOString();
  prog.status = prog.status === 'mastered' ? 'mastered' : 'studied';
  prog.nextReview = computeNextReviewDate(currentStage, prog.accuracy);
  return {
    ...data,
    studiedTopics: [...new Set([...data.studiedTopics, topicId])],
    topicProgress: { ...data.topicProgress, [topicId]: prog },
    revisionDates: { ...data.revisionDates, [topicId]: prog.nextReview },
    lastOpenedTopic: topicId,
  };
}
export function recordQuizResult(
  data: AppData,
  topicId: string | null,
  answers: { questionId: string; correct: boolean }[],
  questions: Question[],
  mode: PracticeMode,
  subjectId?: string,
  difficultyFilter?: DifficultyFilter,
): AppData {
  const correctCount = answers.filter((a) => a.correct).length;
  const totalCount = answers.length;
  const now = Date.now();

  // Record individual question results (immutable)
  const questionResults = { ...data.questionResults };
  for (const a of answers) {
    questionResults[a.questionId] = {
      correct: a.correct,
      timestamp: now,
    };
  }

  // Record quiz history
  const quizHistory = [
    ...data.quizHistory,
    {
      date: now,
      mode,
      score: correctCount,
      total: totalCount,
      topicId: topicId ?? undefined,
      subjectId,
      difficultyFilter,
    },
  ];

  // Group answers by topic
  const questionTopicMap = new Map(questions.map((q) => [q.id, q.topicId]));
  const topicAnswers: Record<string, { correct: number; total: number }> = {};
  for (const a of answers) {
    const tid = questionTopicMap.get(a.questionId);
    if (!tid) continue;
    if (!topicAnswers[tid]) topicAnswers[tid] = { correct: 0, total: 0 };
    topicAnswers[tid].total++;
    if (a.correct) topicAnswers[tid].correct++;
  }

  // Update quiz progress per topic without mutating the input `data`
  let topicProgress = data.topicProgress;
  for (const [tid, { correct, total }] of Object.entries(topicAnswers)) {
    const prog = { ...getOrCreateProgress({ ...data, topicProgress }, tid) };
    const prevCorrect = (prog.quizAccuracy / 100) * prog.quizAttempts;
    prog.quizAttempts += total;
    prog.quizAccuracy =
      prog.quizAttempts > 0
        ? Math.round(((prevCorrect + correct) / prog.quizAttempts) * 100)
        : 0;
    prog.lastQuizDate = new Date(now).toISOString();
    const quizStage = getCurrentStage(prog.quizNextReview);
    prog.quizNextReview = computeNextReviewDate(quizStage, prog.quizAccuracy);
    // Keep legacy accuracy/attempts in sync for existing UI
    prog.accuracy = prog.quizAccuracy;
    prog.attempts = prog.quizAttempts;
    topicProgress = { ...topicProgress, [tid]: prog };
  }

  return {
    ...data,
    questionResults,
    quizHistory,
    topicProgress,
  };
}
export function setLastOpenedTopic(data: AppData, topicId: string): AppData {
  return { ...data, lastOpenedTopic: topicId };
}
// Topics due for revision today or earlier (from either study or quiz schedule)
export function getDueTopics(data: AppData): string[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Set<string>();
  for (const [topicId, dateStr] of Object.entries(data.revisionDates)) {
    if (new Date(dateStr) <= today) due.add(topicId);
  }
  for (const [topicId, prog] of Object.entries(data.topicProgress)) {
    if (prog.quizNextReview && new Date(prog.quizNextReview) <= today) due.add(topicId);
  }
  return [...due];
}
