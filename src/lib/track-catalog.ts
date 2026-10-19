/**
 * Catalog counts for track landings — explicit precision, never implied exact.
 */
import { sectionsBySubject } from '../data/sections.ts';
import { isTrackId, type TrackId } from '../data/tracks.ts';
import {
  contentEligibleForScope,
  resolveSubjectsForScope,
  type ScopeInput,
} from './track-scope.ts';
import type { Question } from '../types.ts';
import type { Subject } from '../types.ts';

export type CountPrecision = 'exact' | 'estimated' | 'unavailable';

export type CatalogCount = {
  value: number;
  precision: CountPrecision;
};

export type SubjectCatalogEntry = {
  subject: Subject;
  topicCount: CatalogCount;
  questionCount: CatalogCount;
  /** Personal progress (studied topics), not catalog size */
  studiedTopicCount: number;
};

export type TrackCatalog = {
  trackId: TrackId;
  examId: string | null;
  scopeKind: 'general' | 'profile' | 'invalid' | 'empty-policy';
  subjects: SubjectCatalogEntry[];
  totalTopics: CatalogCount;
  totalQuestions: CatalogCount;
};

function sumCounts(counts: CatalogCount[]): CatalogCount {
  if (counts.length === 0) {
    return { value: 0, precision: 'exact' };
  }
  if (counts.some((c) => c.precision === 'unavailable')) {
    return { value: 0, precision: 'unavailable' };
  }
  const value = counts.reduce((s, c) => s + c.value, 0);
  if (counts.some((c) => c.precision === 'estimated')) {
    return { value, precision: 'estimated' };
  }
  return { value, precision: 'exact' };
}

export function formatCatalogCount(c: CatalogCount, unit: string): string {
  if (c.precision === 'unavailable') return `— ${unit}`;
  if (c.precision === 'estimated') return `~${c.value} ${unit}`;
  return `${c.value} ${unit}`;
}

/**
 * Build subject catalog for a viewed track/profile (not necessarily active workspace).
 *
 * - topicCount: exact when topicIds provided; else estimated from section.topicCount
 * - questionCount: exact when questions provided and filtered; else estimated from section.questionCount
 */
export function buildTrackCatalog(
  input: ScopeInput,
  opts?: {
    /** Loaded topic ids per subject (from cache); omit → section metadata estimates */
    topicIdsBySubject?: Map<string, string[]>;
    /** Loaded questions for subjects in scope; omit → section metadata estimates */
    questions?: Question[];
    /** studied topic ids for personal progress */
    studiedTopicIds?: ReadonlySet<string> | string[];
  },
): TrackCatalog {
  const trackId = input.trackId;
  const examId = input.examId ?? null;

  if (!isTrackId(trackId)) {
    return {
      trackId: trackId as TrackId,
      examId,
      scopeKind: 'invalid',
      subjects: [],
      totalTopics: { value: 0, precision: 'unavailable' },
      totalQuestions: { value: 0, precision: 'unavailable' },
    };
  }

  const resolved = resolveSubjectsForScope(input);
  if (resolved.kind === 'invalid-track' || resolved.kind === 'invalid-profile') {
    return {
      trackId,
      examId,
      scopeKind: 'invalid',
      subjects: [],
      totalTopics: { value: 0, precision: 'unavailable' },
      totalQuestions: { value: 0, precision: 'unavailable' },
    };
  }
  if (resolved.kind === 'empty-policy') {
    return {
      trackId,
      examId,
      scopeKind: 'empty-policy',
      subjects: [],
      totalTopics: { value: 0, precision: 'exact' },
      totalQuestions: { value: 0, precision: 'exact' },
    };
  }

  const studied =
    opts?.studiedTopicIds instanceof Set
      ? opts.studiedTopicIds
      : new Set(opts?.studiedTopicIds ?? []);

  const questions = opts?.questions;
  const topicIdsBySubject = opts?.topicIdsBySubject;

  const entries: SubjectCatalogEntry[] = resolved.subjects.map((subject) => {
    const secs = sectionsBySubject(subject.id);
    const metaTopics = secs.reduce((s, sec) => s + (sec.topicCount || 0), 0);
    const metaQs = secs.reduce((s, sec) => s + (sec.questionCount || 0), 0);

    let topicCount: CatalogCount;
    let studiedTopicCount = 0;

    if (topicIdsBySubject?.has(subject.id)) {
      const ids = topicIdsBySubject.get(subject.id) ?? [];
      topicCount = { value: ids.length, precision: 'exact' };
      studiedTopicCount = ids.filter((id) => studied.has(id)).length;
    } else {
      topicCount = { value: metaTopics, precision: 'estimated' };
    }

    let questionCount: CatalogCount;
    if (questions) {
      const eligible = questions.filter(
        (q) =>
          secs.some((sec) => sec.id === q.sectionId) &&
          contentEligibleForScope(
            { examScope: (q as { examScope?: ('bs17' | 'bs16')[] }).examScope, postRestriction: (q as { postRestriction?: string | null }).postRestriction },
            input,
          ),
      );
      // Also require subject ownership via section
      const forSubject = eligible.filter((q) => {
        const sec = secs.find((s) => s.id === q.sectionId);
        return sec?.subjectId === subject.id;
      });
      questionCount = { value: forSubject.length, precision: 'exact' };
    } else {
      questionCount = { value: metaQs, precision: metaQs > 0 ? 'estimated' : 'exact' };
    }

    return {
      subject,
      topicCount,
      questionCount,
      studiedTopicCount,
    };
  });

  return {
    trackId,
    examId,
    scopeKind: resolved.kind === 'profile' ? 'profile' : 'general',
    subjects: entries,
    totalTopics: sumCounts(entries.map((e) => e.topicCount)),
    totalQuestions: sumCounts(entries.map((e) => e.questionCount)),
  };
}
