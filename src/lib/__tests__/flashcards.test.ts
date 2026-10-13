import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { buildFlashcardsForTopic, shuffleCards, KIND_LABEL } from '../flashcards.ts';
import type { Topic } from '../../types.ts';

const baseTopic = {
  id: 't1',
  sectionId: 'S-01',
  order: 1,
  title: 'Sample Topic',
  content: true,
} as Topic;

describe('flashcards', () => {
  it('builds fact cards from keyFacts with Label: detail split', () => {
    const cards = buildFlashcardsForTopic({
      ...baseTopic,
      keyFacts: ['Density: mass per unit volume', 'Plain fact without colon that is long enough'],
    });
    assert.ok(cards.length >= 2);
    const labeled = cards.find((c) => c.prompt === 'Density');
    assert.ok(labeled);
    assert.match(labeled!.answer, /mass per unit/i);
    assert.equal(labeled!.kind, 'fact');
  });

  it('builds formula cards', () => {
    const cards = buildFlashcardsForTopic({
      ...baseTopic,
      formula: { name: 'Ohm', expression: 'V = IR', variables: [{ symbol: 'V', meaning: 'voltage' }] },
    });
    const f = cards.find((c) => c.kind === 'formula');
    assert.ok(f);
    assert.match(f!.prompt, /Ohm/);
    assert.equal(f!.answer, 'V = IR');
    assert.match(f!.hint ?? '', /voltage/);
  });

  it('builds idiom cards', () => {
    const cards = buildFlashcardsForTopic({
      ...baseTopic,
      idiomGroups: [
        {
          title: 'Group',
          description: 'd',
          idioms: [{ idiom: 'break the ice', meaning: 'start conversation', example: 'He told a joke.' }],
        },
      ],
    });
    assert.equal(cards[0].kind, 'idiom');
    assert.equal(cards[0].prompt, 'break the ice');
    assert.match(cards[0].answer, /start conversation/);
  });

  it('shuffleCards preserves membership', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffleCards(arr, () => 0.5);
    assert.equal(shuffled.length, 5);
    assert.deepEqual([...shuffled].sort(), arr);
  });

  it('KIND_LABEL covers all kinds', () => {
    for (const k of ['fact', 'formula', 'idiom', 'substitution', 'mistake'] as const) {
      assert.ok(KIND_LABEL[k]);
    }
  });
});
