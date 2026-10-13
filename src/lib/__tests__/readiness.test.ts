import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  computeReadiness,
  rankScoreGainOpportunities,
  readinessDrivers,
  readinessLabel,
} from '../readiness.ts';
import type { AppData } from '../../types.ts';

const empty: AppData = {
  studiedTopics: [],
  topicProgress: {},
  questionResults: {},
  quizHistory: [],
  revisionDates: {},
  lastOpenedTopic: '',
};

describe('readiness', () => {
  it('returns zeros on empty data', () => {
    const scope = new Set<string>(['a', 'b', 'c']);
    const r = computeReadiness(empty, 3, scope);
    assert.equal(r.score, 0);
    assert.equal(r.coveragePct, 0);
    assert.equal(r.masteryPct, 0);
    assert.equal(r.accuracyPct, 0);
  });

  it('rises with study coverage and quiz accuracy', () => {
    const scope = new Set(['a', 'b', 'c', 'd', 'e']);
    const data: AppData = {
      ...empty,
      studiedTopics: ['a', 'b', 'c', 'd', 'e'],
      topicProgress: {
        a: {
          lastStudied: null,
          nextReview: null,
          lastQuizDate: null,
          quizCorrect: 8,
          quizTotal: 10,
          recentSessions: [{ correct: 8, total: 10, at: 1 }],
        },
        b: {
          lastStudied: null,
          nextReview: null,
          lastQuizDate: null,
          quizCorrect: 9,
          quizTotal: 10,
          recentSessions: [{ correct: 9, total: 10, at: 1 }],
        },
        c: {
          lastStudied: null,
          nextReview: null,
          lastQuizDate: null,
          quizCorrect: 7,
          quizTotal: 10,
          recentSessions: [{ correct: 7, total: 10, at: 1 }],
        },
      },
    };
    const r = computeReadiness(data, 5, scope);
    assert.ok(r.score > 20);
    assert.equal(r.coveragePct, 100);
    assert.ok(r.accuracyPct >= 70);
  });

  it('rankScoreGainOpportunities prefers low accuracy topics', () => {
    const scope = new Set(['weak', 'ok']);
    const data: AppData = {
      ...empty,
      studiedTopics: ['weak', 'ok'],
      topicProgress: {
        weak: {
          lastStudied: null,
          nextReview: null,
          lastQuizDate: null,
          quizCorrect: 2,
          quizTotal: 10,
          recentSessions: [{ correct: 2, total: 10, at: 1 }],
        },
        ok: {
          lastStudied: null,
          nextReview: null,
          lastQuizDate: null,
          quizCorrect: 9,
          quizTotal: 10,
          recentSessions: [{ correct: 9, total: 10, at: 1 }],
        },
      },
    };
    const rows = rankScoreGainOpportunities(data, scope, 2);
    assert.ok(rows.length >= 1);
    assert.equal(rows[0].topicId, 'weak');
  });

  it('readinessDrivers mentions low coverage', () => {
    const drivers = readinessDrivers(
      { score: 10, coveragePct: 20, masteryPct: 5, accuracyPct: 50 },
      6,
    );
    assert.ok(drivers.some((d) => /coverage/i.test(d)));
    assert.ok(drivers.some((d) => /review/i.test(d)));
  });

  it('readinessLabel bands', () => {
    assert.equal(readinessLabel(85), 'Well prepared');
    assert.equal(readinessLabel(10), 'Just beginning');
  });
});
