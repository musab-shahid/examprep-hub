import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { quizSignature, signaturesMatch } from '../quiz-signature.ts';

describe('quiz signature', () => {
  const base = {
    mode: 'quick' as const,
    scope: 'subject' as const,
    subjectId: 'maths',
    count: 10,
    difficulty: 'any' as const,
    track: 'fpsc' as const,
  };

  it('matches identical configs', () => {
    assert.equal(signaturesMatch(base, { ...base }), true);
  });

  it('differs when mode changes', () => {
    assert.equal(signaturesMatch(base, { ...base, mode: 'mock' }), false);
  });

  it('differs when track changes', () => {
    assert.equal(signaturesMatch(base, { ...base, track: 'hat' }), false);
  });

  it('includes wrongPool and topicIds', () => {
    const a = quizSignature({ ...base, wrongPool: true, topicIds: ['t1', 't2'] });
    const b = quizSignature({ ...base, wrongPool: false, topicIds: ['t1', 't2'] });
    assert.notEqual(a, b);
    assert.ok(a.includes('1'));
  });
});
