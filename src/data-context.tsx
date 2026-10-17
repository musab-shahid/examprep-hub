import { createContext, useState, useCallback, useEffect, useRef, type ReactNode } from 'react';
import type { AppData, Question, DifficultyFilter, PracticeMode, SubjectId, TrackMembershipState } from '@/types';
import { emptyTrackMembership, normalizeTrackMembership, setActiveExamProfile as setActiveExamProfilePure } from '@/lib/track-membership';
import { withEnrollAndFocus, withFocusTrack } from '@/lib/track-focus';
import { isTrackId, type TrackId } from '@/data/tracks';
import { loadData, saveData, markTopicStudied, recordQuizResult, setLastOpenedTopic, resetData } from '@/lib/storage';
import { STORAGE_KEYS } from '@/lib/constants';
import { sections } from '@/data/sections';
import { topics } from '@/data/topics';

export interface DataContextValue {
  data: AppData;
  markStudied: (topicId: string) => void;
  recordQuiz: (topicId: string | null, answers: { questionId: string; correct: boolean }[], questions: Question[], mode: PracticeMode, subjectId?: string, difficultyFilter?: DifficultyFilter) => void;
  setLastTopic: (topicId: string) => void;
  reset: () => void;
  resetSubjects: (subjectIds: SubjectId[]) => void;
  /** Explicit track enrollment; sets track active on success */
  enrollInTrack: (trackId: TrackId) => { ok: boolean; reason?: string };
  /** Switch active focus among enrolled tracks only */
  setActiveEnrolledTrack: (trackId: TrackId | null) => { ok: boolean; reason?: string };
  /** Set exam/post profile within an enrolled track (null = general track scope) */
  setExamProfile: (trackId: TrackId, examId: string | null) => void;
  trackMembership: TrackMembershipState;
}

export const DataContext = createContext<DataContextValue | null>(null);

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<AppData>(() => loadData());
  const isFirst = useState(() => ({ current: true }))[0];

  // Persist outside setState updaters (StrictMode-safe: one effect per committed data)
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    saveData(data);
  }, [data, isFirst]);

  // Multi-tab: another tab wrote or cleared AppData — converge
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEYS.appData) return;
      try {
        // null newValue = reset/cleared in another tab
        setData(loadData());
      } catch {
        /* ignore */
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const markStudied = useCallback((topicId: string) => {
    setData((prev) => markTopicStudied(prev, topicId));
  }, []);

  const recordQuiz = useCallback((topicId: string | null, answers: { questionId: string; correct: boolean }[], questions: Question[], mode: PracticeMode, subjectId?: string, difficultyFilter?: DifficultyFilter) => {
    setData((prev) => recordQuizResult(prev, topicId, answers, questions, mode, subjectId, difficultyFilter));
  }, []);

  const setLastTopic = useCallback((topicId: string) => {
    setData((prev) => setLastOpenedTopic(prev, topicId));
  }, []);

  const reset = useCallback(() => {
    resetData();
    setData(loadData());
  }, []);

  const actionResultRef = useRef<{ ok: boolean; reason?: string }>({ ok: false, reason: 'unknown' });

  const enrollInTrack = useCallback((trackId: TrackId) => {
    actionResultRef.current = { ok: false, reason: 'unknown' };
    setData((prev) => {
      const r = withEnrollAndFocus(prev, trackId);
      if (!r.ok) {
        actionResultRef.current = { ok: false, reason: r.reason };
        return prev;
      }
      actionResultRef.current = { ok: true };
      return r.data;
    });
    return actionResultRef.current;
  }, []);

  const setActiveEnrolledTrack = useCallback((trackId: TrackId | null) => {
    actionResultRef.current = { ok: false, reason: 'unknown' };
    setData((prev) => {
      const r = withFocusTrack(prev, trackId);
      if (!r.ok) {
        actionResultRef.current = { ok: false, reason: r.reason };
        return prev;
      }
      actionResultRef.current = { ok: true };
      return r.data;
    });
    return actionResultRef.current;
  }, []);

  const setExamProfile = useCallback((trackId: TrackId, examId: string | null) => {
    setData((prev) => {
      const mem = normalizeTrackMembership(prev.trackMembership ?? emptyTrackMembership());
      if (!mem.enrollments[trackId]) return prev;
      return { ...prev, trackMembership: setActiveExamProfilePure(mem, trackId, examId) };
    });
  }, []);

  const trackMembership = normalizeTrackMembership(data.trackMembership ?? emptyTrackMembership());


  const resetSubjects = useCallback((subjectIds: SubjectId[]) => {
    setData((prev) => {
      const subjectIdSet = new Set(subjectIds);
      const subjectSectionIds = new Set(
        sections.filter((s) => subjectIdSet.has(s.subjectId)).map((s) => s.id)
      );
      const subjectTopicIds = new Set(
        topics.filter((t) => subjectSectionIds.has(t.sectionId)).map((t) => t.id)
      );

      return {
        studiedTopics: prev.studiedTopics.filter((tid) => !subjectTopicIds.has(tid)),
        topicProgress: Object.fromEntries(
          Object.entries(prev.topicProgress).filter(([tid]) => !subjectTopicIds.has(tid))
        ),
        questionResults: Object.fromEntries(
          Object.entries(prev.questionResults).filter(([, r]) => {
            if (r.subjectId) return !subjectIdSet.has(r.subjectId as SubjectId);
            return true;
          })
        ),
        quizHistory: prev.quizHistory.filter((q) => {
          if (q.subjectId && subjectIdSet.has(q.subjectId as SubjectId)) return false;
          if (q.topicId && subjectTopicIds.has(q.topicId)) return false;
          return true;
        }),
        revisionDates: Object.fromEntries(
          Object.entries(prev.revisionDates).filter(([tid]) => !subjectTopicIds.has(tid))
        ),
        lastOpenedTopic: subjectTopicIds.has(prev.lastOpenedTopic) ? '' : prev.lastOpenedTopic,
        trackMembership: prev.trackMembership,
      };
    });
  }, []);

  return (
    <DataContext.Provider value={{ data, markStudied, recordQuiz, setLastTopic, reset, resetSubjects, enrollInTrack, setActiveEnrolledTrack, setExamProfile, trackMembership }}>
      {children}
    </DataContext.Provider>
  );
}
