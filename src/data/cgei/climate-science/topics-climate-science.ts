import type { Topic } from '@/types';

/**
 * CGEI Subject 2 sample — Unit 2.6 Extremes and trend analysis
 * Source map: Master Study TOC (Climate, Geospatial & Environmental Intelligence)
 * L3/L4 practice deliverables are not stored here; quiz targets L1–L2 only.
 */
export const topics: Topic[] = [
  {
    id: 'cgei-extremes-and-trend-analysis',
    sectionId: 'CGEI-02',
    order: 1,
    title: 'Extremes and trend analysis',
    definition:
      'Extremes and trend analysis turns climate time series into defensible statements about rare events and change over time. Counts of heatwaves, dry spells, or heavy-rain days depend on explicit thresholds, durations, and reference periods. Trend tests require honest handling of serial correlation, multiplicity across grids, and the difference between a short product window and a climate-change claim.',
    keyFacts: [
      'SPI uses precipitation only; SPEI also accounts for potential evapotranspiration (evaporative demand).',
      'Both SPI and SPEI can be computed at multiple timescales (e.g. 1, 3, 6, 12 months).',
      'Positive serial correlation reduces effective independent sample size — standard Mann–Kendall can overstate significance.',
      'Testing every grid cell at 5% significance yields ~5% significant cells by chance; use field significance / FDR control.',
      'Heatwave and extreme-rain counts are definition-sensitive (threshold, duration, baseline period).',
      'UTC day boundaries ≠ local calendar days in Pakistan (PKT = UTC+5) — daily maxima can split across local days.',
      'Rx1day is a daily total index; it cannot resolve one-hour cloudburst intensity.',
      'A trend in a reanalysis variable is a statement about the product as well as about the climate.',
      "Sen's slope is the median of pairwise slopes — robust to outliers compared with ordinary least squares.",
      'ERA5 total precipitation is stored in metres of water; multiply by 1000 for millimetres.',
    ],
    explanationSections: [
      {
        heading: 'Indices before claims',
        body:
          'Name the index (SPI, SPEI, Rx1day, CDD, CWD, R95pTOT), the threshold, the timescale, and the baseline. Changing only the percentile threshold can halve heatwave counts without any change in the underlying series.',
      },
      {
        heading: 'Inference discipline',
        body:
          'Short reanalysis windows support descriptive statements about the product, not long-term climate-change attribution. Area-average reanalysis is not a rain-gauge measurement and does not prove flood causation. Report data product, period, season definition, and units with every trend.',
      },
      {
        heading: 'Common failure modes (exam material)',
        body:
          'Calling a 10-year trend “climate change”; using UTC days for local daily extremes; forgetting accumulation conventions in reanalysis; treating every locally significant grid cell as field-significant.',
      },
    ],
    examPoints: [
      'SPEI ≠ SPI: evaporative demand matters under warming.',
      'Autocorrelation → inflated Mann–Kendall significance if ignored.',
      'Multiplicity on maps needs FDR / field significance.',
      'PKT = UTC+5 for local day definition.',
      'CDD = longest consecutive dry-day run (ETCCDI family).',
    ],
    commonMistakes: [
      'Reading Rx1day as sub-daily intensity.',
      'Treating reanalysis trends as pure climate without product effects.',
      'Reporting “significant map cells” without multiplicity control.',
      'Confusing SPI with SPEI under rising temperature.',
    ],
    comparisonTable: {
      title: 'SPI vs SPEI (exam anchors)',
      headers: ['Index', 'Inputs', 'Why it matters'],
      rows: [
        ['SPI', 'Precipitation only', 'Drought signal from rainfall deficits alone'],
        ['SPEI', 'Precipitation + PET', 'Warming-driven demand can worsen drought signal without rainfall change'],
      ],
    },
    subtopics: [
      {
        id: 'cgei-2-6-spi-spei',
        title: 'SPI vs SPEI',
        summary: 'Precipitation-only vs demand-aware drought indices.',
        explanation:
          'SPI is built from precipitation alone. SPEI adds potential evapotranspiration so warming-driven demand can change SPEI even when rainfall is unchanged. Both support multiple timescales.',
        examples: [
          {
            problem: 'Rainfall unchanged but PET rises — which index is more likely to show drying?',
            solution: 'SPEI, because demand enters the water-balance framing.',
            answer: 'SPEI',
          },
        ],
        shortcuts: ['SPI = precip; SPEI = precip + PET'],
        traps: ['Saying SPI and SPEI differ only in colour scales'],
      },
      {
        id: 'cgei-2-6-trend-tests',
        title: 'Trend tests and autocorrelation',
        summary: 'Independence assumptions and robust slopes.',
        explanation:
          "Positive serial correlation reduces the effective number of independent observations. A test that assumes independence reports trends as more significant than they are. Sen's slope uses the median of pairwise slopes.",
        examples: [],
        shortcuts: ["Sen's slope = median of pairwise slopes"],
        traps: ['Ignoring autocorrelation in Mann–Kendall'],
      },
      {
        id: 'cgei-2-6-multiplicity',
        title: 'Field significance',
        summary: 'Many local tests produce chance “significant” cells.',
        explanation:
          'With many local tests, a share equal to the significance level appears significant by chance. Field significance and false-discovery-rate control address this multiplicity.',
        examples: [],
        shortcuts: ['~α of cells significant by chance at level α'],
        traps: ['Claiming regional significance from uncorrected local tests'],
      },
    ],
    relatedTopics: [],
    content: true,
    buildsOn: [],
    leadsTo: [],
    usedIn: [],
  },
];
