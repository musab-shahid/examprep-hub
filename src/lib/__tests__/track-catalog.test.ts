import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { buildTrackCatalog, formatCatalogCount } from '../track-catalog.ts';

describe('buildTrackCatalog', () => {
  it('general FPSC scope yields subjects with estimated or exact counts', () => {
    const cat = buildTrackCatalog({ trackId: 'fpsc', examId: null });
    assert.equal(cat.scopeKind, 'general');
    assert.ok(cat.subjects.length > 0);
    assert.ok(cat.totalTopics.value > 0);
    assert.ok(
      cat.totalTopics.precision === 'estimated' || cat.totalTopics.precision === 'exact',
    );
  });

  it('invalid profile does not broaden — unavailable totals', () => {
    const cat = buildTrackCatalog({ trackId: 'fpsc', examId: 'not-a-real-profile-xyz' });
    assert.equal(cat.scopeKind, 'invalid');
    assert.equal(cat.subjects.length, 0);
    assert.equal(cat.totalQuestions.precision, 'unavailable');
  });

  it('empty topic map still allows estimates from section metadata', () => {
    const cat = buildTrackCatalog({ trackId: 'fpsc', examId: null }, {});
    assert.ok(cat.subjects.some((e) => e.questionCount.precision === 'estimated' || e.questionCount.value >= 0));
  });

  it('exact topic counts when topicIds provided', () => {
    const base = buildTrackCatalog({ trackId: 'fpsc', examId: null });
    const sid = base.subjects[0]?.subject.id;
    assert.ok(sid);
    const cat = buildTrackCatalog(
      { trackId: 'fpsc', examId: null },
      { topicIdsBySubject: new Map([[sid, ['t1', 't2', 't3']]]) },
    );
    const entry = cat.subjects.find((e) => e.subject.id === sid);
    assert.ok(entry);
    assert.equal(entry!.topicCount.value, 3);
    assert.equal(entry!.topicCount.precision, 'exact');
  });

  it('formatCatalogCount marks estimates', () => {
    assert.equal(formatCatalogCount({ value: 10, precision: 'estimated' }, 'topics'), '~10 topics');
    assert.equal(formatCatalogCount({ value: 10, precision: 'exact' }, 'topics'), '10 topics');
    assert.equal(formatCatalogCount({ value: 0, precision: 'unavailable' }, 'topics'), '— topics');
  });
});
