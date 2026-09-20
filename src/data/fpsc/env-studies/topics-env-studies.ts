import type { Topic } from '@/types';

export const topics: Topic[] = [
  {
    id: "env-fundamentals-and-sustainability",
    sectionId: "ENV-1",
    order: 1,
    title: "Environment, Key Distinctions & Sustainability",
    definition: "The environment encompasses all surrounding conditions (physical, chemical, biological) that affect an organism or group. Key distinctions (biotic vs abiotic, ecology vs ecosystem, habitat vs niche) are foundational vocabulary tested in nearly every exam.",
    keyFacts: [
      "Environment: surroundings affecting an organism; has four spheres — atmosphere (air), hydrosphere (water), lithosphere (rock/soil), biosphere (living things)",
      "Biotic = living (plants, animals, microbes); Abiotic = non-living (water, soil, light, temperature)",
      "Natural = from nature (volcanoes, storms); Anthropogenic = from humans (pollution, deforestation)",
      "Ecology = study of organism-environment relationships; Ecosystem = community + environment as a system; Environment = surroundings (study of one vs system vs surroundings — these are confused regularly)",
      "Population = same species in one area; Community = all species in one area; Habitat = where an organism lives; Niche = role/job of an organism in ecosystem",
      "Sustainability (Brundtland, 1987): 'Development that meets the needs of the present without compromising the ability of future generations to meet their own needs'",
      "Three pillars: economic, social, environmental (all must be balanced for true sustainability)",
      "Precautionary principle: when evidence is uncertain, take preventive action rather than wait for proof of harm",
      "Polluter-pays principle: the entity causing pollution should bear the cost of managing/remediating it",
      "Intergenerational equity: current generation shouldn't compromise the ability of future generations to meet their needs"
    ],
    explanationSections: [
      { heading: "Why the four-sphere framework matters", body: "Environmental problems don't stay in one sphere — air pollution (atmosphere) causes acid rain that affects water (hydrosphere) and soil (lithosphere) and harms organisms (biosphere). Understanding this interconnectedness is key to analyzing real environmental issues. Most exam questions test your ability to identify which sphere is affected or to trace a pollutant across spheres." },
      { heading: "The key distinctions table — pure exam fodder", body: "FPSC repeatedly tests these binary distinctions: biotic/abiotic, natural/anthropogenic, habitat/niche, population/community. They're easy marks IF you know them. Strategy: memorize them as PAIRS with contrasting definitions, not as isolated words. Example: 'Population = one species; Community = all species. Habitat = address; Niche = job.'" },
      { heading: "Brundtland and the three pillars", body: "The Brundtland definition (1987) is the most-quoted definition in environmental science. The three pillars (economic, social, environmental) mean that TRUE sustainability requires all three — a project that is environmentally sustainable but economically unviable isn't truly sustainable. This is tested as MCQ: 'A sustainable development project must balance which three aspects?' Answer: economic, social, environmental." }
    ],
    examPoints: [
      "Four spheres: atmosphere, hydrosphere, lithosphere, biosphere (order matters sometimes — atmo, hydro, litho, bio)",
      "Habitat = WHERE; Niche = WHAT (its role/job)",
      "Population = ONE species; Community = ALL species",
      "Biotic = living; Abiotic = non-living",
      "Brundtland 1987 is the most-quoted sustainability definition",
      "Precautionary principle: act before proof of harm"
    ],
    commonMistakes: [
      "Confusing 'ecology' (study) with 'ecosystem' (system) — ecology is the science; ecosystem is what it studies",
      "Thinking 'habitat' means 'job' — habitat is where, niche is what (its role)",
      "Believing sustainability = only environmental — needs all three pillars (economic + social + environmental)"
    ],
    relatedTopics: ["env-carry-capacity-and-footprint", "env-biodiversity", "env-natural-resources"],
    content: true,
  buildsOn: [],
  leadsTo: ["env-carry-capacity-and-footprint", "env-ecosystem-structure-and-energy-flow"],
  usedIn: ["env-carry-capacity-and-footprint", "env-climate-change-response"]
  },
  {
    id: "env-carry-capacity-and-footprint",
    sectionId: "ENV-1",
    order: 2,
    title: "Carrying Capacity, Ecological Footprint & Biocapacity",
    definition: "Carrying capacity is the maximum population an environment can sustain indefinitely. Ecological footprint measures the land/water area required to support a person's lifestyle. Biocapacity is Earth's regenerative capacity — when footprint exceeds biocapacity, we are in ecological overshoot.",
    keyFacts: [
      "Carrying capacity (K): the maximum population size of a species that an environment can sustain indefinitely, given available resources",
      "Limiting factors: food, water, space, shelter, predators, disease — whichever is scarcest determines K",
      "Logistic growth: population grows exponentially at first, then slows as it approaches K, leveling off (S-shaped curve)",
      "Exponential growth (J-shaped): no limits, continuous doubling — only happens short-term in nature (bacteria in lab, invasive species briefly)",
      "Ecological footprint: amount of productive land and water needed to support a person's (or population's) consumption and absorb their waste — measured in global hectares (gha)",
      "Earth Overshoot Day: the date each year when humanity has used all the resources Earth can regenerate in that year (recently early-to-mid August)",
      "Biocapacity: Earth's capacity to regenerate resources and absorb waste (forests, fisheries, cropland, grazing land, built-up land)",
      "Ecological overshoot: when humanity's footprint exceeds Earth's biocapacity — we are currently in overshoot",
      "Factors increasing footprint: high meat consumption, large home, car use, air travel, high waste generation",
      "Factors increasing carrying capacity: abundant resources, few predators/diseases, favorable climate; factors decreasing it: scarcity, competition, predation"
    ],
    explanationSections: [
      { heading: "Why carrying capacity matters", body: "Carrying capacity (K) is not fixed — it changes as conditions change. A deer population's K can increase with more food supply or decrease with disease. The logistic growth curve (S-shaped) shows population approaching K and then leveling off — this is the most realistic growth model in nature. Exponential (J-shaped) growth only happens when resources are unlimited, which is rare in nature." },
      { heading: "Footprint vs biocapacity — the key exam distinction", body: "These are often confused. FOOTPRINT is what we USE (humanity's demand on Earth). BIOCAPACITY is what Earth can REGENERATE (Earth's supply). When footprint > biocapacity, we're in ecological overshoot — using resources faster than they renew. The test often asks: 'What is overshoot?' Answer: when human demand exceeds Earth's regenerative capacity. Earth Overshoot Day marks when this happens each year." },
      { heading: "Pakistan and global context", body: "Pakistan's ecological footprint per capita is relatively low (about 0.7 gha), but its biocapacity per capita is also low (about 0.4 gha), meaning the country is in ecological deficit. The average world footprint (~2.7 gha) already exceeds world biocapacity (~1.6 gha), showing the entire planet is in overshoot. This concept links directly to climate change and resource scarcity topics." }
    ],
    examPoints: [
      "Carrying capacity (K) = max sustainable population",
      "Logistic growth = S-curve (with limits); Exponential = J-curve (no limits)",
      "Footprint = human demand; Biocapacity = Earth supply; Overshoot = demand > supply",
      "Earth Overshoot Day has been moving earlier each year (currently around August)",
      "Pakistan is in ecological deficit (footprint > biocapacity)"
    ],
    commonMistakes: [
      "Confusing footprint (human demand) with biocapacity (Earth's supply) — they are NOT the same thing",
      "Thinking carrying capacity is always fixed — it changes with conditions (food, predators, climate)",
      "Confusing exponential and logistic growth — exponential = unlimited (J-curve); logistic = limited (S-curve)"
    ],
    relatedTopics: ["env-fundamentals-and-sustainability", "env-biodiversity", "env-climate-change-response"],
    content: true,
  buildsOn: ["env-fundamentals-and-sustainability", "math-1-7", "math-1-8", "math-8-1"],
  leadsTo: ["env-ecosystem-structure-and-energy-flow", "env-natural-resources"],
  usedIn: ["env-natural-resources", "env-climate-change-response", "env-pakistan-environmental-context"]
  },
  {
    id: "env-ecosystem-structure-and-energy-flow",
    sectionId: "ENV-2",
    order: 1,
    title: "Ecosystems: Structure, Food Chains & Energy Flow",
    definition: "An ecosystem is a community of organisms interacting with their physical environment as a functional unit. Energy flows through ecosystems via food chains and webs, decreasing at each level due to the second law of thermodynamics (90% rule).",
    keyFacts: [
      "Producers (autotrophs): make food from sunlight — plants, algae, cyanobacteria",
      "Consumers (heterotrophs): eat others — primary (herbivores), secondary (carnivores eating herbivores), tertiary (top carnivores)",
      "Decomposers (saprotrophs): recycle dead matter — bacteria, fungi",
      "Food chain: LINEAR sequence (grass → rabbit → fox)",
      "Food web: MULTIPLE interconnected chains — more realistic because most species eat several things and are eaten by several things",
      "Trophic levels: producer (1st) → primary consumer (2nd) → secondary consumer (3rd) → tertiary consumer (4th)",
      "10% rule: only ~10% of energy transfers from one trophic level to the next; ~90% is lost as heat (via cellular respiration) or used for movement/metabolism",
      "Why top predators are rare: because only 10% of energy passes up each level, there isn't enough energy to support many individuals at the top — this is why tertiary consumers are few in number",
      "Nutrients (matter) CYCLE within ecosystems; energy FLOWS through (one-way)"
    ],
    explanationSections: [
      { heading: "Why the 10% rule matters", body: "Only about 10% of the energy at one trophic level is incorporated into the next level's biomass. The other 90% is lost as HEAT through cellular respiration, used in MOVEMENT and METABOLISM, or remains in undigested material. This is a direct consequence of the second law of thermodynamics (entropy always increases). The practical consequence: food chains rarely have more than 4-5 trophic levels — there simply isn't enough energy to support a 6th level." },
      { heading: "Food chains vs. food webs", body: "A food chain is LINEAR and SIMPLIFIED (grass → grasshopper → frog → snake → hawk). A food web is MULTIPLE interconnected chains and is much more realistic. Most organisms eat several things and are eaten by several others. The arrows in a food web always point in the direction of energy flow (from the eaten TO the eater)." },
      { heading: "Energy flows, matter cycles — the key distinction", body: "This is one of the most fundamental ecological principles. ENERGY flows through ecosystems in one direction (from sun → producers → consumers → lost as heat). It cannot be recycled. MATTER (nutrients like carbon, nitrogen, water) CYCLES within ecosystems — atoms are reused. This is why we need continuous solar energy input but not continuous matter input (matter is recycled through biogeochemical cycles, covered in the next topic)." }
    ],
    examPoints: [
      "Producers = autotrophs (make food); Consumers = heterotrophs (eat); Decomposers = recycle",
      "10% rule: ~10% energy transfer up each trophic level, ~90% lost as heat",
      "Arrows in food webs point in direction of energy flow (prey → predator)",
      "Energy flows, matter cycles — this is a test-favorite distinction"
    ],
    commonMistakes: [
      "Confusing producer/consumer — producers MAKE food (autotrophs); consumers EAT others (heterotrophs)",
      "Thinking food chain arrows point from eater to eaten — they point FROM eaten TO eater (energy flow direction)",
      "Believing 100% energy transfers up the food chain — only ~10% does, 90% is lost"
    ],
    relatedTopics: ["env-ecological-pyramids", "env-productivity-and-biogeochemical-cycles", "env-biodiversity"],
    content: true,
  buildsOn: ["env-fundamentals-and-sustainability", "phy-work-energy", "b-heat-transfer"],
  leadsTo: ["env-ecological-pyramids", "env-productivity-and-biogeochemical-cycles"],
  usedIn: ["env-ecological-pyramids", "env-biodiversity", "env-productivity-and-biogeochemical-cycles"]
  },
  {
    id: "env-ecological-pyramids",
    sectionId: "ENV-2",
    order: 2,
    title: "Ecological Pyramids: Numbers, Biomass & Energy",
    definition: "Ecological pyramids are graphical representations of the trophic structure of an ecosystem. Three types exist — pyramid of numbers, pyramid of biomass, and pyramid of energy — each with different shapes and a key rule about when they're inverted.",
    keyFacts: [
      "Pyramid of NUMBERS: counts individuals at each level — can be INVERTED (e.g., one tree supports thousands of insects)",
      "Pyramid of BIOMASS: measures dry weight at each level — can be inverted in some marine ecosystems (where phytoplankton biomass is less than zooplankton biomass at certain times)",
      "Pyramid of ENERGY: shows energy flow at each level — ALWAYS UPRIGHT (energy always decreases up the chain due to the 10% rule and the second law of thermodynamics)",
      "Why energy pyramid is always upright: energy decreases at each level due to the 10% rule, regardless of ecosystem type",
      "Why number/biomass pyramids can be inverted: a single tree (1 producer) supports thousands of insects (many primary consumers), or phytoplankton (small standing biomass) is consumed rapidly by zooplankton (larger standing biomass at any given moment)"
    ],
    explanationSections: [
      { heading: "The three pyramids — and which one is always upright", body: "Of the three ecological pyramids, only the ENERGY pyramid is always upright. Why? Because the second law of thermodynamics and the 10% rule guarantee that energy decreases at each trophic level — this is a universal law. Numbers and biomass CAN be inverted because they're snapshots that don't account for turnover rates — a tree is one individual but supports many insects; phytoplankton have less standing biomass but reproduce so fast that they feed a larger zooplankton biomass." },
      { heading: "The 10% rule and energy pyramid shape", body: "The pyramid of energy is shaped by the 10% rule. At each trophic level up, only 10% of the previous level's energy is incorporated. So if producers have 10,000 units, primary consumers have ~1,000, secondary consumers ~100, tertiary consumers ~10. This gives a smooth, upright pyramid. Number and biomass pyramids can be jagged or inverted because they're raw counts/weights, not energy flow." },
      { heading: "Classic exam questions on pyramids", body: "Two questions get asked constantly: (1) 'Which pyramid is always upright?' Answer: energy. (2) 'Why is the pyramid of numbers inverted in a tree?' Answer: one tree (1) supports thousands of insects (thousands of primary consumers). The energy pyramid is the only one that's guaranteed upright because of universal physical law." }
    ],
    examPoints: [
      "Pyramid of energy is ALWAYS upright (10% rule, 2nd law of thermodynamics)",
      "Pyramid of NUMBERS can be inverted (one tree, thousands of insects)",
      "Pyramid of BIOMASS can be inverted in marine ecosystems (short-lived producers feed long-lived consumers)",
      "Arrows point UP the pyramid (energy flow direction)"
    ],
    commonMistakes: [
      "Thinking all three pyramids are always upright — only energy is guaranteed upright",
      "Confusing the inverted number pyramid with the upright energy pyramid — they have different rules",
      "Believing an inverted pyramid means the ecosystem is broken — it just reflects count/weight, not energy"
    ],
    relatedTopics: ["env-ecosystem-structure-and-energy-flow", "env-productivity-and-biogeochemical-cycles"],
    content: true,
  buildsOn: ["env-ecosystem-structure-and-energy-flow"],
  leadsTo: ["env-productivity-and-biogeochemical-cycles"],
  usedIn: ["env-biodiversity", "env-productivity-and-biogeochemical-cycles"]
  },
  {
    id: "env-productivity-and-biogeochemical-cycles",
    sectionId: "ENV-2",
    order: 3,
    title: "Productivity & Biogeochemical Cycles",
    definition: "Primary productivity is the rate at which energy is captured by producers. Biogeochemical cycles describe how essential elements (carbon, nitrogen, water, phosphorus, sulfur) move through ecosystems. The carbon cycle is the most-tested.",
    keyFacts: [
      "GPP (Gross Primary Productivity): total rate at which producers capture and FIX energy from sunlight (via photosynthesis)",
      "NPP (Net Primary Productivity) = GPP − plant respiration (Ra) = energy stored in producer biomass; available to consumers",
      "NPP varies by biome: tropical rainforest > temperate forest > grassland > desert (highest to lowest)",
      "Marine NPP: high in coastal/shallow waters, low in open ocean 'deserts'",
      "The 5 biogeochemical cycles to know: water, carbon, nitrogen, phosphorus, sulfur",
      "WATER CYCLE: evaporation → condensation → precipitation → runoff → infiltration; human disruption: urbanization, deforestation alters runoff",
      "CARBON CYCLE: photosynthesis absorbs CO₂, respiration releases it; ocean acts as buffer (absorbs ~25% of human CO₂); fossil fuels are ancient carbon stores; deforestation releases stored carbon",
      "NITROGEN CYCLE: N₂ fixation (by bacteria/lightning) → nitrification → denitrification; human disruption: fertilizer → eutrophication, fossil fuels → NOx → acid rain",
      "PHOSPHORUS CYCLE: NO atmospheric phase (rocks → soil → water → organisms); this is the most-asked distinguishing feature; human disruption: mining/fertilizer runoff → eutrophication",
      "SULFUR CYCLE: rocks/fossil fuels → SO₂ (from burning) → SO₄²⁻ in atmosphere; human disruption: coal burning → acid rain",
      "Exam tip: Carbon cycle is asked the most. Memorize: photosynthesis IN, respiration OUT, ocean as BUFFER, fossil fuels as ancient STORE, deforestation as RELEASE"
    ],
    explanationSections: [
      { heading: "GPP vs NPP — the productivity distinction", body: "GPP = total energy fixed by photosynthesis. But plants also RESPIRE — they use some of that captured energy for their own metabolism. NPP = what's left after plant respiration = GPP - Ra. NPP is what consumers can use. This distinction matters because the GPP of a forest might be high, but if the forest uses most of it for its own growth and metabolism, the NPP available to consumers could be modest. Tropical rainforests have high GPP but also high respiration, so their NPP is high but not as disproportionately high as their GPP." },
      { heading: "The 5 cycles — exam-favorite features", body: "The carbon cycle is asked the most. Remember: photosynthesis IN, respiration OUT, ocean as BUFFER (absorbs ~25% of human CO2), fossil fuels as ancient STORE (coal/oil = millions of years of buried carbon), deforestation as RELEASE. The phosphorus cycle is asked for its distinctive feature: NO atmospheric phase (unlike the other cycles). Nitrogen fixation (N2 → NH3) is done by bacteria and lightning; human activity (Haber process for fertilizer) has doubled the rate of nitrogen fixation globally. The water cycle is the simplest and most familiar." },
      { heading: "Human disruption of cycles — exam favorite", body: "Each cycle has a 'human disruption' question. Carbon: fossil fuels + deforestation = +CO2. Nitrogen: fertilizers + fossil fuel NOx = eutrophication + acid rain. Phosphorus: mining + fertilizer runoff = water pollution. Sulfur: coal burning = acid rain. Water: urbanization alters infiltration and runoff. The exam often asks 'which human activity disrupts X cycle?' The answer for carbon is fossil fuels; for nitrogen it's fertilizer; for phosphorus it's mining/fertilizer; for sulfur it's coal; for water it's urbanization." }
    ],
    examPoints: [
      "GPP = total photosynthesis; NPP = GPP − plant respiration (what's available to consumers)",
      "NPP ranking: rainforest > temperate forest > grassland > desert",
      "Carbon cycle: photosynthesis IN, respiration OUT, ocean buffer, fossil fuel store, deforestation release",
      "Phosphorus: NO atmospheric phase (most-asked distinguishing feature)",
      "All 5 cycles have human disruption pathways"
    ],
    commonMistakes: [
      "Confusing GPP and NPP — NPP = GPP minus plant respiration; NPP is what consumers actually get",
      "Thinking phosphorus has an atmospheric phase — it does NOT (this is the classic distinguishing question)",
      "Believing the ocean absorbs all human CO2 — it absorbs about 25-30%, the rest stays in the atmosphere"
    ],
    relatedTopics: ["env-ecosystem-structure-and-energy-flow", "env-climate-change-response", "env-biodiversity"],
    content: true,
  buildsOn: ["env-ecosystem-structure-and-energy-flow", "env-ecological-pyramids", "a-composition-today", "earth-j1", "earth-b6"],
  leadsTo: ["env-biodiversity", "env-air-pollution", "env-water-pollution-and-quality"],
  usedIn: ["env-air-pollution", "b-greenhouse-effect", "h-radiative-forcing", "env-climate-change-response"]
  },
  {
    id: "env-biodiversity",
    sectionId: "ENV-3",
    order: 1,
    title: "Biodiversity: Levels, Importance & Hotspots",
    definition: "Biodiversity is the variety of life — measured at three levels (genetic, species, ecosystem). It matters because ecosystems provide services humans depend on, and 'biodiversity hotspots' are regions of exceptional endemism under threat.",
    keyFacts: [
      "Three levels of biodiversity: GENETIC (variation within a species), SPECIES (number of different species), ECOSYSTEM (variety of habitats and communities)",
      "Why biodiversity matters: ECOSYSTEM SERVICES — four types (very testable): PROVISIONING (food, water, timber, medicines), REGULATING (climate, floods, pollination, water purification), SUPPORTING (nutrient cycles, soil formation, primary production), CULTURAL (recreation, spiritual, tourism)",
      "Provisioning = products we USE; Regulating = processes that CONTROL; Supporting = services that UNDERPIN others; Cultural = NON-MATERIAL benefits",
      "Species richness: number of species in an area",
      "Species evenness: how equally distributed the individuals are among species",
      "Alpha diversity (α): diversity WITHIN a single site/habitat",
      "Beta diversity (β): diversity BETWEEN sites/habitats (turnover)",
      "Gamma diversity (γ): diversity ACROSS a larger region (includes alpha and beta)",
      "Biodiversity hotspots: 36 global hotspots identified — regions with HIGH ENDEMISM (>0.5% of plant species as endemics) AND high threat (>70% of original habitat destroyed)",
      "Pakistan biodiversity hotspots: parts of Hindu Kush, Karakoram, and western Himalayas qualify",
      "Pakistan has ~5% forest cover (critically low) — one of the lowest in Asia"
    ],
    explanationSections: [
      { heading: "Why the four ecosystem services matter for exams", body: "Every environmental science exam tests the 4 ecosystem services. PROVISIONING = food/water/medicines (what we extract). REGULATING = climate/pollination/flood control (what nature does for us). SUPPORTING = nutrient cycles/soil (the foundation). CULTURAL = recreation/spiritual (non-material). The exam often asks 'which service does pollination belong to?' Answer: regulating. 'Which does nutrient cycling belong to?' Answer: supporting." },
      { heading: "Alpha, beta, gamma — the diversity levels", body: "Alpha (α) = within ONE site (a single forest, one pond). Beta (β) = BETWEEN sites (how much composition changes as you move from one forest patch to another). Gamma (γ) = ACROSS a whole region (the total diversity in the landscape). These are often confused. Mnemonic: alpha = ALONE in one place; beta = BETWEEN places; gamma = GLOBAL for the region." },
      { heading: "Hotspot criteria — the 0.5% and 70% thresholds", body: "A biodiversity hotspot must meet TWO criteria: (1) contain at least 0.5% of the world's plant species as endemics (found nowhere else), AND (2) have lost at least 70% of its original habitat. Only 36 areas qualify globally. Pakistan's northern mountains qualify — the Hindu Kush, Karakoram, and western Himalaya are recognized as part of the 'Mountains of Central Asia' hotspot. These areas are conservation priorities." }
    ],
    examPoints: [
      "4 ecosystem services: Provisioning, Regulating, Supporting, Cultural",
      "α = within site; β = between sites; γ = across region",
      "Hotspot criteria: 0.5% endemic plants AND 70% habitat loss",
      "Pakistan forest cover ~5% (critically low)"
    ],
    commonMistakes: [
      "Confusing provisioning with regulating — provisioning = products (food/water); regulating = processes (pollination/climate)",
      "Thinking all forests are hotspots — must meet BOTH criteria (endemism + threat), not just one",
      "Confusing alpha (within) and beta (between) — alpha is ONE site; beta is COMPARING sites"
    ],
    relatedTopics: ["env-biodiversity-threats-and-iucn", "env-conservation-and-extinction", "env-ecosystem-structure-and-energy-flow"],
    content: true,
  buildsOn: ["env-ecosystem-structure-and-energy-flow", "env-productivity-and-biogeochemical-cycles"],
  leadsTo: ["env-biodiversity-threats-and-iucn"],
  usedIn: ["env-biodiversity-threats-and-iucn", "env-conservation-and-extinction", "env-pakistan-environmental-context"]
  },
  {
    id: "env-biodiversity-threats-and-iucn",
    sectionId: "ENV-3",
    order: 2,
    title: "Threats to Biodiversity & IUCN Red List",
    definition: "Biodiversity faces five major threats (in order of impact) and species are classified by extinction risk on the IUCN Red List. Habitat loss is the single largest driver of biodiversity decline worldwide.",
    keyFacts: [
      "5 major threats in exam-relevant order: Habitat loss (#1) → Overexploitation → Invasive species → Pollution → Climate change",
      "Population growth is the indirect amplifier that makes ALL other threats worse (not a direct threat itself, but the root cause of habitat loss, overexploitation, etc.)",
      "Habitat loss is #1: deforestation, urbanization, agriculture, infrastructure — destroys where species live",
      "Overexploitation: hunting, fishing, logging faster than species can reproduce",
      "Invasive species: non-native organisms that outcompete natives (e.g., water hyacinth, cane toad, kudzu)",
      "Pollution: pesticides, plastics, nitrogen deposition, oil spills",
      "Climate change: shifting ranges, coral bleaching, phenology mismatch",
      "IUCN RED LIST CATEGORIES (high exam yield, often as ordering question):",
      "Order from LEAST to MOST threatened: LC (Least Concern) < NT (Near Threatened) < VU (Vulnerable) < EN (Endangered) < CR (Critically Endangered) < EW (Extinct in Wild) < EX (Extinct)",
      "Mnemonic: 'Little Newts Vary Easily, Exchanging Every Xtra' for LC NT VU EN CR EW EX",
      "Pakistan flagship endangered species: Markhor (recovering), snow leopard, Indus river dolphin, Houbara bustard, green turtle, several vulture species"
    ],
    explanationSections: [
      { heading: "Why habitat loss is #1 — and the order matters", body: "Habitat loss is consistently ranked as the single largest driver of biodiversity loss worldwide. When forests are cleared for agriculture or cities, the species that lived there have nowhere to go. The 'order' matters because the exam often asks: 'Which is the greatest threat to biodiversity?' The correct answer is habitat loss, not pollution or climate change (which get more media attention but are smaller drivers)." },
      { heading: "IUCN Red List ordering — a common exam trap", body: "The IUCN categories are ordered by increasing threat: LC < NT < VU < EN < CR < EW < EX. A common error is getting the order wrong or confusing the abbreviations. 'EW' (Extinct in Wild) means the species survives only in captivity. 'EX' means completely extinct. The exam often gives you a list and asks you to rank them from LEAST to MOST threatened, or to identify the abbreviation for a given category." },
      { heading: "The 5 threats and population growth", body: "Population growth is NOT one of the 5 direct threats — it's the INDIRECT amplifier that drives the 5 direct threats. As human population grows, we need more food (agriculture expands → habitat loss), more resources (overexploitation), more land (invasive species spread through trade), and we produce more waste (pollution) and CO₂ (climate change). The exam sometimes tests: 'Which of the following is NOT a direct threat to biodiversity?' Answer: population growth." }
    ],
    examPoints: [
      "Threats in order: Habitat loss > Overexploitation > Invasive species > Pollution > Climate change",
      "IUCN order (least to most threatened): LC < NT < VU < EN < CR < EW < EX",
      "EW = survives only in captivity; EX = completely extinct",
      "Pakistan endangered: Markhor, snow leopard, Indus river dolphin, Houbara bustard"
    ],
    commonMistakes: [
      "Listing climate change as the #1 threat — habitat loss is #1 globally",
      "Getting IUCN order wrong — the common error is mixing up VU and EN, or putting EW after EX incorrectly",
      "Thinking population growth IS a direct threat — it's an indirect amplifier of the 5 direct threats"
    ],
    relatedTopics: ["env-biodiversity", "env-conservation-and-extinction", "env-climate-change-response"],
    content: true,
  buildsOn: ["env-biodiversity"],
  leadsTo: ["env-conservation-and-extinction"],
  usedIn: ["env-conservation-and-extinction", "env-pakistan-environmental-context"]
  },
  {
    id: "env-conservation-and-extinction",
    sectionId: "ENV-3",
    order: 3,
    title: "Conservation Strategies & Mass Extinctions",
    definition: "Conservation strategies are either in-situ (protecting species in their natural habitat) or ex-situ (protecting them outside it, e.g. in zoos or seed banks). Earth has experienced 5 background mass extinctions; we are now in the 6th, caused by human activity.",
    keyFacts: [
      "In-situ conservation: ON SITE — national parks, wildlife sanctuaries, biosphere reserves, community conserved areas",
      "Ex-situ conservation: OFF SITE — zoos, aquariums, botanical gardens, seed banks, gene banks, cryopreservation",
      "Pakistan examples: in-situ = national parks (e.g., Khunjerab, Chitral Gol, Ayubia); ex-situ = Lahore Zoo",
      "Mass extinctions: 5 BACKGROUND mass extinctions in Earth's history (background rate ~0.1–1 species per year)",
      "6TH mass extinction = CURRENT, ANTHROPOGENIC (human-caused), 100–1000× faster than the background rate",
      "Evidence for current 6th extinction: species disappearing faster than at any time since the dinosaurs; IUCN lists thousands as threatened or worse; habitat loss accelerating",
      "Causes of past 5 mass extinctions: asteroid impact (dinosaurs), volcanic eruptions, climate change, sea level changes — all NATURAL causes",
      "Current 6th extinction causes: ALL human-caused — habitat destruction, overexploitation, invasive species, pollution, climate change"
    ],
    explanationSections: [
      { heading: "In-situ vs ex-situ — the key distinction", body: "In-situ = ON SITE (protecting the species in its natural habitat — national parks, wildlife sanctuaries, biosphere reserves). Ex-situ = OFF SITE (protecting the species elsewhere — zoos, seed banks, gene banks, cryopreservation). The exam often asks 'which is better?' Answer: in-situ is generally preferred because it preserves the entire ecosystem and evolutionary processes, but ex-situ is important as a backup for critically endangered species (e.g., seed banks for crops, captive breeding for rhinos)." },
      { heading: "The 6th mass extinction — why it matters", body: "Earth has had 5 background mass extinctions over the past ~500 million years — the most famous being the asteroid that ended the dinosaurs ~66 million years ago. These happened at a 'background rate' of about 0.1-1 species per year. We are NOW in a 6TH mass extinction, but unlike the previous 5 which were caused by asteroids or volcanoes, THIS one is entirely human-caused. And it's 100-1000 times faster than the background rate. The exam may ask: 'The current mass extinction differs from previous ones because...' Answer: it is caused by human activity, not natural causes." },
      { heading: "Pakistan conservation — specific examples", body: "Pakistan has several important protected areas: Khunjerab National Park (snow leopards, Marco Polo sheep), Chitral Gol National Park (Markhor — recovering!), Ayubia National Park (Himalayan black bear, leopards), Hingol National Park (Balochistan, Indus dolphin area), and Kirthar National Park (Sindh). Ex-situ: Lahore Zoo, various wildlife breeding centers. Community conservation: the 'Community Managed Drylands Project' and similar initiatives." }
    ],
    examPoints: [
      "In-situ = ON SITE; Ex-situ = OFF SITE",
      "5 background mass extinctions; 6th is current, human-caused, 100-1000× faster",
      "Previous extinctions: natural causes (asteroid, volcanoes); current: anthropogenic",
      "Pakistan parks: Khunjerab, Chitral Gol, Ayubia, Hingol, Kirthar"
    ],
    commonMistakes: [
      "Confusing in-situ and ex-situ — in-situ is on-site (parks), ex-situ is off-site (zoos)",
      "Thinking all mass extinctions are caused by humans — only the CURRENT 6th one is; previous 5 were natural",
      "Believing the 6th extinction is 'just normal background rate' — it's 100-1000× faster"
    ],
    relatedTopics: ["env-biodiversity", "env-biodiversity-threats-and-iucn"],
    content: true,
  buildsOn: ["env-biodiversity-threats-and-iucn", "earth-c3"],
  leadsTo: [],
  usedIn: ["env-pakistan-environmental-context"]
  },
  {
    id: "env-natural-resources",
    sectionId: "ENV-4",
    order: 1,
    title: "Natural Resources: Renewable vs Non-Renewable",
    definition: "Natural resources are materials from the environment that humans use to meet their needs. They are classified as renewable (can be replenished within a human lifespan) or non-renewable (take millions of years to form or cannot be replenished at all). How we use them determines sustainability.",
    keyFacts: [
      "Renewable resources: can be REPLENISHED naturally over time — water (via water cycle), forests (if managed sustainably), fisheries (if not overfished), soil (if erosion is controlled), solar/wind/hydro/geothermal/tidal energy",
      "Non-renewable resources: take MILLIONS of years to form or cannot be replenished — fossil fuels (coal, oil, natural gas), minerals, metals (iron, copper, gold, etc.)",
      "The 3Rs (expanded to 5Rs): REFUSE (best — don't use it) → REDUCE (use less) → REUSE (use again as-is) → RECYCLE (reprocess) → RECOVER (recover energy from waste) → DISPOSE (worst — last resort)",
      "Resource conflicts: water (India–Pakistan Indus Waters Treaty 1960), forests (logging vs conservation), minerals (mining vs environment), land (urban vs agricultural), energy (domestic coal vs imported)",
      "Pakistan forest cover: ~5% (critically low) — one of the lowest in Asia, vs. FAO-recommended minimum of 25%",
      "Major threats to forests globally: deforestation for agriculture (cattle ranching, soy, palm oil), logging, fires, urbanization, mining",
      "Pakistan forest initiatives: Billion Tree Tsunami (2014-2017, 1 billion trees planted), 10 Billion Tree Tsunami (2018+, expanded program)",
      "Forest functions: CARBON SINK (stores CO₂), BIODIVERSITY habitat, WATERSHED protection, SOIL prevention, plus cultural/indigenous value",
      "Fossil fuels are ANCIENT CARBON — coal, oil, and natural gas formed from buried organic matter over hundreds of millions of years. Burning them releases this stored carbon rapidly into the atmosphere as CO₂."
    ],
    explanationSections: [
      { heading: "Renewable vs Non-Renewable — the key distinction", body: "Renewable resources can be REPLENISHED within a human lifespan (a tree can regrow in decades, water recycles through the water cycle in days, solar energy is continuous). Non-renewable resources take millions of years to form (fossil fuels from buried ancient organisms) or cannot be replenished at all (metals like copper, gold). The distinction matters because using non-renewables faster than they form means we're depleting a finite stock — they will run out eventually." },
      { heading: "The 5Rs hierarchy — refuse > reduce > reuse > recycle > dispose", body: "Most people know the 3Rs: Reduce, Reuse, Recycle. But the most environmentally effective order is: REFUSE first (don't use it at all), then REDUCE (use less), REUSE (use again as-is), RECYCLE (reprocess into new materials), RECOVER (recover energy from waste through incineration/biogas), and only as a last resort DISPOSE (landfill). The exam often tests this ORDER. Refusing is better than recycling because the best waste is the waste that was never created." },
      { heading: "Why forest cover matters — Pakistan context", body: "Pakistan has only ~5% forest cover (vs. FAO-recommended 25%). Forests are not just trees — they provide critical ecosystem services: carbon sequestration (climate regulation), biodiversity habitat, watershed protection (preventing floods and soil erosion), and cultural value. Pakistan's Billion Tree Tsunami and 10 Billion Tree Tsunami are major reforestation initiatives. The 5% figure is frequently tested and is a key indicator of Pakistan's environmental challenges." }
    ],
    examPoints: [
      "Renewable = can be replenished; Non-renewable = finite stock",
      "5Rs order: Refuse > Reduce > Reuse > Recycle > Recover > Dispose",
      "Pakistan forest cover ~5%; FAO recommends 25%",
      "Fossil fuels are ancient carbon (formed over millions of years)"
    ],
    commonMistakes: [
      "Confusing which resources are renewable — minerals and metals are NON-renewable even though some metals (like aluminum from recycling) can be reused",
      "Putting Recycle first in the 3Rs/5Rs — Refuse is the MOST effective first step",
      "Thinking all forests are equally productive — forest types vary hugely in carbon sequestration and biodiversity"
    ],
    relatedTopics: ["env-resource-conflicts", "env-climate-change-response", "env-biodiversity"],
    content: true,
  buildsOn: ["env-carry-capacity-and-footprint", "earth-i4", "earth-b1"],
  leadsTo: ["env-resource-conflicts", "env-energy-sources"],
  usedIn: ["env-resource-conflicts", "env-energy-sources", "env-pakistan-environmental-context"]
  },
  {
    id: "env-resource-conflicts",
    sectionId: "ENV-4",
    order: 2,
    title: "Resource Conflicts & Forest Resources (Pakistan)",
    definition: "Resource conflicts arise when competing stakeholders want the same limited resource. Pakistan faces several key conflicts — over water (the Indus Waters Treaty with India is the most prominent), forests (logging vs. conservation), minerals, land, and energy — each with social, economic, and environmental dimensions.",
    keyFacts: [
      "INDUS WATERS TREATY (1960): the most prominent resource conflict in Pakistan — brokered by the World Bank, it divided the six rivers of the Indus system between India (3 eastern rivers) and Pakistan (3 western rivers), allowing India limited non-consumptive use of the western rivers",
      "Forest conflicts: logging for timber vs. conservation for biodiversity/carbon, land conversion for agriculture vs. forest preservation, urban expansion into forest areas",
      "Mineral conflicts: mining for coal/gold/copper vs. environmental protection (especially in Balochistan's Reko Diq case, which involved international arbitration)",
      "Land conflicts: urban sprawl vs. agricultural land, mega-projects (e.g., Diamer-Bhasha Dam) vs. displacement of communities and inundation of agricultural land",
      "Energy conflicts: domestic coal mining (Thar) vs. air pollution and climate; imported gas vs. energy security; dams (hydropower) vs. ecological disruption and community displacement",
      "Forest resources specifically: timber, fuelwood, fodder, non-timber forest products (NTFPs like honey, medicinal plants, nuts), ecosystem services (carbon storage, water regulation, biodiversity)",
      "Pakistan forest cover: ~5% (FAO recommends 25%) — one of lowest in Asia",
      "Forests and climate: deforestation contributes ~10-15% of global CO₂ emissions (more than all cars and trucks combined)",
      "Sustainable forest management: rotation harvesting, reforestation, community forestry, certification (FSC), protected areas",
      "Billion Tree Tsunami (2014-2017): planted 1 billion trees in Khyber Pakhtunkhwa; expanded to 10 Billion Tree Tsunami nationwide (2018+)"
    ],
    explanationSections: [
      { heading: "The Indus Waters Treaty — Pakistan's defining resource conflict", body: "The Indus Waters Treaty (1960) divided the six rivers of the Indus system: India got the three eastern rivers (Ravi, Beas, Sutlej) and Pakistan got the three western rivers (Indus, Jhelum, Chenab). India was given limited non-consumptive use of the western rivers. Brokered by the World Bank, it has held for over 60 years despite multiple wars — a remarkable achievement in water diplomacy. The treaty is often tested as a key example of trans-boundary resource management." },
      { heading: "Forest resources — the underappreciated conflict", body: "Forests in Pakistan and globally face competing demands: timber companies want to log, agriculturalists want to clear for farming, conservationists want to preserve for biodiversity and carbon, indigenous communities want to use forest products for livelihoods. The conflict is often resolved (or not) through national forest policy, community forestry, and protected area systems. Pakistan's 5% forest cover is far below the FAO-recommended 25% — a major environmental and economic issue." },
      { heading: "Solutions to resource conflicts", body: "Resource conflicts can be addressed through: (1) INTERNATIONAL AGREEMENTS (like the Indus Waters Treaty), (2) REGULATION AND POLICY (environmental impact assessments, protected areas), (3) COMMUNITY-BASED MANAGEMENT (giving local stakeholders a stake in sustainable use), (4) ECONOMIC INSTRUMENTS (taxes on pollution, payments for ecosystem services), (5) TECHNOLOGY (e.g., cleaner energy to reduce coal dependence). Pakistan's Billion Tree Tsunami is an example of large-scale reforestation addressing the forest crisis." }
    ],
    examPoints: [
      "Indus Waters Treaty 1960 divided 6 rivers between India and Pakistan",
      "Pakistan forest cover ~5%; FAO recommends 25%",
      "Forests provide timber, fuelwood, NTFPs, and ecosystem services (carbon, water)",
      "Billion Tree Tsunami (1 billion) → 10 Billion Tree Tsunami (expanded)",
      "Deforestation contributes ~10-15% of global CO₂ emissions"
    ],
    commonMistakes: [
      "Confusing which side of the Indus Treaty got which rivers — memorize the actual division",
      "Thinking Pakistan's forest cover is similar to global average (~30%) — it's 5%, far below",
      "Believing resource conflicts are unsolvable — many have been successfully managed (IWT is an example)"
    ],
    relatedTopics: ["env-natural-resources", "env-climate-change-response", "env-water-pollution-and-quality"],
    content: true,
  buildsOn: ["env-natural-resources", "env-pakistan-environmental-context"],
  leadsTo: [],
  usedIn: ["env-pakistan-environmental-context"]
  },
  {
    id: "env-air-pollution",
    sectionId: "ENV-5",
    order: 1,
    title: "Air Pollution: Primary & Secondary Pollutants",
    definition: "Air pollution is the contamination of indoor or outdoor air by chemicals, particulates, or biological molecules at concentrations that harm ecosystems, materials, or human health. Pollutants are classified as primary (emitted directly) or secondary (formed in the atmosphere by chemical reactions).",
    keyFacts: [
      "PRIMARY pollutants: emitted DIRECTLY from a source (PM, SO₂, NOₓ, CO, VOCs, lead, NH₃)",
      "SECONDARY pollutants: FORMED in atmosphere by reactions (O₃ — tropospheric ozone, smog, acid rain H₂SO₄/HNO₃, PAN)",
      "PM₁₀ vs PM₂.₅: PM₁₀ = particles ≤10 micrometers; PM₂.₅ = particles ≤2.5 micrometers (more dangerous, penetrates deeper into lungs)",
      "Photochemical smog (LA-type): summer, NOₓ + VOCs + sunlight → O₃ and PAN. Damages lungs, eyes, plants",
      "Sulfurous smog (London-type): winter, SO₂ + smoke + fog. The classic 1952 London smog killed thousands",
      "Acid rain: H₂SO₄ (from SO₂) and HNO₃ (from NOₓ) — damages buildings, forests (especially European forests in 1980s), lakes (kills fish)",
      "Ozone (O₃) good vs bad: STRATOSPHERIC ozone protects from UV-B; TROPOSPHERIC ozone is a pollutant that harms lungs and plants",
      "Indoor air pollution: biomass cooking smoke (kills ~4 million/year globally), radon (geological, second-leading lung cancer cause), asbestos, formaldehyde, tobacco smoke",
      "Control technologies: electrostatic precipitator (particulates), bag filter/cyclone (particulates), scrubber wet/dry (SO₂), catalytic converter (NOₓ/CO/VOCs in cars), HEPA filter (fine particles), cleaner fuels (overall reduction)",
      "Pakistan air quality: Lahore, Karachi, Peshawar among world's most polluted; AQI regularly exceeds 300 in winter; sources = vehicles, industry, brick kilns, trans-boundary agricultural residue burning",
      "NEQS = National Environmental Quality Standards — Pakistan's legal limits for ambient air pollutants"
    ],
    explanationSections: [
      { heading: "Primary vs secondary pollutants — the key distinction", body: "PRIMARY pollutants are emitted DIRECTLY from a source — PM from vehicle exhaust, SO₂ from coal plants, NOₓ from car engines, CO from incomplete combustion. SECONDARY pollutants are FORMED IN THE ATMOSPHERE by chemical reactions — ozone (O₃) is NOT emitted directly (mostly), it forms when NOₓ + VOCs + sunlight react. The same distinction for secondary: acid rain forms from SO₂ and NOₓ reacting with water in the air. The exam often asks 'is ozone a primary or secondary pollutant?' Answer: secondary." },
      { heading: "The two types of smog — very testable", body: "PHOTOCHEMICAL smog (Los Angeles type): occurs in SUMMER, requires sunlight, forms from NOₓ + VOCs reacting in sunlight to produce O₃ and PAN. Damages eyes, lungs, and plants. SULFUROUS smog (London type): occurs in WINTER, from burning coal containing sulfur, forms SO₂ + smoke + fog. The 1952 London smog killed ~4,000-12,000 people. The exam often tests this contrast: warm/sunny = photochemical, cold/foggy = sulfurous." },
      { heading: "Pakistan air quality — why it's bad", body: "Pakistan has some of the world's most polluted cities (Lahore, Karachi, Peshawar). Major sources: VEHICLES (2-stroke rickshaws, old cars), INDUSTRY (brick kilns, factories), AGRICULTURAL RESIDUE BURNING (especially in Punjab and northern India in Oct-Nov, trans-boundary smoke), POWER PLANTS (coal). NEQS (National Environmental Quality Standards) set legal limits, but enforcement is weak. The AQI (Air Quality Index) in Lahore regularly exceeds 300 in winter (hazardous), driven by temperature inversions trapping pollutants and stubble burning." }
    ],
    examPoints: [
      "Primary = emitted directly; Secondary = formed in atmosphere",
      "PM₂.₅ (≤2.5 μm) is more dangerous than PM₁₀ (≤10 μm)",
      "Photochemical smog (summer) vs Sulfurous smog (winter)",
      "Stratospheric O₃ protects; Tropospheric O₃ pollutes",
      "Pakistan: Lahore/Karachi/Peshawar among world's most polluted"
    ],
    commonMistakes: [
      "Thinking ozone is always good — stratospheric O₃ protects, but tropospheric O₃ is a harmful pollutant",
      "Confusing primary and secondary — primary is EMITTED, secondary is FORMED in air",
      "Mixing up PM₁₀ and PM₂.₅ — PM₂.₅ is smaller and more dangerous"
    ],
    relatedTopics: ["env-water-pollution-and-quality", "env-climate-change-response", "env-resource-conflicts"],
    content: true,
  buildsOn: ["a-composition-today", "b-inversion-types", "env-productivity-and-biogeochemical-cycles", "math-1-7", "phy-heat-transfer-mechanisms", "phy-atmospheric-pressure-physics"],
  leadsTo: ["env-water-pollution-and-quality", "env-ozone-depletion"],
  usedIn: ["env-ozone-depletion", "env-pakistan-environmental-context", "b-inversion-types", "i-arabian-sea-cyclones-local", "ra-descriptive-statistics"]
  },
  {
    id: "env-water-pollution-and-quality",
    sectionId: "ENV-5",
    order: 2,
    title: "Water Pollution, BOD/COD/DO & Treatment",
    definition: "Water pollution is the contamination of water bodies (rivers, lakes, oceans, groundwater) with substances that harm human health, ecosystems, or render water unusable. The BOD/COD/DO triangle is the most-tested water quality parameter set in any exam.",
    keyFacts: [
      "Sources of water pollution: POINT (identifiable, e.g., pipe or factory outfall) vs NON-POINT (diffuse, e.g., agricultural runoff, urban stormwater)",
      "Major pollutants: ORGANIC (sewage, food waste — cause oxygen depletion), NUTRIENTS (N, P from fertilizer — cause eutrophication), HEAVY METALS (Pb, Hg, Cd, Cr, As — toxic, persistent), PATHOGENS (E. coli, coliforms — disease), PESTICIDES (biomagnify up food chain), PLASTICS (microplastics ubiquitous), THERMAL (power plants — reduce DO)",
      "BOD (Biochemical Oxygen Demand): O₂ bacteria need to decompose organic waste. HIGH BOD = polluted water",
      "COD (Chemical Oxygen Demand): total O₂ for chemical oxidation. ALWAYS > BOD (chemical > biological demand)",
      "DO (Dissolved Oxygen): O₂ available to aquatic life. HIGH DO = clean water. Low DO = polluted/struggling ecosystem",
      "The BOD/COD/DO rule: CLEAN WATER = high DO, LOW BOD, LOW COD. POLLUTED WATER = low DO, HIGH BOD, HIGH COD. INVERSE relationship between DO and BOD",
      "Eutrophication cascade: excess nutrients (N, P) → algal bloom → light blocked → plant death → bacterial decomposition → O₂ depletion → fish death → DEAD ZONE",
      "Dead zones: Gulf of Mexico (Mississippi runoff), parts of Indus estuary, Baltic Sea, Chesapeake Bay",
      "Bioaccumulation: buildup of substance in single organism over time. Biomagnification: increasing concentration UP the food chain. Top predators (eagles, humans, large fish) most affected. Classic example: DDT",
      "Treatment stages: PRIMARY (physical: screening, sedimentation — removes solids), SECONDARY (biological: bacteria breakdown — removes organic matter), TERTIARY (advanced: chemical, UV, filtration — removes nutrients, pathogens, metals)",
      "Pakistan water pollution: raw sewage in rivers (Lyari, Malir), industrial effluents (Kasur tanneries), arsenic in groundwater (parts of Sindh, southern Punjab), marine pollution (Karachi coast)"
    ],
    explanationSections: [
      { heading: "The BOD/COD/DO triangle — extremely testable", body: "These three parameters are the workhorses of water quality testing. BOD = how much O₂ bacteria need to decompose waste (high BOD = lots of decomposable waste = polluted). COD = total O₂ for ALL chemical oxidation (always > BOD because chemistry breaks down more than biology alone). DO = O₂ available for fish and aquatic life (high DO = clean, low DO = fish die). The RULE: CLEAN WATER = high DO + low BOD + low COD. POLLUTED = low DO + high BOD + high COD. The exam often gives you values and asks which describes healthy vs polluted water." },
      { heading: "Eutrophication — the algal bloom cascade", body: "EUTROPHICATION is nutrient enrichment (excess N, P from fertilizer runoff or sewage). The cascade: nutrients → rapid algal growth on surface → algal bloom blocks light → plants below die → bacteria decompose dead plants → bacteria consume O₂ → DO depleted → fish suffocate and die → 'dead zone'. Famous examples: Gulf of Mexico (Mississippi river delivers fertilizer N+P from US Midwest agriculture), Baltic Sea, Chesapeake Bay. The Indus estuary has increasing dead zones from agricultural runoff in Pakistan's Punjab." },
      { heading: "Bioaccumulation vs Biomagnification — high yield", body: "BIOACCUMULATION = buildup in a SINGLE organism over time (a single fish accumulates mercury from water). BIOMAGNIFICATION = increasing concentration UP the food chain. The classic example: DDT in the 1960s. DDT was sprayed to kill mosquitoes, accumulated in algae, became concentrated in small fish (10x), then in bigger fish (100x), then in fish-eating birds like bald eagles (1000x+) — causing eggshell thinning and near-extinction. The lesson: even small amounts of persistent chemicals can reach dangerous levels at the top of food chains. This is why POPs (persistent organic pollutants) like DDT, PCBs, and dioxins are so dangerous." }
    ],
    examPoints: [
      "Clean water: HIGH DO, LOW BOD, LOW COD (inverse DO-BOD relationship)",
      "Eutrophication: N+P → algal bloom → light block → O₂ depletion → dead zone",
      "Bioaccumulation: in one organism; Biomagnification: up the food chain",
      "Treatment: Primary (physical) → Secondary (biological) → Tertiary (advanced)",
      "DDT is the classic biomagnification example"
    ],
    commonMistakes: [
      "Mixing up BOD and COD — COD is ALWAYS higher than BOD (chemical > biological demand)",
      "Thinking clean water has high BOD — clean water has LOW BOD (less decomposable waste)",
      "Confusing bioaccumulation (in one organism) with biomagnification (up food chain)"
    ],
    relatedTopics: ["env-air-pollution", "env-soil-and-waste", "env-biodiversity-threats-and-iucn"],
    content: true,
  buildsOn: ["env-productivity-and-biogeochemical-cycles", "earth-j1", "earth-j2", "d-moisture-metrics"],
  leadsTo: ["env-soil-and-waste"],
  usedIn: ["env-pakistan-environmental-context", "i-extreme-events"]
  },
  {
    id: "env-soil-and-waste",
    sectionId: "ENV-5",
    order: 3,
    title: "Soil Pollution, Solid & Hazardous Waste",
    definition: "Soil pollution is the contamination of soil with chemicals, waste, or pathogens that harm soil fertility, ecosystems, or human health. Solid and hazardous waste management is critical for urban areas, with a 5Rs hierarchy guiding sustainable practices.",
    keyFacts: [
      "Soil pollution sources: PESTICIDES and herbicides (agriculture), INDUSTRIAL WASTE (chemicals, heavy metals), SEWAGE SLUDGE, MINING (acid mine drainage), LANDFILL LEACHATE (liquids seeping from waste dumps)",
      "Effects of soil pollution: REDUCED FERTILITY (soils can't grow crops), BIOACCUMULATION in food (chemicals up the food chain), GROUNDWATER CONTAMINATION (leaching into aquifers), ECOSYSTEM DAMAGE (soil organisms die)",
      "Pakistan soil issues: SALINITY (salt buildup from irrigation, ~6 million hectares affected), WATERLOGGING (historic, partially solved by SCARP), EROSION in mountain areas, LOW ORGANIC MATTER in arid soils, PESTICIDE accumulation in cotton-wheat belt",
      "Solid waste types: MUNICIPAL SOLID WASTE (MSW — household, commercial), INDUSTRIAL waste, AGRICULTURAL waste (crop residue, manure), BIOMEDICAL waste (infectious — needs special handling), HAZARDOUS waste (toxic/reactive/flammable/corrosive), E-WASTE (fastest growing stream globally), PLASTIC waste (non-biodegradable, microplastics ubiquitous)",
      "The 5Rs waste hierarchy (in order of preference): REFUSE → REDUCE → REUSE → RECYCLE → RECOVER (energy from waste) → DISPOSE (last resort)",
      "Waste management methods: SANITARY LANDFILL (engineered, lined, with leachate control — most common for MSW), OPEN DUMPING (uncontrolled, common in developing countries — HAZARDOUS), INCINERATION (reduces volume but has air emissions), COMPOSTING (for organic waste), ANAEROBIC DIGESTION (produces biogas), RECYCLING, WASTE-TO-ENERGY (combustion with energy recovery)",
      "Pakistan waste: 12,000+ tons/day Karachi (mostly uncollected), 6,000+ tons/day Lahore. Limited segregation, few sanitary landfills, open dumping common, single-use plastic bans in some cities. E-waste is a growing concern",
      "Biomedical waste: infectious waste from hospitals must be autoclaved or incinerated, not mixed with general waste"
    ],
    explanationSections: [
      { heading: "Soil pollution — the hidden crisis", body: "Soil is often called the 'silent ally' of humanity — we depend on it for 95% of our food, but soil degradation is accelerating globally. Soil pollution comes from agricultural chemicals (pesticides, herbicides), industrial waste dumping, sewage sludge application, and landfill leachate. Once soil is contaminated, it takes DECADES to centuries to clean up — many pollutants persist (pesticides, heavy metals). Pakistan faces a severe soil salinity problem in irrigated areas (up to 6 million hectares), where rising water tables bring salts to the surface, destroying fertility." },
      { heading: "The 5Rs — order matters for exams", body: "The 5Rs hierarchy: REFUSE (best) → REDUCE → REUSE → RECYCLE → RECOVER (energy from waste) → DISPOSE (last resort). The order matters! REFUSE is best because the most environmentally friendly waste is the waste that was never created. Most people remember the 3Rs (Reduce, Reuse, Recycle) but the exam increasingly tests the full 5Rs and their ORDER. Pakistan has some single-use plastic bans in cities but enforcement is weak — the 5Rs framework is the underlying principle." },
      { heading: "Hazardous vs biomedical vs e-waste", body: "HAZARDOUS waste is toxic/reactive/flammable/corrosive — needs special handling, treatment, and disposal (often regulated under laws like RCRA in US or Pakistan's Hazardous Substances Rules). BIOMEDICAL waste (from hospitals) is infectious and must be autoclaved or incinerated — not mixed with general waste. E-WASTE (electronic waste) is the FASTEST GROWING waste stream globally due to rapid phone/computer turnover. Pakistan generates substantial e-waste with limited formal recycling infrastructure." }
    ],
    examPoints: [
      "Soil pollution sources: pesticides, industrial waste, sewage, mining, landfills",
      "5Rs: Refuse > Reduce > Reuse > Recycle > Recover > Dispose",
      "Sanitary landfill vs open dumping (sanitary is engineered, open is hazardous)",
      "E-waste is the fastest growing waste stream",
      "Pakistan soil issues: salinity (6M ha affected), waterlogging, erosion"
    ],
    commonMistakes: [
      "Recycling is the BEST step — actually, REFUSE is the best (prevent waste first)",
      "Sanitary landfill and open dumping are the same — they're not (sanitary is engineered, open is uncontrolled)",
      "Biomedical waste can be mixed with regular waste — it CANNOT (must be autoclaved/incinerated)"
    ],
    relatedTopics: ["env-air-pollution", "env-water-pollution-and-quality", "env-climate-change-response"],
    content: true,
  buildsOn: ["env-water-pollution-and-quality", "earth-e1"],
  leadsTo: [],
  usedIn: ["env-pakistan-environmental-context"]
  },
  {
    id: "env-energy-sources",
    sectionId: "ENV-6",
    order: 1,
    title: "Energy Sources & Their Environmental Footprint",
    definition: "Different energy sources have very different environmental, social, and economic impacts across their lifecycle. The energy-climate-environment nexus is a unified system — choices about energy directly affect climate, air quality, water, and ecosystems.",
    keyFacts: [
      "Coal: VERY HIGH CO₂, HIGH air pollution (SO₂, particulates, mercury), HIGH water use (mining + cooling), HIGH land use (mines + waste), produces ash waste",
      "Oil: HIGH CO₂, MEDIUM air pollution, LOW water use, LOW land use, risk of spills",
      "Natural gas: MEDIUM CO₂ (cleanest fossil fuel), LOW air pollution, LOW water use, LOW land use, but methane leaks at extraction (potent GHG)",
      "Nuclear: ZERO operational CO₂, ZERO air pollution, HIGH water use (cooling), MEDIUM land use, produces long-lived radioactive waste",
      "Solar: ZERO operational CO₂, ZERO air pollution, LOW water use, MEDIUM land use (panels)",
      "Wind: ZERO CO₂, ZERO air pollution, LOW water, LOW land (but visual/noise impact, bird strikes)",
      "Hydro: ZERO CO₂, ZERO air pollution, HIGH water use (reservoir), VERY HIGH land use (flooding valleys), ecological disruption",
      "Biomass: VARIABLE CO₂, VARIABLE pollution, LOW water, HIGH land (deforestation risk if unsustainable)",
      "Geothermal: VERY LOW CO₂, LOW pollution, MEDIUM water (in some systems), LOW land",
      "RULE: Renewables have low OPERATIONAL emissions but vary in land/water footprint. Nuclear is low-carbon but has waste and safety issues. Coal is worst across most dimensions",
      "Pakistan energy mix: natural gas ~36%, hydro ~24%, oil ~22%, coal ~18% (rising), nuclear + solar + wind <5%",
      "Imported energy = energy security problem; power crisis = 6-8 hr load-shedding (improving)",
      "Pakistan renewables: Quaid-e-Azam Solar Park (Bahawalpur, 1 GW), Gharo-Jhimpir wind corridor (Sindh)",
      "Net-zero target: Pakistan announced 2060 net-zero target (at UN climate summit 2021)"
    ],
    explanationSections: [
      { heading: "Comparing energy sources — no perfect option", body: "The 'best' energy source depends on what you optimize for. Coal is worst for almost every dimension (high CO₂, air pollution, water, land, waste). Nuclear is excellent for carbon and air quality but has long-lived waste and safety concerns. Renewables are excellent operationally but vary in land use (hydro needs huge reservoirs) and intermittency. The exam often asks 'which is the cleanest fossil fuel?' Answer: natural gas. 'Which has highest land use?' Answer: hydro. 'Which produces long-lived waste?' Answer: nuclear." },
      { heading: "Pakistan's energy profile", body: "Pakistan's energy mix is dominated by natural gas (~36%), followed by hydropower (~24%), oil (~22%), and coal (~18%, growing fast). Nuclear, solar, and wind are still <5% combined. The country is heavily dependent on imported fossil fuels (energy security risk) and has historically suffered from 6-8 hour load-shedding. Recent initiatives: Quaid-e-Azam Solar Park (Bahawalpur, 1 GW capacity), Gharo-Jhimpir wind corridor (Sindh), and a 2060 net-zero target announced at COP26." },
      { heading: "The energy-climate-environment nexus", body: "Energy choices are not isolated — they're connected to climate (CO₂ emissions from fossil fuels), air quality (PM, SO₂, NOₓ from coal and oil), water (mining and cooling demands), and ecosystems (habitat loss from mining, hydro reservoirs). A 'good' energy choice considers all these dimensions. The exam often tests this interconnectedness — e.g., 'How does coal use affect multiple environmental problems simultaneously?' Answer: CO₂ (climate) + SO₂ (acid rain) + particulates (air quality) + mining (habitat loss) + water use (thermal pollution)." }
    ],
    examPoints: [
      "Coal = worst across most environmental dimensions",
      "Nuclear = zero operational CO₂ but has long-lived waste",
      "Renewables = low operational emissions but vary in land/water footprint",
      "Pakistan: gas 36%, hydro 24%, oil 22%, coal 18%, nuclear/renewables <5%",
      "Net-zero target: 2060 (announced at COP26)"
    ],
    commonMistakes: [
      "Thinking all renewables are 'clean' — hydro has huge land/water impact; biomass can cause deforestation",
      "Believing nuclear has high CO₂ — it has ZERO operational CO₂ (the issue is waste and safety)",
      "Confusing which fossil fuel is cleanest — natural gas is cleanest among fossil fuels, coal is dirtiest"
    ],
    relatedTopics: ["env-climate-change-response", "env-air-pollution", "env-water-pollution-and-quality"],
    content: true,
  buildsOn: ["env-natural-resources", "phy-work-energy", "phy-power-efficiency", "phy-radioactivity-nuclear", "b-greenhouse-effect"],
  leadsTo: ["env-climate-change-response"],
  usedIn: ["env-climate-change-response", "h-radiative-forcing", "env-pakistan-environmental-context"]
  },
  {
    id: "env-climate-change-response",
    sectionId: "ENV-6",
    order: 2,
    title: "Climate Change: Mitigation, Adaptation & Vulnerability",
    definition: "Climate change response has two main strategies: MITIGATION (reducing greenhouse gas emissions to limit warming) and ADAPTATION (adjusting to the effects of warming that are already happening). Both are needed; they are complementary, not alternatives.",
    keyFacts: [
      "MITIGATION = REDUCING emissions to limit future warming. Examples: renewable energy, energy efficiency, EVs/public transit, building efficiency, carbon capture (CCS), REDD+ (forest protection), carbon pricing (tax, cap-and-trade), dietary shifts",
      "ADAPTATION = ADJUSTING to the effects of warming that are occurring. Examples: drought-resistant crops, coastal protection (seawalls, mangroves), improved water management, heat action plans, early warning systems, climate-resilient infrastructure",
      "Adaptation types: AUTONOMOUS (natural adjustments by ecosystems/people, unplanned) vs PLANNED (deliberate, policy-driven)",
      "Adaptation types: REACTIVE (after change has occurred) vs ANTICIPATORY (before change occurs — preferred)",
      "Vulnerability formula: VULNERABILITY = EXPOSURE + SENSITIVITY − ADAPTIVE CAPACITY",
      "Pakistan ranks in TOP 10 most climate-vulnerable countries (Germanwatch Climate Risk Index, multiple years)",
      "Pakistan climate impacts: glacier melt (Hindu Kush, Karakoram, Himalaya), heatwaves (increasing frequency/intensity), floods (2010, 2022 super floods), droughts (Thar region), sea level rise (Indus delta)",
      "Carbon pricing: carbon tax or cap-and-trade — puts a price on emissions to incentivize reduction",
      "REDD+ = Reducing Emissions from Deforestation and Forest Degradation — a UN framework that pays developing countries to protect forests",
      "Geoengineering = deliberate large-scale intervention in the climate system (e.g., solar radiation management, carbon capture at scale) — controversial and risky"
    ],
    explanationSections: [
      { heading: "Mitigation vs adaptation — the key distinction", body: "MITIGATION tackles the CAUSE: reducing greenhouse gas emissions to limit future warming. Switch to renewables, energy efficiency, EV transport, protect forests. ADAPTATION deals with the EFFECTS: adjusting to the warming that's already locked in. Drought-resistant crops, seawalls, early warning systems, climate-resilient infrastructure. BOTH are needed — mitigation prevents the problem from getting worse, adaptation helps us cope with what's already happening. They are complementary, not alternatives." },
      { heading: "Why Pakistan is highly climate-vulnerable", body: "Pakistan consistently ranks in the TOP 10 most climate-vulnerable countries (Germanwatch Climate Risk Index). Reasons: (1) high EXPOSURE to extreme weather — floods, heatwaves, droughts; (2) high SENSITIVITY — agriculture (21% of GDP) depends on Indus river system; (3) LOW adaptive capacity — limited financial resources for adaptation. The 2010 and 2022 super floods each displaced ~33 million people. Glacier melt threatens long-term water supply. The Thar region faces increasing drought." },
      { heading: "From international to local climate action", body: "Climate action happens at multiple scales: INTERNATIONAL (UNFCCC, Paris Agreement, IPCC assessments, COP meetings) → NATIONAL (NDCs, climate policy, renewable energy targets) → LOCAL (city heat action plans, community-based adaptation, mangrove restoration). Pakistan's 2060 net-zero target is a national commitment. Local action (e.g., urban tree planting, heat-resilient infrastructure) is what makes national targets achievable." }
    ],
    examPoints: [
      "Mitigation = reducing emissions (cause); Adaptation = adjusting to effects",
      "Vulnerability = Exposure + Sensitivity − Adaptive Capacity",
      "Pakistan in top 10 most climate-vulnerable countries",
      "REDD+ = paying developing countries to protect forests",
      "Adaptation preferred BEFORE change occurs (anticipatory vs reactive)"
    ],
    commonMistakes: [
      "Treating mitigation and adaptation as alternatives — they are complementary, both needed",
      "Confusing autonomous (natural) with planned (deliberate) adaptation — autonomous is unplanned, planned is policy-driven",
      "Thinking carbon capture/storage is proven at scale — most CCS projects are small or have failed"
    ],
    relatedTopics: ["env-international-climate-policy", "env-energy-sources", "env-ozone-depletion"],
    content: true,
  buildsOn: ["b-greenhouse-effect", "h-radiative-forcing", "h-climate-feedbacks", "h-ipcc-rcps", "env-energy-sources", "i-extreme-events", "phy-thermodynamics-laws", "phy-heat-transfer-mechanisms"],
  leadsTo: ["env-international-climate-policy", "env-pakistan-environmental-context"],
  usedIn: ["env-international-climate-policy", "h-pakistan-nccp", "i-nccp-objectives", "english-sentence-building-blocks", "english-sentence-types-errors-transformation", "ra-scientific-reporting"]
  },
  {
    id: "env-international-climate-policy",
    sectionId: "ENV-6",
    order: 3,
    title: "International Climate Policy (UNFCCC → Paris → COP28)",
    definition: "International climate policy has evolved from the 1992 UNFCCC framework through the 1997 Kyoto Protocol to the 2015 Paris Agreement. Each step established increasingly ambitious targets for limiting global temperature rise.",
    keyFacts: [
      "1992 UNFCCC: Framework Convention on Climate Change — established the basic structure, 'common but differentiated responsibilities' between developed and developing countries",
      "1997 KYOTO PROTOCOL: First binding targets — developed countries committed to reducing emissions by an average of 5% below 1990 levels (2008-2012); USA never ratified",
      "2009 COPENHAGEN ACCORD: Recognized the need to limit warming to below 2°C (aspirational, not legally binding)",
      "2015 PARIS AGREEMENT (KEY): Limit warming to WELL BELOW 2°C, PURSUE 1.5°C; every country submits NDCs (Nationally Determined Contributions); 5-year review cycle (global stocktake)",
      "Paris Agreement mechanisms: NDCs, global stocktake (every 5 years), climate finance ($100 billion/yr pledge from developed to developing, mostly unfulfilled), technology transfer",
      "2021 GLASGOW CLIMATE PACT: First COP to explicitly mention 'phasing down' (not eliminating) coal",
      "2022 SHARM EL-SHEIKH (COP27): Established the LOSS AND DAMAGE FUND — acknowledging that vulnerable countries need compensation for climate impacts",
      "2023 COP28 (UAE): First Global Stocktake — concluded the world is OFF TRACK for Paris goals; included language about 'transitioning away from fossil fuels'",
      "Pakistan's NDCs: submitted 2016, updated 2021; targets include 15% emissions reduction by 2030 (with international support), 30% renewable energy share by 2030",
      "Pakistan's 2060 NET-ZERO target: announced at COP26 (2021) — one of few developing countries with a stated net-zero target"
    ],
    explanationSections: [
      { heading: "The chronological progression of climate policy", body: "1992 UNFCCC (Rio Earth Summit) — framework convention, no binding targets. 1997 Kyoto Protocol — FIRST binding targets on developed countries (5% reduction by 2012), but USA did not ratify. 2009 Copenhagen Accord — first time 'limit to 2°C' was mentioned, but not legally binding. 2015 Paris Agreement — current main framework: <2°C, pursue 1.5°C, every country submits NDCs, 5-year stocktake. 2021 Glasgow — first mention of 'phasing down coal'. 2022 COP27 — Loss and Damage Fund created. 2023 COP28 — first Global Stocktake concluded we're off track; 'transitioning away from fossil fuels'." },
      { heading: "The Paris Agreement — the current main framework", body: "The Paris Agreement (2015) is the most important current climate agreement. KEY FEATURES: (1) Limit warming to WELL BELOW 2°C, PURSUE 1.5°C. (2) Every country submits NDCs (Nationally Determined Contributions) — their own targets. (3) Global Stocktake every 5 years to assess progress. (4) Climate finance: developed countries pledged $100 billion/year to developing countries (mostly unfulfilled). (5) Technology transfer to help developing countries. (6) 'Common but differentiated responsibilities' — developed countries have stronger obligations because they caused more of the problem historically." },
      { heading: "Pakistan's climate commitments", body: "Pakistan has updated NDCs (2016, 2021) with conditional targets: 15% emissions reduction by 2030 (achievable with international support), 30% renewable energy share by 2030. Pakistan also announced a NET-ZERO target for 2060 at COP26 (Glasgow, 2021) — making it one of the few developing countries with a stated long-term net-zero goal. Implementation depends heavily on international climate finance, which has been inadequate." }
    ],
    examPoints: [
      "1992 UNFCCC → 1997 Kyoto → 2015 Paris (main current framework)",
      "Paris Agreement: <2°C, pursue 1.5°C, NDCs every 5 years, global stocktake",
      "Loss and Damage Fund created at COP27 (2022) Sharm el-Sheikh",
      "First Global Stocktake at COP28 (2023) — we're OFF TRACK for Paris goals",
      "Pakistan: 2060 net-zero target, 15% emissions reduction by 2030 (conditional)"
    ],
    commonMistakes: [
      "Confusing UNFCCC (1992 framework) with the Paris Agreement (2015 main commitments)",
      "Thinking the $100 billion climate finance pledge was fully met — it was mostly unfulfilled",
      "Forgetting that the Paris Agreement's 2°C/1.5°C is a TARGET, not a confirmed outcome (we're currently on track for 2.5-3°C)"
    ],
    relatedTopics: ["env-climate-change-response", "env-ozone-depletion", "env-energy-sources"],
    content: true,
  buildsOn: ["env-climate-change-response", "h-ipcc-rcps", "h-pakistan-nccp"],
  leadsTo: ["env-ozone-depletion", "env-pakistan-environmental-context"],
  usedIn: ["env-pakistan-environmental-context", "i-nccp-objectives", "english-word-formation-and-context", "english-sentence-building-blocks", "ra-scientific-reporting"]
  },
  {
    id: "env-ozone-depletion",
    sectionId: "ENV-6",
    order: 4,
    title: "Ozone Depletion: CFCs, Montreal Protocol & Recovery",
    definition: "The stratospheric ozone layer protects life from harmful UV-B and UV-C radiation. CFCs (chlorofluorocarbons) released this chlorine that catalytically destroys ozone. The 1987 Montreal Protocol banned CFCs and is considered the most successful international environmental agreement.",
    keyFacts: [
      "Stratospheric O₃: protects from UV-B (causes sunburn, skin cancer) and UV-C (even more harmful, mostly absorbed by O₂ and O₃)",
      "CFCs (chlorofluorocarbons): used as refrigerants, propellants, foam-blowing agents. They drift up to the stratosphere where UV radiation breaks them down, releasing chlorine",
      "ONE chlorine atom can destroy up to ~100,000 ozone molecules (catalytic cycle — Cl is regenerated, not consumed)",
      "OZONE HOLE: seasonal thinning over ANTARCTICA (worst in September-October). Unique conditions: cold temperatures form polar stratospheric clouds that enhance chlorine activation",
      "MONTREAL PROTOCOL (1987): international agreement to phase out CFCs. Considered the MOST SUCCESSFUL international environmental agreement. Ratified by every country in the world",
      "KIGALI AMENDMENT (2016): extends the Montreal Protocol to phase down HFCs (potent greenhouse gases used as CFC replacements) — protects climate as well as ozone",
      "Recovery: ozone layer is RECOVERING slowly. Expected full recovery by ~2066 (over Antarctica) and ~2050 (rest of world) if compliance continues",
      "Success story: the Montreal Protocol is often cited as proof that international environmental agreements CAN work when there's political will and clear science"
    ],
    explanationSections: [
      { heading: "Why the ozone hole forms over Antarctica", body: "The ozone 'hole' is most severe over Antarctica in Southern Hemisphere spring (Sept-Oct). The reasons: (1) Extremely cold winter temperatures in the Antarctic stratosphere form POLAR STRATOSPHERIC CLOUDS — ice crystals that provide surfaces for chlorine-activating reactions. (2) Sunlight returns in spring, triggering massive ozone destruction. (3) The polar vortex traps the chlorine over Antarctica. The hole is technically a 'thinning' — not a complete absence — but the depletion can be up to 70%." },
      { heading: "Why the Montreal Protocol worked — lessons for climate policy", body: "The Montreal Protocol (1987) is the GOLD STANDARD of international environmental cooperation because: (1) CLEAR SCIENTIFIC EVIDENCE (ozone hole discovery) created political will. (2) INDUSTRY SUPPORTED phaseout (CFC replacements were available). (3) UNIVERSAL RATIFICATION — every country joined. (4) ADAPTIVE MANAGEMENT — the Protocol has been adjusted as science evolved (e.g., Kigali Amendment adding HFCs). (5) FLEXIBILITY for developing countries (delayed phaseout, financial support). The ozone layer is RECOVERING as a result. This is a model for climate policy — though climate is harder because fossil fuels have no easy drop-in replacement." },
      { heading: "Stratospheric vs tropospheric ozone — a common confusion", body: "STRATOSPHERIC ozone (15-35 km up) is the 'ozone layer' — GOOD, protects from UV. Being depleted by CFCs. TROPOSPHERIC ozone (ground level) is a POLLUTANT — bad for lungs and plants. Formed by NOₓ + VOCs + sunlight. The two are connected: the same molecule (O₃) at different altitudes has opposite effects. When people say 'save the ozone layer,' they mean the stratospheric one." }
    ],
    examPoints: [
      "CFCs release chlorine that catalytically destroys stratospheric ozone",
      "One Cl atom can destroy ~100,000 ozone molecules",
      "Montreal Protocol (1987) = most successful international environmental agreement",
      "Kigali Amendment (2016) added HFC phase-down (climate bonus)",
      "Ozone recovery expected ~2050-2066"
    ],
    commonMistakes: [
      "Confusing stratospheric (good, protective) with tropospheric (bad, pollutant) ozone",
      "Thinking CFCs are still used — they've been phased out under the Montreal Protocol",
      "Believing the ozone hole is 'healed' — it's still there seasonally but recovering, full recovery expected mid-century"
    ],
    relatedTopics: ["env-climate-change-response", "env-international-climate-policy", "env-air-pollution"],
    content: true,
  buildsOn: ["a-composition-today", "a-vertical-structure", "env-air-pollution", "b-radiation-laws"],
  leadsTo: [],
  usedIn: ["env-international-climate-policy", "english-word-formation-and-context"]
  },
  {
    id: "env-pakistan-environmental-context",
    sectionId: "ENV-6",
    order: 5,
    title: "Pakistan's Environmental Context: Issues & Policy",
    definition: "Pakistan faces interconnected environmental challenges — climate vulnerability, air pollution, water scarcity, biodiversity loss, deforestation, and waste management. The country's environmental policy is shaped by these realities and international commitments.",
    keyFacts: [
      "Pakistan's KEY environmental issues: AIR POLLUTION (Lahore, Karachi among world's worst), WATER SCARCITY (per capita availability dropping, approaching 'water scarce' threshold), DEFORESTATION (only ~5% forest cover), BIODIVERSITY LOSS (threatened species), WASTE MANAGEMENT (massive uncollected waste), CLIMATE VULNERABILITY (top 10 globally)",
      "Pakistan water: per capita availability has dropped from ~5,000 m³ (1947) to ~1,000 m³ today — approaching the 'water scarce' threshold of 1,000 m³",
      "Indus Waters Treaty (1960): water-sharing with India, the most critical water-related agreement",
      "Pakistan floods: 2010 super floods (~20 million affected, ~2,000 deaths), 2022 super floods (~33 million affected, ~1,700 deaths) — both caused by extreme monsoon rainfall",
      "Pakistan heatwaves: increasing frequency and intensity. 2015 Karachi heatwave killed ~2,000 people. 2022 heatwave exceeded 50°C in some areas",
      "Glacier melt: Pakistan has 7,000+ glaciers in the Hindu Kush, Karakoram, and Himalaya — major long-term water supply risk",
      "NATIONAL CLIMATE CHANGE POLICY (2012): Pakistan's first comprehensive climate policy, focused on adaptation (since Pakistan is a vulnerable developing country, not a major emitter)",
      "Pakistan's NDCs: 15% emissions reduction by 2030 (conditional on international support), 30% renewable share by 2030",
      "Net-zero target: 2060 (announced at COP26 Glasgow 2021)",
      "Protected areas: ~30 national parks, ~100 wildlife sanctuaries, plus Ramsar wetlands (Lal Suhara, Keenjhar, Ucchali)",
      "Billion Tree Tsunami (1 billion trees) expanded to 10 Billion Tree Tsunami (2018+)",
      "Environmental institutions: WWF-Pakistan, IUCN-Pakistan, SDPI (Sustainable Development Policy Institute), GCISC (Global Change Impact Studies Centre), PMD (Pakistan Meteorological Department), Pak-EPA"
    ],
    explanationSections: [
      { heading: "Pakistan's interconnected environmental challenges", body: "Pakistan's environmental issues are deeply INTERCONNECTED — climate change drives more intense floods and heatwaves, deforestation contributes to floods (less water retention) and biodiversity loss, water scarcity is worsened by glacier melt (climate) and population growth, air pollution (Lahore, Karachi) is driven by vehicle emissions, industry, and crop burning. These problems don't exist in isolation — they form a web. Solutions must be similarly interconnected: reforestation helps with carbon, biodiversity, floods, AND water retention. Sustainable energy reduces air pollution AND climate emissions." },
      { heading: "Pakistan's environmental policy framework", body: "Pakistan's policy is shaped by: (1) DOMESTIC needs — National Climate Change Policy (2012), Protected Areas, Billion Tree Tsunami. (2) INTERNATIONAL commitments — UNFCCC, Paris Agreement, NDCs, SDGs, CBD, Ramsar. (3) INSTITUTIONAL framework — Ministry of Climate Change, Pak-EPA, provincial EPAs, IUCN-Pakistan, WWF-Pakistan. The 2012 NCC Policy was a milestone — Pakistan's first comprehensive climate framework, focused on ADAPTATION (since Pakistan is a vulnerable developing country, not a major emitter in absolute terms)." },
      { heading: "Major protected areas and biodiversity sites", body: "Pakistan has a network of protected areas: ~30+ national parks (Khunjerab for snow leopards, Chitral Gol for Markhor, Hingol for marine life, Ayubia for black bears, Kirthar for desert wildlife), ~100+ wildlife sanctuaries, game reserves, and Ramsar wetlands (Wetlands of International Importance) like Lal Suhara, Keenjhar Lake, Ucchali Lake. The Markhor is a conservation success story. Pakistan's biodiversity is rich but threatened — habitat loss, climate change, and overexploitation are major pressures." }
    ],
    examPoints: [
      "Pakistan: per capita water ~1,000 m³ (approaching water-scarce threshold)",
      "2010 and 2022 super floods (~20-33 million affected each)",
      "2015 Karachi heatwave killed ~2,000 people",
      "Pakistan's 2060 net-zero target (announced 2021)",
      "Forest cover ~5% (vs. FAO 25% recommended)",
      "10 Billion Tree Tsunami (expanded from Billion Tree Tsunami)"
    ],
    commonMistakes: [
      "Confusing per capita water availability — Pakistan has DROPPED from ~5,000 m³ to ~1,000 m³, not stayed stable",
      "Thinking Pakistan is a major GHG emitter in absolute terms — it's a vulnerable developing country, not in top 10 absolute emitters",
      "Believing forest cover is improving — it's only ~5%, one of the lowest in Asia, and reforestation efforts are still far below what's needed"
    ],
    relatedTopics: ["env-climate-change-response", "env-air-pollution", "env-water-pollution-and-quality", "env-resource-conflicts", "env-biodiversity"],
    content: true,
  buildsOn: ["env-air-pollution", "env-water-pollution-and-quality", "env-climate-change-response", "g-pakistan-macroclimate", "i-extreme-events", "i-temp-rainfall-distribution", "earth-i1"],
  leadsTo: [],
  usedIn: ["h-pakistan-nccp", "i-pmd-operational", "english-sentence-completion-rearrangement", "ra-scientific-reporting"]
  }
];
