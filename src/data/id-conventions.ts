/**
 * ExamPrep Hub — ID conventions (canonical targets)
 *
 * SUBJECT IDs: kebab-case; HAT uses hat- prefix; track is on Subject object.
 * SECTION IDs: legacy mixed; target for NEW sections `{CODE}-{NN}` (METEO-01, …).
 * TOPIC IDs: target `{subjectPrefix}-{slug}`; meteo bare letters migrated to meteo-{slug}.
 * QUESTION IDs: target `{sectionId}-Q{nnn}`; legacy mixed forms remain until bank edits.
 * CROSS-REFS: relatedTopics / buildsOn / leadsTo / usedIn must exist (CI validated).
 */
export const SUBJECT_CODE: Record<string, string> = {
  'meteo-climatology': 'METEO',
  'earth-science': 'EARTH',
  physics: 'PHY',
  maths: 'MATH',
  english: 'ENG',
  'env-studies': 'ENV',
  'research-analysis': 'RA',
  'hat-verbal': 'HATV',
  'hat-analytical': 'HATA',
  'hat-quantitative': 'HATQ',
};
