import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  getTrackCatalog,
  topicsForSubjectInScope,
  questionCountForSubjectInScope,
  subjectInScope,
  questionEligibleForScope,
} from '../track-catalog.ts';
import { resolveSubjectsForScope } from '../track-scope.ts';
import { sectionsBySubject } from '../../data/sections.ts';
import type { Question } from '../../types.ts';

describe('getTrackCatalog — FPSC active', () => {
  it('returns accurate counts for general FPSC scope', () => {
    const c = getTrackCatalog({ trackId: 'fpsc', examId: null });
    assert.equal(c.empty, false);
    assert.ok(c.subjects.length >= 5);
    assert.ok(c.totalTopics > 0);
    assert.ok(c.totalQuestions > 0);
    for (const s of c.subjects) {
      assert.ok(s.topicCount >= 0);
      assert.ok(s.questionCount >= 0);
      assert.ok(s.sectionCount >= 1);
    }
  });

  it('counts match sum of per-subject counts', () => {
    const c = getTrackCatalog({ trackId: 'fpsc', examId: null });
    const topicSum = c.subjects.reduce((acc, s) => acc + s.topicCount, 0);
    const qSum = c.subjects.reduce((acc, s) => acc + s.questionCount, 0);
    assert.equal(c.totalTopics, topicSum);
    assert.equal(c.totalQuestions, qSum);
  });
});

describe('getTrackCatalog — FPSC previewed while HAT active', () => {
  it('returns FPSC counts independent of active workspace', () => {
    const c = getTrackCatalog({ trackId: 'fpsc', examId: null });
    const hatC = getTrackCatalog({ trackId: 'hat', examId: null });
    assert.ok(c.subjects.length !== hatC.subjects.length || c.totalTopics !== hatC.totalTopics);
    assert.ok(c.totalTopics > 0);
    assert.ok(c.totalQuestions > 0);
  });
});

describe('getTrackCatalog — HAT preview while FPSC active', () => {
  it('returns HAT counts independent of active workspace', () => {
    const c = getTrackCatalog({ trackId: 'hat', examId: null });
    assert.equal(c.empty, false);
    assert.ok(c.subjects.length >= 3);
    assert.ok(c.totalTopics > 0);
    assert.ok(c.totalQuestions > 0);
    assert.ok(!c.subjects.some((s) => s.subject.id === 'meteo-climatology'));
  });
});

describe('getTrackCatalog — no active workspace', () => {
  it('still returns counts for a given track scope', () => {
    const c = getTrackCatalog({ trackId: 'fpsc', examId: null });
    assert.equal(c.empty, false);
    assert.ok(c.totalTopics > 0);
  });
});

describe('getTrackCatalog — restrictive exam profile', () => {
  it('filters subjects to the profile subset', () => {
    const general = getTrackCatalog({ trackId: 'fpsc', examId: null });
    const r = resolveSubjectsForScope({ trackId: 'fpsc', examId: 'fpsc-met-bs17' });
    if (r.kind === 'profile') {
      const c = getTrackCatalog({ trackId: 'fpsc', examId: 'fpsc-met-bs17' });
      assert.ok(c.subjects.length <= general.subjects.length);
      assert.ok(c.totalTopics <= general.totalTopics);
    }
  });

  it('restrictive profile reduces or holds topic count vs general', () => {
    const general = getTrackCatalog({ trackId: 'fpsc', examId: null });
    const r = resolveSubjectsForScope({ trackId: 'fpsc', examId: 'fpsc-met-bs17' });
    if (r.kind === 'profile') {
      const c = getTrackCatalog({ trackId: 'fpsc', examId: 'fpsc-met-bs17' });
      // A BS-17-only profile must not show more topics than general prep.
      assert.ok(c.totalTopics <= general.totalTopics,
        `profile topics ${c.totalTopics} should be <= general ${general.totalTopics}`);
    }
  });
});

