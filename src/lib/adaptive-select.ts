/**
 * Phase 1 adaptive question selection.
 * Ranks a filtered pool by learning priority: wrong answers, unseen items,
 * spaced-review urgency, weak topics, and recency penalty.
 * No Elo / near-miss yet (Phase 2).
 */
import type { Difficulty, PracticeMode, Question, TopicProgress } from '@/types';
import {
  MASTERY_ACCURACY_THRESHOLD,
  getEffectiveQuizStats,
  localDateString,
  parseLocalDate,
} from '@/lib/constants';

export type QuestionResultLike = {
  correct: boolean;
  timestamp: number;
  attempts?: number;
};

export interface AdaptiveSelectOptions {
  mode: PracticeMode;
  questionResults?: Record<string, QuestionResultLike>;
  topicProgress?: Record<string, TopicProgress>;
  /** Extra ids to treat as "just seen" (current session) */
  recentQuestionIds?: string[];
  /** Injected clock for tests */
  now?: number;
  /** Disable random jitter (tests) */
  deterministic?: boolean;
}

const DAY_MS = 24 * 60 * 60 * 1000;

/** Weights — sum of positive terms ≈ 0.75; penalty up to −0.20 */
const W = {
  wrong: 0.3,
  unseen: 0.2,
  srOverdue: 0.15,
  srSoon: 0.1,
  srWeek: 0.05,
  weakTopic: 0.1,
  reviewBoost: 0.15,
  challengeHard: 0.05,
  challengeMedium: 0.03,
  staleCorrect: 0.05,
  recentDay: -0.2,
  recent3Days: -0.08,
  jitter: 0.05,
} as const;

function daysBetweenLocal(a: Date, b: Date): number {
  const a0 = new Date(a.getFullYear(), a.getMonth(), a.getDate()).getTime();
  const b0 = new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime();
  return (a0 - b0) / DAY_MS;
}

function srUrgency(progress: TopicProgress | undefined, today: Date): number {
  if (!progress?.nextReview) return 0;
  try {
    const due = parseLocalDate(progress.nextReview);
    const daysUntil = daysBetweenLocal(due, today);
    if (daysUntil <= 0) return W.srOverdue;
    if (daysUntil <= 2) return W.srSoon;
    if (daysUntil <= 7) return W.srWeek;
    return 0;
  } catch {
    return 0;
  }
}

function weakTopicBoost(progress: TopicProgress | undefined): number {
  if (!progress) return 0;
  const eff = getEffectiveQuizStats(progress);
  if (eff.total < 3) return 0;
  if (eff.accuracy >= MASTERY_ACCURACY_THRESHOLD) return 0;
  // Stronger boost the weaker the topic (0 at threshold → W.weakTopic at 0%)
  const gap = (MASTERY_ACCURACY_THRESHOLD - eff.accuracy) / MASTERY_ACCURACY_THRESHOLD;
  return W.weakTopic * Math.min(1, Math.max(0, gap));
}

/**
 * Learning-priority score for one question. Higher = ask sooner.
 */
export function scoreQuestion(
  q: Question,
  opts: AdaptiveSelectOptions,
): number {
  const now = opts.now ?? Date.now();
  const today = parseLocalDate(localDateString(new Date(now)));
  const results = opts.questionResults ?? {};
  const progressMap = opts.topicProgress ?? {};
  const recent = new Set(opts.recentQuestionIds ?? []);
  const r = results[q.id];
  const prog = progressMap[q.topicId];

  let s = 0;

  // Error / novelty
  if (!r) {
    s += W.unseen;
  } else if (!r.correct) {
    s += W.wrong;
  } else {
    const ageDays = (now - r.timestamp) / DAY_MS;
    if (ageDays > 14) s += W.staleCorrect;
  }

  // Recent repeat penalty
  if (recent.has(q.id)) {
    s += W.recentDay;
  } else if (r) {
    const age = now - r.timestamp;
    if (age < DAY_MS) s += W.recentDay;
    else if (age < 3 * DAY_MS) s += W.recent3Days;
  }

  // Spaced-review urgency (topic-level)
  s += srUrgency(prog, today);

  // Weak topic
  s += weakTopicBoost(prog);

  // Mode tweaks
  if (opts.mode === 'review') {
    if (!r || !r.correct) s += W.reviewBoost;
  }
  if (opts.mode === 'challenge') {
    if (q.difficulty === 'hard') s += W.challengeHard;
    else if (q.difficulty === 'medium') s += W.challengeMedium;
  }

  if (!opts.deterministic) {
    s += Math.random() * W.jitter;
  }

  return s;
}

/**
 * Rank pool by Phase-1 adaptive score and take the top `count` items.
 * Falls back to order-stable behavior when count >= pool length.
 */
export function pickAdaptiveQuestions(
  pool: Question[],
  count: number,
  opts: AdaptiveSelectOptions,
): Question[] {
  if (pool.length === 0 || count <= 0) return [];
  if (count >= pool.length) {
    // Still rank so order prefers high-priority items first
    return [...pool].sort(
      (a, b) => scoreQuestion(b, opts) - scoreQuestion(a, opts),
    );
  }

  const ranked = pool
    .map((q) => ({ q, score: scoreQuestion(q, opts) }))
    .sort((a, b) => b.score - a.score);

  return ranked.slice(0, count).map((x) => x.q);
}

/** Test helper: expose weight table */
export const ADAPTIVE_WEIGHTS_PHASE1 = W;
