import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import type { SubjectId } from '@/types';
import type { ExamTrackId } from '@/lib/exam-track';
import { getTrackForSubject } from '@/lib/exam-track';
import { subjectsByTrack } from '@/data/subjects';
import { STAGE_SCREENS } from '@/lib/constants';
import { useData } from '@/hooks/useData';
import { isTrackId } from '@/data/tracks';

export type StageScreen = (typeof STAGE_SCREENS)[number];
export type SubjectSelection = SubjectId | 'all';

interface TrackPrefs {
  perScreen: Record<string, SubjectSelection>;
  /** Last concrete subject chosen (never 'all') */
  lastSelected: SubjectId;
  prefersAll: boolean;
}

interface SubjectSelectionState {
  /** Preferences keyed by track — switching restores the other track's picks */
  byTrack: Partial<Record<ExamTrackId, TrackPrefs>>;
  /**
   * UI focus track for subject selectors (kept in sync with membership when possible).
   * Canonical enrollment focus remains AppData.trackMembership.activeTrackId.
   */
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

const SubjectSelectionContext = createContext<SubjectSelectionContextValue | null>(null);

function defaultLastSelected(track: ExamTrackId): SubjectId {
  return (subjectsByTrack(track)[0]?.id ?? 'meteo-climatology') as SubjectId;
}

function defaultPrefs(track: ExamTrackId): TrackPrefs {
  return {
    perScreen: {},
    lastSelected: defaultLastSelected(track),
    prefersAll: false,
  };
}

function isValidForTrack(selection: SubjectSelection, track: ExamTrackId): boolean {
  if (selection === 'all') return true;
  return getTrackForSubject(selection as string) === track;
}

function loadPersisted(): SubjectSelectionState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Record<string, unknown>;
      const activeTrack: ExamTrackId =
        parsed.activeTrack === 'hat' || parsed.activeTrack === 'fpsc' ? parsed.activeTrack : 'fpsc';

      // New shape
      if (parsed.byTrack && typeof parsed.byTrack === 'object') {
        const byTrack: SubjectSelectionState['byTrack'] = {};
        for (const key of ['fpsc', 'hat'] as ExamTrackId[]) {
          const bucket = (parsed.byTrack as Record<string, unknown>)[key];
          if (bucket && typeof bucket === 'object') {
            const b = bucket as Record<string, unknown>;
            byTrack[key] = {
              perScreen: (b.perScreen as Record<string, SubjectSelection>) ?? {},
              lastSelected: (typeof b.lastSelected === 'string'
                ? b.lastSelected
                : defaultLastSelected(key)) as SubjectId,
              prefersAll: Boolean(b.prefersAll),
            };
          }
        }
        return { byTrack, activeTrack };
      }

      // Legacy flat shape → migrate into active track bucket
      const legacyPrefs: TrackPrefs = {
        perScreen: (parsed.perScreen as Record<string, SubjectSelection>) ?? {},
        lastSelected: (typeof parsed.lastSelected === 'string'
          ? parsed.lastSelected
          : defaultLastSelected(activeTrack)) as SubjectId,
        prefersAll: Boolean(parsed.prefersAll),
      };
      return {
        byTrack: { [activeTrack]: legacyPrefs },
        activeTrack,
      };
    }
  } catch {
    /* ignore */
  }
  return { byTrack: {}, activeTrack: 'fpsc' };
}

function prefsFor(state: SubjectSelectionState, track: ExamTrackId): TrackPrefs {
  return state.byTrack[track] ?? defaultPrefs(track);
}

export function SubjectSelectionProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(() => loadPersisted());
  const { trackMembership } = useData();

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state]);

  // Canonical focus is membership.activeTrackId — mirror into UI prefs context only
  useEffect(() => {
    const focus = trackMembership.activeTrackId;
    if (!focus || !isTrackId(focus)) return;
    setState((prev) => {
      if (prev.activeTrack === focus) return prev;
      const byTrack = prev.byTrack[focus]
        ? prev.byTrack
        : { ...prev.byTrack, [focus]: defaultPrefs(focus) };
      return { ...prev, byTrack, activeTrack: focus };
    });
  }, [trackMembership.activeTrackId]);

  const activePrefs = prefsFor(state, state.activeTrack);

  const getActiveSubject = useCallback(
    (screen: StageScreen): SubjectSelection => {
      const prefs = prefsFor(state, state.activeTrack);
      const explicit = prefs.perScreen[screen];
      if (explicit !== undefined) {
        if (isValidForTrack(explicit, state.activeTrack)) return explicit;
        return 'all';
      }
      return prefs.prefersAll ? 'all' : prefs.lastSelected;
    },
    [state],
  );

  const setActiveSubjectForScreen = useCallback((screen: StageScreen, value: SubjectSelection) => {
    setState((prev) => {
      const track = prev.activeTrack;
      const cur = prefsFor(prev, track);
      return {
        ...prev,
        byTrack: {
          ...prev.byTrack,
          [track]: {
            perScreen: { ...cur.perScreen, [screen]: value },
            lastSelected: value !== 'all' ? (value as SubjectId) : cur.lastSelected,
            prefersAll: value === 'all' ? true : false,
          },
        },
      };
    });
  }, []);

  const setGlobalSubject = useCallback((value: SubjectSelection) => {
    setState((prev) => {
      const track = prev.activeTrack;
      const cur = prefsFor(prev, track);
      const newPerScreen: Record<string, SubjectSelection> = {};
      for (const s of STAGE_SCREENS) newPerScreen[s] = value;
      return {
        ...prev,
        byTrack: {
          ...prev.byTrack,
          [track]: {
            perScreen: newPerScreen,
            lastSelected: value !== 'all' ? (value as SubjectId) : cur.lastSelected,
            prefersAll: value === 'all',
          },
        },
      };
    });
  }, []);

  /**
   * Switch UI subject context to another track.
   * Does not clear the previous track's preferences (stored under byTrack).
   */
  const setActiveTrack = useCallback((track: ExamTrackId) => {
    // UI track follows membership. Do not adopt an unenrolled track while another is enrolled.
    const enrolled = trackMembership.enrollments[track];
    const hasAny = Object.keys(trackMembership.enrollments).length > 0;
    if (hasAny && !enrolled) return;
    setState((prev) => {
      if (prev.activeTrack === track) return prev;
      const byTrack = prev.byTrack[track]
        ? prev.byTrack
        : { ...prev.byTrack, [track]: defaultPrefs(track) };
      return { ...prev, byTrack, activeTrack: track };
    });
  }, [trackMembership.enrollments]);


  return (
    <SubjectSelectionContext.Provider
      value={{
        perScreen: activePrefs.perScreen,
        lastSelected: activePrefs.lastSelected,
        prefersAll: activePrefs.prefersAll,
        activeTrack: state.activeTrack,
        getActiveSubject,
        setActiveSubjectForScreen,
        setGlobalSubject,
        setActiveTrack,
      }}
    >
      {children}
    </SubjectSelectionContext.Provider>
  );
}

export function useSubjectSelection(): SubjectSelectionContextValue {
  const ctx = useContext(SubjectSelectionContext);
  if (!ctx) throw new Error('useSubjectSelection must be used within SubjectSelectionProvider');
  return ctx;
}
