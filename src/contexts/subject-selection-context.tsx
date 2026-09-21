import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import type { SubjectId } from '@/types';
import type { ExamTrackId } from '@/lib/exam-track';
import { getTrackForSubject } from '@/lib/exam-track';
import { subjectsByTrack } from '@/data/subjects';

export type StageScreen = 'learn' | 'practice' | 'review' | 'search' | 'formulas' | 'progress';

export type SubjectSelection = SubjectId | 'all';

interface SubjectSelectionState {
  perScreen: Record<string, SubjectSelection>;
  /** Last concrete subject chosen (never 'all') */
  lastSelected: SubjectId;
  /**
   * When true, screens without an explicit perScreen value fall back to 'all'
   * instead of lastSelected. Set when user picks "All Subjects"; cleared when
   * they pick a concrete subject.
   */
  prefersAll: boolean;
  activeTrack: ExamTrackId;
}

interface SubjectSelectionContextValue {
  perScreen: Record<string, SubjectSelection>;
  lastSelected: SubjectId;
  prefersAll: boolean;
  activeTrack: ExamTrackId;
  getActiveSubject: (screen: StageScreen) => SubjectSelection;
  setActiveSubjectForScreen: (screen: StageScreen, value: SubjectSelection) => void;
  setGlobalSubject: (value: SubjectSelection) => void;
  setActiveTrack: (track: ExamTrackId) => void;
}

const STORAGE_KEY = 'examprep-subject-selection';
const STAGE_SCREENS: StageScreen[] = ['learn', 'practice', 'review', 'search', 'formulas', 'progress'];

const SubjectSelectionContext = createContext<SubjectSelectionContextValue | null>(null);

function loadPersisted(): SubjectSelectionState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        perScreen: parsed.perScreen ?? {},
        lastSelected: parsed.lastSelected ?? 'meteo-climatology',
        prefersAll: Boolean(parsed.prefersAll),
        activeTrack: (parsed.activeTrack === 'hat' || parsed.activeTrack === 'fpsc') ? parsed.activeTrack : 'fpsc',
      };
    }
  } catch { /* ignore */ }
  return { perScreen: {}, lastSelected: 'meteo-climatology', prefersAll: false, activeTrack: 'fpsc' };
}

function isValidForTrack(selection: SubjectSelection, track: ExamTrackId): boolean {
  if (selection === 'all') return true;
  return getTrackForSubject(selection as string) === track;
}

export function SubjectSelectionProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(() => loadPersisted());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch { /* ignore */ }
  }, [state]);

  const getActiveSubject = useCallback((screen: StageScreen): SubjectSelection => {
    const explicit = state.perScreen[screen];
    const selection =
      explicit ??
      (state.prefersAll ? 'all' : state.lastSelected);

    if (selection !== 'all') {
      const track = getTrackForSubject(selection as string);
      if (track !== state.activeTrack) {
        // Subject belongs to other track — fall back without wiping preference
        return state.prefersAll ? 'all' : 'all';
      }
    }
    return selection;
  }, [state]);

  const setActiveSubjectForScreen = useCallback((screen: StageScreen, value: SubjectSelection) => {
    setState((prev) => ({
      ...prev,
      perScreen: { ...prev.perScreen, [screen]: value },
      lastSelected: value !== 'all' ? (value as SubjectId) : prev.lastSelected,
      prefersAll: value === 'all' ? true : false,
    }));
  }, []);

  const setGlobalSubject = useCallback((value: SubjectSelection) => {
    const newPerScreen: Record<string, SubjectSelection> = {};
    for (const s of STAGE_SCREENS) newPerScreen[s] = value;
    setState((prev) => ({
      ...prev,
      perScreen: newPerScreen,
      lastSelected: value !== 'all' ? (value as SubjectId) : prev.lastSelected,
      prefersAll: value === 'all',
    }));
  }, []);

  /**
   * Soft track switch: keep per-screen selections that are still valid
   * ('all' or a subject in the new track). Invalidate the rest to 'all'.
   * lastSelected becomes a subject in the new track when the old one is not.
   */
  const setActiveTrack = useCallback((track: ExamTrackId) => {
    setState((prev) => {
      if (prev.activeTrack === track) return prev;

      const trackSubjectIds = new Set(subjectsByTrack(track).map((s) => s.id));
      const firstSubject = (subjectsByTrack(track)[0]?.id ?? prev.lastSelected) as SubjectId;

      const newPerScreen: Record<string, SubjectSelection> = {};
      for (const [screen, sel] of Object.entries(prev.perScreen)) {
        if (isValidForTrack(sel as SubjectSelection, track)) {
          newPerScreen[screen] = sel as SubjectSelection;
        } else {
          // Soft-clear: prefer 'all' over inventing a subject the user didn't pick
          newPerScreen[screen] = 'all';
        }
      }

      const lastStillValid =
        trackSubjectIds.has(prev.lastSelected) ? prev.lastSelected : firstSubject;

      return {
        perScreen: newPerScreen,
        lastSelected: lastStillValid,
        // Crossing tracks with prefersAll keeps "all" semantics for screens without explicit picks
        prefersAll: prev.prefersAll || Object.values(newPerScreen).every((v) => v === 'all'),
        activeTrack: track,
      };
    });
  }, []);

  return (
    <SubjectSelectionContext.Provider value={{
      perScreen: state.perScreen,
      lastSelected: state.lastSelected,
      prefersAll: state.prefersAll,
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
