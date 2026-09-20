import type { Question } from '@/types';

export const questions: Question[] = [
  // TOPIC 1: Environment, Key Distinctions & Sustainability
  // ───────────────────────────────────────────────────────

  // Easy
  { id: "ENV1A-Q001", sectionId: "ENV-1", topicId: "env-fundamentals-and-sustainability", difficulty: "easy", type: "single",
    question: "Which of the following is a BIOTIC component of the environment?",
    options: ["Water", "Soil", "Trees", "Air"],
    correctAnswer: 2,
    explanation: "Trees are biotic (living). Water, soil, and air are all abiotic (non-living). The biotic/abiotic distinction is the most fundamental environmental classification — biotic = living organisms, abiotic = non-living physical/chemical factors.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1A-Q002", sectionId: "ENV-1", topicId: "env-fundamentals-and-sustainability", difficulty: "easy", type: "single",
    question: "A POPULATION consists of:",
    options: ["All organisms in an area", "Individuals of the same species in an area", "The role of an organism", "Non-living factors"],
    correctAnswer: 1,
    explanation: "A population = individuals of the SAME species in an area. A community = ALL species in an area. An organism's role = niche. Non-living factors = abiotic. This population/community distinction is tested in nearly every exam.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1A-Q003", sectionId: "ENV-1", topicId: "env-fundamentals-and-sustainability", difficulty: "easy", type: "single",
    question: "The BRUNDTLAND REPORT (1987) defined sustainable development as development that:",
    options: [
      "Maximizes economic growth at any cost",
      "Meets present needs without compromising future generations' needs",
      "Eliminates all human impact on the environment",
      "Focuses only on environmental protection"
    ],
    correctAnswer: 1,
    explanation: "The Brundtland definition (1987) is the most-quoted sustainability definition: 'Development that meets the needs of the present without compromising the ability of future generations to meet their own needs.' True sustainability is not just environmental — it balances economic, social, and environmental pillars.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1A-Q004", sectionId: "ENV-1", topicId: "env-fundamentals-and-sustainability", difficulty: "easy", type: "true_false",
    question: "The atmosphere, hydrosphere, lithosphere, and biosphere are the four interconnected spheres of the environment.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. The four spheres — air (atmosphere), water (hydrosphere), rock/soil (lithosphere), and living things (biosphere) — are constantly interacting. A change in one affects the others (e.g., air pollution causes acid rain affecting water and soil).",
    sourceCitation: "Standard environmental science curriculum" },

  // Medium
  { id: "ENV1A-Q005", sectionId: "ENV-1", topicId: "env-fundamentals-and-sustainability", difficulty: "medium", type: "single",
    question: "An organism's NICHE is best described as:",
    options: [
      "Where the organism lives",
      "Its role or job in the ecosystem",
      "The species to which it belongs",
      "The temperature it requires"
    ],
    correctAnswer: 1,
    explanation: "Niche = ROLE or JOB of an organism in the ecosystem (its profession, not its address). Habitat = WHERE it lives (its address). Easy mnemonic: 'Nice to have a job' = niche. 'Habitat has a hat' = home.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1A-Q006", sectionId: "ENV-1", topicId: "env-fundamentals-and-sustainability", difficulty: "medium", type: "single",
    question: "The PRECAUTIONARY PRINCIPLE states that:",
    options: [
      "Industries should not be regulated until harm is proven",
      "Preventive action should be taken even when scientific evidence is uncertain",
      "Only government can prevent environmental harm",
      "All new technologies are inherently dangerous"
    ],
    correctAnswer: 1,
    explanation: "The precautionary principle says: when there is a threat of serious harm, lack of full scientific certainty should NOT be used as a reason to postpone cost-effective preventive measures. In other words, act before proof of harm, especially for irreversible damage.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1A-Q007", sectionId: "ENV-1", topicId: "env-fundamentals-and-sustainability", difficulty: "medium", type: "single",
    question: "Which of the following is ANTHROPOGENIC (human-caused)?",
    options: ["Volcanic eruption", "Deforestation", "Tsunami", "Drought"],
    correctAnswer: 1,
    explanation: "Deforestation is caused by humans. Volcanoes, tsunamis, and droughts are natural (non-anthropogenic). The natural/anthropogenic distinction tests whether the cause is human or not — most exam questions today emphasize anthropogenic causes of environmental problems.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1A-Q008", sectionId: "ENV-1", topicId: "env-fundamentals-and-sustainability", difficulty: "medium", type: "single",
    question: "ECOLOGY is best defined as:",
    options: [
      "All organisms in an area",
      "The study of organisms and their environment",
      "A community and its physical environment",
      "The physical environment only"
    ],
    correctAnswer: 1,
    explanation: "Ecology = the STUDY of organisms and their relationships with their environment. An ecosystem = a community + its physical environment. These are often confused: ecology is a SCIENCE (a study), ecosystem is a SYSTEM (a thing being studied).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1A-Q009", sectionId: "ENV-1", topicId: "env-fundamentals-and-sustainability", difficulty: "medium", type: "single",
    question: "The THREE PILLARS of sustainability are:",
    options: [
      "Air, water, soil",
      "Plants, animals, microbes",
      "Economic, social, environmental",
      "Past, present, future"
    ],
    correctAnswer: 2,
    explanation: "Sustainability rests on three pillars: economic, social, and environmental. A project that is only environmentally sustainable but economically unviable or socially unjust isn't truly sustainable. This three-way balance is what distinguishes real sustainability from mere environmentalism.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1A-Q010", sectionId: "ENV-1", topicId: "env-fundamentals-and-sustainability", difficulty: "medium", type: "multi",
    question: "Which of the following are ABIOTIC (non-living) components of the environment? (Select all that apply.)",
    options: ["Bacteria", "Temperature", "Soil minerals", "Sunlight", "Fish"],
    correctAnswer: [1, 2, 3],
    explanation: "Abiotic = non-living physical/chemical factors: temperature, soil minerals, sunlight. Biotic = living organisms: bacteria (microbes are alive), fish. The biotic/abiotic distinction is fundamental and tested frequently.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1A-Q011", sectionId: "ENV-1", topicId: "env-fundamentals-and-sustainability", difficulty: "medium", type: "multi",
    question: "Which of the following are CORRECT definitions? (Select all that apply.)",
    options: [
      "Population = one species in an area",
      "Community = all species in an area",
      "Habitat = role of an organism",
      "Niche = where an organism lives"
    ],
    correctAnswer: [0, 1],
    explanation: "(a) and (b) are correct. (c) is WRONG: habitat = where it lives (not role). (d) is WRONG: niche = its role (not where). The common error is swapping habitat and niche. Habitat has a hat (it's where you live); niche has a job (it's what you do).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1A-Q012", sectionId: "ENV-1", topicId: "env-fundamentals-and-sustainability", difficulty: "medium", type: "true_false",
    question: "The POLLUTER-PAYS PRINCIPLE holds the polluting entity responsible for cleanup costs.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. The polluter-pays principle is a core environmental governance principle: the entity causing pollution should bear the cost of remediation, not the general public. This incentivizes pollution prevention and is reflected in many environmental laws (e.g., superfund in the US, environmental damage liability in EU).",
    sourceCitation: "Standard environmental science curriculum" },

  // Hard
  { id: "ENV1A-Q013", sectionId: "ENV-1", topicId: "env-fundamentals-and-sustainability", difficulty: "hard", type: "single",
    question: "An ecosystem is best defined as:",
    options: [
      "A single species in an area",
      "The study of nature",
      "A community of organisms interacting with their physical environment",
      "All living things on Earth"
    ],
    correctAnswer: 2,
    explanation: "Ecosystem = community (all living organisms) + their physical environment, interacting as a functional unit. Note the difference: ecology is the STUDY of ecosystems; an ecosystem is the system being studied. (a) describes a population. (d) describes the biosphere (one of the four spheres).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1A-Q014", sectionId: "ENV-1", topicId: "env-fundamentals-and-sustainability", difficulty: "hard", type: "single",
    question: "INTERGENERATIONAL EQUITY is best defined as:",
    options: [
      "Equal distribution of resources among current generations",
      "Each generation leaving the environment in no worse condition for future generations",
      "Equal voting rights for all age groups",
      "Sharing resources between developed and developing nations"
    ],
    correctAnswer: 1,
    explanation: "Intergenerational equity = each generation should leave the environment in no worse condition for future generations. This is part of the Brundtland definition of sustainability. It is tested as an MCQ in most FPSC-style environmental exams — remember the key phrase 'future generations'.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1A-Q015", sectionId: "ENV-1", topicId: "env-fundamentals-and-sustainability", difficulty: "hard", type: "multi",
    question: "Which of the following are CORRECT distinctions? (Select all that apply.)",
    options: [
      "Population = one species; Community = all species in an area",
      "Habitat = where an organism lives; Niche = its role",
      "Biotic = living; Abiotic = non-living",
      "Ecology = study; Ecosystem = system being studied"
    ],
    correctAnswer: [0, 1, 2, 3],
    explanation: "All four are correct. These are the four foundational distinctions tested in nearly every environmental science exam. The single most common error is swapping habitat and niche. The second most common is confusing ecology (study) with ecosystem (system).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1A-Q016", sectionId: "ENV-1", topicId: "env-fundamentals-and-sustainability", difficulty: "hard", type: "single",
    question: "Choose the CORRECT sequence of the four environmental spheres from outermost to innermost (relative to Earth's surface):",
    options: [
      "Biosphere → Lithosphere → Hydrosphere → Atmosphere",
      "Atmosphere → Hydrosphere → Lithosphere → Biosphere",
      "Lithosphere → Hydrosphere → Atmosphere → Biosphere",
      "Hydrosphere → Atmosphere → Lithosphere → Biosphere"
    ],
    correctAnswer: 1,
    explanation: "From outermost to innermost: Atmosphere (air around Earth) → Hydrosphere (water on surface) → Lithosphere (rock/soil below water) → Biosphere (all living things, which exist within and across the other three). This order is sometimes tested as 'which sphere is outermost/innermost' or 'which sphere contains the others.'",
    sourceCitation: "Standard environmental science curriculum" },

  // TOPIC 2: Carrying Capacity, Footprint & Biocapacity
  // ───────────────────────────────────────────────────────

  // Easy
  { id: "ENV1B-Q001", sectionId: "ENV-1", topicId: "env-carry-capacity-and-footprint", difficulty: "easy", type: "single",
    question: "CARRYING CAPACITY refers to:",
    options: [
      "The total area an animal occupies",
      "The maximum population an environment can sustain indefinitely",
      "The speed at which a species reproduces",
      "The number of predators in an ecosystem"
    ],
    correctAnswer: 1,
    explanation: "Carrying capacity (K) = the maximum population size of a species that an environment can sustain indefinitely, given available resources (food, water, space). It is NOT fixed — it changes with conditions.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1B-Q002", sectionId: "ENV-1", topicId: "env-carry-capacity-and-footprint", difficulty: "easy", type: "single",
    question: "An ECOLOGICAL FOOTPRINT measures:",
    options: [
      "The actual land area occupied by a species",
      "The land/water area needed to support a person's lifestyle",
      "The number of species in an ecosystem",
      "The age of a geological formation"
    ],
    correctAnswer: 1,
    explanation: "Ecological footprint = the amount of productive land and water area needed to support a person's (or population's) consumption and absorb their waste. Measured in global hectares (gha). It quantifies human demand on the biosphere.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1B-Q003", sectionId: "ENV-1", topicId: "env-carry-capacity-and-footprint", difficulty: "easy", type: "true_false",
    question: "Earth Overshoot Day marks the date each year when humanity has used all the resources Earth can regenerate in that year.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Earth Overshoot Day (previously called Ecological Debt Day) marks the calendar date when humanity's ecological footprint for the year exceeds Earth's biocapacity for that year. In recent years it has fallen in late July or early August, meaning we use a full year's resources in about 7 months.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1B-Q004", sectionId: "ENV-1", topicId: "env-carry-capacity-and-footprint", difficulty: "easy", type: "single",
    question: "Which of the following INCREASES a person's ecological footprint?",
    options: ["Eating locally-grown food", "Walking or cycling", "Frequent air travel", "Using renewable energy"],
    correctAnswer: 2,
    explanation: "Frequent air travel significantly increases ecological footprint (high CO2 emissions per passenger-km, plus high energy use). The other options (local food, walking, renewables) all REDUCE footprint. Air travel is one of the largest single contributors to a high-footprint lifestyle.",
    sourceCitation: "Standard environmental science curriculum" },

  // Medium
  { id: "ENV1B-Q005", sectionId: "ENV-1", topicId: "env-carry-capacity-and-footprint", difficulty: "medium", type: "single",
    question: "A population that grows EXPONENTIALLY (J-shaped curve) is characterized by:",
    options: [
      "Slow start, rapid growth, leveling off at carrying capacity",
      "Continuous doubling at a constant rate with no limits",
      "Stable population near carrying capacity",
      "Random fluctuations around an average"
    ],
    correctAnswer: 1,
    explanation: "Exponential growth = J-shaped curve = continuous doubling at a constant rate, with no environmental limits. This is the theoretical growth pattern, but in nature it only happens short-term (bacteria in lab, invasive species briefly) because resources eventually become limited.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1B-Q006", sectionId: "ENV-1", topicId: "env-carry-capacity-and-footprint", difficulty: "medium", type: "single",
    question: "A LOGISTIC growth curve (S-shaped) differs from exponential growth because:",
    options: [
      "It never levels off",
      "It slows and levels off as it approaches carrying capacity",
      "It always declines after the first generation",
      "It is always faster than exponential"
    ],
    correctAnswer: 1,
    explanation: "Logistic growth = S-shaped curve = slows and levels off as it approaches carrying capacity (K). Resources become limited, slowing growth. This is the realistic model for most natural populations. Exponential growth has no leveling off.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1B-Q007", sectionId: "ENV-1", topicId: "env-carry-capacity-and-footprint", difficulty: "medium", type: "single",
    question: "BIOCAPACITY refers to:",
    options: [
      "The total number of species in an ecosystem",
      "Earth's capacity to regenerate resources and absorb waste",
      "The maximum human population Earth can hold",
      "The diversity of an ecosystem"
    ],
    correctAnswer: 1,
    explanation: "Biocapacity = Earth's regenerative capacity — the ability of ecosystems to produce useful biological materials and absorb waste. When humanity's footprint exceeds biocapacity, we are in ecological overshoot (the basis of Earth Overshoot Day).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1B-Q008", sectionId: "ENV-1", topicId: "env-carry-capacity-and-footprint", difficulty: "medium", type: "single",
    question: "Which of the following is most likely to INCREASE the carrying capacity of a habitat for a deer population?",
    options: [
      "Decreasing available food supply",
      "Introducing a new predator",
      "Increasing available water and vegetation",
      "Reducing habitat size"
    ],
    correctAnswer: 2,
    explanation: "Carrying capacity (K) is determined by limiting factors (whichever resource is scarcest). INCREASING food and water INCREASES K. Decreasing food, adding predators, or reducing habitat all DECREASE K. This is tested frequently: K is dynamic, not fixed, and responds to resource availability.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1B-Q009", sectionId: "ENV-1", topicId: "env-carry-capacity-and-footprint", difficulty: "medium", type: "single",
    question: "ECOLOGICAL OVERSHOOT occurs when:",
    options: [
      "A species population exceeds its carrying capacity temporarily",
      "Humanity's ecological footprint exceeds Earth's biocapacity",
      "An ecosystem loses a keystone species",
      "Biodiversity decreases in a region"
    ],
    correctAnswer: 1,
    explanation: "Ecological overshoot = human demand (footprint) exceeds Earth's regenerative supply (biocapacity). The average world footprint is ~2.7 gha, while world biocapacity is ~1.6 gha — meaning we are in global overshoot. Earth Overshoot Day marks this annually.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1B-Q010", sectionId: "ENV-1", topicId: "env-carry-capacity-and-footprint", difficulty: "medium", type: "true_false",
    question: "Pakistan's ecological footprint is lower than the global average, so Pakistan is NOT in ecological overshoot.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. While Pakistan's per-capita footprint is relatively low (~0.7 gha vs. world ~2.7 gha), Pakistan's per-capita BIOCAPACITY is also very low (~0.4 gha). Since footprint (0.7) > biocapacity (0.4), Pakistan is in ecological DEFICIT (overshoot). The same logic applies to most countries with low footprints — they often have even lower biocapacity.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1B-Q011", sectionId: "ENV-1", topicId: "env-carry-capacity-and-footprint", difficulty: "medium", type: "multi",
    question: "Which of the following factors INCREASE a person's ecological footprint? (Select all that apply.)",
    options: [
      "Eating large amounts of meat",
      "Driving a large car",
      "Living in a small apartment",
      "Taking long-haul flights"
    ],
    correctAnswer: [0, 1, 3],
    explanation: "(a) Correct: meat production has high environmental impact (land, water, methane). (b) Correct: large cars use more fuel. (c) Wrong: small apartments use less resources, reducing footprint. (d) Correct: flights have very high CO2 emissions per passenger-km. Lifestyle choices that REDUCE footprint include smaller living spaces, less meat, public transit, local food.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1B-Q012", sectionId: "ENV-1", topicId: "env-carry-capacity-and-footprint", difficulty: "medium", type: "single",
    question: "What does Earth Overshoot Day indicate?",
    options: [
      "The day Earth stops rotating",
      "The day humanity has used a full year's worth of resources",
      "The day when Earth enters a new season",
      "The day when the ozone layer is most depleted"
    ],
    correctAnswer: 1,
    explanation: "Earth Overshoot Day (previously called Ecological Debt Day) marks the calendar date each year when humanity's cumulative ecological footprint for that year exceeds Earth's annual biocapacity. In recent years, this has fallen in late July or early August — meaning we use a year's resources in about 7 months. The date moves earlier each year as our footprint grows.",
    sourceCitation: "Standard environmental science curriculum" },

  // Hard
  { id: "ENV1B-Q013", sectionId: "ENV-1", topicId: "env-carry-capacity-and-footprint", difficulty: "hard", type: "single",
    question: "A population's growth follows a logistic curve. The population GROWS FASTEST at which point?",
    options: [
      "When N is near 0 (very small population)",
      "When N is near K (carrying capacity)",
      "When N is at K/2 (half of carrying capacity)",
      "Growth rate is constant throughout"
    ],
    correctAnswer: 2,
    explanation: "In logistic growth, the population grows fastest at N = K/2 (half the carrying capacity). At this point, there are still plenty of resources but enough individuals to produce many offspring. Near K, resources are limited and growth slows. Near 0, there are too few individuals to grow fast in absolute terms. This is a common exam question.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1B-Q014", sectionId: "ENV-1", topicId: "env-carry-capacity-and-footprint", difficulty: "hard", type: "multi",
    question: "Which of the following are CORRECT relationships? (Select all that apply.)",
    options: [
      "Footprint > Biocapacity = Ecological overshoot",
      "Earth Overshoot Day marks when overshoot begins each year",
      "Logistic growth produces an S-curve; Exponential produces a J-curve",
      "Carrying capacity is always fixed and never changes"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "(a) Correct: overshoot = demand > supply. (b) Correct: Earth Overshoot Day marks the annual date when humanity crosses into overshoot. (c) Correct: S-curve (logistic, with limits) vs. J-curve (exponential, no limits). (d) WRONG: carrying capacity is DYNAMIC — it changes with conditions (food, predators, disease, climate). A common exam error is assuming K is fixed.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1B-Q015", sectionId: "ENV-1", topicId: "env-carry-capacity-and-footprint", difficulty: "hard", type: "single",
    question: "In a logistic growth model, the population growth rate is:",
    options: [
      "Constant at all population sizes",
      "Highest at very low populations (near 0)",
      "Highest at intermediate populations (near K/2)",
      "Highest at very high populations (near K)"
    ],
    correctAnswer: 2,
    explanation: "In logistic growth, the per-capita growth rate is highest at low N, but the TOTAL population growth rate (dN/dt) is highest at N = K/2. This is because dN/dt = rN(1 - N/K), a parabola that peaks at N = K/2. This is a common exam point.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV1B-Q016", sectionId: "ENV-1", topicId: "env-carry-capacity-and-footprint", difficulty: "hard", type: "single",
    question: "If the world ecological footprint is 2.7 gha/person and world biocapacity is 1.6 gha/person, what is the WORLD Overshoot Day equivalent (the day humanity would have used a full year's resources, in fraction of year)?",
    options: ["Around day 220 (early August)", "Around day 100 (early April)", "Around day 365 (year-end)", "Around day 50 (mid-February)"],
    correctAnswer: 0,
    explanation: "If footprint (2.7) > biocapacity (1.6), the ratio is 2.7/1.6 ≈ 1.69. This means we use a full year's resources in 1/1.69 ≈ 0.59 of the year, which is day ~216 (early August). Recent Earth Overshoot Day dates have been in late July/early August, consistent with this calculation.",
    sourceCitation: "Standard environmental science curriculum" },

  // TOPIC 1: Ecosystem Structure & Energy Flow
  // ───────────────────────────────────────────────────────

  // Easy
  { id: "ENV2A-Q001", sectionId: "ENV-2", topicId: "env-ecosystem-structure-and-energy-flow", difficulty: "easy", type: "single",
    question: "Organisms that MAKE their own food (e.g., plants via photosynthesis) are called:",
    options: ["Consumers", "Decomposers", "Producers (autotrophs)", "Parasites"],
    correctAnswer: 2,
    explanation: "Producers (autotrophs) make their own food from inorganic sources (typically sunlight via photosynthesis). Examples: plants, algae, cyanobacteria. Consumers eat others; decomposers recycle dead matter.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2A-Q002", sectionId: "ENV-2", topicId: "env-ecosystem-structure-and-energy-flow", difficulty: "easy", type: "single",
    question: "Bacteria and fungi that break down dead organic matter are called:",
    options: ["Producers", "Decomposers", "Primary consumers", "Herbivores"],
    correctAnswer: 1,
    explanation: "Decomposers (saprotrophs) break down dead organic matter, recycling nutrients back into the ecosystem. Examples: bacteria and fungi. Without decomposers, dead matter would accumulate and nutrients would not be recycled — life would stop.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2A-Q003", sectionId: "ENV-2", topicId: "env-ecosystem-structure-and-energy-flow", difficulty: "easy", type: "true_false",
    question: "In a food chain, arrows point from the EATEN to the EATER (showing energy flow direction).",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Arrows in food chains and food webs show the direction of energy flow — from the organism being eaten to the organism eating it. So 'grass → rabbit → fox' means grass is eaten by rabbit, which is eaten by fox. Many students get this backwards.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2A-Q004", sectionId: "ENV-2", topicId: "env-ecosystem-structure-and-energy-flow", difficulty: "easy", type: "single",
    question: "In the food chain 'grass → rabbit → fox → eagle', which is the tertiary consumer?",
    options: ["Grass", "Rabbit", "Fox", "Eagle"],
    correctAnswer: 3,
    explanation: "Trophic levels: grass = producer (1st); rabbit = primary consumer (2nd); fox = secondary consumer (3rd); eagle = tertiary consumer (4th, eats the secondary consumer). Tertiary = third level of consumer = fourth trophic level overall.",
    sourceCitation: "Standard environmental science curriculum" },

  // Medium
  { id: "ENV2A-Q005", sectionId: "ENV-2", topicId: "env-ecosystem-structure-and-energy-flow", difficulty: "medium", type: "single",
    question: "According to the 10% rule, if producers have 10,000 units of energy, how much energy is available to the tertiary consumers?",
    options: ["1000 units", "100 units", "10 units", "1 unit"],
    correctAnswer: 2,
    explanation: "10% rule: each level passes ~10% of energy up. 10,000 (producers) → 1,000 (primary) → 100 (secondary) → 10 (tertiary). So tertiary consumers get about 10 units. This is why top predators are few in number and why food chains rarely exceed 4-5 levels.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2A-Q006", sectionId: "ENV-2", topicId: "env-ecosystem-structure-and-energy-flow", difficulty: "medium", type: "single",
    question: "Where does the energy LOST between trophic levels go?",
    options: [
      "Lost to outer space",
      "Lost as heat through cellular respiration and metabolism",
      "Recycled to producers",
      "Stored in dead matter forever"
    ],
    correctAnswer: 1,
    explanation: "The 90% of energy NOT transferred up is lost as HEAT through cellular respiration, plus used in movement, metabolism, and undigested material. This is a direct consequence of the second law of thermodynamics — energy conversions are never 100% efficient; some always degrades to heat.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2A-Q007", sectionId: "ENV-2", topicId: "env-ecosystem-structure-and-energy-flow", difficulty: "medium", type: "single",
    question: "A FOOD WEB is more realistic than a food chain because:",
    options: [
      "It always has more trophic levels",
      "It shows multiple interconnected feeding relationships",
      "It excludes decomposers for clarity",
      "It doesn't include producers"
    ],
    correctAnswer: 1,
    explanation: "A food web shows MULTIPLE INTERCONNECTED feeding relationships, reflecting that most species eat several things and are eaten by several others. A food chain is linear and oversimplified. Food webs are more realistic but harder to draw.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2A-Q008", sectionId: "ENV-2", topicId: "env-ecosystem-structure-and-energy-flow", difficulty: "medium", type: "single",
    question: "Which statement about energy in ecosystems is CORRECT?",
    options: [
      "Energy cycles within the ecosystem like matter does",
      "Energy flows in one direction and is not recycled",
      "Energy is created by decomposers",
      "Energy accumulates at the top of the food chain"
    ],
    correctAnswer: 1,
    explanation: "Energy flows in ONE direction through ecosystems (from sun → producers → consumers → lost as heat) and is NOT recycled. This is the key distinction: matter CYCLES, energy FLOWS. Because energy isn't recycled, ecosystems need continuous solar input to sustain themselves.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2A-Q009", sectionId: "ENV-2", topicId: "env-ecosystem-structure-and-energy-flow", difficulty: "medium", type: "single",
    question: "Why are top predators (eagles, tigers, sharks) usually rare?",
    options: [
      "They reproduce more slowly than other animals",
      "Insufficient energy reaches the top of the food chain (10% rule)",
      "Humans hunt them more than other species",
      "They are more vulnerable to disease"
    ],
    correctAnswer: 1,
    explanation: "Only ~10% of energy transfers up each trophic level, so the available energy decreases exponentially. By the top of the food chain, there's simply not enough energy to support large populations. This is why top predators are always rare compared to lower trophic levels.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2A-Q010", sectionId: "ENV-2", topicId: "env-ecosystem-structure-and-energy-flow", difficulty: "medium", type: "multi",
    question: "Which of the following are CONSUMERS (heterotrophs)? (Select all that apply.)",
    options: ["Oak tree", "Deer (eats grass)", "Lion (eats deer)", "Eagle (eats snakes)"],
    correctAnswer: [1, 2, 3],
    explanation: "Consumers eat others. Deer (herbivore), Lion (carnivore), Eagle (carnivore) are all consumers. Oak tree is a PRODUCER (makes its own food via photosynthesis). This is a tested distinction.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2A-Q011", sectionId: "ENV-2", topicId: "env-ecosystem-structure-and-energy-flow", difficulty: "medium", type: "multi",
    question: "Which of the following are CORRECT distinctions? (Select all that apply.)",
    options: [
      "Energy flows; matter cycles",
      "Arrows in food webs point from eaten to eater",
      "10% of energy transfers between trophic levels",
      "Top predators are most numerous"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "(a) Correct: this is the fundamental distinction. (b) Correct: arrows show energy flow direction. (c) Correct: the 10% rule. (d) WRONG: top predators are RAREST, not most numerous — because only 10% of energy passes up each level.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2A-Q012", sectionId: "ENV-2", topicId: "env-ecosystem-structure-and-energy-flow", difficulty: "medium", type: "true_false",
    question: "Decomposers like bacteria and fungi are essential for recycling nutrients in ecosystems.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Decomposers break down dead organic matter, releasing nutrients back into the soil and atmosphere. Without decomposers, nutrients would remain locked in dead organisms and not be available for new growth — life as we know it would stop.",
    sourceCitation: "Standard environmental science curriculum" },

  // Hard
  { id: "ENV2A-Q013", sectionId: "ENV-2", topicId: "env-ecosystem-structure-and-energy-flow", difficulty: "hard", type: "single",
    question: "In a grassland food chain (grass → grasshopper → frog → snake → hawk), if the producers have 50,000 kcal, how much energy reaches the hawk?",
    options: ["5000 kcal", "500 kcal", "50 kcal", "5 kcal"],
    correctAnswer: 3,
    explanation: "Apply 10% rule: grass (50,000) → grasshopper (5,000) → frog (500) → snake (50) → hawk (5). So the hawk gets 5 kcal. This illustrates why food chains rarely have more than 4-5 levels — there simply isn't enough energy to support a 6th level.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2A-Q014", sectionId: "ENV-2", topicId: "env-ecosystem-structure-and-energy-flow", difficulty: "hard", type: "multi",
    question: "Which of the following are correct about ENERGY in ecosystems? (Select all that apply.)",
    options: [
      "Energy is not recycled within the ecosystem",
      "Decomposers do not fit into a food chain",
      "Energy originates from the sun (in most ecosystems)",
      "The 10% rule means only 10% of matter is transferred up each level"
    ],
    correctAnswer: [0, 2],
    explanation: "(a) Correct: energy flows in one direction and is not recycled (unlike matter). (b) WRONG: decomposers fit into food chains as the final level — they consume dead matter from ALL other levels. (c) Correct: in most ecosystems, energy originates from the sun (via photosynthesis). (d) WRONG: the 10% rule applies to ENERGY, not matter — matter is recycled through biogeochemical cycles.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2A-Q015", sectionId: "ENV-2", topicId: "env-ecosystem-structure-and-energy-flow", difficulty: "hard", type: "single",
    question: "Choose the CORRECT sequence of organisms in a typical food chain (arrows show energy flow):",
    options: [
      "Fox → rabbit → grass (fox eats grass)",
      "Grass → rabbit → fox (grass is eaten by rabbit, which is eaten by fox)",
      "Grass ← rabbit ← fox (energy flows left to right)",
      "Rabbit → grass → fox (rabbit eats grass)"
    ],
    correctAnswer: 1,
    explanation: "In a food chain, arrows point in the direction of energy flow — FROM the organism being eaten TO the organism that eats it. So 'grass → rabbit → fox' means grass is eaten by rabbit, rabbit is eaten by fox. The arrows correctly show producer → primary consumer → secondary consumer.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2A-Q016", sectionId: "ENV-2", topicId: "env-ecosystem-structure-and-energy-flow", difficulty: "hard", type: "single",
    question: "If a primary consumer assimilates 1000 kcal of energy from producers, but uses 600 kcal for its own respiration and loses 200 kcal in feces, how much energy is available to the secondary consumer that eats it?",
    options: ["1000 kcal", "600 kcal", "200 kcal", "400 kcal"],
    correctAnswer: 2,
    explanation: "Energy accounting at each level: 1000 (ingested) − 600 (respiration/lost as heat) − 200 (feces/undigested) = 200 kcal (assimilated into consumer biomass, available to the NEXT level). This is a more detailed version of the 10% rule that accounts for the three fates of ingested energy.",
    sourceCitation: "Standard environmental science curriculum" },

  // TOPIC 2: Ecological Pyramids
  // ───────────────────────────────────────────────────────

  // Easy
  { id: "ENV2B-Q001", sectionId: "ENV-2", topicId: "env-ecological-pyramids", difficulty: "easy", type: "single",
    question: "Which type of ecological pyramid is ALWAYS upright (never inverted)?",
    options: ["Pyramid of numbers", "Pyramid of biomass", "Pyramid of energy", "Pyramid of population"],
    correctAnswer: 2,
    explanation: "The pyramid of ENERGY is always upright because energy always decreases at each trophic level (by the 10% rule and second law of thermodynamics). Pyramids of numbers and biomass can be inverted in some ecosystems.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2B-Q002", sectionId: "ENV-2", topicId: "env-ecological-pyramids", difficulty: "easy", type: "true_false",
    question: "The pyramid of numbers for a tree ecosystem is often inverted because one tree supports thousands of insects.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. A single tree (1 producer) supports thousands of insects (many primary consumers), so the number pyramid has 1 at the bottom and thousands higher up — which is technically inverted (wider at top, narrow at bottom). This is a classic example used to show that number pyramids are NOT always upright.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2B-Q003", sectionId: "ENV-2", topicId: "env-ecological-pyramids", difficulty: "easy", type: "single",
    question: "What does the pyramid of BIOMASS show?",
    options: [
      "Number of individuals at each level",
      "Energy at each level",
      "Dry weight (mass) of organisms at each level",
      "Number of species at each level"
    ],
    correctAnswer: 2,
    explanation: "Pyramid of biomass shows the DRY WEIGHT (mass) of organisms at each trophic level. Unlike numbers or energy, biomass CAN be inverted in some marine ecosystems where phytoplankton (small standing crop) support a larger zooplankton biomass.",
    sourceCitation: "Standard environmental science curriculum" },

  // Medium
  { id: "ENV2B-Q004", sectionId: "ENV-2", topicId: "env-ecological-pyramids", difficulty: "medium", type: "single",
    question: "In a pyramid of energy, the SECOND level (primary consumers) typically has:",
    options: [
      "More energy than the producers",
      "About 10% of the energy of the producers",
      "About 90% of the energy of the producers",
      "The same energy as the producers"
    ],
    correctAnswer: 1,
    explanation: "The 10% rule: only ~10% of energy transfers from one trophic level to the next. So primary consumers have about 10% of the energy of the producers, secondary consumers have ~10% of that (1% of producers), and so on.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2B-Q005", sectionId: "ENV-2", topicId: "env-ecological-pyramids", difficulty: "medium", type: "single",
    question: "Why is the pyramid of ENERGY always upright, even when the pyramids of numbers and biomass are inverted?",
    options: [
      "Energy is conserved at each level",
      "The second law of thermodynamics guarantees energy loss at each level",
      "Producers are always largest in number",
      "Consumers have more biomass than producers"
    ],
    correctAnswer: 1,
    explanation: "The second law of thermodynamics guarantees that energy conversions are never 100% efficient — some energy is always lost as heat. So energy MUST decrease at each higher trophic level, making the energy pyramid always upright. Numbers and biomass can be inverted because they're raw counts/weights, not energy flows.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2B-Q006", sectionId: "ENV-2", topicId: "env-ecological-pyramids", difficulty: "medium", type: "single",
    question: "A marine ecosystem where the standing crop of phytoplankton is LESS than that of zooplankton is an example of:",
    options: [
      "Inverted pyramid of numbers",
      "Inverted pyramid of biomass",
      "Upright pyramid of energy",
      "All three pyramids must be inverted"
    ],
    correctAnswer: 1,
    explanation: "When phytoplankton standing biomass < zooplankton biomass, the biomass pyramid is INVERTED. This can happen because phytoplankton reproduce and are consumed very quickly — at any given moment, their total mass is small, but their turnover (reproduction rate) is high, so they support a larger consumer biomass. The energy pyramid is still upright because energy flow is determined by total production, not standing stock.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2B-Q007", sectionId: "ENV-2", topicId: "env-ecological-pyramids", difficulty: "medium", type: "single",
    question: "In a forest food chain (oak tree → caterpillars → birds → hawks), if the tree has 10,000 kcal, the hawks have approximately:",
    options: ["10,000 kcal", "1,000 kcal", "100 kcal", "10 kcal"],
    correctAnswer: 3,
    explanation: "10,000 (oak) → 1,000 (caterpillars) → 100 (birds) → 10 (hawks). Apply 10% rule at each level. So hawks have ~10 kcal. This illustrates why top predators (hawks, eagles, tigers) are so few in number.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2B-Q008", sectionId: "ENV-2", topicId: "env-ecological-pyramids", difficulty: "medium", type: "single",
    question: "In a pyramid of NUMBERS for a grassland ecosystem (grass → grasshoppers → frogs → snakes), the typical shape is:",
    options: [
      "Always inverted (narrow at top)",
      "Upright (wide at bottom, narrow at top)",
      "Irregular / equal widths",
      "A perfect rectangle"
    ],
    correctAnswer: 1,
    explanation: "For a grassland, the number pyramid is typically UPRIGHT: many grasses, fewer grasshoppers, even fewer frogs, very few snakes. This is unlike the tree ecosystem (1 tree, thousands of insects — inverted). The shape depends on the SIZE of the producer, not just the 10% rule.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2B-Q009", sectionId: "ENV-2", topicId: "env-ecological-pyramids", difficulty: "medium", type: "multi",
    question: "Which of the following are correct about ecological pyramids? (Select all that apply.)",
    options: [
      "The energy pyramid is always upright",
      "The pyramid of numbers can be inverted",
      "The pyramid of biomass can be inverted in marine ecosystems",
      "All three pyramids are always upright"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "(a) Correct: energy always decreases (10% rule + 2nd law). (b) Correct: e.g., 1 tree supports thousands of insects. (c) Correct: marine ecosystems can have inverted biomass. (d) WRONG: only the energy pyramid is guaranteed upright; numbers and biomass can be inverted.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2B-Q010", sectionId: "ENV-2", topicId: "env-ecological-pyramids", difficulty: "medium", type: "true_false",
    question: "In a parasitic food chain, the pyramid of NUMBERS is inverted because one host supports many parasites.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. In a parasitic chain (tree → parasites on tree → hyperparasites on parasites), the number of organisms INCREASES at each level because each host supports many smaller parasites. This produces an inverted number pyramid, similar to the tree/insect example but with parasites.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2B-Q011", sectionId: "ENV-2", topicId: "env-ecological-pyramids", difficulty: "medium", type: "single",
    question: "The pyramid of energy is ALWAYS upright because:",
    options: [
      "All ecosystems have the same number of trophic levels",
      "Energy decreases at each higher level due to the 10% rule and second law of thermodynamics",
      "Producers are always larger than consumers",
      "The sun provides unlimited energy"
    ],
    correctAnswer: 1,
    explanation: "The second law of thermodynamics (entropy always increases) means energy conversions are never 100% efficient — some is always lost as heat. The 10% rule captures this. So energy MUST decrease up each level, making the energy pyramid always upright regardless of the ecosystem type.",
    sourceCitation: "Standard environmental science curriculum" },

  // Hard
  { id: "ENV2B-Q012", sectionId: "ENV-2", topicId: "env-ecological-pyramids", difficulty: "hard", type: "single",
    question: "A forest has 1000 trees, each supporting 50 insects, each insect eaten by 1 bird, each bird eaten by 1 hawk. What is the shape of the NUMBER pyramid?",
    options: [
      "Upright (1000 → 50,000 → 50,000 → 50,000 → ...)",
      "Inverted at the producer level (1000 trees vs 50,000 insects)",
      "A perfect rectangle",
      "Same width at all levels"
    ],
    correctAnswer: 1,
    explanation: "Trees: 1000. Insects: 1000 × 50 = 50,000. Birds: 50,000. Hawks: 50,000. The number pyramid is INVERTED at the producer level (1000 trees < 50,000 insects), then narrows. This is the classic 'tree ecosystem' example of an inverted number pyramid.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2B-Q013", sectionId: "ENV-2", topicId: "env-ecological-pyramids", difficulty: "hard", type: "multi",
    question: "Which of the following are reasons the PYRAMID OF ENERGY is ALWAYS upright? (Select all that apply.)",
    options: [
      "The 10% rule applies to energy transfer between trophic levels",
      "The second law of thermodynamics requires energy loss at each transfer",
      "Producers are always larger than consumers in body size",
      "Photosynthesis captures only a small fraction of incoming solar energy"
    ],
    correctAnswer: [0, 1],
    explanation: "(a) Correct: ~10% transfer = guaranteed energy loss up the chain. (b) Correct: 2nd law of thermodynamics (entropy) means every energy conversion loses some as heat. (c) WRONG: this is a size argument, not a universal law — it doesn't always hold (e.g., a tree is bigger than insects). (d) WRONG: photosynthesis efficiency is a separate concept; it doesn't determine the SHAPE of the energy pyramid within an ecosystem (it determines how much total energy enters the ecosystem).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2B-Q014", sectionId: "ENV-2", topicId: "env-ecological-pyramids", difficulty: "hard", type: "single",
    question: "A marine food chain: phytoplankton (10 g) → zooplankton (8 g) → small fish (5 g) → large fish (3 g). Which pyramid is shown here?",
    options: [
      "Pyramid of numbers (inverted)",
      "Pyramid of biomass (inverted — producers less than consumers)",
      "Pyramid of energy (inverted — producers less than consumers)",
      "Pyramid of species"
    ],
    correctAnswer: 1,
    explanation: "The data shows biomass at each level (grams). Producers (10g) > consumers (8g, 5g, 3g) in this example, so this is an UPRIGHT biomass pyramid. If phytoplankton were < zooplankton, it would be inverted. The key: numbers/biomass CAN be inverted; energy CANNOT.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2B-Q015", sectionId: "ENV-2", topicId: "env-ecological-pyramids", difficulty: "hard", type: "single",
    question: "In a tree-based food chain, the energy pyramid is upright (e.g., tree 10,000 → insects 1,000 → birds 100 → hawks 10) BUT the number pyramid is inverted (1 → thousands → ...). The energy pyramid is upright because:",
    options: [
      "Energy pyramids are always drawn upright by convention",
      "Each tree has 10,000 kcal of energy despite being 1 individual",
      "The 10% rule applies to weight, not energy",
      "Insects are too small to contain much energy"
    ],
    correctAnswer: 1,
    explanation: "Even though there's only 1 tree, that tree contains a large amount of stored energy (10,000 kcal) because it's a big organism. The insects (many in number) each contain small amounts of energy. So energy FLOW follows the 10% rule (upright), but NUMBER counts (1 vs. thousands) is inverted. The 10% rule applies to energy, not to count.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2B-Q016", sectionId: "ENV-2", topicId: "env-ecological-pyramids", difficulty: "hard", type: "single",
    question: "Choose the CORRECT statement about ecological pyramids:",
    options: [
      "All three pyramids are always upright because of the 10% rule",
      "Only the energy pyramid is always upright; numbers and biomass can be inverted",
      "The pyramid of numbers is always inverted",
      "Pyramids show species, not individuals"
    ],
    correctAnswer: 1,
    explanation: "Only the energy pyramid is guaranteed upright. The 10% rule applies to ENERGY, not to counts (numbers) or standing weight (biomass). Numbers can be inverted when one large producer supports many small consumers (tree/insect). Biomass can be inverted in marine ecosystems with fast turnover. This is a common exam distinction.",
    sourceCitation: "Standard environmental science curriculum" },

  // TOPIC 3: Productivity & Biogeochemical Cycles
  // ───────────────────────────────────────────────────────

  // Easy
  { id: "ENV2C-Q001", sectionId: "ENV-2", topicId: "env-productivity-and-biogeochemical-cycles", difficulty: "easy", type: "single",
    question: "What does GPP (Gross Primary Productivity) measure?",
    options: [
      "Energy stored in consumer biomass",
      "Total rate at which producers fix energy from sunlight",
      "Energy lost to respiration",
      "Number of producers in an area"
    ],
    correctAnswer: 1,
    explanation: "GPP = total rate at which producers capture and FIX energy from sunlight via photosynthesis. It includes the energy that plants use for their own respiration. NPP = GPP minus plant respiration = what's available to consumers.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2C-Q002", sectionId: "ENV-2", topicId: "env-productivity-and-biogeochemical-cycles", difficulty: "easy", type: "single",
    question: "Which ecosystem typically has the HIGHEST NPP (Net Primary Productivity)?",
    options: ["Desert", "Tropical rainforest", "Open ocean", "Tundra"],
    correctAnswer: 1,
    explanation: "Tropical rainforests have the highest NPP of any terrestrial ecosystem due to abundant sunlight, warmth, and water year-round. Deserts and tundra have low NPP due to water/temperature limits. Open ocean is low because of nutrient limitation.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2C-Q003", sectionId: "ENV-2", topicId: "env-productivity-and-biogeochemical-cycles", difficulty: "easy", type: "true_false",
    question: "In the carbon cycle, PHOTOSYNTHESIS absorbs CO₂ from the atmosphere and RESPIRATION releases it.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Photosynthesis takes CO₂ IN (fixes carbon into sugars); respiration releases CO₂ OUT (breaks sugars for energy). Deforestation removes photosynthesis (releasing stored carbon), while burning fossil fuels adds ancient-stored carbon to the atmosphere. Both increase atmospheric CO₂.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2C-Q004", sectionId: "ENV-2", topicId: "env-productivity-and-biogeochemical-cycles", difficulty: "easy", type: "single",
    question: "How does the PHOSPHORUS cycle differ from the carbon, nitrogen, and water cycles?",
    options: [
      "It moves faster than other cycles",
      "It has NO atmospheric phase (no significant gaseous form)",
      "It only occurs in marine ecosystems",
      "It requires sunlight to function"
    ],
    correctAnswer: 1,
    explanation: "The phosphorus cycle is distinctive because it has NO atmospheric phase — phosphorus doesn't have a significant gaseous form. It moves from rocks → soil → water → organisms. This is the most-asked distinguishing feature of the P cycle.",
    sourceCitation: "Standard environmental science curriculum" },

  // Medium
  { id: "ENV2C-Q005", sectionId: "ENV-2", topicId: "env-productivity-and-biogeochemical-cycles", difficulty: "medium", type: "single",
    question: "NPP (Net Primary Productivity) is calculated as:",
    options: [
      "GPP + plant respiration",
      "GPP − plant respiration (Ra)",
      "GPP × plant respiration",
      "GPP ÷ plant respiration"
    ],
    correctAnswer: 1,
    explanation: "NPP = GPP − Ra. This subtracts the energy that plants use for their own respiration/metabolism, leaving the energy stored in plant biomass that's available to consumers. NPP is the 'useful' productivity from the consumer's perspective.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2C-Q006", sectionId: "ENV-2", topicId: "env-productivity-and-biogeochemical-cycles", difficulty: "medium", type: "single",
    question: "In the NITROGEN cycle, the process of N₂ → NH₃ (nitrogen gas to ammonia) is called:",
    options: ["Nitrification", "Denitrification", "Nitrogen fixation", "Ammonification"],
    correctAnswer: 2,
    explanation: "Nitrogen fixation = N₂ → NH₃ (converting inert atmospheric nitrogen into biologically usable ammonia). Done by nitrogen-fixing bacteria (Rhizobium) and lightning. The Haber process (industrial fertilizer production) has doubled the rate of global nitrogen fixation.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2C-Q007", sectionId: "ENV-2", topicId: "env-productivity-and-biogeochemical-cycles", difficulty: "medium", type: "single",
    question: "The OCEAN'S role in the carbon cycle is best described as:",
    options: [
      "Source of all atmospheric CO₂",
      "Buffer (absorbs about 25% of human CO₂ emissions)",
      "Unaffected by human activity",
      "Releases more CO₂ than it absorbs"
    ],
    correctAnswer: 1,
    explanation: "The ocean acts as a BUFFER, absorbing about 25% of human CO₂ emissions annually. This slows climate change but causes ocean acidification (lower pH). The ocean is not a permanent sink — its absorption rate is decreasing as surface waters warm.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2C-Q008", sectionId: "ENV-2", topicId: "env-productivity-and-biogeochemical-cycles", difficulty: "medium", type: "single",
    question: "Human activity that DISRUPTS the sulfur cycle is:",
    options: [
      "Planting trees",
      "Burning coal (which contains sulfur compounds)",
      "Reforestation",
      "Using solar energy"
    ],
    correctAnswer: 1,
    explanation: "Burning coal releases sulfur compounds (SO₂) into the atmosphere, which combines with water to form sulfuric acid (H₂SO₄) — one of the two main components of ACID RAIN. The other is nitric acid from nitrogen oxides. This disrupts the natural sulfur cycle and damages buildings, forests, and lakes.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2C-Q009", sectionId: "ENV-2", topicId: "env-productivity-and-biogeochemical-cycles", difficulty: "medium", type: "single",
    question: "Deforestation primarily disrupts the carbon cycle by:",
    options: [
      "Reducing the rate of photosynthesis (less CO₂ absorbed)",
      "Increasing the rate of nitrogen fixation",
      "Releasing phosphorus from tree tissues",
      "Increasing ocean absorption of CO₂"
    ],
    correctAnswer: 0,
    explanation: "Deforestation removes trees (the main photosynthetic organisms on land), reducing the rate of CO₂ absorption. It also releases stored carbon when trees are burned or decompose. Both effects INCREASE atmospheric CO₂, contributing to climate change. Reforestation does the opposite.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2C-Q010", sectionId: "ENV-2", topicId: "env-productivity-and-biogeochemical-cycles", difficulty: "medium", type: "single",
    question: "Excess fertilizer runoff into waterways causes:",
    options: [
      "Decreased phosphorus in water",
      "Eutrophication (algal bloom → oxygen depletion → fish death)",
      "Reduced nitrogen in soil",
      "Increased atmospheric oxygen"
    ],
    correctAnswer: 1,
    explanation: "Excess nitrogen and phosphorus from fertilizer runoff causes EUTROPHICATION: nutrient enrichment → algal bloom → light blocked → plant death → bacterial decomposition → oxygen depletion → fish death. This affects both the nitrogen cycle (excess N) and the phosphorus cycle (excess P).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2C-Q011", sectionId: "ENV-2", topicId: "env-productivity-and-biogeochemical-cycles", difficulty: "medium", type: "multi",
    question: "Which of the following are CORRECT features of the carbon cycle? (Select all that apply.)",
    options: [
      "Photosynthesis absorbs CO₂; respiration releases it",
      "The ocean acts as a buffer, absorbing about 25% of human CO₂",
      "Fossil fuels are ancient stores of carbon",
      "Deforestation decreases atmospheric CO₂"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "(a) Correct: photosynthesis IN, respiration OUT. (b) Correct: ocean absorbs ~25% of human CO₂. (c) Correct: fossil fuels are carbon stored over millions of years. (d) WRONG: deforestation INCREASES atmospheric CO₂ (less absorption, plus release of stored carbon).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2C-Q012", sectionId: "ENV-2", topicId: "env-productivity-and-biogeochemical-cycles", difficulty: "medium", type: "true_false",
    question: "The sulfur cycle is the only biogeochemical cycle that has NO atmospheric phase.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. The PHOSPHORUS cycle has no atmospheric phase. Sulfur DOES have an atmospheric phase (SO₂ and sulfate aerosols), as does nitrogen (N₂ gas, NOx), carbon (CO₂, CH₄), and water (H₂O vapor). The P cycle is the one that lacks a significant atmospheric reservoir.",
    sourceCitation: "Standard environmental science curriculum" },

  // Hard
  { id: "ENV2C-Q013", sectionId: "ENV-2", topicId: "env-productivity-and-biogeochemical-cycles", difficulty: "hard", type: "single",
    question: "Why is the Haber process (industrial nitrogen fixation for fertilizer) considered a major disruption of the nitrogen cycle?",
    options: [
      "It removes nitrogen from the atmosphere",
      "It has roughly DOUBLED the global rate of natural nitrogen fixation",
      "It converts ammonia to nitrogen gas",
      "It only operates in developed countries"
    ],
    correctAnswer: 1,
    explanation: "The Haber process (early 20th century) has approximately DOUBLED the rate at which atmospheric N₂ is converted to biologically available forms. This is similar in magnitude to all natural nitrogen fixation combined. This excess reactive nitrogen causes eutrophication, acid rain, and nitrous oxide (a potent greenhouse gas).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2C-Q014", sectionId: "ENV-2", topicId: "env-productivity-and-biogeochemical-cycles", difficulty: "hard", type: "multi",
    question: "Which of the following are CORRECT human disruptions of biogeochemical cycles? (Select all that apply.)",
    options: [
      "Burning fossil fuels → excess atmospheric CO₂ (carbon cycle)",
      "Fertilizer runoff → eutrophication (nitrogen + phosphorus cycles)",
      "Burning coal → acid rain (sulfur cycle)",
      "Planting trees → increased atmospheric CO₂ (carbon cycle)"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "(a) Correct: fossil fuel burning adds ancient carbon to atmosphere. (b) Correct: excess N+P causes eutrophication. (c) Correct: coal sulfur → SO₂ → sulfuric acid → acid rain. (d) WRONG: planting trees DECREASES atmospheric CO₂ (more photosynthesis absorption). This is why afforestation is a climate mitigation strategy.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2C-Q015", sectionId: "ENV-2", topicId: "env-productivity-and-biogeochemical-cycles", difficulty: "hard", type: "single",
    question: "In order of NPP (highest to lowest), which is CORRECT?",
    options: [
      "Tropical rainforest > Desert > Grassland > Tundra",
      "Tropical rainforest > Grassland > Tundra > Desert",
      "Desert > Grassland > Tundra > Tropical rainforest",
      "Tundra > Grassland > Desert > Tropical rainforest"
    ],
    correctAnswer: 1,
    explanation: "NPP ranking: tropical rainforest > temperate forest > grassland > tundra > desert. Water and temperature are the main limits. Tropical rainforests have warm temps + abundant water + sunlight = highest NPP. Deserts have very low NPP due to water limitation.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV2C-Q016", sectionId: "ENV-2", topicId: "env-productivity-and-biogeochemical-cycles", difficulty: "hard", type: "single",
    question: "Choose the CORRECT statement about biogeochemical cycles:",
    options: [
      "All five cycles have an atmospheric phase",
      "Phosphorus is the only cycle without a significant atmospheric phase",
      "The water cycle has no biological component",
      "Carbon is not stored in fossil fuels"
    ],
    correctAnswer: 1,
    explanation: "Phosphorus is the only one of the five major cycles WITHOUT a significant atmospheric phase. It moves: rocks → soil → water → organisms (all solid or dissolved forms, no significant gas). This is the most-asked distinguishing feature. The other four (water, carbon, nitrogen, sulfur) all have atmospheric phases.",
    sourceCitation: "Standard environmental science curriculum" },

  // TOPIC 1: Biodiversity
  // ───────────────────────────────────────────────────────

  // Easy
  { id: "ENV3A-Q001", sectionId: "ENV-3", topicId: "env-biodiversity", difficulty: "easy", type: "single",
    question: "How many levels of biodiversity are typically recognized?",
    options: ["Two", "Three", "Four", "Five"],
    correctAnswer: 1,
    explanation: "Three levels: GENETIC (variation within species), SPECIES (number of species), ECOSYSTEM (variety of habitats and communities). This is the standard classification tested in nearly every exam.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3A-Q002", sectionId: "ENV-3", topicId: "env-biodiversity", difficulty: "easy", type: "single",
    question: "Which of the following is NOT one of the four ecosystem services?",
    options: ["Provisioning", "Regulating", "Supporting", "Manufacturing"],
    correctAnswer: 3,
    explanation: "The four ecosystem services are PROVISIONING (food, water, timber), REGULATING (climate, pollination, flood control), SUPPORTING (nutrient cycles, soil formation), and CULTURAL (recreation, spiritual). MANUFACTURING is not a natural ecosystem service — it's an industrial activity.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3A-Q003", sectionId: "ENV-3", topicId: "env-biodiversity", difficulty: "easy", type: "true_false",
    question: "Provisioning services include food, water, timber, and medicines that humans obtain from ecosystems.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Provisioning services are the PRODUCTS that ecosystems provide to humans — food, fresh water, timber, fiber, genetic resources, and medicines (many drugs come from plant compounds). These are the 'goods' that nature provides.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3A-Q004", sectionId: "ENV-3", topicId: "env-biodiversity", difficulty: "easy", type: "single",
    question: "Pollination of crops by bees is an example of which type of ecosystem service?",
    options: ["Provisioning", "Regulating", "Supporting", "Cultural"],
    correctAnswer: 1,
    explanation: "Pollination is a REGULATING service — it controls/regulates crop production through a natural process. Regulating services include climate regulation, flood control, pollination, water purification, and disease control. Supporting services (nutrient cycling, soil formation) underpin these, but pollination itself is regulating.",
    sourceCitation: "Standard environmental science curriculum" },

  // Medium
  { id: "ENV3A-Q005", sectionId: "ENV-3", topicId: "env-biodiversity", difficulty: "medium", type: "single",
    question: "The difference between species RICHNESS and species EVENNESS is:",
    options: [
      "Richness = number of species; Evenness = how equally distributed individuals are among species",
      "Richness = total individuals; Evenness = number of species",
      "Richness = genetic diversity; Evenness = ecosystem diversity",
      "They are the same thing"
    ],
    correctAnswer: 0,
    explanation: "Richness = how MANY species are present (a simple count). Evenness = how EQUALLY the individuals are distributed among those species (one dominant species = low evenness; many equally-abundant species = high evenness). A forest with 10 oaks and 1 pine has richness 2 but low evenness.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3A-Q006", sectionId: "ENV-3", topicId: "env-biodiversity", difficulty: "medium", type: "single",
    question: "A biodiversity HOTSPOT must meet which two criteria?",
    options: [
      "High temperature + high rainfall",
      "0.5% endemic plant species + 70% habitat loss",
      "Large area + large population",
      "High productivity + high diversity"
    ],
    correctAnswer: 1,
    explanation: "A biodiversity hotspot requires BOTH: (1) at least 0.5% of the world's plant species as ENDEMICS (found nowhere else), AND (2) at least 70% of original habitat destroyed. Only 36 areas qualify globally. Both criteria must be met — one alone is insufficient.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3A-Q007", sectionId: "ENV-3", topicId: "env-biodiversity", difficulty: "medium", type: "single",
    question: "ALPHA (α) diversity refers to:",
    options: [
      "Diversity within a single site or habitat",
      "Diversity between different sites",
      "Diversity across a large region",
      "Genetic diversity within a species"
    ],
    correctAnswer: 0,
    explanation: "Alpha (α) = diversity WITHIN a single site or habitat. Beta (β) = BETWEEN sites. Gamma (γ) = ACROSS a large region. Mnemonic: alpha = ALONE in one place; beta = BETWEEN places; gamma = GLOBAL for the region.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3A-Q008", sectionId: "ENV-3", topicId: "env-biodiversity", difficulty: "medium", type: "single",
    question: "Which of the following is a SUPPORTING ecosystem service (not provisioning or regulating)?",
    options: ["Food production", "Nutrient cycling", "Climate regulation", "Pollination"],
    correctAnswer: 1,
    explanation: "Supporting services are those that UNDERPIN all other services: nutrient cycling, soil formation, primary production (photosynthesis), oxygen production. Food is provisioning. Climate regulation and pollination are regulating. Supporting services are the 'foundation' services.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3A-Q009", sectionId: "ENV-3", topicId: "env-biodiversity", difficulty: "medium", type: "single",
    question: "Pakistan's forest cover is approximately:",
    options: ["1%", "5%", "15%", "30%"],
    correctAnswer: 1,
    explanation: "Pakistan's forest cover is approximately 5% — one of the lowest in Asia and far below the FAO-recommended minimum of 25%. This is a frequently-tested statistic and reflects both natural aridity and significant deforestation pressure.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3A-Q010", sectionId: "ENV-3", topicId: "env-biodiversity", difficulty: "medium", type: "multi",
    question: "Which of the following are REGULATING ecosystem services? (Select all that apply.)",
    options: ["Pollination of crops", "Climate regulation", "Flood control", "Water purification"],
    correctAnswer: [0, 1, 2, 3],
    explanation: "All four are regulating services — they CONTROL or REGULATE natural processes. (Provisioning = products we extract. Supporting = underpin others. Cultural = non-material.) Pollination regulates crop production, climate regulation controls temperature/rainfall, flood control regulates water flow, water purification regulates water quality. All regulating.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3A-Q011", sectionId: "ENV-3", topicId: "env-biodiversity", difficulty: "medium", type: "multi",
    question: "Which of the following are CORRECT distinctions? (Select all that apply.)",
    options: [
      "α diversity = within a site; β = between sites; γ = across a region",
      "Richness = number of species; Evenness = how equally distributed",
      "Provisioning = products; Regulating = processes; Supporting = foundation",
      "Hotspot requires 5% endemic plants and 50% habitat loss"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "(a) Correct: alpha/beta/gamma. (b) Correct: richness vs evenness. (c) Correct: the 4 ecosystem services properly categorized. (d) WRONG: hotspot requires 0.5% endemic plants AND 70% habitat loss — not 5% and 50%.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3A-Q012", sectionId: "ENV-3", topicId: "env-biodiversity", difficulty: "medium", type: "true_false",
    question: "A region with high species richness always has high evenness.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Richness and evenness are INDEPENDENT properties. A forest with 1000 oaks, 10 pines, 5 maples has richness = 3 (3 species) but very LOW evenness (one species dominates). A forest with 300 oaks, 300 pines, 300 maples has richness = 3 (also 3 species) but HIGH evenness. Both have richness 3 but very different evenness values.",
    sourceCitation: "Standard environmental science curriculum" },

  // Hard
  { id: "ENV3A-Q013", sectionId: "ENV-3", topicId: "env-biodiversity", difficulty: "hard", type: "single",
    question: "Which service does 'PHOTOSYNTHESIS BY PLANTS' most directly belong to?",
    options: ["Provisioning", "Regulating", "Supporting", "Cultural"],
    correctAnswer: 2,
    explanation: "Photosynthesis is the foundation of PRIMARY PRODUCTION — it produces oxygen, fixes carbon, and provides the energy base for nearly all life. This makes it a SUPPORTING service (underpinning all other services). It's not provisioning (which would be the food/oxygen AFTER it's produced), and not regulating or cultural.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3A-Q014", sectionId: "ENV-3", topicId: "env-biodiversity", difficulty: "hard", type: "single",
    question: "BETA (β) diversity is best defined as:",
    options: [
      "The total number of species in a single habitat",
      "The difference in species composition BETWEEN two habitats",
      "The genetic diversity within one species",
      "The productivity of an ecosystem"
    ],
    correctAnswer: 1,
    explanation: "Beta (β) diversity = the DIFFERENCE in species composition between two or more habitats/sites. High beta diversity = different sites have very different species. Low beta = sites share most species. It measures species 'turnover' across the landscape.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3A-Q015", sectionId: "ENV-3", topicId: "env-biodiversity", difficulty: "hard", type: "multi",
    question: "Which of the following are CORRECT about biodiversity hotspots? (Select all that apply.)",
    options: [
      "36 global hotspots have been identified",
      "A hotspot requires 0.5% endemic plants AND 70% habitat loss",
      "Pakistan's northern mountains are part of a recognized hotspot",
      "All forests with high biodiversity are automatically hotspots"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "(a) Correct: 36 hotspots. (b) Correct: the two criteria for hotspot designation. (c) Correct: Hindu Kush, Karakoram, and western Himalayas are part of the 'Mountains of Central Asia' hotspot. (d) WRONG: a hotspot must meet BOTH criteria (endemism + threat), not just high biodiversity. A pristine high-biodiversity forest without habitat loss would NOT qualify.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3A-Q016", sectionId: "ENV-3", topicId: "env-biodiversity", difficulty: "hard", type: "single",
    question: "Why is the distinction between provisioning, regulating, and supporting services important for environmental policy?",
    options: [
      "It determines which species are endangered",
      "It helps assign economic value to nature's contributions to human wellbeing",
      "It identifies which countries have the most biodiversity",
      "It determines which ecosystems are protected"
    ],
    correctAnswer: 1,
    explanation: "The 4-service framework (Provisioning, Regulating, Supporting, Cultural — the 'TEEB' classification) was developed to put economic value on nature's contributions to human wellbeing. This helps policymakers understand what they stand to lose if an ecosystem is destroyed. It doesn't directly determine species status, country rankings, or protection status, but it underpins environmental cost-benefit analysis.",
    sourceCitation: "Standard environmental science curriculum" },

  // TOPIC 2: Threats & IUCN
  // ───────────────────────────────────────────────────────

  // Easy
  { id: "ENV3B-Q001", sectionId: "ENV-3", topicId: "env-biodiversity-threats-and-iucn", difficulty: "easy", type: "single",
    question: "The SINGLE largest driver of biodiversity loss worldwide is:",
    options: ["Climate change", "Pollution", "Habitat loss", "Invasive species"],
    correctAnswer: 2,
    explanation: "Habitat loss is the #1 driver of biodiversity loss worldwide. When forests, wetlands, and other habitats are destroyed for agriculture, urbanization, or infrastructure, the species that lived there have nowhere to go. Climate change and pollution are serious but smaller drivers globally.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3B-Q002", sectionId: "ENV-3", topicId: "env-biodiversity-threats-and-iucn", difficulty: "easy", type: "single",
    question: "The IUCN Red List category 'CR' stands for:",
    options: ["Common Resident", "Critically Endangered", "Conservation Required", "Census Recorded"],
    correctAnswer: 1,
    explanation: "CR = Critically Endangered — the highest risk category before 'Extinct in the Wild' and 'Extinct'. The order from least to most threatened: LC (Least Concern) < NT (Near Threatened) < VU (Vulnerable) < EN (Endangered) < CR (Critically Endangered) < EW (Extinct in Wild) < EX (Extinct).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3B-Q003", sectionId: "ENV-3", topicId: "env-biodiversity-threats-and-iucn", difficulty: "easy", type: "true_false",
    question: "An invasive species is a non-native organism that outcompetes native species in a new ecosystem.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Invasive species are non-native organisms that spread aggressively in a new ecosystem, outcompeting native species for resources. Examples: water hyacinth in many tropical waterways, cane toad in Australia, kudzu vine in the southeastern US.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3B-Q004", sectionId: "ENV-3", topicId: "env-biodiversity-threats-and-iucn", difficulty: "easy", type: "single",
    question: "Which of the following is an endangered species found in Pakistan?",
    options: ["House sparrow", "Markhor", "Common myna", "Indian peafowl"],
    correctAnswer: 1,
    explanation: "The Markhor (a large wild goat) is Pakistan's national animal and a conservation success story — it was endangered but has recovered significantly due to conservation efforts. The other species (house sparrow, common myna, Indian peafowl) are all common and not endangered.",
    sourceCitation: "Standard environmental science curriculum" },

  // Medium
  { id: "ENV3B-Q005", sectionId: "ENV-3", topicId: "env-biodiversity-threats-and-iucn", difficulty: "medium", type: "single",
    question: "The correct order of IUCN Red List categories (from LEAST to MOST threatened) is:",
    options: [
      "LC < NT < VU < EN < CR < EW < EX",
      "EX < EW < CR < EN < VU < NT < LC",
      "LC < VU < NT < EN < CR < EW < EX",
      "EW < EX < CR < EN < VU < NT < LC"
    ],
    correctAnswer: 0,
    explanation: "Least to most threatened: LC (Least Concern) < NT (Near Threatened) < VU (Vulnerable) < EN (Endangered) < CR (Critically Endangered) < EW (Extinct in Wild — survives only in captivity) < EX (Extinct — completely gone). A common exam error is putting EW after EX, but EW comes BEFORE EX in the threat progression.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3B-Q006", sectionId: "ENV-3", topicId: "env-biodiversity-threats-and-iucn", difficulty: "medium", type: "single",
    question: "The 5 major threats to biodiversity, in order of impact, are:",
    options: [
      "Climate change, Pollution, Habitat loss, Invasive species, Overexploitation",
      "Habitat loss, Overexploitation, Invasive species, Pollution, Climate change",
      "Pollution, Habitat loss, Climate change, Overexploitation, Invasive species",
      "Overexploitation, Climate change, Habitat loss, Pollution, Invasive species"
    ],
    correctAnswer: 1,
    explanation: "Correct order (most to least impact globally): Habitat loss → Overexploitation → Invasive species → Pollution → Climate change. This is a frequently-tested order question. Habitat loss is the #1 driver because it destroys the places species need to live. Climate change gets more media attention but is currently a smaller driver globally than habitat loss.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3B-Q007", sectionId: "ENV-3", topicId: "env-biodiversity-threats-and-iucn", difficulty: "medium", type: "single",
    question: "'EW' (Extinct in the Wild) means:",
    options: [
      "The species is completely extinct",
      "The species survives only in captivity or cultivation",
      "The species is endangered in the wild",
      "The species is vulnerable in the wild"
    ],
    correctAnswer: 1,
    explanation: "EW = Extinct in the Wild — the species survives only in captivity, zoos, or cultivated collections, with NO living wild populations. EX = Extinct — the species is completely gone, including from captivity. EW comes BEFORE EX in the IUCN threat progression.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3B-Q008", sectionId: "ENV-3", topicId: "env-biodiversity-threats-and-iucn", difficulty: "medium", type: "single",
    question: "Which of the following is an example of OVEREXPLOITATION?",
    options: [
      "Clearing a forest for agriculture",
      "Fishing a species faster than it can reproduce",
      "Introducing a non-native predator",
      "Climate change shifting species ranges"
    ],
    correctAnswer: 1,
    explanation: "Overexploitation = harvesting a species faster than it can reproduce. Examples: overfishing (collapse of Atlantic cod fishery), poaching (rhinos, tigers), illegal logging of slow-growing trees. (a) is habitat loss. (c) is invasive species. (d) is climate change.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3B-Q009", sectionId: "ENV-3", topicId: "env-biodiversity-threats-and-iucn", difficulty: "medium", type: "true_false",
    question: "Population growth is itself a direct threat to biodiversity.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Population growth is an INDIRECT AMPLIFIER of threats, not a direct threat. It makes habitat loss worse (more land needed for food/housing), overexploitation worse (more resource demand), pollution worse (more waste), and invasive species spread worse (more trade/travel). But the 5 DIRECT threats are: habitat loss, overexploitation, invasive species, pollution, climate change.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3B-Q010", sectionId: "ENV-3", topicId: "env-biodiversity-threats-and-iucn", difficulty: "medium", type: "single",
    question: "An 'Invasive species' threat occurs when:",
    options: [
      "A native species becomes too numerous",
      "A non-native species outcompetes native species in a new ecosystem",
      "A predator eats all its prey",
      "A disease wipes out a population"
    ],
    correctAnswer: 1,
    explanation: "An invasive species is NON-NATIVE (introduced by humans, intentionally or accidentally) and outcompetes native species in its new ecosystem. Examples: water hyacinth choking tropical waterways, cane toad devastating Australian native fauna, kudzu vine smothering southeastern US forests. A predator eating all its prey would be overexploitation of prey, not invasive species.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3B-Q011", sectionId: "ENV-3", topicId: "env-biodiversity-threats-and-iucn", difficulty: "medium", type: "multi",
    question: "Which of the following are CORRECT examples of threats to biodiversity? (Select all that apply.)",
    options: [
      "Clearing rainforest for palm oil plantations (habitat loss)",
      "Hunting rhinos for their horns (overexploitation)",
      "Climate change shifting species' ranges poleward (climate change)",
      "A pesticide killing non-target insects (pollution)"
    ],
    correctAnswer: [0, 1, 2, 3],
    explanation: "All four are correct examples of the 5 major threats: (a) habitat loss, (b) overexploitation, (c) climate change, (d) pollution. Each maps to one of the 5 IUCN/IPBES threat categories.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3B-Q012", sectionId: "ENV-3", topicId: "env-biodiversity-threats-and-iucn", difficulty: "medium", type: "true_false",
    question: "All 5 major threats to biodiversity are caused by natural processes (volcanoes, climate cycles, etc.).",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. All 5 major current threats (habitat loss, overexploitation, invasive species, pollution, climate change) are caused by HUMAN activity. Natural processes like volcanic eruptions or climate cycles are NOT among the current top threats to biodiversity. This is what makes the current biodiversity crisis different from previous mass extinctions — it's entirely anthropogenic.",
    sourceCitation: "Standard environmental science curriculum" },

  // Hard
  { id: "ENV3B-Q013", sectionId: "ENV-3", topicId: "env-biodiversity-threats-and-iucn", difficulty: "hard", type: "single",
    question: "A species is classified as 'Vulnerable' (VU) on the IUCN Red List. Which of the following is TRUE?",
    options: [
      "It is at very high risk of extinction in the wild",
      "It is facing a high risk of extinction in the wild",
      "It is facing an extremely high risk of extinction in the wild",
      "It is only found in captivity"
    ],
    correctAnswer: 1,
    explanation: "Vulnerable (VU) = facing a HIGH risk of extinction in the wild. Endangered (EN) = very high risk. Critically Endangered (CR) = extremely high risk. The order: VU < EN < CR in terms of increasing risk. VU is the third-most-threatened category (after NT, LC which are less threatened).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3B-Q014", sectionId: "ENV-3", topicId: "env-biodiversity-threats-and-iucn", difficulty: "hard", type: "multi",
    question: "Which of the following are CORRECT distinctions in the IUCN Red List? (Select all that apply.)",
    options: [
      "EW = Extinct in Wild (survives only in captivity); EX = completely Extinct",
      "VU is MORE threatened than EN (Vulnerable > Endangered)",
      "LC = Least Concern (the LOWEST threat category)",
      "NT = Near Threatened (just below VU)"
    ],
    correctAnswer: [0, 2, 3],
    explanation: "(a) Correct: EW = survives only in captivity; EX = completely gone. (b) WRONG: VU is LESS threatened than EN (EN > VU). (c) Correct: LC = Least Concern, the LOWEST threat. (d) Correct: NT comes just before VU in the threat order (NT < VU). The correct order is: LC < NT < VU < EN < CR < EW < EX.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3B-Q015", sectionId: "ENV-3", topicId: "env-biodiversity-threats-and-iucn", difficulty: "hard", type: "single",
    question: "Why is HABITAT LOSS the #1 threat to biodiversity (more than climate change, despite media attention)?",
    options: [
      "Habitat loss is more recent than climate change",
      "Habitat loss directly destroys the places species live; climate change shifts ranges but doesn't immediately destroy habitat",
      "Climate change doesn't actually affect biodiversity",
      "Habitat loss is easier to measure"
    ],
    correctAnswer: 1,
    explanation: "Habitat loss directly removes the PLACE species live — when a forest is cleared, the species have nowhere to go. Climate change shifts species' ranges but often the habitat still exists (just at a different temperature). Both are serious, but habitat loss's immediate, complete destruction makes it the #1 global driver. IPBES (2019) global assessment confirmed habitat loss as the #1 threat.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3B-Q016", sectionId: "ENV-3", topicId: "env-biodiversity-threats-and-iucn", difficulty: "hard", type: "single",
    question: "A species is classified as 'NT' (Near Threatened) on the IUCN Red List. This means:",
    options: [
      "It is nearly extinct",
      "It doesn't qualify for a threatened category but is close to qualifying or likely to soon",
      "It is the most threatened category after CR",
      "It is non-native and a threat to other species"
    ],
    correctAnswer: 1,
    explanation: "NT (Near Threatened) = doesn't currently qualify for a threatened category (VU, EN, or CR) but is CLOSE to qualifying or likely to soon. It's the bridge between 'Least Concern' (LC, safe) and the threatened categories. The order: LC < NT < VU < EN < CR < EW < EX. NT means 'watch list, not yet in trouble'.",
    sourceCitation: "Standard environmental science curriculum" },

  // TOPIC 3: Conservation & Extinction
  // ───────────────────────────────────────────────────────

  // Easy
  { id: "ENV3C-Q001", sectionId: "ENV-3", topicId: "env-conservation-and-extinction", difficulty: "easy", type: "single",
    question: "In-situ conservation means:",
    options: [
      "Protecting species in their natural habitat",
      "Protecting species in zoos and seed banks",
      "Protecting species in botanical gardens only",
      "Protecting species through legal laws only"
    ],
    correctAnswer: 0,
    explanation: "In-situ = ON SITE = protecting species in their natural habitat (national parks, wildlife sanctuaries, biosphere reserves). Ex-situ = OFF SITE (zoos, seed banks, gene banks). Both are needed, but in-situ is generally preferred because it preserves entire ecosystems.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3C-Q002", sectionId: "ENV-3", topicId: "env-conservation-and-extinction", difficulty: "easy", type: "single",
    question: "Ex-situ conservation includes all of the following EXCEPT:",
    options: ["Zoos", "Seed banks", "National parks", "Gene banks"],
    correctAnswer: 2,
    explanation: "Ex-situ = OFF SITE = zoos, aquariums, seed banks, gene banks, cryopreservation. National parks are IN-SITU (on-site). The distinction is the key exam point: in-situ = ON natural habitat; ex-situ = AWAY from natural habitat.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3C-Q003", sectionId: "ENV-3", topicId: "env-conservation-and-extinction", difficulty: "easy", type: "true_false",
    question: "The current 6th mass extinction is caused by asteroid impact, like the one that killed the dinosaurs.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. The current 6th mass extinction is caused entirely by HUMAN ACTIVITY (habitat loss, overexploitation, invasive species, pollution, climate change). The previous 5 mass extinctions were caused by natural events (asteroids, volcanic eruptions, sea level changes). This is what makes the current extinction crisis different from all previous ones.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3C-Q004", sectionId: "ENV-3", topicId: "env-conservation-and-extinction", difficulty: "easy", type: "single",
    question: "Approximately how many mass extinctions has Earth experienced in its history (INCLUDING the current one)?",
    options: ["3", "5", "6", "10"],
    correctAnswer: 2,
    explanation: "5 background mass extinctions + 1 current (6th) = 6 total. The 5 background extinctions occurred naturally over ~500 million years. The current 6th is human-caused and is 100-1000× faster than the background rate. The exam may ask 'how many has Earth experienced (including current)?' = 6. 'How many before the current one?' = 5.",
    sourceCitation: "Standard environmental science curriculum" },

  // Medium
  { id: "ENV3C-Q005", sectionId: "ENV-3", topicId: "env-conservation-and-extinction", difficulty: "medium", type: "single",
    question: "Khunjerab National Park in Pakistan is primarily known for protecting:",
    options: ["Marine turtles", "Snow leopards and Marco Polo sheep", "Indus river dolphins", "Arabian oryx"],
    correctAnswer: 1,
    explanation: "Khunjerab National Park (in Gilgit-Baltistan) is known for snow leopards and Marco Polo sheep (the world's largest wild sheep species). It's part of the 'Mountains of Central Asia' biodiversity hotspot. The other options are found elsewhere: marine turtles at Hingol/Sandspit, Indus dolphins in the Indus river system, Arabian oryx in Arabia (not Pakistan).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3C-Q006", sectionId: "ENV-3", topicId: "env-conservation-and-extinction", difficulty: "medium", type: "single",
    question: "The Markhor (Pakistan's national animal) is:",
    options: [
      "Extinct in the wild",
      "Critically endangered but stable",
      "Recovering from endangered status due to conservation",
      "Only found in zoos"
    ],
    correctAnswer: 2,
    explanation: "The Markhor is a CONSERVATION SUCCESS STORY — it was heavily poached for its magnificent horns but has RECOVERED significantly due to community-based conservation, hunting bans, and habitat protection. It was upgraded from endangered to 'near threatened' on the IUCN list. This is a rare positive biodiversity story and is often cited as an example of successful conservation.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3C-Q007", sectionId: "ENV-3", topicId: "env-conservation-and-extinction", difficulty: "medium", type: "single",
    question: "The 6th mass extinction differs from previous mass extinctions in that it is:",
    options: [
      "Slower than background rate",
      "Faster than background rate but still natural",
      "Caused by human activity and 100-1000× faster than background rate",
      "The same as previous ones"
    ],
    correctAnswer: 2,
    explanation: "The current 6th mass extinction is caused by HUMAN ACTIVITY and is occurring 100-1000 TIMES FASTER than the natural background extinction rate (0.1-1 species per year). Previous 5 mass extinctions were caused by natural events (asteroids, volcanoes) at the natural background rate. This makes the current crisis unprecedented in both cause (anthropogenic) and speed.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3C-Q008", sectionId: "ENV-3", topicId: "env-conservation-and-extinction", difficulty: "medium", type: "single",
    question: "Which type of conservation is generally PREFERRED for biodiversity protection?",
    options: ["In-situ (on-site)", "Ex-situ (off-site)", "Both are equally preferred", "Neither — protection is impossible"],
    correctAnswer: 0,
    explanation: "In-situ (on-site) conservation is generally preferred because it preserves the ENTIRE ECOSYSTEM (all interacting species, their evolutionary processes, ecological relationships). Ex-situ (zoos, seed banks) is important as a BACKUP for critically endangered species but cannot preserve complex ecological interactions. In-situ = first choice; ex-situ = safety net.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3C-Q009", sectionId: "ENV-3", topicId: "env-conservation-and-extinction", difficulty: "medium", type: "true_false",
    question: "Seed banks are an example of IN-SITU conservation.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Seed banks (like the Svalbard Global Seed Vault) are EX-SITU conservation — they store seeds AWAY from their natural habitat. In-situ would be protecting the plant in its native ecosystem. Seed banks are crucial as backups but are off-site by definition.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3C-Q010", sectionId: "ENV-3", topicId: "env-conservation-and-extinction", difficulty: "medium", type: "multi",
    question: "Which of the following are examples of IN-SITU conservation? (Select all that apply.)",
    options: ["National park", "Zoo", "Wildlife sanctuary", "Biosphere reserve", "Seed bank"],
    correctAnswer: [0, 2, 3],
    explanation: "In-situ (ON SITE) = national park, wildlife sanctuary, biosphere reserve, community conserved areas. Ex-situ (OFF SITE) = zoo, seed bank, gene bank, botanical garden. The distinguishing feature: in-situ protects species in their NATURAL habitat; ex-situ protects them elsewhere.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3C-Q011", sectionId: "ENV-3", topicId: "env-conservation-and-extinction", difficulty: "medium", type: "single",
    question: "What was the cause of the dinosaur extinction (the most famous mass extinction)?",
    options: [
      "Human hunting",
      "Asteroid impact + volcanic activity",
      "Climate change from human emissions",
      "Deforestation"
    ],
    correctAnswer: 1,
    explanation: "The dinosaur extinction (~66 million years ago, the Cretaceous-Paleogene boundary) was caused by a massive ASTEROID impact (Chicxulub crater in Mexico) combined with extensive volcanic activity (Deccan Traps in India). It was a NATURAL mass extinction. Compare to the current 6th which is human-caused.",
    sourceCitation: "Standard environmental science curriculum" },

  // Hard
  { id: "ENV3C-Q012", sectionId: "ENV-3", topicId: "env-conservation-and-extinction", difficulty: "hard", type: "single",
    question: "Why is the 6th mass extinction considered to be '100-1000× faster than the background rate'?",
    options: [
      "More species are being named per year",
      "The background rate is calculated incorrectly",
      "Species are going extinct at a much faster rate than the natural 0.1-1/year baseline",
      "There are simply more species now than before"
    ],
    correctAnswer: 2,
    explanation: "Current extinction rates are estimated at 100-1000 species per year (some estimates up to 10,000), while the natural BACKGROUND rate is 0.1-1 species per year. The ratio is 100-10,000×. This rapid loss is driven by habitat destruction, overexploitation, etc. — not by a natural mass extinction event.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3C-Q013", sectionId: "ENV-3", topicId: "env-conservation-and-extinction", difficulty: "hard", type: "multi",
    question: "Which of the following are CORRECT distinctions in conservation and extinction? (Select all that apply.)",
    options: [
      "In-situ = on-site; Ex-situ = off-site",
      "The 6th mass extinction is human-caused; previous 5 were natural",
      "The current extinction rate is 100-1000× faster than background",
      "All 6 mass extinctions were caused by asteroids"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "(a) Correct: in-situ vs ex-situ distinction. (b) Correct: the 6th is human-caused; previous 5 were natural (asteroids, volcanoes, climate). (c) Correct: 100-1000× faster than background rate. (d) WRONG: only ONE of the 5 previous mass extinctions was caused by an asteroid (the dinosaur-killer). The others had different causes — volcanic activity, sea level changes, climate shifts.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3C-Q014", sectionId: "ENV-3", topicId: "env-conservation-and-extinction", difficulty: "hard", type: "single",
    question: "Choose the CORRECT statement about the 6th mass extinction:",
    options: [
      "It is slower than previous mass extinctions",
      "It is caused by natural processes like asteroids",
      "It is the first mass extinction caused by a single species (humans)",
      "It is only affecting tropical species"
    ],
    correctAnswer: 2,
    explanation: "The 6th mass extinction is the FIRST in Earth's history to be caused by a SINGLE SPECIES (Homo sapiens). Previous extinctions were caused by physical events (asteroids, volcanoes, climate) that affected many species indiscriminately. This makes the current crisis unique — one species driving the loss of many others. It is faster (not slower) than background rate, and it affects all ecosystems (not just tropical).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3C-Q015", sectionId: "ENV-3", topicId: "env-conservation-and-extinction", difficulty: "hard", type: "single",
    question: "Why are SEED BANKS important even though in-situ conservation is preferred?",
    options: [
      "They produce new seeds",
      "They serve as a backup against catastrophic loss of wild populations",
      "They are cheaper than national parks",
      "They prevent species from going extinct"
    ],
    correctAnswer: 1,
    explanation: "Seed banks (like Svalbard Global Seed Vault) serve as a BACKUP against catastrophic loss of wild populations (e.g., if a species goes extinct in the wild, seeds can be used for reintroduction). They don't prevent extinction or produce new seeds — they preserve genetic material as insurance. This is why both in-situ AND ex-situ are needed.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV3C-Q016", sectionId: "ENV-3", topicId: "env-conservation-and-extinction", difficulty: "hard", type: "single",
    question: "Which of the following is the best example of successful biodiversity conservation in Pakistan?",
    options: [
      "Indus river dolphin going extinct",
      "Markhor recovering from endangered status due to community conservation",
      "Forest cover declining to 5%",
      "Increased pollution in major rivers"
    ],
    correctAnswer: 1,
    explanation: "The Markhor is a rare conservation SUCCESS STORY — it was heavily poached but has recovered due to community-based conservation, hunting bans, and habitat protection. It was upgraded on the IUCN list. The other options are negative trends (dolphin declining, forest cover low, pollution increasing). This is a positive biodiversity story often cited in exams.",
    sourceCitation: "Standard environmental science curriculum" },

  // TOPIC 1: Natural Resources
  // ───────────────────────────────────────────────────────

  // Easy
  { id: "ENV4A-Q001", sectionId: "ENV-4", topicId: "env-natural-resources", difficulty: "easy", type: "single",
    question: "Which of the following is a RENEWABLE resource?",
    options: ["Coal", "Natural gas", "Solar energy", "Iron ore"],
    correctAnswer: 2,
    explanation: "Solar energy is renewable — the sun provides it continuously and won't run out on human timescales. Coal, natural gas, and iron ore are non-renewable (formed over millions of years or extractable only once).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4A-Q002", sectionId: "ENV-4", topicId: "env-natural-resources", difficulty: "easy", type: "single",
    question: "Which of the following is NON-RENEWABLE?",
    options: ["Wind energy", "Forests (sustainably managed)", "Copper ore", "Solar energy"],
    correctAnswer: 2,
    explanation: "Copper ore is non-renewable — once mined, it cannot be replenished within human timescales (it forms over geological timescales). Wind, forests (if managed sustainably), and solar energy are all renewable.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4A-Q003", sectionId: "ENV-4", topicId: "env-natural-resources", difficulty: "easy", type: "true_false",
    question: "Fossil fuels (coal, oil, natural gas) are examples of non-renewable resources formed over millions of years.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Fossil fuels are the remains of ancient organisms (plants, plankton) that were buried and transformed over hundreds of millions of years. We burn them in centuries, releasing carbon that took millions of years to store. They are the textbook example of non-renewable resources.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4A-Q004", sectionId: "ENV-4", topicId: "env-natural-resources", difficulty: "easy", type: "single",
    question: "What is the correct order of the 5Rs from most to least preferred?",
    options: [
      "Recycle → Reduce → Reuse → Refuse → Recover",
      "Refuse → Reduce → Reuse → Recycle → Recover",
      "Reuse → Recycle → Refuse → Reduce → Recover",
      "Recover → Recycle → Reuse → Refuse → Reduce"
    ],
    correctAnswer: 1,
    explanation: "Refuse (best — don't use it) → Reduce (use less) → Reuse (use again as-is) → Recycle (reprocess) → Recover (energy from waste). Disposal is the last resort. The exam often tests this order — Refuse first because the best waste is the waste never created.",
    sourceCitation: "Standard environmental science curriculum" },

  // Medium
  { id: "ENV4A-Q005", sectionId: "ENV-4", topicId: "env-natural-resources", difficulty: "medium", type: "single",
    question: "Pakistan's forest cover is approximately:",
    options: ["1%", "5%", "15%", "30%"],
    correctAnswer: 1,
    explanation: "Pakistan's forest cover is approximately 5% — one of the lowest in Asia and far below the FAO-recommended minimum of 25%. This is a frequently-tested statistic and reflects both natural aridity and significant deforestation pressure.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4A-Q006", sectionId: "ENV-4", topicId: "env-natural-resources", difficulty: "medium", type: "single",
    question: "The FAO-recommended MINIMUM forest cover for a country is:",
    options: ["5%", "10%", "25%", "50%"],
    correctAnswer: 2,
    explanation: "The FAO recommends at least 25% forest cover for a healthy environment. Pakistan's ~5% is far below this. This threshold is based on the minimum area needed to maintain ecosystem services, biodiversity, and watershed functions.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4A-Q007", sectionId: "ENV-4", topicId: "env-natural-resources", difficulty: "medium", type: "single",
    question: "Which of the following are FUNCTIONS of forests? (Select best answer)",
    options: [
      "Carbon sink only",
      "Biodiversity habitat only",
      "Watershed protection only",
      "All of the above + cultural, soil, economic value"
    ],
    correctAnswer: 3,
    explanation: "Forests provide MANY functions: carbon storage (sink), biodiversity habitat, watershed protection (regulating water flow), soil prevention, economic value (timber, NTFPs), cultural and indigenous value. Reducing forests to 'just one function' misses the multi-functionality that makes them so valuable.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4A-Q008", sectionId: "ENV-4", topicId: "env-natural-resources", difficulty: "medium", type: "single",
    question: "Deforestation globally contributes what percentage of CO₂ emissions?",
    options: ["~1%", "~5%", "~10-15%", "~30%"],
    correctAnswer: 2,
    explanation: "Deforestation contributes approximately 10-15% of global CO₂ emissions — MORE than all cars and trucks combined. When forests are cleared, the carbon stored in trees is released (through burning or decomposition) AND the ongoing carbon sink is lost. This is why forest conservation is a major climate strategy.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4A-Q009", sectionId: "ENV-4", topicId: "env-natural-resources", difficulty: "medium", type: "single",
    question: "Which of the following is a NON-TIMBER forest product (NTFP)?",
    options: ["Lumber", "Firewood", "Honey from forest bees", "Pulpwood"],
    correctAnswer: 2,
    explanation: "NTFPs (Non-Timber Forest Products) include honey, medicinal plants, nuts, mushrooms, gums, resins, and other products harvested WITHOUT cutting trees. Lumber, firewood, and pulpwood are all TIMBER products (require cutting trees). NTFPs are often more sustainable and can provide livelihoods without deforestation.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4A-Q010", sectionId: "ENV-4", topicId: "env-natural-resources", difficulty: "medium", type: "true_false",
    question: "Refuse is the most preferred step in the 5Rs waste hierarchy because preventing waste is better than managing it.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. The 5Rs hierarchy is: Refuse > Reduce > Reuse > Recycle > Recover. Refuse is most preferred because the best waste is the waste that was never created in the first place. Recycling is good, but refusing (not creating the waste) is even better. This is a key exam point — many people put Recycle first, but Refuse comes first.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4A-Q011", sectionId: "ENV-4", topicId: "env-natural-resources", difficulty: "medium", type: "multi",
    question: "Which of the following are CORRECT distinctions? (Select all that apply.)",
    options: [
      "Renewable = can be replenished; Non-renewable = finite stock",
      "The 5Rs in order: Refuse > Reduce > Reuse > Recycle > Recover",
      "Pakistan forest cover ~5%; FAO recommends 25%",
      "Deforestation contributes 10-15% of global CO₂ emissions"
    ],
    correctAnswer: [0, 1, 2, 3],
    explanation: "All four are correct. These are the key statistics and principles for this topic. The 5Rs order, Pakistan's forest cover, deforestation's CO₂ contribution, and the renewable/non-renewable distinction are all frequently tested.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4A-Q012", sectionId: "ENV-4", topicId: "env-natural-resources", difficulty: "medium", type: "single",
    question: "Sustainable forest management includes all of the following EXCEPT:",
    options: [
      "Selective harvesting (taking only mature trees)",
      "Reforestation after harvest",
      "Complete clearing of all trees for agriculture",
      "Community-based management giving locals a stake in conservation"
    ],
    correctAnswer: 2,
    explanation: "Sustainable forest management includes: selective harvesting (not clear-cutting), reforestation after harvest, community-based management, certification (e.g., FSC), and protected areas. Complete clearing (clear-cutting) for agriculture is the OPPOSITE of sustainable management — it's deforestation.",
    sourceCitation: "Standard environmental science curriculum" },

  // Hard
  { id: "ENV4A-Q013", sectionId: "ENV-4", topicId: "env-natural-resources", difficulty: "hard", type: "single",
    question: "Why is the distinction between renewable and non-renewable resources CRITICAL for long-term planning?",
    options: [
      "Non-renewables can be used indefinitely; renewables will run out soon",
      "Non-renewables will eventually be depleted; renewables can be used sustainably indefinitely if managed well",
      "Both categories behave the same way",
      "Renewables are always cheaper"
    ],
    correctAnswer: 1,
    explanation: "Non-renewable resources (fossil fuels, minerals) exist in finite stocks — they WILL run out eventually if used faster than they form. Renewable resources (water, forests managed sustainably, solar) can theoretically be used indefinitely IF managed properly. This distinction is critical for energy policy: long-term planning must shift toward renewables to avoid running out of non-renewables.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4A-Q014", sectionId: "ENV-4", topicId: "env-natural-resources", difficulty: "hard", type: "multi",
    question: "Which of the following are CORRECT examples of resource use? (Select all that apply.)",
    options: [
      "Burning coal for electricity is using a non-renewable resource",
      "Harnessing solar power is using a renewable resource",
      "Mining copper ore is using a non-renewable resource",
      "Catching fish faster than they reproduce is overfishing (unsustainable)"
    ],
    correctAnswer: [0, 1, 2, 3],
    explanation: "All four are correct. Coal, copper are non-renewable. Solar is renewable. Overfishing is a classic case of unsustainable use of a renewable resource — the resource CAN regenerate if harvested sustainably, but overexploitation drives collapse. The distinction between 'sustainable' and 'unsustainable' use applies to BOTH renewable and non-renewable resources.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4A-Q015", sectionId: "ENV-4", topicId: "env-natural-resources", difficulty: "hard", type: "single",
    question: "Why is RECYCLING alone insufficient to solve waste/resource problems?",
    options: [
      "Recycling is too expensive",
      "Recycling still uses energy and produces waste; preventing waste in the first place is better",
      "Recycling is illegal in most countries",
      "Recycling makes products weaker"
    ],
    correctAnswer: 1,
    explanation: "Recycling alone is insufficient because: it still uses energy and water, it still produces some waste, and it doesn't address the original over-consumption. The 5Rs hierarchy places RECYCLE AFTER Refuse, Reduce, and Reuse — preventing waste at the source is better than managing it after the fact. Recycling is part of the solution but not the whole solution.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4A-Q016", sectionId: "ENV-4", topicId: "env-natural-resources", difficulty: "hard", type: "single",
    question: "Choose the CORRECT statement about natural resources and Pakistan:",
    options: [
      "Pakistan has abundant forest cover (>30%)",
      "Fossil fuels are renewable because they form continuously",
      "Forests provide ecosystem services beyond just timber (carbon, water, biodiversity)",
      "All forms of energy are equally sustainable"
    ],
    correctAnswer: 2,
    explanation: "Forests provide MANY ecosystem services beyond timber — carbon sequestration, watershed protection, biodiversity habitat, soil prevention, cultural value. Pakistan's forest cover is only ~5% (NOT abundant). Fossil fuels are NON-renewable (they form over millions of years, not continuously). Energy forms vary in sustainability — fossil fuels are much less sustainable than solar/wind.",
    sourceCitation: "Standard environmental science curriculum" },

  // TOPIC 2: Resource Conflicts
  // ───────────────────────────────────────────────────────

  // Easy
  { id: "ENV4B-Q001", sectionId: "ENV-4", topicId: "env-resource-conflicts", difficulty: "easy", type: "single",
    question: "The INDUS WATERS TREATY was signed in:",
    options: ["1947", "1960", "1971", "1985"],
    correctAnswer: 1,
    explanation: "The Indus Waters Treaty was signed in 1960, brokered by the World Bank. It divided the six rivers of the Indus system between India (3 eastern: Ravi, Beas, Sutlej) and Pakistan (3 western: Indus, Jhelum, Chenab). It has held for over 60 years despite multiple wars — a remarkable achievement in water diplomacy.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4B-Q002", sectionId: "ENV-4", topicId: "env-resource-conflicts", difficulty: "easy", type: "single",
    question: "The Billion Tree Tsunami was a major reforestation initiative in:",
    options: ["India", "Bangladesh", "Pakistan", "Afghanistan"],
    correctAnswer: 2,
    explanation: "The Billion Tree Tsunami (2014-2017) was a major Pakistani initiative that planted 1 billion trees in Khyber Pakhtunkhwa province. It was expanded to the 10 Billion Tree Tsunami nationwide (2018+). This is one of the largest reforestation efforts in the developing world.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4B-Q003", sectionId: "ENV-4", topicId: "env-resource-conflicts", difficulty: "easy", type: "true_false",
    question: "Deforestation contributes more CO₂ to the atmosphere than all the world's cars and trucks combined.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Deforestation contributes approximately 10-15% of global CO₂ emissions — more than the entire global transportation sector (all cars, trucks, planes, ships). When forests are cleared, the carbon stored in trees is released AND the ongoing carbon sink is lost. This is why forest conservation is critical for climate.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4B-Q004", sectionId: "ENV-4", topicId: "env-resource-conflicts", difficulty: "easy", type: "single",
    question: "The Indus Waters Treaty (1960) divided how many rivers between India and Pakistan?",
    options: ["3", "4", "6", "9"],
    correctAnswer: 2,
    explanation: "The treaty divided SIX rivers of the Indus system: India got the 3 eastern rivers (Ravi, Beas, Sutlej); Pakistan got the 3 western rivers (Indus, Jhelum, Chenab). Three and three.",
    sourceCitation: "Standard environmental science curriculum" },

  // Medium
  { id: "ENV4B-Q005", sectionId: "ENV-4", topicId: "env-resource-conflicts", difficulty: "medium", type: "single",
    question: "Which rivers did PAKISTAN receive under the Indus Waters Treaty?",
    options: [
      "Ravi, Beas, Sutlej",
      "Indus, Jhelum, Chenab",
      "Ganges, Yamuna, Brahmaputra",
      "All six Indus rivers"
    ],
    correctAnswer: 1,
    explanation: "Pakistan received the 3 WESTERN rivers: Indus, Jhelum, Chenab. India received the 3 eastern rivers: Ravi, Beas, Sutlej. (The Ganges system is in India proper, not part of the Indus treaty.)",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4B-Q006", sectionId: "ENV-4", topicId: "env-resource-conflicts", difficulty: "medium", type: "single",
    question: "The '10 Billion Tree Tsunami' is:",
    options: [
      "An expansion of Pakistan's Billion Tree Tsunami initiative",
      "An Indian program",
      "A Chinese reforestation program",
      "A UN program only"
    ],
    correctAnswer: 0,
    explanation: "The 10 Billion Tree Tsunami (2018+) is the EXPANSION of Pakistan's Billion Tree Tsunami (2014-2017) to nationwide scale. It is one of the largest reforestation programs in the developing world, addressing Pakistan's critically low forest cover (~5% vs FAO-recommended 25%).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4B-Q007", sectionId: "ENV-4", topicId: "env-resource-conflicts", difficulty: "medium", type: "single",
    question: "Which of the following is NOT a function of forests?",
    options: ["Carbon sequestration", "Watershed protection", "Coal formation", "Biodiversity habitat"],
    correctAnswer: 2,
    explanation: "Forests do not FORM coal. Coal formed millions of years ago from ancient forests that were buried and compressed. Living forests today provide carbon sequestration, watershed protection, and biodiversity habitat — but they don't create coal (that process is geological and happened over geological timescales).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4B-Q008", sectionId: "ENV-4", topicId: "env-resource-conflicts", difficulty: "medium", type: "single",
    question: "Solutions to resource conflicts include all of the following EXCEPT:",
    options: [
      "International agreements (e.g., Indus Waters Treaty)",
      "Community-based management",
      "Fencing off resources from all human use",
      "Economic instruments (e.g., payments for ecosystem services)"
    ],
    correctAnswer: 2,
    explanation: "Resource conflicts can be resolved through international agreements, community-based management, and economic instruments. FENCING OFF resources from ALL human use is rarely practical and often harms local communities. Sustainable solutions balance conservation with human needs, rather than excluding people entirely.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4B-Q009", sectionId: "ENV-4", topicId: "env-resource-conflicts", difficulty: "medium", type: "single",
    question: "What is the Reko Diq case in Pakistan an example of?",
    options: [
      "Successful conservation",
      "A mining conflict resolved through international arbitration",
      "Reforestation success",
      "Renewable energy project"
    ],
    correctAnswer: 1,
    explanation: "Reko Diq (in Balochistan) is a large copper-gold deposit that became a major international arbitration case over mining rights vs. environmental and provincial concerns. It was settled through international arbitration (the World Bank's ICSID). It's a classic example of a mineral resource conflict resolved (contentiously) through international legal process.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4B-Q010", sectionId: "ENV-4", topicId: "env-resource-conflicts", difficulty: "medium", type: "multi",
    question: "Which of the following are CORRECT facts about the Indus Waters Treaty? (Select all that apply.)",
    options: [
      "It was signed in 1960",
      "It was brokered by the World Bank",
      "Pakistan received the 3 western rivers (Indus, Jhelum, Chenab)",
      "It divided 6 rivers total"
    ],
    correctAnswer: [0, 1, 2, 3],
    explanation: "All four are correct. The treaty was signed in 1960, brokered by the World Bank, divided 6 rivers (3 western to Pakistan, 3 eastern to India), and has held for over 60 years despite multiple wars. It is one of the most successful international water-sharing agreements in history.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4B-Q011", sectionId: "ENV-4", topicId: "env-resource-conflicts", difficulty: "medium", type: "true_false",
    question: "The 10 Billion Tree Tsunami is a Pakistani initiative to address the country's very low forest cover.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Pakistan's forest cover is ~5%, far below the FAO-recommended 25%. The 10 Billion Tree Tsunami (2018+) is the expanded version of the Billion Tree Tsunami (2014-2017), aimed at increasing forest cover nationwide. It is one of the largest reforestation efforts in the developing world.",
    sourceCitation: "Standard environmental science curriculum" },

  // Hard
  { id: "ENV4B-Q012", sectionId: "ENV-4", topicId: "env-resource-conflicts", difficulty: "hard", type: "single",
    question: "Why is the Indus Waters Treaty considered one of the most successful international resource agreements?",
    options: [
      "It solved all water disputes permanently",
      "It has held for over 60 years despite multiple wars between India and Pakistan",
      "It eliminated all water pollution",
      "It was never challenged in court"
    ],
    correctAnswer: 1,
    explanation: "The IWT has held for over 60 years despite FOUR wars between India and Pakistan (1947, 1965, 1971, 1999). It has been a remarkable achievement in water diplomacy, brokered by the World Bank. The treaty has been challenged and modified, but it has never been formally abrogated. It's a rare success in conflict-prone water-sharing.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4B-Q013", sectionId: "ENV-4", topicId: "env-resource-conflicts", difficulty: "hard", type: "multi",
    question: "Which of the following are CORRECT examples of resource conflicts in Pakistan? (Select all that apply.)",
    options: [
      "Indus Waters Treaty (water sharing with India)",
      "Reko Diq (mining rights vs. environment)",
      "Diamer-Bhasha Dam (displacement of communities)",
      "Thar coal mining (local environment vs. energy)"
    ],
    correctAnswer: [0, 1, 2, 3],
    explanation: "All four are correct examples of resource conflicts in Pakistan: (a) water sharing, (b) mining rights vs. environment, (c) dam-induced displacement, (d) coal mining trade-offs. Each represents the tension between development/consumption and environmental/social protection.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4B-Q014", sectionId: "ENV-4", topicId: "env-resource-conflicts", difficulty: "hard", type: "single",
    question: "Choose the CORRECT statement about Pakistan's forest initiatives:",
    options: [
      "Billion Tree Tsunami (1 billion) was a failure",
      "10 Billion Tree Tsunami is the EXPANDED national program",
      "Pakistan's forest cover is already at the FAO-recommended 25%",
      "Deforestation has no climate impact"
    ],
    correctAnswer: 1,
    explanation: "The 10 Billion Tree Tsunami is the expanded, nationwide version of the Billion Tree Tsunami (which was originally 1 billion trees in KPK). Pakistan's forest cover is only ~5%, far below the FAO's 25% recommendation. Deforestation has a significant climate impact (10-15% of global CO₂). The Billion Tree Tsunami was generally successful in KPK and was expanded.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4B-Q015", sectionId: "ENV-4", topicId: "env-resource-conflicts", difficulty: "hard", type: "single",
    question: "Why are community-based forest management initiatives important in Pakistan?",
    options: [
      "They exclude local communities from forests",
      "They give local communities a stake in conservation, providing livelihoods while protecting forests",
      "They are mandated by the UN",
      "They prevent all logging"
    ],
    correctAnswer: 1,
    explanation: "Community-based management gives local people LIVELIHOODS through sustainable forest use, giving them a stake in conservation. This approach (exemplified by the Billion Tree Tsunami's success in KPK) is more effective than top-down exclusion. When locals benefit from forests, they protect them. Pure exclusion often fails because locals have no alternative and revert to exploitation.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV4B-Q016", sectionId: "ENV-4", topicId: "env-resource-conflicts", difficulty: "hard", type: "single",
    question: "Which rivers did INDIA receive under the Indus Waters Treaty?",
    options: [
      "Indus, Jhelum, Chenab",
      "Ravi, Beas, Sutlej",
      "Ganges, Yamuna, Brahmaputra",
      "Indus, Ganges, Sutlej"
    ],
    correctAnswer: 1,
    explanation: "India received the 3 EASTERN rivers: Ravi, Beas, Sutlej. Pakistan got the 3 western rivers: Indus, Jhelum, Chenab. The Ganges system is in India proper (not part of the Indus treaty). This is a frequently-tested detail — memorize the actual split.",
    sourceCitation: "Standard environmental science curriculum" },

  // TOPIC 1: Air Pollution
  // ───────────────────────────────────────────────────────

  // Easy
  { id: "ENV5A-Q001", sectionId: "ENV-5", topicId: "env-air-pollution", difficulty: "easy", type: "single",
    question: "Which of the following is a PRIMARY air pollutant (emitted directly from a source)?",
    options: ["Ozone (O₃) formed from NOₓ + sunlight", "Sulfur dioxide (SO₂) from coal burning", "Acid rain (formed from SO₂ + water)", "Photochemical smog"],
    correctAnswer: 1,
    explanation: "PRIMARY pollutants are emitted DIRECTLY from a source. SO₂ is emitted directly from burning coal. (a) Ozone is SECONDARY (formed in atmosphere). (c) Acid rain is SECONDARY (formed from SO₂ + water). (d) Smog is SECONDARY (formed by atmospheric reactions).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5A-Q002", sectionId: "ENV-5", topicId: "env-air-pollution", difficulty: "easy", type: "single",
    question: "PM₂.₅ refers to particles with diameter:",
    options: ["≤ 2.5 micrometers", "≤ 10 micrometers", "≤ 25 micrometers", "≤ 50 micrometers"],
    correctAnswer: 0,
    explanation: "PM₂.₅ = particles ≤2.5 micrometers in diameter. These fine particles penetrate deep into the lungs and are more dangerous to health than larger PM₁₀ particles (≤10 micrometers). PM₂.₅ is the key health-relevant measure in modern air quality standards.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5A-Q003", sectionId: "ENV-5", topicId: "env-air-pollution", difficulty: "easy", type: "true_false",
    question: "Ozone in the TROPOSPHERE is a harmful air pollutant, while ozone in the STRATOSPHERE protects us from UV radiation.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Stratospheric ozone (15-35 km up) forms the ozone layer that absorbs harmful UV-B and UV-C radiation. Tropospheric ozone (ground level) is a harmful pollutant that causes respiratory problems and damages plants. The same molecule (O₃) has opposite effects depending on altitude — a commonly tested distinction.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5A-Q004", sectionId: "ENV-5", topicId: "env-air-pollution", difficulty: "easy", type: "single",
    question: "The classic 1952 London smog event was caused by:",
    options: ["Photochemical smog (summer sunlight)", "Sulfurous smog (winter coal burning + fog)", "Volcanic eruption", "Vehicle exhaust"],
    correctAnswer: 1,
    explanation: "The 1952 London smog was a SULFUROUS smog — winter cold + coal burning + fog trapped SO₂ and smoke over London, killing thousands. This led to the UK Clean Air Act 1956. Photochemical smog (LA type) is different — summer sunlight + NOₓ + VOCs.",
    sourceCitation: "Standard environmental science curriculum" },

  // Medium
  { id: "ENV5A-Q005", sectionId: "ENV-5", topicId: "env-air-pollution", difficulty: "medium", type: "single",
    question: "Which of the following is a SECONDARY air pollutant?",
    options: ["Sulfur dioxide (SO₂) from a power plant", "Particulate matter from a diesel truck", "Ozone (O₃) formed from NOₓ + VOCs + sunlight", "Carbon monoxide from a generator"],
    correctAnswer: 2,
    explanation: "SECONDARY pollutants are formed IN THE ATMOSPHERE by chemical reactions. Ozone is the classic example — it's not emitted directly (mostly); it forms when NOₓ and VOCs react in sunlight. SO₂, PM, and CO are all PRIMARY (emitted directly from sources).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5A-Q006", sectionId: "ENV-5", topicId: "env-air-pollution", difficulty: "medium", type: "single",
    question: "Photochemical smog typically occurs in:",
    options: ["Cold winter nights", "Hot sunny days", "Rainy seasons", "High-altitude only"],
    correctAnswer: 1,
    explanation: "Photochemical smog (LA-type) forms when NOₓ + VOCs react in SUNLIGHT to produce ozone and PAN. This requires intense sunlight, so it forms on hot, sunny days — typically summer in urban areas like Los Angeles, Delhi, or Lahore. Sulfurous smog (London-type) is the cold-weather variant.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5A-Q007", sectionId: "ENV-5", topicId: "env-air-pollution", difficulty: "medium", type: "single",
    question: "Acid rain is primarily caused by:",
    options: [
      "SO₂ and NOₓ reacting with water vapor in the atmosphere",
      "CO₂ dissolving in rainwater",
      "Pure rainwater (naturally acidic due to dissolved CO₂)",
      "Ozone depletion"
    ],
    correctAnswer: 0,
    explanation: "Acid rain is caused by SO₂ (from coal/oil burning) and NOₓ (from vehicles) reacting with water vapor in the atmosphere to form sulfuric acid (H₂SO₄) and nitric acid (HNO₃), which fall as acid rain. Normal rain is slightly acidic (pH ~5.6) due to dissolved CO₂, but ACID RAIN is much more acidic (pH < 5).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5A-Q008", sectionId: "ENV-5", topicId: "env-air-pollution", difficulty: "medium", type: "single",
    question: "Radon in homes is an example of:",
    options: ["Outdoor air pollution", "Indoor air pollution", "Photochemical smog", "Vehicle emissions"],
    correctAnswer: 1,
    explanation: "Radon is a naturally occurring radioactive gas that seeps into homes from soil and rocks — a major INDOOR air pollution concern. It's the second-leading cause of lung cancer after smoking. Other indoor pollutants: biomass cooking smoke, asbestos, formaldehyde, tobacco smoke. Indoor air pollution kills ~4 million people/year globally, mostly in developing countries.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5A-Q009", sectionId: "ENV-5", topicId: "env-air-pollution", difficulty: "medium", type: "single",
    question: "Which air pollution control technology is used in VEHICLE EXHAUSTS to reduce NOₓ, CO, and VOCs?",
    options: ["Electrostatic precipitator", "Scrubber (wet/dry)", "Catalytic converter", "HEPA filter"],
    correctAnswer: 2,
    explanation: "The CATALYTIC CONVERTER is used in vehicle exhausts — it uses catalysts to convert NOₓ, CO, and unburned hydrocarbons (VOCs) into less harmful N₂, CO₂, and H₂O. Electrostatic precipitators and bag filters remove particulates (from power plants). Scrubbers remove SO₂. HEPA filters are for indoor air.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5A-Q010", sectionId: "ENV-5", topicId: "env-air-pollution", difficulty: "medium", type: "true_false",
    question: "PM₂.₅ is MORE dangerous to human health than PM₁₀ because smaller particles penetrate deeper into the lungs.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. PM₂.₅ (≤2.5 μm) penetrates deep into the alveoli (air sacs) of the lungs and can enter the bloodstream, causing cardiovascular and respiratory diseases. PM₁₀ (≤10 μm) is larger and gets trapped in the upper airways. The smaller the particle, the deeper it goes — and the more dangerous it is.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5A-Q011", sectionId: "ENV-5", topicId: "env-air-pollution", difficulty: "medium", type: "multi",
    question: "Which of the following are CORRECT distinctions in air pollution? (Select all that apply.)",
    options: [
      "Primary pollutants are emitted directly; secondary form in the atmosphere",
      "PM₂.₅ is smaller and more dangerous than PM₁₀",
      "Stratospheric ozone is harmful; tropospheric ozone protects",
      "Photochemical smog forms in hot, sunny conditions from NOₓ + VOCs"
    ],
    correctAnswer: [0, 1, 3],
    explanation: "(a) Correct: primary vs secondary distinction. (b) Correct: PM₂.₅ smaller, more dangerous. (c) WRONG: it's the OPPOSITE — stratospheric ozone PROTECTS (ozone layer); tropospheric ozone is harmful (pollutant). (d) Correct: photochemical smog forms in sunlight from NOₓ + VOCs.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5A-Q012", sectionId: "ENV-5", topicId: "env-air-pollution", difficulty: "medium", type: "single",
    question: "The NEQS in Pakistan stands for:",
    options: [
      "National Emission Quality Standards",
      "National Environmental Quality Standards",
      "National Energy Quota System",
      "Natural Element Quality Survey"
    ],
    correctAnswer: 1,
    explanation: "NEQS = National Environmental Quality Standards — Pakistan's legal limits for ambient air pollutants, water discharges, and noise. Set by the Pakistan Environmental Protection Agency (Pak-EPA). Enforced weakly but the legal framework exists.",
    sourceCitation: "Standard environmental science curriculum" },

  // Hard
  { id: "ENV5A-Q013", sectionId: "ENV-5", topicId: "env-air-pollution", difficulty: "hard", type: "single",
    question: "Choose the CORRECT statement about the stratospheric ozone layer:",
    options: [
      "It is being depleted by CFCs (chlorofluorocarbons)",
      "It is harmful to human health",
      "It is found at the same altitude as tropospheric ozone",
      "It is increasing due to fossil fuel burning"
    ],
    correctAnswer: 0,
    explanation: "The stratospheric ozone layer (15-35 km up) is being depleted by CFCs, which release chlorine that catalytically destroys ozone. This led to the Montreal Protocol (1987) banning CFCs. Stratospheric ozone is PROTECTIVE (absorbs UV-B). Tropospheric ozone is the harmful pollutant. They are at DIFFERENT altitudes with opposite effects.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5A-Q014", sectionId: "ENV-5", topicId: "env-air-pollution", difficulty: "hard", type: "multi",
    question: "Which of the following are CORRECT causes of ACID RAIN? (Select all that apply.)",
    options: [
      "SO₂ from coal burning reacting with water in the atmosphere",
      "NOₓ from vehicle exhausts reacting with water in the atmosphere",
      "CO₂ dissolving in rainwater (normal rain is slightly acidic)",
      "Pure ozone in the troposphere dissolving in clouds"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "(a) Correct: SO₂ + H₂O → H₂SO₄ (sulfuric acid). (b) Correct: NOₓ + H₂O → HNO₃ (nitric acid). (c) Correct: even normal rain is slightly acidic (pH ~5.6) due to dissolved CO₂ forming carbonic acid. (d) WRONG: ozone doesn't directly cause acid rain. The two main ACID RAIN components are sulfuric acid and nitric acid, both from human industrial activities.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5A-Q015", sectionId: "ENV-5", topicId: "env-air-pollution", difficulty: "hard", type: "single",
    question: "Why is indoor air pollution particularly dangerous in developing countries?",
    options: [
      "Indoor air pollution is more toxic than outdoor per molecule",
      "Biomass cooking smoke kills ~4 million people/year, mostly in developing countries",
      "Homes in developing countries are more airtight",
      "Developing countries have stricter air quality standards"
    ],
    correctAnswer: 1,
    explanation: "Biomass cooking smoke (from wood, charcoal, dung) is a major indoor air pollution killer — ~4 million deaths/year globally, predominantly women and children in developing countries. It contains PM, CO, and many carcinogens. Developing countries have weaker regulations, not stricter. The toxicity isn't higher per molecule — it's the duration of exposure (many hours daily in poorly ventilated homes).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5A-Q016", sectionId: "ENV-5", topicId: "env-air-pollution", difficulty: "hard", type: "single",
    question: "Why is Lahore's air quality particularly bad in winter (October-January)?",
    options: [
      "More vehicles are on the road in winter",
      "Temperature inversions trap pollutants + agricultural residue burning",
      "Lahore is closer to the equator in winter",
      "Factories operate more in winter"
    ],
    correctAnswer: 1,
    explanation: "Lahore's winter air quality crisis is caused by: (1) TEMPERATURE INVERSIONS — cold air near the ground traps pollutants under a layer of warm air, preventing dispersion; (2) AGRICULTURAL RESIDUE BURNING — rice and wheat stubble is burned in Punjab and northern India in Oct-Nov, sending massive smoke across the border; (3) reduced wind dispersal. AQI regularly exceeds 300 (hazardous) during this period.",
    sourceCitation: "Standard environmental science curriculum" },

  // TOPIC 2: Water Pollution
  // ───────────────────────────────────────────────────────

  // Easy
  { id: "ENV5B-Q001", sectionId: "ENV-5", topicId: "env-water-pollution-and-quality", difficulty: "easy", type: "single",
    question: "BOD (Biochemical Oxygen Demand) measures:",
    options: [
      "Oxygen required by bacteria to decompose organic waste",
      "Dissolved oxygen in water",
      "Chemical oxygen demand",
      "Biological diversity"
    ],
    correctAnswer: 0,
    explanation: "BOD = Biochemical Oxygen Demand — the O₂ that BACTERIA need to decompose organic waste in water. HIGH BOD = lots of decomposable organic waste = polluted water. It's the classic test for organic pollution (e.g., from sewage or food processing waste).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5B-Q002", sectionId: "ENV-5", topicId: "env-water-pollution-and-quality", difficulty: "easy", type: "true_false",
    question: "Clean water has HIGH dissolved oxygen (DO) and LOW BOD.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Clean water has high DO (lots of oxygen for fish) and low BOD (little organic waste to decompose). Polluted water has the OPPOSITE: low DO (oxygen depleted by decomposers) and high BOD (lots of waste to decompose). The DO and BOD have an INVERSE relationship — when BOD is high, bacteria consume O₂, lowering DO.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5B-Q003", sectionId: "ENV-5", topicId: "env-water-pollution-and-quality", difficulty: "easy", type: "single",
    question: "Eutrophication is caused primarily by:",
    options: [
      "Excess nutrients (nitrogen and phosphorus) in water",
      "Heavy metal contamination",
      "Pathogenic bacteria",
      "Plastic pollution"
    ],
    correctAnswer: 0,
    explanation: "Eutrophication is caused by EXCESS NUTRIENTS (nitrogen and phosphorus), typically from agricultural fertilizer runoff or sewage. The cascade: nutrients → algal bloom → light blocked → plant death → bacterial decomposition → O₂ depletion → fish death → dead zone. Famous examples: Gulf of Mexico (Mississippi runoff), Baltic Sea.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5B-Q004", sectionId: "ENV-5", topicId: "env-water-pollution-and-quality", difficulty: "easy", type: "single",
    question: "DDT and PCBs are classic examples of:",
    options: [
      "Nutrient pollution",
      "Persistent organic pollutants that biomagnify",
      "Pathogenic contamination",
      "Thermal pollution"
    ],
    correctAnswer: 1,
    explanation: "DDT and PCBs are PERSISTENT ORGANIC POLLUTANTS (POPs) — they don't break down easily, accumulate in fatty tissue, and BIOMAGNIFY up the food chain. DDT famously caused bald eagle eggshell thinning and near-extinction. The lesson: even small amounts of persistent chemicals reach dangerous levels in top predators (including humans).",
    sourceCitation: "Standard environmental science curriculum" },

  // Medium
  { id: "ENV5B-Q005", sectionId: "ENV-5", topicId: "env-water-pollution-and-quality", difficulty: "medium", type: "single",
    question: "The relationship between BOD and DO in water is:",
    options: [
      "Both increase together",
      "Both decrease together",
      "They are inversely related (one up, the other down)",
      "They are unrelated"
    ],
    correctAnswer: 2,
    explanation: "BOD and DO are INVERSELY related. When BOD is high (lots of decomposable waste), bacteria consume O₂, which LOWERS DO. When BOD is low (clean water), DO stays high. This is the fundamental water quality principle: polluted water = high BOD + low DO; clean water = low BOD + high DO.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5B-Q006", sectionId: "ENV-5", topicId: "env-water-pollution-and-quality", difficulty: "medium", type: "single",
    question: "COD (Chemical Oxygen Demand) is always _____ BOD (Biochemical Oxygen Demand).",
    options: ["Less than", "Equal to", "Greater than", "Unrelated to"],
    correctAnswer: 2,
    explanation: "COD is ALWAYS greater than BOD. COD measures the oxygen needed for TOTAL chemical oxidation (everything bacteria + chemicals can break down), while BOD only measures what BACTERIA can biologically decompose. Since chemical oxidation can break down more substances than biological oxidation alone, COD ≥ BOD always. A high COD/BOD ratio suggests non-biodegradable chemical pollutants.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5B-Q007", sectionId: "ENV-5", topicId: "env-water-pollution-and-quality", difficulty: "medium", type: "single",
    question: "The correct sequence of wastewater treatment stages is:",
    options: [
      "Tertiary → Primary → Secondary",
      "Primary → Secondary → Tertiary",
      "Primary → Tertiary → Secondary",
      "Secondary → Primary → Tertiary"
    ],
    correctAnswer: 1,
    explanation: "The correct order is PRIMARY (physical: screening, sedimentation — removes solids) → SECONDARY (biological: bacteria breakdown — removes organic matter) → TERTIARY (advanced: chemical, UV, filtration — removes nutrients, pathogens, metals). Primary is always first, tertiary is always last. The exam tests this order.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5B-Q008", sectionId: "ENV-5", topicId: "env-water-pollution-and-quality", difficulty: "medium", type: "single",
    question: "Biomagnification is different from bioaccumulation because:",
    options: [
      "Biomagnification occurs in a single organism; bioaccumulation in food chains",
      "Biomagnification occurs up the food chain; bioaccumulation in a single organism",
      "They are the same thing",
      "Biomagnification is about water, bioaccumulation about soil"
    ],
    correctAnswer: 1,
    explanation: "BIOACCUMULATION = buildup of a substance in a SINGLE organism over time (e.g., a fish accumulates mercury from water). BIOMAGNIFICATION = INCREASING concentration as you go UP the food chain (small fish 1x → bigger fish 10x → predatory bird 1000x). They are related but distinct. The DDT example: algae accumulate DDT, small fish eat lots of algae (concentrated), big fish eat small fish (more concentrated), eagles eat big fish (extremely concentrated).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5B-Q009", sectionId: "ENV-5", topicId: "env-water-pollution-and-quality", difficulty: "medium", type: "single",
    question: "The PRIMARY treatment stage of wastewater removes:",
    options: [
      "Dissolved nutrients like nitrogen and phosphorus",
      "Solids and suspended materials (physical process)",
      "Bacteria and pathogens",
      "Heavy metals"
    ],
    correctAnswer: 1,
    explanation: "PRIMARY treatment = PHYSICAL processes: SCREENING (removes large debris) and SEDIMENTATION (allows solids to settle out). It removes SOLIDS and suspended materials. Secondary treatment uses biological processes (bacteria) to remove organic matter. Tertiary treatment uses chemical/advanced processes to remove nutrients, pathogens, and metals. The exam tests this distinction between stages.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5B-Q010", sectionId: "ENV-5", topicId: "env-water-pollution-and-quality", difficulty: "medium", type: "multi",
    question: "Which of the following are CORRECT facts about water quality? (Select all that apply.)",
    options: [
      "Clean water: high DO, low BOD, low COD",
      "COD is always greater than BOD",
      "Primary treatment is physical (removes solids)",
      "Tertiary treatment is biological (uses bacteria)"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "(a) Correct: clean water = high DO, low BOD, low COD (inverse DO-BOD relationship). (b) Correct: COD > BOD always (chemical > biological oxidation). (c) Correct: primary is physical (screening, sedimentation). (d) WRONG: tertiary is the ADVANCED/CHEMICAL stage, NOT biological — SECONDARY is the biological stage. The order is: primary (physical) → secondary (biological) → tertiary (chemical/advanced).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5B-Q011", sectionId: "ENV-5", topicId: "env-water-pollution-and-quality", difficulty: "medium", type: "true_false",
    question: "Bioaccumulation occurs within a single organism; biomagnification occurs up the food chain.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. This is the key distinction. Bioaccumulation = buildup in ONE organism over time. Biomagnification = INCREASING concentration as you go UP the food chain. DDT is the classic example of both: it bioaccumulates in algae (building up over time in the algae) AND biomagnifies up the food chain (algae → small fish → big fish → eagles, getting more concentrated at each step).",
    sourceCitation: "Standard environmental science curriculum" },

  // Hard
  { id: "ENV5B-Q012", sectionId: "ENV-5", topicId: "env-water-pollution-and-quality", difficulty: "hard", type: "single",
    question: "In the eutrophication cascade, which step happens FIRST?",
    options: [
      "Fish die from lack of oxygen",
      "Excess nutrients enter the water (from fertilizer/sewage)",
      "Bacteria decompose dead algae using oxygen",
      "Algal bloom blocks sunlight"
    ],
    correctAnswer: 1,
    explanation: "The FIRST step in eutrophication is excess nutrients entering the water (from fertilizer runoff or sewage). Then: nutrients → algal bloom (algae grow rapidly) → light blocked (deeper plants can't photosynthesize and die) → bacteria decompose dead algae using oxygen → O₂ depleted → fish die. The starting point is always the nutrient input.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5B-Q013", sectionId: "ENV-5", topicId: "env-water-pollution-and-quality", difficulty: "hard", type: "multi",
    question: "Which of the following are CORRECT distinctions in water quality and treatment? (Select all that apply.)",
    options: [
      "Clean water: high DO, low BOD; Polluted: low DO, high BOD",
      "BOD measures bacterial decomposition; COD measures total chemical oxidation",
      "COD is always greater than or equal to BOD",
      "Primary treatment uses bacteria; Secondary uses physical processes"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "(a) Correct: clean vs polluted water relationship. (b) Correct: BOD = biological; COD = chemical (total). (c) Correct: COD ≥ BOD always. (d) WRONG: it's the OPPOSITE — Primary is PHYSICAL (screening, sedimentation), Secondary is BIOLOGICAL (bacteria). The exam often tests this swap.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5B-Q014", sectionId: "ENV-5", topicId: "env-water-pollution-and-quality", difficulty: "hard", type: "single",
    question: "Why is BOD a better measure of organic pollution than COD for some purposes?",
    options: [
      "BOD is easier to measure",
      "BOD specifically measures biodegradable organic matter (which causes oxygen depletion); COD includes non-biodegradable chemicals",
      "COD is more expensive",
      "BOD is more accurate"
    ],
    correctAnswer: 1,
    explanation: "BOD specifically measures the OXYGEN DEMAND from biodegradable organic matter (the stuff that bacteria break down and that causes oxygen depletion — the main 'oxygen depletion' problem in polluted water). COD measures ALL chemical oxidation, including non-biodegradable chemicals. So BOD is a better measure of the biodegradable pollution that actually causes the oxygen depletion problem.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5B-Q015", sectionId: "ENV-5", topicId: "env-water-pollution-and-quality", difficulty: "hard", type: "single",
    question: "Choose the CORRECT description of the DDT biomagnification story:",
    options: [
      "DDT equally affected all species regardless of trophic level",
      "DDT concentration DECREASED up the food chain",
      "DDT concentration INCREASED up the food chain, devastating top predators like bald eagles",
      "DDT only affected aquatic species"
    ],
    correctAnswer: 2,
    explanation: "DDT concentration INCREASED up the food chain. Algae (low concentration) → small fish (10x) → big fish (100x) → eagles (1000x+). The high concentration in top predators caused eggshell thinning, leading to bald eagle near-extinction in the 1960s. This is the classic biomagnification case that led to DDT bans in many countries.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5B-Q016", sectionId: "ENV-5", topicId: "env-water-pollution-and-quality", difficulty: "hard", type: "single",
    question: "Why is arsenic contamination of groundwater a concern in Pakistan?",
    options: [
      "Arsenic is added to water as a disinfectant",
      "Naturally occurring arsenic in rocks leaches into groundwater, affecting parts of Sindh and southern Punjab",
      "Arsenic is a byproduct of fertilizer use",
      "Arsenic comes from plastic pipes"
    ],
    correctAnswer: 1,
    explanation: "Naturally occurring arsenic in rocks and sediments leaches into groundwater in parts of Sindh and southern Punjab. Long-term exposure to arsenic-contaminated water causes skin lesions, cancers, and other health problems. The exam sometimes tests Pakistan-specific water issues (arsenic in groundwater, sewage in rivers like Lyari, etc.).",
    sourceCitation: "Standard environmental science curriculum" },

  // TOPIC 3: Soil & Waste
  // ───────────────────────────────────────────────────────

  // Easy
  { id: "ENV5C-Q001", sectionId: "ENV-5", topicId: "env-soil-and-waste", difficulty: "easy", type: "single",
    question: "Which of the following is a major source of soil pollution?",
    options: ["Solar radiation", "Agricultural pesticides", "Wind energy", "Rainfall"],
    correctAnswer: 1,
    explanation: "PESTICIDES and herbicides from agriculture are a major source of soil pollution. They can persist for decades, kill beneficial soil organisms, and contaminate groundwater. Other major sources: industrial waste dumping, sewage sludge, mining runoff, landfill leachate.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5C-Q002", sectionId: "ENV-5", topicId: "env-soil-and-waste", difficulty: "easy", type: "true_false",
    question: "Open dumping of waste is an environmentally acceptable waste disposal method.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Open dumping (uncontrolled waste piles) is HAZARDOUS — it causes groundwater pollution via leachate, attracts disease vectors (rats, flies), produces methane (a potent greenhouse gas), and is aesthetically harmful. SANITARY LANDFILLS (engineered, lined, with leachate control and gas capture) are the acceptable alternative. Open dumping is common in developing countries but is not environmentally sound.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5C-Q003", sectionId: "ENV-5", topicId: "env-soil-and-waste", difficulty: "easy", type: "single",
    question: "The correct order of the waste hierarchy (most to least preferred) is:",
    options: [
      "Recycle → Reuse → Reduce → Refuse",
      "Refuse → Reduce → Reuse → Recycle",
      "Reuse → Refuse → Recycle → Reduce",
      "Dispose → Recycle → Reuse → Reduce"
    ],
    correctAnswer: 1,
    explanation: "The 5Rs order (most to least preferred): REFUSE (best — don't use it) → REDUCE → REUSE → RECYCLE → RECOVER (energy from waste) → DISPOSE (worst). The exam tests this order frequently. Refuse first because preventing waste is better than managing it.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5C-Q004", sectionId: "ENV-5", topicId: "env-soil-and-waste", difficulty: "easy", type: "single",
    question: "The fastest growing waste stream globally is:",
    options: ["Plastic waste", "E-waste (electronic waste)", "Paper waste", "Food waste"],
    correctAnswer: 1,
    explanation: "E-WASTE (electronic waste) is the fastest growing waste stream globally due to rapid turnover of phones, computers, and other electronics. It contains valuable materials (gold, silver, rare earths) but also hazardous substances (lead, mercury, cadmium). Formal recycling infrastructure is limited, especially in developing countries.",
    sourceCitation: "Standard environmental science curriculum" },

  // Medium
  { id: "ENV5C-Q005", sectionId: "ENV-5", topicId: "env-soil-and-waste", difficulty: "medium", type: "single",
    question: "Pakistan's major soil pollution issue is:",
    options: ["Erosion only", "Salinity from irrigation in arid areas", "Volcanic ash", "Excess nitrogen only"],
    correctAnswer: 1,
    explanation: "Pakistan's major soil issue is SALINITY — salt buildup from irrigation in arid areas (up to 6 million hectares affected). When irrigation water evaporates, it leaves salts behind. This reduces fertility and can render land unusable. The Thar Desert and parts of Punjab and Sindh are particularly affected.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5C-Q006", sectionId: "ENV-5", topicId: "env-soil-and-waste", difficulty: "medium", type: "single",
    question: "Biomedical waste from hospitals must be:",
    options: [
      "Mixed with general waste",
      "Disposed in regular landfills",
      "Autoclaved or incinerated before disposal",
      "Recycled like other waste"
    ],
    correctAnswer: 2,
    explanation: "Biomedical waste (from hospitals) is INFECTIOUS and must be autoclaved (steam-sterilized) or incinerated before disposal. It CANNOT be mixed with general waste or disposed of in regular landfills — it poses serious disease transmission risk. This is a critical hospital hygiene and public health rule.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5C-Q007", sectionId: "ENV-5", topicId: "env-soil-and-waste", difficulty: "medium", type: "single",
    question: "Sanitary landfills are different from open dumping because sanitary landfills:",
    options: [
      "Are larger",
      "Are engineered with liners, leachate control, and often gas capture",
      "Are free to use",
      "Don't smell"
    ],
    correctAnswer: 1,
    explanation: "Sanitary landfills are ENGINEERED with: clay or synthetic LINERS to prevent leachate from contaminating groundwater, LEACHATE COLLECTION systems to manage liquids, GAS CAPTURE systems to collect methane (which can be used for energy), daily soil cover, and monitoring wells. Open dumps have none of these — they just pile waste on the ground. This distinction is critical for environmental protection.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5C-Q008", sectionId: "ENV-5", topicId: "env-soil-and-waste", difficulty: "medium", type: "single",
    question: "Incineration of waste has which of the following disadvantages?",
    options: [
      "It produces no energy",
      "It reduces volume but produces air emissions (dioxins, heavy metals) and toxic ash",
      "It is free",
      "It eliminates all waste"
    ],
    correctAnswer: 1,
    explanation: "Incineration reduces waste volume by ~90% but has significant downsides: air emissions (dioxins, furans, heavy metals), toxic ash requiring hazardous waste disposal, and high cost. It is NOT a clean solution. The exam sometimes tests 'is incineration environmentally good?' Answer: it has trade-offs — reduces volume but creates new pollution problems.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5C-Q009", sectionId: "ENV-5", topicId: "env-soil-and-waste", difficulty: "medium", type: "true_false",
    question: "Recycling is the BEST and FIRST step in waste management according to the 5Rs hierarchy.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. REFUSE is the best and first step in the 5Rs hierarchy. The order is: Refuse (don't use) > Reduce (use less) > Reuse (use again) > Recycle (reprocess) > Recover (energy) > Dispose. Many people assume Recycle is best, but preventing waste at the source is always better than managing it after the fact.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5C-Q010", sectionId: "ENV-5", topicId: "env-soil-and-waste", difficulty: "medium", type: "multi",
    question: "Which of the following are CORRECT examples of waste types? (Select all that apply.)",
    options: [
      "Municipal solid waste (household)",
      "Biomedical waste (from hospitals)",
      "E-waste (electronics)",
      "Hazardous waste (toxic/flammable/corrosive)"
    ],
    correctAnswer: [0, 1, 2, 3],
    explanation: "All four are correct waste types. MSW = household; Biomedical = hospital; E-waste = electronics; Hazardous = toxic/flammable. Each requires different management. The exam tests whether you can identify these distinct streams.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5C-Q011", sectionId: "ENV-5", topicId: "env-soil-and-waste", difficulty: "medium", type: "single",
    question: "Anaerobic digestion of organic waste produces:",
    options: [
      "Oxygen and water",
      "Methane (biogas) and digestate (fertilizer)",
      "Plastic and chemicals",
      "Only compost with no useful byproducts"
    ],
    correctAnswer: 1,
    explanation: "Anaerobic digestion (without oxygen) of organic waste produces BIOGAS (mostly methane, CH₄) which can be captured and used for energy, plus DIGESTATE (nutrient-rich residue) that can be used as fertilizer. It's a 'waste-to-energy' method. Compare to aerobic composting (with oxygen) which produces just compost, no methane.",
    sourceCitation: "Standard environmental science curriculum" },

  // Hard
  { id: "ENV5C-Q012", sectionId: "ENV-5", topicId: "env-soil-and-waste", difficulty: "hard", type: "single",
    question: "Why is soil pollution particularly persistent (hard to clean up)?",
    options: [
      "Soil is hidden underground",
      "Many pollutants bind to soil particles and degrade very slowly (pesticides, heavy metals can persist for decades)",
      "Soil is too dense to clean",
      "Nobody cares about soil"
    ],
    correctAnswer: 1,
    explanation: "Soil pollution is persistent because many pollutants (pesticides like DDT, heavy metals like lead and cadmium, industrial chemicals) BIND STRONGLY to soil particles and degrade extremely slowly — some pesticides persist for decades. Once soil is contaminated, remediation is very expensive and often only partial (excavation, soil washing, or simply containing the contamination). Prevention is much cheaper than cure.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5C-Q013", sectionId: "ENV-5", topicId: "env-soil-and-waste", difficulty: "hard", type: "multi",
    question: "Which of the following are CORRECT distinctions in waste management? (Select all that apply.)",
    options: [
      "Refuse > Reduce > Reuse > Recycle > Recover > Dispose",
      "Primary treatment is physical; Secondary is biological; Tertiary is chemical/advanced",
      "Sanitary landfills are engineered with liners and leachate control; open dumps are not",
      "Incineration is completely clean with no emissions"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "(a) Correct: the 5Rs hierarchy. (b) Correct: treatment stages (this is water treatment but the same hierarchy concept applies). (c) Correct: sanitary vs open dump distinction. (d) WRONG: incineration produces air emissions (dioxins, furans, heavy metals) and toxic ash — it is NOT completely clean.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5C-Q014", sectionId: "ENV-5", topicId: "env-soil-and-waste", difficulty: "hard", type: "single",
    question: "Pakistan generates approximately how much solid waste per day?",
    options: [
      "Lahore: 500 tons; Karachi: 1,000 tons",
      "Lahore: 6,000 tons; Karachi: 12,000+ tons",
      "Lahore: 50,000 tons; Karachi: 100,000 tons",
      "Lahore: 1,000 tons; Karachi: 5,000 tons"
    ],
    correctAnswer: 1,
    explanation: "Pakistan's largest cities generate massive amounts of solid waste daily: Lahore ~6,000 tons/day, Karachi ~12,000+ tons/day. Most of this is uncollected or dumped in open sites, with limited segregation and few sanitary landfills. The scale of the waste management challenge in Pakistan is severe.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5C-Q015", sectionId: "ENV-5", topicId: "env-soil-and-waste", difficulty: "hard", type: "single",
    question: "The BEST way to reduce waste is:",
    options: [
      "Recycle more",
      "Burn it in incinerators",
      "Refuse to use it in the first place (reduce at source)",
      "Build more landfills"
    ],
    correctAnswer: 2,
    explanation: "The 5Rs hierarchy places REFUSE first — the best waste is the waste never created. Recycling is good but still requires energy and resources. The most environmentally effective strategy is to NOT use the item in the first place (refuse), then reduce, reuse, recycle, recover, and finally dispose. This is the core waste prevention philosophy.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV5C-Q016", sectionId: "ENV-5", topicId: "env-soil-and-waste", difficulty: "hard", type: "single",
    question: "Why are E-WASTE and BIOMEDICAL WASTE considered separate streams from municipal solid waste?",
    options: [
      "They look different",
      "They require special handling due to hazardous components (toxics in e-waste, pathogens in biomedical)",
      "They are heavier",
      "They are smaller in volume"
    ],
    correctAnswer: 1,
    explanation: "E-waste contains hazardous materials (lead, mercury, cadmium, brominated flame retardants) requiring special recycling. Biomedical waste contains pathogens requiring autoclaving/incineration. Mixing them with general MSW would spread contamination and disease. They need separate collection, transport, and treatment streams.",
    sourceCitation: "Standard environmental science curriculum" },

  // TOPIC 1: Energy Sources
  // ───────────────────────────────────────────────────────

  // Easy
  { id: "ENV6A-Q001", sectionId: "ENV-6", topicId: "env-energy-sources", difficulty: "easy", type: "single",
    question: "Which energy source has the HIGHEST CO₂ emissions per unit of electricity generated?",
    options: ["Solar", "Wind", "Coal", "Nuclear"],
    correctAnswer: 2,
    explanation: "Coal has the highest CO₂ emissions per unit of electricity among major energy sources (~820-1000 g CO₂/kWh). Natural gas is much lower (~450 g). Nuclear and renewables are near-zero operational emissions. This is why coal is the 'dirtiest' fossil fuel for climate.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6A-Q002", sectionId: "ENV-6", topicId: "env-energy-sources", difficulty: "easy", type: "single",
    question: "Which energy source has ZERO operational CO₂ emissions?",
    options: ["Coal", "Natural gas", "Nuclear", "Oil"],
    correctAnswer: 2,
    explanation: "Nuclear power has ZERO operational CO₂ emissions — the fission process itself doesn't release CO₂. The CO₂ comes from construction and fuel processing (a small amount). Coal, gas, and oil all release significant CO₂ when burned. Solar, wind, hydro, and nuclear are all near-zero operational CO₂.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6A-Q003", sectionId: "ENV-6", topicId: "env-energy-sources", difficulty: "easy", type: "true_false",
    question: "Hydroelectric power produces zero CO₂ during operation but has high land-use impact due to reservoir creation.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Hydro is operationally zero-carbon, but it requires flooding large valleys for reservoirs — high land use, ecosystem disruption, displacement of communities. The Three Gorges Dam displaced over 1 million people. Hydro's 'cleanliness' depends on the context — operationally clean, but environmentally impactful.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6A-Q004", sectionId: "ENV-6", topicId: "env-energy-sources", difficulty: "easy", type: "single",
    question: "Which is the cleanest fossil fuel (in terms of CO₂ emissions)?",
    options: ["Coal", "Oil", "Natural gas", "Peat"],
    correctAnswer: 2,
    explanation: "Natural gas is the cleanest fossil fuel, with about half the CO₂ per unit energy of coal. Methane leaks during extraction are a concern, but in CO₂ terms alone, gas < oil < coal. Among fossil fuels, gas is the 'transition fuel' (though it's still a fossil fuel, not a long-term solution).",
    sourceCitation: "Standard environmental science curriculum" },

  // Medium
  { id: "ENV6A-Q005", sectionId: "ENV-6", topicId: "env-energy-sources", difficulty: "medium", type: "single",
    question: "Pakistan's largest source of electricity is:",
    options: ["Coal", "Natural gas", "Hydropower", "Nuclear"],
    correctAnswer: 1,
    explanation: "Natural gas accounts for ~36% of Pakistan's electricity. Hydropower is ~24%, oil is ~22%, coal is growing (~18%), and nuclear + solar + wind combined are still <5%. Gas is dominant because of Pakistan's domestic gas reserves and infrastructure.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6A-Q006", sectionId: "ENV-6", topicId: "env-energy-sources", difficulty: "medium", type: "single",
    question: "Which energy source has the highest LAND USE per unit of energy?",
    options: ["Nuclear", "Wind", "Hydro", "Solar"],
    correctAnswer: 2,
    explanation: "Hydroelectric has the highest land use among major energy sources — reservoirs flood large valleys, displacing communities and ecosystems. Solar has moderate land use (panels need space). Wind and nuclear have relatively low land use. The exam tests this distinction because hydro is sometimes wrongly assumed to be 'completely clean.'",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6A-Q007", sectionId: "ENV-6", topicId: "env-energy-sources", difficulty: "medium", type: "single",
    question: "Pakistan's announced NET-ZERO target year is:",
    options: ["2030", "2040", "2060", "2100"],
    correctAnswer: 2,
    explanation: "Pakistan announced a net-zero target for 2060 at COP26 (Glasgow, 2021). It's one of the few developing countries with a stated long-term net-zero goal. Implementation depends heavily on international climate finance and technology transfer. Note: 2030 is too soon, 2040/2050 are more typical for developed countries.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6A-Q008", sectionId: "ENV-6", topicId: "env-energy-sources", difficulty: "medium", type: "single",
    question: "Which of the following is a major Pakistani renewable energy project?",
    options: ["Karachi nuclear plant only", "Quaid-e-Azam Solar Park (Bahawalpur, 1 GW)", "Tarbela Dam (hydropower, but aging)", "All of the above are major renewable projects"],
    correctAnswer: 3,
    explanation: "All are major energy projects in Pakistan. Quaid-e-Azam Solar Park is one of the world's largest solar plants (1 GW capacity in Bahawalpur). Tarbela Dam is a major hydropower facility. Karachi Nuclear Power Plant (KANUPP) is Pakistan's first nuclear plant. The Gharo-Jhimpir Wind Corridor in Sindh is also a major renewable project.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6A-Q009", sectionId: "ENV-6", topicId: "env-energy-sources", difficulty: "medium", type: "true_false",
    question: "Biomass energy is always carbon-neutral because plants absorb CO₂ as they grow.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Biomass is 'carbon-neutral' IN THEORY but not always in practice. If forests are cleared to grow biomass crops, the NET carbon balance can be negative for decades. If unsustainable harvesting occurs (faster than regrowth), biomass can increase atmospheric CO₂. Burning biomass also releases air pollutants. 'Carbon-neutral' is an oversimplification.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6A-Q010", sectionId: "ENV-6", topicId: "env-energy-sources", difficulty: "medium", type: "single",
    question: "Why is natural gas sometimes called a 'transition fuel'?",
    options: [
      "It is renewable",
      "It produces about half the CO₂ of coal and can serve as a bridge while renewables scale up",
      "It is completely clean",
      "It is free of methane leaks"
    ],
    correctAnswer: 1,
    explanation: "Natural gas is called a 'transition fuel' because it produces about half the CO₂ of coal, can be used in existing gas infrastructure, and can serve as a bridge while renewable energy scales up. Critics point out it's still a fossil fuel with methane leaks. 'Completely clean' and 'no methane leaks' are wrong.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6A-Q011", sectionId: "ENV-6", topicId: "env-energy-sources", difficulty: "medium", type: "multi",
    question: "Which of the following are CORRECT about energy sources and their impacts? (Select all that apply.)",
    options: [
      "Coal has the highest CO₂ per unit energy",
      "Nuclear has zero operational CO₂",
      "Hydro has the highest land use",
      "All renewables are completely impact-free"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "(a) Correct: coal is the dirtiest fossil fuel per CO₂. (b) Correct: nuclear fission doesn't release CO₂. (c) Correct: hydro floods large valleys, highest land use. (d) WRONG: all renewables have some impact — hydro floods valleys, solar needs land for panels, wind has visual/noise/bird impacts, biomass needs land and can cause deforestation.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6A-Q012", sectionId: "ENV-6", topicId: "env-energy-sources", difficulty: "medium", type: "single",
    question: "Pakistan's energy mix by source (approximate) is:",
    options: [
      "Coal 50%, gas 30%, hydro 15%, other 5%",
      "Gas 36%, hydro 24%, oil 22%, coal 18%, nuclear+renewables <5%",
      "Renewables 50%, gas 30%, coal 20%",
      "Nuclear 60%, gas 30%, hydro 10%"
    ],
    correctAnswer: 1,
    explanation: "Pakistan's energy mix: natural gas ~36%, hydropower ~24%, oil ~22%, coal ~18% (rising), and nuclear + solar + wind combined still <5%. This is a tested statistic. Note the heavy fossil fuel dependence and the still-small renewable share.",
    sourceCitation: "Standard environmental science curriculum" },

  // Hard
  { id: "ENV6A-Q013", sectionId: "ENV-6", topicId: "env-energy-sources", difficulty: "hard", type: "single",
    question: "Why is the comparison 'nuclear vs renewables' not straightforward?",
    options: [
      "They produce the same emissions",
      "They have different profiles — nuclear is high-carbon-output-low but has waste/safety issues; renewables are low-output but have intermittency/land issues",
      "Renewables are always cheaper",
      "Nuclear is always safer"
    ],
    correctAnswer: 1,
    explanation: "The comparison isn't straightforward because they have DIFFERENT profiles: nuclear has very low operational carbon and reliable baseload power, BUT has long-lived waste, safety concerns, and high upfront costs. Renewables are operationally clean with no waste, BUT have intermittency (sun doesn't shine at night, wind doesn't always blow) and land-use needs. The 'best' depends on what you prioritize. Neither is perfect — and that's why energy mixes are common.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6A-Q014", sectionId: "ENV-6", topicId: "env-energy-sources", difficulty: "hard", type: "single",
    question: "Why are ENERGY MIXES (using multiple sources together) generally preferred over single-source dependence?",
    options: [
      "Mixes are cheaper",
      "Different sources have different strengths and weaknesses; combining them provides reliability, security, and reduced single-risk exposure",
      "Single sources are illegal",
      "Mixes produce less energy"
    ],
    correctAnswer: 1,
    explanation: "Energy mixes are preferred because different sources have different strengths: solar/wind for clean baseload, hydro for flexibility, gas for backup, nuclear for stability. Combining them provides grid reliability, energy security (less dependence on any one source), and reduces risk if one source fails. Pakistan's mix is currently fossil-heavy, but diversification toward renewables is the goal.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6A-Q015", sectionId: "ENV-6", topicId: "env-energy-sources", difficulty: "hard", type: "multi",
    question: "Which of the following are CORRECT about energy-environment tradeoffs? (Select all that apply.)",
    options: [
      "Coal has the worst overall environmental profile among major energy sources",
      "Nuclear has zero operational CO₂ but produces long-lived radioactive waste",
      "Hydroelectric has high land use (flooded valleys)",
      "Natural gas has the lowest CO₂ among fossil fuels but still produces significant CO₂"
    ],
    correctAnswer: [0, 1, 2, 3],
    explanation: "All four are correct. (a) Coal: highest CO₂, high air pollution, high water, high land, waste. (b) Nuclear: zero operational CO₂, but long-lived waste and safety concerns. (c) Hydro: high land use due to reservoirs. (d) Natural gas: lowest CO₂ among fossil fuels, but still significant (about half of coal). All are true tradeoffs — no source is perfect.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6A-Q016", sectionId: "ENV-6", topicId: "env-energy-sources", difficulty: "hard", type: "single",
    question: "Choose the CORRECT statement about Pakistan's energy future:",
    options: [
      "Pakistan should rely primarily on coal for development",
      "Pakistan's 2060 net-zero target requires a major transition to renewables, efficiency, and possibly nuclear",
      "Pakistan's gas reserves are unlimited",
      "Pakistan has no renewable energy potential"
    ],
    correctAnswer: 1,
    explanation: "Pakistan's 2060 net-zero target (announced 2021) requires a major energy transition: shift from coal/gas to renewables (solar, wind, hydro), improve efficiency, and consider nuclear. Pakistan's gas reserves ARE limited (depleting). Pakistan HAS significant renewable potential (solar in Thar, wind in Gharo-Jhimpir corridor, hydro in north). Relying on coal is the OPPOSITE of net-zero progress.",
    sourceCitation: "Standard environmental science curriculum" },

  // TOPIC 2: Climate Change Response
  // ───────────────────────────────────────────────────────

  // Easy
  { id: "ENV6B-Q001", sectionId: "ENV-6", topicId: "env-climate-change-response", difficulty: "easy", type: "single",
    question: "The two main strategies for responding to climate change are:",
    options: [
      "Adaptation and ignoring",
      "Mitigation and adaptation",
      "Carbon and oxygen",
      "Prevention and reaction"
    ],
    correctAnswer: 1,
    explanation: "MITIGATION (reducing emissions to limit future warming) and ADAPTATION (adjusting to the warming that's already happening) are the two main climate response strategies. They are complementary, not alternatives — both are needed.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6B-Q002", sectionId: "ENV-6", topicId: "env-climate-change-response", difficulty: "easy", type: "true_false",
    question: "Adaptation means reducing greenhouse gas emissions to limit future warming.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. That's MITIGATION. Adaptation means ADJUSTING to the effects of climate change that are already happening — drought-resistant crops, seawalls, early warning systems, etc. Mitigation tackles the CAUSE (emissions); adaptation copes with the EFFECTS (impacts).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6B-Q003", sectionId: "ENV-6", topicId: "env-climate-change-response", difficulty: "easy", type: "single",
    question: "Growing drought-resistant crops is an example of:",
    options: ["Mitigation", "Adaptation", "Carbon capture", "Geoengineering"],
    correctAnswer: 1,
    explanation: "Drought-resistant crops are an example of ADAPTATION — adjusting agricultural practices to cope with changing climate conditions. Mitigation would be reducing the emissions that cause climate change in the first place. Adaptation is about dealing with the impacts, not preventing the cause.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6B-Q004", sectionId: "ENV-6", topicId: "env-climate-change-response", difficulty: "easy", type: "single",
    question: "The VULNERABILITY formula is:",
    options: [
      "Vulnerability = Exposure − Sensitivity + Adaptive Capacity",
      "Vulnerability = Exposure + Sensitivity − Adaptive Capacity",
      "Vulnerability = Sensitivity + Adaptive Capacity",
      "Vulnerability = Exposure × Sensitivity"
    ],
    correctAnswer: 1,
    explanation: "Vulnerability = Exposure + Sensitivity − Adaptive Capacity. High exposure (to climate hazards) + high sensitivity (to those hazards) − low adaptive capacity (ability to cope) = high vulnerability. Pakistan has high vulnerability because of high exposure (floods, heatwaves) + high sensitivity (agriculture-dependent) − relatively low adaptive capacity (financial resources).",
    sourceCitation: "Standard environmental science curriculum" },

  // Medium
  { id: "ENV6B-Q005", sectionId: "ENV-6", topicId: "env-climate-change-response", difficulty: "medium", type: "single",
    question: "Which of the following is an example of MITIGATION?",
    options: [
      "Building a seawall to protect against sea level rise",
      "Switching from coal power plants to solar farms",
      "Developing drought-resistant crop varieties",
      "Creating an early warning system for heatwaves"
    ],
    correctAnswer: 1,
    explanation: "MITIGATION = reducing emissions. Switching from coal to solar is mitigation — it reduces the greenhouse gases causing climate change. The other options (seawall, drought-resistant crops, early warning) are ADAPTATION — they help cope with the impacts but don't reduce the cause.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6B-Q006", sectionId: "ENV-6", topicId: "env-climate-change-response", difficulty: "medium", type: "single",
    question: "Why is Pakistan consistently ranked in the top 10 most climate-vulnerable countries?",
    options: [
      "It has the highest emissions",
      "High exposure to extreme weather + high sensitivity (agriculture-dependent) + low adaptive capacity",
      "It has the largest population",
      "It is the poorest country"
    ],
    correctAnswer: 1,
    explanation: "Pakistan's high vulnerability = high EXPOSURE (floods, heatwaves, droughts) + high SENSITIVITY (agriculture = 21% of GDP, Indus-dependent) − LOW adaptive capacity (financial/technical resources). It's not the highest emitter in absolute terms (China, USA, India are), but its COMBINATION of exposure + sensitivity + low capacity makes it especially vulnerable. The Germanwatch Climate Risk Index confirms this.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6B-Q007", sectionId: "ENV-6", topicId: "env-climate-change-response", difficulty: "medium", type: "single",
    question: "REDD+ is a UN framework that:",
    options: [
      "Reduces Emissions from Deforestation and Forest Degradation — pays developing countries to protect forests",
      "Is a type of solar panel",
      "Reduces ozone depletion",
      "Is a climate denial movement"
    ],
    correctAnswer: 0,
    explanation: "REDD+ = Reducing Emissions from Deforestation and Forest Degradation (plus conservation and sustainable management of forests). It pays developing countries (with forests) to NOT cut them down, providing financial incentive for forest conservation. It's a win-win for climate (forests are carbon sinks) and biodiversity.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6B-Q008", sectionId: "ENV-6", topicId: "env-climate-change-response", difficulty: "medium", type: "true_false",
    question: "Anticipatory adaptation (acting BEFORE climate impacts occur) is preferred over reactive adaptation (acting after).",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Anticipatory adaptation (e.g., building sea walls NOW in anticipation of sea level rise) is generally preferred because it is usually cheaper and more effective than reactive adaptation (e.g., disaster relief AFTER a flood hits). Pre-emptive action saves lives and money.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6B-Q009", sectionId: "ENV-6", topicId: "env-climate-change-response", difficulty: "medium", type: "single",
    question: "Which of the following is a CARBON PRICING mechanism?",
    options: [
      "Carbon tax on emissions",
      "Subsidies for fossil fuels",
      "Burning more coal",
      "Deforestation"
    ],
    correctAnswer: 0,
    explanation: "Carbon pricing = putting a price on carbon emissions to incentivize reduction. Methods: carbon tax (price per ton of CO₂ emitted) or cap-and-trade (set a cap, trade permits). Both make polluters pay and create financial incentive to reduce emissions. Subsidizing fossil fuels does the opposite.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6B-Q010", sectionId: "ENV-6", topicId: "env-climate-change-response", difficulty: "medium", type: "multi",
    question: "Which of the following are examples of MITIGATION? (Select all that apply.)",
    options: [
      "Switching from coal to solar power",
      "Carbon tax on industrial emissions",
      "Planting trees to absorb CO₂ (REDD+)",
      "Building a seawall against sea level rise"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "(a) Mitigation: switching to renewables reduces emissions. (b) Mitigation: carbon pricing incentivizes reduction. (c) Mitigation: REDD+ keeps forests intact, preserving their carbon storage. (d) WRONG: a seawall is ADAPTATION (coping with impacts), not mitigation (reducing cause).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6B-Q011", sectionId: "ENV-6", topicId: "env-climate-change-response", difficulty: "medium", type: "single",
    question: "What is 'autonomous' adaptation?",
    options: [
      "Adaptation that happens naturally or spontaneously, without deliberate policy intervention",
      "Adaptation that requires government approval",
      "Adaptation by autonomous vehicles",
      "Adaptation by robots"
    ],
    correctAnswer: 0,
    explanation: "Autonomous adaptation = natural or spontaneous adjustments by ecosystems, communities, or individuals WITHOUT deliberate government policy. Examples: farmers changing crop varieties on their own in response to changing rainfall, ecosystems migrating poleward as temperatures rise. PLANNED adaptation is deliberate policy-driven. Autonomous is reactive and piecemeal; planned is more coordinated.",
    sourceCitation: "Standard environmental science curriculum" },

  // Hard
  { id: "ENV6B-Q012", sectionId: "ENV-6", topicId: "env-climate-change-response", difficulty: "hard", type: "single",
    question: "Why is MITIGATION alone insufficient to address climate change?",
    options: [
      "Mitigation is too expensive",
      "Even with aggressive mitigation, past emissions have locked in some warming and impacts (sea level rise, glacier melt) that will continue for decades — adaptation is needed too",
      "Mitigation is illegal",
      "There are no mitigation technologies"
    ],
    correctAnswer: 1,
    explanation: "Even with immediate and aggressive mitigation, past emissions have already committed the Earth to additional warming and impacts (sea level rise continues for centuries, glaciers continue to melt, ocean acidification continues). Adaptation is needed to cope with the warming that's already locked in. Both strategies are essential — mitigation prevents future catastrophe, adaptation copes with current/inevitable impacts.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6B-Q013", sectionId: "ENV-6", topicId: "env-climate-change-response", difficulty: "hard", type: "multi",
    question: "Which of the following are CORRECT about climate response? (Select all that apply.)",
    options: [
      "Mitigation = reducing emissions; Adaptation = adjusting to impacts",
      "Vulnerability = Exposure + Sensitivity − Adaptive Capacity",
      "Pakistan ranks in top 10 most climate-vulnerable countries",
      "REDD+ pays developing countries to protect forests"
    ],
    correctAnswer: [0, 1, 2, 3],
    explanation: "All four are correct. (a) Mitigation vs adaptation distinction. (b) Vulnerability formula. (c) Pakistan in top 10 (Germanwatch). (d) REDD+ = Reducing Emissions from Deforestation — pays countries to protect forests.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6B-Q014", sectionId: "ENV-6", topicId: "env-climate-change-response", difficulty: "hard", type: "single",
    question: "Why is GEOENGINEERING controversial as a climate response strategy?",
    options: [
      "It is too cheap",
      "Large-scale intentional intervention in the climate system (e.g., solar radiation management) has unknown side effects, doesn't address root cause, and creates governance/equity issues (who decides to deploy it?)",
      "It is illegal everywhere",
      "It is fully proven to work"
    ],
    correctAnswer: 1,
    explanation: "Geoengineering (like solar radiation management — putting reflective particles in the stratosphere to cool the planet) is controversial because: (1) UNKNOWN side effects on weather patterns, (2) it doesn't reduce emissions (doesn't address root cause), (3) governance issues — who decides to deploy it globally, and (4) it could be 'terminated suddenly' causing rapid warming. It might be needed as emergency backup but should not replace mitigation.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6B-Q015", sectionId: "ENV-6", topicId: "env-climate-change-response", difficulty: "hard", type: "single",
    question: "Choose the CORRECT statement about climate response in Pakistan:",
    options: [
      "Pakistan should focus only on adaptation (not mitigation) because it emits little",
      "Pakistan needs BOTH mitigation (transitioning from coal/gas) AND adaptation (preparing for floods/heatwaves), as stated in its National Climate Change Policy",
      "Pakistan's climate policy is a failure",
      "Pakistan has no climate policy"
    ],
    correctAnswer: 1,
    explanation: "Pakistan's National Climate Change Policy (2012) and NDCs emphasize BOTH mitigation and adaptation. Mitigation is needed because Pakistan's emissions are growing (from coal, industry, transport) and contribute to global warming. Adaptation is needed because Pakistan is highly vulnerable to climate impacts (floods, heatwaves, glacier melt). The policy is comprehensive — addressing both, not either-or.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6B-Q016", sectionId: "ENV-6", topicId: "env-climate-change-response", difficulty: "hard", type: "single",
    question: "Why is 'common but differentiated responsibilities' (CBDR) important in international climate policy?",
    options: [
      "It means all countries do exactly the same thing",
      "It acknowledges that developed countries have HISTORICALLY contributed more to the problem AND have greater financial/technical capacity — so they should take the lead in mitigation AND support developing countries",
      "It is a useless phrase",
      "It means developing countries do nothing"
    ],
    correctAnswer: 1,
    explanation: "CBDR is a core principle of the UNFCCC and Paris Agreement. It recognizes that developed countries (US, EU) have HISTORICALLY emitted the most greenhouse gases AND have greater capacity to act. So they should: (1) take the LEAD in cutting emissions, (2) provide climate finance to developing countries ($100B/yr pledge), (3) transfer green technology. Developing countries have lower historical responsibility but face the worst impacts (irony of climate injustice).",
    sourceCitation: "Standard environmental science curriculum" },

  // TOPIC 3: International Climate Policy
  // ───────────────────────────────────────────────────────

  // Easy
  { id: "ENV6C-Q001", sectionId: "ENV-6", topicId: "env-international-climate-policy", difficulty: "easy", type: "single",
    question: "The main current international climate agreement is the:",
    options: ["Kyoto Protocol", "UNFCCC", "Paris Agreement", "Montreal Protocol"],
    correctAnswer: 2,
    explanation: "The PARIS AGREEMENT (2015) is the current main international climate agreement. It superseded the Kyoto Protocol (1997) as the primary framework. The UNFCCC (1992) is the parent treaty. The Montreal Protocol is about ozone, not climate.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6C-Q002", sectionId: "ENV-6", topicId: "env-international-climate-policy", difficulty: "easy", type: "single",
    question: "The Paris Agreement's main temperature target is:",
    options: [
      "Well below 2°C, pursuing 1.5°C",
      "Below 4°C",
      "Exactly 2°C",
      "No specific target"
    ],
    correctAnswer: 0,
    explanation: "The Paris Agreement aims to limit global warming to WELL BELOW 2°C, and to PURSUE efforts to limit it to 1.5°C. The 1.5°C target reflects the recognition that even 2°C of warming brings significant risks (coral reefs, sea ice, extreme heat). Current policies put us on track for ~2.5-3°C of warming — well above the Paris targets.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6C-Q003", sectionId: "ENV-6", topicId: "env-international-climate-policy", difficulty: "easy", type: "true_false",
    question: "The UNFCCC (United Nations Framework Convention on Climate Change) was established in 1992 at the Rio Earth Summit.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. The UNFCCC was opened for signature at the 1992 Earth Summit in Rio de Janeiro (hence often called the 'Rio Convention'). It established the basic framework for international climate negotiations and the principle of 'common but differentiated responsibilities.' The Kyoto Protocol (1997) and Paris Agreement (2015) are protocols under the UNFCCC.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6C-Q004", sectionId: "ENV-6", topicId: "env-international-climate-policy", difficulty: "easy", type: "single",
    question: "NDCs in the Paris Agreement stand for:",
    options: [
      "National Defense Commitments",
      "Nationally Determined Contributions",
      "Net Developed Countries",
      "New Direct Climate plans"
    ],
    correctAnswer: 1,
    explanation: "NDCs = Nationally Determined Contributions — each country's own stated climate targets and plans, submitted to the UN. The Paris Agreement requires every country to submit NDCs and to update them every 5 years with increasing ambition. This is the core mechanism of the Paris Agreement.",
    sourceCitation: "Standard environmental science curriculum" },

  // Medium
  { id: "ENV6C-Q005", sectionId: "ENV-6", topicId: "env-international-climate-policy", difficulty: "medium", type: "single",
    question: "The Global Stocktake in the Paris Agreement occurs:",
    options: [
      "Every year",
      "Every 5 years",
      "Every 10 years",
      "Only once"
    ],
    correctAnswer: 1,
    explanation: "The Global Stocktake occurs every 5 YEARS to assess collective progress toward Paris Agreement goals. The first one was completed at COP28 (2023) and concluded the world is OFF TRACK. Countries are then expected to update their NDCs with greater ambition in the next cycle.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6C-Q006", sectionId: "ENV-6", topicId: "env-international-climate-policy", difficulty: "medium", type: "single",
    question: "The Loss and Damage Fund was established at which COP?",
    options: ["COP21 (Paris, 2015)", "COP26 (Glasgow, 2021)", "COP27 (Sharm el-Sheikh, 2022)", "COP28 (UAE, 2023)"],
    correctAnswer: 2,
    explanation: "The Loss and Damage Fund was established at COP27 in Sharm el-Sheikh, Egypt (2022). It acknowledges that vulnerable countries need compensation for climate impacts they did not cause. The fund was operationalized at COP28 (2023). This was a major breakthrough for vulnerable nations like Pakistan who have suffered huge climate-related losses (2010, 2022 floods).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6C-Q007", sectionId: "ENV-6", topicId: "env-international-climate-policy", difficulty: "medium", type: "single",
    question: "The $100 billion/year climate finance pledge from developed to developing countries has been:",
    options: [
      "Fully met every year since 2009",
      "Mostly unfulfilled — actual delivery has fallen short, and the pledge was only finally fully met around 2022",
      "Cancelled by the Paris Agreement",
      "Doubled by the Paris Agreement"
    ],
    correctAnswer: 1,
    explanation: "The $100 billion/year climate finance pledge from developed to developing countries (made in 2009 at COP15 Copenhagen) was MOSTLY UNFULFILLED for over a decade. The actual delivery fell significantly short. It was only around 2022 that the pledge was reportedly fully met. This is a key criticism of climate negotiations — the promises haven't matched the action. The Paris Agreement reaffirmed this $100B goal (later updated to a new collective finance goal).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6C-Q008", sectionId: "ENV-6", topicId: "env-international-climate-policy", difficulty: "medium", type: "single",
    question: "COP28 (2023, UAE) was significant because:",
    options: [
      "It was the first COP",
      "It completed the first Global Stocktake (concluded world is OFF TRACK) and included language about 'transitioning away from fossil fuels'",
      "It abolished the UNFCCC",
      "It was the first climate agreement ever"
    ],
    correctAnswer: 1,
    explanation: "COP28 (2023, UAE) completed the FIRST Global Stocktake — a comprehensive assessment of collective progress toward Paris Agreement goals. The conclusion: the world is significantly OFF TRACK. For the first time, a COP agreement included explicit language about 'transitioning away from fossil fuels.' It also operationalized the Loss and Damage Fund agreed at COP27.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6C-Q009", sectionId: "ENV-6", topicId: "env-international-climate-policy", difficulty: "medium", type: "multi",
    question: "Which of the following are CORRECT features of the Paris Agreement? (Select all that apply.)",
    options: [
      "Limit warming to well below 2°C, pursue 1.5°C",
      "Every country submits NDCs",
      "Global Stocktake every 5 years",
      "It was signed in 2015"
    ],
    correctAnswer: [0, 1, 2, 3],
    explanation: "All four are correct. (a) Temperature target. (b) NDCs. (c) 5-year stocktake. (d) 2015. These are the core features of the Paris Agreement, the current main climate framework.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6C-Q010", sectionId: "ENV-6", topicId: "env-international-climate-policy", difficulty: "medium", type: "true_false",
    question: "The Kyoto Protocol (1997) imposed binding emission reduction targets on BOTH developed and developing countries.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. The Kyoto Protocol (1997) imposed binding targets ONLY ON DEVELOPED COUNTRIES (Annex I), based on the principle of 'common but DIFFERENTIATED responsibilities.' Developing countries (including China and India at the time) had no binding targets. This was a major point of contention — the USA never ratified Kyoto partly because it didn't cover rapidly industrializing developing countries.",
    sourceCitation: "Standard environmental science curriculum" },

  // Hard
  { id: "ENV6C-Q011", sectionId: "ENV-6", topicId: "env-international-climate-policy", difficulty: "hard", type: "single",
    question: "Why was the Copenhagen Accord (2009) significant despite being 'non-binding'?",
    options: [
      "It was the first climate agreement",
      "It first explicitly mentioned the goal of limiting warming to below 2°C, which became the basis for the Paris Agreement's 1.5-2°C target",
      "It set binding emissions caps",
      "It created the UNFCCC"
    ],
    correctAnswer: 1,
    explanation: "The Copenhagen Accord (2009) is significant because it was the first time world leaders explicitly acknowledged the need to limit warming to BELOW 2°C (aspirational, not legally binding). This 2°C target became the basis for the Paris Agreement's 'well below 2°C, pursue 1.5°C' formulation. So Copenhagen set the numerical target even though it was weak on binding commitments.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6C-Q012", sectionId: "ENV-6", topicId: "env-international-climate-policy", difficulty: "hard", type: "single",
    question: "Why is the first Global Stocktake (2023) result 'OFF TRACK' significant?",
    options: [
      "It is a meaningless report",
      "It confirms that current NDCs are insufficient to meet Paris targets, requiring increased ambition in the next NDC cycle (2025)",
      "It cancels the Paris Agreement",
      "It is only advisory with no impact"
    ],
    correctAnswer: 1,
    explanation: "The first Global Stocktake (completed at COP28, 2023) officially confirmed that current NDCs are INSUFFICIENT to meet Paris targets — the world is on track for 2.5-3°C warming, well above the 1.5-2°C goal. This finding requires countries to submit MORE AMBITIOUS NDCs in the next cycle (2025). It also added the 'transitioning away from fossil fuels' language — a first for a COP agreement.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6C-Q013", sectionId: "ENV-6", topicId: "env-international-climate-policy", difficulty: "hard", type: "multi",
    question: "Which of the following are CORRECT about the Paris Agreement and its mechanisms? (Select all that apply.)",
    options: [
      "It replaced the UNFCCC",
      "NDCs are the core submission mechanism",
      "The Global Stocktake is every 5 years",
      "Developed countries pledged $100 billion/year in climate finance (mostly unfulfilled)"
    ],
    correctAnswer: [1, 2, 3],
    explanation: "(a) WRONG: Paris Agreement is a protocol UNDER the UNFCCC, not a replacement. The UNFCCC (1992) is the parent treaty. (b) Correct: NDCs = Nationally Determined Contributions are each country's plan. (c) Correct: Global Stocktake every 5 years. (d) Correct: $100B/yr pledge from 2009, mostly unfulfilled until around 2022.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6C-Q014", sectionId: "ENV-6", topicId: "env-international-climate-policy", difficulty: "hard", type: "single",
    question: "What is the correct chronological order of major climate agreements?",
    options: [
      "Paris (2015) → UNFCCC (1992) → Kyoto (1997)",
      "UNFCCC (1992) → Kyoto (1997) → Paris (2015)",
      "Kyoto (1997) → Paris (2015) → UNFCCC (1992)",
      "UNFCCC (1992) → Paris (2015) → Kyoto (1997)"
    ],
    correctAnswer: 1,
    explanation: "Correct chronological order: 1992 UNFCCC (Rio Earth Summit, framework) → 1997 Kyoto Protocol (first binding targets for developed countries) → 2015 Paris Agreement (current main framework, all countries). The UNFCCC is the parent treaty; Kyoto and Paris are protocols/agreements under it.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6C-Q015", sectionId: "ENV-6", topicId: "env-international-climate-policy", difficulty: "hard", type: "single",
    question: "Why is the 'common but differentiated responsibilities' (CBDR) principle CONTROVERSIAL?",
    options: [
      "It is universally accepted without dispute",
      "Developing countries argue it's FAIR given historical emissions; developed countries argue it lets major emitters like China and India avoid commitments",
      "It only applies to small countries",
      "It has been removed from the Paris Agreement"
    ],
    correctAnswer: 1,
    explanation: "CBDR is controversial: DEVELOPING countries (including Pakistan) argue it's FAIR because developed countries (US, EU) have HISTORICALLY emitted the most greenhouse gases and should bear the primary burden. DEVELOPED countries sometimes argue it lets major current emitters like China and India avoid binding commitments, even though their emissions are now large. The Paris Agreement tried to balance this by requiring ALL countries to submit NDCs (universal participation) while still acknowledging historical responsibility through finance and technology transfer.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6C-Q016", sectionId: "ENV-6", topicId: "env-international-climate-policy", difficulty: "hard", type: "single",
    question: "Choose the CORRECT statement about Pakistan's role in international climate policy:",
    options: [
      "Pakistan has no climate commitments",
      "Pakistan is highly vulnerable and actively pushes for climate finance, Loss and Damage funding, and a just transition; it has 2060 net-zero target and updated NDCs",
      "Pakistan opposes all climate agreements",
      "Pakistan is a major emitter in absolute terms"
    ],
    correctAnswer: 1,
    explanation: "Pakistan is HIGHLY VULNERABLE to climate change (top 10 globally) but is NOT a major emitter in absolute terms (it's a developing country with relatively low per-capita emissions). Pakistan actively advocates for: (1) climate finance from developed countries, (2) the Loss and Damage Fund (it pushed hard for this), (3) a just energy transition. It has updated NDCs and a 2060 net-zero target. Its role is as a vulnerable nation seeking climate justice, not as a major emitter.",
    sourceCitation: "Standard environmental science curriculum" },

  // TOPIC 4: Ozone Depletion
  // ───────────────────────────────────────────────────────

  // Easy
  { id: "ENV6D-Q001", sectionId: "ENV-6", topicId: "env-ozone-depletion", difficulty: "easy", type: "single",
    question: "The Montreal Protocol (1987) was designed to protect the:",
    options: ["Ozone layer", "Rainforests", "Coral reefs", "Polar bears"],
    correctAnswer: 0,
    explanation: "The Montreal Protocol (1987) is the international agreement to protect the OZONE LAYER by phasing out ozone-depleting substances (mainly CFCs). It is considered the MOST SUCCESSFUL international environmental agreement. The Kigali Amendment (2016) extended it to also phase down HFCs (potent greenhouse gases).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6D-Q002", sectionId: "ENV-6", topicId: "env-ozone-depletion", difficulty: "easy", type: "true_false",
    question: "CFCs (chlorofluorocarbons) were the main cause of stratospheric ozone depletion.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. CFCs, used as refrigerants, propellants, and foam-blowing agents, drift up to the stratosphere where UV radiation breaks them down, releasing chlorine atoms. Each chlorine atom catalytically destroys up to ~100,000 ozone molecules. The Montreal Protocol phased out CFCs, and the ozone layer is now recovering.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6D-Q003", sectionId: "ENV-6", topicId: "env-ozone-depletion", difficulty: "easy", type: "single",
    question: "The ozone HOLE is most severe over:",
    options: ["The equator", "The Arctic", "Antarctica", "Tropical regions"],
    correctAnswer: 2,
    explanation: "The ozone hole is most severe over ANTARCTICA in Southern Hemisphere spring (Sept-Oct). Unique conditions — extreme cold, polar stratospheric clouds, and the polar vortex — enhance chlorine activation. The Arctic has milder ozone depletion; the equator has none. The 'hole' is technically a thinning of up to 70%.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6D-Q004", sectionId: "ENV-6", topicId: "env-ozone-depletion", difficulty: "easy", type: "single",
    question: "The Kigali Amendment (2016) to the Montreal Protocol addressed:",
    options: [
      "CFCs only",
      "HFCs (hydrofluorocarbons) — which are potent greenhouse gases used as CFC replacements",
      "CO₂ emissions from power plants",
      "Deforestation"
    ],
    correctAnswer: 1,
    explanation: "The Kigali Amendment (2016) added HFCs (hydrofluorocarbons) to the Montreal Protocol's controls. HFCs were introduced as CFC replacements (because they don't harm the ozone layer), but they turned out to be POTENT GREENHOUSE GASES (some with GWP thousands of times CO₂). The Amendment phases them down — a climate win on top of the ozone win.",
    sourceCitation: "Standard environmental science curriculum" },

  // Medium
  { id: "ENV6D-Q005", sectionId: "ENV-6", topicId: "env-ozone-depletion", difficulty: "medium", type: "single",
    question: "Approximately how many ozone molecules can ONE chlorine atom destroy (catalytic cycle)?",
    options: ["~100", "~1,000", "~10,000", "~100,000"],
    correctAnswer: 3,
    explanation: "ONE chlorine atom can destroy up to ~100,000 ozone molecules before it is removed from the stratosphere. This is because chlorine acts as a CATALYST in the destruction reaction — it is regenerated, not consumed. This is why even small amounts of CFCs (which release chlorine) can cause massive ozone depletion.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6D-Q006", sectionId: "ENV-6", topicId: "env-ozone-depletion", difficulty: "medium", type: "single",
    question: "The Montreal Protocol is considered the MOST SUCCESSFUL international environmental agreement because:",
    options: [
      "It is the oldest",
      "It was ratified by every country in the world and the ozone layer is RECOVERING as a direct result",
      "It has the most money",
      "It includes all pollutants"
    ],
    correctAnswer: 1,
    explanation: "The Montreal Protocol is the gold standard of international environmental cooperation because: (1) UNIVERSAL ratification — every country in the world joined, (2) CLEAR SCIENTIFIC EVIDENCE (ozone hole) created political will, (3) INDUSTRY SUPPORTED phaseout (CFC replacements were available), (4) ADAPTIVE — the Kigali Amendment was added. The result: the ozone layer is RECOVERING. This is often cited as proof that international environmental agreements CAN work.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6D-Q007", sectionId: "ENV-6", topicId: "env-ozone-depletion", difficulty: "medium", type: "single",
    question: "When is the ozone layer expected to FULLY recover?",
    options: [
      "Already recovered (now)",
      "Around 2050-2066 (depending on region)",
      "Never (irreversible damage)",
      "Only if we stop all pollution"
    ],
    correctAnswer: 1,
    explanation: "The ozone layer is RECOVERING — full recovery is expected around 2066 over Antarctica and around 2050 for the rest of the world, provided compliance with the Montreal Protocol continues. This is one of the great environmental success stories. The Antarctic hole is seasonal and should gradually close as CFCs are removed from the stratosphere (they take decades to break down and dissipate).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6D-Q008", sectionId: "ENV-6", topicId: "env-ozone-depletion", difficulty: "medium", type: "true_false",
    question: "Stratospheric ozone is harmful to human health; tropospheric ozone is protective.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "FALSE — it's the OPPOSITE. Stratospheric ozone (the ozone layer, 15-35 km up) is PROTECTIVE — it absorbs harmful UV-B and UV-C radiation. Tropospheric ozone (ground level) is HARMFUL — it's a pollutant that damages lungs and plants. Same molecule (O₃), different altitude, opposite effects. The ozone HOLE refers to the protective stratospheric layer being depleted.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6D-Q009", sectionId: "ENV-6", topicId: "env-ozone-depletion", difficulty: "medium", type: "multi",
    question: "Which of the following are CORRECT facts about ozone depletion? (Select all that apply.)",
    options: [
      "CFCs release chlorine that catalytically destroys ozone",
      "The ozone hole is most severe over Antarctica",
      "One chlorine atom can destroy ~100,000 ozone molecules",
      "The Montreal Protocol is the most successful international environmental agreement"
    ],
    correctAnswer: [0, 1, 2, 3],
    explanation: "All four are correct. (a) CFCs release chlorine → catalytic ozone destruction. (b) Ozone hole worst over Antarctica (cold + polar vortex + PSCs). (c) One Cl atom destroys up to ~100,000 O₃ molecules. (d) Montreal Protocol = gold standard of international environmental cooperation (universal ratification, ozone layer recovering).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6D-Q010", sectionId: "ENV-6", topicId: "env-ozone-depletion", difficulty: "medium", type: "single",
    question: "Polar Stratospheric Clouds (PSCs) are important in ozone depletion because:",
    options: [
      "They block sunlight from the surface",
      "They provide surfaces for chemical reactions that release active chlorine from reservoir compounds",
      "They reflect UV radiation",
      "They are made of ozone"
    ],
    correctAnswer: 1,
    explanation: "PSCs are ice clouds that form in the extremely cold Antarctic stratosphere (winter). They provide SURFACES for heterogeneous chemical reactions that release active chlorine (from reservoir compounds like HCl and ClONO₂). This activated chlorine then destroys ozone when sunlight returns in spring — driving the seasonal Antarctic ozone hole.",
    sourceCitation: "Standard environmental science curriculum" },

  // Hard
  { id: "ENV6D-Q011", sectionId: "ENV-6", topicId: "env-ozone-depletion", difficulty: "hard", type: "single",
    question: "Why was the Montreal Protocol able to succeed where the Kyoto Protocol largely failed?",
    options: [
      "It had more money",
      "Clear scientific evidence (ozone hole) + industry support (CFC replacements available) + universal participation + adaptive management",
      "It was a smaller agreement",
      "It was for a less important issue"
    ],
    correctAnswer: 1,
    explanation: "The Montreal Protocol succeeded where Kyoto failed because of multiple enabling factors: (1) DRAMATIC and SIMPLE visual evidence (the ozone hole), (2) INDUSTRY SUPPORT — CFC replacements (HCFCs, HFCs) were available, (3) UNIVERSAL ratification (every country), (4) ADAPTIVE — the Kigali Amendment added HFCs. Kyoto, by contrast, had: less dramatic evidence, fewer ready alternatives, partial participation (US didn't ratify), and was seen as unfair by developing countries. The lesson for climate policy: clear science + industry buy-in + universality are essential.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6D-Q012", sectionId: "ENV-6", topicId: "env-ozone-depletion", difficulty: "hard", type: "multi",
    question: "Which of the following are CORRECT distinctions about ozone? (Select all that apply.)",
    options: [
      "Stratospheric O₃ is protective; tropospheric O₃ is a pollutant",
      "CFCs were phased out under the Montreal Protocol",
      "HFCs (CFC replacements) are being phased down under the Kigali Amendment because they are potent greenhouse gases",
      "The ozone layer is recovering and expected to fully heal by mid-century"
    ],
    correctAnswer: [0, 1, 2, 3],
    explanation: "All four are correct. (a) Stratospheric protects, tropospheric pollutes. (b) CFCs phased out under Montreal Protocol (1987). (c) HFCs (CFC replacements) are potent GHGs being phased down under Kigali Amendment (2016). (d) The ozone layer IS recovering — full recovery expected by ~2050-2066. This is a conservation success story.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6D-Q013", sectionId: "ENV-6", topicId: "env-ozone-depletion", difficulty: "hard", type: "single",
    question: "HFCs were introduced as CFC replacements but became a climate concern because:",
    options: [
      "They destroy the ozone layer even more",
      "They are potent greenhouse gases (some with GWP thousands of times CO₂)",
      "They are toxic to humans",
      "They cause acid rain"
    ],
    correctAnswer: 1,
    explanation: "HFCs (hydrofluorocarbons) were developed to replace CFCs because they don't contain chlorine and don't harm the ozone layer. However, they turned out to be VERY POTENT GREENHOUSE GASES — some HFCs have Global Warming Potential (GWP) of thousands of times that of CO₂. So the Kigali Amendment (2016) was added to the Montreal Protocol to phase them down too. This is a 'win-win' for climate AND ozone.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6D-Q014", sectionId: "ENV-6", topicId: "env-ozone-depletion", difficulty: "hard", type: "single",
    question: "Why is the Antarctic ozone hole SEASONAL (worst in September-October)?",
    options: [
      "Antarctic wildlife breathes ozone",
      "Cold winter temperatures create polar stratospheric clouds; sunlight returns in spring, triggering massive ozone destruction",
      "Antarctic has more CFCs",
      "The ozone forms in summer only"
    ],
    correctAnswer: 1,
    explanation: "The seasonal nature comes from the COMBINATION of: (1) extremely cold Antarctic winter stratospheric temperatures (-78°C) which form Polar Stratospheric Clouds (PSCs), (2) these PSCs provide surfaces for heterogeneous reactions that release active chlorine from reservoir compounds (HCl, ClONO₂), (3) sunlight returns in Southern Hemisphere spring (Sept-Oct), triggering the chlorine-catalyzed ozone destruction, (4) the polar vortex traps the chlorine over Antarctica. The result: massive ozone loss in spring, partial recovery in summer when PSC surfaces disappear.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6D-Q015", sectionId: "ENV-6", topicId: "env-ozone-depletion", difficulty: "hard", type: "single",
    question: "Choose the CORRECT statement about the Montreal Protocol and ozone recovery:",
    options: [
      "The ozone hole is permanent and will never heal",
      "The Montreal Protocol's success is causing the ozone layer to RECOVER, with full recovery expected by ~2050-2066",
      "CFCs are still being produced legally",
      "The ozone layer was never actually damaged"
    ],
    correctAnswer: 1,
    explanation: "The Montreal Protocol's universal participation and CFC phase-out IS causing the ozone layer to RECOVER. Full recovery is expected around 2050 for most of the world and 2066 for the Antarctic (where the hole has been most severe). This is one of the great environmental success stories. CFCs have been phased out (legally banned in production), and the layer is healing.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6D-Q016", sectionId: "ENV-6", topicId: "env-ozone-depletion", difficulty: "hard", type: "single",
    question: "What lesson does the Montreal Protocol success offer for current CLIMATE change policy?",
    options: [
      "International agreements never work",
      "Clear science + industry buy-in + universal participation + adaptive management CAN work; the climate challenge is harder because fossil fuels have no easy drop-in replacement like CFCs did",
      "Ozone and climate are unrelated",
      "CFCs were the main cause of global warming"
    ],
    correctAnswer: 1,
    explanation: "The Montreal Protocol offers hope: international environmental agreements CAN work when there is clear science (ozone hole), industry support (CFC replacements available), and universal participation. The climate challenge is HARDER because: (1) fossil fuels have NO easy drop-in replacement (unlike CFCs → HCFCs → HFCs), (2) the energy system is much larger and more entrenched, (3) economic interests are bigger. But the principles — clear targets, universal participation, regular review — are the same.",
    sourceCitation: "Standard environmental science curriculum" },

  // TOPIC 5: Pakistan's Environmental Context
  // ───────────────────────────────────────────────────────

  // Easy
  { id: "ENV6E-Q001", sectionId: "ENV-6", topicId: "env-pakistan-environmental-context", difficulty: "easy", type: "single",
    question: "Pakistan's per capita water availability has dropped to approximately:",
    options: ["100 m³", "500 m³", "1,000 m³", "5,000 m³"],
    correctAnswer: 2,
    explanation: "Pakistan's per capita water availability has dropped from ~5,000 m³ (at independence in 1947) to ~1,000 m³ today — approaching the 'water scarce' threshold of 1,000 m³ per person per year. This reflects population growth, agricultural demand, and water management issues. This is a frequently-tested statistic.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6E-Q002", sectionId: "ENV-6", topicId: "env-pakistan-environmental-context", difficulty: "easy", type: "true_false",
    question: "Pakistan's 2010 floods affected approximately 20 million people, and the 2022 floods affected approximately 33 million people.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. The 2010 super floods (~20 million affected, ~2,000 deaths) and 2022 super floods (~33 million affected, ~1,700 deaths) were both caused by extreme monsoon rainfall, compounded by glacier melt and poor infrastructure. These are Pakistan's worst modern climate disasters, demonstrating the country's extreme climate vulnerability.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6E-Q003", sectionId: "ENV-6", topicId: "env-pakistan-environmental-context", difficulty: "easy", type: "single",
    question: "Pakistan's net-zero target year is:",
    options: ["2030", "2040", "2060", "2100"],
    correctAnswer: 2,
    explanation: "Pakistan announced a net-zero target for 2060 at COP26 (Glasgow, 2021). It's one of the few developing countries with a stated long-term net-zero goal. Implementation depends heavily on international climate finance, technology transfer, and a just energy transition away from coal and gas.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6E-Q004", sectionId: "ENV-6", topicId: "env-pakistan-environmental-context", difficulty: "easy", type: "single",
    question: "Which of the following is a Ramsar wetland in Pakistan?",
    options: ["Karachi", "Lal Suhara", "Lahore", "Islamabad"],
    correctAnswer: 1,
    explanation: "Lal Suhara (and other sites like Keenjhar Lake, Ucchali Lake) are Ramsar wetlands (Wetlands of International Importance) in Pakistan. Karachi, Lahore, and Islamabad are major cities, not Ramsar sites. Ramsar designation is an international recognition of wetland ecological importance.",
    sourceCitation: "Standard environmental science curriculum" },

  // Medium
  { id: "ENV6E-Q005", sectionId: "ENV-6", topicId: "env-pakistan-environmental-context", difficulty: "medium", type: "single",
    question: "Pakistan's National Climate Change Policy was first introduced in:",
    options: ["1992", "2002", "2012", "2022"],
    correctAnswer: 2,
    explanation: "Pakistan's National Climate Change Policy was first introduced in 2012. It was Pakistan's first comprehensive climate framework, focused on ADAPTATION (since Pakistan is a vulnerable developing country, not a major absolute emitter). The policy has been updated since, including NDCs (2016, 2021) and the 2060 net-zero target (2021).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6E-Q006", sectionId: "ENV-6", topicId: "env-pakistan-environmental-context", difficulty: "medium", type: "single",
    question: "Pakistan's 2015 Karachi heatwave killed approximately:",
    options: ["~200 people", "~2,000 people", "~20,000 people", "Very few people"],
    correctAnswer: 1,
    explanation: "The 2015 Karachi heatwave killed approximately 2,000 people, mostly from dehydration and heatstroke. It was one of the deadliest heatwaves in Pakistan's history. This, combined with the 2010 and 2022 floods, demonstrates the country's extreme climate vulnerability. Heatwaves are increasing in frequency and intensity with climate change.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6E-Q007", sectionId: "ENV-6", topicId: "env-pakistan-environmental-context", difficulty: "medium", type: "single",
    question: "Pakistan's 7,000+ glaciers are located in:",
    options: ["Karachi and Hyderabad", "Hindu Kush, Karakoram, and Himalaya", "Thar Desert", "Indus Plains"],
    correctAnswer: 1,
    explanation: "Pakistan's 7,000+ glaciers are in the northern mountain ranges: Hindu Kush, Karakoram, and Himalaya. These glaciers feed the Indus River system — Pakistan's lifeline. They are threatened by climate change (accelerated melting), which is a major long-term water security concern. The Karakoram glaciers are notable for a puzzling 'Karakoram anomaly' (stable or even gaining mass in some areas despite warming).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6E-Q008", sectionId: "ENV-6", topicId: "env-pakistan-environmental-context", difficulty: "medium", type: "true_false",
    question: "Pakistan is one of the top 10 most climate-vulnerable countries in the world.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Pakistan consistently ranks in the TOP 10 most climate-vulnerable countries globally (per the Germanwatch Climate Risk Index, multiple years). This is due to its combination of: high exposure (floods, heatwaves, droughts), high sensitivity (agriculture-dependent), and low adaptive capacity (financial/technical resources).",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6E-Q009", sectionId: "ENV-6", topicId: "env-pakistan-environmental-context", difficulty: "medium", type: "multi",
    question: "Which of the following are CORRECT facts about Pakistan's environment? (Select all that apply.)",
    options: [
      "Per capita water ~1,000 m³ (water-scarce threshold)",
      "Forest cover ~5% (vs. FAO 25% recommended)",
      "Top 10 most climate-vulnerable globally",
      "2022 floods affected ~33 million people"
    ],
    correctAnswer: [0, 1, 2, 3],
    explanation: "All four are correct. (a) Per capita water ~1,000 m³ = at the water-scarce threshold. (b) Forest cover only ~5% (one of lowest in Asia). (c) Top 10 climate-vulnerable (Germanwatch). (d) 2022 super floods ~33 million affected. These are all frequently-tested Pakistan environment statistics.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6E-Q010", sectionId: "ENV-6", topicId: "env-pakistan-environmental-context", difficulty: "medium", type: "single",
    question: "Which of the following is a CORRECT example of Pakistan's climate adaptation?",
    options: [
      "Building more coal power plants",
      "The 10 Billion Tree Tsunami reforestation program",
      "Increasing fossil fuel use",
      "Expanding deforestation"
    ],
    correctAnswer: 1,
    explanation: "The 10 Billion Tree Tsunami (expanded from the Billion Tree Tsunami) is a major reforestation program that serves BOTH climate mitigation (carbon sequestration) AND adaptation (reducing vulnerability to floods and heat). Building more coal plants or deforestation would WORSEN climate vulnerability. Tree planting is a clear positive example of climate response in Pakistan.",
    sourceCitation: "Standard environmental science curriculum" },

  // Hard
  { id: "ENV6E-Q011", sectionId: "ENV-6", topicId: "env-pakistan-environmental-context", difficulty: "hard", type: "single",
    question: "Why is glacier melt a particularly serious long-term concern for Pakistan?",
    options: [
      "Glaciers are pretty",
      "Pakistan's rivers (Indus) depend on glacier meltwater; loss of glaciers means long-term water security crisis for agriculture and drinking water",
      "Glaciers cause floods immediately",
      "Glaciers attract tourism"
    ],
    correctAnswer: 1,
    explanation: "Pakistan's rivers (especially the Indus) depend heavily on glacier meltwater from the Hindu Kush, Karakoram, and Himalaya. These glaciers are the country's 'water towers.' As they melt (accelerated by climate change), Pakistan faces a long-term WATER SECURITY CRISIS — initially more water (flooding), then progressively LESS water as glaciers shrink, threatening agriculture (which depends on Indus irrigation) and drinking water for ~220 million people. This is the most serious long-term climate impact for Pakistan.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6E-Q012", sectionId: "ENV-6", topicId: "env-pakistan-environmental-context", difficulty: "hard", type: "multi",
    question: "Which of the following are CORRECT explanations for Pakistan's high climate vulnerability? (Select all that apply.)",
    options: [
      "High exposure to floods, heatwaves, droughts",
      "High sensitivity (21% of GDP is agriculture, dependent on Indus)",
      "Low adaptive capacity (limited financial resources for adaptation)",
      "Pakistan is the world's largest GHG emitter"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "(a) Correct: high exposure to multiple climate hazards. (b) Correct: agriculture = 21% of GDP, very climate-sensitive, and the Indus system is vulnerable. (c) Correct: limited financial/technical resources to adapt. (d) WRONG: Pakistan is NOT the world's largest GHG emitter — that's China, followed by USA, India, EU, Russia. Pakistan is a vulnerable developing country with relatively low per-capita emissions.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6E-Q013", sectionId: "ENV-6", topicId: "env-pakistan-environmental-context", difficulty: "hard", type: "single",
    question: "Why are Pakistan's 2010 and 2022 'super floods' linked to climate change?",
    options: [
      "They were normal rainfall events",
      "Climate change is intensifying the monsoon — heavier rainfall in shorter periods overwhelms drainage and river systems, combined with glacier melt contributions",
      "They were caused by dam failures",
      "They happened by random chance"
    ],
    correctAnswer: 1,
    explanation: "The 2010 and 2022 'super floods' are linked to climate change in multiple ways: (1) warmer atmosphere holds more water vapor (7% more per 1°C — Clausius-Clapeyron), leading to more extreme rainfall events; (2) accelerated glacier melt in the north adds to river volume; (3) the monsoon is becoming more variable with longer dry periods and more intense wet periods. These are NOT normal events — they're part of a pattern of intensifying extremes.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6E-Q014", sectionId: "ENV-6", topicId: "env-pakistan-environmental-context", difficulty: "hard", type: "single",
    question: "Choose the CORRECT statement about Pakistan's environmental policy framework:",
    options: [
      "Pakistan has no environmental laws",
      "The 2012 National Climate Change Policy, the 2060 net-zero target, updated NDCs, and environmental institutions (Pak-EPA, IUCN, WWF) form a comprehensive framework — but implementation and finance remain challenges",
      "Pakistan's policies are fully implemented and effective",
      "Pakistan's only environmental institution is the army"
    ],
    correctAnswer: 1,
    explanation: "Pakistan HAS a comprehensive environmental policy framework: 2012 National Climate Change Policy, 2060 net-zero target, updated NDCs, environmental institutions (Pak-EPA, provincial EPAs, IUCN-Pakistan, WWF-Pakistan, SDPI, GCISC, PMD), and various protected areas (~30 national parks, Ramsar wetlands). The framework EXISTS, but IMPLEMENTATION is often weak due to limited resources, capacity, and political will. International climate finance and technology transfer are key needs.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6E-Q015", sectionId: "ENV-6", topicId: "env-pakistan-environmental-context", difficulty: "hard", type: "single",
    question: "What is the 'Karakoram Anomaly' mentioned in connection with Pakistan's glaciers?",
    options: [
      "The glaciers are growing extra fast",
      "Karakoram glaciers are stable or slightly gaining mass despite regional warming — a puzzle for glaciologists",
      "The mountains are sinking",
      "It refers to a river phenomenon"
    ],
    correctAnswer: 1,
    explanation: "The Karakoram Anomaly is the puzzling observation that Karakoram glaciers (in northern Pakistan) are stable or slightly GAINING mass in some areas, even as most other Himalayan and global glaciers are losing mass due to warming. The exact cause is debated — possibly increased snowfall, debris cover, or local climate factors. It is an active area of glaciologic research.",
    sourceCitation: "Standard environmental science curriculum" },

  { id: "ENV6E-Q016", sectionId: "ENV-6", topicId: "env-pakistan-environmental-context", difficulty: "hard", type: "single",
    question: "What is the BEST way to characterize Pakistan's overall environmental situation?",
    options: [
      "Pakistan is doing great environmentally",
      "Pakistan faces multiple interconnected challenges (air, water, forests, climate, waste) but has policies, institutions, and some success stories (Markhor recovery, 10 Billion Trees) — progress is uneven",
      "Pakistan is doomed",
      "Pakistan has no environmental issues"
    ],
    correctAnswer: 1,
    explanation: "Pakistan's environmental situation is MIXED: facing serious interconnected challenges (air pollution in cities, water scarcity, only 5% forest cover, climate vulnerability with floods and heatwaves), but also has policies (2012 NCC, 2060 net-zero), institutions (Pak-EPA, IUCN, WWF), and some success stories (Markhor recovery, 10 Billion Tree Tsunami). Progress is UNEVEN — some areas improving, others worsening. The honest picture is complicated, not all-good or all-bad.",
    sourceCitation: "Standard environmental science curriculum" }
];
