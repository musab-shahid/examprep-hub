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
  definition: "The scientific method is a systematic approach to research involving observation, question, hypothesis, prediction, experiment, analysis, conclusion, and replication. It is designed to minimize bias and produce reliable, verifiable knowledge.",
  keyFacts: [
    "8 steps: Observation → Question → Hypothesis (testable, falsifiable) → Prediction → Experiment → Analysis → Conclusion → Replication",
    "Theory: well-supported, broad explanation that has survived extensive testing",
    "Law: descriptive generalization about how some aspect of the natural world behaves (does NOT explain why, just describes what)",
    "Hypothesis: a TESTABLE, FALSIFIABLE tentative explanation — a statement that CAN be proven wrong by evidence",
    "Model: a simplified representation of a system used to make predictions",
    "Independent variable: MANIPULATED by the researcher (the cause)",
    "Dependent variable: MEASURED by the researcher (the effect)",
    "Controlled variables: held CONSTANT to isolate the effect of the independent variable",
    "Extraneous (confounding) variables: unintended factors that vary and influence the dependent variable — threaten internal validity",
    "Deductive reasoning: general principle → specific prediction (top-down)",
    "Inductive reasoning: specific observations → general conclusion (bottom-up)",
    "Abductive reasoning: observations → BEST EXPLANATION (most likely cause among possibilities)"
  ],
  explanationSections: [
    { heading: "Why falsifiability matters", body: "The hallmark of science is FALSIFIABILITY — a hypothesis must be capable of being proven wrong by evidence. 'It is what it is' or 'supernatural forces did it' are not scientific because they cannot be tested. The hypothesis 'all swans are white' is testable and was falsified when black swans were found in Australia. This is what separates science from non-science." },
    { heading: "Variables — the three types", body: "INDEPENDENT variable: what the researcher MANIPULATES (the cause — e.g., amount of fertilizer). DEPENDENT variable: what is MEASURED (the effect — e.g., plant growth). CONTROLLED variables: held CONSTANT (e.g., same soil, same light, same water) to isolate the independent variable's effect. EXTRANEOUS (confounding) variables: unintended factors that vary and affect the dependent variable, threatening the study's validity. Good experimental design controls or accounts for extraneous variables." },
    { heading: "Deductive vs Inductive vs Abductive reasoning", body: "DEDUCTIVE: starts with a general principle and derives specific predictions (theory → specific). INDUCTIVE: starts with specific observations and forms a general conclusion (observations → theory). ABDUCTIVE: starts with observations and infers the BEST EXPLANATION among competing possibilities (most likely cause). The scientific method often uses all three: abductive to generate hypotheses, deductive to make testable predictions, inductive to build theories from repeated results." }
  ],
  examPoints: [
    "Independent = manipulated; Dependent = measured; Controlled = constant",
    "Hypothesis must be TESTABLE and FALSIFIABLE",
    "Law describes; Theory explains",
    "Deductive = general → specific; Inductive = specific → general; Abductive = best explanation"
  ],
  commonMistakes: [
    "Confusing law and theory — law is a generalization (what happens); theory is the explanation (why)",
    "Thinking a hypothesis must be proven true — it must be FALSIFIABLE, not necessarily true",
    "Confusing independent and dependent — a memory aid: independent is what you CHANGE; dependent is what you MEASURE"
  ],
  relatedTopics: ["ra-research-design", "ra-inferential-stats", "ra-research-ethics"],
    subtopics: [
      {
        id: "ra-scientific-method-why-falsifiability-matters",
        title: "Why falsifiability matters",
        summary: "The hallmark of science is FALSIFIABILITY — a hypothesis must be capable of being proven wrong by evidence. 'It is what it is' or…",
        explanation: "The hallmark of science is FALSIFIABILITY — a hypothesis must be capable of being proven wrong by evidence. 'It is what it is' or 'supernatural forces did it' are not scientific because they cannot be tested. The hypothesis 'all swans are white' is testable and was falsified when black swans were found in Australia. This is what separates science from non-science.",
                examples: [
          {
            problem: "Which statement best matches “Why falsifiability matters”?",
            solution: "The accurate idea is: The hallmark of science is FALSIFIABILITY — a hypothesis must be capable of being proven wrong by evidence. Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "The hallmark of science is FALSIFIABILITY — a hypothesis must be capable of being proven wrong by evidence.",
          },
          {
            problem: "Give one exam trap students hit when studying Why falsifiability matters.",
            solution: "Stay close to the text: The hallmark of science is FALSIFIABILITY — a hypothesis must be capable of being proven wrong by evidence. 'It is what it is' or 'supernatural forces did it' are not scientific because they cannot be tested. Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
      {
        id: "ra-scientific-method-variables-the-three-types",
        title: "Variables — the three types",
        summary: "INDEPENDENT variable: what the researcher MANIPULATES (the cause — e.g., amount of fertilizer). DEPENDENT variable: what is MEASURED (the…",
        explanation: "INDEPENDENT variable: what the researcher MANIPULATES (the cause — e.g., amount of fertilizer). DEPENDENT variable: what is MEASURED (the effect — e.g., plant growth). CONTROLLED variables: held CONSTANT (e.g., same soil, same light, same water) to isolate the independent variable's effect. EXTRANEOUS (confounding) variables: unintended factors that vary and affect the dependent variable, threatening the study's validity. Good experimental design controls or accounts for extraneous variables.",
                examples: [
          {
            problem: "Which statement best matches “Variables — the three types”?",
            solution: "The accurate idea is: INDEPENDENT variable: what the researcher MANIPULATES (the cause — e.g., amount of fertilizer). Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "INDEPENDENT variable: what the researcher MANIPULATES (the cause — e.g., amount of fertilizer).",
          },
          {
            problem: "Give one exam trap students hit when studying Variables — the three types.",
            solution: "Stay close to the text: INDEPENDENT variable: what the researcher MANIPULATES (the cause — e.g., amount of fertilizer). DEPENDENT variable: what is MEASURED (the effect — e.g., plant growth). Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
      {
        id: "ra-scientific-method-deductive-vs-inductive-vs-abductive-reas",
        title: "Deductive vs Inductive vs Abductive reasoning",
        summary: "DEDUCTIVE: starts with a general principle and derives specific predictions (theory → specific). INDUCTIVE: starts with specific…",
        explanation: "DEDUCTIVE: starts with a general principle and derives specific predictions (theory → specific). INDUCTIVE: starts with specific observations and forms a general conclusion (observations → theory). ABDUCTIVE: starts with observations and infers the BEST EXPLANATION among competing possibilities (most likely cause). The scientific method often uses all three: abductive to generate hypotheses, deductive to make testable predictions, inductive to build theories from repeated results.",
                examples: [
          {
            problem: "Which statement best matches “Deductive vs Inductive vs Abductive reasoning”?",
            solution: "The accurate idea is: DEDUCTIVE: starts with a general principle and derives specific predictions (theory → specific). Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "DEDUCTIVE: starts with a general principle and derives specific predictions (theory → specific).",
          },
          {
            problem: "Give one exam trap students hit when studying Deductive vs Inductive vs Abductive reasoning.",
            solution: "Stay close to the text: DEDUCTIVE: starts with a general principle and derives specific predictions (theory → specific). INDUCTIVE: starts with specific observations and forms a general conclusion (observations → theory). Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
    ],

  content: true,
  postRestriction: "bs17",
  buildsOn: [],
  leadsTo: ["ra-research-design", "ra-research-quality"],
  usedIn: ["ra-research-design", "ra-data-interpretation", "ra-scientific-reporting", "meteo-forecast-skill", "earth-k1"]
},

// ═══════════════════════════════════════════════════════════════════
// RA-2: Research Design
// ═══════════════════════════════════════════════════════════════════

{
  id: "ra-research-design",
  sectionId: "RA-02",
  order: 1,
  title: "Research Design",
  definition: "Research design is the plan for how a study will be conducted — including the type of data (quantitative vs qualitative), the approach (descriptive, exploratory, explanatory, experimental, observational), the population and sample, and the sampling method.",
  keyFacts: [
    "QUANTITATIVE: numbers, statistics, measurement (e.g., temperature readings, survey counts)",
    "QUALITATIVE: words, themes, meanings (e.g., interview transcripts, observations of behavior)",
    "MIXED METHODS: combines both — e.g., surveys (quantitative) + interviews (qualitative)",
    "ACTION RESEARCH: researcher is part of the system being studied; iterative cycles of plan-act-observe-reflect",
    "DESCRIPTIVE: 'What is...' — surveys, case studies, observational",
    "EXPLORATORY: preliminary, unfamiliar topic — flexible, open-ended",
    "EXPLANATORY: 'Why...' — tests causal relationships",
    "EXPERIMENTAL: researcher MANIPULATES IV, controls other variables, measures DV",
    "OBSERVATIONAL: no manipulation — records naturally occurring variation",
    "CROSS-SECTIONAL: data collected at ONE point in time (snapshot)",
    "LONGITUDINAL: same subjects followed over TIME (years)",
    "POPULATION: entire group of interest (e.g., all meteorology students in Pakistan)",
    "SAMPLE: subset of population (e.g., 200 meteorology students)",
    "CENSUS: data on EVERY member of the population",
    "Sample SIZE: larger = more precise; depends on variability, confidence level, margin of error"
  ],
  explanationSections: [
    { heading: "Quantitative vs Qualitative vs Mixed", body: "QUANTITATIVE research deals with numbers and statistics — temperature readings, rainfall measurements, survey counts. QUALITATIVE deals with words, themes, and meanings — interview transcripts, behavioral observations, cultural interpretations. MIXED METHODS combines both — e.g., a survey of climate attitudes (quantitative) PLUS follow-up interviews (qualitative). The choice depends on your research question: 'how many' = quantitative; 'why/how' = qualitative; both = mixed." },
    { heading: "Sampling methods — which to use when", body: "SIMPLE RANDOM: every member equal chance (best for generalizability, needs complete list). SYSTEMATIC: every kth member (good for ordered lists, e.g., every 10th customer). STRATIFIED: random within subgroups (best for heterogeneous populations, e.g., by gender/age). CLUSTER: random clusters (good for geographically spread populations, e.g., random villages). CONVENIENCE: easily accessible (fast but biased). SNOWBALL: referrals (good for hard-to-reach populations, e.g., drug users). PURPOSIVE: researcher's judgment (qualitative research)." },
    { heading: "Types of bias — the main threats", body: "SELECTION BIAS: sample not representative (e.g., only surveying willing respondents). MEASUREMENT BIAS: inaccurate measurements (e.g., faulty instrument). RECALL BIAS: subjects remember inaccurately (e.g., dietary recall). OBSERVER/RESEARCHER BIAS: researcher's expectations influence observations. CONFIRMATION BIAS: seeking evidence that confirms beliefs. SURVIVORSHIP BIAS: only studying 'survivors' (e.g., only successful businesses, not failed ones). All of these can be minimized but rarely eliminated — good design mitigates bias." }
  ],
  examPoints: [
    "Quantitative = numbers; Qualitative = words; Mixed = both",
    "Experimental = manipulate IV; Observational = no manipulation",
    "Cross-sectional = one time point; Longitudinal = over time",
    "Stratified = random within subgroups; Cluster = random groups; Simple random = every member equal chance"
  ],
  commonMistakes: [
    "Confusing cross-sectional (one time point) with longitudinal (over time) — a common error",
    "Confusing experimental (manipulation) with observational (no manipulation) — experimental tests causation, observational only shows correlation",
    "Thinking convenience sampling is 'wrong' — it's not wrong, just less rigorous; it has its place for pilot studies"
  ],
  relatedTopics: ["ra-scientific-method", "ra-data-types", "ra-research-quality"],
    subtopics: [
      {
        id: "ra-research-design-quantitative-vs-qualitative-vs-mixed",
        title: "Quantitative vs Qualitative vs Mixed",
        summary: "QUANTITATIVE research deals with numbers and statistics — temperature readings, rainfall measurements, survey counts. QUALITATIVE deals…",
        explanation: "QUANTITATIVE research deals with numbers and statistics — temperature readings, rainfall measurements, survey counts. QUALITATIVE deals with words, themes, and meanings — interview transcripts, behavioral observations, cultural interpretations. MIXED METHODS combines both — e.g., a survey of climate attitudes (quantitative) PLUS follow-up interviews (qualitative). The choice depends on your research question: 'how many' = quantitative; 'why/how' = qualitative; both = mixed.",
                examples: [
          {
            problem: "Which statement best matches “Quantitative vs Qualitative vs Mixed”?",
            solution: "The accurate idea is: QUANTITATIVE research deals with numbers and statistics — temperature readings, rainfall measurements, survey counts. Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "QUANTITATIVE research deals with numbers and statistics — temperature readings, rainfall measurements, survey counts.",
          },
          {
            problem: "Give one exam trap students hit when studying Quantitative vs Qualitative vs Mixed.",
            solution: "Stay close to the text: QUANTITATIVE research deals with numbers and statistics — temperature readings, rainfall measurements, survey counts. QUALITATIVE deals with words, themes, and meanings — interview transcripts, behavioral observation… Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
      {
        id: "ra-research-design-sampling-methods-which-to-use-when",
        title: "Sampling methods — which to use when",
        summary: "SIMPLE RANDOM: every member equal chance (best for generalizability, needs complete list). SYSTEMATIC: every kth member (good for ordered…",
        explanation: "SIMPLE RANDOM: every member equal chance (best for generalizability, needs complete list). SYSTEMATIC: every kth member (good for ordered lists, e.g., every 10th customer). STRATIFIED: random within subgroups (best for heterogeneous populations, e.g., by gender/age). CLUSTER: random clusters (good for geographically spread populations, e.g., random villages). CONVENIENCE: easily accessible (fast but biased). SNOWBALL: referrals (good for hard-to-reach populations, e.g., drug users). PURPOSIVE: researcher's judgment (qualitative research).",
                examples: [
          {
            problem: "Which statement best matches “Sampling methods — which to use when”?",
            solution: "The accurate idea is: SIMPLE RANDOM: every member equal chance (best for generalizability, needs complete list). Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "SIMPLE RANDOM: every member equal chance (best for generalizability, needs complete list).",
          },
          {
            problem: "Give one exam trap students hit when studying Sampling methods — which to use when.",
            solution: "Stay close to the text: SIMPLE RANDOM: every member equal chance (best for generalizability, needs complete list). SYSTEMATIC: every kth member (good for ordered lists, e.g., every 10th customer). Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
      {
        id: "ra-research-design-types-of-bias-the-main-threats",
        title: "Types of bias — the main threats",
        summary: "SELECTION BIAS: sample not representative (e.g., only surveying willing respondents). MEASUREMENT BIAS: inaccurate measurements (e.g.,…",
        explanation: "SELECTION BIAS: sample not representative (e.g., only surveying willing respondents). MEASUREMENT BIAS: inaccurate measurements (e.g., faulty instrument). RECALL BIAS: subjects remember inaccurately (e.g., dietary recall). OBSERVER/RESEARCHER BIAS: researcher's expectations influence observations. CONFIRMATION BIAS: seeking evidence that confirms beliefs. SURVIVORSHIP BIAS: only studying 'survivors' (e.g., only successful businesses, not failed ones). All of these can be minimized but rarely eliminated — good design mitigates bias.",
                examples: [
          {
            problem: "Which statement best matches “Types of bias — the main threats”?",
            solution: "The accurate idea is: SELECTION BIAS: sample not representative (e.g., only surveying willing respondents). Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "SELECTION BIAS: sample not representative (e.g., only surveying willing respondents).",
          },
          {
            problem: "Give one exam trap students hit when studying Types of bias — the main threats.",
            solution: "Stay close to the text: SELECTION BIAS: sample not representative (e.g., only surveying willing respondents). MEASUREMENT BIAS: inaccurate measurements (e.g., faulty instrument). Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
    ],

  content: true,
  postRestriction: "bs17",
  buildsOn: ["ra-scientific-method"],
  leadsTo: ["ra-data-types", "ra-research-quality"],
  usedIn: ["ra-data-types", "ra-inferential-stats", "ra-research-ethics", "earth-k1"]
},

// ═══════════════════════════════════════════════════════════════════
// RA-3: Data Types
// ═══════════════════════════════════════════════════════════════════

{
  id: "ra-data-types",
  sectionId: "RA-03",
  order: 1,
  title: "Data Types & Measurement Scales",
  definition: "Data can be classified as qualitative (categories) or quantitative (numbers), and further as categorical/numerical and discrete/continuous. Measurement scales (nominal, ordinal, interval, ratio) determine what statistical operations are valid.",
  keyFacts: [
    "QUALITATIVE: categories, descriptions, labels",
    "QUANTITATIVE: numbers, measurements",
    "CATEGORICAL: labels (species, gender, climate type, blood type)",
    "NUMERICAL: numbers (temperature, pressure, count, distance)",
    "DISCRETE: countable, whole numbers (number of students, days, count of species)",
    "CONTINUOUS: measurable, can take any value including fractions (temperature, time, weight, length)",
    "NOMINAL: categories only, NO order (climate type: tropical/temperate/arid). Operations: =, ≠",
    "ORDINAL: ordered categories, but intervals not equal (severity: mild/moderate/severe). Operations: <, >, =, ≠",
    "INTERVAL: ordered, equal intervals, NO true zero (Temperature in °C or °F). Operations: +, −, ×, ÷",
    "RATIO: ordered, equal intervals, TRUE zero (Temperature in K, height, mass, time). All operations valid"
  ],
  explanationSections: [
    { heading: "The 4 measurement scales — most-testable in stats", body: "NOMINAL: pure categories with NO inherent order (e.g., eye color: blue/brown/green). Only = and ≠ operations valid — you can't say blue > brown. ORDINAL: ordered categories but the gaps between them aren't equal (e.g., satisfaction: poor/fair/good/excellent — the 'gap' between poor and fair may differ from fair and good). INTERVAL: ordered, equal intervals, but NO true zero (°C: 0°C doesn't mean 'no temperature'). RATIO: ordered, equal intervals, TRUE zero (height: 0m means no height; Kelvin: 0K means absolute zero — no thermal energy). Ratio data supports ALL operations." },
    { heading: "Why scale matters for statistical operations", body: "The scale of measurement determines which statistical operations are valid. NOMINAL: only counts and mode. ORDINAL: counts, mode, median, rank correlation. INTERVAL: + and − (means, standard deviations, Pearson correlation, t-tests). RATIO: all operations including × and ÷ (geometric mean, ratios, logarithms). Using the wrong operation is a common error — e.g., computing a 'mean climate type' is meaningless because nominal data has no numerical order." },
    { heading: "Discrete vs Continuous — the real-world distinction", body: "DISCRETE data: countable, whole numbers (e.g., number of species in a sample, days of rain per month, number of patients). CONTINUOUS data: any value within a range (e.g., temperature, pressure, wind speed, time). This distinction matters for choosing graphs: bar charts for discrete/categorical, line graphs for continuous over time, histograms for continuous distributions." }
  ],
  examPoints: [
    "Nominal: categories, no order; Ordinal: ordered, no equal intervals; Interval: equal intervals, no true zero; Ratio: equal intervals, TRUE zero",
    "Discrete: countable; Continuous: any value",
    "Scale determines valid statistical operations"
  ],
  commonMistakes: [
    "Confusing interval with ratio — 0°C is NOT 'no temperature' (interval), but 0K IS 'no thermal energy' (ratio)",
    "Trying to compute a mean of nominal data (e.g., average climate type) — meaningless because there's no numerical order",

    "Confusing discrete (countable) with continuous (measurable) — number of species is discrete, temperature is continuous"
  ],
  relatedTopics: ["ra-descriptive-statistics", "ra-data-visualization", "ra-research-design"],
    subtopics: [
      {
        id: "ra-data-types-the-4-measurement-scales-most-testable-i",
        title: "The 4 measurement scales — most-testable in stats",
        summary: "NOMINAL: pure categories with NO inherent order (e.g., eye color: blue/brown/green). Only = and ≠ operations valid — you can't say blue >…",
        explanation: "NOMINAL: pure categories with NO inherent order (e.g., eye color: blue/brown/green). Only = and ≠ operations valid — you can't say blue > brown. ORDINAL: ordered categories but the gaps between them aren't equal (e.g., satisfaction: poor/fair/good/excellent — the 'gap' between poor and fair may differ from fair and good). INTERVAL: ordered, equal intervals, but NO true zero (°C: 0°C doesn't mean 'no temperature'). RATIO: ordered, equal intervals, TRUE zero (height: 0m means no height; Kelvin: 0K means absolute zero — no thermal energy). Ratio data supports ALL operations.",
                examples: [
          {
            problem: "Which statement best matches “The 4 measurement scales — most-testable in stats”?",
            solution: "The accurate idea is: NOMINAL: pure categories with NO inherent order (e.g., eye color: blue/brown/green). Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "NOMINAL: pure categories with NO inherent order (e.g., eye color: blue/brown/green).",
          },
          {
            problem: "Give one exam trap students hit when studying The 4 measurement scales — most-testable in stats.",
            solution: "Stay close to the text: NOMINAL: pure categories with NO inherent order (e.g., eye color: blue/brown/green). Only = and ≠ operations valid — you can't say blue > brown. Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
      {
        id: "ra-data-types-why-scale-matters-for-statistical-operat",
        title: "Why scale matters for statistical operations",
        summary: "The scale of measurement determines which statistical operations are valid. NOMINAL: only counts and mode. ORDINAL: counts, mode, median,…",
        explanation: "The scale of measurement determines which statistical operations are valid. NOMINAL: only counts and mode. ORDINAL: counts, mode, median, rank correlation. INTERVAL: + and − (means, standard deviations, Pearson correlation, t-tests). RATIO: all operations including × and ÷ (geometric mean, ratios, logarithms). Using the wrong operation is a common error — e.g., computing a 'mean climate type' is meaningless because nominal data has no numerical order.",
                examples: [
          {
            problem: "Which statement best matches “Why scale matters for statistical operations”?",
            solution: "The accurate idea is: The scale of measurement determines which statistical operations are valid. Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "The scale of measurement determines which statistical operations are valid.",
          },
          {
            problem: "Give one exam trap students hit when studying Why scale matters for statistical operations.",
            solution: "Stay close to the text: The scale of measurement determines which statistical operations are valid. NOMINAL: only counts and mode. Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
      {
        id: "ra-data-types-discrete-vs-continuous-the-real-world-di",
        title: "Discrete vs Continuous — the real-world distinction",
        summary: "DISCRETE data: countable, whole numbers (e.g., number of species in a sample, days of rain per month, number of patients). CONTINUOUS data:…",
        explanation: "DISCRETE data: countable, whole numbers (e.g., number of species in a sample, days of rain per month, number of patients). CONTINUOUS data: any value within a range (e.g., temperature, pressure, wind speed, time). This distinction matters for choosing graphs: bar charts for discrete/categorical, line graphs for continuous over time, histograms for continuous distributions.",
                examples: [
          {
            problem: "Which statement best matches “Discrete vs Continuous — the real-world distinction”?",
            solution: "The accurate idea is: DISCRETE data: countable, whole numbers (e.g., number of species in a sample, days of rain per month, number of patients). Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "DISCRETE data: countable, whole numbers (e.g., number of species in a sample, days of rain per month, number of patients).",
          },
          {
            problem: "Give one exam trap students hit when studying Discrete vs Continuous — the real-world distinction.",
            solution: "Stay close to the text: DISCRETE data: countable, whole numbers (e.g., number of species in a sample, days of rain per month, number of patients). CONTINUOUS data: any value within a range (e.g., temperature, pressure, wind speed, time). Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
    ],

  content: true,
  postRestriction: "bs17",
  buildsOn: ["ra-research-design", "math-1-1", "math-8-1"],
  leadsTo: ["ra-descriptive-statistics", "ra-data-visualization"],
  usedIn: ["ra-descriptive-statistics", "ra-correlation-regression", "meteo-radiosondes", "meteo-station-model", "earth-h2"]
},

// ═══════════════════════════════════════════════════════════════════
// RA-4: Descriptive Statistics
// ═══════════════════════════════════════════════════════════════════

{
  id: "ra-descriptive-statistics",
  sectionId: "RA-04",
  order: 1,
  title: "Descriptive Statistics",
  definition: "Descriptive statistics summarize a dataset using measures of central tendency (mean, median, mode), dispersion (range, variance, standard deviation, IQR), and distribution shape. They describe the data you have — unlike inferential statistics, which make claims about a larger population.",
  keyFacts: [
    "MEAN (x̄): arithmetic average = Σxᵢ / n. Sensitive to outliers.",
    "MEDIAN: middle value when sorted. Robust to outliers.",
    "MODE: most frequent value. Can be unimodal, bimodal, or multimodal.",
    "WEIGHTED MEAN: Σ(wᵢxᵢ) / Σwᵢ. Used when data points have different importance/reliability.",
    "GEOMETRIC MEAN: nth root of product of values. Used for growth rates (e.g., average growth rate).",
    "HARMONIC MEAN: n / Σ(1/xᵢ). Used for rates (e.g., average speed).",
    "RANGE: maximum − minimum. Sensitive to outliers.",
    "VARIANCE (σ²): average of squared deviations from mean. σ² = Σ(xᵢ − μ)² / n (population) or n−1 (sample).",
    "STANDARD DEVIATION (σ): square root of variance. In original units. ~68% within 1σ, ~95% within 2σ for normal data.",
    "INTERQUARTILE RANGE (IQR): Q3 − Q1. The middle 50% of data. Robust to outliers.",
    "PERCENTILES: value below which a given percentage of data falls. Median = 50th percentile.",
    "QUARTILES: Q1 (25th), Q2 (50th = median), Q3 (75th percentile)",
    "Z-SCORE: (x − μ) / σ. Number of standard deviations from mean. Z = 0 is average; Z = +2 is 2 SD above mean.",
    "OUTLIERS: beyond Q1 − 1.5×IQR or Q3 + 1.5×IQR. Investigate — may be error or genuine.",
    "DISTRIBUTION SHAPE: symmetric (mean = median), right-skewed (tail right, mean > median), left-skewed (tail left, mean < median)"
  ],
  explanationSections: [
    { heading: "Three means — when to use which", body: "ARITHMETIC MEAN: the standard average; sensitive to outliers (one extreme value pulls it). MEDIAN: the middle value; robust to outliers (better when data is skewed or has outliers). MODE: the most frequent value; useful for categorical data. For symmetric, outlier-free data, mean is best. For skewed or outlier-containing data, median is more representative. GEOMETRIC MEAN is used for growth rates (e.g., 'the population grew at an average rate of 3% per year'). HARMONIC MEAN is used for rates (e.g., average speed over equal distances)." },
    { heading: "Why standard deviation matters", body: "Standard deviation (σ) measures the average distance of data points from the mean. For a NORMAL (bell-shaped) distribution: ~68% of data within 1σ of mean, ~95% within 2σ, ~99.7% within 3σ. This is the empirical rule (68-95-99.7). A small SD = data clustered tightly around mean. A large SD = data spread out. SD is in the original units of the data, making it interpretable (e.g., 'temperatures vary by ±2°C')." },
    { heading: "Skewness and what mean vs median tells you", body: "In a SYMMETRIC distribution: mean ≈ median ≈ mode. In a RIGHT-SKEWED distribution (long right tail, e.g., income): mean > median (a few high earners pull the mean up). In a LEFT-SKEWED distribution (long left tail, e.g., exam scores when most students do well): mean < median. The MEDIAN is more robust to skewness and outliers, which is why income is usually reported as median, not mean." }
  ],
  examPoints: [
    "Mean = sensitive to outliers; Median = robust to outliers",
    "Variance uses squared deviations; SD = square root of variance (in original units)",
    "IQR = Q3 - Q1 (middle 50% of data)",
    "Z-score = (x − μ) / σ — standard deviations from mean",
    "Outliers: beyond Q1 − 1.5×IQR or Q3 + 1.5×IQR"
  ],
  commonMistakes: [
    "Confusing variance (squared units) with standard deviation (original units) — they're related but not the same",
    "Computing mean of categorical data (e.g., 'average climate type') — meaningless",

    "Thinking 'no outliers' = 'low SD' — SD is about overall spread, not just extreme values"
  ],
  relatedTopics: ["ra-data-types", "ra-probability", "ra-correlation-regression", "ra-data-visualization"],
    subtopics: [
      {
        id: "ra-descriptive-statistics-three-means-when-to-use-which",
        title: "Three means — when to use which",
        summary: "ARITHMETIC MEAN: the standard average; sensitive to outliers (one extreme value pulls it). MEDIAN: the middle value; robust to outliers…",
        explanation: "ARITHMETIC MEAN: the standard average; sensitive to outliers (one extreme value pulls it). MEDIAN: the middle value; robust to outliers (better when data is skewed or has outliers). MODE: the most frequent value; useful for categorical data. For symmetric, outlier-free data, mean is best. For skewed or outlier-containing data, median is more representative. GEOMETRIC MEAN is used for growth rates (e.g., 'the population grew at an average rate of 3% per year'). HARMONIC MEAN is used for rates (e.g., average speed over equal distances).",
                examples: [
          {
            problem: "Which statement best matches “Three means — when to use which”?",
            solution: "The accurate idea is: ARITHMETIC MEAN: the standard average; sensitive to outliers (one extreme value pulls it). Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "ARITHMETIC MEAN: the standard average; sensitive to outliers (one extreme value pulls it).",
          },
          {
            problem: "Give one exam trap students hit when studying Three means — when to use which.",
            solution: "Stay close to the text: ARITHMETIC MEAN: the standard average; sensitive to outliers (one extreme value pulls it). MEDIAN: the middle value; robust to outliers (better when data is skewed or has outliers). Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
      {
        id: "ra-descriptive-statistics-why-standard-deviation-matters",
        title: "Why standard deviation matters",
        summary: "Standard deviation (σ) measures the average distance of data points from the mean. For a NORMAL (bell-shaped) distribution: ~68% of data…",
        explanation: "Standard deviation (σ) measures the average distance of data points from the mean. For a NORMAL (bell-shaped) distribution: ~68% of data within 1σ of mean, ~95% within 2σ, ~99.7% within 3σ. This is the empirical rule (68-95-99.7). A small SD = data clustered tightly around mean. A large SD = data spread out. SD is in the original units of the data, making it interpretable (e.g., 'temperatures vary by ±2°C').",
                examples: [
          {
            problem: "Which statement best matches “Why standard deviation matters”?",
            solution: "The accurate idea is: Standard deviation (σ) measures the average distance of data points from the mean. Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "Standard deviation (σ) measures the average distance of data points from the mean.",
          },
          {
            problem: "Give one exam trap students hit when studying Why standard deviation matters.",
            solution: "Stay close to the text: Standard deviation (σ) measures the average distance of data points from the mean. For a NORMAL (bell-shaped) distribution: ~68% of data within 1σ of mean, ~95% within 2σ, ~99.7% within 3σ. Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
      {
        id: "ra-descriptive-statistics-skewness-and-what-mean-vs-median-tells-y",
        title: "Skewness and what mean vs median tells you",
        summary: "In a SYMMETRIC distribution: mean ≈ median ≈ mode. In a RIGHT-SKEWED distribution (long right tail, e.g., income): mean > median (a few…",
        explanation: "In a SYMMETRIC distribution: mean ≈ median ≈ mode. In a RIGHT-SKEWED distribution (long right tail, e.g., income): mean > median (a few high earners pull the mean up). In a LEFT-SKEWED distribution (long left tail, e.g., exam scores when most students do well): mean < median. The MEDIAN is more robust to skewness and outliers, which is why income is usually reported as median, not mean.",
                examples: [
          {
            problem: "Which statement best matches “Skewness and what mean vs median tells you”?",
            solution: "The accurate idea is: In a SYMMETRIC distribution: mean ≈ median ≈ mode. Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "In a SYMMETRIC distribution: mean ≈ median ≈ mode.",
          },
          {
            problem: "Give one exam trap students hit when studying Skewness and what mean vs median tells you.",
            solution: "Stay close to the text: In a SYMMETRIC distribution: mean ≈ median ≈ mode. In a RIGHT-SKEWED distribution (long right tail, e.g., income): mean > median (a few high earners pull the mean up). Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
    ],

  content: true,
  postRestriction: "bs17",
  buildsOn: ["ra-data-types", "math-2-1", "math-8-1"],
  leadsTo: ["ra-data-visualization", "ra-probability"],
  usedIn: ["ra-correlation-regression", "ra-inferential-stats", "meteo-forecast-skill", "meteo-pakistan-macroclimate", "meteo-temp-rainfall-distribution", "env-air-pollution", "earth-h4", "earth-c2"]
},

// ═══════════════════════════════════════════════════════════════════
// RA-5: Probability
// ═══════════════════════════════════════════════════════════════════

{
  id: "ra-probability",
  sectionId: "RA-05",
  order: 1,
  title: "Probability",
  definition: "Probability quantifies the likelihood of an event, ranging from 0 (impossible) to 1 (certain). It can be defined classically (theoretical), empirically (relative frequency), or subjectively (judgment).",
  keyFacts: [
    "0 ≤ P(E) ≤ 1 for any event E",
    "P(sure event) = 1; P(impossible event) = 0",
    "P(A or B) = P(A) + P(B) − P(A and B) (inclusion-exclusion for non-mutually-exclusive events)",
    "P(A and B) = P(A) × P(B) if A and B are INDEPENDENT",
    "P(not A) = 1 − P(A) (complement rule)",
    "CLASSICAL probability: P(E) = favorable outcomes / total outcomes (assumes equally likely outcomes, e.g., dice, cards)",
    "EMPIRICAL probability: P(E) = (times E occurred) / (total trials). Based on observed data.",
    "SUBJECTIVE probability: based on judgment/expert opinion (used when data is scarce)",
    "INDEPENDENT events: one does not affect the other (e.g., coin flips)",
    "MUTUALLY EXCLUSIVE events: cannot both occur (e.g., rolling a 1 AND a 6 on a single die)",
    "Sample space: all possible outcomes of an experiment",
    "Event: a subset of the sample space"
  ],
  explanationSections: [
    { heading: "Classical vs Empirical vs Subjective probability", body: "CLASSICAL probability assumes equally likely outcomes (dice, coins, cards) — calculated BEFORE the experiment. P(rolling a 4 on a die) = 1/6. EMPIRICAL probability is based on OBSERVED DATA: P(event) = (times it happened) / (total trials). This is what we use in real research where outcomes aren't equally likely. SUBJECTIVE probability is based on EXPERT JUDGMENT when data is scarce (e.g., 'what's the probability of a major earthquake in the next 10 years?'). The three types correspond to different epistemic situations." },
    { heading: "The two fundamental rules — addition and multiplication", body: "ADDITION RULE (OR): P(A or B) = P(A) + P(B) − P(A and B). The subtraction of P(A and B) prevents double-counting when events overlap. For MUTUALLY EXCLUSIVE events (cannot both occur), this simplifies to P(A) + P(B). MULTIPLICATION RULE (AND): P(A and B) = P(A) × P(B) when A and B are INDEPENDENT. If they're not independent, you need conditional probability. The complement rule P(not A) = 1 − P(A) is often the easiest way to solve 'at least one' problems." }
  ],
  examPoints: [
    "P ranges from 0 to 1",
    "Classical: theoretical (equally likely outcomes); Empirical: observed data; Subjective: judgment",
    "Addition: P(A or B) = P(A) + P(B) − P(A and B)",
    "Multiplication for independent events: P(A and B) = P(A) × P(B)",
    "Complement: P(not A) = 1 − P(A)"
  ],
  commonMistakes: [
    "Using the multiplication rule for DEPENDENT events (it only works for independent events)",

    "Forgetting to subtract P(A and B) in the addition rule for non-mutually-exclusive events",
    "Confusing 'P(A or B)' with 'P(A and B)' — they are very different"
  ],
  relatedTopics: ["ra-inferential-stats", "ra-data-types", "ra-descriptive-statistics"],
    subtopics: [
      {
        id: "ra-probability-classical-vs-empirical-vs-subjective-pro",
        title: "Classical vs Empirical vs Subjective probability",
        summary: "CLASSICAL probability assumes equally likely outcomes (dice, coins, cards) — calculated BEFORE the experiment. P(rolling a 4 on a die) =…",
        explanation: "CLASSICAL probability assumes equally likely outcomes (dice, coins, cards) — calculated BEFORE the experiment. P(rolling a 4 on a die) = 1/6. EMPIRICAL probability is based on OBSERVED DATA: P(event) = (times it happened) / (total trials). This is what we use in real research where outcomes aren't equally likely. SUBJECTIVE probability is based on EXPERT JUDGMENT when data is scarce (e.g., 'what's the probability of a major earthquake in the next 10 years?'). The three types correspond to different epistemic situations.",
                examples: [
          {
            problem: "Which statement best matches “Classical vs Empirical vs Subjective probability”?",
            solution: "The accurate idea is: CLASSICAL probability assumes equally likely outcomes (dice, coins, cards) — calculated BEFORE the experiment. Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "CLASSICAL probability assumes equally likely outcomes (dice, coins, cards) — calculated BEFORE the experiment.",
          },
          {
            problem: "Give one exam trap students hit when studying Classical vs Empirical vs Subjective probability.",
            solution: "Stay close to the text: CLASSICAL probability assumes equally likely outcomes (dice, coins, cards) — calculated BEFORE the experiment. P(rolling a 4 on a die) = 1/6. Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
      {
        id: "ra-probability-the-two-fundamental-rules-addition-and-m",
        title: "The two fundamental rules — addition and multiplication",
        summary: "ADDITION RULE (OR): P(A or B) = P(A) + P(B) − P(A and B). The subtraction of P(A and B) prevents double-counting when events overlap. For…",
        explanation: "ADDITION RULE (OR): P(A or B) = P(A) + P(B) − P(A and B). The subtraction of P(A and B) prevents double-counting when events overlap. For MUTUALLY EXCLUSIVE events (cannot both occur), this simplifies to P(A) + P(B). MULTIPLICATION RULE (AND): P(A and B) = P(A) × P(B) when A and B are INDEPENDENT. If they're not independent, you need conditional probability. The complement rule P(not A) = 1 − P(A) is often the easiest way to solve 'at least one' problems.",
                examples: [
          {
            problem: "Which statement best matches “The two fundamental rules — addition and multiplication”?",
            solution: "The accurate idea is: ADDITION RULE (OR): P(A or B) = P(A) + P(B) − P(A and B). Eliminate options that swap related terms or ignore the definition boundaries in the notes.",
            answer: "ADDITION RULE (OR): P(A or B) = P(A) + P(B) − P(A and B).",
          },
          {
            problem: "Give one exam trap students hit when studying The two fundamental rules — addition and multiplication.",
            solution: "Stay close to the text: ADDITION RULE (OR): P(A or B) = P(A) + P(B) − P(A and B). The subtraction of P(A and B) prevents double-counting when events overlap. Mis-reading a definition or swapping two technical terms is the usual error.",
            answer: "Do not swap the paired technical terms; quote the definition precisely",
          },
        ],
        shortcuts: [],
        traps: [],
      },
    ],

  content: true,
  postRestriction: "bs17",
  buildsOn: ["ra-descriptive-statistics", "math-8-2"],
  leadsTo: ["ra-inferential-stats"],
  usedIn: ["ra-inferential-stats", "meteo-forecast-skill", "meteo-extreme-events"]
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