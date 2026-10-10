// topics-english.ts — FPSC English content bank
// Module A: Grammar & Usage (5 topics, BS-17 & BS-16)
// Module B: Vocabulary (3 topics, BS-17)
// Module C: Sentence Structuring (3 topics, BS-17 & BS-16)

import type { Topic } from '@/types';

export const topics: Topic[] = [
// ============================================================================
// ENGLISH — MODULE A: Grammar & Usage (FIXED)
// ============================================================================
// --------------------------------------------------------------------------
// A1 — Parts of Speech & Tenses
// --------------------------------------------------------------------------
{
  id: 'english-parts-of-speech-and-tenses',
  sectionId: 'ENG-01',
  order: 1,
  title: 'Parts of Speech & Tenses',
  definition:
    'Parts of speech classify every word by the job it does in a sentence. Tenses are the verb forms that locate an action or state in time and show its aspect (simple, continuous, perfect, or perfect continuous).',
  keyFacts: [
    'Eight parts of speech: noun, pronoun, verb, adjective, adverb, preposition, conjunction, interjection. Determiner is often treated as a ninth.',
    'Noun — names a person, place, thing or idea. Countable vs uncountable; common vs proper; singular vs plural.',
    'Pronoun — stands in for a noun. Must match its antecedent in number, gender and case.',
    'Verb — expresses action or state. Carries tense, voice and mood.',
    'Adjective — modifies a noun. Usually before the noun or after a linking verb.',
    'Adverb — modifies a verb, an adjective or another adverb. Position can change meaning.',
    'Preposition — relates a noun/pronoun to another word (time, place, direction). Many form fixed phrases.',
    'Conjunction — joins words, phrases or clauses (coordinating, subordinating, correlative).',
    'Interjection — sudden emotion (oh, alas). Rarely tested in formal papers.',
    'Twelve core tenses: three times (past, present, future) × four aspects (simple, continuous, perfect, perfect continuous).',
    'Highest-yield pairs: present simple vs continuous; past simple vs past perfect; present perfect vs past simple.',
    'Stative verbs (know, believe, want, like, own, seem, contain) almost never take continuous forms.',
    'for + duration (for five years); since + starting point in the past (since 2010, since Monday).',
    'Reported-speech back-shift (past reporting verb): present → past, past → past perfect, will → would.',
    'Pronouns shift to third person in reported speech (I → he/she; we → they).',
    'Time/place markers shift: here → there, now → then, today → that day, yesterday → the day before.'
  ],
  explanationSections: [
    {
      heading: 'Parts of speech as the diagnostic tool',
      body: 'Every error-spotting or correction item begins with recognising what each word is doing. Mislabel an adverb as an adjective and the diagnosis fails. The categories themselves are simple; the skill is applying them under pressure. The diagnostic: (1) Can you put "the" in front? → noun. (2) Can it be replaced by he/she/it? → pronoun. (3) Can you add -s for present? → verb. (4) Does it describe a noun? → adjective. (5) Does it answer how/when/where/how much? → adverb.'
    },
    {
      heading: 'The three tense pairs that matter most',
      body: 'Present simple (habit, fact, permanent state) versus present continuous (happening now or temporary). Past simple (finished action) versus past perfect (earlier than another past action). Present perfect (past action with present relevance) versus past simple (finished past with no present link). Time markers help: since, for, yet, already, recently, so far → present perfect; yesterday, ago, last week, in 1995 → past simple. These three contrasts generate the large majority of tense questions.'
    },
    {
      heading: 'Stative verbs',
      body: 'Verbs of mental state, emotion, possession and appearance resist the continuous: know, understand, believe, want, like, prefer, own, belong, seem, appear, consist, contain. "I am knowing the answer" is almost always wrong. The diagnostic: if the verb expresses a state you can substitute "have" or "understand" for, it is stative and cannot take -ing. Note: stative verbs CAN appear in other tenses (have known, knew, will know, knew) — they only refuse the continuous aspect.'
    },
    {
      heading: 'for and since',
      body: 'for measures duration (for five years). since marks the starting point (since 2010, since Monday). Both normally take present perfect or present perfect continuous when the situation continues to the present. The diagnostic: can you put a duration number in front? → for. Is it a calendar date or named event? → since. "I have lived here since 2010" (point in past); "I have lived here for fourteen years" (duration).'
    },
    {
      heading: 'Link to the rest of the module',
      body: 'Agreement (A2) needs accurate identification of subjects. Pronoun and conjunction work (A3) needs antecedents and clause boundaries. Modals, voice and narration (A4) rest on verb forms. Common-error items (A5) recycle every preceding rule. A1 is therefore the foundation, not an optional first chapter — without secure identification of verb and tense, no later rule can be applied.'
    }
  ],
  examPoints: [
    'Label the part of speech of a highlighted word.',
    'Choose the correct tense, especially the three high-yield pairs.',
    'Reject continuous forms of stative verbs.',
    'Use for / since correctly with present perfect.',
    'Apply the mechanical tense shift in reported speech.'
  ],
  commonMistakes: [
    '"Since 2010 Pakistan is facing floods" → "Since 2010 Pakistan has been facing floods".',
    '"I am knowing the answer" → "I know the answer".',
    '"He has went home" → "He has gone home".',
    '"She is living here since 2015" → "She has been living here since 2015".'
  ],

    subtopics: [
      {
        id: "english-parts-of-speech-and-tenses-parts-of-speech-as-the-diagnostic-tool",
        title: "Parts of speech as the diagnostic tool",
        summary: "Every error-spotting or correction item begins with recognising what each word is doing. Mislabel an adverb as an adjective and the…",
        explanation: "Every error-spotting or correction item begins with recognising what each word is doing. Mislabel an adverb as an adjective and the diagnosis fails. The categories themselves are simple; the skill is applying them under pressure. The diagnostic: (1) Can you put ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-parts-of-speech-and-tenses-the-three-tense-pairs-that-matter-most",
        title: "The three tense pairs that matter most",
        summary: "Present simple (habit, fact, permanent state) versus present continuous (happening now or temporary). Past simple (finished action) versus…",
        explanation: "Present simple (habit, fact, permanent state) versus present continuous (happening now or temporary). Past simple (finished action) versus past perfect (earlier than another past action). Present perfect (past action with present relevance) versus past simple (finished past with no present link). Time markers help: since, for, yet, already, recently, so far → present perfect; yesterday, ago, last week, in 1995 → past simple. These three contrasts generate the large majority of tense questions.",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-parts-of-speech-and-tenses-stative-verbs",
        title: "Stative verbs",
        summary: "Verbs of mental state, emotion, possession and appearance resist the continuous: know, understand, believe, want, like, prefer, own,…",
        explanation: "Verbs of mental state, emotion, possession and appearance resist the continuous: know, understand, believe, want, like, prefer, own, belong, seem, appear, consist, contain. ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-parts-of-speech-and-tenses-for-and-since",
        title: "for and since",
        summary: "for measures duration (for five years). since marks the starting point (since 2010, since Monday). Both normally take present perfect or…",
        explanation: "for measures duration (for five years). since marks the starting point (since 2010, since Monday). Both normally take present perfect or present perfect continuous when the situation continues to the present. The diagnostic: can you put a duration number in front? → for. Is it a calendar date or named event? → since. ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-parts-of-speech-and-tenses-link-to-the-rest-of-the-module",
        title: "Link to the rest of the module",
        summary: "Agreement (A2) needs accurate identification of subjects. Pronoun and conjunction work (A3) needs antecedents and clause boundaries.…",
        explanation: "Agreement (A2) needs accurate identification of subjects. Pronoun and conjunction work (A3) needs antecedents and clause boundaries. Modals, voice and narration (A4) rest on verb forms. Common-error items (A5) recycle every preceding rule. A1 is therefore the foundation, not an optional first chapter — without secure identification of verb and tense, no later rule can be applied.",
        examples: [],
        shortcuts: [],
        traps: [],
      },
    ],
  relatedTopics: [
    'english-agreement-and-articles',
    'english-pronouns-prepositions-conjunctions',
    'english-modals-voice-narration',
    'english-common-errors'
  ],
  content: true,
  examScope: ['bs17', 'bs16'],
  buildsOn: [],
  leadsTo: [
    'english-agreement-and-articles',
    'english-pronouns-prepositions-conjunctions'
  ],
  usedIn: [
    'english-common-errors',
    'english-sentence-building-blocks',
    'ra-scientific-reporting'
  ]
},
// --------------------------------------------------------------------------
// A2 — Subject-Verb Agreement & Articles
// --------------------------------------------------------------------------
{
  id: 'english-agreement-and-articles',
  sectionId: 'ENG-01',
  order: 2,
  title: 'Subject-Verb Agreement & Articles',
  definition:
    'Subject-verb agreement requires the verb to match its true subject in number and person. Articles (a, an, the, or zero) signal whether a noun is general, specific or already known; the choice between a and an depends on the following sound, not the letter.',
  keyFacts: [
    'The verb agrees with the subject, not with the nearest noun or with any noun inside a prepositional phrase.',
    'Always singular: each, every, everyone, everything, somebody, anyone, anything, nobody, nothing, either, neither, one, much.',
    'Always plural: both, few, many, several.',
    'Variable (depends on the noun that follows): all, some, any, most, none, more.',
    'Collective nouns (team, committee, government) are usually singular in American English when the group acts as a single unit; in British English they may take a plural verb when members act individually. "The team IS competing" (American) vs "The team ARE arguing among themselves" (British).',
    'either…or / neither…nor — verb agrees with the NEARER subject: "Either the teacher or the parents ARE responsible."',
    'a / an = first mention or non-specific; the = specific, unique, already identified, superlative or ordinal.',
    'a versus an is decided by sound: an hour, an honest man (silent h); a university, a European, a one-rupee note (consonant sound).',
    'Zero article with general plurals (Dogs are loyal), general uncountables (Water is essential) and most proper names (Pakistan).',
    'Geographical names that take the: rivers, mountain ranges, seas, oceans, deserts, island groups, and a few country names (the USA, the UK, the Netherlands).',
    'Common uncountable nouns taking singular verb and zero article: information, advice, furniture, luggage, equipment, news, knowledge, research, weather, work, traffic.'
  ],
  explanationSections: [
    {
      heading: 'Prepositional phrases are distractors',
      body: '"The effects of climate change are severe" — subject is effects (plural). "The effect of these changes is severe" — subject is effect (singular). Isolate the head noun by stripping every prepositional phrase (of, in, on, at, with, by, for, from) between the subject and verb before choosing the verb. The prepositional phrase is a distractor; do not let it decide agreement.'
    },
    {
      heading: 'a / an is phonetic',
      body: 'Listen for the first sound, not the first letter. Silent h takes an (an hour, an honest man, an honor); a consonant sound — even if the letter is a vowel — takes a (a university, a European, a one-rupee note, an MBA where vowel pronunciation is "em-bee-ay"). This is one of the most frequently tested points for Pakistani candidates because silent-h words (hour, honest, honor, heir) are imported from Arabic.'
    },
    {
      heading: 'the versus zero article',
      body: 'Use the when the noun is unique, already known, or made specific by a clause or superlative. Use zero article for general statements and most proper nouns. Many geographical features are an exception and require the: rivers (the Indus), seas (the Arabian Sea), mountain ranges (the Himalayas), oceans (the Atlantic). Most countries take zero article (Pakistan, France, China), except plurals (the Netherlands, the Philippines) and compound forms (the USA, the UK).'
    },
    {
      heading: 'Link forward',
      body: 'Agreement and article rules reappear in almost every later error-identification item. They also interact with countability, which is itself a parts-of-speech issue from A1. Pronoun-antecedent agreement in A3 reuses the same singular/plural matching logic. Common-error items in A5 test wrong article choice (most usefully: an UNCLE or a UNCLE? — vowel sound → an) and agreement with uncountable nouns (information IS, news IS).'
    }
  ],
  examPoints: [
    'each / every / either / neither → singular verb.',
    'many / both / few / several → plural verb.',
    'Ignore nouns inside prepositional phrases.',
    'a university / an hour / an honest man — sound decides.',
    'the Indus / Ø Pakistan / the USA — geographical article rules.',
    'either…or / neither…nor — verb agrees with the nearer subject.'
  ],
  commonMistakes: [
    '"A honest man" → "An honest man".',
    '"Many of the river has dried" → "Many of the rivers have dried".',
    '"I want to become the meteorologist" → "… a meteorologist" (first mention, not specific).',
    '"The team of scientists are working together" — singular or plural both acceptable depending on meaning; safer rewrite: "The members of the team of scientists are working together" if plurality intended.',
    '"The news are fake" → "The news IS fake" (news is uncountable).'
  ],

    subtopics: [
      {
        id: "english-agreement-and-articles-prepositional-phrases-are-distractors",
        title: "Prepositional phrases are distractors",
        summary: "",
        explanation: "",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-agreement-and-articles-a-an-is-phonetic",
        title: "a / an is phonetic",
        summary: "Listen for the first sound, not the first letter. Silent h takes an (an hour, an honest man, an honor); a consonant sound — even if the…",
        explanation: "Listen for the first sound, not the first letter. Silent h takes an (an hour, an honest man, an honor); a consonant sound — even if the letter is a vowel — takes a (a university, a European, a one-rupee note, an MBA where vowel pronunciation is ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-agreement-and-articles-the-versus-zero-article",
        title: "the versus zero article",
        summary: "Use the when the noun is unique, already known, or made specific by a clause or superlative. Use zero article for general statements and…",
        explanation: "Use the when the noun is unique, already known, or made specific by a clause or superlative. Use zero article for general statements and most proper nouns. Many geographical features are an exception and require the: rivers (the Indus), seas (the Arabian Sea), mountain ranges (the Himalayas), oceans (the Atlantic). Most countries take zero article (Pakistan, France, China), except plurals (the Netherlands, the Philippines) and compound forms (the USA, the UK).",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-agreement-and-articles-link-forward",
        title: "Link forward",
        summary: "Agreement and article rules reappear in almost every later error-identification item. They also interact with countability, which is itself…",
        explanation: "Agreement and article rules reappear in almost every later error-identification item. They also interact with countability, which is itself a parts-of-speech issue from A1. Pronoun-antecedent agreement in A3 reuses the same singular/plural matching logic. Common-error items in A5 test wrong article choice (most usefully: an UNCLE or a UNCLE? — vowel sound → an) and agreement with uncountable nouns (information IS, news IS).",
        examples: [],
        shortcuts: [],
        traps: [],
      },
    ],
  relatedTopics: [
    'english-parts-of-speech-and-tenses',
    'english-pronouns-prepositions-conjunctions'
  ],
  content: true,
  examScope: ['bs17', 'bs16'],
  buildsOn: ['english-parts-of-speech-and-tenses'],
  leadsTo: [
    'english-pronouns-prepositions-conjunctions',
    'english-common-errors'
  ],
  usedIn: [
    'english-common-errors',
    'english-sentence-types-errors-transformation'
  ]
},
// --------------------------------------------------------------------------
// A3 — Pronouns, Prepositions & Conjunctions
// --------------------------------------------------------------------------
{
  id: 'english-pronouns-prepositions-conjunctions',
  sectionId: 'ENG-01',
  order: 3,
  title: 'Pronouns, Prepositions & Conjunctions',
  definition:
    'Pronouns replace nouns and must agree with their antecedents in number, gender and case. Prepositions express relations of time, place and direction and form many fixed phrases. Conjunctions join elements; the three families are coordinating, subordinating and correlative.',
  keyFacts: [
    'Subject versus object case: I/me, he/him, she/her, we/us, they/them.',
    'Possessive: my/mine, your/yours, her/hers, our/ours, their/theirs. its (possessive) ≠ it\'s (it is).',
    'Reflexive: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves — used when subject and object are the same.',
    'Relative: who (subject, people), whom (object, people), which (things), that (defining), whose (possession).',
    'who/whom test: substitute he/she or him/her; if him fits, use whom.',
    'Time prepositions: at (exact time, night, weekend), in (months, years, seasons, parts of day), on (days and dates).',
    'for = duration; since = starting point.',
    'Place: at (point), in (area), on (surface).',
    'Coordinating (FANBOYS): for, and, nor, but, or, yet, so.',
    'Subordinating: because, although, while, when, if, unless, since, after, before, until.',
    'Correlative pairs: both…and, either…or, neither…nor, not only…but also — must stay parallel.',
    'Do not pair although with but, or because with so.',
    'between = two; among = more than two.',
    'Fixed phrases: good at, married to, different from, according to, senior/junior to.',
    'Pronoun case after preposition: always object case — "between you and ME", "with HIM and HER".'
  ],
  explanationSections: [
    {
      heading: 'who versus whom',
      body: 'Replace the relative pronoun with he/she or him/her. Subject form → who; object form → whom. "The scientist who discovered this theory" — he discovered → who. "The scientist whom we met yesterday" — we met him → whom. "The person to whom I spoke" — I spoke to him → whom. Formal writing still observes the distinction; exams usually present clear cases. When in doubt: if the pronoun sits right after a preposition, it is whom.'
    },
    {
      heading: 'at / in / on for time',
      body: 'at = precise point. in = larger blocks. on = specific days and dates. "in Monday" and "at June" are classic errors. Add since for starting point (since 2010) and for for length (for five years). AT = exact time (at 5 PM), night (at night), weekend (at the weekend). IN = months (in June), years (in 2024), seasons (in summer), parts of day (in the morning). ON = days (on Monday), dates (on June 15), specific mornings/afternoons (on Saturday morning).'
    },
    {
      heading: 'Conjunction redundancy',
      body: 'Although already signals contrast; adding but is redundant. Because already signals cause; adding so is redundant. Use one connector, not both. The same rule applies to while + but, since + so, and other subordinate + coordinating pairs. The diagnostic: if the subordinate conjunction already establishes the relationship, do not add a coordinating conjunction that says the same thing.'
    },
    {
      heading: 'Correlative parallelism',
      body: 'Correlative conjunctions (both…and, either…or, neither…nor, not only…but also) come in PAIRS and demand PARALLEL structure on both sides. "She is BOTH intelligent AND hard-working" (adjective + adjective). "He is EITHER a doctor OR a lawyer" (noun + noun). "They NEITHER smoke NOR drink" (verb + verb). The error: "He is BOTH intelligent AND a good speaker" (adjective + noun phrase) — NOT parallel. Fix: "He is BOTH intelligent AND articulate" (both adjectives) or "He is intelligent AND a good speaker" (different structure but at least still parallel).'
    },
    {
      heading: 'Link forward',
      body: 'Pronoun case and agreement rest on subject/object identification from A1–A2. Prepositional phrases are the same distractors that appear in agreement. Conjunctions determine the clause boundaries that later sentence-structure topics will exploit. A4 (Modals, Voice, Narration) reuses the relative pronouns (who, which, that) for sentence combination. A5 (Common Errors) heavily tests fixed prepositions (discuss ABOUT, married WITH, different THAN, prefer X THAN) — most of these errors live in this chapter.'
    }
  ],
  examPoints: [
    'who = subject; whom = object (he/him test).',
    'since = point; for = duration.',
    'at / in / on time rules.',
    'Do not combine although + but or because + so.',
    'between = two; among = more than two.',
    'good at; married to; different from; senior to.',
    'After prepositions, always use object case (between you and me, with him).',
    'Correlative conjunctions require parallel structure on both sides.'
  ],
  commonMistakes: [
    '"Between you and I" → "Between you and me".',
    '"He is good in mathematics" → "He is good at mathematics".',
    '"Although he is rich, but he is unhappy" → "Although he is rich, he is unhappy".',
    '"Because he was tired, so he slept" → "Because he was tired, he slept".',
    '"She is senior than me" → "She is senior to me".',
    '"She is both intelligent and a hard worker" → "She is both intelligent AND diligent" (parallel structure).'
  ],

    subtopics: [
      {
        id: "english-pronouns-prepositions-conjunctions-who-versus-whom",
        title: "who versus whom",
        summary: "Replace the relative pronoun with he/she or him/her. Subject form → who; object form → whom. ",
        explanation: "Replace the relative pronoun with he/she or him/her. Subject form → who; object form → whom. ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-pronouns-prepositions-conjunctions-at-in-on-for-time",
        title: "at / in / on for time",
        summary: "at = precise point. in = larger blocks. on = specific days and dates. ",
        explanation: "at = precise point. in = larger blocks. on = specific days and dates. ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-pronouns-prepositions-conjunctions-conjunction-redundancy",
        title: "Conjunction redundancy",
        summary: "Although already signals contrast; adding but is redundant. Because already signals cause; adding so is redundant. Use one connector, not…",
        explanation: "Although already signals contrast; adding but is redundant. Because already signals cause; adding so is redundant. Use one connector, not both. The same rule applies to while + but, since + so, and other subordinate + coordinating pairs. The diagnostic: if the subordinate conjunction already establishes the relationship, do not add a coordinating conjunction that says the same thing.",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-pronouns-prepositions-conjunctions-correlative-parallelism",
        title: "Correlative parallelism",
        summary: "Correlative conjunctions (both…and, either…or, neither…nor, not only…but also) come in PAIRS and demand PARALLEL structure on both sides. ",
        explanation: "Correlative conjunctions (both…and, either…or, neither…nor, not only…but also) come in PAIRS and demand PARALLEL structure on both sides. ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-pronouns-prepositions-conjunctions-link-forward",
        title: "Link forward",
        summary: "Pronoun case and agreement rest on subject/object identification from A1–A2. Prepositional phrases are the same distractors that appear in…",
        explanation: "Pronoun case and agreement rest on subject/object identification from A1–A2. Prepositional phrases are the same distractors that appear in agreement. Conjunctions determine the clause boundaries that later sentence-structure topics will exploit. A4 (Modals, Voice, Narration) reuses the relative pronouns (who, which, that) for sentence combination. A5 (Common Errors) heavily tests fixed prepositions (discuss ABOUT, married WITH, different THAN, prefer X THAN) — most of these errors live in this chapter.",
        examples: [],
        shortcuts: [],
        traps: [],
      },
    ],
  relatedTopics: [
    'english-parts-of-speech-and-tenses',
    'english-agreement-and-articles',
    'english-common-errors'
  ],
  content: true,
  examScope: ['bs17', 'bs16'],
  buildsOn: [
    'english-parts-of-speech-and-tenses',
    'english-agreement-and-articles'
  ],
  leadsTo: [
    'english-modals-voice-narration',
    'english-common-errors'
  ],
  usedIn: [
    'english-common-errors',
    'english-sentence-building-blocks'
  ]
},
// --------------------------------------------------------------------------
// A4 — Modals, Voice & Narration
// --------------------------------------------------------------------------
{
  id: 'english-modals-voice-narration',
  sectionId: 'ENG-01',
  order: 4,
  title: 'Modals, Voice & Narration',
  definition:
    'Modals are auxiliary verbs that express ability, permission, obligation, advice or probability. Voice shows whether the subject performs the action (active) or receives it (passive). Narration converts direct speech into reported speech with systematic changes of tense, pronoun, time and place.',
  keyFacts: [
    'Core modals: can, could, may, might, must, should, will, would, shall.',
    'Modal + bare infinitive (no to, no -s): can swim, must go.',
    'Modal perfects (past meanings): must have + past participle (deduction), should have + pp (regret or criticism), could have + pp (missed opportunity), may/might have + pp (past possibility).',
    'Passive formation: object of active becomes subject of passive; verb becomes be + past participle; agent optionally in a by-phrase.',
    'Use passive when the agent is unknown, obvious, or less important than the action.',
    'Pure intransitives (occur, happen, arrive, die, sleep) and many stative verbs do not form natural passives at all — there is no passive because there is no object.',
    'Verbs with two objects (give, show, send, tell, lend, teach, offer): either object can become the passive subject. "He gave me a book" → "I was given a book" or "A book was given to me".',
    'Reported speech with past reporting verb: present → past, past → past perfect, will → would; here → there, now → then, today → that day, yesterday → the day before, tomorrow → the next day.',
    'Commands → to-infinitive: "Open the window" → He told me to open the window.',
    'Yes/no questions → if/whether + statement order; wh-questions keep the wh-word and become statement order; no question mark.',
    'say + (to + person) / tell + person (directly) — never "said me" or "told to me".',
    'Exclamations → "exclaimed that + statement" or "exclaimed with joy/surprise that…".',
    'Modal shift in reported speech: can → could, may → might, will → would, shall → should.'
  ],
  explanationSections: [
    {
      heading: 'Modal perfects',
      body: 'must have left = I am sure he left. should have informed = you did not, but it was advisable. could have helped = it was possible but did not happen. may/might have missed = it is possible that he missed. These four patterns are tested repeatedly. Mnemonic: modal + HAVE + PAST PARTICIPLE = past situation viewed through the modal\'s meaning. The modal keeps its MEANING (advice, deduction, possibility); HAVE+PP moves the action to the past.'
    },
    {
      heading: 'Passive — when and when not',
      body: 'Prefer passive when the doer is unknown, obvious or deliberately backgrounded. Pure intransitives and many stative verbs resist the passive because they have no object: "The accident happened" cannot become "was happened"; "She slept" cannot become "was slept". Verbs of measurement and possession ("weigh", "cost", "own", "contain") also resist natural passive. Always check that the past participle is correct (shown, not showed; gone, not went; written, not wrote; taken, not took).'
    },
    {
      heading: 'Two-object verbs in the passive',
      body: 'Verbs like give, show, send, lend, teach, tell, offer, pay, sell, write have BOTH a direct object (DO) and an indirect object (IO). Either can become the passive subject. "He gave me a book" → "I was given a book" (IO promoted, DO kept) OR "A book was given to me" (DO promoted, IO with preposition "to"). "He told me a story" → "I was told a story" OR "A story was told to me". Rule of thumb: IO (the receiver, usually) is promoted first; when DO is promoted, the IO requires the preposition (to / for / on).'
    },
    {
      heading: 'Reported speech is mechanical',
      body: 'Once the reporting verb is past, the back-shift is automatic. Do not try to preserve the original tense for "logic"; the grammar rule overrides. UNIVERSAL TRUTH EXCEPTION: "The sun rises in the east" → "He said the sun rises in the east" (no shift, because the fact remains true). However, in exam practice, expect the regular shift unless the universal-truth exception is explicitly signalled.'
    },
    {
      heading: 'Commands, questions and exclamations in reported form',
      body: 'Commands (imperatives): "Open the window" → "He told me TO open the window". Negative command: "Don\'t open" → "He told me NOT TO open". Yes/no questions: "Are you coming?" → "He asked IF/WHETHER I was coming" (no question mark, statement word order). Wh-questions: "Where do you live?" → "He asked WHERE I lived" (keep wh-word, statement word order). Exclamations: "What a beautiful day!" → "He exclaimed THAT it was a very beautiful day".'
    },
    {
      heading: 'say vs tell',
      body: 'SAY + optional "to + person" + (that) clause: "He said (to me) that he was tired." TELL + direct person object + (that) clause: "He told me that he was tired." Common errors: (1) "He said me that…" ❌ — say cannot take a direct object pronoun. (2) "He told that he was tired" ❌ — tell must have a person object. (3) "He told to me that…" ❌ — tell doesn\'t take "to". Other reporting verbs follow similar logic — TELL/INFORM/NOTIFY/ADVISE/WARN need a person object; SAY/MENTION/EXPLAIN/REPLY/ADD/REMARK can stand alone or use "to + person".'
    },
    {
      heading: 'Link forward',
      body: 'Modals and passive forms rest on the verb knowledge from A1. Reported speech re-uses the tense-shift rule already introduced there. Common-error questions (A5) frequently test modal mistakes (can + to, can + ing, must + -s) and passive mistakes (showed vs shown, was happened). B-section vocabulary often uses modal idioms ("would rather", "had better", "used to"). C-section sentence restructuring uses voice change and direct-indirect conversion as exercises — A4 is the foundation.'
    }
  ],
  examPoints: [
    'Modal + bare infinitive (no to, no -s).',
    'Four modal-perfect meanings: must have / should have / could have / may have.',
    'Passive: be + past participle; agent optional.',
    'Intransitive verbs (happen, occur, sleep) cannot be made passive.',
    'Reported-speech back-shift and time/place changes.',
    'Commands → to-infinitive; questions → if/whether or wh- + statement order.',
    'say + (to + person) / tell + person (directly).',
    'Universal-truth exception: present tense may stay in reported speech.'
  ],
  commonMistakes: [
    '"He can to swim" → "He can swim".',
    '"He cans swim" → "He can swim".',
    '"He said that where are you going?" → "He asked where I was going".',
    '"The data is being showed" → "The data is being shown".',
    '"The accident was happened" → "The accident happened" (happen is intransitive — no passive form exists).',
    '"He said me that he would come" → "He told me that he would come".'
  ],

    subtopics: [
      {
        id: "english-modals-voice-narration-modal-perfects",
        title: "Modal perfects",
        summary: "must have left = I am sure he left. should have informed = you did not, but it was advisable. could have helped = it was possible but did…",
        explanation: "must have left = I am sure he left. should have informed = you did not, but it was advisable. could have helped = it was possible but did not happen. may/might have missed = it is possible that he missed. These four patterns are tested repeatedly. Mnemonic: modal + HAVE + PAST PARTICIPLE = past situation viewed through the modal\'s meaning. The modal keeps its MEANING (advice, deduction, possibility); HAVE+PP moves the action to the past.",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-modals-voice-narration-passive-when-and-when-not",
        title: "Passive — when and when not",
        summary: "Prefer passive when the doer is unknown, obvious or deliberately backgrounded. Pure intransitives and many stative verbs resist the passive…",
        explanation: "Prefer passive when the doer is unknown, obvious or deliberately backgrounded. Pure intransitives and many stative verbs resist the passive because they have no object: ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-modals-voice-narration-two-object-verbs-in-the-passive",
        title: "Two-object verbs in the passive",
        summary: "Verbs like give, show, send, lend, teach, tell, offer, pay, sell, write have BOTH a direct object (DO) and an indirect object (IO). Either…",
        explanation: "Verbs like give, show, send, lend, teach, tell, offer, pay, sell, write have BOTH a direct object (DO) and an indirect object (IO). Either can become the passive subject. ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-modals-voice-narration-reported-speech-is-mechanical",
        title: "Reported speech is mechanical",
        summary: "Once the reporting verb is past, the back-shift is automatic. Do not try to preserve the original tense for ",
        explanation: "Once the reporting verb is past, the back-shift is automatic. Do not try to preserve the original tense for ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-modals-voice-narration-commands-questions-and-exclamations-in-r",
        title: "Commands, questions and exclamations in reported form",
        summary: "Commands (imperatives): ",
        explanation: "Commands (imperatives): ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-modals-voice-narration-say-vs-tell",
        title: "say vs tell",
        summary: "SAY + optional ",
        explanation: "SAY + optional ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-modals-voice-narration-link-forward",
        title: "Link forward",
        summary: "Modals and passive forms rest on the verb knowledge from A1. Reported speech re-uses the tense-shift rule already introduced there.…",
        explanation: "Modals and passive forms rest on the verb knowledge from A1. Reported speech re-uses the tense-shift rule already introduced there. Common-error questions (A5) frequently test modal mistakes (can + to, can + ing, must + -s) and passive mistakes (showed vs shown, was happened). B-section vocabulary often uses modal idioms (",
        examples: [],
        shortcuts: [],
        traps: [],
      },
    ],
  relatedTopics: [
    'english-parts-of-speech-and-tenses',
    'english-common-errors',
    'english-sentence-types-errors-transformation'
  ],
  content: true,
  examScope: ['bs17', 'bs16'],
  buildsOn: [
    'english-parts-of-speech-and-tenses',
    'english-pronouns-prepositions-conjunctions'
  ],
  leadsTo: [
    'english-common-errors',
    'english-sentence-types-errors-transformation'
  ],
  usedIn: [
    'english-common-errors',
    'english-sentence-types-errors-transformation',
    'ra-scientific-reporting'
  ]
},
// --------------------------------------------------------------------------
// A5 — Common Errors
// --------------------------------------------------------------------------
{
  id: 'english-common-errors',
  sectionId: 'ENG-01',
  order: 5,
  title: 'Common Errors in English',
  definition:
    'The highest-frequency grammatical and lexical mistakes that appear in FPSC-style papers. They fall into four families: wrong word form, wrong or missing preposition, wrong word order, and wrong comparison or structure.',
  keyFacts: [
    'Adjective versus adverb: real bad → really bad; she sings beautiful → beautifully; he did good → he did well.',
    'Affect (verb = influence) versus Effect (noun = result; rare verb = bring about).',
    'Less (uncountable) versus Fewer (countable).',
    'Different from (not different than); prefer X to Y (not prefer X than Y); senior / junior / superior / inferior to (not than).',
    'Discuss + object (no preposition); marry / be married to (not with); good at (not in); according to (not with).',
    'Despite / in spite of (despite does not take of); comprise (no of in active voice).',
    'Hardly / scarcely / no sooner + had + subject + past participle (inversion).',
    'Its (possessive) ≠ it\'s (it is); your ≠ you\'re; their ≠ they\'re ≠ there.',
    'Double negatives are non-standard in formal writing.',
    'Gerund verbs (enjoy, avoid, suggest, recommend, consider, finish, keep, miss, mind) take -ing, not to-infinitive.',
    'To-infinitive verbs (want, hope, decide, plan, expect, promise, agree, refuse, learn) take to + base, not -ing.',
    'Tricky pairs: lie (intransitive, lie/lay/lain) vs lay (transitive, lay/laid/laid); rise (intransitive) vs raise (transitive); sit (intransitive) vs set (transitive).'
  ],
  explanationSections: [
    {
      heading: 'Four families of error',
      body: 'Form (affect/effect, real/really). Preposition (discuss about, married with, different than). Order (hardly I had). Comparison or structure (prefer X than Y, senior than). Treating the errors as families makes revision efficient and reveals patterns that single lists hide.'
    },
    {
      heading: 'Affect / effect — substitution test',
      body: 'If you can replace the word with "influence" or "change", use the verb affect. If you can replace it with "result" or "outcome", use the noun effect. Mnemonic: AFFECT = Action verb (both start with A); EFFECT = End result (noun). The verb "affect" is used in ~95% of cases; "effect" is almost always the noun. Exception: "to effect change" (formal verb = bring about), which appears rarely and is almost never tested.'
    },
    {
      heading: 'Fixed prepositions and no-preposition verbs',
      body: 'Discuss, enter, resemble, approach and several others take a direct object with no preposition. Married to, good at, different from, according to, senior to are fixed phrases that must be memorised; logic does not reliably predict them. Other fixed prepositions: depend ON, insist ON, believe IN, succeed IN, angry WITH, similar TO, fond OF, afraid OF, interested IN, capable OF, aware OF, accustomed TO, devoted TO, prefer X TO Y.'
    },
    {
      heading: 'Inversion after negative adverbials',
      body: 'When a sentence begins with hardly, scarcely, no sooner, never, rarely, etc., the auxiliary comes before the subject: "Hardly had I reached the station when the train left." Structure: HARDLY + HAD + SUBJECT + PAST PARTICIPLE + WHEN + PAST SIMPLE. For no sooner: NO SOONER + HAD + SUBJECT + PAST PARTICIPLE + THAN + PAST SIMPLE. The diagnostic: adverb followed by ordinary subject-verb order is wrong.'
    },
    {
      heading: 'Gerund vs infinitive verb patterns',
      body: 'GERUND verbs (enjoy, mind, avoid, suggest, recommend, consider, finish, keep, imagine, miss, practice, risk): "I enjoy reading". TO-INFINITIVE verbs (want, would like, hope, decide, plan, expect, promise, agree, refuse, learn, seem, appear, offer): "I want to go". DUAL-MEANING pairs (REMEMBER + -ing = past memory; REMEMBER + to = future act; REGRET + to = formal present; REGRET + -ing = past action; STOP + -ing = cease; STOP + to = pause to do).'
    },
    {
      heading: 'Tricky verb pairs — lie/lay, rise/raise, sit/set',
      body: 'LIE (intransitive, to recline): lie, lay, lain, lying. LAY (transitive, to place): lay, laid, laid, laying. Past of LIE is "lay" (not "lied"); past of LAY is "laid". RISE (intransitive, goes up): rise, rose, risen, rising. RAISE (transitive, lifts something): raise, raised, raised, raising. SET (transitive, places): set, set, set, setting. SIT (intransitive): sit, sat, sat, sitting. The pattern: short-vowel forms (rise, sit, lie) are intransitive; long-vowel forms (raise, set, lay) are transitive.'
    },
    {
      heading: 'Consolidation role of A5',
      body: 'Every common-error item is an application of earlier rules: adjective/adverb (A1), agreement and articles (A2), prepositions and conjunctions (A3), modals and passive (A4). A5 is therefore both a high-yield exam topic and a revision chapter for the whole module. The error list here should be reviewed as a reference sheet before exams — re-read it once and it passes.'
    }
  ],
  examPoints: [
    'Affect (verb) / effect (noun) — substitution test.',
    'Discuss (no preposition); different from; married to; good at; senior to.',
    'Less (uncountable) / fewer (countable).',
    'Hardly had + subject + past participle (inversion).',
    'Despite (no of); comprise (no of in active).',
    'Gerund verbs: enjoy, mind, avoid, suggest, recommend, consider, finish, keep.',
    'To-infinitive verbs: want, hope, decide, plan, expect, promise, agree, refuse.',
    'Tricky pairs: lie (intransitive) vs lay (transitive); rise vs raise; sit vs set.'
  ],
  commonMistakes: [
    '"The weather is real bad" → "… is really bad".',
    '"It will effect you" → "It will affect you".',
    '"He discussed about the issue" → "He discussed the issue".',
    '"He is senior than me" → "He is senior to me".',
    '"Hardly I had reached …" → "Hardly had I reached …".',
    '"Despite of the rain …" → "Despite the rain …".',
    '"The team comprises of five members" → "The team comprises five members".',
    '"He lay down on the bed to sleep" (correct intransitive, past) vs "He laid the book on the table" (correct transitive).'
  ],

    subtopics: [
      {
        id: "english-common-errors-four-families-of-error",
        title: "Four families of error",
        summary: "Form (affect/effect, real/really). Preposition (discuss about, married with, different than). Order (hardly I had). Comparison or structure…",
        explanation: "Form (affect/effect, real/really). Preposition (discuss about, married with, different than). Order (hardly I had). Comparison or structure (prefer X than Y, senior than). Treating the errors as families makes revision efficient and reveals patterns that single lists hide.",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-common-errors-affect-effect-substitution-test",
        title: "Affect / effect — substitution test",
        summary: "If you can replace the word with ",
        explanation: "If you can replace the word with ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-common-errors-fixed-prepositions-and-no-preposition-ve",
        title: "Fixed prepositions and no-preposition verbs",
        summary: "Discuss, enter, resemble, approach and several others take a direct object with no preposition. Married to, good at, different from,…",
        explanation: "Discuss, enter, resemble, approach and several others take a direct object with no preposition. Married to, good at, different from, according to, senior to are fixed phrases that must be memorised; logic does not reliably predict them. Other fixed prepositions: depend ON, insist ON, believe IN, succeed IN, angry WITH, similar TO, fond OF, afraid OF, interested IN, capable OF, aware OF, accustomed TO, devoted TO, prefer X TO Y.",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-common-errors-inversion-after-negative-adverbials",
        title: "Inversion after negative adverbials",
        summary: "When a sentence begins with hardly, scarcely, no sooner, never, rarely, etc., the auxiliary comes before the subject: ",
        explanation: "When a sentence begins with hardly, scarcely, no sooner, never, rarely, etc., the auxiliary comes before the subject: ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-common-errors-gerund-vs-infinitive-verb-patterns",
        title: "Gerund vs infinitive verb patterns",
        summary: "GERUND verbs (enjoy, mind, avoid, suggest, recommend, consider, finish, keep, imagine, miss, practice, risk): ",
        explanation: "GERUND verbs (enjoy, mind, avoid, suggest, recommend, consider, finish, keep, imagine, miss, practice, risk): ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-common-errors-tricky-verb-pairs-lie-lay-rise-raise-sit",
        title: "Tricky verb pairs — lie/lay, rise/raise, sit/set",
        summary: "LIE (intransitive, to recline): lie, lay, lain, lying. LAY (transitive, to place): lay, laid, laid, laying. Past of LIE is ",
        explanation: "LIE (intransitive, to recline): lie, lay, lain, lying. LAY (transitive, to place): lay, laid, laid, laying. Past of LIE is ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-common-errors-consolidation-role-of-a5",
        title: "Consolidation role of A5",
        summary: "Every common-error item is an application of earlier rules: adjective/adverb (A1), agreement and articles (A2), prepositions and…",
        explanation: "Every common-error item is an application of earlier rules: adjective/adverb (A1), agreement and articles (A2), prepositions and conjunctions (A3), modals and passive (A4). A5 is therefore both a high-yield exam topic and a revision chapter for the whole module. The error list here should be reviewed as a reference sheet before exams — re-read it once and it passes.",
        examples: [],
        shortcuts: [],
        traps: [],
      },
    ],
  relatedTopics: [
    'english-parts-of-speech-and-tenses',
    'english-agreement-and-articles',
    'english-pronouns-prepositions-conjunctions',
    'english-modals-voice-narration'
  ],
  content: true,
  examScope: ['bs17', 'bs16'],
  buildsOn: [
    'english-parts-of-speech-and-tenses',
    'english-agreement-and-articles',
    'english-pronouns-prepositions-conjunctions',
    'english-modals-voice-narration'
  ],
  leadsTo: [
    'english-sentence-types-errors-transformation'
  ],
  usedIn: [
    'english-sentence-types-errors-transformation',
    'english-sentence-completion-rearrangement',
    'ra-scientific-reporting',
    'meteo-aviation-products'
  ]
},
// ============================================================================
// ENGLISH — MODULE B: Vocabulary (BS-17) — UPGRADED
// ============================================================================
// --------------------------------------------------------------------------
// B1 — Synonyms, Antonyms & Confusables
// --------------------------------------------------------------------------
{
  id: 'english-synonyms-antonyms-confusables',
  sectionId: 'ENG-02',
  order: 1,
  title: 'Synonyms, Antonyms & Confusables',
  definition:
    'Synonyms are words of close meaning; antonyms are words of opposite meaning. Confusables are pairs that look or sound alike but differ in meaning or grammatical role (affect/effect, principal/principle, stationary/stationery). FPSC tests them because candidates confuse them — the substitution test reliably picks the correct one.',
  keyFacts: [
    'Synonym questions ask for the CLOSEST meaning; antonym questions ask for the MOST OPPOSITE meaning — substitution and negation work in both cases',
    'Substitution method: insert each option into the original sentence; the one that keeps the sentence grammatical and logical is correct',
    'Antonym method: mentally negate the original word\'s meaning, then match — if the sentence says "abundant", the antonym is "scarce", not "rare" (a weak antonym)',
    'Context can shift the best synonym: turbulent WEATHER ≈ chaotic/stormy; turbulent MARKET ≈ volatile/unstable',
    '10 most-tested confusables — learn as rigid contrast pairs (verb vs noun, X means A, Z means B):',
    '  1. AFFECT (verb, to influence) / EFFECT (noun, result; rare verb = bring about)',
    '  2. ADAPT (adjust, v.) / ADOPT (take up, v.) / ADEPT (skilled, adj.)',
    '  3. ALLUDE (refer indirectly) / ELUDE (escape/avoid)',
    '  4. PRINCIPAL (main, adj.; head of school, n.) / PRINCIPLE (rule or belief, n.)',
    '  5. STATIONARY (not moving, adj.) / STATIONERY (writing materials, n.)',
    '  6. COUNSEL (advice, n.; to advise, v.) / COUNCIL (governing body, n.)',
    '  7. COMPLEMENT (complete, v./n.) / COMPLIMENT (praise, v./n.)',
    '  8. DISCRETE (separate, distinct, adj.) / DISCREET (careful, tactful, adj.)',
    '  9. ELICIT (draw out, v.) / ILLICIT (illegal, adj.)',
    '  10. PRECEDE (come before) / PROCEED (go forward)',
    'BS-17 papers lean on weather/climate/environment vocabulary: humid/damp/arid, abate/intensify, mitigate/aggravate/exacerbate, empirical, hypothesis, correlation vs causation',
    'Mnemonic devices for confusables: AFFECT = Action verb (A-A); EFFECT = End result (E-E); PRINCIPAL ends in -pal (like a PAL you trust — important); STATIONARY contains "Y" because it stays "Y" (does not move); PRINCIPLE ends in -ple (like a RULE)',
    'Antonym strength matters: STRONG antonyms (hot/cold, alive/dead) are safer than WEAK antonyms (hot/warm); FPSC expects strong opposites'
  ],
  explanationSections: [
    {
      heading: 'Substitution beats intuition — the universal method',
      body: 'When two options look similar, insert each one into the original sentence. The option that keeps the sentence grammatical, logical, and natural is almost always correct. Pure "feeling" of similarity is the most common source of error. Worked example: "His argument was so CONVOLUTED that listeners were lost." Does (1) suggest a complex/tangled idea, not a logical one. Test: "His argument was so complex that…" ✅; "His argument was so clear that…" ❌ (clear + would produce "was lost"); "His argument was so confused that…" ✅ (also tangled). Choose complex. The substitution method works even for words you\'ve never encountered because it tests GRAMMAR and LOGIC, not vocabulary recall.'
    },
    {
      heading: 'Antonyms — negation first, then match',
      body: 'Antonym questions require you to find the STRONGEST opposite. The method: (1) Identify the core meaning of the original word ("abundant" = plentiful, much). (2) Negate it ("not plentiful, scarce"). (3) Choose the option that best matches the negated meaning. Common error: choosing a WEAK antonym (rare is less than abundant, but SCARCE is the strong opposite). Strong antonyms are safer in FPSC. Practice: HOT vs COLD (strong), HOT vs WARM (weak); BIG vs MINUS (strong), BIG vs SMALL (stronger than LITTLE); INCREASE vs DECREASE (strong), INCREASE vs LESSEN (weaker).'
    },
    {
      heading: 'Confusables — the substitution test for each pair',
      body: 'For each confusable pair, run the same test — substitute one, then the other, into a sample sentence. AFFECT/EFFECT: "The rain will AFFECT the harvest" (verb needed: influence); "The rain\'s EFFECT on the harvest was clear" (noun needed: outcome). PRINCIPAL/PRINCIPLE: "The PRINCIPAL of the school" (head person); "the PRINCIPLE of justice" (rule). STATIONARY/STATIONERY: "a STATIONARY object" (not moving); "STATIONERY for writing" (paper). COMPLEMENT/COMPLIMENT: "colors that complement the vegetables" (complete); "a compliment on the dish" (praise). ELICIT/ILLICIT: "elicit a response" (draw out); "illicit trade" (illegal). Mnemonic: STATIONARY contains "Y" because it stays "Y" — does not move.'
    },
    {
      heading: 'Domain vocabulary — the BS-17 high-yield list',
      body: 'BS-17 papers disproportionately test weather, climate, and environmental vocabulary. Memorize these in pairs: ABATE (subside, decrease) / INTENSIFY (grow stronger); MITIGATE (make less severe) / AGGRAVATE (make worse) / EXACERBATE (formal: make worse); HUMID (moist air) / ARID (dry); EMPIRICAL (based on observation/evidence) / THEORETICAL (based on theory); CORRELATION (statistical association) / CAUSATION (A causes B — the much stronger claim). Words like precipitation, condensation, evaporation, atmosphere, monsoon, drought, and forecasting appear repeatedly. Knowing these in a sentence context is far more useful than memorizing long general synonym lists.'
    },
    {
      heading: 'How B1 connects to upcoming topics',
      body: 'B1 sets the foundation for the rest of Module B and the C-section. B2 (Idioms & Phrases) reuses the substitution method for unfamiliar idioms. B3 (Word Formation & Contextual Vocabulary) reuses context substitution for unknown technical words. C-section (Sentence Completion & Rearrangement) depends on this vocabulary for fill-in-the-blank items. The confusables list overlaps with Module A\'s common-error chapter (affect/effect, principal/principle appear in both) — once mastered here, you\'ve covered both modules. The domain vocabulary list overlaps with meteorology, environment, and research-analysis topics elsewhere in the subject bank.'
    }
  ],
  examPoints: [
    'Substitution test: insert each option into the original sentence — choose the one that keeps grammar + logic',
    'Antonym test: negate the original, then match the strong opposite (not a weak one)',
    'Top 10 confusables must be memorized as rigid contrasts, not reasoned through',
    'BS-17 weather/climate/environment vocabulary is over-represented',
    'Mnemonics for confusables: AFFECT (Action verb, A-A), EFFECT (End result, E-E), PRINCIPAL (-pal, main), STATIONARY (contains Y, stays Y)'
  ],
  commonMistakes: [
    {
      mistake: 'It will effect the results of the experiment.',
      correction: 'It will AFFECT the results of the experiment.',
      explanation: 'Substitution test: "influence" can replace the slot → verb needed → AFFECT. The noun "effect" cannot take an object and would yield "It will effect…" as ungrammatical.'
    },
    {
      mistake: 'The principal of justice is fundamental.',
      correction: 'The PRINCIPLE of justice is fundamental.',
      explanation: '"Justice" is a rule/belief, not a person or organization. PRINCIPLE = rule/belief; PRINCIPAL = main person or thing (or head of school). Mnemonic: PRINCIPAL ends in -pal (a PAL); PRINCIPLE ends in -ple (a RULE).'
    },
    {
      mistake: 'I need to buy some stationary for my office.',
      correction: 'I need to buy some STATIONERY for my office.',
      explanation: '"Office supplies" are paper, pens, etc. STATIONERY = writing materials (noun); STATIONARY = not moving (adjective). Mnemonic: STATIONARY contains a Y, like the shape of a static object standing still.'
    },
    {
      mistake: 'She tried to adopt to the new climate quickly.',
      correction: 'She tried to ADAPT to the new climate quickly.',
      explanation: 'ADAPT = adjust to new conditions; ADOPT = take up something new (a method, a child, an idea). The climate is something she adjusts to, not takes up.'
    },
    {
      mistake: 'The colors of the painting compliment the vegetables.',
      correction: 'The colors of the painting COMPLEMENT the vegetables.',
      explanation: 'COMPLEMENT = complete (go well together, supplement); COMPLIMENT = praise (say something nice). Paint goes well with vegetables; it doesn\'t praise them. The two words differ by an "i" but mean completely different things.'
    }
  ],

    subtopics: [
      {
        id: "english-synonyms-antonyms-confusables-substitution-beats-intuition-the-univers",
        title: "Substitution beats intuition — the universal method",
        summary: "When two options look similar, insert each one into the original sentence. The option that keeps the sentence grammatical, logical, and…",
        explanation: "When two options look similar, insert each one into the original sentence. The option that keeps the sentence grammatical, logical, and natural is almost always correct. Pure ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-synonyms-antonyms-confusables-antonyms-negation-first-then-match",
        title: "Antonyms — negation first, then match",
        summary: "Antonym questions require you to find the STRONGEST opposite. The method: (1) Identify the core meaning of the original word (",
        explanation: "Antonym questions require you to find the STRONGEST opposite. The method: (1) Identify the core meaning of the original word (",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-synonyms-antonyms-confusables-confusables-the-substitution-test-for-ea",
        title: "Confusables — the substitution test for each pair",
        summary: "For each confusable pair, run the same test — substitute one, then the other, into a sample sentence. AFFECT/EFFECT: ",
        explanation: "For each confusable pair, run the same test — substitute one, then the other, into a sample sentence. AFFECT/EFFECT: ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-synonyms-antonyms-confusables-domain-vocabulary-the-bs-17-high-yield-l",
        title: "Domain vocabulary — the BS-17 high-yield list",
        summary: "BS-17 papers disproportionately test weather, climate, and environmental vocabulary. Memorize these in pairs: ABATE (subside, decrease) /…",
        explanation: "BS-17 papers disproportionately test weather, climate, and environmental vocabulary. Memorize these in pairs: ABATE (subside, decrease) / INTENSIFY (grow stronger); MITIGATE (make less severe) / AGGRAVATE (make worse) / EXACERBATE (formal: make worse); HUMID (moist air) / ARID (dry); EMPIRICAL (based on observation/evidence) / THEORETICAL (based on theory); CORRELATION (statistical association) / CAUSATION (A causes B — the much stronger claim). Words like precipitation, condensation, evaporation, atmosphere, monsoon, drought, and forecasting appear repeatedly. Knowing these in a sentence context is far more useful than memorizing long general synonym lists.",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-synonyms-antonyms-confusables-how-b1-connects-to-upcoming-topics",
        title: "How B1 connects to upcoming topics",
        summary: "B1 sets the foundation for the rest of Module B and the C-section. B2 (Idioms & Phrases) reuses the substitution method for unfamiliar…",
        explanation: "B1 sets the foundation for the rest of Module B and the C-section. B2 (Idioms & Phrases) reuses the substitution method for unfamiliar idioms. B3 (Word Formation & Contextual Vocabulary) reuses context substitution for unknown technical words. C-section (Sentence Completion & Rearrangement) depends on this vocabulary for fill-in-the-blank items. The confusables list overlaps with Module A\'s common-error chapter (affect/effect, principal/principle appear in both) — once mastered here, you\'ve covered both modules. The domain vocabulary list overlaps with meteorology, environment, and research-analysis topics elsewhere in the subject bank.",
        examples: [],
        shortcuts: [],
        traps: [],
      },
    ],
  relatedTopics: [
    'english-idioms-and-phrases',
    'english-word-formation-and-context',
    'english-common-errors'
  ],
  content: true,
  postRestriction: 'bs17',
  examScope: ['bs17'],
  buildsOn: [],
  leadsTo: [
    'english-idioms-and-phrases',
    'english-word-formation-and-context'
  ],
  usedIn: [
    'english-word-formation-and-context',
    'english-sentence-completion-rearrangement'
  ]
},
// --------------------------------------------------------------------------
// B2 — Idioms & Phrases (UPGRADED)
// --------------------------------------------------------------------------
{
  id: 'english-idioms-and-phrases',
  sectionId: 'ENG-02',
  order: 2,
  title: 'Idioms & Phrases',
  definition:
    'Idioms are fixed multi-word expressions whose meaning cannot be deduced from the individual words (bite the bullet has nothing to do with bullets). They must be memorized as complete units, ideally inside a full sentence that captures their situation, grammar, and meaning.',
  keyFacts: [
    'Idioms are ARBITRARY: literal interpretation is wrong; learn each one as a fixed unit',
    'The memory method: every idiom should be stored with a SAMPLE sentence (situation + grammar + meaning together)',
    'High-priority idioms with sample sentences (memorise each with its sentence):',
    '  • BITE THE BULLET — "She bit the bullet and apologized." = accept something unpleasant bravely',
    '  • BREAK THE ICE — "He told a joke to break the ice at the meeting." = start conversation, ease tension',
    '  • ONCE IN A BLUE MOON — "We meet once in a blue moon." = very rarely',
    '  • BEAT AROUND THE BUSH — "Stop beating around the bush; tell me the truth." = avoid the main point',
    '  • HIT THE NAIL ON THE HEAD — "Your analysis hit the nail on the head." = be exactly right',
    '  • GET OUT OF HAND — "The protest got out of hand." = become uncontrollable',
    '  • ADD FUEL TO THE FIRE — "His apology added fuel to the fire." = make a bad situation worse',
    '  • EVERY CLOUD HAS A SILVER LINING — "I lost my job but found a better one; every cloud has a silver lining." = something good even in bad events',
    '  • SEE EYE TO EYE — "They rarely see eye to eye on policy." = agree',
    '  • KILL TWO BIRDS WITH ONE STONE — "I killed two birds with one stone by shopping on the way home." = achieve two aims with one action',
    '  • BURY THE HATCHET — "After years of conflict, they buried the hatchet." = make peace',
    '  • UNDER THE WEATHER — "I\'m feeling under the weather today." = slightly ill',
    '  • A BLESSING IN DISGUISE — "The layoff was a blessing in disguise." = something that seemed bad but turns out good',
    '  • BURN THE MIDNIGHT OIL — "She burned the midnight oil to finish her thesis." = work late into the night',
    '  • SPILL THE BEANS / LET THE CAT OUT OF THE BAG — both = reveal a secret; "Who spilled the beans?" / "Who let the cat out of the bag?"',
    '  • THE BALL IS IN YOUR COURT — "I\'ve made my offer; the ball is in your court." = it is your turn to act',
    '  • COST AN ARM AND A LEG — "That car cost an arm and a leg." = be very expensive',
    '  • PIECE OF CAKE — "The exam was a piece of cake." = very easy',
    '  • ON CLOUD NINE — "After winning, she was on cloud nine." = extremely happy',
    '  • A RED HERRING — "The detective ignored the red herring and found the real clue." = something that distracts from the real issue',
    'NEAR-SYNONYM IDIOMS differ in subtle ways: spill the beans vs let the cat out of the bag (same meaning, both reveal secrets — modern usage treats them as interchangeable); bite the bullet vs face the music (both mean confront difficulty, but bite the bullet = accept bravely, face the music = accept consequences)',
    'CONTEXT DISAMBIGUATION: when an idiom appears in a sentence, use surrounding grammar and situation to eliminate options that cannot fit',
    'Common exam trap: idiom + literal option — the test contains a literal meaning and the figurative one; always choose the figurative meaning in formal exam contexts'
  ],
  explanationSections: [
    {
      heading: 'Idioms are arbitrary — memorise in sentences',
      body: 'Unlike many vocabulary items, idioms cannot be reasoned out from the words themselves. "Bite the bullet" has nothing to do with biting or bullets — it means to accept something unpleasant bravely. The only reliable method is to learn each one as a fixed unit inside a full sentence. A sentence supplies three things at once: SITUATION (when is this idiom appropriate?), grammar (what part of speech fits?), and meaning (what does it actually convey?). "He told a joke to break the ice at the meeting" is more durable than "break the ice = start a conversation." Pure definitions are forgotten faster than situational sentences.'
    },
    {
      heading: 'Elimination strategy for unknown idioms',
      body: 'If you encounter an idiom you have never seen, do not panic. Read the WHOLE sentence and eliminate options that cannot fit the context. Worked example: "After months of argument they finally decided to bury the hatchet." Options: (1) make peace (✅ matches context — argument is ending), (2) dig a hole in the garden (❌ nonsensical in context), (3) start fighting more (❌ opposite meaning). Choose (1). The principle: when in doubt, use surrounding grammar and situation to discard obviously impossible options. Even unknown idioms can be answered by elimination if you read the full sentence carefully.'
    },
    {
      heading: 'Near-synonym idioms — the confusion list',
      body: 'Some idioms look similar but have subtle differences. (a) Spill the beans vs let the cat out of the bag — both = reveal a secret. Modern usage treats them as interchangeable; FPSC papers do not test the difference. (b) Bite the bullet vs face the music — both = confront difficulty. Bite the bullet = accept bravely (voluntary); face the music = accept consequences (involuntary). "He bit the bullet and had the surgery" vs "He had to face the music after the scandal." (c) See eye to eye vs agree — same meaning; idiom more emphatic. (d) Burn the midnight oil vs work hard — same meaning; idiom specifies late-night effort.'
    },
    {
      heading: 'Common idiom traps in FPSC papers',
      body: 'Three traps appear frequently. (1) Literal vs idiomatic — the test sometimes includes the literal meaning as an option. Always choose the IDIOMATIC meaning in formal exam contexts. (2) Partial idiom — test gives an idiom partially and asks you to complete it. Memorise the EXACT phrase, not just the gist. "Bury the hatchet" — not "bury the axe". (3) Idiom in negative context — "He did NOT see eye to eye with me" = DISAGREEMENT. The negation flips the idiom\'s meaning; don\'t blindly pick the positive interpretation.'
    },
    {
      heading: 'How B2 connects to upcoming topics',
      body: 'Idioms show up not only as pure vocabulary items (B2 MCQs) but also embedded in longer sentence-completion and sentence-insertion questions (C-section). The same contextual-elimination skill is applied in B3 (Word Formation & Contextual Vocabulary). C-section sentence-rearrangement questions often include idiom chunks that must be placed correctly. Master the high-priority list with sample sentences and you\'ll recognise idioms in any context they appear. The substitution and elimination methods are also useful in research-analysis passages where idiomatic phrases sometimes appear in quoted speech.'
    }
  ],
  examPoints: [
    'Memorise the high-priority idioms with sample sentences (situation + grammar + meaning)',
    'Use sentence context to eliminate impossible options for unknown idioms',
    'Choose IDIOMATIC meaning, not literal, in formal exam contexts',
    'Beware of partial idioms; memorise exact phrasing',
    'Negation flips idiom meaning — "did NOT see eye to eye" = DISAGREE',
    'Near-synonym idioms (spill the beans / let the cat out of the bag) are interchangeable in modern usage'
  ],
  commonMistakes: [
    {
      mistake: 'Taking an idiom literally — "burn the midnight oil" interpreted as a fire hazard.',
      correction: 'Burn the midnight oil = work late into the night (figurative meaning).',
      explanation: 'Idioms are arbitrary; literal interpretation is always wrong. "Midnight oil" is metaphorical for late-night effort, not literal burning. Choose the figurative meaning.'
    },
    {
      mistake: 'Confusing spill the beans with let the cat out of the bag — assuming they differ in meaning.',
      correction: 'Both mean "reveal a secret". Modern usage treats them as interchangeable.',
      explanation: 'Although the imagery differs (beans vs cat), both idioms have the same practical meaning. FPSC papers do not test this distinction. Memorise both with the same meaning.'
    },
    {
      mistake: 'Memorising bare definitions without sentences — "bury the hatchet = make peace" without context.',
      correction: 'Memorise with a sentence: "After years of conflict, they buried the hatchet."',
      explanation: 'Bare definitions are forgotten faster. Sentences supply situation + grammar + meaning together. The sentence "After years of conflict, they buried the hatchet" is more memorable than the bare definition.'
    },
    {
      mistake: 'Ignoring context clues when the idiom is unfamiliar.',
      correction: 'Always read the full sentence; eliminate options that cannot fit the grammar or situation.',
      explanation: 'Context elimination is the universal fallback. "After months of argument they finally decided to bury the hatchet" — eliminate any option that suggests continuing the argument. Choose the one that ends it.'
    },
    {
      mistake: 'Missing negation — interpreting "They did not see eye to eye" as agreement.',
      correction: 'Did not see eye to eye = DISAGREED. Negation reverses the idiom\'s positive meaning.',
      explanation: 'Many test items flip the idiom with negation. Read for "did not", "never", "no longer" — they invert the meaning.'
    }
  ],

    subtopics: [
      {
        id: "english-idioms-and-phrases-idioms-are-arbitrary-memorise-in-sentenc",
        title: "Idioms are arbitrary — memorise in sentences",
        summary: "Unlike many vocabulary items, idioms cannot be reasoned out from the words themselves. ",
        explanation: "Unlike many vocabulary items, idioms cannot be reasoned out from the words themselves. ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-idioms-and-phrases-elimination-strategy-for-unknown-idioms",
        title: "Elimination strategy for unknown idioms",
        summary: "If you encounter an idiom you have never seen, do not panic. Read the WHOLE sentence and eliminate options that cannot fit the context.…",
        explanation: "If you encounter an idiom you have never seen, do not panic. Read the WHOLE sentence and eliminate options that cannot fit the context. Worked example: ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-idioms-and-phrases-near-synonym-idioms-the-confusion-list",
        title: "Near-synonym idioms — the confusion list",
        summary: "Some idioms look similar but have subtle differences. (a) Spill the beans vs let the cat out of the bag — both = reveal a secret. Modern…",
        explanation: "Some idioms look similar but have subtle differences. (a) Spill the beans vs let the cat out of the bag — both = reveal a secret. Modern usage treats them as interchangeable; FPSC papers do not test the difference. (b) Bite the bullet vs face the music — both = confront difficulty. Bite the bullet = accept bravely (voluntary); face the music = accept consequences (involuntary). ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-idioms-and-phrases-common-idiom-traps-in-fpsc-papers",
        title: "Common idiom traps in FPSC papers",
        summary: "Three traps appear frequently. (1) Literal vs idiomatic — the test sometimes includes the literal meaning as an option. Always choose the…",
        explanation: "Three traps appear frequently. (1) Literal vs idiomatic — the test sometimes includes the literal meaning as an option. Always choose the IDIOMATIC meaning in formal exam contexts. (2) Partial idiom — test gives an idiom partially and asks you to complete it. Memorise the EXACT phrase, not just the gist. ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-idioms-and-phrases-how-b2-connects-to-upcoming-topics",
        title: "How B2 connects to upcoming topics",
        summary: "Idioms show up not only as pure vocabulary items (B2 MCQs) but also embedded in longer sentence-completion and sentence-insertion questions…",
        explanation: "Idioms show up not only as pure vocabulary items (B2 MCQs) but also embedded in longer sentence-completion and sentence-insertion questions (C-section). The same contextual-elimination skill is applied in B3 (Word Formation & Contextual Vocabulary). C-section sentence-rearrangement questions often include idiom chunks that must be placed correctly. Master the high-priority list with sample sentences and you\'ll recognise idioms in any context they appear. The substitution and elimination methods are also useful in research-analysis passages where idiomatic phrases sometimes appear in quoted speech.",
        examples: [],
        shortcuts: [],
        traps: [],
      },
    ],
  relatedTopics: [
    'english-synonyms-antonyms-confusables',
    'english-word-formation-and-context'
  ],
  content: true,
  postRestriction: 'bs17',
  examScope: ['bs17'],
  buildsOn: ['english-synonyms-antonyms-confusables'],
  leadsTo: ['english-word-formation-and-context'],
  usedIn: ['english-sentence-completion-rearrangement']
},
// --------------------------------------------------------------------------
// B3 — Word Formation & Contextual Vocabulary (UPGRADED)
// --------------------------------------------------------------------------
{
  id: 'english-word-formation-and-context',
  sectionId: 'ENG-02',
  order: 3,
  title: 'Word Formation & Contextual Vocabulary',
  definition:
    'Word formation builds new words from prefixes (added to start), suffixes (added to end), and roots (the base meaning). Contextual vocabulary tests the meaning a word carries in a particular sentence, which may differ from its most general dictionary sense. Together, these two skills let you decode words you\'ve never seen.',
  keyFacts: [
    'PREFIX = added to start of a word (re-, un-, pre-); SUFFIX = added to end (-tion, -able, -ity); ROOT = the core meaning-bearing part (hydro, bio, graph)',
    'High-frequency prefixes with examples: anti- (against — antibiotic, antidote), auto- (self — autobiography, automatic), bio- (life — biology, biodegradable), de- (reverse — decompose, deforest), dis- (not/opposite — disagree, disappear), hydro- (water — hydrography, dehydrate), inter- (between — international, intervene), pre- (before — predict, preview), re- (again — rewrite, revise), sub- (under — submarine, subtract), trans- (across — transport, transmit), un- (not — unhappy, unsustainable)',
    'High-frequency suffixes: -tion/-sion (action/state — prediction, conclusion), -ment (result — government, measurement), -ity/-ty (quality — humidity, intensity), -ology (study of — meteorology, biology), -able/-ible (capable of — readable, possible), -ous (full of — humid, dangerous), -ive (tending to — intensive, productive), -ful/-less (with/without — hopeful, hopeless), -ize/-ise (make/become — humidify, modernise), -ic (relating to — scientific, climatic), -al (relating to — environmental, agricultural)',
    'Useful roots with examples: aqua/hydr (water — aquarium, hydrate), bio (life — biology, antibiotic), geo (earth — geography, geology), graph (write — autobiography, photograph), meter (measure — thermometer, barometer), photo (light — photosynthesis, photograph), therm (heat — thermal, thermometer), sphere (ball/globe — atmosphere, hemisphere), aero (air — aeroplane, aerosol), chrono (time — chronology, synchronize)',
    'Word formation example: "deforestation" = de- (reverse) + forest + -ation (action) = the action of reversing forest cover; "unsustainability" = un- (not) + sustain + -able (capable of) + -ility (quality) = the quality of not being sustainable',
    'Contextual strategy: when a word is unknown, replace it with each option in turn; the option that preserves BOTH grammar AND sense is correct',
    'Grammar check matters: if the blank needs a NOUN, only noun-form options work; if it needs an ADJECTIVE, only adjective options work — grammar alone often eliminates 2-3 options',
    'Academic and scientific vocabulary is over-represented in BS-17 papers; word-formation knowledge is especially useful there',
    'Common trap: scientific-looking options that don\'t fit the CONTEXT — a long technical word isn\'t correct just because it looks impressive'
  ],
  explanationSections: [
    {
      heading: 'Word formation as a free mark source',
      body: 'Even when you have never seen a particular word, its parts often reveal the meaning. Worked examples: HYDROLOGY = hydro- (water) + -ology (study of) = the study of water. UNSUSTAINABILITY = un- (not) + sustain (continue) + -able (capable of) + -ility (quality) = the quality of not being sustainable. ANTIBIOTIC = anti- (against) + bio (life) + -tic (relating to) = against life (of the bacteria). A modest list of prefixes (anti-, auto-, bio-, de-, dis-, hydro-, inter-, pre-, re-, sub-, trans-, un-), suffixes (-tion, -ment, -ity, -ology, -able, -ous, -ive, -ful, -less), and roots (aqua, bio, geo, graph, meter, photo, therm, sphere) unlocks hundreds of academic terms. This skill is especially valuable for scientific and environmental vocabulary that appears repeatedly in BS-17 papers.'
    },
    {
      heading: 'Context substitution is the universal fallback',
      body: 'When formation does not help, insert each answer choice into the original sentence. Worked example: "Her argument was so CONVOLUTED that colleagues were confused." Options: (1) complex, (2) brief, (3) clear, (4) simple. Test each: "Her argument was so complex that…" ✅ (keeps meaning — complex + confused is logical); "Her argument was so brief that…" ❌ (brief + confused doesn\'t logically cohere); "Her argument was so clear that…" ❌ (clear + confused is contradictory); "Her argument was so simple that…" ❌ (simple + confused is weak). Choose complex. This method works even for words you\'ve never encountered because it tests GRAMMAR and LOGIC, not vocabulary recall.'
    },
    {
      heading: 'Grammar check — the half-option technique',
      body: 'Before choosing a word, check what GRAMMATICAL FORM the blank requires. If the blank is "The ____ was ________", the first blank needs a singular noun or 3rd-person singular verb; the second blank needs an adjective or past participle. This eliminates 2-3 options immediately without knowing any vocabulary. Worked example: "The research produced surprising ____" — only noun options fit; eliminate verbs, adjectives, adverbs. "The data is highly ____" — only adjective options fit; eliminate nouns, verbs. Grammar + context together usually narrow the choice to one option.'
    },
    {
      heading: 'Scientific vocabulary — the BS-19 pre-baked list',
      body: 'BS-19 papers lean on academic and scientific vocabulary. Words formed from the listed prefixes/suffixes/roots dominate: meteorology, climatology, hydrology (study of weather/climate/water); atmospheric, environmental, agricultural, sustainable (relating to environments/farming); condensation, precipitation, evaporation (water cycle/transitions); hydrograph, barometer, thermometer, seismograph (instruments that write/measure something); biodegradable, sustainable, intensive (qualities of systems). Knowing these in context — for example, "atmospheric" means relating to the atmosphere, "meteorology" means study of weather — saves marks without rote memorisation of definitions.'
    },
    {
      heading: 'How B3 connects to upcoming topics',
      body: 'Word-formation knowledge supports synonym/antonym questions (B1) and sentence-completion items (C-section). Contextual substitution is the same skill used for confusables (B1) and idioms (B2). The same scientific vocabulary reappears in reading passages and in cross-subject topics elsewhere in the bank: env-international-climate-policy, env-ozone-depletion, meteo-pakistan-nccp, and ra-scientific-reporting all use the same technical vocabulary. Master the prefix/suffix/root lists once and they unlock vocabulary across English, environment, and meteorology — efficient cross-subject study.'
    }
  ],
  examPoints: [
    'Master the prefix list (12 prefixes), suffix list (10 suffixes), and root list (10 roots)',
    'When a word is unknown, try FORMATION first (decompose the word), then CONTEXT SUBSTITUTION',
    'GRAMMAR CHECK: noun blanks need nouns, adjective blanks need adjectives — eliminates 2-3 options',
    'Scientific and academic vocabulary is over-represented in BS-19 papers',
    'Don\'t choose a scientific-looking option just because it looks impressive — context must also fit'
  ],
  commonMistakes: [
    {
      mistake: 'Misreading the force of a negative prefix — choosing "sustainable" when the sentence calls for unsustainable.',
      correction: 'Check negative prefixes carefully: un-, dis-, de-, non-, anti-, counter- all invert meaning.',
      explanation: 'Negative prefixes flip the meaning of the base word. UN- = not (unhappy, unsustainable); DIS- = opposite of (disagree, dislike); DE- = reverse (decompose, deforest); NON- = not (nonprofit, nonviolent); ANTI- = against (antibody, antisocial). All invert meaning.'
    },
    {
      mistake: 'Choosing a contextually impossible option because it looks scientific.',
      correction: 'Always test the option in context: "Her ____ affect his parents" — only verb forms fit.',
      explanation: 'A long technical word isn\'t right just because it looks impressive. The sentence "The data was ____ by the new instrument" requires a past participle (verb form), not an adjective or noun — even a technical-looking option is wrong if the grammar doesn\'t fit.'
    },
    {
      mistake: 'Ignoring the grammar of the blank when selecting an answer.',
      correction: 'Identify the part of speech the blank requires BEFORE looking at the options.',
      explanation: 'Grammar check eliminates 2-3 options immediately. "The research is ____" requires an adjective or participle; "The research ____ the data" requires a verb. Skipping the grammar check is the most common source of error in word-formation questions.'
    },
    {
      mistake: 'Confusing -able and -ible — "responsable" instead of "responsible".',
      correction: 'Most -ible words are from Latin roots (possible, visible, responsible); most -able words are English-rooted (readable, washable). Memorise exceptions.',
      explanation: 'Common -IBLE words: possible, responsible, visible, sensible, flexible, legible, comprehensible, incredible. Common -ABLE words: readable, washable, breakable, likeable, manageable, comfortable, suitable, valuable, available, considerable. When in doubt, prefer -able (the default English suffix).'
    }
  ],

    subtopics: [
      {
        id: "english-word-formation-and-context-word-formation-as-a-free-mark-source",
        title: "Word formation as a free mark source",
        summary: "Even when you have never seen a particular word, its parts often reveal the meaning. Worked examples: HYDROLOGY = hydro- (water) + -ology…",
        explanation: "Even when you have never seen a particular word, its parts often reveal the meaning. Worked examples: HYDROLOGY = hydro- (water) + -ology (study of) = the study of water. UNSUSTAINABILITY = un- (not) + sustain (continue) + -able (capable of) + -ility (quality) = the quality of not being sustainable. ANTIBIOTIC = anti- (against) + bio (life) + -tic (relating to) = against life (of the bacteria). A modest list of prefixes (anti-, auto-, bio-, de-, dis-, hydro-, inter-, pre-, re-, sub-, trans-, un-), suffixes (-tion, -ment, -ity, -ology, -able, -ous, -ive, -ful, -less), and roots (aqua, bio, geo, graph, meter, photo, therm, sphere) unlocks hundreds of academic terms. This skill is especially valuable for scientific and environmental vocabulary that appears repeatedly in BS-17 papers.",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-word-formation-and-context-context-substitution-is-the-universal-fa",
        title: "Context substitution is the universal fallback",
        summary: "When formation does not help, insert each answer choice into the original sentence. Worked example: ",
        explanation: "When formation does not help, insert each answer choice into the original sentence. Worked example: ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-word-formation-and-context-grammar-check-the-half-option-technique",
        title: "Grammar check — the half-option technique",
        summary: "Before choosing a word, check what GRAMMATICAL FORM the blank requires. If the blank is ",
        explanation: "Before choosing a word, check what GRAMMATICAL FORM the blank requires. If the blank is ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-word-formation-and-context-scientific-vocabulary-the-bs-19-pre-bake",
        title: "Scientific vocabulary — the BS-19 pre-baked list",
        summary: "BS-19 papers lean on academic and scientific vocabulary. Words formed from the listed prefixes/suffixes/roots dominate: meteorology,…",
        explanation: "BS-19 papers lean on academic and scientific vocabulary. Words formed from the listed prefixes/suffixes/roots dominate: meteorology, climatology, hydrology (study of weather/climate/water); atmospheric, environmental, agricultural, sustainable (relating to environments/farming); condensation, precipitation, evaporation (water cycle/transitions); hydrograph, barometer, thermometer, seismograph (instruments that write/measure something); biodegradable, sustainable, intensive (qualities of systems). Knowing these in context — for example, ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-word-formation-and-context-how-b3-connects-to-upcoming-topics",
        title: "How B3 connects to upcoming topics",
        summary: "Word-formation knowledge supports synonym/antonym questions (B1) and sentence-completion items (C-section). Contextual substitution is the…",
        explanation: "Word-formation knowledge supports synonym/antonym questions (B1) and sentence-completion items (C-section). Contextual substitution is the same skill used for confusables (B1) and idioms (B2). The same scientific vocabulary reappears in reading passages and in cross-subject topics elsewhere in the bank: env-international-climate-policy, env-ozone-depletion, meteo-pakistan-nccp, and ra-scientific-reporting all use the same technical vocabulary. Master the prefix/suffix/root lists once and they unlock vocabulary across English, environment, and meteorology — efficient cross-subject study.",
        examples: [],
        shortcuts: [],
        traps: [],
      },
    ],
  relatedTopics: [
    'english-synonyms-antonyms-confusables',
    'english-idioms-and-phrases'
  ],
  content: true,
  postRestriction: 'bs17',
  examScope: ['bs17'],
  buildsOn: [
    'english-synonyms-antonyms-confusables',
    'english-idioms-and-phrases'
  ],
  leadsTo: [],
  usedIn: [
    'english-sentence-completion-rearrangement',
    'ra-scientific-reporting',
    'env-international-climate-policy',
    'env-ozone-depletion',
    'meteo-pakistan-nccp'
  ]
},
// ============================================================================
// ENGLISH — MODULE C: Sentence Structuring (UPGRADED v2)
// ============================================================================

// --------------------------------------------------------------------------
// C1 — Building Blocks: Words, Phrases, Clauses & Sentences
// --------------------------------------------------------------------------
{
  id: 'english-sentence-building-blocks',
  sectionId: 'ENG-03',
  order: 1,
  title: 'Building Blocks: Words, Phrases, Clauses & Sentences',
  definition:
    'Sentences are constructed from a four-level hierarchy: WORDS combine into PHRASES, phrases combine into CLAUSES, and clauses combine into SENTENCES. The single decisive diagnostic is the phrase-vs-clause test — does the unit have both a SUBJECT and a FINITE VERB? Master this one test and every later construction error — fragment, run-on, comma splice, dangling modifier — becomes mechanical to diagnose and fix.',

  keyFacts: [
    'FOUR-LEVEL HIERARCHY: Word → Phrase → Clause → Sentence. Each level adds a structural feature (meaning → group → subject+verb → independent thought).',

    'WORD: a single meaningful unit. Cannot stand alone as a sentence unless it is an imperative ("Stop!").',

    'PHRASE: a group of words working together but MISSING either a subject, a finite verb, or both. Cannot stand alone as a sentence. Diagnostic: replace it with NO and see if the sentence still works.',

    'CLAUSE: a group of words containing BOTH a subject AND a finite verb (one that changes with tense: is / was / will be / has / did). Two flavours — see below.',

    'INDEPENDENT (MAIN) CLAUSE: a clause that can stand alone as a complete sentence. "The rain fell."',

    'DEPENDENT (SUBORDINATE) CLAUSE: a clause that CANNOT stand alone because it begins with a subordinator (because, although, when, if, who, which, that, where, since, while) or because it is a question-word clause (what, whether, how).',

    'THE ONE DIAGNOSTIC TEST that resolves every structural error: (1) Is there a SUBJECT? (2) Is there a FINITE VERB? Both present → CLAUSE. Either missing → PHRASE. If a clause is independent → fine. If it is dependent AND punctuated as a sentence → FRAGMENT.',

    'EIGHT PHRASE TYPES: (1) NOUN phrase — a brilliant researcher; (2) VERB phrase — has been analysing; (3) ADJECTIVE phrase — extremely humid; (4) ADVERB phrase — very rapidly; (5) PREPOSITIONAL phrase — in the atmosphere; (6) PARTICIPIAL phrase — running quickly (no subject doing the action); (7) GERUND phrase — predicting the weather (acting as a noun); (8) INFINITIVE phrase — to predict reliably.',

    'PARTICIPLE vs GERUND test (both end in -ing): substitute IT. If "it" fits in the slot, the -ing is a GERUND (a noun). If not, the -ing is a PARTICIPLE (adjective modifying a noun). "Running is fun" → "It is fun" works → GERUND. "The running water" → "The it water" fails → PARTICIPLE.',

    'THREE SUBORDINATE-CLAUSE FUNCTIONS: (1) ADVERBIAL — answers when / why / how / on what condition; opens with because, when, if, although, while, since, after, before. (2) RELATIVE (adjective) — modifies a noun; opens with who, which, that, whose. (3) NOUN — acts as subject or object of the main verb; opens with that, whether, what, who, whoever.',

    'RELATIVE CLAUSE comma rule — DEFINING vs NON-DEFINING: (a) DEFINING (no commas) — narrows down WHICH noun is meant; essential to meaning. "The scientists who studied the data concluded…" (b) NON-DEFINING (commas on BOTH sides) — adds extra info; could be deleted without changing meaning. "The scientists, who studied the data, concluded…"',

    'COMMON FRAGMENT FORMS (three to memorise): (1) Participial phrase alone — "Running through the field." (2) Prepositional phrase alone — "In the morning." (3) Dependent clause alone — "Because the storm was severe." All three look like sentences but lack one of: subject, finite verb, or independence.',

    'SENTENCE: one or more clauses expressing a complete thought, ending with . ? or !. A simple sentence has 1 IC. A compound sentence has 2+ ICs. A complex sentence has 1 IC + 1+ DCs. A compound-complex sentence has 2+ ICs + 1+ DC.',

    'COMMA TEST between two clauses: if BOTH units are independent → comma alone is WRONG (comma splice or run-on). If ONE unit is independent and the other is dependent → comma is fine. If both are independent → you need a period, semicolon, or comma + FANBOYS.',

    'MINI-CHEAT: think of the hierarchy as Russian nesting dolls — words sit inside phrases, phrases sit inside clauses, clauses sit inside sentences. Going UP the hierarchy adds structural capacity; going DOWN removes it.'
  ],

  explanationSections: [
    {
      heading: 'The phrase-vs-clause test — the one diagnostic that fixes every structural error',
      body: 'The single most useful test in English grammar asks two questions of any word group. (1) Is there a SUBJECT? (2) Is there a FINITE VERB (one that changes with tense: is, was, will be, has, did)? Both present → CLAUSE. One or both missing → PHRASE. Apply this first; everything else is downstream of it. Worked examples: "Running through the field" → no subject, no finite verb → PHRASE. "Because the storm was severe" → has subject (storm) and finite verb (was), but begins with the subordinator "because" → DEPENDENT CLAUSE. "The rain fell" → has subject (rain) and finite verb (fell) → INDEPENDENT CLAUSE. Run this test on every word group before classifying — fragments, comma splices, and dangling modifiers all become visible through it.'
    },
    {
      heading: 'The eight phrase types — what they look like and how to recognise each',
      body: 'Phrases are NOT all the same; they play different roles in sentences. (1) NOUN phrase: a noun + its modifiers — "the heavy rain", "a brilliant scientist". Functions as subject, object, or complement. (2) VERB phrase: a main verb + its helpers and modifiers — "is studying hard", "will have been analysing". Functions as the predicate. (3) ADJECTIVE phrase: describes a noun — "very humid", "eager to learn". (4) ADVERB phrase: describes a verb, adjective, or adverb — "very quickly", "in the morning". (5) PREPOSITIONAL phrase: preposition + object — "in the atmosphere", "on the surface". (6) PARTICIPIAL phrase: -ing or -ed form + modifiers, with NO finite verb and NO independent subject — "running quickly", "destroyed by the storm". (7) GERUND phrase: verb + -ing used as a NOUN — "studying hard is essential". (8) INFINITIVE phrase: to + verb + modifiers — "to predict", "to be reliable". Recognising the type tells you what role the phrase plays in the sentence — and which errors are likely to follow from it.'
    },
    {
      heading: 'The three subordinate-clause functions — how to tell which is which',
      body: 'A dependent clause can perform three distinct jobs. (1) ADVERBIAL clause — answers when, why, how, or under what condition. It opens with a subordinator of time (when, after, before), cause (because, since), concession (although, though), purpose (so that), or condition (if, unless). "Because the storm was severe" answers WHY. (3) NOUN clause — acts as the subject, object, or complement of the main verb. "THAT he was right surprised me" — "that he was right" is the SUBJECT of "surprised". "I know WHAT he meant" — "what he meant" is the OBJECT of "know". Diagnostic sequence: (a) is it a clause? (b) does it stand alone? (c) if not, what role does it play? Modifies a noun → RELATIVE. Answers when/why/how → ADVERBIAL. Acts as subject/object → NOUN.'
    },
    {
      heading: 'Fragments — three common forms and the fix for each',
      body: 'A FRAGMENT is a phrase or dependent clause punctuated as if it were a sentence. Three forms appear most often. (1) PARTICIPIAL phrase as fragment: "Running through the field." → Fix by attaching to a main clause ("Running through the field, the dog disappeared") OR by supplying a finite verb ("The dog was running through the field"). (2) PREPOSITIONAL phrase as fragment: "In the morning." → Fix by attaching to a main clause ("In the morning, we left"). (3) DEPENDENT clause as fragment: "Because the storm was severe." → Fix by combining with an independent clause ("Because the storm was severe, schools closed" OR "The storm was severe, so schools closed"). The diagnostic for fragments: apply the phrase-vs-clause test. If the unit is a phrase or dependent clause AND is punctuated as a sentence → fragment. The fix differs by type but always requires joining it to an independent clause or supplying the missing structural element.'
    },
    {
      heading: 'Defining vs non-defining relative clauses — when to use commas',
      body: 'RELATIVE clauses split into two categories that look identical until you test them. (1) DEFINING (restrictive) — narrows down WHICH noun is meant; NO commas; the meaning is ESSENTIAL. "The scientists WHO studied the data concluded…" (which scientists? the ones who studied the data → defines). Remove the clause and the meaning breaks. (2) NON-DEFINING (non-restrictive) — adds extra information; COMMAS on BOTH sides; the meaning is NON-ESSENTIAL. "The scientists, WHO STUDIED THE DATA, concluded…" (we already know which scientists; the clause just adds detail). Remove the clause and the meaning survives. Diagnostic: try removing the relative clause. Meaning changes → DEFINING (no commas). Meaning unchanged → NON-DEFINING (use commas). The two forms look similar but carry different meanings — choose deliberately.'
    },
    {
      heading: 'How C1 connects to the rest of the module',
      body: 'C1 is the foundation for every later chapter in Module C and feeds back into Module A. C2 (Sentence Types & Errors) uses the phrase-vs-clause test to identify fragments, run-ons, comma splices, and dangling modifiers. C3 (Completion, Rearrangement, Combining) requires you to see clause structure to choose the right grammatical slot (completion), identify the topic sentence (rearrangement), and join sentences without creating errors. Even Module A benefits: agreement requires identifying the subject (often inside a phrase); voice change requires identifying the object (inside a clause); reported speech requires identifying what is independent vs dependent. Master the phrase-vs-clause diagnostic and you will recognise structural errors everywhere they appear.'
    }
  ],

  examPoints: [
    'Phrase-vs-clause test: subject + finite verb → clause; missing either → phrase.',
    'Eight phrase types: noun, verb, adjective, adverb, prepositional, participial, gerund, infinitive.',
    'Three subordinate-clause types: adverbial (when/why/how), relative (modifies noun), noun (subject/object).',
    'Fragments come from participial phrases, prepositional phrases, and dependent clauses.',
    'Defining relative clauses (no commas) vs non-defining (commas on both sides).',
    'Comma test: comma between two ICs alone = comma splice; comma between IC and DC = fine.'
  ],

  commonMistakes: [
    {
      mistake: '"Because the storm was severe." — dependent clause written as a fragment.',
      correction: '"Because the storm was severe, schools were closed." OR "The storm was severe, so schools were closed."',
      explanation: '"Because the storm was severe" is a dependent clause (subordinator + subject + finite verb). It cannot stand alone. Fix by joining it to an independent clause — either keep the subordinator (with a comma before the IC) or remove it and use a coordinating conjunction instead.'
    },
    {
      mistake: '"Running through the field." — participial phrase written as a fragment.',
      correction: '"Running through the field, the dog disappeared into the distance." OR "The dog was running through the field."',
      explanation: '"Running through the field" is a participial phrase (verb-ing + modifiers, NO subject + NO finite verb). To fix, attach it to a main clause that supplies the subject performing the action. The dangling participle trap (placing it next to the wrong subject) is also fixed by this same move.'
    },
    {
      mistake: '"The scientist with expertise in meteorology." — noun + prepositional phrase as a fragment.',
      correction: '"The scientist with expertise in meteorology gave the lecture." OR "The scientist, who had expertise in meteorology, gave the lecture."',
      explanation: '"The scientist with expertise in meteorology" is a noun + prepositional phrase. It has no finite verb. To fix, add a finite verb (gave the lecture) or convert the prepositional phrase to a relative clause. Both fixes supply the missing structural element.'
    },
    {
      mistake: '"The scientist who studied the data, presented the findings." — comma after "data" inside a defining relative clause.',
      correction: '"The scientist who studied the data presented the findings." (no comma — defining) — OR — "The scientist, who studied the data, presented the findings." (commas on BOTH sides — non-defining).',
      explanation: 'Two different clauses. (1) "who studied the data" is DEFINING — it narrows down WHICH scientist (the one who studied the data → defines) → NO commas. (2) "who studied the data" is NON-DEFINING — it just adds info (we already know which scientist) → COMMAS on BOTH sides. Choose one form deliberately; do not add a comma inside a defining clause.'
    }
  ],

  workedExample: {
    problem: 'Classify each of the following and explain your reasoning. (a) "Meteorology fascinates him." (b) "Predicting the weather accurately." (c) "Because the storm intensified, the warning was issued." (d) "The scientist who discovered this finding, presented it at the conference."',
    solution: {
      '(a) "Meteorology fascinates him."': 'SIMPLE sentence. One independent clause. Subject: "Meteorology"; finite verb: "fascines"; object: "him". No dependent clause present. Count: 1 IC + 0 DCs → SIMPLE.',
      '(b) "Predicting the weather accurately."': 'PHRASE — specifically a GERUND phrase. Subject? None (no one is performing the action). Finite verb? "Predicting" is NOT a finite verb (it is an -ing form that cannot stand alone as the predicate of an IC). So this is a FRAGMENT. Fix: add a subject and a finite verb — "Predicting the weather accurately requires advanced instruments."',
      '(c) "Because the storm intensified, the warning was issued."': 'COMPLEX sentence. One independent clause ("the warning was issued") + one dependent clause ("Because the storm intensified"). The dependent clause opens with the subordinator "Because" and is ADVERBIAL — it answers WHY the warning was issued.',
      '(d) "The scientist who discovered this finding, presented it at the conference."': 'Error — MISPLACED COMMA inside a defining relative clause. "who discovered this finding" is a DEFINING relative clause (no commas) because it narrows down WHICH scientist (the one who discovered this finding → defines). The comma after "finding" is wrong. If the writer wanted NON-DEFINING (commas), it would read: "The scientist, who discovered this finding, presented it at the conference." — commas on BOTH sides. Choose one form deliberately.'
    },
    takeaway: 'Apply the phrase-vs-clause test to every word group. Then count ICs and DCs to classify structure. Then check relative-clause commas using the removal test. The three checks together handle every sentence-structuring question.'
  },

  methodChooser: {
    scenario: 'You are given an unfamiliar word group and need to decide what it is (phrase, independent clause, or dependent clause) and how to handle it in context.',
    options: [
      {
        name: 'Phrase-vs-clause test',
        when: 'Always — first step for every diagnostic.',
        steps: ['Ask: is there a SUBJECT?', 'Ask: is there a FINITE VERB (one that changes with tense)?', 'Both present → CLAUSE. One or both missing → PHRASE.']
      },
      {
        name: 'Stand-alone test',
        when: 'To distinguish independent from dependent clauses (both have subject + finite verb).',
        steps: ['Ask: can the unit stand alone and make complete sense?', 'Yes → INDEPENDENT clause. No (because of a subordinator at the start: because / although / when / if / who / which / that) → DEPENDENT clause.']
      },
      {
        name: 'Removal test (defining vs non-defining)',
        when: 'A relative clause appears with possible commas.',
        steps: ['Remove the relative clause from the sentence.', 'Does the meaning change? Yes → DEFINING (no commas). No → NON-DEFINING (commas on both sides required).']
      },
      {
        name: 'Function test (subordinate clause role)',
        when: 'A dependent clause is identified; you need its grammatical function.',
        steps: ['Does it answer when / why / how / under what condition? → ADVERBIAL.', 'Does it modify a noun? → RELATIVE / ADJECTIVE.', 'Does it act as subject or object? → NOUN clause.']
      },
      {
        name: 'Phrase-type recognition',
        when: 'You have identified a phrase and need to know its type and grammatical role.',
        steps: ['Starts with -ing or -ed and has no subject? → PARTICIPIAL.', 'Starts with -ing and functions as a noun (substitute IT to confirm)? → GERUND.', 'Starts with "to + verb"? → INFINITIVE.', 'Starts with a preposition (in / on / at / for / with)? → PREPOSITIONAL.', 'Has adjective or adverb modifiers only? → ADJECTIVE or ADVERB phrase.', 'Built around a noun + modifiers? → NOUN phrase.']
      }
    ],
    recommendation: 'Always run the phrase-vs-clause test first. Then, if it is a clause, apply the stand-alone test. Then, if it is a dependent clause, apply the function test. For relative clauses with commas, run the removal test. Four tests, in this order, resolve every classification problem.'
  },

  limitCases: [
    {
      case: 'A clause that LOOKS like a phrase because the verb ends in -ing',
      example: '"Running through the field is fun."',
      resolution: '"Running through the field" looks like a participial phrase, but here it acts as the SUBJECT of "is fun". When -ing acts as a noun (subject or object), it is a GERUND, not a participle. Test: substitute "it" — "It is fun" works → "Running through the field" is a noun (gerund phrase) acting as subject. Do not misclassify as a fragment.'
    },
    {
      case: 'An infinitive phrase that looks like a prepositional phrase',
      example: '"To predict weather requires data."',
      resolution: '"To predict" looks like it could start a prepositional phrase, but "predict" is a VERB. So "to predict weather" is an INFINITIVE phrase acting as the SUBJECT. Test: substitute "it" — "It requires data" works. Rule: "to + noun" → prepositional ("to the office"); "to + verb" → infinitive.'
    },
    {
      case: 'Relative clause with "that" (no comma) vs "which" (often with commas)',
      example: '"The data that was collected is reliable." vs "The data, which was collected, is reliable."',
      resolution: 'Both are relative clauses modifying "data". (1) DEFINING: "that was collected" → no commas, narrows down which data (the one that was collected → defines). "That" is preferred in defining clauses. (2) NON-DEFINING: "which was collected" → commas on both sides, just adds info. Rule: "that" generally = defining; "which" with commas = non-defining. Both forms are grammatically correct; the MEANING differs.'
    },
    {
      case: 'Coordinating conjunction "and" inside a noun phrase vs joining two clauses',
      example: '"Salt and pepper are on the table." vs "The salt is here, and the pepper is there."',
      resolution: '"Salt and pepper" is a NOUN phrase with two items joined by "and" (compound noun). ONE independent clause. Versus "The salt is here, AND the pepper is there" — TWO independent clauses joined by "and" (FANBOYS). Test: where does the "and" sit? Inside a noun phrase → still one clause. Between two complete clauses → compound sentence.'
    },
    {
      case: 'Subordinator "that" introducing a noun clause vs a relative clause',
      example: '"I know that he is right." vs "I know the scientist that discovered this."',
      resolution: '(1) "that he is right" — "that" introduces a NOUN clause acting as the OBJECT of "know" (it has its own subject "he" and verb "is" → it is a clause). (2) "that discovered this" — "that" introduces a RELATIVE clause modifying "scientist" (no comma, defining). Test: does "that" start a clause with its own subject + verb? If yes → noun clause. If it modifies a noun → relative clause.'
    }
  ],

  misconceptionRemediation: [
    {
      misconception: '"Any clause must have a subject + finite verb, so fragments always lack both."',
      remedy: 'Fragments lack either (a) a subject, (b) a finite verb, OR (c) independence. The third type is the most common fragment — the dependent-clause fragment ("Because the storm was severe.") HAS both subject and finite verb but is still a fragment because of the subordinator.',
      drill: 'Identify the fragment type in each: (1) "Running through the field." — no subject + no finite verb. (2) "Because the storm was severe." — has subject + finite verb but is dependent. (3) "In the morning." — prepositional phrase, no subject + no finite verb. All three are fragments; the fix differs for each.'
    },
    {
      misconception: '"A phrase and a clause are basically the same thing."',
      remedy: 'The phrase-vs-clause distinction is the FOUNDATION of every structural-error diagnosis. A phrase lacks a subject and/or finite verb; a clause has both. The confusion causes learners to miss fragments, comma splices, and dangling modifiers. Memorise the diagnostic test and apply it to every word group before classifying.',
      drill: 'For each, mark PHRASE or CLAUSE: (a) "in the morning" — PHRASE. (b) "the rain fell" — CLAUSE. (c) "running quickly" — PHRASE. (d) "because he left" — DEPENDENT CLAUSE. Test: subject present? finite verb present? both → clause. Missing either → phrase.'
    },
    {
      misconception: '"All relative clauses need commas."',
      remedy: 'Only NON-DEFINING relative clauses (non-restrictive) need commas. DEFINING relative clauses (restrictive) need NO commas. Test: try removing the relative clause. If the meaning breaks (you no longer know which noun is meant) → defining → no commas. If the meaning survives (the noun is fully identified without the clause) → non-defining → commas on both sides.',
      drill: 'For each, mark D (defining) or N (non-defining): (a) "The book that I read was interesting." — D, no commas, narrows which book. (b) "The Bible, which is a sacred text, is widely distributed." — N, commas, we already know which book. (c) "Students who pass the exam will graduate." — D, narrows which students.'
    },
    {
      misconception: '"A participle and a gerund are the same because both end in -ing."',
      remedy: 'Both end in -ing, but they play different roles. A PARTICIPLE acts as an ADJECTIVE (modifies a noun): "The running water was cold." A GERUND acts as a NOUN (subject or object): "Running is healthy." Test: substitute "it" — if "it" fits, the -ing is a gerund. If "it" does not fit, it is a participle. This distinction is essential for diagnosing fragments and dangling modifiers.',
      drill: 'Mark P (participle) or G (gerund): (a) "Swimming pools are popular in summer." — G, "Swimming" = subject, "pools" = object. (b) "The swimming pool was crowded." — P, "swimming" modifies "pool". (c) "He enjoys swimming." — G, "swimming" = object of "enjoys".'
    }
  ],

  comparisonTableEras: {
    title: 'Phrase vs Clause — Side-by-Side Comparison',
    rows: [
      {
        feature: 'Subject present?',
        phrase: 'Often missing',
        clause: 'Always present'
      },
      {
        feature: 'Finite verb present?',
        phrase: 'Never (only -ing / -ed / infinitive forms)',
        clause: 'Always (changes with tense: is / was / will be / has / did)'
      },
      {
        feature: 'Can stand alone?',
        phrase: 'No',
        clause: 'Yes if independent; no if dependent'
      },
      {
        feature: 'Function in sentence',
        phrase: 'Acts as noun / adjective / adverb / verb part',
        clause: 'Predicate (independent) or subject / object / modifier (dependent)'
      },
      {
        feature: 'Fragment risk',
        phrase: 'High — easy to punctuate as a sentence by mistake',
        clause: 'Low for independent; high for dependent'
      },
      {
        feature: 'Examples',
        phrase: '"in the morning", "running quickly", "to predict"',
        clause: '"The rain fell", "Because the storm was severe", "what he said"'
      }
    ]
  },

  postRestriction: [
    {
      rule: 'After a participial phrase, supply the subject that performs the action (to avoid dangling modifiers).',
      restriction: '"Running through the field, the dog barked" — OK, "dog" runs. "Running through the field, the road stretched ahead" — NOT OK, "road" does not run. Fix: "As I ran through the field, the road stretched ahead" or "The road stretched ahead as I ran through the field".',
      consequence: 'A participial phrase at the start of a sentence REQUIRES a grammatical subject in the main clause that can logically perform the action. If no such subject exists, the modifier dangles.'
    },
    {
      rule: 'After a subordinator (because / although / when / if / since / while), a dependent clause must be attached to an independent clause.',
      restriction: '"Because the storm was severe." → fragment. "Because the storm was severe, schools closed." → correct.',
      consequence: 'Subordinators create dependent clauses that cannot stand alone. Either join to an independent clause or remove the subordinator.'
    },
    {
      rule: 'After a defining relative clause (no commas), do NOT add a comma before the main verb.',
      restriction: '"The scientist who studied the data, presented the findings" → wrong. Either: "The scientist who studied the data presented the findings" (defining, no commas) OR "The scientist, who studied the data, presented the findings" (non-defining, commas on both sides).',
      consequence: 'A mid-sentence comma inside a defining relative clause breaks the rule. Choose one form: defining (no commas) or non-defining (commas on both sides).'
    }
  ],


    subtopics: [
      {
        id: "english-sentence-building-blocks-the-phrase-vs-clause-test-the-one-diagno",
        title: "The phrase-vs-clause test — the one diagnostic that fixes every structural error",
        summary: "The single most useful test in English grammar asks two questions of any word group. (1) Is there a SUBJECT? (2) Is there a FINITE VERB…",
        explanation: "The single most useful test in English grammar asks two questions of any word group. (1) Is there a SUBJECT? (2) Is there a FINITE VERB (one that changes with tense: is, was, will be, has, did)? Both present → CLAUSE. One or both missing → PHRASE. Apply this first; everything else is downstream of it. Worked examples: ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-sentence-building-blocks-the-eight-phrase-types-what-they-look-li",
        title: "The eight phrase types — what they look like and how to recognise each",
        summary: "Phrases are NOT all the same; they play different roles in sentences. (1) NOUN phrase: a noun + its modifiers — ",
        explanation: "Phrases are NOT all the same; they play different roles in sentences. (1) NOUN phrase: a noun + its modifiers — ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-sentence-building-blocks-the-three-subordinate-clause-functions-h",
        title: "The three subordinate-clause functions — how to tell which is which",
        summary: "A dependent clause can perform three distinct jobs. (1) ADVERBIAL clause — answers when, why, how, or under what condition. It opens with a…",
        explanation: "A dependent clause can perform three distinct jobs. (1) ADVERBIAL clause — answers when, why, how, or under what condition. It opens with a subordinator of time (when, after, before), cause (because, since), concession (although, though), purpose (so that), or condition (if, unless). ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-sentence-building-blocks-fragments-three-common-forms-and-the-fix",
        title: "Fragments — three common forms and the fix for each",
        summary: "A FRAGMENT is a phrase or dependent clause punctuated as if it were a sentence. Three forms appear most often. (1) PARTICIPIAL phrase as…",
        explanation: "A FRAGMENT is a phrase or dependent clause punctuated as if it were a sentence. Three forms appear most often. (1) PARTICIPIAL phrase as fragment: ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-sentence-building-blocks-defining-vs-non-defining-relative-clause",
        title: "Defining vs non-defining relative clauses — when to use commas",
        summary: "RELATIVE clauses split into two categories that look identical until you test them. (1) DEFINING (restrictive) — narrows down WHICH noun is…",
        explanation: "RELATIVE clauses split into two categories that look identical until you test them. (1) DEFINING (restrictive) — narrows down WHICH noun is meant; NO commas; the meaning is ESSENTIAL. ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-sentence-building-blocks-how-c1-connects-to-the-rest-of-the-modul",
        title: "How C1 connects to the rest of the module",
        summary: "C1 is the foundation for every later chapter in Module C and feeds back into Module A. C2 (Sentence Types & Errors) uses the…",
        explanation: "C1 is the foundation for every later chapter in Module C and feeds back into Module A. C2 (Sentence Types & Errors) uses the phrase-vs-clause test to identify fragments, run-ons, comma splices, and dangling modifiers. C3 (Completion, Rearrangement, Combining) requires you to see clause structure to choose the right grammatical slot (completion), identify the topic sentence (rearrangement), and join sentences without creating errors. Even Module A benefits: agreement requires identifying the subject (often inside a phrase); voice change requires identifying the object (inside a clause); reported speech requires identifying what is independent vs dependent. Master the phrase-vs-clause diagnostic and you will recognise structural errors everywhere they appear.",
        examples: [],
        shortcuts: [],
        traps: [],
      },
    ],
  relatedTopics: [
    'english-sentence-types-errors-transformation',
    'english-sentence-completion-rearrangement',
    'english-common-errors'
  ],
  content: true,
  examScope: ['bs17', 'bs16'],
  buildsOn: [
    'english-parts-of-speech-and-tenses',
    'english-pronouns-prepositions-conjunctions'
  ],
  leadsTo: ['english-sentence-types-errors-transformation'],
  usedIn: [
    'english-sentence-types-errors-transformation',
    'english-sentence-completion-rearrangement',
    'ra-scientific-reporting',
    'env-climate-change-response',
    'env-international-climate-policy',
    'meteo-pmd-operational',
    'meteo-aviation-products'
  ]
},

// --------------------------------------------------------------------------
// C2 — Sentence Types, Errors & Transformation
// --------------------------------------------------------------------------
{
  id: 'english-sentence-types-errors-transformation',
  sectionId: 'ENG-03',
  order: 2,
  title: 'Sentence Types, Errors & Transformation',
  definition:
    'Sentences are classified by STRUCTURE (simple, compound, complex, compound-complex — counted by ICs and DCs) and by PURPOSE (declarative, interrogative, imperative, exclamatory). The four most tested construction errors are FRAGMENTS, RUN-ONS, COMMA SPLICES, and MISPLACED/DANGLING MODIFIERS — each has a defined diagnostic and a defined fix. TRANSFORMATION converts one structural type into another while preserving the original meaning.',

  keyFacts: [
    'FOUR STRUCTURE TYPES, defined by counting ICs and DCs: (1) SIMPLE — 1 IC + 0 DCs. "The rain fell." (2) COMPOUND — 2+ ICs + 0 DCs. "The rain fell, and the crops grew." (3) COMPLEX — 1 IC + 1+ DCs. "Because the rain fell, the crops grew." (4) COMPOUND-COMPLEX — 2+ ICs + 1+ DCs. "Because the rain fell, the crops grew, and the farmers rejoiced."',

    'FOUR PURPOSE TYPES: DECLARATIVE (statement, ends in period); INTERROGATIVE (question, ends in question mark); IMPERATIVE (command, usually ends in period, subject "you" is implied); EXCLAMATORY (strong feeling, ends in exclamation mark, often begins with "what/how").',

    'FRAGMENT: a phrase or dependent clause punctuated as if it were a complete sentence. Fix: attach to a main clause, supply a missing finite verb, or remove the subordinator.',

    'RUN-ON (fused sentence): two independent clauses joined with NO punctuation or conjunction. "It was raining we stayed inside."',

    'COMMA SPLICE: two independent clauses joined by ONLY a comma. "It was raining, we stayed inside."',

    'THREE FIXES for comma splice / run-on: (1) PERIOD (form two sentences); (2) SEMICOLON (when clauses are closely related); (3) COMMA + COORDINATING CONJUNCTION (FANBOYS: for, and, nor, but, or, yet, so).',

    'MISPLACED MODIFIER: a descriptive phrase placed so that it appears to modify the wrong word. "She served cake to the children in plastic bags" → unclear whether children or cake are in the bags.',

    'DANGLING MODIFIER: a descriptive phrase with NOTHING logical to modify. "Walking into the room, the desk was messy" → desks do not walk.',

    'FIX for misplaced / dangling: place the modifier next to the word it modifies (misplaced), OR supply a grammatical subject that can perform the action (dangling), OR rewrite the modifier as a subordinate clause.',

    'PARALLEL STRUCTURE: items in a series (or on either side of a correlative conjunction: both…and, either…or, not only…but also) must share the SAME grammatical form.',

    'ACTIVE ↔ PASSIVE transformation: object → subject position; verb → be + past participle; optional "by + agent". Tense is preserved; meaning is preserved.',

    'COMMON TRANSFORMATION PAIRS: simple ↔ compound (add or remove a coordinator); simple ↔ complex (add or remove a subordinator); active ↔ passive (move object to subject position, change verb form); direct ↔ indirect (apply tense shift, pronoun shift, time/place marker shift).',

    'TRANSFORMATION GOLDEN RULE: change the form, NEVER the meaning. Do not add information that is not in the original. Do not drop information that is in the original.'
  ],

  explanationSections: [
    {
      heading: 'The four structure types — recognise each by counting clauses',
      body: 'To classify a sentence, count its INDEPENDENT clauses (subject + finite verb + can stand alone) and its DEPENDENT clauses (subject + finite verb + subordinator at the start). The combination tells you the type. (1) SIMPLE: 1 IC + 0 DCs. "The rain fell." (2) COMPOUND: 2+ ICs + 0 DCs. "The rain fell, and the crops grew." (3) COMPLEX: 1 IC + 1+ DCs. "Because the rain fell, the crops grew." (4) COMPOUND-COMPLEX: 2+ ICs + 1+ DCs. "Because the rain fell, the crops grew, and the farmers rejoiced." Diagnostic procedure: split the sentence at every conjunction, subordinator, and semicolon; check each unit for subject + finite verb + stand-alone capacity; tally ICs and DCs. The classification determines punctuation and which transformations are possible.'
    },
    {
      heading: 'The four classic construction errors and how to fix each',
      body: 'Each error has a defined diagnostic and a defined fix. FRAGMENT — phrase or dependent clause written as a sentence. Fix: attach the fragment to a neighbouring main clause ("Running through the field, she felt free"), supply a missing finite verb ("She was running through the field"), or remove the subordinator ("The storm was severe, so schools closed"). RUN-ON — two ICs joined with no punctuation or conjunction. Fix: insert a period, semicolon, or comma + FANBOYS. COMMA SPLICE — two ICs joined by only a comma. Fix: same three options as run-on, applied to the comma. DANGLING / MISPLACED MODIFIER — descriptive phrase attached to the wrong word or no word at all. Fix: move the modifier next to the noun it actually modifies, supply the correct grammatical subject, or rewrite the modifier as a subordinate clause ("When he walked into the room, the desk was messy"). Run the diagnostic; apply the fix.'
    },
    {
      heading: 'Parallel structure — the "each item matches" principle',
      body: 'When items appear in a list or are joined by correlative conjunctions (both…and, either…or, not only…but also), every item must use the SAME grammatical shape. The test: replace one item with "and the other thing" and check whether the grammar still works. Worked wrong example: "She likes swimming, to run, and biking" → mixed forms (gerund + infinitive + gerund). Test fails: "She likes swimming, to run, and the other thing" → grammar breaks. Worked right example: "She likes swimming, running, and biking" (all gerunds) OR "She likes to swim, to run, and to bike" (all infinitives). The principle extends to longer phrases and clauses: "He is BOTH a scholar AND a teacher" (noun + noun); "He is BOTH intelligent AND articulate" (adjective + adjective). Mismatched forms are grammatical errors, not stylistic choices.'
    },
    {
      heading: 'Misplaced vs dangling modifiers — the placement test',
      body: 'Both errors attach descriptive phrases to the wrong place. (1) MISPLACED: the modifier is placed too far from the noun it modifies, creating ambiguity. "She served cake to the children in plastic bags" → unclear whether the children or the cake are in the plastic bags. Fix: move the modifier next to the word it modifies. "She served cake IN PLASTIC BAGS to the children." (2) DANGLING: the modifier has no logical subject at all. "Walking into the room, the desk was messy" → the desk does not walk. Fix: supply the correct subject in the main clause. "Walking into the room, HE SAW the messy desk." OR rewrite without the dangling modifier: "When he walked into the room, the desk was messy." Diagnostic: ask who or what the modifier attaches to. If unclear → misplaced. If nothing logical → dangling.'
    },
    {
      heading: 'Transformation — controlled rewriting preserves meaning',
      body: 'Five common transformation types. (1) ACTIVE → PASSIVE: move the object to subject position; verb → be + past participle; optional "by + agent". "The storm destroyed the houses" → "The houses were destroyed by the storm." (2) DIRECT → INDIRECT (already in A4): apply tense shift, pronoun shift, time/place marker shift. (3) SIMPLE → COMPLEX: turn one independent clause into a subordinate clause. "The rain fell. The crops grew." → "Because the rain fell, the crops grew." (4) SIMPLE → COMPOUND: join two related simple sentences with a coordinating conjunction. → "The rain fell, AND the crops grew." (5) COMPOUND → SIMPLE: convert one IC to a participial phrase. "The rain fell, and the crops grew" → "Falling steadily, the rain helped the crops grow." Rule: change the form, preserve the meaning.'
    },
    {
      heading: 'How C2 connects to upcoming topics',
      body: 'C2 builds on C1\'s phrase/clause diagnostic and feeds directly into C3. C3 (Completion, Rearrangement, Combining) uses the four-structure classification (simple / compound / complex / compound-complex) for combining tasks, the parallel-structure rule for completion, and the four-error diagnostic for spotting problems in jumbled paragraphs. The skills also transfer to research-analysis writing (ra-scientific-reporting) where transforming active to passive and combining choppy data sentences are routine. Master the four-error fix list (fragment, run-on, comma splice, modifier) and the transformation table (active ↔ passive, simple ↔ compound ↔ complex), and you will handle every construction-error question in FPSC papers.'
    }
  ],

  examPoints: [
    'Four structure types: simple (1 IC), compound (2+ ICs), complex (1 IC + 1+ DCs), compound-complex (2+ ICs + 1+ DCs).',
    'Four purpose types: declarative, interrogative, imperative, exclamatory.',
    'Four classic errors: fragment, run-on, comma splice, misplaced/dangling modifier — each has a defined fix.',
    'Parallel structure: same grammatical form on both sides of a correlative conjunction / throughout a list.',
    'Transformation: change structure, preserve meaning; never add or drop information.',
    'Active → passive: object → subject, verb → be + past participle, "by + agent" optional.'
  ],

  commonMistakes: [
    {
      mistake: '"It was raining, we stayed inside." — comma splice (two independent clauses joined by only a comma).',
      correction: '"It was raining, SO we stayed inside." OR "It was raining. We stayed inside." OR "It was raining; we stayed inside."',
      explanation: 'Two independent clauses cannot be joined by only a comma. Three valid fixes: comma + FANBOYS, period (form two sentences), or semicolon (closely related clauses). Choose the fix that best matches the intended rhythm.'
    },
    {
      mistake: '"The scientist running the experiment." — fragment (no finite verb).',
      correction: '"The scientist WAS running the experiment." OR "The scientist, running the experiment, made a discovery."',
      explanation: '"Running the experiment" is a participial phrase (no finite verb). To fix, add a finite verb (was running) or attach the participial phrase to a main clause that supplies the subject. The same fix resolves dangling-participle traps.'
    },
    {
      mistake: '"He likes swimming, to run and biking." — mixed forms (not parallel).',
      correction: '"He likes swimming, running and biking" (all gerunds) OR "He likes to swim, to run and to bike" (all infinitives).',
      explanation: 'Items in a list must use the SAME grammatical form. Test: replace one item with "and the other thing" — if grammar breaks, the items are not parallel. "He likes swimming, to run and the other thing" breaks; parallelise by choosing one form throughout.'
    },
    {
      mistake: '"Walking into the room, the desk was messy." — dangling modifier (desk does not walk).',
      correction: '"Walking into the room, I saw the messy desk." OR "When I walked into the room, the desk was messy."',
      explanation: 'The modifier "Walking into the room" requires a subject who walks (a person), but the main clause\'s subject is "the desk" (which does not walk). Fix: supply the correct subject as the main clause\'s subject, or rewrite the modifier as a subordinate clause.'
    },
    {
      mistake: '"She served cake to the children in plastic bags." — misplaced modifier (unclear whether children or cake are in bags).',
      correction: '"She served cake IN PLASTIC BAGS to the children." OR "She served the children cake that was in plastic bags."',
      explanation: 'The modifier "in plastic bags" is too far from "cake" and creates ambiguity. Move the modifier next to the word it modifies. Physical proximity restores clarity.'
    }
  ],

  workedExample: {
    problem: 'Identify the structural type, diagnose any errors, and rewrite as specified. Original: "The hypothesis was tested by the team, the data was analyzed by them, the results were surprising." Task: (a) classify the structure, (b) identify the errors, (c) transform into active voice while preserving meaning.',
    solution: {
      'Classification': 'COMPOUND sentence with three independent clauses joined ONLY by commas. IC1: "The hypothesis was tested by the team." IC2: "the data was analyzed by them." IC3: "the results were surprising." Three independent clauses + 0 dependent clauses = COMPOUND (compound with three ICs).',
      'Errors': '(1) COMMA SPLICE repeated three times — three ICs joined by only commas. Fix: use semicolons or add coordinating conjunctions. (2) PASSIVE voice overload — "tested by", "analyzed by", "were surprising" (adjectival). (3) Lack of parallelism in the passive construction: the first two clauses follow the pattern "noun + was + past participle + by + agent" but the third ("the results were surprising") lacks "by them" — mixing passive-transitive with adjectival.',
      'Transformed (active voice + joined properly)': '"The team tested the hypothesis, analyzed the data, and found the results unexpected." — Three verbs joined in a parallel series: tested / analyzed / found. Subordinate information gathered into a single IC. Alternatively with semicolons: "The team tested the hypothesis; they analyzed the data; the results were surprising." Both fixes resolve the comma splice and the passive overload.'
    },
    takeaway: 'When you see multiple ICs joined only by commas, immediately suspect comma splice. Test by listing each unit separately: does each have its own subject + finite verb? If yes, they need a stronger join — period, semicolon, or comma + FANBOYS.'
  },

  methodChooser: {
    scenario: 'You encounter an English sentence (or short passage) and need to (a) classify its structure, (b) diagnose any error, and (c) fix it.',
    options: [
      {
        name: 'Structure classifier',
        when: 'You need to determine simple / compound / complex / compound-complex.',
        steps: ['Split at every conjunction / subordinator / semicolon.', 'Count independent clauses (subject + finite verb + can stand alone).', 'Count dependent clauses (subject + finite verb + subordinator at the start).', 'Classify: 1 IC + 0 DC = SIMPLE; 2+ IC + 0 DC = COMPOUND; 1 IC + 1+ DC = COMPLEX; 2+ IC + 1+ DC = COMPOUND-COMPLEX.']
      },
      {
        name: 'Error-fixer (fragment)',
        when: 'A phrase or dependent clause is punctuated as a sentence.',
        steps: ['Apply the phrase-vs-clause test.', 'If phrase: add a finite verb ("Running" → "She was running") or attach to a main clause ("Running through the field, she felt free").', 'If dependent: join to an independent clause with the subordinator ("Because the storm was severe, schools closed") or remove the subordinator ("The storm was severe, so schools closed").']
      },
      {
        name: 'Error-fixer (run-on / comma splice)',
        when: 'Two or more independent clauses are joined with no punctuation or only a comma.',
        steps: ['Identify the independent clauses.', 'Fix with: (a) period (form two sentences), (b) semicolon (closely related clauses), (c) comma + FANBOYS (for / and / nor / but / or / yet / so).', 'Choose the fix that best preserves rhythm and relationship.']
      },
      {
        name: 'Error-fixer (misplaced / dangling modifier)',
        when: 'A descriptive phrase appears to modify the wrong word or no word at all.',
        steps: ['Identify the modifier (the descriptive phrase at the start).', 'Ask: who or what does it modify?', 'If unclear (modifying the wrong noun) → move the modifier next to the correct noun.', 'If nothing logical (e.g., "desk" walking) → supply the correct subject OR rewrite as a subordinate clause.']
      },
      {
        name: 'Error-fixer (parallelism)',
        when: 'A list or correlative conjunction uses mixed grammatical forms.',
        steps: ['Identify the items in the list or on either side of the correlative.', 'Check each item\'s part of speech and grammatical shape.', 'Make all items the SAME form (all gerunds, all infinitives, all nouns, etc.).', 'Test: replace one item with "and the other thing" — if grammar breaks, NOT parallel.']
      },
      {
        name: 'Transformer (active → passive)',
        when: 'Asked to convert active to passive or vice versa.',
        steps: ['Identify the object of the active sentence (the receiver of the action).', 'Move the object to subject position.', 'Change the verb to be + past participle.', 'Optional: add "by + agent" after the new verb.', 'Check: tense is preserved; meaning is preserved.']
      },
      {
        name: 'Transformer (simple ↔ compound ↔ complex)',
        when: 'Asked to convert one structure type to another.',
        steps: ['Identify the original independent and dependent clauses.', 'SIMPLE → COMPOUND: keep both ICs and join with FANBOYS or semicolon.', 'SIMPLE → COMPLEX: turn one IC into a dependent clause with a subordinator (because / when / if / although).', 'COMPOUND → SIMPLE: convert one IC into a participial phrase (-ing / -ed) or relative clause; or reduce one IC to a prepositional phrase.', 'COMPOUND-COMPLEX conversions combine the above steps.']
      }
    ],
    recommendation: 'Always start with structure classification. Then apply the four-error fixer in order: fragment, run-on / comma splice, modifier, parallelism. Only after all errors are resolved, apply the requested transformation.'
  },

  limitCases: [
    {
      case: 'A sentence with one IC + one phrase: SIMPLE or fragment?',
      example: '"The scientist, using advanced instruments, made a discovery."',
      resolution: 'SIMPLE sentence with one independent clause + one participial phrase ("using advanced instruments" — no subject + no finite verb inside; it attaches to "the scientist"). The phrase is embedded in the IC; the IC is still just ONE. Count ICs and DCs, not phrases. Result: SIMPLE.'
    },
    {
      case: 'A compound sentence with three or more independent clauses',
      example: '"The rain fell, the crops grew, and the farmers rejoiced."',
      resolution: 'Still COMPOUND — three independent clauses joined by comma + and. The number of ICs (3 instead of 2) does not change the category. Some grammars call this COMPOUND-COMPLEX only if a dependent clause is present; here there is no DC, so it remains COMPOUND with three ICs.'
    },
    {
      case: 'A complex sentence with multiple dependent clauses',
      example: '"Because the rain fell, and since the soil was fertile, the crops grew."',
      resolution: 'COMPLEX sentence with 1 IC ("the crops grew") + 2 DCs ("Because the rain fell", "since the soil was fertile"). Multiple DCs still count as complex (1 IC + 1+ DC). It does NOT become compound-complex because there is only ONE independent clause.'
    },
    {
      case: 'A semicolon that joins an IC and a fragment',
      example: '"It was raining; the typical weather for Karachi in July."',
      resolution: 'The semicolon joins two units of EQUAL grammatical rank. If the second unit is a fragment ("the typical weather for Karachi in July" — noun + prepositional phrase, no finite verb), the semicolon does NOT fix the fragment. The second unit remains a fragment even with a semicolon. Fix: "It was raining — the typical weather for Karachi in July." (dash) OR "It was raining. This is the typical weather for Karachi in July." (period + new IC).'
    },
    {
      case: 'A question mark ending a sentence with an exclamation intent',
      example: '"Did you really do that!"',
      resolution: 'PURPOSE: by structure, the sentence is INTERROGATIVE (inverted subject-verb, question mark intended). The "!" is informal usage. In formal writing, exclamation mark for emphasis + question structure is unusual; choose one. The structure is interrogative; the PURPOSE intended is exclamatory. Choose based on the dominant intent.'
    },
    {
      case: 'A participial phrase in the middle of a sentence: still simple?',
      example: '"The storm, having reached its peak, began to weaken."',
      resolution: 'SIMPLE sentence with one IC. The middle phrase "having reached its peak" is a participial phrase (NO subject + NO finite verb). It is EMBEDDED in the IC, not counted as a separate clause. The IC is "The storm began to weaken". Add the participial phrase as a modifier and the sentence remains simple. Test: count ICs and DCs only.'
    }
  ],

  misconceptionRemediation: [
    {
      misconception: '"A compound sentence and a complex sentence are the same — both have multiple clauses."',
      remedy: 'The distinction is whether the additional clauses are INDEPENDENT (compound) or DEPENDENT (complex). Compound = 2+ ICs. Complex = 1 IC + 1+ DCs. Compound-complex = 2+ ICs + 1+ DCs. Misclassification leads to wrong comma placement and wrong transformation choice.',
      drill: 'Classify: (a) "He studied hard, yet he failed." — COMPOUND, "yet" = coordinating conjunction joining 2 ICs. (b) "He studied hard, although he failed." — COMPLEX, "although" = subordinator; "he studied hard" = IC, "although he failed" = DC. (c) "When he arrived, she left, and they never met again." — COMPOUND-COMPLEX, "when he arrived" = DC; "she left" and "they never met again" = 2 ICs joined by "and".'
    },
    {
      misconception: '"Any comma between two clauses is a comma splice."',
      remedy: 'A comma between an INDEPENDENT clause and a DEPENDENT clause is CORRECT (not a comma splice). "Because the storm was severe, schools closed" — comma between DC and IC is fine. The comma splice is when TWO independent clauses are joined by only a comma. Test: are both units independent? If yes → comma splice. If one is dependent → normal punctuation.'
    },
    {
      misconception: '"Dangling modifiers and misplaced modifiers are the same."',
      remedy: 'MISPLACED = the modifier is in the WRONG place (modifies the wrong noun, but DOES modify something). DANGLING = the modifier has NO logical subject at all (modifies nothing logically). Both are errors, but the fix differs. Misplaced → move the modifier. Dangling → supply the correct subject or rewrite the modifier.',
      drill: 'Identify M (misplaced) or D (dangling): (a) "She served cake to the children in plastic bags." — M, unclear whether cake or children are in bags. (b) "Walking into the room, the desk was messy." — D, desk does not walk. (c) "The car hit the pole, which was driven by the manager." — M, unclear whether "driven" modifies pole or manager.'
    },
    {
      misconception: '"Passive voice is always weaker than active."',
      remedy: 'Passive voice is grammatically correct and often PREFERRED when the action is more important than the agent ("The bridge was built in 1990"), when the agent is unknown ("The window was broken"), or when the agent is obvious from context. Active is usually stronger and more direct. Both are correct; choose based on emphasis and clarity. Tests that ask you to convert to passive require the conversion, not a judgement.',
      drill: 'Convert to active: (a) "The data was analyzed by the team." → "The team analyzed the data." (b) "Mistakes were made." → "We made mistakes." (Note: "Mistakes were made" deliberately hides the agent — a real-world rhetorical choice.)'
    },
    {
      misconception: '"Parallel structure only matters in lists joined by and."',
      remedy: 'Parallel structure applies to LISTS (joined by and / or / but), to CORRELATIVE conjunctions (both…and, either…or, neither…nor, not only…but also), and to elements AFTER a preposition that governs multiple objects ("interested in reading, writing, and editing"). Each element must share the same grammatical shape (noun, gerund, infinitive, clause).',
      drill: 'Fix the parallelism: (a) "She is good at swimming, to dive, and runs." → "She is good at swimming, diving, and running." (all gerunds) or "She is good at swimming, to dive, and to run." (all infinitives). (b) "He is both a scholar and an athlete he is also." → "He is both a scholar and an athlete." (both + and).'
    }
  ],

  comparisonTableEras: {
    title: '4 Structure Types — Side-by-Side Comparison',
    rows: [
      {
        feature: 'Independent clauses',
        simple: '1',
        compound: '2+',
        complex: '1',
        'compound-complex': '2+'
      },
      {
        feature: 'Dependent clauses',
        simple: '0',
        compound: '0',
        complex: '1+',
        'compound-complex': '1+'
      },
      {
        feature: 'Conjunction type',
        simple: 'None (or conjunctions inside the single clause)',
        compound: 'Coordinating conjunction (FANBOYS) or semicolon',
        complex: 'Subordinating conjunction (because, when, if, although, while, since, after, before)',
        'compound-complex': 'BOTH coordinating and subordinating'
      },
      {
        feature: 'Typical joiner',
        simple: '—',
        compound: 'and, but, or, so, yet, for, nor (FANBOYS); ;',
        complex: 'because, although, when, if, while, since, after, before',
        'compound-complex': 'FANBOYS + subordinator'
      },
      {
        feature: 'Example',
        simple: 'The rain fell.',
        compound: 'The rain fell, and the crops grew.',
        complex: 'Because the rain fell, the crops grew.',
        'compound-complex': 'Because the rain fell, the crops grew, and the farmers rejoiced.'
      },
      {
        feature: 'Emphasis',
        simple: 'One main idea',
        compound: 'Two equal ideas',
        complex: 'Main idea in IC, supporting in DC',
        'compound-complex': 'Two main ideas + one supporting idea'
      }
    ]
  },

  comparisonTableEras2: {
    title: '4 Classic Errors — Side-by-Side Comparison',
    rows: [
      {
        feature: 'What is it?',
        fragment: 'Phrase or dependent clause written as a sentence.',
        'run-on': 'Two independent clauses joined with NO punctuation or conjunction.',
        'comma-splice': 'Two independent clauses joined by ONLY a comma.',
        'modifier-error': 'Descriptive phrase modifies the wrong word (misplaced) or no word (dangling).'
      },
      {
        feature: 'Diagnostic test',
        fragment: 'Phrase-vs-clause test + check for end punctuation.',
        'run-on': 'Count ICs and check the join (no punctuation between).',
        'comma-splice': 'Count ICs and check the join (only a comma).',
        'modifier-error': 'Ask who or what the modifier attaches to.'
      },
      {
        feature: 'Fix option 1',
        fragment: 'Attach to a neighbouring sentence.',
        'run-on': 'Insert a period (form two sentences).',
        'comma-splice': 'Replace comma with a period.',
        'modifier-error': 'Move the modifier next to the correct noun.'
      },
      {
        feature: 'Fix option 2',
        fragment: 'Add a finite verb (phrase → IC).',
        'run-on': 'Insert a semicolon (closely related clauses).',
        'comma-splice': 'Replace comma with a semicolon.',
        'modifier-error': 'Rewrite so the subject is the implied doer.'
      },
      {
        feature: 'Fix option 3',
        fragment: 'Remove the subordinator (DC → IC).',
        'run-on': 'Insert comma + FANBOYS.',
        'comma-splice': 'Replace comma with comma + FANBOYS.',
        'modifier-error': '—'
      }
    ]
  },

  postRestriction: [
    {
      rule: 'After a subordinator (because / although / when / if / since / while), a comma is REQUIRED when the DC precedes the IC.',
      restriction: '"Because the storm was severe, schools closed." (DC first → comma required). "Schools closed, because the storm was severe." (DC second → comma optional).',
      consequence: 'A DC at the START of a sentence requires a comma before the IC. A DC at the END does not require a comma (optional but common in long DCs).'
    },
    {
      rule: 'After a coordinating conjunction (FANBOYS) joining two ICs, a comma PRECEDES the conjunction.',
      restriction: '"The rain fell, and the crops grew." (comma + FANBOYS). "The rain fell and the crops grew" → acceptable but less clear; comma is preferred for longer ICs. "The rain fell and, the crops grew" → INCORRECT; comma must precede FANBOYS, not follow.',
      consequence: 'FANBOYS joining two ICs requires the comma BEFORE the conjunction, not after.'
    },
    {
      rule: 'After a semicolon, the second clause must be an independent clause (not a phrase or dependent clause).',
      restriction: '"It was raining; we stayed inside." "It was raining; the typical weather for Karachi." → second unit is a fragment, NOT joined correctly. "It was raining; because we disliked the cold." → second unit is a DC, NOT joined correctly.',
      consequence: 'A semicolon connects two EQUAL grammatical units; both must be ICs (or both must be parallel list items). It cannot fix a fragment or join an IC to a DC.'
    },
    {
      rule: 'After a defining relative clause (no commas), do NOT add a comma before the main verb.',
      restriction: '"The scientist who studied the data presented the findings." "The scientist who studied the data, presented the findings" → INCORRECT comma placement. Either remove the comma (defining) OR add commas on BOTH sides (non-defining: "The scientist, who studied the data, presented the findings.").',
      consequence: 'A mid-sentence comma inside a defining relative clause breaks the rule. Choose one form: defining (no commas) or non-defining (commas on both sides).'
    }
  ],


    subtopics: [
      {
        id: "english-sentence-types-errors-transformation-the-four-structure-types-recognise-each-",
        title: "The four structure types — recognise each by counting clauses",
        summary: "To classify a sentence, count its INDEPENDENT clauses (subject + finite verb + can stand alone) and its DEPENDENT clauses (subject + finite…",
        explanation: "To classify a sentence, count its INDEPENDENT clauses (subject + finite verb + can stand alone) and its DEPENDENT clauses (subject + finite verb + subordinator at the start). The combination tells you the type. (1) SIMPLE: 1 IC + 0 DCs. ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-sentence-types-errors-transformation-the-four-classic-construction-errors-and",
        title: "The four classic construction errors and how to fix each",
        summary: "Each error has a defined diagnostic and a defined fix. FRAGMENT — phrase or dependent clause written as a sentence. Fix: attach the…",
        explanation: "Each error has a defined diagnostic and a defined fix. FRAGMENT — phrase or dependent clause written as a sentence. Fix: attach the fragment to a neighbouring main clause (",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-sentence-types-errors-transformation-misplaced-vs-dangling-modifiers-the-plac",
        title: "Misplaced vs dangling modifiers — the placement test",
        summary: "Both errors attach descriptive phrases to the wrong place. (1) MISPLACED: the modifier is placed too far from the noun it modifies,…",
        explanation: "Both errors attach descriptive phrases to the wrong place. (1) MISPLACED: the modifier is placed too far from the noun it modifies, creating ambiguity. ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-sentence-types-errors-transformation-transformation-controlled-rewriting-pres",
        title: "Transformation — controlled rewriting preserves meaning",
        summary: "Five common transformation types. (1) ACTIVE → PASSIVE: move the object to subject position; verb → be + past participle; optional ",
        explanation: "Five common transformation types. (1) ACTIVE → PASSIVE: move the object to subject position; verb → be + past participle; optional ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-sentence-types-errors-transformation-how-c2-connects-to-upcoming-topics",
        title: "How C2 connects to upcoming topics",
        summary: "C2 builds on C1\\'s phrase/clause diagnostic and feeds directly into C3. C3 (Completion, Rearrangement, Combining) uses the four-structure…",
        explanation: "C2 builds on C1\'s phrase/clause diagnostic and feeds directly into C3. C3 (Completion, Rearrangement, Combining) uses the four-structure classification (simple / compound / complex / compound-complex) for combining tasks, the parallel-structure rule for completion, and the four-error diagnostic for spotting problems in jumbled paragraphs. The skills also transfer to research-analysis writing (ra-scientific-reporting) where transforming active to passive and combining choppy data sentences are routine. Master the four-error fix list (fragment, run-on, comma splice, modifier) and the transformation table (active ↔ passive, simple ↔ compound ↔ complex), and you will handle every construction-error question in FPSC papers.",
        examples: [],
        shortcuts: [],
        traps: [],
      },
    ],
  relatedTopics: [
    'english-sentence-building-blocks',
    'english-sentence-completion-rearrangement',
    'english-modals-voice-narration'
  ],
  content: true,
  examScope: ['bs17', 'bs16'],
  buildsOn: [
    'english-sentence-building-blocks',
    'english-common-errors',
    'english-modals-voice-narration'
  ],
  leadsTo: ['english-sentence-completion-rearrangement'],
  usedIn: [
    'english-sentence-completion-rearrangement',
    'ra-scientific-reporting',
    'env-climate-change-response'
  ]
},

// --------------------------------------------------------------------------
// C3 — Sentence Completion, Rearrangement & Combining
// --------------------------------------------------------------------------
{
  id: 'english-sentence-completion-rearrangement',
  sectionId: 'ENG-03',
  order: 3,
  title: 'Sentence Completion, Rearrangement & Combining',
  definition:
    'COMPLETION tests the ability to supply the grammatically and logically correct word or phrase in a blank. REARRANGEMENT tests the ability to restore a logical paragraph order from jumbled sentences. COMBINING tests the ability to merge short, choppy sentences into smoother structures using subordination, coordination, participial phrases, relative clauses, or apposition.',

  keyFacts: [
    'COMPLETION procedure, four filters in order: (1) GRAMMAR — what kind of word fills the blank (noun / verb / adjective / adverb / preposition / conjunction)? (2) AGREEMENT and FORM — singular vs plural, tense, article. (3) WORD CLASS fit — does the option agree with surrounding grammar? (4) CONTEXT logic — does the remaining option make sense in the situation described?',

    'COMPLETION PRINCIPLE: it is a grammar test first, a context test second. Most options can be eliminated on grammar alone; the final choice is between the few that pass all four filters.',

    'REARRANGEMENT procedure, four steps: (1) LOCATE the topic sentence (no referring pronouns at the start, most general statement). (2) FOLLOW logical connectors (however, therefore, moreover, finally, for example, on the other hand). (3) TRACK pronoun and demonstrative references (this, these, such, it, they, them). (4) RESPECT chronological or cause–effect order. The three signals (connectors, pronouns, time/cause-effect) should all converge on the same arrangement.',

    'TOPIC SENTENCE SIGNALS: most abstract or general statement, no backward-referring pronouns, can stand alone without context. Sentences starting with "This / These / It / They / Such" almost never open a paragraph because there is nothing earlier to refer to.',

    'LOGICAL CONNECTORS as order signals: HOWEVER / NEVERTHELESS (contrast follows); THEREFORE / CONSEQUENTLY (effect or consequence follows); MOREOVER / IN ADDITION / FURTHERMORE (another supporting idea follows); FOR EXAMPLE / FOR INSTANCE (illustration of the previous idea follows); FINALLY / IN CONCLUSION (this is the LAST idea); FIRST / NEXT / THEN (chronological sequence).',

    'PRONOUN CHAIN rule: if sentence Y opens with "This / These / It / Such", the antecedent must appear in sentence X immediately before Y. Place Y AFTER X.',

    'COMBINING — five techniques: (a) SUBORDINATION (because, although, when, if, while, since, after); (b) COORDINATION (FANBOYS); (c) PARTICIPIAL phrases (-ing / -ed + modifiers, SAME subject required); (d) RELATIVE clauses (who, which, that, whose); (e) APPOSITION (noun phrase renames another noun, set off by commas).',

    'COMBINING CHOICE RULE: SUBORDINATION when one idea is more important than the other; COORDINATION when both ideas are equally important; PARTICIPIAL phrases when the subjects are the SAME and the actions are simultaneous or causal; RELATIVE clauses when one sentence adds information about a NOUN; APPOSITION when one sentence RENAMES a noun.',

    'FIVE COMMON PARAGRAPH PATTERNS to recognise: (1) CHRONOLOGICAL — time order (first / then / finally). (2) CAUSE–EFFECT — because / therefore. (3) PROBLEM–SOLUTION — problem stated → solution proposed. (4) COMPARE–CONTRAST — similarly / however. (5) GENERAL-TO-SPECIFIC — broad statement → specific examples.',

    'COMPLETION TRAP: a grammatically possible option that is CONTEXTUALLY absurd — always test the option in the actual sentence by substitution.'
  ],

  explanationSections: [
    {
      heading: 'Completion — four filters in order',
      body: 'Apply filters in this sequence for speed and accuracy. (1) GRAMMAR / SLOT: read the whole sentence and identify what kind of word fills the blank — noun, verb, adjective, adverb, preposition, conjunction. The slot defines the grammatical category. (2) AGREEMENT and FORM: if the slot needs a singular noun, eliminate plural options; if past tense, remove present and future options. (3) WORD CLASS fit: even if the option is the right part of speech, check it agrees with surrounding grammar (e.g., the determiner "a" requires a singular countable noun; "the" can take singular or plural). (4) CONTEXT logic: finally, test the remaining options for sense. "The research produced SURPRISING ____" — grammar (adjective), agreement (any), word class (only adjectives fit), context (something the research produced that is surprising). Worked example: "The professor gave a ____ lecture." (a) grammar: article "a" + noun; (b) agreement: singular; (c) word class: noun; (d) context: type of lecture. Eliminate all non-noun options first, then choose the noun that fits the lecture context.'
    },
    {
      heading: 'Rearrangement — start with the topic sentence',
      body: 'The opening sentence of a coherent paragraph almost never begins with a REFERRING pronoun ("This…", "These…", "It…", "They…", "Such…") because there is nothing earlier for it to refer to. The topic sentence is usually the most GENERAL statement and the one without backward references. Once the topic sentence is fixed, place the remaining sentences using three signals. (1) LOGICAL CONNECTORS — however, therefore, moreover, finally, for example, on the other hand — signal what comes next. (2) PRONOUN CHAINS — if sentence Y starts with "This", "These", "It", or "Such", sentence X (which it refers to) must come immediately before Y. (3) TIME / CAUSE-EFFECT order — chronological events follow time; cause precedes effect. All three signals should converge on the same arrangement; if they conflict, connectors usually win. Use them together, not in isolation.'
    },
    {
      heading: 'Combining — five techniques to merge short sentences',
      body: 'Two short, related sentences can be joined using one of five techniques. Choose the technique that best preserves emphasis and rhythm. (a) SUBORDINATION — make one sentence a dependent clause using a subordinator: "The rain fell. The crops grew." → "BECAUSE the rain fell, the crops grew." (b) COORDINATION — join with a coordinating conjunction: → "The rain fell, AND the crops grew." (c) PARTICIPIAL phrase — convert one sentence to a -ing/-ed phrase: → "FALLING steadily, the rain helped the crops grow." (d) RELATIVE clause — make one sentence a relative clause: → "The rain, WHICH fell steadily, helped the crops grow." (e) APPOSITION — rename a noun with a noun phrase: → "The rain, A WELCOME SIGHT, helped the crops grow." The choice depends on emphasis, rhythm, and subject match. Subordination emphasises the main idea; coordination gives equal weight; participial phrases work best with shared subjects.'
    },
    {
      heading: 'Five common paragraph patterns to recognise',
      body: 'Five patterns appear repeatedly in FPSC papers. (1) CHRONOLOGICAL: events in time order — First… Then… Finally. (2) CAUSE-EFFECT: A causes B — Because/Since X, Y. Therefore/Consequently. (3) PROBLEM-SOLUTION: problem stated → solution proposed. (4) COMPARE-CONTRAST: two ideas compared — Similarly/However/In contrast. (5) GENERAL-TO-SPECIFIC: broad statement → specific examples (For example / For instance). Recognising which pattern the jumbled paragraph follows lets you arrange sentences logically even without reading each one in detail. The connectors and pronoun references almost always fit one of these five patterns. When in doubt, ask: what is the paragraph trying to do — tell a story, explain a cause, propose a fix, compare ideas, or illustrate a concept?'
    },
    {
      heading: 'Combining — choosing the right technique',
      body: 'Not all combinations are equally effective. Choose based on three principles. (1) EMPHASIS: the more important idea goes in the INDEPENDENT clause (the one that can stand alone); the less important idea goes in the DEPENDENT clause. (2) RHYTHM: too many short simple sentences sound choppy; vary with complex structures. (3) SUBJECT MATCH: if both sentences have the SAME subject, a participial phrase works well; if subjects DIFFER, use subordination or coordination. Worked example: "The scientist studied the data. The scientist made a discovery." → Both have "The scientist" → participial: "STUDYING the data, the scientist made a discovery." If subjects differ → coordination: "The scientist studied the data, AND the team made a discovery." Same-subject tests are the fastest single way to choose between participial and the other four techniques.'
    },
    {
      heading: 'How C3 connects to the rest of the module and the exam',
      body: 'C3 is the integrative chapter — it pulls together everything from C1, C2, and even Module A. Completion requires the phrase / clause diagnostic from C1 to identify the slot, and the error-fixing rules from C2 to detect problems in jumbled paragraphs. Rearrangement requires structural recognition (simple / compound / complex) and the modifier rules from C1. Combining uses subordination, coordination, and participial phrases — all taught in C2. C3 skills transfer to research-analysis writing (ra-scientific-reporting) where combining choppy data sentences is a routine task, and to environmental-science passages where general-to-specific structures dominate. Master the four completion filters and the three rearrangement signals (topic sentence + connectors + pronoun chains), and you will handle every integrative English question in FPSC papers.'
    }
  ],

  examPoints: [
    'Completion: grammar first, then agreement, then word class, then context.',
    'Rearrangement: identify the topic sentence (no referring pronouns at the start).',
    'Rearrangement signals: logical connectors, pronoun chains, time/cause-effect order — all three should converge.',
    'Combining techniques: subordination, coordination, participial, relative clause, apposition.',
    'Five paragraph patterns: chronological, cause-effect, problem-solution, compare-contrast, general-to-specific.',
    'Choosing combining technique: emphasis (main idea in IC), rhythm, subject match.'
  ],

  commonMistakes: [
    {
      mistake: 'Choosing a completion option that is grammatically possible but contextually absurd.',
      correction: 'Always test the option in the actual sentence context — substitute and read the whole sentence.',
      explanation: 'Grammar filters narrow the choice to 2-3 options, but the FINAL filter is CONTEXT logic. "The scientist made a ____ discovery" — grammatically, almost any adjective fits; contextually, only adjectives consistent with "discovery" (significant, surprising, accidental, groundbreaking) make sense. Choose the option that fits both.'
    },
    {
      mistake: 'Picking a sentence that begins with a referring pronoun as the topic sentence.',
      correction: 'Topic sentences rarely begin with "this / these / it / they / such" because there is nothing earlier to refer to.',
      explanation: '"This is a problem" or "These findings suggest" — these pronouns refer backward, so they cannot start a paragraph. The topic sentence is the most GENERAL statement and the one with no backward links. Use connector chains and pronoun references to place it correctly.'
    },
    {
      mistake: 'Leaving a paragraph as a sequence of short, unconnected simple sentences when combination would improve it.',
      correction: 'Combine related short sentences using subordination, coordination, or participial phrases.',
      explanation: 'Short simple sentences sound choppy and lose emphasis. Combine related ideas: "The rain fell. The crops grew." → "Because the rain fell, the crops grew." (subordination) OR "Falling steadily, the rain helped the crops grow." (participial). The combination restores rhythm and emphasis.'
    },
    {
      mistake: 'Ignoring logical connectors when ordering sentences.',
      correction: 'Use connectors (however, therefore, moreover, finally, for example) as order signals.',
      explanation: 'Connectors tell you what comes next. "However" signals a contrast (contrary idea follows). "Therefore" signals a consequence (effect follows). "Moreover" / "In addition" signal another supporting idea. "Finally" / "In conclusion" signal the end. Using connectors as anchors lets you place sentences even without reading them in detail.'
    }
  ],

  workedExample: {
    problem: 'Given the four jumbled sentences below, rearrange them into a logical paragraph and identify the combining technique used in any combined version. (A) "Meteorology has advanced significantly in recent decades." (B) "This has improved weather forecasting accuracy worldwide." (C) "For example, modern satellites provide continuous global coverage." (D) "However, predicting extreme weather events remains challenging."',
    solution: {
      'Step 1 — Identify the topic sentence': '(A) "Meteorology has advanced significantly in recent decades." is the topic. It is the most general statement, has no referring pronoun at the start, and can stand alone without context. (B) starts with "This" → must follow A. (C) starts with "For example" → illustrates something that precedes it. (D) starts with "However" → signals a contrast with the preceding positive ideas.',
      'Step 2 — Place the others using connectors and pronoun chains': '(A) → (B): "This" in B refers to "advancing significantly" in A. (B) → (C): "For example" in C illustrates the "improved forecasting" in B. (C) → (D): "However" in D contrasts with the preceding positive examples in B and C.',
      'Final order': 'A → B → C → D. "Meteorology has advanced significantly in recent decades. This has improved weather forecasting accuracy worldwide. For example, modern satellites provide continuous global coverage. However, predicting extreme weather events remains challenging."',
      'Combining version': 'A + B could be combined using RELATIVE clause or PARTICIPIAL phrase: "Meteorology, which has advanced considerably, has improved weather forecasting accuracy worldwide." (relative clause). Or: "Having advanced significantly in recent decades, meteorology has improved weather forecasting accuracy worldwide." (participial phrase). Both preserve the meaning and create smoother rhythm.'
    },
    takeaway: 'Always locate the topic sentence first using the no-referring-pronoun rule. Then use connector signals (this, however, for example, therefore, finally) to place each subsequent sentence. The three signals — pronouns, connectors, time/cause-effect — should all point to the same arrangement; if they disagree, connectors usually win.'
  },

  methodChooser: {
    scenario: 'You face a sentence-combining task and must choose the best technique to join two or more short sentences into one smoother structure.',
    options: [
      {
        name: 'Subordination',
        when: 'ONE idea is clearly the MAIN idea and the OTHER is a SUPPORTING idea (reason, time, condition, contrast, concession).',
        steps: ['Identify the main idea → keep it in the INDEPENDENT clause.', 'Identify the supporting idea → convert to a DEPENDENT clause using a subordinator (because, although, when, if, while, since, after, before).', 'Combine: subordinate clause (with subordinator) + comma + independent clause.']
      },
      {
        name: 'Coordination',
        when: 'BOTH ideas are EQUAL in importance; you want to give both ideas equal weight.',
        steps: ['Keep both as INDEPENDENT clauses.', 'Join with a COORDINATING conjunction (and, but, or, so, yet, for, nor — FANBOYS) + comma.', 'Or join with a semicolon if ideas are very closely linked.']
      },
      {
        name: 'Participial phrase',
        when: 'BOTH sentences have the SAME subject AND the actions are SIMULTANEOUS or one action describes HOW/WHY the other happened.',
        steps: ['Verify the same subject in both sentences.', 'Convert the LESS important sentence to a PARTICIPIAL phrase (-ing or -ed form).', 'Move the participial phrase next to the shared subject (often at the start).']
      },
      {
        name: 'Relative clause',
        when: 'One sentence contains a NOUN that the other sentence provides additional information about.',
        steps: ['Identify the common noun in both sentences.', 'Convert the LESS important sentence to a RELATIVE clause (who, which, that, whose).', 'Embed the relative clause next to the noun; add commas only if the clause is NON-DEFINING.']
      },
      {
        name: 'Apposition',
        when: 'One sentence RENAMES a noun in the other (the second sentence is essentially a definition or restatement of the first noun).',
        steps: ['Identify the noun being renamed.', 'Convert the renaming sentence to a NOUN PHRASE (appositive).', 'Place the appositive right after the original noun, set off with commas.']
      }
    ],
    recommendation: 'Use the SAME-SUBJECT test first: if both subjects match → participial phrase is often best. If subjects differ → use subordination or coordination. If one sentence adds ESSENTIAL info about a noun → relative clause. If one sentence RENAMES a noun → apposition.'
  },

  limitCases: [
    {
      case: 'Two sentences with the same subject but different TIMES',
      example: '"The scientist studied the data yesterday. She made a discovery today."',
      resolution: 'Cannot use participial phrase easily (times differ). Use subordination: "The scientist, who studied the data yesterday, made a discovery today." Or coordination with time markers: "The scientist studied the data yesterday, and today she made a discovery." Relative clause works because "who studied the data yesterday" modifies "scientist".'
    },
    {
      case: 'Two sentences with different subjects, no clear main/supporting',
      example: '"The team studied the data. The funding was approved."',
      resolution: 'No clear main idea → use COORDINATION: "The team studied the data, and the funding was approved." Or subordination if a causal or temporal relationship is implied: "After the team studied the data, the funding was approved." / "Because the team studied the data, the funding was approved." Choose based on the intended relationship.'
    },
    {
      case: 'Apposition vs relative clause — both seem possible',
      example: '"Dr. Khan is a meteorologist. He works at PMD."',
      resolution: 'APPOSITION: "Dr. Khan, a meteorologist, works at PMD." (renames Dr. Khan). RELATIVE CLAUSE: "Dr. Khan, who is a meteorologist, works at PMD." (adds info about Dr. Khan). Both work. Choose based on tone: apposition is more concise; relative clause is more flexible. If the info is ESSENTIAL → no commas ("Dr. Khan who works at PMD is a meteorologist" — defining). If NON-ESSENTIAL → commas on both sides (non-defining).'
    },
    {
      case: 'Completion where only one word is tested',
      example: '"The professor gave a ____ lecture." Options: (a) boring, (b) bored, (c) boredom, (d) bore.',
      resolution: 'Filter 1 — GRAMMAR: "a ____ lecture" → article "a" + adjective + noun. Only adjectives fit grammatically. (c) boredom = noun → eliminate. (d) bore = verb or noun → eliminate. (a) boring = present participle (active, "lecture that bores the audience"). (b) bored = past participle (passive, "lecture at which the audience is bored"). Filter 4 — CONTEXT: "The professor gave a ___ lecture" → "a boring lecture" (lecture that bores listeners) is more common than "a bored lecture" (the lecture feels bored — illogical). Answer: (a) boring.'
    },
    {
      case: 'Rearrangement where every sentence starts with a connector',
      example: 'Five sentences all beginning with "This, However, For example, Therefore, Finally" — impossible to choose?',
      resolution: 'Locate the sentence WITHOUT a connector (or with the weakest connector) — that is the topic sentence. Then read the connectors in order: the topic sentence will most often be followed by "This / These / It / Therefore" (summary or reference back to topic); "However" suggests a CONTRASTING idea follows; "For example" suggests an ILLUSTRATION; "Finally" suggests the LAST idea. Build the chain: TOPIC → [this / therefore] → [for example] → [however] → [finally].'
    }
  ],

  misconceptionRemediation: [
    {
      misconception: '"Completion is about vocabulary — the rarest word is always the answer."',
      remedy: 'Completion is primarily a GRAMMAR test, not a vocabulary test. The right answer fits the SLOT (correct part of speech, agreement, form) and the CONTEXT. Most options can be eliminated on grammar alone. Choose the option that BOTH fits the grammar AND fits the context; rare or impressive-sounding words are often decoys.',
      drill: 'Test each option for grammar first, then context. "She gave a ___ talk" — options like "soporific" (causing sleep) fit context; "mellifluous" (sweet-sounding) does not fit context (talks are not sweet-sounding).'
    },
    {
      misconception: '"Any sentence can be the topic sentence."',
      remedy: 'A TOPIC sentence is the most GENERAL statement of the paragraph and the one WITHOUT backward references. Sentences starting with referring pronouns ("This, It, They, These") cannot be the topic sentence because there is nothing to refer to. Look for the most abstract, general statement that could introduce the others.',
      drill: 'For each set, identify the topic sentence. Set 1: (a) "Pollution affects health." (b) "It causes respiratory diseases." (c) "Children are especially vulnerable." → Topic: (a). Set 2: (a) "The monsoon brings heavy rains." (b) "Climate change has altered these patterns." (c) "Pakistan is especially vulnerable." → Topic: (a) or (c) — the most general. (b) starts with "These" → refers back to (a) so (a) must precede (b).'
    },
    {
      misconception: '"Combining = just adding AND between sentences."',
      remedy: 'Joining with "and" creates a COMPOUND sentence but loses emphasis and rhythm. The five combining techniques (subordination, coordination, participial, relative, apposition) preserve MEANING while improving RHYTHM and EMPHASIS. "The rain fell. The crops grew." → "Because the rain fell, the crops grew." is BETTER than "The rain fell, and the crops grew." — the subordination shows that the rain caused the crops to grow.',
      drill: 'Combine each pair using the BEST technique (not always "and"): (a) "He studied hard. He failed." → "Although he studied hard, he failed." (subordination, contrast). (b) "The data was collected. The team analyzed it." → "Having collected the data, the team analyzed it." (participial, same subject "team"). (c) "Dr. Khan is a scientist. He won the award." → "Dr. Khan, a scientist, won the award." (apposition, renames).'
    },
    {
      misconception: '"If a paragraph has time words (first, then, finally), it must be chronological."',
      remedy: 'Time words can appear in CAUSE-EFFECT or PROBLEM-SOLUTION paragraphs too (e.g., "First, the problem arose; then, the solution was proposed"). Identify the DOMINANT pattern by asking: what is the paragraph trying to do? Chronology tells a story in time order. Cause-effect explains WHY something happened. Problem-solution presents a problem and a fix. Compare-contrast compares two ideas. General-to-specific gives examples. The pattern determines the order.',
      drill: 'Identify the pattern of each: (a) "Pollution is rising. Therefore, health is declining. For example, asthma rates have doubled." → CAUSE-EFFECT. (b) "Pollution rose in the 1990s. Then, it peaked in 2000. Finally, it declined after regulation." → CHRONOLOGICAL. (c) "Some pollutants are harmful. However, others are less so. On the other hand, regulation helps." → COMPARE-CONTRAST.'
    }
  ],

  comparisonTableEras: {
    title: '5 Combining Techniques — Side-by-Side Comparison',
    rows: [
      {
        feature: 'Best used when',
        subordination: 'One idea is main, the other supporting (cause, time, condition, concession).',
        coordination: 'Both ideas are equal in importance.',
        participial: 'Same subject in both sentences + simultaneous or causal action.',
        'relative-clause': 'One sentence adds information about a noun in the other.',
        apposition: 'One sentence renames/defines a noun in the other.'
      },
      {
        feature: 'Joining word',
        subordination: 'Subordinator (because, although, when, if, while, since, after, before).',
        coordination: 'FANBOYS (and, but, or, so, yet, for, nor) or semicolon.',
        participial: 'None — -ing / -ed form attaches to main clause.',
        'relative-clause': 'Relative pronoun (who, which, that, whose).',
        apposition: 'None — noun phrase directly renames the noun.'
      },
      {
        feature: 'Subject requirement',
        subordination: 'Subjects can differ.',
        coordination: 'Subjects can differ.',
        participial: 'Subjects must be the SAME.',
        'relative-clause': 'Subjects can differ.',
        apposition: 'Same noun referenced.'
      },
      {
        feature: 'Emphasis',
        subordination: 'Main idea in IC, supporting in DC.',
        coordination: 'Both ideas equal.',
        participial: 'Reduced action gets less emphasis.',
        'relative-clause': 'Noun in main clause gets emphasis.',
        apposition: 'Both nouns share emphasis.'
      },
      {
        feature: 'Punctuation',
        subordination: 'Comma after DC if DC comes first.',
        coordination: 'Comma before FANBOYS.',
        participial: 'Comma after participial phrase if it comes first.',
        'relative-clause': 'Comma only if NON-DEFINING (commas on both sides).',
        apposition: 'Comma on both sides.'
      },
      {
        feature: 'Example',
        subordination: '"Because the rain fell, the crops grew."',
        coordination: '"The rain fell, and the crops grew."',
        participial: '"Falling steadily, the rain helped the crops grow."',
        'relative-clause': '"The rain, which fell steadily, helped the crops grow."',
        apposition: '"The rain, a welcome sight, helped the crops grow."'
      }
    ]
  },

  postRestriction: [
    {
      rule: 'After a participial phrase at the START of a sentence, supply the subject that performs the action (no dangling modifier).',
      restriction: '"Having collected the data, the team analyzed it." — OK, "team" collected and analyzed. "Having collected the data, it was analyzed." → DANGLING, no subject performed "having collected".',
      consequence: 'A participial phrase at the start requires a grammatical subject in the main clause that can logically perform the action.'
    },
    {
      rule: 'After a subordinator at the START of a sentence, a comma is REQUIRED before the IC.',
      restriction: '"Although it rained, the match continued." (DC first → comma required). "Although it rained the match continued" → missing the required comma.',
      consequence: 'A DC at the START of a sentence requires a comma before the IC.'
    },
    {
      rule: 'After a non-defining relative clause (commas), the relative pronoun CANNOT be "that".',
      restriction: '"The scientist, who studied the data, presented it." — NON-defining, "who", commas. "The scientist, that studied the data, won the award." → INCORRECT, "that" cannot be used in non-defining clauses. "The scientist that studied the data won the award." → CORRECT, "that" used in defining clause, no commas.',
      consequence: '"that" is reserved for DEFINING clauses; "who / which" is required for NON-DEFINING clauses.'
    },
    {
      rule: 'In a paragraph, a sentence starting with "this / these / it / they" must be preceded by the sentence it refers to.',
      restriction: '"Meteorology is a science. This science has improved." → "This" refers to "Meteorology" in the previous sentence. "This science has improved. Meteorology is a science." → BROKEN order, "This" has no referent in the first sentence.',
      consequence: 'When rearranging jumbled sentences, ALWAYS place the sentence with a referring pronoun AFTER the sentence containing the antecedent.'
    }
  ],


    subtopics: [
      {
        id: "english-sentence-completion-rearrangement-completion-four-filters-in-order",
        title: "Completion — four filters in order",
        summary: "Apply filters in this sequence for speed and accuracy. (1) GRAMMAR / SLOT: read the whole sentence and identify what kind of word fills the…",
        explanation: "Apply filters in this sequence for speed and accuracy. (1) GRAMMAR / SLOT: read the whole sentence and identify what kind of word fills the blank — noun, verb, adjective, adverb, preposition, conjunction. The slot defines the grammatical category. (2) AGREEMENT and FORM: if the slot needs a singular noun, eliminate plural options; if past tense, remove present and future options. (3) WORD CLASS fit: even if the option is the right part of speech, check it agrees with surrounding grammar (e.g., the determiner ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-sentence-completion-rearrangement-rearrangement-start-with-the-topic-sente",
        title: "Rearrangement — start with the topic sentence",
        summary: "The opening sentence of a coherent paragraph almost never begins with a REFERRING pronoun (",
        explanation: "The opening sentence of a coherent paragraph almost never begins with a REFERRING pronoun (",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-sentence-completion-rearrangement-combining-five-techniques-to-merge-short",
        title: "Combining — five techniques to merge short sentences",
        summary: "Two short, related sentences can be joined using one of five techniques. Choose the technique that best preserves emphasis and rhythm. (a)…",
        explanation: "Two short, related sentences can be joined using one of five techniques. Choose the technique that best preserves emphasis and rhythm. (a) SUBORDINATION — make one sentence a dependent clause using a subordinator: ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-sentence-completion-rearrangement-five-common-paragraph-patterns-to-recogn",
        title: "Five common paragraph patterns to recognise",
        summary: "Five patterns appear repeatedly in FPSC papers. (1) CHRONOLOGICAL: events in time order — First… Then… Finally. (2) CAUSE-EFFECT: A causes…",
        explanation: "Five patterns appear repeatedly in FPSC papers. (1) CHRONOLOGICAL: events in time order — First… Then… Finally. (2) CAUSE-EFFECT: A causes B — Because/Since X, Y. Therefore/Consequently. (3) PROBLEM-SOLUTION: problem stated → solution proposed. (4) COMPARE-CONTRAST: two ideas compared — Similarly/However/In contrast. (5) GENERAL-TO-SPECIFIC: broad statement → specific examples (For example / For instance). Recognising which pattern the jumbled paragraph follows lets you arrange sentences logically even without reading each one in detail. The connectors and pronoun references almost always fit one of these five patterns. When in doubt, ask: what is the paragraph trying to do — tell a story, explain a cause, propose a fix, compare ideas, or illustrate a concept?",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-sentence-completion-rearrangement-combining-choosing-the-right-technique",
        title: "Combining — choosing the right technique",
        summary: "Not all combinations are equally effective. Choose based on three principles. (1) EMPHASIS: the more important idea goes in the INDEPENDENT…",
        explanation: "Not all combinations are equally effective. Choose based on three principles. (1) EMPHASIS: the more important idea goes in the INDEPENDENT clause (the one that can stand alone); the less important idea goes in the DEPENDENT clause. (2) RHYTHM: too many short simple sentences sound choppy; vary with complex structures. (3) SUBJECT MATCH: if both sentences have the SAME subject, a participial phrase works well; if subjects DIFFER, use subordination or coordination. Worked example: ",
        examples: [],
        shortcuts: [],
        traps: [],
      },
      {
        id: "english-sentence-completion-rearrangement-how-c3-connects-to-the-rest-of-the-modul",
        title: "How C3 connects to the rest of the module and the exam",
        summary: "C3 is the integrative chapter — it pulls together everything from C1, C2, and even Module A. Completion requires the phrase / clause…",
        explanation: "C3 is the integrative chapter — it pulls together everything from C1, C2, and even Module A. Completion requires the phrase / clause diagnostic from C1 to identify the slot, and the error-fixing rules from C2 to detect problems in jumbled paragraphs. Rearrangement requires structural recognition (simple / compound / complex) and the modifier rules from C1. Combining uses subordination, coordination, and participial phrases — all taught in C2. C3 skills transfer to research-analysis writing (ra-scientific-reporting) where combining choppy data sentences is a routine task, and to environmental-science passages where general-to-specific structures dominate. Master the four completion filters and the three rearrangement signals (topic sentence + connectors + pronoun chains), and you will handle every integrative English question in FPSC papers.",
        examples: [],
        shortcuts: [],
        traps: [],
      },
    ],
  relatedTopics: [
    'english-sentence-building-blocks',
    'english-sentence-types-errors-transformation',
    'english-pronouns-prepositions-conjunctions'
  ],
  content: true,
  examScope: ['bs17', 'bs16'],
  buildsOn: [
    'english-sentence-types-errors-transformation',
    'english-word-formation-and-context'
  ],
  leadsTo: [],
  usedIn: [
    'ra-scientific-reporting',
    'env-pakistan-environmental-context'
  ]
}
];

