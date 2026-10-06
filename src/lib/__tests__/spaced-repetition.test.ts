import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  getCurrentStage,
  computeNextReviewDate,
  reviewStages,
  resolveReviewStage,
  nextStageAfterReview,
} from '../spaced-repetition.ts';

describe('spaced repetition stage machine', () => {
  const today = new Date(2026, 0, 15);

  it('returns -1 when never scheduled', () => {
    assert.equal(getCurrentStage(null, today), -1);
  });

  it('first schedule (stage -1) lands on 1-day interval', () => {
    assert.equal(computeNextReviewDate(-1, 100, today), '2026-01-16');
  });

  it('successful review advances stage', () => {
    assert.equal(computeNextReviewDate(0, 80, today), '2026-01-18');
  });

  it('accuracy under 65 pulls stage back', () => {
    assert.equal(computeNextReviewDate(2, 50, today), '2026-01-18');
  });

  it('does not go below stage 0 on failed first review', () => {
    assert.equal(computeNextReviewDate(0, 40, today), '2026-01-16');
  });

  it('stages match constants', () => {
    assert.deepEqual([...reviewStages()], [1, 3, 7, 14, 30]);
  });

  it('overdue nextReview does not collapse inferred stage to 0', () => {
    // Was due 10 days ago — must not return stage 0
    assert.equal(getCurrentStage('2026-01-05', today), 4);
  });

  it('resolveReviewStage prefers stored stage over date inference', () => {
    assert.equal(resolveReviewStage(3, '2026-01-05', today), 3);
    assert.equal(resolveReviewStage(undefined, null, today), -1);
  });

  it('nextStageAfterReview advances and pulls back correctly', () => {
    assert.equal(nextStageAfterReview(3, 90), 4);
    assert.equal(nextStageAfterReview(3, 50), 2);
    assert.equal(nextStageAfterReview(-1, 100), 0);
  });
});