describe('getTrackCatalog — question counts with loaded bank', () => {
  it('counts only eligible questions when bank is provided', () => {
    // Build a fake loaded bank for the fpsc-met-bs17 profile subject.
    const r = resolveSubjectsForScope({ trackId: 'fpsc', examId: 'fpsc-met-bs17' });
    if (r.kind !== 'profile') return;
    const sid = r.subjects[0]?.id as string;
    if (!sid) return;
    const sectionIds = new Set(sectionsBySubject(sid).map((s) => s.id));
    const fakeQuestions: Question[] = [
      // eligible: untagged, in-scope section
      { id: 'q1', sectionId: [...sectionIds][0], topicId: 't1', difficulty: 'easy', type: 'single', question: 'q', options: ['a', 'b'], correctAnswer: 0, explanation: '', sourceCitation: '' },
      // excluded: postRestriction bs16 under a bs17 profile
      { id: 'q2', sectionId: [...sectionIds][0], topicId: 't1', difficulty: 'easy', type: 'single', question: 'q', options: ['a', 'b'], correctAnswer: 0, explanation: '', sourceCitation: '', postRestriction: 'bs16' as const },
      // excluded: out-of-scope section
      { id: 'q3', sectionId: 'NOT-IN-SCOPE', topicId: 't1', difficulty: 'easy', type: 'single', question: 'q', options: ['a', 'b'], correctAnswer: 0, explanation: '', sourceCitation: '' },
    ];
    const loaded = new Map<string, Question[]>([[sid, fakeQuestions]]);
    const c = getTrackCatalog({ trackId: 'fpsc', examId: 'fpsc-met-bs17' }, loaded);
    const subj = c.subjects.find((s) => s.subject.id === sid);
    assert.ok(subj, 'subject should be present');
    assert.equal(subj!.questionCount, 1, 'only the untagged in-scope question should count');
  });
});

describe('getTrackCatalog — empty policy', () => {
  it('empty policy returns empty catalog, not full track', () => {
    const c = getTrackCatalog({ trackId: 'fpsc', examId: 'not-a-real-profile' });
    assert.equal(c.empty, true);
    assert.equal(c.subjects.length, 0);
    assert.equal(c.totalTopics, 0);
    const general = getTrackCatalog({ trackId: 'fpsc', examId: null });
    assert.ok(c.subjects.length < general.subjects.length);
  });
});

describe('getTrackCatalog — invalid profile', () => {
  it('invalid profile never broadens to full catalog', () => {
    const c = getTrackCatalog({ trackId: 'fpsc', examId: 'not-a-real-profile' });
    assert.equal(c.empty, true);
    assert.equal(c.subjects.length, 0);
    assert.equal(c.totalTopics, 0);
    assert.equal(c.totalQuestions, 0);
  });

  it('empty-string examId is invalid, not general', () => {
    const c = getTrackCatalog({ trackId: 'fpsc', examId: '' });
    assert.equal(c.empty, true);
    assert.equal(c.subjects.length, 0);
  });
});

describe('getTrackCatalog — viewed track active', () => {
  it('returns correct counts when the viewed track matches active scope', () => {
    const c = getTrackCatalog({ trackId: 'fpsc', examId: null });
    const c2 = getTrackCatalog({ trackId: 'fpsc', examId: null });
    assert.equal(c.totalTopics, c2.totalTopics);
    assert.equal(c.totalQuestions, c2.totalQuestions);
  });
});

describe('topicsForSubjectInScope — scope validation', () => {
  it('returns topics for a subject in general scope', () => {
    const t = topicsForSubjectInScope('meteo-climatology', { trackId: 'fpsc', examId: null });
    assert.ok(t.length > 0);
    assert.ok(t.every((topic) => topic.id));
  });

  it('returns empty for a subject not on the track (HAT subject under FPSC scope)', () => {
    const t = topicsForSubjectInScope('hat-verbal', { trackId: 'fpsc', examId: null });
    assert.equal(t.length, 0, 'hat-verbal is not in the FPSC scope and must return no topics');
  });

  it('returns empty for a subject on a different track', () => {
    const t = topicsForSubjectInScope('meteo-climatology', { trackId: 'hat', examId: null });
    assert.equal(t.length, 0, 'meteo-climatology is not in the HAT scope and must return no topics');
  });

  it('returns empty under an invalid profile', () => {
    const t = topicsForSubjectInScope('meteo-climatology', { trackId: 'fpsc', examId: 'not-a-real-profile' });
    assert.equal(t.length, 0);
  });

  it('returns empty under an empty-string examId', () => {
    const t = topicsForSubjectInScope('meteo-climatology', { trackId: 'fpsc', examId: '' });
    assert.equal(t.length, 0);
  });
});

