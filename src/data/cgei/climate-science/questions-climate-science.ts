import type { Question } from '@/types';

const SRC = 'Master Study TOC · Unit 2.6 Extremes and trend analysis';
const TID = 'cgei-extremes-and-trend-analysis';
const SID = 'CGEI-02';

/**
 * Sample quiz for CGEI Unit 2.6 — mapped to app Question types.
 * IDs: CGEI-02-Q001 … (section-scoped serial).
 * Types used: single, true_false, multi, fill_blank (option-based), matching.
 * Parametric calculation drafts from the TOC sample are represented as fixed single items
 * where the quant template engine is not required for the teaching point.
 */
export const questions: Question[] = [
  {
    id: 'CGEI-02-Q001',
    sectionId: SID,
    topicId: TID,
    difficulty: 'easy',
    type: 'single',
    question: 'Which statement correctly distinguishes SPEI from SPI?',
    options: [
      'SPI uses precipitation only, while SPEI also accounts for evaporative demand (potential evapotranspiration)',
      'SPI uses temperature only, while SPEI uses precipitation only',
      'SPEI can only be computed at a 1-month timescale, while SPI can use any timescale',
      'SPI and SPEI differ only in the colour scale used to plot them',
    ],
    correctAnswer: 0,
    explanation:
      'SPI is built from precipitation alone. SPEI adds potential evapotranspiration, so warming-driven demand can change SPEI even when rainfall is unchanged. Both can be computed over multiple timescales such as 1, 3, 6 and 12 months.',
    sourceCitation: SRC,
  },
  {
    id: 'CGEI-02-Q002',
    sectionId: SID,
    topicId: TID,
    difficulty: 'medium',
    type: 'single',
    question:
      'A yearly rainfall series has strong positive serial correlation. What is the main problem with applying a standard Mann–Kendall test as if the years were independent?',
    options: [
      'It will overstate the significance of a trend, producing too many false positives',
      'It will always miss real trends',
      'It converts the series to a different unit',
      'It can only be used on temperature data',
    ],
    correctAnswer: 0,
    explanation:
      'Positive autocorrelation reduces the effective number of independent observations, so a test that assumes independence reports trends as more significant than they are. Use an autocorrelation-aware variant, prewhitening, or a block bootstrap.',
    sourceCitation: SRC,
  },
  {
    id: 'CGEI-02-Q003',
    sectionId: SID,
    topicId: TID,
    difficulty: 'medium',
    type: 'single',
    question:
      'You run a trend test at 5% significance in every cell of a gridded map and about 5% of cells come out significant. What is the right interpretation?',
    options: [
      'That is roughly what chance alone would produce, so control the false discovery rate before claiming a field-significant pattern',
      'The whole region has a significant trend',
      'The test is invalid because grids cannot be tested',
      'Every significant cell is confirmed as a real trend',
    ],
    correctAnswer: 0,
    explanation:
      'With many local tests, a share equal to the significance level appears significant by chance. Field significance and false-discovery-rate control address this multiplicity.',
    sourceCitation: SRC,
  },
  {
    id: 'CGEI-02-Q004',
    sectionId: SID,
    topicId: TID,
    difficulty: 'medium',
    type: 'single',
    question:
      'Heatwave counts for a city fall by half when you change the definition from the 90th to the 95th percentile threshold. What does this show?',
    options: [
      'Heatwave counts are sensitive to threshold, duration and reference period, so these choices must be reported',
      'The climate cooled between the two analyses',
      'The 95th percentile is always the correct choice',
      'The data contain missing values',
    ],
    correctAnswer: 0,
    explanation:
      'Event counts depend on how an extreme is defined. Reporting the threshold, minimum duration and reference period is part of the inference discipline for every extremes result.',
    sourceCitation: SRC,
  },
  {
    id: 'CGEI-02-Q005',
    sectionId: SID,
    topicId: TID,
    difficulty: 'medium',
    type: 'single',
    question:
      'A student finds the wettest day of each year for Multan using calendar days defined in UTC. What is the most likely problem?',
    options: [
      'Rain in the late evening local time falls on the wrong local calendar day, so local daily maxima can be split or misassigned',
      'UTC days always give larger rainfall totals',
      'UTC cannot be used with ERA5',
      'There is no problem, because the day length is the same in every time zone',
    ],
    correctAnswer: 0,
    explanation:
      'Pakistan Standard Time is UTC+5, so the local day boundary does not match the UTC boundary. Aggregating by UTC day can split one local rain event across two days and change the daily maximum.',
    sourceCitation: SRC,
  },
  {
    id: 'CGEI-02-Q006',
    sectionId: SID,
    topicId: TID,
    difficulty: 'easy',
    type: 'true_false',
    question: 'Rx1day computed from daily data can tell you how intense a one-hour cloudburst was.',
    options: ['True', 'False'],
    correctAnswer: 1,
    explanation:
      'Daily totals cannot resolve sub-daily intensity. A one-hour burst and a day of steady rain can give the same daily total.',
    sourceCitation: SRC,
  },
  {
    id: 'CGEI-02-Q007',
    sectionId: SID,
    topicId: TID,
    difficulty: 'easy',
    type: 'true_false',
    question: 'A trend found in a reanalysis variable is a statement about the product as well as about the climate.',
    options: ['True', 'False'],
    correctAnswer: 0,
    explanation:
      'Reanalysis output depends on the model and on the changing observing system that feeds it, so a trend can partly reflect the product itself.',
    sourceCitation: SRC,
  },
  {
    id: 'CGEI-02-Q008',
    sectionId: SID,
    topicId: TID,
    difficulty: 'hard',
    type: 'multi',
    question:
      'A 10-year ERA5 area-average monsoon rainfall series for a city has been computed. Select ALL claims that this analysis does NOT support.',
    options: [
      'There is a long-term climate-change trend in monsoon rainfall',
      'Monsoon rainfall in the 10-year window averaged a certain number of millimetres in the reanalysis',
      'The rainfall caused a specific flood event',
      'The area-average value equals what a rain gauge in the city recorded',
    ],
    correctAnswer: [0, 2, 3],
    explanation:
      'A 10-year record cannot establish a long-term climate trend. Area-average reanalysis rainfall is not a gauge measurement and does not show flood causation. A descriptive statement about the product over the window is supported.',
    sourceCitation: SRC,
  },
  {
    id: 'CGEI-02-Q009',
    sectionId: SID,
    topicId: TID,
    difficulty: 'medium',
    type: 'multi',
    question: 'Select ALL of the following that are common failure modes in climate-data work.',
    options: [
      'Calling a short-record trend a climate-change trend',
      'Using UTC days for local daily extremes',
      'Forgetting accumulation conventions in reanalysis variables',
      'Reporting the baseline, season definition, data product and period with every trend',
    ],
    correctAnswer: [0, 1, 2],
    explanation:
      'The first three are failure modes. The fourth is recommended practice, not a failure.',
    sourceCitation: SRC,
  },
  {
    id: 'CGEI-02-Q010',
    sectionId: SID,
    topicId: TID,
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The ETCCDI index for the longest run of consecutive dry days is abbreviated ____.',
    options: ['CDD', 'CWD', 'Rx1day', 'R95pTOT'],
    correctAnswer: 0,
    explanation:
      'CDD is the maximum length of a dry spell (days below the dry-day threshold, conventionally 1 mm).',
    sourceCitation: SRC,
  },
  {
    id: 'CGEI-02-Q011',
    sectionId: SID,
    topicId: TID,
    difficulty: 'easy',
    type: 'fill_blank',
    question: "Sen's slope is the ____ of all pairwise slopes in a series, which makes it robust to outliers.",
    options: ['median', 'mean', 'mode', 'maximum'],
    correctAnswer: 0,
    explanation:
      'Taking the median of the slopes between every pair of observations limits the influence of outliers, unlike an ordinary least-squares slope.',
    sourceCitation: SRC,
  },
  {
    id: 'CGEI-02-Q012',
    sectionId: SID,
    topicId: TID,
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Pakistan Standard Time is UTC plus how many hours?',
    options: ['5', '3', '0', '8'],
    correctAnswer: 0,
    explanation: 'PKT is UTC+5. Convert before defining local days, seasons or daily extremes.',
    sourceCitation: SRC,
  },
  {
    id: 'CGEI-02-Q013',
    sectionId: SID,
    topicId: TID,
    difficulty: 'medium',
    type: 'matching',
    question: 'Match each ETCCDI rainfall index to what it measures.',
    options: ['Rx1day', 'CDD', 'CWD', 'R95pTOT'],
    matchOptions: [
      'Wettest single day in the period',
      'Longest dry spell',
      'Longest wet spell',
      'Total rain falling on very wet days (above the 95th percentile of wet days)',
    ],
    correctAnswer: [0, 1, 2, 3],
    explanation:
      'These are standard ETCCDI indices. Their values are sensitive to gauge density, product resolution and the wet-day threshold.',
    sourceCitation: SRC,
  },
  {
    id: 'CGEI-02-Q014',
    sectionId: SID,
    topicId: TID,
    difficulty: 'medium',
    type: 'single',
    question:
      'An ERA5 hourly total precipitation value is 0.0032 m for one hour. What is this in millimetres?',
    options: ['3.2 mm', '0.32 mm', '32 mm', '0.0032 mm'],
    correctAnswer: 0,
    explanation:
      'ERA5 total precipitation is stored in metres of water accumulated over the period. Multiply by 1000 to get millimetres. Always check the accumulation period before summing hours to days.',
    sourceCitation: SRC,
  },
  {
    id: 'CGEI-02-Q015',
    sectionId: SID,
    topicId: TID,
    difficulty: 'medium',
    type: 'single',
    question:
      "The pairwise slopes between observations are −0.1, 0.1, 0.2, 0.3, 0.5 (mm per year). What is Sen's slope?",
    options: ['0.2 mm per year', '0.1 mm per year', '0.3 mm per year', '0.0 mm per year'],
    correctAnswer: 0,
    explanation:
      "Sen's slope is the median of the pairwise slopes. Sorted: −0.1, 0.1, 0.2, 0.3, 0.5 — the median is 0.2.",
    sourceCitation: SRC,
  },
];
