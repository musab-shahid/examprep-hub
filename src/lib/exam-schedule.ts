export interface ExamSession {
  id: string;
  label: string;
  startsAtIso: string;
  note: string;
}

export const FPSC_OCT_2026_SESSIONS: ExamSession[] = [
  {
    id: 'fpsc-oct-2026-window',
    label: 'Exam Window',
    startsAtIso: '2026-10-16T09:00:00+05:00',
    note: 'FPSC subject test window opens. Check your roll number slip for the exact date and time.',
  },
];

export interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  started: boolean;
}

export function getCountdownParts(iso: string, now: Date = new Date()): CountdownParts {
  const target = new Date(iso).getTime();
  const diff = target - now.getTime();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, started: true };
  }
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1_000);
  return { days, hours, minutes, seconds, started: false };
}

export function formatCountdownShort(c: CountdownParts): string {
  if (c.started) return 'Started';
  if (c.days > 0) return `${c.days}d ${c.hours}h`;
  if (c.hours > 0) return `${c.hours}h ${c.minutes}m`;
  return `${c.minutes}m ${c.seconds}s`;
}

export function getNextSession(
  sessions: ExamSession[],
  now: Date = new Date(),
): ExamSession | null {
  const sorted = [...sessions].sort(
    (a, b) => new Date(a.startsAtIso).getTime() - new Date(b.startsAtIso).getTime(),
  );
  return sorted.find((s) => new Date(s.startsAtIso).getTime() > now.getTime()) ?? sorted[0] ?? null;
}

export function hasUpcomingExam(sessions: ExamSession[], now: Date = new Date()): boolean {
  return sessions.some((s) => new Date(s.startsAtIso).getTime() > now.getTime());
}
