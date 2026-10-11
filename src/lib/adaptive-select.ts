/**
 * Adaptive question selection
 * Phase 1: wrong / unseen / SR urgency / weak topics / recency
 * Phase 2: per-topic Elo ability + near-miss difficulty targeting
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

/** Item difficulty on the same scale as topic ability θ */
export const DIFFICULTY_DELTA: Record<Difficulty, number> = {
  easy: -0.7,
  medium: 0,
  hard: 0.7,
};

/** Elo step size (logit scale). Higher = faster adaptation with sparse data. */
export const ABILITY_K = 0.35;

/** Target success probability for maximal learning (slightly hard). */
export const NEAR_MISS_TARGET_P = 0.68;

const W = {
  wrong: 0.25,
  unseen: 0.15,
  srOverdue: 0.12,
  srSoon: 0.08,
  srWeek: 0.04,
  weakTopic: 0.08,
  nearMiss: 0.25,
  reviewBoost: 0.12,
  challengeHard: 0.04,
  challengeMedium: 0.02,
  staleCorrect: 0.04,
  recentDay: -0.2,
  recent3Days: -0.08,
  jitter: 0.04,
} as const;

export function sigmoid(x: number): number {
  if (x >= 15) return 1;
  if (x <= -15) return 0;
  return 1 / (1 + Math.exp(-x));
}

export function logit(p: number): number {
  const clamped = Math.min(0.95, Math.max(0.05, p));
  return Math.log(clamped / (1 - clamped));
}

export function difficultyDelta(d: Difficulty | undefined): number {
  if (!d) return DIFFICULTY_DELTA.medium;
  return DIFFICULTY_DELTA[d] ?? 0;
}

/**
 * Topic ability θ. Uses stored abilityElo when present; otherwise cold-starts
 * from recent accuracy (logit) or 0.
 */
export function getTopicAbility(progress: TopicProgress | undefined): number {
  if (progress?.abilityElo != null && Number.isFinite(progress.abilityElo)) {
    return progress.abilityElo as number;
  }
  if (progress) {
    const eff = getEffectiveQuizStats(progress);
    if (eff.total >= 3) {
      return logit(eff.accuracy / 100);
    }
  }
  return 0;
}

/** Predicted P(correct | θ, difficulty). */
export function predictedSuccess(ability: number, difficulty: Difficulty | undefined): number {
  return sigmoid(ability - difficultyDelta(difficulty));
}

/**
 * Update θ after one answer (1PL-style Elo on logit scale).
 */
export function updateTopicAbility(
  currentAbility: number | undefined,
  difficulty: Difficulty | undefined,
  correct: boolean,
  k: number = ABILITY_K,
): number {
  const θ = currentAbility ?? 0;
  const p = predictedSuccess(θ, difficulty);
  const y = correct ? 1 : 0;
  return θ + k * (y - p);
}

/**
 * Near-miss score in [0, 1]: highest when predicted success ≈ NEAR_MISS_TARGET_P.
 */
export function nearMissScore(ability: number, difficulty: Difficulty | undefined): number {
  const p = predictedSuccess(ability, difficulty);
  // Triangle peak at target: distance 0 → 1, distance ≥ 0.5 → 0
  const dist = Math.abs(p - NEAR_MISS_TARGET_P);
  return Math.max(0, 1 - dist / 0.5);
}

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
  const gap = (MASTERY_ACCURACY_THRESHOLD - eff.accuracy) / MASTERY_ACCURACY_THRESHOLD;
  return W.weakTopic * Math.min(1, Math.max(0, gap));
}

/**
 * Learning-priority score for one question. Higher = ask sooner.
 */
export function scoreQuestion(q: Question, opts: AdaptiveSelectOptions): number {
  const now = opts.now ?? Date.now();
  const today = parseLocalDate(localDateString(new Date(now)));
  const results = opts.questionResults ?? {};
  const progressMap = opts.topicProgress ?? {};
  const recent = new Set(opts.recentQuestionIds ?? []);
  const r = results[q.id];
  const prog = progressMap[q.topicId];
  const ability = getTopicAbility(prog);

  let s = 0;

  // Phase 1: error / novelty
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

  s += srUrgency(prog, today);
  s += weakTopicBoost(prog);

  // Phase 2: near-miss difficulty (skip pure random hard/easy)
  s += W.nearMiss * nearMissScore(ability, q.difficulty);

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
 * Rank pool by adaptive score and take the top `count` items.
 */
export function pickAdaptiveQuestions(
  pool: Question[],
  count: number,
  opts: AdaptiveSelectOptions,
): Question[] {
  if (pool.length === 0 || count <= 0) return [];
  if (count >= pool.length) {
    return [...pool].sort((a, b) => scoreQuestion(b, opts) - scoreQuestion(a, opts));
  }

  const ranked = pool
    .map((q) => ({ q, score: scoreQuestion(q, opts) }))
    .sort((a, b) => b.score - a.score);

  return ranked.slice(0, count).map((x) => x.q);
}

export const ADAPTIVE_WEIGHTS = W;
/** @deprecated use ADAPTIVE_WEIGHTS */
export const ADAPTIVE_WEIGHTS_PHASE1 = W;
