/**
 * Central track registry — single source of track IDs, status, capabilities,
 * and exam-profile slots. Subject ownership remains on subject records in
 * subjects.ts (validated against this registry).
 *
 * Adding a conventional track: extend TRACK_IDS + TRACK_DEFINITIONS, tag
 * subjects, add content. Do not fork enrollment or routing for each track.
 */

/** Canonical track ids — derive ExamTrack / ExamTrackId from this. */
export const TRACK_IDS = ['fpsc', 'hat'] as const;

export type TrackId = (typeof TRACK_IDS)[number];

export type TrackStatus = 'available' | 'coming-soon' | 'archived';

export type TrackCapabilities = {
  study: boolean;
  practice: boolean;
  mockExam: boolean;
  revision: boolean;
  formulas: boolean;
};

/**
 * Exam / post profile within a track (e.g. a named FPSC paper).
 * Primary identity is the profile id + title (post/paper name).
 * Pay scale (bs16/bs17) is metadata, not the sole scope key.
 */
export type ExamScale = 'bs16' | 'bs17';

export type ExamProfileDefinition = {
  id: string;
  trackId: TrackId;
  /** Human-readable post or paper name */
  title: string;
  status: 'available' | 'coming-soon';
  /** Official level label when relevant — not a substitute for profile id */
  scale?: ExamScale;
  requiredSubjectIds: readonly string[];
  optionalSubjectIds?: readonly string[];
  /**
   * Optional content filters layered on subject policy.
   * Reuses existing content tags until profiles are fully authored.
   */
  contentScope?: {
    scales?: ExamScale[];
  };
};

export type TrackDefinition = {
  id: TrackId;
  title: string;
  shortTitle: string;
  description: string;
  status: TrackStatus;
  /** Lucide icon key name used by UI (string to avoid coupling data to React) */
  iconKey: 'FileText' | 'GraduationCap';
  accent: 'sky' | 'indigo';
  capabilities: TrackCapabilities;
  /** Optional specialized landing; default shared overview when omitted / future */
  landingVariant?: 'fpsc' | 'hat' | 'default';
  /** Verified exam profiles only — empty until Phase 4 registers real posts */
  examProfiles: readonly ExamProfileDefinition[];
};

const DEFAULT_CAPS: TrackCapabilities = {
  study: true,
  practice: true,
  mockExam: true,
  revision: true,
  formulas: true,
};

/**
 * Authoritative track list. Exam profiles stay empty until verified against
 * real post syllabi (do not invent profiles from bs16/bs17 tags alone).
 */
export const TRACK_DEFINITIONS: readonly TrackDefinition[] = [
  {
    id: 'fpsc',
    title: 'FPSC Exam',
    shortTitle: 'FPSC',
    description:
      'Subject-based Federal Public Service Commission preparation. Multiple posts and papers can share this track with different subject combinations.',
    status: 'available',
    iconKey: 'FileText',
    accent: 'sky',
    capabilities: { ...DEFAULT_CAPS },
    landingVariant: 'fpsc',
    examProfiles: [
      // Profiles registered in a later phase with real post names + subject sets.
      // Example shape (not active): Meteorologist BS-17 under id "fpsc-met-bs17".
    ],
  },
  {
    id: 'hat',
    title: 'HAT Preparation',
    shortTitle: 'HAT',
    description:
      'Higher Education Aptitude Test preparation: Verbal, Analytical, and Quantitative reasoning.',
    status: 'available',
    iconKey: 'GraduationCap',
    accent: 'indigo',
    capabilities: { ...DEFAULT_CAPS, formulas: false },
    landingVariant: 'hat',
    examProfiles: [],
  },
] as const;

const TRACK_BY_ID: Record<TrackId, TrackDefinition> = Object.fromEntries(
  TRACK_DEFINITIONS.map((t) => [t.id, t]),
) as Record<TrackId, TrackDefinition>;

export function isTrackId(value: unknown): value is TrackId {
  return typeof value === 'string' && (TRACK_IDS as readonly string[]).includes(value);
}

export function getTrackDefinition(id: TrackId): TrackDefinition {
  return TRACK_BY_ID[id];
}

export function listTrackDefinitions(): readonly TrackDefinition[] {
  return TRACK_DEFINITIONS;
}

export function listExamProfiles(trackId: TrackId): readonly ExamProfileDefinition[] {
  return TRACK_BY_ID[trackId]?.examProfiles ?? [];
}

export function getExamProfile(
  trackId: TrackId,
  profileId: string | null | undefined,
): ExamProfileDefinition | null {
  if (!profileId) return null;
  return listExamProfiles(trackId).find((p) => p.id === profileId) ?? null;
}

/** Whether a track accepts new enrollments */
export function isTrackEnrollable(id: TrackId): boolean {
  return TRACK_BY_ID[id]?.status === 'available';
}
