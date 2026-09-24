import type { AppData, TopicProgress, Question, DifficultyFilter, PracticeMode } from '@/types';
import { STORAGE_KEYS, deriveAccuracy, getEffectiveQuizStats, parseLocalDate, RECENT_QUIZ_SESSION_WINDOW } from '@/lib/constants';
import { getCurrentStage, computeNextReviewDate } from '@/lib/spaced-repetition';
import { sectionMap } from '@/data/sections';

const STORAGE_KEY = STORAGE_KEYS.appData;
const LEGACY_KEY = STORAGE_KEYS.legacyAppData;
const BACKUP_KEY = 'examprep-data-backup';

/** One-shot message for the UI after a corrupt-load recovery */
let lastStorageWarning: string | null = null;

export function consumeStorageWarning(): string | null {
  const msg = lastStorageWarning;
  lastStorageWarning = null;
  return msg;
}

/** Raw backup JSON if present (for user export) */
export function getBackupRaw(): string | null {
  try {
    return localStorage.getItem(BACKUP_KEY);
  } catch {
    return null;
  }
}


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


/** Drop deprecated TopicProgress fields so new saves stay clean. */
function sanitizeTopicProgress(p: TopicProgress): TopicProgress {
  const clean: TopicProgress = {
    lastStudied: p.lastStudied,
    nextReview: p.nextReview,
    lastQuizDate: p.lastQuizDate,
    quizCorrect: p.quizCorrect,
    quizTotal: p.quizTotal,
  };
  if (p.recentSessions && p.recentSessions.length > 0) {
    clean.recentSessions = p.recentSessions.slice(-RECENT_QUIZ_SESSION_WINDOW);
  }
  return clean;
}

function sanitizeForSave(data: AppData): AppData {
  const topicProgress: Record<string, TopicProgress> = {};
  for (const [id, prog] of Object.entries(data.topicProgress ?? {})) {
    topicProgress[id] = sanitizeTopicProgress(prog);
  }
  // Do not persist legacy revisionDates — migrated into nextReview on load
  return { ...data, topicProgress, revisionDates: {} };
}

