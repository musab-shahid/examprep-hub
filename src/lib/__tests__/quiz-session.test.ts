import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  validateQuizRequest,
  isValidOptionPermutation,
  validateDraftShape,
  questionsMatchRequest,
} from '../quiz-session.ts';
import { selectQuizPool } from '../quiz-pool.ts';
import { sectionMap } from '../../data/sections.ts';
import { allQuestions } from '../../data/questions.ts';

describe('validateQuizRequest', () => {
  it('rejects subject scope without subjectId', () => {
    const r = validateQuizRequest({ mode: 'quick', scope: 'subject' });
    assert.equal(r.ok, false);
  });

  it('rejects empty subjectId', () => {
    const r = validateQuizRequest({ mode: 'quick', scope: 'subject', subjectId: '' });
    assert.equal(r.ok, false);
  });

  it('rejects empty topicIds list', () => {
    const r = validateQuizRequest({ mode: 'quick', topicIds: [] });
    assert.equal(r.ok, false);
  });

  it('deduplicates topicIds', () => {
    const r = validateQuizRequest({ mode: 'quick', topicIds: ['a', 'a', 'b'] });
    assert.equal(r.ok, true);
    if (r.ok) assert.deepEqual(r.request.topicIds, ['a', 'b']);
  });
});

describe('isValidOptionPermutation', () => {
  it('accepts full permutation', () => {
    assert.equal(isValidOptionPermutation([2, 0, 1], 3), true);
  });
  it('rejects out of range', () => {
    assert.equal(isValidOptionPermutation([0, 1, 3], 3), false);
  });
  it('rejects duplicates', () => {
    assert.equal(isValidOptionPermutation([0, 0, 1], 3), false);
  });
});

describe('validateDraftShape', () => {
  it('rejects non-object', () => {
    assert.equal(validateDraftShape(null).ok, false);
  });
  it('rejects duplicate question ids', () => {
    const r = validateDraftShape({
      questionIds: ['q1', 'q1'],
      answers: [],
      currentIdx: 0,
      mode: 'quick',
    });
    assert.equal(r.ok, false);
  });
  it('rejects empty examId string', () => {
    const r = validateDraftShape({
      questionIds: ['q1'],
      answers: [],
      currentIdx: 0,
      mode: 'quick',
      examId: '',
    });
    assert.equal(r.ok, false);
  });
});

describe('selectQuizPool parameter integrity', () => {
  const physicsQs = allQuestions().filter(
    (q) => sectionMap[q.sectionId]?.subjectId === 'physics',
  );
  const sample = physicsQs[0];

  it('scope subject without id yields empty', () => {
    const pool = selectQuizPool({
      mode: 'quick',
      scope: 'subject',
      track: 'fpsc',
      allowedSubjectIds: new Set(['physics']),
      scopeInput: { trackId: 'fpsc', examId: null },
    });
    assert.equal(pool.length, 0);
  });

  it('missing scopeInput yields empty even with allowed subjects', () => {
    const pool = selectQuizPool({
      mode: 'quick',
      track: 'fpsc',
      allowedSubjectIds: new Set(['physics']),
      scopeInput: null,
    });
    assert.equal(pool.length, 0);
  });

  it('track / scopeInput.trackId mismatch yields empty', () => {
    const pool = selectQuizPool({
      mode: 'quick',
      track: 'fpsc',
      allowedSubjectIds: new Set(['physics']),
      scopeInput: { trackId: 'hat', examId: null },
    });
    assert.equal(pool.length, 0);
  });

  it('empty topicIds yields empty', () => {
    const pool = selectQuizPool({
      mode: 'quick',
      topicIds: [],
      track: 'fpsc',
      allowedSubjectIds: new Set(['physics']),
      scopeInput: { trackId: 'fpsc', examId: null },
    });
    assert.equal(pool.length, 0);
  });

  if (sample) {
    it('subject + foreign topic rejects', () => {
      // topic from maths if available
      const mathsTopic = allQuestions().find(
        (q) => sectionMap[q.sectionId]?.subjectId === 'maths',
      )?.topicId;
      if (!mathsTopic) return;
      const pool = selectQuizPool({
        mode: 'topic',
        topicId: mathsTopic,
        subjectId: 'physics',
        track: 'fpsc',
        allowedSubjectIds: new Set(['physics', 'maths']),
        scopeInput: { trackId: 'fpsc', examId: null },
      });
      assert.equal(pool.length, 0);
    });
  }
});

describe('questionsMatchRequest wrongPool', () => {
  it('rejects when a restored question is not wrong in history', () => {
    const qs = allQuestions().slice(0, 2);
    if (qs.length < 2) {
      assert.ok(true);
      return;
    }
    const ok = questionsMatchRequest(
      qs,
      { mode: 'review', wrongPool: true },
      { [qs[0].id]: { correct: false, timestamp: 1 }, [qs[1].id]: { correct: true, timestamp: 1 } },
    );
    assert.equal(ok, false);
  });

  it('accepts when all are wrong', () => {
    const qs = allQuestions().slice(0, 2);
    if (qs.length < 2) {
      assert.ok(true);
      return;
    }
    const results: Record<string, { correct: boolean; timestamp: number }> = {};
    for (const q of qs) results[q.id] = { correct: false, timestamp: 1 };
    assert.equal(questionsMatchRequest(qs, { mode: 'review', wrongPool: true }, results), true);
  });
});

describe('validateDraftShape mode', () => {
  it('rejects unsupported mode', () => {
    const r = validateDraftShape({
      questionIds: ['q1'],
      answers: [],
      currentIdx: 0,
      mode: 'not-a-mode',
    });
    assert.equal(r.ok, false);
  });
});
