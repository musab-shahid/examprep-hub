import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { getStickyMisses, getFragileWins, getTeachWithoutTestTopics } from '../item-analytics.ts';
import type { AppData, Question } from '../../types.ts';

const empty: AppData = {
  studiedTopics: [],
  topicProgress: {},
  questionResults: {},
  quizHistory: [],
  revisionDates: {},
  lastOpenedTopic: '',
};

function q(id: string, topicId: string): Question {
  return {
    id,
    sectionId: 'S',
    topicId,
    type: 'single',
    difficulty: 'easy',
    question: `Stem for ${id}`,
    options: ['a', 'b'],
    correctAnswer: 0,
  };
}

describe('item-analytics', () => {
  it('flags sticky misses after multiple wrong attempts', () => {
    const questions = [q('Q1', 'topic-a'), q('Q2', 'topic-a')];
    const data: AppData = {
      ...empty,
      questionResults: {
        Q1: { correct: false, timestamp: 1, attempts: 3, strength: 0.2 },
        Q2: { correct: true, timestamp: 2, attempts: 1, strength: 0.8 },
      },
    };
    const sticky = getStickyMisses(data, questions, 5);
    assert.equal(sticky.length, 1);
    assert.equal(sticky[0].questionId, 'Q1');
    assert.ok(sticky[0].attempts >= 2);
  });

  it('flags fragile wins with low strength', () => {
    const questions = [q('Q1', 'topic-a')];
    const data: AppData = {
      ...empty,
      questionResults: {
        Q1: { correct: true, timestamp: 1, attempts: 2, strength: 0.3 },
      },
    };
    const fragile = getFragileWins(data, questions, 3);
    assert.equal(fragile.length, 1);
    assert.equal(fragile[0].questionId, 'Q1');
  });

  it('finds studied topics with almost no practice', () => {
    const questions = [q('Q1', 'topic-a'), q('Q2', 'topic-a'), q('Q3', 'topic-a')];
    const data: AppData = {
      ...empty,
      studiedTopics: ['topic-a'],
      questionResults: {},
    };
    const gaps = getTeachWithoutTestTopics(data, questions, ['topic-a'], 5);
    assert.equal(gaps.length, 1);
    assert.equal(gaps[0].topicId, 'topic-a');
    assert.equal(gaps[0].questionsTouched, 0);
  });
});
