import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { pickAdaptiveQuestions, scoreQuestion } from '../adaptive-select.ts';
import type { Question, TopicProgress } from '../../types.ts';

function q(partial: Partial<Question> & { id: string; topicId: string }): Question {
  return {
    sectionId: 'sec',
    type: 'single',
    difficulty: 'medium',
    question: partial.id,
    options: ['a', 'b'],
    correctAnswer: 0,
    ...partial,
  } as Question;
}

const baseOpts = {
  mode: 'topic' as const,
  deterministic: true,
  now: Date.parse('2026-10-11T12:00:00Z'),
};

describe('adaptive-select phase 1', () => {
  it('prefers wrong over recently correct', () => {
    const wrong = q({ id: 'w', topicId: 't1' });
    const right = q({ id: 'r', topicId: 't1' });
    const opts = {
      ...baseOpts,
      questionResults: {
        w: { correct: false, timestamp: baseOpts.now - 2 * 86400000 },
        r: { correct: true, timestamp: baseOpts.now - 2 * 86400000 },
      },
    };
    assert.ok(scoreQuestion(wrong, opts) > scoreQuestion(right, opts));
  });

  it('prefers unseen over recently correct', () => {
    const unseen = q({ id: 'u', topicId: 't1' });
    const right = q({ id: 'r', topicId: 't1' });
    const opts = {
      ...baseOpts,
      questionResults: {
        r: { correct: true, timestamp: baseOpts.now - 3600000 },
      },
    };
    assert.ok(scoreQuestion(unseen, opts) > scoreQuestion(right, opts));
  });

  it('boosts questions on weak topics', () => {
    const weakQ = q({ id: 'a', topicId: 'weak' });
    const strongQ = q({ id: 'b', topicId: 'strong' });
    const topicProgress: Record<string, TopicProgress> = {
      weak: {
        lastStudied: null,
        nextReview: null,
        lastQuizDate: null,
        quizCorrect: 2,
        quizTotal: 10,
      },
      strong: {
        lastStudied: null,
        nextReview: null,
        lastQuizDate: null,
        quizCorrect: 9,
        quizTotal: 10,
      },
    };
    const opts = { ...baseOpts, topicProgress };
    assert.ok(scoreQuestion(weakQ, opts) > scoreQuestion(strongQ, opts));
  });

  it('boosts overdue spaced-review topics', () => {
    const dueQ = q({ id: 'd', topicId: 'due' });
    const laterQ = q({ id: 'l', topicId: 'later' });
    const topicProgress: Record<string, TopicProgress> = {
      due: {
        lastStudied: null,
        nextReview: '2026-10-01',
        lastQuizDate: null,
        quizCorrect: 0,
        quizTotal: 0,
      },
      later: {
        lastStudied: null,
        nextReview: '2026-12-01',
        lastQuizDate: null,
        quizCorrect: 0,
        quizTotal: 0,
      },
    };
    const opts = { ...baseOpts, topicProgress };
    assert.ok(scoreQuestion(dueQ, opts) > scoreQuestion(laterQ, opts));
  });

  it('pickAdaptiveQuestions returns top-N by score', () => {
    const pool = [
      q({ id: 'right', topicId: 't' }),
      q({ id: 'wrong', topicId: 't' }),
      q({ id: 'new', topicId: 't' }),
    ];
    const picked = pickAdaptiveQuestions(pool, 2, {
      ...baseOpts,
      questionResults: {
        right: { correct: true, timestamp: baseOpts.now - 3600000 },
        wrong: { correct: false, timestamp: baseOpts.now - 86400000 },
      },
    });
    assert.equal(picked.length, 2);
    const ids = picked.map((x) => x.id);
    assert.ok(ids.includes('wrong'));
    assert.ok(ids.includes('new'));
    assert.ok(!ids.includes('right'));
  });

  it('penalizes ids marked recent', () => {
    const a = q({ id: 'a', topicId: 't' });
    const b = q({ id: 'b', topicId: 't' });
    const opts = { ...baseOpts, recentQuestionIds: ['a'] };
    assert.ok(scoreQuestion(b, opts) > scoreQuestion(a, opts));
  });
});
