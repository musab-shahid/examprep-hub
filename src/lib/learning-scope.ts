/**
 * Authoritative learner scope: enrollment + focus track + exam profile.
 * Screens should prefer this over ad-hoc subjectsByTrack / activeTrack reads.
 */
import { isTrackId, type TrackId } from '../data/tracks.ts';
import { getFocusTrackId, getMembershipState } from './track-focus.ts';
import { subjectsForScope, contentEligibleForScope, type ScopeInput } from './track-scope.ts';
import { isTrackEnrolled, assertCanStudy } from './track-access.ts';
import { getTrackForSubject } from './exam-track.ts';
import type { AppData, SubjectId } from '../types.ts';
import type { Subject } from '../types.ts';

export type LearningScope = {
  trackId: TrackId;
  examId: string | null;
  subjects: Subject[];
  subjectIds: Set<SubjectId>;
};

export function resolveLearningScope(data: AppData | null | undefined): LearningScope | null {
  const trackId = getFocusTrackId(data);
  if (!trackId || !isTrackEnrolled(data, trackId)) return null;
  const mem = getMembershipState(data);
  const examId = mem.enrollments[trackId]?.activeExamId ?? null;
  const subjects = subjectsForScope({ trackId, examId });
  return {
    trackId,
    examId,
    subjects,
    subjectIds: new Set(subjects.map((s) => s.id as SubjectId)),
  };
}

export function scopeInputFromData(data: AppData | null | undefined): ScopeInput | null {
  const s = resolveLearningScope(data);
  if (!s) return null;
  return { trackId: s.trackId, examId: s.examId };
}

/** Authorize access to a concrete subject (and optional content tags). */
export function canAccessSubject(
  data: AppData | null | undefined,
  subjectId: string,
  tags?: { examScope?: ('bs17' | 'bs16')[]; postRestriction?: string | null },
): { ok: true; trackId: TrackId } | { ok: false; reason: string; trackId?: TrackId } {
  const trackId = getTrackForSubject(subjectId);
  if (!isTrackId(trackId)) {
    return { ok: false, reason: 'unknown-subject' };
  }
  if (!isTrackEnrolled(data, trackId)) {
    return { ok: false, reason: 'track-not-enrolled', trackId };
  }
  const mem = getMembershipState(data);
  const examId = mem.enrollments[trackId]?.activeExamId ?? null;
  const scope: ScopeInput = { trackId, examId };
  const subjects = subjectsForScope(scope);
  if (!subjects.some((s) => s.id === subjectId)) {
    return { ok: false, reason: 'subject-not-in-profile', trackId };
  }
  if (tags && !contentEligibleForScope(tags, scope)) {
    return { ok: false, reason: 'content-out-of-scope', trackId };
  }
  return { ok: true, trackId };
}

export function canAccessTrackResource(
  data: AppData | null | undefined,
  trackId: TrackId,
): boolean {
  return assertCanStudy(data, trackId).ok;
}
