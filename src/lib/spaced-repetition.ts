/**
 * Pure spaced-repetition stage machine (no localStorage / React).
 * Stages (days): 1 → 3 → 7 → 14 → 30
 *
 * Prefer storing `reviewStage` on TopicProgress. Date-only inference is a
 * migration fallback and must not demote overdue topics to stage 0.
 */
import { REVIEW_STAGES_DAYS, localDateString, parseLocalDate } from './constants';

const STAGES = [...REVIEW_STAGES_DAYS];

/**
 * Infer stage from nextReview distance (migration fallback only).
 * -1 = never scheduled; 0..n-1 = stage index in STAGES.
 * Overdue (diffDays < 0): return highest stage so a one-day miss does not
 * collapse a 30-day card to a 3-day cycle — stored reviewStage is preferred.
 */
export function getCurrentStage(nextReview: string | null, today: Date = new Date()): number {
  if (!nextReview) return -1;
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const reviewDate = parseLocalDate(nextReview);
  reviewDate.setHours(0, 0, 0, 0);
  const diffDays = Math.round((reviewDate.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  if (diffDays < 0) {
    return STAGES.length - 1;
  }
  for (let i = 0; i < STAGES.length; i++) {
    if (diffDays <= STAGES[i]) return i;
  }
  return STAGES.length - 1;
}

/** Resolve stage: explicit store wins over date inference. */
export function resolveReviewStage(
  storedStage: number | null | undefined,
  nextReview: string | null,
  today: Date = new Date(),
): number {
  if (typeof storedStage === 'number' && storedStage >= -1 && storedStage < STAGES.length) {
    return storedStage;
  }
  return getCurrentStage(nextReview, today);
}

/** Stage index after a review given accuracy (0–100). */
export function nextStageAfterReview(currentStage: number, accuracy: number): number {
  let stage = currentStage;
  if (stage < 0) {
    stage = 0;
  } else if (accuracy < 65) {
    stage = Math.max(stage - 1, 0);
  } else {
    stage = Math.min(stage + 1, STAGES.length - 1);
  }
  return stage;
}

export function reviewDateForStage(stage: number, from: Date = new Date()): string {
  const idx = Math.max(0, Math.min(stage, STAGES.length - 1));
  const days = STAGES[idx];
  const date = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  date.setDate(date.getDate() + days);
  return localDateString(date);
}

/**
 * Advance or pull back one stage; return local YYYY-MM-DD for next review.
 * First schedule (stage < 0) → stage 0 (1 day).
 * accuracy < 65 → pull back one stage (min 0).
 */
export function computeNextReviewDate(
  currentStage: number,
  accuracy: number,
  from: Date = new Date(),
): string {
  return reviewDateForStage(nextStageAfterReview(currentStage, accuracy), from);
}

export function reviewStages(): readonly number[] {
  return STAGES;
}
