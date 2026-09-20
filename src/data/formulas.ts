// formulas.ts — LAZY
// Formula vault is built from cached topic content. When no subjects are
// loaded, the vault is empty. FormulaVaultScreen triggers loading.

import type { Topic, SubjectId } from '@/types';
import { sectionMap } from './sections';
import { subjectMap } from './subjects';
import { getAllCachedTopics, getCachedTopics, activeSubjects } from './lazy-data';

export interface FormulaEntry {
  topicId: string;
  topicTitle: string;
  name: string;
  expression: string;
  variables: { symbol: string; meaning: string }[];
  category: string;
}

const METEO_CATEGORY: Record<string, string> = {
  'MC-A': 'Atmospheric',
  'MC-B': 'Thermodynamics',
  'MC-C': 'Wind',
  'MC-D': 'Thermodynamics',
  'MC-E': 'Atmospheric',
  'MC-F': 'Atmospheric',
  'MC-H': 'Radiation',
};

function formulaCategory(topic: Topic): string {
  const subjectId: SubjectId | undefined = sectionMap[topic.sectionId]?.subjectId;
  if (subjectId === 'meteo-climatology') {
    return METEO_CATEGORY[topic.sectionId] ?? 'Atmospheric';
  }
  if (subjectId && subjectMap[subjectId]) {
    return subjectMap[subjectId].title;
  }
  return 'General';
}

function buildVault(topics: Topic[]): FormulaEntry[] {
  return topics
    .filter((t) => t.formula)
    .flatMap((t) => {
      const f = t.formula!;
      const formulas = Array.isArray(f) ? f : [f];
      return formulas.map((formula) => ({
        topicId: t.id,
        topicTitle: t.title,
        name: formula.name,
        expression: formula.expression,
        variables: formula.variables,
        category: formulaCategory(t),
      }));
    });
}

export function getFormulasForSubject(subjectId: SubjectId | 'all'): FormulaEntry[] {
  if (subjectId === 'all') return buildVault(getAllCachedTopics());
  const cached = getCachedTopics(subjectId);
  if (!cached) return [];
  return buildVault(cached);
}

export function refreshFormulaVault(): FormulaEntry[] {
  return buildVault(getAllCachedTopics());
}

export { activeSubjects };
