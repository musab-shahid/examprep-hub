/**
 * Pure quiz-session contracts: request integrity, draft validation, option permutations.
 * No React — unit-testable.
 */
import type { DifficultyFilter, PracticeMode, Question, TimeLimitSetting } from '../types.ts';
import type { ScopeInput } from './track-scope.ts';
import { sectionMap } from '../data/sections.ts';
import { getTopic } from '../data/topics.ts';
import { contentEligibleForScope } from './track-scope.ts';
import { isTrackId } from '../data/tracks.ts';

export type QuizSessionSnapshot = {
  trackId: string;
  examId: string | null;
  allowedSubjectIds: string[];
  scopeInput: ScopeInput;
};

export type QuizRequest = {
  mode: PracticeMode;
  topicId?: string;
  topicIds?: string[];
  scope?: 'subject' | 'all';
  subjectId?: string;
  count?: number | 'all';
  difficulty?: DifficultyFilter;
  wrongPool?: boolean;
  timeLimit?: TimeLimitSetting;
};

export type QuizRequestValidation =
  | { ok: true; request: QuizRequest }
  | { ok: false; reason: string };

/** Fail-closed request coherence (no workspace yet). */
export function validateQuizRequest(params: QuizRequest): QuizRequestValidation {
  if (params.scope === 'subject') {
    if (!params.subjectId || params.subjectId === '') {
      return { ok: false, reason: 'scope=subject requires a non-empty subjectId' };
    }
  }
  if (params.mode === 'topic') {
    if (!params.topicId || params.topicId === '') {
      return { ok: false, reason: 'mode=topic requires topicId' };
    }
  }
  // Explicit empty topic list is not general practice
  if (params.topicIds !== undefined && params.topicIds.length === 0) {
    return { ok: false, reason: 'topicIds is empty — not general practice' };
  }
  // Deduplicate topicIds deliberately
  if (params.topicIds && params.topicIds.length > 0) {
    const unique = [...new Set(params.topicIds)];
    if (unique.length !== params.topicIds.length) {
      return {
        ok: true,
        request: { ...params, topicIds: unique },
      };
    }
  }
  return { ok: true, request: params };
}

export function isValidOptionPermutation(order: number[], optionCount: number): boolean {
  if (!Array.isArray(order) || order.length !== optionCount) return false;
  if (optionCount === 0) return order.length === 0;
  const seen = new Set<number>();
  for (const n of order) {
    if (!Number.isInteger(n) || n < 0 || n >= optionCount) return false;
    if (seen.has(n)) return false;
    seen.add(n);
  }
  return seen.size === optionCount;
}

export type SavedDraftShape = {
  questionIds: string[];
  optionOrders?: number[][];
  answers: Array<{
    questionId: string;
    correct: boolean;
    selectedIndices: number[];
  }>;
  elapsedSeconds?: number;
  currentIdx: number;
  mode: PracticeMode;
  topicId?: string;
  topicIds?: string[];
  scope?: 'subject' | 'all';
  subjectId?: string;
  count?: number | 'all';
  difficulty?: DifficultyFilter;
  timeLimit?: TimeLimitSetting;
  wrongPool?: boolean;
  track?: string | null;
  examId?: string | null;
};

export type DraftValidation =
  | { ok: true; draft: SavedDraftShape }
  | { ok: false; reason: string };

