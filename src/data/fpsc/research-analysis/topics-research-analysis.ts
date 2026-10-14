// topics-research-analysis.ts — FPSC Research & Analysis content bank
// 12 topics covering the full 7A Research Methods & Data syllabus
// All topics: postRestriction "bs17" (Meteorologist BS-17 only; 
// BS-16 aspirants should skip entirely and focus on Earth Sciences 
// or Environmental Studies).
//
// Question types: matching, true/false, conceptual, calculation, 
// interpretation. Statistics questions use simple calculations; 
// correlation/regression questions test interpretation over computation.

import type { Topic } from '@/types';

export const topics: Topic[] = [

// ═══════════════════════════════════════════════════════════════════
// RA-1: Scientific Method
// ═══════════════════════════════════════════════════════════════════

{
  id: "ra-scientific-method",
  sectionId: "RA-01",
  order: 1,
  title: "Scientific Method",
  definition:
    "A systematic process for producing reliable knowledge: observe a phenomenon, ask a focused question, propose a testable and falsifiable hypothesis, derive predictions, test them under controlled conditions, analyse results, draw conclusions, and allow independent replication. The goal is to reduce bias and separate claims that survive evidence from those that do not.",
  keyFacts: [
    "Typical cycle: Observation → Question → Hypothesis → Prediction → Experiment/Test → Analysis → Conclusion → Replication",
    "Hypothesis: a tentative explanation that is TESTABLE and FALSIFIABLE (evidence could show it is wrong)",
    "Theory: a broad, well-supported explanation that has survived repeated testing (explains WHY)",
    "Law: a descriptive generalisation about regular behaviour in nature (describes WHAT; does not by itself explain why)",
    "Model: a simplified representation used to understand a system and make predictions",
    "Independent variable (IV): what the researcher manipulates (the presumed cause)",
    "Dependent variable (DV): what is measured (the presumed effect)",
    "Controlled variables: factors held constant so the IV’s effect can be isolated",
    "Extraneous / confounding variables: unwanted factors that also vary and can distort the DV",
    "Deductive reasoning: general principle → specific prediction (top-down)",
    "Inductive reasoning: specific observations → broader generalisation (bottom-up)",
    "Abductive reasoning: incomplete observations → most plausible explanation among rivals",
  ],
  explanationSections: [
    {
      heading: "Falsifiability — the line between science and non-science",
      body:
        "A scientific hypothesis must be capable of being proven wrong by evidence. Claims such as “it is what it is” or “untestable supernatural forces caused it” are not scientific because no observation could refute them. “All swans are white” is scientific: it is clear, testable, and was falsified when black swans were observed in Australia. Science advances by risking being wrong, not by protecting claims from scrutiny.",
    },
    {
      heading: "Variables: IV, DV, controls, and confounders",
      body:
        "IV = what you change (e.g. fertiliser dose). DV = what you measure (e.g. plant height). Controlled variables = same soil, light, water, pot size — so differences in the DV can be attributed to the IV. Confounders are extras that slip in (e.g. one group gets more sunlight by accident). Strong design anticipates confounders and holds them constant, randomises, or measures them. Memory aid: you CHANGE the independent variable; you MEASURE the dependent variable.",
    },
    {
      heading: "Deductive, inductive, and abductive reasoning",
      body:
        "Deductive: from a general rule to a specific prediction (If all metals expand when heated, this metal rod should expand). Inductive: from many specific cases to a general claim (These 200 samples showed pattern X → perhaps all similar cases do). Abductive: from puzzling facts to the best current explanation (symptoms + context → most likely diagnosis). Real research often uses all three: abduction to generate hypotheses, deduction to predict what must follow if the hypothesis is true, induction to build broader theories from repeated results.",
    },
    {
      heading: "Theory vs law (exam favourite)",
      body:
        "A law summarises a stable pattern (what happens under stated conditions). A theory explains the pattern (why/how it happens) and organises many facts and laws. Theories are not “guesses that failed to become laws”; mature theories are among the strongest products of science. Laws do not automatically “upgrade” into theories — they answer different questions.",
    },
  ],
  examPoints: [
    "Hypothesis must be testable AND falsifiable",
    "IV = manipulated; DV = measured; controls = held constant; confounders = unwanted variation",
    "Law describes regularities; theory explains them",
    "Deductive = general → specific; inductive = specific → general; abductive = best explanation",
    "Replication strengthens confidence; one study is rarely enough",
  ],
  commonMistakes: [
    {
      mistake: "Treating theory as a weak guess and law as proven truth",
      correction: "Theory explains; law describes. Strong theories are heavily tested, not casual opinions.",
      explanation: "Exam options often imply ‘theory = unproven, law = proven.’ Reject that hierarchy.",
    },
    {
      mistake: "Thinking a hypothesis must be proven true to be scientific",
      correction: "It must be falsifiable — open to being shown wrong.",
      explanation: "Science privileges claims that risk failure under test.",
    },
    {
      mistake: "Swapping independent and dependent variables",
      correction: "You change the IV; you measure the DV.",
      explanation: "If the stem says ‘researcher varies temperature and records reaction rate,’ temperature is IV, rate is DV.",
    },
  ],
  qualitativeScenarios: [
    {
      scenario:
        "A claim states: ‘This herbal remedy works because of invisible energies that cannot be measured by any instrument.’ Is this a scientific hypothesis?",
      answer: "No.",
      why: "It is not falsifiable: no possible observation is allowed to count against it. A scientific claim must specify evidence that would weaken or refute it.",
    },
    {
      scenario:
        "A lab studies whether caffeine improves short-term memory. Participants drink either caffeinated or decaf coffee (identical taste). Memory scores are recorded. Name IV, DV, and one control.",
      answer:
        "IV: caffeine presence/dose; DV: memory score; controls: same test conditions, similar participants, blinded drink, same time of day, etc.",
      why: "The researcher manipulates caffeine, measures memory, and holds other factors steady to isolate the effect.",
    },
  ],
  relatedTopics: ["ra-research-design", "ra-inferential-stats", "ra-research-ethics"],
  subtopics: [
    {
      id: "ra-scientific-method-falsifiability",
      title: "Falsifiability",
      summary:
        "A hypothesis is scientific only if evidence could, in principle, show it is false.",
      explanation:
        "Falsifiability is the boundary condition for scientific claims. Untestable statements may be meaningful in other domains (faith, pure preference) but they are not scientific hypotheses. Craft exam answers by asking: ‘What result would count against this claim?’ If none, it is not scientific.",
      examples: [
        {
          problem:
            "Which of the following is a falsifiable hypothesis?\nA) Good weather is caused by cosmic goodwill\nB) Increasing nitrogen in this soil will raise wheat yield under stated conditions\nC) The true meaning of life cannot be known\nD) Whatever happens was meant to happen",
          solution:
            "Only B makes a concrete, testable prediction. A, C, and D are insulated from contrary evidence.",
          answer: "B",
        },
        {
          problem:
            "Why does ‘all swans are white’ count as a scientific hypothesis even though it turned out false?",
          solution:
            "Because clear observations (a black swan) could refute it. Being wrong after a fair test is a success of method, not a failure of science.",
          answer:
            "It was testable and open to refutation; observation of black swans falsified it.",
        },
      ],
      shortcuts: [
        "Ask: ‘What would prove this wrong?’ — if nothing, not scientific",
      ],
      traps: [
        "Assuming ‘scientific’ means ‘already proven true’",
        "Confusing unfalsifiable claims with deep or profound ones",
      ],
    },
    {
      id: "ra-scientific-method-variables",
      title: "Variables (IV, DV, controls, confounders)",
      summary:
        "Separate what you change, what you measure, what you hold constant, and what accidentally varies.",
      explanation:
        "Internal validity rises when the IV is cleanly isolated. Confounders create alternative explanations (maybe sunlight, not fertiliser, drove growth). Good answers name all four roles when a stem describes a study.",
      examples: [
        {
          problem:
            "Researchers assign classes to either ‘active learning’ or ‘lecture only,’ then compare final exam scores. Identify IV and DV.",
          solution:
            "Teaching method is manipulated → IV. Exam scores are measured → DV. Class size, teacher experience, and prior ability should be controlled or randomised.",
          answer: "IV: instructional method; DV: exam score",
        },
        {
          problem:
            "In the same study, morning classes get active learning and afternoon classes get lectures. What is the threat?",
          solution:
            "Time of day is confounded with method — performance differences may reflect alertness, not pedagogy.",
          answer: "Confounding (extraneous variable: time of day)",
        },
      ],
      shortcuts: [
        "CHANGE = independent; MEASURE = dependent; CONSTANT = controlled; UNWANTED = confounder",
      ],
      traps: [
        "Calling every measured quantity the IV",
        "Ignoring confounders when two factors change together",
      ],
    },
    {
      id: "ra-scientific-method-reasoning-types",
      title: "Deductive, inductive, abductive reasoning",
      summary:
        "Top-down prediction, bottom-up generalisation, and inference to the best explanation.",
      explanation:
        "Match the stem’s direction of inference. Deductive conclusions are forced if premises are true; inductive conclusions are probable and open to revision; abductive conclusions are the best current story, not a proof.",
      examples: [
        {
          problem:
            "From ‘All tropical cyclones need warm ocean energy’ a student predicts a named storm will weaken over cold water. Which reasoning?",
          solution:
            "General principle applied to a specific case → deductive.",
          answer: "Deductive",
        },
        {
          problem:
            "After many station records show a pattern, a researcher proposes a general regional climate rule. Which reasoning?",
          solution:
            "Specific data → broader claim → inductive.",
          answer: "Inductive",
        },
      ],
      shortcuts: [
        "Deduce = down from theory; Induce = up from data; Abduce = best story for the facts",
      ],
      traps: [
        "Treating inductive conclusions as certain",
        "Calling every hypothesis ‘deductive’ because it ‘sounds logical’",
      ],
    },
  ],
  content: true,
  postRestriction: "bs17",
  buildsOn: [],
  leadsTo: ["ra-research-design", "ra-research-quality"],
  usedIn: [
    "ra-research-design",
    "ra-data-interpretation",
    "ra-scientific-reporting",
    "meteo-forecast-skill",
    "earth-k1",
  ],
},

// ═══════════════════════════════════════════════════════════════════
// RA-2: Research Design
// ═══════════════════════════════════════════════════════════════════

{
  id: "ra-research-design",
  sectionId: "RA-02",
  order: 1,
  title: "Research Design",
  definition:
    "The overall plan for a study: what kind of data will be collected (quantitative, qualitative, or mixed), what approach will answer the question (descriptive, exploratory, explanatory, experimental, observational), who is studied (population and sample), and how participants or units are selected (sampling method). Design choices determine what conclusions are justified.",
  keyFacts: [
    "Quantitative: numbers, measurement, statistical summary",
    "Qualitative: words, themes, meanings, interpretations",
    "Mixed methods: intentional combination of both to answer related facets of a question",
    "Descriptive: documents ‘what is’ (surveys, case studies, structured observation)",
    "Exploratory: early investigation of an unfamiliar topic; flexible design",
    "Explanatory: aims at ‘why’ — tests relationships or causal claims",
    "Experimental: researcher manipulates IV, controls conditions, measures DV",
    "Observational: no manipulation of IV; records naturally occurring variation",
    "Cross-sectional: one time point (snapshot)",
    "Longitudinal: same units followed over time",
    "Population: full set of interest; sample: subset studied; census: data on every member",
    "Larger samples generally reduce sampling error, but design quality matters more than size alone",
  ],
  explanationSections: [
    {
      heading: "Quantitative, qualitative, and mixed methods",
      body:
        "Quantitative designs answer ‘how much / how many / how strongly associated?’ using measurements and statistics (e.g. rainfall totals, Likert counts). Qualitative designs answer ‘how / why / what does it mean?’ using interviews, focus groups, texts, or observations coded into themes. Mixed methods combine both deliberately (e.g. a national survey plus in-depth interviews). Choose by the research question — not by which method feels more ‘scientific.’",
    },
    {
      heading: "Experimental vs observational",
      body:
        "Experimental designs manipulate an IV and, with good controls/randomisation, support stronger causal claims. Observational designs do not assign the IV; they compare groups or conditions as they occur. Observational studies can show association and generate hypotheses, but causation is harder to establish because confounders are harder to rule out. Exam stems that say ‘researcher assigns / administers / varies’ lean experimental; ‘records / compares existing groups’ lean observational.",
    },
    {
      heading: "Sampling methods — match method to population structure",
      body:
        "Simple random: every unit equal chance (needs a full list; strong for generalisation). Systematic: every k-th unit on a list. Stratified: random samples within important subgroups (gender, region, grade) so each stratum is represented. Cluster: random groups (schools, villages), then study units inside clusters — efficient for spread-out populations. Convenience: whoever is easy to reach — fast, often biased. Snowball: participants recruit others — useful for hidden populations. Purposive: deliberate selection of informative cases — common in qualitative work. Name the method by the selection rule, not by the topic.",
    },
    {
      heading: "Bias threats",
      body:
        "Selection bias: sample systematically differs from the population (volunteers only, online-only, one city). Measurement bias: instrument or procedure distorts values. Recall bias: memory errors in self-report. Observer/researcher bias: expectations shape recording. Confirmation bias: seeking supportive evidence only. Survivorship bias: studying only those who ‘remained’ (successful firms, surviving patients). Design reduces bias; it rarely eliminates it. Strong answers name the bias and the fix (randomisation, blinding, better sampling frame, validated instruments).",
    },
  ],
  examPoints: [
    "Quantitative = numbers; qualitative = meanings; mixed = both by design",
    "Experimental = manipulate IV; observational = no manipulation",
    "Cross-sectional = one time; longitudinal = over time",
    "Stratified = random within subgroups; cluster = random groups; simple random = equal chance for each unit",
    "Association ≠ causation unless design supports causal inference",
  ],
  commonMistakes: [
    {
      mistake: "Confusing cross-sectional with longitudinal",
      correction: "Cross-sectional = one snapshot; longitudinal = repeated measures over time on the same units.",
      explanation: "A single national survey is cross-sectional even if the questionnaire asks about the past.",
    },
    {
      mistake: "Assuming observational studies are ‘invalid’",
      correction: "They are appropriate for many questions; they simply support weaker causal claims than well-run experiments.",
      explanation: "Ethics and practicality often forbid experiments (e.g. assigning people to smoke).",
    },
    {
      mistake: "Calling convenience samples ‘wrong’ in every case",
      correction: "They are limited for generalisation but usable for pilots and some qualitative work if limitations are stated.",
      explanation: "The error is over-claiming, not using convenience samples at all.",
    },
  ],
  qualitativeScenarios: [
    {
      scenario:
        "You need attitudes toward a new flood-warning app from rural and urban users in equal depth, then overall percentages nationwide. Suggest a mixed design sketch.",
      answer:
        "Stratified or quota survey for quantitative estimates + purposive interviews in rural and urban strata for qualitative depth.",
      why: "Numbers answer prevalence; interviews answer meaning and barriers. Sampling should respect the rural/urban structure.",
    },
    {
      scenario:
        "A study compares exam scores of students who chose an online course vs campus course, with no assignment by researchers. Design type?",
      answer: "Observational (self-selected groups).",
      why: "No manipulation of IV; differences may reflect motivation or prior ability, not only mode of delivery.",
    },
  ],
  comparisonTable: {
    title: "Experimental vs observational",
    headers: ["Feature", "Experimental", "Observational"],
    rows: [
      ["Manipulation of IV", "Yes (by design)", "No"],
      ["Causal strength (when well run)", "Stronger", "Weaker; needs careful reasoning"],
      ["Typical use", "Test interventions under control", "Natural settings, ethics, feasibility"],
    ],
  },
  relatedTopics: ["ra-scientific-method", "ra-data-types", "ra-research-quality"],
  subtopics: [
    {
      id: "ra-research-design-quant-qual-mixed",
      title: "Quantitative vs qualitative vs mixed",
      summary:
        "Match data type to the question: counts and magnitudes vs meanings and processes vs both.",
      explanation:
        "Do not rank quantitative as automatically superior. For ‘what proportion of stations exceeded a threshold?’ use quantitative methods. For ‘how do farmers interpret drought warnings?’ use qualitative methods. Mixed designs link the two when both kinds of answer are required.",
      examples: [
        {
          problem:
            "Research question: ‘How do coastal communities describe risk from storm surge?’ Best primary approach?",
          solution:
            "Focus is meaning and description of experience → qualitative (interviews, focus groups, narrative analysis).",
          answer: "Qualitative",
        },
        {
          problem:
            "Research question: ‘Did mean monsoon rainfall differ between two decades?’ Best primary approach?",
          solution:
            "Comparison of measured magnitudes → quantitative.",
          answer: "Quantitative",
        },
      ],
      shortcuts: [
        "How many / how much → quantitative; how / why in context → qualitative; both needed → mixed",
      ],
      traps: [
        "Treating interviews as ‘invalid’ research",
        "Running a survey and calling it mixed methods without a real qualitative component",
      ],
    },
    {
      id: "ra-research-design-sampling",
      title: "Sampling methods",
      summary:
        "Selection rule determines how far you can generalise and which subgroups are represented.",
      explanation:
        "Start from the population structure. If subgroups must be represented, stratify. If units are clustered geographically, cluster sampling may be efficient. If no list exists and the group is hidden, snowball may be the only feasible path — with clear limits on inference.",
      examples: [
        {
          problem:
            "A national exam board wants equal-precision estimates for each province. Which sampling idea fits best?",
          solution:
            "Stratified sampling by province (then random within strata) so small provinces are not drowned out.",
          answer: "Stratified sampling",
        },
        {
          problem:
            "Researchers interview one person with a rare condition, who introduces three others, who introduce more. Method?",
          solution:
            "Referral chain → snowball sampling; useful but not a random cross-section of all patients.",
          answer: "Snowball sampling",
        },
      ],
      shortcuts: [
        "Strata = subgroups; clusters = whole groups drawn at random; convenience = easy access; purposive = chosen for information value",
      ],
      traps: [
        "Confusing stratified (within subgroups) with cluster (of groups)",
        "Assuming large convenience samples are automatically representative",
      ],
    },
    {
      id: "ra-research-design-bias",
      title: "Bias threats",
      summary:
        "Systematic error from how people are selected, how data are measured, or how results are interpreted.",
      explanation:
        "Bias is directional error, not random noise. Name the mechanism in the stem: who entered the sample, how the instrument worked, what was remembered, what the observer expected, what was left out (survivors only).",
      examples: [
        {
          problem:
            "A ‘success habits’ study interviews only CEOs of companies still operating after 20 years. Main bias risk?",
          solution:
            "Failed companies are missing → survivorship bias; habits of failures are invisible.",
          answer: "Survivorship bias",
        },
        {
          problem:
            "Only students who finish a voluntary online survey are analysed; many stressed students drop out. Risk?",
          solution:
            "Completers differ from dropouts → selection bias; stress may be under-estimated.",
          answer: "Selection bias",
        },
      ],
      shortcuts: [
        "Ask: who is missing, what is mis-measured, what is mis-remembered, what is expected, what is confirmed only?",
      ],
      traps: [
        "Calling every problem ‘random error’",
        "Fixating on sample size while ignoring a biased sampling frame",
      ],
    },
  ],
  content: true,
  postRestriction: "bs17",
  buildsOn: ["ra-scientific-method"],
  leadsTo: ["ra-data-types", "ra-research-quality"],
  usedIn: ["ra-data-types", "ra-inferential-stats", "ra-research-ethics", "earth-k1"],
},
// ═══════════════════════════════════════════════════════════════════
// RA-3: Data Types & Measurement Scales
// ═══════════════════════════════════════════════════════════════════
{
  id: "ra-data-types",
  sectionId: "RA-03",
  order: 1,
  title: "Data Types & Measurement Scales",
  definition:
    "Data are classified by kind (qualitative vs quantitative; categorical vs numerical; discrete vs continuous) and by measurement scale (nominal, ordinal, interval, ratio). The scale decides which comparisons and statistical operations are meaningful — not merely which formulas a calculator can run.",
  keyFacts: [
    "Qualitative: categories, labels, descriptions (not primarily magnitudes)",
    "Quantitative: numerical measurements or counts",
    "Categorical: values are labels (species, gender, climate type, blood group)",
    "Numerical: values are numbers (temperature, pressure, distance, counts)",
    "Discrete: countable values, typically whole numbers (students, rainy days, species count)",
    "Continuous: any value in a range, including fractions (temperature, time, mass, length)",
    "Nominal: categories with no inherent order — only = and ≠",
    "Ordinal: ordered categories; gaps between ranks are not assumed equal — order operations valid",
    "Interval: ordered, equal intervals, no true zero (e.g. °C, °F) — differences meaningful; ratios of values are not",
    "Ratio: ordered, equal intervals, true zero (e.g. kelvin, height, mass, duration) — differences and ratios meaningful",
  ],
  explanationSections: [
    {
      heading: "Four measurement scales (highest-yield exam map)",
      body:
        "Nominal: pure labels with no ranked order (eye colour, province name, cloud genus as a label only). You can count and find a mode; you cannot sensibly say one category is ‘greater than’ another. Ordinal: ranked categories whose steps are not equal units (pain: mild / moderate / severe; Likert agreement). You can rank and use medians; treating ranks as precise distances is risky. Interval: equal intervals but an arbitrary zero (°C: 0 °C is not ‘no temperature’). Differences are meaningful (20 °C − 10 °C = 10 °C gap); ratios are not (20 °C is not ‘twice as hot’ as 10 °C). Ratio: equal intervals plus a true zero meaning absence of the quantity (0 K, 0 m, 0 kg, 0 s). Differences and ratios are both meaningful (20 kg is twice 10 kg).",
    },
    {
      heading: "Why scale controls which statistics are valid",
      body:
        "Nominal → frequencies, proportions, mode. Ordinal → those plus median, percentiles, rank-based association. Interval → means, SDs, many parametric tests on differences (with assumptions). Ratio → all of the above plus meaningful ratios, geometric means, log transforms when appropriate. Computing a ‘mean climate type’ or a ‘mean blood group’ is nonsense: the symbols are labels, not magnitudes. Always ask: ‘Does this number encode order? equal spacing? a true zero?’ before choosing a summary or test.",
    },
    {
      heading: "Discrete vs continuous (and graph choice)",
      body:
        "Discrete data arise from counting (0, 1, 2, … storms in a month). Continuous data arise from measuring on a continuum (wind speed 6.3 m/s). In practice instruments round continuous values, but the underlying variable is still continuous. Graphing: bar charts suit categories/discrete counts; histograms suit distributions of continuous (or finely binned) variables; line charts suit continuous change over time. Do not confuse ‘written as a whole number’ with ‘must be discrete’ — temperature reported as 30 °C is still continuous.",
    },
    {
      heading: "Temperature: the classic interval vs ratio trap",
      body:
        "Celsius and Fahrenheit are interval scales: zero is conventional, not absolute absence of heat. Kelvin is ratio: 0 K is absolute zero. So ‘30 °C is twice 15 °C’ is false as a temperature-intensity claim; ‘300 K is twice 150 K’ is a valid ratio of thermodynamic temperature. Exam stems love this distinction.",
    },
  ],
  examPoints: [
    "Nominal = no order; ordinal = order only; interval = equal gaps, no true zero; ratio = equal gaps + true zero",
    "°C / °F → interval; kelvin, mass, length, time duration → ratio",
    "Discrete = countable; continuous = measurable continuum",
    "Scale dictates valid operations: never average pure nominal labels",
    "Differences OK on interval; ratios of values need ratio scale",
  ],
  commonMistakes: [
    {
      mistake: "Treating 0 °C as ‘no temperature’ (ratio thinking on an interval scale)",
      correction: "0 °C is an arbitrary zero; 0 K is true zero for thermodynamic temperature.",
      explanation: "Only kelvin (among common temperature scales) supports true ratio statements about thermal energy scale.",
    },
    {
      mistake: "Computing means of nominal categories",
      correction: "Use counts, proportions, or mode — not arithmetic means of label codes unless codes are justified as interval/ratio.",
      explanation: "Coding tropical=1, arid=2 is arbitrary; the average ‘1.4’ has no climate meaning.",
    },
    {
      mistake: "Calling any whole number ‘discrete’ and any decimal ‘continuous’",
      correction: "Discrete vs continuous is about the variable’s nature, not the number of decimal places printed.",
      explanation: "Counts are discrete; measured length is continuous even if rounded to integers.",
    },
  ],
  qualitativeScenarios: [
    {
      scenario:
        "A survey records (1) province of residence, (2) satisfaction on a 1–5 scale, (3) body mass in kg. Name the scale of each.",
      answer: "Province: nominal; satisfaction: ordinal; mass: ratio.",
      why: "Province has no order; satisfaction ranks without equal psychological intervals guaranteed; mass has equal units and a true zero.",
    },
    {
      scenario:
        "A report claims ‘Station A at 30 °C is twice as hot as Station B at 15 °C.’ Critique.",
      answer: "Invalid ratio claim on Celsius (interval scale).",
      why: "Equal intervals allow difference statements, not true ‘twice as hot’ ratios; use kelvin for thermodynamic ratios.",
    },
  ],
  comparisonTable: {
    title: "Measurement scales at a glance",
    headers: ["Scale", "Order?", "Equal intervals?", "True zero?", "Typical summaries"],
    rows: [
      ["Nominal", "No", "No", "No", "Counts, mode, proportions"],
      ["Ordinal", "Yes", "No", "No", "+ median, ranks"],
      ["Interval", "Yes", "Yes", "No", "+ mean, SD on differences"],
      ["Ratio", "Yes", "Yes", "Yes", "+ ratios, geometric mean, logs"],
    ],
  },
  relatedTopics: ["ra-descriptive-statistics", "ra-data-visualization", "ra-research-design"],
  subtopics: [
    {
      id: "ra-data-types-four-scales",
      title: "Four measurement scales",
      summary:
        "Nominal → ordinal → interval → ratio: each level adds structure and unlocks operations.",
      explanation:
        "Climb the ladder only when the data truly have the extra structure. Promoting ordinal Likert scores to interval means is common in practice but is an assumption — know when an exam wants the strict classification.",
      examples: [
        {
          problem:
            "Cloud type recorded as ‘cirrus / cumulus / stratus’ (as names only). Scale?",
          solution:
            "Labels with no inherent rank → nominal.",
          answer: "Nominal",
        },
        {
          problem:
            "Storm damage coded as ‘low / medium / high’. Scale?",
          solution:
            "Ordered categories without equal-unit gaps → ordinal.",
          answer: "Ordinal",
        },
        {
          problem:
            "Air temperature in °C. Scale?",
          solution:
            "Equal degree intervals; zero is not absolute → interval.",
          answer: "Interval",
        },
        {
          problem:
            "Rainfall total in millimetres. Scale?",
          solution:
            "Equal units and true zero (no rain) → ratio.",
          answer: "Ratio",
        },
      ],
      shortcuts: [
        "No order → nominal; order only → ordinal; equal gaps, fake zero → interval; equal gaps, real zero → ratio",
      ],
      traps: [
        "Assuming any number stored in a spreadsheet is ratio",
        "Ranking nominal labels alphabetically and treating that as ordinal structure",
      ],
    },
    {
      id: "ra-data-types-valid-operations",
      title: "Valid statistical operations by scale",
      summary:
        "Match summaries and tests to the information the scale actually carries.",
      explanation:
        "Wrong operation = precise-looking nonsense. Mode for nominal is fine; mean for nominal is not. Median for ordinal is safer than mean. Means and SDs assume interval/ratio structure (or an accepted approximation).",
      examples: [
        {
          problem:
            "Which is appropriate for nominal data?\nA) Mean\nB) Median\nC) Mode\nD) Standard deviation",
          solution:
            "Only frequencies and mode are cleanly meaningful for pure categories.",
          answer: "C",
        },
        {
          problem:
            "Why is ‘average Likert score = 3.7’ sometimes criticised?",
          solution:
            "Strictly, Likert items are ordinal; averaging assumes equal intervals between scale points.",
          answer:
            "It treats ordinal ranks as interval distances (assumption may be false).",
        },
      ],
      shortcuts: [
        "Nominal: mode; ordinal: median; interval/ratio: mean (if distribution allows)",
      ],
      traps: [
        "Reporting means of arbitrary category codes",
        "Interpreting interval ratios (‘twice as hot’) as if the scale were ratio",
      ],
    },
    {
      id: "ra-data-types-discrete-continuous",
      title: "Discrete vs continuous",
      summary:
        "Counts vs measurements on a continuum — drives modelling and chart choice.",
      explanation:
        "Discrete variables jump in countable steps; continuous variables can in principle take any value in an interval. Measurement precision does not change the underlying type.",
      examples: [
        {
          problem:
            "Number of lightning strikes recorded in an hour. Discrete or continuous?",
          solution:
            "Count of events → discrete.",
          answer: "Discrete",
        },
        {
          problem:
            "Time until the next lightning strike (in seconds). Discrete or continuous?",
          solution:
            "Duration on a continuum → continuous.",
          answer: "Continuous",
        },
      ],
      shortcuts: [
        "Can you count it in whole events? → discrete; can it be any value in a range? → continuous",
      ],
      traps: [
        "Calling temperature discrete because the station reports integers",
        "Using a line chart for unordered nominal categories",
      ],
    },
  ],
  content: true,
  postRestriction: "bs17",
  buildsOn: ["ra-research-design", "math-1-1", "math-8-1"],
  leadsTo: ["ra-descriptive-statistics", "ra-data-visualization"],
  usedIn: [
    "ra-descriptive-statistics",
    "ra-correlation-regression",
    "meteo-radiosondes",
    "meteo-station-model",
    "earth-h2",
  ],
},
// ═══════════════════════════════════════════════════════════════════
// RA-4: Descriptive Statistics
// ═══════════════════════════════════════════════════════════════════
{
  id: "ra-descriptive-statistics",
  sectionId: "RA-04",
  order: 1,
  title: "Descriptive Statistics",
  definition:
    "Numerical and graphical summaries of a dataset you already have: centre (mean, median, mode), spread (range, variance, SD, IQR), relative standing (percentiles, z-scores), and shape (symmetry vs skew). Descriptive statistics describe the sample; inferential statistics use the sample to make claims about a wider population.",
  keyFacts: [
    "Mean (x̄): Σxᵢ / n — uses every value; pulled by outliers and skew",
    "Median: middle value of ordered data — robust to extreme values",
    "Mode: most frequent value — natural for categorical / discrete peaks; may be multi-modal",
    "Weighted mean: Σ(wᵢxᵢ) / Σwᵢ — when observations differ in weight or reliability",
    "Geometric mean: nth root of product — natural for average growth factors / multiplicative rates",
    "Harmonic mean: n / Σ(1/xᵢ) — natural for average rates over equal distances (e.g. speeds)",
    "Range: max − min — simple but highly outlier-sensitive",
    "Variance: average of squared deviations from the mean (population ÷ n; sample often ÷ n−1)",
    "Standard deviation (SD): √variance — spread in the original units of the data",
    "Empirical rule (approx. normal): ~68% within 1 SD, ~95% within 2 SD, ~99.7% within 3 SD of the mean",
    "IQR: Q3 − Q1 — spread of the middle 50%; robust to tails",
    "Percentile: value below which a stated percent of the data fall; median = 50th percentile",
    "Quartiles: Q1 ≈ 25th, Q2 = median, Q3 ≈ 75th percentile",
    "Z-score: (x − μ) / σ — how many SDs a point lies from the mean",
    "Tukey fence (common rule): outlier candidates < Q1 − 1.5×IQR or > Q3 + 1.5×IQR",
    "Shape: symmetric → mean ≈ median; right-skew → mean > median; left-skew → mean < median",
  ],
  explanationSections: [
    {
      heading: "Centre: which average fits the question?",
      body:
        "Arithmetic mean is the balance point of the data; one extreme value moves it a lot. Median is the 50% split point; extremes barely move it. Mode marks the peak frequency — useful for categories or discrete counts. Prefer mean for roughly symmetric numerical data without wild outliers; prefer median for skewed data (income, many environmental extremes) or when outliers are present. Geometric mean suits average multiplicative growth (e.g. successive growth factors). Harmonic mean suits average rates when the quantity in the denominator is what is held equal (classic: average speed over equal distances).",
    },
    {
      heading: "Spread: range, variance, SD, IQR",
      body:
        "Range only uses two points, so one error at either end ruins it. Variance averages squared deviations — large deviations count heavily; units are squared (e.g. °C²), so interpretation is awkward. SD is the square root, back in the original units (°C, mm, marks). IQR uses the middle half of the data and ignores the outer quarters, so it is a robust spread measure. Sample variance often divides by n−1 (Bessel’s correction) to reduce bias when estimating a population variance; know which formula a stem specifies.",
    },
    {
      heading: "Z-scores and the empirical rule",
      body:
        "A z-score standardises a value: z = 0 is at the mean; z = +2 is two SDs above the mean; z = −1 is one SD below. Comparing z-scores lets you compare relative standing across different units or exams. For approximately normal data, the empirical rule is a quick check: most points lie within 1–2 SDs; values beyond about 3 SDs are rare and worth inspecting. Do not force the 68–95–99.7 rule on clearly skewed or multi-modal data.",
    },
    {
      heading: "Skew, mean vs median, and outliers",
      body:
        "Right-skew (long high tail): a few large values pull the mean above the median (classic: income). Left-skew (long low tail): mean falls below the median (classic: easy test where most scores pile near the top). Report median (and IQR) when skew or outliers dominate the story. Outlier rules (e.g. 1.5×IQR fences) flag candidates — they may be data errors, rare events, or the most scientifically interesting points. Always investigate; do not delete automatically.",
    },
  ],
  examPoints: [
    "Mean sensitive to outliers; median robust",
    "SD = √variance and is in original units; variance is in squared units",
    "IQR = Q3 − Q1 (middle 50%)",
    "z = (x − mean) / SD",
    "Right-skew: mean > median; left-skew: mean < median; symmetric: mean ≈ median",
    "Outlier fence (common): Q1 − 1.5×IQR and Q3 + 1.5×IQR",
  ],
  commonMistakes: [
    {
      mistake: "Confusing variance with standard deviation",
      correction: "Variance is squared units; SD is the square root in original units.",
      explanation: "Saying ‘variance is 4 °C’ is wrong if variance is 16 °C² and SD is 4 °C.",
    },
    {
      mistake: "Using the mean for heavily skewed data as the ‘typical’ value",
      correction: "Prefer median (and show IQR) when the tail dominates.",
      explanation: "A few extremes can make the mean unrepresentative of most observations.",
    },
    {
      mistake: "Applying 68–95–99.7 to any dataset",
      correction: "Empirical rule is for approximately normal distributions.",
      explanation: "Skewed or multi-peak data need different description.",
    },
  ],
  qualitativeScenarios: [
    {
      scenario:
        "Five lab temperatures (°C): 20, 21, 20, 22, 35. Which centre better describes a ‘typical’ reading, and why?",
      answer: "Median (20–21 region) is more typical; mean is pulled up by 35.",
      why: "One extreme value inflates the arithmetic mean; the median resists it.",
    },
    {
      scenario:
        "A distribution of household income is right-skewed. What is the expected order of mean and median?",
      answer: "Mean > median.",
      why: "High-income tail pulls the mean upward more than the median.",
    },
  ],
  comparisonTable: {
    title: "Measures of centre — quick choice",
    headers: ["Measure", "Uses all values?", "Outlier effect", "Best when"],
    rows: [
      ["Mean", "Yes", "High", "Symmetric numerical data"],
      ["Median", "Order only", "Low", "Skew or outliers"],
      ["Mode", "Frequencies", "Low", "Categories / clear peaks"],
    ],
  },
  relatedTopics: [
    "ra-data-types",
    "ra-probability",
    "ra-correlation-regression",
    "ra-data-visualization",
  ],
  subtopics: [
    {
      id: "ra-descriptive-statistics-centre",
      title: "Measures of centre",
      summary:
        "Mean, median, mode — and when geometric or harmonic means are the right tool.",
      explanation:
        "Choose the measure that matches both the scale of the data and the shape of the distribution. State which one you used; ‘average’ is ambiguous in careful work.",
      examples: [
        {
          problem:
            "Dataset: 2, 3, 3, 4, 100. Compare mean and median.",
          solution:
            "Median of five ordered values is 3. Mean is (2+3+3+4+100)/5 = 22.4 — dominated by 100.",
          answer: "Median = 3; mean = 22.4 (mean inflated by outlier)",
        },
        {
          problem:
            "Average speed for equal 100 km legs at 40 km/h and 60 km/h — which mean?",
          solution:
            "Equal distances → harmonic mean: 2 / (1/40 + 1/60) = 48 km/h (not the arithmetic 50).",
          answer: "Harmonic mean = 48 km/h",
        },
      ],
      shortcuts: [
        "Skew or outliers → median; clean symmetric numbers → mean; categories → mode",
      ],
      traps: [
        "Calling the mean the ‘middle’ when the distribution is skewed",
        "Using arithmetic mean for chained growth factors (use geometric)",
      ],
    },
    {
      id: "ra-descriptive-statistics-spread",
      title: "Measures of spread",
      summary:
        "Range, variance, SD, IQR — sensitivity vs robustness.",
      explanation:
        "Pair a centre with a compatible spread: mean with SD (when appropriate); median with IQR when robustness matters. Always check units.",
      examples: [
        {
          problem:
            "If variance of temperatures is 9 (°C)², what is the SD?",
          solution:
            "SD = √9 = 3 °C — original units.",
          answer: "3 °C",
        },
        {
          problem:
            "Why might two cities with the same mean annual temperature feel different climate-wise?",
          solution:
            "Different SDs/IQRs: one may have mild seasons, the other large swings.",
          answer: "Different spread (variability), not only the mean",
        },
      ],
      shortcuts: [
        "SD for typical deviation from mean; IQR for middle-half width; range for extremes only",
      ],
      traps: [
        "Reporting variance with non-squared units",
        "Assuming small range implies small SD without checking the bulk of the data",
      ],
    },
    {
      id: "ra-descriptive-statistics-shape-z-outliers",
      title: "Shape, z-scores, and outliers",
      summary:
        "Skew direction from mean vs median; standardise with z; flag outliers carefully.",
      explanation:
        "Mean − median sign is a quick skew hint (not a formal test). Z-scores enable comparison across scales. Outlier rules are screening tools, not automatic delete buttons.",
      examples: [
        {
          problem:
            "Score 85; class mean 70; SD 10. What is z?",
          solution:
            "z = (85 − 70) / 10 = 1.5 (one and a half SDs above the mean).",
          answer: "1.5",
        },
        {
          problem:
            "Q1 = 10, Q3 = 22. Using 1.5×IQR fences, what are the outlier cut-offs?",
          solution:
            "IQR = 12; lower = 10 − 18 = −8; upper = 22 + 18 = 40.",
          answer: "Below −8 or above 40",
        },
      ],
      shortcuts: [
        "Mean > median → suspect right skew; mean < median → suspect left skew",
        "z = (x − mean) / SD",
      ],
      traps: [
        "Deleting outliers without investigation",
        "Using empirical rule on strongly skewed data",
      ],
    },
  ],
  content: true,
  postRestriction: "bs17",
  buildsOn: ["ra-data-types", "math-2-1", "math-8-1"],
  leadsTo: ["ra-data-visualization", "ra-probability"],
  usedIn: [
    "ra-correlation-regression",
    "ra-inferential-stats",
    "meteo-forecast-skill",
    "meteo-pakistan-macroclimate",
    "meteo-temp-rainfall-distribution",
    "env-air-pollution",
    "earth-h4",
    "earth-c2",
  ],
},
// ═══════════════════════════════════════════════════════════════════
// RA-5: Probability
// ═══════════════════════════════════════════════════════════════════
{
  id: "ra-probability",
  sectionId: "RA-05",
  order: 1,
  title: "Probability",
  definition:
    "A number between 0 and 1 that quantifies how likely an event is. It may be assigned by equally likely outcomes (classical), by long-run relative frequency in data (empirical), or by reasoned judgment when data are scarce (subjective). Probability rules then combine events with OR, AND, and NOT.",
  keyFacts: [
    "For any event E: 0 ≤ P(E) ≤ 1",
    "P(impossible) = 0; P(certain) = 1",
    "Complement: P(not A) = 1 − P(A)",
    "Addition (OR): P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
    "If A and B are mutually exclusive (cannot both occur): P(A ∪ B) = P(A) + P(B)",
    "If A and B are independent: P(A ∩ B) = P(A) × P(B)",
    "General AND (not necessarily independent): P(A ∩ B) = P(A) × P(B|A)",
    "Classical: favourable / equally likely total outcomes (fair die, coin, simple cards)",
    "Empirical: (times event occurred) / (number of trials) from observed data",
    "Subjective: expert or personal degree of belief when outcomes are not equally likely and data are limited",
    "Sample space: set of all possible outcomes; event: a subset of the sample space",
    "Independent ≠ mutually exclusive (they are different ideas — often confused)",
  ],
  explanationSections: [
    {
      heading: "Three ways to assign probability",
      body:
        "Classical probability assumes a finite set of equally likely outcomes and is computed before seeing data (fair die: P(4) = 1/6). Empirical (frequentist) probability estimates chance from observed relative frequency — the workhorse of measurement and monitoring (e.g. fraction of rainy days in 30 years of records). Subjective probability expresses reasoned belief when neither symmetry nor ample data exist (e.g. probability of a rare policy shock). Exam stems often ask which definition fits the situation, not only a formula.",
    },
    {
      heading: "OR and AND rules — and when they simplify",
      body:
        "OR adds probabilities but subtracts the intersection so outcomes in both sets are not double-counted: P(A or B) = P(A) + P(B) − P(A and B). If events cannot happen together (mutually exclusive), the intersection is empty and the formula collapses to a plain sum. AND multiplies only when independence holds: knowledge that A occurred does not change P(B). If dependence is possible, use conditional probability: P(A and B) = P(A) × P(B|A). Always decide exclusive vs independent from the story, not from the words ‘and’/‘or’ alone.",
    },
    {
      heading: "Independence vs mutual exclusivity",
      body:
        "Mutually exclusive: both cannot occur on the same trial (roll a single die: ‘1’ and ‘6’ are exclusive). Independent: occurrence of one does not change the probability of the other (two fair coins). Exclusive non-trivial events are dependent, because if A happened, B became impossible — so P(B|A) = 0 ≠ P(B). Treating exclusive events as independent is a common exam trap.",
    },
    {
      heading: "Complement trick for ‘at least one’",
      body:
        "P(at least one success in n independent trials) = 1 − P(zero successes). Computing the complement is usually shorter than summing many overlapping cases. Example: probability that at least one of three independent sensors fails = 1 − P(all work).",
    },
  ],
  examPoints: [
    "0 ≤ P ≤ 1; complement P(not A) = 1 − P(A)",
    "Classical = equally likely theory; empirical = data frequency; subjective = judgment",
    "P(A or B) = P(A) + P(B) − P(A and B); drop the last term only if mutually exclusive",
    "P(A and B) = P(A)×P(B) only if independent; otherwise use P(A)×P(B|A)",
    "Mutually exclusive ≠ independent",
    "‘At least one’ → often 1 − P(none)",
  ],
  commonMistakes: [
    {
      mistake: "Multiplying probabilities for dependent events as if independent",
      correction: "Use conditional probability when one event changes the odds of the other.",
      explanation: "Drawing two cards without replacement is dependent; with replacement (and reshuffle) can be independent.",
    },
    {
      mistake: "Adding P(A) + P(B) for overlapping events without subtracting the intersection",
      correction: "Always subtract P(A and B) unless exclusivity is given.",
      explanation: "Double-counting the overlap pushes probability above the true value (sometimes above 1).",
    },
    {
      mistake: "Calling mutually exclusive events independent",
      correction: "If both cannot occur, learning that A occurred forces P(B|A) = 0.",
      explanation: "Independence requires P(B|A) = P(B).",
    },
  ],
  qualitativeScenarios: [
    {
      scenario:
        "A fair coin is flipped twice. Are ‘first flip heads’ and ‘second flip heads’ independent? Mutually exclusive?",
      answer: "Independent: yes. Mutually exclusive: no (both can be heads).",
      why: "One flip does not change the other; both heads is possible.",
    },
    {
      scenario:
        "From 20 years of station data, rain occurred on 1461 days. What kind of probability is 1461/(20×365.25 approx.)?",
      answer: "Empirical (relative frequency from observations).",
      why: "It is estimated from recorded trials, not from a symmetry argument alone.",
    },
  ],
  comparisonTable: {
    title: "Assigning probability",
    headers: ["Type", "Basis", "Typical setting"],
    rows: [
      ["Classical", "Equally likely outcomes", "Fair games, simple symmetric models"],
      ["Empirical", "Observed relative frequency", "Monitoring, experiments, historical records"],
      ["Subjective", "Judgment / expert belief", "Rare events, sparse data, one-off decisions"],
    ],
  },
  relatedTopics: ["ra-inferential-stats", "ra-data-types", "ra-descriptive-statistics"],
  subtopics: [
    {
      id: "ra-probability-three-definitions",
      title: "Classical, empirical, subjective",
      summary:
        "Match the probability concept to the information you actually have.",
      explanation:
        "Classical needs a clear, symmetric sample space. Empirical needs repeated observations under similar conditions. Subjective fills gaps when neither is available — and should be stated as such, not dressed up as precise frequency.",
      examples: [
        {
          problem:
            "P(drawing an ace from a well-shuffled standard deck) = 4/52. Which type?",
          solution:
            "Equally likely cards by construction → classical.",
          answer: "Classical",
        },
        {
          problem:
            "An engineer says ‘I judge there’s a 30% chance this prototype fails the first field trial.’ Type?",
          solution:
            "Personal/expert degree of belief without a long frequency record → subjective.",
          answer: "Subjective",
        },
      ],
      shortcuts: [
        "Symmetry → classical; data counts → empirical; judgment under uncertainty → subjective",
      ],
      traps: [
        "Using classical 1/n when outcomes are not equally likely",
        "Treating a one-time expert guess as a long-run frequency without comment",
      ],
    },
    {
      id: "ra-probability-addition-multiplication",
      title: "Addition and multiplication rules",
      summary:
        "OR combines with care about overlap; AND multiplies only under independence (or uses conditionals).",
      explanation:
        "Write the events in words first, then choose the rule. Check exclusivity before dropping the intersection term; check independence before multiplying bare probabilities.",
      examples: [
        {
          problem:
            "P(A) = 0.3, P(B) = 0.5, P(A and B) = 0.1. Find P(A or B).",
          solution:
            "0.3 + 0.5 − 0.1 = 0.7.",
          answer: "0.7",
        },
        {
          problem:
            "Two independent alarms each fail with probability 0.02. Probability both fail?",
          solution:
            "0.02 × 0.02 = 0.0004 (independence used).",
          answer: "0.0004",
        },
        {
          problem:
            "Probability at least one of two independent alarms fails, each with fail probability 0.02?",
          solution:
            "1 − P(neither fails) = 1 − (0.98 × 0.98) = 1 − 0.9604 = 0.0396.",
          answer: "0.0396",
        },
      ],
      shortcuts: [
        "OR: add, subtract overlap; AND: multiply if independent; at least one: 1 − P(none)",
      ],
      traps: [
        "Forgetting to subtract P(A and B)",
        "Multiplying for sampling without replacement without adjusting",
      ],
    },
    {
      id: "ra-probability-exclusive-vs-independent",
      title: "Mutually exclusive vs independent",
      summary:
        "Cannot both happen vs one does not change the other’s probability.",
      explanation:
        "Exclusive is about joint possibility; independence is about information. Non-trivial exclusive events fail independence because P(B|A) = 0.",
      examples: [
        {
          problem:
            "On one roll of a fair die, events ‘even’ and ‘multiple of 3’. Exclusive? Independent?",
          solution:
            "Both can occur (6) → not exclusive. P(multiple of 3) = 2/6; P(multiple of 3 | even) = 1/3 → same, so independent in this fair-die model.",
          answer: "Not exclusive; independent (for a fair die)",
        },
        {
          problem:
            "On one roll, ‘result is 2’ and ‘result is 5’. Exclusive? Independent?",
          solution:
            "Cannot both occur → exclusive. Then P(5|2) = 0 ≠ P(5) → not independent.",
          answer: "Exclusive; not independent",
        },
      ],
      shortcuts: [
        "Exclusive → intersection empty; independent → P(B|A) = P(B)",
      ],
      traps: [
        "Assuming exclusive events can be multiplied as independent",
        "Assuming any two named events on different trials are exclusive",
      ],
    },
  ],
  content: true,
  postRestriction: "bs17",
  buildsOn: ["ra-descriptive-statistics", "math-8-2"],
  leadsTo: ["ra-inferential-stats"],
  usedIn: ["ra-inferential-stats", "meteo-forecast-skill", "meteo-extreme-events"],
},

// ═══════════════════════════════════════════════════════════════════
// RA-6: Data Visualization
// ═══════════════════════════════════════════════════════════════════

{
  id: "ra-data-visualization",
  sectionId: "RA-06",
  order: 1,
  title: "Data Visualization",
  definition: "Data visualization is the graphical representation of data to communicate patterns, trends, and outliers. Choosing the right chart type and following good design practices is essential for honest, effective communication.",
  keyFacts: [
    "BAR/COLUMN chart: comparing categories (e.g., rainfall by month, species counts)",
    "LINE chart: time series or trends (e.g., temperature over years)",
    "PIE chart: parts of a whole (max ~6 slices; otherwise hard to read)",
    "AREA chart: cumulative or stacked data over time",
    "SCATTER plot: two continuous variables, shows correlation and outliers",
    "HISTOGRAM: distribution of ONE continuous variable (bars touch)",
    "BOX PLOT: distribution, outliers, comparison between groups",
    "HEATMAP: matrix data (correlation matrices, geographic data)",
    "CHOROPLETH: geographic data with color-coded regions",
    "GOOD PRACTICES: clear title, labeled axes with units, appropriate scale, legend, colorblind-friendly palette, no chartjunk",

    "MISLEADING: truncated y-axis, inappropriate scale (log vs linear), cherry-picked data, 3D distortion"
  ],
  explanationSections: [
    { heading: "Choosing the right chart type", body: "CATEGORICAL comparison → bar/column. TIME SERIES or TREND → line. PARTS OF WHOLE (≤6 parts) → pie. TWO CONTINUOUS VARIABLES → scatter. DISTRIBUTION of one continuous variable → histogram. COMPARING DISTRIBUTIONS between groups → box plot. The wrong chart makes data misleading regardless of accuracy. A pie chart with 20 slices is unreadable; a line chart for categorical data implies false trends; a bar chart with a truncated y-axis exaggerates differences." },
    { heading: "Good practices vs misleading graphs", body: "GOOD PRACTICES: clear title (what is this showing?), labeled axes with units (e.g., 'Temperature (°C)' not just 'Temperature'), y-axis starting at zero for bar charts (unless clearly noted), legend when multiple series, colorblind-friendly colors, minimal chartjunk (3D, excessive gridlines, etc.). MISLEADING PRACTICES: truncated y-axis (exaggerates differences), inappropriate scale (using log when linear is appropriate), cherry-picked data (showing only a subset that supports a claim), 3D pie charts that distort proportions, starting the y-axis at a non-zero value to amplify changes." }
  ],
  examPoints: [
    "Bar: categories; Line: time/trend; Pie: parts of whole; Scatter: 2 variables; Histogram: distribution; Box: comparison/distribution",

    "Truncated y-axis exaggerates differences — common misleading technique",
    "Pie charts should have ≤6 slices"
  ],
  commonMistakes: [
    "Using a pie chart for 15 categories — unreadable; switch to bar chart",

    "Using a line chart for categorical data — implies false trends over time",
    "Forgetting units on axes — 'Temperature' vs 'Temperature (°C)' — the latter is correct"
  ],
  relatedTopics: ["ra-data-types", "ra-data-interpretation", "ra-descriptive-statistics"],
    subtopics: [
      {
        id: "ra-data-visualization-choosing-the-right-chart-type",
        title: "Choosing the right chart type",
        summary: "CATEGORICAL comparison → bar/column. TIME SERIES or TREND → line. PARTS OF WHOLE (≤6 parts) → pie. TWO CONTINUOUS VARIABLES → scatter.…",
        explanation: "CATEGORICAL comparison → bar/column. TIME SERIES or TREND → line. PARTS OF WHOLE (≤6 parts) → pie. TWO CONTINUOUS VARIABLES → scatter. DISTRIBUTION of one continuous variable → histogram. COMPARING DISTRIBUTIONS between groups → box plot. The wrong chart makes data misleading regardless of accuracy. A pie chart with 20 slices is unreadable; a line chart for categorical data implies false trends; a bar chart with a truncated y-axis exaggerates differences.",
                examples: [
          {
            problem: "Which statement best matches “Choosing the right chart type”?",
            solution: "The accurate idea is: CATEGORICAL comparison → bar/column. Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "CATEGORICAL comparison → bar/column.",
          },
          {
            problem: "Give one exam trap students hit when studying Choosing the right chart type.",
            solution: "Stay close to the text: CATEGORICAL comparison → bar/column. TIME SERIES or TREND → line. Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
      {
        id: "ra-data-visualization-good-practices-vs-misleading-graphs",
        title: "Good practices vs misleading graphs",
        summary: "GOOD PRACTICES: clear title (what is this showing?), labeled axes with units (e.g., 'Temperature (°C)' not just 'Temperature'), y-axis…",
        explanation: "GOOD PRACTICES: clear title (what is this showing?), labeled axes with units (e.g., 'Temperature (°C)' not just 'Temperature'), y-axis starting at zero for bar charts (unless clearly noted), legend when multiple series, colorblind-friendly colors, minimal chartjunk (3D, excessive gridlines, etc.). MISLEADING PRACTICES: truncated y-axis (exaggerates differences), inappropriate scale (using log when linear is appropriate), cherry-picked data (showing only a subset that supports a claim), 3D pie charts that distort proportions, starting the y-axis at a non-zero value to amplify changes.",
                examples: [
          {
            problem: "Which statement best matches “Good practices vs misleading graphs”?",
            solution: "The accurate idea is: GOOD PRACTICES: clear title (what is this showing?), labeled axes with units (e.g., 'Temperature (°C)' not just 'Temperature'), y-axis starting at zero for bar charts (unless clearly noted), legend when multiple series, colorblind-friendly colors, minimal chartjunk (3D, excessive gridlines, etc.). Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "GOOD PRACTICES: clear title (what is this showing?), labeled axes with units (e.g., 'Temperature (°C)' not just 'Temperature'), y-axis starting at zero for bar charts (unless clea…",
          },
          {
            problem: "Give one exam trap students hit when studying Good practices vs misleading graphs.",
            solution: "Stay close to the text: GOOD PRACTICES: clear title (what is this showing?), labeled axes with units (e.g., 'Temperature (°C)' not just 'Temperature'), y-axis starting at zero for bar charts (unless clearly noted), legend when multiple series,… Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
    ],

  content: true,
  postRestriction: "bs17",
  buildsOn: ["ra-descriptive-statistics", "math-5-4"],
  leadsTo: ["ra-correlation-regression", "ra-data-interpretation"],
  usedIn: ["ra-data-interpretation", "meteo-isobar-analysis", "meteo-thermodynamic-diagrams", "meteo-upper-air-charts", "earth-h2", "earth-h3", "earth-k2", "earth-k3"]
},

// ═══════════════════════════════════════════════════════════════════
// RA-7: Correlation & Regression
// ═══════════════════════════════════════════════════════════════════

{
  id: "ra-correlation-regression",
  sectionId: "RA-07",
  order: 1,
  title: "Correlation & Regression",
  definition: "Correlation measures the strength and direction of a LINEAR relationship between two variables (r ranges from −1 to +1). Regression fits a line to data for prediction. CRITICAL: correlation does NOT imply causation.",
  keyFacts: [
    "CORRELATION COEFFICIENT r: ranges from −1 to +1",
    "POSITIVE r: as X increases, Y tends to increase (both rise together)",
    "NEGATIVE r: as X increases, Y tends to decrease (one rises, other falls)",
    "ZERO r: no LINEAR relationship (X and Y unrelated linearly)",
    "|r| close to 1: STRONG relationship; |r| close to 0: WEAK relationship",
    "LINEAR REGRESSION: y = a + bx (straight line best fit)",
    "SLOPE b: average change in Y per unit change in X",
    "INTERCEPT a: value of Y when X = 0",
    "b = r × (s_y / s_x) where r is correlation, s_y and s_x are standard deviations of Y and X",
    "PREDICTION: substitute X value into the equation to estimate Y (extrapolation beyond data range is risky)",

    "RESIDUAL: observed Y − predicted Y. Best fit minimizes sum of squared residuals (least squares).",
    "R² (coefficient of determination): proportion of variance in Y explained by X (0 to 1)",
    "CRITICAL: CORRELATION ≠ CAUSATION. r = 0.9 does not mean X causes Y.",
    "Confounding variable: third variable Z causes both X and Y, creating spurious correlation",
    "Reverse causation: Y may cause X, not X cause Y",
    "Coincidence: some correlations are purely random (especially with small samples)"
  ],
  explanationSections: [
    { heading: "Reading the correlation coefficient r", body: "r ranges from −1 to +1. SIGN indicates DIRECTION: positive r = both variables move together; negative r = they move oppositely. MAGNITUDE indicates STRENGTH: |r| close to 1 = strong linear relationship; |r| close to 0 = weak or no linear relationship. r = 1 is perfect positive; r = −1 is perfect negative; r = 0 is no LINEAR relationship. NOTE: r = 0 doesn't mean NO relationship — just no LINEAR one. A U-shaped relationship could have r ≈ 0 but strong association." },
    { heading: "Correlation ≠ causation — the most important concept", body: "r = 0.9 between ice cream sales and drowning deaths does NOT mean ice cream causes drowning. A CONFOUNDING VARIABLE (summer heat) causes BOTH — more ice cream sales and more swimming/drowning in summer. This is the classic 'lurking variable' problem. Other reasons for high correlation without causation: REVERSE CAUSATION (Y causes X, not X causes Y), COINCIDENCE (especially in small samples or with many variables tested). Establishing causation requires a CONTROLLED EXPERIMENT (random assignment to treatment/control groups) or strong causal inference (Bradford Hill criteria)." },
    { heading: "Regression for prediction", body: "LINEAR REGRESSION fits the best line through a scatter of points: y = a + bx. The SLOPE b tells you the average change in Y per unit X. The INTERCEPT a is Y when X = 0 (often not meaningful if X = 0 is outside data range). The line is fit by LEAST SQUARES — minimizing the sum of squared RESIDUALS (observed Y − predicted Y). PREDICTION: substitute a new X to get estimated Y. Be cautious about EXTRAPOLATION (predicting far outside the data range) — relationships may not hold. R² (coefficient of determination) is the proportion of Y's variance explained by X: R² = 0.8 means 80% of Y's variation is explained by X." }
  ],
  examPoints: [
    "r ranges from −1 to +1; sign = direction, |r| = strength",
    "Correlation ≠ causation (most important concept!)",
    "Confounding variable = third variable causes both X and Y",

    "Regression: y = a + bx; slope b = r × (s_y / s_x)",
    "Least squares minimizes sum of squared residuals"
  ],
  commonMistakes: [
    "Concluding causation from a high r value — confounding variables or coincidence may be responsible",

    "Extrapolating far beyond the data range — relationship may not hold",
    "Confusing r (correlation) with R² (proportion of variance explained) — r² ≠ R² in general"
  ],
  relatedTopics: ["ra-descriptive-statistics", "ra-data-interpretation", "ra-scientific-method"],
    subtopics: [
      {
        id: "ra-correlation-regression-reading-the-correlation-coefficient-r",
        title: "Reading the correlation coefficient r",
        summary: "r ranges from −1 to +1. SIGN indicates DIRECTION: positive r = both variables move together; negative r = they move oppositely. MAGNITUDE…",
        explanation: "r ranges from −1 to +1. SIGN indicates DIRECTION: positive r = both variables move together; negative r = they move oppositely. MAGNITUDE indicates STRENGTH: |r| close to 1 = strong linear relationship; |r| close to 0 = weak or no linear relationship. r = 1 is perfect positive; r = −1 is perfect negative; r = 0 is no LINEAR relationship. NOTE: r = 0 doesn't mean NO relationship — just no LINEAR one. A U-shaped relationship could have r ≈ 0 but strong association.",
                examples: [
          {
            problem: "Which statement best matches “Reading the correlation coefficient r”?",
            solution: "The accurate idea is: r ranges from −1 to +1. Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "r ranges from −1 to +1.",
          },
          {
            problem: "Give one exam trap students hit when studying Reading the correlation coefficient r.",
            solution: "Stay close to the text: r ranges from −1 to +1. SIGN indicates DIRECTION: positive r = both variables move together; negative r = they move oppositely. Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
      {
        id: "ra-correlation-regression-correlation-causation-the-most-important",
        title: "Correlation ≠ causation — the most important concept",
        summary: "r = 0.9 between ice cream sales and drowning deaths does NOT mean ice cream causes drowning. A CONFOUNDING VARIABLE (summer heat) causes…",
        explanation: "r = 0.9 between ice cream sales and drowning deaths does NOT mean ice cream causes drowning. A CONFOUNDING VARIABLE (summer heat) causes BOTH — more ice cream sales and more swimming/drowning in summer. This is the classic 'lurking variable' problem. Other reasons for high correlation without causation: REVERSE CAUSATION (Y causes X, not X causes Y), COINCIDENCE (especially in small samples or with many variables tested). Establishing causation requires a CONTROLLED EXPERIMENT (random assignment to treatment/control groups) or strong causal inference (Bradford Hill criteria).",
                examples: [
          {
            problem: "Which statement best matches “Correlation ≠ causation — the most important concept”?",
            solution: "The accurate idea is: r = 0.9 between ice cream sales and drowning deaths does NOT mean ice cream causes drowning. Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "r = 0.9 between ice cream sales and drowning deaths does NOT mean ice cream causes drowning.",
          },
          {
            problem: "Give one exam trap students hit when studying Correlation ≠ causation — the most important concept.",
            solution: "Stay close to the text: r = 0.9 between ice cream sales and drowning deaths does NOT mean ice cream causes drowning. A CONFOUNDING VARIABLE (summer heat) causes BOTH — more ice cream sales and more swimming/drowning in summer. Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
      {
        id: "ra-correlation-regression-regression-for-prediction",
        title: "Regression for prediction",
        summary: "LINEAR REGRESSION fits the best line through a scatter of points: y = a + bx. The SLOPE b tells you the average change in Y per unit X. The…",
        explanation: "LINEAR REGRESSION fits the best line through a scatter of points: y = a + bx. The SLOPE b tells you the average change in Y per unit X. The INTERCEPT a is Y when X = 0 (often not meaningful if X = 0 is outside data range). The line is fit by LEAST SQUARES — minimizing the sum of squared RESIDUALS (observed Y − predicted Y). PREDICTION: substitute a new X to get estimated Y. Be cautious about EXTRAPOLATION (predicting far outside the data range) — relationships may not hold. R² (coefficient of determination) is the proportion of Y's variance explained by X: R² = 0.8 means 80% of Y's variation is explained by X.",
                examples: [
          {
            problem: "Which statement best matches “Regression for prediction”?",
            solution: "The accurate idea is: LINEAR REGRESSION fits the best line through a scatter of points: y = a + bx. Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "LINEAR REGRESSION fits the best line through a scatter of points: y = a + bx.",
          },
          {
            problem: "Give one exam trap students hit when studying Regression for prediction.",
            solution: "Stay close to the text: LINEAR REGRESSION fits the best line through a scatter of points: y = a + bx. The SLOPE b tells you the average change in Y per unit X. Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
    ],

  content: true,
  postRestriction: "bs17",
  buildsOn: ["ra-descriptive-statistics", "ra-data-visualization", "math-5-3"],
  leadsTo: ["ra-inferential-stats", "ra-data-interpretation"],
  usedIn: ["ra-data-interpretation", "meteo-radiative-forcing", "meteo-climate-feedbacks", "meteo-temp-rainfall-distribution", "earth-h3", "earth-c2"]
},

// ═══════════════════════════════════════════════════════════════════
// RA-8: Inferential Statistics
// ═══════════════════════════════════════════════════════════════════

{
  id: "ra-inferential-stats",
  sectionId: "RA-08",
  order: 1,
  title: "Inferential Statistics (Intro)",
  definition: "Inferential statistics uses sample data to make inferences about a larger population. It includes standard error, confidence intervals, and hypothesis testing — the tools that let us generalize beyond our data.",
  keyFacts: [
    "POPULATION: entire group of interest. PARAMETER describes population (μ, σ)",
    "SAMPLE: subset studied. STATISTIC describes sample (x̄, s)",
    "STANDARD ERROR: SE = s/√n. Measures how much the sample mean varies around the true population mean. Decreases as n increases.",
    "CONFIDENCE INTERVAL: range likely to contain the true population parameter",
    "95% CI: x̄ ± 1.96 × SE (for large samples, normal distribution)",
    "Wider CI = more uncertainty; narrower CI = more precision (for fixed confidence level)",
    "NULL HYPOTHESIS (H₀): no effect, no difference (e.g., 'the drug has no effect')",
    "ALTERNATIVE HYPOTHESIS (H₁ or Hₐ): there IS an effect or difference",
    "TEST STATISTIC: a number calculated from sample data that measures how far the data is from H₀",
    "P-VALUE: probability of getting data as extreme as observed, ASSUMING H₀ is true. Small p = data unlikely under H₀",
    "SIGNIFICANCE LEVEL (α): threshold, usually 0.05. REJECT H₀ if p < α",
    "TYPE I ERROR: rejecting H₀ when it's TRUE (false positive). Probability = α",
    "TYPE II ERROR: failing to reject H₀ when it's FALSE (false negative). Probability = β",
    "POWER = 1 − β. Probability of correctly rejecting a false H₀",
    "Common tests: t-test (compare means), chi-square (categorical), ANOVA (3+ means), correlation test (significance of r)"
  ],
  explanationSections: [
    { heading: "From sample to population — the logic of inference", body: "POPULATION: the entire group you want to understand (e.g., all meteorology students in Pakistan). SAMPLE: the subset you actually measure. A PARAMETER describes the population (μ, σ); a STATISTIC describes the sample (x̄, s). We use sample statistics to ESTIMATE population parameters. The STANDARD ERROR (SE = s/√n) measures the uncertainty in our estimate — it shrinks as sample size n grows. A CONFIDENCE INTERVAL (e.g., 95% CI) gives a range likely to contain the true parameter. '95% confidence' means: if we repeated this sampling process many times, 95% of the resulting intervals would contain the true parameter." },
    { heading: "Hypothesis testing — the logic", body: "We start by assuming H₀ (null hypothesis: no effect/difference). We then ask: 'If H₀ is truly true, what's the probability of getting data as extreme as ours?' That probability is the P-VALUE. If p is small (typically < 0.05), we REJECT H₀ — the data is too unlikely under H₀. We choose a SIGNIFICANCE LEVEL α (usually 0.05) as our threshold. The two types of error: TYPE I (α): rejecting true H₀ (false positive). TYPE II (β): failing to reject false H₀ (false negative). POWER (1 − β): probability of correctly rejecting a false H₀. More sample size = more power. The test STATISTIC depends on the test type (t, F, χ², z, etc.)." },
    { heading: "Common tests — which to use when", body: "T-TEST: compare means of TWO groups (e.g., is mean rainfall different between two regions?). CHI-SQUARE TEST: analyze CATEGORICAL data (e.g., is there an association between climate type and species distribution?). ANOVA: compare means of THREE OR MORE groups (extension of t-test). CORRELATION TEST: test whether r is significantly different from zero. The choice depends on your data type (continuous vs categorical) and question (compare groups vs test association)." }
  ],
  examPoints: [
    "Parameter = population; Statistic = sample",
    "Standard Error = s/√n (shrinks with larger n)",
    "95% CI: x̄ ± 1.96 × SE for large samples",
    "Reject H₀ if p < α (typically 0.05)",
    "Type I error = false positive; Type II = false negative; Power = 1 − β"
  ],
  commonMistakes: [
    "Confusing p-value with probability that H₀ is true — p-value is P(data | H₀), not P(H₀ | data)",

    "Saying 'we proved H₀ is false' — we can only reject or fail to reject H₀; never 'prove'",
    "Confusing α (Type I error rate) with β (Type II error rate)"
  ],
  relatedTopics: ["ra-probability", "ra-descriptive-statistics", "ra-correlation-regression"],
    subtopics: [
      {
        id: "ra-inferential-stats-from-sample-to-population-the-logic-of-i",
        title: "From sample to population — the logic of inference",
        summary: "POPULATION: the entire group you want to understand (e.g., all meteorology students in Pakistan). SAMPLE: the subset you actually measure.…",
        explanation: "POPULATION: the entire group you want to understand (e.g., all meteorology students in Pakistan). SAMPLE: the subset you actually measure. A PARAMETER describes the population (μ, σ); a STATISTIC describes the sample (x̄, s). We use sample statistics to ESTIMATE population parameters. The STANDARD ERROR (SE = s/√n) measures the uncertainty in our estimate — it shrinks as sample size n grows. A CONFIDENCE INTERVAL (e.g., 95% CI) gives a range likely to contain the true parameter. '95% confidence' means: if we repeated this sampling process many times, 95% of the resulting intervals would contain the true parameter.",
                examples: [
          {
            problem: "Which statement best matches “From sample to population — the logic of inference”?",
            solution: "The accurate idea is: POPULATION: the entire group you want to understand (e.g., all meteorology students in Pakistan). Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "POPULATION: the entire group you want to understand (e.g., all meteorology students in Pakistan).",
          },
          {
            problem: "Give one exam trap students hit when studying From sample to population — the logic of inference.",
            solution: "Stay close to the text: POPULATION: the entire group you want to understand (e.g., all meteorology students in Pakistan). SAMPLE: the subset you actually measure. Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
      {
        id: "ra-inferential-stats-hypothesis-testing-the-logic",
        title: "Hypothesis testing — the logic",
        summary: "We start by assuming H₀ (null hypothesis: no effect/difference). We then ask: 'If H₀ is truly true, what's the probability of getting data…",
        explanation: "We start by assuming H₀ (null hypothesis: no effect/difference). We then ask: 'If H₀ is truly true, what's the probability of getting data as extreme as ours?' That probability is the P-VALUE. If p is small (typically < 0.05), we REJECT H₀ — the data is too unlikely under H₀. We choose a SIGNIFICANCE LEVEL α (usually 0.05) as our threshold. The two types of error: TYPE I (α): rejecting true H₀ (false positive). TYPE II (β): failing to reject false H₀ (false negative). POWER (1 − β): probability of correctly rejecting a false H₀. More sample size = more power. The test STATISTIC depends on the test type (t, F, χ², z, etc.).",
                examples: [
          {
            problem: "Which statement best matches “Hypothesis testing — the logic”?",
            solution: "The accurate idea is: We start by assuming H₀ (null hypothesis: no effect/difference). Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "We start by assuming H₀ (null hypothesis: no effect/difference).",
          },
          {
            problem: "Give one exam trap students hit when studying Hypothesis testing — the logic.",
            solution: "Stay close to the text: We start by assuming H₀ (null hypothesis: no effect/difference). We then ask: 'If H₀ is truly true, what's the probability of getting data as extreme as ours?' That probability is the P-VALUE. Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
      {
        id: "ra-inferential-stats-common-tests-which-to-use-when",
        title: "Common tests — which to use when",
        summary: "T-TEST: compare means of TWO groups (e.g., is mean rainfall different between two regions?). CHI-SQUARE TEST: analyze CATEGORICAL data…",
        explanation: "T-TEST: compare means of TWO groups (e.g., is mean rainfall different between two regions?). CHI-SQUARE TEST: analyze CATEGORICAL data (e.g., is there an association between climate type and species distribution?). ANOVA: compare means of THREE OR MORE groups (extension of t-test). CORRELATION TEST: test whether r is significantly different from zero. The choice depends on your data type (continuous vs categorical) and question (compare groups vs test association).",
                examples: [
          {
            problem: "Which statement best matches “Common tests — which to use when”?",
            solution: "The accurate idea is: T-TEST: compare means of TWO groups (e.g., is mean rainfall different between two regions?). Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "T-TEST: compare means of TWO groups (e.g., is mean rainfall different between two regions?).",
          },
          {
            problem: "Give one exam trap students hit when studying Common tests — which to use when.",
            solution: "Stay close to the text: T-TEST: compare means of TWO groups (e.g., is mean rainfall different between two regions?). CHI-SQUARE TEST: analyze CATEGORICAL data (e.g., is there an association between climate type and species distribution?). Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
    ],

  content: true,
  postRestriction: "bs17",
  buildsOn: ["ra-probability", "ra-correlation-regression", "ra-descriptive-statistics"],
  leadsTo: ["ra-data-interpretation"],
  usedIn: ["ra-data-interpretation", "meteo-forecast-skill"]
},

// ═══════════════════════════════════════════════════════════════════
// RA-9: Research Quality
// ═══════════════════════════════════════════════════════════════════

{
  id: "ra-research-quality",
  sectionId: "RA-09",
  order: 1,
  title: "Research Quality: Validity, Reliability & Error",
  definition: "Research quality depends on validity (does the study measure what it claims to measure and establish cause-effect?), reliability (is the measurement consistent?), and error control (random, systematic, gross).",
  keyFacts: [
    "INTERNAL VALIDITY: does the study establish CAUSE-EFFECT? High = confounders controlled, randomization used",
    "EXTERNAL VALIDITY: can results GENERALIZE to other populations, settings, times?",
    "CONSTRUCT VALIDITY: does the measurement actually CAPTURE the concept being measured?",
    "RELIABILITY: CONSISTENCY of measurement. Same result on repeated measurement.",
    "TEST-RETEST reliability: same instrument on same subjects at different times → similar results",
    "INTER-RATER reliability: different raters using same instrument → similar results",
    "INTERNAL CONSISTENCY: different items measuring same construct → correlate highly (e.g., Cronbach's alpha)",
    "RANDOM ERROR: noise, reduces PRECISION (scatter around true value). Reduced by larger samples.",
    "SYSTEMATIC ERROR: BIAS, reduces ACCURACY (consistently off in one direction). NOT reduced by larger samples.",
    "GROSS ERROR: blunders, mistakes (e.g., miscalibration, data entry error). Prevented by careful procedure.",

    "ACCURACY vs PRECISION: accurate + precise = ideal; accurate but not precise = scattered around true; precise but not accurate = consistent but wrong; neither = useless"
  ],
  explanationSections: [
    { heading: "Three types of validity — what each means", body: "INTERNAL VALIDITY is about CAUSATION: did the independent variable actually CAUSE the change in the dependent variable, or could something else (confounder) explain it? Random assignment to treatment/control groups maximizes internal validity. EXTERNAL VALIDITY is about GENERALIZATION: do these results apply to other people, places, times? A study on Pakistani university students may not generalize to rural farmers. CONSTRUCT VALIDITY is about MEASUREMENT: does the test/instrument actually measure the abstract concept it claims to (e.g., does an 'anxiety test' really measure anxiety, not just nervousness)? The three are often in tension: highly controlled lab experiments have great internal validity but poor external validity." },
    { heading: "Reliability vs validity — they're different", body: "RELIABILITY = consistency (same measurement gives same result). VALIDITY = accuracy (measures what it claims to measure). A broken thermometer that always reads 100°C is RELIABLE (consistent) but NOT VALID (not measuring actual temperature correctly). You can have reliability without validity, but NOT validity without reliability (if measurements are inconsistent, they can't be accurate). Good research needs BOTH." },
    { heading: "Error types — random vs systematic", body: "RANDOM ERROR is noise — measurements scatter around the true value. Reduced by LARGER SAMPLES (that's why the standard error s/√n decreases with n). SYSTEMATIC ERROR is BIAS — measurements consistently skewed in one direction. NOT reduced by larger samples (a biased scale stays biased no matter how many times you weigh). Examples of systematic error: miscalibrated instrument, non-representative sampling, leading questions in surveys. GROSS ERROR is blunder/mistake — preventable by careful procedures. A study can be precise (low random error) but inaccurate (high systematic error)." }
  ],
  examPoints: [
    "Internal = causation; External = generalization; Construct = measures the concept",
    "Reliability = consistency; Validity = accuracy",
    "Random error reduces precision; Systematic error reduces accuracy (not fixed by larger n)",

    "Accurate + precise = ideal"
  ],
  commonMistakes: [
    "Confusing reliability with validity — a measure can be reliable but not valid (consistent but measuring the wrong thing)",

    "Thinking larger samples fix systematic error — they only reduce random error",
    "Confusing internal with external validity — high internal validity (controlled lab) often means LOW external validity (real-world generalizability)"
  ],
  relatedTopics: ["ra-scientific-method", "ra-research-design", "ra-data-interpretation"],
    subtopics: [
      {
        id: "ra-research-quality-three-types-of-validity-what-each-means",
        title: "Three types of validity — what each means",
        summary: "INTERNAL VALIDITY is about CAUSATION: did the independent variable actually CAUSE the change in the dependent variable, or could something…",
        explanation: "INTERNAL VALIDITY is about CAUSATION: did the independent variable actually CAUSE the change in the dependent variable, or could something else (confounder) explain it? Random assignment to treatment/control groups maximizes internal validity. EXTERNAL VALIDITY is about GENERALIZATION: do these results apply to other people, places, times? A study on Pakistani university students may not generalize to rural farmers. CONSTRUCT VALIDITY is about MEASUREMENT: does the test/instrument actually measure the abstract concept it claims to (e.g., does an 'anxiety test' really measure anxiety, not just nervousness)? The three are often in tension: highly controlled lab experiments have great internal validity but poor external validity.",
                examples: [
          {
            problem: "Which statement best matches “Three types of validity — what each means”?",
            solution: "The accurate idea is: INTERNAL VALIDITY is about CAUSATION: did the independent variable actually CAUSE the change in the dependent variable, or could something else (confounder) explain it? Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "INTERNAL VALIDITY is about CAUSATION: did the independent variable actually CAUSE the change in the dependent variable, or could something else (confounder) explain it?",
          },
          {
            problem: "Give one exam trap students hit when studying Three types of validity — what each means.",
            solution: "Stay close to the text: INTERNAL VALIDITY is about CAUSATION: did the independent variable actually CAUSE the change in the dependent variable, or could something else (confounder) explain it? Random assignment to treatment/control groups maxim… Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
      {
        id: "ra-research-quality-reliability-vs-validity-they-re-differen",
        title: "Reliability vs validity — they're different",
        summary: "RELIABILITY = consistency (same measurement gives same result). VALIDITY = accuracy (measures what it claims to measure). A broken…",
        explanation: "RELIABILITY = consistency (same measurement gives same result). VALIDITY = accuracy (measures what it claims to measure). A broken thermometer that always reads 100°C is RELIABLE (consistent) but NOT VALID (not measuring actual temperature correctly). You can have reliability without validity, but NOT validity without reliability (if measurements are inconsistent, they can't be accurate). Good research needs BOTH.",
                examples: [
          {
            problem: "Which statement best matches “Reliability vs validity — they're different”?",
            solution: "The accurate idea is: RELIABILITY = consistency (same measurement gives same result). Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "RELIABILITY = consistency (same measurement gives same result).",
          },
          {
            problem: "Give one exam trap students hit when studying Reliability vs validity — they're different.",
            solution: "Stay close to the text: RELIABILITY = consistency (same measurement gives same result). VALIDITY = accuracy (measures what it claims to measure). Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
      {
        id: "ra-research-quality-error-types-random-vs-systematic",
        title: "Error types — random vs systematic",
        summary: "RANDOM ERROR is noise — measurements scatter around the true value. Reduced by LARGER SAMPLES (that's why the standard error s/√n decreases…",
        explanation: "RANDOM ERROR is noise — measurements scatter around the true value. Reduced by LARGER SAMPLES (that's why the standard error s/√n decreases with n). SYSTEMATIC ERROR is BIAS — measurements consistently skewed in one direction. NOT reduced by larger samples (a biased scale stays biased no matter how many times you weigh). Examples of systematic error: miscalibrated instrument, non-representative sampling, leading questions in surveys. GROSS ERROR is blunder/mistake — preventable by careful procedures. A study can be precise (low random error) but inaccurate (high systematic error).",
                examples: [
          {
            problem: "Which statement best matches “Error types — random vs systematic”?",
            solution: "The accurate idea is: RANDOM ERROR is noise — measurements scatter around the true value. Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "RANDOM ERROR is noise — measurements scatter around the true value.",
          },
          {
            problem: "Give one exam trap students hit when studying Error types — random vs systematic.",
            solution: "Stay close to the text: RANDOM ERROR is noise — measurements scatter around the true value. Reduced by LARGER SAMPLES (that's why the standard error s/√n decreases with n). Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
    ],

  content: true,
  postRestriction: "bs17",
  buildsOn: ["ra-scientific-method", "ra-research-design", "math-1-6"],
  leadsTo: ["ra-data-interpretation", "ra-research-ethics"],
  usedIn: ["ra-data-interpretation", "meteo-stevenson-screen", "meteo-forecast-skill", "earth-k2"]
},

// ═══════════════════════════════════════════════════════════════════
// RA-10: Data Interpretation & Critical Thinking
// ═══════════════════════════════════════════════════════════════════

{
  id: "ra-data-interpretation",
  sectionId: "RA-10",
  order: 1,
  title: "Data Interpretation & Critical Thinking",
  definition: "Data interpretation requires reading tables and graphs carefully, identifying trends, and applying critical thinking to spot misleading statistics, confounding variables, and other pitfalls. 'Lies, damn lies, and statistics' is a real warning.",
  keyFacts: [
    "READ tables and graphs carefully — note units, axes, context",
    "IDENTIFY TRENDS: increasing, decreasing, linear, non-linear, cyclical/seasonal, inflection points",
    "SPOTTING MISLEADING STATISTICS: cherry-picked data, manipulated scales, false correlations, outliers affecting the mean, mixing percentages",
    "CONFOUNDING VARIABLE: third variable causes both X and Y, creating spurious correlation. Example: ice cream sales AND drowning both rise in summer (heat is the confounder)",
    "Address confounding by: stratification, multivariate analysis, randomization, controlled experiments",
    "COMPARING GROUPS: look for STATISTICALLY SIGNIFICANT differences, effect size, and practical significance",
    "OUTLIERS: investigate — may be errors (correct/remove) or genuine (report separately)",
    "BASE RATE fallacy: ignore background rate when assessing probability (e.g., 99% accurate test in low-incidence population gives many false positives)",
    "MULTIPLE COMPARISONS: testing many hypotheses inflates Type I error rate"
  ],
  explanationSections: [
    { heading: "How to read tables and graphs critically", body: "Before interpreting any data: (1) Note the UNITS on axes (Temperature in °C? mm? — without units, the number is meaningless). (2) Check the SCALE (linear or log? truncated y-axis?). (3) Understand the CONTEXT (what was measured, when, where, how?). (4) Look for TRENDS — increasing, decreasing, cyclical, linear vs. non-linear. (5) Identify OUTLIERS and INFLECTION POINTS (where the trend changes). A common error is reading the number without checking the units, leading to misinterpretation by orders of magnitude." },
    { heading: "The base rate fallacy — a classic trap", body: "The base rate fallacy: ignoring background frequency. EXAMPLE: A medical test for a disease is 99% accurate. The disease affects 1% of the population. You test positive. What's the probability you have the disease? Most people say 99%. WRONG. The answer is ~50%. Why? Of 10,000 people: 100 have the disease (99 test positive, 1 false negative). 9,900 don't have it (9,900 × 0.01 = 99 false positives). So 99 true positives + 99 false positives = 198 positives, only 99 of which are real = 50%. The base rate (1% disease prevalence) matters enormously. Always consider base rates." },
    { heading: "Spotting misleading statistics", body: "Common ways data is presented misleadingly: (1) CHERRY-PICKED DATA: showing only a subset that supports a claim. (2) MANIPULATED SCALES: truncated y-axis exaggerates small differences. (3) MIXING PERCENTAGES: '100% increase from 1 to 2 cases' sounds dramatic but is just 1 additional case. (4) FALSE CORRELATIONS: two trends rising together don't prove causation. (5) SURVIVORSHIP BIAS: only the 'winners' are visible. The exam often tests whether you can spot these manipulations in presented data — the key is to ask 'what's missing? what was the baseline? could this be coincidence?'" }
  ],
  examPoints: [
    "Always check UNITS and SCALE on data displays",
    "Base rate fallacy: ignore background frequency at your peril",
    "Confounding: third variable causes both X and Y",
    "Cherry-picked data and truncated axes are common misleading techniques"
  ],
  commonMistakes: [
    "Ignoring base rates when assessing probability (test accuracy fallacy)",

    "Concluding causation from correlation alone (classic error)",
    "Trusting percentages without checking the underlying numbers (e.g., '50% increase' from 2 to 3 is 1 extra case)"
  ],
  relatedTopics: ["ra-correlation-regression", "ra-data-visualization", "ra-research-quality"],
    subtopics: [
      {
        id: "ra-data-interpretation-how-to-read-tables-and-graphs-critically",
        title: "How to read tables and graphs critically",
        summary: "Before interpreting any data: (1) Note the UNITS on axes (Temperature in °C? mm? — without units, the number is meaningless). (2) Check the…",
        explanation: "Before interpreting any data: (1) Note the UNITS on axes (Temperature in °C? mm? — without units, the number is meaningless). (2) Check the SCALE (linear or log? truncated y-axis?). (3) Understand the CONTEXT (what was measured, when, where, how?). (4) Look for TRENDS — increasing, decreasing, cyclical, linear vs. non-linear. (5) Identify OUTLIERS and INFLECTION POINTS (where the trend changes). A common error is reading the number without checking the units, leading to misinterpretation by orders of magnitude.",
                examples: [
          {
            problem: "Which statement best matches “How to read tables and graphs critically”?",
            solution: "The accurate idea is: Before interpreting any data: (1) Note the UNITS on axes (Temperature in °C? Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "Before interpreting any data: (1) Note the UNITS on axes (Temperature in °C?",
          },
          {
            problem: "Give one exam trap students hit when studying How to read tables and graphs critically.",
            solution: "Stay close to the text: Before interpreting any data: (1) Note the UNITS on axes (Temperature in °C? mm? Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
      {
        id: "ra-data-interpretation-the-base-rate-fallacy-a-classic-trap",
        title: "The base rate fallacy — a classic trap",
        summary: "The base rate fallacy: ignoring background frequency. EXAMPLE: A medical test for a disease is 99% accurate. The disease affects 1% of the…",
        explanation: "The base rate fallacy: ignoring background frequency. EXAMPLE: A medical test for a disease is 99% accurate. The disease affects 1% of the population. You test positive. What's the probability you have the disease? Most people say 99%. WRONG. The answer is ~50%. Why? Of 10,000 people: 100 have the disease (99 test positive, 1 false negative). 9,900 don't have it (9,900 × 0.01 = 99 false positives). So 99 true positives + 99 false positives = 198 positives, only 99 of which are real = 50%. The base rate (1% disease prevalence) matters enormously. Always consider base rates.",
                examples: [
          {
            problem: "Which statement best matches “The base rate fallacy — a classic trap”?",
            solution: "The accurate idea is: The base rate fallacy: ignoring background frequency. Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "The base rate fallacy: ignoring background frequency.",
          },
          {
            problem: "Give one exam trap students hit when studying The base rate fallacy — a classic trap.",
            solution: "Stay close to the text: The base rate fallacy: ignoring background frequency. EXAMPLE: A medical test for a disease is 99% accurate. Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
      {
        id: "ra-data-interpretation-spotting-misleading-statistics",
        title: "Spotting misleading statistics",
        summary: "Common ways data is presented misleadingly: (1) CHERRY-PICKED DATA: showing only a subset that supports a claim. (2) MANIPULATED SCALES:…",
        explanation: "Common ways data is presented misleadingly: (1) CHERRY-PICKED DATA: showing only a subset that supports a claim. (2) MANIPULATED SCALES: truncated y-axis exaggerates small differences. (3) MIXING PERCENTAGES: '100% increase from 1 to 2 cases' sounds dramatic but is just 1 additional case. (4) FALSE CORRELATIONS: two trends rising together don't prove causation. (5) SURVIVORSHIP BIAS: only the 'winners' are visible. The exam often tests whether you can spot these manipulations in presented data — the key is to ask 'what's missing? what was the baseline? could this be coincidence?'",
                examples: [
          {
            problem: "Which statement best matches “Spotting misleading statistics”?",
            solution: "The accurate idea is: Common ways data is presented misleadingly: (1) CHERRY-PICKED DATA: showing only a subset that supports a claim. Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "Common ways data is presented misleadingly: (1) CHERRY-PICKED DATA: showing only a subset that supports a claim.",
          },
          {
            problem: "Give one exam trap students hit when studying Spotting misleading statistics.",
            solution: "Stay close to the text: Common ways data is presented misleadingly: (1) CHERRY-PICKED DATA: showing only a subset that supports a claim. (2) MANIPULATED SCALES: truncated y-axis exaggerates small differences. Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
    ],

  content: true,
  postRestriction: "bs17",
  buildsOn: ["ra-data-visualization", "ra-correlation-regression", "ra-research-quality", "ra-inferential-stats"],
  leadsTo: ["ra-scientific-reporting"],
  usedIn: ["ra-scientific-reporting", "env-climate-change-response", "meteo-extreme-events", "meteo-ipcc-rcps", "earth-h3", "earth-h4", "earth-c2", "earth-k2", "earth-i2", "english-sentence-building-blocks"]
},

// ═══════════════════════════════════════════════════════════════════
// RA-11: Scientific Reporting
// ═══════════════════════════════════════════════════════════════════

{
  id: "ra-scientific-reporting",
  sectionId: "RA-11",
  order: 1,
  title: "Scientific Reporting (IMRaD)",
  definition: "Scientific reports follow a standard IMRaD structure (Introduction, Methods, Results, Discussion). Effective reporting allows other researchers to evaluate, replicate, and build on the work.",
  keyFacts: [
    "IMRaD structure: Introduction (why) → Methods (how) → Results (what found) → Discussion (what it means)",
    "INTRODUCTION: background, literature review, research question/hypothesis, objectives, significance",
    "METHODS: detailed enough for REPLICATION — study design, participants, materials, procedure, data analysis, ethical approval",
    "RESULTS: presents findings objectively, without interpretation (use tables, figures, statistics); follows logical order",
    "DISCUSSION: interprets results, compares to literature, addresses limitations, suggests future directions",
    "CONCLUSION: summarizes main findings and their implications (often in a separate section or at end of Discussion)",
    "ABSTRACT: 150-300 words, summarizes entire paper (background, methods, results, conclusions), no citations",
    "KEYWORDS: 3-6 terms for indexing/databases",
    "TABLES & FIGURES: numbered (Table 1, Figure 1), titled, self-explanatory, referenced in text",
    "REFERENCES: cited properly (APA, Harvard, Vancouver styles); include author, year, title, journal/source, DOI for digital",
    "PEER REVIEW: independent expert evaluation BEFORE publication; quality control; can be slow or sometimes flawed",
    "PLAGIARISM: presenting others' work as your own — serious ethical violation"
  ],
  explanationSections: [
    { heading: "The IMRaD structure — why it works", body: "IMRaD (Introduction, Methods, Results, Discussion) is the standard scientific paper structure because it follows the LOGIC of the research process: WHY (Introduction) → HOW (Methods) → WHAT (Results) → SO WHAT (Discussion). This structure makes papers easy to read and evaluate. The METHODS must be detailed enough for REPLICATION — another researcher should be able to repeat your study. The RESULTS present findings OBJECTIVELY (no interpretation — that goes in Discussion). The DISCUSSION interprets, compares to literature, and addresses limitations." },
    { heading: "Citations and references — academic integrity", body: "REFERENCES give credit to prior work and allow readers to verify your sources. Common styles: APA (American Psychological Association, common in social sciences), Harvard (similar, common in sciences), Vancouver (common in medical journals). Each style has specific rules for formatting. The KEY elements: author(s), year, title, journal/source, volume/issue/pages, DOI (for digital). In-text citations (Author, Year) link to the full reference. PLAGIARISM (using others' words, ideas, or data without attribution) is a serious ethical violation that can end careers. Paraphrase, quote, and cite properly." },
    { heading: "Peer review — strengths and limitations", body: "PEER REVIEW is independent expert evaluation of a manuscript BEFORE publication. Strengths: catches errors, improves quality, validates findings. Limitations: SLOW (months to years), reviewers can be biased or miss things, and 'publication bias' means positive results are over-represented (negative results often don't get published). The replication crisis in many fields shows peer review alone is not enough. PRE-PRINTS (online before peer review) and REGISTERED REPORTS (pre-registered study design) are modern solutions to some of these limitations." }
  ],
  examPoints: [
    "IMRaD: Introduction → Methods → Results → Discussion",
    "Methods must be detailed enough for replication",
    "Results present objectively; Discussion interprets",
    "Plagiarism = serious ethical violation (no exceptions)"
  ],
  commonMistakes: [
    "Interpreting results in the Results section (interpretation belongs in Discussion)",

    "Insufficient Methods detail (other researchers can't replicate)",
    "Forgetting to cite sources — plagiarism is a serious violation"
  ],
  relatedTopics: ["ra-scientific-method", "ra-research-ethics", "ra-data-interpretation"],
    subtopics: [
      {
        id: "ra-scientific-reporting-the-imrad-structure-why-it-works",
        title: "The IMRaD structure — why it works",
        summary: "IMRaD (Introduction, Methods, Results, Discussion) is the standard scientific paper structure because it follows the LOGIC of the research…",
        explanation: "IMRaD (Introduction, Methods, Results, Discussion) is the standard scientific paper structure because it follows the LOGIC of the research process: WHY (Introduction) → HOW (Methods) → WHAT (Results) → SO WHAT (Discussion). This structure makes papers easy to read and evaluate. The METHODS must be detailed enough for REPLICATION — another researcher should be able to repeat your study. The RESULTS present findings OBJECTIVELY (no interpretation — that goes in Discussion). The DISCUSSION interprets, compares to literature, and addresses limitations.",
                examples: [
          {
            problem: "Which statement best matches “The IMRaD structure — why it works”?",
            solution: "The accurate idea is: IMRaD (Introduction, Methods, Results, Discussion) is the standard scientific paper structure because it follows the LOGIC of the research process: WHY (Introduction) → HOW (Methods) → WHAT (Results) → SO WHAT (Discussion). Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "IMRaD (Introduction, Methods, Results, Discussion) is the standard scientific paper structure because it follows the LOGIC of the research process: WHY (Introduction) → HOW (Meth…",
          },
          {
            problem: "Give one exam trap students hit when studying The IMRaD structure — why it works.",
            solution: "Stay close to the text: IMRaD (Introduction, Methods, Results, Discussion) is the standard scientific paper structure because it follows the LOGIC of the research process: WHY (Introduction) → HOW (Methods) → WHAT (Results) → SO WHAT (Dis… Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
      {
        id: "ra-scientific-reporting-citations-and-references-academic-integr",
        title: "Citations and references — academic integrity",
        summary: "REFERENCES give credit to prior work and allow readers to verify your sources. Common styles: APA (American Psychological Association,…",
        explanation: "REFERENCES give credit to prior work and allow readers to verify your sources. Common styles: APA (American Psychological Association, common in social sciences), Harvard (similar, common in sciences), Vancouver (common in medical journals). Each style has specific rules for formatting. The KEY elements: author(s), year, title, journal/source, volume/issue/pages, DOI (for digital). In-text citations (Author, Year) link to the full reference. PLAGIARISM (using others' words, ideas, or data without attribution) is a serious ethical violation that can end careers. Paraphrase, quote, and cite properly.",
                examples: [
          {
            problem: "Which statement best matches “Citations and references — academic integrity”?",
            solution: "The accurate idea is: REFERENCES give credit to prior work and allow readers to verify your sources. Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "REFERENCES give credit to prior work and allow readers to verify your sources.",
          },
          {
            problem: "Give one exam trap students hit when studying Citations and references — academic integrity.",
            solution: "Stay close to the text: REFERENCES give credit to prior work and allow readers to verify your sources. Common styles: APA (American Psychological Association, common in social sciences), Harvard (similar, common in sciences), Vancouver (common … Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
      {
        id: "ra-scientific-reporting-peer-review-strengths-and-limitations",
        title: "Peer review — strengths and limitations",
        summary: "PEER REVIEW is independent expert evaluation of a manuscript BEFORE publication. Strengths: catches errors, improves quality, validates…",
        explanation: "PEER REVIEW is independent expert evaluation of a manuscript BEFORE publication. Strengths: catches errors, improves quality, validates findings. Limitations: SLOW (months to years), reviewers can be biased or miss things, and 'publication bias' means positive results are over-represented (negative results often don't get published). The replication crisis in many fields shows peer review alone is not enough. PRE-PRINTS (online before peer review) and REGISTERED REPORTS (pre-registered study design) are modern solutions to some of these limitations.",
                examples: [
          {
            problem: "Which statement best matches “Peer review — strengths and limitations”?",
            solution: "The accurate idea is: PEER REVIEW is independent expert evaluation of a manuscript BEFORE publication. Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "PEER REVIEW is independent expert evaluation of a manuscript BEFORE publication.",
          },
          {
            problem: "Give one exam trap students hit when studying Peer review — strengths and limitations.",
            solution: "Stay close to the text: PEER REVIEW is independent expert evaluation of a manuscript BEFORE publication. Strengths: catches errors, improves quality, validates findings. Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
    ],

  content: true,
  postRestriction: "bs17",
  buildsOn: ["ra-data-interpretation", "ra-scientific-method"],
  leadsTo: ["ra-research-ethics"],
  usedIn: ["english-parts-of-speech-and-tenses", "english-common-errors", "english-sentence-building-blocks", "english-sentence-types-errors-transformation", "english-sentence-completion-rearrangement", "meteo-pmd-operational", "env-climate-change-response", "env-international-climate-policy", "earth-h4", "earth-i2"]
},

// ═══════════════════════════════════════════════════════════════════
// RA-12: Research Ethics
// ═══════════════════════════════════════════════════════════════════

{
  id: "ra-research-ethics",
  sectionId: "RA-12",
  order: 1,
  title: "Research Ethics",
  definition: "Research ethics covers the principles and rules that ensure research is conducted honestly, responsibly, and with respect for participants and the scientific community. Violations can end careers and undermine public trust in science.",
  keyFacts: [
    "INTEGRITY: honest, accurate, transparent reporting of methods and results",
    "PLAGIARISM: presenting others' work (words, ideas, data) as your own — serious ethical violation",
    "FABRICATION: inventing data or results that were never collected (e.g., fake participants, made-up measurements)",
    "FALSIFICATION: manipulating data, methods, or results to support a hypothesis (e.g., selectively omitting data points)",
    "AUTHORSHIP: only those who contributed substantially to conception, design, execution, or interpretation should be authors (no honorary or ghost authorship)",
    "CONFLICTS OF INTEREST: disclose any financial, personal, or professional interests that could bias the research",
    "DATA SHARING: open data is increasingly expected; allows others to verify and build on findings",
    "IRB/ETHICS APPROVAL: required for research involving human subjects, animals, or sensitive data; protects participants",
    "INFORMED CONSENT: participants must understand the research and voluntarily agree to participate",
    "FABRICATION vs FALSIFICATION: fabrication = making up data; falsification = manipulating real data. Both are serious fraud."
  ],
  explanationSections: [
    { heading: "The hierarchy of research integrity violations", body: "The most serious violations, in order: (1) FABRICATION: inventing data (e.g., making up participants in a study). (2) FALSIFICATION: manipulating real data to support a hypothesis (e.g., excluding 'outliers' that contradict your theory). (3) PLAGIARISM: stealing others' work. (4) UNETHICAL AUTHORSHIP: honorary or ghost authorship. (5) UNDISCLOSED CONFLICTS OF INTEREST. (6) FAILURE TO OBTAIN ETHICS APPROVAL for human subjects research. The first three are the most career-ending offenses. Most journals now require raw data submission for verification." },
    { heading: "Authorship and credit", body: "Who deserves authorship? Standard guidelines (e.g., ICMJE, APA): only those who contributed SUBSTANTIALLY to (1) conception or design, (2) data acquisition, (3) analysis or interpretation, AND (4) drafting or critical revision. All four should contribute. Honorary authorship (giving authorship to a senior person who didn't really contribute) and ghost authorship (omitting someone who did) are both unethical. The 'first author' is usually the person who did the most work; the 'corresponding author' handles communication. ORDER MATTERS — the first and last positions are typically the most prestigious." },
    { heading: "Ethics approval and human subjects protection", body: "Research involving human subjects, animals, personal data, or sensitive topics typically requires ETHICS APPROVAL from an Institutional Review Board (IRB) or ethics committee BEFORE the research begins. This protects participants from harm and ensures informed consent. The IRB reviews: (1) risk/benefit ratio, (2) informed consent process, (3) confidentiality protections, (4) recruitment procedures. Researchers must report serious adverse events. ETHICS VIOLATIONS (e.g., Tuskegee syphilis study, Milgram obedience experiments) led to the development of modern research ethics frameworks (Belmont Report, Declaration of Helsinki)." }
  ],
  examPoints: [
    "Fabrication = inventing data; Falsification = manipulating data; both are fraud",
    "Plagiarism = using others' work without attribution",
    "Ethics approval required for research on human subjects",
    "All four ICMJE authorship criteria should be met"
  ],
  commonMistakes: [
    "Confusing fabrication (making up data) with falsification (manipulating real data) — both are serious but different",

    "Thinking honorary authorship is fine ('just putting the lab head on the paper') — it's unethical",
    "Forgetting ethics approval is needed even for low-risk survey research — most institutions require it regardless"
  ],
  relatedTopics: ["ra-scientific-method", "ra-research-design", "ra-scientific-reporting"],
    subtopics: [
      {
        id: "ra-research-ethics-the-hierarchy-of-research-integrity-viol",
        title: "The hierarchy of research integrity violations",
        summary: "The most serious violations, in order: (1) FABRICATION: inventing data (e.g., making up participants in a study). (2) FALSIFICATION:…",
        explanation: "The most serious violations, in order: (1) FABRICATION: inventing data (e.g., making up participants in a study). (2) FALSIFICATION: manipulating real data to support a hypothesis (e.g., excluding 'outliers' that contradict your theory). (3) PLAGIARISM: stealing others' work. (4) UNETHICAL AUTHORSHIP: honorary or ghost authorship. (5) UNDISCLOSED CONFLICTS OF INTEREST. (6) FAILURE TO OBTAIN ETHICS APPROVAL for human subjects research. The first three are the most career-ending offenses. Most journals now require raw data submission for verification.",
                examples: [
          {
            problem: "Which statement best matches “The hierarchy of research integrity violations”?",
            solution: "The accurate idea is: The most serious violations, in order: (1) FABRICATION: inventing data (e.g., making up participants in a study). Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "The most serious violations, in order: (1) FABRICATION: inventing data (e.g., making up participants in a study).",
          },
          {
            problem: "Give one exam trap students hit when studying The hierarchy of research integrity violations.",
            solution: "Stay close to the text: The most serious violations, in order: (1) FABRICATION: inventing data (e.g., making up participants in a study). (2) FALSIFICATION: manipulating real data to support a hypothesis (e.g., excluding 'outliers' that contrad… Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
      {
        id: "ra-research-ethics-authorship-and-credit",
        title: "Authorship and credit",
        summary: "Who deserves authorship? Standard guidelines (e.g., ICMJE, APA): only those who contributed SUBSTANTIALLY to (1) conception or design, (2)…",
        explanation: "Who deserves authorship? Standard guidelines (e.g., ICMJE, APA): only those who contributed SUBSTANTIALLY to (1) conception or design, (2) data acquisition, (3) analysis or interpretation, AND (4) drafting or critical revision. All four should contribute. Honorary authorship (giving authorship to a senior person who didn't really contribute) and ghost authorship (omitting someone who did) are both unethical. The 'first author' is usually the person who did the most work; the 'corresponding author' handles communication. ORDER MATTERS — the first and last positions are typically the most prestigious.",
                examples: [
          {
            problem: "Which statement best matches “Authorship and credit”?",
            solution: "The accurate idea is: Who deserves authorship? Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "Who deserves authorship?",
          },
          {
            problem: "Give one exam trap students hit when studying Authorship and credit.",
            solution: "Stay close to the text: Who deserves authorship? Standard guidelines (e.g., ICMJE, APA): only those who contributed SUBSTANTIALLY to (1) conception or design, (2) data acquisition, (3) analysis or interpretation, AND (4) drafting or critical re… Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
      {
        id: "ra-research-ethics-ethics-approval-and-human-subjects-prote",
        title: "Ethics approval and human subjects protection",
        summary: "Research involving human subjects, animals, personal data, or sensitive topics typically requires ETHICS APPROVAL from an Institutional…",
        explanation: "Research involving human subjects, animals, personal data, or sensitive topics typically requires ETHICS APPROVAL from an Institutional Review Board (IRB) or ethics committee BEFORE the research begins. This protects participants from harm and ensures informed consent. The IRB reviews: (1) risk/benefit ratio, (2) informed consent process, (3) confidentiality protections, (4) recruitment procedures. Researchers must report serious adverse events. ETHICS VIOLATIONS (e.g., Tuskegee syphilis study, Milgram obedience experiments) led to the development of modern research ethics frameworks (Belmont Report, Declaration of Helsinki).",
                examples: [
          {
            problem: "Which statement best matches “Ethics approval and human subjects protection”?",
            solution: "The accurate idea is: Research involving human subjects, animals, personal data, or sensitive topics typically requires ETHICS APPROVAL from an Institutional Review Board (IRB) or ethics committee BEFORE the research begins. Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "Research involving human subjects, animals, personal data, or sensitive topics typically requires ETHICS APPROVAL from an Institutional Review Board (IRB) or ethics committee BEFOR…",
          },
          {
            problem: "Give one exam trap students hit when studying Ethics approval and human subjects protection.",
            solution: "Stay close to the text: Research involving human subjects, animals, personal data, or sensitive topics typically requires ETHICS APPROVAL from an Institutional Review Board (IRB) or ethics committee BEFORE the research begins. This protects par… Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
    ],

  content: true,
  postRestriction: "bs17",
  buildsOn: ["ra-scientific-method", "ra-research-quality"],
  leadsTo: [],
  usedIn: ["ra-scientific-reporting"]
}

];