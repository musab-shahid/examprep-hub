import { useState, useEffect } from 'react';
import {
  Home, BookOpen, Brain, RotateCcw, Calculator, BarChart3,
  Search, Clock, Settings as SettingsIcon, GraduationCap,
  ChevronRight, ChevronDown, Cloud, MoreHorizontal, FileText,
  Library, Dumbbell,
} from 'lucide-react';
import { useRouter } from '@/router';
import { getSubjectColorClasses, examTracks, subjectsByTrack, type ExamTrack } from '@/data/subjects';
import { useSubjectSelection, type StageScreen } from '@/contexts/subject-selection-context';
import { useSubjectData } from '@/hooks/useSubjectData';
import { ToolsTray } from '@/components/layout/ToolsTray';
import {
  getLandingScreenForTrack,
  type ExamTrackId,
} from '@/lib/exam-track';
import { STAGE_SCREENS, STORAGE_KEYS } from '@/lib/constants';
import type { SubjectId } from '@/types';

const SIDEBAR_EXPANDED_KEY = STORAGE_KEYS.sidebarExpanded;

const stageIcons: Record<StageScreen, typeof BookOpen> = {
  learn: BookOpen,
  practice: Brain,
  review: RotateCcw,
  formulas: Calculator,
  progress: BarChart3,
  search: Search,
};

const trackStyles: Record<ExamTrack, { activeBorder: string; activeBg: string; iconColor: string; dotColor: string }> = {
  fpsc: {
    activeBorder: 'border-sky-500',
    activeBg: 'bg-sky-500/10',
    iconColor: 'text-sky-400',
    dotColor: 'bg-sky-500',
  },
  hat: {
    activeBorder: 'border-indigo-500',
    activeBg: 'bg-indigo-500/10',
    iconColor: 'text-indigo-400',
    dotColor: 'bg-indigo-500',
  },
};

