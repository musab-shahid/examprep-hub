// topics-english.ts — FPSC English content bank
// Covers Grammar & Usage (Module A) for both BS-17 and BS-16.
// Vocabulary (Module B) and Sentence Structuring (Module C) 
// are in subsequent batches.
//
// Question types per topic follow the natural grammar style:
// - "Find the error in this sentence"
// - "Choose the correct form"
// - "Identify the part of speech"
// - "Fill in the blank"
// etc.
//
// Module D (integrated practice) is embedded across questions, 
// not as a separate topic.

import type { Topic } from '@/types';

export const topics: Topic[] = [

// ═══════════════════════════════════════════════════════════════════
// SECTION ENG-A: Grammar & Usage
// ═══════════════════════════════════════════════════════════════════

{
  id: "english-parts-of-speech-and-tenses",
  sectionId: "ENG-A",
  order: 1,
  title: "Parts of Speech & Tenses",
  definition: "Parts of speech are the eight categories that classify every word in English by its grammatical function. Tenses are verb forms that express WHEN an action or state occurs (past, present, future) AND its aspect (simple, continuous, perfect, perfect continuous) — giving 12 distinct tenses total.",
  keyFacts: [
    "Eight parts of speech: noun, pronoun, verb, adjective, adverb, preposition, conjunction, interjection (plus determiner, which modifies a noun)",
    "Noun: names a person, place, thing, or idea (meteorologist, weather, climate); singular vs plural, countable vs uncountable",
    "Pronoun: replaces a noun (he, she, it, they, this, who); must agree with its antecedent in number and gender",
    "Verb: shows action or state (predict, is, has analyzed); carries tense, voice (active/passive), and mood (indicative, subjunctive, imperative)",
    "Adjective: describes a noun (humid, tropical, severe); precedes the noun or follows a linking verb",
    "Adverb: describes a verb, adjective, or other adverb (quickly, very, here); placement matters",
    "Preposition: shows relationship of time/place/direction (in, on, at, by, with, between); forms fixed phrases with verbs/adjectives",
    "Conjunction: joins words, phrases, or clauses (and, but, because, although, while, if); coordinating, subordinating, correlative",
    "Interjection: expresses sudden emotion (oh! wow! alas!); rarely tested in formal writing",
    "Tense structure: 4 times (past/present/future/universal) × 4 aspects (simple/continuous/perfect/perfect continuous) = 12 tenses",
    "Present tenses: simple (habits/facts), continuous (happening now), perfect (past with present relevance), perfect continuous (ongoing since past)",
    "Past tenses: simple (completed), continuous (ongoing in past), perfect (earlier than another past), perfect continuous (ongoing up to past point)",
    "Future tenses: simple (will), continuous (will be +ing), perfect (will have +pp), perfect continuous (will have been +ing)"
  ],
  explanationSections: [
    { heading: "Why parts of speech matter for the exam", body: "Every question about grammar — error identification, sentence correction, subject-verb agreement — depends on knowing what each word is doing in a sentence. If you can't identify that 'quickly' is an adverb modifying the verb (not an adjective describing the subject), you'll misdiagnose errors. Parts of speech are the diagnostic tool; everything else builds on this." },
    { heading: "The 12-tense framework in practice", body: "Although there are 12 tenses, the exam typically tests the most confused pairs: present simple vs present continuous (habit vs happening now), past simple vs past perfect (completed vs earlier-than-past), and present perfect vs past simple (past-with-present-relevance vs completed-past). Master these three pairs and you'll handle 80% of tense questions." },
    { heading: "Tense sequence in reported speech", body: "When converting direct to reported speech with a past-tense reporting verb (he said, she asked), tenses shift backward: present → past, past → past perfect, future → would + base. This is the rule that catches most students. Example: 'I am hungry' → He said he was hungry. 'I will go' → She said she would go. The shift is mechanical, not semantic." }
  ],
  examPoints: [
    "Interjection is rarely tested in formal exams — don't waste time on it",
    "Three high-yield tense pairs: present simple/continuous, past simple/perfect, present perfect/past simple",
    "Reported speech tense shift is mechanical: present → past, past → past perfect, future → would + base"
  ],
  commonMistakes: [
    "'Since 2010, Pakistan is facing floods' ❌ → 'Since 2010, Pakistan has been facing floods' ✅ (since + present perfect for ongoing action from past)",
    "'I am knowing the answer' ❌ → 'I know the answer' ✅ (know is a stative verb — not used in -ing form)",
    "'He has went' ❌ → 'He has gone' ✅ (gone, not went, is the past participle of go)"
  ],
  relatedTopics: ["english-agreement-and-articles", "english-modals-voice-narration", "english-common-errors"],
  content: true,
  examScope: ['bs17', 'bs16'],
  buildsOn: [],
  leadsTo: ["english-agreement-and-articles", "english-pronouns-prepositions-conjunctions"],
  usedIn: ["english-common-errors", "english-sentence-building-blocks", "ra-scientific-reporting"]
},

{
  id: "english-agreement-and-articles",
  sectionId: "ENG-A",
  order: 2,
  title: "Subject-Verb Agreement & Articles",
  definition: "Subject-verb agreement requires the verb to match its subject in number and person (NOT the nearest noun). Articles (a, an, the, zero) specify whether a noun is general, specific, or already-known, and depend on the sound (not letter) that follows them.",
  keyFacts: [
    "Core rule: verb agrees with its subject in number and person, not with the nearest noun",
    "Tricky cases: indefinite pronouns (each, every, someone → singular; both, few, many, several → plural)",
    "Always singular: each, every, everyone, everything, somebody, anyone, anything, nobody, nothing, someone, something, either, neither, one, much",
    "Always plural: both, few, many, several",
    "Can be either: all, some, any, most, none, more (depends on the noun they modify)",
    "Prepositional phrases between subject and verb do not affect agreement: 'The box of chocolates IS' (not 'are')",
    "A/an = first mention or non-specific; the = specific, unique, superlative, ordinal, already-known",
    "A vs an: based on the SOUND that follows, not the letter. 'an hour' (silent h), 'a university' (yu sound), 'an honest man' (silent h)",
    "Zero article: plural general (ØDogs are loyal), uncountable general (ØWater is essential), most proper names (ØPakistan)",
    "Geographical features take 'the': the Indus, the Himalayas, the Arabian Sea. Countries mostly don't (ØPakistan, but the USA, the UK)"
  ],
  explanationSections: [
    { heading: "The trap of prepositional phrases", body: "When a prepositional phrase comes between the subject and verb, students often make the verb agree with the nearest noun instead of the true subject. Example: 'The effects of climate change ARE severe' is wrong (subject is 'effects', plural, so 'are' is right) — actually that IS correct. But 'The effect of these changes IS severe' (subject is 'effect', singular) — students often write 'are'. The prepositional phrase 'of these changes' is a distractor." },
    { heading: "A vs an: it's about sound, not letter", body: "The choice between 'a' and 'an' depends on the FIRST SOUND of the following word, not the letter. 'A university' (yu-sound, consonant), 'an hour' (silent h, vowel sound), 'an honest man' (silent h), 'a one-time event' (w-sound). This trips up Pakistani students especially because 'h' looks like a consonant but often sounds like a vowel." },
    { heading: "When to use 'the' vs zero article", body: "Use 'the' for: specific things (the book I mentioned), unique things (the Sun, the President), superlatives (the highest), ordinals (the first), and already-mentioned things. Use zero article for: plural general statements (ØDogs are loyal), uncountable general (ØWater is essential), and most proper nouns (ØPakistan, but the USA, the UK)." }
  ],
  examPoints: [
    "Each of the stations HAS (not have) — 'each' is singular",
    "Many of the rivers HAVE (not has) — 'many' is plural",
    "A university (not 'an') — 'yu' is a consonant sound",
    "An honest man (not 'a') — 'h' is silent here",
    "The Indus (not Ø) — rivers take 'the'"
  ],
  commonMistakes: [
    "'A honest man' ❌ → 'An honest man' ✅ (silent h)",
    "'Many of the river has dried' ❌ → 'Many of the rivers have dried' ✅ (many is plural, so plural verb)",
    "'I want to become the meteorologist' ❌ → '...a meteorologist' ✅ (first mention, not specific)"
  ],
  relatedTopics: ["english-parts-of-speech-and-tenses", "english-pronouns-prepositions-conjunctions"],
  content: true,
  examScope: ['bs17', 'bs16'],
  buildsOn: ["english-parts-of-speech-and-tenses"],
  leadsTo: ["english-pronouns-prepositions-conjunctions", "english-common-errors"],
  usedIn: ["english-common-errors", "english-sentence-types-errors-transformation"]
},

{
  id: "english-pronouns-prepositions-conjunctions",
  sectionId: "ENG-A",
  order: 3,
  title: "Pronouns, Prepositions & Conjunctions",
  definition: "Pronouns replace nouns (and must agree with their antecedents). Prepositions show relationships of time, place, and direction (and form many fixed phrases). Conjunctions join words, phrases, and clauses (coordinating, subordinating, or correlative).",
  keyFacts: [
    "Personal pronouns: I/me, you, he/him, she/her, it, we/us, they/them (subject vs object case)",
    "Possessive: my/mine, your/yours, his, her/hers, its (NOT it's), our/ours, their/theirs",
    "Reflexive: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves (subject = object)",
    "Relative: who (people, subject), whom (people, object), which (things), that (defining clause), whose (possession)",
    "Demonstrative: this/that (singular), these/those (plural); 'this/these' = near, 'that/those' = far",
    "Preposition time rules: at (exact time), in (months/years/seasons), on (days/dates), since (point in past), for (duration)",
    "Preposition place rules: at (specific point), in (area), on (surface), above (higher), over (covering), below (lower), under (directly under)",
    "Coordinating conjunctions (FANBOYS): For, And, Nor, But, Or, Yet, So — join equal elements",
    "Subordinating conjunctions: because, although, while, when, if, unless, since, after, before, until — join dependent to independent clause",
    "Correlative conjunctions (pairs): both...and, either...or, neither...nor, not only...but also",
    "Common error: 'Although he is rich, but he is unhappy' ❌ → 'Although he is rich, he is unhappy' ✅ (don't pair although with but)",
    "Common error: 'Because he was tired, so he slept' ❌ → 'Because he was tired, he slept' ✅ (don't pair because with so)"
  ],
  explanationSections: [
    { heading: "Who vs Whom — the test", body: "If you can replace the pronoun with 'he/she', use 'who' (subject). If you can replace it with 'him/her', use 'whom' (object). Example: 'The scientist who discovered this...' (he discovered → who). 'The scientist whom we met...' (we met him → whom). In modern usage, 'who' is often used for both, but formal writing still distinguishes." },
    { heading: "Prepositions of time — at/in/on", body: "AT = exact time (at 5 PM), night (at night), weekend (at the weekend). IN = months, years, seasons, parts of day (in June, in 2020, in the morning). ON = days, dates, specific mornings/afternoons (on Monday, on June 5, on Saturday morning). The error 'in Monday' or 'at June' is one of the most common in FPSC English papers." },
    { heading: "Conjunction coordination errors", body: "Two common errors: (1) pairing 'although' with 'but' ('Although he is rich, but he is unhappy' ❌) — 'although' already implies contrast, no 'but' needed. (2) Pairing 'because' with 'so' ('Because he was tired, so he slept' ❌) — 'because' already implies cause; use 'so' OR restructure, not both." }
  ],
  examPoints: [
    "Who = subject, Whom = object (test: he/him substitution)",
    "Since = point in past, For = duration (since 2010 vs for 5 years)",
    "Don't pair 'although' with 'but', or 'because' with 'so' — pick one",
    "Between = two things, Among = more than two"
  ],
  commonMistakes: [
    "'Between you and I' ❌ → 'Between you and me' ✅ (preposition takes object case)",
    "'He is good in math' ❌ → 'He is good AT math' ✅ (good AT, not good IN)",
    "'Although he is rich, but he is unhappy' ❌ → 'Although he is rich, he is unhappy' ✅"
  ],
  relatedTopics: ["english-parts-of-speech-and-tenses", "english-agreement-and-articles", "english-common-errors"],
  content: true,
  examScope: ['bs17', 'bs16'],
  buildsOn: ["english-parts-of-speech-and-tenses", "english-agreement-and-articles"],
  leadsTo: ["english-modals-voice-narration", "english-common-errors"],
  usedIn: ["english-common-errors", "english-sentence-building-blocks"]
},

{
  id: "english-modals-voice-narration",
  sectionId: "ENG-A",
  order: 4,
  title: "Modals, Voice (Active/Passive) & Narration (Direct/Indirect)",
  definition: "Modals are auxiliary verbs (can, could, may, might, must, should, will, would, shall) that express ability, permission, obligation, or probability. Voice shows whether the subject performs (active) or receives (passive) the action. Narration converts direct speech to reported (indirect) speech with tense shift and pronoun/place/time changes.",
  keyFacts: [
    "Modals: can (ability/possibility), could (past ability/polite), may (permission/possibility), might (less certain), must (obligation/deduction), should (advice/obligation), will (future), would (polite/habit), shall (formal future)",
    "Modal perfects: must have +pp (past deduction), should have +pp (past regret), could have +pp (missed opportunity), may have +pp (past possibility)",
    "Passive voice: when subject receives action, or agent is unknown, or emphasis on action",
    "Passive transformation: object → subject, active verb → be + past participle, by + agent (if mentioned)",
    "Cannot be passive: intransitive verbs (occur, happen), stative verbs (contain, have as possession), verbs of measurement (weigh)",
    "Reported speech: present → past, past → past perfect, future → would, here → there, now → then, today → that day, yesterday → the day before, tomorrow → the next day, this → that, I → he/she, my → his/her, we → they",
    "Commands in reported speech: use 'to + infinitive': 'Open the window' → He told me to open the window",
    "Questions in reported speech: use 'if/whether' for yes/no, keep wh-word, no question mark, statement word order"
  ],
  explanationSections: [
    { heading: "Modal perfects — the high-yield exam topic", body: "Modal perfects combine a modal with 'have + past participle' and describe a PAST possibility, deduction, or regret. 'He must have left early' = past deduction (I'm certain he left). 'You should have informed me' = past regret (you didn't, but should have). 'He may have missed the train' = past possibility. These are tested as both comprehension and fill-in-the-blank questions." },
    { heading: "When passive is used (and when it can't be)", body: "Use passive when: the agent is unknown ('The data was collected yesterday'), the agent is obvious ('He was arrested' — by police), or you want to emphasize the action ('The bridge was built in 1995'). CANNOT use passive with: intransitive verbs ('The storm occurred' — no passive), stative verbs ('The book has 200 pages' — accept 'is contained in' but awkward), and verbs of measurement ('The bag weighs 5 kg')." },
    { heading: "Reported speech — the mechanical shift", body: "When reporting verb is past tense (he said, she asked), tenses shift backward: present → past (is → was), past → past perfect (did → had done), future → would (will → would). Pronouns shift to third person (I → he/she, we → they). Time/place markers shift: here → there, now → then, today → that day, yesterday → the day before, tomorrow → the next day. It's mechanical — don't try to make it semantic." }
  ],
  examPoints: [
    "Modal perfects describe PAST: must have, should have, could have, may have",
    "Passive: object → subject, active → be + past participle, by + agent",
    "Reported speech with past reporting verb: tenses shift backward one step",
    "Commands become 'to + infinitive': 'Sit down' → He told me to sit down"
  ],
  commonMistakes: [
    "'He can to swim' ❌ → 'He can swim' ✅ (no 'to' after modal)",
    "'He cans swim' ❌ → 'He can swim' ✅ (modals don't take -s)",
    "'He said that where are you going' ❌ → 'He asked where I was going' ✅ (no question form in reported speech)",
    "'The data is being showed' ❌ → 'The data is being shown' ✅ (shown, not showed, is the past participle of show)"
  ],
  relatedTopics: ["english-parts-of-speech-and-tenses", "english-common-errors", "english-sentence-types-errors-transformation"],
  content: true,
  buildsOn: ["english-parts-of-speech-and-tenses", "english-pronouns-prepositions-conjunctions"],
  leadsTo: ["english-common-errors", "english-sentence-types-errors-transformation"],
  usedIn: ["english-common-errors", "english-sentence-types-errors-transformation", "ra-scientific-reporting"]
},

{
  id: "english-common-errors",
  sectionId: "ENG-A",
  order: 5,
  title: "Common Errors in English",
  definition: "The most frequently tested grammatical errors in FPSC English papers — the mistakes Pakistani students most often make, and the corrections the exam expects.",
  keyFacts: [
    "Adjective vs Adverb: 'real bad' ❌ → 'really bad' ✅ (adverbs modify verbs/adjectives/other adverbs)",
    "Noun vs Verb: 'It will effect you' ❌ → 'It will affect you' ✅ (affect = verb, effect = noun usually)",
    "Affect (verb, to influence) vs Effect (noun, result; verb, to bring about)",
    "Less vs Fewer: 'less water' ✅ (uncountable), 'fewer people' ✅ (countable)",
    "Each other vs One another: 'each other' = two, 'one another' = more than two (often interchangeable in modern usage)",
    "Different from (NOT different than)",
    "Despite (NOT despite of) / In spite of (NOT in spite of)",
    "According to (NOT according with)",
    "Comprise (no 'of'): 'The team comprises 5 members' ✅ vs 'is comprised of' (wrong, except in British passive use)",
    "Discuss (no preposition): 'discuss the issue' ✅ NOT 'discuss about the issue'",
    "Married to (NOT married with)",
    "Senior to (NOT senior than) / Prefer X to Y (NOT prefer X than Y)",
    "Hardly had I reached (NOT Hardly I had reached — adverb position)"
  ],
  explanationSections: [
    { heading: "Why these errors appear on exams", body: "Exams test these specific errors because they reflect patterns of incorrect English that are widespread. The errors fall into categories: (1) wrong word form (affect/effect, real/really), (2) wrong preposition (discuss about, married with), (3) wrong adverb position (hardly I had), (4) wrong comparison structure (different than, prefer X than). Each appears in real writing frequently — that's why they're tested." },
    { heading: "The affect/effect distinction", body: "AFFECT (verb, to influence): 'The storm affected millions.' EFFECT (noun, result): 'The effect was devastating.' EFFECT (verb, formal, to bring about): 'to effect change' (rare). The most common exam error is using 'effect' where 'affect' is needed. Test: if you can substitute 'influence' or 'change' → affect (verb). If you can substitute 'result' or 'outcome' → effect (noun)." },
    { heading: "Preposition errors with specific words", body: "Many prepositions are fixed by the word they follow, not by logic. 'Discuss THE issue' (not about). 'Married TO' (not with). 'Good AT math' (not in). 'Different FROM' (not than). 'According TO' (not with). 'Comprise' takes no preposition in active voice ('The team comprises 5 members'). These must be memorized as fixed phrases, not reasoned through." }
  ],
  examPoints: [
    "Affect (verb) / Effect (noun) — test by substitution",
    "Discuss (no preposition) / Different from (not than) / Married to (not with)",
    "Less (uncountable) / Fewer (countable)",
    "Hardly had + past participle (NOT Hardly had + subject)"
  ],
  commonMistakes: [
    "'The weather is real bad' ❌ → '...is really bad' ✅ (adverb)",
    "'It will effect you' ❌ → 'It will affect you' ✅ (verb, not noun)",
    "'He discussed about the issue' ❌ → 'He discussed the issue' ✅ (no preposition)",
    "'He is senior than me' ❌ → 'He is senior to me' ✅"
  ],
  relatedTopics: ["english-parts-of-speech-and-tenses", "english-pronouns-prepositions-conjunctions", "english-modals-voice-narration"],
  content: true,
  examScope: ['bs17', 'bs16'],
  buildsOn: ["english-agreement-and-articles", "english-pronouns-prepositions-conjunctions", "english-modals-voice-narration"],
  leadsTo: ["english-sentence-types-errors-transformation"],
  usedIn: ["english-sentence-types-errors-transformation", "english-sentence-completion-rearrangement", "ra-scientific-reporting", "f-aviation-products"]
}
  
,
// ═══════════════════════════════════════════════════════════════════
// SECTION ENG-B: Vocabulary (BS-17 only)
// ═══════════════════════════════════════════════════════════════════

{
  id: "english-synonyms-antonyms-confusables",
  sectionId: "ENG-B",
  order: 1,
  title: "Synonyms, Antonyms & Confusables",
  definition: "Synonyms are words with similar meanings; antonyms are words with opposite meanings. Confusables are word pairs that are easily mistaken for each other (affect/effect, their/there) and require memorization of their distinct uses.",
  keyFacts: [
    "Synonym question format: 'Choose the word closest in meaning to X' — test by substitution",
    "Antonym question format: 'Choose the word most opposite in meaning to X' — test by negation",
    "Context matters: a word's synonym can depend on context (e.g., 'turbulent' = chaotic for weather, but = volatile for markets)",
    "Weather/climate vocabulary is heavily tested: humid/damp/dry, abate/intensify, mitigate/worsen",
    "Science vocabulary: hypothesis/theory, empirical/observed, correlate/causation",
    "Confusables #1: AFFECT (verb, to influence) vs EFFECT (noun, result)",
    "Confusables #2: ADAPT (adjust) vs ADOPT (take up) vs ADEPT (skilled)",
    "Confusables #3: ALLUDE (refer indirectly) vs ELUDE (avoid)",
    "Confusables #4: PRINCIPAL (main/head) vs PRINCIPLE (rule/law)",
    "Confusables #5: STATIONARY (not moving) vs STATIONERY (writing materials)",
    "Strategy: don't just look for similar words — substitute each option into the original sentence and see which makes sense"
  ],
  explanationSections: [
    { heading: "Why this topic is heavily tested", body: "Vocabulary MCQs are often 5 of the 20 marks in Part-I English. They test whether you know the precise meaning of words, especially ones that look/sound similar but mean different things. The confusables are the highest-yield items — they're tested precisely because students mix them up." },
    { heading: "The substitution strategy for synonyms", body: "When asked for a synonym, the fastest reliable method is to substitute each option into the original sentence (or a clear synonym of the test word). The one that makes sense = the answer. Example: 'turbulent' options are 'chaotic' and 'gentle'. The turbulent weather was chaotic (works), the turbulent weather was gentle (doesn't). This is more reliable than just 'feeling' which word is similar." },
    { heading: "Confusables — the highest-yield subcategory", body: "The confusables list covers words that are easily confused because they share letters, pronunciation, or related meanings. The exam tests them because they're a common source of error. The fix is MEMORIZATION with CONTRAST PAIRS: AFFECT (verb, influence) vs EFFECT (noun, result). If you can remember the category for each (verb vs noun), you can usually get it right even if you've forgotten the exact meaning." }
  ],
  examPoints: [
    "Affect = verb, Effect = noun (most-tested confusable)",
    "Discuss = no preposition (discuss THE issue)",
    "Different from (not 'than')",
    "Despite (no 'of') / In spite of",
    "Substitution is more reliable than guessing by feel"
  ],
  commonMistakes: [
    "'It will effect you' ❌ → 'It will affect you' ✅ (verb, not noun)",
    "'He is senior than me' ❌ → 'He is senior to me' ✅",
    "'He discussed about the issue' ❌ → 'He discussed the issue' ✅ (no preposition)",
    "'Different than' ❌ → 'Different from' ✅"
  ],
  relatedTopics: ["english-idioms-and-phrases", "english-word-formation-and-context", "english-common-errors"],
  content: true,
  postRestriction: "bs17",
  examScope: ['bs17'],
  buildsOn: [],
  leadsTo: ["english-idioms-and-phrases", "english-word-formation-and-context"],
  usedIn: ["english-word-formation-and-context", "english-sentence-completion-rearrangement"]
},

{
  id: "english-idioms-and-phrases",
  sectionId: "ENG-B",
  order: 2,
  title: "Idioms & Phrases",
  definition: "Idioms are fixed expressions whose meaning cannot be deduced from the individual words. They must be memorized as units. In FPSC English, idioms appear both as vocabulary MCQs ('What does X mean?') and in sentence-completion questions.",
  keyFacts: [
    "Idiom question format: 'What does the idiom X mean?' — you must know the fixed meaning",
    "Idioms often use everyday words in non-literal ways ('break the ice' = start a conversation, not literally break ice)",
    "Top 10 most-tested idioms in FPSC: bite the bullet, break the ice, once in a blue moon, beat around the bush, hit the nail on the head, get out of hand, add fuel to the fire, every cloud has a silver lining, see eye to eye, kill two birds with one stone",
    "Weather/meteorology idioms: storm in a teacup (small problem made to seem big), under the weather (feeling ill), fair-weather friend (unreliable)",
    "Learning strategy: learn idioms in CONTEXT (full sentence), not as isolated definitions"
  ],
  explanationSections: [
    { heading: "Idioms cannot be reasoned out — they must be memorized", body: "Unlike vocabulary (where you can often deduce meaning from context or Latin roots), idioms have meanings that are ARBITRARY. 'Bite the bullet' has nothing to do with biting or bullets — it means 'accept something unpleasant bravely'. The only way to learn idioms is to memorize them, ideally in full sentences so the context sticks." },
    { heading: "Context-based learning works best for idioms", body: "Don't memorize 'break the ice = start a conversation'. Memorize: 'He told a joke to break the ice at the meeting.' The sentence gives you a situation, the idiom fits naturally, and the meaning is embedded. This kind of contextual learning is more durable than dictionary-style definitions, especially for 50+ idioms." },
    { heading: "Test strategy for idioms", body: "If you encounter an unknown idiom, use ELIMINATION based on what makes sense in context. Example: 'After months of argument, they finally decided to bury the hatchet.' Options: (a) dig a hole (b) make peace (c) celebrate. The context is 'months of argument → decided to X', so X is something that resolves an argument. (b) makes sense. The others don't fit the context." }
  ],
  examPoints: [
    "Idioms must be memorized as units — no logic to deduce them",
    "Learn in context: full sentence, not just definition",
    "Use context to eliminate options for unknown idioms",
    "Top 10 most-tested: bullet, ice, blue moon, bush, nail, hand, fire, cloud, eye, bird"
  ],
  commonMistakes: [
    "'A blessing in disguise' = something bad → ❌ 'a religious ceremony' (literal error)",
    "'Burn the midnight oil' = work late → ❌ 'set something on fire' (literal error)",
    "'Once in a blue moon' = rarely → ❌ 'during a full moon' (literal error)"
  ],
  relatedTopics: ["english-synonyms-antonyms-confusables", "english-word-formation-and-context", "english-common-errors"],
  content: true,
  postRestriction: "bs17",
  examScope: ['bs17'],
  buildsOn: ["english-synonyms-antonyms-confusables"],
  leadsTo: ["english-word-formation-and-context"],
  usedIn: ["english-sentence-completion-rearrangement"]
},

{
  id: "english-word-formation-and-context",
  sectionId: "ENG-B",
  order: 3,
  title: "Word Formation & Contextual Vocabulary",
  definition: "Word formation uses prefixes (anti-, dis-, pre-, hydro-) and suffixes (-tion, -ity, -ology) to build words from roots. Contextual vocabulary tests word meaning in the specific sentence where it appears, which can differ from a word's general meaning.",
  keyFacts: [
    "Common prefixes: anti- (against), auto- (self), bio- (life), de- (reverse), dis- (not), hydro- (water), inter- (between), pre- (before), re- (again), sub- (under), trans- (across), un- (not)",
    "Common noun suffixes: -tion/-sion (action), -ment (result), -er/-or (one who), -ity/-ty (state), -ness (state), -ology (study of), -graph (recording), -scope (viewing)",
    "Common adjective suffixes: -al (relating to), -ic (quality of), -ous (full of), -ive (tendency), -able/-ible (capable), -ful/-less (with/without)",
    "Common verb suffixes: -ate (make), -ify (make), -ize/-ise (make/become), -en (make/become)",
    "Common roots: aqua/hydr (water), bio (life), geo (earth), graph (write), meter (measure), photo (light), sphere (ball/globe), therm (heat), auto (self)",
    "Contextual meaning: a word may mean different things in different contexts. 'Heavy rain' ≠ 'heavy workload'",
    "Context strategy: substitute each option in the original sentence; the one that fits wins"
  ],
  explanationSections: [
    { heading: "Why word formation matters", body: "Even if you don't know a specific vocabulary word, you can often deduce its meaning from its parts. If you know 'hydro-' means water and '-ology' means study of, you can guess 'hydrology' = study of water. This is a free win on the exam — you don't need to memorize every word, you just need to know the common prefixes and suffixes." },
    { heading: "The most-tested prefixes and suffixes", body: "FPSC English doesn't test obscure word formation — it tests the COMMON ones that appear in real vocabulary. Master these 10 prefixes (anti-, auto-, bio-, de-, dis-, hydro-, pre-, re-, sub-, trans-) and these 5 suffixes (-tion, -ity, -ous, -able, -ly) and you can decode hundreds of words. Same for roots: aqua-, bio-, geo-, meter-, photo-." },
    { heading: "Context strategy: the test-taking fallback", body: "When you see a word you don't know in context, substitute each option. Example: 'Her argument was so convoluted that even her colleagues were confused.' Options: (a) clear (b) complex/confusing (c) loud. 'Convoluted argument that confused people' → 'complex/confusing' makes sense. The others don't. This works even if you've never seen 'convoluted' before." }
  ],
  examPoints: [
    "10 most-tested prefixes to memorize: anti-, auto-, bio-, de-, dis-, hydro-, pre-, re-, sub-, trans-",
    "5 most-tested suffixes: -tion, -ity, -ous, -able, -ly",
    "Context substitution is the universal fallback strategy",
    "Academic/scientific vocabulary is heavily tested in BS-17 papers"
  ],
  commonMistakes: [
    "'Unsustainable' = NOT able to continue (un- + sustain + -able) — students often think 'un-' reverses to mean 'good'",
    "'Biodiversity' = variety of life (bio- + diversity) — not 'biological variety' literally (it IS biological variety, but the point is to recognize the term)",
    "Misreading context: 'heavy smoker' = person who smokes a lot, not a 'serious' smoker (which would be a different meaning)"
  ],
  relatedTopics: ["english-synonyms-antonyms-confusables", "english-idioms-and-phrases"],
  content: true,
  postRestriction: "bs17",
  examScope: ['bs17'],
  buildsOn: ["english-synonyms-antonyms-confusables", "english-idioms-and-phrases"],
  leadsTo: [],
  usedIn: ["english-sentence-completion-rearrangement", "ra-scientific-reporting", "env-international-climate-policy", "env-ozone-depletion", "h-pakistan-nccp"]
}

,
// ═══════════════════════════════════════════════════════════════════
// SECTION ENG-C: Sentence Structuring (both posts)
// ═══════════════════════════════════════════════════════════════════

{
  id: "english-sentence-building-blocks",
  sectionId: "ENG-C",
  order: 1,
  title: "Building Blocks: Words, Phrases, Clauses & Sentences",
  definition: "Sentences are built from words → phrases → clauses → sentences. Understanding the difference between a phrase (no subject+verb combination) and a clause (has subject+verb) is essential for identifying fragments, run-ons, and proper sentence structure.",
  keyFacts: [
    "Word: smallest unit of language; no subject+verb; cannot stand alone meaningfully",
    "Phrase: group of words WITHOUT subject+verb combination; cannot stand alone as a sentence (e.g., 'the heavy rain', 'in the morning')",
    "Clause: group of words WITH subject+verb; can be independent (stands alone) or dependent/subordinate (cannot)",
    "Sentence: complete thought; expresses a statement, question, command, or exclamation",
    "Phrase types: noun phrase, verb phrase, adjective phrase, adverb phrase, prepositional phrase, participial phrase, infinitive phrase, gerund phrase, appositive phrase",
    "Clause types: independent (main) clause vs dependent (subordinate) clause",
    "Subordinate clause types: adverbial (modifies verb), adjective/relative (modifies noun), noun (acts as subject/object)",
    "Common exam error: FRAGMENT (a phrase or dependent clause punctuated as if it were a complete sentence)"
  ],
  explanationSections: [
    { heading: "Why this topic is the foundation for everything else", body: "Every error in sentence construction — fragments, run-ons, dangling modifiers — comes from not understanding the difference between a phrase and a clause. If you can't identify that 'Because it rained' is a dependent clause (subject 'it', verb 'rained'), you'll think it's a complete sentence and write a fragment. Mastering this distinction is the key to fixing the construction errors in C.3." },
    { heading: "Phrase vs clause — the test that settles it", body: "Phrase = NO subject+verb combination. Clause = HAS subject+verb combination. Examples: 'running quickly' = phrase (no subject). 'The dog is running' = clause (subject 'dog', verb 'is running'). 'The running dog' = phrase (no verb). When in doubt: try to find a subject and a verb. If both are present, it's a clause (or sentence). If one or both are missing, it's a phrase (or fragment if punctuated as a sentence)." },
    { heading: "Subordinate clause types", body: "Adverbial subordinate clause: modifies the verb in the main clause, often answers when/where/why/how (begins with because, when, if, although, while). Adjective/relative clause: modifies a noun, begins with who/which/that/whose. Noun clause: acts as subject/object, begins with that/whether/what/who. Recognizing these helps you punctuate correctly and avoid fragments." }
  ],
  examPoints: [
    "Phrase = no S+V; Clause = has S+V; Sentence = complete thought",
    "Three subordinate clause types: adverbial, adjective/relative, noun",
    "Fragments = phrases or dependent clauses punctuated as sentences"
  ],
  commonMistakes: [
    "'Because the storm was severe.' ❌ Fragment — it's a dependent clause, not a complete sentence",
    "'Running through the field.' ❌ Fragment — participial phrase, no subject or main verb",
    "'The scientist with expertise in meteorology.' ❌ Fragment — prepositional phrase attached to a noun"
  ],
  relatedTopics: ["english-sentence-types-errors-transformation", "english-sentence-completion-rearrangement", "english-common-errors"],
  content: true,
  examScope: ['bs17', 'bs16'],
  buildsOn: ["english-parts-of-speech-and-tenses", "english-pronouns-prepositions-conjunctions"],
  leadsTo: ["english-sentence-types-errors-transformation"],
  usedIn: ["english-sentence-types-errors-transformation", "english-sentence-completion-rearrangement", "ra-scientific-reporting", "env-climate-change-response", "env-international-climate-policy", "i-pmd-operational", "f-aviation-products"]
},

{
  id: "english-sentence-types-errors-transformation",
  sectionId: "ENG-C",
  order: 2,
  title: "Sentence Types, Errors & Transformation",
  definition: "Sentences have structural types (simple/compound/complex/compound-complex) and purpose types (declarative/interrogative/imperative/exclamatory). Common errors include fragments, run-ons, comma splices, subject-verb disagreement, misplaced modifiers, and parallel structure failures. Transformation converts between these forms.",
  keyFacts: [
    "Simple: 1 independent clause ('The rain fell.')",
    "Compound: 2+ independent clauses joined by coordinating conjunction or semicolon ('The rain fell, and the crops grew.')",
    "Complex: 1 independent + 1+ dependent clauses ('Because the rain fell, the crops grew.')",
    "Compound-Complex: 2+ independent + 1+ dependent clauses ('When the rain fell, the crops grew, and the farmers smiled.')",
    "Declarative: statement (period); Interrogative: question (?); Imperative: command (period/!); Exclamatory: strong emotion (!)",
    "Fragment: incomplete sentence; lacks independent clause",
    "Run-on: two independent clauses joined without punctuation or with comma only",
    "Comma splice: comma joining two independent clauses (wrong)",
    "Misplaced modifier: descriptive phrase in wrong place, creating ambiguity",
    "Parallel structure: items in a list must use same grammatical form",
    "Transformations: simple→compound (add conjunction), compound→simple (use participle), simple→complex (add subordinator), active→passive, direct→indirect speech"
  ],
  explanationSections: [
    { heading: "Why sentence errors are heavily tested", body: "Sentence construction errors — fragments, run-ons, comma splices, misplaced modifiers — are the highest-yield topics in sentence structuring. Each is a specific, fixable mistake. The exam tests them because they reveal whether you understand sentence BOUNDARIES (where one ends and another begins) and CLAUSE STRUCTURE (what modifies what)." },
    { heading: "Fixing the four classic errors", body: "(1) Fragment: complete the thought by adding the missing independent clause. (2) Run-on: split with period, semicolon, or conjunction. (3) Comma splice: replace the comma with a period, semicolon, or conjunction. (4) Dangling modifier: place the modifier next to what it modifies, or rewrite the sentence so the subject is clear. Each has a simple fix once you identify the error." },
    { heading: "Parallel structure — the most subtle error", body: "Parallel structure means items in a series must use the SAME grammatical form. 'I like swimming, to run, and biking' is wrong because 'swimming' (gerund) and 'biking' (gerund) are parallel, but 'to run' (infinitive) breaks the pattern. Fix: 'I like swimming, running, and biking' (all gerunds) OR 'I like to swim, to run, and to bike' (all infinitives). The exam tests this with 'He is intelligent, kind, and has beauty' (wrong: adjectives + verb-noun). Fix: 'He is intelligent, kind, and beautiful.'" }
  ],
  examPoints: [
    "4 sentence types by structure: simple, compound, complex, compound-complex",
    "4 sentence types by purpose: declarative, interrogative, imperative, exclamatory",
    "4 classic errors: fragment, run-on, comma splice, misplaced modifier",
    "Parallel structure: same form for items in a series"
  ],
  commonMistakes: [
    "'It was raining, we stayed inside.' ❌ Comma splice → 'It was raining; we stayed inside.' ✓ (semicolon)",
    "'The scientist running the experiment.' ❌ Fragment → 'The scientist was running the experiment.' ✓",
    "'He likes swimming, to run, and biking.' ❌ Mixed forms → 'He likes swimming, running, and biking.' ✓ (all gerunds)"
  ],
  relatedTopics: ["english-sentence-building-blocks", "english-sentence-completion-rearrangement", "english-modals-voice-narration"],
  content: true,
  examScope: ['bs17', 'bs16'],
  buildsOn: ["english-sentence-building-blocks", "english-common-errors", "english-modals-voice-narration"],
  leadsTo: ["english-sentence-completion-rearrangement"],
  usedIn: ["english-sentence-completion-rearrangement", "ra-scientific-reporting", "env-climate-change-response"]
},

{
  id: "english-sentence-completion-rearrangement",
  sectionId: "ENG-C",
  order: 3,
  title: "Sentence Completion, Rearrangement & Combining",
  definition: "Sentence completion tests filling blanks with the correct grammatical form. Rearrangement tests ordering jumbled sentences into logical paragraphs. Combining shows how to merge short sentences into smoother, more sophisticated structures using conjunctions and subordination.",
  keyFacts: [
    "Completion strategy: read the full sentence; identify what grammatical form (verb/noun/adj/adv) must fill the blank; check subject-verb agreement; check meaning",
    "Rearrangement strategy: identify the topic sentence (general statement, no referring pronouns); look for logical connectors (however, therefore, moreover, finally); check pronoun references (this, they, it); identify time/causal order",
    "Combining strategy: use subordinating conjunctions (because, although, when, if) to make one clause dependent; use coordinating conjunctions (and, but, or, so) to join equal clauses; use participles to combine",
    "Common logical patterns: chronological (first, then, finally), cause-effect (because, therefore), problem-solution (the problem is, one solution), compare-contrast (similarly, however)",
    "Time/place markers help: 'now' typically appears in the topic sentence; 'then'/'later'/'finally' appear in subsequent sentences"
  ],
  explanationSections: [
    { heading: "Completion — the systematic approach", body: "Don't just plug in random options. Step 1: read the FULL sentence (including parts after the blank). Step 2: identify what TYPE of word must fill the blank — is it a verb? noun? adjective? adverb? Step 3: check subject-verb agreement if it's a verb. Step 4: check which option makes logical sense in context. This 4-step process eliminates most wrong answers quickly." },
    { heading: "Rearrangement — find the topic sentence first", body: "When 4-6 sentences are jumbled, start by finding the TOPIC SENTENCE — the one that introduces the topic WITHOUT referring to anything else. Pronouns like 'this', 'they', 'it' and phrases like 'this method', 'these findings' indicate a sentence that COMES AFTER its referent. So sentences with these references can't be the first one. The topic sentence is usually general; later sentences give details, examples, or conclusions." },
    { heading: "Combining — turning choppy text into good writing", body: "Good writing combines related short sentences into smoother longer ones. Use a subordinating conjunction ('because', 'although', 'when') to make one clause dependent on another: 'The rain fell. The crops grew.' → 'Because the rain fell, the crops grew.' Use a participle to combine two sentences with the same subject: 'He entered the room. He smiled.' → 'Entering the room, he smiled.' Use coordination with 'and/but/or/so' for equal ideas: 'She studied. She passed.' → 'She studied and passed.'" }
  ],
  examPoints: [
    "Completion: read full sentence → identify form → check agreement → check meaning",
    "Rearrangement: find topic sentence (no referring pronouns) first",
    "Combining: use subordination (because, although) or coordination (and, but) to merge related sentences"
  ],
  commonMistakes: [
    "'He studied hard. He passed.' (2 sentences) — choppy → 'He studied hard and passed.' OR 'After studying hard, he passed.' (use subordination)",
    "'She is intelligent. She is kind. She is beautiful.' — three sentences with same form → 'She is intelligent, kind, and beautiful.' (parallel structure)",
    "Misidentifying the topic sentence: picking one that starts with 'This' or 'These' (these are NOT topic sentences — they refer to something prior)"
  ],
  relatedTopics: ["english-sentence-building-blocks", "english-sentence-types-errors-transformation", "english-pronouns-prepositions-conjunctions"],
  content: true,
  examScope: ['bs17', 'bs16'],
  buildsOn: ["english-sentence-types-errors-transformation", "english-word-formation-and-context"],
  leadsTo: [],
  usedIn: ["ra-scientific-reporting", "env-pakistan-environmental-context"]
}

];
