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
    setData((prev) => {
      const newData = markTopicStudied(prev, topicId);
      saveData(newData);
      return newData;
    });
  }, []);

  const recordQuiz = useCallback((topicId: string | null, answers: { questionId: string; correct: boolean }[], questions: Question[], mode: PracticeMode, subjectId?: string, difficultyFilter?: DifficultyFilter) => {
    setData((prev) => {
      const newData = recordQuizResult(prev, topicId, answers, questions, mode, subjectId, difficultyFilter);
      saveData(newData);
      return newData;
    });
    flushPendingSave();
  }, []);

  const setLastTopic = useCallback((topicId: string) => {
    setData((prev) => {
      const newData = setLastOpenedTopic(prev, topicId);
      saveData(newData);
      return newData;
    });
  }, []);

  const reset = useCallback(() => {
    resetData();
    setData(loadData());
  }, []);

  const resetSubjects = useCallback((subjectIds: SubjectId[]) => {
    setData((prev) => {
      const subjectIdSet = new Set(subjectIds);
      const subjectSectionIds = new Set(
        sections.filter((s) => subjectIdSet.has(s.subjectId)).map((s) => s.id)
      );
      const subjectTopicIds = new Set(
        topics.filter((t) => subjectSectionIds.has(t.sectionId)).map((t) => t.id)
      );

      const newData: AppData = {
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
        revisionDates: Object.fromEntries(
          Object.entries(prev.revisionDates).filter(([tid]) => !subjectTopicIds.has(tid))
        ),
        lastOpenedTopic: subjectTopicIds.has(prev.lastOpenedTopic) ? '' : prev.lastOpenedTopic,
      };

      saveData(newData);
      return newData;
    });
  }, []);

  return (
    <DataContext.Provider value={{ data, markStudied, recordQuiz, setLastTopic, reset, resetSubjects }}>
      {children}
    </DataContext.Provider>
  );
}
