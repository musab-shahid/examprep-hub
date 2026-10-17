/**
 * Single pipeline for “what subjects/content apply” under track + optional exam profile.
 * Phase 4 fills profile subjectPolicy; until then examId is ignored (whole track).
 */
import { subjectsByTrack } from '../data/subjects.ts';
import { isTrackId, getExamProfile, type TrackId } from '../data/tracks.ts';
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

/** Whether a subject is in the current scope. */
export function subjectInScope(subjectId: string, input: ScopeInput): boolean {
  return subjectIdsForScope(input).has(subjectId as SubjectId);
}
