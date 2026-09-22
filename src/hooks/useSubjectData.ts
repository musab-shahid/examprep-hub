import { useMemo, useState, useEffect, useCallback } from 'react';
import { useData } from '@/hooks/useData';
import { useSubjectSelection } from '@/contexts/subject-selection-context';
import { sectionMap, sectionsBySubject, sections } from '@/data/sections';
import { topics, topicsBySubject, getTopic } from '@/data/topics';
import { allQuestions, questionsByTopic } from '@/data/questions';
import { subjectMap, subjectsByTrack } from '@/data/subjects';
import { getFormulasForSubject } from '@/data/formulas';
import { getOverallStats, getWeakestTopics, getTodayRevision } from '@/lib/stats';
import { searchTopics } from '@/lib/search';
import {
  loadSubjectTopics,
  loadSubjectQuestions,
  getCachedTopics,
  getCachedQuestions,
  getAllCachedTopics,
  getAllCachedQuestions,
  getTopicFromCache,
} from '@/data/lazy-data';
import type { Topic, Question, Section, SubjectId } from '@/types';
import { getEffectiveQuizStats, parseLocalDate } from '@/lib/constants';

export interface SubjectStats {
  subjectId: SubjectId | 'all';
  subjectTitle: string;
  totalTopics: number;
  studiedTopics: number;
  quizTouchedTopics: number;
  totalQuestions: number;
  questionsAnswered: number;
  accuracy: number;
  mastery: number;
  hasContent: boolean;
  sections: Section[];
  topics: Topic[];
  questions: Question[];
  weakestTopics: { topicId: string; accuracy: number }[];
  todayRevision: string[];
}

export interface SubjectDataLayer {
  topicsFor: (id: SubjectId | 'all') => Topic[];
  questionsFor: (id: SubjectId | 'all') => Question[];
  sectionsFor: (id: SubjectId | 'all') => Section[];
  statsFor: (id: SubjectId | 'all') => SubjectStats;

  allSubjectsStats: () => SubjectStats[];
  totalTopics: number;
  totalQuestions: number;
  totalFormulas: number;

  revisionQueueAll: () => Array<{ topicId: string; subjectId: SubjectId; accuracy: number; dateStr: string }>;
  searchAll: (query: string) => Array<{ topic: Topic; subjectId: SubjectId; match: string; type: 'topic' | 'formula' }>;

  formulasFor: (id: SubjectId | 'all') => ReturnType<typeof getFormulasForSubject>;
  getTopicById: (topicId: string) => Topic | undefined;
  questionsByTopicId: (topicId: string) => Question[];

  // Async loaders for screens that need full content
  ensureTopicsLoaded: (id: SubjectId | 'all') => Promise<void>;
  ensureQuestionsLoaded: (id: SubjectId | 'all') => Promise<void>;
  loadedSubjects: Set<string>;
  isLoaded: (id: SubjectId | 'all') => boolean;
  isQuestionsReady: (id: SubjectId | 'all') => boolean;
}

