import { createContext, useState, useCallback, type ReactNode } from 'react';
import type { AppData, Question, DifficultyFilter, PracticeMode, SubjectId } from '@/types';
import { loadData, saveData, markTopicStudied, recordQuizResult, setLastOpenedTopic, resetData, flushPendingSave } from '@/lib/storage';
import { sections } from '@/data/sections';
import { topics } from '@/data/topics';

export interface DataContextValue {
  data: AppData;
  markStudied: (topicId: string) => void;
  recordQuiz: (topicId: string | null, answers: { questionId: string; correct: boolean }[], questions: Question[], mode: PracticeMode, subjectId?: string, difficultyFilter?: DifficultyFilter) => void;
  setLastTopic: (topicId: string) => void;
  reset: () => void;
  resetSubjects: (subjectIds: SubjectId[]) => void;
}

export const DataContext = createContext<DataContextValue | null>(null);

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<AppData>(() => loadData());


  const markStudied = useCallback((topicId: string) => {
    let next: AppData | null = null;
    setData((prev) => {
      next = markTopicStudied(prev, topicId);
      return next;
    });
    if (next) {
      saveData(next);
      flushPendingSave();
    }
  }, []);

  const recordQuiz = useCallback((topicId: string | null, answers: { questionId: string; correct: boolean }[], questions: Question[], mode: PracticeMode, subjectId?: string, difficultyFilter?: DifficultyFilter) => {
    let next: AppData | null = null;
    setData((prev) => {
      next = recordQuizResult(prev, topicId, answers, questions, mode, subjectId, difficultyFilter);
      return next;
    });
    if (next) {
      saveData(next);
      flushPendingSave();
    }
  }, []);

  const setLastTopic = useCallback((topicId: string) => {
    let next: AppData | null = null;
    setData((prev) => {
      next = setLastOpenedTopic(prev, topicId);
      return next;
    });
    if (next) saveData(next);
  }, []);

  const reset = useCallback(() => {
    resetData();
    setData(loadData());
  }, []);

  const resetSubjects = useCallback((subjectIds: SubjectId[]) => {
    let next: AppData | null = null;
    setData((prev) => {
      const subjectIdSet = new Set(subjectIds);
      const subjectSectionIds = new Set(
        sections.filter((s) => subjectIdSet.has(s.subjectId)).map((s) => s.id)
      );
      const subjectTopicIds = new Set(
        topics.filter((t) => subjectSectionIds.has(t.sectionId)).map((t) => t.id)
      );

      next = {
        studiedTopics: prev.studiedTopics.filter((tid) => !subjectTopicIds.has(tid)),
        topicProgress: Object.fromEntries(
          Object.entries(prev.topicProgress).filter(([tid]) => !subjectTopicIds.has(tid))
        ),
        questionResults: Object.fromEntries(
          Object.entries(prev.questionResults).filter(([, r]) => {
            if (r.subjectId) return !subjectIdSet.has(r.subjectId as SubjectId);
            return true; // keep legacy entries without subjectId
          })
        ),
        quizHistory: prev.quizHistory.filter((q) => {
          if (q.subjectId && subjectIdSet.has(q.subjectId as SubjectId)) return false;
          if (q.topicId && subjectTopicIds.has(q.topicId)) return false;
          return true;
        }),
        revisionDates: {},
        lastOpenedTopic: subjectTopicIds.has(prev.lastOpenedTopic) ? '' : prev.lastOpenedTopic,
      };

      return next;
    });
    if (next) {
      saveData(next);
      flushPendingSave();
    }
  }, []);

  return (
    <DataContext.Provider value={{ data, markStudied, recordQuiz, setLastTopic, reset, resetSubjects }}>
      {children}
    </DataContext.Provider>
  );
}
