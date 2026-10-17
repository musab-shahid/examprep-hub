/**
 * Shared track access helpers — enrollment gates for UI and navigation.
 */
import { isTrackId, type TrackId } from '../data/tracks.ts';
import {
  emptyTrackMembership,
  isEnrolled as membershipIsEnrolled,
  normalizeTrackMembership,
} from './track-membership.ts';
import type { AppData, TrackMembershipState } from '../types.ts';

export function getMembership(data: AppData | null | undefined): TrackMembershipState {
  return normalizeTrackMembership(data?.trackMembership ?? emptyTrackMembership());
}

export function isTrackEnrolled(data: AppData | null | undefined, trackId: string): boolean {
  if (!isTrackId(trackId)) return false;
  return membershipIsEnrolled(getMembership(data), trackId);
}

export function getActiveTrackId(data: AppData | null | undefined): TrackId | null {
  const id = getMembership(data).activeTrackId;
  return id && isTrackId(id) ? id : null;
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
