import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { selectQuizPool, filterRestoredQuestions } from '../quiz-pool.ts';
import { quizSignature, signaturesMatch } from '../quiz-signature.ts';
import { sectionMap } from '../../data/sections.ts';
import { allQuestions } from '../../data/questions.ts';

describe('selectQuizPool workspace scope', () => {
  it('returns empty without track', () => {
    const pool = selectQuizPool({
      mode: 'quick',
      track: null,
      allowedSubjectIds: new Set(['physics']),
      scopeInput: null,
    });
    assert.equal(pool.length, 0);
  });

  it('returns empty with empty allowed subjects', () => {
    const pool = selectQuizPool({
      mode: 'quick',
      track: 'fpsc',
      allowedSubjectIds: new Set(),
      scopeInput: { trackId: 'fpsc', examId: null },
    });
    assert.equal(pool.length, 0);
  });

  it('subject outside allowed set yields empty', () => {
    const pool = selectQuizPool({
      mode: 'quick',
      scope: 'subject',
      subjectId: 'hat-verbal',
      track: 'fpsc',
      allowedSubjectIds: new Set(['physics', 'maths']),
      scopeInput: { trackId: 'fpsc', examId: null },
    });
    assert.equal(pool.length, 0);
  });

  it('track-wide pool only includes allowed subjects', () => {
    const allowed = new Set(['physics']);
    const pool = selectQuizPool({
      mode: 'quick',
      track: 'fpsc',
      allowedSubjectIds: allowed,
      scopeInput: { trackId: 'fpsc', examId: null },
      count: 'all',
    });
    assert.ok(pool.length > 0);
    for (const q of pool) {
      const sid = sectionMap[q.sectionId]?.subjectId;
      assert.equal(sid, 'physics');
    }
  });

  it('mixed topicIds with one invalid returns empty (reject policy)', () => {
    const pool = selectQuizPool({
      mode: 'quick',
      topicIds: ['not-a-real-topic-xyz', 'phy-kinematics'],
      track: 'fpsc',
      allowedSubjectIds: new Set(['physics']),
      scopeInput: { trackId: 'fpsc', examId: null },
    });
    assert.equal(pool.length, 0);
  });
});

describe('filterRestoredQuestions', () => {
  it('rejects when any saved id is missing', () => {
    const qs = allQuestions().slice(0, 3);
    if (qs.length < 2) return;
    const allowed = new Set(
      qs.map((q) => sectionMap[q.sectionId]?.subjectId).filter(Boolean) as string[],
    );
    const r = filterRestoredQuestions(qs, [qs[0].id, 'missing-id'], allowed, null);
    assert.equal(r, null);
  });

  it('rejects when question subject not allowed', () => {
    const qs = allQuestions().slice(0, 5);
    if (qs.length === 0) return;
    const r = filterRestoredQuestions(qs, [qs[0].id], new Set(['__none__']), null);
    assert.equal(r, null);
  });
});

describe('quiz signature includes exam profile', () => {
  const base = {
    mode: 'quick' as const,
    scope: 'subject' as const,
    subjectId: 'maths',
    count: 10,
    track: 'fpsc' as const,
  };

  it('differs when examId changes', () => {
    assert.equal(
      signaturesMatch(
        { ...base, examId: null },
        { ...base, examId: 'fpsc-met-bs17' },
      ),
      false,
    );
  });

  it('matches same examId', () => {
    assert.equal(
      signaturesMatch(
        { ...base, examId: 'fpsc-met-bs17' },
        { ...base, examId: 'fpsc-met-bs17' },
      ),
      true,
    );
  });
});
