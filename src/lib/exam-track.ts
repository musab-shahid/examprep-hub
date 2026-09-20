/**
 * Thin ExamTrack abstraction — single place shared screens use to treat
 * FPSC and HAT the same way at the data layer.
 *
 * Landing screens (HatLandingScreen, FpscLandingScreen) stay track-specific
 * for branding. Dashboard, Progress, Revision, Practice, Study, Navigation
 * consume only this module + subjects (no HAT meta / section special-cases).
 *
 * Both tracks are multi-subject:
 *   - FPSC: meteo-climatology, physics, maths, …
 *   - HAT: the three reasoning subjects (verbal / analytical / quantitative)
 *
 * Depends on @/data/subjects for the canonical subject list + track tags.
 * If a subject is missing a track field, it is treated as 'fpsc'.
 */

import {
  subjects,
  examTracks as dataExamTracks,
  subjectsByTrack as dataSubjectsByTrack,
  type ExamTrack as DataExamTrack,
} from '@/data/subjects';
import type { SubjectId } from '@/types';

// ── Public types ──

/** Canonical track ids. Keep in sync with @/data/subjects ExamTrack. */
export type ExamTrackId = DataExamTrack; // 'fpsc' | 'hat'

export type ExamTrackMeta = {
  id: ExamTrackId;
  /** Short UI label, e.g. "FPSC Subjects" / "HAT Modules" */
  label: string;
  /** Full product name for landings / headers */
  productName: string;
  /** Router screen for the track landing (branding stays track-specific) */
  landingScreen: 'fpsc' | 'hat';
  /** Accent for shared UI (not full branding) */
  accent: 'sky' | 'indigo';
};

export type TrackSubjectRef = {
  subjectId: SubjectId;
  track: ExamTrackId;
  title: string;
};

// ── Static meta (UI-facing; not content) ──

const TRACK_META: Record<ExamTrackId, ExamTrackMeta> = {
  fpsc: {
    id: 'fpsc',
    label: 'FPSC Subjects',
    productName: 'FPSC Prep',
    landingScreen: 'fpsc',
    accent: 'sky',
  },
  hat: {
    id: 'hat',
    label: 'HAT Modules',
    productName: 'HAT Prep',
    landingScreen: 'hat',
    accent: 'indigo',
  },
};

/** Ordered list of tracks (same order as data layer). */
export function getExamTracks(): ExamTrackMeta[] {
  // Prefer data module order if present; fall back to TRACK_META keys
  if (Array.isArray(dataExamTracks) && dataExamTracks.length > 0) {
    return dataExamTracks.map((t) => TRACK_META[t.id as ExamTrackId] ?? {
      id: t.id as ExamTrackId,
      label: (t as { label?: string }).label ?? String(t.id).toUpperCase(),
      productName: String(t.id).toUpperCase(),
      landingScreen: (t.id === 'hat' ? 'hat' : 'fpsc') as 'fpsc' | 'hat',
      accent: (t.id === 'hat' ? 'indigo' : 'sky') as 'sky' | 'indigo',
    });
  }
  return Object.values(TRACK_META);
}

export function getTrackMeta(track: ExamTrackId): ExamTrackMeta {
  return TRACK_META[track] ?? TRACK_META.fpsc;
}

// ── Subject ↔ track resolution ──

/**
 * Resolve which exam track a subject belongs to.
 * Prefers the `track` field on the subject record from @/data/subjects.
 */
export function getTrackForSubject(subjectId: SubjectId | string): ExamTrackId {
  const sub = subjects.find((s) => s.id === subjectId);
  if (sub && 'track' in sub && (sub.track === 'hat' || sub.track === 'fpsc')) {
    return sub.track as ExamTrackId;
  }
  // Legacy fallback only — data should already tag every subject with track
  if (subjectId === 'hat' || String(subjectId).startsWith('hat-')) return 'hat';
  return 'fpsc';
}

/** Subjects belonging to a track (thin wrapper over data layer). */
export function getSubjectsForTrack(track: ExamTrackId): TrackSubjectRef[] {
  const list =
    typeof dataSubjectsByTrack === 'function'
      ? dataSubjectsByTrack(track)
      : subjects.filter((s) => getTrackForSubject(s.id) === track);

  return list.map((s) => ({
    subjectId: s.id as SubjectId,
    track,
    title: s.title,
  }));
}

/** All subject ids for a track — useful for scoping attention / stats. */
export function getSubjectIdsForTrack(track: ExamTrackId): Set<SubjectId> {
  return new Set(getSubjectsForTrack(track).map((s) => s.subjectId));
}

/**
 * Whether a track has only one subject.
 * With current data both FPSC and HAT are multi-subject, so this is false
 * for both. Kept for defensive UI (empty / future single-subject tracks).
 */
export function isSingleSubjectTrack(track: ExamTrackId): boolean {
  return getSubjectsForTrack(track).length <= 1;
}

/**
 * Map a SubjectSelection ('all' | SubjectId) to an optional track filter.
 * 'all' → no track filter; a subject id → that subject's track.
 */
export function trackFromSelection(
  selection: SubjectId | 'all',
): ExamTrackId | null {
  if (selection === 'all') return null;
  return getTrackForSubject(selection);
}

/**
 * Landing route for a track — only place shared UI should branch for branding entry.
 * Content screens must not hard-code 'hat' vs 'fpsc' beyond this helper.
 */
export function getLandingScreenForTrack(track: ExamTrackId): 'fpsc' | 'hat' {
  return getTrackMeta(track).landingScreen;
}

/**
 * Group an array of subject-scoped stats (or any { subjectId } items) by track.
 * Replaces ad-hoc fpscStats / hatStats filters in Dashboard.
 */
export function groupByTrack<T extends { subjectId: string }>(
  items: T[],
): Record<ExamTrackId, T[]> {
  const out: Record<ExamTrackId, T[]> = { fpsc: [], hat: [] };
  for (const item of items) {
    const track = getTrackForSubject(item.subjectId);
    out[track].push(item);
  }
  return out;
}
