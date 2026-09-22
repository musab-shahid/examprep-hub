/**
 * Pure spaced-repetition stage machine (no localStorage / React).
 * Stages (days): 1 → 3 → 7 → 14 → 30
 */
import { REVIEW_STAGES_DAYS, localDateString, parseLocalDate } from './constants';

const STAGES = [...REVIEW_STAGES_DAYS];

/**
 * Infer current stage index from nextReview distance.
 * -1 = never scheduled; 0..n-1 = stage index in STAGES.
 */
export function getCurrentStage(nextReview: string | null, today: Date = new Date()): number {
  if (!nextReview) return -1;
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const reviewDate = parseLocalDate(nextReview);
  reviewDate.setHours(0, 0, 0, 0);
  const diffDays = Math.round((reviewDate.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  for (let i = 0; i < STAGES.length; i++) {
    if (diffDays <= STAGES[i]) return i;
  }
  return STAGES.length - 1;
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
  let stage = currentStage;
  if (stage < 0) {
    stage = 0;
  } else if (accuracy < 65) {
    stage = Math.max(stage - 1, 0);
  } else {
    stage = Math.min(stage + 1, STAGES.length - 1);
  }
  const days = STAGES[stage];
  const date = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  date.setDate(date.getDate() + days);
  return localDateString(date);
}

export function reviewStages(): readonly number[] {
  return STAGES;
}
