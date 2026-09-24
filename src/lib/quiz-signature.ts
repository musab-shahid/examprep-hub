/**
 * Pure quiz resume signature — must match for resume to be offered.
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
  return [
    p.mode,
    p.topicId ?? '',
    (p.topicIds ?? []).join(','),
    p.scope ?? '',
    p.subjectId ?? '',
    p.count ?? '',
    p.difficulty ?? '',
    p.wrongPool ? '1' : '0',
    p.track ?? '',
    p.timeLimit === undefined || p.timeLimit === null ? '' : String(p.timeLimit),
  ].join('|');
}

export function signaturesMatch(a: QuizSignatureInput, b: QuizSignatureInput): boolean {
  return quizSignature(a) === quizSignature(b);
}
