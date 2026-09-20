// src/types.ts

export type SubjectId =
  | 'meteo-climatology'
  | 'earth-science'
  | 'physics'
  | 'maths'
  | 'env-studies'
  | 'research-analysis'
  | 'english'
  | 'hat-verbal'
  | 'hat-analytical'
  | 'hat-quantitative';

export interface Subject {
  id: SubjectId;
  title: string;
}
// SectionId is a plain string so each subject can define its own section ids
// without collision. Convention: Meteorology uses single letters 'A'–'I'.
// Other subjects use a subject-prefixed convention to avoid collisions:
//   Physics  → 'PHY-A', 'PHY-B', ...
//   Maths    → 'MATH-A', 'MATH-B', ...
//   Geology  → 'GEO-A', 'GEO-B', ...
//   Seismology → 'SEIS-A', 'SEIS-B', ...
//   Environmental Science → 'ENV-A', 'ENV-B', ...
//   Research & Analysis  → 'RES-A', 'RES-B', ...
export type SectionId = string;

export interface Section {
  id: SectionId;
  subjectId: SubjectId;
  title: string;
  topicCount: number;
  questionCount: number;
}

export interface FormulaVariable {
  symbol: string;
  meaning: string;
}

export interface Formula {
  name: string;
  expression: string;
  variables: FormulaVariable[];
}

export interface ComparisonTable {
  headers: string[];
  rows: string[][];
}

export interface ExplanationSection {
  heading: string;
  body: string;
}

export interface WorkedExample {
  problem: string;
  solution: string;  // Supports $...$ and $$...$$ via MathText
  answer: string;
}

export interface Topic {
  id: string;
  sectionId: SectionId;
  order: number;
  title: string;
  definition?: string;
  keyFacts?: string[];
  explanationSections?: ExplanationSection[];
  formula?: Formula | Formula[];
  examPoints?: string[];
  comparisonTable?: ComparisonTable;
  relatedTopics?: string[];
  workedExample?: WorkedExample | WorkedExample[];
  commonMistakes?: string[];
  priority?: string;
  comparisonTableEras?: ComparisonTable;
  comparisonTableHazards?: ComparisonTable;
  pakistanExamFocus?: string[];
  content: boolean;
  postRestriction?: 'bs17' | 'bs16' | 'all';
  examScope?: ('bs17' | 'bs16')[];
  buildsOn?: string[];
  leadsTo?: string[];
  usedIn?: string[];
  examType?: 'subject' | 'hat';
  hatSection?: 'verbal' | 'analytical' | 'quantitative';
  /**
   * Grouped idiom cards. Each group has a title (e.g., "Problems & Difficulties"),
   * a description (when HAT tests this group), and a list of idioms with meaning,
   * example, and optional origin. Used for topics where content is naturally
   * grouped into named categories with structured sub-entries.
   */
  idiomGroups?: Array<{
    title: string;
    description: string;
    idioms: Array<{
      idiom: string;
      meaning: string;
      example: string;
      origin?: string;
    }>;
  }>;
  /**
   * One-word substitution card groups. Each group has a title, description, and a
   * list of substitution entries. Used for the One-Word Substitutions topic (V7)
   * and any future topic with categorized single-word vocabulary.
   *
   * Distinct from `idiomGroups` because substitutions emphasize:
   * - single-word precision (term must be unambiguous)
   * - related terms (helps users see word families: Misanthrope vs Misogynist)
   * - difficulty (some substitutions are HAT-favorites, others obscure)
   */
  substitutionGroups?: Array<{
    groupTitle: string;
    groupDescription: string;
    entries: Array<{
      term: string;
      definition: string;
      example?: string;
      relatedTerms?: string[];
      difficulty?: 'easy' | 'medium' | 'hard';
    }>;
  }>;
  /**
   * Grouped vocabulary cards. Each group has a title, description, and a list
   * of vocabulary entries with word, definition, synonym, antonym, example,
   * and difficulty. Used for the Vocabulary Mastery topic (V1).
   */
  vocabularyGroups?: Array<{
    title: string;
    description: string;
    words: Array<{
      word: string;
      definition: string;
      synonym?: string;
      antonym?: string;
      example?: string;
      difficulty?: 'easy' | 'medium' | 'hard';
      notes?: string;
    }>;
  }>;
  /**
   * Grouped prefix cards. Each group has a title, description, and a list of
   * prefix entries with prefix, meaning, example words, and optional notes.
   * Used for the Word Formation Patterns topic (V2).
   */
  prefixGroups?: Array<{
    title: string;
    description: string;
    prefixes: Array<{
      prefix: string;
      meaning: string;
      examples: string[];
      notes?: string;
    }>;
  }>;
  /**
   * Grouped suffix cards. Each group has a title, description, and a list of
   * suffix entries with suffix, meaning, part of speech, and example words.
   * Used for the Word Formation Patterns topic (V2).
   */
  suffixGroups?: Array<{
    title: string;
    description: string;
    suffixes: Array<{
      suffix: string;
      meaning: string;
      partOfSpeech: string;
      examples: string[];
    }>;
  }>;
  /**
   * Grouped root cards. Each group has a title, description, and a list of
   * root entries with root, meaning, and word family. Used for the Word
   * Formation Patterns topic (V2).
   */
  rootGroups?: Array<{
    title: string;
    description: string;
    roots: Array<{
      root: string;
      meaning: string;
      wordFamily: string[];
    }>;
  }>;
  /**
   * Grouped grammar rule cards. Each group has a category, description, and a
   * list of rule entries with rule number, title, description, correct example,
   * and incorrect example. Used for the Grammar Rules topic (V3).
   */
  grammarRules?: Array<{
    category: string;
    description: string;
    rules: Array<{
      ruleNumber: string;
      title: string;
      description: string;
      correctExample: string;
      incorrectExample: string;
    }>;
  }>;
  subtopics?: Array<{
    id: string;
    title: string;
    summary: string;
    explanation: string;
    examples: Array<{ problem: string; solution: string; answer?: string }>;
    shortcuts: string[];
    traps: string[];
  }>;
  quantFormulas?: Array<{
    name: string;
    expression: string;
    note?: string;
  }>;
}

