import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  pickAdaptiveQuestions,
  scoreQuestion,
  updateTopicAbility,
  nearMissScore,
  predictedSuccess,
  getTopicAbility,
  NEAR_MISS_TARGET_P,
} from '../adaptive-select.ts';
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
  });
});

describe('adaptive-select phase 2 (Elo + near-miss)', () => {
  it('updateTopicAbility rises on correct, falls on wrong', () => {
    const up = updateTopicAbility(0, 'medium', true);
    const down = updateTopicAbility(0, 'medium', false);
    assert.ok(up > 0);
    assert.ok(down < 0);
  });

  it('hard correct moves ability more than easy correct', () => {
    const hardUp = updateTopicAbility(0, 'hard', true);
    const easyUp = updateTopicAbility(0, 'easy', true);
    assert.ok(hardUp > easyUp);
  });

  it('nearMissScore peaks near target probability', () => {
    const at0 = nearMissScore(0, 'medium');
    const atTarget = nearMissScore(0.75, 'medium');
    const far = nearMissScore(3, 'easy');
    assert.ok(atTarget > at0);
    assert.ok(atTarget > far);
    assert.ok(atTarget > 0.9);
  });

  it('predictedSuccess respects difficulty', () => {
    assert.ok(predictedSuccess(0, 'easy') > predictedSuccess(0, 'medium'));
    assert.ok(predictedSuccess(0, 'medium') > predictedSuccess(0, 'hard'));
  });

  it('getTopicAbility cold-starts from accuracy', () => {
    const prog: TopicProgress = {
      lastStudied: null,
      nextReview: null,
      lastQuizDate: null,
      quizCorrect: 9,
      quizTotal: 10,
    };
    const θ = getTopicAbility(prog);
    assert.ok(θ > 0);
  });

  it('prefers near-miss difficulty for a mid-ability learner', () => {
    const θ = 0.75;
    const easy = q({ id: 'e', topicId: 't', difficulty: 'easy' });
    const med = q({ id: 'm', topicId: 't', difficulty: 'medium' });
    const hard = q({ id: 'h', topicId: 't', difficulty: 'hard' });
    const opts = {
      ...baseOpts,
      topicProgress: {
        t: {
          lastStudied: null,
          nextReview: null,
          lastQuizDate: null,
          quizCorrect: 0,
          quizTotal: 0,
          abilityElo: θ,
        },
      },
    };
    const sEasy = scoreQuestion(easy, opts);
    const sMed = scoreQuestion(med, opts);
    const sHard = scoreQuestion(hard, opts);
    assert.ok(sMed > sEasy);
    assert.ok(sMed > sHard);
  });
});
