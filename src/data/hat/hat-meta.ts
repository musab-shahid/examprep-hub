export const HAT_SECTIONS = {
  verbal: {
    id: 'verbal',
    name: 'Verbal Reasoning',
    shortName: 'Verbal',
    weight: 0.40,
    description: 'Vocabulary, grammar, sentence completion, reading comprehension, idioms',
    longDescription: 'Master vocabulary, grammar rules, sentence completion, reading comprehension, idioms, and one-word substitutions. The largest section of the HAT.',
    color: 'indigo',
    sectionCode: 'HATV',
    sectionIds: ['HATV-1', 'HATV-2', 'HATV-3', 'HATV-4', 'HATV-5', 'HATV-6', 'HATV-7', 'HATV-8', 'HATV-9'],
    topicCount: 9,
    questionCount: 335,
  },
  analytical: {
    id: 'analytical',
    name: 'Analytical Reasoning',
    shortName: 'Analytical',
    weight: 0.35,
    description: 'Logical puzzles, patterns, deductive reasoning',
    longDescription: 'Practice seating arrangements, blood relations, syllogisms, critical reasoning, coding-decoding, directions, ranking, and grouping puzzles.',
    color: 'emerald',
    sectionCode: 'HATA',
    sectionIds: ['HATA-1', 'HATA-2', 'HATA-3', 'HATA-4', 'HATA-5', 'HATA-6', 'HATA-7', 'HATA-8', 'HATA-9'],
    topicCount: 9,
    questionCount: 89,
  },
  quantitative: {
    id: 'quantitative',
    name: 'Quantitative Reasoning',
    shortName: 'Quantitative',
    weight: 0.25,
    description: 'Applied math, data interpretation, number series',
    longDescription: 'Cover arithmetic, time/work/speed, algebra, geometry, number systems, probability, sets, data interpretation, and word problems.',
    color: 'amber',
    sectionCode: 'HATQ',
    sectionIds: ['HATQ-1', 'HATQ-2', 'HATQ-3', 'HATQ-4', 'HATQ-5', 'HATQ-6', 'HATQ-7', 'HATQ-8', 'HATQ-9', 'HATQ-10'],
    topicCount: 10,
    questionCount: 215,
  },
} as const;

export const HAT_EXAM_DURATION_MINUTES = 90;
export const HAT_TOTAL_QUESTIONS = 100;
export const HAT_PASSING_SCORE = 50;
