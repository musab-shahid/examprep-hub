import type { Section } from '@/types';

export const sections: Section[] = [
  // ── Meteorology & Climatology ──
  { id: 'MC-A', subjectId: 'meteo-climatology', title: 'Atmosphere & Climate Foundations', topicCount: 6, questionCount: 19 },
  { id: 'MC-B', subjectId: 'meteo-climatology', title: 'Temperature, Heat & Energy', topicCount: 10, questionCount: 35 },
  { id: 'MC-C', subjectId: 'meteo-climatology', title: 'Pressure, Winds & Circulation', topicCount: 9, questionCount: 31 },
  { id: 'MC-D', subjectId: 'meteo-climatology', title: 'Humidity, Clouds & Precipitation', topicCount: 10, questionCount: 35 },
  { id: 'MC-E', subjectId: 'meteo-climatology', title: 'Weather Systems', topicCount: 6, questionCount: 23 },
  { id: 'MC-F', subjectId: 'meteo-climatology', title: 'Instruments & Weather Observation', topicCount: 9, questionCount: 30 },
  { id: 'MC-G', subjectId: 'meteo-climatology', title: 'Climate Classification', topicCount: 4, questionCount: 18 },
  { id: 'MC-H', subjectId: 'meteo-climatology', title: 'Climate Variability & Change', topicCount: 7, questionCount: 23 },
  { id: 'MC-I', subjectId: 'meteo-climatology', title: 'Pakistan Climate', topicCount: 7, questionCount: 22 },
  { id: 'MC-J', subjectId: 'meteo-climatology', title: 'Weather Forecasting Basics', topicCount: 3, questionCount: 9 },
  { id: 'MC-K', subjectId: 'meteo-climatology', title: 'Synoptic Practice', topicCount: 3, questionCount: 9 },
  { id: 'MC-L', subjectId: 'meteo-climatology', title: 'Quantitative Meteorology', topicCount: 4, questionCount: 12 },
  { id: 'MC-M', subjectId: 'meteo-climatology', title: 'Climate Variability: ENSO, IOD, NAO, MJO', topicCount: 7, questionCount: 21 },

  // ── Earth Sciences (Geology + Seismology + Geophysics) ──
  { id: 'EARTH-A', subjectId: 'earth-science', title: 'Earth as a Planet & Internal Structure', topicCount: 5, questionCount: 43 },
  { id: 'EARTH-B', subjectId: 'earth-science', title: 'Minerals & Rocks', topicCount: 6, questionCount: 41 },
  { id: 'EARTH-C', subjectId: 'earth-science', title: 'Geological Time & Fossils', topicCount: 3, questionCount: 23 },
  { id: 'EARTH-D', subjectId: 'earth-science', title: 'Plate Tectonics', topicCount: 4, questionCount: 30 },
  { id: 'EARTH-E', subjectId: 'earth-science', title: 'Weathering, Erosion & Landforms', topicCount: 5, questionCount: 34 },
  { id: 'EARTH-F', subjectId: 'earth-science', title: 'Structural Geology & Deformation', topicCount: 4, questionCount: 27 },
  { id: 'EARTH-G', subjectId: 'earth-science', title: 'Volcanism', topicCount: 3, questionCount: 18 },
  { id: 'EARTH-H', subjectId: 'earth-science', title: 'Earthquakes & Seismology', topicCount: 6, questionCount: 41 },
  { id: 'EARTH-I', subjectId: 'earth-science', title: "Pakistan's Geology & Seismicity", topicCount: 4, questionCount: 25 },
  { id: 'EARTH-J', subjectId: 'earth-science', title: 'Surface Water & Groundwater (Geological Context)', topicCount: 2, questionCount: 14 },
  { id: 'EARTH-K', subjectId: 'earth-science', title: 'Geophysics Primer', topicCount: 4, questionCount: 19 },

  // ── Physics ──
  { id: 'PHY-A', subjectId: 'physics', title: 'Motion & Forces', topicCount: 4, questionCount: 28 },
  { id: 'PHY-B', subjectId: 'physics', title: 'Work, Energy & Power', topicCount: 2, questionCount: 11 },
  { id: 'PHY-C', subjectId: 'physics', title: 'Matter, Density & Pressure', topicCount: 6, questionCount: 31 },
  { id: 'PHY-D', subjectId: 'physics', title: 'Heat & Thermodynamics', topicCount: 6, questionCount: 29 },
  { id: 'PHY-E', subjectId: 'physics', title: 'Waves & Sound', topicCount: 4, questionCount: 17 },
  { id: 'PHY-F', subjectId: 'physics', title: 'Light & Optics', topicCount: 4, questionCount: 18 },
  { id: 'PHY-G', subjectId: 'physics', title: 'Electricity', topicCount: 5, questionCount: 26 },
  { id: 'PHY-H', subjectId: 'physics', title: 'Magnetism & Electromagnetism', topicCount: 3, questionCount: 12 },
  { id: 'PHY-I', subjectId: 'physics', title: 'Modern Physics', topicCount: 4, questionCount: 14 },
  { id: 'PHY-J', subjectId: 'physics', title: 'Universal Gravitation', topicCount: 1, questionCount: 10 },
  { id: 'PHY-K', subjectId: 'physics', title: 'Units, Measurement & Vectors', topicCount: 4, questionCount: 12 },

  // ── Mathematics ──
  { id: 'MATH-A', subjectId: 'maths', title: 'Number Systems & Arithmetic', topicCount: 8, questionCount: 94 },
  { id: 'MATH-B', subjectId: 'maths', title: 'Algebra', topicCount: 7, questionCount: 80 },
  { id: 'MATH-C', subjectId: 'maths', title: 'Powers, Roots & Logarithms', topicCount: 4, questionCount: 48 },
  { id: 'MATH-D', subjectId: 'maths', title: 'Geometry & Mensuration', topicCount: 6, questionCount: 72 },
  { id: 'MATH-E', subjectId: 'maths', title: 'Coordinate Geometry & Graphs', topicCount: 4, questionCount: 48 },
  { id: 'MATH-F', subjectId: 'maths', title: 'Sequences, Series & Patterns', topicCount: 3, questionCount: 36 },
  { id: 'MATH-G', subjectId: 'maths', title: 'Vectors & 2D Geometry', topicCount: 1, questionCount: 12 },
  { id: 'MATH-H', subjectId: 'maths', title: 'Word Problems & Applications', topicCount: 5, questionCount: 61 },

  // ── English ──
  { id: 'ENG-A', subjectId: 'english', title: 'Grammar & Usage', topicCount: 5, questionCount: 82 },
  { id: 'ENG-B', subjectId: 'english', title: 'Vocabulary', topicCount: 3, questionCount: 54 },
  { id: 'ENG-C', subjectId: 'english', title: 'Sentence Structuring', topicCount: 3, questionCount: 50 },

  // ── Environmental Studies ──
  { id: 'ENV-1', subjectId: 'env-studies', title: 'Environmental Fundamentals', topicCount: 2, questionCount: 32 },
  { id: 'ENV-2', subjectId: 'env-studies', title: 'Ecosystems & Biogeochemical Cycles', topicCount: 3, questionCount: 48 },
  { id: 'ENV-3', subjectId: 'env-studies', title: 'Biodiversity', topicCount: 3, questionCount: 48 },
  { id: 'ENV-4', subjectId: 'env-studies', title: 'Natural Resources', topicCount: 2, questionCount: 32 },
  { id: 'ENV-5', subjectId: 'env-studies', title: 'Pollution', topicCount: 3, questionCount: 48 },
  { id: 'ENV-6', subjectId: 'env-studies', title: 'Climate, Energy & Environment', topicCount: 5, questionCount: 80 },

  // ── Research & Analysis ──
  { id: 'RA-1', subjectId: 'research-analysis', title: 'Scientific Method', topicCount: 1, questionCount: 12 },
  { id: 'RA-2', subjectId: 'research-analysis', title: 'Research Design', topicCount: 1, questionCount: 12 },
  { id: 'RA-3', subjectId: 'research-analysis', title: 'Data Types', topicCount: 1, questionCount: 12 },
  { id: 'RA-4', subjectId: 'research-analysis', title: 'Descriptive Statistics', topicCount: 1, questionCount: 12 },
  { id: 'RA-5', subjectId: 'research-analysis', title: 'Probability', topicCount: 1, questionCount: 12 },
  { id: 'RA-6', subjectId: 'research-analysis', title: 'Data Visualization', topicCount: 1, questionCount: 12 },
  { id: 'RA-7', subjectId: 'research-analysis', title: 'Correlation & Regression', topicCount: 1, questionCount: 12 },
  { id: 'RA-8', subjectId: 'research-analysis', title: 'Inferential Statistics', topicCount: 1, questionCount: 12 },
  { id: 'RA-9', subjectId: 'research-analysis', title: 'Research Quality', topicCount: 1, questionCount: 12 },
  { id: 'RA-10', subjectId: 'research-analysis', title: 'Data Interpretation & Critical Thinking', topicCount: 1, questionCount: 16 },
  { id: 'RA-11', subjectId: 'research-analysis', title: 'Scientific Reporting', topicCount: 1, questionCount: 12 },
  { id: 'RA-12', subjectId: 'research-analysis', title: 'Research Ethics', topicCount: 1, questionCount: 12 },

  // ── HAT Verbal Reasoning (9 sections, 1 topic each) ──
  { id: 'HATV-1', subjectId: 'hat-verbal', title: 'Vocabulary Mastery', topicCount: 1, questionCount: 37 },
  { id: 'HATV-2', subjectId: 'hat-verbal', title: 'Word Formation Patterns', topicCount: 1, questionCount: 31 },
  { id: 'HATV-3', subjectId: 'hat-verbal', title: 'Grammar Rules', topicCount: 1, questionCount: 45 },
  { id: 'HATV-4', subjectId: 'hat-verbal', title: 'Sentence Completion', topicCount: 1, questionCount: 30 },
  { id: 'HATV-5', subjectId: 'hat-verbal', title: 'Reading Comprehension', topicCount: 1, questionCount: 35 },
  { id: 'HATV-6', subjectId: 'hat-verbal', title: 'Idioms & Phrases', topicCount: 1, questionCount: 73 },
  { id: 'HATV-7', subjectId: 'hat-verbal', title: 'One-Word Substitutions', topicCount: 1, questionCount: 67 },
  { id: 'HATV-8', subjectId: 'hat-verbal', title: 'Verbal Mock Quiz', topicCount: 1, questionCount: 17 },
  { id: 'HATV-9', subjectId: 'hat-verbal', title: 'Verbal Master Sheet', topicCount: 1, questionCount: 0 },

  // ── HAT Analytical Reasoning (9 sections, 1 topic each) ──
  { id: 'HATA-1', subjectId: 'hat-analytical', title: 'Seating & Arrangement Puzzles', topicCount: 1, questionCount: 15 },
  { id: 'HATA-2', subjectId: 'hat-analytical', title: 'Blood Relations', topicCount: 1, questionCount: 12 },
  { id: 'HATA-3', subjectId: 'hat-analytical', title: 'Syllogisms', topicCount: 1, questionCount: 12 },
  { id: 'HATA-4', subjectId: 'hat-analytical', title: 'Critical Reasoning', topicCount: 1, questionCount: 10 },
  { id: 'HATA-5', subjectId: 'hat-analytical', title: 'Series, Coding-Decoding & Patterns', topicCount: 1, questionCount: 14 },
  { id: 'HATA-6', subjectId: 'hat-analytical', title: 'Directions & Ranking / Ordering', topicCount: 1, questionCount: 10 },
  { id: 'HATA-7', subjectId: 'hat-analytical', title: 'Grouping, Selection & Assignment', topicCount: 1, questionCount: 6 },
  { id: 'HATA-8', subjectId: 'hat-analytical', title: 'Analytical Mock Set', topicCount: 1, questionCount: 10 },
  { id: 'HATA-9', subjectId: 'hat-analytical', title: 'Analytical Master Sheet', topicCount: 1, questionCount: 0 },

  // ── HAT Quantitative Reasoning (10 sections, 1 topic each) ──
  { id: 'HATQ-1', subjectId: 'hat-quantitative', title: 'Arithmetic Foundations: Numbers, Fractions, Decimals & Percentages', topicCount: 1, questionCount: 34 },
  { id: 'HATQ-2', subjectId: 'hat-quantitative', title: 'Averages, Profit & Loss, Discount, and Interest', topicCount: 1, questionCount: 26 },
  { id: 'HATQ-3', subjectId: 'hat-quantitative', title: 'Time, Work, Rates, Speed, Boats & Trains', topicCount: 1, questionCount: 26 },
  { id: 'HATQ-4', subjectId: 'hat-quantitative', title: 'Algebra: Expressions, Equations, Quadratics, Exponents & Inequalities', topicCount: 1, questionCount: 22 },
  { id: 'HATQ-5', subjectId: 'hat-quantitative', title: 'Geometry: Angles, Triangles, Circles, Areas, Volumes & Scaling', topicCount: 1, questionCount: 22 },
  { id: 'HATQ-6', subjectId: 'hat-quantitative', title: 'Number Systems, HCF/LCM, and Sequences', topicCount: 1, questionCount: 21 },
  { id: 'HATQ-7', subjectId: 'hat-quantitative', title: 'Probability, Statistics, Counting, Sets & Data Interpretation', topicCount: 1, questionCount: 20 },
  { id: 'HATQ-8', subjectId: 'hat-quantitative', title: 'Applied Word Problems: Ages, Mixtures, Partnership, Clocks', topicCount: 1, questionCount: 19 },
  { id: 'HATQ-9', subjectId: 'hat-quantitative', title: 'HAT Quantitative Strategy: Question Recognition, Estimation & Error Analysis', topicCount: 1, questionCount: 11 },
  { id: 'HATQ-10', subjectId: 'hat-quantitative', title: 'Quantitative Master Sheet — Final Day Revision', topicCount: 1, questionCount: 14 },
];

export const sectionMap: Record<string, Section> = Object.fromEntries(
  sections.map((s) => [s.id, s])
);

export function sectionsBySubject(subjectId: string): Section[] {
  return sections.filter((s) => s.subjectId === subjectId);
}