export type QuestionType = 'single' | 'true_false' | 'multi' | 'calculation' | 'fill_blank' | 'matching';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;
  sectionId: SectionId;
  topicId: string;
  difficulty: Difficulty;
  type: QuestionType;
  question: string;
  options: string[];
  correctAnswer: number | number[];
  explanation: string;
  sourceCitation: string;
  examScope?: ('bs17' | 'bs16')[];
  examType?: 'subject' | 'hat';
  hatSection?: 'verbal' | 'analytical' | 'quantitative';
  hatSubtype?: string;
  subtopicId?: string;
  matchOptions?: string[];
}

export interface CloudEntry {
  name: string;
  level: 'High' | 'Middle' | 'Low' | 'Vertical';
  altitude: string;
  composition: string;
  appearance: string;
  topicId?: string;
}

export interface TopicProgress {
  status: 'not_started' | 'studied' | 'mastered';
  lastStudied: string | null;
  nextReview: string | null;
  accuracy: number;
  attempts: number;
  lastQuizDate: string | null;
  quizAccuracy: number;
  quizAttempts: number;
  quizNextReview: string | null;
}

export interface QuestionResult {
  correct: boolean;
  timestamp: number;
}

export type PracticeMode = 'topic' | 'quick' | 'mock' | 'review' | 'challenge';

export type DifficultyFilter = 'any' | 'easy' | 'medium' | 'hard';

export type TimeLimitSetting = 'auto' | 'none' | number;

export interface QuizHistoryEntry {
  date: number;
  mode: PracticeMode;
  score: number;
  total: number;
  topicId?: string;
  subjectId?: string;
  difficultyFilter?: DifficultyFilter;
}

export interface AppData {
  studiedTopics: string[];
  topicProgress: Record<string, TopicProgress>;
  questionResults: Record<string, QuestionResult>;
  quizHistory: QuizHistoryEntry[];
  revisionDates: Record<string, string>;
  lastOpenedTopic: string;
}