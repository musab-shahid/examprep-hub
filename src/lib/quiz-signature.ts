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
  count?: number;
  difficulty?: DifficultyFilter;
  wrongPool?: boolean;
  track?: 'fpsc' | 'hat';
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
  ].join('|');
}

export function signaturesMatch(a: QuizSignatureInput, b: QuizSignatureInput): boolean {
  return quizSignature(a) === quizSignature(b);
}
