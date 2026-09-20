// topics-earth-science.ts — FPSC Earth Sciences content bank
// Source: Standard Earth science curriculum (geology + seismology + geophysics
// combined per Layer 3 of the integrated syllabus). Content is drawn from
// well-established, non-controversial Earth science facts, cited generically
// rather than to a specific page.
//
// This file holds ONLY this subject's topic data. It is merged into the app-wide
// `topics` array by src/data/topics.ts (the aggregator). Do not import this file
// directly from components — always import from '@/data/topics'.


import type { Topic } from '@/types';


export const topics: Topic[] = [


// ════════════════════════════════════════════════════════════════════
// SECTION EARTH-A: Earth as a Planet & Internal Structure
// ════════════════════════════════════════════════════════════════════


{
  id: "earth-a1",
  sectionId: "EARTH-A",
  order: 1,
  priority: "high", // 🔴 syllabus
  title: "Earth's Shape, Size & Motions",
  definition: "Earth is an oblate spheroid — slightly flattened at the poles and bulging at the equator — that undergoes two principal motions (rotation on its axis and revolution around the Sun) plus slower secondary motions (precession and nutation) of its rotational axis.",
  keyFacts: [
    "Earth's shape: oblate spheroid (also called an oblate ellipsoid of revolution) — flattened at the poles, bulging at the equator",
    "Equatorial radius: 6,378 km; polar radius: 6,357 km; mean (average) radius: 6,371 km",
    "Equatorial bulge ≈ 21 km (equatorial diameter exceeds polar diameter by ~42 km)",
    "Mass: 5.97 × 10²⁴ kg; surface area ≈ 510 million km²; mean density ≈ 5.51 g/cm³",
    "Rotation: Earth spins on its axis once every ~24 hours relative to the Sun (solar day)",
    "Sidereal day = 23 h 56 min 4 s (rotation relative to distant stars); solar day = 24 h",
    "Axis tilt (obliquity): 23.5° relative to the plane of its orbit (the ecliptic)",
    "Revolution: Earth orbits the Sun once every 365.25 days",
    "Precession: a slow ~26,000-year conical wobble of the rotational axis, driven by gravitational torques from the Sun and Moon on Earth's equatorial bulge; it does NOT change the tilt angle, only the direction the axis points",
    "Nutation: a smaller oscillation of period ~18.6 years superimposed on precession, caused mainly by the Moon's inclined orbital plane"
  ],
  explanationSections: [
    { heading: "Why Earth is not a perfect sphere", body: "Earth's rotation generates centrifugal force that is strongest at the equator (where rotational speed is highest, ~465 m/s) and zero at the poles. Over geological time this force has caused the equator to bulge outward and the poles to flatten slightly, producing the oblate spheroid shape. The difference between equatorial and polar radii is small in human terms (about 21 km, or 0.3%) but is measurable by satellite altimetry, important for precise GPS mapping, and matters for climate (equatorial regions receive more concentrated solar energy partly because they are closer to the Sun at perihelion and farther at aphelion — though obliquity is the dominant cause of seasons)." },
    { heading: "Sidereal vs. solar day", body: "A sidereal day (23 h 56 min 4 s) is the time Earth takes to rotate exactly 360° relative to the distant stars. A solar day (24 h) is the time for the Sun to return to the same position in the sky. Because Earth is also moving along its orbit (about 1° per day eastward), it must rotate slightly more than 360° — roughly 1° extra, or about 4 minutes — to bring the Sun back to the same apparent position. This is why the solar day is about 4 minutes longer than the sidereal day, and why astronomers prefer sidereal time for tracking stars." },
    { heading: "Precession and nutation", body: "Precession is the slow conical 'wobble' of Earth's axis, similar to a spinning top, driven by the gravitational pull of the Sun and Moon on Earth's equatorial bulge. A full precessional cycle takes about 26,000 years, which means the pole star changes over millennia: Polaris is our current pole star; in ~12,000 years, Vega will be closest to the north celestial pole. Precession is one of the Milankovitch cycles that contributes to long-term climate variation. Nutation is a smaller wobble of period ~18.6 years layered on top of precession, caused mainly by the Moon's orbital plane being inclined ~5° to the ecliptic." }
  ],
  examPoints: [
    "Equatorial radius (6,378 km) > polar radius (6,357 km) — the oblate shape is caused by rotation, not by tidal forces",
    "Earth's axis tilt of 23.5° is the primary cause of the seasons, NOT variation in Earth–Sun distance",
    "Precession does NOT change the tilt angle; it changes the DIRECTION the axis points",
    "A solar day (24 h) is about 4 minutes longer than a sidereal day (~23 h 56 min)",
    "Nutation period (~18.6 yr) is shorter than precession period (~26,000 yr) — common inversion",
    "Earth's mean density (5.51 g/cm³) is much higher than surface rock density (~2.7 g/cm³), implying a dense core (covered in earth-a3)"
  ],
  comparisonTable: {
    headers: ["Quantity", "Value"],
    rows: [
      ["Equatorial radius", "6,378 km"],
      ["Polar radius", "6,357 km"],
      ["Mean radius", "6,371 km"],
      ["Mass", "5.97 × 10²⁴ kg"],
      ["Mean density", "5.51 g/cm³"],
      ["Surface area", "~510 million km²"],
      ["Rotation period (solar day)", "24 h"],
      ["Rotation period (sidereal day)", "23 h 56 min 4 s"],
      ["Axis tilt (obliquity)", "23.5°"],
      ["Revolution period", "365.25 days"],
      ["Precession period", "~26,000 years"],
      ["Nutation period", "~18.6 years"]
    ]
  },
  relatedTopics: ["earth-a2", "earth-a3", "earth-a5"],
  content: true,
  buildsOn: ["math-2-2", "phy-units-measurement", "phy-kinematics"],
  leadsTo: ["earth-a2", "earth-a3"],
  usedIn: ["b-radiation-laws", "h-milankovitch-cycles", "earth-i1"]
},


{
  id: "earth-a2",
  sectionId: "EARTH-A",
  order: 2,
  title: "Earth's Magnetic Field",
  definition: "Earth's magnetic field is approximately dipolar, generated by the self-sustaining motion of molten iron in the outer core (the geodynamo). It is described by magnetic poles, declination, and inclination, and has reversed polarity many times in geological history.",
  keyFacts: [
    "Earth's field is approximately a dipole — like a giant bar magnet offset slightly from Earth's centre",
    "The magnetic dipole axis is tilted ~11° from the geographic (rotation) axis",
    "Geographic (true) poles ≠ magnetic poles: the magnetic poles drift over time (the Magnetic North Pole has been moving from Canada toward Siberia; rates peaked near ~55 km/year and are currently ~35–50 km/year)",
    "Magnetic North Pole: the point where the field points vertically downward (currently in the Canadian Arctic)",
    "Magnetic South Pole: the point where the field points vertically upward (currently off the coast of Antarctica)",
    "Declination: the horizontal angle between true north and magnetic north (varies by location)",
    "Inclination (dip angle): the angle the field makes with the horizontal surface (0° at the magnetic equator, 90° at the magnetic poles)",
    "The field deflects charged solar particles (solar wind) and forms the magnetosphere, which includes the Van Allen radiation belts",
    "Magnetic reversals: the magnetic N and S poles have swapped many times in geological history; the most recent reversal was the Brunhes–Matuyama reversal ~780,000 years ago",
    "Evidence for reversals: basalts on mid-ocean ridges record alternating magnetic 'stripes' symmetric about the ridge axis"
  ],
  explanationSections: [
    { heading: "Origin: the geodynamo (self-exciting dynamo)", body: "Earth's magnetic field is generated by the movement of electrically conducting liquid iron in the outer core. Convection currents (driven by heat escaping from the inner core), combined with Earth's rotation (Coriolis effect), organize this flow into spiraling columns. The mechanism is a self-exciting dynamo: any small initial magnetic field induces electrical currents in the moving conductive fluid, and these currents reinforce the field, sustaining it indefinitely as long as convection continues. Without this molten, convecting outer core, Earth would have no significant magnetic field, much like Mars today, which has only a weak remnant crustal field." },
    { heading: "Declination and inclination in practice", body: "A compass needle points to magnetic north, NOT true north. The angle between them is the declination, which varies from place to place and changes slowly over time. Along an 'agonic line' declination is zero; elsewhere it can be tens of degrees east or west. Inclination is observed by tilting a compass needle on a horizontal axis: at the magnetic equator the needle lies horizontal (inclination = 0°); at the magnetic poles it stands vertical (inclination = 90°). Both declination and inclination are essential for navigation, aeromagnetic surveys, mineral exploration, and core sampling." },
    { heading: "Magnetic reversals and seafloor evidence", body: "When new basaltic crust forms at a mid-ocean ridge, magnetic minerals (mainly magnetite) in the cooling lava lock in the direction of Earth's field at that moment, like a tiny compass frozen in place. As the seafloor spreads outward symmetrically, it preserves a 'tape recording' of reversals. Symmetric magnetic stripes on either side of mid-ocean ridges, first mapped in the 1960s, were one of the strongest pieces of evidence for seafloor spreading and convinced most geologists of plate tectonics within a few years." }
  ],
  examPoints: [
    "The 'Magnetic North Pole' is in physics terms actually a magnetic SOUTH pole — it attracts the north-seeking end of a compass needle, so by definition it must be a south magnetic pole. Frequent conceptual trap.",
    "Declination = horizontal angle from true north; Inclination = angle from horizontal surface (NOT the same)",
    "The field is generated by the LIQUID outer core, NOT the solid inner core (the inner core is too rigid to convect on its own)",
    "Reversals are recorded by magnetite in cooling lava — used to date ocean-floor crust and reconstruct past plate motions",
    "The magnetic pole currently drifts ~35–50 km/year (slowed from a peak ~55 km/year) — there is no fixed position"
  ],
  comparisonTable: {
    headers: ["Term", "Definition", "Where = 0", "Where = max"],
    rows: [
      ["Declination", "Horizontal angle between true N and magnetic N", "Along the agonic line", "Up to ~180°"],
      ["Inclination (dip)", "Angle between field lines and horizontal", "Magnetic equator", "Magnetic poles (90°)"],
      ["Magnetic pole drift", "Rate of change of pole position", "—", "Currently ~35–50 km/yr (peak ~55)"]
    ]
  },
  relatedTopics: ["earth-a3", "earth-h1"],
  content: true,
  buildsOn: ["earth-a1", "phy-magnetic-fields-force"],
  leadsTo: ["earth-a3", "earth-k3"],
  usedIn: ["a-ionosphere-exosphere", "earth-h2", "earth-k3"]
},


{
  id: "earth-a3",
  sectionId: "EARTH-A",
  order: 3,
  title: "Earth's Internal Structure & Discontinuities",
  definition: "Earth's interior is divided into concentric layers — crust, mantle, outer core, and inner core — separated by sharp boundaries called discontinuities, identified mainly through the behaviour of seismic P-waves and S-waves.",
  keyFacts: [
    "Crust (continental): 0–70 km depth; solid; density ~2.7 g/cm³; granitic composition",
    "Crust (oceanic): 0–10 km depth; solid; density ~3.0 g/cm³; basaltic composition",
    "Mantle (upper): 70–670 km; solid but plastic; density ~3.3–4.0 g/cm³; mainly peridotite (olivine, pyroxene)",
    "Mantle (lower): 670–2,890 km; solid; density ~4.4–5.6 g/cm³; high-pressure silicates (perovskite, post-perovskite)",
    "Outer core: 2,890–5,150 km; LIQUID iron–nickel; density ~9.9–12.2 g/cm³; generates the geomagnetic field",
    "Inner core: 5,150–6,371 km; SOLID iron–nickel; density ~12.8–13.1 g/cm³; temperature ~5,400 °C (similar to the Sun's surface), but solid because of extreme pressure",
    "Mohorovičić discontinuity (Moho): boundary between crust and upper mantle",
    "Gutenberg discontinuity: boundary between mantle and outer core (~2,890 km); S-waves disappear here",
    "Lehmann discontinuity: boundary between outer core and inner core (~5,150 km); S-waves reappear here",
    "Repetti discontinuity: boundary between upper and lower mantle (~670 km); phase transition",
    "All knowledge of the deep interior comes from seismology: P-waves refract and change speed; S-waves vanish in liquids; both behaviours pinpoint layer boundaries"
  ],
  explanationSections: [
    { heading: "How we know the layers exist — seismic wave behaviour", body: "No one has ever drilled through the crust to the mantle (the deepest hole, the Kola Superdeep Borehole, reached only ~12 km). All knowledge of the deeper interior comes from seismic waves. P-waves (compressional, ~6–13 km/s) refract and change speed at layer boundaries, while S-waves (shear, ~3.5–7 km/s) cannot travel through liquids and so vanish at the outer core. The S-wave shadow zone — a region between 103° and 180° from an earthquake's epicentre where no direct S-waves arrive — is direct, unambiguous evidence that the outer core is liquid. The P-wave shadow zone (~103°–140°) is due to refraction at the core-mantle boundary and is also consistent with a liquid outer core." },
    { heading: "The role of discontinuities", body: "Each discontinuity marks a sharp change in composition or physical state. The Moho is primarily a compositional change (crustal rocks to ultramafic mantle peridotite). The Gutenberg discontinuity is both compositional (silicate to iron–nickel) and a phase change (solid to liquid). The Lehmann discontinuity is mainly a phase change (liquid to solid iron under immense pressure), even though composition is similar on both sides. The Repetti discontinuity (~670 km) marks a phase change in mantle minerals (ringwoodite to bridgmanite + ferropericlase) without a major compositional shift." }
  ],
  examPoints: [
    "S-waves CANNOT pass through the outer core — this is the single most important piece of evidence that the outer core is liquid",
    "P-waves slow down but still travel through the outer core (they can travel in both solids and liquids)",
    "The deepest layer is the SOLID inner core, not the liquid outer core — common inversion error",
    "The inner core is hotter than the surface of the Sun (~5,400 °C) but remains solid because pressure is so extreme",
    "Mohorovičić = crust/mantle; Gutenberg = mantle/outer core; Lehmann = outer/inner core; Repetti = upper/lower mantle",
    "Continental crust (granitic, less dense) is thicker but lower density than oceanic crust (basaltic, denser) — this is why continents sit higher"
  ],
  comparisonTable: {
    headers: ["Layer", "Depth (km)", "State", "Density (g/cm³)", "Main composition"],
    rows: [
      ["Crust (continental)", "0–70", "Solid", "~2.7", "Granitic rocks"],
      ["Crust (oceanic)", "0–10", "Solid", "~3.0", "Basaltic rocks"],
      ["Upper mantle", "70–670", "Solid (plastic)", "3.3–4.0", "Peridotite, olivine"],
      ["Lower mantle", "670–2,890", "Solid", "4.4–5.6", "Silicate perovskite"],
      ["Outer core", "2,890–5,150", "Liquid", "9.9–12.2", "Fe–Ni"],
      ["Inner core", "5,150–6,371", "Solid", "12.8–13.1", "Fe–Ni"]
    ]
  },
  workedExample: {
    problem: "A P-wave from an earthquake is recorded at stations 60°, 110°, and 160° from the epicentre. P-waves are detected at 60° and 160°, but the station at 110° records a much weaker first arrival. S-waves are recorded at 60° but not at 110° or 160°. What does this tell us about Earth's interior?",
    solution: "S-waves arriving at 60° but not beyond 103° show the S-wave shadow zone begins around 103° — direct evidence of a liquid outer core (S-waves cannot pass through liquids). The weak P-wave at 110° is consistent with the P-wave shadow zone (~103°–140°), caused by refraction of P-waves at the core-mantle boundary (Gutenberg discontinuity). The reappearance of P-waves at 160° means some P-waves can travel through the outer core (since P-waves CAN pass through liquids), but they are refracted and arrive later.",
    answer: "A liquid outer core exists, bounded above by the Gutenberg discontinuity (~2,890 km depth)."
  },
  relatedTopics: ["earth-a4", "earth-h4"],
  content: true,
  buildsOn: ["earth-a1", "phy-wave-properties", "phy-density"],
  leadsTo: ["earth-a4", "earth-h2"],
  usedIn: ["earth-h2", "earth-k2"]
},


{
  id: "earth-a4",
  sectionId: "EARTH-A",
  order: 4,
  title: "Lithosphere, Asthenosphere & Internal Heat",
  definition: "The lithosphere is the rigid outer shell of Earth (crust + uppermost mantle) that is broken into tectonic plates; beneath it lies the asthenosphere, a hotter, plastic layer that flows slowly and allows the plates to move. Both are kept in motion by heat escaping from Earth's interior.",
  keyFacts: [
    "Lithosphere: rigid outer layer, ~100 km thick on average (range ~5–200 km: thin at mid-ocean ridges, thick beneath old cratons); includes the crust and the uppermost part of the mantle",
    "Asthenosphere: extends from ~100 km to ~350 km depth (varies); solid rock but partially molten (~1–5% melt) and ductile, capable of slow flow over geological time",
    "The asthenosphere is what tectonic plates 'ride' on",
    "Two main sources of Earth's internal heat: primordial heat (left over from planetary formation/accretion) and radiogenic heat (from decay of radioactive isotopes: U-238, U-235, Th-232, K-40)",
    "Geothermal gradient: temperature increases with depth below the surface, averaging ~25–30 °C/km in the upper crust — but the gradient DECREASES with depth (non-linear)",
    "Surface heat flow is highest at mid-ocean ridges and volcanic areas; lowest in old, stable continental interiors (cratons)",
    "Heat is transferred by conduction (in the lithosphere) and by convection (in the mantle and outer core)",
    "Mantle convection is the primary driver of plate tectonics; outer-core convection drives the geodynamo"
  ],
  explanationSections: [
    { heading: "Lithosphere vs. crust — they are not the same", body: "A common error is to use 'lithosphere' and 'crust' interchangeably. The crust is only the topmost compositional layer (0–70 km on continents, 0–10 km under oceans). The lithosphere is the rigid mechanical layer, which includes the crust plus the very top of the upper mantle. It is defined by behaviour (it bends and breaks) rather than by composition. The lithosphere-asthenosphere boundary is therefore a mechanical/thermal boundary, not a chemical one — and its depth varies from ~5 km at mid-ocean ridges to ~200 km beneath ancient cratons." },
    { heading: "Why the asthenosphere flows", body: "Rocks at asthenospheric depths are near their melting temperature. A small fraction of partial melt (a few percent) coats mineral grains, allowing them to slide past each other under stress. The result is plastic flow over geological timescales — fast enough for plates to move (a few cm/year) but so slow that, on human timescales, the asthenosphere behaves as a solid. This is why S-waves slow down in the asthenosphere (the 'low-velocity zone')." },
    { heading: "Convection: the engine of plate tectonics", body: "Heat from the core and from radioactive decay warms the lower mantle. Hot material rises, cooler material near the surface sinks, and this circulation — mantle convection — drags plates along and provides much of the force that drives plate motion. Ridge push and slab pull (covered in Plate Tectonics) are partly expressions of the same convective system, but the fundamental energy source is internal heat. The geothermal gradient is non-linear: it is steepest in the upper crust (where conduction dominates) and flattens out at greater depths as convection takes over." }
  ],
  examPoints: [
    "Lithosphere = crust + uppermost mantle; Asthenosphere = plastic upper mantle below it",
    "Lithosphere is RIGID; asthenosphere is PLASTIC (flows slowly)",
    "Average geothermal gradient is ~25–30 °C/km in the upper crust — NOT 1 °C/km (which is sometimes used in elementary texts)",
    "Geothermal gradient is non-linear: steeper near surface, flatter at depth (conduction vs convection)",
    "Most of Earth's present internal heat comes from radioactive decay, not primordial heat",
    "Mantle convection drives plate motion; outer-core convection drives the magnetic field — these are SEPARATE convective systems"
  ],
  relatedTopics: ["earth-a3", "earth-d1", "earth-d2"],
  content: true,
  buildsOn: ["earth-a3", "phy-temperature-heat", "phy-heat-transfer-equilibrium", "phy-radioactivity-nuclear"],
  leadsTo: ["earth-a5", "earth-d2", "earth-g1"],
  usedIn: ["earth-d2", "earth-g1", "earth-h1"]
},


{
  id: "earth-a5",
  sectionId: "EARTH-A",
  order: 5,
  title: "Gravity & Isostasy",
  definition: "Gravity is the attractive force that Earth exerts on all mass near its surface, varying slightly with location; isostasy is the principle that Earth's crust floats in gravitational equilibrium on the denser mantle beneath, with thicker (taller) regions having deeper 'roots'.",
  keyFacts: [
    "Standard surface gravity (g): 9.81 m/s² (often rounded to 9.8 m/s²)",
    "Variation: ~9.78 m/s² at the equator vs ~9.83 m/s² at the poles (~0.5% difference)",
    "Gravity is strongest at the poles (closer to Earth's centre + zero centrifugal effect) and weakest at the equator (farther from centre + maximum centrifugal effect)",
    "Gravity decreases with altitude: by about 0.3% per km of elevation",
    "Gravity anomalies: small local variations caused by mass distributions in the crust (ore bodies, salt domes, voids, mountain roots); measured with gravimeters",
    "Isostasy: the crust is in gravitational equilibrium on the plastic mantle — denser/thinner crust sits lower; less dense/thicker crust sits higher",
    "Mountains have deep 'roots' extending into the mantle, analogous to icebergs floating in water",
    "Two classical models of isostasy: Airy (uniform density, variable thickness) and Pratt (uniform thickness, variable density) — modern understanding is a hybrid",
    "Isostatic adjustment: when load is added or removed (e.g., glacier melts, sediment deposited), the crust slowly rises or sinks to restore equilibrium over thousands of years",
    "Examples: Scandinavia is still rising (rebounding) ~9 mm/year after the last ice age; the Himalayas are sinking slightly under their own weight while also being uplifted by tectonic forces"
  ],
  explanationSections: [
    { heading: "Why gravity varies across Earth's surface", body: "Earth's rotation produces a centrifugal acceleration that is strongest at the equator, partly offsetting gravity there. The equator is also ~21 km farther from Earth's centre than the poles, weakening gravity by the inverse-square law. The combination makes equatorial gravity about 0.5% weaker than polar gravity. Local geology introduces further small variations called gravity anomalies: dense bodies (ore deposits, basaltic intrusions) produce positive anomalies; light bodies (salt domes, voids) produce negative anomalies. These are measured with sensitive gravimeters and used in mineral and petroleum exploration." },
    { heading: "Isostasy — the 'floating crust' principle", body: "Think of the crust as blocks of wood floating in water: a thicker, less dense block (like a mountain range) floats higher and has a deeper submerged portion, just as a tall iceberg has a deeper underwater root. When mass is added to the surface (e.g., a thick ice sheet), the underlying crust sinks deeper into the mantle. When mass is removed (e.g., the ice melts), the crust slowly rebounds upward. This vertical adjustment happens over thousands of years because the mantle flows very slowly." },
    { heading: "Airy vs. Pratt: two ways to explain the same thing", body: "In the Airy model, the crust has uniform density but variable thickness: mountains are tall because they have deep roots. In the Pratt model, the crust has uniform thickness but variable density: mountains stand high because they are made of lighter rock. Real Earth combines both effects. Both models predict the same observable outcome: regions standing higher above sea level have more mass 'missing' below them in some sense, balanced by the floating condition. The isostatic anomaly is the difference between observed gravity and the gravity predicted by assuming full isostatic compensation." }
  ],
  examPoints: [
    "Standard surface gravity: 9.81 m/s² — used in physics problems unless otherwise stated",
    "Gravity is WEAKEST at the equator and STRONGEST at the poles (opposite of a common intuition)",
    "Isostasy: thicker crust = higher elevation AND deeper root",
    "Airy model: uniform density, variable thickness; Pratt model: uniform thickness, variable density",
    "Isostatic rebound (e.g., Scandinavia after ice age) is direct evidence for isostasy AND the plastic nature of the mantle",
    "Gravity anomalies: positive (dense body present) vs negative (light body or void)"
  ],
  formula: {
    name: "Newton's law of universal gravitation",
    expression: "F = G × (m₁ × m₂) / r²",
    variables: [
      { symbol: "F", meaning: "gravitational force (N)" },
      { symbol: "G", meaning: "gravitational constant, 6.674 × 10⁻¹¹ N·m²/kg²" },
      { symbol: "m₁, m₂", meaning: "masses of the two objects (kg)" },
      { symbol: "r", meaning: "distance between centres (m)" }
    ]
  },
  workedExample: {
    problem: "Using Newton's law of gravitation, estimate the gravitational acceleration g at Earth's surface. (Mass of Earth M = 5.97 × 10²⁴ kg; mean radius r = 6.371 × 10⁶ m; G = 6.674 × 10⁻¹¹ N·m²/kg²)",
    solution: "g = G × M / r² = (6.674 × 10⁻¹¹) × (5.97 × 10²⁴) / (6.371 × 10⁶)² = (3.984 × 10¹⁴) / (4.059 × 10¹³) ≈ 9.81 m/s².",
    answer: "g ≈ 9.81 m/s²"
  },
  relatedTopics: ["earth-a3", "earth-a4", "earth-d1", "earth-k1"],
  content: true,
  buildsOn: ["earth-a3", "phy-gravity-weight-friction", "phy-universal-gravitation", "phy-archimedes-principle"],
  leadsTo: ["earth-k3"],
  usedIn: ["earth-e2", "earth-f4", "earth-k3"]
},


// ════════════════════════════════════════════════════════════════════
// SECTION EARTH-B: Minerals & Rocks
// ════════════════════════════════════════════════════════════════════


{
  id: "earth-b1",
  sectionId: "EARTH-B",
  order: 1,
  title: "Minerals: Definition, Properties & Identification",
  definition: "A mineral is a naturally occurring, inorganic, solid substance with a definite chemical composition and an ordered (crystalline) atomic structure. Minerals are the building blocks of rocks and are identified using a set of physical properties.",
  keyFacts: [
    "Mineral: naturally occurring, inorganic, solid, defined chemical composition, crystalline structure",
    "NOT a mineral: water (liquid, not solid), coal (organic, derived from plants), obsidian (amorphous, no crystal structure), pearls (organic, made by organisms), opal (amorphous — it is a mineraloid, not a true mineral)",
    "Physical properties used in identification: color, streak, luster, hardness (Mohs scale), cleavage, fracture, density/specific gravity, crystal form, special properties (magnetism, reaction with acid, fluorescence)",
    "Mohs hardness scale (1–10): Talc (1) → Gypsum (2) → Calcite (3) → Fluorite (4) → Apatite (5) → Orthoclase Feldspar (6) → Quartz (7) → Topaz (8) → Corundum (9) → Diamond (10)",
    "Streak: the color of the powder of a mineral, often more reliable than the bulk color (e.g., hematite appears black or silver but has a RED streak)",
    "Luster: how a mineral reflects light — metallic (shiny, like metal) or non-metallic (vitreous/glassy, pearly, silky, greasy, dull, earthy)",
    "Cleavage: tendency to break along smooth, flat planes of weakness determined by crystal structure; described by number of planes and angles (e.g., mica — one perfect plane; galena — three planes at 90°; calcite — three planes not at 90°)",
    "Fracture: irregular or curved break with no preferred direction (e.g., conchoidal fracture in quartz)",
    "Crystal form: 7 main crystal systems (cubic, tetragonal, orthorhombic, hexagonal, trigonal, monoclinic, triclinic) reflecting internal atomic arrangement"
  ],
  explanationSections: [
    { heading: "Why each property matters", body: "A single property is rarely enough to identify a mineral — color is especially misleading because many minerals come in multiple colors (e.g., quartz can be clear, white, pink, purple, smoky). Hardness, streak, cleavage, and special properties (like the fizz of calcite in dilute HCl, or the magnetism of magnetite) together give a unique 'fingerprint'. In the field, hardness is tested with simple tools: fingernail (~2.5), copper coin (~3.5), steel knife (~5.5), glass plate (~5.5)." },
    { heading: "Cleavage vs. fracture — a common confusion", body: "Cleavage and fracture both describe how a mineral breaks, but they are not the same. Cleavage occurs along specific, smooth, flat planes determined by weak bonds in the crystal structure (e.g., mica splits into thin sheets). Fracture occurs when a mineral has no planes of weakness and breaks irregularly (e.g., quartz shows conchoidal fracture — smooth, curved, shell-like surfaces, similar to broken glass). A mineral can have both: e.g., galena shows perfect cubic cleavage but, if hit hard enough, can also fracture irregularly." },
    { heading: "The 7 crystal systems", body: "All minerals crystallize into one of 7 crystal systems, defined by the lengths and angles of their crystallographic axes: cubic (e.g., pyrite, halite), tetragonal (e.g., zircon), orthorhombic (e.g., olivine), hexagonal (e.g., quartz, ice), trigonal (e.g., calcite, dolomite), monoclinic (e.g., orthoclase, gypsum), and triclinic (e.g., plagioclase feldspar). The crystal system is the deepest expression of a mineral's internal atomic order." }
  ],
  examPoints: [
    "Five criteria to qualify as a mineral: solid, inorganic, naturally occurring, defined chemistry, crystalline — miss one and it's NOT a mineral (e.g., coal fails the 'inorganic' test; opal fails the 'crystalline' test)",
    "Streak is often MORE reliable than color — e.g., pyrite ('fool's gold') and gold both look metallic yellow, but pyrite has a blackish streak and gold has a yellow streak",
    "Mohs scale is ORDINAL (relative ranking), not linear: diamond (10) is about 4× harder than corundum (9), not 1.1× harder",
    "Calcite effervesces (fizzes) in dilute HCl — diagnostic test for CaCO₃ minerals",
    "Magnetite is the only naturally magnetic common mineral; lodestone is a naturally magnetized variety of magnetite"
  ],
  comparisonTable: {
    headers: ["Property", "What it describes", "Example"],
    rows: [
      ["Color", "Apparent color of the mineral", "Quartz: clear, pink, purple, etc."],
      ["Streak", "Color of the powder", "Hematite: red streak (despite dark color)"],
      ["Luster", "How it reflects light", "Galena: metallic; Quartz: vitreous"],
      ["Hardness", "Resistance to scratching (Mohs 1–10)", "Diamond = 10, Talc = 1"],
      ["Cleavage", "Tendency to break along flat planes", "Mica = 1 perfect plane"],
      ["Fracture", "Irregular break with no preferred plane", "Quartz: conchoidal"],
      ["Specific gravity", "Density relative to water", "Galena ~7.5 (very heavy)"],
      ["Crystal form", "External geometric shape (7 systems)", "Pyrite: cubic"]
    ]
  },
  relatedTopics: ["earth-b2", "earth-b3"],
  content: true,
  buildsOn: ["phy-states-of-matter", "phy-density"],
  leadsTo: ["earth-b2", "earth-b3"],
  usedIn: ["earth-b2", "earth-i4", "env-natural-resources"]
},


{
  id: "earth-b2",
  sectionId: "EARTH-B",
  order: 2,
  title: "Common Rock-Forming Minerals",
  definition: "A small number of minerals make up the vast majority of Earth's crust. These rock-forming minerals are mostly silicates, with carbonates, oxides, sulfates, and halides playing important secondary roles.",
  keyFacts: [
    "Most abundant crustal minerals (in order): feldspar (~60%), quartz (~12%), pyroxene, mica, amphibole, olivine, clay minerals, calcite, dolomite, gypsum, halite",
    "Silicates (built on the SiO₄ tetrahedron) make up ~90% of Earth's crust",
    "Quartz (SiO₂): very hard (Mohs 7), no cleavage, conchoidal fracture, glassy/vitreous luster, common in granite, sandstone, quartzite",
    "Feldspar: two main groups — K-feldspar (orthoclase, KAlSi₃O₈) and plagioclase (NaAlSi₃O₈ to CaAl₂Si₂O₈); makes up ~60% of crust; two cleavage planes at ~90°",
    "Mica: two common types — biotite (dark, iron-rich) and muscovite (light, no iron); perfect basal cleavage (peels in thin sheets)",
    "Pyroxene: e.g., augite; single cleavage at ~90°; dark, dense; common in basalt and gabbro",
    "Amphibole: e.g., hornblende; two cleavages at ~60°/120°; dark, elongated crystals; common in andesite and diorite",
    "Olivine (Mg,Fe)₂SiO₄: olive-green, no cleavage, dense; common in basalt and peridotite; weathers easily at the surface",
    "Calcite (CaCO₃): reacts vigorously with dilute HCl; rhombohedral cleavage; main component of limestone and marble",
    "Halite (NaCl) and gypsum (CaSO₄·2H₂O): evaporite minerals; halite tastes salty, gypsum is very soft (Mohs 2)"
  ],
  explanationSections: [
    { heading: "Why silicates dominate", body: "Silicon and oxygen are the two most abundant elements in Earth's crust (about 28% Si, 46% O by mass). They combine to form the silicon–oxygen tetrahedron (SiO₄⁴⁻), the fundamental building block of all silicate minerals. By sharing oxygen atoms between tetrahedra in different ways, silicates form the structural families: isolated tetrahedra (olivine), single chains (pyroxene), double chains (amphibole), sheets (mica), and frameworks (quartz, feldspar). This structural diversity explains why silicates cover such a wide range of physical properties." },
    { heading: "Quartz — the unweatherable mineral", body: "Quartz is exceptional because it is highly resistant to both chemical and physical weathering. It has no cleavage, only conchoidal fracture, and is made of pure Si–O bonds that are extremely strong. As a result, quartz survives long after other minerals have broken down, and it concentrates in mature sediments (sandstone) and residual soils. The white sands of many beaches are almost pure quartz." },
    { heading: "The feldspar family — most of the crust", body: "Feldspars are the single most abundant group of minerals, making up about 60% of Earth's crust. They are framework silicates with two cleavage planes at approximately 90°. The K-feldspars (orthoclase, microcline) carry potassium; the plagioclase series ranges from sodium-rich (albite) to calcium-rich (anorthite). Feldspars weather chemically to form clay minerals, releasing ions that eventually reach the ocean to form new minerals." }
  ],
  examPoints: [
    "Most abundant mineral group in Earth's crust: FELDSPAR (not quartz — a very common exam trap)",
    "Most abundant mineral in continental crust: feldspar; in oceanic crust: pyroxene and plagioclase",
    "Silicates = ~90% of Earth's crust; only ~10% are non-silicates (carbonates, oxides, sulfates, halides, etc.)",
    "Calcite effervesces in dilute HCl — this distinguishes it from dolomite, which only reacts when powdered",
    "Halite tastes salty, gypsum is very soft (Mohs 2) — both are evaporites"
  ],
  comparisonTable: {
    headers: ["Mineral", "Composition", "Mohs hardness", "Cleavage", "Key identifier"],
    rows: [
      ["Quartz", "SiO₂", "7", "None (conchoidal fracture)", "Glassy luster, no cleavage"],
      ["Feldspar (orthoclase)", "KAlSi₃O₈", "6", "2 planes at ~90°", "Pink/white, blocky crystals"],
      ["Feldspar (plagioclase)", "NaAlSi₃O₈–CaAl₂Si₂O₈", "6", "2 planes at ~90°", "Often shows striations"],
      ["Mica (muscovite)", "KAl₂(AlSi₃O₁₀)(OH)₂", "2–2.5", "1 perfect plane (sheets)", "Transparent thin sheets"],
      ["Mica (biotite)", "K(Mg,Fe)₃(AlSi₃O₁₀)(OH)₂", "2.5–3", "1 perfect plane (sheets)", "Dark/black sheets"],
      ["Olivine", "(Mg,Fe)₂SiO₄", "6.5–7", "None (conchoidal fracture)", "Olive-green, glassy"],
      ["Calcite", "CaCO₃", "3", "3 planes, not at 90°", "Fizzes in HCl"],
      ["Halite", "NaCl", "2.5", "3 planes at 90°", "Salty taste, cubic crystals"],
      ["Gypsum", "CaSO₄·2H₂O", "2", "1 perfect plane", "Very soft, can be scratched by fingernail"]
    ]
  },
  relatedTopics: ["earth-b1", "earth-b3"],
  content: true,
  buildsOn: ["earth-b1"],
  leadsTo: ["earth-b3", "earth-b4", "earth-b5"],
  usedIn: ["earth-b3", "earth-b4", "earth-b5", "earth-e1"]
},


{
  id: "earth-b3",
  sectionId: "EARTH-B",
  order: 3,
  title: "Igneous Rocks",
  definition: "Igneous rocks form from the cooling and solidification of magma (below the surface) or lava (at the surface). They are classified by texture (grain size) and composition (felsic, intermediate, mafic, ultramafic).",
  keyFacts: [
    "Igneous rocks form from cooled magma (intrusive/plutonic) or lava (extrusive/volcanic)",
    "Texture reflects cooling rate: slow cooling underground → coarse-grained (phaneritic); fast cooling at surface → fine-grained (aphanitic); very fast (in water or air) → glassy; gas-rich → vesicular (pumice)",
    "Composition is graded by silica content: felsic (>65% SiO₂, light-coloured, e.g., granite, rhyolite), intermediate (~55–65%, e.g., andesite, diorite), mafic (~45–55%, dark, e.g., basalt, gabbro), ultramafic (<45%, e.g., peridotite, komatiite)",
    "Common intrusive rocks: granite (felsic, coarse), diorite (intermediate, coarse), gabbro (mafic, coarse), peridotite (ultramafic, mantle source)",
    "Common extrusive rocks: rhyolite (felsic, fine), andesite (intermediate, fine), basalt (mafic, fine — most common volcanic rock on Earth)",
    "Special textures: porphyritic (large crystals in fine matrix, two stages of cooling); glassy (obsidian); vesicular (pumice, scoria); pyroclastic (tuff, volcanic breccia from explosive eruptions)",
    "Bowen's Reaction Series: a sequence describing the order in which minerals crystallize from a cooling magma — discontinuous series (olivine → pyroxene → amphibole → biotite) and continuous series (plagioclase: Ca-rich → Na-rich); quartz and K-feldspar crystallize last at the lowest temperatures",
    "Igneous rocks make up ~95% of Earth's crust by volume, though sedimentary rocks cover ~75% of the surface"
  ],
  explanationSections: [
    { heading: "Texture: the cooling-rate fingerprint", body: "The grain size of an igneous rock is a direct record of its cooling rate. Magma that cools slowly deep underground has time to grow large, visible crystals — producing coarse-grained (phaneritic) rocks like granite. Lava that cools quickly at the surface has too little time for crystal growth, producing fine-grained (aphanitic) rocks like basalt. Very rapid cooling (e.g., lava entering water) produces glassy textures with no crystals at all, as in obsidian. Gas-rich magmas produce vesicular textures full of bubble holes, as in pumice (so light it floats on water)." },
    { heading: "Composition: silica content and rock behaviour", body: "Silica (SiO₂) content controls both the mineralogy and the behaviour of a magma. Felsic magmas (>65% SiO₂) are rich in quartz and feldspar, low in iron and magnesium, light in colour, and very viscous — they erupt explosively because gases cannot easily escape. Mafic magmas (45–55% SiO₂) are rich in pyroxene, olivine, and Ca-plagioclase, dark in colour, and fluid — they erupt effusively as in Hawaiian-style lava flows. Ultramafic magmas (<45% SiO₂) are very rare at the surface but dominate the upper mantle." },
    { heading: "Bowen's Reaction Series — the cooling order", body: "N. L. Bowen's reaction series (1922) describes the order in which minerals crystallize from a cooling magma, and explains why certain minerals are always found together. The discontinuous branch goes olivine → pyroxene → amphibole → biotite, with each mineral becoming unstable as temperature drops and reacting with the melt to form the next. The continuous branch shows plagioclase gradually shifting from Ca-rich to Na-rich. Quartz and K-feldspar crystallize last at the lowest temperatures. The series also explains why quartz and olivine are almost never found in the same rock — they form at opposite ends of the cooling sequence." }
  ],
  examPoints: [
    "Igneous rocks make up ~95% of Earth's crust by VOLUME, but sedimentary rocks cover ~75% of the surface (by area)",
    "Coarse-grained = intrusive (cooled slowly underground); fine-grained = extrusive (cooled quickly at surface)",
    "Granite is the coarse-grained equivalent of rhyolite; gabbro is the coarse-grained equivalent of basalt",
    "Basalt is the most common volcanic rock on Earth (oceanic crust + most lava flows); granite is the most common plutonic rock (continental crust)",
    "Felsic = light coloured, high silica, viscous, explosive eruptions; Mafic = dark, low silica, fluid, effusive eruptions",
    "Bowen's series: high-temperature minerals (olivine, Ca-plagioclase) crystallize FIRST; low-temperature minerals (quartz, K-feldspar) crystallize LAST"
  ],
  comparisonTable: {
    headers: ["Composition", "SiO₂ %", "Colour", "Intrusive (coarse)", "Extrusive (fine)", "Eruption style"],
    rows: [
      ["Felsic", ">65%", "Light", "Granite", "Rhyolite", "Explosive"],
      ["Intermediate", "55–65%", "Medium", "Diorite", "Andesite", "Mixed"],
      ["Mafic", "45–55%", "Dark", "Gabbro", "Basalt", "Effusive (fluid flows)"],
      ["Ultramafic", "<45%", "Very dark", "Peridotite", "Komatiite (rare)", "Very hot, fluid"]
    ]
  },
  relatedTopics: ["earth-b1", "earth-b4", "earth-b5"],
  content: true,
  buildsOn: ["earth-b2", "earth-a4"],
  leadsTo: ["earth-b6", "earth-g1"],
  usedIn: ["earth-g1", "earth-g2", "earth-b6"]
},


{
  id: "earth-b4",
  sectionId: "EARTH-B",
  order: 4,
  title: "Sedimentary Rocks",
  definition: "Sedimentary rocks form at or near Earth's surface from the accumulation, compaction, and cementation of sediments, or from chemical and biological precipitation. They are the primary record of past environments, climates, and life.",
  keyFacts: [
    "Sedimentary rocks cover ~75% of Earth's continental surface (but only ~5% of crustal volume)",
    "Three main groups: clastic (from fragments of pre-existing rocks), chemical (from precipitation of minerals from solution), and organic/biogenic (from accumulation of biological material)",
    "Clastic rocks classified by grain size: conglomerate (rounded gravel), breccia (angular gravel), sandstone (sand), siltstone (silt), shale (clay — most common sedimentary rock)",
    "Chemical rocks form by evaporation (evaporites: halite, gypsum) or direct precipitation (limestone from CaCO₃)",
    "Organic/biogenic rocks: coal (from plant remains), fossiliferous limestone (from shells and skeletons), chalk (from microscopic coccolithophores)",
    "Lithification process: burial → compaction (squeezes out water) → cementation (minerals like calcite, silica, or iron oxides precipitate between grains and bind them)",
    "Key features: layering (bedding/stratification), fossils, ripple marks, mud cracks, cross-bedding, graded bedding",
    "Sorting: well-sorted sediments (uniform grain size) indicate long transport or constant energy; poorly-sorted indicate rapid deposition",
    "Roundness: well-rounded grains indicate long transport; angular grains indicate short transport from source"
  ],
  explanationSections: [
    { heading: "From sediment to rock — lithification", body: "Loose sediment at the surface becomes solid rock through lithification, a two-step process. First, as more sediment piles on top, the weight compacts the deeper layers, squeezing out water and reducing pore space. Second, minerals dissolved in groundwater (commonly calcite, silica, or iron oxides) precipitate in the remaining pore spaces, acting as a 'cement' that binds the grains together. Without this cement, sandstone would crumble in your hand." },
    { heading: "Why sedimentary rocks are special", body: "Sedimentary rocks are the only rocks that routinely contain fossils and that record past surface environments. A sandstone with cross-bedding tells us about ancient wind or water direction; a shale with marine fossils tells us the area was once under the sea; a conglomerate with angular clasts tells us of rapid erosion near a mountain front. This is why sedimentary rocks are central to stratigraphy, paleontology, and the search for oil, gas, and water." },
    { heading: "Chemical and organic rocks", body: "Not all sedimentary rocks are made of broken fragments. Chemical sedimentary rocks form when dissolved minerals precipitate out of water. Limestone (CaCO₃) precipitates from warm shallow seas and from coral reefs; evaporites (halite, gypsum) form when restricted bodies of seawater evaporate. Organic sedimentary rocks (coal, some limestones) are made from the remains of once-living organisms. Coal, for example, forms from compressed plant material in swampy environments." }
  ],
  examPoints: [
    "Shale is the most abundant sedimentary rock (~50% of all sedimentary rocks by volume)",
    "Lithification = compaction + cementation (NOT cooling — that's for igneous rocks)",
    "Clastic rocks are classified primarily by grain size: gravel → sand → silt → clay",
    "Limestone effervesces in dilute HCl due to CaCO₃; chalk is a soft, fine-grained limestone made of microscopic shells",
    "Fossils occur ONLY in sedimentary rocks (with very rare exceptions like fossils preserved in basalt) — igneous and metamorphic processes generally destroy them"
  ],
  comparisonTable: {
    headers: ["Grain size", "Clastic rock", "Notes"],
    rows: [
      [">2 mm (rounded)", "Conglomerate", "Gravel, rounded by transport"],
      [">2 mm (angular)", "Breccia", "Gravel, little transport"],
      ["0.06–2 mm", "Sandstone", "Sand-sized grains, often quartz"],
      ["0.004–0.06 mm", "Siltstone", "Silt-sized grains"],
      ["<0.004 mm", "Shale (or mudstone)", "Clay-sized, fissile (splits in layers)"],
      ["Chemical", "Limestone (CaCO₃)", "Often from marine organisms"],
      ["Chemical", "Rock salt (halite)", "Evaporite from seawater"],
      ["Organic", "Coal", "Compressed plant material"]
    ]
  },
  relatedTopics: ["earth-b3", "earth-b5", "earth-b6"],
  content: true,
  buildsOn: ["earth-b2", "earth-e1"],
  leadsTo: ["earth-b6", "earth-c1"],
  usedIn: ["earth-c1", "earth-e3", "earth-j2"]
},


{
  id: "earth-b5",
  sectionId: "EARTH-B",
  order: 5,
  title: "Metamorphic Rocks",
  definition: "Metamorphic rocks form when pre-existing rocks (igneous, sedimentary, or other metamorphic rocks) are transformed by heat, pressure, and/or chemically active fluids — without melting. The parent rock is called the protolith.",
  keyFacts: [
    "Metamorphism: solid-state transformation of rock by heat (>200 °C, below melting), pressure, and/or fluid activity",
    "Two main types of metamorphism: contact (thermal, from nearby magma — heat-dominant) and regional (from tectonic burial and mountain building — pressure-dominant)",
    "Other types: hydrothermal (hot fluids alter rock), dynamic/cataclastic (along faults, mechanical破碎), burial (deep sedimentary basins), shock (meteorite impacts)",
    "Metamorphic grade: low-grade (low T, low P) → high-grade (high T, high P), passing through index minerals in order: chlorite → biotite → garnet → staurolite → kyanite → sillimanite",
    "Foliated texture: parallel alignment of platy or elongated minerals (e.g., slate, phyllite, schist, gneiss) — produced by directed (differential) pressure",
    "Non-foliated texture: no preferred mineral orientation; formed where pressure is uniform or parent rock lacks platy minerals (e.g., marble, quartzite, hornfels)",
    "Metamorphic rock series: slate (low grade) → phyllite → schist → gneiss (high grade); each can have a specific protolith (e.g., shale → slate → phyllite → schist → gneiss)",
    "Index minerals: minerals that indicate a specific range of metamorphic conditions (P, T); used to map metamorphic zones",
    "Metamorphic rocks are generally harder, denser, and more resistant to weathering than their parent rocks"
  ],
  explanationSections: [
    { heading: "Why metamorphism happens without melting", body: "Metamorphism takes place in the 'Goldilocks zone' between diagenesis (low-T changes in sediments) and melting (igneous processes). Temperatures of ~200–800 °C and pressures of a few hundred MPa to >1 GPa are typical. At these conditions, existing minerals become unstable and recrystallize into new minerals that are stable at the new conditions, all while the rock remains solid. If temperatures exceed the melting point, the rock becomes magma and the process is no longer metamorphism but rather the start of the igneous cycle." },
    { heading: "Foliation: the directed-pressure fingerprint", body: "Foliation is the parallel alignment of platy minerals (micas, chlorite) or the segregation of minerals into light and dark bands. It forms when pressure is directional (differential stress), as in tectonic collisions and mountain building. With increasing metamorphic grade, foliation becomes more pronounced: slate (slaty cleavage) → phyllite (silky sheen) → schist (visible mica flakes) → gneiss (alternating light and dark bands). In contrast, contact metamorphism around magma bodies has uniform pressure, so it typically produces non-foliated rocks like hornfels and marble." },
    { heading: "Protolith control: parent rock matters", body: "The protolith determines the chemical starting point and limits the possible metamorphic products. Shale (rich in clay) → slate, phyllite, schist, gneiss. Limestone (CaCO₃) → marble. Quartz sandstone (SiO₂) → quartzite. Basalt (mafic igneous) → greenschist, amphibolite, or eclogite (with increasing grade). The same metamorphic conditions on different protoliths produce different rocks — an important point when interpreting metamorphic terranes in the field." }
  ],
  examPoints: [
    "Metamorphism happens WITHOUT melting — if it melts, it becomes magma and re-enters the igneous cycle",
    "Foliated = aligned minerals (slate, schist, gneiss); non-foliated = no alignment (marble, quartzite, hornfels)",
    "Slate forms from shale; marble from limestone; quartzite from quartz sandstone — these are the three classic non-foliated examples",
    "Contact metamorphism = heat-dominant, around magma intrusions (low pressure, high T); produces non-foliated rocks",
    "Regional metamorphism = pressure-dominant, in mountain belts and convergent margins; produces foliated rocks",
    "Increasing metamorphic grade index minerals: chlorite → biotite → garnet → staurolite → kyanite → sillimanite"
  ],
  comparisonTable: {
    headers: ["Metamorphic rock", "Texture", "Typical protolith", "Grade"],
    rows: [
      ["Slate", "Foliated (slaty cleavage)", "Shale", "Low"],
      ["Phyllite", "Foliated (silky sheen)", "Shale", "Low–medium"],
      ["Schist", "Foliated (visible mica)", "Shale, basalt", "Medium"],
      ["Gneiss", "Foliated (banded)", "Shale, granite", "High"],
      ["Marble", "Non-foliated", "Limestone", "Any"],
      ["Quartzite", "Non-foliated", "Quartz sandstone", "Any"],
      ["Hornfels", "Non-foliated", "Any (contact)", "Variable"]
    ]
  },
  relatedTopics: ["earth-b3", "earth-b4", "earth-b6", "earth-f1"],
  content: true,
  buildsOn: ["earth-b2", "earth-a4", "earth-f1"],
  leadsTo: ["earth-b6"],
  usedIn: ["earth-b6", "earth-f4"]
},


{
  id: "earth-b6",
  sectionId: "EARTH-B",
  order: 6,
  title: "The Rock Cycle",
  definition: "The rock cycle is the continuous geological process by which rocks of one type are transformed into rocks of another type through igneous, sedimentary, and metamorphic processes. There is no fixed starting point — any rock can become any other rock given the right conditions.",
  keyFacts: [
    "The rock cycle is driven by Earth's internal heat (drives igneous and metamorphic processes) and by solar energy + gravity (drive weathering, erosion, and sedimentation at the surface)",
    "Igneous rocks form from cooling magma/lava; sedimentary from compaction of sediments; metamorphic from heat/pressure transformation",
    "Any rock type can be transformed into any other: igneous → sedimentary (via weathering) → metamorphic (via heat/pressure) → igneous again (via melting)",
    "Key processes in the cycle: melting, cooling/crystallization, weathering, erosion, transport, deposition, compaction, cementation (lithification), metamorphism",
    "Rocks that melt completely become magma; partial melting produces a new magma of different composition (the basis of igneous differentiation)",
    "Rocks exposed at the surface undergo weathering and erosion; the resulting sediments are transported (by water, wind, ice, gravity) and eventually deposited in basins",
    "The rock cycle is NOT a one-way path — it is a network of possible transformations, and the path a particular rock takes depends on its tectonic setting",
    "Plate tectonics drives much of the rock cycle: subduction produces metamorphism and melting; mid-ocean ridges produce new igneous crust; surface uplift exposes rocks to weathering"
  ],
  explanationSections: [
    { heading: "Why the rock cycle has no beginning or end", body: "Unlike a biological life cycle, the rock cycle has no fixed starting point. A granite (igneous) exposed at the surface may weather into sand grains, which become sandstone (sedimentary); that sandstone may be buried and heated into quartzite (metamorphic); that quartzite may be carried deep into the mantle by subduction and melt, becoming magma that cools into a new igneous rock — perhaps a different granite. The same granite could also be buried and metamorphosed into gneiss without ever becoming a sediment. The path depends on what tectonic processes act on the rock." },
    { heading: "Energy sources for the rock cycle", body: "Two main energy sources power the rock cycle. (1) Earth's internal heat (primordial + radiogenic) drives processes that occur at depth: melting (igneous), and high-T/high-P recrystallization (metamorphic). It also drives plate tectonics, which transports rocks between settings. (2) Solar energy + gravity drive processes at the surface: heating/cooling breaks rocks (physical weathering); water, wind, and ice erode and transport sediments; gravity pulls material downslope. Without the Sun, surface processes would freeze; without Earth's heat, deep processes would stop." },
    { heading: "Tectonic settings and rock types", body: "Different tectonic settings produce different rock types. Mid-ocean ridges produce basalt (mafic igneous) by decompression melting. Subduction zones produce andesite, granite, and metamorphic rocks (schist, gneiss) at depth, while surface volcanoes erupt andesite and rhyolite. Continental collision zones produce regional metamorphic rocks (schist, gneiss, marble) and folded sedimentary rocks. Stable cratons are dominated by ancient igneous and metamorphic rocks, with thin sedimentary cover. The rock cycle is therefore tightly coupled to plate tectonics." }
  ],
  examPoints: [
    "The rock cycle has NO fixed starting point — it is a network of possible transformations",
    "Internal heat drives: melting (igneous), metamorphism, plate tectonics",
    "External energy (solar + gravity) drives: weathering, erosion, transport, deposition",
    "Subduction carries surface rocks to depth, where they melt or metamorphose — a key link between surface and deep Earth processes",
    "Any rock can become any other rock given the right conditions — this is the central idea of the cycle"
  ],
  workedExample: {
    problem: "A basalt formed at a mid-ocean ridge is subducted beneath a continent. Describe the rock cycle path it may follow from basalt to granite.",
    solution: "Step 1 — The basalt (igneous) is carried into the subduction zone on the oceanic plate. Step 2 — Under high pressure and water released from the slab, the basalt metamorphoses into greenschist or amphibolite (metamorphic). Step 3 — As the slab descends further, parts of it partially melt. The melt, being more silica-rich than basalt, rises into the overlying continental crust. Step 4 — In the continental crust, the melt cools slowly to form granite (igneous, felsic). The original basalt has now become a granite via metamorphism and remelting.",
    answer: "Basalt (igneous) → amphibolite (metamorphic) → partial melt → granite (igneous)"
  },
  relatedTopics: ["earth-b3", "earth-b4", "earth-b5", "earth-d1"],
  content: true,
  buildsOn: ["earth-b3", "earth-b4", "earth-b5"],
  leadsTo: ["earth-e1"],
  usedIn: ["earth-e1", "env-natural-resources", "env-productivity-and-biogeochemical-cycles"]
},


// ════════════════════════════════════════════════════════════════════
// SECTION EARTH-C: Geological Time & Fossils
// ════════════════════════════════════════════════════════════════════


{
  id: "earth-c1",
  sectionId: "EARTH-C",
  order: 1,
  title: "Relative Dating & Stratigraphic Principles",
  definition: "Relative dating places geological events in sequence (older vs. younger) without assigning numerical ages. It relies on a set of simple, logical principles that govern how rock layers and their contained features relate in time.",
  keyFacts: [
    "Law of Superposition: in any undisturbed sequence of sedimentary rocks, the oldest layer is at the bottom and the youngest is at the top",
    "Principle of Original Horizontality: sedimentary layers are originally deposited as horizontal sheets; tilting or folding must have occurred AFTER deposition",
    "Principle of Lateral Continuity: sedimentary layers extend continuously in all directions until they thin out, meet a barrier, or grade into a different facies",
    "Principle of Cross-Cutting Relationships: a feature that cuts across another is younger than the feature it cuts (e.g., a fault or intrusion is younger than the rock it cuts)",
    "Principle of Inclusions: rock fragments (clasts) included within another rock are OLDER than the host rock; the host must have been there to incorporate them",
    "Principle of Faunal Succession: fossil organisms succeed one another in a definite, recognisable order; the same fossil assemblage is always of the same age (basis of biostratigraphy)",
    "Unconformities: surfaces representing missing time — produced by erosion or non-deposition; disconformity (between parallel beds), angular unconformity (tilted below, horizontal above), non-conformity (sedimentary on igneous/metamorphic)",
    "Relative dating gives ORDER, not numerical ages; it must be combined with absolute dating (radiometric) for a true geological time scale"
  ],
  explanationSections: [
    { heading: "Why the principles are so robust", body: "Each relative-dating principle is essentially an application of common sense to undisturbed rock sequences. Sediment settles in water under gravity — naturally horizontal. New sediment is deposited on top of old — superposition. A fracture or intrusion cannot exist before the rock it cuts — cross-cutting. These simple logical rules, applied consistently, allow geologists to reconstruct sequences of events in regions where no absolute dates are available. The principles were first articulated by Nicolas Steno (17th century) and remain foundational." },
    { heading: "Unconformities — windows of missing time", body: "An unconformity is a surface that represents a gap in the geological record, often millions or billions of years long. Three main types are recognized: (1) disconformity — an erosional surface between parallel sedimentary layers; (2) angular unconformity — tilted or folded rocks below, overlain by horizontal layers (the classic case: tilted beds eroded, then new horizontal beds deposited on top); (3) non-conformity — sedimentary rocks resting on eroded igneous or metamorphic rocks. Each represents uplift, erosion, and renewed subsidence." },
    { heading: "The logic of inclusions and cross-cutting", body: "Two of the most useful principles for working out complex sequences are inclusions and cross-cutting. A granite intrusion cutting sandstone must be younger than the sandstone. A granite boulder embedded in the sandstone must be OLDER than the sandstone (it was eroded from a pre-existing granite and incorporated as a clast). These two principles often work together to pin down the order of events in regions with igneous activity, faulting, and sedimentation interleaved." }
  ],
  examPoints: [
    "Law of Superposition applies ONLY to undisturbed sequences — folding, faulting, or overturning can put older rocks on top of younger",
    "Cross-cutting relationships: the cutter is YOUNGER than the cut (a fault or dyke is younger than the rock it cuts)",
    "Inclusions: the inclusion is OLDER than the host rock (a granite clast in sandstone is older than the sandstone)",
    "Unconformities represent MISSING TIME, not just an erosional surface",
    "Relative dating gives order only; absolute dating (radiometric) gives numerical ages in years"
  ],
  comparisonTable: {
    headers: ["Principle", "Statement", "Use"],
    rows: [
      ["Superposition", "Oldest at bottom, youngest at top (undisturbed)", "Sequencing of sedimentary layers"],
      ["Original horizontality", "Sediments deposited horizontally", "Recognizing post-depositional tilting/folding"],
      ["Lateral continuity", "Layers extend until they thin out or meet a barrier", "Mapping the extent of a bed"],
      ["Cross-cutting", "The cutter is younger than what it cuts", "Dating intrusions, faults, veins"],
      ["Inclusions", "The included fragment is older than the host", "Dating clasts in conglomerates or xenoliths"],
      ["Faunal succession", "Fossils succeed one another in a definite order", "Biostratigraphy and correlation"]
    ]
  },
  relatedTopics: ["earth-c2", "earth-c3"],
  content: true,
  buildsOn: ["earth-b4"],
  leadsTo: ["earth-c2", "earth-c3"],
  usedIn: ["earth-c3", "earth-d1"]
},


{
  id: "earth-c2",
  sectionId: "EARTH-C",
  order: 2,
  title: "Absolute Dating & Radiometric Methods",
  definition: "Absolute (numerical) dating determines the actual age of a rock or mineral in years, using the predictable decay of radioactive isotopes. The most reliable methods are radiometric, based on the constant half-lives of parent–daughter isotope pairs.",
  keyFacts: [
    "Radioactive decay: unstable parent isotopes decay to stable daughter isotopes at a fixed rate, independent of temperature, pressure, or chemical environment",
    "Half-life (t½): the time for half of the parent atoms in a sample to decay to daughter atoms; ranges from fractions of a second to billions of years",
    "After n half-lives, the remaining parent fraction is (1/2)ⁿ: 1 half-life → 50% parent left; 2 → 25%; 3 → 12.5%; 10 → ~0.1%",
    "The decay constant (λ) and half-life are related: t½ = ln(2)/λ ≈ 0.693/λ",
    "Carbon-14 → Nitrogen-14: t½ = 5,730 years; used for organic material up to ~50,000–60,000 years (young fossils, archaeological)",
    "Potassium-40 → Argon-40: t½ = 1.25 billion years; used for volcanic rocks, micas, feldspars (very wide range, ~100 ka to billions of years)",
    "Uranium-238 → Lead-206: t½ = 4.47 billion years; used for very old rocks (zircon, uraninite)",
    "Uranium-235 → Lead-207: t½ = 704 million years; cross-check with U-238",
    "Rubidium-87 → Strontium-87: t½ = 48.8 billion years; used for very old metamorphic and igneous rocks",
    "For a radiometric date to be valid, the system must have been a CLOSED system since the rock formed (no loss or gain of parent or daughter)",
    "The most reliable dates come from IGNEOUS rocks: zircon crystals (U-Pb), micas and feldspars (K-Ar, Rb-Sr)",
    "Sedimentary rocks are usually dated INDIRECTLY by dating volcanic layers above or below them"
  ],
  explanationSections: [
    { heading: "How radiometric dating works", body: "When a mineral crystallizes from magma, it incorporates certain elements but excludes others. For example, zircon (ZrSiO₄) readily accepts uranium (U) but strongly rejects lead (Pb). The moment the zircon crystal forms, its U-Pb 'clock' is set to zero — no lead, only uranium. From that moment on, the fixed rate of U decay produces Pb at a known rate. Measuring the current U/Pb ratio therefore gives the time since the crystal formed. Other parent–daughter pairs work similarly, each best suited to a particular age range and mineral." },
    { heading: "Half-life mathematics", body: "If a sample starts with N₀ parent atoms, after one half-life it has N₀/2; after two, N₀/4; after three, N₀/8, and so on. The fraction remaining is (1/2)ⁿ where n is the number of half-lives elapsed. The age is calculated as t = (ln(N₀/N))/λ, where N is the current number of parent atoms. In practice, labs measure the parent/daughter ratio (P/D) and use t = (ln(1 + D/P))/λ. A key point: after ~10 half-lives, less than 0.1% of the parent remains, and the measurement becomes very imprecise — this is why each method has a practical age range." },
    { heading: "Why dating sedimentary rocks is harder", body: "Sedimentary rocks are made of fragments eroded from older rocks, so any mineral grain in a sandstone is older than the sandstone itself. Dating a sandstone directly would give the age of the source, not the deposition. The standard workaround is to find volcanic layers (ash beds, lava flows) interbedded with the sedimentary sequence and date those — the sedimentary layer is then bracketed between the two volcanic ages. This is one reason why the geological time scale is built primarily from igneous and metamorphic rocks, with sedimentary ages interpolated." }
  ],
  examPoints: [
    "The half-life is a CONSTANT — it does not change with temperature, pressure, or chemical state. This is what makes radiometric dating reliable.",
    "Carbon-14 dating works only for organic material younger than ~50,000–60,000 years (about 10 half-lives); for older materials, use K-Ar or U-Pb",
    "Zircon is the workhorse of U-Pb dating: it accepts U but rejects Pb when it forms, so any Pb measured is from radioactive decay",
    "Closed system assumption: no parent or daughter atoms have been added or removed since the rock formed. Loss of argon (in K-Ar) or gain of lead can produce erroneously young or old ages",
    "Concordia diagrams: plotting U-Pb ratios from two decay chains (U-238→Pb-206 and U-235→Pb-207) as a cross-check; concordant points lie on a curve, discordant points indicate lead loss"
  ],
  workedExample: {
    problem: "A sample of wood from an archaeological site contains 25% of the original Carbon-14. The half-life of C-14 is 5,730 years. How old is the sample?",
    solution: "25% remaining = 2 half-lives elapsed (100% → 50% → 25%). Age = 2 × 5,730 = 11,460 years.",
    answer: "11,460 years"
  },
  relatedTopics: ["earth-c1", "earth-c3"],
  content: true,
  buildsOn: ["earth-c1", "phy-radioactivity-nuclear", "phy-half-life-decay", "math-3-1", "math-3-3"],
  leadsTo: ["earth-c3"],
  usedIn: ["earth-c3", "earth-k4", "h-past-climate-reconstruction", "ra-descriptive-statistics", "ra-correlation-regression", "ra-data-interpretation"]
},


{
  id: "earth-c3",
  sectionId: "EARTH-C",
  order: 3,
  title: "The Geological Time Scale & Fossils",
  definition: "The geological time scale (GTS) divides Earth's 4.6-billion-year history into a hierarchy of named intervals — eons, eras, periods, and epochs — based on major changes in geology, climate, and life. It is built from absolute dates and the fossil record.",
  keyFacts: [
    "Earth's age: ~4.6 billion years (4,600 Ma)",
    "Hierarchy (largest to smallest): Eon → Era → Period → Epoch → Age",
    "Four eons (oldest to youngest): Hadean (>4.0 Ga), Archean (4.0–2.5 Ga), Proterozoic (2.5 Ga–541 Ma), Phanerozoic (541 Ma–present)",
    "Phanerozoic Eon divided into three eras: Paleozoic (541–252 Ma, 'ancient life'), Mesozoic (252–66 Ma, 'middle life' — age of dinosaurs), Cenozoic (66 Ma–present, 'recent life' — age of mammals)",
    "Phanerozoic periods (youngest to oldest): Quaternary, Neogene, Paleogene (Cenozoic); Cretaceous, Jurassic, Triassic (Mesozoic); Permian, Carboniferous, Devonian, Silurian, Ordovician, Cambrian (Paleozoic)",
    "Major boundaries mark mass extinctions (e.g., K-Pg boundary at 66 Ma ended the dinosaurs; P-Tr at 252 Ma was the largest mass extinction)",
    "Fossils: preserved remains, traces, or imprints of ancient organisms",
    "Fossil preservation types: permineralization (petrification, e.g., petrified wood), molds and casts, amber (insects in tree resin), carbonization (leaves, graptolites), trace fossils (footprints, burrows), original material (rare, e.g., mammoth in permafrost)",
    "Index fossil: a fossil of an organism that was widespread, abundant, easily identified, and existed for a SHORT geological time (e.g., ammonites, trilobites, foraminifera)",
    "Environmental indicators: some fossils indicate past environments — e.g., corals = warm shallow seas; coal plants = tropical swamps; marine plankton = open ocean"
  ],
  explanationSections: [
    { heading: "How the time scale is built", body: "The geological time scale is constructed by combining absolute (radiometric) dates with relative (fossil-based) correlations. The absolute dates come from volcanic layers interbedded with fossil-bearing sediments. The fossils allow rocks of the same age to be correlated across continents — for example, a Cambrian trilobite in Wales matches a Cambrian trilobite in China. The two methods together produce a globally consistent time scale whose boundaries are now formally defined by 'Global Boundary Stratotype Sections and Points' (GSSPs) — the international reference outcrops for each boundary." },
    { heading: "Fossils and what they tell us", body: "Fossils are the primary record of the history of life, but they also reveal ancient environments, climates, and geographies. Coral reefs in a limestone tells of a tropical sea; fossil leaves with broad flat shapes indicate a warm, humid climate; marine plankton in deep-sea sediments tells of open ocean; coal seams with tropical plant fossils suggest a former equatorial swamp. Plate tectonics uses fossils to reconstruct past positions of continents (e.g., the same Glossopteris flora in South America, Africa, India, and Australia was key evidence for Gondwana)." },
    { heading: "Mass extinctions and the boundaries", body: "Many of the major boundaries on the time scale correspond to mass extinction events. The 'Big Five' mass extinctions are: end-Ordovician (~445 Ma), Late Devonian (~375 Ma), end-Permian (~252 Ma, the largest), end-Triassic (~201 Ma), and end-Cretaceous (66 Ma, the K-Pg event that ended non-avian dinosaurs). Each is marked by a sharp drop in fossil diversity in the rock record and is associated with major environmental changes — flood basalts, asteroid impacts, ocean anoxia, or glaciations." }
  ],
  examPoints: [
    "Earth's age is ~4.6 billion years; life became abundant only in the Phanerozoic (last 541 Ma, ~12% of Earth history)",
    "Phanerozoic means 'visible life' — almost all fossils in collections are from this eon",
    "The largest mass extinction was at the end of the Permian (~252 Ma), not the end of the Cretaceous",
    "Cenozoic = 'age of mammals'; Mesozoic = 'age of dinosaurs'; Paleozoic = 'age of ancient life / fish / amphibians'",
    "Index fossils must be: widespread, abundant, easy to identify, and SHORT-LIVED (geologically)",
    "Fossils can be 'original material' (rare — mammoths in permafrost, insects in amber) or replaced by minerals (petrification)"
  ],
  comparisonTable: {
    headers: ["Eon", "Age range", "Era(s)", "Major life events"],
    rows: [
      ["Hadean", ">4.0 Ga", "—", "Earth formation, molten surface, no life"],
      ["Archean", "4.0–2.5 Ga", "—", "First life (prokaryotes), first photosynthesis"],
      ["Proterozoic", "2.5 Ga–541 Ma", "—", "Oxygen atmosphere, first eukaryotes, first multicellular life, snowball Earth"],
      ["Phanerozoic", "541 Ma–present", "Paleozoic, Mesozoic, Cenozoic", "Abundant visible life; fish, land plants, amphibians, reptiles, dinosaurs, mammals, humans"]
    ]
  },
  // Note: secondary table for Phanerozoic eras (kept for exam reference; original had duplicate key)
  comparisonTableEras: {
    headers: ["Era", "Span", "Periods (in order)", "Key events"],
    rows: [
      ["Cenozoic", "66 Ma–present", "Paleogene, Neogene, Quaternary", "Mammals diversify; humans appear; ice ages"],
      ["Mesozoic", "252–66 Ma", "Triassic, Jurassic, Cretaceous", "Dinosaurs, first mammals, first birds, Pangea breakup"],
      ["Paleozoic", "541–252 Ma", "Cambrian, Ordovician, Silurian, Devonian, Carboniferous, Permian", "Cambrian explosion, fish, land plants, amphibians, reptiles; ends with the largest mass extinction"]
    ]
  },
  relatedTopics: ["earth-c1", "earth-c2"],
  content: true,
  buildsOn: ["earth-c1", "earth-c2"],
  leadsTo: ["earth-d1"],
  usedIn: ["h-past-climate-reconstruction", "env-conservation-and-extinction"]
},




// ════════════════════════════════════════════════════════════════════
// SECTION EARTH-D: Plate Tectonics
// ════════════════════════════════════════════════════════════════════


{
  id: "earth-d1",
  sectionId: "EARTH-D",
  order: 1,
  title: "Continental Drift (Wegener, 1912)",
  definition: "Continental drift is the hypothesis — proposed by Alfred Wegener in 1912 — that the continents were once joined in a single supercontinent (Pangaea) and have since drifted apart to their present positions. Wegener's evidence was strong but his proposed mechanism was wrong, and the idea was not widely accepted until the plate tectonic revolution of the 1960s.",
  keyFacts: [
    "Pangaea: a single supercontinent that existed ~250–300 Ma, surrounded by a single global ocean (Panthalassa)",
    "Pangaea later split into two: Laurasia (northern) and Gondwana (southern)",
    "Gondwana fragments: South America, Africa, India, Australia, Antarctica",
    "Laurasia fragments: North America, Europe, Asia (excluding India)",
    "Continental fit: the coastlines of South America and Africa fit together like puzzle pieces (noted by Bacon in 1620, formalized by Wegener)",
    "Matching fossils: Mesosaurus (a freshwater reptile) found in BOTH South America and Africa; Glossopteris (a seed fern) in all southern continents; Lystrosaurus in Africa, India, Antarctica",
    "Matching rock types and mountain belts: the Appalachian Mountains (eastern North America) match the Caledonian Mountains (Scotland and Scandinavia) in age and structure",
    "Paleoclimatic evidence: glacial deposits (tillites) of the same age in South America, Africa, India, Australia, and Antarctica — implies these continents were once joined near the South Pole; tropical coal deposits in present-day temperate regions",
    "Wegener's proposed mechanism (continents plowing through oceanic crust driven by centrifugal and tidal forces) was WRONG and was the main reason most geologists rejected the hypothesis",
    "Wegener's evidence was correct, but the mechanism had to await the plate tectonic theory of the 1960s"
  ],
  explanationSections: [
    { heading: "The case Wegener built", body: "Wegener compiled four main lines of evidence, all of which individually had alternative explanations but together were very persuasive. The jigsaw fit of Atlantic coastlines had been noticed earlier, but Wegener showed that the match was even better at the continental shelf edge, not just the modern coastline. Fossils like Mesosaurus and Glossopteris are found only on continents now separated by oceans, but the organisms could not have crossed vast saltwater barriers — especially a freshwater reptile. Matching mountain belts and rock types across the Atlantic (Appalachians–Caledonides) implied a continuous range that had been split apart. And the distribution of Permo-Carboniferous glacial deposits across all southern continents could only be explained if those continents were joined together near the South Pole." },
    { heading: "Why continental drift was rejected in Wegener's lifetime", body: "Although Wegener's evidence was compelling, his proposed mechanism — that continents plowed through oceanic crust like ships through sea ice, driven by centrifugal and tidal forces — was physically impossible. The oceanic crust is too strong, and the forces he proposed far too weak. Prominent geologists of the day (especially in the USA and Britain) ridiculed the hypothesis. Wegener died in 1930 on a Greenland expedition, with his ideas still largely rejected. It took the discovery of seafloor spreading (Hess, 1960) and magnetic stripes on the seafloor (Vine & Matthews, 1963) to provide the missing mechanism and convince the geological community." },
    { heading: "Pangaea to present", body: "Pangaea began breaking apart in the Mesozoic (~200 Ma). First, a north-south rift split it into Laurasia and Gondwana (with the Tethys Sea between them). Then Gondwana fragmented: South America–Africa separated from the rest, then South America split from Africa (opening the South Atlantic), and India rifted from Antarctica and drifted north to collide with Asia (forming the Himalayas). Australia separated from Antarctica ~50 Ma. Today the continents are still moving — the Atlantic is widening at ~2–4 cm/year, and the Pacific is shrinking." }
  ],
  examPoints: [
    "Wegener proposed continental drift in 1912 — not 'invented' plate tectonics (which is 1960s)",
    "Wegener's EVIDENCE was correct; his MECHANISM (centrifugal/tidal forces plowing through oceanic crust) was wrong",
    "Mesosaurus is the classic fossil used to argue for the South America–Africa connection — it was a freshwater reptile unable to cross oceans",
    "Glossopteris flora is found across all southern Gondwana continents — a key biostratigraphic argument",
    "Pangaea began breaking apart ~200 Ma (Mesozoic); India collided with Asia ~50 Ma to form the Himalayas"
  ],
  relatedTopics: ["earth-d2", "earth-d3", "earth-i1"],
  content: true,
  buildsOn: ["earth-c3", "earth-a1"],
  leadsTo: ["earth-d2"],
  usedIn: ["earth-d2"]
},


{
  id: "earth-d2",
  sectionId: "EARTH-D",
  order: 2,
  priority: "high", // 🔴 syllabus
  title: "Plate Tectonic Theory",
  definition: "Plate tectonics is the unifying theory that Earth's lithosphere is divided into ~15 major plates (and many smaller ones) that move relative to one another on the asthenosphere. Their interactions at boundaries produce earthquakes, volcanism, mountain building, and the opening and closing of ocean basins.",
  keyFacts: [
    "Earth's lithosphere is broken into about 15 major plates (e.g., Pacific, North American, Eurasian, African, South American, Indo-Australian, Antarctic) and many smaller ones (Nazca, Cocos, Caribbean, Arabian, Philippine, etc.)",
    "Plates consist of oceanic lithosphere, continental lithosphere, or both (continental plates carry both continents and parts of oceans)",
    "Driving force — Mantle convection: hot mantle rises at ridges, spreads laterally, sinks at subduction zones and drags plates with it",
    "Driving force — Ridge push: gravity slides newly formed, elevated lithosphere away from mid-ocean ridges",
    "Driving force — Slab pull: the cold, dense leading edge of a subducting slab sinks under its own weight and pulls the rest of the plate (generally the strongest force)",
    "Plate speeds: 1–15 cm/year (about as fast as fingernail growth)",
    "Three types of plate boundaries: divergent (apart), convergent (together), transform (slide past)",
    "Hotspots: plumes of hot mantle rising from deep in the mantle (possibly core-mantle boundary) produce volcanic chains that record plate motion (e.g., Hawaii–Emperor seamount chain)",
    "The plate tectonic 'revolution' of the 1960s combined seafloor spreading (Hess, 1960), magnetic stripes (Vine & Matthews, 1963), and global earthquake patterns to produce the modern theory"
  ],
  explanationSections: [
    { heading: "Why plate tectonics finally succeeded", body: "Three discoveries in the early 1960s converted most geologists to plate tectonics. (1) Harry Hess proposed seafloor spreading in 1960: new oceanic crust forms at mid-ocean ridges and spreads outward. (2) Fred Vine and Drummond Matthews (1963) showed that magnetic stripes symmetric about mid-ocean ridges record reversals of Earth's field — direct evidence of spreading. (3) Global earthquake patterns (mapped by Lynn Sykes and others) showed that earthquakes occur in narrow bands that exactly match plate boundaries. By the late 1960s, plate tectonics was the consensus framework." },
    { heading: "The driving forces — which one matters most?", body: "Three main forces are commonly cited. Mantle convection provides a long-term, distributed drag on the base of plates. Ridge push acts at mid-ocean ridges, where new, hot, elevated lithosphere slides down-slope under gravity. Slab pull acts where a dense, cold oceanic slab sinks into the mantle at a subduction zone — the weight of the slab pulls the rest of the plate along, much like pulling a tablecloth off a table. Most modern modelling suggests slab pull is the dominant force, accounting for the fastest plates (those attached to large subducting slabs). Plates without subducting slabs (e.g., the African plate) tend to move slowly." },
    { heading: "Hotspots and absolute plate motion", body: "Hotspots are thought to be narrow plumes of hot mantle rising from deep within the Earth — possibly from the core-mantle boundary. Because the plumes are anchored deep in the mantle, they stay roughly fixed while the plate above moves over them. The result is a chain of progressively older volcanoes: the active volcano is over the plume now, while older, extinct volcanoes trail off in the direction the plate has moved. The Hawaiian–Emperor seamount chain records the change in direction of the Pacific Plate: from roughly north-northwest to west-northwest about 50 million years ago. Hotspots therefore provide a way to measure 'absolute' plate motion relative to the deep mantle." }
  ],
  examPoints: [
    "Plate tectonics was developed in the 1960s — Wegener's continental drift (1912) was the precursor but lacked a mechanism",
    "Three main driving forces: mantle convection, ridge push, slab pull — slab pull is generally considered strongest",
    "About 15 major plates; Pacific is the largest; some plates are mostly oceanic (Pacific, Nazca, Cocos), others carry continents (Eurasian, North American, African)",
    "Hotspots are thought to come from deep mantle plumes, possibly from the core-mantle boundary",
    "Plate speed: typically 1–15 cm/year — about as fast as fingernail growth"
  ],
  comparisonTable: {
    headers: ["Driving force", "Mechanism", "Strength"],
    rows: [
      ["Slab pull", "Cold, dense subducting slab sinks under its own weight, pulling the plate", "Strongest; dominates for plates with subducting edges"],
      ["Ridge push", "Elevated lithosphere at mid-ocean ridges slides down-slope under gravity", "Moderate; acts at divergent boundaries"],
      ["Mantle convection drag", "Circulating mantle exerts viscous drag on the base of the plate", "Weakest; long-term, distributed"]
    ]
  },
  relatedTopics: ["earth-d1", "earth-d3", "earth-d4"],
  content: true,
  buildsOn: ["earth-d1", "earth-a4", "earth-a3"],
  leadsTo: ["earth-d3", "earth-d4"],
  usedIn: ["earth-g1", "earth-h1", "earth-f4", "earth-i1"]
},


{
  id: "earth-d3",
  sectionId: "EARTH-D",
  order: 3,
  title: "Plate Boundaries",
  definition: "Plate boundaries are the narrow zones where two plates meet and interact. There are three main types — divergent, convergent, and transform — each with characteristic geological features, earthquakes, and volcanism.",
  keyFacts: [
    "Divergent boundaries: plates move APART; new lithosphere is created; Oceanic: mid-ocean ridges (e.g., Mid-Atlantic Ridge, East Pacific Rise), shallow-focus earthquakes, basaltic volcanism, rift valleys on the ridge crest; Continental: rift valleys (e.g., East African Rift), may eventually open to form a new ocean",
    "Convergent boundaries: plates move TOGETHER; lithosphere is destroyed (or shortened); Ocean–Ocean: one oceanic plate subducts beneath the other → volcanic island arc on the overriding plate + deep oceanic trench (e.g., Japan, Aleutians, Mariana); Ocean–Continent: oceanic plate subducts beneath continental plate → volcanic mountain range on the continent + trench offshore (e.g., Andes, Cascades); Continent–Continent: neither plate subducts easily (both buoyant); produces fold mountains without volcanism (e.g., Himalayas, Alps)",
    "Transform boundaries: plates slide PAST each other horizontally; lithosphere is conserved; Strike-slip faults, shallow-focus earthquakes, no volcanism (e.g., San Andreas Fault, Alpine Fault in New Zealand, North Anatolian Fault in Turkey)",
    "Earthquake depth varies by boundary type: shallow (<70 km) at divergent and transform; shallow to deep (up to ~700 km) at convergent (deep only at subduction zones, in the Wadati–Benioff zone)",
    "Volcanism is rare at transform boundaries, common at divergent (especially oceanic), and characteristic at convergent subduction zones"
  ],
  explanationSections: [
    { heading: "Why subduction produces volcanism", body: "When an oceanic plate subducts beneath another plate, it carries with it water and other volatiles trapped in its minerals and sediments. As the slab descends to ~100 km depth, the rising temperature and pressure release these fluids, which lower the melting point of the overlying mantle wedge. The result is flux melting — magma forms and rises to feed volcanoes on the overriding plate. This is why subduction zones are volcanic (e.g., Andes, Japan, Cascades) and why the volcanism is typically explosive andesitic, not quiet basaltic." },
    { heading: "Why continent–continent collisions lack volcanism", body: "When two continental plates collide, both are too buoyant to subduct deeply into the mantle. Instead, the collision shortens and thickens the crust, producing high fold mountains (Himalayas, Alps) and pushing rock layers up along thrust faults. There is little or no subduction-related volcanism because no slab is descending into the mantle to release water and trigger melting. Small amounts of magmatism may occur from crustal thickening and radiogenic heating, but it is minor compared to ocean–continent or ocean–ocean subduction." },
    { heading: "Earthquake depth and the Wadati–Benioff zone", body: "The depth distribution of earthquakes is a key diagnostic of plate boundary type. At divergent and transform boundaries, earthquakes are all shallow (<70 km), reflecting the thin, brittle lithosphere. At subduction zones, earthquakes define a dipping plane of seismicity from the surface down to ~700 km — the Wadati–Benioff zone, named after the two seismologists who independently identified it. The deeper earthquakes occur within the cold, brittle descending slab before it warms up enough to deform plastically. The dip angle of the Benioff zone reflects the subduction angle: shallow for flat subduction, steep for normal subduction." }
  ],
  examPoints: [
    "Divergent = apart = new crust (mid-ocean ridges, continental rifts)",
    "Convergent = together = crust destroyed (subduction) or shortened (collision)",
    "Transform = slide past = crust conserved (San Andreas Fault)",
    "Volcanic arcs form on the overriding plate at ocean–ocean and ocean–continent subduction zones",
    "Continent–continent collisions produce mountains but no significant volcanism",
    "Deep earthquakes (>300 km) occur ONLY at subduction zones (Wadati–Benioff zone)"
  ],
  comparisonTable: {
    headers: ["Boundary type", "Movement", "Earthquakes", "Volcanism", "Example"],
    rows: [
      ["Divergent (oceanic)", "Apart", "Shallow", "Basaltic", "Mid-Atlantic Ridge"],
      ["Divergent (continental)", "Apart", "Shallow", "Basaltic (early)", "East African Rift"],
      ["Convergent (ocean–ocean)", "Together; one subducts", "Shallow to deep", "Andesitic arc", "Japan, Aleutians"],
      ["Convergent (ocean–continent)", "Together; oceanic subducts", "Shallow to deep", "Andesitic arc", "Andes, Cascades"],
      ["Convergent (continent–continent)", "Together; no subduction", "Shallow to intermediate", "Minimal", "Himalayas, Alps"],
      ["Transform", "Slide past", "Shallow only", "Rare/none", "San Andreas, Alpine Fault"]
    ]
  },
  relatedTopics: ["earth-d1", "earth-d2", "earth-d4", "earth-h1"],
  content: true,
  buildsOn: ["earth-d2"],
  leadsTo: ["earth-d4", "earth-g2", "earth-h1"],
  usedIn: ["earth-g2", "earth-h1", "earth-h5", "earth-i1", "earth-i2"]
},


{
  id: "earth-d4",
  sectionId: "EARTH-D",
  order: 4,
  title: "Tectonic Consequences & Hotspots",
  definition: "Plate tectonic processes produce a wide range of geological features and events at and near plate boundaries: mountain building, earthquakes, volcanism, ocean basin formation, and the long-term drift of continents. Hotspots, in contrast, are intraplate features that record plate motion over deep mantle plumes.",
  keyFacts: [
    "Mountain building (orogeny): occurs mainly at convergent boundaries (subduction → volcanic arc; collision → fold mountains like the Himalayas)",
    "Earthquakes: occur at all three boundary types; deep earthquakes (>300 km) only at subduction zones (Wadati–Benioff zone)",
    "Volcanism: characteristic of divergent boundaries (basaltic) and subduction zones (andesitic); rare at transform boundaries",
    "Ocean basin formation: continental rifting → narrow sea (Red Sea) → ocean basin (Atlantic) over millions of years",
    "Continental drift: the long-term horizontal motion of continents, accompanied by the opening and closing of ocean basins (Wilson cycle)",
    "Sea level changes: mid-ocean ridge volume controls global sea level — faster spreading = larger ridges = higher sea level; also affected by continental glaciation",
    "Wilson cycle (J. Tuzo Wilson, 1960s): the repeated opening and closing of ocean basins over hundreds of millions of years — a complete cycle from continental rifting through ocean opening, subduction, and final collision",
    "Hotspots: deep mantle plumes producing volcanic chains; examples include Hawaii, Iceland, Yellowstone, Réunion, Galápagos",
    "The Hawaiian–Emperor seamount chain shows a change in direction at ~50 Ma, recording a major change in Pacific Plate motion",
    "Yellowstone hotspot has tracked North American Plate motion over ~17 million years; today it fuels the Yellowstone caldera (a supervolcano)"
  ],
  explanationSections: [
    { heading: "The Wilson cycle — repeated opening and closing of oceans", body: "J. Tuzo Wilson realized in the 1960s that the same ocean can open, close, and reopen many times through Earth history. The cycle starts with a continental rift (e.g., East African Rift today), which evolves into a narrow sea (Red Sea) and then a full ocean (Atlantic). Subduction eventually consumes the ocean from one or both sides, closing it and ending in a continent–continent collision (e.g., India–Eurasia → Himalayas). The Appalachian–Caledonide mountains of today are the eroded remnants of an earlier Wilson cycle (the Iapetus Ocean closed in the Paleozoic, producing the Caledonides; the remaining Iapetan ocean closed later to form the Appalachians). This framework explains why the same continental margins have experienced multiple phases of rifting and collision." },
    { heading: "Hotspots as deep-Earth probes", body: "Hotspots are thought to be narrow plumes of hot mantle rising from deep within the Earth — possibly from a boundary layer at the core–mantle boundary, or from a shallower boundary in the upper mantle. They are anchored (relatively) deep in the mantle, so the plate above moves while the plume stays put. The result is a chain of progressively older volcanoes: the youngest (and currently active) volcano is over the plume, while older extinct volcanoes trail off in the direction of plate motion. Examples: the Hawaiian–Emperor seamount chain (Pacific Plate); the Yellowstone hotspot track (North American Plate); the Réunion hotspot track, which led to the Deccan Traps flood basalt eruption ~66 Ma — possibly connected to the K-Pg mass extinction." },
    { heading: "Tectonics and sea level", body: "Two main tectonic factors control long-term global sea level. First, the volume of mid-ocean ridges: faster seafloor spreading produces hotter, more buoyant, larger ridges that displace more water, raising sea level. Second, the growth and decay of continental ice caps: at the peak of the last ice age (~20,000 years ago), so much water was locked up in ice that sea level was ~120 m lower than today. Sea level has been rising since then as ice melted, and continues to rise today due to anthropogenic global warming." }
  ],
  examPoints: [
    "Mountain building occurs mainly at convergent boundaries — by subduction (Andes) or collision (Himalayas)",
    "Deep earthquakes (>300 km) only occur in subducting slabs (Wadati–Benioff zone)",
    "Hotspots are intraplate features, NOT at plate boundaries — Hawaii is in the middle of the Pacific Plate",
    "The Wilson cycle describes the repeated opening and closing of ocean basins over hundreds of millions of years",
    "Hawaiian–Emperor bend at ~50 Ma records a major change in Pacific Plate motion",
    "Sea level is controlled by mid-ocean ridge volume (tectonic) and continental ice volume (climatic)"
  ],
  relatedTopics: ["earth-d1", "earth-d2", "earth-d3", "earth-i1"],
  content: true,
  buildsOn: ["earth-d3"],
  leadsTo: ["earth-g1", "earth-f4"],
  usedIn: ["earth-g2", "earth-h5", "earth-i1"]
},




// ════════════════════════════════════════════════════════════════════
// SECTION EARTH-E: Weathering, Erosion & Landforms
// ════════════════════════════════════════════════════════════════════


{
  id: "earth-e1",
  sectionId: "EARTH-E",
  order: 1,
  title: "Weathering: Physical, Chemical & Biological",
  definition: "Weathering is the in-situ breakdown of rocks at or near Earth's surface by physical, chemical, and biological processes. It is the first step in the rock cycle leading to sediment production, and it produces the raw material for soils and sedimentary rocks.",
  keyFacts: [
    "Weathering operates at the surface; erosion REMOVES the weathered material; mass wasting transports it downslope under gravity",
    "Three main types: physical (mechanical — rock breaks into smaller pieces), chemical (minerals decompose into new minerals or dissolve), biological (organisms contribute to both)",
    "Physical weathering increases surface area, which ACCELERATES chemical weathering — they usually work together",
    "Frost wedging (freeze–thaw): water enters cracks, freezes (~9% volume expansion), widens cracks; very effective in cold climates and high mountains",
    "Thermal expansion: repeated heating and cooling causes exfoliation (sheet jointing) — common in deserts and granitic outcrops",
    "Exfoliation (unloading): removal of overlying rock reduces pressure, causing slabs to spall off in sheets (e.g., Half Dome, Yosemite)",
    "Root wedging: plant roots grow into cracks and pry rock apart",
    "Abrasion: grinding by wind-blown sand or water-borne sediment",
    "Salt crystal growth: salt crystals grow in pores, prying grains apart (common in coastal and arid regions)",
    "Oxidation: iron-bearing minerals react with O₂ to form oxides (e.g., Fe²⁺ → Fe³⁺ as in rust); produces red/yellow staining",
    "Hydrolysis: water reacts with silicate minerals to form new clay minerals (e.g., feldspar → kaolinite); most important chemical weathering process",
    "Carbonation: CO₂ dissolved in rainwater forms weak carbonic acid (H₂CO₃), which dissolves limestone and other carbonates (CaCO₃ + H₂CO₃ → Ca(HCO₃)₂)",
    "Solution: direct dissolution of soluble minerals (halite, gypsum)",
    "Hydration: water added to mineral structure (e.g., anhydrite → gypsum)",
    "Lichens and mosses secrete organic acids that break down rock",
    "Burrowing organisms (worms, ants, rodents) mix and break up soil",
    "Plant roots physically pry rock (root wedging) and release organic acids",
    "Bacteria and fungi contribute to chemical weathering",
    "Climate controls: physical weathering dominates in cold/dry climates; chemical dominates in warm/wet climates",
    "Climate feedback: chemical weathering of silicate rocks removes CO₂ from the atmosphere over geological time (the carbonate–silicate cycle), stabilizing climate"
  ],
  explanationSections: [
    { heading: "How physical and chemical weathering work together", body: "Physical and chemical weathering are not independent. Physical weathering breaks rock into smaller pieces, increasing the surface area exposed to air and water. More surface area means more places for chemical reactions to occur, so chemical weathering proceeds faster. Conversely, chemical weathering weakens the rock and makes it more susceptible to physical breakup. In a cold climate, frost wedging dominates; in a hot, wet tropical climate, hydrolysis of feldspar to clay and dissolution of limestone dominate. Biological processes contribute to both — root wedging is physical; lichen acids are chemical." },
    { heading: "Carbonation and karst landscapes", body: "When rainwater absorbs CO₂ from the atmosphere and soil, it becomes a weak carbonic acid. This acid reacts with calcium carbonate (limestone) to form soluble calcium bicarbonate, which is carried away in solution: CaCO₃ + H₂CO₃ → Ca²⁺ + 2 HCO₃⁻. Over geological time, this process dissolves huge volumes of limestone, creating karst landscapes with caves, sinkholes, disappearing streams, and tower karst (e.g., Guilin, China). The dissolved bicarbonate eventually reaches the ocean, where marine organisms use it to build new calcium carbonate shells, completing the long-term carbon cycle." },
    { heading: "Climate as the master control", body: "Climate is the most important control on the type and rate of weathering. Cold climates favour physical weathering (ice, frost wedging). Hot, wet climates favour chemical weathering (hydrolysis, dissolution). Arid climates are dominated by physical processes (thermal expansion, salt weathering). Tropical rainforests have intense chemical weathering, producing deep, nutrient-poor but clay-rich soils. The same granite in a tropical climate may be reduced to a deep clay-rich saprolite in a few million years, while in a polar desert it may remain nearly fresh for tens of millions of years." }
  ],
  examPoints: [
    "Physical weathering increases surface area → accelerates chemical weathering",
    "Most important chemical weathering process: HYDROLYSIS of silicates to clay (e.g., feldspar → kaolinite)",
    "Carbonation: CO₂ + H₂O → H₂CO₃ → dissolves limestone; produces karst topography",
    "Frost wedging: water freezes in cracks, expands by ~9%, widens cracks; dominant in cold climates",
    "Exfoliation = unloading; common in granitic outcrops (Half Dome, Yosemite)",
    "Chemical weathering of silicates removes CO₂ from the atmosphere over geological time — a long-term climate stabilizer"
  ],
  comparisonTable: {
    headers: ["Type", "Process", "Climate where dominant", "Example"],
    rows: [
      ["Frost wedging", "Water freezes in cracks and expands", "Cold, alpine", "Talus slopes in mountains"],
      ["Thermal expansion", "Repeated heating/cooling", "Hot deserts", "Desert pavement"],
      ["Exfoliation", "Pressure release as overburden erodes", "Any, especially granitic", "Half Dome, Yosemite"],
      ["Oxidation", "O₂ reacts with Fe-bearing minerals", "Warm, moist", "Rust on iron-bearing rocks"],
      ["Hydrolysis", "Water reacts with silicates to form clay", "Hot, wet", "Feldspar → kaolinite"],
      ["Carbonation", "Carbonic acid dissolves carbonates", "Any with rainfall", "Karst landscapes (limestone)"],
      ["Root wedging", "Roots pry rock apart", "Vegetated areas", "Cracked pavements, exposed bedrock"]
    ]
  },
  relatedTopics: ["earth-e2", "earth-e3", "earth-e4", "earth-e5"],
  content: true,
  buildsOn: ["earth-b2", "earth-b6", "phy-temperature-heat"],
  leadsTo: ["earth-e2", "earth-b4"],
  usedIn: ["earth-e2", "earth-e3", "env-soil-and-waste"]
},


{
  id: "earth-e2",
  sectionId: "EARTH-E",
  order: 2,
  title: "Erosion & Mass Wasting",
  definition: "Erosion is the removal and transport of weathered rock and soil by water, wind, ice, and waves. Mass wasting is the downslope movement of rock and soil under the direct influence of gravity. Together they shape landforms and deliver sediment to depositional basins.",
  keyFacts: [
    "Erosion: the process of picking up and transporting weathered material. Major agents: running water (most powerful on continents), wind, glaciers, waves, gravity",
    "Running water is the dominant erosional agent on continents — rivers carve valleys, transport sediment, and shape landscapes",
    "Wind erosion: dominant in arid and coastal areas; processes include deflation (removal of loose sediment) and abrasion (sandblasting by wind-borne sand)",
    "Glacial erosion: plucking (glacier freezes to bedrock and tears off blocks) and abrasion (rock fragments embedded in ice grind the bedrock)",
    "Wave erosion: hydraulic action, abrasion, and solution at coastlines; produces cliffs, caves, arches, and stacks",
    "Mass wasting: any downslope movement of rock or soil under gravity; classified by speed (slow → fast) and material (rock, debris, mud, earth)",
    "Slow mass wasting: creep (very slow, continuous downslope movement of soil), solifluction (slow flow of saturated soil over permafrost)",
    "Fast mass wasting: landslides (rock and debris slides), rockfalls, mudflows, debris flows, avalanches, lahars (volcanic mudflows)",
    "Triggers: heavy rainfall, earthquakes, slope saturation, vegetation loss, undercutting by rivers or waves, volcanic activity",
    "Slope stability depends on: angle, water content, material type, vegetation, underlying geology"
  ],
  explanationSections: [
    { heading: "Running water — the master sculptor", body: "Although glaciers and wind receive more attention, running water is the dominant erosional force across most of Earth's continental surface. Rivers carve V-shaped valleys in their upper reaches, transport enormous quantities of sediment (the Amazon alone carries ~1.2 billion tonnes per year), and shape landscapes over geological time. Erosion by water is most effective in steep, wet terrain and where the rock is poorly cemented. The balance between uplift and erosion determines whether mountains stand high or are worn down to plains." },
    { heading: "Why mass wasting happens", body: "Mass wasting occurs whenever the shear stress (driving force: gravity along the slope) exceeds the shear strength (resistance: friction, cohesion, root strength). Triggers increase shear stress or reduce shear strength. Heavy rain saturates soil, increasing weight and reducing friction. Earthquakes shake slopes, momentarily reducing friction. Undercutting by rivers or waves steepens slopes. Vegetation removal (fires, deforestation) reduces root strength. The result can be sudden catastrophic landslides or slow continuous creep." },
    { heading: "Creep vs. landslides — the speed spectrum", body: "Mass wasting covers an enormous range of speeds. Creep is so slow (mm/yr) that you only notice it by tilted fence posts, curved tree trunks (pistol-butt trees), and disrupted soil horizons. Solifluction is faster (cm/yr) — saturated soil flows over impermeable permafrost. At the other extreme, rockfalls, debris flows, and lahars can move at tens of km/hr, devastating everything in their path. The 2014 Oso landslide in Washington state moved at up to ~70 km/hr, killing 43 people. The 1985 Nevado del Ruiz lahar in Colombia killed ~25,000 people when a volcanic mudflow swept down the river valleys." }
  ],
  examPoints: [
    "Running water is the dominant erosional agent on continents, not wind or ice (which dominate locally)",
    "Deflation = wind removal of loose sediment; abrasion = sandblasting by wind-borne particles",
    "Glacial erosion: plucking (frozen-on blocks torn away) + abrasion (embedded rock grinds bedrock)",
    "Creep is the slowest form of mass wasting; rockfalls/debris flows are among the fastest",
    "Lahars = volcanic mudflows, triggered when volcanic heat melts ice/snow or heavy rain mobilises ash"
  ],
  comparisonTable: {
    headers: ["Type", "Speed", "Material", "Trigger"],
    rows: [
      ["Creep", "mm/yr (very slow)", "Soil", "Freeze-thaw, wetting-drying"],
      ["Solifluction", "cm/yr", "Saturated soil over permafrost", "Thaw of active layer"],
      ["Slump/landslide", "Sudden", "Rock/debris on curved surface", "Heavy rain, earthquake"],
      ["Rockfall", "Very fast", "Individual rocks", "Freeze-thaw, undercutting"],
      ["Mudflow/debris flow", "Very fast", "Water-saturated mud/debris", "Heavy rain on steep slopes"],
      ["Lahar", "Very fast", "Volcanic ash + water", "Volcanic eruption + ice/snow/rain"]
    ]
  },
  relatedTopics: ["earth-e1", "earth-e3", "earth-e4", "earth-e5"],
  content: true,
  buildsOn: ["earth-e1", "phy-gravity-weight-friction", "earth-a5"],
  leadsTo: ["earth-e3", "earth-e4", "earth-e5"],
  usedIn: ["earth-e3", "earth-i1"]
},


{
  id: "earth-e3",
  sectionId: "EARTH-E",
  order: 3,
  title: "Fluvial (River) Landforms",
  definition: "Fluvial landforms are those produced by the erosional and depositional action of running water (rivers and streams). They dominate the landscape in humid and temperate regions and include erosional features (V-shaped valleys, gorges) and depositional features (floodplains, deltas, alluvial fans, meanders).",
  keyFacts: [
    "Rivers erode the landscape in three ways: hydraulic action (force of water), abrasion (sediment-laden water grinds the bed), and solution (dissolution of soluble rock)",
    "Upper course (steep, youthful): V-shaped valleys, gorges, waterfalls, rapids, erosion dominant",
    "Middle course (mature): meanders, floodplains begin to form, balance of erosion and deposition",
    "Lower course (old age): wide floodplains, oxbow lakes, deltas, deposition dominant",
    "Drainage patterns: dendritic (tree-like, on uniform rock; most common), trellis (rectangular, on folded sedimentary rocks), radial (outward from a dome or volcano), rectangular (controlled by joints/faults), centripetal (inward to a basin)",
    "Meander: a broad, looping bend in a river; formed by erosion on the outer (cut) bank and deposition on the inner (slip-off) bank",
    "Oxbow lake: a crescent-shaped lake formed when a meander is cut off from the main channel and then sealed by deposition",
    "Floodplain: the flat area adjacent to a river, built of sediment deposited during floods",
    "Levee: a low ridge along the river bank, built by coarse sediment deposited when flood water first overtops the bank",
    "Delta: a depositional landform at a river mouth, where the river enters standing water (ocean or lake); named for the triangular shape of the Nile Delta",
    "Alluvial fan: a fan-shaped deposit formed where a steep stream suddenly loses gradient at the base of a mountain, depositing its sediment load"
  ],
  explanationSections: [
    { heading: "From V-shape to oxbow — the river's life", body: "A river's character changes from source to mouth. In its upper course the gradient is steep and erosion dominates — the river cuts downward, producing V-shaped valleys, gorges, and waterfalls. As the gradient lessens in the middle course, the river begins to meander, with erosion on the outer (cut) bank and deposition on the inner (slip-off) bank. In the lower course, the gradient is gentle and deposition dominates — wide floodplains, natural levees, and ultimately a delta or alluvial fan at the mouth. The same river can therefore be erosional in one part and depositional in another at the same time." },
    { heading: "Drainage patterns — fingerprints of geology", body: "The pattern a river system makes on a map is a sensitive indicator of the underlying geology. Dendritic ('tree-like') patterns develop on uniform, flat-lying rock where there is no structural control — they are the most common pattern globally. Trellis patterns form on tilted alternating hard and soft sedimentary rocks: short tributaries flow down the soft layers, while long parallel streams follow the strike of resistant beds. Radial patterns form on isolated domes or volcanoes, with streams flowing outward in all directions. Rectangular patterns are controlled by joints or faults at right angles. Centripetal patterns drain inward to a central basin (e.g., a closed lake basin)." },
    { heading: "Meanders, oxbows, and deltas", body: "Meanders form because of a positive feedback: any small bend in a channel causes faster flow on the outside (eroding the cut bank) and slower flow on the inside (depositing a slip-off slope), amplifying the bend. Over time, the meander loop becomes more pronounced. During a flood, the river may take a shortcut across the narrow neck, leaving the meander cut off as an oxbow lake, which gradually fills with sediment and vegetation. Deltas form where a river enters standing water: the flow slows abruptly, the river drops its sediment load, and the deposit builds outward in a characteristic shape — bird-foot (Mississippi), arcuate (Nile), or cuspate (Ebro)." }
  ],
  examPoints: [
    "Drainage pattern is a key indicator of underlying geology — dendritic is the most common (uniform rock); trellis indicates folded sedimentary rocks; radial indicates a dome or volcano",
    "V-shaped valleys = upper course (steep, erosion); meanders and floodplains = lower course (deposition)",
    "Cut bank (outer) = erosion; slip-off bank (inner) = deposition",
    "Oxbow lake: crescent-shaped, formed when a meander is cut off",
    "Delta: forms at a river mouth in standing water; alluvial fan: forms where a stream's gradient suddenly drops at a mountain front",
    "Levees are natural ridges along river banks, built by the coarsest sediment dropped when flood water first overtops the bank"
  ],
  comparisonTable: {
    headers: ["River course", "Gradient", "Dominant process", "Landforms"],
    rows: [
      ["Upper (youthful)", "Steep", "Erosion (vertical)", "V-shaped valleys, gorges, waterfalls, rapids"],
      ["Middle (mature)", "Moderate", "Erosion + deposition", "Meanders, beginning of floodplain"],
      ["Lower (old age)", "Gentle", "Deposition (lateral)", "Wide floodplains, oxbow lakes, levees, deltas"]
    ]
  },
  relatedTopics: ["earth-e1", "earth-e2", "earth-e4", "earth-e5"],
  content: true,
  buildsOn: ["earth-e2", "earth-j1"],
  leadsTo: ["earth-e4"],
  usedIn: ["env-water-pollution-and-quality", "earth-j2"]
},


{
  id: "earth-e4",
  sectionId: "EARTH-E",
  order: 4,
  title: "Glacial & Desert (Aeolian) Landforms",
  definition: "Glacial and desert (aeolian) landforms are produced in cold and arid environments respectively, where water is locked up as ice or is scarce. These landscapes are dominated by ice or wind as the primary geomorphic agents.",
  keyFacts: [
    "U-shaped (glacial trough) valleys — formed by V-shaped river valleys being widened and deepened by glacier flow",
    "Cirques: bowl-shaped depressions at the head of a glacier; often contain small lakes (tarns) after the ice melts",
    "Arêtes: sharp narrow ridges between two cirques",
    "Horns: pyramidal peaks formed when three or more cirques erode a mountain from different sides (e.g., the Matterhorn)",
    "Hanging valleys: tributary glacial valleys left 'hanging' above the main valley after the ice melts; often the site of waterfalls",
    "Moraines: ridges of till (unsorted glacial sediment) — lateral (sides of glacier), medial (where two glaciers merge), terminal (end of glacier), recessional (intermediate positions during retreat)",
    "Drumlins: streamlined, whale-shaped hills of till aligned with ice flow direction",
    "Eskers: long, sinuous ridges of stratified sand and gravel deposited by meltwater streams flowing under or within a glacier",
    "Glacial lakes: formed by glacial erosion (cirques) or deposition (moraine-dammed)",
    "Erratics: boulders transported far from their source by ice and left behind when the glacier melted",
    "Sand dunes: wind-blown accumulations of sand; types: barchan (crescent, constant wind), longitudinal (parallel to wind), transverse (perpendicular to wind, sand-rich), star (multi-directional wind)",
    "Yardangs: streamlined ridges carved from bedrock by wind abrasion; elongated parallel to the prevailing wind",
    "Ventifacts: rocks polished and shaped by wind-blown sand",
    "Pediments: gently sloping bedrock surfaces at the base of desert mountains, eroded by running water during rare storms",
    "Playas: flat, dry lake beds in desert basins; often encrusted with evaporite minerals (salt flats)",
    "Desert pavement: a surface layer of closely packed coarse stones left behind after wind removes finer particles (deflation)",
  ],
  explanationSections: [
    { heading: "Glacial erosion — from V to U and beyond", body: "A glacier does not simply flow down a pre-existing river valley — it transforms the landscape. The ice is much more rigid and powerful than water: it widens and deepens the valley, producing the characteristic U-shape (glacial trough). At the head of the glacier, a bowl-shaped cirque is excavated by plucking and abrasion. Where two cirques on opposite sides of a ridge meet back-to-back, they form a sharp arête. Where three or more cirques converge on a single peak, they leave a pyramidal horn like the Matterhorn. Tributary glacial valleys are not deepened as much as the main glacier, so when the ice melts, they are left as hanging valleys high on the trough walls — often with spectacular waterfalls plunging from them." },
    { heading: "Desert processes — wind vs. water", body: "A common misconception is that deserts are shaped primarily by wind. In fact, running water during rare but intense storms does most of the erosional work in deserts, carving canyons, alluvial fans, and pediments. Wind shapes landforms primarily in areas with abundant loose sand (ergs) and where the surface dries out and allows grains to be picked up. The four main dune types reflect sand supply and wind constancy: barchan dunes (crescent) form where sand is limited and wind is constant; longitudinal dunes form where wind comes from two directions; transverse dunes form where sand is abundant and wind is constant; star dunes form in areas with variable wind directions." },
    { heading: "Moraines — till and the trail of the ice", body: "Glaciers transport enormous amounts of rock debris — collectively called till. Where this debris is deposited marks the past extent and movement of the ice. Lateral moraines form along the sides of a valley glacier. Where two glaciers merge, their inner lateral moraines combine to form a medial moraine, visible as a dark stripe running down the ice. The terminal (end) moraine marks the farthest advance of the glacier. Recessional moraines mark pauses during retreat. Drumlins and eskers record the flow of ice and meltwater within the glacier. Erratics — boulders of a rock type different from the local bedrock — are clear evidence of glacial transport, sometimes hundreds of kilometres from their source." }
  ],
  examPoints: [
    "Glacial valleys are U-shaped (rivers are V-shaped)",
    "Cirque = bowl at glacier head; arête = ridge between two cirques; horn = peak surrounded by three or more cirques (e.g., Matterhorn)",
    "Moraine types: lateral (sides), medial (merge), terminal (end), recessional (intermediate)",
    "Drumlins are aligned parallel to ice flow; eskers are sinuous ridges of meltwater sediment",
    "Sand dune types: barchan (crescent, constant wind, limited sand), longitudinal (parallel to wind), transverse (perpendicular, abundant sand), star (variable wind)",
    "Pediments are bedrock surfaces eroded by water at mountain fronts; NOT formed by wind"
  ],
  comparisonTable: {
    headers: ["Landform", "Type", "Origin"],
    rows: [
      ["U-shaped valley", "Glacial (erosional)", "Glacier widens and deepens a river valley"],
      ["Cirque", "Glacial (erosional)", "Bowl at glacier head"],
      ["Arête", "Glacial (erosional)", "Ridge between two cirques"],
      ["Horn (e.g., Matterhorn)", "Glacial (erosional)", "Peak surrounded by 3+ cirques"],
      ["Moraine (lateral/medial/terminal)", "Glacial (depositional)", "Till deposited by ice"],
      ["Drumlin", "Glacial (depositional)", "Streamlined till hill aligned with ice flow"],
      ["Esker", "Glacial (depositional)", "Ridge of sand/gravel from subglacial stream"],
      ["Barchan dune", "Aeolian (depositional)", "Crescent dune, constant wind, limited sand"],
      ["Yardang", "Aeolian (erosional)", "Streamlined bedrock ridge carved by wind"],
      ["Pediment", "Desert (erosional)", "Bedrock surface at mountain front, cut by water"]
    ]
  },
  relatedTopics: ["earth-e1", "earth-e2", "earth-e3", "earth-e5"],
  content: true,
  buildsOn: ["earth-e2"],
  leadsTo: ["earth-e5"],
  usedIn: ["i-extreme-events"]
},


{
  id: "earth-e5",
  sectionId: "EARTH-E",
  order: 5,
  title: "Coastal & Karst Landforms",
  definition: "Coastal landforms are shaped by the interaction of the ocean (waves, tides, currents) with the land. Karst landforms are produced by the dissolution of soluble rocks (mainly limestone) by slightly acidic water, producing distinctive caves, sinkholes, and tower landscapes.",
  keyFacts: [
    "Sea cliffs: steep faces cut by wave action at the base",
    "Wave-cut platforms: flat rocky surfaces at the base of retreating cliffs",
    "Sea caves: cavities cut into cliffs by hydraulic action and abrasion",
    "Sea arches: caves eroded through a headland",
    "Sea stacks: isolated pillars left behind when an arch collapses",
    "Headlands and bays: resistant rock forms headlands; weaker rock is eroded into bays",
    "Beaches: accumulations of sand and gravel in the intertidal zone",
    "Spits: long, narrow sand ridges extending from a headland into open water, often with a curved end (recurved spit)",
    "Tombolos: sand ridges connecting an offshore island to the mainland",
    "Barrier islands: long, narrow islands parallel to the coast, separated by a lagoon",
    "Coral reefs: wave-resistant ridges of calcium carbonate built by coral polyps in warm, shallow, clear tropical waters; require temperature >20 °C and depth <50 m",
    "Sinkholes (dolines): circular depressions formed by collapse or solution of limestone",
    "Caves: underground openings dissolved by slightly acidic groundwater",
    "Stalactites: 'icicle' deposits hanging from cave ceilings (CaCO₃ precipitated as water evaporates and loses CO₂)",
    "Stalagmites: 'pillar' deposits rising from cave floors (CaCO₃ from dripping water)",
    "Columns (or pillars): formed when stalactites and stalagmites join",
    "Disappearing streams: surface streams that flow into sinkholes and continue underground",
    "Tower karst: isolated, steep-sided limestone hills rising from a flat plain (e.g., Guilin, China; Halong Bay, Vietnam)",
  ],
  explanationSections: [
    { heading: "How waves shape the coast", body: "Waves attack the coast through three main processes. Hydraulic action is the force of water compressing air in cracks, which can break rock apart. Abrasion is the sandpaper effect of sediment thrown against the cliff by waves. Solution dissolves soluble rocks (especially limestone). The result is a sequence of features that develops over time: a crack becomes a notch, the notch becomes a cave, the cave becomes an arch, the arch collapses to leave a stack, and the stack is eventually eroded to a stump. Meanwhile, between headlands, sediment is deposited as beaches, spits, and barrier islands." },
    { heading: "Reefs, atolls, and the coral requirement", body: "Coral reefs are restricted to warm (>20 °C), shallow (<50 m), clear, sunlit, sediment-free tropical waters. Reef-building corals have a symbiotic relationship with photosynthetic algae (zooxanthellae) that need sunlight. The three main types are fringing reefs (close to shore), barrier reefs (separated from shore by a lagoon, e.g., the Great Barrier Reef), and atolls (a ring of reef surrounding a central lagoon, formed when a volcanic island sinks and the reef grows upward). Darwin correctly deduced the atoll sequence in 1842 — long before plate tectonics explained the sinking." },
    { heading: "Karst — the underground landscape", body: "Karst landscapes form where limestone (or other soluble rock) lies near the surface and there is enough rainfall to drive dissolution. Rainwater absorbs CO₂ from the air and soil, becoming a weak carbonic acid that dissolves CaCO₃. Over time, this creates underground drainage networks, caves, sinkholes, and tower karst. Famous karst regions include the Guilin area of China (tower karst), Halong Bay in Vietnam, the Yucatán Peninsula (cenotes), Kentucky's Mammoth Cave system, and Slovenia's karst (the original type locality for the term). In Pakistan, the Kirthar Range and parts of the Salt Range show some karst development." }
  ],
  examPoints: [
    "Coastal erosional sequence: notch → cave → arch → stack → stump",
    "Coral reefs require warm, shallow, clear, sunlit, sediment-poor water — not found in cold or deep water",
    "Spits are attached to the mainland; barrier islands are detached; tombolos connect an island to the mainland",
    "Stalactites hang from the ceiling ('tight to the ceiling'); stalagmites rise from the floor ('might reach the ceiling')",
    "Tower karst (e.g., Guilin, China) requires long-term dissolution in a humid tropical climate",
    "Karst features develop in limestone (or other soluble rocks: dolomite, gypsum, salt)"
  ],
  comparisonTable: {
    headers: ["Landform", "Type", "Origin"],
    rows: [
      ["Sea cliff / wave-cut platform", "Coastal (erosional)", "Wave attack at cliff base"],
      ["Sea cave → arch → stack", "Coastal (erosional)", "Progressive erosion of a headland"],
      ["Beach", "Coastal (depositional)", "Sand/gravel in the intertidal zone"],
      ["Spit", "Coastal (depositional)", "Sand ridge extending from a headland into open water"],
      ["Barrier island", "Coastal (depositional)", "Long, parallel offshore island with lagoon"],
      ["Coral reef (fringing/barrier/atoll)", "Coastal (biogenic)", "CaCO₃ skeletons of corals in warm shallow water"],
      ["Sinkhole (doline)", "Karst", "Solution or collapse of limestone surface"],
      ["Cave", "Karst", "Underground dissolution of limestone"],
      ["Stalactite", "Karst", "CaCO₃ precipitated from dripping water (hangs from ceiling)"],
      ["Stalagmite", "Karst", "CaCO₃ precipitated from dripping water (rises from floor)"],
      ["Tower karst", "Karst", "Limestone hills left after long-term dissolution of surrounding rock"]
    ]
  },
  relatedTopics: ["earth-e1", "earth-e2", "earth-e3", "earth-e4"],
  content: true,
  buildsOn: ["earth-e2"],
  leadsTo: [],
  usedIn: []
},




// ════════════════════════════════════════════════════════════════════
// SECTION EARTH-F: Structural Geology & Deformation
// ════════════════════════════════════════════════════════════════════


{
  id: "earth-f1",
  sectionId: "EARTH-F",
  order: 1,
  title: "Stress, Strain & Rock Deformation",
  definition: "Structural geology studies the deformation of rocks by tectonic forces. Stress is the force per unit area applied to a rock; strain is the resulting change in shape or volume. The way a rock deforms depends on the type of stress, the temperature, the pressure, the rock type, and the rate at which the stress is applied.",
  keyFacts: [
    "Stress (σ) = force per unit area applied to a rock; units: Pa or MPa",
    "Strain (ε) = the resulting change in shape or volume (dimensionless)",
    "Compressional stress: rocks squeezed together (shortening); common at convergent plate boundaries",
    "Tensional stress: rocks pulled apart (extension, lengthening); common at divergent plate boundaries",
    "Shear stress: rocks slide past one another in opposite directions; common at transform plate boundaries",
    "Elastic strain: reversible — the rock returns to its original shape when stress is removed (e.g., a stretched rubber band)",
    "Plastic (ductile) strain: permanent deformation without fracturing — the rock bends and flows",
    "Brittle strain: permanent deformation by fracturing — the rock breaks",
    "Temperature: higher T → more ductile; lower T → more brittle",
    "Pressure (confining): higher P → more ductile; lower P → more brittle",
    "Rock type: soft rocks (shale, halite) deform plastically; hard rocks (granite, basalt) deform brittlely",
    "Strain rate: slow deformation → more ductile; rapid deformation → more brittle (e.g., earthquake)",
    "Fluid content: fluids (especially water) generally make rocks more ductile and weaker",
    "Brittle–ductile transition: the depth (typically 10–15 km in continental crust) above which rocks deform by fracturing (brittle) and below which they deform plastically (ductile); corresponds to ~300 °C for granite",
    "Earthquakes occur in the BRITTLE zone (above the brittle–ductile transition); deep-focus earthquakes occur in subducting slabs that are still cold and brittle even at depth"
  ],
  explanationSections: [
    { heading: "Why the same stress produces different outcomes", body: "The same applied stress can produce very different deformation depending on the conditions. A granite sample in a lab will deform brittlely if stressed quickly at room temperature (it breaks with a snap). The same granite, slowly heated and squeezed deep in the crust over millions of years, will deform plastically and fold without breaking. This is why we see folded gneiss deep in mountain roots but jointed and faulted granite in outcrops at the surface — the same rock type, the same stress direction, but different T and P conditions. Strain rate matters too: even at low T, a rock can deform plastically if the strain is applied extremely slowly (a phenomenon called 'cold flow')." },
    { heading: "The brittle–ductile transition and earthquakes", body: "Earthquakes can only occur where rock is brittle enough to fracture suddenly and release elastic energy. Above the brittle–ductile transition (typically 10–15 km in continental crust, shallower in oceanic crust), rocks behave elastically and can store stress as elastic strain energy, which is released suddenly as an earthquake. Below the transition, rocks deform plastically and aseismically — they flow rather than break. The deep-focus earthquakes (up to ~700 km) recorded at subduction zones occur within the cold interior of the subducting slab, which is still brittle even at great depth because it has not had time to warm up to ambient mantle temperatures." },
    { heading: "Putting it all together — T, P, rate, and rock type", body: "The 'deformation diagram' for any rock is a function of T, confining P, strain rate, and composition. In a continent–continent collision, the upper crust (cool, low P) deforms by brittle faulting (thrust faults, earthquakes); the middle crust (warmer, higher P) deforms plastically, producing folds and ductile shear zones; the lower crust (hot, high P) flows like putty. This vertical zonation of deformation style is critical for understanding how mountain belts work." }
  ],
  examPoints: [
    "Stress = force per unit area; strain = resulting change in shape or volume",
    "Three stress types: compressional (together), tensional (apart), shear (past)",
    "Higher T, higher P, slower strain rate → more ductile; lower T, lower P, faster rate → more brittle",
    "Earthquakes occur in the BRITTLE zone; deep-focus quakes occur in cold subducting slabs that remain brittle to ~700 km",
    "The brittle–ductile transition is at ~10–15 km in continental crust (~300 °C for granite)",
    "Fluids (especially water) generally weaken rock and promote ductile deformation"
  ],
  comparisonTable: {
    headers: ["Factor", "Promotes ductile (plastic) behaviour", "Promotes brittle behaviour"],
    rows: [
      ["Temperature", "High", "Low"],
      ["Confining pressure", "High", "Low"],
      ["Strain rate", "Slow", "Fast"],
      ["Rock type", "Soft (shale, halite, marble)", "Hard (granite, basalt, quartzite)"],
      ["Fluid content", "High (water)", "Low (dry)"]
    ]
  },
  relatedTopics: ["earth-f2", "earth-f3", "earth-f4"],
  content: true,
  buildsOn: ["phy-newtons-laws", "phy-work-energy", "earth-a4"],
  leadsTo: ["earth-f2", "earth-f3"],
  usedIn: ["earth-f2", "earth-f3", "earth-h1"]
},


{
  id: "earth-f2",
  sectionId: "EARTH-F",
  order: 2,
  title: "Folds: Anticlines, Synclines & More",
  definition: "Folds are wave-like bends in rock layers produced by plastic (ductile) deformation under compressional stress. They are the dominant structural features of mountain belts and deformed sedimentary basins.",
  keyFacts: [
    "Anticline: an UPWARD-ARCHING fold; OLDEST rocks in the centre of the fold",
    "Syncline: a DOWNWARD-ARCHING (trough) fold; YOUNGEST rocks in the centre of the fold",
    "Monocline: a one-step fold; flat-lying rocks are bent up or down to a different horizontal level (common over buried faults)",
    "Hinge (or axis): the line of maximum curvature",
    "Limbs: the two sides of the fold that slope away from the hinge",
    "Axial plane: an imaginary plane that contains the hinges of successive layers (the 'plane of symmetry' of the fold)",
    "Symmetrical fold: axial plane vertical, both limbs dip at the same angle in opposite directions",
    "Asymmetrical fold: axial plane inclined, limbs dip at different angles",
    "Overturned fold: one limb has been rotated past vertical; both limbs dip in the same direction",
    "Recumbent fold: axial plane is nearly horizontal; one limb lies upside-down on the other",
    "Chevron fold: sharp, angular hinge and straight, equal-length limbs (zig-zag shape)",
    "Isoclinal fold: both limbs are parallel (extreme compression)",
    "Plunging fold: a fold whose hinge line is not horizontal — it 'plunges' into the ground",
    "Domes and basins: doubly plunging anticlines (domes, oldest in centre) and doubly plunging synclines (basins, youngest in centre)",
    "Folds form mainly in the middle crust where T and P are high enough for ductile behaviour"
  ],
  explanationSections: [
    { heading: "Anticline vs. syncline — the trap to avoid", body: "Many students assume anticlines are always hills and synclines are always valleys. In fact, the topographic expression of a fold depends on its age and erosion. A young anticline may indeed form a hill, but as erosion proceeds, the crest of the anticline is removed first (because it is most stretched and fractured), and the anticline can become a valley. Conversely, a syncline may initially form a valley, but as erosion removes weaker rock from the limbs, the synclinal trough may end up as a hill. The 'anticline = hill, syncline = valley' rule is therefore a useful starting point, not a universal truth." },
    { heading: "Plunging folds and their patterns", body: "When a fold's hinge line is not horizontal but tilts into the ground, the fold is said to plunge. Plunging folds produce distinctive 'V'-shaped or 'nose'-shaped outcrop patterns on geological maps: plunging anticlines close (nose out) in the direction of plunge, and plunging synclines close in the opposite direction. The classic V-shape is a powerful tool for interpreting structure from a map. Domes and basins are doubly plunging — the hinge closes in two opposite directions. The Black Hills of South Dakota are a classic eroded dome; the Michigan Basin is a classic basin structure." },
    { heading: "How folds form", body: "Folds form by ductile deformation under compressional stress, typically in convergent tectonic settings (continental collision, subduction-related compression). They range from gentle warps in sedimentary basins (draping over basement faults) to tight, isoclinal, recumbent folds in the cores of mountain belts. Folds can also form by drape folding (layers bent over a basement high), by buckling (a competent layer folds while a weaker layer flows), or by flow in weak layers like salt (salt tectonics produces spectacular folds in salt basins)." }
  ],
  examPoints: [
    "Anticline = upward arch; oldest rocks in the centre. Syncline = downward arch; youngest rocks in the centre. Opposite of the common mistake.",
    "Topographic expression of a fold is NOT reliable — an eroded anticline can be a valley, an eroded syncline a hill",
    "Plunging folds produce V-shaped or 'nose' outcrop patterns on geological maps",
    "Dome = doubly plunging anticline (oldest in centre, exposed as a ring); Basin = doubly plunging syncline (youngest in centre)",
    "Recumbent fold: axial plane nearly horizontal; one limb is inverted",
    "Chevron fold: sharp hinge, straight equal-length limbs; isoclinal fold: parallel limbs"
  ],
  comparisonTable: {
    headers: ["Fold type", "Shape", "Age of rocks in centre"],
    rows: [
      ["Anticline", "Upward arch", "Oldest"],
      ["Syncline", "Downward arch (trough)", "Youngest"],
      ["Monocline", "One-step bend", "Continuous sequence"],
      ["Recumbent", "Axial plane nearly horizontal", "Variable"],
      ["Dome", "Doubly plunging anticline", "Oldest"],
      ["Basin", "Doubly plunging syncline", "Youngest"]
    ]
  },
  relatedTopics: ["earth-f1", "earth-f3", "earth-f4"],
  content: true,
  buildsOn: ["earth-f1"],
  leadsTo: ["earth-f3", "earth-f4"],
  usedIn: ["earth-f4", "earth-i1"]
},


{
  id: "earth-f3",
  sectionId: "EARTH-F",
  order: 3,
  title: "Faults: Normal, Reverse, Thrust & Strike-Slip",
  definition: "Faults are fractures across which rock masses have moved relative to one another. They form by brittle deformation in the upper crust and are the source of most earthquakes.",
  keyFacts: [
    "Fault plane: the surface of fracture along which movement occurs",
    "Hanging wall: the rock ABOVE the fault plane (if the fault dips)",
    "Footwall: the rock BELOW the fault plane",
    "Dip: the angle the fault plane makes with horizontal",
    "Strike: the direction of the horizontal line on the fault plane (perpendicular to dip)",
    "Normal fault: hanging wall moves DOWN relative to footwall; produced by TENSIONAL stress; characteristic of divergent boundaries (e.g., Basin and Range, East African Rift, mid-ocean ridge flanks)",
    "Reverse fault: hanging wall moves UP relative to footwall; produced by COMPRESSIONAL stress; characteristic of convergent boundaries",
    "Thrust fault: a low-angle (dip <30°) reverse fault; common in continental collisions (e.g., Himalayas, Alps, Appalachians); can transport rock sheets tens of kilometres",
    "Strike-slip fault: rocks slide HORIZONTALLY past one another; produced by SHEAR stress; characteristic of transform boundaries (e.g., San Andreas, North Anatolian, Alpine Fault)",
    "Right-lateral (dextral): opposite side appears to move to the right",
    "Left-lateral (sinistral): opposite side appears to move to the left",
    "Note: 'right-lateral' describes the apparent motion of the OPPOSITE side, not your own",
    "Oblique-slip: combination of dip-slip and strike-slip motion",
    "Transform fault: a special class of strike-slip fault that connects two other plate boundaries (e.g., mid-ocean ridge segments)",
    "Joints: fractures with NO displacement; extremely common in all rock types; often form in sets",
    "Faults are the source of most earthquakes; larger fault = larger possible earthquake"
  ],
  explanationSections: [
    { heading: "Hanging wall vs. footwall — the rule of the V", body: "A simple way to remember which is the hanging wall and which is the footwall: stand in a mine tunnel along a fault — your head touches the hanging wall (above), your feet rest on the footwall (below). Another mnemonic: hang your hat on the hanging wall, put your boots on the footwall. Whether the hanging wall moves up (reverse/thrust) or down (normal) determines the type of fault and the stress regime. This is also the basis of the 'stick figure' trick for finding dip direction on a geological map: a stick figure drawn across the trace of a fault on a map has its head on the hanging wall side and feet on the footwall side." },
    { heading: "The stress-fault correspondence", body: "The type of fault directly indicates the type of stress that produced it. Normal faults (hanging wall DOWN) result from tensional stress — the rock is being pulled apart. Reverse and thrust faults (hanging wall UP) result from compressional stress — the rock is being squeezed. Strike-slip faults (horizontal motion) result from shear stress. In any deformed region, the mix of fault types tells the geologist about the orientation and type of tectonic stress. This is widely used in earthquake hazard assessment and in hydrocarbon exploration (faults can trap oil and gas in structural closures)." },
    { heading: "Thrust faults — long-distance transport", body: "Thrust faults are low-angle reverse faults (dip <30°) that can transport large sheets of rock for tens or even hundreds of kilometres. The Lewis Overthrust in Montana/Canada moved a slab of Precambrian rock ~80 km eastward. In the Himalayas, the Main Central Thrust has placed Higher Himalayan crystalline rocks over the Lesser Himalayan sequence. The phenomenon of older rocks being thrust over younger rocks along a low-angle fault is so distinctive that any such relationship deserves close examination — it almost always indicates major tectonic shortening." },
    { heading: "Right-lateral vs. left-lateral — the apparent motion", body: "Naming a strike-slip fault 'right-lateral' or 'left-lateral' describes how the OPPOSITE side of the fault appears to move, relative to a fixed observer on one side. To determine which type it is: stand on one side of the fault and look across — if the features on the other side have moved to the right, it is right-lateral (dextral). This is the reason the San Andreas is right-lateral: a fence across the fault would, after an earthquake, appear to have the far side shifted to the right. The choice of which side you stand on does not matter — the fault is right-lateral regardless of viewpoint." }
  ],
  examPoints: [
    "Normal fault: hanging wall DOWN, tensional stress, divergent boundaries (e.g., Basin and Range)",
    "Reverse fault: hanging wall UP, compressional stress, convergent boundaries",
    "Thrust fault: low-angle reverse fault (dip <30°); common in continental collisions; can move rock sheets tens of km",
    "Strike-slip fault: horizontal motion, shear stress, transform boundaries (San Andreas is right-lateral)",
    "Hanging wall = ABOVE the fault plane; footwall = BELOW",
    "Joints: fractures with NO displacement; the most common brittle structure in the upper crust"
  ],
  comparisonTable: {
    headers: ["Fault type", "Movement", "Stress", "Tectonic setting", "Example"],
    rows: [
      ["Normal", "Hanging wall down", "Tensional", "Divergent", "Basin and Range, East African Rift"],
      ["Reverse", "Hanging wall up", "Compressional", "Convergent", "Many in mountain belts"],
      ["Thrust", "Hanging wall up, low angle", "Compressional", "Convergent (collision)", "Main Central Thrust (Himalayas)"],
      ["Strike-slip (right-lateral)", "Horizontal, opposite side right", "Shear", "Transform", "San Andreas Fault, Alpine Fault"],
      ["Strike-slip (left-lateral)", "Horizontal, opposite side left", "Shear", "Transform", "North Anatolian Fault, Dead Sea Fault"]
    ]
  },
  relatedTopics: ["earth-f1", "earth-f2", "earth-f4", "earth-h1"],
  content: true,
  buildsOn: ["earth-f1", "earth-d3"],
  leadsTo: ["earth-f4", "earth-h1"],
  usedIn: ["earth-h1", "earth-h5", "earth-i2", "earth-i3"]
},


{
  id: "earth-f4",
  sectionId: "EARTH-F",
  order: 4,
  title: "Joints, Mountain Building & Tectonic Structures",
  definition: "Joints are the most common brittle structure in the upper crust — fractures across which there has been no significant displacement. Together with folds and faults, joints are key to understanding how rocks deform in response to tectonic stress and how mountains are built.",
  keyFacts: [
    "Joints: fractures with NO displacement; occur in all rock types; usually form in sets with consistent orientations",
    "Tectonic joints: produced by regional stress (extension or compression)",
    "Cooling joints: produced by shrinkage during cooling (e.g., columnar jointing in basalt — Giant's Causeway, Devils Tower)",
    "Exfoliation joints: produced by pressure release (unloading) — curved sheet joints parallel to the topographic surface; common in granites",
    "Controls groundwater flow (joints are aquifers in many areas)",
    "Controls the stability of slopes and tunnels (joints are planes of weakness)",
    "Controls the geometry of mineral veins (ore-bearing fluids flow along joints)",
    "Compressional mountain belts form at convergent plate boundaries (e.g., Andes, Himalayas, Alps)",
    "Stages: (1) sedimentation in a passive margin basin, (2) subduction/collision, (3) crustal thickening, (4) uplift and erosion, (5) isostatic rebound and exhumation of deep rocks",
    "Orogenic processes: folding, thrust faulting, metamorphism, magmatism, surface uplift, erosion",
    "Isostasy and mountains: as a mountain belt erodes and the crust thins, the underlying asthenosphere flows back in and the mountains rise isostatically — a 'rebound' that prolongs mountain life",
    "Accretionary wedge: a mass of sediment and rock scraped off the subducting plate and accreted to the overriding plate; common at subduction zones; produces melange and thrust stacks",
    "Structural geology in practice: mapping, cross-section construction, and 3D visualisation are the daily work of structural geologists in exploration, hazard assessment, and engineering"
  ],
  explanationSections: [
    { heading: "Columnar jointing — a spectacular exception", body: "Most joints are irregular or part of a regional tectonic joint set, but some are spectacularly regular. Columnar jointing forms when a thick lava flow or shallow igneous intrusion cools slowly and uniformly: as the rock cools and contracts, it fractures into polygonal columns (typically hexagonal) that are perpendicular to the cooling surface. Famous examples include the Giant's Causeway in Northern Ireland, Devils Tower in Wyoming, and the 'organ pipes' of Mount Kaputar in Australia. The columns form perpendicular to the cooling surface, so in a vertical lava flow the columns are horizontal; in a horizontal lava flow they are vertical." },
    { heading: "The anatomy of a mountain belt", body: "A mature compressional mountain belt has a characteristic architecture. From the suture (the line of the original collision) outward, one typically finds: (1) a metamorphic core of high-grade gneiss and schist, with granitic intrusions; (2) a stack of thrust sheets carrying older rocks over younger ones; (3) a foreland fold-and-thrust belt, where sedimentary rocks are folded and thrust over undeformed foreland; (4) a foreland basin, where sediment eroded from the rising mountains accumulates. The Alps, Himalayas, Appalachians, and Andes all show this general architecture, with local variations." },
    { heading: "Erosion and isostatic rebound", body: "Erosion and uplift are coupled by isostasy. As a mountain belt is eroded, mass is removed from the top of the crust. To maintain isostatic equilibrium, the underlying asthenosphere flows inward and the crust rises (rebound). This means the mountains 'feel' the erosion and respond by rising — at the same time as they are being worn down. In a steady state, erosion and uplift can be in balance, with the mountains maintaining a roughly constant mean elevation while mass is continuously being cycled. In the Himalayas, for example, the rate of erosion is comparable to the rate of uplift, allowing the mountains to maintain their extraordinary heights." }
  ],
  examPoints: [
    "Joints: fractures with NO displacement; very common in the upper crust",
    "Columnar jointing: polygonal (usually hexagonal) columns in cooling lava flows; Giant's Causeway, Devils Tower",
    "Mountain belts: result from convergent plate boundary processes (subduction + collision); include folding, thrust faulting, metamorphism, magmatism",
    "Foreland basin: receives sediment eroded from a rising mountain belt",
    "Isostatic rebound: as a mountain belt erodes, it rises to maintain equilibrium with the asthenosphere",
    "Accretionary wedge: sediments scraped off a subducting plate and added to the overriding plate"
  ],
  relatedTopics: ["earth-f1", "earth-f2", "earth-f3", "earth-d3", "earth-d4"],
  content: true,
  buildsOn: ["earth-f2", "earth-f3", "earth-d2"],
  leadsTo: [],
  usedIn: ["earth-i1"]
},




// ════════════════════════════════════════════════════════════════════
// SECTION EARTH-G: Volcanism
// ════════════════════════════════════════════════════════════════════


{
  id: "earth-g1",
  sectionId: "EARTH-G",
  order: 1,
  title: "Magma vs. Lava, Composition & Properties",
  definition: "Magma is molten rock beneath Earth's surface, including dissolved gases and suspended crystals. Lava is magma that has reached the surface. The composition, temperature, and gas content of magma control the style of volcanic eruption and the resulting landforms.",
  keyFacts: [
    "Magma: molten rock BELOW the surface; contains dissolved gases (H₂O, CO₂, SO₂), suspended crystals, and sometimes unmelted rock fragments",
    "Lava: magma that has reached the SURFACE; gases may have escaped, temperature may have changed",
    "Felsic magma: >65% SiO₂, rich in K-feldspar, Na-plagioclase, quartz; high viscosity; cool temperatures (~650–800 °C); gas-rich; produces explosive eruptions",
    "Intermediate magma: 55–65% SiO₂; andesitic composition; moderate viscosity; ~800–1,000 °C",
    "Mafic magma: 45–55% SiO₂; rich in Ca-plagioclase, pyroxene, olivine; low viscosity; hot (~1,000–1,200 °C); gas-poor; produces effusive (flowing) eruptions",
    "Ultramafic magma: <45% SiO₂; rare at the surface (e.g., komatiite); very hot (~1,600 °C); extremely fluid",
    "Felsic magma: HIGH viscosity (sticky, like cold honey or peanut butter); traps gases → explosive",
    "Mafic magma: LOW viscosity (fluid, like warm syrup); gases escape easily → effusive",
    "Higher SiO₂ → more polymerised silicate chains → higher viscosity",
    "Higher temperature → lower viscosity",
    "Higher gas content → lower viscosity (but trapped gas at depth → explosive potential)",
    "Basaltic (mafic): from decompression melting at mid-ocean ridges and hotspots; dominant magma type in the world",
    "Andesitic (intermediate): from subduction-zone flux melting; common in continental volcanic arcs (Andes)",
    "Rhyolitic (felsic): from melting of continental crust (or extreme differentiation of basaltic magma); forms in continental rifts and continental arcs",
    "Temperature decreases in the order: ultramafic > mafic > intermediate > felsic",
    "Density decreases in the same order: felsic magma is less dense than mafic"
  ],
  explanationSections: [
    { heading: "Why composition matters so much", body: "The silica content of magma is the single most important control on eruption style. Silica forms long polymerised chains in the melt, much like a tangled ball of string. A felsic magma with >65% SiO₂ has so many of these chains that it flows like cold honey; a basaltic magma with 50% SiO₂ has fewer chains and flows like warm syrup. The viscosity controls whether gases can escape: in a fluid basalt, bubbles of CO₂ and H₂O rise and pop quietly; in a sticky felsic magma, bubbles cannot escape and pressure builds until the magma explodes. This is why basaltic volcanoes (Hawaii) are gentle and felsic ones (Mount St. Helens, Yellowstone) are explosive." },
    { heading: "Where magmas come from", body: "Three main tectonic settings produce most of Earth's magmas. (1) Decompression melting at mid-ocean ridges and hotspots: hot mantle rises and the pressure drops, allowing it to melt without any change in temperature. This produces basaltic magma, the dominant magma type on Earth. (2) Flux melting at subduction zones: water released from the subducting slab lowers the melting point of the overlying mantle wedge, producing basaltic to andesitic magma. (3) Crustal melting in continental rifts and arcs: hot basalt intrudes the crust and partially melts it, producing felsic (rhyolitic) magma. The mix of these three processes explains the global distribution of volcanoes." },
    { heading: "Magma evolution: fractional crystallisation", body: "Magma composition can change after it forms. As a basaltic magma cools, high-temperature minerals (olivine, Ca-plagioclase) crystallise and settle out, leaving the remaining melt more silica-rich. This process, called fractional crystallisation, can drive a basaltic magma to andesitic and eventually rhyolitic compositions. The layered intrusions of the Bushveld Complex (South Africa) and the Stillwater Complex (Montana) are dramatic records of this process — a single cooling magma chamber produced a graded sequence of rocks from mafic at the bottom to felsic at the top." }
  ],
  examPoints: [
    "Magma is below the surface; lava is at the surface. Same molten rock, different name based on location.",
    "Silica content controls viscosity: HIGHER SiO₂ → HIGHER viscosity → more explosive eruption",
    "Felsic magma: high SiO₂, low temperature, gas-rich, viscous, explosive (rhyolite, granite)",
    "Mafic magma: low SiO₂, high temperature, gas-poor, fluid, effusive (basalt, gabbro)",
    "Most common magma type on Earth: BASALTIC (mafic) — from decompression melting at ridges and hotspots",
    "Three tectonic sources of magma: decompression melting (ridges/hotspots), flux melting (subduction), crustal melting (continental arcs/rifts)"
  ],
  comparisonTable: {
    headers: ["Magma type", "SiO₂ %", "Temp (°C)", "Viscosity", "Gas content", "Eruption style", "Volcanic rock"],
    rows: [
      ["Felsic (rhyolitic)", ">65%", "650–800", "Very high", "High", "Explosive", "Rhyolite"],
      ["Intermediate (andesitic)", "55–65%", "800–1,000", "Moderate", "Moderate", "Mixed", "Andesite"],
      ["Mafic (basaltic)", "45–55%", "1,000–1,200", "Low", "Low", "Effusive", "Basalt"],
      ["Ultramafic", "<45%", "1,200–1,600", "Very low", "Very low", "Very effusive", "Komatiite (rare)"]
    ]
  },
  relatedTopics: ["earth-g2", "earth-g3", "earth-b3"],
  content: true,
  buildsOn: ["earth-a4", "earth-b3", "earth-d2", "phy-temperature-heat", "phy-density"],
  leadsTo: ["earth-g2"],
  usedIn: ["earth-g2", "earth-g3", "h-solar-volcanic-forcing"]
},


{
  id: "earth-g2",
  sectionId: "EARTH-G",
  order: 2,
  title: "Volcano Types & Eruptive Styles",
  definition: "Volcanoes are classified by shape, size, and eruptive style, which in turn are controlled by magma composition, gas content, and the tectonic setting. The three main types — shield, composite (stratovolcano), and cinder cone — have very different profiles and hazards.",
  keyFacts: [
    "Three main volcano types: shield, composite (stratovolcano), and cinder cone — distinguished by shape, size, magma type, and eruption style",
    "Broad, gently sloping dome (like a warrior's shield); slopes 2–10°",
    "Built by many eruptions of low-viscosity (basaltic) lava that flows long distances before solidifying",
    "Gas-poor magma; effusive (non-explosive) eruptions",
    "Examples: Mauna Loa and Kilauea (Hawaii), Erta Ale (Ethiopia), Iceland's volcanoes",
    "Largest volcanoes on Earth by volume; Mauna Loa rises ~9 km from the ocean floor",
    "Steep, symmetrical cone; slopes 30–40° near the base, gentler near the top; layered (alternating lava and pyroclastic layers)",
    "Built by intermediate (andesitic) to felsic magma; high viscosity; explosive eruptions",
    "Often produces pyroclastic flows, lahars, ash falls, and lava domes",
    "Examples: Mt. Fuji (Japan), Mt. St. Helens (USA), Mt. Pinatubo (Philippines), Mt. Vesuvius (Italy)",
    "Small, steep, conical hill; slopes up to 35°; typically 100–400 m high",
    "Built from pyroclastic fragments (cinders, ash, bombs) ejected from a single vent; not usually a long-lived structure",
    "Often forms on the flanks of larger volcanoes or in monogenetic fields",
    "Examples: Parícutin (Mexico, 1943), Sunset Crater (Arizona), many cones in the San Francisco volcanic field",
    "Lava domes: mounds of viscous (often felsic) lava that pile up over the vent, too sticky to flow far",
    "Calderas: large collapse depressions formed when a magma chamber empties during a giant eruption (e.g., Yellowstone, Crater Lake)",
    "Fissure eruptions: long cracks that erupt flood basalt flows (e.g., Iceland's Laki, Columbia River basalts)",
    "Eruption styles are described as Hawaiian (effusive), Strombolian (mild explosions), Vulcanian (moderate), Plinian (huge explosive columns), and Surtseyan (water–magma interaction)",
    "Volcanoes form at three tectonic settings: divergent boundaries (basaltic, effusive), convergent boundaries (andesitic, explosive), and hotspots (basaltic, effusive)"
  ],
  explanationSections: [
    { heading: "Shape follows magma", body: "The shape of a volcano is a direct consequence of its magma. Fluid basaltic lava flows long distances before solidifying, building a low, broad shield — Mauna Loa is the classic example. Sticky felsic or andesitic lava piles up near the vent, building a steep cone — Mt. Fuji is the classic example. Pyroclastic material (ash, cinders) also piles up at the angle of repose (~35°), so cinder cones built entirely of tephra are always steep and small. A composite volcano is a long-lived, multi-source structure that alternates between effusive and explosive activity, building up a layered edifice of lava flows and pyroclastic deposits." },
    { heading: "Why some eruptions are explosive and others are not", body: "The explosivity of a volcanic eruption is controlled by magma viscosity and gas content. In fluid basaltic magma, gas bubbles rise and escape gently, producing 'fire-fountain' eruptions (Hawaiian style). In viscous felsic or andesitic magma, gas bubbles cannot escape — pressure builds until the magma literally explodes, fragmenting into ash and pumice and producing a tall eruption column (Plinian style, named after Pliny the Younger's description of the 79 AD Vesuvius eruption). Water-magma interaction (Surtseyan style) adds another explosive pathway when magma contacts groundwater, lakes, or seawater." },
    { heading: "Calderas and supervolcanoes", body: "When a very large volume of magma is erupted in a short time, the underlying chamber empties and the surface collapses, forming a caldera. Crater Lake in Oregon is a 10-km-wide caldera formed about 7,700 years ago when Mt. Mazama erupted ~50 km³ of material and collapsed. Yellowstone is a much larger caldera (~70 × 50 km) that has produced three 'supereruptions' in the past 2 million years, each ejecting >1,000 km³ of material. The largest known caldera-forming eruptions (e.g., Toba, ~74,000 years ago, ~2,800 km³) can have global climate effects, triggering a 'volcanic winter' of several years." }
  ],
  examPoints: [
    "Shield volcano: gentle slope, basaltic lava, effusive eruption; example: Mauna Loa",
    "Composite (strato) volcano: steep layered cone, andesitic, explosive; example: Mt. Fuji",
    "Cinder cone: small, steep, pyroclastic; example: Parícutin (Mexico)",
    "Explosive eruptions: high viscosity + high gas content + high SiO₂ magma",
    "Caldera: collapse depression formed by emptying of a magma chamber; Yellowstone is a supervolcano caldera",
    "Eruption styles: Hawaiian (effusive), Strombolian, Vulcanian, Plinian (most explosive), Surtseyan (water–magma)"
  ],
  comparisonTable: {
    headers: ["Type", "Shape", "Slope", "Magma", "Eruption", "Example"],
    rows: [
      ["Shield", "Broad dome", "2–10°", "Basaltic (low SiO₂, fluid)", "Effusive", "Mauna Loa, Kilauea"],
      ["Composite (strato)", "Steep layered cone", "30–40°", "Andesitic to felsic", "Explosive", "Mt. Fuji, Mt. St. Helens"],
      ["Cinder cone", "Small, steep cone", "30–35°", "Basaltic, gas-rich", "Mild explosions", "Parícutin, Sunset Crater"],
      ["Lava dome", "Mound over vent", "Steep", "Felsic, viscous", "Slow extrusion", "Mt. St. Helens dome"],
      ["Caldera", "Large collapse depression", "—", "Felsic (often)", "Catastrophic", "Yellowstone, Crater Lake"]
    ]
  },
  relatedTopics: ["earth-g1", "earth-g3", "earth-b3"],
  content: true,
  buildsOn: ["earth-g1", "earth-d3"],
  leadsTo: ["earth-g3"],
  usedIn: ["earth-g3", "earth-h5"]
},


{
  id: "earth-g3",
  sectionId: "EARTH-G",
  order: 3,
  title: "Volcanic Products, Hazards & Benefits",
  definition: "Volcanic eruptions produce a wide range of products — lava flows, pyroclastic materials, gases, and lahars — each with characteristic hazards. Despite their destructive power, volcanoes also bring significant benefits: fertile soils, geothermal energy, mineral deposits, and new land.",
  keyFacts: [
    "Volcanic products can be grouped into three categories: lava flows, pyroclastic materials, and gases",
    "Aa (pronounced 'ah-ah'): rough, broken, jagged blocks; formed by fast-moving, partially cooled basaltic lava",
    "Pahoehoe (pronounced 'pa-hoy-hoy'): smooth, ropy, billowy surface; formed by hotter, fluid basaltic lava that develops a thin skin while still flowing",
    "Block lava: large, smooth-sided blocks of more viscous (andesitic) lava",
    "Pillow lava: bulbous, rounded masses formed when lava erupts underwater; common at mid-ocean ridges and submarine volcanoes",
    "Lava flow speed: basaltic flows typically 1–10 km/h on steep slopes; can travel many km before solidifying",
    "Ash: <2 mm, fine glass fragments; can travel thousands of km in the atmosphere",
    "Lapilli: 2–64 mm, pea-sized fragments",
    "Bombs: >64 mm, ejected as molten blobs; often take on aerodynamic shapes during flight",
    "Blocks: >64 mm, solid rock fragments ejected intact; not molten",
    "Pumice: light, frothy volcanic glass full of gas bubbles; floats on water",
    "PYROCLASTIC FLOWS: hot, fast, deadly mixtures of gas and pyroclastic debris that hug the ground and travel at hundreds of km/h; can be hotter than 700 °C; one of the most deadly volcanic phenomena (Pompeii, Mt. Pelée 1902)",
    "LAHARS: volcanic mudflows — mixtures of volcanic ash and water (from rainfall, melted snow/ice, or crater lakes); can travel tens of km down valleys at high speed; very destructive (Nevado del Ruiz 1985, ~25,000 dead)",
    "VOLCANIC GASES: H₂O (most abundant), CO₂, SO₂, H₂S, HCl, HF; SO₂ reacts in the atmosphere to form sulphate aerosols, which can cause global cooling for months to years (e.g., 1991 Pinatubo cooled global temperatures by ~0.5 °C for ~1 year); CO₂ release over geological time contributes to long-term greenhouse warming; massive flood basalt eruptions have been linked to mass extinctions",
    "VOLCANIC HAZARDS: lava flows, ash fall, pyroclastic flows, lahars, volcanic gases, tsunamis (from submarine eruptions or flank collapse), climate effects (cooling from SO₂, warming from CO₂)",
    "VOLCANIC BENEFITS: fertile volcanic soils (andesitic regions like Java, Italy, the Andes), geothermal energy (Iceland, New Zealand, Philippines, Kenya), mineral deposits (porphyry copper, gold, silver, sulfur), new land (Surtsey, Iceland 1963–67), tourism"
  ],
  explanationSections: [
    { heading: "Pyroclastic flows — the deadliest volcanic phenomenon", body: "Pyroclastic flows are hot (300–700 °C), fast-moving (100–700 km/h) mixtures of volcanic gas, ash, and rock fragments that sweep down the flanks of a volcano. They are produced when an explosive eruption ejects material that is too dense to rise as an eruption column, so it collapses and flows downslope under gravity. Their high temperature and speed make them the most deadly volcanic phenomenon: the 1902 Mt. Pelée pyroclastic flow killed ~28,000 people in St. Pierre, Martinique, in minutes. The AD 79 eruption of Vesuvius produced pyroclastic flows that buried Pompeii and Herculaneum. The 1980 Mt. St. Helens lateral blast was a kind of pyroclastic flow (a lateral blast rather than a vertical column collapse)." },
    { heading: "Volcanoes and climate", body: "Volcanic eruptions can cause both short-term cooling and long-term warming. SO₂ injected into the stratosphere converts to sulphate aerosols, which reflect sunlight and cause global cooling. The 1991 Pinatubo eruption cooled global temperatures by ~0.5 °C for about a year; the 1815 Tambora eruption caused the 'Year Without a Summer' (1816) in Europe and North America, with frosts in summer and widespread crop failure. Over geological time, large flood basalt eruptions (e.g., the Deccan Traps in India ~66 Ma) released enormous volumes of CO₂, contributing to greenhouse warming and possibly triggering mass extinctions." },
    { heading: "Why people live near volcanoes", body: "Despite the hazards, hundreds of millions of people live within the danger zone of active volcanoes. The reason is that volcanic regions are extraordinarily fertile. Andesitic and basaltic ash weathers to produce rich, mineral-rich soils ideal for agriculture — the rice terraces of Java, the vineyards of Italy, the coffee of Central America, and the wheat of the Pacific Northwest all depend on volcanic soils. Volcanoes also provide geothermal energy (Iceland generates ~25% of its electricity from geothermal sources), mineral resources (porphyry copper, gold, silver, sulfur), and tourism. The decision to live in a volcanic zone is a calculation of risk versus reward, and successful cultures have learned to read the signs of impending eruptions." }
  ],
  examPoints: [
    "Aa: rough, jagged basaltic lava; Pahoehoe: smooth, ropy basaltic lava",
    "Pillow lava: bulbous masses formed when lava erupts underwater (e.g., at mid-ocean ridges)",
    "Pyroclastic flow: hot, fast, ground-hugging mixture of gas and ash; deadliest volcanic phenomenon",
    "Lahar: volcanic mudflow; can travel tens of km; triggered by eruptions in ice/snow or heavy rain on ash",
    "Volcanic gases: mainly H₂O and CO₂; SO₂ causes short-term global cooling; CO₂ over geological time causes warming",
    "Volcanic benefits: fertile soils, geothermal energy, mineral deposits, new land (Surtsey 1963–67)"
  ],
  comparisonTable: {
    headers: ["Pyroclastic size", "Term", "Description"],
    rows: [
      ["<2 mm", "Ash", "Fine glass fragments; can travel 1,000s of km"],
      ["2–64 mm", "Lapilli", "Pea-sized fragments"],
      [">64 mm (molten)", "Bomb", "Ejected as molten blobs; often aerodynamic shapes"],
      [">64 mm (solid)", "Block", "Solid rock fragments ejected intact"]
    ]
  },
  comparisonTableHazards: {
    headers: ["Volcanic hazard", "Description", "Most at risk"],
    rows: [
      ["Lava flow", "Flowing molten rock", "Nearby property (relatively low mortality)"],
      ["Pyroclastic flow", "Hot, fast, ground-hugging ash/gas cloud", "Everything in path (very high mortality)"],
      ["Lahar", "Volcanic mudflow in valleys", "River valleys tens of km downstream"],
      ["Ash fall", "Fine ash from eruption column", "Wide area; aviation; agriculture; respiratory"],
      ["Volcanic gas (SO₂)", "Acid aerosols, short-term cooling", "Downwind; global climate"],
      ["Volcanic gas (CO₂)", "Greenhouse gas over geological time", "Global climate (long term)"]
    ]
  },
  relatedTopics: ["earth-g1", "earth-g2", "earth-e2"],
  content: true,
  buildsOn: ["earth-g2"],
  leadsTo: [],
  usedIn: ["h-solar-volcanic-forcing", "env-climate-change-response"]
},




// ════════════════════════════════════════════════════════════════════
// SECTION EARTH-H: Earthquakes & Seismology
// ════════════════════════════════════════════════════════════════════


{
  id: "earth-h1",
  sectionId: "EARTH-H",
  order: 1,
  priority: "high", // 🔴 syllabus
  title: "Earthquakes: Causes, Terminology & Source Mechanics",
  definition: "An earthquake is the sudden release of elastic strain energy stored in rock, producing seismic waves that shake the ground. Most earthquakes occur along active faults at or near plate boundaries, but they can also be triggered by volcanic activity, landslides, or human activities.",
  keyFacts: [
    "Most common cause: tectonic — sudden slip on a fault releasing accumulated elastic strain",
    "Other causes: volcanic (magma/hydrothermal pressure), collapse (caves/mines), induced (dams, mining, fracking, wastewater injection), explosions",
    "Focus (hypocenter): underground point of origin of the earthquake",
    "Epicenter: point on Earth's surface directly above the focus",
    "Focal depth categories: shallow (<70 km, most destructive), intermediate (70–300 km), deep (300–700 km — only in cold subducting slabs)",
    "Foreshocks: smaller quakes that precede a larger one in the same area",
    "Mainshock: the largest quake in a sequence",
    "Aftershocks: smaller quakes following the mainshock; frequency decreases over time (Omori's law)",
    "Elastic Rebound Theory (Reid, 1910): tectonic stress → elastic strain storage → sudden slip → rebound → seismic waves",
    "Stick-slip mechanism: faults alternately store strain (stick) and release it suddenly (slip), producing the earthquake cycle",
    "Earthquake swarms: many small quakes with no clear mainshock (common in volcanic/magmatic settings)"
  ],
  explanationSections: [
    { heading: "The Elastic Rebound Theory", body: "Before the 1906 San Francisco earthquake, H. F. Reid studied offset fences, roads, and field boundaries across the San Andreas Fault. After the quake, he noted that the same features were now offset by several metres — but in opposite directions, indicating elastic rebound. His theory explains the earthquake cycle: (1) tectonic stress slowly deforms the rock on either side of a fault; (2) the rock stores this strain elastically, like a stretched spring; (3) when the stress exceeds the fault's frictional strength, the fault slips suddenly; (4) the rock rebounds to a less-strained state, releasing its stored elastic energy as seismic waves. This simple model is the foundation of modern earthquake science." },
    { heading: "Why aftershocks happen", body: "A mainshock redistributes stress in the surrounding rock. Some nearby areas experience increased stress (and may fail in subsequent aftershocks); others experience decreased stress (and become more stable). Aftershocks follow a general pattern: their frequency decreases roughly as 1/t (Omori's law, 1894), and their magnitudes are typically up to about 1.1 units lower than the mainshock (Båth's law). Large aftershocks can be deadly — the 2011 Tōhoku (Japan) mainshock was followed by a large aftershock that complicated rescue and recovery." },
    { heading: "Foreshocks, swarms, and predicting earthquakes", body: "Foreshocks are small quakes that precede a larger one in the same area, but they cannot be reliably distinguished from ordinary background seismicity until the mainshock happens. Earthquake swarms — sequences of many small quakes with no clear mainshock — are common in volcanic regions (e.g., Yellowstone, Long Valley) and in zones of active fluid injection. Short-term earthquake prediction (hours to days) remains unreliable; modern efforts focus instead on long-term hazard assessment (probabilities over decades) and rapid early warning after a quake has begun." }
  ],
  examPoints: [
    "Focus (hypocenter) is underground; epicenter is on the surface directly above it",
    "Focal depth: shallow (<70 km), intermediate (70–300 km), deep (300–700 km)",
    "Tectonic earthquakes (fault slip) are by far the most common cause",
    "Elastic Rebound Theory: stress → elastic strain → sudden slip → rebound → seismic waves",
    "Stick-slip: faults alternately store strain (stick) and release it suddenly (slip)",
    "Aftershocks decrease in frequency over time according to Omori's law; can continue for years"
  ],
  comparisonTable: {
    headers: ["Type", "Cause", "Examples"],
    rows: [
      ["Tectonic", "Sudden slip on a fault", "Most earthquakes (San Andreas, Kashmir 2005)"],
      ["Volcanic", "Magma movement, fluid pressure", "Yellowstone swarms, Mt. Pinatubo 1991"],
      ["Induced (anthropogenic)", "Reservoir loading, fracking, mining", "Oklahoma induced quakes"],
      ["Collapse", "Cave or mine roof collapse", "Sinkhole-related events"],
      ["Explosion", "Nuclear or chemical blast", "Nuclear tests (NTS, DPRK)"]
    ]
  },
  relatedTopics: ["earth-h2", "earth-h3", "earth-h4", "earth-i1"],
  content: true,
  buildsOn: ["earth-d3", "earth-f3", "phy-newtons-laws", "phy-work-energy"],
  leadsTo: ["earth-h2", "earth-h3"],
  usedIn: ["earth-h2", "earth-h5", "earth-i2"]
},


{
  id: "earth-h2",
  sectionId: "EARTH-H",
  order: 2,
  title: "Seismic Waves: Body & Surface",
  definition: "Seismic waves are elastic waves that travel through Earth after an earthquake or explosion. They come in two main families: body waves, which travel through Earth's interior, and surface waves, which travel along Earth's surface and cause most of the damage.",
  keyFacts: [
    "P-waves (Primary, compressional):",
    "    - Motion: push–pull (compress and dilate) in the direction of travel (longitudinal)",
    "    - Speed: fastest (~6–13 km/s in the crust, up to ~13 km/s in the upper mantle)",
    "    - Can travel through solids, liquids, and gases",
    "    - First to arrive at a seismograph ('first' wave); S-waves (Secondary, shear):",
    "    - Motion: side-to-side perpendicular to direction of travel (transverse)",
    "    - Speed: slower (~3.5–7 km/s in the crust)",
    "    - Travel through SOLIDS only — cannot pass through liquids (proves the liquid outer core)",
    "    - Second to arrive at a seismograph",
    "Love waves: horizontal side-to-side shear motion perpendicular to direction of travel; named after A. E. H. Love",
    "Rayleigh waves: rolling, elliptical motion (both vertical and horizontal), like ocean waves; named after Lord Rayleigh",
    "Order of arrival at a distant station: P-wave → S-wave → Surface waves",
    "Time delay between P and S arrivals increases with distance from the epicenter — the basis for locating earthquakes",
    "S-wave shadow zone: 103°–180° from epicenter — direct S-waves absent because they cannot pass through the liquid outer core",
    "P-wave shadow zone: 103°–140° — direct P-waves weak or absent because of refraction at the core–mantle boundary",
    "The existence of these shadow zones is the primary evidence for a liquid outer core"
  ],
  explanationSections: [
    { heading: "P-waves vs. S-waves — the diagnostic pair", body: "P-waves and S-waves are the diagnostic duo of seismology. P-waves (compressional) work like sound waves: they push and pull material in the direction of travel. They are the fastest and can pass through anything. S-waves (shear) work like shaking a rope: they move material side-to-side perpendicular to the direction of travel. Because fluids do not support shear stress, S-waves cannot pass through liquids. The disappearance of S-waves at ~2,890 km depth (the Gutenberg discontinuity) was the original evidence that the outer core is liquid. The fact that P-waves still arrive in the S-wave shadow zone (just slower) confirmed that the outer core is liquid but not gas — and is also useful for imaging the deep Earth." },
    { heading: "Surface waves and earthquake damage", body: "Surface waves arrive after the body waves and usually have larger amplitudes, especially at large distances from the epicenter. The two main types are Love waves (horizontal shear, side-to-side, like a snake) and Rayleigh waves (rolling, elliptical, like ocean waves but in solid ground). Because surface waves are confined to the surface and have larger amplitudes, they cause most of the damage to buildings and infrastructure during an earthquake. The collapse of bridges, the buckling of rail lines, and the liquefaction of soils are all predominantly surface-wave effects." },
    { heading: "Reading a seismogram", body: "A seismogram is a record of ground motion over time at a single station. The first wiggle to appear is the P-wave. After a time interval that depends on the distance from the epicenter, the larger-amplitude S-wave arrives. The time delay between P and S is the key measurement for locating the earthquake: at a distance of 100 km the delay is about 12 seconds; at 1,000 km it is about 2 minutes. The later, even-larger arrivals are the surface waves, which can persist for many minutes in a great earthquake." }
  ],
  examPoints: [
    "P-waves: fastest, push–pull, can pass through solids/liquids/gases; arrive first",
    "S-waves: slower, side-to-side, can pass through SOLIDS only; arrive second",
    "Surface waves (Love and Rayleigh) travel along the surface; slowest but most damaging",
    "P-wave shadow zone: ~103°–140°; S-wave shadow zone: ~103°–180°",
    "S-waves cannot pass through the liquid outer core — the key evidence for it",
    "Order of arrival: P → S → surface waves"
  ],
  comparisonTable: {
    headers: ["Wave", "Type", "Speed", "Medium", "Motion", "Arrival order"],
    rows: [
      ["P-wave", "Body", "~6–13 km/s (fastest)", "Solid, liquid, gas", "Compressional (push–pull)", "First"],
      ["S-wave", "Body", "~3.5–7 km/s", "Solid only", "Shear (side-to-side)", "Second"],
      ["Love wave", "Surface", "Slower than S", "Surface", "Horizontal shear", "Last (after Rayleigh)"],
      ["Rayleigh wave", "Surface", "Slower than S", "Surface", "Rolling (elliptical)", "Last"]
    ]
  },
  relatedTopics: ["earth-h1", "earth-h3", "earth-a3"],
  content: true,
  buildsOn: ["earth-h1", "phy-wave-properties", "phy-wave-types", "earth-a3"],
  leadsTo: ["earth-h3", "earth-k2"],
  usedIn: ["earth-h3", "earth-h4", "earth-k2", "ra-data-types", "ra-data-visualization", "ra-data-interpretation"]
},


{
  id: "earth-h3",
  sectionId: "EARTH-H",
  order: 3,
  title: "Locating Earthquakes & Seismographs",
  definition: "Earthquakes are located using a worldwide network of seismographs that record the arrival times of P-waves and S-waves. The distance from each station to the epicenter is determined from the P–S time difference, and the epicenter is found by triangulation from at least three stations.",
  keyFacts: [
    "Seismograph (seismometer): an instrument that detects and records ground motion (vibration) from seismic waves",
    "Modern seismograph principle: a mass suspended on a spring (or pendulum) tends to stay at rest due to inertia while the ground moves beneath it; the relative motion between mass and frame is recorded",
    "Seismogram: the actual record of ground motion over time, usually as a series of wiggles on paper or digitally",
    "Three components: vertical (up-down), north–south horizontal, east–west horizontal — together they capture the full 3D ground motion",
    "Modern broadband seismometers can detect ground motions of less than a nanometre; they record both local and global earthquakes, and even ocean microseisms and human cultural noise",
    "Locating an earthquake — method:",
    "  1. The P–S time interval (in seconds) is measured on each station's seismogram",
    "  2. The time interval is converted to a distance (in km) using a travel-time curve, calibrated for Earth's known velocity structure",
    "  3. A circle of that radius is drawn around the station on a map",
    "  4. The epicenter lies where at least THREE circles from different stations intersect (triangulation)",
    "Modern systems compute the location in real time using computer algorithms and the entire global network (the Global Seismographic Network, GSN)",
    "Origin time: the exact time the earthquake began at the focus; calculated by locating the epicenter and then using the P-wave travel time to back-calculate when the rupture started",
    "Focal mechanism (or 'beach-ball diagram'): graphical representation of the fault orientation and slip direction derived from the pattern of P-wave first motions",
    "A minimum of three stations is required to locate an epicenter; for accurate depth determination, closer stations or distant stations with good depth phases are needed"
  ],
  explanationSections: [
    { heading: "From P–S delay to distance", body: "Both P-waves and S-waves travel at known (different) speeds through Earth's interior. Because P-waves are faster, the gap between P and S arrivals increases as the waves travel farther. This time gap, multiplied by the appropriate velocity, gives the distance from the station to the epicenter. Travel-time curves are pre-computed tables or graphs that convert a P–S time delay into a distance. They account for the fact that velocity increases with depth — waves that travel deeper arrive faster than they would in a uniform Earth." },
    { heading: "Triangulation with three stations", body: "A single station gives a distance, but not a direction. Drawing a circle of that radius around the station on a map gives a locus of possible epicenters. With a second station, the two circles intersect at two points. A third station removes the ambiguity: the three circles intersect at a single point — the epicenter. In practice, the global seismic network has hundreds of stations, and the location is overdetermined: small errors at any one station are smoothed out. A computer solves the system of equations in milliseconds." },
    { heading: "From seismograph to seismogram", body: "A classic seismograph uses inertia: a heavy mass is suspended on a spring or pendulum inside a frame anchored to the ground. When the ground shakes, the frame moves, but the mass tends to stay in place due to inertia. The relative motion between the mass and the frame is amplified (mechanically or electronically) and recorded. Modern broadband seismometers use electronic feedback to keep the mass nearly stationary, then measure the force needed to do so — this gives a very clean, broad-frequency record. The resulting seismogram can be digitised and analysed with software." }
  ],
  examPoints: [
    "Seismograph detects ground motion; seismogram is the record",
    "P–S time delay is the key measurement for distance",
    "At least 3 stations are needed to locate an epicenter (triangulation)",
    "Modern global networks (e.g., GSN) compute locations in real time, automatically",
    "Focal mechanism ('beach-ball diagram') shows the fault orientation and slip direction",
    "Three components: vertical, N–S horizontal, E–W horizontal"
  ],
  workedExample: {
    problem: "Three seismograph stations record a P–S time delay of 24 s, 36 s, and 48 s respectively. The travel-time curve shows: 24 s ≈ 200 km, 36 s ≈ 300 km, 48 s ≈ 400 km. If the three circles drawn on a map (200 km, 300 km, 400 km radii) intersect at a single point, what does this tell you?",
    solution: "The single point of intersection of three circles is the epicenter of the earthquake. The fact that the circles intersect at exactly one point indicates consistent data and a reliable location. If the circles did not intersect precisely (they would form a small triangle instead), the average point of nearest approach would be the best estimate, with some uncertainty.",
    answer: "The earthquake's epicenter is located at the single point where all three circles intersect."
  },
  relatedTopics: ["earth-h1", "earth-h2", "earth-h4"],
  content: true,
  buildsOn: ["earth-h2", "math-5-2", "math-5-3", "ra-data-types"],
  leadsTo: ["earth-h4"],
  usedIn: ["earth-h4", "earth-h5", "earth-i2", "ra-data-visualization", "ra-correlation-regression", "ra-data-interpretation"]
},


{
  id: "earth-h4",
  sectionId: "EARTH-H",
  order: 4,
  title: "Magnitude, Intensity & Seismic Hazard",
  definition: "Earthquake size is measured in two distinct ways: magnitude is an objective measure of the energy released (a single value for the whole event), while intensity is a subjective measure of the shaking and damage at a specific location. Both are used in modern seismic hazard assessment.",
  keyFacts: [
    "Magnitude is a single number for the whole earthquake; intensity varies with location",
    "Richter Magnitude (ML, 1935): the original scale by Charles Richter; ML = log₁₀(A/A₀) where A is the maximum amplitude on a Wood-Anderson seismograph and A₀ is a reference amplitude; now used mainly for LOCAL and small-to-moderate quakes in California",
    "Moment Magnitude (Mw, 1979): the MODERN standard; based on the seismic moment M₀ (which depends on fault area, average slip, and rock rigidity); Mw = (2/3) × log₁₀(M₀) − 10.7 (in dyne-cm units); no upper limit, valid for all sizes",
    "Body-wave magnitude (mb): from P-waves; useful for distant, deep earthquakes",
    "Surface-wave magnitude (Ms): from surface waves; useful for shallow distant earthquakes",
    "The magnitude scale is LOGARITHMIC: each whole-number step represents a ~32-fold increase in RELEASED ENERGY (and a 10-fold increase in wave amplitude)",
    "Energy comparison: M8 ≈ 32 × M7 ≈ 1,000 × M6 ≈ 32,000 × M5",
    "Intensity (Modified Mercalli Intensity, MMI, I–XII): based on observed effects on people, buildings, and the environment; varies with distance from epicenter and local site conditions",
    "I = Not felt; III = Felt indoors; V = Felt by all, some objects displaced; VII = Damage to poorly built structures; IX = Heavy damage; XII = Total destruction",
    "Magnitude has no upper limit (Mw 9.5 is the largest recorded, Valdivia 1960); Intensity is capped at XII",
    "Seismic moment M₀ = μ × A × D (where μ is rock rigidity, A is rupture area, D is average slip); Mw scales as (2/3) × log₁₀(M₀)",
    "For most earthquakes, the rupture begins at the focus and propagates along the fault at ~2–3 km/s, lasting from seconds to minutes for the largest events"
  ],
  explanationSections: [
    { heading: "Why the moment magnitude replaced the Richter scale", body: "Charles Richter's 1935 scale was calibrated for a specific type of seismograph (the Wood-Anderson) in southern California. It worked well for local, shallow, moderate earthquakes but 'saturated' (maxed out) for very large events — a M8.3 and a M8.9 both read M8.3 on the Richter scale. The Moment Magnitude (Mw), introduced in 1979 by Hiroo Kanamori and Thomas Hanks, is based on the seismic moment — a direct physical measure of the energy released. It is valid for any earthquake size, any focal depth, and any region. Today, Mw is the standard used in research, in the news, and in seismic hazard assessment." },
    { heading: "Intensity: what people actually feel", body: "Intensity is a measure of the shaking and damage at a specific location — a 12-point scale (Modified Mercalli Intensity, MMI) running from 'I — Not felt' to 'XII — Total destruction'. A single earthquake has many intensity values: high near the epicenter, low far away. The pattern of intensities (the 'isoseismal map') reveals the geography of shaking and helps engineers design for the worst expected shaking in a region. Intensity depends not only on distance but on local site conditions: soft, water-saturated soils amplify shaking dramatically (e.g., Mexico City, 1985) compared to nearby bedrock sites." },
    { heading: "Seismic hazard and risk reduction", body: "Seismic hazard is the probability of a certain level of shaking in a region over a given time; seismic risk is the expected damage or loss from that hazard. Reducing risk requires: (1) hazard assessment — identifying active faults, recurrence intervals, and maximum credible earthquakes; (2) building codes designed for expected shaking; (3) earthquake-resistant design (base isolation, shear walls, ductile frames); (4) early warning systems that detect the first P-waves and warn before the damaging S- and surface waves arrive; (5) public education and emergency preparedness. Japan, Chile, and California lead in these areas; Pakistan, Nepal, and many other developing countries are still building their capacity." }
  ],
  examPoints: [
    "Magnitude = single value for whole event; Intensity = varies with location",
    "Modern standard: Moment Magnitude (Mw); valid for all sizes, no upper limit",
    "Richter (ML) saturates for large quakes; now used mainly for local small-to-moderate events in California",
    "Each magnitude step ≈ 32× energy; 2 steps ≈ 1,000× energy",
    "Modified Mercalli Intensity: I (not felt) to XII (total destruction); based on observed effects",
    "Seismic moment M₀ = μ × A × D; Mw = (2/3) log M₀ − 10.7"
  ],
  comparisonTable: {
    headers: ["Scale", "Measures", "Range", "Use"],
    rows: [
      ["Richter (ML)", "Wave amplitude on Wood-Anderson seismograph", "No theoretical max, but saturates ~M7", "Local, small-to-moderate (mostly California)"],
      ["Moment Magnitude (Mw)", "Seismic moment (energy released)", "No upper limit (M9.5 max recorded)", "All events — modern standard"],
      ["Body-wave (mb)", "P-wave amplitude", "All magnitudes", "Distant, deep events"],
      ["Surface-wave (Ms)", "Surface wave amplitude", "All magnitudes", "Shallow distant events"],
      ["Modified Mercalli (MMI)", "Observed effects and damage (I–XII)", "XII = total destruction", "Hazard maps, building codes"]
    ]
  },
  relatedTopics: ["earth-h1", "earth-h2", "earth-h5", "earth-h6"],
  content: true,
  buildsOn: ["earth-h3", "math-3-3"],
  leadsTo: ["earth-h5", "earth-h6"],
  usedIn: ["earth-h6", "earth-i2", "ra-descriptive-statistics", "ra-data-interpretation", "ra-scientific-reporting"]
},


{
  id: "earth-h5",
  sectionId: "EARTH-H",
  order: 5,
  title: "Global Earthquake Distribution & Tsunamis",
  definition: "Earthquakes are not randomly distributed: ~90% occur along the Pacific Ring of Fire, with most of the rest along the Alpine-Himalayan Belt. Understanding this distribution — and the secondary hazard of tsunamis — is essential for seismic hazard assessment worldwide.",
  keyFacts: [
    "Pacific Ring of Fire (~90% of earthquakes): encircles the Pacific Ocean; includes the western Americas, Aleutians, Japan, Philippines, Indonesia, New Zealand",
    "Alpine-Himalayan Belt (~5–10% of earthquakes): from the Mediterranean through Turkey, Iran, the Himalayas to the China–Burma border",
    "Mid-ocean ridges: shallow, generally small earthquakes along divergent boundaries",
    "Intraplate: rare, often large, occur away from plate boundaries; cause is poorly understood (e.g., New Madrid, central USA, 1811–12)",
    "Convergent (subduction): large, often very deep, megathrust earthquakes; produce most great quakes and most tsunamis (e.g., 2011 Tōhoku M9.1)",
    "Transform: shallow, linear distribution along the fault (e.g., San Andreas, North Anatolian)",
    "Divergent: shallow, generally small (mid-ocean ridges)",
    "TSUNAMI: a series of long-wavelength ocean waves produced by sudden vertical displacement of the seafloor",
    "Undersea earthquakes (most common; requires vertical seafloor motion)",
    "Submarine landslides",
    "Volcanic eruptions (e.g., 1883 Krakatoa)",
    "Meteorite impacts (very rare)",
    "In deep ocean: travels 500–800 km/h, wavelength hundreds of km, height <1 m — ships at sea do not notice",
    "In shallow water: slows to 30–50 km/h, wavelength shortens, height grows (shoaling) — up to 30+ m at the coast",
    "Run-up: maximum height reached on land; can reach many tens of metres",
    "Tsunami warning: DART (Deep-ocean Assessment and Reporting of Tsunamis) buoys detect pressure changes; seismic alerts trigger regional warnings; Pacific Tsunami Warning Center and Indian Ocean Tsunami Warning Center",
    "2004 Indian Ocean (M9.1, ~230,000 dead in 14 countries; longest fault rupture in 50 years)",
    "2011 Tōhoku, Japan (M9.1, ~20,000 dead; led to Fukushima nuclear disaster)",
    "1960 Valdivia, Chile (M9.5, the largest recorded earthquake; Pacific-wide tsunami)",
    "1946 Aleutian → Hawaii (led to creation of the Pacific Tsunami Warning Center)",
    "1755 Lisbon (one of the first well-documented tsunamis; ~100,000 dead in Portugal, Spain, Morocco)",
  ],
  explanationSections: [
    { heading: "Why the Ring of Fire is so active", body: "The Pacific Ring of Fire is a near-continuous chain of subduction zones surrounding the Pacific Ocean. The Pacific Plate is being subducted beneath the Americas (forming the Andes, Cascades, and Aleutians), Japan, the Philippines, and Indonesia, while smaller plates (Nazca, Cocos, Juan de Fuca) are also being consumed. Subduction produces megathrust earthquakes — the largest on Earth, including the 1960 Valdivia (M9.5), 2004 Sumatra (M9.1), and 2011 Tōhoku (M9.1) events. The same subduction produces explosive andesitic volcanism, making the Ring of Fire also the most volcanically active region on Earth." },
    { heading: "How tsunamis work", body: "A tsunami is not a single wave but a series of waves with very long wavelengths (often >100 km in deep water). In the open ocean, the wave is only a fraction of a metre high but moves at 500–800 km/h — about as fast as a jet plane. As the wave enters shallow water near the coast, the front slows down due to friction with the seafloor, but the back keeps moving at full speed. The water piles up: the wave slows to 30–50 km/h but the height grows dramatically — sometimes tens of metres. The first sign on shore is often a drawdown of the sea, exposing the seabed, before the first (often smaller) wave arrives. The largest wave may be the third or fourth, not the first — a key reason for staying out of the danger zone for many hours after a warning." },
    { heading: "Tsunami warning systems", body: "Modern tsunami warning systems combine seismic data with deep-ocean pressure sensors. DART buoys sit on the seafloor and detect the small pressure change caused by a passing tsunami wave; they transmit this data to a surface buoy, which relays it by satellite. The first sign of a major subduction earthquake triggers a regional warning within minutes; deep-ocean confirmation follows within an hour. The Pacific Tsunami Warning Center (PTWC, Hawaii) and the Indian Ocean Tsunami Warning Center (IOTWS, established after 2004) provide round-the-clock monitoring and alerts to coastal communities." }
  ],
  examPoints: [
    "~90% of earthquakes occur along the Pacific Ring of Fire; ~5–10% along the Alpine-Himalayan Belt",
    "Tsunamis are caused by sudden vertical displacement of the seafloor (subduction earthquakes, landslides, eruptions)",
    "Tsunami speed in deep ocean: 500–800 km/h; height <1 m; in shallow water: slows to 30–50 km/h, height grows (shoaling)",
    "Run-up: maximum height the water reaches on land",
    "DART buoys detect deep-ocean pressure changes; PTWC and IOTWS issue warnings",
    "2004 Indian Ocean tsunami (M9.1) killed ~230,000; 2011 Tōhoku (M9.1) caused Fukushima disaster"
  ],
  comparisonTable: {
    headers: ["Region", "% of quakes", "Type", "Examples"],
    rows: [
      ["Pacific Ring of Fire", "~90%", "Subduction (megathrust) and transform", "2011 Tōhoku (M9.1), 1960 Valdivia (M9.5)"],
      ["Alpine-Himalayan Belt", "~5–10%", "Continental collision", "2005 Kashmir (M7.6), 1999 Izmit (M7.6)"],
      ["Mid-ocean ridges", "Small", "Divergent (shallow)", "Iceland ridge quakes"],
      ["Intraplate", "Rare, often large", "Unknown; possibly reactivated old faults", "New Madrid 1811–12 (M7+), Bhuj 2001 (M7.7)"]
    ]
  },
  relatedTopics: ["earth-h1", "earth-h2", "earth-h4", "earth-h6", "earth-i1"],
  content: true,
  buildsOn: ["earth-h1", "earth-d3", "earth-h4"],
  leadsTo: ["earth-h6", "earth-i3"],
  usedIn: ["earth-i2", "earth-i3"]
},


{
  id: "earth-h6",
  sectionId: "EARTH-H",
  order: 6,
  title: "Earthquake Hazards, Risk & Mitigation",
  definition: "Earthquakes cause damage through multiple mechanisms: ground shaking, surface rupture, liquefaction, landslides, tsunamis, and fires. Reducing earthquake risk requires hazard assessment, engineering design, early warning, public education, and emergency preparedness.",
  keyFacts: [
    "Ground shaking: the primary cause of damage and casualties in most earthquakes; intensity depends on magnitude, distance, and local site conditions",
    "Surface rupture: displacement along the fault that reaches the surface; can offset roads, fences, pipelines, and buildings straddling the fault",
    "Liquefaction: water-saturated, unconsolidated soils lose strength and behave as a liquid during shaking; buildings sink, buried structures float up",
    "Landslides: triggered in steep, unstable terrain by earthquake shaking; can be more deadly than the quake itself in some cases",
    "Tsunamis: see earth-h5; can affect coasts thousands of km from the source",
    "Fires: broken gas lines, electrical short circuits, and damaged firefighting infrastructure; the 1906 San Francisco earthquake caused most of its damage by fire",
    "Building collapse: the direct cause of most casualties in urban earthquakes (e.g., 2005 Kashmir, 2010 Haiti)",
    "Soft, water-saturated soils amplify shaking (Mexico City 1985, Marina District SF 1989)",
    "Bedrock sites experience less amplification",
    "Topographic effects: ridges and basin edges can focus and amplify seismic waves",
    "Building codes: minimum standards for new construction; updated as understanding improves",
    "Base isolation: the building sits on flexible pads (rubber or lead-rubber bearings) that decouple it from ground motion",
    "Shear walls and braced frames: resist horizontal forces",
    "Ductile detailing: allow beams to yield without collapsing, preserving life even if structural damage occurs",
    "Earthquake early warning: detects the first (non-damaging) P-waves and sends an alert before the S-waves and surface waves arrive; can give seconds to tens of seconds of warning — enough for trains to slow, gas valves to close, and people to take cover",
    "Risk reduction: hazard mapping, building codes, early warning, public education, drills, emergency kits, insurance, retrofitting older buildings"
  ],
  explanationSections: [
    { heading: "Liquefaction — the silent hazard", body: "Liquefaction is one of the most dramatic and least appreciated earthquake hazards. Water-saturated, unconsolidated sandy soils can lose their strength almost completely during strong shaking: the shaking rearranges the sand grains, transfers the load from grain-to-grain contact to the pore water, and the soil briefly behaves as a liquid. Buildings can sink, tilt, or float; buried tanks, manholes, and pipelines rise to the surface. The 1989 Loma Prieta earthquake in California caused dramatic liquefaction damage in San Francisco's Marina District (built on sandy fill) and near the Cypress Freeway in Oakland. The 2010–2011 Canterbury (New Zealand) sequence produced spectacular liquefaction in Christchurch, with 'sand boils' covering entire suburbs and buildings rendered uninhabitable." },
    { heading: "Why building codes matter most", body: "Most earthquake casualties in modern urban areas are caused by the collapse of buildings that did not meet current codes. The 2010 Haiti earthquake (M7.0) killed an estimated 200,000–300,000 people — primarily because Haiti's building stock consisted of unreinforced masonry and concrete that had no ductility or shear resistance. By contrast, the 1989 Loma Prieta earthquake (M6.9) in California killed only 63 people, because California had enforced strict building codes for decades. The 1995 Kobe earthquake (M6.9) in Japan killed 6,434 — a tragedy, but far less than Haiti for a similar magnitude. Code enforcement saves lives." },
    { heading: "Earthquake early warning", body: "Earthquake early warning (EEW) systems detect the first P-waves (which travel fast but are not very damaging) and send an alert before the S-waves and surface waves (which are slow but damaging) arrive. Because P-waves outrun S-waves by about 1.7×, the warning time equals (distance to epicenter) × (1/VP − 1/VS). For a quake 100 km away, this gives about 15–20 seconds; for a quake 30 km away, only 5–8 seconds. That is not much, but it is enough for trains to slow, surgeons to lift scalpels, gas valves to close, and people to take cover. Japan's EEW system has been operational since 2007; Mexico's SASMEX has been operating since 1991. ShakeAlert in the US West Coast is in public rollout. Pakistan is in the early stages of EEW development for high-risk areas." }
  ],
  examPoints: [
    "Primary cause of damage in most earthquakes: GROUND SHAKING",
    "Liquefaction: water-saturated sandy soils lose strength during shaking; can sink buildings, raise buried structures",
    "Site effects: soft soils amplify shaking; bedrock experiences less amplification",
    "Earthquake-resistant design: base isolation, shear walls, ductile detailing",
    "Earthquake early warning: detects P-waves, alerts before damaging S-waves and surface waves arrive",
    "Most earthquake casualties in urban areas come from building collapse — codes save lives"
  ],
  comparisonTable: {
    headers: ["Hazard", "Mechanism", "Mitigation"],
    rows: [
      ["Ground shaking", "Seismic waves from fault slip", "Building codes, earthquake-resistant design"],
      ["Surface rupture", "Displacement of the ground along the fault", "Avoid building across active faults; setback zones"],
      ["Liquefaction", "Saturated soils lose strength during shaking", "Drainage, deep foundations, ground improvement"],
      ["Landslides", "Shaking destabilises slopes", "Slope stabilisation, avoiding unstable terrain"],
      ["Tsunami", "Vertical seafloor displacement", "Sea walls, evacuation plans, early warning, DART buoys"],
      ["Fire", "Broken gas lines, electrical shorts", "Automatic gas shutoff valves, fire-resistant design"]
    ]
  },
  relatedTopics: ["earth-h1", "earth-h4", "earth-h5", "earth-i1"],
  content: true,
  buildsOn: ["earth-h4", "earth-h5"],
  leadsTo: ["earth-i2"],
  usedIn: ["earth-i2", "earth-i3", "env-climate-change-response"]
},


// ════════════════════════════════════════════════════════════════════
// SECTION EARTH-I: Pakistan's Geology & Seismicity
// ════════════════════════════════════════════════════════════════════


{
  id: "earth-i1",
  sectionId: "EARTH-I",
  order: 1,
  priority: "high", // 🟠 syllabus but exam-critical for FPSC
  title: "Tectonic Setting of Pakistan & Major Geological Features",
  definition: "Pakistan sits at the active collision zone between the Indian and Eurasian plates, giving the country some of the highest mountains, deepest valleys, and most complex geology on Earth. From the Hindu Kush and Karakoram in the north to the Makran coast in the south, the geology records the ongoing continent–continent collision and related subduction processes.",
  keyFacts: [
    "Tectonic setting: Pakistan is located at the active collision zone between the Indian Plate and the Eurasian Plate",
    "Collision began ~50 Ma (million years ago) and continues today at ~3–5 cm/year",
    "This ongoing collision has produced the Himalayas, Karakoram, Hindu Kush, Pamir, and Hindu Raj — the highest concentration of high peaks in the world (including K2, the second-highest on Earth)",
    "Karakoram: hosts K2 (8,611 m), the world's second-highest peak, plus major glaciers (Siachen, Biafo, Baltoro)",
    "Western Himalayas (Pakistan): Nanga Parbat (8,126 m) — one of the fastest-rising mountains on Earth",
    "Hindu Kush: high mountains spanning Afghanistan–Pakistan; extension of the Pamir",
    "Indus Basin: vast alluvial plain; one of the deepest alluvial basins in the world (>5 km of sediment in places)",
    "Salt Range: exposes some of the oldest rocks in South Asia (Precambrian onward); home of the Khewra Salt Mine (world's second-largest)",
    "Potwar Plateau: elevated, folded and faulted terrain in northern Punjab",
    "Makran coast: arid Arabian Sea coastline and site of the active Makran Subduction Zone (Arabian Plate beneath Eurasian Plate)",
    "Major faults: Main Karakoram Thrust (MKT), Main Boundary Thrust (MBT), Main Central Thrust (MCT), Chaman Fault, Ornach-Nal Fault, Makran Subduction Zone",
    "Pakistan has a complete geological cross-section from Precambrian basement to Quaternary alluvium"
  ],
  explanationSections: [
    { heading: "The Indian–Eurasian collision and Pakistan's mountains", body: "About 50 million years ago, the Indian Plate — moving northward at ~20 cm/year — collided with the Eurasian Plate. The Tethys Ocean between them closed, and the sediments and crustal fragments of its floor were thrust up into the world's highest mountain belt. In Pakistan, this collision has produced three great mountain ranges: the Karakoram (a Trans-Himalayan range), the western Himalayas (anchored by Nanga Parbat), and the Hindu Kush (a continuation of the Pamir orogeny). Nanga Parbat is rising at ~4–7 mm/year (geodetic) with recent exhumation pulses up to 9–13 mm/year — one of the fastest uplift rates on Earth — driven by active thrust faulting. K2 in the Karakoram is the world's second-highest peak; only Mount Everest is taller." },
    { heading: "The Indus Basin and Salt Range", body: "The Indus River and its tributaries (Jhelum, Chenab, Ravi, Beas, Sutlej) drain most of the mountain belt and have deposited enormous thicknesses of sediment in the foreland basin — the Indus Basin. Drill holes have encountered more than 5 km of alluvial fill in places, making this one of the deepest sedimentary basins in the world. The Salt Range, on the southern edge of the Potwar Plateau, is geologically remarkable: it exposes some of the oldest rocks in South Asia, including the Precambrian Salt Range Formation (a thick sequence of rock salt), the Cambrian Khewra Sandstone, and the Eocene Sakesar Limestone. The Khewra Salt Mine, operating since antiquity, is the second-largest salt mine in the world." },
    { heading: "The Makran — a different tectonic setting", body: "Southwestern Pakistan's Makran coast has a very different tectonic setting from the rest of the country. Here, the Arabian Plate is subducting northward beneath the Eurasian Plate at the Makran Subduction Zone, producing a wide accretionary wedge (the Makran) and a chain of volcanic arc volcanoes inland (e.g., Bazman, Taftan in Iran). The Makran has produced major earthquakes and tsunamis in the past, including the 1945 Makran earthquake (M8.1) and tsunami. The 2013 Awaran earthquake (M7.7) occurred inland on the Chaman Fault system, not the subduction zone, but the region remains one of the most seismically hazardous in Pakistan." }
  ],
  examPoints: [
    "Pakistan sits at the active Indian–Eurasian collision zone; convergence ~3–5 cm/year",
    "Highest peak in Pakistan: K2 (8,611 m) in the Karakoram; second-highest on Earth",
    "Nanga Parbat (8,126 m) is one of the fastest-rising mountains (~4–13 mm/year uplift/exhumation in recent studies)",
    "Salt Range exposes some of the oldest rocks in South Asia; Khewra Salt Mine is the world's second-largest",
    "Indus Basin is a deep alluvial basin with >5 km of sediment fill in places",
    "Makran coast is the site of an active subduction zone (Arabian Plate beneath Eurasian Plate)"
  ],
  comparisonTable: {
    headers: ["Range / Feature", "Location", "Notable peak / feature", "Origin"],
    rows: [
      ["Karakoram", "Northern Pakistan (Gilgit-Baltistan)", "K2 (8,611 m) — world's 2nd highest", "Trans-Himalayan; active uplift"],
      ["Western Himalayas", "NE Pakistan (Azad Kashmir, northern Punjab)", "Nanga Parbat (8,126 m)", "Indian–Eurasian collision; one of fastest-rising mountains"],
      ["Hindu Kush", "NW Pakistan, Afghanistan", "Tirich Mir (7,708 m)", "Pamir extension; complex tectonics"],
      ["Hindu Raj", "Northern Pakistan", "Batura Sar (7,795 m)", "Pamir-related"],
      ["Salt Range", "Northern Punjab", "Khewra Salt Mine (world's 2nd largest salt mine)", "Precambrian–Eocene sequence; thrust over younger rocks"],
      ["Makran coast", "Balochistan (Arabian Sea)", "Active subduction zone, mud volcanoes", "Arabian–Eurasian subduction"],
      ["Indus Basin", "Eastern Pakistan", ">5 km alluvial fill", "Foreland basin to the Himalaya-Karakoram"]
    ]
  },
  relatedTopics: ["earth-i2", "earth-i3", "earth-i4", "earth-d1", "earth-d2"],
  // Pakistan Exam Focus summary (high-yield for FPSC)
  pakistanExamFocus: [
    "Tectonic setting: Indian Plate colliding with Eurasian Plate (~50 Ma ongoing; ~3–5 cm/yr) → Himalayas, Karakoram, Hindu Kush",
    "Highest peak in Pakistan: K2 (8,611 m); Nanga Parbat (8,126 m) is among the fastest-rising mountains worldwide",
    "Most seismically active: Northern Areas (Gilgit-Baltistan, Chitral) + Kashmir + Balochistan (Makran + Chaman)",
    "Deadliest historical: 1935 Quetta M7.7 (~30–60k deaths); 2005 Kashmir M7.6 (~87k+ deaths)",
    "Key active structures: Chaman Fault (left-lateral strike-slip), Main Boundary Thrust (MBT), Main Karakoram Thrust (MKT), Makran Subduction Zone",
    "Tsunami risk: Makran coast highest; 1945 M8.1 generated damaging tsunami; Karachi also exposed",
    "Mineral/energy highlights: Thar coal (world-class lignite), Sui gas, Khewra salt (2nd largest mine), Reko Diq Cu-Au, Swat emeralds",
    "Indus Basin: deep alluvial aquifer; over-pumping → declining water tables + coastal saltwater intrusion"
  ],
  content: true,
  buildsOn: ["earth-d2", "earth-d3", "earth-f4", "earth-a1"],
  leadsTo: ["earth-i2", "earth-i3", "earth-i4"],
  usedIn: ["earth-i2", "earth-i3", "env-pakistan-environmental-context"]
},


{
  id: "earth-i2",
  sectionId: "EARTH-I",
  order: 2,
  title: "Seismic Zones of Pakistan & Major Earthquakes",
  definition: "Pakistan's tectonic setting makes it one of the most seismically active countries in the world. The country is divided into several seismic zones, and major earthquakes in the 20th and 21st centuries have caused hundreds of thousands of deaths.",
  keyFacts: [
    "Highest seismicity: Northern Areas (Gilgit-Baltistan, Chitral, upper KP) — Hindu Kush, Karakoram, western Himalayan front",
    "High seismicity: Kashmir (Azad Jammu & Kashmir) — 2005 Muzaffarabad earthquake zone; Balochistan (Makran, Quetta, Chaman Fault system)",
    "Moderate–high: KP and Punjab foothills (Islamabad, Rawalpindi, Peshawar, Abbottabad) near active thrust faults",
    "Lower: Indus Plains (not zero — active basement faults exist)",
    "Karachi: moderate risk — close to the Makran Subduction Zone and built on soft, amplifying sediments",
    "1935 Quetta (M7.7): ~30,000–60,000 deaths; destroyed most of Quetta; one of the deadliest in South Asian history",
    "1945 Makran (M8.1): ~4,000 deaths; generated a tsunami that affected the Makran coast and Karachi",
    "2005 Kashmir / Muzaffarabad (M7.6): ~87,000+ deaths; 3.5 million homeless; led to NDMA and building-code reforms",
    "2013 Awaran (M7.7): ~825 deaths; occurred on the Chaman Fault system",
    "Main Karakoram Thrust (MKT): active thrust separating Karakoram from Himalaya",
    "Main Boundary Thrust (MBT): separates the Siwaliks from older rocks; important Himalayan structure",
    "Chaman Fault: long left-lateral strike-slip fault in Balochistan accommodating India–Eurasia convergence",
    "Makran Subduction Zone: offshore subduction of Arabian Plate beneath Eurasian Plate; capable of M8+ megathrust events and tsunamis"
  ],
  explanationSections: [
    { heading: "Why Pakistan is so seismically active", body: "Pakistan's high seismicity is a direct consequence of its position at the active Indian–Eurasian collision. The Indian Plate continues to push northward at ~3–5 cm/year, and the resulting strain is released in earthquakes along several major structures. In the north, the Karakoram, Hindu Kush, and western Himalayan fronts produce shallow and intermediate-depth earthquakes from thrust faulting. In the Hindu Kush, intermediate-depth earthquakes (70–300 km) record the subduction/underthrusting of one slab beneath another — a special feature of this complex region. In Balochistan, the Makran subduction zone produces large megathrust earthquakes (like 1945 M8.1), and the Chaman Fault system produces shallow strike-slip earthquakes (like 2013 Awaran M7.7)." },
    { heading: "Lessons from the 2005 Kashmir earthquake", body: "The 2005 Kashmir (Muzaffarabad) earthquake (Mw 7.6) is the most important recent event for Pakistan. It killed over 87,000 people, injured more than 100,000, and left 3.5 million homeless. The earthquake occurred on the Muzaffarabad fault (part of the active Himalayan thrust system) at a depth of ~26 km. The main reason for the high death toll was the vulnerability of building stock in the affected region: most buildings were unreinforced masonry or non-ductile concrete, which collapsed catastrophically under the shaking. The disaster led to major reforms in building codes, the establishment of the National Disaster Management Authority (NDMA), and a renewed focus on seismic risk reduction in Pakistan." },
    { heading: "Karachi's quiet but real risk", body: "Karachi — Pakistan's largest city (~20 million people) and economic hub — is often perceived as having low seismic risk, but this perception is misleading. The city lies within ~150 km of the Makran Subduction Zone, which produced the M8.1 1945 earthquake and tsunami. The city itself sits on soft alluvial and coastal sediments that can amplify shaking. The Rann of Kutch, just to the south, has produced significant intraplate earthquakes (e.g., 2001 Bhuj M7.7, ~400 km away, caused damage in Karachi). A future M8+ event on the Makran Subduction Zone could cause severe damage in Karachi, with potentially hundreds of thousands of casualties." }
  ],
  examPoints: [
    "1935 Quetta (M7.7) was one of the deadliest earthquakes in South Asian history (~30,000–60,000 dead)",
    "2005 Kashmir (M7.6) killed ~87,000; led to NDMA creation and building code reforms",
    "The 1945 Makran earthquake (M8.1) produced a tsunami that affected the Makran coast and Karachi",
    "Karakoram, Hindu Kush, and Western Himalayan fronts are the most seismically active regions of Pakistan",
    "Karachi is at moderate risk: close to the Makran Subduction Zone and on soft, amplifying sediments",
    "Pakistan's convergence rate with Eurasia: ~3–5 cm/year"
  ],
  comparisonTable: {
    headers: ["Year", "Location", "Magnitude", "Approx. deaths", "Notes"],
    rows: [
      ["1935", "Quetta (Balochistan)", "M7.7", "~30,000–60,000", "Most of Quetta destroyed; one of deadliest in S. Asia"],
      ["1945", "Makran coast (Balochistan)", "M8.1", "~4,000", "Triggered a tsunami; affected Makran coast and Karachi"],
      ["1974", "Hunza (GB)", "M6.2", "~5,300", "Landslide dammed the Hunza River"],
      ["2005", "Kashmir (Muzaffarabad)", "M7.6", "~87,000+", "3.5 million homeless; led to NDMA"],
      ["2008", "Ziarat (Balochistan)", "M6.4", "~166", "Moderate damage in Balochistan"],
      ["2013", "Awaran (Balochistan)", "M7.7", "~825", "Chaman Fault system; widespread damage"]
    ]
  },
  relatedTopics: ["earth-i1", "earth-i3", "earth-h1", "earth-h5"],
  content: true,
  buildsOn: ["earth-i1", "earth-h4", "earth-h5"],
  leadsTo: ["earth-i3"],
  usedIn: ["earth-i3", "env-pakistan-environmental-context", "ra-data-interpretation", "ra-scientific-reporting"]
},


{
  id: "earth-i3",
  sectionId: "EARTH-I",
  order: 3,
  title: "Active Faults of Pakistan & Tsunami Risk",
  definition: "Pakistan's active faults and offshore subduction zone are the source of significant seismic and tsunami hazard. The Main Karakoram Thrust, Main Boundary Thrust, Main Central Thrust, Chaman Fault, Ornach-Nal Fault, and Makran Subduction Zone together accommodate the convergence between the Indian, Arabian, and Eurasian plates.",
  keyFacts: [
    "MAIN BOUNDARY THRUST (MBT): a major thrust fault separating the Siwalik Hills (younger Tertiary rocks) from older sequences to the north; active today; responsible for many Himalayan earthquakes",
    "MAIN CENTRAL THRUST (MCT): thrusts high-grade metamorphic rocks (gneiss, schist) over lower-grade rocks; the boundary between the Higher and Lesser Himalayas; active in places",
    "MAIN KARAKORAM THRUST (MKT): a major fault separating the Karakoram from the western Himalayas; active; responsible for much of the seismic activity in northern Pakistan",
    "CHAMAN FAULT: a long, left-lateral strike-slip fault in Balochistan; runs roughly N–S for >800 km; accommodates the relative motion between the Indian and Eurasian plates; responsible for many Balochistan earthquakes (e.g., 1893, 1935, 2008, 2013)",
    "ORNACH-NAL FAULT: another major strike-slip fault in Balochistan, parallel to the Chaman; also active",
    "MAKRAN SUBDUCTION ZONE: offshore subduction of the Arabian Plate beneath the Eurasian Plate; length ~700 km; capable of producing M8+ megathrust earthquakes and tsunamis; one of the most significant but least-monitored subduction zones in the world",
    "The Makran coast (Gwadar, Pasni, Ormara) is the most tsunami-vulnerable area",
    "1945 Makran tsunami: triggered by M8.1 earthquake; killed several thousand along the coast; reached as far as Karachi",
    "2004 Indian Ocean tsunami: had only minor impact on Pakistan's coast, but raised awareness",
    "Many fishing villages and the port of Gwadar are in the inundation zone",
    "Pakistan currently has limited tsunami warning infrastructure; the Pakistan Meteorological Department (PMD) operates a small network",
    "Active fault mapping: the Geological Survey of Pakistan (GSP) and various international collaborations have mapped many active faults; the data is incomplete for several regions due to difficult terrain and limited resources",
    "Major active faults of Pakistan form a network: thrust faults dominate in the north, strike-slip in Balochistan, and subduction in the Makran"
  ],
  explanationSections: [
    { heading: "The Chaman Fault — a giant strike-slip", body: "The Chaman Fault is one of the longest and most active strike-slip faults in South Asia, running roughly north–south through Balochistan for over 800 km. It is a left-lateral fault, accommodating part of the relative motion between the Indian Plate (to the east) and the Eurasian/Afghan blocks (to the west). The 1893 and 1935 Quetta earthquakes are believed to have occurred on segments of the Chaman system, as were the 2008 Ziarat and 2013 Awaran events. The 1935 event (M7.7) destroyed most of Quetta and killed ~30,000–60,000 people — leading the British colonial government to rebuild the city further from the fault, in its present location." },
    { heading: "The Makran Subduction Zone — a sleeping giant", body: "The Makran Subduction Zone, offshore of Pakistan's southwestern coast, is one of the largest but least-monitored subduction zones in the world. Here, the Arabian Plate is subducting northward beneath the Eurasian Plate at ~2 cm/year, building a wide accretionary wedge (the onshore Makran ranges, with their famous mud volcanoes) and producing a chain of volcanic arc volcanoes inland (Bazman, Taftan in Iran). The 1945 earthquake (M8.1) and tsunami demonstrated that the Makran can produce major megathrust events. Because the subduction rate is slow and recurrence intervals may be long (centuries), the hazard is underappreciated. A future M8+ event could devastate the Makran coast and produce a damaging tsunami in Karachi." },
    { heading: "Tsunami preparedness in Pakistan", body: "Pakistan's tsunami preparedness has improved since the 2004 Indian Ocean disaster, but it remains limited compared to countries like Japan, Chile, or Indonesia. The Pakistan Meteorological Department (PMD) operates a small network of tide gauges and seismic stations; the National Tsunami Warning Centre was established in Karachi. Evacuation plans exist for the Makran coast but are not well-practised. International collaboration with the IOC Indian Ocean Tsunami Warning System and PTWC provides some early-warning capability. The main gaps are: limited offshore DART buoys, limited public education, and limited building code enforcement in vulnerable coastal communities." }
  ],
  examPoints: [
    "MBT (Main Boundary Thrust) separates the Siwaliks from older rocks; active today",
    "Chaman Fault is a left-lateral strike-slip fault running N–S through Balochistan for >800 km",
    "1935 Quetta earthquake likely occurred on a segment of the Chaman Fault system",
    "Makran Subduction Zone: Arabian Plate beneath Eurasian; capable of M8+ megathrust earthquakes",
    "1945 Makran tsunami (from M8.1 quake) reached Karachi and killed several thousand",
    "The Main Karakoram Thrust (MKT) is the northernmost major active thrust in Pakistan"
  ],
  relatedTopics: ["earth-i1", "earth-i2", "earth-h5", "earth-f3"],
  content: true,
  buildsOn: ["earth-i1", "earth-i2", "earth-f3", "earth-h5"],
  leadsTo: [],
  usedIn: ["env-pakistan-environmental-context"]
},


{
  id: "earth-i4",
  sectionId: "EARTH-I",
  order: 4,
  title: "Mineral & Energy Resources of Pakistan",
  definition: "Pakistan is well endowed with mineral and energy resources, including coal, natural gas, oil, copper, gold, salt, gypsum, and gemstones. These resources have been formed by the country's diverse geological history and tectonic setting, and they form a major component of the national economy.",
  keyFacts: [
    "COAL: Pakistan has substantial coal reserves, especially in the Thar Desert (Sindh) — one of the largest coalfields in the world; Thar Coalfield: estimated 175 billion tonnes of lignite coal; among the world's top 10 largest coalfields; Other coal: Salt Range, Quetta, Harnai, Sor Range, Mushkaf, Kingri (Balochistan), Cherat (KP), Dandot (Punjab); Mostly lignite and sub-bituminous; some bituminous in Balochistan",
    "NATURAL GAS: Pakistan's largest indigenous energy resource; major fields in Balochistan and Sindh; Sui Gas Field (Dera Bugti, Balochistan): Pakistan's largest gas field, discovered 1952; still a major producer; Other fields: Kandkot, Mazarani, Sari, Hundi, Zarghun, Pir Koh, Loti, Rehman, Halipota; Gas is found in Eocene and Cretaceous-Paleocene limestones and sandstones",
    "OIL: smaller reserves than gas; major fields in the Potwar region (Punjab), Sindh, and Balochistan; Fields: Dhurnal, Balkassar, Meyal (Potwar), Khaskeli, Mazarani (Lower Indus), Turk, Bhangali; Mostly from Eocene and Paleocene carbonates (e.g., Sakesar Limestone)",
    "COPPER & GOLD: significant porphyry copper-gold deposits in the Chagai Hills (Balochistan); Reko Diq: one of the world's largest undeveloped copper-gold deposits; ~5.9 billion tonnes of ore; Saindak: copper-gold deposit; has been mined in partnership with China (Metallurgical Corporation of China, MCC); Recoded in collaboration with Barrick Gold and Antofagasta; the Reko Diq project has been in legal dispute for years",
    "SALT: Pakistan has enormous salt resources; Khewra Salt Mine (Salt Range): the second-largest salt mine in the world; produces ~350,000 tonnes/year; also produces pink Himalayan salt; Other salt: Kalabagh, Warcha, Jatta, Bahadur Khel (Khyber Pakhtunkhwa), Karak, Nullah; The Salt Range is a salt-diapir province — ancient salt layers have flowed up under pressure to form the present range",
    "GEMSTONES: Northern Pakistan (Gilgit-Baltistan, KP) is famous for gemstones; Emerald: Swat Valley (Mingora, Gujar Kili, Barang) — among the world's finest; Ruby: Hunza, Nangimali, Azad Kashmir; Topaz, aquamarine, tourmaline: Gilgit-Baltistan, Chitral; Nephrite jade: dolomite-hosted in northern Pakistan; deposits in the Indus suture zone",
    "GYPSUM: large deposits in the Salt Range, D.G. Khan, Kohat, and parts of Balochistan",
    "MARBLE & LIMESTONE: extensive deposits in the Salt Range, Khyber Pakhtunkhwa, Balochistan, and parts of Punjab; major export",
    "OTHER MINERALS: chromite (Muslim Bagh, Balochistan — among the world's largest deposits), magnesite, fireclay, china clay, silica sand, bauxite, phosphate"
  ],
  explanationSections: [
    { heading: "Why Pakistan has so many resources", body: "Pakistan's diverse mineral endowment is a direct consequence of its geological history. The Tethys Ocean, which closed during the India–Eurasian collision, deposited thick sequences of sedimentary rocks (limestones, sandstones, shales) that host oil, gas, coal, and gypsum. The subsequent tectonic compression produced the Hindu Kush–Karakoram–Himalayan orogen, with its associated magmatism, metamorphism, and hydrothermal systems — the source of the porphyry copper-gold deposits of the Chagai Hills, the emeralds of the Swat Valley, and the gemstones of Gilgit-Baltistan. The Makran subduction zone has its own mineral potential (mud volcanoes, brine pools). The Salt Range and Potwar Plateau are rich in evaporites (salt, gypsum) and hydrocarbons." },
    { heading: "The Thar Coalfield — Pakistan's energy future", body: "The Thar Coalfield in the Thar Desert of Sindh is one of the largest coal deposits in the world, with estimated reserves of 175 billion tonnes of lignite. It is shallow (overburden of 100–250 m), amenable to open-pit mining, and lies close to the demand centres of Sindh and southern Punjab. Development has been slow but is accelerating: several mine-mouth power plants are operating or under construction, using coal-gasification or circulating fluidised bed technology. The Thar coal could provide a major part of Pakistan's energy mix for centuries, reducing dependence on imported oil and LNG." },
    { heading: "Reko Diq and Saindak — the copper-gold belt", body: "The Chagai Hills in Balochistan lie in a complex tectonic zone related to the Makran subduction and the collision of the Arabian, Iranian, and Eurasian plates. The region hosts several large porphyry copper-gold deposits, formed by hydrothermal fluids associated with mid-Tertiary intrusions. Reko Diq is one of the world's largest undeveloped copper-gold deposits (~5.9 billion tonnes of ore at 0.4–0.5% Cu and 0.2–0.3 g/t Au), with a mine life of >50 years. Saindak has been producing since 2002 in partnership with China. The development of these resources is a major national priority but has been delayed by legal disputes (especially Reko Diq) and security challenges." }
  ],
  examPoints: [
    "Thar Coalfield (Sindh): ~175 billion tonnes of lignite; one of the world's largest coal deposits",
    "Sui Gas Field (Balochistan): Pakistan's largest natural gas field, discovered 1952",
    "Khewra Salt Mine: the world's second-largest salt mine; in the Salt Range; source of pink Himalayan salt",
    "Reko Diq (Balochistan): one of the world's largest undeveloped copper-gold deposits",
    "Swat Valley: famous for emeralds among the world's finest",
    "Muslim Bagh (Balochistan): one of the world's largest chromite deposits"
  ],
  comparisonTable: {
    headers: ["Resource", "Major location", "Notes"],
    rows: [
      ["Coal (lignite)", "Thar (Sindh)", "~175 billion tonnes; one of world's largest coalfields"],
      ["Natural gas", "Sui (Balochistan)", "Pakistan's largest gas field, discovered 1952"],
      ["Oil", "Potwar (Punjab), Sindh", "Smaller reserves; mostly Eocene/Paleocene carbonates"],
      ["Copper-gold (porphyry)", "Reko Diq, Saindak (Chagai, Balochistan)", "Major undeveloped resources"],
      ["Salt", "Khewra (Salt Range, Punjab)", "World's 2nd largest salt mine; pink Himalayan salt"],
      ["Emerald", "Swat Valley (KP)", "Among the world's finest emeralds"],
      ["Ruby", "Hunza, Azad Kashmir", "High-quality gem material"],
      ["Chromite", "Muslim Bagh (Balochistan)", "Among the world's largest chromite deposits"],
      ["Gypsum", "Salt Range, D.G. Khan, Kohat", "Large deposits; major industrial use"],
      ["Marble & limestone", "Salt Range, KP, Balochistan", "Major export"]
    ]
  },
  relatedTopics: ["earth-i1", "earth-i2", "earth-i3", "earth-b2"],
  content: true,
  buildsOn: ["earth-b1", "earth-b3", "earth-i1"],
  leadsTo: [],
  usedIn: ["env-natural-resources", "env-energy-sources", "env-pakistan-environmental-context"]
},




// ════════════════════════════════════════════════════════════════════
// SECTION EARTH-J: Surface Water & Groundwater (Geological Context)
// ════════════════════════════════════════════════════════════════════


{
  id: "earth-j1",
  sectionId: "EARTH-J",
  order: 1,
  title: "The Hydrologic Cycle (Geological Recap)",
  definition: "The hydrologic cycle (water cycle) is the continuous circulation of water through Earth's atmosphere, surface, and subsurface. Driven by solar energy and gravity, it links all the planet's water reservoirs and shapes landscapes through erosion and deposition.",
  keyFacts: [
    "The hydrologic cycle is driven by solar energy (evaporation) and gravity (precipitation, runoff, infiltration)",
    "Oceans: ~1,338 million km³ (97% of all water on Earth)",
    "Ice caps and glaciers: ~24 million km³ (1.7%)",
    "Groundwater: ~23 million km³ (1.7%)",
    "Lakes and rivers: <0.01%",
    "Atmosphere: <0.001% (but turns over rapidly — average residence time ~9 days)",
    "Evaporation: liquid water → water vapour (from oceans, lakes, rivers, soil)",
    "Transpiration: water released by plants into the atmosphere",
    "Evapotranspiration: combined evaporation + transpiration",
    "Condensation: water vapour → liquid droplets (in clouds, when air cools to dew point)",
    "Precipitation: water falls as rain, snow, sleet, or hail",
    "Runoff: water flows over the land surface into streams, lakes, oceans",
    "Infiltration: water soaks into the ground and recharges groundwater",
    "Sublimation: solid (ice) → vapour directly (no liquid phase)",
    "Deposition: vapour → solid (e.g., frost)",
    "Atmosphere: ~9 days",
    "Rivers: ~2 weeks",
    "Lakes: ~10 years",
    "Groundwater (shallow): ~100s of years",
    "Groundwater (deep): up to 10,000+ years",
    "Oceans: ~3,200 years",
    "Ice caps: up to 100,000+ years",
    "The water cycle is CLOSED at the global scale: the total amount of water on Earth is essentially constant over human timescales (water is not created or destroyed, only moved between reservoirs)"
  ],
  explanationSections: [
    { heading: "Why the cycle matters for geology", body: "The hydrologic cycle is the engine of most surface geological processes. Water erodes mountains, transports sediment, carves valleys, dissolves limestone to form caves, and recharges the aquifers that supply drinking water. The cycle also links the surface and the deep Earth: water that infiltrates the ground recharges aquifers; water that reaches deep faults can facilitate earthquakes (pore pressure reduces fault strength); and water returned to the oceans via rivers carries dissolved ions that eventually form sedimentary rocks. Understanding the cycle is therefore central to understanding landscape evolution, groundwater resources, and even seismicity." },
    { heading: "Residence time — why groundwater is precious", body: "Residence time is the average time a water molecule spends in a given reservoir. Atmospheric water turns over in days; river water in weeks; lake water in years; but groundwater can remain underground for centuries to millennia. Some deep groundwater is 'fossil water' from past pluvial periods — for example, the deep aquifers of the Sahara and Arabian Peninsula contain water left over from wetter climates thousands of years ago. This explains why groundwater is so precious: when we extract it, we are mining a resource that took thousands of years to accumulate, and we cannot replace it on human timescales. Over-extraction leads to falling water tables, land subsidence, and saltwater intrusion in coastal areas." }
  ],
  examPoints: [
    "~97% of Earth's water is in the oceans; only ~3% is fresh water",
    "The cycle is driven by solar energy and gravity",
    "Atmospheric water has the shortest residence time (~9 days); deep groundwater the longest (thousands of years)",
    "Evaporation + transpiration = evapotranspiration (the combined flux of water from surface + plants to atmosphere)",
    "The water cycle is a CLOSED system at the global scale — water is not created or destroyed",
    "Infiltration recharges groundwater; runoff flows to streams and oceans"
  ],
  comparisonTable: {
    headers: ["Reservoir", "Volume (million km³)", "% of total water", "Avg. residence time"],
    rows: [
      ["Oceans", "~1,338", "~97%", "~3,200 years"],
      ["Ice caps & glaciers", "~24", "~1.7%", "Up to 100,000+ years"],
      ["Groundwater", "~23", "~1.7%", "100s to 10,000+ years"],
      ["Lakes & rivers", "<0.01", "<0.01%", "Weeks to years"],
      ["Atmosphere", "<0.001", "<0.001%", "~9 days"]
    ]
  },
  relatedTopics: ["earth-j2", "earth-j3", "earth-e1"],
  content: true,
  buildsOn: ["phy-states-of-matter", "phy-heat-transfer-equilibrium"],
  leadsTo: ["earth-j2", "earth-e3"],
  usedIn: ["d-moisture-metrics", "d-precipitation-processes", "env-water-pollution-and-quality"]
},


{
  id: "earth-j2",
  sectionId: "EARTH-J",
  order: 2,
  title: "Groundwater: Aquifers, Water Tables & Flow",
  definition: "Groundwater is the water that fills pore spaces and fractures in rock and soil beneath Earth's surface. It is a critical freshwater resource — supplying drinking water for billions of people — and an important geological agent in karst formation, slope stability, and the long-term carbon cycle.",
  keyFacts: [
    "Groundwater zone (zone of saturation): the region below the water table where all pore spaces are filled with water",
    "Water table: the upper surface of the saturated zone; below it, all voids are water-filled; above it, voids may contain air as well (the unsaturated or vadose zone)",
    "Aquifer: a permeable rock or sediment body that holds and transmits significant quantities of groundwater (e.g., sandstone, fractured limestone, gravel)",
    "Aquitard: a low-permeability layer that restricts groundwater flow (e.g., shale, clay)",
    "Aquiclude: an impermeable layer that does not transmit groundwater at all (e.g., unfractured granite, halite)",
    "Unconfined aquifer: open to the surface; the water table is free to rise and fall; recharged directly by infiltration",
    "Confined aquifer: sandwiched between two aquitards; water is under pressure; when tapped by a well, water rises above the aquifer (artesian well)",
    "Recharge zone: the area at the surface where water enters an aquifer; for confined aquifers, this may be far from where the aquifer is accessed",
    "Darcy's Law (Henry Darcy, 1856): Q = K × A × (h/L), where Q is discharge, K is hydraulic conductivity, A is cross-sectional area, h is head difference, L is flow length; the foundation of groundwater flow modelling",
    "Porosity: the fraction of the rock's volume that is void space (e.g., sandstone ~10–30%, shale ~10–30% but most pores disconnected, gravel ~25–40%, fractured granite <5%)",
    "Permeability: the ability of a rock to transmit fluids; depends on pore connectivity, not just porosity",
    "Springs: natural outflows of groundwater where the water table meets the surface; can be contact springs, depression springs, fault springs, or artesian springs",
    "Cone of depression: a cone-shaped lowering of the water table around a pumping well, caused by the rate of pumping exceeding the rate of recharge",
    "Karst aquifers (limestone/dolomite): highly productive but vulnerable; rapid flow through caves/conduits with little filtration — high contamination risk",
    "Indus Basin (Pakistan): one of the world's largest alluvial aquifer systems; sediment fill locally >5 km; recharged by rivers and monsoon rainfall; widespread water-table decline from over-abstraction; coastal saltwater intrusion risk"
  ],
  explanationSections: [
    { heading: "How groundwater moves", body: "Groundwater moves slowly through rock and soil under the force of gravity, from areas of high hydraulic head to areas of low head. The hydraulic head is the sum of elevation head and pressure head. In an unconfined aquifer, water flows downhill along the water table. In a confined aquifer, water moves under pressure from the recharge zone toward the discharge zone, often rising above the aquifer when tapped (artesian flow). Typical flow rates are very slow — cm to metres per day — but in fractured limestone (karst), flow can be much faster: underground rivers in karst can transport water for kilometres in hours." },
    { heading: "Porosity vs. permeability — the crucial distinction", body: "Porosity is the fraction of void space in a rock; permeability is the ability to transmit fluid through those voids. A rock can have high porosity but low permeability (e.g., shale: many small pores, but they are poorly connected, so water does not flow freely). Conversely, a rock can have low porosity but high permeability (e.g., fractured granite: only a few percent void, but the fractures are open and well-connected). The best aquifers combine high porosity AND high permeability — well-sorted sandstone, fractured limestone, and unconsolidated gravel are classic examples." },
    { heading: "Artesian wells and confined aquifers", body: "A confined aquifer is sandwiched between two aquitards, with the water under pressure from the weight of the overlying rock and the hydraulic head at the recharge zone. When a well is drilled into the aquifer, water rises — sometimes to the surface without pumping (a flowing artesian well), sometimes to a level above the aquifer but still below the surface. The Great Artesian Basin in Australia, the Dakota Aquifer in the US, and parts of the Indus Basin in Pakistan are all major confined aquifer systems. Artesian water is often very old (thousands of years), which means it is a non-renewable resource on human timescales." },
    { heading: "Pakistan focus: Indus Basin groundwater", body: "The Indus Basin is Pakistan's primary freshwater reservoir. Thick alluvial sediments (locally >5 km) form a vast unconfined-to-semi-confined aquifer system recharged by the Indus and its tributaries plus monsoon rains. Intensive irrigation pumping since the mid-20th century has caused widespread water-table declines (metres to tens of metres in many districts), reduced well yields, and increased energy costs. In coastal Sindh and parts of Balochistan, over-abstraction has triggered saltwater intrusion, degrading water quality. Sustainable management (regulated pumping, artificial recharge, canal lining) is a major national challenge. Karst is limited in Pakistan but occurs in some limestone terrains of the Salt Range and northern areas." }
  ],
  examPoints: [
    "Water table: the upper surface of the saturated zone; below it, all voids are water-filled",
    "Unconfined aquifer: open to the surface; recharged directly",
    "Confined aquifer: between two aquitards; water under pressure; may produce artesian wells",
    "Porosity: % of void space; Permeability: ability to transmit fluid — DIFFERENT properties",
    "Darcy's Law: Q = K × A × h/L (the foundation of groundwater flow modelling)",
    "Cone of depression: drawdown of water table around a pumping well",
    "Indus Basin: major alluvial aquifer; declining water table + coastal saltwater intrusion from over-pumping",
    "Karst aquifers: high yield but high contamination vulnerability due to rapid conduit flow"
  ],
  comparisonTable: {
    headers: ["Property", "Definition", "Example high / low values"],
    rows: [
      ["Porosity", "% of rock volume that is void", "Sandstone 10–30% (high); Fractured granite <5% (low)"],
      ["Permeability", "Ability to transmit fluid through connected voids", "Gravel high; Shale low (pores not connected)"],
      ["Aquifer", "Permeable, water-bearing formation", "Sandstone, fractured limestone, gravel"],
      ["Aquitard", "Low-permeability, restricts but does not stop flow", "Sandy clay, fractured shale"],
      ["Aquiclude", "Impermeable, blocks flow", "Unfractured granite, halite, unfractured clay"]
    ]
  },
  relatedTopics: ["earth-j1", "earth-j3", "earth-e5"],
  content: true,
  buildsOn: ["earth-j1", "earth-b4", "phy-pressure-fluids", "phy-density"],
  leadsTo: [],
  usedIn: ["env-water-pollution-and-quality", "env-pakistan-environmental-context"]
},


// ════════════════════════════════════════════════════════════════════
// SECTION EARTH-K: Geophysics Primer
// ════════════════════════════════════════════════════════════════════


{
  id: "earth-k1",
  sectionId: "EARTH-K",
  order: 1,
  title: "Introduction to Geophysics & Geophysical Methods",
  definition: "Geophysics is the application of physics to study the Earth — its structure, composition, and physical processes. Geophysical methods use measurements of physical fields (seismic, gravity, magnetic, electrical, radiometric) at or near the surface to infer subsurface conditions without drilling.",
  keyFacts: [
    "Geophysics applies the principles and methods of physics to study the Earth",
    "Seismic methods (P- and S-waves; reflection and refraction seismology)",
    "Gravity methods (gravimeters measure variations in g)",
    "Magnetic methods (magnetometers measure variations in Earth's field)",
    "Electrical and electromagnetic methods (resistivity, induced polarisation, EM induction)",
    "Radiometric methods (natural radioactivity of rocks)",
    "Geodesy (study of Earth's shape, gravity field, and rotation)",
    "Seismic: contrast in elastic wave speed and density",
    "Gravity: contrast in density",
    "Magnetic: contrast in magnetic susceptibility (e.g., magnetite content)",
    "Electrical: contrast in electrical resistivity/conductivity",
    "Radiometric: contrast in radioactive element content (K, U, Th)",
    "Oil, gas, and groundwater exploration (most common use of seismic and resistivity)",
    "Mineral exploration (magnetic, EM, gravity for ore bodies)",
    "Engineering and environmental site characterisation (shallow seismic, resistivity, GPR)",
    "Crustal and mantle studies (deep seismic, magnetics, gravity)",
    "Geothermal exploration (various methods)",
    "Volcanology and active tectonics (continuous GPS, InSAR, magnetotellurics)",
    "Archaeology (magnetic, resistivity, GPR)",
    "Forensic geophysics (locating buried objects)",
    "Advantages of geophysics: covers large areas rapidly, non-invasive, can probe deep below the surface",
    "Disadvantages: indirect (requires interpretation), ambiguous solutions, expensive for large surveys",
    "Resolution vs. depth: deeper surveys have lower resolution (e.g., deep seismic can image whole crust but cannot resolve a thin aquifer; shallow seismic can resolve a few metres but only to ~100 m depth)"
  ],
  explanationSections: [
    { heading: "Why geophysics is so widely used", body: "Geophysics lets us 'see' into the Earth without drilling. Drilling is expensive (a deep oil well can cost tens of millions of dollars) and only provides information at a single point. Geophysical methods, by contrast, can cover many square kilometres in a single survey and provide a continuous picture of the subsurface. This is why geophysics is the primary tool in oil and gas exploration, mineral exploration, groundwater studies, and crustal research. The trade-off is that geophysical data are indirect: the raw measurements (travel times, gravity values, magnetic field strength) must be processed and inverted to produce a model of the subsurface, and the model is non-unique — many different subsurface configurations can produce the same measurements. Skilled interpretation is essential." },
    { heading: "Choosing the right method", body: "Different methods probe different physical properties and are suited to different targets. Seismic is the workhorse for oil and gas, where the acoustic contrast between reservoir rock and surrounding shale is large. Gravity surveys are excellent for mapping large-scale basin structure and dense ore bodies (e.g., chromite, magnetite). Magnetic surveys are ideal for locating magnetite-rich ore, basaltic intrusions, and buried steel (e.g., unexploded ordnance, pipes). Electrical methods (resistivity, induced polarisation) are best for groundwater, clay layers, and metallic mineral deposits. Radiometric methods map the natural radioactivity of surface rocks, useful for geology mapping and mineral exploration. Most modern surveys use multiple methods to reduce ambiguity." }
  ],
  examPoints: [
    "Geophysics applies physics to study the Earth; methods are non-invasive and cover large areas",
    "Each method exploits a different physical property contrast (seismic = elastic; gravity = density; magnetic = magnetite content; electrical = resistivity)",
    "Seismic is the primary method for oil and gas exploration",
    "Resolution decreases with depth — deep surveys have coarse resolution",
    "Geophysical data are indirect: must be processed and inverted; solutions are non-unique",
    "Major application areas: oil/gas, mineral, groundwater, environmental, crustal studies, volcanology"
  ],
  relatedTopics: ["earth-k2", "earth-k3", "earth-k4", "earth-k5", "earth-h2"],
  content: true,
  buildsOn: ["earth-a3", "phy-units-measurement"],
  leadsTo: ["earth-k2", "earth-k3", "earth-k4"],
  usedIn: ["earth-k2", "earth-k3", "earth-k4", "ra-scientific-method", "ra-research-design", "ra-data-types"]
},


{
  id: "earth-k2",
  sectionId: "EARTH-K",
  order: 2,
  title: "Seismic Method (Reflection & Refraction)",
  definition: "The seismic method is the most important geophysical technique, especially in oil and gas exploration. It uses controlled seismic waves (usually from explosions or vibrating trucks) that reflect or refract off subsurface boundaries; the travel times of these waves are recorded at the surface to produce an image of the subsurface.",
  keyFacts: [
    "Seismic method principle: a seismic source (explosion, vibrator, air gun) generates waves; the waves travel into the Earth, reflect or refract at subsurface boundaries, and return to an array of receivers (geophones on land, hydrophones in water) at the surface",
    "The receivers record the travel time and amplitude of the returned waves",
    "Seismic reflection: the dominant method for oil and gas; records waves that reflect off subsurface interfaces (like sonar or echolocation); provides high-resolution images of the subsurface to depths of several km",
    "Seismic refraction: records waves that travel along high-velocity layers and refract back to the surface; used for shallow engineering, groundwater, and crustal studies",
    "Subsurface interfaces: a 'reflector' is a surface where seismic wave speed and/or density change abruptly (e.g., the top of a sandstone layer, the base of a salt dome, the top of the basement)",
    "The depth of a reflector is calculated from the two-way travel time and the seismic velocity of the overlying rocks (depth = velocity × one-way time / 2)",
    "Data processing: stacking, migration, deconvolution, and other steps convert the raw travel-time data into a 2D or 3D image of the subsurface",
    "2D seismic: a single line of receivers; produces a 2D cross-section",
    "3D seismic: a grid of receivers; produces a 3D volume of data; the standard for modern oil and gas exploration",
    "4D seismic: repeated 3D surveys over time to monitor changes in reservoirs (e.g., fluid movement during production, CO₂ injection)",
    "Applications: oil and gas exploration (primary), crustal and mantle imaging, groundwater studies, earthquake seismology (using natural sources), engineering site characterisation, archaeology",
    "Resolution: typically 5–25 m vertically for petroleum-scale surveys; finer for shallow surveys; controlled by the wavelength of the seismic signal (higher frequency = higher resolution but less depth penetration)"
  ],
  explanationSections: [
    { heading: "How seismic reflection works", body: "A seismic survey is conceptually like an ultrasound of the Earth. A source (small dynamite charge, vibrating truck, or air gun in water) generates seismic waves. The waves travel down into the Earth, and whenever they encounter a boundary where rock properties change (e.g., a sandstone overlying a shale), part of the wave is reflected back to the surface. The reflected waves are recorded by an array of geophones. The time between generation and reception gives the depth to the reflector (since wave speed is known). Modern surveys use thousands of geophones and produce detailed 2D or 3D images of the subsurface to depths of several km — sufficient to map the structures that trap oil and gas." },
    { heading: "3D and 4D seismic — the modern standard", body: "3D seismic is the workhorse of modern oil and gas exploration. Instead of a single line of geophones, a dense grid of receivers is laid out (often several km in each direction) and a source is moved across the grid. The resulting data set is a 3D volume of subsurface reflectivity, which can be sliced in any direction. 4D seismic is the same idea but repeated over time: by comparing successive 3D surveys, oil companies can monitor how fluids move within a reservoir during production or CO₂ injection. 4D has been a game-changer for reservoir management and for carbon capture and storage (CCS) monitoring." },
    { heading: "Limitations and ambiguities", body: "Seismic is the highest-resolution deep-imaging method, but it has limits. The main one is that the seismic image is not a direct picture of the rock — it is a picture of acoustic impedance (velocity × density) contrasts. Different rock types can have similar acoustic impedance, leading to ambiguity. Another limit is resolution: seismic cannot resolve features smaller than about a quarter of the wavelength, and longer wavelengths (needed for deeper imaging) reduce resolution. Finally, the image depends heavily on processing: different processing flows can produce somewhat different images of the same data, and skill is needed to choose the right approach. Despite these limits, seismic remains the most important tool for subsurface imaging." }
  ],
  examPoints: [
    "Seismic reflection is the primary method for oil and gas exploration",
    "Reflection occurs at boundaries where wave speed and/or density change",
    "Depth = (velocity × one-way travel time) / 2",
    "3D seismic is the modern standard; 4D is repeated 3D to monitor reservoir changes over time",
    "Higher frequency = higher resolution but less depth penetration",
    "Vertical resolution of petroleum-scale surveys: typically 5–25 m"
  ],
  workedExample: {
    problem: "A seismic reflector is detected at a two-way travel time of 2.4 s. If the average seismic velocity of the overlying rocks is 3,000 m/s, what is the depth of the reflector?",
    solution: "Depth = velocity × one-way time = 3,000 m/s × 1.2 s = 3,600 m. (Or equivalently: depth = (velocity × two-way time) / 2 = (3,000 × 2.4) / 2 = 3,600 m.)",
    answer: "3,600 m"
  },
  relatedTopics: ["earth-k1", "earth-k3", "earth-k4", "earth-h2"],
  content: true,
  buildsOn: ["earth-k1", "earth-h2", "phy-wave-properties", "phy-reflection-refraction"],
  leadsTo: [],
  usedIn: ["earth-a3", "earth-h3", "ra-data-visualization", "ra-data-interpretation", "ra-research-quality"]
},


{
  id: "earth-k3",
  sectionId: "EARTH-K",
  order: 3,
  title: "Gravity, Magnetic & Electrical Methods",
  definition: "Gravity, magnetic, and electrical methods are non-seismic geophysical techniques that exploit contrasts in density, magnetic susceptibility, and electrical resistivity to map subsurface structures and locate resources. They are widely used in mineral exploration, groundwater studies, and crustal research.",
  keyFacts: [
    "Measures tiny variations in Earth's gravitational field caused by lateral contrasts in rock density",
    "Instrument: gravimeter (extremely sensitive spring balance; can detect changes of ~10⁻⁸ g)",
    "Dense rocks (e.g., basalt, ore bodies, salt excluded) produce positive anomalies; light rocks (e.g., granite, salt) produce negative anomalies",
    "Applications: mapping basin structure, locating dense ore bodies (e.g., chromite, magnetite, sulfide ores), salt dome detection, regional geological mapping, isostasy studies",
    "Airborne gravity surveys are now used for large-scale reconnaissance",
    "Units of measurement: mGal (milligal); 1 Gal = 1 cm/s²; Earth's g ≈ 980 Gal",
    "Measures variations in Earth's magnetic field caused by contrasts in magnetic susceptibility (mainly magnetite content)",
    "Instrument: magnetometer (proton precession, fluxgate, or optically pumped cesium)",
    "Strong anomalies: mafic igneous rocks (basalt, gabbro), iron ore (magnetite, hematite), ultramafic rocks; weak anomalies: sedimentary rocks, granite",
    "Applications: locating iron ore, mapping basement structure under sediments, detecting buried steel (UXO, pipes), volcanic and tectonic studies, magnetic stripe mapping (seafloor)",
    "Magnetic surveys are fast and cheap; routinely done from aircraft (aeromagnetic surveys)",
    "Measures the electrical resistivity (or its inverse, conductivity) of subsurface materials",
    "Resistivities: clean sand/gravel ~100–1,000 Ω·m (high); clay ~1–100 Ω·m (low); salt water ~0.2 Ω·m (very low); dry crystalline rock ~1,000–10,000+ Ω·m (very high); metallic ore ~0.01–1 Ω·m (very low); groundwater ~10–100 Ω·m (moderate)",
    "Resistivity survey: current is injected through two electrodes; voltage is measured between two other electrodes; the apparent resistivity is calculated",
    "Induced polarisation (IP): a variation of resistivity that detects chargeable materials (clay minerals, metallic minerals); used for mineral exploration",
    "Electromagnetic (EM) methods: use a primary EM field to induce secondary currents in conductive bodies; do not require ground contact; useful for mineral exploration and environmental site characterisation",
    "Applications: groundwater exploration (locating aquifers, distinguishing fresh from salt water), mineral exploration (locating conductive ore bodies), contamination studies, archaeological surveys",
  ],
  explanationSections: [
    { heading: "Gravity method — what the anomalies tell us", body: "The gravity method measures how much stronger or weaker gravity is at one point compared to another. A dense body (e.g., a buried ore deposit, a basement high) produces a positive anomaly; a low-density body (e.g., a salt dome, an air-filled cave) produces a negative anomaly. The shape of the anomaly gives information about the depth and geometry of the body: broad, smooth anomalies come from deep sources; sharp, narrow anomalies come from shallow sources. Gravity surveys are used in oil exploration to map basin structure, in mineral exploration to locate dense ore, and in regional geological studies to understand isostasy and crustal structure." },
    { heading: "Magnetic method — the workhorse of regional mapping", body: "Magnetic surveys are extremely fast and cheap to collect, especially from aircraft (aeromagnetic surveys), and are routinely used to map basement structure under sedimentary cover, locate iron ore and other magnetic minerals, and identify faults and intrusions. The key contrast is magnetite content: mafic and ultramafic rocks (rich in magnetite) produce strong positive anomalies; granites and sediments produce weak or negative anomalies. Magnetic data also provide spectacular images of seafloor spreading (the magnetic stripes that record reversals of Earth's field) and are a primary tool for volcanic and tectonic studies." },
    { heading: "Electrical methods — groundwater and ore", body: "Electrical methods exploit the huge range of electrical resistivity between common Earth materials. Salt water is the most conductive (resistivity ~0.2 Ω·m); clean sand and gravel (good aquifers) are highly resistive (~100–1,000 Ω·m); clay is conductive because of its bound ions; metallic ore is very conductive. This contrast makes resistivity surveys ideal for groundwater exploration (locating aquifers and distinguishing fresh from salt water), for mineral exploration (locating conductive sulphide ore bodies), and for environmental studies (mapping contamination plumes). Modern multi-electrode systems can produce 2D and 3D resistivity images of the subsurface to depths of hundreds of metres." }
  ],
  examPoints: [
    "Gravity method: measures density contrasts; gravimeter; used for basin structure and ore",
    "Magnetic method: measures magnetite content; magnetometer; used for basement mapping and iron ore",
    "Aeromagnetic surveys: fast, cheap, and routine for regional geological mapping",
    "Resistivity: clean sand/gravel HIGH; clay LOW; salt water VERY LOW; metallic ore VERY LOW",
    "Resistivity is the primary method for groundwater exploration in sedimentary settings",
    "EM methods do not require ground contact — useful for rapid surveys and for detecting buried metal"
  ],
  comparisonTable: {
    headers: ["Method", "Property measured", "Typical use", "Notes"],
    rows: [
      ["Gravity", "Density contrasts (Δg)", "Basin structure, dense ore, isostasy", "Gravimeter; ~10⁻⁸ g sensitivity"],
      ["Magnetic", "Magnetic susceptibility (magnetite content)", "Basement mapping, iron ore, seafloor stripes", "Fast; routinely done from aircraft"],
      ["Resistivity", "Electrical resistivity", "Groundwater, contamination, salt–fresh interface", "Wide range (Ω·m); clean sand high, salt water very low"],
      ["Induced polarisation (IP)", "Chargeability (related to clay and metallic minerals)", "Mineral exploration, clay mapping", "Variation of resistivity"],
      ["Electromagnetic (EM)", "Conductivity via induced currents", "Conductive ore, UXO, environmental", "No ground contact needed"]
    ]
  },
  relatedTopics: ["earth-k1", "earth-k2", "earth-j2"],
  content: true,
  buildsOn: ["earth-k1", "earth-a5", "earth-a2", "phy-gravity-weight-friction", "phy-magnetic-fields-force"],
  leadsTo: [],
  usedIn: ["earth-a2", "earth-a5", "ra-data-visualization", "ra-correlation-regression"]
},


{
  id: "earth-k4",
  sectionId: "EARTH-K",
  order: 4,
  title: "Radiometric Methods & Geodesy",
  definition: "Radiometric methods measure the natural radioactivity of rocks and soils to map geology and mineral deposits. Geodesy is the study of Earth's shape, size, gravity field, and rotation, including modern satellite-based measurements of plate motion and sea level change.",
  keyFacts: [
    "Measure natural gamma radiation emitted by radioactive isotopes in rocks and soils (mainly K-40, U-238 series, Th-232 series)",
    "Instrument: gamma-ray spectrometer (handheld, borehole, or airborne)",
    "Applications:",
    "    - Geological mapping: different rock types have characteristic radioactive signatures (e.g., granites high, basalts low, sediments variable)",
    "    - Mineral exploration: locating U, Th, and K-rich deposits",
    "    - Environmental: monitoring radioactive contamination, mapping radon-prone areas; Airborne gamma-ray surveys are routine for geological mapping and mineral reconnaissance; Radiometric dating is covered separately in Layer 3.5 (Geological Time)",
    "The science of measuring Earth's geometric shape, orientation in space, and gravity field",
    "Classical geodesy: ground-based triangulation, leveling, and astronomical observations",
    "Modern space geodesy: GPS (Global Positioning System), GLONASS, Galileo, BeiDou — satellite-based positioning accurate to millimetres",
    "Other techniques:",
    "    - InSAR (Interferometric Synthetic Aperture Radar): detects cm-scale ground deformation from satellites (used to monitor volcanoes, landslides, subsidence, earthquakes)",
    "    - VLBI (Very Long Baseline Interferometry): measures plate motion and Earth's rotation using distant quasars",
    "    - SLR (Satellite Laser Ranging): measures distance to satellites using laser pulses; tracks plate motion and Earth's gravity field",
    "    - GRACE (Gravity Recovery and Climate Experiment): twin satellites that measure variations in Earth's gravity field, used to track ice mass loss, groundwater depletion, sea level change; Applications:",
    "    - Measuring plate motions (cm/year accuracy; e.g., India–Eurasia convergence at ~3–5 cm/year)",
    "    - Monitoring sea level change (satellite altimetry; e.g., TOPEX/Poseidon, Jason series)",
    "    - Tracking ice sheet mass balance (GRACE, GRACE-FO)",
    "    - Monitoring groundwater depletion and reservoir-related subsidence",
    "    - Earthquake and volcano monitoring (GPS, InSAR)",
    "    - Defining national boundaries and surveying",
    "    - Improving navigation and mapping; Earth's shape: an oblate spheroid (the 'geoid' when gravity is also considered) — modern geodesy measures the geoid to cm accuracy",
  ],
  explanationSections: [
    { heading: "Radiometric methods in exploration and mapping", body: "Every rock contains small amounts of radioactive isotopes (K-40, U-238, Th-232 and their decay products). The gamma rays they emit can be measured with a spectrometer, giving a rapid indication of the rock's composition. Granitic and other felsic rocks are typically rich in K, U, and Th; mafic rocks like basalt are relatively low. This makes airborne gamma-ray surveys a fast, cheap way to map regional geology: the colour-coded 'radioelement maps' they produce are now a standard tool in geological mapping. Radiometric methods are also used in mineral exploration (locating U and Th deposits), in environmental work (radon hazard mapping), and in borehole logging." },
    { heading: "Geodesy and plate motion", body: "Geodesy used to be a slow, ground-based science. Today, it is dominated by satellites: GPS receivers can measure position to within a few millimetres, allowing scientists to track the slow drift of continents (a few cm/year) and the build-up of strain before earthquakes. The continuous GPS network around the world has shown, for example, that the Indian Plate is moving northward at ~3–5 cm/year, that the Himalayas are shortening at a similar rate, and that strain accumulation in locked faults can be measured years to decades before a major earthquake. InSAR complements GPS by providing dense spatial coverage (cm-scale deformation maps) from radar satellites." },
    { heading: "Earth's gravity field and sea level", body: "Modern geodesy measures not only the solid Earth but also its gravity field and the oceans. The GRACE satellites (2002–2017) and their successor GRACE-FO (launched 2018) measure month-to-month changes in Earth's gravity field, which reflect changes in mass distribution — melting ice sheets, depleting aquifers, changing ocean currents. These data have revolutionised our understanding of the global water cycle and climate change. Satellite altimetry (TOPEX/Poseidon, Jason-1, 2, 3) measures sea surface height to within a few cm, providing the global record of sea level rise: about 3.4 mm/year averaged over the past few decades, with significant regional variation." }
  ],
  examPoints: [
    "Radiometric methods measure natural gamma radiation from K, U, Th in rocks and soils",
    "Granites are high in radioelements; basalts are low; sediments are variable",
    "Modern geodesy is dominated by satellite methods: GPS, InSAR, GRACE, satellite altimetry",
    "GPS measures plate motion to mm accuracy; current rate of India–Eurasia convergence: ~3–5 cm/year",
    "GRACE satellites measure monthly changes in Earth's gravity field (ice loss, groundwater depletion)",
    "Global sea level is rising at ~3.4 mm/year (recent decades); measured by satellite altimetry"
  ],
  comparisonTable: {
    headers: ["Geodetic technique", "Measured quantity", "Application"],
    rows: [
      ["GPS (GNSS)", "Position (3D) to mm accuracy", "Plate motion, earthquake/volcano monitoring, surveying"],
      ["InSAR", "Ground deformation (cm-scale) from satellite radar", "Volcano monitoring, subsidence, landslides"],
      ["VLBI", "Distances to distant quasars", "Earth rotation, plate motion reference frame"],
      ["SLR", "Distance to satellites via laser ranging", "Plate motion, Earth's gravity field"],
      ["GRACE / GRACE-FO", "Monthly changes in Earth's gravity field", "Ice mass loss, groundwater depletion, sea level"],
      ["Satellite altimetry", "Sea surface height", "Global sea level rise (~3.4 mm/yr)"]
    ]
  },
  relatedTopics: ["earth-k1", "earth-k2", "earth-k3", "earth-d2", "earth-c2"],
  content: true,
  buildsOn: ["earth-k1", "earth-c2", "phy-radioactivity-nuclear", "phy-half-life-decay"],
  leadsTo: [],
  usedIn: ["earth-c2", "h-past-climate-reconstruction", "ra-descriptive-statistics", "ra-data-interpretation"]
}


];


export default topics;