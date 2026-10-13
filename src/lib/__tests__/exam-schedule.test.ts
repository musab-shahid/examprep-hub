import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  FPSC_OCT_2026_SESSIONS,
  getCountdownParts,
  formatCountdownShort,
  getNextSession,
  hasUpcomingExam,
} from '../exam-schedule.ts';

describe('exam-schedule', () => {
  it('getCountdownParts future date', () => {
    const now = new Date('2026-10-10T00:00:00+05:00');
    const parts = getCountdownParts(FPSC_OCT_2026_SESSIONS[0].startsAtIso, now);
    assert.equal(parts.started, false);
    assert.ok(parts.days >= 5);
  });

  it('getCountdownParts after start time', () => {
    const now = new Date('2026-10-16T10:00:00+05:00');
    const parts = getCountdownParts(FPSC_OCT_2026_SESSIONS[0].startsAtIso, now);
    assert.equal(parts.started, true);
    assert.equal(formatCountdownShort(parts), 'Started');
  });

  it('getNextSession returns upcoming session before window', () => {
    const now = new Date('2026-10-15T10:00:00+05:00');
    const next = getNextSession(FPSC_OCT_2026_SESSIONS, now);
    assert.equal(next?.id, 'fpsc-oct-2026-window');
    assert.equal(hasUpcomingExam(FPSC_OCT_2026_SESSIONS, now), true);
  });

  it('getNextSession null after window starts', () => {
    const now = new Date('2026-10-16T10:00:00+05:00');
    assert.equal(getNextSession(FPSC_OCT_2026_SESSIONS, now), null);
    assert.equal(hasUpcomingExam(FPSC_OCT_2026_SESSIONS, now), false);
  });

  it('getNextSession null after all done', () => {
    const now = new Date('2026-10-17T00:00:00+05:00');
    assert.equal(getNextSession(FPSC_OCT_2026_SESSIONS, now), null);
  });
});
