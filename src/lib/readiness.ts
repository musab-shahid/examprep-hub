import type { AppData } from '@/types';
import { getEffectiveQuizStats, computeMasteryScore } from '@/lib/constants';

export interface ReadinessResult {
  score: number;
  coveragePct: number;
  masteryPct: number;
  accuracyPct: number;
}

export function computeReadiness(
  data: AppData,
  totalTopics: number,
  scopedTopicIds: Set<string>,
): ReadinessResult {
  const studiedInScope = data.studiedTopics.filter((id) => scopedTopicIds.has(id)).length;
  const coveragePct = totalTopics > 0 ? Math.round((studiedInScope / totalTopics) * 100) : 0;

  let totalAttempts = 0;
  let totalCorrect = 0;
  let masteredCount = 0;
  for (const [topicId, p] of Object.entries(data.topicProgress)) {
    if (!scopedTopicIds.has(topicId)) continue;
    const eff = getEffectiveQuizStats(p);
    totalAttempts += eff.total;
    totalCorrect += eff.correct;
    if (eff.total >= 3 && eff.accuracy >= 80) masteredCount++;
  }

  const accuracyPct = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
  const masteryPct = scopedTopicIds.size > 0 ? Math.round((masteredCount / scopedTopicIds.size) * 100) : 0;
  const score = computeMasteryScore(studiedInScope, totalTopics, accuracyPct);

  return { score, coveragePct, masteryPct, accuracyPct };
}

export function readinessLabel(score: number): string {
  if (score >= 80) return 'Well prepared';
  if (score >= 60) return 'On track';
  if (score >= 40) return 'Building up';
  if (score >= 20) return 'Getting started';
  return 'Just beginning';
}

export interface GainOpportunity {
  topicId: string;
  potentialGain: number;
}

export function rankScoreGainOpportunities(
  data: AppData,
  scopedTopicIds: Set<string>,
  count = 3,
): GainOpportunity[] {
  const candidates: GainOpportunity[] = [];
  for (const topicId of scopedTopicIds) {
    const p = data.topicProgress[topicId];
    const studied = data.studiedTopics.includes(topicId);
    const eff = p ? getEffectiveQuizStats(p) : { total: 0, accuracy: 0 };
    if (eff.total >= 3 && eff.accuracy >= 80) continue;
    const gap = (studied ? 10 : 20) + (100 - eff.accuracy);
    candidates.push({ topicId, potentialGain: gap });
  }
  return candidates.sort((a, b) => b.potentialGain - a.potentialGain).slice(0, count);
}
