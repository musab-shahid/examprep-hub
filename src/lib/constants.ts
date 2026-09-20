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
