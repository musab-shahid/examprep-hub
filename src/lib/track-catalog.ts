/**
 * Read-only catalog metadata for a specific track + exam profile,
 * independent of the active workspace. Used by track landing pages
 * to show accurate content counts even when previewing a non-active track.
 */
import { subjectsForScope, contentEligibleForScope, type ScopeInput } from './track-scope.ts';
import { sectionsBySubject, sectionMap } from '../data/sections.ts';
import { topics } from '../data/topics.ts';
import type { SubjectId, Topic } from '../types.ts';
import type { SubjectWithMeta } from '../data/subjects.ts';

export interface TrackCatalogSubject {
  subject: SubjectWithMeta;
  topicCount: number;
  questionCount: number;
  sectionCount: number;
  topics: Topic[];
}

export interface TrackCatalog {
  subjects: TrackCatalogSubject[];
  totalTopics: number;
  totalQuestions: number;
  /** Scope resolution was empty/invalid — no subjects to show. */
  empty: boolean;
}

/**
 * Compute catalog metadata (topic/question/section counts) for a track + profile,
 * applying item-level content eligibility restrictions. Does not depend on the
 * active workspace or any cache state.
 */
export function getTrackCatalog(input: ScopeInput): TrackCatalog {
  const scoped = subjectsForScope(input);
  if (scoped.length === 0) {
    return { subjects: [], totalTopics: 0, totalQuestions: 0, empty: true };
  }

  const subjects: TrackCatalogSubject[] = scoped.map((subject) => {
    const sid = subject.id as SubjectId;
    const sSections = sectionsBySubject(sid);
    const sSectionIds = new Set(sSections.map((s) => s.id));
    const sTopics = topics.filter((t) => {
      if (!sSectionIds.has(t.sectionId)) return false;
      return contentEligibleForScope(t, input);
    });
    const questionCount = sSections.reduce((sum, s) => sum + s.questionCount, 0);
    return {
      subject,
      topicCount: sTopics.length,
      questionCount,
      sectionCount: sSections.length,
      topics: sTopics,
    };
  });

  const totalTopics = subjects.reduce((sum, s) => sum + s.topicCount, 0);
  const totalQuestions = subjects.reduce((sum, s) => sum + s.questionCount, 0);

  return { subjects, totalTopics, totalQuestions, empty: false };
}

/** Topics for a single subject under a track+profile scope (independent of active workspace). */
export function topicsForSubjectInScope(subjectId: SubjectId, input: ScopeInput): Topic[] {
  const sSections = sectionsBySubject(subjectId);
  const sSectionIds = new Set(sSections.map((s) => s.id));
  return topics.filter((t) => {
    if (!sSectionIds.has(t.sectionId)) return false;
    return contentEligibleForScope(t, input);
  });
}

/** Question count for a single subject under a track+profile scope (from section metadata). */
export function questionCountForSubjectInScope(subjectId: SubjectId, _input: ScopeInput): number {
  return sectionsBySubject(subjectId).reduce((sum, s) => sum + s.questionCount, 0);
}

/** Section count for a single subject. */
export function sectionCountForSubject(subjectId: SubjectId): number {
  return sectionsBySubject(subjectId).length;
}

/** Resolve a topic's subject id via its section. */
export function subjectIdForTopic(topicId: string): SubjectId | undefined {
  const topic = topics.find((t) => t.id === topicId);
  if (!topic) return undefined;
  return sectionMap[topic.sectionId]?.subjectId as SubjectId | undefined;
}
