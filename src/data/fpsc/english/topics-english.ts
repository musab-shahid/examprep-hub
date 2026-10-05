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
// ENGLISH — MODULE C: Sentence Structuring (UPGRADED)
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
    'A sentence is built from smaller units: words form phrases, phrases form clauses, and clauses form sentences. The decisive distinction is between a PHRASE (no subject + finite verb) and a CLAUSE (has both). Master this and every later construction error — fragment, run-on, comma splice, dangling modifier — becomes mechanical to diagnose and fix.',
  keyFacts: [
    'Word: smallest meaningful unit; cannot stand alone as a sentence (e.g., "meteorology", "runs", "because").',
    'Phrase: group of words with NO subject + finite verb. It cannot stand alone as a sentence.',
    'Clause: group of words containing BOTH a subject and a finite verb.',
    'Independent (main) clause: can stand alone as a complete sentence. "The rain fell."',
    'Dependent (subordinate) clause: cannot stand alone; begins with a subordinating word (because, although, when, if, who, which, that, where, since).',
    'DIAGNOSTIC TEST: if both subject and finite verb are present → clause. If either is missing → phrase. If the unit is punctuated as a sentence but cannot stand alone → fragment.',
    '8 PHRASE TYPES: (1) NOUN phrase (the heavy rain, a brilliant scientist); (2) VERB phrase (is studying, will have been analyzing); (3) ADJECTIVE phrase (very humid, eager to learn); (4) ADVERB phrase (very quickly, in the morning); (5) PREPOSITIONAL phrase (in the atmosphere, on the surface); (6) PARTICIPIAL phrase (running quickly, destroyed by the storm); (7) GERUND phrase (studying hard, predicting the weather); (8) INFINITIVE phrase (to predict, to be reliable).',
    '3 SUBORDINATE-CLAUSE TYPES: (1) ADVERBIAL (answers when/why/how/under what condition — because, when, if, although, while); (2) RELATIVE/ADJECTIVE (modifies a noun — who, which, that, whose); (3) NOUN (acts as subject or object — that, whether, what, who).',
    'ADVERBIAL clause examples: "When the rain stops" (when), "Because the storm was severe" (why), "If the data confirms" (condition), "Although it rained" (concession).',
    'RELATIVE clause examples: "The scientist who discovered this" (modifies scientist); "The data that was collected" (modifies data); "The building whose roof fell" (modifies building with whose = its roof).',
    'NOUN clause examples: "That he was right surprised me" (noun clause as subject); "I know what he meant" (noun clause as object); "Whether he comes is unclear" (noun clause as subject).',
    'Sentence: one or more clauses that express a complete thought and carry end punctuation (. ? !).',
    'PHRASE TYPES you must diagnose: prepositional (in/on/at + noun), participial (-ing or -ed + modifiers, NO subject-verb), gerund (verb + -ing used as noun), infinitive (to + verb).',
    'Common fragment traps: participial phrase alone ("Running through the field"); prepositional phrase alone ("In the morning"); dependent clause alone ("Because the storm was severe").',
    'Relative clause restriction: DEFINING ("The scientists who studied the data concluded…" — no commas, narrows meaning); NON-DEFINING ("The scientists, who studied the data, concluded…" — adds commas, just adds info).'
  ],
  explanationSections: [
    {
      heading: 'The phrase-vs-clause test — the foundation of every other rule',
      body: 'The single most useful diagnostic in English grammar: ask two questions of any word group. (1) Is there a SUBJECT? (2) Is there a FINITE VERB (one that changes with tense: is, was, will be, has, did)? Both present → CLAUSE. One or both missing → PHRASE. This test alone resolves fragments, comma splices, and dangling modifiers. Worked examples: "Running through the field" → no subject, no finite verb → phrase. "Because the storm was severe" → has subject (storm) and finite verb (was), but begins with subordinator → DEPENDENT clause. "The rain fell" → has subject (rain) and finite verb (fell) → INDEPENDENT clause. Apply this test first; everything else is downstream of it.'
    },
    {
      heading: '8 phrase types — what they look like',
      body: 'Phrases are NOT all the same; they play different roles in sentences. (1) NOUN phrase: a noun + its modifiers — "the heavy rain", "a brilliant scientist". Functions as subject, object, or complement. (2) VERB phrase: a main verb + its helpers and modifiers — "is studying hard", "will have been analyzing". Functions as the predicate. (3) ADJECTIVE phrase: describes a noun — "very humid", "eager to learn". (4) ADVERB phrase: describes a verb/adjective/adverb — "very quickly", "in the morning". (5) PREPOSITIONAL phrase: preposition + object — "in the atmosphere", "on the surface". (6) PARTICIPIAL phrase: -ing or -ed + modifiers, NO finite verb — "Running quickly", "destroyed by the storm". (7) GERUND phrase: verb + -ing used as NOUN — "Studying hard is essential". (8) INFINITIVE phrase: to + verb + modifiers — "to predict", "to be reliable". Recognising the type tells you what role the phrase plays.'
    },
    {
      heading: '3 subordinate-clause functions and how to recognise each',
      body: 'A dependent clause can perform three different jobs. (1) ADVERBIAL clause — answers when/why/how/under what condition. It contains a subordinator of time (when, after, before), cause (because, since), concession (grant), purpose (so that), or condition (if, unless). "Because the storm was severe" answers WHY. (2) RELATIVE/ADJECTIVE clause — modifies a noun, introduced by who/whom/which/that/whose. "The scientist WHO discovered this" — modifies "scientist". (3) NOUN clause — acts as subject, object, or complement. "THAT he was right surprised me" — "that he was right" is the SUBJECT of "surprised". "I know WHAT he meant" — "what he meant" is the OBJECT of "know". Diagnostic: can it stand alone? If no, what role does it play? If it modifies a noun → relative. If it answers when/why/how → adverbial. If it acts as subject/object → noun.'
    },
    {
      heading: 'Fragments — three common forms and how to fix them',
      body: 'A FRAGMENT is a phrase or dependent clause punctuated as a sentence. Three common forms: (1) PARTICIPIAL phrase as fragment: "Running through the field." → Fix: attach to a main clause ("Running through the field, the dog barked") OR require a main verb. (2) PREPOSITIONAL phrase as fragment: "In the morning." → Fix: attach to a main clause ("In the morning, we left"). (3) DEPENDENT clause as fragment: "Because the storm was severe." → Fix: combine with an independent clause ("Because the storm was severe, schools closed" OR "The storm was severe, so schools closed"). The diagnostic for fragments: apply the phrase-vs-clause test. If it is a phrase or dependent clause AND is punctuated as a sentence, it is a fragment.'
    },
    {
      heading: 'Defining vs non-defining — when to use commas',
      body: 'RELATIVE clauses split into two categories. (1) DEFINING (also called identifying) — narrows down the noun; NO commas; ESSENTIAL meaning. "The scientists WHO studied the data concluded…" (which scientists? the ones who concluded → defines). Removing the clause changes the meaning. (2) NON-DEFINING (also called non-restrictive) — adds extra information; COMMAS required; NON-ESSENTIAL meaning. "The scientists, WHO STUDIED THE DATA, concluded…" (we already know which scientists; the clause just adds info). Removing the clause does not change the meaning — only adds detail. Diagnostic: try removing the relative clause. If the meaning changes → defining (no commas). If the meaning is unchanged → non-defining (use commas).'
    },
    {
      heading: 'How C1 connects to upcoming topics',
      body: 'C1 is the foundation for the entire sentence-structuring module and feeds back into earlier chapters. C2 (Sentence Types & Errors) uses the phrase-vs-clause test to identify fragments, run-ons, comma splices, and dangling modifiers. C3 (Completion, Rearrangement, Combining) requires you to see clause structure to choose the right grammatical slot (completion), identify the topic sentence (rearrangement), and join sentences without creating rules (rule of thumb). Even Module A benefits: agreement requires identifying the subject (often inside a phrase); voice change requires identifying the object (inside a clause); reported speech requires identifying what is independent vs dependent. Master C1\'s diagnostic test and you will recognize structural errors all the time.'
    }
  ],
  examPoints: [
    'Phrase vs clause test: subject + finite verb → clause; missing either → phrase.',
    '8 phrase types: noun, verb, adjective, adverb, prepositional, participial, gerund, infinitive.',
    '3 subordinate-clause types: adverbial (when/why/how), relative (modifies noun), noun (subject/object).',
    'Fragments come from participial phrases, prepositional phrases, and dependent clauses.',
    'Defining relative clauses (no commas) vs non-defining (commas required).',
    'Diagnostic test: remove the relative clause — meaning changes → no commas; else change → commas required.'
  ],
  commonMistakes: [
    {
      mistake: '"Because the storm was severe." — dependent clause written as a fragment.',
      correction: '"Because the storm was severe, schools were closed." OR "The storm was severe, so schools were closed."',
      explanation: '"Because the storm was severe" is a dependent clause (subordinator + subject + finite verb). It cannot stand alone. Fix by joining it to an independent clause. The subordinator + comma structure is the most direct fix.'
    },
    {
      mistake: '"Running through the field." — participial phrase written as a fragment.',
      correction: '"Running through the field, the dog disappeared into the distance." OR "The dog was running through the field."',
      explanation: '"Running through the field" is a participial phrase (verb-ing + modifiers, NO subject + finite verb). To fix, attach it to a main clause that supplies the subject performing the action. The dangling participle trap is also fixed this way.'
    },
    {
      mistake: '"The scientist with expertise in meteorology." — noun + prepositional phrase as fragment.',
      correction: '"The scientist with expertise in meteorology gave the lecture." OR "The scientist, who had expertise in meteorology, gave the lecture."',
      explanation: '"The scientist with expertise in meteorology" is a noun + prepositional phrase. It has no finite verb. To fix, add a main verb (gave the lecture) or convert the prepositional phrase to a relative clause.'
    },
    {
      mistake: '"The scientists who studied the data, concluded that…" — comma after "data" before "concluded".',
      correction: '"The scientists who studied the data concluded that…" (no comma) — or — "The scientists, who studied the data, concluded that…" (commas on both sides).',
      explanation: 'Two different clauses. (1) "who studied the data" is DEFINING — it narrows down "scientists" (which ones? the ones who studied → define) → NO commas. (2) "who studied the data" is NON-DEFINING — it just adds info (we already know which scientists) → COMMAS on both sides. Choose one; don\'t add a comma mid-defining clause.'
    }
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
    'Sentences are classified by STRUCTURE (simple, compound, complex, compound-complex) and by PURPOSE (declarative, interrogative, imperative, exclamatory). The most tested errors are fragments, run-ons, comma splices, misplaced/dangling modifiers, and failures of parallel structure. Transformation converts one structural type into another while preserving meaning.',
  keyFacts: [
    '4 STRUCTURE TYPES: (1) SIMPLE — one independent clause. "The rain fell." (2) COMPOUND — two or more independent clauses joined by a coordinating conjunction (FANBOYS) or a semicolon. "The rain fell, and the crops grew." (3) COMPLEX — one independent clause + at least one dependent clause. "Because the rain fell, the crops grew." (4) COMPOUND-COMPLEX — two or more independent clauses + at least one dependent clause. "Because the rain fell, the crops grew, and the farmers rejoiced."',
    '4 PURPOSE TYPES: DECLARATIVE (statement — ends in period), INTERROGATIVE (question — ends in question mark), IMPERATIVE (command — usually ends in period, subject "you" is implied), EXCLAMATORY (strong feeling — ends in exclamation mark, begins with what/how).',
    'FRAGMENT: a phrase or dependent clause written as if it were a complete sentence.',
    'RUN-ON (FUSED SENTENCE): two independent clauses joined with NO punctuation or conjunction. "It was raining we stayed inside."',
    'COMMA SPLICE: two independent clauses joined by ONLY a comma. "It was raining, we stayed inside."',
    'Three fixes for comma splice / run-on: (1) period (form two sentences), (2) semicolon (when clauses are closely related), (3) comma + coordinating conjunction (FANBOYS).',
    'MISPLACED MODIFIER: descriptive phrase placed so that it appears to modify the wrong word. "She served cake to the children in plastic bags" → unclear whether children or cake are in bags.',
    'DANGLING MODIFIER: descriptive phrase with nothing logical to modify. "Walking into the room, the desk was messy" → desk does not walk.',
    'Fix for misplaced/dangling: place the modifier next to the word it modifies; or rewrite so the implied subject is the actual subject.',
    'PARALLEL STRUCTURE: items in a series (or on either side of a correlative conjunction) must share the SAME grammatical form.',
    'Common transformation pairs: simple ↔ compound (add/remove coordinator), simple ↔ complex (add/remove subordinator), active ↔ passive (object → subject + be + past participle), direct ↔ indirect (tense + pronoun + time shifts).',
    'TRANSFORMATION RULE: keep the original meaning and change ONLY the required structure; do not add information that is not in the original.'
  ],
  explanationSections: [
    {
      heading: 'The 4 structure types — recognise each at a glance',
      body: 'To classify a sentence, count its INDEPENDENT clauses and DEPENDENT clauses. (1) SIMPLE: 1 independent + 0 dependent. "The rain fell." (2) COMPOUND: 2+ independent + 0 dependent. "The rain fell, and the crops grew." (3) COMPLEX: 1 independent + 1+ dependent. "Because the rain fell, the crops grew." (4) COMPOUND-COMPLEX: 2+ independent + 1+ dependent. "Because the rain fell, the crops grew, and the farmers rejoiced." Diagnostic: split at every conjunction + subordinator + semicolon, then check each unit for subject + finite verb. The classification determines how the sentence is punctuated and what transformations are possible.'
    },
    {
      heading: 'The four classic construction errors and how to fix each',
      body: 'Fragment — add the missing independent clause or attach the fragment to a neighbouring sentence. "Run through the field." → "She ran through the field." OR "Running through the field, she felt free." Run-on — insert a period, semicolon, or coordinating conjunction. "It was raining we stayed inside" → "It was raining, SO we stayed inside." Comma splice — replace the comma with a period, semicolon, or conjunction. "It was raining, we stayed inside" → "It was raining. We stayed inside." Dangling / misplaced modifier — place the modifier next to the word it actually describes, or rewrite so the subject is clear. "Walking into the room, the desk was messy" → "Walking into the room, I saw the messy desk." Each error has a diagnostic test; each fix has a defined mechanical procedure.'
    },
    {
      heading: 'Parallel structure — the "list + each" principle',
      body: 'When items appear in a list or are joined by both…and, either…or, not only…but also, they must use the SAME grammatical shape. Worked example (wrong): "She likes swimming, to run and biking" → mixed forms (gerund + infinitive + gerund). Worked example (right): "She likes swimming, running and biking" (all gerunds) OR "She likes to swim, to run and to bike" (all infinitives). Same principle for longer phrases and clauses: "He is BOTH a scholar AND a teacher" (noun + noun); "He is BOTH intelligent AND articulate" (adj + adj). The test: replace one item with "and the other thing" and check if the grammar still works. "She likes swimming, to run and biking" — "She likes swimming, to run and the other thing" → grammar breaks. The fix: make all items the same form.'
    },
    {
      heading: 'Misplaced vs dangling modifiers — the placement test',
      body: 'Both modifiers attach descriptive phrases that don\'t land where intended. (1) MISPLACED: the modifier is placed too far from the noun it modifies, creating ambiguity. "She served cake to the children in plastic bags" → unclear whether the children or the cake were in plastic bags. Fix: move the modifier. "She served cake IN PLASTIC BAGS to the children." (2) DANGLING: the modifier has no logical subject at all. "Walking into the room, the desk was messy" → the desk does not walk. Fix: supply the correct subject. "Walking into the room, HE SAW the messy desk." OR rewrite without the modifier: "When he walked into the room, the desk was messy." The diagnostic: who/what does the modifier attach to? If unclear → misplaced; if nothing → dangling.'
    },
    {
      heading: 'Transformation — controlled rewriting preserves meaning',
      body: 'Keep the original meaning and change ONLY the required structure. Five common types: (1) ACTIVE → PASSIVE: move the object to subject position; verb → be + past participle. "The storm destroyed the houses" → "The houses were destroyed by the storm." (2) DIRECT → INDIRECT: apply tense shift, pronoun shift, time/place marker shift (already in A4). (3) SIMPLE → COMPLEX: turn one independent clause into a subordinate clause. "The rain fell. The crops grew." → "Because the rain fell, the crops grew." (4) SIMPLE → COMPOUND: join two related simple sentences with a coordinating conjunction. "The rain fell. The crops grew." → "The rain fell, AND the crops grew." (5) COMPOUND → SIMPLE: convert one independent clause into a participial phrase. "The rain fell, and the crops grew" → "Falling steadily, the rain helped the crops grow." The rule: change the form, not the meaning.'
    },
    {
      heading: 'How C2 connects to upcoming topics',
      body: 'C2 builds on C1\'s phrase/clause diagnostic and feeds into C3 directly. C3 (Completion, Rearrangement, Combining) uses the four-structure classification (simple/compound/complex/compound-complex) for combining tasks, the parallel-structure rule for completion, and the four-error diagnostic for identifying problems in jumbled paragraphs. Even research-analysis (ra-scientific-reporting) and environmental-science passages require these same diagnostic skills. Master the four-error fix list (fragment, run-on, comma splice, modifier) and the transformation table (active↔passive, simple↔compound↔complex), and you\'ll handle every construction-error question in FPSC papers.'
    }
  ],
  examPoints: [
    '4 structure types: simple (1 IC), compound (2+ IC), complex (1 IC + 1+ DC), compound-complex (2+ IC + 1+ DC).',
    '4 purpose types: declarative, interrogative, imperative, exclamatory.',
    '4 classic errors: fragment, run-on, comma splice, misplaced/dangling modifier — each has a defined fix.',
    'Parallel structure: same grammatical form on both sides of correlative conjunction / in lists.',
    'Transformation: change structure, preserve meaning; never add new information.',
    'Active → passive: object → subject, verb → be + past participle, by + agent optional.'
  ],
  commonMistakes: [
    {
      mistake: '"It was raining, we stayed inside." — comma splice (two independent clauses joined by only a comma).',
      correction: '"It was raining, SO we stayed inside." OR "It was raining. We stayed inside." OR "It was raining; we stayed inside."',
      explanation: 'Two independent clauses cannot be joined by only a comma. Three fixes: (1) comma + coordinating conjunction (FANBOYS), (2) period (form two sentences), (3) semicolon (closely related clauses). Choose the fix that best matches the intended rhythm.'
    },
    {
      mistake: '"The scientist running the experiment." — fragment (no finite verb).',
      correction: '"The scientist WAS running the experiment." OR "The scientist, running the experiment, made a discovery."',
      explanation: '"Running the experiment" is a participial phrase (no finite verb). To fix, add a finite verb (was running) or attach the participial phrase to a main clause that supplies the subject.'
    },
    {
      mistake: '"He likes swimming, to run and biking." — mixed forms (not parallel).',
      correction: '"He likes swimming, running and biking" (all gerunds) OR "He likes to swim, to run and to bike" (all infinitives).',
      explanation: 'Items in a list must use the SAME grammatical form. The test: replace one item with "and the other thing" — if grammar breaks, the items are not parallel. "He likes swimming, to run and the other thing" breaks; parallelise by choosing one form throughout.'
    },
    {
      mistake: '"Walking into the room, the desk was messy." — dangling modifier (desk does not walk).',
      correction: '"Walking into the room, I saw the messy desk." OR "When I walked into the room, the desk was messy."',
      explanation: 'The modifier "Walking into the room" requires a subject who walks (a person), but the main clause\'s subject is "the desk" (which does not walk). Fix: supply the correct subject as the main clause\'s subject, or rewrite without the dangling modifier.'
    },
    {
      mistake: '"She served cake to the children in plastic bags." — misplaced modifier (unclear whether children or cake are in bags).',
      correction: '"She served cake IN PLASTIC BAGS to the children." OR "She served to the children cake that was in plastic bags."',
      explanation: 'The modifier "in plastic bags" is too far from "cake" and creates ambiguity. Move the modifier next to the word it modifies. The fix restores clarity by physical proximity.'
    }
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
    'Completion tests the ability to supply the grammatically and logically correct word or phrase in a blank. Rearrangement tests the ability to restore a logical paragraph order from jumbled sentences. Combining tests the ability to merge short, choppy sentences into smoother structures using subordination, coordination, or participial phrases.',
  keyFacts: [
    'COMPLETION procedure: (1) read the whole sentence, (2) decide the required word class (noun / verb / adjective / adverb / preposition), (3) check agreement and form (singular vs plural, tense, article), (4) check that the meaning fits the context.',
    'COMPLETION filters (in order): (a) grammar/slot match, (b) agreement and form, (c) word class fit, (e) context logic.',
    'REARRANGEMENT procedure: (1) locate the TOPIC sentence (usually the most general statement; never begins with "this/these/it/they" referring earlier), (2) follow logical connectors (however, therefore, moreover, finally, for example, on the other hand), (3) track pronoun and demonstrative references (this, these, such, it, they, them), (4) respect chronological or cause–effect order.',
    'Topic sentence signals: most abstract/general statement, no referring pronouns at the start, can stand alone without context.',
    'Logical connectors that signal order: HOWEVER, THEREFORE, MOREOVER (add); FOR EXAMPLE (illustration); ON THE OTHER HAND (contrast); FINALLY, IN CONCLUSION (end); FIRST, NEXT, THEN (sequence).',
    'Pronoun chain signals: if sentence Y uses "this/these/it" to refer to something in sentence X, then X must come before Y.',
    'COMBINING techniques: (a) SUBORDINATION (because, although, when, if, while, since, after); (b) COORDINATION (and, but, or, so, yet, for, nor — FANBOYS); (c) PARTICIPIAL phrases (-ing/-ed + modifiers); (d) RELATIVE clauses (who, which, that, whose); (e) APPOSITION (noun phrase that renames another noun).',
    'COMMON paragraph patterns: chronological (time order), cause–effect (because…therefore), problem–solution (problem…solution), compare–contrast (similarly…however), general-to-specific (general statement → example).',
    'Combining choice rule: SUBORDINATION > COORDINATION when one idea is more important than the other; use a participial phrase when the action is simultaneous or when the subject is the same.',
    'Completion trap: a grammatically possible option that is CONTEXTUALLY absurd — always test the option in the actual sentence context.'
  ],
  explanationSections: [
    {
      heading: 'Completion — four filters in order',
      body: 'Apply filters in this sequence for speed and accuracy. (1) GRAMMAR/SLOT: read the whole sentence and identify what kind of word fills the blank (noun, verb, adjective, adverb, preposition, conjunction). (2) AGREEMENT and FORM: if the slot needs a singular noun, eliminate plural options; if past tense, remove present/future options. (3) WORD CLASS fit: even if the option is the right part of speech, check it agrees with surrounding grammar. (4) CONTEXT logic: finally, test the remaining options for sense. "The research produced SURPRISING ____" — grammar (adjective), agreement (any), word class (only adjectives/adjective phrases fit), context (something the research produced that is surprising). Worked example: "The professor gave a ____ lecture." (a) grammar: article "a" + noun; (b) agreement: singular; (c) word class: noun; (d) context: lecture type. Eliminate all non-noun options first, then choose the noun that fits the lecture context.'
    },
    {
      heading: 'Rearrangement — start with the topic sentence',
      body: 'The opening sentence of a coherent paragraph almost never begins with a REFERRING pronoun ("This…", "These…", "It…", "They…") because there is nothing earlier for it to refer to. The topic sentence is usually the most general statement and the one without backward references. Once the topic sentence is fixed, the remaining sentences fall into place using three signals: (1) LOGICAL CONNECTORS — however, therefore, moreover, finally, for example, on the other hand signal what comes next. (2) PRONOUN CHAINS — if sentence Y starts with "This", "These", "It", or "Such", sentence X (which it refers to) must come immediately before Y. (3) TIME/CAUSE-EFFECT order — chronological events follow time; cause precedes effect. Use them; ALL three should converge on the same arrangement; if they conflict, the connectors usually win.'
    },
    {
      heading: 'Combining — five techniques to merge short sentences',
      body: 'Two short, related sentences can be joined using one of five techniques. Choose the technique that best preserves emphasis and rhythm. (a) SUBORDINATION — make one sentence a dependent clause using a subordinator: "The rain fell. The crops grew." → "BECAUSE the rain fell, the crops grew." (b) COORDINATION — join with a coordinating conjunction: → "The rain fell, AND the crops grew." (c) PARTICIPIAL phrase — convert one sentence to a -ing/-ed phrase: → "FALLING steadily, the rain helped the crops grow." (d) RELATIVE clause — make one sentence a relative clause: → "The rain, WHICH fell steadily, helped the crops grow." (e) APPOSITION — rename a noun with a noun phrase: → "The rain, A WELCOME SIGHT, helped the crops grow." The combination rule: prefer subordination when one idea is more important; coordination when ideas are equal; participial phrases when actions are simultaneous and the subject is the same.'
    },
    {
      heading: 'Common paragraph patterns to recognise',
      body: 'Five patterns appear repeatedly in FPSC papers. (1) CHRONOLOGICAL: events in time order — First… Then… Finally. (2) CAUSE-EFFECT: A causes B — Because/Since X, Y. Therefore/Consequently. (3) PROBLEM-SOLUTION: problem stated → solution proposed. (4) COMPARE-CONTRAST: two ideas compared — Similarly/However/In contrast. (5) GENERAL-TO-SPECIFIC: broad statement → specific examples. Recognising which pattern the jumbled paragraph follows lets you arrange sentences logically even without reading each one in detail. The connectors and pronoun references almost always fit one of these five patterns.'
    },
    {
      heading: 'Combining — choosing the right technique',
      body: 'Not all combinations are equally effective. Choose based on three principles. (1) EMPHASIS: the more important idea goes in the INDEPENDENT clause (the one that can stand alone); the less important idea goes in the DEPENDENT clause. (2) RHYTHM: too many short simple sentences sound choppy; vary with complex structures. (3) SUBJECT MATCH: if both sentences have the SAME subject, a participial phrase works well; if subjects DIFFER, use subordination or coordination. Worked example: "The scientist studied the data. The scientist made a discovery." → Both have "The scientist" → participial: "STUDYING the data, the scientist made a discovery." If subjects differ → coordination: "The scientist studied the data, AND the team made a discovery."'
    },
    {
      heading: 'How C3 connects to upcoming topics',
      body: 'C3 is the integrative chapter — it pulls together everything from C1, C2, and even Module A. Completion requires the phrase/clause diagnostic from C1 to identify the slot, and the error-fixing rules from C2 to detect problems. Rearrangement requires structural recognition (simple/compound/complex) and the modifier rules. Combining uses subordination, coordination, and participial phrases — all taught earlier. C3 skills transfer to research-analysis writing (ra-scientific-reporting) where combining choppy data sentences is a common task, and to environmental-science passages where general-to-specific structures dominate. Master the four completion filters and the rearrangement signals, and you\'ll handle every integrative English question in FPSC papers.'
    }
  ],
  examPoints: [
    'Completion: grammar first, then agreement, then word class, then context.',
    'Rearrangement: identify the topic sentence (no referring pronouns at the start).',
    'Rearrangement signals: logical connectors, pronoun chains, time/cause-effect order.',
    'Combining techniques: subordination, coordination, participial, relative, apposition.',
    'Five paragraph patterns: chronological, cause-effect, problem-solution, compare-contrast, general-to-specific.',
    'Choosing technique: emphasis, rhythm, subject match.'
  ],
  commonMistakes: [
    {
      mistake: 'Choosing a completion option that is grammatically possible but contextually absurd.',
      correction: 'Always test the option in the actual sentence context — substitute and read the whole sentence.',
      explanation: 'Grammar filters narrow the choice to 2-3 options, but the FINAL filter is CONTEXT logic. "The scientist made a ____ discovery" — grammatically, almost any adjective fits; contextually, only adjectives consistent with "discovery" (significant, surprising, accidental, groundbreaking) make sense. Choose the option that fits both.'
    },
    {
      mistake: 'Picking a sentence that begins with a referring pronoun as the topic sentence.',
      correction: 'Topic sentences rarely begin with "this/these/it/they/such" because there is nothing earlier to refer to.',
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
      explanation: 'Connectors tell you what comes next. "However" signals a contrast (contrary idea follows). "Therefore" signals a consequence (effect follows). "Moreover" / "in addition" signal another supporting idea. "Finally" / "in conclusion" signal the end. Using connectors as anchors lets you place sentences even without reading them in detail.'
    }
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