/** Export current app data (or last good localStorage) as a downloadable JSON file. */
export function downloadBackupFile(data?: AppData): boolean {
  try {
    let raw: string | null = null;
    if (data) {
      raw = JSON.stringify(sanitizeForSave(data));
    } else {
      raw = localStorage.getItem(STORAGE_KEY) ?? getBackupRaw();
    }
    if (!raw) return false;
    const blob = new Blob([raw], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `examprep-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Import a previously exported JSON backup. Replaces local progress after validation.
 * Returns normalized AppData on success.
 */
export function importAppDataFromJson(raw: string): { ok: true; data: AppData } | { ok: false; error: string } {
  try {
    const parsed = JSON.parse(raw);
    if (!validateAppData(parsed)) {
      return { ok: false, error: 'File is not a valid ExamPrep Hub backup.' };
    }
    const normalized = normalizeLoaded(parsed as AppData);
    // Drop legacy revisionDates after migration — nextReview is authoritative
    const cleaned = sanitizeForSave({ ...normalized, revisionDates: {} });
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned));
    } catch {
      return { ok: false, error: 'Could not write imported data to browser storage.' };
    }
    return { ok: true, data: cleaned };
  } catch {
    return { ok: false, error: 'Could not read that file. Choose a valid JSON backup.' };
  }
}

function flushSave(): void {
  if (pendingData === null) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sanitizeForSave(pendingData)));
  } catch {
    // QuotaExceeded or private mode — ignore
  }
  pendingData = null;
  saveTimer = null;
}

function isObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function validateTopicProgress(p: unknown): p is TopicProgress {
  if (!isObject(p)) return false;
  if (p.lastStudied !== undefined && p.lastStudied !== null && typeof p.lastStudied !== 'string') return false;
  if (p.nextReview !== undefined && p.nextReview !== null && typeof p.nextReview !== 'string') return false;
  if (p.lastQuizDate !== undefined && p.lastQuizDate !== null && typeof p.lastQuizDate !== 'string') return false;
  if (p.quizCorrect !== undefined && typeof p.quizCorrect !== 'number') return false;
  if (p.quizTotal !== undefined && typeof p.quizTotal !== 'number') return false;
  return true;
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
  if (data.topicProgress !== undefined) {
    if (!isObject(data.topicProgress)) {
      console.warn('[storage] Invalid data: topicProgress is not an object');
      return false;
    }
    for (const [k, v] of Object.entries(data.topicProgress)) {
      if (!validateTopicProgress(v)) {
        console.warn(`[storage] Invalid topicProgress entry: ${k}`);
        return false;
      }
    }
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

/** Migrate legacy TopicProgress (quizAccuracy/quizAttempts → quizCorrect/quizTotal) */
function migrateProgress(p: Record<string, unknown>): TopicProgress {
  const quizAttempts = typeof p.quizAttempts === 'number' ? p.quizAttempts : (typeof p.attempts === 'number' ? p.attempts : 0);
  const quizAccuracyPct = typeof p.quizAccuracy === 'number' ? p.quizAccuracy : (typeof p.accuracy === 'number' ? p.accuracy : 0);
  const quizCorrect = Math.round((quizAccuracyPct / 100) * quizAttempts);
  return {
    lastStudied: (p.lastStudied as string | null) ?? null,
    nextReview: (p.nextReview as string | null) ?? (p.quizNextReview as string | null) ?? null,
    lastQuizDate: (p.lastQuizDate as string | null) ?? null,
    quizCorrect,
    quizTotal: quizAttempts,
  };
}

function normalizeLoaded(parsed: AppData): AppData {
  const merged = { ...emptyData, ...parsed };
  let migrated = false;
  for (const [k, v] of Object.entries(merged.topicProgress)) {
    if (v.quizCorrect === undefined && (v.quizAccuracy !== undefined || v.quizAttempts !== undefined || v.attempts !== undefined)) {
      merged.topicProgress[k] = migrateProgress(v as unknown as Record<string, unknown>);
      migrated = true;
    }
  }
  // Legacy revisionDates → nextReview (one-way). Do not mirror back.
  for (const [tid, dateStr] of Object.entries(merged.revisionDates ?? {})) {
    if (!dateStr) continue;
    const prog = merged.topicProgress[tid];
    if (prog && !prog.nextReview) {
      merged.topicProgress[tid] = { ...prog, nextReview: dateStr };
      migrated = true;
    } else if (!prog) {
      merged.topicProgress[tid] = {
        lastStudied: null,
        nextReview: dateStr,
        lastQuizDate: null,
        quizCorrect: 0,
        quizTotal: 0,
      };
      migrated = true;
    }
  }
  if (migrated) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(merged)); } catch { /* ignore */ }
  }
  return merged;
}

export function loadData(): AppData {
  try {
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

    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch {
      console.warn('[storage] JSON parse failed, backing up corrupt blob');
      try { localStorage.setItem(BACKUP_KEY, raw); } catch { /* ignore */ }
      lastStorageWarning =
        'Your saved progress looked corrupt and was reset to defaults. A backup is available to download.';
      return tryRestoreBackup() ?? { ...emptyData };
    }

    if (!validateAppData(parsed)) {
      console.warn('[storage] Stored data failed validation, backing up and resetting');
      try { localStorage.setItem(BACKUP_KEY, raw); } catch { /* ignore */ }
      const fromBackup = tryRestoreBackup();
      if (fromBackup) {
        lastStorageWarning =
          'Primary save was invalid; restored from the last good backup. You can still download a copy.';
        return fromBackup;
      }
      lastStorageWarning =
        'Your saved progress looked corrupt and was reset to defaults. A backup is available to download.';
      return { ...emptyData };
    }

    return normalizeLoaded(parsed as AppData);
  } catch {
    lastStorageWarning =
      'Could not read saved progress. Starting fresh. If you had data, try downloading the backup.';
    return tryRestoreBackup() ?? { ...emptyData };
  }
}

function tryRestoreBackup(): AppData | null {
  try {
    const backup = localStorage.getItem(BACKUP_KEY);
    if (!backup) return null;
    const parsed = JSON.parse(backup);
    if (!validateAppData(parsed)) return null;
    const normalized = normalizeLoaded(parsed as AppData);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized)); } catch { /* ignore */ }
    return normalized;
  } catch {
    return null;
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
    // Backup before wiping
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) localStorage.setItem(BACKUP_KEY, raw);
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

function defaultProgress(): TopicProgress {
  return {
    lastStudied: null,
    nextReview: null,
    lastQuizDate: null,
    quizCorrect: 0,
    quizTotal: 0,
  };
}

/** Read-only lookup — does not mutate `data`. */
export function getOrCreateProgress(data: AppData, topicId: string): TopicProgress {
  return data.topicProgress[topicId] ?? defaultProgress();
}

export function markTopicStudied(data: AppData, topicId: string): AppData {
  const prog = { ...getOrCreateProgress(data, topicId) };
  const currentStage = getCurrentStage(prog.nextReview);
  const accuracy = getEffectiveQuizStats(prog).accuracy;
  prog.lastStudied = new Date().toISOString();
  prog.nextReview = computeNextReviewDate(currentStage, accuracy);
  return {
    ...data,
    studiedTopics: [...new Set([...data.studiedTopics, topicId])],
    topicProgress: { ...data.topicProgress, [topicId]: prog },
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

  const questionResults = { ...data.questionResults };
  const qSectionMap = new Map(questions.map((q) => [q.id, q.sectionId]));
  for (const a of answers) {
    const secId = qSectionMap.get(a.questionId);
    const qSubjectId = secId ? sectionMap[secId]?.subjectId : undefined;
    questionResults[a.questionId] = {
      correct: a.correct,
      timestamp: now,
      subjectId: qSubjectId ?? subjectId,
    };
  }

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

  const questionTopicMap = new Map(questions.map((q) => [q.id, q.topicId]));
  const topicAnswers: Record<string, { correct: number; total: number }> = {};
  for (const a of answers) {
    const tid = questionTopicMap.get(a.questionId);
    if (!tid) continue;
    if (!topicAnswers[tid]) topicAnswers[tid] = { correct: 0, total: 0 };
    topicAnswers[tid].total++;
    if (a.correct) topicAnswers[tid].correct++;
  }

  let topicProgress = data.topicProgress;
  for (const [tid, { correct, total }] of Object.entries(topicAnswers)) {
    const prog = { ...getOrCreateProgress({ ...data, topicProgress }, tid) };
    prog.quizCorrect += correct; // lifetime volume
    prog.quizTotal += total;
    prog.lastQuizDate = new Date(now).toISOString();
    const prev = prog.recentSessions ?? [];
    prog.recentSessions = [...prev, { correct, total, at: now }].slice(-RECENT_QUIZ_SESSION_WINDOW);
    const accuracy = getEffectiveQuizStats(prog).accuracy;
    const quizStage = getCurrentStage(prog.nextReview);
    prog.nextReview = computeNextReviewDate(quizStage, accuracy);
    topicProgress = { ...topicProgress, [tid]: prog };
  }

  return {
    ...data,
    questionResults,
    quizHistory,
    topicProgress,
    // revisionDates: legacy read-only; not updated on new activity
  };
}

export function setLastOpenedTopic(data: AppData, topicId: string): AppData {
  return { ...data, lastOpenedTopic: topicId };
}

export function getDueTopics(data: AppData): string[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due: string[] = [];
  for (const [topicId, prog] of Object.entries(data.topicProgress)) {
    if (prog.nextReview && parseLocalDate(prog.nextReview) <= today) due.push(topicId);
  }
  return due;
}
