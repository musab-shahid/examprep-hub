/**
 * Shared app constants — single source for stage screens, storage keys, etc.
 * Import from here instead of re-declaring arrays in multiple modules.
 *
 * Keep this module free of React / context imports to avoid cycles.
 */

/** Screens that use per-screen subject selection context */
export const STAGE_SCREENS = [
  'learn',
  'practice',
  'review',
  'formulas',
  'progress',
  'search',
] as const;

export type StageScreenId = (typeof STAGE_SCREENS)[number];

/** localStorage keys used across the app */
export const STORAGE_KEYS = {
  appData: 'examprep-data',
  legacyAppData: 'fpsc-prep-data',
  subjectSelection: 'examprep-subject-selection',
  practicePrefs: 'examprep-practice-prefs',
  quizProgress: 'examprep-quiz-progress',
  sidebarExpanded: 'examprep-sidebar-expanded',
} as const;

/** Mastery threshold used by attention + UI */
export const MASTERY_ACCURACY_THRESHOLD = 80;
export const MASTERY_MIN_QUIZ_ATTEMPTS = 1;

/** Spaced-repetition interval stages (days) */
export const REVIEW_STAGES_DAYS = [1, 3, 7, 14, 30] as const;

/** Weak-topic defaults (aligned across attention + streak) */
export const WEAK_TOPIC_MIN_ATTEMPTS = 5;
export const WEAK_TOPIC_LIMIT = 5;

/** Derive accuracy percentage from raw counts — no rounding drift */
export function deriveAccuracy(correct: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((correct / total) * 100);
}

/** Derive topic status from underlying data — single source of truth */
export function deriveStatus(
  studied: boolean,
  quizTotal: number,
  quizAccuracy: number,
): 'not_started' | 'studied' | 'mastered' {
  if (quizTotal >= MASTERY_MIN_QUIZ_ATTEMPTS && quizAccuracy >= MASTERY_ACCURACY_THRESHOLD) return 'mastered';
  if (studied || quizTotal > 0) return 'studied';
  return 'not_started';
}

/** Composite mastery score 0–100, clamped: 50% coverage + 50% accuracy */
export function computeMasteryScore(studiedTopics: number, totalTopics: number, accuracy: number): number {
  if (totalTopics <= 0) return 0;
  return Math.min(100, Math.max(0, Math.round((studiedTopics / totalTopics) * 50 + accuracy * 0.5)));
}

/** Local date string (YYYY-MM-DD) for storage — avoids UTC/local mismatch */
export function localDateString(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

/** Parse a stored YYYY-MM-DD date as local midnight (not UTC) */
export function parseLocalDate(s: string): Date {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y, m - 1, d);
}
