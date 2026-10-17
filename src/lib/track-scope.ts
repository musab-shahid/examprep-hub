/**
 * Single pipeline for subjects/content under track + optional exam profile.
 *
 * 1. Enrolled track subjects
 * 2. Profile subject policy (required ∪ optional)
 * 3. Content-level tags (examScope / postRestriction) when profile has scales
 */
import { subjectsByTrack } from '../data/subjects.ts';
import { isTrackId, getExamProfile, type TrackId, type ExamScale } from '../data/tracks.ts';
import type { SubjectId } from '../types.ts';
import type { Subject } from '../types.ts';

export type ScopeInput = {
  trackId: TrackId;
  /** null = general track preparation (all subjects on the track) */
  examId?: string | null;
};

export function subjectsForScope(input: ScopeInput): Subject[] {
  const { trackId, examId = null } = input;
  if (!isTrackId(trackId)) return [];
  const all = subjectsByTrack(trackId);
  if (!examId) return all;

  const profile = getExamProfile(trackId, examId);
  if (!profile) return all;

  const required = new Set(profile.requiredSubjectIds);
  const optional = new Set(profile.optionalSubjectIds ?? []);
  const allowed = new Set([...required, ...optional]);
  if (allowed.size === 0) return all;
  return all.filter((s) => allowed.has(s.id));
}

export function subjectIdsForScope(input: ScopeInput): Set<SubjectId> {
  return new Set(subjectsForScope(input).map((s) => s.id as SubjectId));
}

export function subjectInScope(subjectId: string, input: ScopeInput): boolean {
  return subjectIdsForScope(input).has(subjectId as SubjectId);
}

export type ContentTag = {
  examScope?: ('bs17' | 'bs16')[] | null;
  postRestriction?: 'bs17' | 'bs16' | 'all' | string | null;
};

/**
 * Whether a topic/question is eligible under the active profile contentScope.
 * Untagged content stays visible. Scale filters only exclude content tagged
 * exclusively for a different scale.
 */
export function contentEligibleForScope(
  tags: ContentTag | null | undefined,
  input: ScopeInput,
): boolean {
  const profile = input.examId ? getExamProfile(input.trackId, input.examId) : null;
  const scales = profile?.contentScope?.scales;
  if (!scales || scales.length === 0) return true;
  if (!tags) return true;

  const scaleSet = new Set(scales);

  if (tags.postRestriction && tags.postRestriction !== 'all') {
    if (tags.postRestriction === 'bs17' || tags.postRestriction === 'bs16') {
      if (!scaleSet.has(tags.postRestriction as ExamScale)) return false;
    }
  }

  if (tags.examScope && tags.examScope.length > 0) {
    // Include if any listed scale intersects profile scales
    if (!tags.examScope.some((s) => scaleSet.has(s as ExamScale))) return false;
  }

  return true;
}

export function filterTopicsForScope<T extends ContentTag & { id: string }>(
  topics: T[],
  input: ScopeInput,
): T[] {
  return topics.filter((t) => contentEligibleForScope(t, input));
}
