/**
 * Fixed official exam windows (Pakistan Standard Time = Asia/Karachi, UTC+5).
 *
 * FPSC BS-16 / BS-17: 16 Oct 2026 — one morning paper, one noon paper.
 * Exact paper order (which code is AM vs noon) can vary by admit card;
 * labels stay neutral. Confirm times on your admit card.
 *
 * Pure helpers only — no React, no storage writes.
 */

export type ExamSession = {
  id: string;
  /** Short label for UI */
  label: string;
  /** ISO-8601 with explicit +05:00 offset (PKT) */
  startsAtIso: string;
  /** Optional note under the countdown */
  note?: string;
};

/** Official window for the imminent FPSC papers */
export const FPSC_OCT_2026_SESSIONS: ExamSession[] = [
  {
    id: 'fpsc-2026-10-16-morning',
    label: 'Morning paper',
    startsAtIso: '2026-10-16T09:00:00+05:00',
    note: 'BS-16 / BS-17 — confirm seat & exact start on admit card',
  },
  {
    id: 'fpsc-2026-10-16-noon',
    label: 'Noon paper',
    startsAtIso: '2026-10-16T12:00:00+05:00',
    note: 'Second paper same day — confirm order on admit card',
  },
];

export type CountdownParts = {
  totalMs: number;
  /** true when start time has passed */
  started: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function getCountdownParts(targetIso: string, now: Date = new Date()): CountdownParts {
  const target = new Date(targetIso).getTime();
  const totalMs = target - now.getTime();
  if (!Number.isFinite(target)) {
    return { totalMs: 0, started: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  if (totalMs <= 0) {
    return { totalMs: 0, started: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  const sec = Math.floor(totalMs / 1000);
  const days = Math.floor(sec / 86400);
  const hours = Math.floor((sec % 86400) / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = sec % 60;
  return { totalMs, started: false, days, hours, minutes, seconds };
}

export function formatCountdownShort(parts: CountdownParts): string {
  if (parts.started) return 'Started';
  if (parts.days > 0) {
    return `${parts.days}d ${parts.hours}h ${parts.minutes}m`;
  }
  if (parts.hours > 0) {
    return `${parts.hours}h ${parts.minutes}m ${parts.seconds}s`;
  }
  return `${parts.minutes}m ${parts.seconds}s`;
}

/** Next session that has not started yet; null if all passed */
export function getNextSession(
  sessions: ExamSession[] = FPSC_OCT_2026_SESSIONS,
  now: Date = new Date(),
): ExamSession | null {
  const upcoming = sessions
    .map((s) => ({ s, t: new Date(s.startsAtIso).getTime() }))
    .filter((x) => Number.isFinite(x.t) && x.t > now.getTime())
    .sort((a, b) => a.t - b.t);
  return upcoming[0]?.s ?? null;
}

/** True if any session is still in the future */
export function hasUpcomingExam(
  sessions: ExamSession[] = FPSC_OCT_2026_SESSIONS,
  now: Date = new Date(),
): boolean {
  return getNextSession(sessions, now) != null;
}
