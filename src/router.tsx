/**
 * In-memory router (v1). Deep-link / shareable URLs are intentionally deferred
 * until content + quiz + SR stay solid. Do not add partial URL sync without tests.
 */
import { createContext, useContext, useState, useCallback, useRef, type ReactNode } from 'react';
import { getTopic } from '@/data/topics';
import { resolveScreen } from '@/router/resolveScreen';

import type { DifficultyFilter, PracticeMode, TimeLimitSetting } from '@/types';

export type ScreenName =
  | 'home' | 'learn' | 'section' | 'topic' | 'formulas' | 'cloud-atlas'
  | 'practice' | 'quiz' | 'review' | 'progress' | 'search' | 'settings' | 'hat' | 'fpsc';

export type Route =
  | { screen: 'home' }
  | { screen: 'learn' }
  | { screen: 'section'; sectionId: string }
  | { screen: 'topic'; topicId: string }
  | { screen: 'formulas' }
  | { screen: 'cloud-atlas' }
  | { screen: 'practice'; mode?: 'topic' | 'quick' | 'mock' }
  | { screen: 'quiz'; mode: PracticeMode; topicId?: string; topicIds?: string[]; scope?: 'subject' | 'all'; subjectId?: string; count?: number | 'all'; difficulty?: DifficultyFilter; timeLimit?: TimeLimitSetting; wrongPool?: boolean }
  | { screen: 'review' }
  | { screen: 'progress' }
  | { screen: 'search' }
  | { screen: 'settings' }
  | { screen: 'hat' }
  | { screen: 'fpsc' };

export interface BreadcrumbItem {
  label: string;
  route: Route;
}

export interface RouteState {
  route: Route;
  parent: RouteState | null;
  breadcrumb: BreadcrumbItem[];
}

interface NavigateOptions {
  screen: ScreenName;
  sectionId?: string;
  topicId?: string;
  mode?: PracticeMode;
  scope?: 'subject' | 'all';
  subjectId?: string;
  parent?: RouteState | null;
  breadcrumb?: BreadcrumbItem[];
  count?: number | 'all';
  difficulty?: DifficultyFilter;
  timeLimit?: TimeLimitSetting;
  topicIds?: string[];
  wrongPool?: boolean;
}

interface RouterContext {
  route: Route;
  currentRoute: RouteState;
  navigate: (options: NavigateOptions) => void;
  back: () => void;
  canGoBack: boolean;
}

const RouterContext = createContext<RouterContext | null>(null);

function buildRoute(options: NavigateOptions): Route {
  switch (options.screen) {
    case 'home': return { screen: 'home' };
    case 'learn': return { screen: 'learn' };
    case 'section': return { screen: 'section', sectionId: options.sectionId! };
    case 'topic': return { screen: 'topic', topicId: options.topicId! };
    case 'formulas': return { screen: 'formulas' };
    case 'cloud-atlas': return { screen: 'cloud-atlas' };
    case 'practice': return { screen: 'practice', mode: options.mode as 'topic' | 'quick' | 'mock' | undefined };
    case 'quiz': return { screen: 'quiz', mode: options.mode!, topicId: options.topicId, topicIds: options.topicIds, scope: options.scope, subjectId: options.subjectId, count: options.count, difficulty: options.difficulty, timeLimit: options.timeLimit, wrongPool: options.wrongPool };
    case 'review': return { screen: 'review' };
    case 'progress': return { screen: 'progress' };
    case 'search': return { screen: 'search' };
    case 'settings': return { screen: 'settings' };
    case 'hat': return { screen: 'hat' };
    case 'fpsc': return { screen: 'fpsc' };
    default: return { screen: 'home' };
  }
}

export function routeLabel(route: Route): string {
  switch (route.screen) {
    case 'home': return 'Home';
    case 'learn': return 'Learn';
    case 'section': return `Section ${route.sectionId}`;
    case 'topic': {
      const t = getTopic(route.topicId);
      return t?.title ?? 'Topic';
    }
    case 'formulas': return 'Formulas';
    case 'cloud-atlas': return 'Cloud Atlas';
    case 'practice': return route.mode === 'mock' ? 'Mock Exam' : 'Practice';
    case 'quiz': return route.mode === 'mock' ? 'Mock Exam' : route.mode === 'quick' ? 'Quick Quiz' : route.mode === 'review' ? 'Review Wrong' : route.mode === 'challenge' ? 'Challenge' : 'Topic Quiz';
    case 'review': return 'Review';
    case 'progress': return 'Progress';
    case 'search': return 'Search';
    case 'settings': return 'Settings';
    case 'hat': return 'HAT Prep';
    case 'fpsc': return 'FPSC Exam';
    default: return 'Exam Prep';
  }
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentRoute, setCurrentRoute] = useState<RouteState>({
    route: { screen: 'home' },
    parent: null,
    breadcrumb: [{ label: 'Home', route: { screen: 'home' } }],
  });

  const scrollStackRef = useRef<number[]>([]);

  const navigate = useCallback((options: NavigateOptions) => {
    if (options.parent === null) {
      scrollStackRef.current = [];
    } else {
      scrollStackRef.current.push(window.scrollY);
    }
    const route = buildRoute(options);
    setCurrentRoute((prev) => {
      const parent = options.parent !== undefined ? options.parent : prev;
      let breadcrumb: BreadcrumbItem[];
      if (options.breadcrumb) {
        breadcrumb = options.breadcrumb;
      } else if (options.parent === null) {
        breadcrumb = [{ label: routeLabel(route), route }];
      } else {
        const parentCrumb = options.parent ?? prev;
        breadcrumb = [...parentCrumb.breadcrumb, { label: routeLabel(route), route }];
      }
      return { route, parent, breadcrumb };
    });
    window.scrollTo(0, 0);
  }, []);

  const back = useCallback(() => {
    const savedY = scrollStackRef.current.pop() ?? 0;
    setCurrentRoute((prev) => {
      if (prev.parent) {
        return prev.parent;
      }
      return prev;
    });
    requestAnimationFrame(() => window.scrollTo(0, savedY));
  }, []);

  const canGoBack = currentRoute.parent !== null;

  return (
    <RouterContext.Provider value={{ route: currentRoute.route, currentRoute, navigate, back, canGoBack }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter(): RouterContext {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('useRouter must be used within RouterProvider');
  return ctx;
}

export function screenDisplayName(screen: ScreenName | string): string {
  const resolved = resolveScreen(screen);
  const names: Record<ScreenName, string> = {
    'home': 'Home',
    'learn': 'Learn',
    'section': 'Section',
    'topic': 'Topic',
    'formulas': 'Formulas',
    'cloud-atlas': 'Cloud Atlas',
    'practice': 'Practice',
    'quiz': 'Quiz',
    'review': 'Review',
    'progress': 'Progress',
    'search': 'Search',
    'settings': 'Settings',
    'hat': 'HAT Prep',
    'fpsc': 'FPSC Exam',
  };
  return names[resolved] ?? resolved;
}
