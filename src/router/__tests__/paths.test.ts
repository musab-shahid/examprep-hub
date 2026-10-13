import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { routeToPath, pathToRoute } from '../paths.ts';

describe('Phase A path mapping', () => {
  it('round-trips static screens', () => {
    const screens = [
      { screen: 'home' as const },
      { screen: 'learn' as const },
      { screen: 'formulas' as const },
      { screen: 'cloud-atlas' as const },
      { screen: 'review' as const },
      { screen: 'progress' as const },
      { screen: 'search' as const },
      { screen: 'settings' as const },
      { screen: 'hat' as const },
      { screen: 'fpsc' as const },
      { screen: 'practice' as const },
      { screen: 'practice' as const, mode: 'mock' as const },
    ];
    for (const route of screens) {
      const path = routeToPath(route);
      const parsed = pathToRoute(path);
      assert.equal(parsed.screen, route.screen, path);
      if ('mode' in route && route.mode) {
        assert.equal((parsed as { mode?: string }).mode, route.mode);
      }
    }
  });

  it('maps /quiz deep link to practice (no quiz params in URL)', () => {
    const parsed = pathToRoute('/quiz');
    assert.equal(parsed.screen, 'practice');
  });

  it('unknown paths fall back to home', () => {
    assert.equal(pathToRoute('/not-a-real-page').screen, 'home');
  });

  it('round-trips section and topic paths when ids resolve', () => {
    const sectionPath = routeToPath({ screen: 'section', sectionId: 'METEO-01' });
    assert.equal(sectionPath, '/section/METEO-01');
    assert.equal(pathToRoute(sectionPath).screen, 'section');

    const topicPath = routeToPath({ screen: 'topic', topicId: 'meteo-origin-evolution' });
    assert.equal(topicPath, '/topic/meteo-origin-evolution');
    const topicRoute = pathToRoute(topicPath);
    assert.equal(topicRoute.screen, 'topic');
    if (topicRoute.screen === 'topic') {
      assert.equal(topicRoute.topicId, 'meteo-origin-evolution');
    }
  });

  it('unknown section/topic ids fall back to learn', () => {
    assert.equal(pathToRoute('/section/NOT-REAL').screen, 'learn');
    assert.equal(pathToRoute('/topic/not-a-real-topic').screen, 'learn');
  });
});