export function validateDraftShape(raw: unknown): DraftValidation {
  if (!raw || typeof raw !== 'object') return { ok: false, reason: 'not-object' };
  const p = raw as Record<string, unknown>;
  if (!Array.isArray(p.questionIds) || p.questionIds.length === 0) {
    return { ok: false, reason: 'empty-question-ids' };
  }
  const questionIds: string[] = [];
  const seen = new Set<string>();
  for (const id of p.questionIds) {
    if (typeof id !== 'string' || id === '') return { ok: false, reason: 'bad-question-id' };
    if (seen.has(id)) return { ok: false, reason: 'duplicate-question-id' };
    seen.add(id);
    questionIds.push(id);
  }
  if (!Array.isArray(p.answers)) return { ok: false, reason: 'answers-not-array' };
  for (const a of p.answers) {
    if (!a || typeof a !== 'object') return { ok: false, reason: 'bad-answer' };
    const ar = a as Record<string, unknown>;
    if (typeof ar.questionId !== 'string' || !seen.has(ar.questionId)) {
      return { ok: false, reason: 'answer-unknown-question' };
    }
    if (typeof ar.correct !== 'boolean') return { ok: false, reason: 'answer-correct-type' };
    if (!Array.isArray(ar.selectedIndices)) return { ok: false, reason: 'answer-indices' };
    for (const idx of ar.selectedIndices) {
      if (typeof idx !== 'number' || !Number.isInteger(idx) || idx < 0) {
        return { ok: false, reason: 'answer-index-range' };
      }
    }
  }
  if (typeof p.currentIdx !== 'number' || !Number.isInteger(p.currentIdx) || p.currentIdx < 0) {
    return { ok: false, reason: 'bad-currentIdx' };
  }
  if (p.currentIdx >= questionIds.length) return { ok: false, reason: 'currentIdx-oob' };
  if (p.elapsedSeconds !== undefined) {
    if (typeof p.elapsedSeconds !== 'number' || !Number.isFinite(p.elapsedSeconds) || p.elapsedSeconds < 0) {
      return { ok: false, reason: 'bad-elapsed' };
    }
  }
  if (p.track != null && p.track !== '' && !isTrackId(String(p.track))) {
    return { ok: false, reason: 'invalid-track' };
  }
  if (p.examId === '') return { ok: false, reason: 'empty-examId' };

  if (p.optionOrders !== undefined) {
    if (!Array.isArray(p.optionOrders)) return { ok: false, reason: 'optionOrders-type' };
    if (p.optionOrders.length > 0 && p.optionOrders.length !== questionIds.length) {
      return { ok: false, reason: 'optionOrders-length' };
    }
  }

  return {
    ok: true,
    draft: {
      questionIds,
      optionOrders: p.optionOrders as number[][] | undefined,
      answers: p.answers as SavedDraftShape['answers'],
      elapsedSeconds: p.elapsedSeconds as number | undefined,
      currentIdx: p.currentIdx as number,
      mode: p.mode as PracticeMode,
      topicId: p.topicId as string | undefined,
      topicIds: p.topicIds as string[] | undefined,
      scope: p.scope as 'subject' | 'all' | undefined,
      subjectId: p.subjectId as string | undefined,
      count: p.count as number | 'all' | undefined,
      difficulty: p.difficulty as DifficultyFilter | undefined,
      timeLimit: p.timeLimit as TimeLimitSetting | undefined,
      wrongPool: p.wrongPool as boolean | undefined,
      track: (p.track as string | null | undefined) ?? null,
      examId: (p.examId as string | null | undefined) ?? null,
    },
  };
}

/** Every saved question must match the original request constraints. */
export function questionsMatchRequest(
  questions: Question[],
  request: QuizRequest,
): boolean {
  if (request.scope === 'subject' && request.subjectId) {
    for (const q of questions) {
      if (sectionMap[q.sectionId]?.subjectId !== request.subjectId) return false;
    }
  }
  if (request.mode === 'topic' && request.topicId) {
    for (const q of questions) {
      if (q.topicId !== request.topicId) return false;
    }
  }
  if (request.topicIds && request.topicIds.length > 0) {
    const set = new Set(request.topicIds);
    for (const q of questions) {
      if (!set.has(q.topicId)) return false;
    }
  }
  if (request.difficulty && request.difficulty !== 'any') {
    for (const q of questions) {
      if (q.difficulty !== request.difficulty) return false;
    }
  }
  return true;
}

export function topicBelongsToSubject(topicId: string, subjectId: string): boolean {
  const topic = getTopic(topicId);
  if (!topic) return false;
  return sectionMap[topic.sectionId]?.subjectId === subjectId;
}

export function questionInSessionScope(
  q: Question,
  snap: QuizSessionSnapshot,
): boolean {
  const sid = sectionMap[q.sectionId]?.subjectId;
  if (!sid || !snap.allowedSubjectIds.includes(sid)) return false;
  return contentEligibleForScope(q, snap.scopeInput);
}
