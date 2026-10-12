import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  getCountdownParts,
  formatCountdownShort,
  getNextSession,
  FPSC_OCT_2026_SESSIONS,
} from '../exam-schedule.ts';

describe('exam-schedule', () => {
  it('counts down to morning session before exam', () => {
    const now = new Date('2026-10-12T21:00:00+05:00');
    const parts = getCountdownParts(FPSC_OCT_2026_SESSIONS[0].startsAtIso, now);
    assert.equal(parts.started, false);
    assert.ok(parts.days >= 3);
    assert.ok(formatCountdownShort(parts).includes('d'));
  });

  it('marks started after start time', () => {
    const now = new Date('2026-10-16T10:00:00+05:00');
    const parts = getCountdownParts(FPSC_OCT_2026_SESSIONS[0].startsAtIso, now);
    assert.equal(parts.started, true);
    assert.equal(formatCountdownShort(parts), 'Started');
  });

  it('getNextSession skips past sessions', () => {
    const now = new Date('2026-10-16T10:00:00+05:00');
    const next = getNextSession(FPSC_OCT_2026_SESSIONS, now);
    assert.equal(next?.id, 'fpsc-2026-10-16-noon');
  });

  it('getNextSession null after all done', () => {
    const now = new Date('2026-10-17T00:00:00+05:00');
    assert.equal(getNextSession(FPSC_OCT_2026_SESSIONS, now), null);
  });
});
