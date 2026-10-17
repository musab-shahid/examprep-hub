import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { subjectsForScope, subjectIdsForScope } from '../track-scope.ts';
import { assertCanStudy } from '../track-access.ts';
import type { AppData } from '../../types.ts';

describe('track scope', () => {
  it('returns fpsc subjects for general scope', () => {
    const list = subjectsForScope({ trackId: 'fpsc', examId: null });
    assert.ok(list.length >= 5);
    assert.ok(list.some((s) => s.id === 'meteo-climatology'));
    assert.ok(!list.some((s) => s.id.startsWith('hat-')));
  });

  it('returns hat subjects only for hat scope', () => {
    const ids = subjectIdsForScope({ trackId: 'hat' });
    assert.ok(ids.has('hat-verbal' as never) || [...ids].some((id) => String(id).includes('hat')));
  });
});

describe('assertCanStudy', () => {
  const empty: AppData = {
    studiedTopics: [],
    topicProgress: {},
    questionResults: {},
    quizHistory: [],
    revisionDates: {},
    lastOpenedTopic: '',
  };

  it('fails with no enrollment', () => {
    const r = assertCanStudy(empty);
    assert.equal(r.ok, false);
  });

  it('passes when enrolled', () => {
    const data: AppData = {
      ...empty,
      trackMembership: {
        schemaVersion: 1,
        enrollments: {
          fpsc: {
            enrolledAt: '2026-01-01T00:00:00.000Z',
            source: 'explicit',
            lastOpenedAt: null,
            activeExamId: null,
          },
        },
        activeTrackId: 'fpsc',
      },
    };
    assert.equal(assertCanStudy(data).ok, true);
    assert.equal(assertCanStudy(data, 'fpsc').ok, true);
    assert.equal(assertCanStudy(data, 'hat').ok, false);
  });
});
