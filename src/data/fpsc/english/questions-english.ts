// questions-english.ts — FPSC English question bank
// Module A: Grammar & Usage (~84 questions for 5 topics)
// Distribution: ~3 easy, ~12 medium, ~3 hard per topic

import type { Question } from '@/types';

export const questions: Question[] = [

// ═══════════════════════════════════════════════════════════════════
// TOPIC: Parts of Speech & Tenses
// ═══════════════════════════════════════════════════════════════════

// Easy
{ id: "ENGA1-Q001", sectionId: "ENG-A", topicId: "english-parts-of-speech-and-tenses", difficulty: "easy", type: "single",
  question: "Which part of speech names a person, place, thing, or idea?",
  options: ["Verb", "Noun", "Adjective", "Adverb"],
  correctAnswer: 1,
  explanation: "A noun names a person, place, thing, or idea. Examples: meteorologist, Pakistan, weather, climate.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA1-Q002", sectionId: "ENG-A", topicId: "english-parts-of-speech-and-tenses", difficulty: "easy", type: "single",
  question: "In the sentence 'She quickly ran to the store,' what part of speech is 'quickly'?",
  options: ["Adjective", "Adverb", "Verb", "Preposition"],
  correctAnswer: 1,
  explanation: "'Quickly' is an adverb — it modifies the verb 'ran' (describes HOW she ran). Adjectives modify nouns; adverbs modify verbs, adjectives, or other adverbs.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA1-Q003", sectionId: "ENG-A", topicId: "english-parts-of-speech-and-tenses", difficulty: "easy", type: "true_false",
  question: "The word 'under' in 'The cat is under the table' is a preposition.",
  options: ["True", "False"],
  correctAnswer: 0,
  explanation: "True. 'Under' shows the spatial relationship between 'cat' and 'table' — this is the definition of a preposition (a word showing relationship of position, direction, or time).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

// Medium
{ id: "ENGA1-Q004", sectionId: "ENG-A", topicId: "english-parts-of-speech-and-tenses", difficulty: "medium", type: "single",
  question: "Which tense is used in: 'Meteorologists are analyzing data from the new satellite.'",
  options: ["Simple Present", "Present Continuous", "Present Perfect", "Present Perfect Continuous"],
  correctAnswer: 1,
  explanation: "Present Continuous (are analyzing) is used for an action happening now or currently in progress. The 'are' + -ing form marks it as continuous.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA1-Q005", sectionId: "ENG-A", topicId: "english-parts-of-speech-and-tenses", difficulty: "medium", type: "single",
  question: "Choose the correct sentence:",
  options: ["I am knowing the answer.", "I know the answer.", "I am know the answer.", "I knows the answer."],
  correctAnswer: 1,
  explanation: "Know is a stative verb (describing a state, not an action) and is not normally used in the -ing continuous form. 'I know' (simple present) is correct for expressing knowledge state.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA1-Q006", sectionId: "ENG-A", topicId: "english-parts-of-speech-and-tenses", difficulty: "medium", type: "single",
  question: "By the time we arrived, the storm _____ (pass). Choose the correct form:",
  options: ["passed", "has passed", "had passed", "was passing"],
  correctAnswer: 2,
  explanation: "Past Perfect (had passed) is needed because the storm's passing happened BEFORE another past event (our arrival). Past Perfect shows the earlier of two past actions.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA1-Q007", sectionId: "ENG-A", topicId: "english-parts-of-speech-and-tenses", difficulty: "medium", type: "single",
  question: "He said, 'I am hungry.' Choose the correct reported speech:",
  options: ["He said that I am hungry.", "He said that he is hungry.", "He said that he was hungry.", "He says he was hungry."],
  correctAnswer: 2,
  explanation: "In reported speech with a past reporting verb (said), tenses shift backward: present 'am' → past 'was'. Pronoun also shifts: 'I' → 'he'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA1-Q008", sectionId: "ENG-A", topicId: "english-parts-of-speech-and-tenses", difficulty: "medium", type: "single",
  question: "Identify the part of speech of 'beautiful' in: 'The beautiful sunset faded quickly.'",
  options: ["Adverb", "Adjective", "Noun", "Verb"],
  correctAnswer: 1,
  explanation: "'Beautiful' describes the noun 'sunset' — that's the function of an adjective. 'Quickly' later in the sentence is the adverb (modifying the verb 'faded').",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA1-Q009", sectionId: "ENG-A", topicId: "english-parts-of-speech-and-tenses", difficulty: "medium", type: "single",
  question: "Identify the conjunction type in: 'I wanted to go, but I was too tired.'",
  options: ["Subordinating", "Coordinating", "Correlative", "Conjunctive adverb"],
  correctAnswer: 1,
  explanation: "'But' is a coordinating conjunction (in FANBOYS: For, And, Nor, But, Or, Yet, So) — it joins two INDEPENDENT clauses of equal grammatical status.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA1-Q010", sectionId: "ENG-A", topicId: "english-parts-of-speech-and-tenses", difficulty: "medium", type: "single",
  question: "Which sentence uses the present perfect correctly?",
  options: ["I have went to the store yesterday.", "I have gone to the store many times.", "I have going to the store.", "I am have gone to the store."],
  correctAnswer: 1,
  explanation: "Present perfect (have/has + past participle) is used for actions that happened at an unspecified time in the past but have present relevance. 'Many times' is unspecified, and the present relevance is implied. 'Gone' is the past participle of 'go', not 'went'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA1-Q011", sectionId: "ENG-A", topicId: "english-parts-of-speech-and-tenses", difficulty: "medium", type: "single",
  question: "Choose the correct form: 'By next June, the monsoon _____ (arrive).'",
  options: ["will arrive", "will have arrived", "arrives", "is arriving"],
  correctAnswer: 1,
  explanation: "Future Perfect (will have arrived) is used for an action that will be completed by a specific future point. 'By next June' marks that point.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA1-Q012", sectionId: "ENG-A", topicId: "english-parts-of-speech-and-tenses", difficulty: "medium", type: "single",
  question: "He said, 'I will go tomorrow.' Choose the correct reported speech:",
  options: ["He said he will go tomorrow.", "He said he would go the next day.", "He said he would go tomorrow.", "He says he would go tomorrow."],
  correctAnswer: 1,
  explanation: "Three changes: tense (will → would), pronoun (I → he), time marker (tomorrow → the next day). All three must shift together in reported speech.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA1-Q013", sectionId: "ENG-A", topicId: "english-parts-of-speech-and-tenses", difficulty: "medium", type: "true_false",
  question: "Present perfect continuous ('has been raining') is used for actions that started in the past and are still continuing.",
  options: ["True", "False"],
  correctAnswer: 0,
  explanation: "True. Present perfect continuous (have/has been + -ing) describes an action that began in the past and is still ongoing at the present moment, often emphasizing duration.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA1-Q014", sectionId: "ENG-A", topicId: "english-parts-of-speech-and-tenses", difficulty: "medium", type: "true_false",
  question: "The word 'and' in 'I like tea and coffee' is a subordinating conjunction.",
  options: ["True", "False"],
  correctAnswer: 1,
  explanation: "False. 'And' is a COORDINATING conjunction (joins equal elements: two nouns, two verbs, two clauses of equal status). Subordinating conjunctions join a dependent clause to an independent clause (because, although, when, if).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

// Hard
{ id: "ENGA1-Q015", sectionId: "ENG-A", topicId: "english-parts-of-speech-and-tenses", difficulty: "hard", type: "multi",
  question: "Which of the following sentences are CORRECT? (Select all that apply.)",
  options: [
    "Since 2010, Pakistan has been facing severe floods.",
    "I am knowing him for five years.",
    "He has went to the market.",
    "By the time she arrived, he had left."
  ],
  correctAnswer: [0, 3],
  explanation: "(a) Correct: since 2010 + present perfect continuous = ongoing action from past. (d) Correct: past perfect 'had left' shows action completed before another past action. (b) Wrong: 'know' is stative, no -ing form. (c) Wrong: 'went' is past simple; past participle is 'gone'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA1-Q016", sectionId: "ENG-A", topicId: "english-parts-of-speech-and-tenses", difficulty: "hard", type: "multi",
  question: "Which of the following words function as ADVERBS in their respective sentences? (Select all that apply.)",
  options: [
    "She runs QUICKLY. (modifies 'runs')",
    "He is a FAST runner. (modifies 'runner')",
    "She sang BEAUTIFULLY. (modifies 'sang')",
    "That is a HARD test. (modifies 'test')"
  ],
  correctAnswer: [0, 2],
  explanation: "Adverbs modify verbs, adjectives, or other adverbs. (a) 'quickly' modifies 'runs' (verb) → adverb. (c) 'beautifully' modifies 'sang' (verb) → adverb. (b) 'fast' here modifies 'runner' (noun) → adjective. (d) 'hard' modifies 'test' (noun) → adjective.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA1-Q017", sectionId: "ENG-A", topicId: "english-parts-of-speech-and-tenses", difficulty: "hard", type: "single",
  question: "Hardly _____ (I / reach) the station when the train departed. Choose the correct form:",
  options: ["I had reached", "I have reached", "had I reached", "I did reach"],
  correctAnswer: 2,
  explanation: "The standard 'Hardly... when' inversion pattern requires the past perfect BEFORE 'when': 'Hardly had I reached... when...'. The subject-auxiliary inversion is mandatory.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

// ═══════════════════════════════════════════════════════════════════
// TOPIC: Agreement & Articles
// ═══════════════════════════════════════════════════════════════════

// Easy
{ id: "ENGA2-Q001", sectionId: "ENG-A", topicId: "english-agreement-and-articles", difficulty: "easy", type: "single",
  question: "Choose the correct sentence:",
  options: ["The list of items are on the desk.", "The list of items is on the desk.", "The list of items were on the desk.", "The list of items be on the desk."],
  correctAnswer: 1,
  explanation: "The subject is 'list' (singular), so the verb must be 'is'. The prepositional phrase 'of items' is a distractor — the verb agrees with the subject, not the nearest noun.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA2-Q002", sectionId: "ENG-A", topicId: "english-agreement-and-articles", difficulty: "easy", type: "single",
  question: "Choose the correct article: 'She is _____ honest woman.'",
  options: ["a", "an", "the", "no article"],
  correctAnswer: 1,
  explanation: "'An' is used because 'honest' begins with a vowel SOUND (the 'h' is silent). Article choice is based on sound, not spelling — 'an university' would be wrong because 'yu' is a consonant sound.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA2-Q003", sectionId: "ENG-A", topicId: "english-agreement-and-articles", difficulty: "easy", type: "true_false",
  question: "'Many of the rivers have dried' is grammatically correct.",
  options: ["True", "False"],
  correctAnswer: 0,
  explanation: "True. 'Many' is an indefinite pronoun that takes a PLURAL verb — so 'have dried' is correct. The subject 'rivers' is also plural, which agrees.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

// Medium
{ id: "ENGA2-Q004", sectionId: "ENG-A", topicId: "english-agreement-and-articles", difficulty: "medium", type: "single",
  question: "Choose the correct sentence:",
  options: ["Each of the stations have sensors.", "Each of the stations has sensors.", "Each of the stations were having sensors.", "Each of the stations are having sensors."],
  correctAnswer: 1,
  explanation: "'Each' is an indefinite pronoun that takes a SINGULAR verb. Even though 'stations' is plural, the true subject 'each' requires 'has', not 'have'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA2-Q005", sectionId: "ENG-A", topicId: "english-agreement-and-articles", difficulty: "medium", type: "single",
  question: "Choose the correct article: '_____ Indus is one of Asia's major rivers.'",
  options: ["A", "An", "The", "No article"],
  correctAnswer: 2,
  explanation: "Rivers, mountain ranges, and seas take 'the' (the Indus, the Himalayas, the Arabian Sea). The rule: geographical features that are clearly defined and shared as known references use 'the'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA2-Q006", sectionId: "ENG-A", topicId: "english-agreement-and-articles", difficulty: "medium", type: "single",
  question: "Choose the correct article: 'He is _____ university student.'",
  options: ["a", "an", "the", "no article"],
  correctAnswer: 0,
  explanation: "'A' is used before 'university' because the first sound is 'yu' (a consonant sound), even though the letter is a vowel. Article choice is based on sound, not spelling.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA2-Q007", sectionId: "ENG-A", topicId: "english-agreement-and-articles", difficulty: "medium", type: "single",
  question: "Choose the correct sentence:",
  options: ["The team are winning the match.", "The team is winning the match.", "The team were winning the match.", "The team be winning the match."],
  correctAnswer: 1,
  explanation: "'Team' is a collective noun treated as singular in American English (and in British English when the team acts as a unit). So 'is' is correct, not 'are'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA2-Q008", sectionId: "ENG-A", topicId: "english-agreement-and-articles", difficulty: "medium", type: "single",
  question: "The news _____ (be) shocking. Choose the correct verb form:",
  options: ["is", "are", "were", "have been"],
  correctAnswer: 0,
  explanation: "'News' is singular despite ending in -s (it's a contraction of 'newes' and takes singular verbs). 'The news IS shocking' is correct.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA2-Q009", sectionId: "ENG-A", topicId: "english-agreement-and-articles", difficulty: "medium", type: "single",
  question: "Neither the teacher nor the students _____ (be) ready. Choose the correct form:",
  options: ["is", "are", "was", "has been"],
  correctAnswer: 1,
  explanation: "With 'neither...nor', the verb agrees with the NEAREST subject. 'Students' is plural and nearest, so the verb is 'are'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA2-Q010", sectionId: "ENG-A", topicId: "english-agreement-and-articles", difficulty: "medium", type: "single",
  question: "Choose the correct article: 'I want to become _____ meteorologist.'",
  options: ["a", "an", "the", "no article"],
  correctAnswer: 0,
  explanation: "First mention of a profession (not specific which one) uses 'a'. 'An' is only for vowel SOUNDS. 'The' would imply a specific meteorologist already known or mentioned.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA2-Q011", sectionId: "ENG-A", topicId: "english-agreement-and-articles", difficulty: "medium", type: "true_false",
  question: "'Mathematics is my favorite subject' is grammatically correct.",
  options: ["True", "False"],
  correctAnswer: 0,
  explanation: "True. 'Mathematics' is singular (despite ending in -s) and takes the singular verb 'is'. This is true for school subjects, sciences, and some other words ending in -ics (mathematics, physics, economics, news).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA2-Q012", sectionId: "ENG-A", topicId: "english-agreement-and-articles", difficulty: "medium", type: "true_false",
  question: "'A one-way street' is the correct article usage.",
  options: ["True", "False"],
  correctAnswer: 0,
  explanation: "True. 'One' begins with a 'w' sound (consonant), so 'a' is correct. The choice depends on the FIRST SOUND, not the first letter — 'one' sounds like 'wun', which is a consonant sound.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA2-Q013", sectionId: "ENG-A", topicId: "english-agreement-and-articles", difficulty: "medium", type: "true_false",
  question: "'Either Ali or his friends _____ coming to the party' is correctly completed as 'are'.",
  options: ["True", "False"],
  correctAnswer: 0,
  explanation: "True. With 'either...or', the verb agrees with the NEAREST subject ('friends' is plural and nearest), so 'are' is correct.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

// Hard
{ id: "ENGA2-Q014", sectionId: "ENG-A", topicId: "english-agreement-and-articles", difficulty: "hard", type: "multi",
  question: "Which of the following sentences are CORRECT? (Select all that apply.)",
  options: [
    "The committee has reached a decision.",
    "Mathematics are my strongest subject.",
    "A sum of money was stolen from the safe.",
    "Each of the books have a red cover."
  ],
  correctAnswer: [0, 2],
  explanation: "(a) Correct: 'committee' is a collective noun treated as singular → 'has'. (c) Correct: 'a sum of money' is a singular phrase (the subject is 'sum') → 'was stolen'. (b) Wrong: 'mathematics' is singular → 'is'. (d) Wrong: 'each' is singular → 'has'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA2-Q015", sectionId: "ENG-A", topicId: "english-agreement-and-articles", difficulty: "hard", type: "multi",
  question: "Which of the following require the article 'an' (based on sound, not spelling)? (Select all that apply.)",
  options: [
    "a university",
    "an honest man",
    "a one-time offer",
    "an MBA graduate"
  ],
  correctAnswer: [1, 3],
  explanation: "(b) 'honest' → silent h → vowel sound → 'an'. (d) 'MBA' pronounced 'em-bee-ay' → starts with vowel sound → 'an'. (a) 'university' starts with 'yu' (consonant sound) → 'a', not 'an'. (c) 'one-time' starts with 'w' sound → 'a', not 'an'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA2-Q016", sectionId: "ENG-A", topicId: "english-agreement-and-articles", difficulty: "hard", type: "single",
  question: "Choose the correct article(s): 'He is _____ best player in _____ team.'",
  options: ["the / the", "a / the", "the / a", "an / the"],
  correctAnswer: 0,
  explanation: "Both blank positions use 'the'. The first is 'the best' (superlative — use 'the'). The second is 'the team' (specific team being discussed). Article use must be evaluated per blank, not as a single choice.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

// ═══════════════════════════════════════════════════════════════════
// TOPIC: Pronouns, Prepositions & Conjunctions
// ═══════════════════════════════════════════════════════════════════

// Easy
{ id: "ENGA3-Q001", sectionId: "ENG-A", topicId: "english-pronouns-prepositions-conjunctions", difficulty: "easy", type: "single",
  question: "Choose the correct sentence:",
  options: ["Between you and I, this is secret.", "Between you and me, this is secret.", "Between you and myself, this is secret.", "Between you and mine, this is secret."],
  correctAnswer: 1,
  explanation: "After a preposition (between), use the OBJECT case of the pronoun: 'me', not 'I'. The preposition 'between' governs the object form.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA3-Q002", sectionId: "ENG-A", topicId: "english-pronouns-prepositions-conjunctions", difficulty: "easy", type: "single",
  question: "I have known him _____ 2010. Choose the correct preposition:",
  options: ["for", "since", "from", "during"],
  correctAnswer: 1,
  explanation: "'Since' marks a POINT in the past (2010 is a specific year). 'For' would mark a duration (e.g., 'for 14 years'). 'Since 2010' is the standard form for actions continuing from that point.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA3-Q003", sectionId: "ENG-A", topicId: "english-pronouns-prepositions-conjunctions", difficulty: "easy", type: "true_false",
  question: "'Although he is rich, but he is unhappy' is grammatically correct.",
  options: ["True", "False"],
  correctAnswer: 1,
  explanation: "False. 'Although' already implies contrast — adding 'but' creates a double conjunction error. Correct: 'Although he is rich, he is unhappy' (no 'but') OR 'He is rich, but he is unhappy' (no 'although').",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

// Medium
{ id: "ENGA3-Q004", sectionId: "ENG-A", topicId: "english-pronouns-prepositions-conjunctions", difficulty: "medium", type: "single",
  question: "Choose the correct sentence:",
  options: ["He is good in mathematics.", "He is good at mathematics.", "He is good on mathematics.", "He is good with mathematics."],
  correctAnswer: 1,
  explanation: "The fixed phrase is 'good AT' (skilled at). 'Good in' is sometimes used informally for skills within a subject, but 'good at' is the standard correct form for abilities.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA3-Q005", sectionId: "ENG-A", topicId: "english-pronouns-prepositions-conjunctions", difficulty: "medium", type: "single",
  question: "Choose the correct relative pronoun: 'The scientist _____ work I admire is here.'",
  options: ["who", "which", "whose", "that"],
  correctAnswer: 2,
  explanation: "'Whose' is the possessive form — 'the scientist whose work' = the work BELONGS TO the scientist. 'Who' is the subject form (the scientist who works).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA3-Q006", sectionId: "ENG-A", topicId: "english-pronouns-prepositions-conjunctions", difficulty: "medium", type: "single",
  question: "The book is on the table. Identify the prepositional phrase:",
  options: ["The book", "is on", "on the table", "the table"],
  correctAnswer: 2,
  explanation: "A prepositional phrase begins with a preposition and ends with its object (usually a noun phrase). 'On the table' = preposition 'on' + noun phrase 'the table'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA3-Q007", sectionId: "ENG-A", topicId: "english-pronouns-prepositions-conjunctions", difficulty: "medium", type: "single",
  question: "Choose the correct sentence:",
  options: ["I prefer tea than coffee.", "I prefer tea over coffee.", "I prefer tea to coffee.", "I prefer tea against coffee."],
  correctAnswer: 2,
  explanation: "The standard comparison structure with 'prefer' is 'prefer X TO Y', NOT 'prefer X than Y'. This is a common error — 'than' is used for adjectives/adverbs (I am taller than you), not for 'prefer'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA3-Q008", sectionId: "ENG-A", topicId: "english-pronouns-prepositions-conjunctions", difficulty: "medium", type: "single",
  question: "Identify the type of conjunction in: 'I was tired, so I went to bed early.'",
  options: ["Subordinating", "Coordinating", "Correlative", "Conjunctive adverb"],
  correctAnswer: 1,
  explanation: "'So' is a coordinating conjunction (part of FANBOYS: For, And, Nor, But, Or, Yet, So). It joins two INDEPENDENT clauses of equal status. Subordinating conjunctions (because, although) join a dependent clause to an independent one.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA3-Q009", sectionId: "ENG-A", topicId: "english-pronouns-prepositions-conjunctions", difficulty: "medium", type: "single",
  question: "Choose the correct sentence:",
  options: ["The book is different than mine.", "The book is different from mine.", "The book is different to mine.", "The book is different of mine."],
  correctAnswer: 1,
  explanation: "The standard phrase is 'different FROM', not 'than' or 'to' (in American English) or 'of' (in any English). 'Different than' is common in speech but considered nonstandard in formal writing.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA3-Q010", sectionId: "ENG-A", topicId: "english-pronouns-prepositions-conjunctions", difficulty: "medium", type: "single",
  question: "He is married _____ her for 10 years.",
  options: [
    "He is married with her for 10 years.",
    "He is married to her for 10 years.",
    "He has been married to her for 10 years.",
    "He is married from her for 10 years."
  ],
  correctAnswer: 1,
  explanation: "The fixed phrase is 'married TO' (not 'with', not 'from', not 'of'). The present perfect 'has been married' would also be correct, but among the options 'married to' is the correct preposition choice. Same pattern: 'engaged to', 'attached to' — the preposition 'to' indicates the relationship bond.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA3-Q011", sectionId: "ENG-A", topicId: "english-pronouns-prepositions-conjunctions", difficulty: "medium", type: "single",
  question: "The meeting starts _____ Monday. Choose the correct preposition:",
  options: ["in", "on", "at", "by"],
  correctAnswer: 1,
  explanation: "Days of the week and dates take 'on' (on Monday, on June 5). Months/years take 'in' (in June), exact times take 'at' (at 9 AM). 'By' would mean 'no later than' (by Monday = before Monday ends).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA3-Q012", sectionId: "ENG-A", topicId: "english-pronouns-prepositions-conjunctions", difficulty: "medium", type: "true_false",
  question: "'She hurt herself' uses the reflexive pronoun correctly (subject = object).",
  options: ["True", "False"],
  correctAnswer: 0,
  explanation: "True. Reflexive pronouns (myself, yourself, herself, etc.) are used when the subject and object of the verb are the same person/thing. 'She hurt herself' = she hurt (her) — same person.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA3-Q013", sectionId: "ENG-A", topicId: "english-pronouns-prepositions-conjunctions", difficulty: "medium", type: "true_false",
  question: "'Because he was tired, so he slept' is grammatically correct.",
  options: ["True", "False"],
  correctAnswer: 1,
  explanation: "False. This is a double-conjunction error. 'Because' already establishes cause. Use 'so' OR use 'because' — not both. Correct: 'Because he was tired, he slept' (drop the 'so') OR 'He was tired, so he slept' (drop the 'because').",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA3-Q014", sectionId: "ENG-A", topicId: "english-pronouns-prepositions-conjunctions", difficulty: "medium", type: "true_false",
  question: "In 'This is the scientist who discovered penicillin,' 'who' is the object of the verb.",
  options: ["True", "False"],
  correctAnswer: 1,
  explanation: "False. 'Who' is the SUBJECT of 'discovered' (the scientist performed the action). Test: replace 'who' with 'she' (subject) — 'she discovered' makes sense. 'Whom' would be the object (test: 'her discovered' doesn't work).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

// Hard
{ id: "ENGA3-Q015", sectionId: "ENG-A", topicId: "english-pronouns-prepositions-conjunctions", difficulty: "hard", type: "multi",
  question: "Which of the following sentences are CORRECT? (Select all that apply.)",
  options: [
    "He is senior than me.",
    "She is good at physics.",
    "Although it rained, we went out.",
    "Despite of the rain, we stayed home."
  ],
  correctAnswer: [1, 2],
  explanation: "(b) Correct: 'good at' is the fixed phrase. (c) Correct: 'although' alone (no 'but') properly introduces a concessive clause. (a) Wrong: 'senior TO' (not 'than'). (d) Wrong: 'despite' (no 'of'); correct is 'in spite of' or 'despite'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA3-Q016", sectionId: "ENG-A", topicId: "english-pronouns-prepositions-conjunctions", difficulty: "hard", type: "multi",
  question: "Which of the following contain CORRECT preposition usage? (Select all that apply.)",
  options: [
    "We discussed about the issue.",
    "I am good at math.",
    "He is married to her.",
    "The book is different than yours."
  ],
  correctAnswer: [1, 2],
  explanation: "(b) Correct: 'good at'. (c) Correct: 'married to'. (a) Wrong: 'discuss' takes no preposition (discuss the issue, not about). (d) Wrong: 'different from' is standard, not 'than'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA3-Q017", sectionId: "ENG-A", topicId: "english-pronouns-prepositions-conjunctions", difficulty: "hard", type: "single",
  question: "Choose the correctly punctuated sentence:",
  options: [
    "Although he studied hard, but he failed.",
    "He studied hard, although he failed.",
    "Because he studied hard, so he passed.",
    "He studied hard although, but he failed."
  ],
  correctAnswer: 1,
  explanation: "(b) is correct: 'although' alone introduces a concessive clause properly. (a) Wrong: 'although' + 'but' = double conjunction. (c) Wrong: 'because' + 'so' = double conjunction. (d) Wrong: misplaced comma + double conjunction.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

// ═══════════════════════════════════════════════════════════════════
// TOPIC: Modals, Voice & Narration
// ═══════════════════════════════════════════════════════════════════

// Easy
{ id: "ENGA4-Q001", sectionId: "ENG-A", topicId: "english-modals-voice-narration", difficulty: "easy", type: "single",
  question: "Which sentence uses a modal correctly?",
  options: ["He cans swim very fast.", "He can to swim very fast.", "He can swim very fast.", "He swimming can very fast."],
  correctAnswer: 2,
  explanation: "Modals (can, could, may, might, must, should, will, would) are followed by the BASE form of the verb with no 'to'. 'Can swim' is correct; 'cans' and 'can to swim' are both errors.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA4-Q002", sectionId: "ENG-A", topicId: "english-modals-voice-narration", difficulty: "easy", type: "single",
  question: "The bridge was built in 1995. The voice is:",
  options: ["Active", "Passive", "Neither (no verb)", "Stative"],
  correctAnswer: 1,
  explanation: "Passive voice: 'was built' (be + past participle). The subject 'bridge' is receiving the action of being built, not performing it. The agent (whoever built it) is unmentioned or unknown.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA4-Q003", sectionId: "ENG-A", topicId: "english-modals-voice-narration", difficulty: "easy", type: "true_false",
  question: "'He said that where are you going' is a correct example of reported speech.",
  options: ["True", "False"],
  correctAnswer: 1,
  explanation: "False. In reported speech, questions become STATEMENTS, not embedded questions. The correct form is: 'He asked where I was going' (statement word order) or 'He asked where I was going' (with 'if/whether' for yes/no questions).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

// Medium
{ id: "ENGA4-Q004", sectionId: "ENG-A", topicId: "english-modals-voice-narration", difficulty: "medium", type: "single",
  question: "Choose the correct active-to-passive transformation: 'The scientists collected the data.'",
  options: ["The data was collected by the scientists.", "The data were collected by the scientists.", "The data is collected by the scientists.", "The scientists were collected by the data."],
  correctAnswer: 0,
  explanation: "Passive: 'The data' (object → subject) + 'was collected' (be + past participle) + 'by the scientists' (agent). 'Data' is singular (treated as a single entity), so 'was' not 'were'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA4-Q005", sectionId: "ENG-A", topicId: "english-modals-voice-narration", difficulty: "medium", type: "single",
  question: "Choose the correct reported speech: 'Open the window,' he said to me.",
  options: ["He said to me open the window.", "He told me to open the window.", "He told me open the window.", "He said me to open the window."],
  correctAnswer: 1,
  explanation: "Reported commands use 'told + object + to + infinitive'. The reporting verb 'tell' needs an object ('me'); 'say' is not used for commands. 'Told me to open the window' is correct.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA4-Q006", sectionId: "ENG-A", topicId: "english-modals-voice-narration", difficulty: "medium", type: "single",
  question: "You must submit the report by Friday. The passive form is:",
  options: ["The report must submit by you.", "The report must be submitted by you.", "The report must be submitted by Friday.", "The report is submitted by you."],
  correctAnswer: 2,
  explanation: "Passive with modal: 'The report' (object → subject) + 'must be submitted' (modal + be + past participle). Note: we keep 'by Friday' (the time expression), not 'by you' (which would be the agent — here the agent is implied).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA4-Q007", sectionId: "ENG-A", topicId: "english-modals-voice-narration", difficulty: "medium", type: "single",
  question: "He must have left early. The modal perfect expresses:",
  options: ["Future possibility", "Past deduction (I'm sure he left)", "Present obligation", "Past habit"],
  correctAnswer: 1,
  explanation: "'Must have + past participle' expresses a logical PAST deduction — the speaker is CERTAIN about something in the past ('I'm sure he left early'). Compare: 'should have' (regret), 'could have' (missed opportunity), 'may have' (past possibility).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA4-Q008", sectionId: "ENG-A", topicId: "english-modals-voice-narration", difficulty: "medium", type: "single",
  question: "Choose the correct passive: 'They are building a new bridge.'",
  options: ["A new bridge is being built.", "A new bridge is being build.", "A new bridge was being built.", "A new bridge is built."],
  correctAnswer: 0,
  explanation: "Present continuous passive: 'is/are + being + past participle'. 'Built' (not 'build') is the past participle. 'A new bridge' (object → subject) is the new subject.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA4-Q009", sectionId: "ENG-A", topicId: "english-modals-voice-narration", difficulty: "medium", type: "single",
  question: "She said, 'I am reading a book.' Choose the correct reported speech:",
  options: ["She said that she is reading a book.", "She said that she was reading a book.", "She said that she reads a book.", "She says she was reading a book."],
  correctAnswer: 1,
  explanation: "Reported speech with past reporting verb (said): present continuous 'am reading' → past continuous 'was reading'. Tense shifts backward. Also: 'I' → 'she'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA4-Q010", sectionId: "ENG-A", topicId: "english-modals-voice-narration", difficulty: "medium", type: "single",
  question: "Choose the sentence where PASSIVE voice is correctly used:",
  options: ["The storm occurred last night.", "The book contains 300 pages.", "The cake was eaten by the children.", "She runs every morning."],
  correctAnswer: 2,
  explanation: "Passive voice: 'was eaten' (be + past participle) with agent 'by the children'. The other options are INTRANSITIVE (occur), STATIVE (contains), or ACTIVE (runs, runs) — none can be made passive in standard English.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA4-Q011", sectionId: "ENG-A", topicId: "english-modals-voice-narration", difficulty: "medium", type: "true_false",
  question: "In reported speech, 'I will go tomorrow' becomes 'He said he will go tomorrow' (no changes needed).",
  options: ["True", "False"],
  correctAnswer: 1,
  explanation: "False. In reported speech with a past reporting verb, ALL three things change: tense (will → would), pronoun (I → he), and time marker (tomorrow → the next day). The corrected form: 'He said he would go the next day.'",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA4-Q012", sectionId: "ENG-A", topicId: "english-modals-voice-narration", difficulty: "medium", type: "true_false",
  question: "Modal perfects describe past events with the speaker's assessment (deduction, regret, possibility).",
  options: ["True", "False"],
  correctAnswer: 0,
  explanation: "True. Modal perfects (must have, should have, could have, may have) are about a PAST event combined with the speaker's present judgment about it — deduction (must have), regret (should have), missed opportunity (could have), or possibility (may have).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA4-Q013", sectionId: "ENG-A", topicId: "english-modals-voice-narration", difficulty: "medium", type: "true_false",
  question: "The verb 'happen' can be used in passive voice (e.g., 'The accident was happened').",
  options: ["True", "False"],
  correctAnswer: 1,
  explanation: "False. 'Happen' is an intransitive verb (no direct object) and cannot be made passive. Correct: 'The accident happened' (active). Similarly: occur, take place, exist — all intransitive, no passive.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

// Hard
{ id: "ENGA4-Q014", sectionId: "ENG-A", topicId: "english-modals-voice-narration", difficulty: "hard", type: "multi",
  question: "Which of the following passive transformations are CORRECT? (Select all that apply.)",
  options: [
    "Someone stole my wallet. → My wallet was stolen.",
    "They are building a new school. → A new school is being built.",
    "The storm occurred last night. → Last night was occurred by the storm.",
    "He will finish the work. → The work will be finished."
  ],
  correctAnswer: [0, 1, 3],
  explanation: "(a) Correct passive. (b) Correct present continuous passive. (c) Wrong: 'occur' is intransitive, cannot be passive. (d) Correct future passive with 'will be + past participle'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA4-Q015", sectionId: "ENG-A", topicId: "english-modals-voice-narration", difficulty: "hard", type: "multi",
  question: "Which of the following reported speech transformations are CORRECT? (Select all that apply.)",
  options: [
    "He said, 'I am happy.' → He said he was happy.",
    "She said, 'I will go.' → She said she would go.",
    "They said, 'We are here.' → They said they were here.",
    "He asked, 'Where do you live?' → He asked where I lived."
  ],
  correctAnswer: [0, 1, 2, 3],
  explanation: "All four are correct. Each demonstrates the correct shift: present → past, future → would, tense shift, and (for questions) statement word order. All follow the mechanical rules of reported speech.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA4-Q016", sectionId: "ENG-A", topicId: "english-modals-voice-narration", difficulty: "hard", type: "single",
  question: "He said, 'Please help me with this work.' The correct reported speech is:",
  options: [
    "He said please help me with this work.",
    "He requested me to help him with that work.",
    "He told to help him with this work.",
    "He said that please help me."
  ],
  correctAnswer: 1,
  explanation: "Polite requests use 'requested/asked + object + to + infinitive'. The polite 'please' becomes the verb 'requested'. Pronoun shifts: 'me' → 'him' (object), 'this' → 'that' (proximity).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

// ═══════════════════════════════════════════════════════════════════
// TOPIC: Common Errors
// ═══════════════════════════════════════════════════════════════════

// Easy
{ id: "ENGA5-Q001", sectionId: "ENG-A", topicId: "english-common-errors", difficulty: "easy", type: "single",
  question: "Choose the correct sentence:",
  options: ["The weather is real bad today.", "The weather is really bad today.", "The weather is realily bad today.", "The weather is real bad todayly."],
  correctAnswer: 1,
  explanation: "'Really' (adverb) modifies the adjective 'bad'. The form 'real' is an adjective and can't modify another adjective directly. 'Really' is the correct form.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA5-Q002", sectionId: "ENG-A", topicId: "english-common-errors", difficulty: "easy", type: "single",
  question: "Choose the correct sentence:",
  options: ["It will effect you negatively.", "It will affect you negatively.", "It will affecting you negatively.", "It will effected you negatively."],
  correctAnswer: 1,
  explanation: "'Affect' (verb, to influence) is needed here. 'Effect' as a noun means 'result'; as a verb it means 'to bring about' (rare). The sentence is about influence, so 'affect' is correct.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA5-Q003", sectionId: "ENG-A", topicId: "english-common-errors", difficulty: "easy", type: "true_false",
  question: "'I have less books than you' is grammatically correct.",
  options: ["True", "False"],
  correctAnswer: 1,
  explanation: "False. 'Books' is countable, so the correct form is 'fewer' (not 'less'). Rule: 'less' for uncountable nouns (less water), 'fewer' for countable nouns (fewer books).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

// Medium
{ id: "ENGA5-Q004", sectionId: "ENG-A", topicId: "english-common-errors", difficulty: "medium", type: "single",
  question: "Choose the correct sentence:",
  options: ["He discussed about the issue with us.", "He discussed the issue with us.", "He discussed on the issue with us.", "He discussed regarding the issue with us."],
  correctAnswer: 1,
  explanation: "The verb 'discuss' takes a DIRECT OBJECT with NO preposition. 'Discuss the issue' is correct — 'discuss about/on/regarding' are all incorrect additions.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA5-Q005", sectionId: "ENG-A", topicId: "english-common-errors", difficulty: "medium", type: "single",
  question: "Choose the correct sentence:",
  options: ["He is senior than me.", "He is senior to me.", "He is senior from me.", "He is senior of me."],
  correctAnswer: 1,
  explanation: "The fixed comparison is 'senior TO' (not 'than', not 'from', not 'of'). Similarly: 'junior to', 'prefer X to Y', 'superior to'. The preposition 'to' is used for these comparison-of-status adjectives.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA5-Q006", sectionId: "ENG-A", topicId: "english-common-errors", difficulty: "medium", type: "single",
  question: "Choose the correct sentence:",
  options: ["Despite of the rain, we went out.", "Despite the rain, we went out.", "Despite from the rain, we went out.", "In despite the rain, we went out."],
  correctAnswer: 1,
  explanation: "'Despite' takes a noun directly — NO 'of'. The alternative 'in spite of' DOES take 'of'. So: 'despite the rain' OR 'in spite of the rain' — not 'despite of the rain'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA5-Q007", sectionId: "ENG-A", topicId: "english-common-errors", difficulty: "medium", type: "single",
  question: "Choose the correct sentence:",
  options: ["According with the report, sales increased.", "According to the report, sales increased.", "According from the report, sales increased.", "According the report, sales increased."],
  correctAnswer: 1,
  explanation: "The fixed phrase is 'according TO' (not 'with', not 'from', no preposition dropped). 'According to' means 'as stated by' or 'in accordance with'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA5-Q008", sectionId: "ENG-A", topicId: "english-common-errors", difficulty: "medium", type: "single",
  question: "Choose the correct sentence:",
  options: ["The team is comprised of 11 members.", "The team comprises 11 members.", "The team is comprising 11 members.", "The team has comprise 11 members."],
  correctAnswer: 1,
  explanation: "'Comprise' means 'consist of' or 'be composed of' — it takes no preposition in active voice. 'The team comprises 11 members' is correct. 'Is comprised of' is a common but nonstandard (passive misuse).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA5-Q009", sectionId: "ENG-A", topicId: "english-common-errors", difficulty: "medium", type: "single",
  question: "Choose the correct sentence:",
  options: ["He is married with her for 10 years.", "He is married to her for 10 years.", "He is married from her for 10 years.", "He is married of her for 10 years."],
  correctAnswer: 1,
  explanation: "The fixed phrase is 'married TO' (not 'with', not 'from', not 'of'). The preposition 'to' indicates the relationship bond, just like 'engaged to' or 'attached to'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA5-Q010", sectionId: "ENG-A", topicId: "english-common-errors", difficulty: "medium", type: "single",
  question: "Choose the correct sentence:",
  options: ["Hardly I had reached the station, the train left.", "Hardly had I reached the station, the train left.", "Hardly I have reached the station, the train left.", "Hardly I reached the station, the train left."],
  correctAnswer: 1,
  explanation: "The 'Hardly... when' inversion pattern requires the auxiliary ('had') to come BEFORE the subject ('I'): 'Hardly had I reached... when...'. This is a fixed grammatical structure that cannot be rearranged.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA5-Q011", sectionId: "ENG-A", topicId: "english-common-errors", difficulty: "medium", type: "true_false",
  question: "'She returned back the book' is grammatically correct because 'return' and 'back' reinforce each other.",
  options: ["True", "False"],
  correctAnswer: 1,
  explanation: "False. 'Returned' already means 'came back' — adding 'back' is redundant. This is called a pleonasm. Correct: 'She returned the book' or 'She came back with the book' (NOT 'returned back').",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA5-Q012", sectionId: "ENG-A", topicId: "english-common-errors", difficulty: "medium", type: "true_false",
  question: "'I could not be able to come' is grammatically correct because 'could' and 'be able to' both express ability.",
  options: ["True", "False"],
  correctAnswer: 1,
  explanation: "False. This is a redundancy error. 'Could' and 'was able to' both express past ability — using both is unnecessary. Correct: 'I could not come' OR 'I was not able to come' (not both).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA5-Q013", sectionId: "ENG-A", topicId: "english-common-errors", difficulty: "medium", type: "true_false",
  question: "'I am agree with you' is grammatically correct.",
  options: ["True", "False"],
  correctAnswer: 1,
  explanation: "False. 'Agree' is a verb, not an adjective. 'I agree with you' is correct. Don't use 'be + agree' (which is a common Pakistani English error).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

// Hard
{ id: "ENGA5-Q014", sectionId: "ENG-A", topicId: "english-common-errors", difficulty: "hard", type: "multi",
  question: "Which of the following sentences are CORRECT? (Select all that apply.)",
  options: [
    "He discussed the issue with us.",
    "I could not come to the party.",
    "She returned back the book.",
    "He is married to her."
  ],
  correctAnswer: [0, 1, 3],
  explanation: "(a) Correct: 'discuss' takes direct object, no preposition. (b) Correct: no redundancy. (d) Correct: 'married to' is the fixed phrase. (c) Wrong: 'returned back' is redundant — 'returned' alone means 'came back'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA5-Q015", sectionId: "ENG-A", topicId: "english-common-errors", difficulty: "hard", type: "multi",
  question: "Which of the following preposition usages are CORRECT? (Select all that apply.)",
  options: [
    "He is good at math.",
    "I prefer tea to coffee.",
    "The book is different from mine.",
    "Despite of the rain, we stayed home."
  ],
  correctAnswer: [0, 1, 2],
  explanation: "(a) Correct: 'good at'. (b) Correct: 'prefer X to Y'. (c) Correct: 'different from'. (d) Wrong: 'despite' takes no 'of' — correct is 'despite the rain' or 'in spite of the rain'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGA5-Q016", sectionId: "ENG-A", topicId: "english-common-errors", difficulty: "hard", type: "single",
  question: "Choose the best improvement: 'He discussed about the matter, returned back the file, and entered into the room.'",
  options: [
    "He discussed the matter, returned the file, and entered the room.",
    "He discussed about the matter, returned the file, and entered the room.",
    "He discussed the matter, returned back the file, and entered the room.",
    "He discussed the matter, returned the file, and entered into the room."
  ],
  correctAnswer: 0,
  explanation: "All three errors fixed at once: (1) 'discussed' takes no preposition (drop 'about'), (2) 'returned' alone means came back (drop redundant 'back'), (3) 'enter' is intransitive and doesn't take 'into' (drop 'into'). One option fixes all three.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

// ═══════════════════════════════════════════════════════════════════
// TOPIC: Synonyms, Antonyms & Confusables
// ═══════════════════════════════════════════════════════════════════

// Easy
{ id: "ENGB1-Q001", sectionId: "ENG-B", topicId: "english-synonyms-antonyms-confusables", difficulty: "easy", type: "single",
  question: "Choose the synonym of 'HUMID':",
  options: ["dry", "damp", "arid", "parched"],
  correctAnswer: 1,
  explanation: "Humid means 'containing moisture, damp'. The other options (dry, arid, parched) are all ANTONYMS of humid — the opposite of moist.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB1-Q002", sectionId: "ENG-B", topicId: "english-synonyms-antonyms-confusables", difficulty: "easy", type: "single",
  question: "Choose the antonym of 'CALM':",
  options: ["peaceful", "turbulent", "quiet", "still"],
  correctAnswer: 1,
  explanation: "Turbulent is the antonym of calm. The other options (peaceful, quiet, still) are all SYNONYMS of calm, not antonyms.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB1-Q003", sectionId: "ENG-B", topicId: "english-synonyms-antonyms-confusables", difficulty: "easy", type: "true_false",
  question: "AFFECT (verb) and EFFECT (noun) are commonly confused in English.",
  options: ["True", "False"],
  correctAnswer: 0,
  explanation: "True. AFFECT (verb, to influence): 'The storm affected millions.' EFFECT (noun, result): 'The effect was devastating.' Students often use the wrong one. Test: if you can substitute 'influence' → affect (verb). If you can substitute 'result' → effect (noun).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

// Medium
{ id: "ENGB1-Q004", sectionId: "ENG-B", topicId: "english-synonyms-antonyms-confusables", difficulty: "medium", type: "single",
  question: "The storm ABATED after a few hours. 'Abated' most nearly means:",
  options: ["intensified", "subsided", "shifted direction", "became unpredictable"],
  correctAnswer: 1,
  explanation: "Abated means 'subsided, decreased in intensity'. A storm that abated became less severe. The other options don't fit — intensified is the antonym.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB1-Q005", sectionId: "ENG-B", topicId: "english-synonyms-antonyms-confusables", difficulty: "medium", type: "single",
  question: "Choose the synonym of 'MITIGATE' (as in 'measures to mitigate the damage'):",
  options: ["worsen", "alleviate", "ignore", "cause"],
  correctAnswer: 1,
  explanation: "Mitigate means 'to reduce severity, alleviate'. The other options (worsen, ignore, cause) are all the OPPOSITE of mitigate. A common error: confusing mitigate with 'worsen' (its antonym).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB1-Q006", sectionId: "ENG-B", topicId: "english-synonyms-antonyms-confusables", difficulty: "medium", type: "single",
  question: "Choose the correct sentence:",
  options: ["He discussed about the issue.", "He discussed the issue with us.", "He discussed on the matter.", "He discussed regarding the topic."],
  correctAnswer: 1,
  explanation: "'Discuss' takes a DIRECT OBJECT with no preposition. 'Discuss the issue' is correct. 'Discuss about/on/regarding' are all incorrect additions. This is a very common error.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB1-Q007", sectionId: "ENG-B", topicId: "english-synonyms-antonyms-confusables", difficulty: "medium", type: "single",
  question: "Choose the antonym of 'ROBUST':",
  options: ["sturdy", "fragile", "durable", "strong"],
  correctAnswer: 1,
  explanation: "Fragile is the antonym of robust. The other options (sturdy, durable, strong) are all SYNONYMS of robust, not antonyms. 'Robust' means strong and resilient; 'fragile' means easily broken.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB1-Q008", sectionId: "ENG-B", topicId: "english-synonyms-antonyms-confusables", difficulty: "medium", type: "single",
  question: "A PERSISTENT problem is one that:",
  options: ["resolves quickly", "goes away on its own", "continues for a long time", "is easy to solve"],
  correctAnswer: 2,
  explanation: "Persistent means 'continuing for a long time, not giving up'. A persistent problem doesn't go away quickly. Antonym would be 'transient' (short-lived).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB1-Q009", sectionId: "ENG-B", topicId: "english-synonyms-antonyms-confusables", difficulty: "medium", type: "single",
  question: "The data is INCONSISTENT with the hypothesis. 'Inconsistent' means:",
  options: ["in agreement", "in conflict", "in addition", "in sequence"],
  correctAnswer: 1,
  explanation: "Inconsistent means 'not in agreement, conflicting'. The data contradicts the hypothesis. Antonym: 'consistent' (in agreement).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB1-Q010", sectionId: "ENG-B", topicId: "english-synonyms-antonyms-confusables", difficulty: "medium", type: "single",
  question: "Choose the synonym of 'ADEPT' (as in 'adept at forecasting'):",
  options: ["clumsy", "skilled", "unaware", "hesitant"],
  correctAnswer: 1,
  explanation: "Adept means 'skilled, proficient'. The other options are all opposite-ish (clumsy = unskillful). Don't confuse with 'adopt' (to take up) or 'adapt' (to adjust).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB1-Q011", sectionId: "ENG-B", topicId: "english-synonyms-antonyms-confusables", difficulty: "medium", type: "single",
  question: "Choose the synonym of 'ANALYZE':",
  options: ["synthesize", "examine", "ignore", "synthesize in reverse"],
  correctAnswer: 1,
  explanation: "Analyze means 'to examine in detail'. Synthesize means 'to combine' (the opposite kind of thinking). Ignore is unrelated. The synonym is 'examine'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB1-Q012", sectionId: "ENG-B", topicId: "english-synonyms-antonyms-confusables", difficulty: "medium", type: "true_false",
  question: "'PRINCIPLE' and 'PRINCIPAL' are pronounced the same way and have the same meaning.",
  options: ["True", "False"],
  correctAnswer: 1,
  explanation: "False. They are homophones (pronounced similarly) but have DIFFERENT meanings: PRINCIPAL (adj: main; n: head of school) vs PRINCIPLE (n: rule, law, moral standard). Spelling distinguishes them.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB1-Q013", sectionId: "ENG-B", topicId: "english-synonyms-antonyms-confusables", difficulty: "medium", type: "true_false",
  question: "'STATIONARY' means 'not moving' and 'STATIONERY' means 'writing materials'.",
  options: ["True", "False"],
  correctAnswer: 0,
  explanation: "True. These are homophones with different meanings. Mnemonic: 'stationery' has 'e' for 'envelope'. The car was stationary (not moving); I bought stationery (paper, pens).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB1-Q014", sectionId: "ENG-B", topicId: "english-synonyms-antonyms-confusables", difficulty: "medium", type: "true_false",
  question: "'DIFFERENT THAN' is grammatically correct in standard English.",
  options: ["True", "False"],
  correctAnswer: 1,
  explanation: "False. Standard English uses 'different FROM'. 'Different than' is colloquial and common in speech but considered nonstandard in formal writing. Same with 'different to' (British informal).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

// Hard
{ id: "ENGB1-Q015", sectionId: "ENG-B", topicId: "english-synonyms-antonyms-confusables", difficulty: "hard", type: "multi",
  question: "Which of the following are SYNONYMS of 'ABUNDANT'? (Select all that apply.)",
  options: ["plentiful", "scarce", "copious", "ample"],
  correctAnswer: [0, 2, 3],
  explanation: "Plentiful, copious, and ample are all synonyms of abundant (meaning 'in large quantity'). 'Scarce' is the ANTONYM (meaning 'in short supply').",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB1-Q016", sectionId: "ENG-B", topicId: "english-synonyms-antonyms-confusables", difficulty: "hard", type: "multi",
  question: "Which of the following sentences are CORRECT? (Select all that apply.)",
  options: [
    "The effect of the drought was severe.",
    "The drought effected severe changes.",
    "She discussed the issue openly.",
    "He is senior to her in rank."
  ],
  correctAnswer: [0, 2, 3],
  explanation: "(a) Correct: 'effect' as noun (result). (c) Correct: 'discuss' takes no preposition. (d) Correct: 'senior to' is the fixed phrase. (b) Wrong: 'effected' as verb means 'brought about' — it doesn't mean 'caused severe' naturally. 'The drought caused severe changes' would be clearer.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB1-Q017", sectionId: "ENG-B", topicId: "english-synonyms-antonyms-confusables", difficulty: "hard", type: "single",
  question: "Choose the sentence with the CORRECT use of a confusable word:",
  options: [
    "The principal of physics is taught in school.",
    "The principle of physics is taught in school.",
    "The principal is the head of the school.",
    "The school principle is the head."
  ],
  correctAnswer: 2,
  explanation: "'Principal' (noun) = the head of a school. 'Principle' (noun) = a rule or law. Option 2 is wrong: 'principle of physics' should be 'principles of physics' (plural, and a stretch contextually). Option 3 correctly uses 'principal' for the head of school.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB1-Q018", sectionId: "ENG-B", topicId: "english-synonyms-antonyms-confusables", difficulty: "hard", type: "single",
  question: "The verdict was PREDICATED on the evidence. 'Predicated' means:",
  options: ["based / founded", "predicted / forecast", "denied / refused", "delayed / postponed"],
  correctAnswer: 0,
  explanation: "'Predicated' (formal) means 'based on, founded on'. 'The verdict was based on the evidence.' Don't confuse with 'predicted' (forecast), which sounds similar but means something different entirely.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

// ═══════════════════════════════════════════════════════════════════
// TOPIC: Idioms & Phrases
// ═══════════════════════════════════════════════════════════════════

// Easy
{ id: "ENGB2-Q001", sectionId: "ENG-B", topicId: "english-idioms-and-phrases", difficulty: "easy", type: "single",
  question: "What does the idiom 'BITE THE BULLET' mean?",
  options: ["To eat quickly", "To accept something unpleasant bravely", "To make a difficult decision quickly", "To criticize someone harshly"],
  correctAnswer: 1,
  explanation: "'Bite the bullet' means to accept something unpleasant or difficult bravely. The image is from battlefield surgery when patients would bite a bullet to endure pain without anesthetic.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB2-Q002", sectionId: "ENG-B", topicId: "english-idioms-and-phrases", difficulty: "easy", type: "single",
  question: "What does the idiom 'BREAK THE ICE' mean?",
  options: ["To literally break frozen water", "To start a conversation or reduce tension", "To end a relationship", "To be very cold"],
  correctAnswer: 1,
  explanation: "'Break the ice' means to do or say something to reduce tension or start a conversation in a social setting. Common at meetings or first dates.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB2-Q003", sectionId: "ENG-B", topicId: "english-idioms-and-phrases", difficulty: "easy", type: "true_false",
  question: "'ONCE IN A BLUE MOON' means 'very rarely'.",
  options: ["True", "False"],
  correctAnswer: 0,
  explanation: "True. 'Once in a blue moon' means 'very rarely' (literally: a 'blue moon' is a second full moon in a calendar month, which is rare). Common error: thinking it means 'during a full moon' (literal misreading).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

// Medium
{ id: "ENGB2-Q004", sectionId: "ENG-B", topicId: "english-idioms-and-phrases", difficulty: "medium", type: "single",
  question: "What does the idiom 'ADD FUEL TO THE FIRE' mean?",
  options: ["To start a fire in cold weather", "To make a bad situation worse", "To add warmth to a gathering", "To provide evidence in an argument"],
  correctAnswer: 1,
  explanation: "'Add fuel to the fire' means to make a bad situation worse by intensifying it. The image is of adding fuel to an actual fire to make it burn more. Don't confuse with literal fire-starting.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB2-Q005", sectionId: "ENG-B", topicId: "english-idioms-and-phrases", difficulty: "medium", type: "single",
  question: "What does the idiom 'HIT THE NAIL ON THE HEAD' mean?",
  options: ["To physically strike something", "To describe something exactly right", "To cause injury to oneself", "To complete a task with effort"],
  correctAnswer: 1,
  explanation: "'Hit the nail on the head' means to describe or do something exactly right. 'Your analysis hit the nail on the head' = 'your analysis was exactly correct'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB2-Q006", sectionId: "ENG-B", topicId: "english-idioms-and-phrases", difficulty: "medium", type: "single",
  question: "What does the idiom 'EVERY CLOUD HAS A SILVER LINING' mean?",
  options: ["Silver is found in clouds", "Every difficult situation has a hopeful aspect", "Storms bring valuable minerals", "Weather is unpredictable"],
  correctAnswer: 1,
  explanation: "The idiom means that every difficult or unpleasant situation has some positive aspect or hopeful outcome. It expresses optimism in hard times.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB2-Q007", sectionId: "ENG-B", topicId: "english-idioms-and-phrases", difficulty: "medium", type: "single",
  question: "What does the idiom 'KILL TWO BIRDS WITH ONE STONE' mean?",
  options: ["To commit two crimes at once", "To achieve two goals with a single action", "To waste resources", "To be violent and efficient"],
  correctAnswer: 1,
  explanation: "'Kill two birds with one stone' means to achieve two goals with one action. It's about EFFICIENCY, not literal violence. Modern alternatives like 'two for one' or 'one stone, two birds' exist.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB2-Q008", sectionId: "ENG-B", topicId: "english-idioms-and-phrases", difficulty: "medium", type: "single",
  question: "What does the idiom 'BEAT AROUND THE BUSH' mean?",
  options: ["To walk in nature", "To avoid the main topic, be indirect", "To work hard physically", "To be a good gardener"],
  correctAnswer: 1,
  explanation: "'Beat around the bush' means to avoid the main topic or speak indirectly, often to delay addressing something uncomfortable. 'Stop beating around the bush and tell me what you want' = 'get to the point'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB2-Q009", sectionId: "ENG-B", topicId: "english-idioms-and-phrases", difficulty: "medium", type: "single",
  question: "What does the idiom 'SEE EYE TO EYE' mean?",
  options: ["To stare at someone", "To agree on a point", "To meet in person", "To look directly at someone"],
  correctAnswer: 1,
  explanation: "'See eye to eye' means to agree on a point or share the same opinion. 'We don't see eye to eye on this issue' = 'we disagree'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB2-Q010", sectionId: "ENG-B", topicId: "english-idioms-and-phrases", difficulty: "medium", type: "single",
  question: "What does the idiom 'GET OUT OF HAND' mean?",
  options: ["To remove something from your hand", "To become uncontrollable or excessive", "To physically let go", "To change hands (ownership)"],
  correctAnswer: 1,
  explanation: "'Get out of hand' means to become uncontrollable, excessive, or unmanageable. 'The situation got out of hand' = 'it became uncontrollable'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB2-Q011", sectionId: "ENG-B", topicId: "english-idioms-and-phrases", difficulty: "medium", type: "single",
  question: "What does the idiom 'BURN THE MIDNIGHT OIL' mean?",
  options: ["To set something on fire at night", "To work late into the night", "To waste energy inefficiently", "To go to bed very late"],
  correctAnswer: 1,
  explanation: "'Burn the midnight oil' means to work or study late into the night, often to meet a deadline. The image is of using an oil lamp late at night before electric lights existed.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB2-Q012", sectionId: "ENG-B", topicId: "english-idioms-and-phrases", difficulty: "medium", type: "single",
  question: "What does the idiom 'UNDER THE WEATHER' mean?",
  options: ["Experiencing bad weather outside", "Feeling slightly ill", "Being unprepared for something", "Being outdoors in rain"],
  correctAnswer: 1,
  explanation: "'Under the weather' means feeling slightly ill or unwell. 'I'm feeling under the weather today' = 'I'm not feeling my best'. The meteorological connection is incidental — the phrase is figurative.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB2-Q013", sectionId: "ENG-B", topicId: "english-idioms-and-phrases", difficulty: "medium", type: "true_false",
  question: "'A STORM IN A TEACUP' means a serious problem with major consequences.",
  options: ["True", "False"],
  correctAnswer: 1,
  explanation: "False. The idiom means a SMALL problem that's been exaggerated to seem much bigger. 'A storm in a teacup' = 'much ado about nothing'. Don't confuse with actual storms.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB2-Q014", sectionId: "ENG-B", topicId: "english-idioms-and-phrases", difficulty: "medium", type: "true_false",
  question: "'A blessing in disguise' means something bad that turns out to have a positive outcome.",
  options: ["True", "False"],
  correctAnswer: 0,
  explanation: "True. The idiom means a misfortune that eventually turns out to be beneficial. Example: 'Losing that job was a blessing in disguise — it led me to my current career.'",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

// Hard
{ id: "ENGB2-Q015", sectionId: "ENG-B", topicId: "english-idioms-and-phrases", difficulty: "hard", type: "multi",
  question: "Which of the following idiom meanings are CORRECT? (Select all that apply.)",
  options: [
    "'Costs an arm and a leg' = very expensive",
    "'Bite the bullet' = accept something unpleasant bravely",
    "'Once in a blue moon' = very rarely",
    "'Burn the midnight oil' = start a fire"
  ],
  correctAnswer: [0, 1, 2],
  explanation: "(a) Correct: 'costs an arm and a leg' = very expensive. (b) Correct: 'bite the bullet' = accept something unpleasant bravely. (c) Correct: 'once in a blue moon' = very rarely. (d) Wrong: 'burn the midnight oil' means work late into the night, NOT 'start a fire' (a common literal misreading).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB2-Q016", sectionId: "ENG-B", topicId: "english-idioms-and-phrases", difficulty: "hard", type: "multi",
  question: "Which of the following idiom meanings are CORRECT? (Select all that apply.)",
  options: [
    "'Once in a blue moon' = very rarely",
    "'Bite the bullet' = accept bravely",
    "'Hit the nail on the head' = be exactly right",
    "'Burn the midnight oil' = start a fire"
  ],
  correctAnswer: [0, 1, 2],
  explanation: "(a) Correct: very rarely. (b) Correct: accept bravely. (c) Correct: be exactly right. (d) Wrong: 'burn the midnight oil' = work late into the night, not 'start a fire' (literal misreading).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB2-Q017", sectionId: "ENG-B", topicId: "english-idioms-and-phrases", difficulty: "hard", type: "single",
  question: "In the sentence: 'Despite all his experience, he BIT OFF MORE THAN HE COULD CHEW.' What does the idiom mean?",
  options: ["He ate too quickly", "He took on more than he could handle", "He spoke without thinking", "He made a costly mistake"],
  correctAnswer: 1,
  explanation: "'Bite off more than you can chew' = take on more work or responsibility than you can handle. The image is of chewing too large a mouthful. Common error: confusing with 'bite the bullet' (accept bravely) — they are different idioms with similar 'bite' vocabulary.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB2-Q018", sectionId: "ENG-B", topicId: "english-idioms-and-phrases", difficulty: "hard", type: "single",
  question: "Choose the best idiom to complete: 'The manager's SECRETARY is the one who really runs the office. The manager is just a FIGUREHEAD.' What is a FIGUREHEAD?",
  options: ["A leader with full authority", "A person who holds a position of apparent authority but has no real power", "A person who works behind the scenes", "A person who leads a protest"],
  correctAnswer: 1,
  explanation: "A 'figurehead' is a person who holds a position of apparent authority but has no real power. The figurative meaning comes from ships having carved wooden figures at the bow — decorative, not functional. 'A figurehead president' is common in political criticism.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

// ═══════════════════════════════════════════════════════════════════
// TOPIC: Word Formation & Contextual Vocab
// ═══════════════════════════════════════════════════════════════════

// Easy
{ id: "ENGB3-Q001", sectionId: "ENG-B", topicId: "english-word-formation-and-context", difficulty: "easy", type: "single",
  question: "What does the prefix 'ANTI-' mean?",
  options: ["toward", "against", "before", "after"],
  correctAnswer: 1,
  explanation: "'Anti-' means 'against' or 'opposed to'. Examples: anti-aircraft (against aircraft), anti-cyclone (against the normal cyclone direction). Common confusion: with 'ante-' (before, as in 'antecedent', 'anteroom').",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB3-Q002", sectionId: "ENG-B", topicId: "english-word-formation-and-context", difficulty: "easy", type: "single",
  question: "What does the suffix '-OLOGY' mean?",
  options: ["place of", "study of", "one who studies", "full of"],
  correctAnswer: 1,
  explanation: "'-ology' means 'study of'. Examples: meteorology (study of weather), geology (study of earth), biology (study of life). Comes from Greek 'logos' (word, study).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB3-Q003", sectionId: "ENG-B", topicId: "english-word-formation-and-context", difficulty: "easy", type: "single",
  question: "The word 'PREDICT' contains which prefix and root?",
  options: ["pre- + dict", "pre- + dictat", "pre- + dicate", "pre- + do"],
  correctAnswer: 0,
  explanation: "'Predict' = pre- (before) + dict (say, from Latin 'dicere'). To predict is to 'say before' — to foretell. Same root: 'dictate' (to say aloud), 'diction' (manner of speaking), 'verdict' (true saying).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

// Medium
{ id: "ENGB3-Q004", sectionId: "ENG-B", topicId: "english-word-formation-and-context", difficulty: "medium", type: "single",
  question: "What does the prefix 'HYDRO-' mean?",
  options: ["fire", "air", "water", "earth"],
  correctAnswer: 2,
  explanation: "'Hydro-' means 'water' (from Greek 'hydor'). Examples: hydrate (combine with water), dehydrate (remove water), hydrogen (water-former), hydroelectric (water-power electricity).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB3-Q005", sectionId: "ENG-B", topicId: "english-word-formation-and-context", difficulty: "medium", type: "single",
  question: "The word 'UNSUSTAINABLE' means:",
  options: ["Very sustainable", "Not able to be maintained", "Partly sustainable", "Doubtfully sustainable"],
  correctAnswer: 1,
  explanation: "Un- (not) + sustain (maintain) + -able (able to be) = 'not able to be maintained'. The word means 'incapable of being sustained over time'. Common use: 'unsustainable practices' (e.g., deforestation).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB3-Q006", sectionId: "ENG-B", topicId: "english-word-formation-and-context", difficulty: "medium", type: "single",
  question: "The word 'PHOTOSYNTHESIS' contains which TWO roots?",
  options: ["photo + synth", "photo + synth + esis", "phot + osynthesis", "pho + tosynthesis"],
  correctAnswer: 0,
  explanation: "'Photosynthesis' = photo (light) + synthesis (putting together). The process by which plants use light to combine CO2 and water into glucose. The full word: photo + synth + -esis (process/state suffix), but the two key roots are photo- and synth-.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB3-Q007", sectionId: "ENG-B", topicId: "english-word-formation-and-context", difficulty: "medium", type: "single",
  question: "What does the prefix 'BIO-' mean?",
  options: ["two", "earth", "life", "fire"],
  correctAnswer: 2,
  explanation: "'Bio-' means 'life' (from Greek 'bios'). Examples: biology (study of life), biography (writing about a life), biodegradable (able to be broken down by living organisms), antibiotic (against life/infections).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB3-Q008", sectionId: "ENG-B", topicId: "english-word-formation-and-context", difficulty: "medium", type: "single",
  question: "What does the suffix '-ATION' typically mean?",
  options: ["one who", "action or process", "place of", "without"],
  correctAnswer: 1,
  explanation: "'-ation' is a noun suffix meaning 'action, process, or result'. Examples: prediction (the act of predicting), creation (the act of creating), information (something that informs). The base verb + -ation forms the noun of that action.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB3-Q009", sectionId: "ENG-B", topicId: "english-word-formation-and-context", difficulty: "medium", type: "single",
  question: "What is the most likely meaning of 'ENDEMIC' in: 'This disease is endemic to the region.'",
  options: ["Recently introduced", "Commonly found in a particular area", "Highly contagious", "Recently cured"],
  correctAnswer: 1,
  explanation: "'Endemic' means 'native to or commonly found in a particular area or population'. Endemic diseases are those regularly found in a specific region (vs. epidemic, which is a sudden widespread outbreak). From Greek 'endemos' (in the people).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB3-Q010", sectionId: "ENG-B", topicId: "english-word-formation-and-context", difficulty: "medium", type: "single",
  question: "What is the most likely meaning of 'MITIGATE' in: 'The new policy aims to mitigate the effects of pollution.'",
  options: ["Cause", "Measure or reduce severity", "Ignore", "Study in detail"],
  correctAnswer: 1,
  explanation: "Mitigate means 'to reduce severity, alleviate, make less severe'. In context, the policy aims to REDUCE the bad effects of pollution. Common confusion: with 'mitigate' vs 'migrate' (to move), which differ by one letter but mean different things.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB3-Q011", sectionId: "ENG-B", topicId: "english-word-formation-and-context", difficulty: "medium", type: "single",
  question: "What does the prefix 'INTER-' mean?",
  options: ["below", "between or among", "above", "outside"],
  correctAnswer: 1,
  explanation: "'Inter-' means 'between' or 'among'. Examples: international (between nations), interact (act between), interpret (explain between meanings). Don't confuse with 'intra-' (within, as in 'intravenous').",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB3-Q012", sectionId: "ENG-B", topicId: "english-word-formation-and-context", difficulty: "medium", type: "true_false",
  question: "The word 'GEOLOGY' can be broken down as 'geo-' (earth) + '-ology' (study of).",
  options: ["True", "False"],
  correctAnswer: 0,
  explanation: "True. Geo- (earth) + -ology (study of) = geology (study of the earth). This is the most-tested root + suffix pair in FPSC English. Memorize these two components and you can decode 20+ words.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB3-Q013", sectionId: "ENG-B", topicId: "english-word-formation-and-context", difficulty: "medium", type: "true_false",
  question: "The prefix 'AUTO-' means 'other' or 'different'.",
  options: ["True", "False"],
  correctAnswer: 1,
  explanation: "False. 'Auto-' means 'self' (from Greek 'autos'). Examples: automatic (self-acting), automobile (self-moving), autonomous (self-governing). Don't confuse with 'allo-' (other) or 'ante-' (before).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB3-Q014", sectionId: "ENG-B", topicId: "english-word-formation-and-context", difficulty: "medium", type: "true_false",
  question: "The word 'TELEPHONE' contains the root 'tele-' (far) and '-phone' (sound).",
  options: ["True", "False"],
  correctAnswer: 0,
  explanation: "True. Tele- (far, from Greek 'tele') + -phone (sound, from Greek 'phone'). Telephone = 'far sound' — voice transmitted over distance. Same roots: television (far vision), telescope (far viewing), microphone (small sound).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

// Hard
{ id: "ENGB3-Q015", sectionId: "ENG-B", topicId: "english-word-formation-and-context", difficulty: "hard", type: "multi",
  question: "Which of the following word decompositions are CORRECT? (Select all that apply.)",
  options: [
    "Biology = bio- (life) + -ology (study of)",
    "Hydroelectric = hydro- (water) + electric (electricity)",
    "Predict = pre- (before) + dict (say)",
    "Antibiotic = anti- (against) + bio- (life) + -tic (relating to)"
  ],
  correctAnswer: [0, 1, 2, 3],
  explanation: "All four are correct. (a) Biology = bio + ology. (b) Hydroelectric = hydro + electric. (c) Predict = pre + dict. (d) Antibiotic = anti + bio + tic (a noun/adj suffix here). Mastering these patterns lets you decode hundreds of words.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB3-Q016", sectionId: "ENG-B", topicId: "english-word-formation-and-context", difficulty: "hard", type: "multi",
  question: "Which of the following are CONTEXTUAL meanings of 'heavy' in different sentences? (Select all that apply.)",
  options: [
    "'Heavy rain' = intense rain",
    "'Heavy smoker' = person who smokes a lot",
    "'Heavy workload' = large amount of work",
    "'Heavy metal' = dense metal"
  ],
  correctAnswer: [0, 1, 2, 3],
  explanation: "All four are correct. 'Heavy' is a chameleon word — its meaning shifts with context. (a) heavy rain = intense. (b) heavy smoker = frequent. (c) heavy workload = large. (d) heavy metal = high density. The lesson: don't memorize 'heavy = [one definition]'. Read the CONTEXT and pick the meaning that fits.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB3-Q017", sectionId: "ENG-B", topicId: "english-word-formation-and-context", difficulty: "hard", type: "single",
  question: "What is the most likely meaning of 'PERMEATE' in: 'A sense of excitement permeated the room.'",
  options: ["left quickly", "spread throughout", "was visible on the surface", "created noise"],
  correctAnswer: 1,
  explanation: "'Permeate' means 'to spread throughout, to pervade'. The excitement wasn't just at the door — it filled the whole room. From Latin 'permeare' (to pass through).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

{ id: "ENGB3-Q018", sectionId: "ENG-B", topicId: "english-word-formation-and-context", difficulty: "hard", type: "single",
  question: "What is the most likely meaning of 'OSTENSIBLE' in: 'The ostensible reason for the meeting was budget review, but the real agenda was personnel changes.'",
  options: ["Hidden", "Apparent or stated (but not necessarily true)", "Forbidden", "Primary"],
  correctAnswer: 1,
  explanation: "'Ostensible' means 'apparent, stated, professed' — the REASON GIVEN, often not the real one. The budget review was the STATED reason; the real reason was personnel changes. From Latin 'ostendere' (to show). Often used with 'ostensible reason/purpose'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17'] },

// ═══════════════════════════════════════════════════════════════════
// TOPIC: Building Blocks
// ═══════════════════════════════════════════════════════════════════

// Easy
{ id: "ENGC1-Q001", sectionId: "ENG-C", topicId: "english-sentence-building-blocks", difficulty: "easy", type: "single",
  question: "Which of the following is a PHRASE (not a clause)?",
  options: ["The dog barks", "The barking dog", "She runs quickly", "They left early"],
  correctAnswer: 1,
  explanation: "'The barking dog' is a phrase — it has a noun (dog) but NO VERB. The others all have both subject and verb. Phrase test: does it have a subject AND a verb? If not, it's a phrase.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC1-Q002", sectionId: "ENG-C", topicId: "english-sentence-building-blocks", difficulty: "easy", type: "single",
  question: "Which of the following is a CLAUSE?",
  options: ["Running through the park", "In the morning", "The sun rises", "Very quickly"],
  correctAnswer: 2,
  explanation: "'The sun rises' is a clause — it has subject (sun) and verb (rises). The others are phrases (running = participial, in the morning = prepositional, very quickly = adverbial). Phrases have no subject-verb combination; clauses do.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC1-Q003", sectionId: "ENG-C", topicId: "english-sentence-building-blocks", difficulty: "easy", type: "true_false",
  question: "A sentence fragment is a group of words punctuated as a sentence but lacking a complete thought (usually missing a subject or verb or dependent clause).",
  options: ["True", "False"],
  correctAnswer: 0,
  explanation: "True. A fragment looks like a sentence (capital letter, period) but lacks what a sentence needs: a complete thought with both a subject and a verb (or a dependent clause attached to an independent one).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

// Medium
{ id: "ENGC1-Q004", sectionId: "ENG-C", topicId: "english-sentence-building-blocks", difficulty: "medium", type: "single",
  question: "Identify the type of phrase: 'in the morning'",
  options: ["Noun phrase", "Verb phrase", "Prepositional phrase", "Adjective phrase"],
  correctAnswer: 2,
  explanation: "'In the morning' is a prepositional phrase — it begins with the preposition 'in' and ends with the noun phrase 'the morning'. The pattern is: preposition + noun (phrase).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC1-Q005", sectionId: "ENG-C", topicId: "english-sentence-building-blocks", difficulty: "medium", type: "single",
  question: "Which of the following is an INDEPENDENT (main) clause?",
  options: ["Because it rained heavily", "When the bell rings", "The students left", "Although she was tired"],
  correctAnswer: 2,
  explanation: "'The students left' is an independent clause — it has a subject (students), a verb (left), and expresses a complete thought on its own. The other three are DEPENDENT clauses (begin with subordinating conjunctions: because, when, although) and cannot stand alone as sentences.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC1-Q006", sectionId: "ENG-C", topicId: "english-sentence-building-blocks", difficulty: "medium", type: "single",
  question: "Identify the subordinate clause: 'The book that I borrowed was excellent.'",
  options: ["The book", "was excellent", "that I borrowed", "I borrowed"],
  correctAnswer: 2,
  explanation: "'That I borrowed' is a subordinate (adjective/relative) clause. It modifies the noun 'book'. It has subject (I) + verb (borrowed), but it begins with the relative pronoun 'that' and cannot stand alone as a sentence.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC1-Q007", sectionId: "ENG-C", topicId: "english-sentence-building-blocks", difficulty: "medium", type: "single",
  question: "Identify the participial phrase: 'Running quickly, she caught the bus.'",
  options: ["Running quickly", "she caught the bus", "the bus", "quickly"],
  correctAnswer: 0,
  explanation: "'Running quickly' is a participial phrase (begins with -ing form of a verb, 'running'). It acts as an adjective/adverbial modifier, modifying 'she'. Note: it's a phrase (not a clause) because it has no subject.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC1-Q008", sectionId: "ENG-C", topicId: "english-sentence-building-blocks", difficulty: "medium", type: "single",
  question: "Which sentence contains a FRAGMENT?",
  options: ["She walked to the store.", "Because it was raining heavily.", "I enjoy reading books.", "He plays football every weekend."],
  correctAnswer: 1,
  explanation: "'Because it was raining heavily' is a fragment — it's a dependent clause (begins with 'because') that cannot stand alone as a sentence. The other three are all complete independent sentences.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC1-Q009", sectionId: "ENG-C", topicId: "english-sentence-building-blocks", difficulty: "medium", type: "single",
  question: "Identify the infinitive phrase: 'To understand the problem, we need more data.'",
  options: ["To understand the problem", "we need", "more data", "the problem"],
  correctAnswer: 0,
  explanation: "'To understand the problem' is an infinitive phrase — it begins with 'to' + base form of verb ('understand') + complement ('the problem'). The pattern is: to + verb (+ object/complement). It acts as an adverbial modifier of the main clause.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC1-Q010", sectionId: "ENG-C", topicId: "english-sentence-building-blocks", difficulty: "medium", type: "true_false",
  question: "An APPOSITIVE phrase renames or explains a noun next to it (e.g., 'Meteorology, the study of weather, ...').",
  options: ["True", "False"],
  correctAnswer: 0,
  explanation: "True. An appositive is a noun (or noun phrase) placed next to another noun to rename or explain it. 'Meteorology, the study of weather' — 'the study of weather' is an appositive renaming 'Meteorology'. Usually set off by commas.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC1-Q011", sectionId: "ENG-C", topicId: "english-sentence-building-blocks", difficulty: "medium", type: "true_false",
  question: "A gerund phrase uses the -ing form of a verb to function as a noun (e.g., 'Swimming is good exercise').",
  options: ["True", "False"],
  correctAnswer: 0,
  explanation: "True. A gerund is the -ing form of a verb used as a noun. 'Swimming' is the subject of 'is good exercise'. Distinguish from a participial phrase, which uses -ing as an adjective (e.g., 'The swimming dog' = dog that is swimming).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC1-Q012", sectionId: "ENG-C", topicId: "english-sentence-building-blocks", difficulty: "medium", type: "true_false",
  question: "'The scientist running the experiment' is a complete sentence.",
  options: ["True", "False"],
  correctAnswer: 1,
  explanation: "False. 'The scientist running the experiment' is a FRAGMENT. 'Running the experiment' is a participial phrase (modifying 'scientist'). There's no main verb for 'scientist' — 'running' is part of the phrase, not a main verb. Fix: 'The scientist WAS running the experiment' (adds main verb 'was').",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC1-Q013", sectionId: "ENG-C", topicId: "english-sentence-building-blocks", difficulty: "medium", type: "multi",
  question: "Which of the following are PHRASES (no subject-verb combination)? (Select all that apply.)",
  options: [
    "The heavy rain",
    "Running through the field",
    "The dog barks loudly",
    "In the morning"
  ],
  correctAnswer: [0, 1, 3],
  explanation: "(a) Noun phrase: 'The heavy rain' — no verb. (b) Participial phrase: 'Running through the field' — no subject. (d) Prepositional phrase: 'In the morning' — no verb. (c) Wrong: 'The dog barks loudly' = subject 'dog' + verb 'barks' + adverb 'loudly' = CLAUSE.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

// Hard
{ id: "ENGC1-Q014", sectionId: "ENG-C", topicId: "english-sentence-building-blocks", difficulty: "hard", type: "multi",
  question: "Which of the following are FRAGMENTS that need to be fixed? (Select all that apply.)",
  options: [
    "Because the storm was severe.",
    "She studies meteorology at the university.",
    "The scientist with expertise in climate change.",
    "Running quickly through the park."
  ],
  correctAnswer: [0, 2, 3],
  explanation: "(a) Fragment: dependent clause starting with 'because' — needs main clause to complete. (c) Fragment: prepositional phrase modifying 'scientist' — no verb for 'scientist'. (d) Fragment: participial phrase — no subject. (b) Complete sentence with subject + verb + modifier.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC1-Q015", sectionId: "ENG-C", topicId: "english-sentence-building-blocks", difficulty: "hard", type: "single",
  question: "Identify the type of subordinate clause in: 'Whether he comes or not is unclear.'",
  options: ["Adverbial", "Adjective/relative", "Noun", "Conjunctive"],
  correctAnswer: 2,
  explanation: "'Whether he comes or not' is a NOUN clause — it acts as the SUBJECT of the main verb 'is unclear'. Noun clauses can be replaced by 'it' (it is unclear = whether he comes or not is the subject). Adverbial clauses modify verbs; adjective/relative clauses modify nouns.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC1-Q016", sectionId: "ENG-C", topicId: "english-sentence-building-blocks", difficulty: "hard", type: "single",
  question: "Choose the sentence where the phrase type is correctly identified:",
  options: [
    "'In the morning, she runs.' → 'In the morning' is a noun phrase (object of implied verb).",
    "'The running water was cold.' → 'Running' is a gerund here.",
    "'She is good at swimming.' → 'Swimming' is a gerund (object of preposition).",
    "'To succeed takes effort.' → 'To succeed' is a participial phrase here."
  ],
  correctAnswer: 2,
  explanation: "(c) is correct: 'swimming' is a gerund (verb-ing used as noun) — object of the preposition 'at'. (a) Wrong: 'In the morning' is a prepositional phrase, not noun. (b) Wrong: 'running' here is a PARTICIPLE (adjective modifying 'water'), not a gerund. (d) Wrong: 'To succeed' is an INFINITIVE phrase, not participial.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

// ═══════════════════════════════════════════════════════════════════
// TOPIC: Sentence Types, Errors & Transformation
// ═══════════════════════════════════════════════════════════════════

// Easy
{ id: "ENGC2-Q001", sectionId: "ENG-C", topicId: "english-sentence-types-errors-transformation", difficulty: "easy", type: "single",
  question: "Which of the following is a COMPOUND sentence?",
  options: ["The rain fell.", "Because the rain fell, the crops grew.", "The rain fell, and the crops grew.", "The rain that fell was heavy."],
  correctAnswer: 2,
  explanation: "'The rain fell, and the crops grew' is COMPOUND — two INDEPENDENT clauses joined by the coordinating conjunction 'and'. (a) is simple (one clause). (b) is complex (independent + dependent). (d) is also complex (independent + relative clause).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC2-Q002", sectionId: "ENG-C", topicId: "english-sentence-types-errors-transformation", difficulty: "easy", type: "single",
  question: "Which of the following is a COMPLEX sentence?",
  options: ["I came, I saw, I conquered.", "Because it rained, we stayed home.", "She sang and danced.", "He left."],
  correctAnswer: 1,
  explanation: "'Because it rained, we stayed home' is COMPLEX — one INDEPENDENT clause ('we stayed home') + one DEPENDENT clause ('Because it rained'). (a) is compound (three independent clauses). (c) is simple. (d) is simple.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC2-Q003", sectionId: "ENG-C", topicId: "english-sentence-types-errors-transformation", difficulty: "easy", type: "true_false",
  question: "A run-on sentence occurs when two independent clauses are joined without proper punctuation or conjunction.",
  options: ["True", "False"],
  correctAnswer: 0,
  explanation: "True. A run-on (also called 'fused sentence') occurs when two independent clauses are written together with no punctuation or only a comma. Example: 'It was raining we stayed inside' = run-on. Fix with a period, semicolon, or conjunction.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

// Medium
{ id: "ENGC2-Q004", sectionId: "ENG-C", topicId: "english-sentence-types-errors-transformation", difficulty: "medium", type: "single",
  question: "Fix the comma splice: 'It was raining, we stayed inside.'",
  options: [
    "It was raining, and we stayed inside.",
    "It was raining; we stayed inside.",
    "It was raining. We stayed inside.",
    "All of the above are correct fixes."
  ],
  correctAnswer: 3,
  explanation: "All three options fix the comma splice by replacing the comma with proper punctuation or a conjunction. (a) adds 'and'. (b) uses a semicolon. (c) uses a period (two sentences). All are valid; the original comma was wrong.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC2-Q005", sectionId: "ENG-C", topicId: "english-sentence-types-errors-transformation", difficulty: "medium", type: "single",
  question: "Choose the correct version (no misplaced modifier):",
  options: [
    "Running quickly, the finish line was crossed.",
    "Running quickly, he crossed the finish line.",
    "The finish line was crossed by him running quickly.",
    "He crossed quickly, running the finish line."
  ],
  correctAnswer: 1,
  explanation: "The original (a) has a misplaced modifier: 'Running quickly' should modify the runner, but it appears next to 'finish line' (the thing crossed), creating ambiguity. (b) fixes it by placing 'he' (the runner) next to the modifier. (c) is awkward. (d) is confusing.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC2-Q006", sectionId: "ENG-C", topicId: "english-sentence-types-errors-transformation", difficulty: "medium", type: "single",
  question: "Choose the sentence with PARALLEL structure:",
  options: [
    "He likes swimming, to run, and biking.",
    "He likes swimming, running, and biking.",
    "He likes to swim, to run, and to bike.",
    "Both B and C are parallel."
  ],
  correctAnswer: 1,
  explanation: "Parallel structure requires the same grammatical form for list items. (b) 'swimming, running, biking' = all gerunds ✓ parallel. (c) 'to swim, to run, to bike' = all infinitives ✓ also parallel. (a) is NOT parallel: it mixes 2 gerunds ('swimming', 'biking') with 1 infinitive ('to run'). The correct answer is (b) — the one that is definitively parallel without needing to be paired with another option. (Note: option (c) is also parallel, but (b) is the clearest single answer.)",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC2-Q007", sectionId: "ENG-C", topicId: "english-sentence-types-errors-transformation", difficulty: "medium", type: "single",
  question: "Which sentence type by PURPOSE is: 'What a beautiful day!'",
  options: ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
  correctAnswer: 3,
  explanation: "'What a beautiful day!' is EXCLAMATORY — it expresses strong emotion and ends with an exclamation mark. Declarative = statement. Interrogative = question. Imperative = command. Exclamatory = strong feeling.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC2-Q008", sectionId: "ENG-C", topicId: "english-sentence-types-errors-transformation", difficulty: "medium", type: "single",
  question: "Choose the COMPOUND-COMPLEX sentence:",
  options: [
    "When the rain fell, the crops grew, and the farmers smiled.",
    "The rain fell, and the crops grew.",
    "When the rain fell, the crops grew.",
    "The rain fell."
  ],
  correctAnswer: 0,
  explanation: "'When the rain fell, the crops grew, and the farmers smiled' is COMPOUND-COMPLEX: one DEPENDENT clause ('When the rain fell') + two INDEPENDENT clauses ('the crops grew', 'the farmers smiled') joined by a coordinating conjunction. (b) is compound. (c) is complex. (d) is simple.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC2-Q009", sectionId: "ENG-C", topicId: "english-sentence-types-errors-transformation", difficulty: "medium", type: "single",
  question: "Transform to passive: 'The scientists collected the data.'",
  options: [
    "The data was collected by the scientists.",
    "The data were collected by the scientists.",
    "The data has collected by the scientists.",
    "The data is collected the scientists."
  ],
  correctAnswer: 0,
  explanation: "Passive: 'The data' (object → subject) + 'was collected' (be + past participle) + 'by the scientists' (agent). 'Data' is singular (treated as a single entity), so 'was', not 'were'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC2-Q010", sectionId: "ENG-C", topicId: "english-sentence-types-errors-transformation", difficulty: "medium", type: "single",
  question: "Which sentence has a MISPLACED MODIFIER?",
  options: [
    "She almost drove the entire distance.",
    "She drove almost the entire distance.",
    "She almost drove, the entire distance.",
    "She drove the entire distance, almost."
  ],
  correctAnswer: 0,
  explanation: "'She almost drove the entire distance' means she drove nearly all the way but didn't quite finish. 'She drove almost the entire distance' is the intended meaning. The modifier 'almost' was misplaced — it should be next to 'entire distance', not 'drove'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC2-Q011", sectionId: "ENG-C", topicId: "english-sentence-types-errors-transformation", difficulty: "medium", type: "true_false",
  question: "'He is intelligent, kind, and has beauty' is parallel.",
  options: ["True", "False"],
  correctAnswer: 1,
  explanation: "False. The list mixes forms: 'intelligent' and 'kind' are ADJECTIVES, but 'has beauty' is VERB + NOUN. Parallel fix: 'He is intelligent, kind, and beautiful' (all adjectives) OR 'He has intelligence, kindness, and beauty' (all nouns).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC2-Q012", sectionId: "ENG-C", topicId: "english-sentence-types-errors-transformation", difficulty: "medium", type: "true_false",
  question: "A comma splice (two independent clauses joined by only a comma) is grammatically incorrect.",
  options: ["True", "False"],
  correctAnswer: 0,
  explanation: "True. A comma alone is too weak to join two independent clauses. Fix: use a period (two sentences), a semicolon, or a coordinating conjunction (and, but, or, nor, for, so, yet).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC2-Q013", sectionId: "ENG-C", topicId: "english-sentence-types-errors-transformation", difficulty: "medium", type: "true_false",
  question: "An imperative sentence gives a command or makes a request (e.g., 'Close the door.').",
  options: ["True", "False"],
  correctAnswer: 0,
  explanation: "True. Imperative sentences give commands, make requests, or offer invitations. They typically have an implied subject 'you' and end with a period or exclamation mark. Examples: 'Close the door.' / 'Please be quiet.' / 'Have a seat.'",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC2-Q014", sectionId: "ENG-C", topicId: "english-sentence-types-errors-transformation", difficulty: "medium", type: "multi",
  question: "Which of the following are CORRECT transformations from simple to complex? (Select all that apply.)",
  options: [
    "He was too tired. → He was too tired to continue.",
    "She studied. She passed. → Because she studied, she passed.",
    "The rain fell. The crops grew. → The rain fell, the crops grew.",
    "He is rich. He is unhappy. → Although he is rich, he is unhappy."
  ],
  correctAnswer: [0, 1, 3],
  explanation: "(a) Correct: simple to complex with infinitive 'to continue' (result clause). (b) Correct: two simple sentences combined via subordinate conjunction 'because'. (c) Wrong: this is a comma splice, not a complex sentence (no subordinator). (d) Correct: two simple sentences combined via concessive subordinator 'although'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

// Hard
{ id: "ENGC2-Q015", sectionId: "ENG-C", topicId: "english-sentence-types-errors-transformation", difficulty: "hard", type: "multi",
  question: "Which of the following sentences contain errors? (Select all that apply.)",
  options: [
    "It was raining, we stayed inside.",
    "She is intelligent, kind, and beautiful.",
    "Running through the park, the dog was happy.",
    "After he left, I called him."
  ],
  correctAnswer: [0, 2],
  explanation: "(a) Error: comma splice — two independent clauses joined only by a comma. (c) Error: dangling modifier — 'Running through the park' appears to modify 'the dog', but the running subject isn't the dog (it's a person whose dog is happy). Fix: 'Running through the park, his dog was happy' or 'While he ran through the park, his dog was happy'. (b) Correct (parallel adjectives). (d) Correct (complex sentence with subordinating conjunction).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC2-Q016", sectionId: "ENG-C", topicId: "english-sentence-types-errors-transformation", difficulty: "hard", type: "single",
  question: "Identify the BEST combination of the three sentences: (a) She opened the door. (b) The room was full of smoke. (c) She called the fire department immediately.",
  options: [
    "a, b, c (opened, smoke, called)",
    "b, a, c (smoke, opened, called)",
    "c, a, b (called, opened, smoke)",
    "a, c, b (opened, called, smoke)"
  ],
  correctAnswer: 0,
  explanation: "Logical sequence: (a) She opened the door → (b) The room was full of smoke (consequence of opening) → (c) She called the fire department immediately (response to seeing smoke). The actions must follow the discovery. (a)→(b)→(c) is the only natural causal/temporal order.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC2-Q017", sectionId: "ENG-C", topicId: "english-sentence-types-errors-transformation", difficulty: "hard", type: "single",
  question: "Transform to active voice: 'The book was read by the child.'",
  options: [
    "The child read the book.",
    "The child reads the book.",
    "The child was reading the book.",
    "The child has read the book."
  ],
  correctAnswer: 0,
  explanation: "Active: 'The child' (agent, by → subject) + 'read' (past tense, from past participle) + 'the book' (object). The past tense 'was read' becomes simple past 'read' (pronounced 'red').",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

// ═══════════════════════════════════════════════════════════════════
// TOPIC: Completion, Rearrangement & Combining
// ═══════════════════════════════════════════════════════════════════

// Easy
{ id: "ENGC3-Q001", sectionId: "ENG-C", topicId: "english-sentence-completion-rearrangement", difficulty: "easy", type: "single",
  question: "Complete: 'She is good _____ mathematics.' Choose the correct preposition:",
  options: ["in", "at", "on", "for"],
  correctAnswer: 1,
  explanation: "'Good AT mathematics' is the fixed phrase. 'Good in' is sometimes used informally but is nonstandard. 'Good on' and 'good for' are wrong preposition choices for this meaning.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC3-Q002", sectionId: "ENG-C", topicId: "english-sentence-completion-rearrangement", difficulty: "easy", type: "single",
  question: "Complete: 'He has been working here _____ 2015.' Choose the correct preposition:",
  options: ["for", "since", "from", "during"],
  correctAnswer: 1,
  explanation: "'Since 2015' is correct for an action that started in 2015 and continues. 'For' would require a duration (e.g., 'for 9 years'). 'Since' marks a specific point in the past; 'for' marks a duration.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC3-Q003", sectionId: "ENG-C", topicId: "english-sentence-completion-rearrangement", difficulty: "easy", type: "true_false",
  question: "In rearrangement questions, the topic sentence usually has no referring pronouns (it, they, this, these).",
  options: ["True", "False"],
  correctAnswer: 0,
  explanation: "True. The topic sentence introduces the main idea and doesn't refer to anything prior. Sentences with referring pronouns (this, they, it) come AFTER the sentences that establish what they refer to. The topic sentence is usually the most general, with details, examples, and conclusions following.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

// Medium
{ id: "ENGC3-Q004", sectionId: "ENG-C", topicId: "english-sentence-completion-rearrangement", difficulty: "medium", type: "single",
  question: "Complete: 'If I _____ (be) you, I would go.' Choose the correct form:",
  options: ["am", "was", "were", "have been"],
  correctAnswer: 2,
  explanation: "In the subjunctive mood (used in 'if' clauses for hypothetical/unreal conditions), we use 'were' for all subjects: 'If I were you...', 'If he were here...', 'If they were ready...'. 'Was' is technically acceptable in informal usage but 'were' is the standard form.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC3-Q005", sectionId: "ENG-C", topicId: "english-sentence-completion-rearrangement", difficulty: "medium", type: "single",
  question: "Rearrange into correct order: (a) Finally, the experiment was completed. (b) The scientists worked for months. (c) They had hoped for success. (d) The results were promising.",
  options: ["c, b, a, d", "b, c, a, d", "a, b, c, d", "b, a, c, d"],
  correctAnswer: 0,
  explanation: "Logical order: (c) They had hoped for success (background/expectation) → (b) The scientists worked for months (action) → (a) Finally, the experiment was completed (conclusion/result) → (d) The results were promising (follow-up detail). Time markers like 'finally' indicate it comes after other steps.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC3-Q006", sectionId: "ENG-C", topicId: "english-sentence-completion-rearrangement", difficulty: "medium", type: "single",
  question: "Combine into ONE sentence: 'He is intelligent. He is hardworking. He is successful.'",
  options: [
    "He is intelligent, hardworking, and successful.",
    "He is intelligent, is hardworking, and is successful.",
    "He is intelligent, is hardworking, and successful.",
    "Both A and C are correct."
  ],
  correctAnswer: 0,
  explanation: "Parallel structure with adjectives: 'intelligent, hardworking, successful' — three adjectives joined by commas and 'and'. (b) and (c) are wrong because they include 'is' which breaks the parallel list. The subject 'He' is shared and the verb 'is' is implied for all three adjectives.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC3-Q007", sectionId: "ENG-C", topicId: "english-sentence-completion-rearrangement", difficulty: "medium", type: "single",
  question: "Complete: 'She studied hard _____ she might pass the exam.' Choose the correct conjunction:",
  options: ["because", "although", "so that", "unless"],
  correctAnswer: 2,
  explanation: "'So that' introduces a PURPOSE clause — the reason she studied was IN ORDER TO pass. 'Because' introduces cause (but the cause-effect is reversed here). 'Although' is contrast. 'Unless' is conditional. The purpose is clear from the structure.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC3-Q008", sectionId: "ENG-C", topicId: "english-sentence-completion-rearrangement", difficulty: "medium", type: "single",
  question: "Complete: 'Neither the teacher nor the students _____ prepared.' Choose the correct verb:",
  options: ["is", "are", "was", "has"],
  correctAnswer: 1,
  explanation: "With 'neither...nor', the verb agrees with the NEAREST subject. 'Students' is plural and nearest, so the verb is 'are'. The plural 'are' applies to the whole compound subject.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC3-Q009", sectionId: "ENG-C", topicId: "english-sentence-completion-rearrangement", difficulty: "medium", type: "single",
  question: "Combine: 'The door was open. I entered.' Use a participle:",
  options: [
    "The door being open, I entered.",
    "I entered the open door.",
    "Entering the door, I came in.",
    "The open door I entered."
  ],
  correctAnswer: 0,
  explanation: "'The door being open, I entered' uses a participial phrase (with 'being' = present participle of 'be') as an adverbial modifier, equivalent to 'Since the door was open, I entered'. This combines the two short sentences into one smoother sentence.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC3-Q010", sectionId: "ENG-C", topicId: "english-sentence-completion-rearrangement", difficulty: "medium", type: "true_false",
  question: "Rearrangement questions are usually ordered from general (topic sentence) to specific (details) or chronologically (time order).",
  options: ["True", "False"],
  correctAnswer: 0,
  explanation: "True. Paragraphs are typically organized either: (1) general-to-specific (topic sentence introduces the main idea, then details follow), or (2) chronologically (events in time order, marked by 'then', 'later', 'finally'). Both patterns appear in FPSC rearrangements.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC3-Q011", sectionId: "ENG-C", topicId: "english-sentence-completion-rearrangement", difficulty: "medium", type: "true_false",
  question: "Time/place markers like 'now' typically appear in the LAST sentence of a paragraph, not the first.",
  options: ["True", "False"],
  correctAnswer: 1,
  explanation: "False. 'Now' typically appears in the topic/first sentence (it sets the time/place context). Sentences AFTER use 'then', 'later', 'subsequently', 'finally'. A sentence starting with 'now' is a topic sentence signal.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC3-Q012", sectionId: "ENG-C", topicId: "english-sentence-completion-rearrangement", difficulty: "medium", type: "true_false",
  question: "When combining sentences with 'although', the result is a COMPLEX sentence (one independent + one dependent clause).",
  options: ["True", "False"],
  correctAnswer: 0,
  explanation: "True. 'Although' is a SUBORDINATING conjunction. It introduces a dependent clause. Result: complex sentence. 'Although it rained, we went out' = complex (one independent 'we went out' + one dependent 'Although it rained').",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC3-Q013", sectionId: "ENG-C", topicId: "english-sentence-completion-rearrangement", difficulty: "medium", type: "multi",
  question: "Which of the following are CORRECT sentence combinations? (Select all that apply.)",
  options: [
    "He was tired. He went to bed. → He was tired, so he went to bed.",
    "She sang. She danced. → She sang and danced.",
    "It was raining. We stayed inside. → It was raining; we stayed inside.",
    "I am hungry. I will eat. → I am hungry and I will eat."
  ],
  correctAnswer: [0, 1, 2, 3],
  explanation: "All four are correct combinations. (a) 'so' = cause-effect. (b) 'and' = equal actions. (c) ';' = compound sentence. (d) 'and' = simple combination. Each combines two short sentences into a smoother, more sophisticated single sentence.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

// Hard
{ id: "ENGC3-Q014", sectionId: "ENG-C", topicId: "english-sentence-completion-rearrangement", difficulty: "hard", type: "single",
  question: "Rearrange into correct order: (a) This is because of the new policy. (b) Many companies have adopted flexible work hours. (c) Employees report higher satisfaction. (d) The trend is growing rapidly.",
  options: [
    "b, a, c, d (companies → policy → satisfaction → trend growing)",
    "a, b, c, d (policy → companies → satisfaction → trend)",
    "b, c, a, d (companies → satisfaction → policy → trend)",
    "d, b, a, c (trend → companies → policy → satisfaction)"
  ],
  correctAnswer: 0,
  explanation: "Logical flow: (b) Many companies have adopted flexible work hours (general trend) → (a) This is because of the new policy (cause of trend) → (c) Employees report higher satisfaction (effect of trend) → (d) The trend is growing rapidly (current development). The pronoun 'This' in (a) refers to the trend in (b), so (a) must come after (b).",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC3-Q015", sectionId: "ENG-C", topicId: "english-sentence-completion-rearrangement", difficulty: "hard", type: "multi",
  question: "Which of the following sentences are CORRECT? (Select all that apply.)",
  options: [
    "He is good at mathematics.",
    "If I were you, I would accept.",
    "Neither the students nor the teacher was present.",
    "She is intelligent, kind, and beautiful."
  ],
  correctAnswer: [0, 1, 2, 3],
  explanation: "All four are correct. (a) 'good at' is the fixed phrase. (b) 'were' is the subjunctive for hypothetical conditions. (c) 'neither...nor' verb agrees with the NEAREST subject ('teacher' is singular, so 'was'). (d) Three parallel adjectives joined by commas and 'and'.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC3-Q016", sectionId: "ENG-C", topicId: "english-sentence-completion-rearrangement", difficulty: "hard", type: "single",
  question: "Rearrange into correct order: (a) However, some studies have questioned this view. (b) Climate change is widely accepted as a real phenomenon. (c) The scientific consensus remains strong. (d) Critics point to gaps in the data.",
  options: [
    "b, c, a, d (accepted → consensus → critics question → gaps)",
    "b, a, c, d (accepted → some question → consensus → gaps)",
    "a, b, c, d (some question → accepted → consensus → gaps)",
    "c, b, a, d (consensus → accepted → some question → gaps)"
  ],
  correctAnswer: 0,
  explanation: "Logical flow: (b) Climate change is accepted (main claim, general) → (c) Scientific consensus is strong (supporting detail) → (a) However, some studies question this (contrast — introduced by 'However') → (d) Critics point to gaps in data (specific criticism). The 'However' in (a) signals it follows the established consensus, and (d) expands on the criticism with specific detail.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] },

{ id: "ENGC3-Q017", sectionId: "ENG-C", topicId: "english-sentence-completion-rearrangement", difficulty: "hard", type: "single",
  question: "Combine the best way: 'She entered the room. She saw the broken glass. She understood what had happened.'",
  options: [
    "She entered the room, saw the broken glass, and understood what had happened.",
    "She entered the room and saw the broken glass, understanding what had happened.",
    "Entering the room, she saw the broken glass and understood what had happened.",
    "All of the above are valid combinations."
  ],
  correctAnswer: 3,
  explanation: "All three are valid. (a) Uses coordination with parallel verbs ('saw' and 'understood'). (b) Uses a present participle ('understanding') as adverbial modifier. (c) Uses a different participle placement ('Entering the room'). Each combines the three short sentences into a smoother single sentence. There are usually multiple correct combinations — pick the one that flows most naturally.",
  sourceCitation: "Standard English curriculum", examScope: ['bs17', 'bs16'] }

];
