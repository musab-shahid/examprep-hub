import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { getCurrentStage, computeNextReviewDate, reviewStages } from '../spaced-repetition.ts';

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
});
