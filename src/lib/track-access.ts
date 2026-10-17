/**
 * Shared track access helpers — enrollment gates for UI and navigation.
 */
import { isTrackId, type TrackId } from '../data/tracks.ts';
import {
  emptyTrackMembership,
  isEnrolled as membershipIsEnrolled,
  normalizeTrackMembership,
} from './track-membership.ts';
import { getFocusTrackId } from './track-focus.ts';
import type { AppData, TrackMembershipState } from '../types.ts';

export function getMembership(data: AppData | null | undefined): TrackMembershipState {
  return normalizeTrackMembership(data?.trackMembership ?? emptyTrackMembership());
}

export function isTrackEnrolled(data: AppData | null | undefined, trackId: string): boolean {
  if (!isTrackId(trackId)) return false;
  return membershipIsEnrolled(getMembership(data), trackId);
}

export function getActiveTrackId(data: AppData | null | undefined): TrackId | null {
  return getFocusTrackId(data);
}

/** True when the user may use Learn/Practice/etc. for a given track. */
export function canAccessTrackLearning(
  data: AppData | null | undefined,
  trackId: string,
): boolean {
  return isTrackEnrolled(data, trackId);
}

/** True when any track is enrolled (for generic empty states). */
export function hasAnyEnrollment(data: AppData | null | undefined): boolean {
  const m = getMembership(data);
  return Object.keys(m.enrollments).length > 0;
}

/**
 * Gate for study activities.
 * - If trackId provided: must be enrolled in that track
 * - If omitted: must have at least one enrollment (and preferably an active focus)
 */
export function assertCanStudy(
  data: AppData | null | undefined,
  trackId?: string | null,
): { ok: true } | { ok: false; reason: 'no-enrollment' | 'track-not-enrolled' } {
  if (trackId) {
    if (!isTrackEnrolled(data, trackId)) {
      return { ok: false, reason: 'track-not-enrolled' };
    }
    return { ok: true };
  }
  if (!hasAnyEnrollment(data)) {
    return { ok: false, reason: 'no-enrollment' };
  }
  return { ok: true };
}
