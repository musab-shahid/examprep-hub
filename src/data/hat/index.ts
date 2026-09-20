export { verbalTopics } from './verbal/topics-verbal';
export { analyticalTopics } from './analytical/topics-analytical';
export { quantitativeTopics } from './quantitative/topics-quantitative';

export { verbalQuestions } from './verbal/questions-verbal';
export { analyticalQuestions } from './analytical/questions-analytical';
export { quantitativeQuestions } from './quantitative/questions-quantitative';

export { HAT_SECTIONS, HAT_EXAM_DURATION_MINUTES, HAT_TOTAL_QUESTIONS, HAT_PASSING_SCORE } from './hat-meta';

import type { Topic } from '@/types';
import { verbalTopics } from './verbal/topics-verbal';
import { analyticalTopics } from './analytical/topics-analytical';
import { quantitativeTopics } from './quantitative/topics-quantitative';
import { verbalQuestions } from './verbal/questions-verbal';
import { analyticalQuestions } from './analytical/questions-analytical';
import { quantitativeQuestions } from './quantitative/questions-quantitative';

export const allHatTopics: Topic[] = [
  ...verbalTopics,
  ...analyticalTopics,
  ...quantitativeTopics,
];

export const allHatQuestions = [
  ...verbalQuestions,
  ...analyticalQuestions,
  ...quantitativeQuestions,
];

export function hatTopicsBySection(sectionId: string): Topic[] {
  return allHatTopics.filter((t) => t.hatSection === sectionId);
}

export function hatQuestionsByTopic(topicId: string) {
  return allHatQuestions.filter((q) => q.topicId === topicId);
}

export function hatQuestionsBySection(sectionCode: string) {
  return allHatQuestions.filter((q) => q.sectionId === sectionCode || q.sectionId.startsWith(sectionCode + '-'));
}
