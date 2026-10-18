/**
 * Canonical quiz pool selection — always constrained to active workspace scope.
 * Fail-closed: missing track or empty allowed subjects → [].
 */
import { allQuestions, questionsByTopic } from '../data/questions.ts';
import { sectionMap } from '../data/sections.ts';
import { getTopic } from '../data/topics.ts';
import {
  contentEligibleForScope,
  type ScopeInput,
} from './track-scope.ts';
import type { DifficultyFilter, PracticeMode, Question, SubjectId, TopicProgress } from '../types.ts';

export type QuizPoolParams = {
  mode: PracticeMode;
  topicId?: string;
  topicIds?: string[];
  scope?: 'subject' | 'all';
  subjectId?: string;
  count?: number | 'all';
  difficulty?: DifficultyFilter;
  wrongPool?: boolean;
  questionResults?: Record<string, { correct: boolean; timestamp: number }>;
  /** Active enrolled track; required for non-empty pool */
  track: string | null | undefined;
  /** Allowed subjects under track + exam profile */
  allowedSubjectIds: Set<string>;
  /** For content-level tags */
  scopeInput: ScopeInput | null;
  topicProgress?: Record<string, TopicProgress>;
};

function questionSubjectId(q: Question): string | undefined {
  return sectionMap[q.sectionId]?.subjectId;
}

function questionInWorkspace(
  q: Question,
  allowed: Set<string>,
  scopeInput: ScopeInput | null,
): boolean {
  const sid = questionSubjectId(q);
  if (!sid || !allowed.has(sid)) return false;
  if (scopeInput && !contentEligibleForScope(q, scopeInput)) return false;
  return true;
}

function topicInWorkspace(
  topicId: string,
  allowed: Set<string>,
  scopeInput: ScopeInput | null,
): boolean {
  const topic = getTopic(topicId);
  if (!topic) return false;
  const sid = sectionMap[topic.sectionId]?.subjectId;
  if (!sid || !allowed.has(sid)) return false;
  if (scopeInput && !contentEligibleForScope(topic, scopeInput)) return false;
  return true;
}

/**
 * Build the eligible question pool for a quiz session.
 * Applies workspace subject + content filters before wrong/difficulty/count.
 */
export function selectQuizPool(p: QuizPoolParams): Question[] {
  if (!p.track || p.allowedSubjectIds.size === 0) return [];

  if (p.mode === 'topic' && !p.topicId) return [];

  const fullPool = allQuestions();
  let pool: Question[];

  if (p.mode === 'topic' && p.topicId) {
    if (!topicInWorkspace(p.topicId, p.allowedSubjectIds, p.scopeInput)) return [];
    pool = questionsByTopic(p.topicId);
  } else if (p.topicIds && p.topicIds.length > 0) {
    // Reject mixed lists that include any out-of-scope topic (fail closed)
    for (const tid of p.topicIds) {
      if (!topicInWorkspace(tid, p.allowedSubjectIds, p.scopeInput)) return [];
    }
    const idSet = new Set(p.topicIds);
    pool = fullPool.filter((q) => idSet.has(q.topicId));
  } else if (p.scope === 'subject' && p.subjectId) {
    if (!p.allowedSubjectIds.has(p.subjectId)) return [];
    pool = fullPool.filter((q) => questionSubjectId(q) === p.subjectId);
  } else {
    pool = fullPool.filter((q) => {
      const sid = questionSubjectId(q);
      return sid != null && p.allowedSubjectIds.has(sid);
    });
  }

  // Workspace content tags (all paths)
  if (p.scopeInput) {
    pool = pool.filter((q) => contentEligibleForScope(q, p.scopeInput!));
  } else {
    pool = pool.filter((q) => {
      const sid = questionSubjectId(q);
      return sid != null && p.allowedSubjectIds.has(sid);
    });
  }

  if (p.wrongPool && p.questionResults) {
    const wrongIds = new Set(
      Object.entries(p.questionResults)
        .filter(([, r]) => !r.correct)
        .map(([qid]) => qid),
    );
    pool = pool.filter((q) => wrongIds.has(q.id));
  }

  if (p.difficulty && p.difficulty !== 'any') {
    pool = pool.filter((q) => q.difficulty === p.difficulty);
  }

  const targetCount = (() => {
    if (p.count === 'all' || (typeof p.count === 'number' && p.count >= 999)) return pool.length;
    if (p.count !== undefined) return p.count;
    if (p.mode === 'mock') return 60;
    if (p.mode === 'review' || p.mode === 'challenge') return pool.length;
    return 10;
  })();

  // Adaptive / mock mixing stays in QuizScreen for now — return full filtered pool
  // and let caller slice. Export target for callers.
  void targetCount;
  return pool;
}

/** Filter restored questions; returns null if any saved ID is missing or out of scope. */
export function filterRestoredQuestions(
  questions: Question[],
  savedIds: string[],
  allowedSubjectIds: Set<string>,
  scopeInput: ScopeInput | null,
): Question[] | null {
  if (savedIds.length === 0) return null;
  const byId = new Map(questions.map((q) => [q.id, q]));
  const out: Question[] = [];
  for (const id of savedIds) {
    const q = byId.get(id);
    if (!q) return null;
    if (!questionInWorkspace(q, allowedSubjectIds, scopeInput)) return null;
    out.push(q);
  }
  return out;
}

export function targetPoolCount(
  mode: PracticeMode,
  count: number | 'all' | undefined,
  poolLength: number,
): number {
  if (count === 'all' || (typeof count === 'number' && count >= 999)) return poolLength;
  if (count !== undefined) return Math.min(count, poolLength);
  if (mode === 'mock') return Math.min(60, poolLength);
  if (mode === 'review' || mode === 'challenge') return poolLength;
  return Math.min(10, poolLength);
}
