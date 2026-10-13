import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { isTutorAvailable, getAvailableModels } from '../ai-tutor.ts';

describe('tutor availability (no keys in unit env)', () => {
  it('isTutorAvailable returns a boolean', () => {
    assert.equal(typeof isTutorAvailable(), 'boolean');
  });

  it('getAvailableModels returns a well-shaped array', () => {
    const models = getAvailableModels();
    assert.ok(Array.isArray(models));
    for (const m of models) {
      assert.equal(typeof m.id, 'string');
      assert.ok(m.id.length > 0);
      assert.equal(typeof m.label, 'string');
      assert.equal(typeof m.provider, 'string');
      assert.equal(typeof m.model, 'string');
    }
    // Without injected VITE_* keys, expect no models (or only if env leaked)
    if (!isTutorAvailable()) {
      assert.equal(models.length, 0);
    }
  });
});