export function useSubjectData(): SubjectDataLayer {
  const { data } = useData();
  const { activeTrack } = useSubjectSelection();
  const [loadedSubjects, setLoadedSubjects] = useState<Set<string>>(new Set());

  const trackSubjectIds = useMemo(() => {
    return new Set(subjectsByTrack(activeTrack).map((s) => s.id));
  }, [activeTrack]);

  const trackSections = useMemo(() => {
    return sections.filter((s) => trackSubjectIds.has(s.subjectId));
  }, [trackSubjectIds]);

  const trackTopics = useMemo(() => {
    const trackSectionIds = new Set(trackSections.map((s) => s.id));
    return topics.filter((t) => trackSectionIds.has(t.sectionId));
  }, [trackSections]);

  const trackSubjectIdList = useMemo(
    () => Array.from(trackSubjectIds) as SubjectId[],
    [trackSubjectIds],
  );

  // Track which subjects have been loaded into cache
  useEffect(() => {
    const loaded = new Set<string>();
    for (const id of trackSubjectIdList) {
      if (getCachedTopics(id)) loaded.add(id);
    }
    if (loaded.size > 0) setLoadedSubjects(loaded);
  }, [trackSubjectIdList]);

  const topicsFor = useCallback((id: SubjectId | 'all'): Topic[] => {
    if (id === 'all') return trackTopics;
    return topicsBySubject(id);
  }, [trackTopics]);

  const questionsFor = useCallback((id: SubjectId | 'all'): Question[] => {
    if (id === 'all') {
      const result: Question[] = [];
      for (const sid of trackSubjectIdList) {
        const cached = getCachedQuestions(sid);
        if (cached) result.push(...cached);
      }
      return result;
    }
    const cached = getCachedQuestions(id);
    if (!cached) return [];
    const sSections = sectionsBySubject(id);
    const sSectionIds = new Set(sSections.map((s) => s.id));
    return cached.filter((q) => sSectionIds.has(q.sectionId));
  }, [trackSubjectIdList]);

  const questionCountFor = useCallback((id: SubjectId | 'all'): number => {
    if (id === 'all') return trackSections.reduce((sum, s) => sum + s.questionCount, 0);
    return sectionsBySubject(id).reduce((sum, s) => sum + s.questionCount, 0);
  }, [trackSections]);

  const sectionsFor = useCallback((id: SubjectId | 'all'): Section[] => {
    if (id === 'all') return trackSections;
    return sectionsBySubject(id);
  }, [trackSections]);

  const statsFor = useCallback((id: SubjectId | 'all'): SubjectStats => {
    const sTopics = topicsFor(id);
    const sQuestions = questionsFor(id);
    const sSections = sectionsFor(id);
    const sTopicIds = new Set(sTopics.map((t) => t.id));
    const stats = getOverallStats(data, sTopics, sQuestions);
    const weakest = getWeakestTopics(data, sTopicIds, 3);
    const revision = getTodayRevision(data, sTopicIds);
    // Prefer authored metadata counts unless the full question bank for this scope is loaded
    const fullyLoaded =
      id === 'all'
        ? trackSubjectIdList.every((s) => getCachedQuestions(s) !== undefined)
        : getCachedQuestions(id) !== undefined;
    const qCount = fullyLoaded && sQuestions.length > 0 ? sQuestions.length : questionCountFor(id);

    return {
      subjectId: id,
      subjectTitle: id === 'all' ? 'All Subjects' : (subjectMap[id]?.title ?? 'Subject'),
      totalTopics: sTopics.length,
      studiedTopics: stats.studiedCount,
      quizTouchedTopics: stats.quizTouchedCount,
      totalQuestions: qCount,
      questionsAnswered: stats.questionsAnswered,
      accuracy: stats.accuracy,
      mastery: stats.mastery,
      hasContent: sTopics.length > 0,
      sections: sSections,
      topics: sTopics,
      questions: sQuestions,
      weakestTopics: weakest,
      todayRevision: revision,
    };
  }, [data, topicsFor, questionsFor, sectionsFor, questionCountFor]);

  const allSubjectsStats = useCallback((): SubjectStats[] => {
    return subjectsByTrack(activeTrack).map((s) => statsFor(s.id as SubjectId));
  }, [statsFor, activeTrack]);

  const totalTopics = useMemo(() => trackTopics.length, [trackTopics]);
  const totalQuestions = useMemo(() => {
    // Only trust live cache counts when every track subject is loaded;
    // otherwise section metadata is the stable source of truth (avoids totals shrinking).
    const allQuestionsLoaded = trackSubjectIdList.every((s) => getCachedQuestions(s) !== undefined);
    if (allQuestionsLoaded) {
      return getAllCachedQuestions().filter((q) => {
        const subjId = sectionMap[q.sectionId]?.subjectId;
        return trackSubjectIds.has(subjId);
      }).length;
    }
    return trackSections.reduce((sum, s) => sum + s.questionCount, 0);
  }, [trackSections, trackSubjectIds, trackSubjectIdList, loadedSubjects]);
  const totalFormulas = useMemo(() => {
    return trackSubjectIdList.reduce((sum, sid) => sum + getFormulasForSubject(sid).length, 0);
  }, [trackSubjectIdList]);

  const formulasFor = useCallback((id: SubjectId | 'all') => {
    return getFormulasForSubject(id);
  }, []);

  const revisionQueueAll = useCallback(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return Object.entries(data.topicProgress)
      .filter(([topicId, p]) => {
        if (!p.nextReview) return false;
        if (parseLocalDate(p.nextReview) > today) return false;
        const topic = getTopic(topicId);
        if (!topic) return false;
        const subjId = sectionMap[topic.sectionId]?.subjectId;
        return subjId && trackSubjectIds.has(subjId);
      })
      .map(([topicId, p]) => {
        const topic = getTopic(topicId);
        const subjectId = topic ? sectionMap[topic.sectionId]?.subjectId : undefined;
        return subjectId ? {
          topicId,
          subjectId,
          accuracy: getEffectiveQuizStats(p).accuracy,
          dateStr: p.nextReview!,
        } : null;
      })
      .filter((item): item is { topicId: string; subjectId: SubjectId; accuracy: number; dateStr: string } => item !== null);
  }, [data, trackSubjectIds]);

  const searchAll = useCallback((query: string) => {
    // Always index metadata so unloaded subjects remain searchable by title;
    // overlay full cached topics when available for deeper matches.
    const byId = new Map<string, (typeof topics)[number]>();
    for (const t of topics) {
      if (trackSubjectIds.has(sectionMap[t.sectionId]?.subjectId)) byId.set(t.id, t);
    }
    for (const t of getAllCachedTopics()) {
      if (trackSubjectIds.has(sectionMap[t.sectionId]?.subjectId)) byId.set(t.id, t);
    }
    const searchScope = Array.from(byId.values());
    const results = searchTopics(query, searchScope);
    return results.flatMap((r) => {
      const subjectId = sectionMap[r.sectionId]?.subjectId;
      if (!subjectId) return [];
      return [{ topic: r.topic, subjectId, match: r.match, type: r.type }];
    });
  }, [trackSubjectIds, loadedSubjects]);

  const getTopicById = useCallback((topicId: string): Topic | undefined => {
    // Prefer cached full topic, fall back to metadata
    const cached = getTopicFromCache(topicId);
    return cached ?? getTopic(topicId);
  }, []);

  const questionsByTopicId = useCallback((topicId: string): Question[] => questionsByTopic(topicId), []);

  const ensureTopicsLoaded = useCallback(async (id: SubjectId | 'all') => {
    if (id === 'all') {
      await Promise.all(trackSubjectIdList.map((sid) => loadSubjectTopics(sid)));
    } else {
      await loadSubjectTopics(id);
    }
    setLoadedSubjects((prev) => {
      const next = new Set(prev);
      if (id === 'all') {
        trackSubjectIdList.forEach((s) => next.add(s));
      } else {
        next.add(id);
      }
      return next;
    });
  }, [trackSubjectIdList]);

  const ensureQuestionsLoaded = useCallback(async (id: SubjectId | 'all') => {
    if (id === 'all') {
      await Promise.all(trackSubjectIdList.map((sid) => loadSubjectQuestions(sid)));
    } else {
      await loadSubjectQuestions(id);
    }
    setLoadedSubjects((prev) => {
      const next = new Set(prev);
      if (id === 'all') {
        trackSubjectIdList.forEach((s) => next.add(s));
      } else {
        next.add(id);
      }
      return next;
    });
  }, [trackSubjectIdList]);

  const isLoaded = useCallback((id: SubjectId | 'all') => {
    if (id === 'all') return trackSubjectIdList.every((s) => getCachedTopics(s) !== undefined);
    return getCachedTopics(id) !== undefined;
  }, [trackSubjectIdList]);

  const isQuestionsReady = useCallback((id: SubjectId | 'all') => {
    if (id === 'all') return trackSubjectIdList.every((s) => getCachedQuestions(s) !== undefined);
    return getCachedQuestions(id) !== undefined;
  }, [trackSubjectIdList, loadedSubjects]);

  return useMemo(() => ({
    topicsFor,
    questionsFor,
    sectionsFor,
    statsFor,
    allSubjectsStats,
    totalTopics,
    totalQuestions,
    totalFormulas,
    revisionQueueAll,
    searchAll,
    formulasFor,
    getTopicById,
    questionsByTopicId,
    ensureTopicsLoaded,
    ensureQuestionsLoaded,
    loadedSubjects,
    isLoaded,
    isQuestionsReady,
  }), [
    topicsFor, questionsFor, sectionsFor, statsFor, allSubjectsStats,
    totalTopics, totalQuestions, totalFormulas,
    revisionQueueAll, searchAll, formulasFor, getTopicById,
    questionsByTopicId, ensureTopicsLoaded, ensureQuestionsLoaded,
    loadedSubjects, isLoaded, isQuestionsReady,
  ]);
}
