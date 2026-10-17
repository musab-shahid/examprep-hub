import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  resolveLearningScope,
  canAccessSubject,
  scopeInputFromData,
} from '../learning-scope.ts';
import { withEnrollAndFocus } from '../track-focus.ts';
import { emptyTrackMembership, setActiveExamProfile } from '../track-membership.ts';
import type { AppData } from '../../types.ts';

function base(): AppData {
  return {
    studiedTopics: [],
    topicProgress: {},
    questionResults: {},
    quizHistory: [],
    revisionDates: {},
    lastOpenedTopic: '',
    trackMembership: emptyTrackMembership(),
  };
}

describe('resolveLearningScope', () => {
  it('null when not enrolled', () => {
    assert.equal(resolveLearningScope(base()), null);
  });

  it('returns focus track subjects after enroll', () => {
    const d = withEnrollAndFocus(base(), 'fpsc').data;
    const scope = resolveLearningScope(d);
    assert.ok(scope);
    assert.equal(scope!.trackId, 'fpsc');
    assert.equal(scope!.examId, null);
    assert.ok(scope!.subjects.length > 0);
  });

  it('invalid profile on enrollment yields empty subject set via subjectsForScope', () => {
    let d = withEnrollAndFocus(base(), 'fpsc').data;
    // Force invalid exam id on record (bypass setActiveExamProfile validation)
    d = {
      ...d,
      trackMembership: {
        ...d.trackMembership!,
        enrollments: {
          fpsc: {
            ...d.trackMembership!.enrollments.fpsc!,
            activeExamId: 'not-real',
          },
        },
      },
    };
    const scope = resolveLearningScope(d);
    assert.ok(scope);
    assert.equal(scope!.subjects.length, 0);
  });
});

describe('canAccessSubject', () => {
  it('denies subject on other track', () => {
    const d = withEnrollAndFocus(base(), 'fpsc').data;
    const r = canAccessSubject(d, 'hat-verbal');
    assert.equal(r.ok, false);
  });

  it('allows fpsc subject when enrolled in fpsc', () => {
    const d = withEnrollAndFocus(base(), 'fpsc').data;
    const r = canAccessSubject(d, 'physics');
    assert.equal(r.ok, true);
  });
});

describe('scopeInputFromData', () => {
  it('mirrors resolveLearningScope', () => {
    const d = withEnrollAndFocus(base(), 'hat').data;
    const input = scopeInputFromData(d);
    assert.deepEqual(input, { trackId: 'hat', examId: null });
  });
});
