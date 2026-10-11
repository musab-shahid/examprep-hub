/**
 * Pure quiz resume signature — must match for resume to be offered.
 * Uses JSON.stringify on a stable shape so field values cannot inject delimiters
 * (e.g. topicIds ["a,b"] vs ["a","b"] no longer collide).
 */
import type { DifficultyFilter, PracticeMode } from '../types';

export type QuizSignatureInput = {
  mode: PracticeMode;
  topicId?: string;
  topicIds?: string[];
  scope?: 'subject' | 'all';
  subjectId?: string;
  count?: number | 'all';
  difficulty?: DifficultyFilter;
  wrongPool?: boolean;
  track?: 'fpsc' | 'hat';
  timeLimit?: number | 'none' | 'auto' | string;
};

export function quizSignature(p: QuizSignatureInput): string {
  const topicIds = [...(p.topicIds ?? [])].map(String).sort();
  return JSON.stringify({
    mode: p.mode,
    topicId: p.topicId ?? null,
    topicIds,
    scope: p.scope ?? null,
    subjectId: p.subjectId ?? null,
    count: p.count ?? null,
    difficulty: p.difficulty ?? null,
    wrongPool: Boolean(p.wrongPool),
    track: p.track ?? null,
    timeLimit:
      p.timeLimit === undefined || p.timeLimit === null ? null : String(p.timeLimit),
  });
}

export function signaturesMatch(a: QuizSignatureInput, b: QuizSignatureInput): boolean {
  return quizSignature(a) === quizSignature(b);
}