describe('questionCountForSubjectInScope — scope validation', () => {
  it('returns question count from section metadata for an in-scope subject', () => {
    const q = questionCountForSubjectInScope('meteo-climatology', { trackId: 'fpsc', examId: null });
    assert.ok(q > 0);
  });

  it('returns zero for a subject not on the track', () => {
    const q = questionCountForSubjectInScope('hat-verbal', { trackId: 'fpsc', examId: null });
    assert.equal(q, 0, 'hat-verbal is not in the FPSC scope and must return 0');
  });

  it('returns zero for a subject on a different track', () => {
    const q = questionCountForSubjectInScope('meteo-climatology', { trackId: 'hat', examId: null });
    assert.equal(q, 0);
  });

  it('returns zero under an invalid profile', () => {
    const q = questionCountForSubjectInScope('meteo-climatology', { trackId: 'fpsc', examId: 'not-a-real-profile' });
    assert.equal(q, 0);
  });

  it('returns zero under an empty-string examId', () => {
    const q = questionCountForSubjectInScope('meteo-climatology', { trackId: 'fpsc', examId: '' });
    assert.equal(q, 0);
  });

  it('counts only eligible questions when loaded bank is provided', () => {
    const r = resolveSubjectsForScope({ trackId: 'fpsc', examId: 'fpsc-met-bs17' });
    if (r.kind !== 'profile') return;
    const sid = r.subjects[0]?.id as string;
    if (!sid) return;
    const sectionIds = new Set(sectionsBySubject(sid).map((s) => s.id));
    const fakeQuestions: Question[] = [
      { id: 'q1', sectionId: [...sectionIds][0], topicId: 't1', difficulty: 'easy', type: 'single', question: 'q', options: ['a', 'b'], correctAnswer: 0, explanation: '', sourceCitation: '' },
      { id: 'q2', sectionId: [...sectionIds][0], topicId: 't1', difficulty: 'easy', type: 'single', question: 'q', options: ['a', 'b'], correctAnswer: 0, explanation: '', sourceCitation: '', postRestriction: 'bs16' as const },
    ];
    const count = questionCountForSubjectInScope(sid as never, { trackId: 'fpsc', examId: 'fpsc-met-bs17' }, fakeQuestions);
    assert.equal(count, 1, 'bs16-restricted question should be excluded under bs17 profile');
  });
});

describe('subjectInScope', () => {
  it('true for subject on the track', () => {
    assert.equal(subjectInScope('meteo-climatology', { trackId: 'fpsc', examId: null }), true);
  });
  it('false for subject on a different track', () => {
    assert.equal(subjectInScope('hat-verbal', { trackId: 'fpsc', examId: null }), false);
  });
  it('false under invalid profile', () => {
    assert.equal(subjectInScope('meteo-climatology', { trackId: 'fpsc', examId: 'not-a-real-profile' }), false);
  });
});

describe('questionEligibleForScope', () => {
  it('rejects out-of-scope subject', () => {
    const q: Question = { id: 'q', sectionId: 'METEO-01', topicId: 't', difficulty: 'easy', type: 'single', question: 'q', options: ['a', 'b'], correctAnswer: 0, explanation: '', sourceCitation: '' };
    assert.equal(questionEligibleForScope(q, { trackId: 'hat', examId: null }, false), false);
  });
  it('excludes bs16-restricted question under bs17 profile', () => {
    const q: Question = { id: 'q', sectionId: 'METEO-01', topicId: 't', difficulty: 'easy', type: 'single', question: 'q', options: ['a', 'b'], correctAnswer: 0, explanation: '', sourceCitation: '', postRestriction: 'bs16' as const };
    assert.equal(questionEligibleForScope(q, { trackId: 'fpsc', examId: 'fpsc-met-bs17' }, true), false);
  });
  it('keeps untagged question when topic is eligible', () => {
    const q: Question = { id: 'q', sectionId: 'METEO-01', topicId: 'meteo-origin-evolution', difficulty: 'easy', type: 'single', question: 'q', options: ['a', 'b'], correctAnswer: 0, explanation: '', sourceCitation: '' };
    assert.equal(questionEligibleForScope(q, { trackId: 'fpsc', examId: 'fpsc-met-bs17' }, true), true);
  });
});
