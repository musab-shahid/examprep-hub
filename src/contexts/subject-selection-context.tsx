import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import type { SubjectId } from '@/types';
import type { ExamTrackId } from '@/lib/exam-track';
import { getTrackForSubject } from '@/lib/exam-track';
import { subjectsByTrack } from '@/data/subjects';

export type StageScreen = 'learn' | 'practice' | 'review' | 'search' | 'formulas' | 'progress';

export type SubjectSelection = SubjectId | 'all';

interface SubjectSelectionContextValue {
  perScreen: Record<string, SubjectSelection>;
  lastSelected: SubjectId;
  activeTrack: ExamTrackId;
  getActiveSubject: (screen: StageScreen) => SubjectSelection;
  setActiveSubjectForScreen: (screen: StageScreen, value: SubjectSelection) => void;
  setGlobalSubject: (value: SubjectSelection) => void;
  setActiveTrack: (track: ExamTrackId) => void;
}

const STORAGE_KEY = 'examprep-subject-selection';

const SubjectSelectionContext = createContext<SubjectSelectionContextValue | null>(null);

function loadPersisted(): { perScreen: Record<string, SubjectSelection>; lastSelected: SubjectId; activeTrack: ExamTrackId } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        perScreen: parsed.perScreen ?? {},
        lastSelected: parsed.lastSelected ?? 'meteo-climatology',
        activeTrack: (parsed.activeTrack === 'hat' || parsed.activeTrack === 'fpsc') ? parsed.activeTrack : 'fpsc',
      };
    }
  } catch { /* ignore */ }
  return { perScreen: {}, lastSelected: 'meteo-climatology', activeTrack: 'fpsc' };
}

export function SubjectSelectionProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(() => loadPersisted());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch { /* ignore */ }
  }, [state]);

  const getActiveSubject = useCallback((screen: StageScreen): SubjectSelection => {
    const selection = state.perScreen[screen] ?? state.lastSelected ?? 'all';
    if (selection !== 'all') {
      const track = getTrackForSubject(selection as string);
      if (track !== state.activeTrack) return 'all';
    }
    return selection;
  }, [state]);

  const setActiveSubjectForScreen = useCallback((screen: StageScreen, value: SubjectSelection) => {
    setState((prev) => ({
      ...prev,
      perScreen: { ...prev.perScreen, [screen]: value },
      lastSelected: value !== 'all' ? (value as SubjectId) : prev.lastSelected,
    }));
  }, []);

  const setGlobalSubject = useCallback((value: SubjectSelection) => {
    const stageScreens: StageScreen[] = ['learn', 'practice', 'review', 'search', 'formulas', 'progress'];
    const newPerScreen: Record<string, SubjectSelection> = {};
    for (const s of stageScreens) newPerScreen[s] = value;
    setState((prev) => ({
      ...prev,
      perScreen: newPerScreen,
      lastSelected: value !== 'all' ? (value as SubjectId) : prev.lastSelected,
    }));
  }, []);

  const setActiveTrack = useCallback((track: ExamTrackId) => {
    setState((prev) => {
      const trackSubjects = subjectsByTrack(track);
      const firstSubject = (trackSubjects[0]?.id ?? prev.lastSelected) as SubjectId;
      return {
        perScreen: {},
        lastSelected: firstSubject,
        activeTrack: track,
      };
    });
  }, []);

  return (
    <SubjectSelectionContext.Provider value={{
      perScreen: state.perScreen,
      lastSelected: state.lastSelected,
      activeTrack: state.activeTrack,
      getActiveSubject,
      setActiveSubjectForScreen,
      setGlobalSubject,
      setActiveTrack,
    }}>
      {children}
    </SubjectSelectionContext.Provider>
  );
}

export function useSubjectSelection(): SubjectSelectionContextValue {
  const ctx = useContext(SubjectSelectionContext);
  if (!ctx) throw new Error('useSubjectSelection must be used within SubjectSelectionProvider');
  return ctx;
}
