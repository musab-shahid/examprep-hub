/**
 * Predictive readiness (skill-based only).
 *
 * Intentionally does NOT mix "days until exam" into the score —
 * urgency is shown separately via exam-schedule countdown.
 * That avoids punishing prepared students as the date approaches.
 *
 * Pure functions — safe to unit-test; no storage mutation.
 */

import type { AppData } from '@/types';
import {
  getEffectiveQuizStats,
  MASTERY_MIN_QUIZ_ATTEMPTS,
  MASTERY_ACCURACY_THRESHOLD,
  deriveStatus,
} from '@/lib/constants';
import { isTopicMastered, countMasteredTopics } from '@/lib/attention';

export type ReadinessBreakdown = {
  /** 0–100 composite */
  score: number;
  coveragePct: number;
  masteryPct: number;
  accuracyPct: number;
  studied: number;
  totalTopics: number;
  mastered: number;
  quizAnswered: number;
};

export type ScoreGainOpportunity = {
  topicId: string;
  accuracy: number;
  attempts: number;
  /** Relative priority 0–1 within this list */
  priority: number;
  /** Soft estimate of readiness points if brought to mastery threshold — not real exam marks */
  estReadinessGain: number;
};

const W_COVERAGE = 0.3;
const W_MASTERY = 0.4;
const W_ACCURACY = 0.3;

/**
 * Composite readiness from existing local progress.
 * @param totalTopics count of topics in the active track/scope
 * @param scopedTopicIds if set, only those topics count
 */
export function computeReadiness(
  data: AppData,
  totalTopics: number,
  scopedTopicIds?: Set<string> | null,
): ReadinessBreakdown {
  const total = Math.max(0, totalTopics);
  const studiedList = (data.studiedTopics ?? []).filter(
    (id) => !scopedTopicIds || scopedTopicIds.has(id),
  );
  const studied = studiedList.length;
  const mastered = countMasteredTopics(data, scopedTopicIds ?? null);

  let correct = 0;
  let attempts = 0;
  for (const [tid, prog] of Object.entries(data.topicProgress ?? {})) {
    if (scopedTopicIds && !scopedTopicIds.has(tid)) continue;
    const eff = getEffectiveQuizStats(prog);
    correct += (eff.accuracy / 100) * eff.total;
    attempts += eff.total;
  }

  const coveragePct = total > 0 ? Math.round((studied / total) * 100) : 0;
  const masteryPct = total > 0 ? Math.round((mastered / total) * 100) : 0;
  const accuracyPct = attempts > 0 ? Math.round((correct / attempts) * 100) : 0;

  // Cold start: no quizzes yet → accuracy weight redistributed to coverage/mastery
  let score: number;
  if (attempts < MASTERY_MIN_QUIZ_ATTEMPTS) {
    const wC = W_COVERAGE + W_ACCURACY * 0.5;
    const wM = W_MASTERY + W_ACCURACY * 0.5;
    score = wC * coveragePct + wM * masteryPct;
  } else {
    score = W_COVERAGE * coveragePct + W_MASTERY * masteryPct + W_ACCURACY * accuracyPct;
  }

  return {
    score: Math.round(Math.min(100, Math.max(0, score))),
    coveragePct,
    masteryPct,
    accuracyPct,
    studied,
    totalTopics: total,
    mastered,
    quizAnswered: attempts,
  };
}

/**
 * Rank topics where improving accuracy toward the mastery threshold
 * would most lift the composite readiness (heuristic, not FPSC marks).
 */
export function rankScoreGainOpportunities(
  data: AppData,
  scopedTopicIds: Set<string> | null | undefined,
  limit = 4,
): ScoreGainOpportunity[] {
  const rows: ScoreGainOpportunity[] = [];

  for (const [tid, prog] of Object.entries(data.topicProgress ?? {})) {
    if (scopedTopicIds && !scopedTopicIds.has(tid)) continue;
    if (isTopicMastered(tid, data)) continue;
    const eff = getEffectiveQuizStats(prog);
    if (eff.total < 1) continue;

    const gap = Math.max(0, MASTERY_ACCURACY_THRESHOLD - eff.accuracy) / 100;
    // More attempts + larger gap → clearer opportunity
    const priority = gap * Math.log10(eff.total + 1);
    // Soft readiness points: closing gap on a studied topic ~ proportional to mastery weight share
    const estReadinessGain = Math.round(W_MASTERY * gap * 100 * 0.25);

    rows.push({
      topicId: tid,
      accuracy: eff.accuracy,
      attempts: eff.total,
      priority,
      estReadinessGain: Math.max(1, estReadinessGain),
    });
  }

  rows.sort((a, b) => b.priority - a.priority);
  const top = rows.slice(0, limit);
  const maxP = top[0]?.priority || 1;
  return top.map((r) => ({ ...r, priority: r.priority / maxP }));
}

export function readinessLabel(score: number): string {
  if (score >= 80) return 'Strong';
  if (score >= 60) return 'On track';
  if (score >= 40) return 'Building';
  if (score >= 20) return 'Early';
  return 'Just starting';
}
