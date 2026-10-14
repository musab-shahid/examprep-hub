// topics-meteorology.ts — METEO FPSC content bank (Meteorology & Climatology subject)
// Source: "Meteorology & Climatology" study guide PDF (ref. Ahrens, Meteorology Today 12th ed.)
// All content authored directly from the PDF. No outside material introduced.
//
// This file holds ONLY this subject's topic data. It is merged into the app-wide
// `topics` array by src/data/topics.ts (the aggregator). Do not import this file
// directly from components — always import from '@/data/topics'.

import type { Topic } from '@/types';

export const topics: Topic[] = [

// ============================= SECTION A =============================


{
  id: "meteo-origin-evolution",
  sectionId: "METEO-01",
  order: 1,
  title: "Origin & Chemical Evolution of the Atmosphere",
  definition: "Earth's atmosphere evolved in stages: a brief primitive H/He envelope, a secondary volcanic atmosphere, then oxygen rise and ozone after life and ocean chemistry reshaped the air. The sequence explains why modern air is N₂–O₂ rich and why the ozone shield is geologically young.",
  keyFacts: [
    "Primitive atmosphere (~4.6 BYA): H and He — lost to space",
    "Secondary atmosphere: volcanic H₂O, CO₂, N compounds — little free O₂",
    "Oceans + silicate reactions drew down CO₂",
    "Great Oxidation Event (~2.4 BYA): photosynthetic O₂ rise",
    "Stratospheric O₃ followed free O₂"
  ],
  explanationSections: [
    { heading: "Timeline first", body: "Keep three stages in order. Later topics (composition, greenhouse, ozone) inherit this history." }
  ],
  subtopics: [
    {
      id: "meteo-origin-evolution-escape-skill",
      title: "Why H/He did not become today's air",
      summary: "Light gases + hot young Earth → escape.",
      explanation: "Hydrogen and helium move fast at a given temperature. On a hot, lower-gravity early Earth many atoms exceeded escape velocity. The teaching point is negative: today's nitrogen–oxygen air is not leftover primitive solar-composition gas.",
      examples: [
        { problem: "Why is the modern atmosphere not mostly hydrogen?", solution: "Early H/He escaped; secondary and biological processes built later composition.", answer: "Early escape of H/He" }
      ],
      shortcuts: ["Light + hot → escape", "Modern air ≠ primitive"],
      traps: ["Today's air = captured solar nebula unchanged"]
    },
    {
      id: "meteo-origin-evolution-co2-drawdown",
      title: "Where secondary CO₂ went",
      summary: "Oceans and rocks, not only 'plants ate it all at once'.",
      explanation: "After oceans formed, CO₂ dissolved and participated in silicate–carbonate weathering, storing carbon in the ocean–crust system. That drawdown is essential between the CO₂-rich secondary atmosphere and later climates. Photosynthesis matters for O₂, but CO₂ history is not only biology in one step.",
      examples: [
        { problem: "Besides biology, what helped reduce secondary-atmosphere CO₂?", solution: "Ocean dissolution and silicate–carbonate reactions.", answer: "Oceans + silicate weathering" }
      ],
      shortcuts: ["CO₂ → ocean/rock storage", "O₂ rise → separate GOE story"],
      traps: ["All CO₂ removed only by modern forests overnight"]
    },
    {
      id: "meteo-origin-evolution-goe-ozone-link",
      title: "Oxygen first, ozone second",
      summary: "No free O₂, no O₃ shield.",
      explanation: "The Great Oxidation Event supplied free O₂. Stratospheric ozone forms from O₂ photochemistry. Exam traps that put a modern ozone layer in the anoxic secondary atmosphere fail this dependency.",
      examples: [
        { problem: "Could a thick ozone shield exist before free O₂ accumulated?", solution: "No — ozone requires oxygen chemistry.", answer: "No" }
      ],
      shortcuts: ["O₂ before O₃", "GOE unlocks ozone"],
      traps: ["Ozone layer in the secondary anoxic atmosphere"]
    }
  ],
  examPoints: [
    "Three-stage sequence",
    "Why primitive air was lost",
    "GOE and ozone dependency"
  ],
  commonMistakes: [
    "Modern air = primitive H/He.",
    "Ozone before oxygen.",
    "Ignoring ocean–rock CO₂ storage."
  ],
  relatedTopics: ["meteo-composition-today", "meteo-greenhouse-effect", "meteo-vertical-structure"],
  content: true,
  buildsOn: [],
  leadsTo: ["meteo-composition-today", "meteo-vertical-structure"],
  usedIn: ["meteo-composition-today", "meteo-greenhouse-effect"]
},

{
  id: "meteo-composition-today",
  sectionId: "METEO-01",
  order: 2,
  title: "Composition of Today's Atmosphere",
  definition: "The air we measure is a mixture of permanent gases, variable gases, and suspended aerosols. Permanent gases keep nearly fixed proportions in the well-mixed lower atmosphere; variable gases change with place and time and disproportionately shape weather, radiation, and climate; aerosols provide surfaces for clouds and scatter or absorb sunlight.",
  keyFacts: [
    "Dry-air bulk: N₂ ≈ 78.08%, O₂ ≈ 20.95%, Ar ≈ 0.93%",
    "Water vapour: typically 0–4% by volume — highly variable and the most important gaseous greenhouse agent in many local atmospheric columns",
    "CO₂ ≈ 410–420 ppm and rising by about 2 ppm per year",
    "Ozone is a pollutant near the surface but a protective absorber of UV in the stratosphere",
    "Permanent gases stay well mixed up to great height; variable gases and aerosols do not behave like fixed percentages",
    "Aerosols act as cloud condensation nuclei and affect the radiation balance"
  ],
  explanationSections: [
    {
      heading: "Read composition in two columns",
      body: "First column: the permanent bulk of dry air — nitrogen, oxygen, argon — percentages you can memorise. Second column: the variable minority — water vapour, carbon dioxide, ozone, and particles — small by volume yet central to greenhouse warming, air quality, and clouds. Exam questions often punish anyone who treats every gas as if it were as fixed as nitrogen."
    }
  ],
  subtopics: [
    {
      id: "meteo-composition-today-permanent-gases",
      title: "Permanent gases and dry air",
      summary: "N₂, O₂, and Ar dominate dry air and stay nearly constant in proportion through the well-mixed atmosphere.",
      explanation: "Nitrogen is chemically relatively inert in everyday air yet cycles through ecosystems. Oxygen supports respiration and combustion and is continuously replenished by photosynthesis. Argon, though rarely discussed in weather stories, is the third largest dry-air component. Because turbulent mixing is efficient through much of the homosphere, these proportions remain stable with height compared with water vapour.",
      examples: [
        {
          problem: "On a completely dry sample of air, which three gases account for almost all of the volume?",
          solution: "Nitrogen (~78%), oxygen (~21%), and argon (~0.93%). Together they make up more than 99% of dry air.",
          answer: "N₂, O₂, and Ar"
        }
      ],
      shortcuts: [
        "Dry air ≈ 78% N₂, 21% O₂, 1% Ar",
        "Argon is third — not a rare curiosity only"
      ],
      traps: [
        "Leaving argon out of the 'major gases' list",
        "Treating water vapour as a fixed dry-air percentage"
      ]
    },
    {
      id: "meteo-composition-today-variable-gases",
      title: "Variable gases: water vapour, CO₂, ozone",
      summary: "Small or changing amounts, large effects on radiation, weather, and life.",
      explanation: "Water vapour varies from nearly zero in cold polar air to several percent in warm tropical air. It transports latent heat and is often the strongest greenhouse gas in a local column. Carbon dioxide is measured in parts per million, yet it is well mixed and central to long-term climate forcing. Ozone's role depends on altitude: near the ground it irritates lungs and is a pollutant; in the stratosphere the same molecule absorbs ultraviolet radiation and protects the biosphere.",
      examples: [
        {
          problem: "Why can water vapour be called the most important greenhouse gas even though CO₂ dominates many climate headlines?",
          solution: "In much of the troposphere, water vapour absorbs and emits longwave radiation very effectively and is present in far higher concentration than CO₂. CO₂ still matters globally because it is long-lived and well mixed; the two statements are not contradictions.",
          answer: "Local greenhouse strength often led by H₂O; CO₂ still critical globally."
        }
      ],
      shortcuts: [
        "Variable ≠ unimportant",
        "Same O₃: bad at surface, protective aloft"
      ],
      traps: [
        "Saying CO₂ is always the strongest greenhouse gas in every local atmosphere",
        "Treating surface ozone and stratospheric ozone as different molecules with the same role"
      ]
    },
    {
      id: "meteo-composition-today-aerosols",
      title: "Aerosols and cloud nuclei",
      summary: "Solid and liquid particles shape clouds and the solar radiation that reaches the ground.",
      explanation: "Dust, soot, sea salt, and volcanic ash are not gases, but they belong in any serious account of atmospheric composition. Many aerosols serve as cloud condensation nuclei, so cloud droplet numbers depend on the particle load. Particles also scatter and absorb sunlight, linking air chemistry and climate. Volcanic injections are a classic way exams connect aerosols to temporary cooling.",
      examples: [
        {
          problem: "How do aerosols connect to cloud formation in a single sentence useful for MCQs?",
          solution: "Many aerosols act as cloud condensation nuclei on which water vapour can condense to form cloud droplets.",
          answer: "Aerosols often provide CCN for cloud droplets."
        }
      ],
      shortcuts: [
        "Aerosol → CCN → clouds",
        "Scatter/absorb sunlight → climate effect"
      ],
      traps: [
        "Ignoring particles because they are not listed in the N₂/O₂ percentage table"
      ]
    }
  ,
    {
      id: "meteo-composition-today-ozone-vs-ghg",
      title: "Ozone shield vs greenhouse warming (exam trap)",
      summary: "Stratospheric ozone absorbs UV; greenhouse gases trap longwave — different problems.",
      explanation: "Stratospheric ozone protects life by absorbing harmful ultraviolet radiation. Surface (tropospheric) ozone is a pollutant. Ozone depletion (e.g. polar ozone thinning linked to chlorine chemistry) is not the same process as CO₂-driven greenhouse warming, though both are human-influenced atmospheric issues. Exams often test whether students conflate the ozone hole with global warming.",
      examples: [
        { problem: "Does the Antarctic ozone hole cause global greenhouse warming in the same way as rising CO₂?", solution: "No — ozone depletion is primarily a UV-protection / stratospheric chemistry issue; greenhouse warming is driven mainly by long-lived greenhouse gases trapping infrared radiation.", answer: "No — different mechanisms" }
      ],
      shortcuts: ["Stratospheric O₃ → UV shield", "CO₂ → longwave greenhouse", "Do not equate ozone hole with global warming"],
      traps: ["Saying the ozone hole is the main cause of global warming"]
    }
  ],
  comparisonTable: {
    title: "Permanent vs variable constituents",
    headers: ["Constituent", "Typical amount", "Behaviour", "Exam role"],
    rows: [
      ["N₂, O₂, Ar", "Percent level (dry air)", "Nearly constant proportions", "Bulk composition"],
      ["Water vapour", "0–4% (variable)", "Changes with weather", "Latent heat; strong GHG"],
      ["CO₂", "~420 ppm", "Well mixed; slowly rising", "Long-term climate forcing"],
      ["O₃", "ppb–ppm by layer", "Surface vs stratosphere", "Pollutant vs UV shield"],
      ["Aerosols", "Trace mass", "Spatially patchy", "CCN; radiation"],
    ],
  },
  examPoints: [
    "Water vapour is often the dominant local greenhouse gas — not always CO₂",
    "Surface ozone pollutes; stratospheric ozone protects — altitude changes the story",
    "Argon is the third major dry-air gas after nitrogen and oxygen",
    "Permanent vs variable is a classification of behaviour, not of importance"
  ],
  commonMistakes: [
    "Treating water vapour as a fixed percentage like N₂ or O₂.",
    "Ignoring argon after nitrogen and oxygen.",
    "Assuming CO₂ always outranks water vapour as a greenhouse absorber in every column.",
    "Confusing permanent gases with variable gases."
  ],
  relatedTopics: ["meteo-origin-evolution", "meteo-greenhouse-effect"],
  content: true,
  buildsOn: ["meteo-origin-evolution", "math-1-7", "math-3-4"],
  leadsTo: ["meteo-vertical-structure", "meteo-greenhouse-effect"],
  usedIn: ["meteo-greenhouse-effect", "meteo-radiative-forcing", "env-air-pollution", "env-ozone-depletion"]
},

{
  id: "meteo-vertical-structure",
  sectionId: "METEO-01",
  order: 3,
  title: "Vertical Thermal Structure of the Atmosphere",
  definition: "Temperature does not fall steadily with height. The troposphere, stratosphere, mesosphere, and thermosphere are layered by how temperature changes with altitude, and those layers control weather, ozone, and the tropopause lid on storms.",
  keyFacts: [
    "Troposphere: weather layer; temperature generally decreases with height",
    "Tropopause: lid on most deep convection; higher in tropics than polar regions",
    "Stratosphere: temperature increases with height — ozone heating",
    "Mesosphere: cools with height; coldest average temperatures",
    "Thermosphere: heats with height; very thin air"
  ],
  explanationSections: [
    { heading: "Lapse sign defines the layer", body: "Know whether temperature falls or rises with height in each layer — that is the exam fingerprint." }
  ],
  subtopics: [
    {
      id: "meteo-vertical-structure-layer-table",
      title: "Layer identification table",
      summary: "T trend with height → name the layer.",
      explanation: "Decreasing T with height in the lowest deep layer → troposphere. Increasing T above the tropopause → stratosphere (ozone absorption of UV). Decreasing again → mesosphere. Increasing at the top → thermosphere. Matching a sounding segment to a layer is a standard item.",
      examples: [
        { problem: "Sounding shows T rising from 15 to 40 km — which layer?", solution: "Stratosphere.", answer: "Stratosphere" }
      ],
      shortcuts: ["Tropo cools upward", "Strato warms upward (ozone)", "Tropopause = lid"],
      traps: ["Placing weather mainly in the stratosphere"]
    },
    {
      id: "meteo-vertical-structure-tropopause-exam",
      title: "Tropopause height traps",
      summary: "Higher in tropics; limits storm tops.",
      explanation: "Tropical tropopause is typically much higher than polar tropopause. Deep thunderstorms are capped near the tropopause; overshooting tops are the exception that proves the lid. Do not quote a single global tropopause height.",
      examples: [
        { problem: "Is the tropopause usually higher over the equator or over the poles?", solution: "Over the equator / tropics.", answer: "Tropics" }
      ],
      shortcuts: ["Tropical tropopause higher", "Most weather below tropopause"],
      traps: ["Fixed 10 km tropopause everywhere"]
    }
  ],
  examPoints: [
    "Four layers by T profile",
    "Ozone and stratosphere",
    "Tropopause as convection lid"
  ],
  commonMistakes: [
    "Weather in stratosphere.",
    "Ignoring latitudinal tropopause change.",
    "Mesosphere/thermosphere swapped."
  ],
  relatedTopics: ["meteo-composition-today", "meteo-lapse-rates", "meteo-ionosphere-exosphere"],
  content: true,
  buildsOn: ["meteo-origin-evolution", "meteo-composition-today"],
  leadsTo: ["meteo-lapse-rates", "meteo-ionosphere-exosphere"],
  usedIn: ["meteo-lapse-rates", "meteo-thermodynamic-diagrams"]
},

{
  id: "meteo-ionosphere-exosphere",
  sectionId: "METEO-01",
  order: 4,
  title: "The Ionosphere and Exosphere",
  definition: "Above the well-mixed weather atmosphere, two ideas extend the vertical picture. The ionosphere is a region of free electrons and ions created by solar radiation, largely overlapping the thermosphere. The exosphere is the outermost fringe where collisions are rare and light atoms may escape to space.",
  keyFacts: [
    "Ionosphere: begins near ~60 km; electrified region rather than a separate temperature layer in the standard four-layer thermal scheme",
    "Solar UV and X-rays ionise atoms and molecules, releasing free electrons",
    "AM radio can reflect from ionospheric layers, especially at night; higher-frequency FM and TV signals more often pass through",
    "Exosphere: begins on the order of ~500 km; mean free paths become very long",
    "Light species such as hydrogen and helium are the most likely to escape from the exosphere"
  ],
  explanationSections: [
    {
      heading: "Electrical region versus thermal layer",
      body: "Students sometimes try to insert the ionosphere as a fifth thermal layer between mesosphere and thermosphere. It is more accurate to say that ionization becomes important through a height range that coincides mainly with the thermosphere. The four thermal layers still describe temperature structure; the ionosphere describes charge."
    }
  ],
  subtopics: [
    {
      id: "meteo-ionosphere-exosphere-ionization-radio",
      title: "Ionization and radio propagation",
      summary: "Solar radiation creates free electrons; AM and FM/TV behave differently.",
      explanation: "When energetic solar radiation strips electrons from atmospheric particles, the resulting plasma can refract or reflect certain radio frequencies. Medium-frequency AM broadcasts may travel long distances via ionospheric reflection, particularly at night when absorption conditions change. Higher-frequency FM and television signals are less readily reflected and usually require line-of-sight paths. That contrast is a standard examination distinction.",
      examples: [
        {
          problem: "Why might a distant AM station be heard at night more readily than a distant FM station?",
          solution: "AM frequencies can reflect from the ionosphere under suitable conditions, extending range beyond the horizon. FM frequencies more often pass through the ionosphere, so reception stays closer to line-of-sight.",
          answer: "AM can reflect from the ionosphere; FM usually does not."
        }
      ],
      shortcuts: [
        "AM reflects (often); FM/TV pass through",
        "Ionosphere ≈ charged region, not a fifth thermal layer"
      ],
      traps: [
        "Calling the ionosphere a separate thermal layer like the troposphere",
        "Assuming all radio frequencies behave identically"
      ]
    },
    {
      id: "meteo-ionosphere-exosphere-escape",
      title: "Exosphere and atmospheric escape",
      summary: "At the outer edge, collisions are rare and light atoms can leave the planet.",
      explanation: "In the exosphere the atmosphere is so thin that a molecule may travel a long distance before colliding with another. Light atoms that reach high speeds in the tail of the thermal distribution can exceed escape velocity and be lost to space. This is the final geometric end of the atmospheric column discussed in origin topics when hydrogen escaped the early Earth — the same physics, at the modern outer boundary.",
      examples: [
        {
          problem: "Which gases are most prone to escape from the exosphere, and why?",
          solution: "The lightest species, especially hydrogen and helium, because for a given temperature they have higher average speeds and more readily exceed escape velocity.",
          answer: "H and He — light, high thermal speeds."
        }
      ],
      shortcuts: [
        "Exosphere = escape region",
        "Light gases leave most easily"
      ],
      traps: [
        "Thinking escape requires zero gravity rather than exceeding escape speed in a thin gas"
      ]
    }
  ],
  comparisonTable: {
    title: "Ionosphere vs exosphere",
    headers: ["Feature", "Ionosphere", "Exosphere"],
    rows: [
      ["Main idea", "Ionisation / free electrons", "Extreme thinness / escape"],
      ["Relation to thermal layers", "Overlaps thermosphere heights", "Outermost fringe"],
      ["Human-relevant effect", "Radio propagation", "Atmospheric loss of light gases"],
    ],
  },
  examPoints: [
    "AM tends to reflect; FM/TV tend to pass through the ionosphere",
    "Ionosphere is an electrified region, not an extra thermal layer in the basic four-layer scheme",
    "Exosphere is where atmospheric gases are finally lost to space"
  ],
  commonMistakes: [
    "Treating the ionosphere as independent of thermospheric altitudes.",
    "Assuming radio range depends only on tropospheric weather.",
    "Confusing the exosphere with a region of zero gravity.",
    "Mixing aurora physics casually with ordinary thunderstorms."
  ],
  relatedTopics: ["meteo-vertical-structure"],
  content: true,
  buildsOn: ["meteo-vertical-structure", "phy-electromagnetic-induction", "earth-a2"],
  leadsTo: [],
  usedIn: ["meteo-remote-sensing"]
},

{
  id: "meteo-weather-vs-climate",
  sectionId: "METEO-01",
  order: 5,
  title: "Weather vs. Climate & Climatic Controls",
  definition: "Weather is the atmospheric state at a particular time and place — the next hour's temperature, wind, and rain. Climate is the long-term statistical description of weather, including averages, seasonal cycles, and extremes, conventionally summarised over periods such as 30 years. Climatic controls are the geographic and physical factors that shape why one region is desert and another is persistently wet.",
  keyFacts: [
    "Seven weather elements commonly listed: air temperature, air pressure, humidity, clouds, precipitation, visibility, wind",
    "Climate baselines are often computed over ~30 years so that single unusual years do not redefine the climate",
    "Climate includes variability and extremes, not only the mean",
    "Seven climatic controls: latitude/solar geometry, land–water distribution, ocean currents, prevailing winds, semipermanent pressure systems, mountain barriers, elevation"
  ],
  explanationSections: [
    {
      heading: "Two timescales, one atmosphere",
      body: "The same physical atmosphere produces both weather and climate. The distinction is statistical and temporal. A heatwave is weather; a shift in the distribution of heatwaves over decades is a climate question. Confusing the two leads to invalid arguments in both everyday discussion and exam options."
    }
  ],
  subtopics: [
    {
      id: "meteo-weather-vs-climate-definitions",
      title: "Weather versus climate",
      summary: "Snapshot versus long-term statistics, including extremes.",
      explanation: "Weather answers 'what is happening now or this week?' Climate answers 'what is normal here across many years, and how variable is it?' The familiar thirty-year window is a practical standard for normals, not a law of physics, but it is the convention examinations expect. Climate is not merely the average temperature; rainfall reliability, storm frequency, and record extremes are part of the description.",
      examples: [
        {
          problem: "A city records its coldest day in twenty years. Does that single day disprove a warming climate trend?",
          solution: "No. One weather extreme does not define climate. Climate assessment uses long records, distributions, and trends, not a single event in isolation.",
          answer: "No — climate is statistical over long periods."
        }
      ],
      shortcuts: [
        "Weather = short term; climate = long-term stats",
        "Climate includes extremes, not only means"
      ],
      traps: [
        "Using one storm or cold day as full proof for or against climate change"
      ]
    },
    {
      id: "meteo-weather-vs-climate-seven-and-seven",
      title: "Seven elements and seven controls",
      summary: "Memorise both lists; they test different ideas.",
      explanation: "Weather elements are what instruments and observers describe in a synoptic report: temperature, pressure, humidity, cloud, precipitation, visibility, and wind. Climatic controls are the reasons climates differ: how much solar energy arrives (latitude), how land and ocean heat differently, how currents and prevailing winds move heat and moisture, where subtropical highs sit, how mountains force air upward or cast rain shadows, and how elevation cools the air. Mixing the two lists is a common error.",
      examples: [
        {
          problem: "Is 'mountain barrier' a weather element or a climatic control?",
          solution: "It is a climatic control — a geographic factor that shapes long-term climate (for example by causing orographic rain and rain shadows), not an instantaneous measured element like humidity or wind speed.",
          answer: "Climatic control"
        }
      ],
      shortcuts: [
        "Elements = what you measure now",
        "Controls = why climates differ"
      ],
      traps: [
        "Putting latitude or mountains into the weather-element list"
      ]
    },
    {
      id: "meteo-weather-vs-climate-why-thirty-years",
      title: "Why multi-decadal normals",
      summary: "Long averages reduce the noise of individual seasons.",
      explanation: "A single wet year or dry decade can mislead. Averaging across roughly thirty years stabilises 'normals' used in agriculture, engineering, and climatology. When normals are updated, the reference period changes; the physical climate may also be shifting, which is why modern practice pays attention both to the baseline and to trends relative to it.",
      examples: [
        {
          problem: "Why might a 5-year average of rainfall be a poor climate normal for planning?",
          solution: "Five years is short enough that a few unusual seasons can dominate the average. A ~30-year window better represents longer-term central tendency and variability.",
          answer: "Too short — dominated by a few seasons."
        }
      ],
      shortcuts: [
        "~30 years ≈ standard normal period",
        "Short records exaggerate noise"
      ],
      traps: [
        "Treating any short recent stretch as the full climate definition"
      ]
    }
  ,
    {
      id: "meteo-weather-vs-climate-uhi",
      title: "Urban heat island (UHI)",
      summary: "Cities run warmer than surrounding rural areas, especially at night.",
      explanation: "Built surfaces absorb and store heat, sky-view is reduced, waste heat is released, and moisture/vegetation are often lower. The urban heat island is strongest under calm, clear nights. It is a local climate effect — it does not replace greenhouse forcing as the explanation of global mean warming, but it matters for station siting, health, and city planning.",
      examples: [
        { problem: "When is the urban–rural temperature difference often largest?", solution: "Clear, calm nights — rural areas cool faster by radiation while the city retains heat.", answer: "Clear calm nights" }
      ],
      shortcuts: ["UHI = city warmer than rural", "Strongest often at night", "Local — not the whole global trend"],
      traps: ["Blaming all global warming only on cities"]
    }
  ],
  comparisonTable: {
    title: "Weather elements vs climatic controls",
    headers: ["Weather elements (measured state)", "Climatic controls (why regions differ)"],
    rows: [
      ["Temperature", "Latitude / solar intensity"],
      ["Pressure", "Land–water distribution"],
      ["Humidity", "Ocean currents"],
      ["Clouds", "Prevailing winds"],
      ["Precipitation", "Semipermanent pressure systems"],
      ["Visibility", "Mountain barriers"],
      ["Wind", "Elevation"],
    ],
  },
  examPoints: [
    "Know both sevens: elements vs controls",
    "Climate ≈ long-term statistics including variability, often over ~30 years",
    "One extreme weather event is not, by itself, a climate proof"
  ],
  commonMistakes: [
    "Using one extreme day as the sole proof of climate change.",
    "Defining climate as average weather only and ignoring extremes.",
    "Confusing day-ahead forecasts with multi-decadal projections.",
    "Ignoring local controls such as altitude and continentality."
  ],
  relatedTopics: ["meteo-scales-of-motion", "meteo-forecasting-methods"],
  content: true,
  buildsOn: ["meteo-vertical-structure"],
  leadsTo: ["meteo-scales-of-motion", "meteo-koppen-system"],
  usedIn: ["meteo-koppen-system", "meteo-climate-feedbacks", "meteo-temp-rainfall-distribution", "env-fundamentals-and-sustainability"]
},

{
  id: "meteo-scales-of-motion",
  sectionId: "METEO-01",
  order: 6,
  title: "Scales of Atmospheric Motion",
  definition: "Atmospheric motions are classified by horizontal size and typical lifetime. From smallest to largest one speaks of microscale, mesoscale, synoptic scale, and global or planetary scale. Larger systems generally last longer and often steer or contain the smaller ones.",
  keyFacts: [
    "Microscale: centimetres to metres; seconds to minutes (turbulent eddies, small gusts)",
    "Mesoscale: a few kilometres to about 100 km; minutes to about a day (sea breezes, thunderstorms, tornadoes)",
    "Synoptic scale: hundreds to thousands of kilometres; days to a week or more (fronts, mid-latitude cyclones, hurricanes)",
    "Global/planetary scale: continental to global; weeks to months (long waves that steer storm tracks)",
    "Synoptic and global scales together are sometimes called macroscale",
    "Tornadoes are mesoscale features even when embedded in a larger synoptic cyclone"
  ],
  explanationSections: [
    {
      heading: "Scale is about size and duration",
      body: "A useful habit is to ask two questions of any phenomenon: how wide is it, and how long does it last? Those answers place it on the scale ladder. The Coriolis effect, for example, is crucial for synoptic and planetary flows but negligible for a dust devil that lives only a minute."
    }
  ],
  subtopics: [
    {
      id: "meteo-scales-of-motion-ladder",
      title: "The scale ladder",
      summary: "Micro → meso → synoptic → planetary, with lifetime increasing alongside size.",
      explanation: "Microscale motion is the gusty turbulence felt in street canyons. Mesoscale systems organise clouds and local winds over a city or coastal strip. Synoptic systems are the highs, lows, and fronts drawn on a national weather map. Planetary waves span ocean basins and set the stage on which synoptic storms travel. Each rung has characteristic dynamics; tools and approximations change as you climb.",
      examples: [
        {
          problem: "Classify a typical mid-latitude cyclone on the weather map that lasts four days and spans 1500 km.",
          solution: "Horizontal size of hundreds to thousands of kilometres and lifetime of several days place it firmly on the synoptic scale.",
          answer: "Synoptic scale"
        }
      ],
      shortcuts: [
        "Bigger usually lasts longer",
        "Map symbols (fronts, H/L) → synoptic"
      ],
      traps: [
        "Using 'large' loosely without size or time"
      ]
    },
    {
      id: "meteo-scales-of-motion-meso-vs-synoptic",
      title: "Mesoscale versus synoptic traps",
      summary: "Tornadoes and thunderstorms are mesoscale; hurricanes and mid-latitude cyclones are synoptic.",
      explanation: "Severity is not the same as scale. A tornado is intense but narrow and short-lived, so it is mesoscale. A hurricane is also intense but spans hundreds of kilometres and persists for days, so it is synoptic. Thunderstorm complexes and land–sea breezes likewise sit on the mesoscale even when they produce dramatic local weather.",
      examples: [
        {
          problem: "Is a tornado classified as synoptic scale because it is dangerous?",
          solution: "No. Classification follows spatial and temporal scale. Tornadoes are mesoscale. Danger does not promote a phenomenon to synoptic scale.",
          answer: "No — tornadoes are mesoscale."
        }
      ],
      shortcuts: [
        "Tornado / thunderstorm → mesoscale",
        "Hurricane / mid-latitude cyclone → synoptic"
      ],
      traps: [
        "Calling tornadoes synoptic because they are severe"
      ]
    },
    {
      id: "meteo-scales-of-motion-macroscale",
      title: "Macroscale: synoptic plus planetary",
      summary: "Together, the two largest rungs organise week-scale weather patterns.",
      explanation: "When texts group synoptic and planetary motions as macroscale, they are emphasising the chartable, longer-lived flows that dominate medium-range thinking. Planetary waves steer the tracks of synoptic cyclones; understanding one without the other is incomplete for mid-latitude weather.",
      examples: [
        {
          problem: "A longwave pattern in the upper troposphere persists for three weeks and guides storms across the Atlantic. Which scale is that longwave pattern?",
          solution: "Lifetime of weeks and near-hemispheric wavelength indicate the global or planetary scale (macroscale).",
          answer: "Planetary / global scale"
        }
      ],
      shortcuts: [
        "Macroscale = synoptic + planetary",
        "Planetary waves steer synoptic storms"
      ],
      traps: [
        "Thinking planetary scale replaces synoptic storms rather than steering them"
      ]
    }
  ],
  comparisonTable: {
    title: "Scales of motion",
    headers: ["Scale", "Size", "Time", "Examples"],
    rows: [
      ["Microscale", "cm–m", "Seconds–minutes", "Turbulent eddies"],
      ["Mesoscale", "km–~100 km", "Minutes–~1 day", "Sea breeze, thunderstorm, tornado"],
      ["Synoptic", "100s–1000s km", "Days–~1 week", "Fronts, mid-latitude cyclone, hurricane"],
      ["Planetary", "Continental–global", "Weeks–months", "Longwaves, storm-track guides"],
    ],
  },
  examPoints: [
    "Tornadoes are mesoscale, not synoptic",
    "Hurricanes and mid-latitude cyclones are synoptic scale",
    "Larger scale generally implies longer lifetime",
    "Synoptic + planetary = macroscale in many textbooks"
  ],
  commonMistakes: [
    "Applying synoptic balance ideas to microscale gusts.",
    "Expecting Coriolis to dominate every local eddy.",
    "Mixing size labels with severity labels.",
    "Assuming larger scale always means stronger instantaneous wind."
  ],
  relatedTopics: ["meteo-weather-vs-climate", "meteo-composition-today"],
  content: true,
  buildsOn: ["meteo-weather-vs-climate", "phy-kinematics"],
  leadsTo: ["meteo-forces-governing-wind", "meteo-global-circulation"],
  usedIn: ["meteo-global-circulation", "meteo-rossby-waves", "meteo-cyclones-development"]
},


// ============================= SECTION B =============================

{
  id: "meteo-heat-transfer",
  sectionId: "METEO-02",
  order: 1,
  title: "Heat Transfer Mechanisms",
  definition: "Heat moves by conduction, convection, advection, and radiation. Each path has a preferred medium and role in weather — naming the path correctly is a frequent exam skill.",
  keyFacts: [
    "Conduction: molecular contact — weak in air except in a thin surface film",
    "Convection: vertical buoyant motions",
    "Advection: horizontal transport by wind",
    "Radiation: electromagnetic; needs no medium",
    "Latent heat couples moisture phase changes to the energy budget"
  ],
  explanationSections: [
    { heading: "Match process to stem", body: "If air rises in thermals, say convection. If a warm air mass moves poleward, say advection. If the ground emits IR at night, say radiation." }
  ],
  subtopics: [
    {
      id: "meteo-heat-transfer-match-stems",
      title: "Stem → mechanism matching",
      summary: "Four mechanisms, four classic setups.",
      explanation: "Bare rock heats a thin air layer by conduction, then thermals take over by convection. Warm-air advection ahead of a warm front is horizontal. Night-time cooling under clear skies is net longwave radiation loss. Mixing these labels costs easy marks.",
      examples: [
        { problem: "Horizontal import of warm air before a warm front — mechanism?", solution: "Advection.", answer: "Advection" }
      ],
      shortcuts: ["Vertical buoyant → convection", "Horizontal → advection", "IR/solar → radiation"],
      traps: ["Calling all warming radiation"]
    },
    {
      id: "meteo-heat-transfer-night-inversion-link",
      title: "Radiation and nocturnal inversions",
      summary: "Clear-night IR loss cools the surface first.",
      explanation: "The ground emits longwave efficiently. With few clouds, little IR returns downward, so the surface and the air touching it chill and can form a radiation inversion. That links heat-transfer vocabulary to inversion and fog topics.",
      examples: [
        { problem: "Why does a cloudy night often stay warmer than a clear night?", solution: "Clouds return longwave radiation downward.", answer: "Downward IR from clouds" }
      ],
      shortcuts: ["Clear night → strong IR loss", "Clouds → greenhouse-like blanket"],
      traps: ["Blaming conduction through the whole troposphere for night cooling"]
    }
  ],
  examPoints: [
    "Define four mechanisms",
    "Advection vs convection",
    "Radiation and clear-night cooling"
  ],
  commonMistakes: [
    "Convection/advection swapped.",
    "Ignoring latent heat.",
    "Radiation requires air as a medium."
  ],
  relatedTopics: ["meteo-radiation-laws", "meteo-inversion-mechanics", "meteo-greenhouse-effect"],
  content: true,
  buildsOn: ["meteo-composition-today"],
  leadsTo: ["meteo-radiation-laws", "meteo-lapse-rates"],
  usedIn: ["meteo-inversion-mechanics", "meteo-greenhouse-effect"]
},

{
  id: "meteo-radiation-laws",
  sectionId: "METEO-02",
  order: 2,
  title: "Radiation Laws",
  definition: "Three laws organise planetary radiation: Wien’s law links temperature to peak wavelength, Stefan–Boltzmann links temperature to total emitted power, and Kirchhoff’s law links absorption and emission at a given wavelength.",
  keyFacts: [
    "Wien: hotter → shorter λ_max (λ_max ∝ 1/T)",
    "Stefan–Boltzmann: emitted flux ∝ T⁴",
    "Kirchhoff: good absorber at λ is a good emitter at λ",
    "Sun peaks in visible; Earth in infrared",
    "Underpins greenhouse and remote-sensing reasoning"
  ],
  explanationSections: [
    { heading: "Numbers with intuition", body: "Double absolute temperature and blackbody emission rises by a factor of sixteen — the T⁴ sensitivity is why skin temperature and greenhouse changes matter." }
  ],
  subtopics: [
    {
      id: "meteo-radiation-laws-wien-stefan",
      title: "Wien and Stefan–Boltzmann in exams",
      summary: "Peak wavelength vs total power — different questions.",
      explanation: "If the stem asks why the Sun looks visible while Earth radiates heat in IR, use Wien. If it asks how emission changes when temperature rises, use T⁴. Do not swap the laws.",
      examples: [
        { problem: "Object warms from 300 K to 330 K — does total emission rise linearly?", solution: "No — roughly with T⁴ (about +46% for a 10% T rise in absolute temperature).", answer: "No — T⁴" }
      ],
      shortcuts: ["Wien → colour/peak λ", "Stefan → total power T⁴"],
      traps: ["Using Wien to answer total-energy questions"]
    },
    {
      id: "meteo-radiation-laws-kirchhoff",
      title: "Kirchhoff for greenhouse gases",
      summary: "Absorbers are emitters at the same wavelengths.",
      explanation: "Greenhouse gases absorb terrestrial IR at selective bands and therefore also emit at those bands. A blackbody is the ideal limit: perfect absorber and perfect emitter. Real gases are selective, which creates atmospheric windows between bands.",
      examples: [
        { problem: "Why can a gas that absorbs IR also radiate IR downward to the surface?", solution: "Kirchhoff: absorptivity and emissivity linked at a wavelength.", answer: "Kirchhoff link" }
      ],
      shortcuts: ["Absorb ↔ emit at λ", "Selective bands → windows"],
      traps: ["Thinking absorbers cannot emit"]
    }
  ],
  formula: [
    {
      name: "Wien's displacement law",
      expression: "\\lambda_{\\max} = \\frac{b}{T}",
      variables: [
        { symbol: "\\lambda_{\\max}", meaning: "wavelength of peak emission (m)" },
        { symbol: "T", meaning: "absolute temperature (K)" },
        { symbol: "b", meaning: "Wien's constant ≈ 2.90 × 10⁻³ m·K" }
      ]
    },
    {
      name: "Stefan–Boltzmann law",
      expression: "E = \\sigma T^{4}",
      variables: [
        { symbol: "E", meaning: "emitted radiant flux (W/m²)" },
        { symbol: "\\sigma", meaning: "Stefan–Boltzmann constant ≈ 5.67 × 10⁻⁸ W/m²·K⁴" },
        { symbol: "T", meaning: "absolute temperature (K)" }
      ]
    }
  ],
  examPoints: [
    "Wien peak shift",
    "T⁴ power law",
    "Kirchhoff link"
  ],
  commonMistakes: [
    "Swapping Wien and Stefan roles.",
    "Linear flux–temperature thinking.",
    "Ignoring selective absorption."
  ],
  relatedTopics: ["meteo-greenhouse-effect", "meteo-heat-transfer", "meteo-remote-sensing"],
  content: true,
  buildsOn: ["meteo-heat-transfer"],
  leadsTo: ["meteo-greenhouse-effect", "meteo-remote-sensing"],
  usedIn: ["meteo-greenhouse-effect", "meteo-radiative-forcing"]
},

{
  id: "meteo-greenhouse-effect",
  sectionId: "METEO-02",
  order: 3,
  title: "Greenhouse Effect & Atmospheric Window",
  definition: "Greenhouse gases absorb and re-emit terrestrial longwave radiation, keeping the surface warmer than it would be under a pure radiative balance without an atmosphere. The atmospheric window is the infrared band where the clear sky is relatively transparent, so surface emission can escape more easily — unless clouds block it.",
  keyFacts: [
    "Without greenhouse gases, global mean surface temperature would be far colder (order −18 °C vs about +15 °C)",
    "Important gases: H₂O, CO₂, CH₄, O₃, N₂O — not N₂/O₂ as primary absorbers",
    "Atmospheric window: roughly 8–12 µm region of relative clear-sky transparency",
    "Clouds absorb/emit IR strongly even in the window",
    "Greenhouse effect ≠ ozone-hole UV story"
  ],
  explanationSections: [
    { heading: "Selective absorption", body: "Solar shortwave largely passes through clear air to the surface; the surface emits infrared. Greenhouse gases intercept parts of that infrared and radiate both up and down — the downward part warms the surface climate." }
  ],
  subtopics: [
    {
      id: "meteo-greenhouse-effect-window-trap",
      title: "Window vs clouds vs gases",
      summary: "Clear-sky window is not a free pass through cloud.",
      explanation: "In clear air, the window wavelengths let more surface IR escape. Thick clouds close that escape route by absorbing and emitting as near-blackbodies in the infrared. Exam traps often claim clouds are transparent in the window like dry air — they are not.",
      examples: [
        { problem: "Clear dry night vs overcast night — which usually cools faster at the surface?", solution: "Clear dry night — more longwave escapes; clouds return IR downward.", answer: "Clear dry night" }
      ],
      shortcuts: ["Window = clearer IR escape", "Clouds seal the window"],
      traps: ["Saying clouds are transparent in the atmospheric window"]
    },
    {
      id: "meteo-greenhouse-effect-not-ozone",
      title: "Greenhouse vs ozone depletion",
      summary: "Different wavelengths, different problems.",
      explanation: "Greenhouse warming is about longwave (infrared) trapping by gases such as CO₂ and water vapour. Stratospheric ozone depletion is mainly an ultraviolet-shield chemistry issue. Linking the Antarctic ozone hole as the main cause of global greenhouse warming is a standard wrong answer.",
      examples: [
        { problem: "Does the ozone hole explain global mean greenhouse warming the way CO₂ does?", solution: "No — different mechanisms and spectral regions.", answer: "No" }
      ],
      shortcuts: ["GHG → infrared", "Ozone hole → UV shield chemistry"],
      traps: ["Ozone hole = global warming (false equivalence)"]
    }
  ],
  examPoints: [
    "Selective IR absorption by GHG",
    "Role of atmospheric window",
    "Clouds vs clear window",
    "Not the same as ozone depletion"
  ],
  commonMistakes: [
    "Thinking N₂/O₂ are the main greenhouse gases.",
    "Ignoring clouds in the window.",
    "Conflating ozone hole with greenhouse effect."
  ],
  relatedTopics: ["meteo-radiation-laws", "meteo-composition-today", "meteo-climate-feedbacks"],
  content: true,
  buildsOn: ["meteo-radiation-laws", "meteo-composition-today"],
  leadsTo: ["meteo-climate-feedbacks", "meteo-radiative-forcing"],
  usedIn: ["meteo-climate-feedbacks", "meteo-radiative-forcing"]
},

{
  id: "meteo-lapse-rates",
  sectionId: "METEO-02",
  order: 4,
  title: "Lapse Rates",
  definition: "A lapse rate is the rate of temperature change with height. Three rates matter in exams: the dry adiabatic lapse rate (DALR) for unsaturated parcels, the saturated adiabatic lapse rate (SALR) for cloudy parcels, and the environmental lapse rate (ELR) measured in the real atmosphere. Stability is diagnosed by comparing ELR with DALR and SALR.",
  keyFacts: [
    "DALR ≈ 9.8 °C/km (often 10 °C/km in MCQs) — unsaturated rising/sinking parcel",
    "SALR < DALR — latent heat release slows cooling; typical exam range ~4–7 °C/km",
    "ELR — actual sounding slope; varies in time and place",
    "Stability uses comparisons: ELR vs DALR and SALR",
    "Inversions: ELR negative (temperature increases with height) — very stable"
  ],
  explanationSections: [
    { heading: "Parcel rates vs environment", body: "DALR and SALR describe process curves for moving air parcels. ELR is what the radiosonde measures. Never treat ELR as a fixed constant equal to DALR." }
  ],
  subtopics: [
    {
      id: "meteo-lapse-rates-decision",
      title: "Stability decision rule",
      summary: "Compare ELR with DALR and SALR — one comparison table for exams.",
      explanation: "Absolutely unstable: ELR > DALR (parcel colder-rate environment — environment cools faster than a dry parcel). Conditionally unstable: SALR < ELR < DALR. Absolutely stable: ELR < SALR. Inversion layers (temperature rising upward) are strongly stable and suppress mixing.",
      examples: [
        { problem: "ELR = 8 °C/km, DALR = 10, SALR = 6. Classification?", solution: "SALR < ELR < DALR → conditionally unstable.", answer: "Conditionally unstable" }
      ],
      shortcuts: ["ELR > DALR → absolute instability", "SALR < ELR < DALR → conditional", "ELR < SALR → absolute stability"],
      traps: ["Using only DALR and ignoring whether the parcel is saturated", "Calling every steep ELR 'conditional' without checking SALR"]
    },
    {
      id: "meteo-lapse-rates-why-salr",
      title: "Why SALR is smaller than DALR",
      summary: "Latent heat, not a second unrelated constant.",
      explanation: "When vapour condenses, latent heat is released into the parcel, so temperature falls more slowly with height than in dry ascent. In cold dry air SALR approaches DALR; in warm moist air SALR is much smaller. That is why tropical cloudy ascent differs from polar dry ascent.",
      examples: [
        { problem: "Does SALR stay fixed at 6 °C/km in every cloud?", solution: "No — it varies with temperature and moisture; 6 is only a typical mid-latitude teaching value.", answer: "No — variable" }
      ],
      shortcuts: ["Condensation heats → slower cooling", "Warm moist → smaller SALR"],
      traps: ["Memorising one SALR number as a physical constant like g"]
    }
  ],
  comparisonTable: {
    title: "Stability from ELR",
    headers: ["Condition", "Meaning"],
    rows: [
      ["ELR > DALR", "Absolutely unstable"],
      ["SALR < ELR < DALR", "Conditionally unstable"],
      ["ELR < SALR", "Absolutely stable"],
      ["Temperature ↑ with height", "Inversion — strongly stable"]
    ]
  },
  formula: [
    {
      name: "Dry adiabatic lapse rate (DALR)",
      expression: "\\Gamma_d \\approx 9.8\\,^{\\circ}\\mathrm{C\\,/\\,km}",
      variables: [
        { symbol: "\\Gamma_d", meaning: "rate a dry (unsaturated) parcel cools while rising" }
      ]
    },
    {
      name: "Environmental vs process rates",
      expression: "\\text{compare ELR with } \\Gamma_d \\text{ and } \\Gamma_s",
      variables: [
        { symbol: "\\mathrm{ELR}", meaning: "environmental lapse rate (sounding)" },
        { symbol: "\\Gamma_d", meaning: "DALR ≈ 9.8 °C/km" },
        { symbol: "\\Gamma_s", meaning: "SALR ≈ 4–7 °C/km (latent heat slows cooling)" }
      ]
    }
  ],
  examPoints: [
    "Name and approximate DALR",
    "SALR < DALR and why",
    "Classify stability from ELR, DALR, SALR"
  ],
  commonMistakes: [
    "Treating ELR as always 6.5 °C/km in stability problems.",
    "Ignoring saturation state of the parcel.",
    "Confusing process rates (DALR/SALR) with the environmental sounding."
  ],
  relatedTopics: ["meteo-static-stability", "meteo-vertical-structure", "meteo-adiabatic-cloud-formation"],
  content: true,
  buildsOn: ["meteo-vertical-structure", "meteo-heat-transfer"],
  leadsTo: ["meteo-static-stability", "meteo-inversion-mechanics"],
  usedIn: ["meteo-static-stability", "meteo-thermodynamic-diagrams", "meteo-lapse-calc"]
},

{
  id: "meteo-inversion-mechanics",
  sectionId: "METEO-02",
  order: 7,
  title: "Temperature Inversions — Mechanics",
  definition: "An inversion is a layer where temperature increases with height — a strongly stable lid. It suppresses vertical mixing, traps pollutants and moisture near the surface, and can cap convection until eroded by daytime heating, frontal passage, or upper-level dynamics. Mechanism (how it forms) and type name (radiation, subsidence, frontal, advective) are related but not identical exam skills.",
  keyFacts: [
    "Temperature increases with height in the layer",
    "Strong static stability — acts as a lid",
    "Surface-based: common on clear nights (radiation)",
    "Elevated: subsidence or frontal",
    "Impacts air quality and minimum temperatures"
  ],
  explanationSections: [
    { heading: "Stable by definition", body: "Any inversion is a stable layer. The mechanics topic explains why it forms; the types topic names radiation, subsidence, frontal, and others." }
  ],
  subtopics: [
    {
      id: "meteo-inversion-mechanics-lid",
      title: "Lid behaviour and air quality",
      summary: "Why smog and smoke linger.",
      explanation: "Parcels displaced upward become cooler than their warmer surroundings in an inversion and sink back. Emissions stay near the breathing level. Daytime heating or stronger winds can erode the inversion and ventilate the boundary layer.",
      examples: [
        { problem: "Why do pollutant concentrations often peak under a night-time surface inversion?", solution: "Vertical mixing is suppressed; emissions accumulate.", answer: "Trapped by stable lid" }
      ],
      shortcuts: ["Inversion = lid", "Erode by heat/wind"],
      traps: ["Thinking inversions enhance mixing"]
    },
    {
      id: "meteo-inversion-mechanics-vs-types",
      title: "Mechanics vs named types",
      summary: "How it works vs how it is classified.",
      explanation: "Use this topic for stability and trapping logic. Use Inversion Types for radiation vs subsidence vs frontal formation paths. Do not memorise two conflicting definitions of 'inversion' — both share temperature increasing with height.",
      examples: [
        { problem: "Clear calm night surface cooling — mechanism that starts a surface inversion?", solution: "Radiative cooling of the ground.", answer: "Radiation / surface IR loss" }
      ],
      shortcuts: ["Mechanics = stability/trapping", "Types = formation path"],
      traps: ["Listing every type without the stability meaning"]
    }
  ],
  examPoints: [
    "Definition: T increases with height",
    "Suppresses mixing",
    "Air-quality link"
  ],
  commonMistakes: [
    "Inversion = unstable.",
    "Ignoring pollutant trapping.",
    "Confusing with isothermal layers only."
  ],
  relatedTopics: ["meteo-inversion-types", "meteo-static-stability", "meteo-fog-types"],
  content: true,
  buildsOn: ["meteo-lapse-rates", "meteo-heat-transfer"],
  leadsTo: ["meteo-inversion-types", "meteo-fog-types"],
  usedIn: ["meteo-inversion-types", "meteo-static-stability"]
},

{
  id: "meteo-inversion-types",
  sectionId: "METEO-02",
  order: 9,
  title: "Inversion Types",
  definition: "Inversions are classified by formation process: radiation, advection, subsidence, and frontal (and others). All share temperature increasing with height; the type name answers how the lid formed.",
  keyFacts: [
    "Radiation: clear-night surface cooling",
    "Advection: warm air over cold surface (or similar)",
    "Subsidence: sinking warms and stabilises aloft",
    "Frontal: warm air overrunning cold air",
    "Mechanics topic = stability; this topic = formation path"
  ],
  explanationSections: [
    { heading: "Stem describes process → pick type", body: "Match the setup, not a random label." }
  ],
  subtopics: [
    {
      id: "meteo-inversion-types-match-skill",
      title: "Process → type matching",
      summary: "Four classic setups.",
      explanation: "Clear calm night → radiation inversion. Warm air moving over cold ground/snow/sea → advection inversion. Large-scale sinking under a high → subsidence inversion aloft. Warm air ascending over a cold front surface → frontal inversion structure.",
      examples: [
        { problem: "Strong high with sinking air and a warm lid aloft — type?", solution: "Subsidence inversion.", answer: "Subsidence" }
      ],
      shortcuts: ["Night calm → radiation", "Sink → subsidence", "Warm over cold → advection/frontal context"],
      traps: ["All inversions are radiation inversions"]
    },
    {
      id: "meteo-inversion-types-vs-mechanics",
      title: "Types vs mechanics division",
      summary: "How formed vs why it traps.",
      explanation: "Use Inversion Mechanics for stability and pollution trapping. Use this topic when the exam asks which process produced the inversion. Both agree that temperature increases with height.",
      examples: [
        { problem: "Question asks why smoke stays near the ground — mechanics or type name first?", solution: "Mechanics (stable lid); type may be radiation at night.", answer: "Mechanics first / radiation if night setup" }
      ],
      shortcuts: ["Mechanics = effects", "Types = origin process"],
      traps: ["Two conflicting definitions of inversion"]
    }
  ],
  examPoints: [
    "Name main types",
    "Match process to type",
    "Link to mechanics topic"
  ],
  commonMistakes: [
    "One type only.",
    "Subsidence at the ground always.",
    "Ignoring frontal inversions."
  ],
  relatedTopics: ["meteo-inversion-mechanics", "meteo-fog-types", "meteo-static-stability"],
  content: true,
  buildsOn: ["meteo-inversion-mechanics"],
  leadsTo: ["meteo-fog-types"],
  usedIn: ["meteo-fog-types", "meteo-static-stability"]
},

{
  id: "meteo-coriolis-effect",
  sectionId: "METEO-02",
  order: 10,
  title: "Coriolis Effect (Force)",
  definition: "The Coriolis effect deflects moving air relative to the rotating Earth — to the right in the Northern Hemisphere and to the left in the Southern Hemisphere. It is zero at the equator and maximum at the poles, and it does not start wind by itself.",
  keyFacts: [
    "NH deflection to the right of motion",
    "SH deflection to the left",
    "f = 2 Ω sin φ → 0 at equator",
    "Acts on moving parcels only — does not create wind from rest",
    "Without Coriolis, large-scale flow would rush more directly from high to low pressure",
    "Surface friction adds cross-isobar spiral; Coriolis still shapes the curved balance"
  ],
  explanationSections: [
    { heading: "Deflection, not a push from high to low", body: "PGF starts motion; Coriolis turns it. Friction adjusts the surface balance so winds spiral into lows and out of highs." }
  ],
  subtopics: [
    {
      id: "meteo-coriolis-effect-direction-skill",
      title: "Direction and latitude skill",
      summary: "NH right, SH left; zero on equator.",
      explanation: "Face the direction of motion: Coriolis deflects right in the NH. Magnitude grows with wind speed and with sin(latitude). On the equator, sin φ = 0, so large-scale geostrophy fails — one reason tropical cyclones do not form there.",
      examples: [
        { problem: "Air moving north in the NH is deflected toward which direction?", solution: "Toward the east (right of northward motion).", answer: "East / right" }
      ],
      shortcuts: ["NH right", "SH left", "Equator f=0"],
      traps: ["Coriolis strongest at equator"]
    },
    {
      id: "meteo-coriolis-effect-vs-friction",
      title: "Coriolis curvature vs friction spiral",
      summary: "Two related but different surface facts.",
      explanation: "If Earth did not rotate, air would accelerate more directly from high toward low pressure. Coriolis deflection is the main reason large-scale flow curves around pressure systems instead. At the surface, friction slows the wind, weakens Coriolis relative to PGF, and produces a cross-isobar component — spiraling out of highs and into lows. Exam stems must be read carefully: 'why not straight high-to-low' points to Coriolis; 'why cross isobars at the surface' points to friction.",
      examples: [
        { problem: "Why does large-scale flow curve around highs instead of rushing straight high→low?", solution: "Coriolis deflection of moving air.", answer: "Coriolis" }
      ],
      shortcuts: ["No rotation → more direct PGF flow", "Surface cross-isobar → friction"],
      traps: ["Blaming friction for all curvature at upper levels"]
    },
    {
      id: "meteo-coriolis-effect-when-skill",
      title: "When it matters",
      summary: "Large-scale, long-lived motions.",
      explanation: "Toilet-bowl drains are not reliable Coriolis demos. Synoptic and planetary flows over hours and hundreds of kilometres feel Coriolis strongly; short-lived local eddies may not.",
      examples: [
        { problem: "Is household drain rotation a trustworthy Coriolis demo?", solution: "No.", answer: "No" }
      ],
      shortcuts: ["Synoptic yes", "Sink drains no"],
      traps: ["Coriolis starts wind from rest"]
    }
  ],
  formula: [
    {
      name: "Coriolis parameter",
      expression: "f = 2\\Omega \\sin\\phi",
      variables: [
        { symbol: "f", meaning: "Coriolis parameter (s⁻¹)" },
        { symbol: "\\Omega", meaning: "Earth rotation rate ≈ 7.29 × 10⁻⁵ rad/s" },
        { symbol: "\\phi", meaning: "latitude (0 at equator → f = 0)" }
      ]
    }
  ],
  examPoints: [
    "NH/SH sense",
    "Latitude dependence",
    "Does not initiate wind",
    "Coriolis vs friction roles"
  ],
  commonMistakes: [
    "Strongest at equator.",
    "Starts wind alone.",
    "Wrong hemisphere sense."
  ],
  relatedTopics: ["meteo-forces-governing-wind", "meteo-geostrophic-wind", "meteo-tropical-cyclones"],
  content: true,
  buildsOn: ["meteo-scales-of-motion"],
  leadsTo: ["meteo-geostrophic-wind", "meteo-forces-governing-wind"],
  usedIn: ["meteo-geostrophic-wind", "meteo-tropical-cyclones"]
},

{
  id: "meteo-static-stability",
  sectionId: "METEO-02",
  order: 8,
  title: "Static Stability of the Atmosphere",
  definition: "Static stability describes whether a displaced air parcel accelerates away from its level, returns, or stays put. Compare the environmental lapse rate (ELR) with the dry adiabatic lapse rate (DALR ≈ 9.8 °C/km) for unsaturated parcels and with the saturated adiabatic lapse rate (SALR, typically ~4–7 °C/km) once saturated. Labels matter only if you can state the weather consequence.",
  keyFacts: [
    "Stable: parcel colder than environment after lift → returns (resists vertical motion)",
    "Unstable: parcel warmer than environment after lift → accelerates upward",
    "Conditionally unstable: stable for dry lift, unstable once saturated (usual pre-storm setup)",
    "Absolute stability: ELR < SALR — even saturated parcels resist deep ascent",
    "Absolute instability: ELR > DALR — strong mixing; rare as a deep layer",
    "Inversions (T increasing with height) are strongly stable lids"
  ],
  explanationSections: [
    { heading: "Parcel decision procedure (exam method)", body: "Lift the parcel dry along the DALR until saturation (LCL), then follow the SALR. At each height: is the parcel warmer or colder than the environmental sounding? Warmer → buoyant ascent; colder → sinks back. Conditional instability means energy is stored until a trigger (heating, frontal or orographic lift) helps parcels reach the LCL/LFC." },
    { heading: "From classification to weather", body: "Stable layers suppress cumulus towers, trap smoke and moisture near the ground, and favour stratiform cloud if moisture is present. Unstable layers favour thermals, gustiness, and convective clouds. Storm forecasting asks whether instability can be released and whether a lid still caps it." }
  ],
  subtopics: [
    {
      id: "meteo-static-stability-weather",
      title: "Weather consequences of stability",
      summary: "What each regime allows or blocks in the real atmosphere.",
      explanation: "Strong stability (including inversions) produces smooth stratified flow, trapped pollution, and suppressed cumulus. Instability supports gusty thermals, deep convective clouds, and turbulence. Conditional instability is the usual pre-storm setup: energy is stored until parcels saturate or a lid is removed.",
      examples: [
        { problem: "Clear night, strong surface inversion — expect deep thunderstorms or trapped haze?", solution: "Trapped haze / suppressed deep mixing until the inversion erodes.", answer: "Trapped haze / suppressed convection" }
      ],
      shortcuts: ["Stable → suppress mixing", "Unstable → thermals & cumulus", "Conditional → fuel with a lid"],
      traps: ["Equating 'unstable' with 'it is raining now' — instability is potential, not a precipitation gauge"]
    },
    {
      id: "meteo-static-stability-vs-lapse",
      title: "How this topic differs from 'Lapse Rates'",
      summary: "Lapse rates name the slopes; stability names the parcel response and impacts.",
      explanation: "Use the Lapse Rates topic for the numbers and the ELR–DALR–SALR decision table. Use Static Stability for exam questions about mixing, inversions as lids, and why the same ELR means different outcomes once saturation changes. Do not memorise two conflicting classification systems — they share one comparison.",
      examples: [
        { problem: "Question asks why smog persists under clear nights — which concept is central?", solution: "Surface stability / inversion suppressing vertical mixing.", answer: "Stable surface layer / inversion" }
      ],
      shortcuts: ["Lapse topic = rates & table", "Stability topic = parcel fate & impacts"],
      traps: ["Rewriting the entire DALR table here instead of applying it"]
    }
  ],
  formula: [
    {
      name: "Stability classification (compare rates)",
      expression: "\\text{ELR}>\\Gamma_d\\Rightarrow\\text{abs. unstable};\\quad \\Gamma_s<\\text{ELR}<\\Gamma_d\\Rightarrow\\text{conditional};\\quad \\text{ELR}<\\Gamma_s\\Rightarrow\\text{abs. stable}",
      variables: [
        { symbol: "\\mathrm{ELR}", meaning: "environmental lapse rate (°C/km)" },
        { symbol: "\\Gamma_d", meaning: "DALR ≈ 9.8 °C/km" },
        { symbol: "\\Gamma_s", meaning: "SALR ≈ 4–7 °C/km" }
      ]
    }
  ],
  examPoints: [
    "Stable vs unstable parcel response",
    "Conditional instability as common storm setup",
    "Link stability to mixing and pollution"
  ],
  commonMistakes: [
    "Treating stability as a different formula system from lapse rates.",
    "Ignoring saturation when saying 'unstable'.",
    "Assuming instability equals ongoing severe weather."
  ],
  relatedTopics: ["meteo-lapse-rates", "meteo-inversion-mechanics", "meteo-thunderstorms"],
  content: true,
  buildsOn: ["meteo-lapse-rates", "meteo-vertical-structure"],
  leadsTo: ["meteo-thunderstorms", "meteo-thermodynamic-diagrams"],
  usedIn: ["meteo-thunderstorms", "meteo-inversion-mechanics", "meteo-lapse-calc"]
},

{
  id: "meteo-gas-law",
  sectionId: "METEO-02",
  order: 5,
  title: "Ideal Gas Law for the Atmosphere",
  definition: "Dry air is treated as an ideal gas: p = ρ R_d T. The law links pressure, density, and temperature and underpins the hypsometric and hydrostatic reasoning used on charts.",
  keyFacts: [
    "p = ρ R_d T with R_d ≈ 287 J kg⁻¹ K⁻¹",
    "At fixed pressure, colder air is denser",
    "Virtual temperature adjusts for moisture in precise work",
    "SI coherence: Pa, kg m⁻³, kelvin",
    "Basis for thickness and density arguments"
  ],
  explanationSections: [
    { heading: "Hold one variable, reason about others", body: "Most MCQs fix pressure or temperature and ask how density changes." }
  ],
  subtopics: [
    {
      id: "meteo-gas-law-density-reason",
      title: "Density reasoning drills",
      summary: "Cold dense, warm light at the same p.",
      explanation: "From p = ρ R T, if p is fixed, ρ varies inversely with T. Cold air masses are denser and often linked to higher surface pressure in simple arguments. Moisture complicates slightly (virtual temperature), but the cold–dense intuition remains the exam workhorse.",
      examples: [
        { problem: "Same pressure, air cooled — density increases or decreases?", solution: "Increases.", answer: "Increases" }
      ],
      shortcuts: ["p fixed → ρ ∝ 1/T", "Cold → dense"],
      traps: ["Using °C in the formula without converting toward kelvin for absolute work"]
    },
    {
      id: "meteo-gas-law-units",
      title: "Units that break answers",
      summary: "Pa not hPa inside the SI form without conversion.",
      explanation: "If R_d is in J kg⁻¹ K⁻¹, pressure must be in Pa (N m⁻²). Using hPa without converting by 100 produces densities off by a factor of 100. Always check unit coherence before computing.",
      examples: [
        { problem: "p given as 1000 hPa for SI density with R_d = 287 — convert how?", solution: "Use 100000 Pa.", answer: "×100 → Pa" }
      ],
      shortcuts: ["hPa × 100 = Pa", "T in kelvin"],
      traps: ["Plugging hPa directly into SI formula"]
    }
  ],
  formula: [
    {
      name: "Ideal gas law (meteorology form)",
      expression: "p = \\rho R T",
      variables: [
        { symbol: "p", meaning: "pressure (Pa)" },
        { symbol: "\\rho", meaning: "density (kg/m³)" },
        { symbol: "R", meaning: "specific gas constant for dry air ≈ 287 J/(kg·K)" },
        { symbol: "T", meaning: "absolute temperature (K)" }
      ]
    }
  ],
  examPoints: [
    "p = ρ R_d T",
    "Cold air denser at fixed p",
    "Unit coherence"
  ],
  commonMistakes: [
    "hPa in SI formula.",
    "Celsius as absolute T.",
    "Ignoring density–temperature link."
  ],
  relatedTopics: ["meteo-hydrostatic-equation", "meteo-pressure-conversion"],
  content: true,
  buildsOn: ["phy-gas-laws", "math-1-7"],
  leadsTo: ["meteo-hydrostatic-equation", "meteo-pressure-conversion"],
  usedIn: ["meteo-hydrostatic-equation", "meteo-pressure-instruments"]
},

{
  id: "meteo-hydrostatic-equation",
  sectionId: "METEO-02",
  order: 6,
  title: "Hydrostatic Equation",
  definition: "In hydrostatic balance, the upward pressure-gradient force on a slab of air equals its weight. Locally, ∂p/∂z = −ρg. Integrated forms give the hypsometric relation between layer thickness and mean temperature.",
  keyFacts: [
    "∂p/∂z = −ρg",
    "Pressure falls faster with height in cold, dense air",
    "Thickness ΔZ larger in warm layers between two pressure surfaces",
    "Excellent approximation for large-scale motion",
    "Breaks down in strong vertical accelerations (deep convection cores)"
  ],
  explanationSections: [
    { heading: "From force balance to thickness", body: "Hydrostatic balance explains why 1000–500 hPa thickness is a warm-air indicator on upper charts." }
  ],
  subtopics: [
    {
      id: "meteo-hydrostatic-equation-thickness",
      title: "Thickness and mean temperature",
      summary: "Warm column → greater thickness between pressure surfaces.",
      explanation: "Between two fixed pressures, a warmer column is taller (larger ΔZ). That is why thickness charts diagnose thermal waves and why height of a pressure surface rises in warm air. Cold troughs have lower heights.",
      examples: [
        { problem: "1000–500 hPa thickness increases — column mean temperature?", solution: "Warmer.", answer: "Warmer" }
      ],
      shortcuts: ["Warm → thick", "Cold → shallow column"],
      traps: ["Thinking surface pressure alone fixes thickness"]
    },
    {
      id: "meteo-hydrostatic-equation-when-not",
      title: "When hydrostatic fails",
      summary: "Strong vertical accelerations.",
      explanation: "In ordinary large-scale weather the vertical acceleration is tiny compared with gravity, so hydrostatic balance holds. Inside intense updrafts or wave breaking, non-hydrostatic effects matter — but for FPSC-scale chart reasoning, hydrostatic is the default.",
      examples: [
        { problem: "Is hydrostatic balance the usual assumption on 500 hPa analyses?", solution: "Yes.", answer: "Yes" }
      ],
      shortcuts: ["Large-scale → hydrostatic OK", "Violent updrafts → caution"],
      traps: ["Saying pressure does not change with height"]
    }
  ],
  formula: [
    {
      name: "Hydrostatic balance",
      expression: "\\frac{\\partial p}{\\partial z} = -\\rho g",
      variables: [
        { symbol: "p", meaning: "pressure (Pa)" },
        { symbol: "z", meaning: "height (m)" },
        { symbol: "\\rho", meaning: "density (kg/m³)" },
        { symbol: "g", meaning: "gravitational acceleration (m/s²)" }
      ]
    }
  ],
  examPoints: [
    "Write ∂p/∂z = −ρg",
    "Thickness–temperature link",
    "Large-scale validity"
  ],
  commonMistakes: [
    "No link to thickness charts.",
    "Sign error in dp/dz.",
    "Rejecting hydrostatic for all weather."
  ],
  relatedTopics: ["meteo-gas-law", "meteo-upper-air-charts", "meteo-pressure-conversion"],
  content: true,
  buildsOn: ["meteo-gas-law"],
  leadsTo: ["meteo-upper-air-charts", "meteo-pressure-conversion"],
  usedIn: ["meteo-upper-air-charts", "meteo-geostrophic-qual"]
},

// ============================= SECTION C =============================

{
  id: "meteo-forces-governing-wind",
  sectionId: "METEO-03",
  order: 1,
  title: "Forces Governing Wind Formation",
  definition: "Horizontal wind arises from the balance and imbalance of the pressure-gradient force, Coriolis force, friction, and (on curved paths) centripetal requirements. Start with PGF; then add Coriolis and friction for surface flow.",
  keyFacts: [
    "PGF: high → low pressure, perpendicular to isobars",
    "Coriolis: deflects moving air (right in NH, left in SH); cannot start wind by itself",
    "Friction: slows wind; allows cross-isobar flow toward low at the surface",
    "Geostrophic: PGF balances Coriolis (frictionless, straight)",
    "Gradient: adds curvature"
  ],
  explanationSections: [
    { heading: "Build the balances in order", body: "PGF starts acceleration toward low. Coriolis turns the flow. Friction slows and tilts the balance inward at the surface." }
  ],
  subtopics: [
    {
      id: "meteo-forces-governing-wind-surface-vs-upper",
      title: "Surface vs upper-air force balance",
      summary: "Friction makes surface winds cross isobars.",
      explanation: "Aloft, near-geostrophic or gradient flow runs nearly parallel to isobars/height contours. In the friction layer, slower wind means weaker Coriolis, so PGF wins a cross-isobar component toward low pressure — the reason surface winds spiral into lows.",
      examples: [
        { problem: "Why do surface winds blow somewhat across isobars into a low?", solution: "Friction reduces speed → Coriolis weakens → net component toward low.", answer: "Friction / ageostrophic inflow" }
      ],
      shortcuts: ["Upper ≈ parallel", "Surface → cross toward low"],
      traps: ["Drawing surface winds purely parallel to isobars"]
    },
    {
      id: "meteo-forces-governing-wind-pgf-first",
      title: "PGF is the starter",
      summary: "No pressure difference, no large-scale wind engine.",
      explanation: "Coriolis acts only on air already moving. A map with no pressure gradient has no large-scale PGF-driven wind. Tight isobars mean strong PGF and, in balance, strong winds.",
      examples: [
        { problem: "Can Coriolis create wind in still air over a flat pressure field?", solution: "No — nothing to deflect.", answer: "No" }
      ],
      shortcuts: ["PGF starts", "Coriolis deflects", "Tight isobars → strong PGF"],
      traps: ["Coriolis as a force that pushes air from rest toward low"]
    }
  ],
  formula: [
    {
      name: "Pressure-gradient force (magnitude idea)",
      expression: "\\mathrm{PGF} \\propto \\frac{\\Delta p}{\\Delta n}",
      variables: [
        { symbol: "\\Delta p/\\Delta n", meaning: "pressure change over distance normal to isobars (tight packing → strong PGF)" }
      ]
    }
  ],
  examPoints: [
    "Role of each force",
    "Surface cross-isobar flow",
    "PGF direction"
  ],
  commonMistakes: [
    "Coriolis starts wind.",
    "No friction difference surface vs upper.",
    "PGF along isobars."
  ],
  relatedTopics: ["meteo-geostrophic-wind", "meteo-coriolis-effect", "meteo-gradient-wind"],
  content: true,
  buildsOn: ["meteo-coriolis-effect", "meteo-gas-law"],
  leadsTo: ["meteo-geostrophic-wind", "meteo-gradient-wind"],
  usedIn: ["meteo-geostrophic-wind", "meteo-isobar-analysis"]
},

{
  id: "meteo-geostrophic-wind",
  sectionId: "METEO-03",
  order: 2,
  title: "Geostrophic Wind",
  definition: "Geostrophic wind is the horizontal wind when the pressure-gradient force exactly balances the Coriolis force. Flow is parallel to straight isobars, with speed proportional to isobar packing. It is the baseline approximation above the friction layer; near the ground, friction turns the wind across isobars toward low pressure. Gradient-wind corrections apply on curved paths (subgeostrophic in cyclones, supergeostrophic in anticyclones).",
  keyFacts: [
    "Balance: PGF + Coriolis = 0 (no friction, no acceleration)",
    "Wind parallel to isobars / height contours",
    "Northern Hemisphere: low pressure to the left of the motion",
    "Tighter isobars → stronger geostrophic wind",
    "Breaks down near the surface (friction) and in strongly curved flow (gradient wind)"
  ],
  explanationSections: [
    { heading: "Ideal balance", body: "Geostrophy is the leading-order balance for large-scale mid-latitude flow aloft. Real surface winds cross isobars toward low pressure because friction slows the wind and weakens Coriolis." }
  ],
  subtopics: [
    {
      id: "meteo-geostrophic-wind-buys-ballot",
      title: "Direction rule (Buys-Ballot)",
      summary: "NH: back to wind, low on the left.",
      explanation: "In the Northern Hemisphere, if you stand with the wind at your back, lower pressure lies to the left (approximately). That encodes geostrophic sense: PGF toward low, Coriolis to the right, balance along the isobar.",
      examples: [
        { problem: "NH geostrophic wind from west to east. Where is lower pressure?", solution: "Toward the north (left of motion).", answer: "North / left of track" }
      ],
      shortcuts: ["NH low to the left", "SH low to the right"],
      traps: ["Applying NH rule in the Southern Hemisphere unchanged"]
    },
    {
      id: "meteo-geostrophic-wind-limits",
      title: "When not to use pure geostrophy",
      summary: "Friction layer, strong curvature, equator.",
      explanation: "Within the friction layer, winds ageostrophically cross toward low pressure. Around tight highs and lows, gradient-wind corrections matter (subgeostrophic cyclonic, supergeostrophic anticyclonic). Near the equator Coriolis is too weak for geostrophic balance.",
      examples: [
        { problem: "Surface wind over rough land crosses isobars toward the low — pure geostrophy?", solution: "No — friction produces cross-isobar flow.", answer: "No — frictional ageostrophy" }
      ],
      shortcuts: ["Friction → cross-isobar", "Curvature → gradient wind", "Equator → no geostrophy"],
      traps: ["Drawing surface winds parallel to isobars with no cross component"]
    }
  ],
  formula: [
    {
      name: "Geostrophic balance (magnitude)",
      expression: "V_g = \\frac{1}{f\\rho}\\,\\frac{\\partial p}{\\partial n}",
      variables: [
        { symbol: "V_g", meaning: "geostrophic wind speed (m/s)" },
        { symbol: "f", meaning: "Coriolis parameter (s⁻¹)" },
        { symbol: "\\rho", meaning: "density (kg/m³)" },
        { symbol: "\\partial p/\\partial n", meaning: "pressure gradient normal to the flow (Pa/m)" }
      ]
    }
  ],
  examPoints: [
    "Define geostrophic balance",
    "Parallel flow and NH sense",
    "Limits: friction, curvature, equator"
  ],
  commonMistakes: [
    "Using geostrophy at the surface without friction.",
    "Wrong hemisphere sense.",
    "Ignoring isobar spacing for speed."
  ],
  relatedTopics: ["meteo-forces-governing-wind", "meteo-gradient-wind", "meteo-isobar-analysis"],
  content: true,
  buildsOn: ["meteo-forces-governing-wind", "meteo-coriolis-effect"],
  leadsTo: ["meteo-gradient-wind", "meteo-geostrophic-qual"],
  usedIn: ["meteo-upper-air-charts", "meteo-isobar-analysis"]
},

{
  id: "meteo-gradient-wind",
  sectionId: "METEO-03",
  order: 3,
  title: "Gradient Wind",
  definition: "Gradient wind balances pressure-gradient force, Coriolis force, and centripetal requirement on curved paths. Compared with pure geostrophy at the same gradient, cyclonic flow is subgeostrophic and anticyclonic flow is supergeostrophic.",
  keyFacts: [
    "Adds curvature to geostrophic balance",
    "Around lows (cyclonic): wind slower than geostrophic (subgeostrophic)",
    "Around highs (anticyclonic): wind faster than geostrophic (supergeostrophic)",
    "Still frictionless idealisation — upper-level teaching model",
    "Tight curvature makes the correction more important"
  ],
  explanationSections: [
    { heading: "Geostrophy first, curvature second", body: "If isobars are nearly straight, geostrophic is enough. If they loop tightly, use gradient-wind thinking." }
  ],
  subtopics: [
    {
      id: "meteo-gradient-wind-sub-super",
      title: "Sub- vs supergeostrophic memory rule",
      summary: "Low → slower; high → faster than geostrophic.",
      explanation: "Around a low, part of the inward PGF supplies centripetal acceleration, so less is left to balance Coriolis — wind is weaker than geostrophic. Around a high, geometry reverses and balanced wind is stronger than geostrophic for the same spacing. This is a favourite MCQ distinction.",
      examples: [
        { problem: "Same |∇p|, curved cyclonic flow vs straight geostrophic — which wind is weaker?", solution: "Cyclonic gradient wind is weaker (subgeostrophic).", answer: "Cyclonic / subgeostrophic" }
      ],
      shortcuts: ["Cyclonic = sub", "Anticyclonic = super"],
      traps: ["Reversing the rule"]
    },
    {
      id: "meteo-gradient-wind-when",
      title: "When to prefer gradient over geostrophic",
      summary: "Tight ridges/troughs and curved jet segments.",
      explanation: "Near sharp upper troughs and ridges, curvature is large and ageostrophic adjustments matter for divergence and ascent. For broad, nearly straight jets, geostrophic estimates from contour spacing remain useful.",
      examples: [
        { problem: "Nearly straight 500 hPa contours with steady spacing — geostrophic enough?", solution: "Yes for a first estimate.", answer: "Yes" }
      ],
      shortcuts: ["Tight curves → gradient", "Straight → geostrophic OK"],
      traps: ["Using gradient-wind rules inside the friction layer without care"]
    }
  ],
  formula: [
    {
      name: "Gradient vs geostrophic (curved flow)",
      expression: "\\text{cyclonic: } V < V_g \\quad \\text{anticyclonic: } V > V_g",
      variables: [
        { symbol: "V", meaning: "gradient-wind speed on a curved path" },
        { symbol: "V_g", meaning: "geostrophic speed for the same pressure gradient" }
      ]
    }
  ],
  examPoints: [
    "Cyclonic subgeostrophic",
    "Anticyclonic supergeostrophic",
    "Relation to geostrophy"
  ],
  commonMistakes: [
    "Swapping sub and super.",
    "Applying at the surface with strong friction.",
    "Ignoring curvature entirely."
  ],
  relatedTopics: ["meteo-geostrophic-wind", "meteo-jet-stream", "meteo-upper-air-charts"],
  content: true,
  buildsOn: ["meteo-geostrophic-wind", "meteo-forces-governing-wind"],
  leadsTo: ["meteo-jet-stream", "meteo-upper-air-charts"],
  usedIn: ["meteo-upper-air-charts", "meteo-geostrophic-qual"]
},

{
  id: "meteo-jet-stream",
  sectionId: "METEO-03",
  order: 4,
  title: "Jet Stream Dynamics",
  definition: "Jet streams are narrow, fast upper-level wind cores near tropopause breaks. Their speed is the upper-level expression of the thermal-wind relation: strong horizontal temperature gradients produce strong vertical shear, so the polar jet sits above the main mid-latitude baroclinic zone. The polar jet steers mid-latitude systems; the subtropical jet marks the poleward edge of the Hadley cell. Meanders (Rossby waves) couple upper flow to surface cyclones and anticyclones.",
  keyFacts: [
    "Polar jet: mid-latitudes; stronger in winter when the pole-to-equator temperature contrast peaks",
    "Subtropical jet: ~30° on the poleward edge of the Hadley cell",
    "Cores often near 200–300 hPa (upper troposphere / tropopause)",
    "Thermal wind: tighter horizontal temperature gradient → stronger upper westerlies",
    "Jet streaks: entrance/exit regions favour organised ascent or descent — link to surface development",
    "Winter interaction with South Asian topography affects western disturbances and regional storms"
  ],
  explanationSections: [
    { heading: "Find the jet on upper charts", body: "Tight 300 hPa contours and strong winds mark the core." }
  ],
  subtopics: [
    {
      id: "meteo-jet-stream-two-jets",
      title: "Polar vs subtropical jet",
      summary: "Different latitude and role.",
      explanation: "The polar jet is tied to the strong mid-latitude temperature gradient and storm track. The subtropical jet aligns with the upper branch of the Hadley circulation. Both can appear on the same hemisphere map in winter.",
      examples: [
        { problem: "Jet on the poleward edge of the Hadley cell — polar or subtropical?", solution: "Subtropical jet.", answer: "Subtropical" }
      ],
      shortcuts: ["Polar ↔ storm track", "Subtropical ↔ Hadley edge"],
      traps: ["Only one jet exists on Earth"]
    },
    {
      id: "meteo-jet-stream-weather-skill",
      title: "Jet and surface weather",
      summary: "Steering + jet-streak ascent.",
      explanation: "Surface cyclones often move with the mid-latitude jet pattern. Jet-streak entrance/exit circulations can enhance ascent in preferred quadrants — a conceptual model used in advanced forecasting. For FPSC, link strong jet to active mid-latitude weather and western-disturbance guidance.",
      examples: [
        { problem: "Why do forecasters inspect 300 hPa winds when tracking winter storms?", solution: "Jet pattern steers and organises development.", answer: "Steering / organisation" }
      ],
      shortcuts: ["Jet steers", "Tight upper contours → jet"],
      traps: ["Jet only a surface wind feature"]
    }
  ],
  formula: [
    {
      name: "Thermal-wind idea (qualitative)",
      expression: "\\text{stronger horizontal } \\nabla T \\Rightarrow \\text{stronger upper-level } V",
      variables: [
        { symbol: "\\nabla T", meaning: "horizontal temperature gradient (baroclinic zone)" },
        { symbol: "V", meaning: "upper-level wind speed (jet core above strongest baroclinicity)" }
      ]
    }
  ],
  examPoints: [
    "Polar vs subtropical",
    "Upper-level location",
    "Steering role"
  ],
  commonMistakes: [
    "Jet at the surface.",
    "Single jet only.",
    "No weather link."
  ],
  relatedTopics: ["meteo-rossby-waves", "meteo-global-circulation", "meteo-western-disturbances"],
  content: true,
  buildsOn: ["meteo-global-circulation", "meteo-hydrostatic-equation"],
  leadsTo: ["meteo-rossby-waves", "meteo-cyclones-development"],
  usedIn: ["meteo-western-disturbances", "meteo-cyclones-development"]
},

{
  id: "meteo-local-seasonal-winds",
  sectionId: "METEO-03",
  order: 5,
  title: "Local & Seasonal Wind Systems",
  definition: "Local winds respond to diurnal heating and terrain; seasonal regional winds respond to larger land–sea or pressure contrasts. Sea/land breezes, mountain/valley winds, foehn/chinook, and named regional winds are the core set.",
  keyFacts: [
    "Sea breeze: day, onshore; land breeze: night, offshore",
    "Valley wind upslope by day; mountain wind downslope by night",
    "Foehn/chinook: warm dry lee-side descent after moisture loss windward",
    "Monsoon is seasonal regional — covered in its own topics",
    "Scale is mesoscale to regional — not synoptic cyclones"
  ],
  explanationSections: [
    { heading: "Diurnal vs seasonal", body: "If the stem mentions afternoon coastlines, think sea breeze. If it mentions winter lee warming, think foehn." }
  ],
  subtopics: [
    {
      id: "meteo-local-seasonal-winds-breeze-pair",
      title: "Sea/land and mountain/valley pairs",
      summary: "Day up/onshore; night down/offshore.",
      explanation: "By day, land heats faster than water so pressure falls over land and a sea breeze flows onshore. By night the reverse land breeze can occur. Along slopes, daytime heating drives upslope valley winds; night-time cooling drives downslope mountain winds. Timing is the exam key.",
      examples: [
        { problem: "Afternoon onshore wind at a sunny coast — name?", solution: "Sea breeze.", answer: "Sea breeze" }
      ],
      shortcuts: ["Day: sea breeze / upslope", "Night: land breeze / downslope"],
      traps: ["Sea breeze at midnight as the default"]
    },
    {
      id: "meteo-local-seasonal-winds-foehn-skill",
      title: "Foehn/chinook diagnosis",
      summary: "Windward rain, lee warm dry.",
      explanation: "Moist air rises and precipitates on the windward side; descending lee air warms at the dry adiabatic rate and arrives warmer and drier. A sharp temperature jump with drying and gusty downslope flow is the classic signature.",
      examples: [
        { problem: "Leeward station warms and dries rapidly as downslope winds arrive after windward rain — process?", solution: "Foehn/chinook-type warming.", answer: "Foehn / chinook" }
      ],
      shortcuts: ["Windward wet", "Lee warm dry"],
      traps: ["Lee cooling as the expected foehn outcome"]
    }
  ],
  examPoints: [
    "Sea/land breeze timing",
    "Mountain/valley winds",
    "Foehn mechanism"
  ],
  commonMistakes: [
    "Wrong time of day for breezes.",
    "Foehn = cold wet lee.",
    "Calling local breezes synoptic cyclones."
  ],
  relatedTopics: ["meteo-orographic-rainshadow", "meteo-monsoon-system", "meteo-heat-transfer"],
  content: true,
  buildsOn: ["meteo-heat-transfer", "meteo-forces-governing-wind"],
  leadsTo: ["meteo-orographic-rainshadow", "meteo-monsoon-system"],
  usedIn: ["meteo-orographic-rainshadow"]
},

{
  id: "meteo-monsoon-system",
  sectionId: "METEO-03",
  order: 6,
  title: "The Monsoon Wind System",
  definition: "A monsoon is a seasonal reversal of large-scale winds driven by differential heating of land and ocean, bringing distinct wet and dry seasons. The South Asian monsoon is the archetype: summer heat low over land draws moist maritime air inland; condensation heating reinforces the overturning. Winter brings cooler, drier offshore flow. Pakistan sits on the northwest fringe — only parts of the country receive reliable summer totals; western disturbances dominate much of the winter precipitation signal.",
  keyFacts: [
    "Seasonal wind reversal — not just 'heavy rain'",
    "Summer: land heats → thermal low → moist onshore flow",
    "Winter: land cools → stronger high → dry offshore flow over much of the region",
    "Latent heat in deep convection feeds back into the circulation",
    "Pakistan lies on the northwestern fringe of the South Asian monsoon domain"
  ],
  explanationSections: [
    { heading: "More than a rain switch", body: "Monsoon rainfall is organised in active and break spells and interacts with topography. Treating monsoon as a single continuous faucet is wrong for both India and Pakistan." }
  ],
  subtopics: [
    {
      id: "meteo-monsoon-system-drivers",
      title: "Land–sea heating and feedback",
      summary: "Thermal contrast starts the flow; convection strengthens it.",
      explanation: "Summer heating of the Asian landmass deepens the monsoon trough and draws ocean air inland. Condensation heating in towering clouds then intensifies the overturning. Winter reverses the thermal contrast and much of the flow becomes offshore and drier over the subcontinent.",
      examples: [
        { problem: "Does latent heat release weaken the summer monsoon circulation?", solution: "No — it generally strengthens the large-scale overturning.", answer: "No — it strengthens" }
      ],
      shortcuts: ["Land-sea contrast → seasonal winds", "Convection heats → feedback"],
      traps: ["Defining monsoon only as 'lots of rain' without wind reversal"]
    },
    {
      id: "meteo-monsoon-system-pakistan-fringe",
      title: "Pakistan on the fringe",
      summary: "Uneven rains; not identical to core Indian monsoon.",
      explanation: "Only parts of Pakistan receive reliable summer monsoon totals; many districts stay arid or semi-arid. Year-to-year variability is large, and winter western disturbances are a separate moisture engine. Exam answers should not claim uniform national monsoon flooding every year.",
      examples: [
        { problem: "Why is 'whole Pakistan is a wet tropical monsoon climate' false?", solution: "Large arid/semi-arid areas and fringe location; uneven monsoon penetration.", answer: "Fringe + aridity" }
      ],
      shortcuts: ["Fringe ≠ core monsoon", "WD ≠ monsoon"],
      traps: ["One national climate label for all provinces"]
    }
  ],
  examPoints: [
    "Seasonal wind reversal definition",
    "Summer vs winter pressure patterns",
    "Pakistan fringe caveat"
  ],
  commonMistakes: [
    "Monsoon = rain only.",
    "Uniform rainfall nationwide.",
    "Ignoring latent-heat feedback."
  ],
  relatedTopics: ["meteo-global-circulation", "meteo-indian-ocean-monsoon", "meteo-local-seasonal-winds"],
  content: true,
  buildsOn: ["meteo-global-circulation", "meteo-heat-transfer"],
  leadsTo: ["meteo-indian-ocean-monsoon", "meteo-iod"],
  usedIn: ["meteo-indian-ocean-monsoon", "meteo-temp-rainfall-distribution"]
},

{
  id: "meteo-global-circulation",
  sectionId: "METEO-03",
  order: 7,
  title: "Global Atmospheric Circulation (Three-Cell Model)",
  definition: "The three-cell model divides each hemisphere into Hadley, Ferrel, and polar cells. It is a teaching idealisation that links equatorial heating, subtropical deserts, mid-latitude westerlies, and polar easterlies — real flow also includes waves, monsoons, and seasonal shifts.",
  keyFacts: [
    "Hadley: rise near equator, sink near 30° — trade winds at surface",
    "Ferrel: mid-latitudes — thermally indirect; surface westerlies",
    "Polar: sink near pole, surface polar easterlies; polar front near ~60°",
    "Subtropical highs sit under the Hadley sinking branch",
    "ITCZ marks the rising equatorial branch (seasonally mobile)"
  ],
  explanationSections: [
    { heading: "Idealisation with a purpose", body: "Use the cells to organise deserts, ITCZ rain, and storm tracks. Do not expect perfect closed loops every day on a weather map." }
  ],
  subtopics: [
    {
      id: "meteo-global-circulation-exam-map",
      title: "What each cell explains on a world map",
      summary: "Deserts, trades, westerlies — attach features to cells.",
      explanation: "Hadley sinking → subtropical desert belts and trade-wind oceans. Equatorial rising → ITCZ convection. Ferrel belt → mid-latitude westerlies and migrating cyclones. Polar cell → cold polar easterlies and the polar front zone near 60°. Exam maps test these attachments.",
      examples: [
        { problem: "Why are many deserts near 30° latitude in the three-cell picture?", solution: "Hadley sinking branch dries the column under subtropical highs.", answer: "Hadley subsidence / subtropical high" }
      ],
      shortcuts: ["30° sink → dry", "Equator rise → wet", "Mid-lat west winds → Ferrel"],
      traps: ["Treating cells as rigid walls that storms cannot cross"]
    },
    {
      id: "meteo-global-circulation-ferrel-indirect",
      title: "Why the Ferrel cell is 'indirect'",
      summary: "Not a simple tropical-style heat engine.",
      explanation: "The Hadley cell is thermally direct: heat drives ascent at low latitudes. The Ferrel cell’s mean overturning is maintained largely by eddies (waves and storms) rather than by heating at 60° and cooling at 30°. Calling Ferrel a second Hadley is a common error.",
      examples: [
        { problem: "Is the Ferrel cell thermally direct like Hadley?", solution: "No — it is described as thermally indirect in the classical model.", answer: "No — indirect" }
      ],
      shortcuts: ["Hadley direct", "Ferrel indirect / eddy-driven"],
      traps: ["Drawing Ferrel with tropical-style heating at 60° as the sole driver"]
    }
  ],
  examPoints: [
    "Three cells and surface winds",
    "Subtropical dry / ITCZ wet",
    "Ferrel is indirect"
  ],
  commonMistakes: [
    "Ferrel = second Hadley.",
    "Ignoring seasonal ITCZ shift.",
    "Expecting perfect cells on daily charts."
  ],
  relatedTopics: ["meteo-monsoon-system", "meteo-jet-stream", "meteo-global-precip-patterns"],
  content: true,
  buildsOn: ["meteo-coriolis-effect", "meteo-heat-transfer"],
  leadsTo: ["meteo-jet-stream", "meteo-rossby-waves", "meteo-monsoon-system"],
  usedIn: ["meteo-global-precip-patterns", "meteo-koppen-system"]
},

{
  id: "meteo-rossby-waves",
  sectionId: "METEO-03",
  order: 8,
  title: "Rossby Waves (Planetary Waves)",
  definition: "Rossby waves are large-scale meanders of the mid-latitude westerly flow arising from the conservation of potential vorticity and the variation of Coriolis with latitude. They organise troughs and ridges that steer weather systems.",
  keyFacts: [
    "Planetary-scale waves in the westerlies",
    "Troughs and ridges alternate downstream",
    "Steering influence on surface cyclones",
    "Linked to jet-stream meanders",
    "Longer waves move more slowly"
  ],
  explanationSections: [
    { heading: "Waves, not random wiggles", body: "A 500 hPa chart with a sequence of troughs and ridges is the practical face of Rossby-wave flow." }
  ],
  subtopics: [
    {
      id: "meteo-rossby-waves-steering",
      title: "Steering and surface weather",
      summary: "Downstream of upper troughs, surface lows often deepen.",
      explanation: "Upper-level troughs favour divergence and ascent ahead of the trough axis in standard conceptual models, supporting surface cyclogenesis. Ridges favour more settled weather. Matching surface storm tracks to the upper wave pattern is the applied skill.",
      examples: [
        { problem: "Surface cyclone under a building upper ridge — favoured to deepen or weaken?", solution: "More often weaken / less favourable than under a trough-exit pattern.", answer: "Weaken / less favoured" }
      ],
      shortcuts: ["Trough aloft ↔ active weather risk", "Ridge aloft ↔ quieter"],
      traps: ["Ignoring upper pattern when forecasting surface lows"]
    },
    {
      id: "meteo-rossby-waves-scale",
      title: "Planetary scale identity",
      summary: "Not a sea breeze or a tornado.",
      explanation: "Rossby waves span thousands of kilometres and evolve over days. They are the macroscale backbone on which synoptic cyclones ride. Confusing them with mesoscale waves or local winds misses the point of the topic.",
      examples: [
        { problem: "Is a Rossby wave a mesoscale thunderstorm feature?", solution: "No — planetary/synoptic–global scale.", answer: "No" }
      ],
      shortcuts: ["Planetary meander", "Jet stream partner"],
      traps: ["Rossby wave = local mountain wave only"]
    }
  ],
  examPoints: [
    "Planetary waves in westerlies",
    "Trough/ridge steering",
    "Scale distinction"
  ],
  commonMistakes: [
    "Wrong scale.",
    "No link to surface cyclones.",
    "Confusing with ocean Rossby waves only."
  ],
  relatedTopics: ["meteo-jet-stream", "meteo-global-circulation", "meteo-cyclones-development"],
  content: true,
  buildsOn: ["meteo-global-circulation", "meteo-coriolis-effect"],
  leadsTo: ["meteo-cyclones-development", "meteo-jet-stream"],
  usedIn: ["meteo-cyclones-development", "meteo-western-disturbances"]
},

{
  id: "meteo-upper-air-charts",
  sectionId: "METEO-03",
  order: 9,
  title: "Upper-Air Charts & Constant-Pressure Analysis",
  definition: "Upper-air charts display the height of a constant-pressure surface (e.g. 500 hPa) or variables on that surface. Height contours play a role analogous to isobars: packing and curvature relate to wind through near-geostrophic or gradient balance.",
  keyFacts: [
    "Constant-pressure surface: plot height (metres/dam) of that pressure",
    "Low heights ↔ cooler columns (hypsometric intuition)",
    "Tight height gradients ↔ stronger winds",
    "500 hPa is a standard mid-tropospheric steering chart",
    "Troughs and ridges organise surface storm tracks"
  ],
  explanationSections: [
    { heading: "Heights, not surface pressure", body: "A 500 hPa 'low' is a height minimum of the 500 hPa surface — related to, but not identical to, a surface low's label." }
  ],
  subtopics: [
    {
      id: "meteo-upper-air-charts-read",
      title: "Reading height contours",
      summary: "Packing → speed; trough/ridge → wave pattern.",
      explanation: "Closely packed contours mean strong winds (jet segments). A trough is a height minimum axis; a ridge is a maximum axis. Downstream of troughs, divergence aloft often supports surface cyclogenesis — linking upper charts to surface development.",
      examples: [
        { problem: "500 hPa chart shows very tight contours — expect weak or strong winds?", solution: "Strong winds.", answer: "Strong" }
      ],
      shortcuts: ["Tight contours → fast", "Trough = low heights axis"],
      traps: ["Reading height contours as surface isobars without care"]
    },
    {
      id: "meteo-upper-air-charts-levels",
      title: "Why 850 / 500 / 300 differ",
      summary: "Different jobs by level.",
      explanation: "850 hPa is often used for lower-tropospheric temperature advection and moisture. 500 hPa shows mid-level steering and waves. 300–200 hPa highlights the jet stream. Pick the level that matches the question’s physical focus.",
      examples: [
        { problem: "Which standard chart is most associated with the polar jet core?", solution: "Upper levels such as 300 hPa (near tropopause jet).", answer: "300 hPa / upper jet level" }
      ],
      shortcuts: ["850 thermal/moisture", "500 waves/steering", "300 jet"],
      traps: ["Using only surface charts for jet-stream questions"]
    }
  ],
  examPoints: [
    "Constant-pressure height charts",
    "Contour packing and wind",
    "Level selection"
  ],
  commonMistakes: [
    "Confusing height lows with surface pressure mechanically.",
    "Ignoring packing for wind speed.",
    "Wrong level for jet questions."
  ],
  relatedTopics: ["meteo-geostrophic-wind", "meteo-jet-stream", "meteo-hydrostatic-equation"],
  content: true,
  buildsOn: ["meteo-geostrophic-wind", "meteo-hydrostatic-equation"],
  leadsTo: ["meteo-cyclones-development", "meteo-forecasting-methods"],
  usedIn: ["meteo-cyclones-development", "meteo-western-disturbances"]
},

// ============================= SECTION D =============================

{
  id: "meteo-moisture-metrics",
  sectionId: "METEO-04",
  order: 1,
  title: "Atmospheric Moisture Metrics",
  definition: "Water vapour is measured with several related quantities. Relative humidity compares actual vapour to saturation at the same temperature; dew point and mixing ratio track how much vapour is present more directly. Choosing the right metric avoids the classic trap that 'high RH means lots of moisture'.",
  keyFacts: [
    "RH = (e / e_s) × 100% — depends on both vapour content and temperature",
    "Dew point (Td): temperature to which air must cool at constant pressure to saturate",
    "Mixing ratio w: mass of vapour per mass of dry air — conservative without condensation",
    "Warm air can hold more vapour (higher e_s) than cold air",
    "Fog and cloud bases relate closely to dew-point depression"
  ],
  explanationSections: [
    { heading: "Pick the metric for the question", body: "If the question is about closeness to saturation, RH or dew-point depression fits. If it is about actual moisture amount or air-mass comparison, prefer dew point or mixing ratio." }
  ],
  subtopics: [
    {
      id: "meteo-moisture-metrics-which-metric",
      title: "Which metric answers which question",
      summary: "Exam decision guide — RH vs Td vs mixing ratio.",
      explanation: "RH rises when air cools even if vapour amount is fixed — so morning high RH need not mean a humid air mass. Dew point is the better single number for 'how moist is this air.' Mixing ratio is preferred in process calculations because it changes mainly when water is added or removed.",
      examples: [
        { problem: "Same vapour pressure, temperature rises. What happens to RH?", solution: "e_s rises, so RH falls even though vapour amount is unchanged.", answer: "RH decreases" }
      ],
      shortcuts: ["RH ≠ absolute moisture", "Td ↑ → more actual vapour (usual reading)", "w for process math"],
      traps: ["Assuming 90% RH in cold air holds more water than 50% RH in warm tropical air"]
    },
    {
      id: "meteo-moisture-metrics-depression",
      title: "Dew-point depression and cloud base",
      summary: "T − Td links to how much lifting is needed to saturate.",
      explanation: "A small dew-point depression means the air is close to saturation and cloud bases can be low. A large spread means dry air aloft or at the surface and higher cloud bases for surface-based convection. Pilots and synoptic analysts use this constantly.",
      examples: [
        { problem: "Surface T = 30 °C, Td = 28 °C vs T = 30 °C, Td = 5 °C — which supports lower convective cloud bases?", solution: "The 30/28 case — much smaller depression.", answer: "30 °C / 28 °C" }
      ],
      shortcuts: ["Small T−Td → near saturation", "Large spread → dry"],
      traps: ["Reading only temperature and ignoring dew point on a station model"]
    }
  ],
  formula: [
    {
      name: "Relative humidity",
      expression: "\\mathrm{RH} = \\frac{e}{e_s} \\times 100\\%",
      variables: [
        { symbol: "e", meaning: "actual vapour pressure" },
        { symbol: "e_s", meaning: "saturation vapour pressure at the same temperature" },
        { symbol: "\\mathrm{RH}", meaning: "relative humidity (%)" }
      ]
    }
  ],
  examPoints: [
    "Define RH, dew point, mixing ratio",
    "RH depends on temperature",
    "Choose metric appropriately"
  ],
  commonMistakes: [
    "Treating RH as absolute moisture.",
    "Ignoring temperature when comparing RH values.",
    "Confusing dew point with wet-bulb without care."
  ],
  relatedTopics: ["meteo-adiabatic-cloud-formation", "meteo-humidity-calc", "meteo-fog-types"],
  content: true,
  buildsOn: ["meteo-gas-law", "phy-thermodynamics-laws", "math-1-7"],
  leadsTo: ["meteo-adiabatic-cloud-formation", "meteo-humidity-calc"],
  usedIn: ["meteo-adiabatic-cloud-formation", "meteo-humidity-calc", "meteo-fog-types"]
},

{
  id: "meteo-adiabatic-cloud-formation",
  sectionId: "METEO-04",
  order: 2,
  title: "Adiabatic Processes & Cloud Formation",
  definition: "Clouds form when moist air is cooled to saturation, most often by ascent. An unsaturated parcel cools at the DALR until it reaches the lifting condensation level (LCL); further ascent follows a moist (saturated) process and can grow cloud.",
  keyFacts: [
    "Ascent → expansion → cooling; descent → compression → warming",
    "LCL: level where rising unsaturated air first saturates",
    "Below LCL: dry adiabatic; above LCL in cloud: saturated adiabatic",
    "Forced ascent: orographic, frontal, convergent; free ascent: buoyancy"
  ],
  explanationSections: [
    { heading: "Path to cloud base", body: "Surface heating, hills, fronts, and low-level convergence all lift air. The LCL is the first cloud-base estimate for surface-based parcels when dew-point depression is known qualitatively." }
  ],
  subtopics: [
    {
      id: "meteo-adiabatic-cloud-formation-lcl-skill",
      title: "Finding and using the LCL",
      summary: "Dry adiabat from T meets mixing-ratio line from Td.",
      explanation: "On a thermodynamic diagram, follow a dry adiabat up from surface temperature and a constant mixing-ratio line up from dew point; their intersection is the LCL. Larger dew-point depression pushes the LCL higher — higher cloud bases.",
      examples: [
        { problem: "Surface air is very dry (large T−Td). Is LCL usually low or high?", solution: "High — much lifting is needed to saturate.", answer: "High" }
      ],
      shortcuts: ["LCL ≈ cloud base for surface-based convection", "Large T−Td → high LCL"],
      traps: ["Placing LCL at a fixed 1 km for every air mass"]
    },
    {
      id: "meteo-adiabatic-cloud-formation-forcing",
      title: "What does the lifting",
      summary: "Four mechanisms — link to Pakistan weather later.",
      explanation: "Orographic lift on windward slopes, frontal overrunning, low-level convergence (including monsoon troughs), and daytime heating thermals all raise parcels. The microphysics of rain is a later step — first the air must reach saturation by cooling.",
      examples: [
        { problem: "Air forced up the western Ghats or Himalayan foothills forms cloud primarily by which process?", solution: "Orographic ascent and adiabatic cooling to saturation.", answer: "Orographic lift" }
      ],
      shortcuts: ["Hills, fronts, convergence, heat → lift", "No lift → no adiabatic cloud"],
      traps: ["Thinking clouds form only by adding moisture without cooling"]
    }
  ],
  examPoints: [
    "Adiabatic cooling on ascent",
    "Define LCL",
    "Dry vs saturated segments of parcel path"
  ],
  commonMistakes: [
    "Starting moist-adiabatic cooling before saturation.",
    "Ignoring forced lift mechanisms.",
    "Confusing LCL with tropopause."
  ],
  relatedTopics: ["meteo-moisture-metrics", "meteo-lapse-rates", "meteo-orographic-rainshadow"],
  content: true,
  buildsOn: ["meteo-moisture-metrics", "meteo-lapse-rates"],
  leadsTo: ["meteo-cloud-classification", "meteo-precipitation-processes"],
  usedIn: ["meteo-thermodynamic-diagrams", "meteo-orographic-rainshadow"]
},

{
  id: "meteo-fog-types",
  sectionId: "METEO-04",
  order: 3,
  title: "Types of Fog",
  definition: "Fog is a cloud with base at the ground. Type is diagnosed by the cooling or moistening process: radiation, advection, upslope, evaporation (steam), or frontal. Visibility impacts aviation and road transport — a major Pakistan plains winter issue.",
  keyFacts: [
    "Radiation fog: clear calm nights, surface cooling",
    "Advection fog: moist air over a colder surface",
    "Upslope fog: adiabatic cooling by ascent",
    "Steam fog: cold air over warmer water",
    "Requires saturation and condensation nuclei near the surface"
  ],
  explanationSections: [
    { heading: "Name the process, not only the visibility", body: "Exam stems describe the setup; you name the fog type from the process." }
  ],
  subtopics: [
    {
      id: "meteo-fog-types-match",
      title: "Process → type matching",
      summary: "Each stem maps to one formation path.",
      explanation: "Clear night, light wind, moist ground air → radiation fog. Warm moist air over cold ocean or snow → advection fog. Air forced up a slope to saturation → upslope fog. Cold air over a warm lake in autumn → steam fog. Frontal fog can form from evaporation of rain into cool air or other frontal moistening.",
      examples: [
        { problem: "Warm moist air moves over a cold current and visibility collapses — type?", solution: "Advection fog.", answer: "Advection fog" }
      ],
      shortcuts: ["Night cooling → radiation", "Moist over cold → advection", "Hill lift → upslope"],
      traps: ["Calling all fog radiation fog"]
    },
    {
      id: "meteo-fog-types-pakistan",
      title: "Pakistan plains winter fog",
      summary: "Radiation fog under calm high-pressure nights.",
      explanation: "Dense winter fog on the Indus plain often follows clear nights with light winds and ample near-surface moisture (sometimes after rains or under moist residual layers). It disrupts flights and motorways. Dust storms are a different, dry, windy hazard — do not swap them.",
      examples: [
        { problem: "Calm clear January night after moist conditions on the plain — primary visibility hazard?", solution: "Radiation fog.", answer: "Radiation fog" }
      ],
      shortcuts: ["Winter plain fog ↔ radiation setup", "Dust ≠ fog"],
      traps: ["Blaming fog on summer heat lows"]
    }
  ],
  examPoints: [
    "Match process to fog type",
    "Radiation fog ingredients",
    "Pakistan winter relevance"
  ],
  commonMistakes: [
    "One fog type for all stems.",
    "Dust and fog swapped.",
    "Ignoring wind (calm vs strong) in diagnosis."
  ],
  relatedTopics: ["meteo-moisture-metrics", "meteo-radiation-laws", "meteo-arabian-sea-cyclones-local"],
  content: true,
  buildsOn: ["meteo-moisture-metrics", "meteo-heat-transfer"],
  leadsTo: ["meteo-aviation-products"],
  usedIn: ["meteo-aviation-products", "meteo-arabian-sea-cyclones-local"]
},

{
  id: "meteo-cloud-classification",
  sectionId: "METEO-04",
  order: 4,
  title: "Cloud Classification — 10 Genera",
  definition: "Clouds are classified by height and form into ten main genera. High clouds (cirrus family) are icy; middle clouds (alto-) sit near mid-troposphere; low clouds include stratus and cumulus types; cumulonimbus towers across levels. Names encode structure — cirro-, alto-, stratus, cumulus, nimbus.",
  keyFacts: [
    "High: cirrus, cirrocumulus, cirrostratus — primarily ice crystals",
    "Middle: altocumulus, altostratus",
    "Low: stratus, stratocumulus, nimbostratus",
    "Vertically developed: cumulus, cumulonimbus",
    "Nimbus / nimbo- implies rain-producing",
    "Appearance + height + precipitation are the exam clues"
  ],
  explanationSections: [
    { heading: "Height and shape, then rain", body: "Learn the ten genera as a grid: high/middle/low versus layered versus heaped. Then add which ones typically precipitate. Cumulonimbus is the thunderstorm cloud; nimbostratus is steady rain from layered deep cloud." }
  ],
  subtopics: [
    {
      id: "meteo-cloud-classification-levels",
      title: "High, middle, and low genera",
      summary: "Cirrus family aloft; alto- in mid-levels; stratus/cumulus below.",
      explanation: "High clouds are thin and icy, often heralding warm fronts when thickening (cirrostratus can produce halos). Middle clouds suggest mid-level moisture. Low stratus can give drizzle; stratocumulus is lumpy low layer cloud common in marine air.",
      examples: [
        { problem: "A halo around the sun in thin milky cloud — most likely genus family?", solution: "Cirrostratus — ice crystal high cloud capable of optical halos.", answer: "Cirrostratus" }
      ],
      shortcuts: ["Cirro- = high ice", "Alto- = middle", "Stratus = layered low"],
      traps: ["Calling all grey skies nimbostratus"]
    },
    {
      id: "meteo-cloud-classification-convective",
      title: "Cumulus and cumulonimbus",
      summary: "Heaped clouds; Cb is the thunderstorm generator.",
      explanation: "Cumulus shows active convection with limited depth. Cumulonimbus extends to great height, may produce heavy rain, lightning, hail, and severe winds. Nimbostratus differs: deep layered rain without the towering convective profile.",
      examples: [
        { problem: "Which genus is associated with thunderstorms and hail?", solution: "Cumulonimbus.", answer: "Cumulonimbus" }
      ],
      shortcuts: ["Cu = fair/deepening convection", "Cb = thunderstorm", "Ns = steady rain layer"],
      traps: ["Equating every rain cloud with cumulonimbus"]
    }
  ],
  comparisonTable: {
    title: "Cloud groups",
    headers: ["Group", "Genera examples", "Notes"],
    rows: [
      ["High", "Ci, Cc, Cs", "Ice; thin"],
      ["Middle", "Ac, As", "Mid-level moisture"],
      ["Low", "St, Sc, Ns", "Ns rains steadily"],
      ["Vertical", "Cu, Cb", "Cb severe weather"]
    ]
  },
  examPoints: [
    "Ten genera by height and form",
    "Nimbus = rain-bearing",
    "Cb vs Ns distinction"
  ],
  commonMistakes: [
    "Memorising names without height meaning.",
    "Confusing altostratus with cirrostratus.",
    "Calling all convective clouds cumulonimbus.",
    "Ignoring optical clues (halo → Cs)."
  ],
  relatedTopics: ["meteo-adiabatic-cloud-formation", "meteo-precipitation-types", "meteo-thunderstorms"],
  content: true,
  buildsOn: ["meteo-adiabatic-cloud-formation"],
  leadsTo: ["meteo-droplet-microphysics", "meteo-precipitation-processes"],
  usedIn: ["meteo-precipitation-types", "meteo-aviation-products"]
},

{
  id: "meteo-droplet-microphysics",
  sectionId: "METEO-04",
  order: 5,
  title: "Microphysics of Cloud Droplet Growth",
  definition: "Cloud droplets begin on condensation nuclei and grow by condensation. Rain-sized drops need additional growth: collision–coalescence in warm clouds, and ice processes (including Bergeron) in cold mixed-phase clouds. Curvature and solute effects control the earliest droplet growth barrier.",
  keyFacts: [
    "CCN required for droplets at ordinary supersaturations",
    "Curvature (Kelvin) effect: tiny droplets need higher RH to grow — a growth barrier",
    "Solute (Raoult) effect: dissolved salt lowers equilibrium vapour pressure and helps offset curvature",
    "A cloud droplet must grow on the order of a million times in volume to become a raindrop",
    "Warm-cloud path: collision and coalescence",
    "Cold-cloud path: Bergeron ice growth"
  ],
  explanationSections: [
    { heading: "From barrier to rain", body: "Nucleation and early growth face curvature/solute physics; turning droplets into rain needs coalescence or ice processes." }
  ],
  subtopics: [
    {
      id: "meteo-droplet-microphysics-curvature-solute",
      title: "Curvature and solute effects",
      summary: "Why pure tiny droplets struggle; how solute helps.",
      explanation: "Highly curved pure-water surfaces raise equilibrium vapour pressure (Kelvin/curvature effect), so the smallest droplets evaporate unless the environment is strongly supersaturated. Dissolved solute lowers equilibrium vapour pressure (Raoult/solute effect) and helps counteract curvature, allowing solution droplets to grow at RH nearer to — even slightly below — 100% in idealised Köhler theory.",
      examples: [
        { problem: "Does the curvature effect make growth of the tiniest pure droplets easier or harder?", solution: "Harder — it is a growth barrier.", answer: "Harder / barrier" }
      ],
      shortcuts: ["Curvature → barrier", "Solute → helps growth", "Together → Köhler ideas"],
      traps: ["Ignoring CCN chemistry entirely"]
    },
    {
      id: "meteo-droplet-microphysics-volume-growth",
      title: "Why condensation alone is slow",
      summary: "Radius ×100 ⇒ volume × about one million.",
      explanation: "A typical cloud droplet radius is about 10 µm; a small raindrop is about 1 mm — roughly 100 times larger in radius and about 100³ = one million times larger in volume. Condensation is too slow to bridge that gap in realistic cloud lifetimes, so coalescence or ice processes are required.",
      examples: [
        { problem: "Rough volume growth factor cloud droplet → raindrop?", solution: "About one million times.", answer: "~10^6" }
      ],
      shortcuts: ["~10 µm → ~1 mm", "Volume factor ~10^6"],
      traps: ["Thinking condensation alone makes rain in minutes always"]
    },
    {
      id: "meteo-droplet-microphysics-bergeron",
      title: "Bergeron process — the vapour pressure edge",
      summary: "Why ice grows while droplets evaporate in mixed-phase air.",
      explanation: "At the same temperature, saturation vapour pressure over ice is lower than over liquid water. Air near equilibrium with droplets is supersaturated relative to ice, so vapour deposits on ice crystals. Droplets shrink; crystals grow and may later fall and melt into rain.",
      examples: [
        { problem: "In a mixed-phase cloud, which phase grows preferentially by vapour deposition?", solution: "Ice.", answer: "Ice" }
      ],
      shortcuts: ["e_sat ice < e_sat liquid", "Ice grows, droplets can evaporate"],
      traps: ["Bergeron requires temperatures above 0 °C"]
    },
    {
      id: "meteo-droplet-microphysics-coalescence",
      title: "Collision–coalescence",
      summary: "Larger drops fall faster and sweep smaller ones.",
      explanation: "In warm clouds, drops of different sizes have different fall speeds. Bigger drops collect smaller ones and grow. Clean air with scarce large CCN can slow this path.",
      examples: [
        { problem: "Warm clouds above freezing grow rain mainly by which process family?", solution: "Collision–coalescence.", answer: "Collision–coalescence" }
      ],
      shortcuts: ["Size spectrum → collisions", "Warm rain path"],
      traps: ["Assuming every grey cloud rains"]
    }
  ],
  formula: [
    {
      name: "Volume growth with radius",
      expression: "V \\propto r^{3}\\quad(\\text{radius}\\times 100 \\Rightarrow \\text{volume}\\times \\sim 10^{6})",
      variables: [
        { symbol: "r", meaning: "droplet radius (~10 µm cloud → ~1 mm rain)" },
        { symbol: "V", meaning: "droplet volume" }
      ]
    }
  ],
  examPoints: [
    "Curvature vs solute",
    "Million-fold volume growth",
    "Coalescence vs Bergeron"
  ],
  commonMistakes: [
    "Condensation alone makes raindrops quickly.",
    "Curvature helps tiny pure droplets.",
    "No ice process in mid-latitudes."
  ],
  relatedTopics: ["meteo-cloud-classification", "meteo-precipitation-processes"],
  content: true,
  buildsOn: ["meteo-cloud-classification", "phy-states-of-matter"],
  leadsTo: ["meteo-precipitation-processes"],
  usedIn: ["meteo-precipitation-processes", "meteo-precipitation-types"]
},

{
  id: "meteo-precipitation-processes",
  sectionId: "METEO-04",
  order: 6,
  title: "Precipitation Processes",
  definition: "Precipitation reaches the ground after cloud particles grow by warm-cloud coalescence and/or cold-cloud ice processes, then fall without fully evaporating. This topic connects microphysics to rainfall at the surface.",
  keyFacts: [
    "Growth must overcome evaporation in unsaturated air below cloud",
    "Warm path: collision–coalescence",
    "Cold path: ice processes including Bergeron",
    "Virga: precipitation that evaporates before reaching ground",
    "Seeder-feeder can enhance orographic rain"
  ],
  explanationSections: [
    { heading: "From cloud to gauge", body: "Microphysics grows the particles; the sub-cloud layer decides whether they survive to the surface." }
  ],
  subtopics: [
    {
      id: "meteo-precipitation-processes-paths",
      title: "Warm vs cold paths in practice",
      summary: "Which path dominates is climate-dependent.",
      explanation: "Deep tropical warm clouds can rain via coalescence alone. Mid-latitude systems often involve ice aloft even when surface precipitation is rain after melting. Knowing both paths prevents false 'rain means no ice processes' claims.",
      examples: [
        { problem: "Can surface rain have begun as snow aloft?", solution: "Yes — melting below the 0 °C level.", answer: "Yes" }
      ],
      shortcuts: ["Warm = coalescence", "Cold = ice involvement", "Melt → rain"],
      traps: ["Surface rain proves the whole column was liquid-only"]
    },
    {
      id: "meteo-precipitation-processes-virga",
      title: "Virga and dry air below",
      summary: "Not all fall streaks reach the gauge.",
      explanation: "When sub-cloud air is dry, falling particles evaporate — virga. Radar may show precipitation aloft while the surface stays dry. That matters for desert and high-base cloud situations.",
      examples: [
        { problem: "Radar echo aloft, dry surface, visible fall streaks evaporating — term?", solution: "Virga.", answer: "Virga" }
      ],
      shortcuts: ["Dry sub-cloud → virga risk"],
      traps: ["Radar echo always equals surface rain"]
    }
  ],
  formula: [
    {
      name: "Bergeron vapour-pressure edge",
      expression: "e_{s,\\mathrm{ice}} < e_{s,\\mathrm{liquid}}\\ \\text{at same }T\\Rightarrow\\text{ice grows, droplets may evaporate}",
      variables: [
        { symbol: "e_{s,\\mathrm{ice}}", meaning: "saturation vapour pressure over ice" },
        { symbol: "e_{s,\\mathrm{liquid}}", meaning: "saturation vapour pressure over liquid water" }
      ]
    }
  ],
  examPoints: [
    "Coalescence vs ice paths",
    "Melting to rain",
    "Virga"
  ],
  commonMistakes: [
    "One path only worldwide.",
    "Ignoring evaporation below cloud.",
    "Radar = surface rain always."
  ],
  relatedTopics: ["meteo-droplet-microphysics", "meteo-precipitation-types", "meteo-remote-sensing"],
  content: true,
  buildsOn: ["meteo-droplet-microphysics", "meteo-cloud-classification"],
  leadsTo: ["meteo-precipitation-types"],
  usedIn: ["meteo-precipitation-types", "meteo-remote-sensing"]
},

{
  id: "meteo-precipitation-types",
  sectionId: "METEO-04",
  order: 7,
  title: "Types of Precipitation",
  definition: "Precipitation type at the ground depends on the ice/water processes in the cloud and on the temperature profile below the cloud. Rain, snow, sleet (ice pellets), freezing rain, and hail are distinguished by those profiles and growth processes — not only by surface temperature alone.",
  keyFacts: [
    "Snow: ice crystals reach the ground without complete melting",
    "Rain: liquid drops at the surface",
    "Ice pellets (sleet): melt aloft then refreeze before reaching ground",
    "Freezing rain: liquid at surface, freezes on contact with sub-freezing objects",
    "Hail: convective ice grown by updraft recycling — different from sleet"
  ],
  explanationSections: [
    { heading: "Profile decides the type", body: "A warm layer aloft with a refreezing layer below favours ice pellets; a deep warm layer with only a shallow sub-freezing surface layer favours freezing rain." }
  ],
  subtopics: [
    {
      id: "meteo-precipitation-types-profiles",
      title: "Sounding profiles: sleet vs freezing rain",
      summary: "Where the warm layer sits controls the outcome.",
      explanation: "Both sleet and freezing rain need melting of snow aloft. If a thick cold layer refreezes the drops into ice pellets, sleet results. If the cold layer is shallow and drops stay liquid until contact, freezing rain coats surfaces in ice — often more hazardous for transport.",
      examples: [
        { problem: "Snow melts in a warm nose then fully refreezes in a deep cold surface layer. Type at ground?", solution: "Ice pellets (sleet).", answer: "Sleet / ice pellets" }
      ],
      shortcuts: ["Deep cold layer after melt → sleet", "Shallow cold surface → freezing rain risk"],
      traps: ["Calling all icy precipitation hail", "Using only surface T without the profile"]
    },
    {
      id: "meteo-precipitation-types-hail-vs-sleet",
      title: "Hail is not sleet",
      summary: "Convective updraft growth vs winter profile precipitation.",
      explanation: "Hailstones grow in strong thunderstorm updrafts by accreting supercooled water. Sleet is a winter-profile product from melting and refreezing stratiform or light precip. Different seasons, clouds, and mechanisms.",
      examples: [
        { problem: "Summer supercell produces large ice stones — hail or sleet?", solution: "Hail.", answer: "Hail" }
      ],
      shortcuts: ["Hail ↔ thunderstorm updraft", "Sleet ↔ melt–refreeze profile"],
      traps: ["Using the words interchangeably"]
    }
  ],
  examPoints: [
    "Distinguish rain, snow, sleet, freezing rain, hail",
    "Profile logic for freezing rain vs sleet",
    "Hail requires strong convection"
  ],
  commonMistakes: [
    "Surface temperature as the only control.",
    "Hail = sleet.",
    "Ignoring elevated warm layers."
  ],
  relatedTopics: ["meteo-precipitation-processes", "meteo-thunderstorms", "meteo-thermodynamic-diagrams"],
  content: true,
  buildsOn: ["meteo-precipitation-processes", "meteo-moisture-metrics"],
  leadsTo: ["meteo-thunderstorms"],
  usedIn: ["meteo-thunderstorms", "meteo-aviation-products"]
},

{
  id: "meteo-orographic-rainshadow",
  sectionId: "METEO-04",
  order: 8,
  title: "Orographic Precipitation & Rain Shadow",
  definition: "When moist air is forced over a mountain barrier it cools adiabatically and can precipitate on the windward side. Descending lee air warms and dries, creating a rain shadow.",
  keyFacts: [
    "Windward: ascent, cooling, higher precipitation likelihood",
    "Leeward: descent, warming, drying — rain shadow",
    "Barrier height and moisture flux control the contrast",
    "Classic on western Ghats, Himalaya, Sierra Nevada, etc.",
    "Links to foehn warming on the lee"
  ],
  explanationSections: [
    { heading: "One air stream, two climates", body: "The same flow can support a wet windward station and a dry lee station a short distance away." }
  ],
  subtopics: [
    {
      id: "meteo-orographic-rainshadow-sides",
      title: "Windward vs leeward checklist",
      summary: "Ascent vs descent outcomes.",
      explanation: "Windward slopes intercept moisture through forced ascent. Lee slopes see compressed, warmed air with lower relative humidity. Map questions ask which side is wetter given a prevailing wind.",
      examples: [
        { problem: "Prevailing moist westerlies hit a north–south range — which side is usually wetter?", solution: "Western (windward) side.", answer: "Windward / west" }
      ],
      shortcuts: ["Up → wet", "Down → dry shadow"],
      traps: ["Always wetter on the east side regardless of wind"]
    },
    {
      id: "meteo-orographic-rainshadow-foehn-link",
      title: "Link to foehn",
      summary: "Rain shadow often accompanies lee warming.",
      explanation: "After windward condensation removes water, lee descent produces the warm dry foehn/chinook signature. Rain-shadow aridity and foehn warming are partners, not unrelated curiosities.",
      examples: [
        { problem: "Does lee foehn air typically arrive more moist or drier than before ascent?", solution: "Drier after windward precipitation.", answer: "Drier" }
      ],
      shortcuts: ["Windward precip → lee dry warm"],
      traps: ["Lee always colder because of altitude only"]
    }
  ],
  examPoints: [
    "Windward precipitation",
    "Rain-shadow dryness",
    "Foehn connection"
  ],
  commonMistakes: [
    "Wrong wet side.",
    "Ignoring wind direction.",
    "No link to foehn."
  ],
  relatedTopics: ["meteo-local-seasonal-winds", "meteo-adiabatic-cloud-formation", "meteo-global-precip-patterns"],
  content: true,
  buildsOn: ["meteo-adiabatic-cloud-formation", "meteo-local-seasonal-winds"],
  leadsTo: ["meteo-global-precip-patterns"],
  usedIn: ["meteo-global-precip-patterns", "meteo-temp-rainfall-distribution"]
},

{
  id: "meteo-global-precip-patterns",
  sectionId: "METEO-04",
  order: 9,
  title: "Global Precipitation Patterns",
  definition: "Annual precipitation is uneven: wet near the ITCZ and on windward mid-latitude coasts, dry under subtropical highs, in continental interiors, and in rain shadows. Patterns follow circulation and topography more than latitude alone.",
  keyFacts: [
    "ITCZ / equatorial belt: heavy convective rain",
    "Subtropical highs: deserts on landward sides",
    "Mid-latitude storm tracks: wetter west coasts in many basins",
    "Rain shadows: dry leeward of major ranges",
    "Monsoon regions: strong seasonal contrast"
  ],
  explanationSections: [
    { heading: "Circulation first, then mountains", body: "Map the three-cell model and storm tracks before memorising country names. Orography rearranges moisture on regional scales." }
  ],
  subtopics: [
    {
      id: "meteo-global-precip-patterns-belts",
      title: "Wet and dry belts from circulation",
      summary: "ITCZ wet; subtropical dry; storm-track wet.",
      explanation: "Rising branches (ITCZ, mid-latitude fronts) favour rain. Sinking branches (subtropical highs) favour deserts such as the Sahara and much of Arabia–Iran–Thar margins. This is the skeleton for Köppen dry-group geography.",
      examples: [
        { problem: "Why are many deserts near 25–30° latitude?", solution: "Persistent subtropical subsidence dries the column.", answer: "Subtropical high subsidence" }
      ],
      shortcuts: ["Rise → wet", "Sink → dry"],
      traps: ["Explaining all deserts by latitude without circulation"]
    },
    {
      id: "meteo-global-precip-patterns-orography",
      title: "Orography rearranges the belts",
      summary: "Windward wet, leeward dry — same air mass, different outcomes.",
      explanation: "Moisture-laden flow forced over mountains rains out windward; descending lee air warms and dries. Coastal ranges and the Himalaya–Hindu Kush complex create sharp gradients over short distances — essential for South Asian geography questions.",
      examples: [
        { problem: "Two stations at similar latitude, one windward of a range, one leeward — which is usually drier?", solution: "Leeward rain-shadow station.", answer: "Leeward" }
      ],
      shortcuts: ["Windward wet", "Leeward dry"],
      traps: ["Ignoring topography when comparing nearby stations"]
    }
  ],
  examPoints: [
    "ITCZ vs subtropical dry",
    "Storm-track coasts",
    "Rain-shadow effect"
  ],
  commonMistakes: [
    "Latitude-only explanations.",
    "Forgetting monsoon seasonal contrast.",
    "Ignoring orography."
  ],
  relatedTopics: ["meteo-global-circulation", "meteo-orographic-rainshadow", "meteo-koppen-system"],
  content: true,
  buildsOn: ["meteo-orographic-rainshadow", "meteo-global-circulation"],
  leadsTo: ["meteo-global-climate-regions"],
  usedIn: ["meteo-koppen-system", "meteo-global-climate-regions"]
},

{
  id: "meteo-thermodynamic-diagrams",
  sectionId: "METEO-04",
  order: 10,
  title: "Thermodynamic Diagrams (Skew-T / Log-P, Tephigram)",
  definition: "Thermodynamic diagrams plot atmospheric soundings so temperature, dew point, and wind can be read against pressure. Skew-T/log-P charts and tephigrams display dry and saturated adiabats and mixing-ratio lines so users can assess stability, cloud layers, CAPE-related areas, and lifting condensation levels.",
  keyFacts: [
    "Axes combine temperature and pressure (logarithmic in pressure on skew-T)",
    "Temperature and dew-point curves: wide gap means dry layer",
    "Dry adiabats and moist adiabats show parcel paths",
    "LCL, CAPE, and inversion layers can be visualised",
    "Essential for severe-weather and cloud-base reasoning",
    "Different chart types (skew-T, tephigram) encode the same physics with different geometry"
  ],
  explanationSections: [
    { heading: "A map of the vertical column", body: "A table of numbers hides structure. On a diagram, inversions, dry slots, and steep lapse rates jump out. Parcel theory becomes geometric: follow a dry adiabat to the LCL, then a moist adiabat, and compare to the environment." }
  ],
  subtopics: [
    {
      id: "meteo-thermodynamic-diagrams-reading",
      title: "Reading T, Td, and moisture gaps",
      summary: "Temperature and dew-point traces show saturated layers and dry air.",
      explanation: "Where T and Td coincide, the layer is saturated — cloud is likely. A large spread marks dry air. Inversions appear as layers where temperature rises upward along the environmental curve.",
      examples: [
        { problem: "On a skew-T, T and Td are equal from 900 to 800 hPa. Interpretation?", solution: "That layer is saturated — expect cloud through that pressure range.", answer: "Saturated / cloudy layer" }
      ],
      shortcuts: ["T ≈ Td → saturated", "Large T–Td → dry"],
      traps: ["Ignoring dew point and reading only temperature"]
    },
    {
      id: "meteo-thermodynamic-diagrams-parcel",
      title: "Parcel paths and stability",
      summary: "Adiabats turn sounding data into stability analysis.",
      explanation: "Lift a surface parcel dry-adiabatically to the LCL, then moist-adiabatically. Where the parcel is warmer than the environment, positive buoyancy (CAPE-related area) exists. Inversions show as lids on that path.",
      examples: [
        { problem: "Why plot both dry and moist adiabats on the chart?", solution: "Unsaturated and saturated parcels cool at different rates; stability diagnosis needs both process curves.", answer: "DALR vs SALR process paths" }
      ],
      shortcuts: ["Dry adiabat to LCL, then moist", "Parcel warmer than env → buoyant"],
      traps: ["Using only the environmental curve without parcel theory"]
    }
  ,
    {
      id: "meteo-thermodynamic-diagrams-cape-lid",
      title: "CAPE area and inversion lids on the chart",
      summary: "Positive area between parcel and environment is CAPE-related; inversions act as lids.",
      explanation: "After the parcel follows a dry adiabat to the LCL and a moist adiabat above, any layer where the parcel temperature exceeds the environmental temperature contributes to positive buoyancy (the CAPE area on a thermodynamic diagram). An inversion or warm layer aloft where the environment is warmer than the parcel path acts as a lid (CIN-related) until surface heating or dynamic lift allows breakthrough.",
      examples: [
        { problem: "On a skew-T, the parcel path is warmer than the environment from 800 to 400 hPa but cooler just above the surface. Interpretation?", solution: "Elevated CAPE-type positive area with near-surface inhibition — storms possible if the lid is removed.", answer: "CAPE aloft with a surface lid" }
      ],
      shortcuts: ["Parcel warmer than env → positive area", "Env warmer near surface → lid/CIN"],
      traps: ["Ignoring the lid when only staring at tall CAPE area"]
    }
  ],
  comparisonTable: {
    title: "Diagram elements",
    headers: ["Element", "Use"],
    rows: [
      ["T and Td curves", "Moisture and cloud layers"],
      ["Dry/moist adiabats", "Parcel paths"],
      ["Inversions on T curve", "Lids / stability"]
    ]
  },
  formula: [
    {
      name: "Parcel path on a thermo diagram",
      expression: "\\text{dry adiabat}\\to\\mathrm{LCL}\\to\\text{moist adiabat};\\ \\text{CAPE}\\sim\\int (T_{parcel}-T_{env})\\,dz",
      variables: [
        { symbol: "\\mathrm{LCL}", meaning: "lifting condensation level" },
        { symbol: "\\mathrm{CAPE}", meaning: "positive buoyancy area (parcel warmer than environment)" }
      ]
    }
  ],
  examPoints: [
    "Diagrams visualise soundings",
    "T–Td proximity indicates saturation",
    "Parcel theory uses dry then moist adiabats"
  ],
  commonMistakes: [
    "Reading pressure axis as linear height without care.",
    "Ignoring dew-point trace.",
    "Confusing environmental and parcel curves.",
    "Treating all chart types as having identical axis geometry."
  ],
  relatedTopics: ["meteo-static-stability", "meteo-lapse-rates", "meteo-moisture-metrics"],
  content: true,
  buildsOn: ["meteo-lapse-rates", "meteo-static-stability", "meteo-moisture-metrics", "meteo-adiabatic-cloud-formation"],
  leadsTo: ["meteo-lapse-calc"],
  usedIn: ["meteo-lapse-calc", "meteo-radiosondes", "meteo-thunderstorms"]
},

// ============================= SECTION E =============================

{
  id: "meteo-air-masses-fronts",
  sectionId: "METEO-05",
  order: 1,
  title: "Air Masses & Frontal Boundaries",
  definition: "An air mass is a large body of air with relatively uniform temperature and moisture inherited from its source region (c/m × T/P/A coding). Fronts are sloping boundaries between air masses: cold fronts are typically steeper with narrower, more convective bands; warm fronts are gentler with broader stratiform shield ahead. The front type sets the passage sequence of wind, temperature, dew point, and pressure.",
  keyFacts: [
    "Coding: c/m = continental/maritime; T/P/A = tropical/polar/arctic",
    "Cold front: cold air advances — often narrow band of sharper weather",
    "Warm front: warm air advances — broader cloud/precip shield ahead",
    "Stationary front: little movement; rain can persist",
    "Occluded front: cold front catches warm front in cyclone maturation"
  ],
  explanationSections: [
    { heading: "Source regions set the properties", body: "Long residence over snow-covered continents builds cP air; long residence over subtropical oceans builds mT air. Movement carries those properties into new regions until modification occurs." }
  ],
  subtopics: [
    {
      id: "meteo-air-masses-fronts-codes",
      title: "Air-mass codes in MCQs",
      summary: "Decode cP, mT, mP quickly.",
      explanation: "First letter is moisture pathway (c dry, m moist); second is thermal type (T warm, P cool/cold). So mT is moist and warm; cP is dry and cold. Pakistan winter outbreaks and summer maritime monsoon air are interpreted with the same logic even when classic North American labels are used in textbooks.",
      examples: [
        { problem: "Air mass formed over a cold dry continent in winter — code?", solution: "cP (or cA if arctic).", answer: "cP" }
      ],
      shortcuts: ["c = dry, m = moist", "T warm, P cold"],
      traps: ["Reading letters right-to-left"]
    },
    {
      id: "meteo-air-masses-fronts-passage",
      title: "What changes at frontal passage",
      summary: "Cold vs warm front signatures at a station.",
      explanation: "Cold-front passage: temperature drop, dew-point drop, wind shift (often to a more northerly component in NH examples), pressure rise, brief convective band possible. Warm-front passage: temperature rise, moistening, wind shift, and precipitation that often begins earlier ahead of the front. Use multiple fields — not temperature alone.",
      examples: [
        { problem: "Sharp T drop, gusty shift to NW, brief heavy band — which front likely passed?", solution: "Cold front.", answer: "Cold front" }
      ],
      shortcuts: ["Cold front = sharp & narrow", "Warm front = earlier, broader shield"],
      traps: ["Diagnosing a front from one temperature report only"]
    }
  ],
  examPoints: [
    "Air-mass source coding",
    "Cold vs warm front weather",
    "Multi-field front recognition"
  ],
  commonMistakes: [
    "Single-variable front detection.",
    "Swapping cold and warm front sequences.",
    "Ignoring modification of air masses over long trajectories."
  ],
  relatedTopics: ["meteo-cyclones-development", "meteo-airmass-front-id"],
  content: true,
  buildsOn: ["meteo-moisture-metrics", "meteo-static-stability", "meteo-forces-governing-wind"],
  leadsTo: ["meteo-cyclones-development", "meteo-airmass-front-id"],
  usedIn: ["meteo-cyclones-development", "meteo-cyclones-structure", "meteo-western-disturbances"]
},

{
  id: "meteo-cyclones-development",
  sectionId: "METEO-05",
  order: 2,
  title: "Mid-Latitude Cyclones — Baroclinic Instability & Growth",
  definition: "Mid-latitude cyclones grow by baroclinic instability: they extract energy from horizontal temperature gradients along fronts, typically under upper-level trough and jet support. Classic polar-front theory stages — wave → mature open wave with warm sector → occlusion → decay — organise the surface weather sequence. They are cold-core frontal systems, not tropical warm-core cyclones.",
  keyFacts: [
    "Energy source: baroclinic temperature gradients / fronts",
    "Upper trough and jet streaks favour development by enhancing ascent",
    "Norwegian life cycle: wave → open wave → occlusion → decay",
    "Cold-core structure aloft vs tropical cyclone warm core",
    "Western disturbances are related mid-latitude/subtropical systems affecting Pakistan in winter"
  ],
  explanationSections: [
    { heading: "Surface and upper coupling", body: "A surface low deepens when upper-level divergence (often near a jet-streak favourable quadrant or ahead of an upper trough) removes mass from the column while cool air aloft keeps the core cold. Looking only at the surface chart misses the growth mechanism." },
    { heading: "Polar-front lifecycle (exam skeleton)", body: "Incipient wave on a baroclinic front → open wave with distinct cold and warm fronts and a warm sector → occlusion as the cold front catches the warm front → decay as temperature contrasts weaken and the system fills. Weather is sharpest near the fronts; the warm sector is milder and often moister." }
  ],
  subtopics: [
    {
      id: "meteo-cyclones-development-lifecycle",
      title: "Life-cycle stages to recognise",
      summary: "Wave, mature open wave, occlusion — what changes on the map.",
      explanation: "Early on, a frontal wave forms on a baroclinic zone. Maturity shows a clear warm sector between cold and warm fronts. Occlusion wraps cooler air around the low and lifts the warm sector off the surface — the storm often begins to fill afterward. Exam diagrams test stage recognition more than memorising dates.",
      examples: [
        { problem: "Warm sector still open at the surface between cold and warm fronts — which stage?", solution: "Open-wave / mature stage before occlusion.", answer: "Open-wave mature" }
      ],
      shortcuts: ["Open warm sector → mature", "Occlusion → warm air lifted off surface"],
      traps: ["Calling every closed low an occlusion"]
    },
    {
      id: "meteo-cyclones-development-vs-tropical",
      title: "Baroclinic vs tropical growth",
      summary: "Fronts and shear vs warm ocean heat engine.",
      explanation: "Mid-latitude cyclones need horizontal temperature contrast and usually strong baroclinic shear. Tropical cyclones need warm deep SST, moist instability, and low shear, and they lack mid-latitude-type fronts. Mixing the energy sources is a frequent MCQ error.",
      examples: [
        { problem: "System has cold and warm fronts and grows from a temperature gradient — tropical or mid-latitude type?", solution: "Mid-latitude baroclinic cyclone.", answer: "Mid-latitude / baroclinic" }
      ],
      shortcuts: ["Fronts + baroclinic = mid-latitude", "Warm core + ocean = tropical"],
      traps: ["Assuming all circular lows are hurricanes"]
    }
  ],
  examPoints: [
    "Baroclinic energy source",
    "Role of upper trough/jet",
    "Life-cycle stages",
    "Contrast with tropical cyclones"
  ],
  commonMistakes: [
    "Tropical and extratropical growth mechanisms swapped.",
    "Ignoring upper-level support.",
    "Skipping occlusion as a stage."
  ],
  relatedTopics: ["meteo-cyclones-structure", "meteo-air-masses-fronts", "meteo-rossby-waves"],
  content: true,
  buildsOn: ["meteo-air-masses-fronts", "meteo-rossby-waves", "meteo-jet-stream"],
  leadsTo: ["meteo-cyclones-structure"],
  usedIn: ["meteo-cyclones-structure", "meteo-western-disturbances", "meteo-isobar-analysis"]
},

{
  id: "meteo-cyclones-structure",
  sectionId: "METEO-05",
  order: 3,
  title: "Mid-Latitude Cyclones — Vertical Structure & Conveyor Belts",
  definition: "A mature mid-latitude cyclone has a sloping frontal structure and organised airstreams: the warm conveyor belt, cold conveyor belt, and dry intrusion. Cloud and precipitation patterns follow these airstreams more than a simple circle around the low.",
  keyFacts: [
    "Warm conveyor belt: climbs over the warm front — broad precip shield",
    "Cold conveyor belt: approaches from the cold side — contributes to comma cloud",
    "Dry intrusion: dry upper air wraps toward the centre — clear slot / sharpening gradients",
    "Fronts slope: cold fronts steeper than warm fronts typically",
    "Satellite comma cloud is a structural fingerprint"
  ],
  explanationSections: [
    { heading: "From pressure circle to 3D flow", body: "Surface isobars show the low; conveyor belts explain where the wide rain shield and clear dry slot sit." }
  ],
  subtopics: [
    {
      id: "meteo-cyclones-structure-conveyors",
      title: "Conveyor-belt weather map",
      summary: "Where rain is broad vs where dry air punches in.",
      explanation: "Ahead of the warm front, the warm conveyor belt produces the extensive layered cloud and precip region. The dry intrusion can create a dry slot on satellite imagery and sharpen the cold front’s convective band. Matching satellite shape to these airstreams is an advanced but teachable skill.",
      examples: [
        { problem: "Broad precipitation shield well ahead of a surface warm front — which airstream?", solution: "Warm conveyor belt.", answer: "Warm conveyor belt" }
      ],
      shortcuts: ["Warm CB → wide shield", "Dry intrusion → dry slot"],
      traps: ["Assuming rain only at the exact front line"]
    },
    {
      id: "meteo-cyclones-structure-slopes",
      title: "Why frontal slopes differ",
      summary: "Cold fronts steeper; warm fronts gentler — weather width follows.",
      explanation: "A steeper cold front forces a narrower, often sharper band of weather. A gentler warm-front slope spreads ascent over a wider zone, so rain and cloud often begin earlier and farther ahead. That geometric fact links structure to the familiar cold-vs-warm front sequences.",
      examples: [
        { problem: "Which front typically has the wider pre-frontal cloud shield?", solution: "Warm front.", answer: "Warm front" }
      ],
      shortcuts: ["Cold = steep/narrow", "Warm = gentle/wide"],
      traps: ["Drawing both fronts with identical slopes"]
    }
  ],
  examPoints: [
    "Warm conveyor belt role",
    "Dry intrusion / dry slot",
    "Frontal slope vs weather width"
  ],
  commonMistakes: [
    "2D circle-only mental model.",
    "Ignoring dry intrusion.",
    "Swapping warm/cold front widths."
  ],
  relatedTopics: ["meteo-cyclones-development", "meteo-air-masses-fronts", "meteo-remote-sensing"],
  content: true,
  buildsOn: ["meteo-cyclones-development", "meteo-air-masses-fronts"],
  leadsTo: ["meteo-western-disturbances"],
  usedIn: ["meteo-western-disturbances", "meteo-remote-sensing"]
},

{
  id: "meteo-thunderstorms",
  sectionId: "METEO-05",
  order: 4,
  title: "Thunderstorms",
  definition: "Thunderstorms are deep moist convective storms that produce lightning (by definition), thunder, and often heavy rain, gusts, or hail. Ordinary cells are short-lived; organised systems and supercells last longer and cause more severe weather when shear organises the updraft.",
  keyFacts: [
    "Lightning defines a thunderstorm",
    "Ingredients: moisture, instability (CAPE), and a lifting mechanism; shear organises severity",
    "Ordinary cell stages: cumulus → mature → dissipating",
    "Multicell and supercell organisation under stronger shear",
    "CAPE = fuel; CIN = lid"
  ],
  explanationSections: [
    { heading: "Fuel, lid, and shear", body: "Instability without lift or with a strong lid may produce nothing. Shear decides whether storms stay single-cell or become organised." }
  ],
  subtopics: [
    {
      id: "meteo-thunderstorms-organise",
      title: "Shear organises storm type",
      summary: "Weak shear → pulse storms; strong shear → supercells.",
      explanation: "Weak shear yields short-lived single cells whose rain-cooled outflow cuts off the updraft. Moderate shear supports multicell lines and clusters. Strong speed and directional shear favour supercells with rotating updrafts — parent storms of most violent tornadoes.",
      examples: [
        { problem: "Why can a squall line produce damaging winds far from any single cell core?", solution: "Organised cold pools and line-end structures focus strong straight-line winds.", answer: "Organised line / cold pool" }
      ],
      shortcuts: ["More shear → more organisation", "Supercell = rotating updraft"],
      traps: ["Every thunderstorm is a supercell"]
    },
    {
      id: "meteo-thunderstorms-lightning-cape",
      title: "Lightning and CAPE / CIN",
      summary: "Charge separation defines the storm; CAPE is fuel; CIN is the lid.",
      explanation: "Lightning requires a thunderstorm by definition — charge separates in the mixed-phase cloud. CAPE measures buoyant energy available once a parcel freely rises; CIN is the barrier that may prevent initiation. Large CAPE with large CIN means stored energy without guaranteed storms.",
      examples: [
        { problem: "Large CAPE and large CIN — are storms guaranteed this afternoon?", solution: "No — the lid may hold until heating or lift removes CIN.", answer: "No" }
      ],
      shortcuts: ["Lightning ⇒ thunderstorm", "CAPE = fuel", "CIN = lid"],
      traps: ["CAPE alone guarantees storms"]
    }
  ],
  examPoints: [
    "Lightning definition",
    "Cell life cycle",
    "Shear vs organisation",
    "CAPE vs CIN"
  ],
  commonMistakes: [
    "No lightning needed for thunderstorm label.",
    "CAPE = automatic storms.",
    "Ignoring shear for severity."
  ],
  relatedTopics: ["meteo-static-stability", "meteo-tornadoes", "meteo-thermodynamic-diagrams"],
  content: true,
  buildsOn: ["meteo-static-stability", "meteo-adiabatic-cloud-formation"],
  leadsTo: ["meteo-tornadoes"],
  usedIn: ["meteo-tornadoes", "meteo-aviation-products"]
},

{
  id: "meteo-tornadoes",
  sectionId: "METEO-05",
  order: 5,
  title: "Tornadoes",
  definition: "A tornado is a violently rotating column of air in contact with the ground, usually from a thunderstorm. Most strong tornadoes come from supercells with mesocyclones. Intensity is rated by damage on the Enhanced Fujita (EF) scale.",
  keyFacts: [
    "Requires a parent thunderstorm — often a supercell",
    "Mesocyclone: rotating updraft in a supercell",
    "EF scale: EF0 (weakest) through EF5 (strongest)",
    "EF5 corresponds to estimated winds greater than about 322 km/h (200 mph)",
    "Mesoscale phenomenon — intense but narrow and short-lived",
    "Radar may show a Tornado Vortex Signature (TVS) in Doppler velocity"
  ],
  explanationSections: [
    { heading: "Organisation before the funnel", body: "Shear and instability build a rotating updraft; the tornado is a smaller vortex that may or may not touch down." }
  ],
  subtopics: [
    {
      id: "meteo-tornadoes-ef-and-radar",
      title: "EF scale numbers and radar clues",
      summary: "Damage rating vs detection.",
      explanation: "EF ratings are assigned from damage surveys. EF5 is the top class, with estimated winds above about 322 km/h. Lower EF categories occupy slower ranges (for example the 100–200+ km/h bands used in many teaching tables). Doppler radar can show a TVS velocity couplet, but confirmation still needs ground evidence.",
      examples: [
        { problem: "EF5 estimated wind threshold commonly taught?", solution: "Greater than about 322 km/h.", answer: ">322 km/h" }
      ],
      shortcuts: ["EF5 > ~322 km/h", "EF = damage scale", "TVS = radar clue"],
      traps: ["EF measured live by aircraft in the core as routine"]
    },
    {
      id: "meteo-tornadoes-not-synoptic",
      title: "Scale and geography traps",
      summary: "Mesoscale intensity ≠ synoptic cyclone.",
      explanation: "Tornadoes are not classified as synoptic systems like mid-latitude cyclones despite high local intensity. South Asia can see tornadoes, but they are not the primary severe mode compared with heat, flood, and tropical cyclones.",
      examples: [
        { problem: "Why is 'tornado = synoptic because severe' wrong?", solution: "Scale is size/lifetime, not severity.", answer: "Severity ≠ scale" }
      ],
      shortcuts: ["Tornado = mesoscale", "Supercell parent for most violent cases"],
      traps: ["Every funnel cloud is a confirmed tornado"]
    }
  ],
  examPoints: [
    "Tornado vs parent storm",
    "EF0–EF5 and EF5 threshold",
    "Mesoscale classification"
  ],
  commonMistakes: [
    "Severity implies synoptic scale.",
    "Wrong EF5 wind band.",
    "All thunderstorms produce tornadoes."
  ],
  relatedTopics: ["meteo-thunderstorms", "meteo-jet-stream", "meteo-remote-sensing"],
  content: true,
  buildsOn: ["meteo-thunderstorms"],
  leadsTo: [],
  usedIn: ["meteo-remote-sensing", "meteo-aviation-products"]
},

{
  id: "meteo-tropical-cyclones",
  sectionId: "METEO-05",
  order: 6,
  title: "Tropical Cyclones (Hurricanes/Typhoons)",
  definition: "Tropical cyclones are warm-core, non-frontal storms that form over warm oceans, driven by latent-heat release in deep convection. They require rotation (non-zero Coriolis), so they do not form on the equator, and they weaken over cold water or land.",
  keyFacts: [
    "Warm-core structure; no mid-latitude-type fronts",
    "Fuel: latent heat from warm, moist oceanic inflow",
    "Need sufficient Coriolis — not on the equator",
    "Eye, eyewall, spiral bands in mature intense systems",
    "Arabian Sea and Bay of Bengal are North Indian Ocean basins of concern for Pakistan/South Asia"
  ],
  explanationSections: [
    { heading: "Not a baroclinic mid-latitude cyclone", body: "Different energy source, structure, and preferred latitudes. Compare explicitly with mid-latitude cyclone development when both appear in options." }
  ],
  subtopics: [
    {
      id: "meteo-tropical-cyclones-ingredients",
      title: "Formation ingredient checklist",
      summary: "Warm SST, moisture, low shear, vorticity, off-equator.",
      explanation: "Classic checklist: warm sea surface (often cited near ≥26–27 °C through a depth), deep moisture, weak vertical shear, pre-existing disturbance, and enough distance from the equator for Coriolis to organise spin. High shear tears convection away from the centre.",
      examples: [
        { problem: "Why do tropical cyclones not form on the equator?", solution: "Coriolis parameter ≈ 0 — cannot organise sustained rotation.", answer: "No Coriolis / no spin-up" }
      ],
      shortcuts: ["Warm ocean + low shear + off-equator", "Shear is a killer"],
      traps: ["Listing fronts as a required tropical ingredient"]
    },
    {
      id: "meteo-tropical-cyclones-decay",
      title: "What weakens them",
      summary: "Land, cold water, shear, dry air.",
      explanation: "Landfall cuts off oceanic moisture and increases friction. Moving over cooler water reduces enthalpy fluxes. Strong shear and entrainment of dry air disrupt the warm core. Intensification forecasts hinge on these environmental controls as much as on current intensity.",
      examples: [
        { problem: "Storm moves over a cold ocean current — expect intensification or weakening?", solution: "Weakening tendency from reduced heat/moisture fluxes.", answer: "Weakening" }
      ],
      shortcuts: ["Land / cold SST / shear → weaken"],
      traps: ["Assuming intensity always increases until landfall"]
    }
  ],
  examPoints: [
    "Warm-core oceanic storm",
    "No formation on equator",
    "Decay mechanisms"
  ],
  commonMistakes: [
    "Equatorial formation.",
    "Calling them baroclinic frontal cyclones.",
    "Ignoring shear."
  ],
  relatedTopics: ["meteo-cyclones-development", "meteo-arabian-sea-cyclones-local", "meteo-latent-heat"],
  content: true,
  buildsOn: ["meteo-coriolis-effect", "meteo-precipitation-processes"],
  leadsTo: ["meteo-arabian-sea-cyclones-local"],
  usedIn: ["meteo-arabian-sea-cyclones-local", "meteo-aviation-products"]
},
// ============================= SECTION F: Meteorological Instruments & Remote Sensing =============================

{
  id: "meteo-pressure-instruments",
  sectionId: "METEO-06",
  order: 3,
  title: "Atmospheric Pressure — Barometers",
  definition: "Pressure is measured with mercury, aneroid, and electronic barometers. Operational charts use sea-level reduced pressure so stations at different elevations can be compared.",
  keyFacts: [
    "Mercury barometer: column height ∝ pressure",
    "Aneroid: evacuated capsule deformation",
    "Electronic: transducers for automation",
    "Station pressure ≠ sea-level pressure",
    "Pressure tendency is a forecasting clue"
  ],
  explanationSections: [
    { heading: "Measure, then reduce", body: "Always know whether a number is station pressure or SLP." }
  ],
  subtopics: [
    {
      id: "meteo-pressure-instruments-type-match",
      title: "Instrument type matching",
      summary: "Mercury vs aneroid vs electronic.",
      explanation: "Mercury barometers are absolute references but bulky and toxic. Aneroids are portable and common in aircraft altimetry heritage. Electronic sensors dominate modern networks. Exam stems often ask which uses a liquid column.",
      examples: [
        { problem: "Which classical instrument uses a mercury column height?", solution: "Mercury barometer.", answer: "Mercury barometer" }
      ],
      shortcuts: ["Mercury = liquid column", "Aneroid = capsule", "Electronic = network default"],
      traps: ["Aneroid contains a mercury column"]
    },
    {
      id: "meteo-pressure-instruments-slp-skill",
      title: "Why reduce to sea level",
      summary: "Elevation would otherwise dominate the map.",
      explanation: "Station pressure falls with height. Without reduction, every mountain would look like a permanent low. Sea-level pressure (SLP) adjusts to a common level so gradients reflect weather systems. Tendency (rising/falling) still uses consistent local practice.",
      examples: [
        { problem: "Why not plot raw station pressure for a national isobar map?", solution: "Elevation differences would mask weather gradients.", answer: "Need SLP reduction" }
      ],
      shortcuts: ["SLP for maps", "Station p for local height effect"],
      traps: ["Station pressure = SLP always"]
    }
  ],
  examPoints: [
    "Barometer types",
    "Station vs SLP",
    "Tendency usefulness"
  ],
  commonMistakes: [
    "No reduction to sea level.",
    "Mercury vs aneroid swapped.",
    "Ignoring tendency."
  ],
  relatedTopics: ["meteo-pressure-conversion", "meteo-hydrostatic-equation", "meteo-station-model"],
  content: true,
  buildsOn: ["meteo-hydrostatic-equation"],
  leadsTo: ["meteo-station-model", "meteo-pressure-conversion"],
  usedIn: ["meteo-station-model", "meteo-isobar-analysis"]
},

{
  id: "meteo-wind-instruments",
  sectionId: "METEO-06",
  order: 6,
  title: "Wind Speed & Direction — Anemometers & Wind Vanes",
  definition: "Wind direction is the direction from which the wind blows; speed is measured by cup, propeller, or sonic anemometers. Exposure height and averaging time define what the number means.",
  keyFacts: [
    "Direction: FROM convention",
    "Cup anemometer: rotation rate ∝ speed",
    "Sonic anemometers: no moving parts; research/airports",
    "Standard exposure often 10 m for synoptic wind",
    "Gusts are short-period peaks; mean wind is averaged"
  ],
  explanationSections: [
    { heading: "Direction vocabulary first", body: "A north wind comes from the north. Station-model staffs use the same FROM convention." }
  ],
  subtopics: [
    {
      id: "meteo-wind-instruments-from-convention",
      title: "FROM convention + sensor types",
      summary: "Vane points into the wind; cups measure speed.",
      explanation: "The vane orients into the oncoming flow. Cup anemometers rotate faster in stronger wind; propellers combine direction and speed. Sonic anemometers use sound-travel times and suit turbulent research. Match the instrument to the question stem.",
      examples: [
        { problem: "Wind reported as 270° — air is moving toward which general direction?", solution: "Toward the east (wind from the west).", answer: "Toward east" }
      ],
      shortcuts: ["Direction = FROM", "Cups = speed", "Vane = direction"],
      traps: ["Direction = where air is going as the named wind"]
    },
    {
      id: "meteo-wind-instruments-exposure-gust",
      title: "Height, obstacles, gusts",
      summary: "10 m standard vs roof-edge turbulence.",
      explanation: "Wind increases with height in the surface layer; trees and buildings create eddies. A sensor behind an obstacle under-reads or fluctuates wildly. Gusts are short peaks; mean winds average over minutes. Compare like with like.",
      examples: [
        { problem: "Anemometer in a courtyard among buildings — representative of open 10 m wind?", solution: "Usually no — sheltered/turbulent site.", answer: "No" }
      ],
      shortcuts: ["Standard height ~10 m", "Gust ≠ mean", "Obstacles bias"],
      traps: ["Any height is equivalent"]
    },
    {
      id: "meteo-wind-instruments-beaufort-skill",
      title: "Beaufort as estimate, not anemometer",
      summary: "Force scale from visual effects.",
      explanation: "Beaufort forces estimate wind from smoke, leaves, and sea state when instruments are absent. It is ordered and useful, but not a substitute for calibrated anemometer values in precise work.",
      examples: [
        { problem: "Is Beaufort force a direct cup-anemometer reading?", solution: "No — visual/sea-state estimate scale.", answer: "No" }
      ],
      shortcuts: ["Beaufort = estimated force", "Anemometer = measured speed"],
      traps: ["Beaufort = exact m/s instrument"]
    }
  ],
  examPoints: [
    "FROM convention",
    "Anemometer types",
    "Exposure and gust vs mean"
  ],
  commonMistakes: [
    "Direction inverted.",
    "Ignoring obstacles.",
    "Gust reported as mean."
  ],
  relatedTopics: ["meteo-station-model", "meteo-forces-governing-wind"],
  content: true,
  buildsOn: ["meteo-forces-governing-wind"],
  leadsTo: ["meteo-station-model", "meteo-aviation-products"],
  usedIn: ["meteo-station-model", "meteo-ground-aviation-instruments"]
},

{
  id: "meteo-humidity-instruments",
  sectionId: "METEO-06",
  order: 2,
  title: "Humidity — Hygrometers & Psychrometers",
  definition: "Humidity instruments infer moisture from wet-bulb cooling, hygroscopic materials, or electronic sensors. The aspirated psychrometer remains a teaching standard: dry- and wet-bulb temperatures yield vapour pressure and RH via tables or formulae.",
  keyFacts: [
    "Psychrometer: dry bulb + wet bulb",
    "Wet-bulb depression grows as air dries",
    "Hair hygrometer: length changes with RH",
    "Electronic sensors: capacitance/resistance of polymers",
    "Ventilation improves psychrometer accuracy"
  ],
  explanationSections: [
    { heading: "Depression is the signal", body: "When dry and wet bulbs agree, air is saturated. Large depression means dry air." }
  ],
  subtopics: [
    {
      id: "meteo-humidity-instruments-psychrometer-skill",
      title: "Psychrometer reading skill",
      summary: "Interpret wet-bulb depression.",
      explanation: "Evaporation cools the wet bulb until equilibrium. More evaporation (drier air) → larger depression → lower RH. At 100% RH, depression is zero. Aspiration (fan or sling) keeps fresh air on the bulbs so the wet bulb does not sit in its own moist boundary layer.",
      examples: [
        { problem: "Dry bulb 30 °C, wet bulb 30 °C — RH?", solution: "About 100% (saturated).", answer: "~100%" }
      ],
      shortcuts: ["Zero depression → saturated", "Large depression → dry", "Aspire the bulbs"],
      traps: ["Wet bulb higher than dry bulb in normal liquid water psychrometry"]
    },
    {
      id: "meteo-humidity-instruments-sensor-choice",
      title: "Hair vs electronic vs psychrometer",
      summary: "When each is appropriate.",
      explanation: "Hair hygrometers are simple but slow and drift. Electronic sensors suit automation with calibration. Psychrometers teach the physics and remain a reference method when operated correctly. Choose by required accuracy, response time, and maintenance.",
      examples: [
        { problem: "Need a classroom demonstration of wet-bulb depression — best classic tool?", solution: "Sling or aspirated psychrometer.", answer: "Psychrometer" }
      ],
      shortcuts: ["Psychrometer = teaching + reference", "Electronic = automated networks"],
      traps: ["Uncalibrated hair hygrometer as primary climate-grade sensor"]
    }
  ],
  examPoints: [
    "Psychrometer principle",
    "Depression vs RH",
    "Ventilation importance"
  ],
  commonMistakes: [
    "Wet bulb > dry bulb as normal.",
    "No aspiration needed.",
    "Hair hygrometer needs no calibration."
  ],
  relatedTopics: ["meteo-moisture-metrics", "meteo-temperature-instruments", "meteo-stevenson-screen"],
  content: true,
  buildsOn: ["meteo-moisture-metrics", "meteo-temperature-instruments"],
  leadsTo: ["meteo-stevenson-screen"],
  usedIn: ["meteo-radiosondes", "meteo-humidity-calc"]
},

{
  id: "meteo-temperature-instruments",
  sectionId: "METEO-06",
  order: 1,
  title: "Temperature — Thermometers, Thermographs & Thermocouples",
  definition: "Air temperature is measured with liquid-in-glass, bimetallic, resistance, and thermocouple sensors. Exposure and radiation shielding matter as much as the sensor type — a sunlit thermometer reads the instrument, not the air.",
  keyFacts: [
    "Liquid-in-glass: expansion of mercury or alcohol",
    "Max/min thermometers record extremes",
    "Thermograph: continuous record",
    "Electrical sensors: resistance or thermoelectric",
    "Must be shielded and ventilated (Stevenson screen)"
  ],
  explanationSections: [
    { heading: "Sensor vs exposure", body: "Choosing a thermocouple does not fix radiation error if the housing is wrong." }
  ],
  subtopics: [
    {
      id: "meteo-temperature-instruments-sensor-match",
      title: "Match sensor to job",
      summary: "Spot reading vs continuous vs remote electrical.",
      explanation: "Liquid-in-glass suits standard screen observations. Max/min thermometers capture daily extremes without continuous power. Thermographs and loggers provide time series. Resistance thermometers and thermocouples suit automated stations and fast response when properly housed.",
      examples: [
        { problem: "Need yesterday's maximum without a logger — which classic tool?", solution: "Maximum thermometer (or max/min set).", answer: "Max thermometer" }
      ],
      shortcuts: ["Max/min = extremes", "Thermograph = continuous", "Electrical = automation"],
      traps: ["Any sensor is accurate in full sun"]
    },
    {
      id: "meteo-temperature-instruments-radiation-error",
      title: "Radiation error trap",
      summary: "Sunshine on the sensor biases the reading high.",
      explanation: "A dry thermometer bulb in direct sun absorbs solar radiation and reads warmer than the air. Stevenson screens and aspirated shields exist to enforce shade and airflow. Exam stems about 'thermometer in open sun' test this, not the mercury formula.",
      examples: [
        { problem: "Unshielded thermometer in midday sun — bias direction?", solution: "Reads too high.", answer: "Too high" }
      ],
      shortcuts: ["Sun on sensor → high bias", "Screen = shade + ventilation"],
      traps: ["Blaming only mercury purity for large daytime errors"]
    }
  ],
  examPoints: [
    "Main sensor types",
    "Max/min role",
    "Radiation shielding necessity"
  ],
  commonMistakes: [
    "Ignoring exposure.",
    "Thermograph = instantaneous only.",
    "Sunlit readings trusted as air temperature."
  ],
  relatedTopics: ["meteo-stevenson-screen", "meteo-heat-transfer"],
  content: true,
  buildsOn: ["meteo-heat-transfer"],
  leadsTo: ["meteo-stevenson-screen", "meteo-humidity-instruments"],
  usedIn: ["meteo-stevenson-screen", "meteo-radiosondes"]
},

{
  id: "meteo-radiosondes",
  sectionId: "METEO-06",
  order: 5,
  title: "Upper-Air Soundings — Radiosondes & Rawinsondes",
  definition: "A radiosonde is a balloon-borne instrument package that measures temperature, humidity, and pressure while ascending; winds are obtained by tracking (rawinsonde). Soundings are the backbone of stability and upper-air analysis.",
  keyFacts: [
    "Measures T, RH (or humidity), pressure vs height",
    "Winds from tracking the balloon",
    "Standard launch times often 00 and 12 UTC",
    "Plotted on thermodynamic diagrams",
    "Critical for aviation and NWP assimilation"
  ],
  explanationSections: [
    { heading: "Point measurements along a path", body: "A sounding is a vertical profile at one place and time — not a horizontal map." }
  ],
  subtopics: [
    {
      id: "meteo-radiosondes-what-it-measures",
      title: "What the package actually returns",
      summary: "T, humidity, p; winds from tracking.",
      explanation: "Temperature and humidity sensors sample the environment as pressure falls with height. Wind is not a thermometer reading — it comes from successive horizontal positions of the balloon. Mixing these facts is a common MCQ trap.",
      examples: [
        { problem: "Does the radiosonde thermometer directly measure wind speed?", solution: "No — winds come from tracking.", answer: "No" }
      ],
      shortcuts: ["Sensors → T, RH, p", "Tracking → wind"],
      traps: ["Wind measured by a cup anemometer on the sonde as standard"]
    },
    {
      id: "meteo-radiosondes-use",
      title: "Why soundings matter",
      summary: "Stability, icing, NWP, aviation.",
      explanation: "CAPE/CIN, inversion layers, freezing levels, and jet-level winds are diagnosed from soundings. Models assimilate them; forecasters and pilots use them for convection and icing risk. Satellite data complements but does not fully replace in-situ profiles.",
      examples: [
        { problem: "Best routine tool for a vertical temperature inversion profile at a station?", solution: "Radiosonde sounding.", answer: "Radiosonde" }
      ],
      shortcuts: ["Sounding → profile truth", "Diagrams plot sondes"],
      traps: ["Surface METAR replaces upper-air soundings"]
    }
  ],
  examPoints: [
    "Quantities measured",
    "Wind from tracking",
    "Role in forecasting"
  ],
  commonMistakes: [
    "Wind by thermometer.",
    "Sounding = horizontal map.",
    "Ignoring standard times."
  ],
  relatedTopics: ["meteo-thermodynamic-diagrams", "meteo-static-stability", "meteo-nwp-models"],
  content: true,
  buildsOn: ["meteo-temperature-instruments", "meteo-humidity-instruments"],
  leadsTo: ["meteo-thermodynamic-diagrams", "meteo-nwp-models"],
  usedIn: ["meteo-thermodynamic-diagrams", "meteo-lapse-calc"]
},

{
  id: "meteo-stevenson-screen",
  sectionId: "METEO-06",
  order: 4,
  title: "Siting Standards — The Stevenson Screen (Instrument Shelter)",
  definition: "The Stevenson screen is a white, louvered, ventilated shelter that houses thermometers and humidity instruments at a standard height so readings represent shaded air temperature, not sunlit instrument temperature.",
  keyFacts: [
    "White exterior reflects sunlight",
    "Louvers allow airflow but block direct sun and precipitation",
    "Standard height often about 1.25 m above short grass",
    "Door faces away from midday sun in many practices",
    "Poor siting ruins good sensors"
  ],
  explanationSections: [
    { heading: "Shelter is part of the measurement", body: "Metrology includes the screen and the ground cover, not only the thermometer certificate." }
  ],
  subtopics: [
    {
      id: "meteo-stevenson-screen-design-skill",
      title: "Why each design feature exists",
      summary: "White, louvers, height — not decoration.",
      explanation: "White paint reduces solar heating of the box. Louvers let air exchange while blocking direct beams and rain on the sensors. Height above short grass avoids extreme ground heating and snow burial. Remove any feature and the temperature bias grows.",
      examples: [
        { problem: "Why is the screen painted white?", solution: "To reflect sunlight and reduce solar heating of the shelter.", answer: "Reflect sunlight / reduce heating" }
      ],
      shortcuts: ["White = reflect", "Louvers = ventilate + shade", "Height = standard exposure"],
      traps: ["Black screen for better absorption"]
    },
    {
      id: "meteo-stevenson-screen-siting-traps",
      title: "Siting mistakes that fail exams",
      summary: "Concrete, walls, and rooftops bias readings.",
      explanation: "Screens over asphalt, beside heat-storing walls, or on rooftops sample microclimates, not representative air. Ideal siting is open level ground with short vegetation and free airflow. Urban heat island studies must document non-standard siting deliberately.",
      examples: [
        { problem: "Thermometer screen on a black rooftop at midday — likely bias?", solution: "Too warm relative to a standard grass site.", answer: "Warm bias" }
      ],
      shortcuts: ["Open grass good", "Rooftop/asphalt bad for standard climate series"],
      traps: ["Any outdoor placement is standard"]
    }
  ],
  examPoints: [
    "Purpose of screen",
    "Design features",
    "Siting rules"
  ],
  commonMistakes: [
    "Screen optional.",
    "Ignoring ground surface.",
    "Wrong height irrelevant."
  ],
  relatedTopics: ["meteo-temperature-instruments", "meteo-humidity-instruments", "meteo-weather-vs-climate"],
  content: true,
  buildsOn: ["meteo-temperature-instruments"],
  leadsTo: ["meteo-weather-vs-climate"],
  usedIn: ["meteo-temperature-instruments", "meteo-humidity-instruments"]
},

{
  id: "meteo-remote-sensing",
  sectionId: "METEO-06",
  order: 7,
  title: "Remote Sensing — Weather Radar & Satellite Imaging",
  definition: "Radar and satellites observe weather at a distance. Radar is active microwave sensing of precipitation targets; satellites provide visible and infrared (and other) imagery of clouds and surface fields day and night depending on channel.",
  keyFacts: [
    "Radar: reflectivity related to precipitation intensity; Doppler for velocity",
    "Visible satellite needs sunlight",
    "Infrared works day and night via emitted thermal radiation",
    "Geostationary vs polar-orbiting platforms",
    "Complements, does not erase, surface and upper-air in-situ data"
  ],
  explanationSections: [
    { heading: "Active vs passive", body: "Radar sends a pulse and listens; many satellite channels listen to emitted or reflected radiation." }
  ],
  subtopics: [
    {
      id: "meteo-remote-sensing-vis-ir",
      title: "Visible vs infrared choice",
      summary: "Night → IR; texture/shadows → visible by day.",
      explanation: "Visible imagery is excellent for cloud texture in daylight but goes dark at night. Infrared senses temperature of cloud tops or surface and works 24 hours. Thick high clouds look cold (bright in typical IR display conventions).",
      examples: [
        { problem: "Which channel remains useful at 02:00 local time for cloud monitoring?", solution: "Infrared.", answer: "Infrared" }
      ],
      shortcuts: ["Night → IR", "Day texture → visible"],
      traps: ["Visible imagery at night"]
    },
    {
      id: "meteo-remote-sensing-radar-limits",
      title: "Radar strengths and limits",
      summary: "Great for precip location; not a surface rain gauge everywhere.",
      explanation: "Reflectivity correlates with precipitation but depends on drop size and target type. Bright banding, overshooting, and beam geometry create interpretation issues. Doppler adds velocity and severe-storm clues (including TVS) but still needs human context.",
      examples: [
        { problem: "Does strong reflectivity always equal heavy rain at the gauge under the beam?", solution: "Not always — drop size, hail, and beam height matter.", answer: "Not always" }
      ],
      shortcuts: ["Radar = structure + intensity proxy", "Doppler = motion"],
      traps: ["Radar replaces all gauges permanently"]
    }
  ],
  examPoints: [
    "Visible vs IR",
    "Radar reflectivity idea",
    "Day/night capability"
  ],
  commonMistakes: [
    "Visible at night.",
    "IR needs sunlight.",
    "Radar = exact gauge."
  ],
  relatedTopics: ["meteo-radiosondes", "meteo-aviation-products", "meteo-tornadoes"],
  content: true,
  buildsOn: ["meteo-radiation-laws"],
  leadsTo: ["meteo-aviation-products", "meteo-forecasting-methods"],
  usedIn: ["meteo-tornadoes", "meteo-aviation-products"]
},

{
  id: "meteo-ground-aviation-instruments",
  sectionId: "METEO-06",
  order: 8,
  title: "Ground-Based & Aviation Observation Instruments (Precipitation, Ceiling, Wind, Microburst & Hail)",
  definition: "Airfields combine standard meteorological sensors with aviation-specific systems: ceilometers for cloud base, weather radars/LLWAS for wind shear and microbursts, and present-weather/precipitation sensors. The goal is timely hazard detection for take-off and landing.",
  keyFacts: [
    "Ceilometer: cloud-base height",
    "Tipping-bucket gauges: good for liquid rain; can under-measure snow/ice without heating",
    "Weighing gauges: measure mass of catch — effective for frozen precipitation",
    "LLWAS / Doppler: low-level wind shear and microbursts",
    "Visibility sensors support RVR-related operations"
  ],
  explanationSections: [
    { heading: "Hazard-focused sensing", body: "Aviation instruments prioritise rapid detection of shear, low cloud, and visibility drops, and honest precipitation measurement across phases." }
  ],
  subtopics: [
    {
      id: "meteo-ground-aviation-instruments-ceiling-vis",
      title: "Ceiling and visibility tools",
      summary: "Ceilometer + visibility sensors drive approach decisions.",
      explanation: "A ceilometer estimates cloud-base height. Visibility sensors and human observations support operational minima. When ceiling or visibility crosses thresholds, SPECI and approach-category decisions follow.",
      examples: [
        { problem: "Primary automated tool for cloud-base height at an airport?", solution: "Ceilometer.", answer: "Ceilometer" }
      ],
      shortcuts: ["Ceilometer = cloud base", "VIS sensors = visibility"],
      traps: ["Ceilometer measures wind shear"]
    },
    {
      id: "meteo-ground-aviation-instruments-precip-gauges",
      title: "Liquid vs frozen precipitation gauges",
      summary: "Why weighing gauges handle snow better.",
      explanation: "Tipping-bucket gauges count tips of a small bucket of meltwater and work well for rain, but unheated buckets struggle with snow and ice. Weighing gauges continuously record the mass of accumulated precipitation regardless of phase, so they are preferred when frozen precipitation must be measured accurately.",
      examples: [
        { problem: "Which gauge type is most effective for frozen precipitation?", solution: "Weighing rain gauge.", answer: "Weighing gauge" }
      ],
      shortcuts: ["Weighing → any phase", "Tipping bucket → liquid-friendly"],
      traps: ["All gauges equally good for snow"]
    },
    {
      id: "meteo-ground-aviation-instruments-shear",
      title: "Microburst and shear detection",
      summary: "LLWAS/Doppler protect against sudden wind changes.",
      explanation: "Microbursts produce damaging divergent outflow near the surface. Low-Level Wind Shear Alert Systems and terminal Doppler radar aim to detect shear signatures quickly so alerts can be issued.",
      examples: [
        { problem: "System network designed to alert on low-level wind shear at airports?", solution: "LLWAS (or equivalent terminal shear detection).", answer: "LLWAS / terminal Doppler" }
      ],
      shortcuts: ["Microburst = divergent outflow hazard", "LLWAS = shear alert"],
      traps: ["Mean cup anemometer alone is enough for microburst warning"]
    }
  ],
  examPoints: [
    "Ceilometer purpose",
    "Weighing vs tipping-bucket for snow",
    "Microburst/shear detection"
  ],
  commonMistakes: [
    "Ceilometer = rain gauge.",
    "Ignoring frozen-precip gauge choice.",
    "No link to aviation products."
  ],
  relatedTopics: ["meteo-aviation-products", "meteo-remote-sensing", "meteo-wind-instruments"],
  content: true,
  buildsOn: ["meteo-wind-instruments", "meteo-remote-sensing"],
  leadsTo: ["meteo-aviation-products"],
  usedIn: ["meteo-aviation-products"]
},

{
  id: "meteo-aviation-products",
  sectionId: "METEO-06",
  order: 9,
  title: "Aviation Weather Products (METAR, SPECI, TAF, SIGMET, AIRMET)",
  definition: "Aviation uses coded observations and forecasts: METAR/SPECI for current conditions, TAF for aerodrome forecasts, and SIGMET/AIRMET for hazards. Decoding the product type is the first exam skill.",
  keyFacts: [
    "METAR: routine observation",
    "SPECI: special observation when thresholds crossed",
    "TAF: terminal aerodrome forecast",
    "SIGMET: significant en-route hazards",
    "Visibility, wind, weather, and cloud are core elements"
  ],
  explanationSections: [
    { heading: "Product before details", body: "Know whether you are reading an observation or a forecast before decoding groups." }
  ],
  subtopics: [
    {
      id: "meteo-aviation-products-types",
      title: "Match product to purpose",
      summary: "Obs vs forecast vs hazard.",
      explanation: "METAR/SPECI report what is happening now (or just did). TAF states expected conditions at an aerodrome for a period. SIGMET warns of significant hazards to aircraft (thunderstorms, severe turbulence, volcanic ash, etc.). Confusing TAF with METAR is a classic error.",
      examples: [
        { problem: "Coded current weather at an airport — METAR or TAF?", solution: "METAR (or SPECI).", answer: "METAR/SPECI" }
      ],
      shortcuts: ["METAR = now", "TAF = forecast", "SIGMET = hazard"],
      traps: ["TAF as an observation"]
    },
    {
      id: "meteo-aviation-products-thresholds",
      title: "Why SPECI exists",
      summary: "Threshold crossings trigger specials.",
      explanation: "When visibility, weather, or wind crosses operational thresholds, a SPECI is issued rather than waiting for the next routine METAR hour. That keeps aviation users updated on rapid changes such as fog onset.",
      examples: [
        { problem: "Visibility suddenly falls below a threshold between METARs — product?", solution: "SPECI.", answer: "SPECI" }
      ],
      shortcuts: ["Rapid change → SPECI"],
      traps: ["Only one METAR per day ever"]
    }
  ],
  examPoints: [
    "METAR vs TAF",
    "SPECI purpose",
    "SIGMET role"
  ],
  commonMistakes: [
    "TAF = observation.",
    "SIGMET = routine METAR.",
    "Ignoring SPECI triggers."
  ],
  relatedTopics: ["meteo-station-model", "meteo-remote-sensing", "meteo-fog-types"],
  content: true,
  buildsOn: ["meteo-station-model", "meteo-wind-instruments"],
  leadsTo: [],
  usedIn: ["meteo-fog-types", "meteo-thunderstorms"]
},
  
// ============================= SECTION G: Climate Classification & Global/Regional Climate =============================

{
  id: "meteo-koppen-system",
  sectionId: "METEO-07",
  order: 1,
  title: "The Köppen Climate Classification System",
  definition: "Köppen classifies climates with letter codes from monthly temperature and precipitation thresholds chosen to approximate vegetation boundaries. Learn the five main groups first, then dry-climate logic, then common second letters.",
  keyFacts: [
    "A tropical, B dry, C temperate, D continental, E polar",
    "B defined by dryness relative to temperature/PE demand — not temperature alone",
    "Second letters: f/w/s (seasonal rain) or W/S (desert/steppe) in common use",
    "Empirical system — useful shorthand, not process physics",
    "Climographs are the practical decoding tool"
  ],
  explanationSections: [
    { heading: "Code, then process", body: "Assign the letter from the data; explain the geography with circulation in the Global Climate Regions topic." }
  ],
  subtopics: [
    {
      id: "meteo-koppen-system-group-rules",
      title: "Group decision order",
      summary: "E and B checks matter before C/D fine print.",
      explanation: "First exclude polar (E) if summers are too cold. Check whether precipitation is low enough for B (dry) using the temperature-linked dryness thresholds. Remaining climates fall into A/C/D by thermal criteria. Skipping the B check misclassifies deserts as temperate.",
      examples: [
        { problem: "Hot station with almost no rain — why not C?", solution: "Dryness puts it in B before temperate letters apply.", answer: "B dry group first" }
      ],
      shortcuts: ["Check E and B early", "B = dry relative to heat"],
      traps: ["Using temperature only and skipping dryness"]
    },
    {
      id: "meteo-koppen-system-climograph",
      title: "Climograph → letters",
      summary: "Read seasonal shape, not only annual total.",
      explanation: "Year-round high T with no dry month suggests Af. Strong summer rain / winter dry suggests Aw-type patterns. Dry summer / wet winter on a mild west coast suggests Cs. Low totals against high T suggest B. Always use the monthly bars, not a single annual rainfall number.",
      examples: [
        { problem: "All months hot; winter dry, summer wet — seasonal letter?", solution: "w (dry winter).", answer: "w" }
      ],
      shortcuts: ["Shape of monthly P and T", "s = dry summer, w = dry winter"],
      traps: ["Annual rainfall only"]
    }
  ],
  examPoints: [
    "Five main groups",
    "B dryness logic",
    "Climograph seasonal letters"
  ],
  commonMistakes: [
    "Skipping B check.",
    "Confusing s and w.",
    "Treating Köppen as a process model."
  ],
  relatedTopics: ["meteo-global-climate-regions", "meteo-thornthwaite-system", "meteo-global-precip-patterns"],
  content: true,
  buildsOn: ["meteo-global-precip-patterns", "meteo-weather-vs-climate"],
  leadsTo: ["meteo-global-climate-regions", "meteo-pakistan-macroclimate"],
  usedIn: ["meteo-pakistan-macroclimate", "meteo-temp-rainfall-distribution"]
},

{
  id: "meteo-global-climate-regions",
  sectionId: "METEO-07",
  order: 2,
  title: "Global Climate Regions — Sketch Summaries",
  definition: "Climate region names (tropical wet, desert, Mediterranean, humid subtropical, marine west coast, continental, tundra, ice cap) are shorthand for recurring temperature–rainfall patterns. Use them as memory hooks for circulation geography — and use Köppen codes when the exam asks for letters.",
  keyFacts: [
    "Region names ↔ typical Köppen families (Af, Aw, BWh, Cs, Cfa, Cfb, D, ET, EF)",
    "Process first: ITCZ, subtropical highs, westerlies, continentality, orography",
    "Mediterranean: dry summer under subtropical high; wet winter storms",
    "Tropical wet–dry: seasonal ITCZ migration",
    "This topic maps patterns; Köppen topic drills letter rules"
  ],
  explanationSections: [
    { heading: "Division of labour with Köppen", body: "Do not re-list every letter code here. Link each famous region name to one controlling process so the map is explainable, not only memorised." }
  ],
  subtopics: [
    {
      id: "meteo-global-climate-regions-process-hooks",
      title: "Process hooks for famous regions",
      summary: "Name → controlling circulation, not another code list.",
      explanation: "Tropical wet: near-persistent deep convection / ITCZ. Savanna/wet–dry: ITCZ in summer only. Hot deserts: subtropical subsidence and/or continental isolation. Mediterranean: summer dry stable highs, winter mid-latitude storms. Marine west coast: year-round oceanic westerlies and mild temperatures.",
      examples: [
        { problem: "Climate with dry hot summers and wet mild winters on a west coast ~35° — process?", solution: "Subtropical high dominates summer; winter westerly cyclones bring rain.", answer: "Mediterranean regime" }
      ],
      shortcuts: ["Savanna ↔ seasonal ITCZ", "Desert ↔ subsidence", "Mediterranean ↔ summer high / winter storms"],
      traps: ["Reciting Köppen letters without a process"]
    },
    {
      id: "meteo-global-climate-regions-continentality",
      title: "Coasts vs interiors",
      summary: "Same latitude, different annual range.",
      explanation: "West-coast marine climates stay mild with smaller annual temperature range. Continental interiors at similar latitude run hotter in summer and colder in winter, and often drier if far from moisture sources. Polar climates add the low-sun constraint.",
      examples: [
        { problem: "Why is a mid-latitude interior often colder in winter than a west coast at the same latitude?", solution: "Continentality — weak marine moderation, strong radiative winter cooling.", answer: "Continentality" }
      ],
      shortcuts: ["Ocean → moderate", "Interior → extremes"],
      traps: ["Assuming latitude alone fixes monthly temperatures"]
    }
  ],
  examPoints: [
    "Link region names to circulation",
    "Mediterranean and savanna mechanisms",
    "Continentality effect"
  ],
  commonMistakes: [
    "Duplicating the entire Köppen code table here.",
    "Latitude-only reasoning.",
    "Mixing region names with single-year weather."
  ],
  relatedTopics: ["meteo-koppen-system", "meteo-thornthwaite-system", "meteo-pakistan-macroclimate", "meteo-temp-rainfall-distribution"],
  content: true,
  buildsOn: ["meteo-koppen-system", "meteo-global-circulation"],
  leadsTo: ["meteo-thornthwaite-system"],
  usedIn: ["meteo-pakistan-macroclimate", "meteo-temp-rainfall-distribution"]
},

{
  id: "meteo-thornthwaite-system",
  sectionId: "METEO-07",
  order: 3,
  title: "The Thornthwaite Moisture-Based Classification System",
  definition: "Thornthwaite types climates using water balance: precipitation compared with potential evapotranspiration (PE). It is more hydrologic than Köppen’s vegetation-linked temperature–precipitation letter rules.",
  keyFacts: [
    "Core comparison: P versus PE",
    "PE rises with available energy/temperature",
    "Moisture index: arid to humid provinces",
    "Thermal efficiency index for energy regime",
    "Exam contrast: Thornthwaite = water balance; Köppen = empirical T/P letters"
  ],
  explanationSections: [
    { heading: "When the question says water balance", body: "Reach for Thornthwaite. When it shows a climograph and letter codes, reach for Köppen." }
  ],
  subtopics: [
    {
      id: "meteo-thornthwaite-system-pe",
      title: "PE and moisture surplus/deficit",
      summary: "Demand vs supply.",
      explanation: "PE is the evaporative demand of the atmosphere from a well-watered surface. Where annual P exceeds PE, surplus and humid conditions are favoured; where PE exceeds P, deficit and aridity increase. Irrigation discussions sit naturally in this framework.",
      examples: [
        { problem: "Region with PE much larger than P — humid or arid tendency?", solution: "Arid tendency / moisture deficit.", answer: "Arid / deficit" }
      ],
      shortcuts: ["PE = demand", "P > PE surplus", "P < PE deficit"],
      traps: ["Treating PE as actual evaporation always realised"]
    },
    {
      id: "meteo-thornthwaite-system-vs-koppen",
      title: "Exam contrast with Köppen",
      summary: "One line distinction that scores marks.",
      explanation: "Köppen uses monthly temperature and precipitation thresholds tied historically to vegetation. Thornthwaite builds indices around PE and moisture balance. If options ask which system stresses water balance, choose Thornthwaite.",
      examples: [
        { problem: "Which system is built around potential evapotranspiration?", solution: "Thornthwaite.", answer: "Thornthwaite" }
      ],
      shortcuts: ["Thornthwaite ↔ PE", "Köppen ↔ letter thresholds"],
      traps: ["Saying the systems are identical"]
    }
  ],
  examPoints: [
    "P vs PE",
    "Moisture index idea",
    "Contrast with Köppen"
  ],
  commonMistakes: [
    "PE = always actual ET.",
    "No difference from Köppen.",
    "Ignoring thermal efficiency index when mentioned."
  ],
  relatedTopics: ["meteo-koppen-system", "meteo-pakistan-macroclimate"],
  content: true,
  buildsOn: ["meteo-koppen-system", "meteo-moisture-metrics"],
  leadsTo: ["meteo-pakistan-macroclimate"],
  usedIn: ["meteo-pakistan-macroclimate"]
},

{
  id: "meteo-pakistan-macroclimate",
  sectionId: "METEO-07",
  order: 4,
  title: "Macro-Climatic Classification of Pakistan",
  definition: "Pakistan spans arid and semi-arid lowlands, highland climates, and coastal variants. Macro-regions are set by subtropical latitude, monsoon moisture, western disturbances, and the mountain barrier — not by a single national climate type.",
  keyFacts: [
    "Much of the country is arid/semi-arid relative to high PE",
    "Indus plain: hot summers; uneven monsoon",
    "Northern mountains: altitude control; winter WD precipitation",
    "Balochistan: extensive aridity with highland exceptions",
    "Two moisture engines: summer monsoon and winter WDs"
  ],
  explanationSections: [
    { heading: "Regional, not national one-label", body: "FPSC-style answers should name regional contrasts rather than 'Pakistan is tropical wet'." }
  ],
  subtopics: [
    {
      id: "meteo-pakistan-macroclimate-arid-core",
      title: "Arid core and irrigation dependence",
      summary: "High PE, modest P — rivers matter.",
      explanation: "Large parts of the Indus plain and interior Balochistan combine intense summer heat with rainfall that is small relative to evaporative demand. Agriculture depends on irrigation from river systems because local climatic moisture is insufficient and unreliable in many districts.",
      examples: [
        { problem: "Why is irrigation central on much of the Indus plain climatically?", solution: "Rainfall is often inadequate relative to PE; moisture is unreliable.", answer: "P << PE / unreliable rain" }
      ],
      shortcuts: ["Arid/semi-arid core", "Irrigation offsets climatic deficit"],
      traps: ["Calling the whole country humid monsoon"]
    },
    {
      id: "meteo-pakistan-macroclimate-two-engines",
      title: "Two seasons of moisture",
      summary: "Monsoon ≠ western disturbances.",
      explanation: "Summer monsoon moisture affects parts of the country unevenly. Winter western disturbances deliver much of the northern rainfall and snowfall. Collapsing both into one 'rainy season' loses exam marks and misreads flood vs snowmelt risks.",
      examples: [
        { problem: "January rain in Islamabad is usually monsoon or WD-related?", solution: "Western disturbance related.", answer: "Western disturbance" }
      ],
      shortcuts: ["Summer fringe monsoon", "Winter WDs in north"],
      traps: ["One rainy season narrative for all months and regions"]
    }
  ],
  examPoints: [
    "Arid/semi-arid dominance",
    "Regional contrasts",
    "Monsoon vs WD"
  ],
  commonMistakes: [
    "Single climate label nationwide.",
    "Ignoring altitude in the north.",
    "Merging WD with monsoon."
  ],
  relatedTopics: ["meteo-koppen-system", "meteo-indian-ocean-monsoon", "meteo-western-disturbances", "meteo-temp-rainfall-distribution"],
  content: true,
  buildsOn: ["meteo-koppen-system", "meteo-global-climate-regions"],
  leadsTo: ["meteo-temp-rainfall-distribution"],
  usedIn: ["meteo-temp-rainfall-distribution", "meteo-extreme-events"]
},

// ============================= SECTION H =============================

{
  id: "meteo-past-climate-reconstruction",
  sectionId: "METEO-08",
  order: 1,
  title: "Reconstructing Past Climates",
  definition: "Past climates are reconstructed from proxy evidence — ice cores, tree rings, sediments, corals, pollen, and historical documents — because instrumental records cover only a short recent interval. Proxies record environmental conditions that correlate with temperature, precipitation, ice volume, or atmospheric composition.",
  keyFacts: [
    "Instrumental period is short compared with geological and orbital timescales",
    "Ice cores: isotopes, trapped gases (CO₂, CH₄), dust — multi-proxy archives",
    "Tree rings: annual resolution for temperature/moisture stress in suitable regions",
    "Sediments and pollen: vegetation and depositional environment changes",
    "Marine sediments and corals: ocean temperature and chemistry clues",
    "Each proxy has resolution limits, dating uncertainty, and interpretation caveats"
  ],
  explanationSections: [
    { heading: "Indirect but powerful", body: "No thermometer existed in the ice age, yet ice cores still preserve atmospheric bubbles and isotopic temperature signals. Reconstruction is detective work: multiple proxies are cross-checked rather than trusted in isolation." }
  ],
  subtopics: [
    {
      id: "meteo-past-climate-reconstruction-proxies",
      title: "Major proxy types",
      summary: "Ice, trees, sediments, corals, documents.",
      explanation: "Ice cores combine gas composition with isotopic temperature indicators. Tree rings offer annual dating where growth responds to climate. Lake and ocean sediments archive longer, often coarser records. Historical diaries and harvest records fill recent centuries in some regions.",
      examples: [
        { problem: "Which archive can directly sample ancient air composition as trapped bubbles?", solution: "Ice cores — closed bubbles preserve past atmospheric gases.", answer: "Ice cores" }
      ],
      shortcuts: ["Ice = gases + isotopes", "Rings = annual (where usable)"],
      traps: ["Treating every proxy as a perfect thermometer"]
    },
    {
      id: "meteo-past-climate-reconstruction-limits",
      title: "Dating and uncertainty",
      summary: "Resolution and calibration constrain claims.",
      explanation: "A proxy may average seasons or decades. Calibration against the instrumental period is needed to convert ring width or isotope ratios into climate units. Multi-proxy agreement strengthens confidence.",
      examples: [
        { problem: "Why combine several proxies rather than rely on one tree-ring site?", solution: "Local non-climate effects and dating gaps can bias a single record; independent archives test robustness.", answer: "Cross-check / reduce local bias" }
      ],
      shortcuts: ["Multi-proxy > single series", "Know resolution limits"],
      traps: ["Over-precise claims beyond proxy resolution"]
    }
  ],
  comparisonTable: {
    title: "Selected proxies",
    headers: ["Proxy", "Typical strength"],
    rows: [
      ["Ice cores", "Gases + long polar records"],
      ["Tree rings", "Annual resolution"],
      ["Sediments / pollen", "Long vegetation/environment history"],
      ["Corals", "Tropical ocean signals"]
    ]
  },
  examPoints: [
    "Proxies extend climate history beyond instruments",
    "Ice cores preserve ancient air",
    "Uncertainty and multi-proxy checks matter"
  ],
  commonMistakes: [
    "Equating proxy with direct thermometer readings.",
    "Ignoring dating uncertainty.",
    "Using one site as global truth.",
    "Confusing weather anecdotes with reconstructed climate means."
  ],
  relatedTopics: ["meteo-milankovitch-cycles", "meteo-solar-volcanic-forcing"],
  content: true,
  buildsOn: ["earth-c2", "earth-c3", "meteo-weather-vs-climate"],
  leadsTo: ["meteo-milankovitch-cycles"],
  usedIn: ["meteo-milankovitch-cycles", "meteo-climate-feedbacks"]
},

{
  id: "meteo-milankovitch-cycles",
  sectionId: "METEO-08",
  order: 2,
  title: "Orbital Milankovitch Cycles",
  definition: "Milankovitch cycles are slow changes in Earth’s orbit and tilt that redistribute insolation by season and latitude over tens of thousands of years. They help pace ice-age rhythms; they do not explain industrial-era warming as a primary cause.",
  keyFacts: [
    "Eccentricity: ~100,000-year cycle — shape of the orbit",
    "Obliquity: ~41,000-year cycle — tilt ~22.1°–24.5° (now ~23.5°)",
    "Precession: ~19–23,000-year cycle — seasonal timing of perihelion",
    "They change distribution of sunlight more than total solar output alone",
    "Not a substitute for greenhouse-gas forcing in the modern trend"
  ],
  explanationSections: [
    { heading: "Paleoclimate tool, not a daily forecast", body: "Use these cycles for ice-age and long-term exam questions. Do not invoke eccentricity to explain this decade’s temperature anomaly." }
  ],
  subtopics: [
    {
      id: "meteo-milankovitch-cycles-what-each-changes",
      title: "What each cycle changes",
      summary: "Tilt ↔ season strength; precession ↔ which season is closer to Sun; eccentricity ↔ contrast amplitude.",
      explanation: "Higher obliquity strengthens seasonality at high latitudes. Precession decides whether northern summer occurs near perihelion or aphelion. Eccentricity modulates how different perihelion and aphelion are. Together they reshape polar summer insolation critical for ice sheets.",
      examples: [
        { problem: "Which cycle varies Earth’s axial tilt between about 22° and 24.5°?", solution: "Obliquity.", answer: "Obliquity" }
      ],
      shortcuts: ["Obliquity = tilt", "Precession = seasonal timing", "Eccentricity = orbital shape"],
      traps: ["Claiming eccentricity changes total solar constant by factors of two"]
    },
    {
      id: "meteo-milankovitch-cycles-not-modern",
      title: "Why orbits do not replace GHG forcing today",
      summary: "Timescale and direction mismatch with industrial warming.",
      explanation: "Orbital changes operate on millennial timescales. The rapid warming since the 19th–20th centuries aligns with rising greenhouse gases, not with a sudden orbital jump. Paleoclimate still uses Milankovitch pacing for ice ages — both statements can be true without contradiction.",
      examples: [
        { problem: "Is the main driver of warming since 1950 a sudden shift to maximum eccentricity?", solution: "No — greenhouse-gas forcing dominates the modern trend discussion.", answer: "No" }
      ],
      shortcuts: ["Orbits = slow", "Modern trend = GHG"],
      traps: ["Using ice-age orbital theory to deny greenhouse physics"]
    }
  ],
  examPoints: [
    "Three cycles and approximate periods",
    "Insolation redistribution",
    "Not the industrial warming mechanism"
  ],
  commonMistakes: [
    "Wrong cycle periods.",
    "Orbits explain 21st-century decade-to-decade rise primarily.",
    "Confusing precession with obliquity."
  ],
  relatedTopics: ["meteo-past-climate-reconstruction", "meteo-radiative-forcing", "meteo-climate-feedbacks"],
  content: true,
  buildsOn: ["meteo-radiation-laws"],
  leadsTo: ["meteo-past-climate-reconstruction", "meteo-climate-feedbacks"],
  usedIn: ["meteo-past-climate-reconstruction"]
},

{
  id: "meteo-climate-feedbacks",
  sectionId: "METEO-08",
  order: 4,
  title: "Climate Feedback Mechanisms",
  definition: "Feedbacks amplify or damp climate perturbations. Positive feedbacks reinforce the initial change; negative feedbacks oppose it. Water vapour, ice-albedo, and certain cloud responses are central examples in greenhouse warming discussions.",
  keyFacts: [
    "Positive feedback amplifies; negative stabilises",
    "Water-vapour feedback: warmer → more vapour → more greenhouse trapping",
    "Ice-albedo: melt → darker surface → more absorption → more warming",
    "Cloud feedbacks are complex and a major uncertainty",
    "Feedbacks act on top of external forcings"
  ],
  explanationSections: [
    { heading: "Forcing vs feedback", body: "CO₂ increase is a forcing; water-vapour increase in response is a feedback." }
  ],
  subtopics: [
    {
      id: "meteo-climate-feedbacks-sign",
      title: "Sign of the feedback",
      summary: "Does the response reinforce or oppose?",
      explanation: "Ask what the initial change does to a process, then whether that process pushes temperature further in the same direction. Ice melt lowering albedo is positive. A pure longwave cooling increase with temperature (Planck response) is a stabilising negative feedback often treated separately in budgets.",
      examples: [
        { problem: "Warming melts ice, albedo falls, more solar absorbed — feedback sign?", solution: "Positive.", answer: "Positive" }
      ],
      shortcuts: ["Same direction → positive", "Opposes → negative"],
      traps: ["Positive feedback means 'good news'"]
    },
    {
      id: "meteo-climate-feedbacks-not-forcing",
      title: "Do not confuse with forcing",
      summary: "Feedback needs an initial perturbation.",
      explanation: "Radiative forcing measures the external push (e.g. GHG concentration change). Feedbacks are climate system responses that alter the final temperature change. Mixing the terms muddles IPCC-style questions.",
      examples: [
        { problem: "Is ice-albedo a primary external forcing like a volcanic aerosol pulse?", solution: "No — it is a feedback to temperature change.", answer: "No — feedback" }
      ],
      shortcuts: ["Forcing = external push", "Feedback = system response"],
      traps: ["Calling water vapour the main external forcing instead of a feedback"]
    }
  ],
  examPoints: [
    "Positive vs negative",
    "Water vapour and ice-albedo",
    "Forcing vs feedback"
  ],
  commonMistakes: [
    "Positive = good.",
    "Water vapour as external forcing only.",
    "Ignoring cloud uncertainty."
  ],
  relatedTopics: ["meteo-radiative-forcing", "meteo-greenhouse-effect", "meteo-ipcc-rcps"],
  content: true,
  buildsOn: ["meteo-greenhouse-effect", "meteo-radiation-laws"],
  leadsTo: ["meteo-radiative-forcing", "meteo-ipcc-rcps"],
  usedIn: ["meteo-ipcc-rcps", "meteo-pakistan-nccp"]
},

{
  id: "meteo-radiative-forcing",
  sectionId: "METEO-08",
  order: 4,
  title: "Radiative Forcing",
  definition: "Radiative forcing is the change in net downward radiative flux at a specified level (often tropopause or top of atmosphere) due to a driver such as greenhouse gases, aerosols, solar output, or land-use change, after stratospheric adjustment in standard definitions. It is a common scale for comparing climate drivers.",
  keyFacts: [
    "Positive forcing → warming tendency; negative → cooling tendency",
    "CO₂ and other GHGs: positive forcing as concentrations rise",
    "Aerosols often provide negative forcing (scattering) but with large uncertainty and regional pattern",
    "Units: W/m²",
    "Forcing is not the full temperature change — feedbacks convert forcing into response",
    "IPCC assessments tabulate forcings by component"
  ],
  explanationSections: [
    { heading: "A common currency for drivers", body: "Rather than comparing a volcano to a CO₂ trend in prose only, scientists express both as W/m² perturbations. That does not replace regional impacts or feedback complexity, but it organises global-mean comparisons." }
  ],
  subtopics: [
    {
      id: "meteo-radiative-forcing-sign",
      title: "Sign and units",
      summary: "W/m² positive warms, negative cools (global-mean sense).",
      explanation: "Increasing long-lived GHGs reduces outgoing longwave efficiency and yields positive forcing. Bright aerosols that reflect sunlight yield negative forcing. Local surface effects can differ from global-mean tropopause forcing.",
      examples: [
        { problem: "Is a large reflective aerosol burden typically a positive or negative radiative forcing?", solution: "Negative — more sunlight scattered back to space reduces net absorbed energy.", answer: "Negative" }
      ],
      shortcuts: ["+RF → warm tendency", "−RF → cool tendency", "Unit W/m²"],
      traps: ["Equating forcing magnitude directly with local weather"]
    },
    {
      id: "meteo-radiative-forcing-vs-response",
      title: "Forcing versus temperature response",
      summary: "Feedbacks and inertia turn forcing into climate change over time.",
      explanation: "Oceans delay full warming. Feedbacks amplify or reduce the equilibrium response. Two forcings of equal W/m² can still differ in efficacy depending on the driver.",
      examples: [
        { problem: "Why doesn’t temperature jump instantly when RF changes?", solution: "The climate system, especially the ocean, has thermal inertia; equilibrium response takes time.", answer: "Thermal inertia / ocean heat uptake" }
      ],
      shortcuts: ["RF ≠ ΔT instantly", "Feedbacks shape gain"],
      traps: ["Ignoring ocean lag"]
    }
  ],
  comparisonTable: {
    title: "Example drivers",
    headers: ["Driver", "Typical RF sign"],
    rows: [
      ["Rising CO₂", "Positive"],
      ["Reflective aerosols", "Negative"],
      ["Large volcanic sulfate peak", "Negative (temporary)"]
    ]
  },
  formula: [
    {
      name: "Radiative forcing (conceptual)",
      expression: "\\Delta F\\ [\\mathrm{W\\,m^{-2}}]\\quad(+\\Rightarrow\\text{warming tendency},\\ -\\Rightarrow\\text{cooling})",
      variables: [
        { symbol: "\\Delta F", meaning: "change in net downward radiative flux (often at tropopause/TOA)" }
      ]
    }
  ],
  examPoints: [
    "RF in W/m²",
    "Positive vs negative meaning",
    "Distinct from full temperature response"
  ],
  commonMistakes: [
    "Confusing RF with surface air temperature change.",
    "Forgetting aerosol negative forcing.",
    "Treating all forcings as equally effective.",
    "Ignoring time lags."
  ],
  relatedTopics: ["meteo-ipcc-rcps", "meteo-solar-volcanic-forcing"],
  content: true,
  buildsOn: ["meteo-greenhouse-effect", "meteo-radiation-laws", "meteo-climate-feedbacks"],
  leadsTo: ["meteo-ipcc-rcps", "meteo-solar-volcanic-forcing"],
  usedIn: ["meteo-ipcc-rcps", "meteo-solar-volcanic-forcing", "meteo-pakistan-nccp"]
},

{
  id: "meteo-ipcc-rcps",
  sectionId: "METEO-08",
  order: 5,
  title: "IPCC Representative Concentration Pathways",
  definition: "Representative Concentration Pathways (RCPs) are scenarios of future radiative forcing used in climate modelling (e.g. RCP2.6, RCP4.5, RCP6.0, RCP8.5). The number approximates end-of-century forcing in W/m². They are not forecasts of what will happen, but standardised ‘what if’ pathways for comparing model responses.",
  keyFacts: [
    "RCP2.6: strong mitigation — low forcing pathway",
    "RCP4.5 / RCP6.0: intermediate pathways",
    "RCP8.5: high forcing pathway (very high emissions trajectory in classic use)",
    "Named by approximate 2100 radiative forcing level",
    "Later IPCC work also uses SSPs (Shared Socioeconomic Pathways) paired with forcing levels",
    "Scenarios enable comparison across models and studies"
  ],
  explanationSections: [
    { heading: "Scenarios, not prophecies", body: "RCPs hold greenhouse gas concentrations/forcing on defined paths so scientists can test climate sensitivity and impacts. Policy choices influence which path the real world resembles; the RCP itself is an input assumption." }
  ],
  subtopics: [
    {
      id: "meteo-ipcc-rcps-ladder",
      title: "The RCP ladder",
      summary: "2.6 low → 8.5 high end-of-century forcing.",
      explanation: "Lower RCPs assume rapid emissions reductions; higher RCPs assume continued growth in forcing. Impacts on temperature, extremes, and sea level scale strongly across this ladder in model ensembles.",
      examples: [
        { problem: "Which classic RCP represents the highest forcing pathway among 2.6, 4.5, 6.0, and 8.5?", solution: "RCP8.5.", answer: "RCP8.5" }
      ],
      shortcuts: ["Number ≈ W/m² in 2100", "Higher number → higher forcing path"],
      traps: ["Treating RCP8.5 as a certainty rather than a scenario"]
    },
    {
      id: "meteo-ipcc-rcps-use",
      title: "How RCPs are used",
      summary: "Inputs to models; basis for impact comparison.",
      explanation: "Climate models run under each pathway produce temperature and precipitation projections. Impact communities use those outputs for risk assessment. SSPs add socioeconomic storylines to newer scenario frameworks.",
      examples: [
        { problem: "Are RCPs observational data or scenario inputs?", solution: "Scenario inputs — prescribed pathways for experiments, not measured history.", answer: "Scenario inputs" }
      ],
      shortcuts: ["RCP = scenario input", "Compare models on same path"],
      traps: ["Calling an RCP a measured forecast"]
    }
  ],
  comparisonTable: {
    title: "Classic RCPs (sketch)",
    headers: ["RCP", "Character"],
    rows: [
      ["2.6", "Strong mitigation / low forcing"],
      ["4.5", "Intermediate"],
      ["6.0", "Intermediate-high"],
      ["8.5", "Very high forcing pathway"]
    ]
  },
  examPoints: [
    "RCPs are scenarios labelled by ≈2100 RF",
    "Not guarantees of the future",
    "Higher RCP → stronger forcing path"
  ],
  commonMistakes: [
    "Treating RCP8.5 as inevitable.",
    "Confusing RCPs with historical observations.",
    "Ignoring that mitigation changes pathway likelihood.",
    "Mixing RCP labels with weather forecasts."
  ],
  relatedTopics: ["meteo-radiative-forcing"],
  content: true,
  buildsOn: ["meteo-radiative-forcing"],
  leadsTo: ["meteo-pakistan-nccp"],
  usedIn: ["meteo-pakistan-nccp", "meteo-nccp-objectives"]
},

{
  id: "meteo-solar-volcanic-forcing",
  sectionId: "METEO-08",
  order: 6,
  title: "Solar and Volcanic Radiative Forcing",
  definition: "Solar variability and volcanic eruptions impose natural radiative forcings. Solar output changes modestly over cycles; large sulfur-rich volcanic eruptions inject stratospheric aerosols that reflect sunlight and cool the surface for one to a few years. Neither replaces greenhouse-gas forcing as the main driver of long-term industrial-era warming.",
  keyFacts: [
    "Solar cycle ≈ 11 years — small irradiance changes relative to GHG forcing since pre-industrial",
    "Stratospheric volcanic aerosols: negative RF, short-lived (years)",
    "Surface cooling after major eruptions is a classic natural experiment",
    "Tropospheric pollution aerosols differ from stratospheric volcanic sulfate in lifetime and distribution",
    "Natural forcings are included in climate attribution studies alongside anthropogenic forcings",
    "A quiet sun does not explain the multi-decadal GHG-linked warming pattern"
  ],
  explanationSections: [
    { heading: "Natural does not mean dominant today", body: "Volcanoes clearly cool climate temporarily. Solar cycles modulate energy slightly. Attribution science quantifies these against rising greenhouse gases — and finds GHGs dominate the long-term industrial warming signal." }
  ],
  subtopics: [
    {
      id: "meteo-solar-volcanic-forcing-volcano",
      title: "Volcanic aerosol cooling",
      summary: "Stratospheric sulfate reflects sunlight; years-scale cooling.",
      explanation: "Explosive eruptions that reach the stratosphere spread sulfate aerosols globally. They increase planetary albedo, reduce surface insolation, and typically fade within a few years as aerosols settle.",
      examples: [
        { problem: "Is volcanic stratospheric aerosol forcing usually positive or negative?", solution: "Negative — more reflection of solar radiation.", answer: "Negative" }
      ],
      shortcuts: ["Volcanic sulfate → cool (temporary)", "Stratosphere = longer lifetime than rain-washed troposphere"],
      traps: ["Expecting volcanoes to cause long-term global warming"]
    },
    {
      id: "meteo-solar-volcanic-forcing-solar",
      title: "Solar variability",
      summary: "Small cycle amplitude versus GHG trend.",
      explanation: "Satellite-era measurements show solar irradiance varies only slightly across the 11-year cycle. That amplitude is much smaller than the positive forcing from accumulated greenhouse gases since the nineteenth century.",
      examples: [
        { problem: "Why is the 11-year solar cycle insufficient to explain century-scale industrial warming?", solution: "The irradiance change is small and cyclic, not a sustained forcing matching the observed GHG and temperature trends.", answer: "Too small / cyclic, not sustained GHG-like" }
      ],
      shortcuts: ["Solar cycle small in RF terms", "GHG trend dominates long-term"],
      traps: ["Blaming all climate change on the solar cycle alone"]
    }
  ],
  comparisonTable: {
    title: "Natural forcings",
    headers: ["Source", "Typical effect"],
    rows: [
      ["Large volcano (stratospheric)", "Short-term cooling"],
      ["Solar 11-y cycle", "Small modulation"],
      ["Long-lived GHG rise", "Sustained positive RF"]
    ]
  },
  examPoints: [
    "Volcanic stratospheric aerosols cool temporarily",
    "Solar cycle forcing is relatively small",
    "Does not negate GHG-driven long-term warming"
  ],
  commonMistakes: [
    "Volcanoes as long-term warming agents.",
    "Overstating solar cycle magnitude.",
    "Ignoring attribution literature structure.",
    "Confusing weather after one eruption with climate policy."
  ],
  relatedTopics: ["meteo-radiative-forcing", "meteo-past-climate-reconstruction"],
  content: true,
  buildsOn: ["meteo-radiative-forcing", "earth-g3", "meteo-radiation-laws"],
  leadsTo: [],
  usedIn: ["meteo-past-climate-reconstruction", "meteo-ipcc-rcps"]
},

{
  id: "meteo-pakistan-nccp",
  sectionId: "METEO-08",
  order: 7,
  title: "The Pakistan National Climate Change Policy (NCCP) 2012",
  definition: "Pakistan’s NCCP (2012) is the national policy framework for climate change. It prioritises adaptation to impacts already facing the country while also addressing mitigation, capacity, and mainstreaming across sectors.",
  keyFacts: [
    "Adaptation is a central emphasis for a high-impact country",
    "Pakistan contributes less than about 1% of global greenhouse gas emissions yet faces high climate vulnerability — a standard equity and policy talking point",
    "Mitigation and energy choices also appear in the policy",
    "Water, agriculture, forests, biodiversity, disaster risks are key sectors",
    "Policy framework — implementation needs further plans and institutions"
  ],
  explanationSections: [
    { heading: "Policy, not a physics law", body: "NCCP organises national response; it does not replace the physical science of forcing and feedbacks." }
  ],
  subtopics: [
    {
      id: "meteo-pakistan-nccp-adapt-first",
      title: "Why adaptation is emphasised",
      summary: "High exposure; small share of global emissions.",
      explanation: "Pakistan faces serious hydrometeorological risks now, while contributing only a small fraction of global GHG emissions (commonly cited as less than 1%). Policy therefore stresses adaptation — water management, disaster risk reduction, resilient agriculture — alongside longer-term mitigation consistent with development needs.",
      examples: [
        { problem: "About what share of global GHG emissions is Pakistan commonly said to contribute?", solution: "Less than 1%.", answer: "Less than 1%" }
      ],
      shortcuts: ["Adaptation central", "<1% of global GHGs", "High vulnerability"],
      traps: ["NCCP = mitigation-only document", "Assuming Pakistan is a top global emitter"]
    },
    {
      id: "meteo-pakistan-nccp-sectors-skill",
      title: "Sector checklist for MCQs",
      summary: "Water, ag, disasters, forests…",
      explanation: "When stems ask which sectors NCCP addresses, water resources, agriculture, forestry, biodiversity, and disaster risk are safe anchors. Integrate with the extreme-events topic for concrete hazards (floods, GLOFs, heat).",
      examples: [
        { problem: "Name two sectors commonly prioritised under NCCP-style framing.", solution: "e.g. water and agriculture (or DRR, forests).", answer: "Water / agriculture / DRR / forests" }
      ],
      shortcuts: ["Water + ag + DRR", "Policy → sectors"],
      traps: ["NCCP only about aviation weather codes"]
    }
  ],
  examPoints: [
    "NCCP 2012 identity",
    "Adaptation emphasis",
    "Small share of global emissions",
    "Key sectors"
  ],
  commonMistakes: [
    "Mitigation-only reading.",
    "Confusing policy with IPCC scenarios.",
    "Inflating Pakistan’s global emissions share."
  ],
  relatedTopics: ["meteo-nccp-objectives", "meteo-extreme-events", "meteo-ipcc-rcps"],
  content: true,
  buildsOn: ["meteo-extreme-events", "meteo-climate-feedbacks"],
  leadsTo: ["meteo-nccp-objectives"],
  usedIn: ["meteo-nccp-objectives"]
},
// ============================= SECTION I =============================

{
  id: "meteo-indian-ocean-monsoon",
  sectionId: "METEO-09",
  order: 1,
  title: "The Indian Ocean Monsoon System",
  definition: "The Indian Ocean / South Asian monsoon is the regional expression of seasonal wind reversal and rainfall over the subcontinent, tied to land–sea heating contrast, the monsoon trough, and moisture supply from the warm ocean. Pakistan sits on the northwestern fringe with uneven summer rains.",
  keyFacts: [
    "Summer: moist inflow, monsoon trough, uneven rains over Pakistan",
    "Winter: relatively dry monsoon phase over much of the region",
    "Topography modulates rainfall strongly",
    "Interacts with ENSO and IOD probabilistically",
    "Active and break spells — not continuous rain"
  ],
  explanationSections: [
    { heading: "Fringe geography", body: "Core monsoon rainfall belts lie southeast of much of Pakistan; treat national totals carefully and regionally." }
  ],
  subtopics: [
    {
      id: "meteo-indian-ocean-monsoon-fringe",
      title: "Pakistan fringe impacts",
      summary: "Who gets rain, who stays dry.",
      explanation: "Monsoon moisture advances unevenly; some northern and eastern districts receive meaningful summer totals while large arid zones do not. Orography can enhance local rain. Planning and exam answers should be district-aware, not slogan-based.",
      examples: [
        { problem: "Is monsoon rainfall spatially uniform across Pakistan?", solution: "No — fringe location and aridity gradients produce large contrasts.", answer: "No — uneven" }
      ],
      shortcuts: ["Fringe = uneven", "Orography modulates"],
      traps: ["Uniform national monsoon flooding every year"]
    },
    {
      id: "meteo-indian-ocean-monsoon-modes",
      title: "ENSO/IOD modulation",
      summary: "Odds shifters, not switches.",
      explanation: "El Niño can raise drought odds; IOD phases can reinforce or offset. Neither is a guaranteed seasonal outcome. Intraseasonal MJO pulses further organise active and break spells inside the season.",
      examples: [
        { problem: "Does El Niño guarantee a failed Pakistan monsoon?", solution: "No — probabilistic teleconnection only.", answer: "No" }
      ],
      shortcuts: ["ENSO/IOD change odds", "MJO → active/break"],
      traps: ["Hard determinism from one index"]
    }
  ],
  examPoints: [
    "Seasonal reversal context",
    "Pakistan fringe",
    "Probabilistic ENSO/IOD link"
  ],
  commonMistakes: [
    "Uniform rain map.",
    "Deterministic ENSO rules.",
    "Ignoring breaks and orography."
  ],
  relatedTopics: ["meteo-monsoon-system", "meteo-enso-global-impacts", "meteo-iod", "meteo-temp-rainfall-distribution"],
  content: true,
  buildsOn: ["meteo-monsoon-system", "meteo-global-circulation"],
  leadsTo: ["meteo-temp-rainfall-distribution", "meteo-extreme-events"],
  usedIn: ["meteo-temp-rainfall-distribution", "meteo-extreme-events"]
},

{
  id: "meteo-western-disturbances",
  sectionId: "METEO-09",
  order: 2,
  title: "Western Disturbances & Winter Rainfall",
  definition: "Western disturbances are eastward-moving extratropical/subtropical troughs in the mid-latitude westerlies that bring winter rain and snow to northern Pakistan and adjoining regions. They are not the summer monsoon.",
  keyFacts: [
    "Winter and early spring focus",
    "Embedded in subtropical westerly jet / mid-latitude flow",
    "Rain and snow over northern mountains and adjoining plains",
    "Important for rabi moisture and glaciers",
    "Separate moisture engine from summer monsoon"
  ],
  explanationSections: [
    { heading: "Name the season and the jet", body: "If the stem is January Islamabad rain, think WD, not monsoon." }
  ],
  subtopics: [
    {
      id: "meteo-western-disturbances-id",
      title: "Recognising a WD setup",
      summary: "Eastward trough in cool season westerlies.",
      explanation: "A WD appears as a trough or induced low approaching from the west, often with cloud and precip marching eastward across Iran–Afghanistan–Pakistan. Upper-air charts show the wave in the westerlies; surface effects depend on moisture and orography.",
      examples: [
        { problem: "February snowfall in the northern mountains after an eastward trough — primary system type?", solution: "Western disturbance.", answer: "Western disturbance" }
      ],
      shortcuts: ["Cool season + westerly trough → WD", "Eastward progression"],
      traps: ["Labelling all winter rain as monsoon"]
    },
    {
      id: "meteo-western-disturbances-vs-monsoon",
      title: "WD vs summer monsoon",
      summary: "Different season, direction, and dynamics.",
      explanation: "Monsoon summer rains link to the seasonal wind reversal and maritime inflow from the south. WDs are mid-latitude/subtropical systems in the westerlies. Flood versus snowmelt planning treats them as distinct risk channels.",
      examples: [
        { problem: "Does a strong July monsoon current count as a western disturbance?", solution: "No.", answer: "No" }
      ],
      shortcuts: ["WD = winter westerly wave", "Monsoon = summer seasonal system"],
      traps: ["One rainy-season label for all months"]
    }
  ],
  examPoints: [
    "Winter extratropical/subtropical origin",
    "Northern Pakistan impacts",
    "Distinct from monsoon"
  ],
  commonMistakes: [
    "WD = monsoon.",
    "Ignoring orographic snow.",
    "Wrong season."
  ],
  relatedTopics: ["meteo-cyclones-development", "meteo-jet-stream", "meteo-temp-rainfall-distribution"],
  content: true,
  buildsOn: ["meteo-cyclones-development", "meteo-jet-stream"],
  leadsTo: ["meteo-extreme-events"],
  usedIn: ["meteo-temp-rainfall-distribution", "meteo-extreme-events"]
},

{
  id: "meteo-arabian-sea-cyclones-local",
  sectionId: "METEO-09",
  order: 3,
  title: "Arabian Sea Cyclones, Summer Heat Low, Dust Storms & Fog",
  definition: "Alongside monsoon and western disturbances, Pakistan’s hazard set includes Arabian Sea tropical cyclones, the summer heat low, dust storms, and winter fog. Each has different ingredients — do not merge them into one 'bad weather' category.",
  keyFacts: [
    "Arabian Sea cyclones: fewer than Bay of Bengal but high impact on Sindh coasts when tracks favour landfall",
    "Heat low: broad thermal low from intense summer heating — not a tropical cyclone",
    "Dust storms: dry soil + strong winds; visibility/air-quality hazard",
    "Winter fog: radiation fog common in calm, moist plains nights",
    "Season and region decide which hazard dominates"
  ],
  explanationSections: [
    { heading: "Four hazards, four ingredients", body: "Ask what supplies energy or moisture and what sets the season. Cyclone ≠ heat low; dust ≠ fog." }
  ],
  subtopics: [
    {
      id: "meteo-arabian-sea-cyclones-local-cyclone-vs-heatlow",
      title: "Tropical cyclone vs summer heat low",
      summary: "Warm-core mesoscale/synoptic storm vs broad thermal low.",
      explanation: "A tropical cyclone has organised deep convection, a warm core, and a risk of extreme wind, surge, and rainfall near the coast. The summer heat low is a sprawling thermal feature from desert and plain heating that helps monsoon inflow but lacks a cyclone eye or eyewall. Coastal warnings focus on cyclone track and surge; heat-low discussions focus on temperature and monsoon dynamics.",
      examples: [
        { problem: "June thermal low over central Pakistan with no ocean core — cyclone?", solution: "No — heat low / thermal low.", answer: "Heat low" }
      ],
      shortcuts: ["Cyclone = organised oceanic storm", "Heat low = land heating"],
      traps: ["Calling every summer low a cyclone"]
    },
    {
      id: "meteo-arabian-sea-cyclones-local-dust-fog",
      title: "Dust vs fog — opposite moisture needs",
      summary: "Dry wind-blown dust versus moist calm-night fog.",
      explanation: "Dust storms need dry loose surfaces and strong winds (often pre-monsoon). Dense radiation fog needs moisture, nocturnal cooling, and light winds — classic in winter on the plains, shutting airports and motorways. One is a dry-season visibility problem; the other is a cool-season saturation problem.",
      examples: [
        { problem: "Calm clear January night on the Indus plain with high RH — dust storm or fog risk?", solution: "Fog risk.", answer: "Fog" }
      ],
      shortcuts: ["Dust = dry + wind", "Fog = moist + cool + weak wind"],
      traps: ["Treating all low-visibility events as fog"]
    }
  ],
  examPoints: [
    "Arabian Sea cyclone impact potential",
    "Heat low ≠ cyclone",
    "Dust vs fog ingredients"
  ],
  commonMistakes: [
    "Merging all hazards into monsoon.",
    "Heat low called cyclone.",
    "Fog and dust swapped seasonally."
  ],
  relatedTopics: ["meteo-indian-ocean-monsoon", "meteo-temp-rainfall-distribution", "meteo-extreme-events", "meteo-tropical-cyclones"],
  content: true,
  buildsOn: ["meteo-tropical-cyclones", "meteo-indian-ocean-monsoon"],
  leadsTo: ["meteo-extreme-events"],
  usedIn: ["meteo-extreme-events", "meteo-pmd-operational"]
},

{
  id: "meteo-temp-rainfall-distribution",
  sectionId: "METEO-09",
  order: 5,
  title: "Temperature and Rainfall Distribution Across Pakistan",
  definition: "Pakistan’s temperature and rainfall fields are highly uneven: hot lowland interiors, cool highlands, and patchy monsoon and western-disturbance rains. National means hide large regional contrasts.",
  keyFacts: [
    "Lowland summers are extremely hot in many districts",
    "Temperature falls with height in the mountains",
    "Monsoon rainfall is uneven — fringe geography",
    "Winter precipitation in the north often ties to western disturbances",
    "PMD-style century summaries often cite roughly +0.6 °C area-weighted mean annual warming over 1901–2000"
  ],
  explanationSections: [
    { heading: "Maps over slogans", body: "Always ask which region and which season before generalising national climate." }
  ],
  subtopics: [
    {
      id: "meteo-temp-rainfall-distribution-temperature",
      title: "Temperature patterns",
      summary: "Altitude and continentality dominate.",
      explanation: "Northern mountain stations are cooler primarily because temperature decreases with height in the troposphere. Interiors combine strong summer heating with radiatively cool winters relative to maritime climates at similar latitude.",
      examples: [
        { problem: "Why is Skardu much cooler than Jacobabad in summer on average?", solution: "Much higher elevation / mountain climate.", answer: "Altitude" }
      ],
      shortcuts: ["Height → cooler", "Interior heat extremes"],
      traps: ["One national temperature for all cities"]
    },
    {
      id: "meteo-temp-rainfall-distribution-rainfall",
      title: "Rainfall patterns",
      summary: "Monsoon fringe + WD winter rains.",
      explanation: "Summer monsoon moisture does not water the whole country equally. Northern and some eastern areas may receive meaningful totals while arid zones stay dry. Winter western disturbances are critical for northern rain and snow.",
      examples: [
        { problem: "Is monsoon rainfall spatially uniform across Pakistan?", solution: "No.", answer: "No — uneven" }
      ],
      shortcuts: ["Uneven monsoon", "WD for northern winter"],
      traps: ["Nationwide identical rainy season"]
    },
    {
      id: "meteo-temp-rainfall-distribution-warming-record",
      title: "Observed warming memory figure",
      summary: "About +0.6 °C (1901–2000) area-weighted mean.",
      explanation: "For exam recall, a commonly cited PMD-oriented figure is roughly +0.6 °C area-weighted mean annual warming over the twentieth century (1901–2000). Use it as a magnitude anchor, not as a substitute for understanding regional extremes and impacts.",
      examples: [
        { problem: "Approximate area-weighted mean annual warming 1901–2000 often cited for Pakistan?", solution: "About +0.6 °C.", answer: "+0.6 °C" }
      ],
      shortcuts: ["~+0.6 °C / century-scale memory"],
      traps: ["Confusing this with a single-year anomaly"]
    }
  ],
  examPoints: [
    "Regional temperature contrasts",
    "Uneven rainfall",
    "~+0.6 °C twentieth-century figure"
  ],
  commonMistakes: [
    "Uniform national climate.",
    "Ignoring altitude.",
    "Mixing WD and monsoon seasons."
  ],
  relatedTopics: ["meteo-pakistan-macroclimate", "meteo-western-disturbances", "meteo-indian-ocean-monsoon"],
  content: true,
  buildsOn: ["meteo-pakistan-macroclimate", "meteo-weather-vs-climate"],
  leadsTo: ["meteo-extreme-events"],
  usedIn: ["meteo-extreme-events", "meteo-pakistan-nccp"]
},

{
  id: "meteo-extreme-events",
  sectionId: "METEO-09",
  order: 4,
  title: "Extreme Events: GLOFs, Riverine Floods, Droughts & Heatwaves in Pakistan",
  definition: "Pakistan faces multiple hydrometeorological extremes: heatwaves, droughts, riverine floods, glacial lake outburst floods (GLOFs), and intense rainfall. Each has distinct drivers and seasonal windows — they are not interchangeable.",
  keyFacts: [
    "Heatwaves: prolonged extreme temperatures",
    "Drought: prolonged moisture deficit — the period 1999–2002 is a commonly cited severe drought example",
    "Riverine floods: river capacity exceeded — 2010 and 2022 are major Indus-basin super-flood benchmarks",
    "GLOFs: sudden glacial lake release in mountains",
    "Exposure and vulnerability shape impact severity"
  ],
  explanationSections: [
    { heading: "Match hazard to mechanism", body: "Do not label every disaster as monsoon only. Named years are memory anchors for exams, not the whole climate history." }
  ],
  subtopics: [
    {
      id: "meteo-extreme-events-match",
      title: "Hazard → mechanism matching",
      summary: "GLOF vs riverine flood vs drought.",
      explanation: "Riverine floods involve channel overflow from prolonged or intense basin rain/snowmelt. GLOFs are sudden mountain lake failures with localised catastrophic peaks. Drought is a cumulative deficit over seasons or years.",
      examples: [
        { problem: "Sudden mountain torrent from a glacial lake breach — classification?", solution: "GLOF.", answer: "GLOF" }
      ],
      shortcuts: ["GLOF = lake breach", "Riverine = channel overflow", "Drought = cumulative deficit"],
      traps: ["All floods = GLOF"]
    },
    {
      id: "meteo-extreme-events-benchmark-years",
      title: "Benchmark years for Pakistan exams",
      summary: "2010 & 2022 floods; 1999–2002 drought.",
      explanation: "FPSC-style materials often cite 2010 and 2022 as national-scale Indus-basin super floods driven by extreme rainfall and riverine inundation. The turn-of-century window 1999–2002 is widely used as a severe drought example. Learn them as anchors, and still explain the physical hazard type in the answer.",
      examples: [
        { problem: "Which pair is commonly cited for Indus super floods?", solution: "2010 and 2022.", answer: "2010 and 2022" }
      ],
      shortcuts: ["Floods: 2010, 2022", "Drought example: 1999–2002"],
      traps: ["Memorising years without knowing flood vs drought mechanisms"]
    },
    {
      id: "meteo-extreme-events-season",
      title: "Seasonal windows",
      summary: "When each hazard is most relevant.",
      explanation: "Heat peaks in pre-monsoon/summer. Monsoon and WD seasons shape flood risk differently. Winter fog is a separate visibility extreme. Policy topics (NCCP) organise adaptation across this hazard set.",
      examples: [
        { problem: "Peak heatwave risk in the plains is most associated with which broad season?", solution: "Pre-monsoon / summer heat period.", answer: "Pre-monsoon/summer" }
      ],
      shortcuts: ["Know the season for each hazard"],
      traps: ["One season owns all extremes"]
    }
  ],
  examPoints: [
    "Distinguish GLOF and riverine flood",
    "Benchmark flood and drought years",
    "Drought vs heatwave",
    "Seasonal context"
  ],
  commonMistakes: [
    "GLOF = any flood.",
    "Ignoring exposure.",
    "Monsoon-only narrative."
  ],
  relatedTopics: ["meteo-indian-ocean-monsoon", "meteo-western-disturbances", "meteo-pakistan-nccp", "meteo-enso-global-impacts"],
  content: true,
  buildsOn: ["meteo-temp-rainfall-distribution", "meteo-western-disturbances"],
  leadsTo: ["meteo-pakistan-nccp", "meteo-nccp-objectives"],
  usedIn: ["meteo-pakistan-nccp", "meteo-nccp-objectives"]
},

{
  id: "meteo-pmd-operational",
  sectionId: "METEO-09",
  order: 6,
  title: "PMD Operational Areas, Regional Responsibilities & Warning Systems",
  definition: "The Pakistan Meteorological Department (PMD) is the national meteorological service responsible for weather observing, forecasting, and warnings. Operational work covers synoptic observation, numerical guidance, flood and special warnings, aviation meteorology, and climate services across regional centres.",
  keyFacts: [
    "National authority for meteorological observation and forecasting",
    "Issues public weather forecasts and hazard warnings (flood, cyclone, heat, dense fog, etc.)",
    "Supports aviation, agriculture, and water/flood-management users",
    "Regional offices/centres serve different geographic responsibilities",
    "Combines surface network, upper air, radar/satellite interpretation, and models",
    "Early warning effectiveness depends on dissemination and user action, not only forecast skill"
  ],
  explanationSections: [
    { heading: "From observation to warning", body: "PMD sits at the end of the observing–analysis–forecast chain discussed in instrumentation and dynamics topics. For FPSC, know the institutional role: who warns, what kinds of warnings, and why regional structure matters in a climatically diverse country." }
  ],
  subtopics: [
    {
      id: "meteo-pmd-operational-role",
      title: "Core operational role",
      summary: "Observe, forecast, warn, support sectors.",
      explanation: "Routine forecasts guide daily decisions; specialised products serve aviation and flood managers. During extremes, warning lead time and clarity become the public face of the service.",
      examples: [
        { problem: "Which national agency is the primary source of official meteorological warnings in Pakistan?", solution: "Pakistan Meteorological Department (PMD).", answer: "PMD" }
      ],
      shortcuts: ["PMD = national met service", "Warnings + forecasts"],
      traps: ["Confusing PMD with purely research institutes only"]
    },
    {
      id: "meteo-pmd-operational-warnings",
      title: "Warning systems and users",
      summary: "Hazard-specific alerts; multi-sector users.",
      explanation: "Flood warnings link meteorology to hydrology. Cyclone advisories protect the coast. Fog and heat alerts protect transport and health. Agriculture and water managers use seasonal and short-range products differently from urban publics.",
      examples: [
        { problem: "Why must flood warning involve more than rainfall maps alone?", solution: "River response depends on basin wetness, upstream flows, and embankments — hydrology plus meteorology.", answer: "Hydrologic response matters" }
      ],
      shortcuts: ["Warning ≠ observation only", "Sector-specific products"],
      traps: ["Thinking a single national forecast text covers all hazards equally"]
    }
  ],
  comparisonTable: {
    title: "PMD function sketch",
    headers: ["Function", "Example"],
    rows: [
      ["Observation", "Stations, radar, satellite use"],
      ["Forecasting", "Public and specialised guidance"],
      ["Warning", "Flood, cyclone, heat, fog…"],
      ["Services", "Aviation, ag, climate info"]
    ]
  },
  pakistanExamFocus: [
    "PMD is the national meteorological service",
    "Warning portfolio matches Pakistan’s hazard list",
    "Regional diversity requires distributed operations"
  ],
  examPoints: [
    "PMD role in forecasts and warnings",
    "Multi-hazard, multi-user service",
    "Link to observing systems studied earlier"
  ],
  commonMistakes: [
    "Ignoring institutional role in syllabus.",
    "Treating warnings as optional media noise.",
    "Forgetting aviation/ag users.",
    "Separating PMD from observing technology topics."
  ],
  relatedTopics: ["meteo-indian-ocean-monsoon", "meteo-extreme-events", "meteo-temp-rainfall-distribution", "meteo-remote-sensing"],
  content: true,
  buildsOn: ["meteo-extreme-events", "meteo-aviation-products", "meteo-remote-sensing"],
  leadsTo: [],
  usedIn: ["meteo-nccp-objectives", "meteo-aviation-products"]
},

{
  id: "meteo-nccp-objectives",
  sectionId: "METEO-09",
  order: 7,
  title: "National Climate Change Policy (NCCP) Objectives",
  definition: "NCCP objectives spell out what the policy aims to achieve: resilient development through adaptation, appropriate mitigation, capacity building, and integration of climate into planning. This topic is the objectives lens; the NCCP topic is the policy frame.",
  keyFacts: [
    "Adaptation to adverse impacts",
    "Mitigation where feasible and aligned with development",
    "Capacity building and awareness",
    "Mainstreaming climate into sectoral plans",
    "Complementary to hazard science topics"
  ],
  explanationSections: [
    { heading: "Objectives vs hazards", body: "Objectives are policy goals; GLOFs and heatwaves are physical hazards the goals respond to." }
  ],
  subtopics: [
    {
      id: "meteo-nccp-objectives-adapt-mitigate",
      title: "Adaptation and mitigation objectives",
      summary: "Both appear; adaptation is urgent.",
      explanation: "Objectives include reducing vulnerability (adaptation) and contributing to GHG management (mitigation) in line with national circumstances. For MCQs, do not drop either pillar, but recognise adaptation’s prominence for Pakistan’s risk profile.",
      examples: [
        { problem: "Is building flood resilience an adaptation or a pure GHG accounting objective?", solution: "Adaptation.", answer: "Adaptation" }
      ],
      shortcuts: ["Resilience → adaptation", "Emissions → mitigation"],
      traps: ["Objectives = only plant trees slogans without adaptation"]
    },
    {
      id: "meteo-nccp-objectives-capacity-skill",
      title: "Capacity and mainstreaming",
      summary: "Institutions and plans, not one-off projects only.",
      explanation: "Capacity building, research, and mainstreaming climate into water, energy, and urban plans turn policy text into durable practice. Exam stems may contrast isolated projects with systemic integration.",
      examples: [
        { problem: "Integrating climate risk into national water planning illustrates which objective theme?", solution: "Mainstreaming / integration.", answer: "Mainstreaming" }
      ],
      shortcuts: ["Mainstreaming = into sector plans", "Capacity = skills & institutions"],
      traps: ["Policy objectives end when a single project finishes"]
    }
  ],
  examPoints: [
    "List core objective themes",
    "Adaptation vs mitigation examples",
    "Mainstreaming meaning"
  ],
  commonMistakes: [
    "Objectives = hazards list only.",
    "No mitigation mention when asked fully.",
    "Mainstreaming undefined."
  ],
  relatedTopics: ["meteo-pakistan-nccp", "meteo-extreme-events"],
  content: true,
  buildsOn: ["meteo-pakistan-nccp"],
  leadsTo: [],
  usedIn: ["meteo-pakistan-nccp"]
},

// ============================= SECTION METEO-J: Weather Forecasting Basics =============================

{
  id: "meteo-forecasting-methods",
  sectionId: "METEO-10",
  order: 1,
  title: "Weather Forecasting Methods: Persistence, Climatology, Analog & Trend",
  definition: "Classical forecasting methods predict future weather from simple rules before or alongside full numerical models: persistence (tomorrow like today), climatology (use the long-term average for the date), analog (find a similar past case), and trend (extrapolate recent change). They remain useful benchmarks and short-range tools.",
  keyFacts: [
    "Persistence: forecast equals the current observation — works best for short periods in steady regimes",
    "Climatology: forecast equals the climate normal for that date/location",
    "Analog: match current pattern to historical twins and borrow their evolution",
    "Trend: continue the recent rate of change for a limited lead time",
    "Skill is judged against these baselines — a model must beat climatology/persistence to be useful",
    "Still taught because they reveal what ‘hard’ forecasting problems look like"
  ],
  explanationSections: [
    { heading: "Simple methods, serious standards", body: "If a sophisticated model cannot beat persistence at 6 hours in a stagnant high, it is not adding value. Classical methods are both practical stopgaps and the zero line for verification." }
  ],
  subtopics: [
    {
      id: "meteo-forecasting-methods-persistence-clim",
      title: "Persistence and climatology",
      summary: "Same as now vs same as normal.",
      explanation: "Persistence fails at fronts and diurnal transitions. Climatology fails in anomalous seasons. Together they define two different notions of ‘default’ forecast.",
      examples: [
        { problem: "Which method forecasts tomorrow’s temperature as equal to today’s observed temperature?", solution: "Persistence.", answer: "Persistence" }
      ],
      shortcuts: ["Persistence = today→tomorrow", "Climatology = normal for date"],
      traps: ["Using persistence across a strong cold front"]
    },
    {
      id: "meteo-forecasting-methods-analog-trend",
      title: "Analog and trend",
      summary: "History twins vs extrapolating change.",
      explanation: "Analogs need a rich archive and careful matching of pattern, season, and amplitude. Trends work briefly when a system is steadily intensifying or a temperature is rising through the morning, then fail when the process saturates.",
      examples: [
        { problem: "A pressure fall of 2 hPa per hour is extrapolated for the next hour — which method?", solution: "Trend forecasting.", answer: "Trend" }
      ],
      shortcuts: ["Analog = past lookalike", "Trend = continue recent change"],
      traps: ["Unlimited trend extrapolation"]
    }
  ],
  comparisonTable: {
    title: "Classical methods",
    headers: ["Method", "Rule of thumb"],
    rows: [
      ["Persistence", "Future = present"],
      ["Climatology", "Future = normal"],
      ["Analog", "Future = past twin’s evolution"],
      ["Trend", "Future = present + recent change"]
    ]
  },
  examPoints: [
    "Four classical methods and their logic",
    "Baselines for skill",
    "When each fails"
  ],
  commonMistakes: [
    "Confusing persistence with climatology.",
    "Treating analogs as unique exact repeats.",
    "Extrapolating trends across regime shifts.",
    "Thinking NWP made classical methods irrelevant for teaching."
  ],
  relatedTopics: ["meteo-nwp-models", "meteo-forecast-skill"],
  content: true,
  buildsOn: ["meteo-weather-vs-climate", "meteo-station-model"],
  leadsTo: ["meteo-nwp-models", "meteo-forecast-skill"],
  usedIn: ["meteo-forecast-skill", "meteo-nwp-models"]
},

{
  id: "meteo-nwp-models",
  sectionId: "METEO-10",
  order: 2,
  title: "Numerical Weather Prediction (NWP): Models, Data Assimilation & Ensemble Guidance",
  definition: "NWP integrates the equations of atmospheric motion on a grid from an analysed initial state. Data assimilation blends observations into the model state; ensembles estimate uncertainty by running multiple perturbed members.",
  keyFacts: [
    "Initial condition quality limits forecast skill",
    "Data assimilation merges observations + prior forecast",
    "Resolution and physics choices matter",
    "Ensembles → probabilities and spread",
    "Models are tools — still need verification and human interpretation"
  ],
  explanationSections: [
    { heading: "Garbage in, garbage out", body: "Even a perfect model fails if the initial state is badly wrong; assimilation exists to reduce that risk." }
  ],
  subtopics: [
    {
      id: "meteo-nwp-models-assimilation",
      title: "Why assimilation exists",
      summary: "Observations correct the drifting model state.",
      explanation: "A forecast becomes the next background field; new observations pull the analysis toward reality. Without assimilation, small errors grow and the model drifts from the true atmosphere.",
      examples: [
        { problem: "What blends a short-range forecast with new radiosonde and satellite data?", solution: "Data assimilation.", answer: "Data assimilation" }
      ],
      shortcuts: ["Background + obs → analysis", "Analysis → next forecast"],
      traps: ["Model never needs observations after startup"]
    },
    {
      id: "meteo-nwp-models-ensemble",
      title: "Ensemble message",
      summary: "Spread is uncertainty information.",
      explanation: "When members diverge widely, confidence should fall even if the control run looks neat. Tight clustering increases confidence. Ensembles turn NWP into probabilistic guidance.",
      examples: [
        { problem: "Wide ensemble spread in storm track — high or low confidence?", solution: "Low confidence.", answer: "Low" }
      ],
      shortcuts: ["Wide spread → uncertain", "Tight → more confident"],
      traps: ["Using only one deterministic run always"]
    }
  ],
  examPoints: [
    "Role of initial conditions",
    "Data assimilation idea",
    "Ensemble spread"
  ],
  commonMistakes: [
    "Models need no data.",
    "Ensemble mean always correct.",
    "Ignoring resolution limits."
  ],
  relatedTopics: ["meteo-forecasting-methods", "meteo-forecast-skill", "meteo-radiosondes"],
  content: true,
  buildsOn: ["meteo-radiosondes", "meteo-forecasting-methods"],
  leadsTo: ["meteo-forecast-skill"],
  usedIn: ["meteo-forecast-skill", "meteo-aviation-products"]
},

{
  id: "meteo-forecast-skill",
  sectionId: "METEO-10",
  order: 3,
  title: "Forecast Skill, Accuracy & Verification: Anomaly Correlation & RMSE",
  definition: "Verification scores measure how good forecasts are. Accuracy metrics (e.g. RMSE) quantify error size; skill scores measure improvement over a baseline such as climatology or persistence. Categorical scores such as the threat score evaluate yes/no event forecasts.",
  keyFacts: [
    "RMSE: magnitude of errors (lower is better)",
    "Skill: improvement relative to a reference forecast",
    "Anomaly correlation: pattern match of anomalies",
    "Threat score (critical success index) = hits / (hits + misses + false alarms)",
    "A low RMSE can still mean little skill if climatology is equally good"
  ],
  explanationSections: [
    { heading: "Error vs skill vs categorical scores", body: "RMSE and anomaly correlation suit continuous fields; threat score suits dichotomous events such as rain / no rain." }
  ],
  subtopics: [
    {
      id: "meteo-forecast-skill-rmse-vs-skill",
      title: "RMSE vs skill score",
      summary: "Small error ≠ skillful.",
      explanation: "If temperatures barely move from climatology, a lazy climatology forecast also has small errors. Skill asks whether the model beat that lazy reference. Anomaly correlation focuses on getting the pattern of departures right.",
      examples: [
        { problem: "Can a forecast have modest RMSE but near-zero skill?", solution: "Yes — if it does not beat climatology/persistence.", answer: "Yes" }
      ],
      shortcuts: ["RMSE = error size", "Skill = vs baseline"],
      traps: ["Equating any low RMSE with high skill"]
    },
    {
      id: "meteo-forecast-skill-threat-score",
      title: "Threat score (CSI)",
      summary: "Hits over hits+misses+false alarms.",
      explanation: "For binary events, arrange a contingency table: hits, misses, false alarms, and correct rejections. The threat score uses only hits, misses, and false alarms in the denominator — correct rejections are excluded. Example: 20 hits, 5 misses, 10 false alarms → TS = 20/(20+5+10) = 20/35 ≈ 0.57.",
      examples: [
        { problem: "20 hits, 5 misses, 10 false alarms. Threat score?", solution: "20/35 ≈ 0.57.", answer: "20/35" }
      ],
      shortcuts: ["TS = H/(H+M+FA)", "No correct rejections in TS"],
      traps: ["Putting all four contingency cells in the denominator"]
    },
    {
      id: "meteo-forecast-skill-baseline",
      title: "Choose the baseline",
      summary: "Persistence vs climatology.",
      explanation: "Persistence (today equals tomorrow) is a strong baseline at short range. Climatology is the longer-range reference. Verification reports should state which baseline a skill score used.",
      examples: [
        { problem: "At one-day lead, which baseline is often hard to beat?", solution: "Persistence.", answer: "Persistence" }
      ],
      shortcuts: ["Short range → persistence", "Long range → climatology"],
      traps: ["Unstated baseline"]
    }
  ],
  examPoints: [
    "RMSE meaning",
    "Skill vs accuracy",
    "Threat score formula",
    "Baseline dependence"
  ],
  commonMistakes: [
    "RMSE = skill.",
    "Wrong threat-score denominator.",
    "No baseline stated."
  ],
  relatedTopics: ["meteo-nwp-models", "meteo-forecasting-methods"],
  content: true,
  buildsOn: ["meteo-forecasting-methods", "math-1-7"],
  leadsTo: [],
  usedIn: ["meteo-nwp-models"]
},
// ============================= SECTION METEO-K: Synoptic Practice =============================

{
  id: "meteo-station-model",
  sectionId: "METEO-11",
  order: 1,
  title: "Station Model Reading: Wind Barbs, Pressure Codes & Weather Symbols",
  definition: "The station model packs current observations into a compact symbol: wind staff and barbs, temperature and dew point, pressure (often coded), sky cover, and weather symbols. Skill is decoding under time pressure — not restating that symbols exist.",
  keyFacts: [
    "Wind staff points into the wind (direction FROM which wind blows)",
    "Barbs/pennants encode speed (sum the feathers)",
    "Pressure often plotted as last three digits in tenths of hPa",
    "Sky-cover circle filling shows cloud amount",
    "Weather symbols mark rain, fog, thunderstorm, etc."
  ],
  explanationSections: [
    { heading: "Read in a fixed order", body: "Wind → temperatures → pressure → weather/sky. A routine order prevents missing fields on exam diagrams." }
  ],
  subtopics: [
    {
      id: "meteo-station-model-wind-decode",
      title: "Wind decode drill",
      summary: "Direction FROM + barb arithmetic.",
      explanation: "The staff points to the direction the wind comes from. A long barb is typically 10 kt (or 5 m/s in some metric conventions — follow the chart key); a short barb half; a pennant 50. Sum all feathers on the staff. Never read the staff as the direction toward which air is going.",
      examples: [
        { problem: "Staff points north with two long barbs. Wind?", solution: "From the north at about 20 kt (if long barb = 10 kt).", answer: "N ~20 kt (key-dependent)" }
      ],
      shortcuts: ["Staff = FROM", "Add barbs for speed"],
      traps: ["Reading wind as the direction of travel of the arrow tip only without the FROM convention"]
    },
    {
      id: "meteo-station-model-pressure-code",
      title: "Pressure code recovery",
      summary: "Three digits → full hPa.",
      explanation: "If the plot shows 146, try 1014.6 hPa; if it shows 987, try 998.7 hPa — choose the leading 9 or 10 so the value is a realistic sea-level pressure (roughly 960–1050 hPa). Tenths are included in the three-digit group.",
      examples: [
        { problem: "Coded group 235 on a surface plot — most likely SLP?", solution: "1023.5 hPa.", answer: "1023.5 hPa" }
      ],
      shortcuts: ["Add 10 or 9 leading digit", "Last digit is tenth"],
      traps: ["Treating 235 as 235 hPa"]
    }
  ],
  examPoints: [
    "Wind FROM convention",
    "Barb speed sum",
    "Decode 3-digit pressure"
  ],
  commonMistakes: [
    "Wind direction inverted.",
    "Forgetting pennant = 50.",
    "Pressure code left as three digits only."
  ],
  relatedTopics: ["meteo-isobar-analysis", "meteo-airmass-front-id", "meteo-wind-instruments"],
  content: true,
  buildsOn: ["meteo-wind-instruments", "meteo-pressure-instruments"],
  leadsTo: ["meteo-isobar-analysis", "meteo-airmass-front-id"],
  usedIn: ["meteo-isobar-analysis", "meteo-airmass-front-id"]
},

{
  id: "meteo-isobar-analysis",
  sectionId: "METEO-11",
  order: 2,
  title: "Isobar Analysis: Drawing Rules, Pressure Patterns & Wind",
  definition: "Isobars are lines of constant pressure. Analysis draws smooth isobars consistent with observations, revealing highs, lows, ridges, and troughs, and implying wind through geostrophic reasoning.",
  keyFacts: [
    "Isobars never cross",
    "Spacing indicates gradient strength",
    "Closed L / H mark lows and highs",
    "Winds blow nearly parallel aloft; surface winds cross slightly toward low",
    "Analysis must respect station observations"
  ],
  explanationSections: [
    { heading: "Smooth but honest", body: "Isobars should be smooth yet pass correctly relative to reported pressures — do not invent gradients that stations forbid." }
  ],
  subtopics: [
    {
      id: "meteo-isobar-analysis-rules",
      title: "Drawing rules that exams test",
      summary: "No crossing; respect data; label L/H.",
      explanation: "Isobars of different values cannot cross. Crowding means strong gradient and stronger geostrophic wind. Label centres clearly. When data are sparse, keep the simplest pattern consistent with available reports.",
      examples: [
        { problem: "Can the 1008 and 1012 hPa isobars cross on a valid chart?", solution: "No.", answer: "No" }
      ],
      shortcuts: ["Never cross", "Tight = strong wind", "Label centres"],
      traps: ["Crossing isobars to fit a preconceived storm"]
    },
    {
      id: "meteo-isobar-analysis-wind-link",
      title: "From isobars to wind",
      summary: "Gradient strength + balance rules.",
      explanation: "Use Buys-Ballot / geostrophic sense for direction and spacing for speed aloft. At the surface, expect some cross-isobar inflow to lows. This topic is the practical partner of the geostrophic theory topics.",
      examples: [
        { problem: "Widely spaced isobars — relatively weak or strong geostrophic wind?", solution: "Weak.", answer: "Weak" }
      ],
      shortcuts: ["Spacing → speed", "Surface cross-isobar"],
      traps: ["Strong wind with flat spacing"]
    }
  ],
  examPoints: [
    "Isobar properties",
    "Gradient and wind",
    "Surface vs upper differences"
  ],
  commonMistakes: [
    "Crossing isobars.",
    "Ignoring station data.",
    "No friction effect at surface."
  ],
  relatedTopics: ["meteo-station-model", "meteo-geostrophic-wind", "meteo-forces-governing-wind"],
  content: true,
  buildsOn: ["meteo-station-model", "meteo-geostrophic-wind"],
  leadsTo: ["meteo-airmass-front-id"],
  usedIn: ["meteo-airmass-front-id", "meteo-forecasting-methods"]
},

{
  id: "meteo-airmass-front-id",
  sectionId: "METEO-11",
  order: 3,
  title: "Air Mass & Front Identification on Surface Charts",
  definition: "Surface charts reveal air masses and fronts through temperature and dew-point contrasts, wind shifts, pressure troughs, cloud and weather bands, and pressure tendency patterns. Identifying fronts operationally means combining station-model evidence with isobar geometry — not only memorising textbook symbols.",
  keyFacts: [
    "Fronts often lie in pressure troughs with a wind shift across the boundary",
    "Cold fronts: colder air advancing; sharper T drops; often narrower weather band",
    "Warm fronts: warmer air advancing; broader cloud/precip shield ahead",
    "Dew-point contrast can mark moisture boundaries as clearly as temperature",
    "Station weather symbols and sky cover outline active frontal zones",
    "Occlusions and stationary fronts need time continuity and full field context"
  ],
  explanationSections: [
    { heading: "Evidence before the purple line", body: "The analysed front is a hypothesis. Support it with T/Td jumps, wind shifts, pressure patterns, and weather. If the fields disagree, revise the analysis." }
  ],
  subtopics: [
    {
      id: "meteo-airmass-front-id-evidence",
      title: "Field evidence for fronts",
      summary: "T/Td gradients, wind shift, trough, weather band.",
      explanation: "A strong temperature gradient packed into a narrow zone suggests a front. Dew point may drop sharply behind a dry cold front. Winds often veer or back across the boundary depending on the case and hemisphere conventions taught.",
      examples: [
        { problem: "List three surface clues that support a cold-front placement.", solution: "Sharp temperature drop, wind shift, and a narrow band of showers/squalls along a trough (among other valid clues).", answer: "ΔT, wind shift, weather/trough" }
      ],
      shortcuts: ["Pack gradients = boundary", "Trough + shift + weather"],
      traps: ["Drawing fronts only from a textbook symbol habit"]
    },
    {
      id: "meteo-airmass-front-id-types",
      title: "Matching type to structure",
      summary: "Cold vs warm vs stationary vs occluded on the map.",
      explanation: "Motion of the cold air mass relative to the warm defines cold vs warm fronts. Stationary fronts show little movement. Occlusions appear in mature cyclones when the cold front catches the warm front — denser station evidence near the triple point helps.",
      examples: [
        { problem: "Broad steady precip ahead of a gentle temperature rise at the surface suggests which front type more often?", solution: "Warm front — broad shield ahead of the surface boundary.", answer: "Warm front" }
      ],
      shortcuts: ["Cold = sharper/narrower often", "Warm = broader shield"],
      traps: ["Labelling every trough a cold front"]
    }
  ],
  comparisonTable: {
    title: "Front ID checklist",
    headers: ["Clue", "Use"],
    rows: [
      ["Temperature jump", "Thermal boundary"],
      ["Dew-point jump", "Moisture boundary"],
      ["Wind shift", "Kinematic boundary"],
      ["Pressure trough", "Preferred locus"],
      ["Weather band", "Active zone"]
    ]
  },
  examPoints: [
    "Fronts need multi-field evidence",
    "Cold vs warm structural clues",
    "Link station models to analysed fronts"
  ],
  commonMistakes: [
    "Single-variable front drawing.",
    "Ignoring dew point.",
    "Confusing troughs with automatic cold fronts.",
    "Skipping time continuity for stationary/occluded cases."
  ],
  relatedTopics: ["meteo-air-masses-fronts", "meteo-cyclones-structure", "meteo-station-model", "meteo-isobar-analysis", "meteo-rossby-waves", "meteo-remote-sensing", "meteo-nwp-models"],
  content: true,
  buildsOn: ["meteo-air-masses-fronts", "meteo-station-model"],
  leadsTo: [],
  usedIn: ["meteo-cyclones-structure", "meteo-aviation-products"]
},
// ============================= SECTION METEO-L: Quantitative Meteorology =============================

{
  id: "meteo-lapse-calc",
  sectionId: "METEO-12",
  order: 3,
  title: "Lapse Rate & Stability Calculations: DALR, SALR, ELR and Classification",
  definition: "This quantitative topic applies the stability decision table using numerical ELR, DALR, and SALR values, and simple LCL height estimates. Concept definitions live under Lapse Rates and Static Stability.",
  keyFacts: [
    "DALR ≈ 9.8 °C/km (often 10 in MCQs)",
    "SALR < DALR",
    "Compare ELR with both process rates",
    "Conditional: SALR < ELR < DALR",
    "Exam approximation: LCL height (km) ≈ (T − Td)/8 with T, Td in °C"
  ],
  explanationSections: [
    { heading: "Numbers → table → label", body: "Write the three rates, place ELR, read the stability class. For LCL, apply the stated approximation and then cool the parcel at DALR to that height if asked." }
  ],
  subtopics: [
    {
      id: "meteo-lapse-calc-classify",
      title: "Worked classification",
      summary: "Plug into the decision table.",
      explanation: "Given ELR, DALR, SALR: if ELR > DALR → absolute instability; if ELR < SALR → absolute stability; if between → conditional instability. Always state the comparison explicitly.",
      examples: [
        { problem: "ELR=7, DALR=10, SALR=6 (°C/km). Class?", solution: "SALR < ELR < DALR → conditionally unstable.", answer: "Conditionally unstable" }
      ],
      shortcuts: ["Write three numbers", "Between SALR and DALR → conditional"],
      traps: ["Using only ELR vs DALR when saturation matters"]
    },
    {
      id: "meteo-lapse-calc-lcl-approx",
      title: "LCL height approximation",
      summary: "LCL (km) ≈ (T − Td)/8, then cool at DALR.",
      explanation: "When a question gives the rule LCL ≈ (T − Td)/8, compute the depression in °C and divide by 8 to get kilometres. Example: T = 28 °C, Td = 16 °C → depression 12 °C → LCL ≈ 1.5 km. Parcel temperature at the LCL ≈ T − (DALR × LCL height) ≈ 28 − 9.8×1.5 ≈ 13.3 °C if still unsaturated to the LCL.",
      examples: [
        { problem: "T=28°C, Td=16°C, LCL≈(T−Td)/8. Height?", solution: "1.5 km.", answer: "1.5 km" }
      ],
      shortcuts: ["(T−Td)/8 → km", "Then ΔT ≈ −DALR × z"],
      traps: ["Using SALR before the LCL"]
    },
    {
      id: "meteo-lapse-calc-parcel-cool",
      title: "Parcel temperature change on ascent",
      summary: "Dry vs moist segment.",
      explanation: "Unsaturated ascent: ΔT ≈ −DALR × Δz. After saturation, use SALR. A 2 km dry ascent at 10 °C/km cools about 20 °C.",
      examples: [
        { problem: "Unsaturated parcel rises 2 km with DALR=10 °C/km. ΔT?", solution: "About −20 °C.", answer: "−20 °C" }
      ],
      shortcuts: ["ΔT = −Γ Δz", "Switch to SALR after LCL"],
      traps: ["Using SALR before saturation"]
    }
  ],
  formula: [
    {
      name: "LCL height (exam approximation)",
      expression: "z_{\\mathrm{LCL}}\\,(\\mathrm{km}) \\approx \\frac{T - T_d}{8}",
      variables: [
        { symbol: "T", meaning: "air temperature (°C)" },
        { symbol: "T_d", meaning: "dew-point temperature (°C)" },
        { symbol: "z_{\\mathrm{LCL}}", meaning: "approximate lifting condensation level height (km)" }
      ]
    },
    {
      name: "Dry ascent cooling",
      expression: "\\Delta T \\approx -\\Gamma_d \\times \\Delta z",
      variables: [
        { symbol: "\\Gamma_d", meaning: "DALR ≈ 9.8 °C/km (often 10 in MCQs)" },
        { symbol: "\\Delta z", meaning: "ascent distance (km)" }
      ]
    }
  ],
  examPoints: [
    "Classify from numbers",
    "LCL approximation when given",
    "Dry ascent cooling"
  ],
  commonMistakes: [
    "Wrong comparison order.",
    "SALR before LCL.",
    "km/m mix-ups."
  ],
  relatedTopics: ["meteo-lapse-rates", "meteo-static-stability", "meteo-humidity-calc"],
  content: true,
  buildsOn: ["meteo-lapse-rates", "meteo-static-stability"],
  leadsTo: ["meteo-thermodynamic-diagrams"],
  usedIn: ["meteo-thermodynamic-diagrams"]
},

{
  id: "meteo-humidity-calc",
  sectionId: "METEO-12",
  order: 2,
  title: "Mixing Ratio, Relative Humidity & Dew-Point Calculations",
  definition: "This quantitative topic applies moisture definitions to numbers: compute RH from e and e_s or from mixing ratios, interpret dew point, and use simple exam approximations carefully. Conceptual definitions live under Atmospheric Moisture Metrics.",
  keyFacts: [
    "RH = (e / e_s) × 100%",
    "Also RH ≈ (w / w_s) × 100% when mixing ratios are used consistently",
    "Rule of thumb sometimes used in exams: RH ≈ 100 − 5×(T − Td) with T, Td in °C — approximate only",
    "At saturation, e = e_s, RH = 100%, T = Td (liquid saturation at constant pressure)",
    "Cooling toward Td raises RH if vapour content is fixed"
  ],
  explanationSections: [
    { heading: "Prefer definitions; know the shortcuts", body: "Use e/e_s or w/w_s when data allow. The 100 − 5(T−Td) rule is a quick estimate, not a replacement for the definition." }
  ],
  subtopics: [
    {
      id: "meteo-humidity-calc-rh-steps",
      title: "Worked RH from e, e_s, or mixing ratios",
      summary: "Substitute, divide, multiply by 100.",
      explanation: "Write RH = 100 × e/e_s (same units for e and e_s). With mixing ratios, RH = 100 × w/w_s. If e = 10 hPa and e_s = 20 hPa, RH = 50%. If w = 10 g/kg and w_s = 20 g/kg, RH = 50%.",
      examples: [
        { problem: "e = 12 hPa, e_s = 30 hPa. RH?", solution: "100 × 12/30 = 40%.", answer: "40%" },
        { problem: "w = 10 g/kg, w_s = 20 g/kg. RH?", solution: "50%.", answer: "50%" }
      ],
      shortcuts: ["RH = 100e/e_s", "RH = 100w/w_s", "Same units"],
      traps: ["Mixing Pa with hPa", "Reporting the ratio without ×100"]
    },
    {
      id: "meteo-humidity-calc-rule-of-thumb",
      title: "The 100 − 5(T − Td) estimate",
      summary: "Fast exam approximation — know its limits.",
      explanation: "A common rough rule is RH ≈ 100 − 5×(T − Td) with temperatures in °C. Example: T = 30 °C, Td = 22 °C → depression 8 °C → RH ≈ 100 − 40 = 60% (moderately moist). Use it when the question explicitly asks for the approximation; otherwise prefer e/e_s.",
      examples: [
        { problem: "T=30°C, Td=22°C with RH ≈ 100−5(T−Td). RH?", solution: "≈60%.", answer: "≈60%" }
      ],
      shortcuts: ["Depression × 5, subtract from 100", "Only an approximation"],
      traps: ["Treating the rule as exact physical law"]
    },
    {
      id: "meteo-humidity-calc-td-logic",
      title: "Dew-point numerical reasoning",
      summary: "Td tracks moisture; depression tracks nearness to saturation.",
      explanation: "Higher Td usually means more vapour for typical comparisons. Small T−Td means air is close to saturation. When T falls to Td, condensation begins on surfaces or nuclei.",
      examples: [
        { problem: "Parcel A: T=20°C, Td=18°C. Parcel B: T=30°C, Td=5°C. Which is closer to saturation?", solution: "A — depression only 2°C vs 25°C.", answer: "Parcel A" }
      ],
      shortcuts: ["Closer T and Td → nearer saturation", "Td compares moisture"],
      traps: ["Picking the warmer parcel as more saturated automatically"]
    }
  ],
  formula: [
    {
      name: "Relative humidity from vapour pressures",
      expression: "\\mathrm{RH} = 100 \\times \\frac{e}{e_s}",
      variables: [
        { symbol: "e", meaning: "actual vapour pressure" },
        { symbol: "e_s", meaning: "saturation vapour pressure at air temperature" }
      ]
    },
    {
      name: "Relative humidity from mixing ratios",
      expression: "\\mathrm{RH} = 100 \\times \\frac{w}{w_s}",
      variables: [
        { symbol: "w", meaning: "mixing ratio (mass vapour / mass dry air)" },
        { symbol: "w_s", meaning: "saturation mixing ratio at the same T and p" }
      ]
    },
    {
      name: "RH rule of thumb (approximate)",
      expression: "\\mathrm{RH} \\approx 100 - 5(T - T_d)",
      variables: [
        { symbol: "T, T_d", meaning: "temperature and dew point in °C" }
      ]
    }
  ],
  examPoints: [
    "Compute RH from e and e_s or w and w_s",
    "Use 100−5(T−Td) when asked",
    "Interpret Td depression"
  ],
  commonMistakes: [
    "Redefining RH instead of calculating.",
    "Unit inconsistency.",
    "Over-trusting the rule of thumb."
  ],
  relatedTopics: ["meteo-moisture-metrics", "meteo-adiabatic-cloud-formation"],
  content: true,
  buildsOn: ["meteo-moisture-metrics", "math-1-7"],
  leadsTo: ["meteo-lapse-calc"],
  usedIn: ["meteo-moisture-metrics", "meteo-fog-types"]
},

{
  id: "meteo-pressure-conversion",
  sectionId: "METEO-12",
  order: 1,
  title: "Pressure Unit Conversions & Hydrostatic Applications",
  definition: "Pressure appears as Pa, hPa/mb, and sometimes mmHg or inHg. This topic trains unit conversion and simple hydrostatic estimates linking Δp, ρ, g, and Δz.",
  keyFacts: [
    "1 hPa = 1 mb = 100 Pa",
    "Standard sea-level pressure ≈ 1013.25 hPa",
    "Hydrostatic: Δp ≈ −ρgΔz for rough estimates",
    "Keep SI units when using R and ρ formulas",
    "Station vs sea-level pressure are different products"
  ],
  explanationSections: [
    { heading: "Convert first, then compute", body: "Most numerical errors are unit errors." }
  ],
  subtopics: [
    {
      id: "meteo-pressure-conversion-units",
      title: "Unit conversion drills",
      summary: "hPa ↔ Pa quickly.",
      explanation: "Multiply hPa by 100 to get Pa. Divide Pa by 100 to get hPa. Recognise that millibar and hectopascal are the same size in modern use.",
      examples: [
        { problem: "1013 hPa in Pa?", solution: "101300 Pa.", answer: "101300 Pa" }
      ],
      shortcuts: ["hPa × 100 = Pa", "hPa = mb"],
      traps: ["Forgetting the ×100"]
    },
    {
      id: "meteo-pressure-conversion-hydro-est",
      title: "Hydrostatic estimate",
      summary: "Δp ≈ −ρgΔz.",
      explanation: "For a shallow layer, pressure drop with height is roughly density × g × thickness. Order-of-magnitude checks catch impossible answers (e.g. 500 hPa drop in 10 m).",
      examples: [
        { problem: "ρ=1.2 kg/m³, g=10 m/s², Δz=100 m — approximate |Δp|?", solution: "About 1200 Pa = 12 hPa.", answer: "~12 hPa" }
      ],
      shortcuts: ["Δp ~ ρgΔz", "Sanity-check magnitude"],
      traps: ["Mixing hPa into SI ρgΔz without conversion"]
    }
  ],
  formula: [
    {
      name: "Common pressure units",
      expression: "1\\,\\mathrm{hPa} = 1\\,\\mathrm{mb} = 100\\,\\mathrm{Pa}",
      variables: [
        { symbol: "\\mathrm{hPa}", meaning: "hectopascal (standard on weather charts)" },
        { symbol: "\\mathrm{mb}", meaning: "millibar (numerically equal to hPa)" },
        { symbol: "\\mathrm{Pa}", meaning: "pascal (SI unit)" }
      ]
    }
  ],
  examPoints: [
    "hPa–Pa conversion",
    "Hydrostatic estimate",
    "Unit hygiene"
  ],
  commonMistakes: [
    "×100 forgotten.",
    "Impossible Δp magnitudes.",
    "Station = SLP always."
  ],
  relatedTopics: ["meteo-hydrostatic-equation", "meteo-gas-law", "meteo-pressure-instruments"],
  content: true,
  buildsOn: ["meteo-hydrostatic-equation", "meteo-gas-law"],
  leadsTo: ["meteo-geostrophic-qual"],
  usedIn: ["meteo-pressure-instruments"]
},

{
  id: "meteo-geostrophic-qual",
  sectionId: "METEO-12",
  order: 4,
  title: "Geostrophic Wind Estimation from Isobar Spacing",
  definition: "Geostrophic wind speed increases as isobar or height-contour spacing decreases. This topic practises qualitative and semi-quantitative estimates from chart packing, not full vector calculus.",
  keyFacts: [
    "Tighter spacing → stronger Vg",
    "Direction from balance rules (NH low to the left)",
    "Valid for straight, frictionless flow approximation",
    "Curved flow needs gradient-wind thinking",
    "Compare two map regions rather than absolute precision"
  ],
  explanationSections: [
    { heading: "Relative estimates win marks", body: "Which side of the map is windier is more often tested than an exact m/s value." }
  ],
  subtopics: [
    {
      id: "meteo-geostrophic-qual-spacing",
      title: "Spacing comparison drill",
      summary: "Half the spacing → about twice the geostrophic speed (same lat).",
      explanation: "For the same latitude and map scale, Vg is inversely related to contour spacing in the geostrophic relation. Halving the distance between consecutive contours roughly doubles the estimated wind. Always hold latitude roughly constant when comparing.",
      examples: [
        { problem: "Region A has isobars twice as tight as region B at the same latitude — Vg in A vs B?", solution: "About twice as strong in A.", answer: "~2× in A" }
      ],
      shortcuts: ["Tighter → faster", "Compare like latitudes"],
      traps: ["Ignoring latitude when comparing polar vs tropical packing"]
    },
    {
      id: "meteo-geostrophic-qual-limits",
      title: "When the estimate fails",
      summary: "Friction, curvature, equator.",
      explanation: "Surface friction, tight curvature, and near-equatorial maps break pure geostrophy. State the limitation when the stem is a surface chart over rough terrain.",
      examples: [
        { problem: "Is pure geostrophic spacing estimation best on a surface chart over mountains?", solution: "No — friction and terrain matter.", answer: "No" }
      ],
      shortcuts: ["Upper smooth flow OK", "Surface/terrain caution"],
      traps: ["Geostrophy everywhere"]
    }
  ],
  formula: [
    {
      name: "Geostrophic speed vs contour spacing",
      expression: "V_g \\propto \\frac{1}{\\Delta n}\\quad(\\text{same latitude})",
      variables: [
        { symbol: "V_g", meaning: "geostrophic wind speed" },
        { symbol: "\\Delta n", meaning: "spacing between consecutive isobars/height contours" }
      ]
    }
  ],
  examPoints: [
    "Spacing vs speed",
    "Relative comparisons",
    "Limits of method"
  ],
  commonMistakes: [
    "Loose spacing = strong wind.",
    "No latitude awareness.",
    "Surface = upper."
  ],
  relatedTopics: ["meteo-geostrophic-wind", "meteo-isobar-analysis", "meteo-gradient-wind"],
  content: true,
  buildsOn: ["meteo-geostrophic-wind", "meteo-isobar-analysis"],
  leadsTo: [],
  usedIn: ["meteo-upper-air-charts"]
},
// ============================= SECTION METEO-M: Climate Variability =============================

{
  id: "meteo-enso-basics",
  sectionId: "METEO-13",
  order: 1,
  title: "ENSO: El Niño, La Niña and the Walker Circulation",
  definition: "ENSO is a coupled ocean–atmosphere mode of the tropical Pacific. El Niño warms the central/eastern equatorial Pacific and weakens the Walker cell; La Niña does the opposite. Operational monitoring uses SST anomaly indices such as Niño-3.4.",
  keyFacts: [
    "El Niño: warm SST anomalies in central/eastern equatorial Pacific",
    "La Niña: enhanced cold tongue; stronger trades",
    "Niño-3.4: common index region; sustained anomalies above about +0.5 °C support El Niño classification, below about −0.5 °C support La Niña (with duration rules in operational definitions)",
    "Walker circulation: zonal tropical Pacific overturning",
    "Bjerknes feedback: positive ocean–atmosphere coupling that can amplify anomalies",
    "Phase changes odds worldwide via teleconnections"
  ],
  explanationSections: [
    { heading: "Ocean and atmosphere together", body: "SST pattern and winds must be discussed as a pair — that coupling is the heart of ENSO and of the Bjerknes feedback." }
  ],
  subtopics: [
    {
      id: "meteo-enso-basics-phase-id",
      title: "Phase identification and Niño-3.4",
      summary: "Warm/cool anomaly thresholds and wind sense.",
      explanation: "Warm anomalies in the eastern/central equatorial Pacific with weakened trades → El Niño. Cool anomalies with strong trades → La Niña. Niño-3.4 is a standard box in the central equatorial Pacific used to track the anomaly. A useful exam memory: anomalies sustained beyond about ±0.5 °C mark the El Niño / La Niña side of neutral, subject to the full operational duration criteria used by forecasting centres.",
      examples: [
        { problem: "Niño-3.4 SST anomaly sustained above +0.5 °C — which phase is supported?", solution: "El Niño (warm anomaly side).", answer: "El Niño" }
      ],
      shortcuts: ["+0.5 °C side → El Niño", "−0.5 °C side → La Niña", "Need sustained anomaly"],
      traps: ["A single warm week always equals El Niño", "Using only a coastal anecdote without the basin index"]
    },
    {
      id: "meteo-enso-basics-bjerknes",
      title: "Bjerknes feedback",
      summary: "Positive coupling that can amplify ENSO anomalies.",
      explanation: "In the El Niño direction, warmer eastern/central Pacific SST weakens the trades; weaker trades reduce upwelling and/or allow warm water to spread, further warming SST — a positive feedback. La Niña can amplify in the opposite sense (cool SST, stronger trades, stronger upwelling). The feedback helps events grow; it is not a guarantee of every year’s outcome.",
      examples: [
        { problem: "Is Bjerknes feedback a positive or negative feedback on SST anomalies?", solution: "Positive — anomalies tend to reinforce through wind–SST coupling.", answer: "Positive" }
      ],
      shortcuts: ["Warm SST → weaker trades → more warming", "Positive feedback"],
      traps: ["Calling Bjerknes a damping (negative) feedback"]
    },
    {
      id: "meteo-enso-basics-walker-shift",
      title: "Walker cell shifts with phase",
      summary: "Where the rising branch sits.",
      explanation: "In La Niña-like states, rising motion concentrates over the warm western Pacific. In El Niño, convection and the rising branch shift east toward the central Pacific as the west–east SST contrast flattens.",
      examples: [
        { problem: "During strong El Niño, does the main Pacific rising branch usually stay fixed over the far west?", solution: "No — it tends to shift east.", answer: "Shifts east" }
      ],
      shortcuts: ["El Niño → Walker weakens/shifts east", "La Niña → strong western ascent"],
      traps: ["Walker cell never changes"]
    }
  ],
  examPoints: [
    "Define El Niño / La Niña",
    "Niño-3.4 and ~±0.5 °C memory",
    "Bjerknes as positive feedback",
    "Walker coupling"
  ],
  commonMistakes: [
    "El Niño = any local warming.",
    "Ignoring wind coupling.",
    "Confusing with IOD poles."
  ],
  relatedTopics: ["meteo-enso-global-impacts", "meteo-iod", "meteo-ocean-currents"],
  content: true,
  buildsOn: ["meteo-global-circulation", "meteo-ocean-currents"],
  leadsTo: ["meteo-enso-global-impacts", "meteo-iod"],
  usedIn: ["meteo-enso-global-impacts", "meteo-indian-ocean-monsoon"]
},

{
  id: "meteo-ocean-currents",
  sectionId: "METEO-13",
  order: 3,
  title: "Ocean Surface Currents & Thermohaline Circulation",
  definition: "Surface currents are largely wind-driven gyres; the thermohaline circulation is denser, slower overturning driven by temperature and salinity differences. Together they redistribute heat and couple with climate modes.",
  keyFacts: [
    "Western boundary currents: narrow, strong (Gulf Stream, Kuroshio)",
    "Eastern boundary currents: broader, weaker",
    "Gyres driven primarily by winds",
    "Thermohaline: density-driven deep branch",
    "AMOC is a major Atlantic overturning component"
  ],
  explanationSections: [
    { heading: "Two engines", body: "Do not reduce all ocean motion to a single 'current'." }
  ],
  subtopics: [
    {
      id: "meteo-ocean-currents-gyre",
      title: "Gyres and western intensification",
      summary: "Why western boundary currents are swift.",
      explanation: "Subtropical gyres pile flow on the western side of basins, producing narrow, intense currents. Eastern sides are slower and often linked to upwelling systems. Exam maps test this asymmetry.",
      examples: [
        { problem: "Gulf Stream is best classified as which type of current?", solution: "Western boundary current.", answer: "Western boundary" }
      ],
      shortcuts: ["West = narrow strong", "East = broad weak"],
      traps: ["Symmetric gyre speeds"]
    },
    {
      id: "meteo-ocean-currents-thermohaline",
      title: "Thermohaline vs wind gyre",
      summary: "Density-driven deep circulation.",
      explanation: "Cooling and salinity increases can densify surface water so it sinks, feeding deep flows. This is slower than surface gyres but critical for long-term heat redistribution — the context for AMOC discussions.",
      examples: [
        { problem: "Is thermohaline circulation primarily a fast surface wind drift?", solution: "No — density-driven, includes deep branches.", answer: "No" }
      ],
      shortcuts: ["Wind gyre = surface", "Thermohaline = density/deep"],
      traps: ["All currents = thermohaline"]
    }
  ],
  examPoints: [
    "Western intensification",
    "Gyre vs thermohaline",
    "Link to AMOC topic"
  ],
  commonMistakes: [
    "No west–east asymmetry.",
    "Thermohaline = surface only.",
    "Ignoring climate coupling."
  ],
  relatedTopics: ["meteo-amoc-slowdown", "meteo-enso-basics", "meteo-global-circulation"],
  content: true,
  buildsOn: ["meteo-global-circulation"],
  leadsTo: ["meteo-amoc-slowdown", "meteo-enso-basics"],
  usedIn: ["meteo-amoc-slowdown", "meteo-enso-global-impacts"]
},

{
  id: "meteo-enso-global-impacts",
  sectionId: "METEO-13",
  order: 2,
  title: "Global Impacts of ENSO: Teleconnections and Regional Effects",
  definition: "ENSO teleconnections are statistically preferred climate anomalies in regions remote from the tropical Pacific during El Niño or La Niña. They change probabilities — they do not guarantee a single outcome every event.",
  keyFacts: [
    "Teleconnection = remote correlated response",
    "Classic composites exist for many regions (drought/flood odds)",
    "South Asian monsoon impacts are probabilistic",
    "Pakistan’s 2010 and 2022 super-flood seasons are often discussed in a La Niña or La Niña-transition context — useful case studies, not proof that every La Niña floods",
    "Other modes (IOD, MJO) can modify outcomes",
    "Always phrase as raised or lowered odds"
  ],
  explanationSections: [
    { heading: "Composites, not commandments", body: "Exam answers that say 'El Niño always causes X in country Y' overreach. Case-study years illustrate risk; they do not replace probability language." }
  ],
  subtopics: [
    {
      id: "meteo-enso-global-impacts-odds",
      title: "Probabilistic language for exams",
      summary: "Raised odds vs certainty.",
      explanation: "A teleconnection composite might show drier or wetter odds for a region in El Niño or La Niña years on average. Any single year can differ because of noise and other modes. Good answers use 'tends to' or 'higher likelihood'.",
      examples: [
        { problem: "Is 'El Niño always causes drought in Pakistan' a safe exam statement?", solution: "No — overstates certainty.", answer: "No" }
      ],
      shortcuts: ["Teleconnection = odds", "Never say always"],
      traps: ["Deterministic one-line climate laws"]
    },
    {
      id: "meteo-enso-global-impacts-pakistan-cases",
      title: "Pakistan flood case studies and La Niña",
      summary: "2010 and 2022 as teaching examples.",
      explanation: "The 2010 and 2022 Indus-basin super floods are widely cited national disasters. Both seasons are often linked in teaching materials to La Niña or transition-toward-La Niña conditions that can favour a stronger monsoon risk profile. Treat that as a case-study association: La Niña can raise flood odds; it does not mechanistically force every La Niña year to produce a super flood.",
      examples: [
        { problem: "Why mention 2010 and 2022 in ENSO–Pakistan teaching?", solution: "Major flood cases often discussed alongside La Niña / transition phases — still probabilistic.", answer: "Case studies / raised odds" }
      ],
      shortcuts: ["2010 & 2022 = major flood cases", "La Niña can raise monsoon flood odds"],
      traps: ["Every La Niña = automatic super flood"]
    },
    {
      id: "meteo-enso-global-impacts-other-modes",
      title: "Interference from IOD and MJO",
      summary: "Pacific phase is not the only control.",
      explanation: "A positive IOD or an active MJO phase can reshape rainfall outcomes even when ENSO is fixed. Multi-mode awareness is the mature answer for South Asia questions.",
      examples: [
        { problem: "Can IOD modify monsoon rainfall during an El Niño year?", solution: "Yes — it can reinforce or offset.", answer: "Yes" }
      ],
      shortcuts: ["ENSO + IOD + MJO", "Composite ≠ single year"],
      traps: ["Ignoring Indian Ocean when discussing monsoon teleconnections"]
    }
  ],
  examPoints: [
    "Define teleconnection",
    "Probabilistic impacts",
    "2010/2022 as case studies",
    "Other modes interfere"
  ],
  commonMistakes: [
    "Always/never claims.",
    "ENSO-only monsoon theory.",
    "Local weather = global mode."
  ],
  relatedTopics: ["meteo-enso-basics", "meteo-iod", "meteo-mjo", "meteo-indian-ocean-monsoon", "meteo-extreme-events"],
  content: true,
  buildsOn: ["meteo-enso-basics"],
  leadsTo: ["meteo-iod", "meteo-extreme-events"],
  usedIn: ["meteo-indian-ocean-monsoon", "meteo-extreme-events"]
},

{
  id: "meteo-iod",
  sectionId: "METEO-13",
  order: 4,
  title: "Indian Ocean Dipole (IOD): Mechanism and Impacts on South Asia",
  definition: "The IOD is an east–west sea-surface temperature dipole in the tropical Indian Ocean with coupled winds and convection. A positive IOD has cooler-than-normal water off Sumatra and warmer water in the western Indian Ocean. It can strengthen or offset ENSO’s influence on South Asian rainfall.",
  keyFacts: [
    "+IOD: west warm, east cool (equatorial Indian Ocean); easterly anomalies along the equator",
    "−IOD: roughly the opposite SST pattern",
    "Affects East Africa and maritime continent convection patterns",
    "Can modulate South Asian monsoon moisture",
    "Not the same as Niño-3.4 in the Pacific"
  ],
  explanationSections: [
    { heading: "Indian Ocean, not Pacific", body: "Always locate the poles in the Indian Ocean. Pacific ENSO and Indian Ocean IOD can co-occur but are separate indices." }
  ],
  subtopics: [
    {
      id: "meteo-iod-phase-checklist",
      title: "Phase checklist for MCQs",
      summary: "SST poles + wind direction sense.",
      explanation: "For +IOD, remember cold anomalies in the eastern equatorial Indian Ocean and warm anomalies in the west, with anomalous easterlies along the equator. Reverse the SST poles for −IOD. If a map shows Pacific Niño regions only, it is not an IOD question.",
      examples: [
        { problem: "Eastern equatorial Indian Ocean cooler than normal, west warmer — phase?", solution: "Positive IOD.", answer: "+IOD" }
      ],
      shortcuts: ["+IOD: east cool / west warm", "Poles in the Indian Ocean"],
      traps: ["Placing IOD poles on Niño-3.4"]
    },
    {
      id: "meteo-iod-with-enso",
      title: "When IOD and ENSO combine",
      summary: "Composite risk for monsoon — still probabilistic.",
      explanation: "A positive IOD can support better monsoon rainfall in some composite studies even during El Niño years, while alignments can also worsen drought risk depending on phase pairing. The teaching point for FPSC is not a single rigid rule but that IOD is an independent Indian Ocean control that may reinforce or oppose ENSO.",
      examples: [
        { problem: "Can a strong IOD matter when ENSO is near neutral?", solution: "Yes — IOD can act with partial independence.", answer: "Yes" }
      ],
      shortcuts: ["IOD ≠ ENSO", "Combined phases change odds"],
      traps: ["Ignoring IOD whenever ENSO is mentioned"]
    }
  ],
  examPoints: [
    "+/− IOD SST pattern",
    "Indian Ocean location",
    "Interaction with ENSO is probabilistic"
  ],
  commonMistakes: [
    "IOD poles in the Pacific.",
    "Hard deterministic monsoon law from one phase.",
    "Treating IOD as identical to ENSO."
  ],
  relatedTopics: ["meteo-enso-basics", "meteo-enso-global-impacts", "meteo-ocean-currents", "meteo-monsoon-system", "meteo-indian-ocean-monsoon"],
  content: true,
  buildsOn: ["meteo-enso-basics", "meteo-monsoon-system"],
  leadsTo: [],
  usedIn: ["meteo-indian-ocean-monsoon", "meteo-extreme-events"]
},

{
  id: "meteo-nao-ao",
  sectionId: "METEO-13",
  order: 5,
  title: "North Atlantic Oscillation (NAO) and Arctic Oscillation (AO)",
  definition: "The NAO is a North Atlantic pressure seesaw between the Icelandic low and Azores high that steers the Atlantic storm track. The AO (Northern Annular Mode) is a wider annular pattern of polar versus mid-latitude pressure. Both matter most for North Atlantic–European winters; they are not tropical Pacific modes like ENSO.",
  keyFacts: [
    "+NAO: stronger Iceland–Azores contrast; stronger westerlies; milder/wetter northern Europe in classic composites",
    "−NAO: weaker contrast; more blocking; higher odds of cold European outbreaks in classic composites",
    "AO: annular polar-cap pressure pattern related to NAO but broader",
    "Timescale: days to seasons — winter focus",
    "Distinct from ENSO and IOD"
  ],
  explanationSections: [
    { heading: "Keep the basin straight", body: "If the question is about Azores and Iceland, think NAO. If it is about Niño-3.4 SST, think ENSO. Mixing basins is the main exam failure mode." }
  ],
  subtopics: [
    {
      id: "meteo-nao-ao-winter-composites",
      title: "Winter composite impacts (classic)",
      summary: "What +NAO vs −NAO usually means for Europe — tendencies, not guarantees.",
      explanation: "Positive NAO winters often feature a vigorous Atlantic jet and milder maritime air into northwest Europe. Negative NAO winters favour a weaker jet and blocking patterns that can allow cold continental air to dominate for spells. Always treat composites as probabilistic.",
      examples: [
        { problem: "Stronger-than-normal Azores high and deeper Icelandic low — which NAO phase?", solution: "Positive NAO.", answer: "+NAO" }
      ],
      shortcuts: ["+NAO = strong dipole / strong westerlies", "−NAO = weak dipole / blocking risk"],
      traps: ["Guaranteeing a cold winter from one weekly −NAO index"]
    },
    {
      id: "meteo-nao-ao-vs-enso",
      title: "NAO/AO vs ENSO vs WD",
      summary: "Different oceans and mechanisms.",
      explanation: "ENSO is a coupled tropical Pacific SST–Walker mode. NAO/AO are high-latitude atmospheric annular/Atlantic patterns. Western disturbances affecting Pakistan are mid-latitude/subtropical troughs in the westerlies — they may feel downstream influences from large-scale patterns but are not identical to the NAO index.",
      examples: [
        { problem: "Mode defined on tropical Pacific SST anomalies — NAO or ENSO?", solution: "ENSO.", answer: "ENSO" }
      ],
      shortcuts: ["NAO = Atlantic pressure seesaw", "ENSO = tropical Pacific", "AO = annular high-latitude"],
      traps: ["Using NAO to explain monsoon SST directly"]
    }
  ],
  examPoints: [
    "NAO dipole centres",
    "+/− winter tendencies",
    "Distinguish from ENSO"
  ],
  commonMistakes: [
    "NAO = ENSO.",
    "Deterministic winter forecasts from NAO alone.",
    "Ignoring hemispheric sense of AO."
  ],
  relatedTopics: ["meteo-enso-global-impacts", "meteo-mjo", "meteo-jet-stream", "meteo-global-circulation", "meteo-rossby-waves", "meteo-western-disturbances"],
  content: true,
  buildsOn: ["meteo-rossby-waves", "meteo-global-circulation"],
  leadsTo: [],
  usedIn: ["meteo-western-disturbances"]
},

{
  id: "meteo-mjo",
  sectionId: "METEO-13",
  order: 6,
  title: "Madden-Julian Oscillation (MJO): Tropical Convection and Teleconnections",
  definition: "The MJO is an eastward-moving pulse of tropical convection and circulation with a typical period of about 30–60 days. It organises intraseasonal active and break spells and offers sub-seasonal forecast signals.",
  keyFacts: [
    "Intraseasonal: roughly 30–60 day timescale",
    "Eastward propagation in the tropics",
    "Active phase: enhanced convection; suppressed phase: reduced",
    "Modulates monsoon active/break spells",
    "Bridge between weather and seasonal climate"
  ],
  explanationSections: [
    { heading: "Not ENSO", body: "ENSO is interannual and Pacific-basin coupled; MJO is intraseasonal and moves around the tropics." }
  ],
  subtopics: [
    {
      id: "meteo-mjo-timescale",
      title: "Timescale placement",
      summary: "Between daily weather and seasonal ENSO.",
      explanation: "Weather is day-to-day; ENSO is year-to-year; MJO fills the sub-seasonal window of weeks. That is why it matters for monsoon breaks and extended-range outlooks.",
      examples: [
        { problem: "Is the MJO primarily an interannual Pacific SST mode like ENSO?", solution: "No — intraseasonal convective pulse.", answer: "No" }
      ],
      shortcuts: ["30–60 days", "Not ENSO"],
      traps: ["MJO = El Niño"]
    },
    {
      id: "meteo-mjo-monsoon-use",
      title: "Monsoon active/break tool",
      summary: "Phase modulates rainfall spells.",
      explanation: "When the convective MJO envelope is favourably placed, monsoon regions can see active rainfall spells; suppressed phases favour breaks. It is a modulation, not a full seasonal replacement for monsoon dynamics.",
      examples: [
        { problem: "Why do forecasters track MJO phase during monsoon?", solution: "It helps anticipate active vs break rainfall periods on weekly timescales.", answer: "Active/break timing" }
      ],
      shortcuts: ["Active phase → rain risk up", "Suppressed → break risk"],
      traps: ["MJO sets the entire seasonal total alone"]
    }
  ],
  examPoints: [
    "30–60 day period",
    "Eastward tropical pulse",
    "Monsoon active/break link"
  ],
  commonMistakes: [
    "MJO = ENSO.",
    "Wrong timescale.",
    "Ignoring suppressed phase."
  ],
  relatedTopics: ["meteo-enso-basics", "meteo-indian-ocean-monsoon", "meteo-forecasting-methods"],
  content: true,
  buildsOn: ["meteo-global-circulation", "meteo-monsoon-system"],
  leadsTo: ["meteo-forecasting-methods"],
  usedIn: ["meteo-indian-ocean-monsoon", "meteo-forecast-skill"]
},

{
  id: "meteo-amoc-slowdown",
  sectionId: "METEO-13",
  order: 7,
  title: "AMOC Slowdown & Climate Impacts",
  definition: "The Atlantic Meridional Overturning Circulation (AMOC) carries warm upper water northward and returns colder deep water southward. A slowdown would reshape regional heat transport, especially around the North Atlantic, without cancelling global greenhouse warming.",
  keyFacts: [
    "AMOC = Atlantic overturning cell",
    "Important for North Atlantic heat transport",
    "Freshwater input can inhibit sinking",
    "Slowdown ≠ global cooling overall",
    "Active research and monitoring topic"
  ],
  explanationSections: [
    { heading: "Regional redistribution", body: "AMOC changes move heat around; they do not delete the global energy imbalance from GHGs." }
  ],
  subtopics: [
    {
      id: "meteo-amoc-slowdown-mechanism",
      title: "Why freshwater matters",
      summary: "Density of high-latitude surface water.",
      explanation: "Sinking in the North Atlantic depends on dense surface water. Extra freshwater from ice melt or runoff can freshen and lighten the surface layer, making sinking harder and weakening overturning in conceptual models.",
      examples: [
        { problem: "How can ice-sheet meltwater tend to weaken AMOC in standard arguments?", solution: "Freshening reduces surface density and sinking.", answer: "Freshening / less sinking" }
      ],
      shortcuts: ["Dense water sinks", "Fresh → lighter → less sink"],
      traps: ["Freshwater makes water denser"]
    },
    {
      id: "meteo-amoc-slowdown-not-cancel",
      title: "Does not cancel global warming",
      summary: "Regional vs global messages.",
      explanation: "Even if the North Atlantic region cooled relative to a stronger AMOC baseline, the planet can still warm overall under increased GHGs. Treat AMOC as a regional modifier inside a warming world.",
      examples: [
        { problem: "True or false: AMOC slowdown means greenhouse warming is irrelevant.", solution: "False.", answer: "False" }
      ],
      shortcuts: ["Regional heat shift", "GHG still global"],
      traps: ["AMOC slowdown = global ice age narrative"]
    }
  ],
  examPoints: [
    "What AMOC transports",
    "Freshwater inhibition idea",
    "Not a global GHG cancel button"
  ],
  commonMistakes: [
    "AMOC = Gulf Stream only as slogans.",
    "Global cooling guaranteed.",
    "Ignoring density."
  ],
  relatedTopics: ["meteo-ocean-currents", "meteo-climate-feedbacks", "meteo-radiative-forcing"],
  content: true,
  buildsOn: ["meteo-ocean-currents"],
  leadsTo: [],
  usedIn: ["meteo-climate-feedbacks"]
},

];