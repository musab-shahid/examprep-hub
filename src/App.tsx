import { useEffect } from 'react';
import { RouterProvider, useRouter, routeLabel, type Route } from '@/router';
import { DataProvider } from '@/data-context';
import { SubjectSelectionProvider, useSubjectSelection, type StageScreen } from '@/contexts/subject-selection-context';
import { Sidebar, MobileNav } from '@/components/layout/Navigation';
import { Header } from '@/components/layout/Header';
import { DashboardScreen } from '@/screens/DashboardScreen';
import { StudyScreen, SectionScreen, TopicScreen } from '@/screens/StudyScreen';
import { FormulaVaultScreen } from '@/screens/FormulaVaultScreen';
import { CloudAtlasScreen } from '@/screens/CloudAtlasScreen';
import { PracticeScreen } from '@/screens/PracticeScreen';
import { QuizScreen } from '@/screens/QuizScreen';
import { RevisionScreen } from '@/screens/RevisionScreen';
import { ProgressScreen } from '@/screens/ProgressScreen';
import { SearchScreen } from '@/screens/SearchScreen';
import { SettingsScreen } from '@/screens/SettingsScreen';
import { HatLandingScreen } from '@/screens/hat/HatLandingScreen';
import { FpscLandingScreen } from '@/screens/fpsc/FpscLandingScreen';
import { sectionMap } from '@/data/sections';
import { getTopic } from '@/data/topics';
import { subjectMap } from '@/data/subjects';
import { STAGE_SCREENS } from '@/lib/constants';
import { flushPendingSave } from '@/lib/storage';

function ScreenRouter() {
  const { route } = useRouter();
  switch (route.screen) {
    case 'home':
      return <DashboardScreen />;
    case 'learn':
      return <StudyScreen />;
    case 'section':
      return <SectionScreen sectionId={route.sectionId} />;
    case 'topic':
      return <TopicScreen topicId={route.topicId} />;
    case 'formulas':
      return <FormulaVaultScreen />;
    case 'cloud-atlas':
      return <CloudAtlasScreen />;
    case 'practice':
      return <PracticeScreen mode={route.mode} />;
    case 'quiz':
      return (
        <QuizScreen
          mode={route.mode}
          topicId={route.topicId}
          topicIds={route.topicIds}
          scope={route.scope}
          subjectId={route.subjectId}
          count={route.count}
          difficulty={route.difficulty}
          timeLimit={route.timeLimit}
          wrongPool={route.wrongPool}
        />
      );
    case 'review':
      return <RevisionScreen />;
    case 'progress':
      return <ProgressScreen />;
    case 'search':
      return <SearchScreen />;
    case 'settings':
      return <SettingsScreen />;
    case 'hat':
      return <HatLandingScreen />;
    case 'fpsc':
      return <FpscLandingScreen />;
    default:
      return <DashboardScreen />;
  }
}

/** Header title/subtitle — richer than routeLabel (includes section/topic detail). */
function getHeaderTitle(route: Route): { title: string; subtitle?: string } {
  switch (route.screen) {
    case 'home':
      return { title: 'Home' };
    case 'learn':
      return { title: 'Learn' };
    case 'section': {
      const s = sectionMap[route.sectionId];
      return { title: `Section ${route.sectionId}`, subtitle: s?.title };
    }
    case 'topic': {
      const t = getTopic(route.topicId);
      return { title: t?.title ?? 'Topic', subtitle: t ? `Section ${t.sectionId}` : undefined };
    }
    case 'formulas':
      return { title: 'Formulas' };
    case 'cloud-atlas':
      return { title: 'Cloud Atlas', subtitle: 'Meteorology & Climatology' };
    case 'practice':
      return { title: route.mode === 'mock' ? 'Mock Exam' : 'Practice' };
    case 'quiz':
      return { title: routeLabel(route) };
    case 'review':
      return { title: 'Review' };
    case 'progress':
      return { title: 'Progress' };
    case 'search':
      return { title: 'Search' };
    case 'settings':
      return { title: 'Settings' };
    case 'hat':
      return { title: 'HAT Prep', subtitle: 'Higher Education Aptitude Test' };
    case 'fpsc':
      return { title: 'FPSC Exam', subtitle: 'Federal Public Service Commission' };
    default:
      return { title: 'Exam Prep' };
  }
}

function AppContent() {
  const { route } = useRouter();
  const { getActiveSubject } = useSubjectSelection();
  const { title, subtitle } = getHeaderTitle(route);
  const showHeader = route.screen !== 'quiz';

  // Subject context on stage screens
  let finalSubtitle = subtitle;
  if ((STAGE_SCREENS as readonly string[]).includes(route.screen)) {
    const subj = getActiveSubject(route.screen as StageScreen);
    finalSubtitle = subj === 'all' ? 'All Subjects' : subjectMap[subj]?.title ?? 'All Subjects';
  }

  // Keep browser tab title in sync
  useEffect(() => {
    const parts = [title];
    if (finalSubtitle) parts.push(finalSubtitle);
    parts.push('ExamPrep Hub');
    document.title = parts.join(' · ');
  }, [title, finalSubtitle]);

  // Flush debounced localStorage on page hide / unload
  useEffect(() => {
    const onHide = () => flushPendingSave();
    window.addEventListener('pagehide', onHide);
    window.addEventListener('beforeunload', onHide);
    return () => {
      window.removeEventListener('pagehide', onHide);
      window.removeEventListener('beforeunload', onHide);
      flushPendingSave();
    };
  }, []);

  return (
    <div className="min-h-screen bg-pattern-topo">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-500 focus:text-white focus:rounded-btn focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>
      <Sidebar />
      <div className="lg:ml-64">
        {showHeader && (
          <Header
            title={title}
            subtitle={finalSubtitle}
            screen={route.screen}
          />
        )}
        <main id="main-content" className="pb-mobile-nav min-h-screen" tabIndex={-1}>
          <ScreenRouter />
        </main>
      </div>
      <MobileNav />
    </div>
  );
}

function App() {
  return (
    <RouterProvider>
      <DataProvider>
        <SubjectSelectionProvider>
          <AppContent />
        </SubjectSelectionProvider>
      </DataProvider>
    </RouterProvider>
  );
}

export default App;
