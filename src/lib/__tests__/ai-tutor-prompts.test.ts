import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { buildMistakePrompt, buildStudentContext, askTutor } from '../ai-tutor.ts';
import type { AppData, Question } from '../../types.ts';

const empty: AppData = {
  studiedTopics: [],
  topicProgress: {},
  questionResults: {},
  quizHistory: [],
  revisionDates: {},
  lastOpenedTopic: '',
};

function singleQ(overrides: Partial<Question> = {}): Question {
  return {
    id: 'T-Q001',
    sectionId: 'SEC',
    topicId: 'topic-x',
    type: 'single',
    difficulty: 'easy',
    question: 'Which is biotic?',
    options: ['Water', 'Soil', 'Tree', 'Air'],
    correctAnswer: 2,
    explanation: 'Trees are living.',
    ...overrides,
  };
}

describe('AI tutor prompt shaping (no network)', () => {
  it('buildMistakePrompt includes stem, options, wrong and correct labels', () => {
    const prompt = buildMistakePrompt(singleQ(), [0]);
    assert.match(prompt, /got this question wrong/i);
    assert.match(prompt, /Which is biotic/);
    assert.match(prompt, /A\.\s*Water/);
    assert.match(prompt, /C\.\s*Tree/);
    assert.match(prompt, /My answer:\s*Water/i);
    assert.match(prompt, /Correct answer:\s*Tree/i);
  });

  it('buildMistakePrompt handles multi-select', () => {
    const q = singleQ({
      type: 'multi',
      correctAnswer: [0, 2],
      options: ['A', 'B', 'C'],
    });
    const prompt = buildMistakePrompt(q, [1]);
    assert.match(prompt, /My answer/);
    assert.match(prompt, /Correct answer/);
  });

  it('buildStudentContext reports no attempts and studied status', () => {
    const ctx = buildStudentContext(
      {
        ...empty,
        studiedTopics: ['topic-x'],
        topicProgress: {
          'topic-x': {
            lastStudied: '2026-10-01',
            nextReview: '2026-10-20',
            lastQuizDate: null,
            quizCorrect: 0,
            quizTotal: 0,
            reviewStage: 2,
            abilityElo: 1000,
          },
        },
      },
      'topic-x',
    );
    assert.match(ctx, /studied|Status/i);
    assert.match(ctx, /No quiz attempts/i);
    assert.match(ctx, /2026-10-20/);
    assert.match(ctx, /Elo/i);
  });

  it('buildStudentContext lists recent wrong stems when provided', () => {
    const q = singleQ();
    const ctx = buildStudentContext(
      {
        ...empty,
        studiedTopics: ['topic-x'],
        topicProgress: {
          'topic-x': {
            lastStudied: null,
            nextReview: null,
            lastQuizDate: null,
            quizCorrect: 0,
            quizTotal: 2,
            recentSessions: [{ correct: 0, total: 2, at: 1 }],
          },
        },
        questionResults: {
          'T-Q001': { correct: false, timestamp: 99, attempts: 1 },
        },
      },
      'topic-x',
      [q],
    );
    assert.match(ctx, /biotic/i);
    assert.match(ctx, /accuracy/i);
  });

  it('askTutor rejects when no provider keys (no fetch)', async () => {
    await assert.rejects(
      () => askTutor([{ role: 'user', content: 'hi' }]),
      /not configured|API key/i,
    );
  });
});
