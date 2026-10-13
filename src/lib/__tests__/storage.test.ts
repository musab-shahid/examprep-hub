import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { STORAGE_KEYS } from '../constants.ts';

/** Minimal localStorage for Node unit tests */
function installMemoryStorage(): void {
  const store = new Map<string, string>();
  const mem = {
    getItem(key: string) {
      return store.has(key) ? store.get(key)! : null;
    },
    setItem(key: string, value: string) {
      store.set(key, String(value));
    },
    removeItem(key: string) {
      store.delete(key);
    },
    clear() {
      store.clear();
    },
    key(i: number) {
      return [...store.keys()][i] ?? null;
    },
    get length() {
      return store.size;
    },
  };
  (globalThis as { localStorage?: typeof mem }).localStorage = mem;
}

// Install before importing storage (module reads localStorage at call time only)
installMemoryStorage();

const { loadData, saveData, flushPendingSave, resetData, consumeStorageWarning, markTopicStudied } =
  await import('../storage.ts');

describe('storage load/save', () => {
  beforeEach(() => {
    localStorage.clear();
    consumeStorageWarning();
  });

  it('returns empty shape when nothing stored', () => {
    const data = loadData();
    assert.deepEqual(data.studiedTopics, []);
    assert.deepEqual(data.topicProgress, {});
    assert.deepEqual(data.quizHistory, []);
  });

  it('round-trips markTopicStudied via debounced save + flush', () => {
    let data = loadData();
    data = markTopicStudied(data, 'topic-a');
    saveData(data);
    flushPendingSave();
    const raw = localStorage.getItem(STORAGE_KEYS.appData);
    assert.ok(raw);
    const again = loadData();
    assert.ok(again.studiedTopics.includes('topic-a'));
    assert.ok(again.topicProgress['topic-a']);
  });

  it('invalid JSON is recovered as empty with a warning', () => {
    localStorage.setItem(STORAGE_KEYS.appData, '{not-json');
    const data = loadData();
    assert.deepEqual(data.studiedTopics, []);
    const warn = consumeStorageWarning();
    assert.ok(warn && /corrupt|reset|backup/i.test(warn));
  });

  it('quarantines invalid topicProgress entry without wiping the rest', () => {
    const blob = {
      studiedTopics: ['good-topic'],
      topicProgress: {
        'good-topic': {
          lastStudied: '2026-10-01',
          nextReview: null,
          lastQuizDate: null,
          quizCorrect: 2,
          quizTotal: 3,
        },
        'bad-topic': 'not-an-object',
      },
      questionResults: {},
      quizHistory: [],
      revisionDates: {},
      lastOpenedTopic: '',
    };
    localStorage.setItem(STORAGE_KEYS.appData, JSON.stringify(blob));
    const data = loadData();
    assert.ok(data.studiedTopics.includes('good-topic'));
    assert.ok(data.topicProgress['good-topic']);
    assert.equal(data.topicProgress['bad-topic'], undefined);
  });

  it('resetData clears primary key', () => {
    localStorage.setItem(STORAGE_KEYS.appData, JSON.stringify({ studiedTopics: ['x'] }));
    resetData();
    assert.equal(localStorage.getItem(STORAGE_KEYS.appData), null);
  });
});