export function Sidebar() {
  const { route, navigate } = useRouter();
  const { getActiveSubject, setActiveSubjectForScreen } = useSubjectSelection();
  const sd = useSubjectData();
  const [expandedSubject, setExpandedSubject] = useState<string | null>(() => {
    try { return localStorage.getItem(SIDEBAR_EXPANDED_KEY); } catch { return null; }
  });
  useEffect(() => {
    try {
      if (expandedSubject) localStorage.setItem(SIDEBAR_EXPANDED_KEY, expandedSubject);
      else localStorage.removeItem(SIDEBAR_EXPANDED_KEY);
    } catch { /* ignore */ }
  }, [expandedSubject]);
  const currentScreen = route.screen;
  const goToStage = (stage: StageScreen, subjectId: SubjectId) => {
    setActiveSubjectForScreen(stage, subjectId);
    navigate({ screen: stage, parent: null });
  };
  const isSubjectActive = (subjectId: string): boolean => {
    if (!(STAGE_SCREENS as readonly string[]).includes(currentScreen)) return false;
    const activeSubj = getActiveSubject(currentScreen as StageScreen);
    return activeSubj === subjectId;
  };
  const isStageActive = (stage: StageScreen, subjectId: string): boolean => {
    return currentScreen === stage && getActiveSubject(stage) === subjectId;
  };
  const getReviewDueCount = (subjectId: SubjectId): number => {
    const stats = sd.statsFor(subjectId);
    return stats.todayRevision.length;
  };
  const toggleSubject = (subjectId: string) => {
    setExpandedSubject((prev) => (prev === subjectId ? null : subjectId));
  };
  const isTrackLandingActive = (trackId: ExamTrackId) =>
    currentScreen === getLandingScreenForTrack(trackId);
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-slate-900 flex-col z-40">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center shrink-0">
            <Library className="w-6 h-6 text-white" />
          </div>
          <div className="min-w-0">
            <h1 className="text-white font-bold text-lg leading-tight">ExamPrep Hub</h1>
            <p className="text-slate-400 text-xs">FPSC & HAT Study Hub</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        {/* Home */}
        <button
          type="button"
          onClick={() => navigate({ screen: 'home', parent: null })}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all mb-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
            currentScreen === 'home'
              ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Home className="w-5 h-5 shrink-0" />
          Home
        </button>
        {/* Exam Track Groups */}
        {examTracks.map((track) => {
          const trackId = track.id as ExamTrackId;
          // Full subject objects from data (color, icon) — both FPSC and HAT are multi-subject
          const trackSubs = subjectsByTrack(trackId);
          const styles = trackStyles[trackId];
          const TrackIcon = track.icon;
          const landing = getLandingScreenForTrack(trackId);
          const isTrackActive = isTrackLandingActive(trackId);
          return (
            <div key={trackId} className="mb-1">
              {/* Track header — navigates to track landing page */}
              <button
                onClick={() => navigate({ screen: landing, parent: null })}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border-l-2 ${
                  isTrackActive
                    ? `${styles.activeBorder} text-white bg-slate-800`
                    : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <TrackIcon className={`w-5 h-5 shrink-0 ${isTrackActive ? styles.iconColor : ''}`} />
                <span className="flex-1 text-left">{track.title}</span>
                <span className="text-slate-600 text-xs">{trackSubs.length}</span>
              </button>
              {/* Subject list under every track */}
              <div className="ml-3 mt-0.5 space-y-0.5 border-l border-slate-700 pl-2">
                {trackSubs.map((subject) => {
                  const colors = getSubjectColorClasses(subject.color);
                  const expanded = expandedSubject === subject.id;
                  const active = isSubjectActive(subject.id);
                  const topicCount = sd.topicsFor(subject.id as SubjectId).length;
                  const reviewDue = getReviewDueCount(subject.id as SubjectId);
                  return (
                    <div key={subject.id}>
                      <button
                        onClick={() => toggleSubject(subject.id)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all border-l-2 ${
                          active
                            ? `${colors.border} text-white bg-slate-800`
                            : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800'
                        }`}
                      >
                        <span className={`w-2 h-2 rounded-full ${colors.dot} shrink-0`} />
                        <span className="flex-1 text-left truncate text-[13px]">{subject.title}</span>
                        {topicCount === 0 && <span className="text-slate-600 text-xs">·</span>}
                        {expanded
                          ? <ChevronDown className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          : <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />}
                      </button>
                      {expanded && (
                        <div className="ml-3 mt-0.5 mb-1 space-y-0.5 border-l border-slate-700 pl-2">
                          {(['learn', 'practice', 'review', 'formulas', 'progress'] as StageScreen[]).map((stage) => {
                            const StageIcon = stageIcons[stage];
                            const stageActive = isStageActive(stage, subject.id);
                            return (
                              <button
                                key={stage}
                                onClick={() => goToStage(stage, subject.id as SubjectId)}
                                className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                  stageActive
                                    ? 'text-sky-400 bg-slate-800'
                                    : 'text-slate-500 hover:text-white hover:bg-slate-800'
                                }`}
                              >
                                <StageIcon className="w-3.5 h-3.5 shrink-0" />
                                <span className="flex-1 text-left capitalize">{stage}</span>
                                {stage === 'review' && reviewDue > 0 && (
                                  <span className="px-1.5 py-0.5 rounded-full bg-amber-500 text-white text-[10px] font-bold leading-none">
                                    {reviewDue}
                                  </span>
                                )}
                              </button>
                            );
                          })}
                          {subject.id === 'meteo-climatology' && (
                            <button
                              onClick={() => navigate({ screen: 'cloud-atlas', parent: null })}
                              className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                currentScreen === 'cloud-atlas'
                                  ? 'text-sky-400 bg-slate-800'
                                  : 'text-slate-500 hover:text-white hover:bg-slate-800'
                              }`}
                            >
                              <Cloud className="w-3.5 h-3.5 shrink-0" />
                              <span className="flex-1 text-left">Cloud Atlas</span>
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        {/* Tools header */}
        <p className="text-slate-500 text-xs font-medium uppercase tracking-wide px-4 py-2 mt-3">Tools</p>
        <div className="space-y-0.5">
          <button
            onClick={() => { setActiveSubjectForScreen('search', 'all'); navigate({ screen: 'search', parent: null }); }}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
              currentScreen === 'search'
                ? 'text-white bg-slate-800'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Search className="w-5 h-5 shrink-0" />
            Search
          </button>
          <button
            onClick={() => { setActiveSubjectForScreen('practice', 'all'); navigate({ screen: 'practice', mode: 'mock', parent: null }); }}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
              route.screen === 'practice' && route.mode === 'mock'
                ? 'text-white bg-slate-800'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Clock className="w-5 h-5 shrink-0" />
            Mock Exam
          </button>
          <button
            onClick={() => { setActiveSubjectForScreen('progress', 'all'); navigate({ screen: 'progress', parent: null }); }}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
              currentScreen === 'progress' && getActiveSubject('progress') === 'all'
                ? 'text-white bg-slate-800'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <BarChart3 className="w-5 h-5 shrink-0" />
            Progress
          </button>
        </div>
      </nav>
      {/* Bottom: Settings */}
      <div className="px-3 py-3 border-t border-slate-800 relative">
        <button
          onClick={() => navigate({ screen: 'settings', parent: null })}
          className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
            currentScreen === 'settings'
              ? 'text-white bg-slate-800'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <SettingsIcon className="w-5 h-5 shrink-0" />
          Settings
        </button>
      </div>
    </aside>
  );
}

export function MobileNav() {
  const { route, navigate } = useRouter();
  const { getActiveSubject, setActiveSubjectForScreen } = useSubjectSelection();
  const sd = useSubjectData();
  const [moreOpen, setMoreOpen] = useState(false);
  const currentScreen = route.screen;
  const goToStage = (stage: StageScreen) => {
    const subject = getActiveSubject(stage);
    setActiveSubjectForScreen(stage, subject);
    navigate({ screen: stage, parent: null });
  };
  const navItems = [
    { icon: Home, label: 'Home', screen: 'home' as ScreenName, onClick: () => navigate({ screen: 'home', parent: null }) },
    { icon: FileText, label: 'FPSC', screen: 'fpsc' as ScreenName, onClick: () => navigate({ screen: 'fpsc', parent: null }) },
    { icon: GraduationCap, label: 'HAT', screen: 'hat' as ScreenName, onClick: () => navigate({ screen: 'hat', parent: null }) },
    { icon: Dumbbell, label: 'Practice', screen: 'practice' as ScreenName, onClick: () => goToStage('practice') },
  ];
  const reviewDue = (() => {
    try {
      const subj = getActiveSubject('review');
      if (subj === 'all') {
        return sd.revisionQueueAll?.()?.length ?? 0;
      }
      return sd.statsFor(subj as SubjectId).todayRevision?.length ?? 0;
    } catch {
      return 0;
    }
  })();
  const moreActive =
    moreOpen ||
    (['review', 'formulas', 'progress', 'search', 'settings', 'learn'] as string[]).includes(currentScreen);

  return (
    <>
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 z-40 safe-area"
        aria-label="Primary"
      >
        <div className="flex items-center justify-around px-1 pt-1.5 pb-1">
          {navItems.map((item) => {
            const active = currentScreen === item.screen;
            const Icon = item.icon;
            const isHat = item.screen === 'hat';
            const isFpsc = item.screen === 'fpsc';
            const activeColor = isHat ? 'text-indigo-400' : isFpsc ? 'text-sky-400' : 'text-sky-400';
            return (
              <button
                key={item.screen}
                type="button"
                onClick={item.onClick}
                aria-current={active ? 'page' : undefined}
                className={`flex flex-col items-center gap-0.5 px-2.5 py-1.5 rounded-xl transition-colors relative min-w-[56px] min-h-[48px] touch-manipulation ${
                  active ? activeColor : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {active && (
                  <span
                    className={`absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full ${
                      isHat ? 'bg-indigo-400' : 'bg-sky-400'
                    }`}
                    aria-hidden
                  />
                )}
                <Icon className="w-5 h-5" strokeWidth={active ? 2.25 : 2} />
                <span className="text-[10px] font-medium leading-tight">{item.label}</span>
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => setMoreOpen(true)}
            aria-expanded={moreOpen}
            aria-label={reviewDue > 0 ? `More, ${reviewDue} reviews due` : 'More'}
            className={`flex flex-col items-center gap-0.5 px-2.5 py-1.5 rounded-xl transition-colors relative min-w-[56px] min-h-[48px] touch-manipulation ${
              moreActive ? 'text-sky-400' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            {moreActive && (
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-sky-400" aria-hidden />
            )}
            <span className="relative">
              <MoreHorizontal className="w-5 h-5" strokeWidth={moreActive ? 2.25 : 2} />
              {reviewDue > 0 && (
                <span className="absolute -top-1.5 -right-2 min-w-[16px] h-4 px-1 rounded-full bg-amber-500 text-white text-[9px] font-bold leading-4 text-center">
                  {reviewDue > 9 ? '9+' : reviewDue}
                </span>
              )}
            </span>
            <span className="text-[10px] font-medium leading-tight">More</span>
          </button>
        </div>
      </nav>
      <ToolsTray isOpen={moreOpen} onClose={() => setMoreOpen(false)} variant="mobile-sheet" />
    </>
  );
}
