// topics-physics.ts — FPSC Basics of Physics content bank
// Source: Standard physics curriculum (FSc/O-Level equivalent) — no single source PDF exists
// for this subject, so content is drawn from well-established, non-controversial physics fact
// (Newton's laws, thermodynamics, electromagnetism, etc.), cited generically rather than to a
// specific page. Scope and depth follow the locked syllabus: comprehensive on core mechanics,
// energy, heat, waves, electricity and magnetism; deliberately light on Modern Physics and
// Universal Gravitation per the syllabus's own low-priority flag.
//
// Deliberate overlap boundary with Meteorology (see relatedTopics + examPoints for the explicit
// cross-subject notes): Physics covers the general laws (heat transfer, pressure, radiation,
// waves); Meteorology covers their atmospheric application (lapse rates, PGF, remote sensing,
// greenhouse effect). Where a clean 1:1 link exists, relatedTopics points directly at the
// Meteorology topic id, since the app's topic map is subject-agnostic.

import type { Topic } from '@/types';

export const topics: Topic[] = [

// ============================= SECTION PHY-A: Motion & Forces =============================

{
  id: "phy-kinematics",
  sectionId: "PHY-A",
  order: 1,
  title: "Kinematics: Distance, Displacement, Speed, Velocity & Acceleration",
  definition: "Kinematics describes motion using distance, displacement, speed, velocity, and acceleration, without regard to the forces causing it.",
  keyFacts: [
    "Distance: total path length travelled, scalar (no direction)",
    "Displacement: straight-line distance from start to end point, in a specific direction — a vector",
    "Speed = distance / time, scalar",
    "Velocity = displacement / time, vector (has direction)",
    "Acceleration = change in velocity / time; can be positive (speeding up), negative (slowing down/deceleration), or due to a change in direction alone at constant speed",
    "On a distance-time graph, the slope is speed; on a velocity-time graph, the slope is acceleration and the area under the curve is displacement"
  ],
  explanationSections: [
    { heading: "Scalar vs. vector quantities", body: "Distance and speed only have magnitude; displacement and velocity also have direction. Two objects can travel the same distance but have very different displacements if their paths differ — e.g. a runner completing one full lap has covered real distance but has zero net displacement, since they end where they started." },
    { heading: "Reading motion graphs", body: "A steeper slope on a distance-time graph means greater speed; a flat/horizontal section means the object is stationary. On a velocity-time graph, a horizontal line means constant velocity (zero acceleration), and the enclosed area between the line and the time axis gives the total displacement over that interval." }
  ],
  formula: {
    name: "Average velocity and acceleration",
    expression: "v = Δs / Δt      a = Δv / Δt",
    variables: [
      { symbol: "v", meaning: "velocity" },
      { symbol: "Δs", meaning: "displacement" },
      { symbol: "Δt", meaning: "time interval" },
      { symbol: "a", meaning: "acceleration" },
      { symbol: "Δv", meaning: "change in velocity" }
    ]

  },
  examPoints: [
    "An object moving at constant speed around a curve is still accelerating, because its direction (and therefore velocity) is continuously changing — a common conceptual trap",
    "Distance ≥ |displacement| always; they're equal only for straight-line motion in one direction"
  ],
  relatedTopics: ["phy-newtons-laws", "phy-momentum-impulse"],
  content: true,
  buildsOn: ["math-8-3", "math-5-4", "phy-units-measurement", "phy-scalars-vectors"],
  leadsTo: ["phy-newtons-laws", "phy-momentum-impulse"],
  usedIn: ["phy-work-energy", "b-static-stability", "c-forces-governing-wind", "a-scales-of-motion"]
},

{
  id: "phy-newtons-laws",
  sectionId: "PHY-A",
  order: 2,
  title: "Newton's Three Laws of Motion",
  definition: "Newton's three laws describe how forces affect the motion of objects: inertia, the relationship between force/mass/acceleration, and action-reaction pairs.",
  keyFacts: [
    "First Law (Inertia): an object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted on by a net external force",
    "Second Law: F = ma — net force equals mass times acceleration; acceleration is directly proportional to net force and inversely proportional to mass",
    "Third Law: for every action force, there is an equal and opposite reaction force, acting on a different object",
    "Mass is the amount of matter in an object (constant everywhere); weight is the gravitational force on that mass (varies with location) — covered further in the Gravity topic",
    "Net force is the vector sum of all forces acting on an object; if net force is zero, the object is in equilibrium (constant velocity, possibly zero)"
  ],
  explanationSections: [
    { heading: "Why the Third Law doesn't cancel out motion", body: "Action-reaction pairs act on two different objects, not the same one — a book resting on a table exerts a downward force on the table, and the table exerts an equal upward force on the book. These forces don't cancel each other because they act on different objects; what keeps the book still is that the upward force from the table balances the book's own weight, a separate force pair entirely." },
    { heading: "Second Law as the quantitative core", body: "F = ma is the working equation behind most mechanics problems: doubling the net force on an object doubles its acceleration, while doubling its mass (with the same force) halves the acceleration. This single relationship also underlies momentum and impulse, covered next." }
  ],
  formula: {
    name: "Newton's Second Law",
    expression: "F = m × a",
    variables: [
      { symbol: "F", meaning: "net force (Newtons, N)" },
      { symbol: "m", meaning: "mass (kg)" },
      { symbol: "a", meaning: "acceleration (m/s²)" }
    ]

  },
  examPoints: [
    "'Equal and opposite' in the Third Law refers to forces on two different objects — a frequent exam trap is applying it to a single object's forces",
    "An object can be moving and still have zero net force acting on it (constant velocity) — this is consistent with, not a violation of, the First Law"
  ],
  relatedTopics: ["phy-kinematics", "phy-gravity-weight-friction", "phy-momentum-impulse"],
  content: true,
  buildsOn: ["phy-kinematics", "phy-scalars-vectors"],
  leadsTo: ["phy-gravity-weight-friction", "phy-momentum-impulse", "phy-work-energy"],
  usedIn: ["phy-vector-applications", "b-coriolis-effect", "c-forces-governing-wind", "earth-f1", "earth-h1"]
},

{
  id: "phy-gravity-weight-friction",
  sectionId: "PHY-A",
  order: 3,
  title: "Gravity, Weight & Friction",
  definition: "Gravity is the attractive force between masses; weight is the gravitational force on an object's mass; friction is a resistive force opposing relative motion between surfaces in contact.",
  keyFacts: [
    "Weight (W) = mass (m) × gravitational field strength (g); on Earth's surface, g ≈ 9.8 m/s²",
    "Mass is constant regardless of location; weight changes with the local gravitational field (e.g. an object weighs less on the Moon, where g ≈ 1.6 m/s²)",
    "Friction opposes relative motion or the tendency of motion between two surfaces in contact",
    "Static friction acts on objects at rest and prevents motion up to a maximum value; kinetic (sliding) friction acts on objects already moving, and is generally slightly less than the maximum static friction",
    "Friction depends on the nature of the two surfaces and the normal force pressing them together, not on the apparent contact area"
  ],
  explanationSections: [
    { heading: "Why 'weightless' astronauts still have mass", body: "Astronauts in orbit are in continuous free-fall around Earth, so they experience apparent weightlessness — but their mass, and therefore their inertia and the amount of matter they're made of, is completely unchanged. Weight is the force gravity exerts on that mass; if the local gravitational effect is felt as zero (as in free-fall), weight reads as zero even though mass never disappears." },
    { heading: "Friction as an everyday necessity, not just a nuisance", body: "Friction is often introduced as something that 'wastes' energy as heat, but it's also what allows walking, driving, and gripping objects — without friction between shoes and the ground, forward push would simply cause slipping rather than propulsion." }
  ],
  formula: {
    name: "Weight",
    expression: "W = m × g",
    variables: [
      { symbol: "W", meaning: "weight (N)" },
      { symbol: "m", meaning: "mass (kg)" },
      { symbol: "g", meaning: "gravitational field strength (m/s²), ≈9.8 m/s² on Earth" }
    ]

  },
  examPoints: [
    "Mass is measured in kilograms; weight is a force, measured in Newtons — these units are frequently confused",
    "Friction always opposes relative motion; it never propels an object forward on its own"
  ],
  relatedTopics: ["phy-newtons-laws", "phy-universal-gravitation"],
  content: true,
  buildsOn: ["phy-newtons-laws"],
  leadsTo: ["phy-universal-gravitation", "phy-momentum-impulse"],
  usedIn: ["phy-archimedes-principle", "b-hydrostatic-equation", "earth-a5"]
},

{
  id: "phy-momentum-impulse",
  sectionId: "PHY-A",
  order: 4,
  title: "Momentum, Impulse & Conservation of Momentum",
  definition: "Momentum is the product of an object's mass and velocity; impulse is the change in momentum produced by a force acting over time; in a closed system, total momentum is conserved.",
  keyFacts: [
    "Momentum (p) = mass (m) × velocity (v); a vector quantity, measured in kg·m/s",
    "Impulse (J) = force (F) × time (Δt) the force acts = change in momentum (Δp)",
    "Conservation of momentum: in a closed system with no external forces, total momentum before an interaction (e.g. a collision) equals total momentum after",
    "This applies to both elastic collisions (kinetic energy also conserved) and inelastic collisions (kinetic energy is not conserved, but momentum still is)"
  ],
  explanationSections: [
    { heading: "Why a longer collision time reduces force", body: "Since impulse (FΔt) equals the change in momentum, and the change in momentum for a given collision is fixed, spreading the same impulse over a longer time (Δt) reduces the average force required. This is the physics behind airbags, crumple zones, and catching a ball with a 'give' in the arm — extending Δt reduces peak force on the body." },
    { heading: "Momentum conservation in collisions", body: "When two objects collide with no external forces (like friction) interfering, the combined momentum of the system immediately before equals the combined momentum immediately after — even though individual objects' velocities can change dramatically, especially in inelastic collisions where objects stick together." }
  ],
  formula: {
    name: "Momentum and Impulse",
    expression: "p = m × v      J = F × Δt = Δp",
    variables: [
      { symbol: "p", meaning: "momentum (kg·m/s)" },
      { symbol: "m", meaning: "mass (kg)" },
      { symbol: "v", meaning: "velocity (m/s)" },
      { symbol: "J", meaning: "impulse (N·s, equivalent to kg·m/s)" },
      { symbol: "F", meaning: "force (N)" },
      { symbol: "Δt", meaning: "time interval force acts (s)" }
    ]

  },
  examPoints: [
    "Momentum is conserved in ALL collisions (elastic and inelastic); kinetic energy is only conserved in elastic collisions — this distinction is frequently tested",
    "Impulse and momentum share the same units (N·s = kg·m/s), reflecting that impulse literally is a change in momentum"
  ],
  relatedTopics: ["phy-newtons-laws", "phy-work-energy"],
  content: true,
  buildsOn: ["phy-newtons-laws", "phy-kinematics"],
  leadsTo: ["phy-work-energy"],
  usedIn: ["phy-fluid-dynamics"]
},

// ============================= SECTION PHY-B: Work, Energy & Power =============================

{
  id: "phy-work-energy",
  sectionId: "PHY-B",
  order: 1,
  title: "Work, Energy & Conservation of Energy",
  definition: "Work is done when a force causes displacement in the direction of the force; energy is the capacity to do work, and total energy in a closed system is always conserved even as it changes form.",
  keyFacts: [
    "Work (W) = Force (F) × displacement (d) × cos(θ), where θ is the angle between the force and the direction of motion; measured in Joules (J)",
    "No work is done if there is no displacement, or if the force is entirely perpendicular to the motion (θ = 90°, cos90° = 0)",
    "Kinetic energy (KE) = ½ × mass × velocity² — energy of motion",
    "Gravitational potential energy (GPE) = mass × g × height — stored energy due to position in a gravitational field",
    "Elastic potential energy (EPE) = ½ × spring constant × extension² — stored energy in a stretched or compressed elastic object",
    "Law of Conservation of Energy: energy cannot be created or destroyed, only converted from one form to another; total energy of an isolated system remains constant"
  ],
  explanationSections: [
    { heading: "Work as energy transfer", body: "Work done on an object is exactly the amount of energy transferred to (or from) it — lifting an object against gravity does work equal to the gravitational potential energy gained, and that energy can later convert back to kinetic energy as the object falls." },
    { heading: "Energy conversion in a swinging pendulum", body: "A pendulum continuously converts between gravitational potential energy (maximum at the highest points of the swing, where velocity is momentarily zero) and kinetic energy (maximum at the lowest point, where height and therefore GPE is minimum). In an idealized frictionless system, the sum of KE and GPE stays exactly constant throughout the motion." }
  ],
  formula: {
    name: "Work, Kinetic Energy & Gravitational Potential Energy",
    expression: "W = F × d × cos(θ)      KE = ½mv²      GPE = mgh",
    variables: [
      { symbol: "W", meaning: "work done (J)" },
      { symbol: "F", meaning: "force (N)" },
      { symbol: "d", meaning: "displacement (m)" },
      { symbol: "θ", meaning: "angle between force and displacement" },
      { symbol: "m", meaning: "mass (kg)" },
      { symbol: "v", meaning: "velocity (m/s)" },
      { symbol: "g", meaning: "gravitational field strength (m/s²)" },
      { symbol: "h", meaning: "height (m)" }
    ]

  },
  examPoints: [
    "Carrying a heavy object at constant height while walking horizontally does zero work on the object in the physics sense, because the force (upward, supporting weight) is perpendicular to the horizontal displacement",
    "In real (non-ideal) systems, some mechanical energy is always lost to friction/heat, but TOTAL energy (including that heat) is still conserved — the Conservation of Energy law is never violated, only mechanical energy alone appears to decrease"
  ],
  relatedTopics: ["phy-power-efficiency", "phy-momentum-impulse"],
  content: true,
  buildsOn: ["phy-newtons-laws", "phy-kinematics", "math-2-3"],
  leadsTo: ["phy-power-efficiency", "phy-thermodynamics-laws"],
  usedIn: ["phy-heat-transfer-equilibrium", "b-heat-transfer", "d-adiabatic-cloud-formation", "env-ecosystem-structure-and-energy-flow", "env-energy-sources"]
},

{
  id: "phy-power-efficiency",
  sectionId: "PHY-B",
  order: 2,
  title: "Power & Efficiency",
  definition: "Power is the rate at which work is done or energy is transferred; efficiency is the ratio of useful energy output to total energy input, expressed as a percentage.",
  keyFacts: [
    "Power (P) = Work done (W) / time (t), measured in Watts (W), where 1 Watt = 1 Joule/second",
    "Power can also be expressed as Force × velocity for objects moving at constant force",
    "Efficiency = (useful energy output / total energy input) × 100%",
    "No real machine is 100% efficient — some energy is always converted to non-useful forms, typically heat, due to friction or resistance"
  ],
  explanationSections: [
    { heading: "Power vs. energy — a common confusion", body: "Energy is the total amount of work capable of being done; power is how quickly that work is done. Two machines can do the same total amount of work (same energy), but the one that does it faster has greater power — this distinction is the basis of comparing engines, motors, and appliances." }
  ],
  formula: {
    name: "Power and Efficiency",
    expression: "P = W / t      Efficiency = (useful output / total input) × 100%",
    variables: [
      { symbol: "P", meaning: "power (Watts, W)" },
      { symbol: "W", meaning: "work done (J)" },
      { symbol: "t", meaning: "time (s)" }
    ]

  },
  examPoints: [
    "Efficiency can never exceed 100% for any real machine — a calculated value above 100% signals an error, not an exceptionally good machine",
    "'Wasted' energy in inefficient machines is not destroyed, only converted to a less useful form (usually heat) — consistent with Conservation of Energy"
  ],
  relatedTopics: ["phy-work-energy"],
  content: true,
  buildsOn: ["phy-work-energy"],
  leadsTo: [],
  usedIn: ["env-energy-sources", "phy-circuits-power-energy"]
},

// ============================= SECTION PHY-C: Matter, Density & Pressure =============================

{
  id: "phy-states-of-matter",
  sectionId: "PHY-C",
  order: 1,
  title: "States of Matter",
  definition: "Matter exists primarily in three states — solid, liquid, and gas — distinguished by how tightly and how freely their particles are arranged and able to move.",
  keyFacts: [
    "Solids: particles tightly packed in a fixed arrangement, vibrate in place, fixed shape and volume",
    "Liquids: particles close together but able to move past one another, fixed volume but take the shape of their container",
    "Gases: particles far apart and move freely and rapidly, no fixed shape or volume — expand to fill any container",
    "Changes of state (melting, freezing, evaporation, condensation, sublimation) involve energy transfer without necessarily changing temperature during the transition itself (latent heat — covered under Thermodynamics)",
    "A fourth state, plasma, exists at very high energy (ionized gas), but is not typically emphasized at the basics level"
  ],
  explanationSections: [
    { heading: "Why state changes can occur without a temperature change", body: "During a phase change (e.g. ice melting to water at 0°C), energy added goes into breaking/forming the intermolecular bonds that define the state, not into increasing the average kinetic energy of the particles — so temperature can remain constant throughout the transition even as heat is continuously absorbed. This is explored further in the Thermodynamics topic on latent heat." }
  ],
  examPoints: [
    "Temperature stays constant during a phase change at constant pressure (e.g. boiling water stays at 100°C until all the liquid has turned to vapour) — a commonly tested conceptual point"
  ],
  relatedTopics: ["phy-density", "phy-thermodynamics-laws"],
  content: true,
  buildsOn: ["phy-units-measurement"],
  leadsTo: ["phy-density", "phy-temperature-heat", "phy-kinetic-theory"],
  usedIn: ["phy-thermodynamics-laws", "d-moisture-metrics", "d-droplet-microphysics"]
},

{
  id: "phy-density",
  sectionId: "PHY-C",
  order: 2,
  title: "Density",
  definition: "Density is the mass of a substance per unit volume, a property that determines whether an object floats or sinks in a given fluid.",
  keyFacts: [
    "Density (ρ) = mass (m) / volume (V), typically measured in kg/m³ or g/cm³",
    "An object floats in a fluid if its density is less than the fluid's density, and sinks if its density is greater",
    "Water's density is approximately 1,000 kg/m³ (1 g/cm³) at standard conditions — a common reference point",
    "Density generally decreases as temperature increases (thermal expansion increases volume while mass stays constant) — with water being a notable exception near freezing"
  ],
  explanationSections: [
    { heading: "Density and buoyancy", body: "An object's ability to float isn't about its total weight, but about how that mass is distributed relative to volume — a large steel ship floats because its overall shape displaces enough water to make its average density (hull, air-filled spaces, and all) less than water's, even though steel itself is far denser than water." }
  ],
  formula: {
    name: "Density",
    expression: "ρ = m / V",
    variables: [
      { symbol: "ρ", meaning: "density (kg/m³)" },
      { symbol: "m", meaning: "mass (kg)" },
      { symbol: "V", meaning: "volume (m³)" }
    ]

  },
  examPoints: [
    "Density is an intensive property — it doesn't depend on the amount of substance present, only on its composition and state, unlike mass or volume individually"
  ],
  relatedTopics: ["phy-states-of-matter", "phy-pressure-fluids"],
  content: true,
  buildsOn: ["phy-states-of-matter", "math-1-8", "math-2-2"],
  leadsTo: ["phy-pressure-fluids", "phy-archimedes-principle"],
  usedIn: ["phy-atmospheric-pressure-physics", "b-static-stability"]
},

{
  id: "phy-pressure-fluids",
  sectionId: "PHY-C",
  order: 3,
  title: "Pressure & Pressure in Fluids",
  definition: "Pressure is force applied per unit area; in fluids, pressure increases with depth and acts equally in all directions at a given point.",
  keyFacts: [
    "Pressure (P) = Force (F) / Area (A), measured in Pascals (Pa), where 1 Pa = 1 N/m²",
    "Pressure in a fluid at rest increases with depth: P = ρgh, where ρ is fluid density, g is gravitational field strength, and h is depth",
    "Pascal's Principle: pressure applied to an enclosed fluid is transmitted equally throughout the fluid in all directions — the basis of hydraulic systems",
    "For a given force, spreading it over a larger area reduces pressure, and concentrating it over a smaller area increases pressure"
  ],
  explanationSections: [
    { heading: "Why the same force can feel different depending on area", body: "Standing normally distributes body weight across the full sole of a shoe, producing relatively low pressure on the ground; standing on the point of a stiletto heel concentrates the same weight over a tiny area, producing far higher pressure — pressure, not force alone, is what determines effects like sinking into soft ground or piercing a surface." },
    { heading: "Pressure and depth in fluids", body: "The deeper a point is within a fluid, the more fluid weight is pressing down from above, so pressure increases linearly with depth. This is why deep-sea divers experience much greater pressure than swimmers near the surface, and why dams are built thicker at the base than at the top." }
  ],
  formula: {
    name: "Pressure and Fluid Pressure",
    expression: "P = F / A      P(fluid) = ρ × g × h",
    variables: [
      { symbol: "P", meaning: "pressure (Pa)" },
      { symbol: "F", meaning: "force (N)" },
      { symbol: "A", meaning: "area (m²)" },
      { symbol: "ρ", meaning: "fluid density (kg/m³)" },
      { symbol: "g", meaning: "gravitational field strength (m/s²)" },
      { symbol: "h", meaning: "depth (m)" }
    ]

  },
  examPoints: [
    "This topic covers pressure as a general physics concept and fluid statics only. Atmospheric pressure SYSTEMS — pressure-gradient force, isobars, and how pressure differences generate wind — belong to Meteorology, not here; see the linked Meteorology topic for that application."
  ],
  relatedTopics: ["phy-atmospheric-pressure-physics", "phy-density", "c-forces-governing-wind"],
  content: true,
  buildsOn: ["phy-density", "phy-units-measurement"],
  leadsTo: ["phy-atmospheric-pressure-physics", "phy-archimedes-principle", "phy-fluid-dynamics"],
  usedIn: ["b-hydrostatic-equation", "f-pressure-instruments"]
},

{
  id: "phy-atmospheric-pressure-physics",
  sectionId: "PHY-C",
  order: 4,
  title: "Atmospheric Pressure as a Physics Concept",
  definition: "Atmospheric pressure is the force per unit area exerted by the weight of the column of air above a point — a direct application of fluid pressure principles to the air surrounding Earth.",
  keyFacts: [
    "Standard atmospheric pressure at sea level is approximately 101,325 Pa, equivalently 1013.25 mb/hPa or 29.92 in Hg",
    "Atmospheric pressure decreases with altitude, since there is progressively less air column weight above a higher point",
    "Because air is compressible (unlike most liquids), the P = ρgh relationship for atmospheric pressure isn't perfectly linear with altitude the way it is for water — but the underlying principle (more overlying mass = more pressure) is the same",
    "Barometers measure atmospheric pressure using this same fluid-pressure logic (a column of mercury balanced against the weight of the air column above it)"
  ],
  explanationSections: [
    { heading: "Where this topic's scope ends", body: "This topic covers atmospheric pressure purely as an application of physics pressure principles: what it is, why it decreases with altitude, and how it's measured. Everything about WHY atmospheric pressure varies horizontally across the globe, how those horizontal differences create the pressure-gradient force, and how that force drives wind and large-scale circulation is Meteorology content, not Physics — deliberately kept separate to avoid duplicating material across the two subjects." }
  ],
  examPoints: [
    "Standard sea-level pressure (101,325 Pa / 1013.25 mb) is the same number that appears in Meteorology's Forces Governing Wind topic — it's one physical fact used as a starting point in both subjects, not duplicated content"
  ],
  relatedTopics: ["phy-pressure-fluids", "c-forces-governing-wind"],
  content: true,
  buildsOn: ["phy-pressure-fluids", "phy-units-measurement"],
  leadsTo: ["b-hydrostatic-equation"],
  usedIn: ["b-hydrostatic-equation", "f-pressure-instruments", "env-air-pollution"]
},

// ============================= SECTION PHY-D: Heat & Thermodynamics =============================

{
  id: "phy-temperature-heat",
  sectionId: "PHY-D",
  order: 1,
  title: "Temperature, Heat & Specific Heat Capacity",
  definition: "Temperature is a measure of the average kinetic energy of particles in a substance; heat is the energy transferred between substances due to a temperature difference; specific heat capacity describes how much energy is needed to change a substance's temperature.",
  keyFacts: [
    "Temperature is measured in Celsius (°C), Kelvin (K), or Fahrenheit (°F); the Kelvin scale starts at absolute zero (0 K = −273.15°C), the theoretical point of minimum possible kinetic energy",
    "Heat is energy in transit due to a temperature difference — it always flows from a hotter object to a cooler one until thermal equilibrium is reached",
    "Specific heat capacity (c) is the amount of energy required to raise the temperature of 1 kg of a substance by 1°C (or 1 K)",
    "Water has an unusually high specific heat capacity (~4,200 J/kg°C), meaning it resists temperature change — a fact with major implications for climate moderation near large bodies of water"
  ],
  explanationSections: [
    { heading: "Temperature vs. heat — a critical distinction", body: "Temperature is an intensive property (doesn't depend on amount) describing how energetic particles are on average, while heat is the actual energy transferred and depends on the amount of substance involved. A small cup of boiling water and a full bathtub of warm water can have very different temperatures despite containing similar total heat energy, or similar temperatures despite containing very different total heat energy — the two concepts are related but distinct." }
  ],
  formula: {
    name: "Heat Energy (Specific Heat Capacity)",
    expression: "Q = m × c × ΔT",
    variables: [
      { symbol: "Q", meaning: "heat energy transferred (J)" },
      { symbol: "m", meaning: "mass (kg)" },
      { symbol: "c", meaning: "specific heat capacity (J/kg°C)" },
      { symbol: "ΔT", meaning: "change in temperature (°C or K)" }
    ]

  },
  examPoints: [
    "Water's high specific heat capacity is why coastal regions have milder temperature swings than inland regions at similar latitudes — the same principle Meteorology applies when discussing land vs. sea thermal contrast in local wind systems"
  ],
  relatedTopics: ["phy-thermal-expansion", "phy-heat-transfer-equilibrium", "c-local-seasonal-winds"],
  content: true,
  buildsOn: ["phy-units-measurement", "phy-states-of-matter"],
  leadsTo: ["phy-thermal-expansion", "phy-heat-transfer-equilibrium", "phy-thermodynamics-laws"],
  usedIn: ["a-vertical-structure", "b-heat-transfer"]
},

{
  id: "phy-thermal-expansion",
  sectionId: "PHY-D",
  order: 2,
  title: "Thermal Expansion",
  definition: "Thermal expansion is the tendency of matter to increase in volume or length as its temperature rises, because increased particle kinetic energy causes particles to move further apart on average.",
  keyFacts: [
    "Most solids, liquids, and gases expand when heated and contract when cooled",
    "Gases generally expand more than liquids for the same temperature change, and liquids expand more than solids, reflecting how loosely or tightly their particles are bound",
    "Linear expansion refers to change in length; this is the basis for expansion gaps in bridges, railway tracks, and building materials to prevent buckling in heat",
    "Water is a notable exception near freezing: it actually expands as it cools from 4°C to 0°C, becoming less dense as it approaches freezing — which is why ice floats"
  ],
  explanationSections: [
    { heading: "Why expansion gaps matter in engineering", body: "Bridges and railway tracks are built with small gaps or expansion joints specifically because materials measurably lengthen in heat and contract in cold; without these gaps, thermal expansion could cause enough compressive stress to buckle or warp the structure over repeated seasonal cycles." }
  ],
  examPoints: [
    "Water's anomalous expansion near freezing (expanding as it cools further toward 0°C) is the reason ice floats on liquid water rather than sinking — a frequently tested exception to the general 'heat = expand, cool = contract' rule"
  ],
  relatedTopics: ["phy-temperature-heat", "phy-states-of-matter"],
  content: true,
  buildsOn: ["phy-temperature-heat"],
  leadsTo: [],
  usedIn: []
},

{
  id: "phy-heat-transfer-equilibrium",
  sectionId: "PHY-D",
  order: 3,
  title: "Heat Transfer Mechanisms & Thermal Equilibrium",
  definition: "Heat transfers between objects or regions via conduction, convection, and radiation, always flowing from hotter to cooler until thermal equilibrium — equal temperature and no further net heat flow — is reached.",
  keyFacts: [
    "Conduction: heat transfer through direct contact, via particle-to-particle collisions; most effective in solids, especially metals",
    "Convection: heat transfer through the bulk movement of a fluid (liquid or gas), as warmer, less dense fluid rises and cooler, denser fluid sinks",
    "Radiation: heat transfer via electromagnetic waves, requiring no medium — the only mechanism that can transfer heat through a vacuum",
    "Thermal equilibrium: the state reached when two objects in contact (or radiative exchange) reach the same temperature, at which point net heat flow between them becomes zero",
    "Zeroth Law of Thermodynamics: if object A is in thermal equilibrium with object B, and B is in thermal equilibrium with object C, then A is also in thermal equilibrium with C — this is the basis for using thermometers as a valid, transitive measure of temperature"
  ],
  explanationSections: [
    { heading: "Why this list looks familiar from Meteorology", body: "These are the exact same three heat-transfer mechanisms and general definitions used in Meteorology's own Heat Transfer topic — that's intentional, not a duplication error. This topic establishes the general physics; Meteorology's version applies these same mechanisms specifically to how the atmosphere is heated (e.g. why conduction only matters within a few centimetres of the ground, or how convection drives thermals and cloud formation). Study the mechanism here, the atmospheric application there." }
  ],
  examPoints: [
    "Radiation is the only heat-transfer mechanism that works through a vacuum — this single fact explains how the Sun's energy reaches Earth across empty space",
    "The Zeroth Law is what justifies calling a thermometer reading a genuine, comparable 'temperature' at all — without it, temperature comparisons between separate objects wouldn't be logically guaranteed to be consistent"
  ],
  relatedTopics: ["phy-temperature-heat", "phy-thermodynamics-laws", "b-heat-transfer"],
  content: true,
  buildsOn: ["phy-temperature-heat"],
  leadsTo: ["phy-heat-transfer-mechanisms", "phy-thermodynamics-laws"],
  usedIn: ["b-heat-transfer", "b-radiation-laws"]
},

{
  id: "phy-thermodynamics-laws",
  sectionId: "PHY-D",
  order: 4,
  title: "Laws of Thermodynamics, Internal Energy & Latent Heat",
  definition: "The First and Second Laws of Thermodynamics govern how energy is conserved and how heat naturally flows; internal energy is the total kinetic and potential energy of a substance's particles; latent heat is the energy involved in a phase change without a temperature change.",
  keyFacts: [
    "First Law of Thermodynamics: energy cannot be created or destroyed, only converted between forms — a restatement of Conservation of Energy applied specifically to heat and work: ΔU = Q − W (change in internal energy equals heat added minus work done by the system)",
    "Second Law of Thermodynamics: heat naturally flows from hotter to cooler objects, never spontaneously the reverse, without external work being done; no heat engine can be 100% efficient at converting heat into useful work",
    "Internal energy is the sum of the kinetic and potential energy of all the particles within a substance — related to, but not identical to, temperature (which reflects only the average kinetic energy)",
    "Latent heat is the energy absorbed or released during a phase change (melting, freezing, boiling, condensing) at constant temperature: Q = mL, where L is the specific latent heat of the substance/process",
    "Latent heat of fusion applies to melting/freezing; latent heat of vaporization applies to boiling/condensing, and is typically much larger than latent heat of fusion for the same substance"
  ],
  explanationSections: [
    { heading: "Why the Second Law matters for engines and refrigerators", body: "The Second Law is why no engine can convert 100% of heat input into useful work — some energy is always lost as waste heat to the surroundings, setting a fundamental efficiency ceiling regardless of engineering quality. Refrigerators and air conditioners work by doing external work to force heat to flow 'backward' (cool interior to warm exterior), which the Second Law permits only because external work is being supplied — heat is never spontaneously moving uphill in temperature on its own." },
    { heading: "Latent heat's atmospheric significance", body: "This is one of the most direct overlaps with Meteorology: the latent heat released when water vapour condenses into liquid cloud droplets is the same physical process described here, and it's the energy source that powers thunderstorms, monsoons, and hurricanes in Meteorology's Adiabatic Processes and Tropical Cyclones topics. The physics (Q = mL) is identical; only the atmospheric-scale application differs." }
  ],
  formula: {
    name: "First Law of Thermodynamics & Latent Heat",
    expression: "ΔU = Q − W        Q = m × L",
    variables: [
      { symbol: "ΔU", meaning: "change in internal energy (J)" },
      { symbol: "Q", meaning: "heat added to the system (J)" },
      { symbol: "W", meaning: "work done BY the system (J)" },
      { symbol: "m", meaning: "mass undergoing phase change (kg)" },
      { symbol: "L", meaning: "specific latent heat (J/kg)" }
    ]

  },
  examPoints: [
    "During a phase change, all added heat energy goes into breaking/forming molecular bonds (changing internal energy's potential component), not into raising temperature — this is why temperature plateaus during melting or boiling",
    "Latent heat of vaporization for water (~2,260 kJ/kg) is roughly seven times larger than its latent heat of fusion (~334 kJ/kg) — boiling water takes far more energy than melting the same mass of ice"
  ],
  relatedTopics: ["phy-heat-transfer-equilibrium", "phy-states-of-matter", "d-adiabatic-cloud-formation", "b-lapse-rates"],
  content: true,
  buildsOn: ["phy-work-energy", "phy-temperature-heat", "phy-heat-transfer-equilibrium"],
  leadsTo: ["phy-kinetic-theory"],
  usedIn: ["b-lapse-rates", "b-static-stability", "d-adiabatic-cloud-formation", "d-moisture-metrics", "env-energy-sources", "env-climate-change-response"]
},

// ============================= SECTION PHY-E: Waves & Sound =============================

{
  id: "phy-wave-properties",
  sectionId: "PHY-E",
  order: 1,
  title: "Wave Properties",
  definition: "Waves transfer energy from one place to another through a repeating oscillation, characterized by frequency, wavelength, amplitude, and period, related by the universal wave equation.",
  keyFacts: [
    "Frequency (f): number of complete oscillations per second, measured in Hertz (Hz)",
    "Wavelength (λ): the distance between two equivalent points on consecutive waves (e.g. crest to crest), measured in metres",
    "Amplitude: the maximum displacement from the equilibrium/rest position, related to the wave's energy — greater amplitude means greater energy carried",
    "Period (T): the time for one complete oscillation, T = 1/f",
    "Wave speed (v) = frequency × wavelength — the universal wave equation, applicable to all wave types"
  ],
  explanationSections: [
    { heading: "The relationship between frequency and wavelength", body: "Since wave speed (v = fλ) is often fixed by the medium a wave travels through, frequency and wavelength are inversely related for a given wave speed — a higher-frequency wave in the same medium necessarily has a shorter wavelength, and vice versa. This relationship underlies both the electromagnetic spectrum (Light & Optics topic) and how pitch relates to sound wave properties." }
  ],
  formula: {
    name: "Wave Equation",
    expression: "v = f × λ        T = 1/f",
    variables: [
      { symbol: "v", meaning: "wave speed (m/s)" },
      { symbol: "f", meaning: "frequency (Hz)" },
      { symbol: "λ", meaning: "wavelength (m)" },
      { symbol: "T", meaning: "period (s)" }
    ]

  },
  examPoints: [
    "Amplitude relates to energy/intensity, NOT to frequency or wavelength — these are independent properties, a common point of confusion"
  ],
  relatedTopics: ["phy-wave-types", "phy-sound-waves"],
  content: true,
  buildsOn: ["math-3-2", "phy-units-measurement"],
  leadsTo: ["phy-wave-types", "phy-sound-waves"],
  usedIn: ["phy-electromagnetic-induction", "b-radiation-laws", "earth-h2"]
},

{
  id: "phy-wave-types",
  sectionId: "PHY-E",
  order: 2,
  title: "Types of Waves",
  definition: "Waves are classified as mechanical or electromagnetic based on whether they require a medium, and as transverse or longitudinal based on the direction of particle oscillation relative to wave travel.",
  keyFacts: [
    "Mechanical waves require a physical medium to travel through (e.g. sound, water waves, seismic waves) and cannot travel through a vacuum",
    "Electromagnetic (EM) waves require no medium and can travel through a vacuum, since they're oscillations of electric and magnetic fields, not physical particles — travel at the speed of light (~3×10⁸ m/s) in a vacuum",
    "Transverse waves: particle oscillation is perpendicular to the direction of wave travel (e.g. light, water surface waves)",
    "Longitudinal waves: particle oscillation is parallel to (along) the direction of wave travel, forming compressions and rarefactions (e.g. sound waves)"
  ],
  explanationSections: [
    { heading: "Why sound can't travel through space", body: "Sound is a mechanical, longitudinal wave that relies on particle-to-particle collisions to propagate — with no particles present in the vacuum of space, there is no medium to carry the compressions and rarefactions, so sound simply cannot travel there. Light and other EM waves have no such requirement, which is why sunlight reaches Earth across empty space but sound from an explosion in space would not." }
  ],
  examPoints: [
    "Mechanical vs. electromagnetic classifies waves by WHETHER they need a medium; transverse vs. longitudinal classifies them by HOW particles oscillate — these are two independent classification systems, not the same distinction restated"
  ],
  relatedTopics: ["phy-wave-properties", "phy-sound-waves", "phy-lenses-mirrors-em-spectrum"],
  content: true,
  buildsOn: ["phy-wave-properties"],
  leadsTo: ["phy-sound-waves", "phy-reflection-refraction"],
  usedIn: ["earth-h2"]
},

{
  id: "phy-sound-waves",
  sectionId: "PHY-E",
  order: 3,
  title: "Sound Waves",
  definition: "Sound is a longitudinal, mechanical wave produced by vibrating objects, requiring a medium to travel and generally moving faster through denser, more rigid media.",
  keyFacts: [
    "Speed of sound in air at approximately 20°C is roughly 343 m/s",
    "Sound travels faster through solids than liquids, and faster through liquids than gases, because particles are more tightly bound and can transmit vibrations more efficiently",
    "Pitch corresponds to frequency: higher frequency sound is perceived as higher pitch",
    "Loudness corresponds to amplitude: greater amplitude is perceived as louder sound",
    "The speed of sound in a given medium generally increases with temperature, since warmer particles move faster and transmit collisions more quickly"
  ],
  explanationSections: [
    { heading: "Why sound is faster in solids than air", body: "Sound propagates through particle collisions; in solids, particles are tightly packed and strongly bonded, so a vibration passes from particle to particle almost immediately. In gases like air, particles are far apart and must physically travel some distance before colliding, slowing the overall propagation of the wave considerably compared to solids." }
  ],
  examPoints: [
    "Sound speed order from fastest to slowest medium: solids > liquids > gases — the reverse of what many students initially assume, since sound seems 'thinner'/easier to imagine in air"
  ],
  relatedTopics: ["phy-wave-types", "phy-wave-properties"],
  content: true,
  buildsOn: ["phy-wave-properties", "phy-wave-types", "math-3-3"],
  leadsTo: ["phy-doppler-effect"],
  usedIn: ["phy-doppler-effect"]
},

// ============================= SECTION PHY-F: Light & Optics =============================

{
  id: "phy-reflection-refraction",
  sectionId: "PHY-F",
  order: 1,
  title: "Reflection & Refraction",
  definition: "Reflection is the bouncing back of light from a surface; refraction is the bending of light as it passes between media of different optical densities, due to a change in speed.",
  keyFacts: [
    "Law of Reflection: the angle of incidence equals the angle of reflection, both measured from the normal (a line perpendicular to the surface)",
    "Refraction occurs because light changes speed when entering a different medium — slowing down when entering a denser medium (e.g. air to water), and speeding up when entering a less dense one",
    "Light bends toward the normal when slowing down (entering a denser medium), and away from the normal when speeding up (entering a less dense medium)",
    "Snell's Law relates the angles of incidence and refraction to the refractive indices of the two media: n₁sin(θ₁) = n₂sin(θ₂)"
  ],
  explanationSections: [
    { heading: "Why a straw looks bent in a glass of water", body: "Light travelling from the submerged part of the straw through water then air bends at the water-air boundary due to refraction, since light speeds up moving from the denser water into less-dense air. The eye interprets light as having travelled in a straight line, so the apparent position of the submerged part appears shifted from its true position — creating the visual illusion of a bent straw." }
  ],
  formula: {
    name: "Snell's Law",
    expression: "n₁ sin(θ₁) = n₂ sin(θ₂)",
    variables: [
      { symbol: "n₁, n₂", meaning: "refractive indices of medium 1 and medium 2" },
      { symbol: "θ₁", meaning: "angle of incidence (from the normal)" },
      { symbol: "θ₂", meaning: "angle of refraction (from the normal)" }
    ]

  },
  examPoints: [
    "Angles in the Law of Reflection and Snell's Law are always measured from the NORMAL (perpendicular to the surface), not from the surface itself — a frequently made measurement error"
  ],
  relatedTopics: ["phy-diffraction-interference", "phy-lenses-mirrors-em-spectrum"],
  content: true,
  buildsOn: ["phy-wave-properties", "math-4-1"],
  leadsTo: ["phy-diffraction-interference", "phy-lenses-mirrors-em-spectrum"],
  usedIn: ["phy-lens-mirror-imaging", "earth-k2"]
},

{
  id: "phy-diffraction-interference",
  sectionId: "PHY-F",
  order: 2,
  title: "Diffraction & Interference",
  definition: "Diffraction is the bending/spreading of waves around obstacles or through openings; interference is the combination of two or more waves, producing constructive or destructive effects depending on their relative phase.",
  keyFacts: [
    "Diffraction is most noticeable when the size of the obstacle or gap is comparable to the wavelength of the wave",
    "Constructive interference occurs when waves are in phase (crests align with crests), producing a larger combined amplitude",
    "Destructive interference occurs when waves are out of phase (crest aligns with trough), producing a reduced or cancelled combined amplitude",
    "Both diffraction and interference are wave-specific phenomena — they don't occur for simple particle behavior, and are used as key evidence for the wave nature of light"
  ],
  explanationSections: [
    { heading: "Why diffraction depends on relative size", body: "A wave passing through a very wide opening (relative to its wavelength) travels through in an essentially straight beam with little visible spreading, while the same wave passing through a narrow gap (comparable to or smaller than its wavelength) spreads out noticeably on the far side — this is why sound (long wavelength) diffracts around corners easily, while visible light (very short wavelength) shows diffraction effects only around correspondingly tiny obstacles or slits." }
  ],
  examPoints: [
    "Interference and diffraction together are the classic experimental evidence (e.g. the double-slit experiment) that light behaves as a wave, not purely as a stream of particles"
  ],
  relatedTopics: ["phy-reflection-refraction", "phy-wave-properties"],
  content: true,
  buildsOn: ["phy-reflection-refraction"],
  leadsTo: [],
  usedIn: ["f-remote-sensing"]
},

{
  id: "phy-lenses-mirrors-em-spectrum",
  sectionId: "PHY-F",
  order: 3,
  title: "Lenses, Mirrors & the Electromagnetic Spectrum",
  definition: "Lenses and mirrors form images by refracting or reflecting light respectively; the electromagnetic spectrum organizes all EM waves by wavelength/frequency, from radio waves to gamma rays.",
  keyFacts: [
    "Convex (converging) lenses bend light rays inward toward a focal point; concave (diverging) lenses spread light rays outward",
    "Concave mirrors converge reflected light; convex mirrors diverge reflected light; plane (flat) mirrors produce an upright, same-size virtual image",
    "The electromagnetic spectrum, ordered from longest wavelength/lowest frequency to shortest wavelength/highest frequency: radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays",
    "Visible light occupies only a very narrow band of the full EM spectrum, roughly 400–700 nanometres in wavelength",
    "All EM waves travel at the same speed in a vacuum (the speed of light, ~3×10⁸ m/s), differing only in wavelength and frequency, and therefore in energy"
  ],
  explanationSections: [
    { heading: "Why this section stays foundational, not atmospheric", body: "This topic covers the EM spectrum as a physics concept — its ordering, what distinguishes each band, and basic optical behavior of lenses and mirrors. How specific bands (infrared, microwave, visible) are actually used to observe weather — Doppler radar, satellite visible/IR/water-vapour imagery — is Meteorology's Remote Sensing topic, which assumes this physics as its foundation rather than re-explaining it." }
  ],
  examPoints: [
    "Memorize the EM spectrum order exactly — it's a frequently tested direct-recall sequence: radio → microwave → infrared → visible → ultraviolet → X-ray → gamma ray (increasing frequency/energy, decreasing wavelength)"
  ],
  relatedTopics: ["phy-reflection-refraction", "phy-wave-types", "f-remote-sensing"],
  content: true,
  buildsOn: ["phy-reflection-refraction"],
  leadsTo: ["phy-lens-mirror-imaging", "phy-electromagnetic-induction"],
  usedIn: ["b-radiation-laws", "f-remote-sensing"]
},

// ============================= SECTION PHY-G: Electricity =============================

{
  id: "phy-electric-charge-coulomb",
  sectionId: "PHY-G",
  order: 1,
  title: "Electric Charge & Coulomb's Law",
  definition: "Electric charge is a fundamental property of matter that can be positive or negative; Coulomb's Law describes the force between two charged objects.",
  keyFacts: [
    "Charge is quantized, existing in discrete multiples of the elementary charge, e ≈ 1.6×10⁻¹⁹ Coulombs (the charge on a single proton or electron)",
    "Like charges repel; unlike charges attract",
    "Charge is conserved: it cannot be created or destroyed, only transferred between objects",
    "Coulomb's Law: the electrostatic force between two point charges is proportional to the product of the charges and inversely proportional to the square of the distance between them"
  ],
  explanationSections: [
    { heading: "The inverse-square relationship", body: "Because Coulomb's Law depends on 1/r², doubling the distance between two charges reduces the force between them to one-quarter of its original value, not half — this rapid fall-off with distance is a pattern shared with Newton's Law of Universal Gravitation, which has the same mathematical form despite describing a completely different force." }
  ],
  formula: {
    name: "Coulomb's Law",
    expression: "F = k × (q₁ × q₂) / r²",
    variables: [
      { symbol: "F", meaning: "electrostatic force (N)" },
      { symbol: "k", meaning: "Coulomb's constant (≈8.99×10⁹ N·m²/C²)" },
      { symbol: "q₁, q₂", meaning: "magnitudes of the two charges (C)" },
      { symbol: "r", meaning: "distance between the charges (m)" }
    ]

  },
  examPoints: [
    "Coulomb's Law and Newton's Law of Universal Gravitation share the same inverse-square mathematical structure — a useful pattern to recognize across topics"
  ],
  relatedTopics: ["phy-electric-field-potential", "phy-universal-gravitation"],
  content: true,
  buildsOn: ["phy-units-measurement", "math-3-1"],
  leadsTo: ["phy-electric-field-potential"],
  usedIn: ["phy-current-voltage-resistance"]
},

{
  id: "phy-electric-field-potential",
  sectionId: "PHY-G",
  order: 2,
  title: "Electric Field & Electric Potential",
  definition: "An electric field is the region around a charge where another charge would experience a force; electric potential describes the potential energy per unit charge at a point in that field.",
  keyFacts: [
    "Electric field (E) at a point = Force per unit charge experienced by a small test charge placed there",
    "Field lines point away from positive charges and toward negative charges, by convention",
    "Electric potential (V) = work done per unit charge to move a charge from a reference point (usually infinity) to that point, measured in Volts",
    "Electric potential difference (voltage) between two points drives current flow in a circuit, covered in the next topic"
  ],
  explanationSections: [
    { heading: "Field vs. potential — a force vs. energy distinction", body: "Electric field describes force per unit charge (a vector, with direction), while electric potential describes energy per unit charge (a scalar, no direction) — the two are related (field is the rate of change of potential with position), similar to how force and potential energy are related in gravity, but they answer different questions: 'which way and how hard would a charge be pushed' vs. 'how much energy would a charge have at this point'." }
  ],
  examPoints: [
    "Electric field is a vector (has direction); electric potential is a scalar (no direction) — this distinction mirrors force vs. energy elsewhere in physics"
  ],
  relatedTopics: ["phy-electric-charge-coulomb", "phy-current-voltage-resistance"],
  content: true,
  buildsOn: ["phy-electric-charge-coulomb"],
  leadsTo: ["phy-current-voltage-resistance", "phy-capacitance"],
  usedIn: []
},

{
  id: "phy-current-voltage-resistance",
  sectionId: "PHY-G",
  order: 3,
  title: "Current, Voltage, Resistance & Ohm's Law",
  definition: "Electric current is the flow of charge; voltage is the potential difference driving that flow; resistance opposes the flow; Ohm's Law relates the three quantities for many conductors.",
  keyFacts: [
    "Current (I) = charge (Q) / time (t), measured in Amperes (A); conventionally defined as the direction positive charge would flow (opposite to actual electron flow in a wire)",
    "Voltage (V), or potential difference, is measured in Volts and represents the energy given to each unit of charge as it passes through a component",
    "Resistance (R), measured in Ohms (Ω), describes how much a component opposes current flow",
    "Ohm's Law: V = I × R, valid for 'ohmic' conductors where resistance stays constant regardless of voltage/current (e.g. most metal wires at constant temperature)",
    "Resistance in a wire increases with length, decreases with cross-sectional area, and depends on the material's resistivity — and generally increases with temperature for metals"
  ],
  explanationSections: [
    { heading: "Why current direction is 'backwards' by convention", body: "Conventional current is defined as the direction positive charge would flow, a convention established before electrons (the actual charge carriers in most wires) were discovered to be negatively charged. Electrons therefore physically flow in the opposite direction to conventional current — this doesn't change any of the mathematics, but is worth knowing when reasoning about the underlying physical picture." }
  ],
  formula: {
    name: "Ohm's Law",
    expression: "V = I × R",
    variables: [
      { symbol: "V", meaning: "voltage / potential difference (Volts)" },
      { symbol: "I", meaning: "current (Amperes)" },
      { symbol: "R", meaning: "resistance (Ohms)" }
    ]

  },
  examPoints: [
    "Not all conductors are 'ohmic' — components like filament lamps and diodes have resistance that changes with current/voltage/temperature, so V = IR still applies at any instant, but R itself isn't a fixed constant for these components"
  ],
  relatedTopics: ["phy-electric-field-potential", "phy-circuits-power-energy"],
  content: true,
  buildsOn: ["phy-electric-field-potential"],
  leadsTo: ["phy-circuits-power-energy"],
  usedIn: ["phy-circuits-power-energy", "phy-transformers-ac"]
},

{
  id: "phy-circuits-power-energy",
  sectionId: "PHY-G",
  order: 4,
  title: "Circuits, Electrical Power & Energy",
  definition: "Circuit components can be connected in series or parallel, each with characteristic current and voltage behavior; electrical power and energy describe the rate and total amount of energy transferred by a circuit.",
  keyFacts: [
    "Series circuits: components share the same current throughout; total resistance is the sum of individual resistances (R_total = R₁ + R₂ + ...); voltage divides across components",
    "Parallel circuits: components share the same voltage across each branch; total resistance is found from 1/R_total = 1/R₁ + 1/R₂ + ...; current divides across branches",
    "Electrical power: P = I × V = I²R = V²/R (all equivalent forms, useful depending on which quantities are known)",
    "Electrical energy transferred = Power × time (E = Pt), the basis for how electricity usage/billing is calculated (typically in kilowatt-hours)"
  ],
  explanationSections: [
    { heading: "Why one bulb failing can break a whole series circuit but not a parallel one", body: "In a series circuit, there is only one path for current, so if any single component fails (creating a break), current stops flowing through the entire circuit — all components go out together. In a parallel circuit, each branch is an independent path, so a failure in one branch doesn't interrupt current flow through the others, which is why household wiring uses parallel circuits — one appliance failing shouldn't cut power to the whole house." }
  ],
  formula: {
    name: "Series/Parallel Resistance & Electrical Power",
    expression: "Series: R_total = R₁ + R₂ + ...      Parallel: 1/R_total = 1/R₁ + 1/R₂ + ...      P = IV = I²R = V²/R",
    variables: [
      { symbol: "R_total", meaning: "total circuit resistance (Ω)" },
      { symbol: "P", meaning: "electrical power (Watts)" },
      { symbol: "I", meaning: "current (A)" },
      { symbol: "V", meaning: "voltage (V)" }
    ]

  },
  examPoints: [
    "Series: same current, voltage divides. Parallel: same voltage, current divides — these two rules, correctly matched, resolve nearly all basic circuit analysis questions"
  ],
  relatedTopics: ["phy-current-voltage-resistance", "phy-power-efficiency"],
  content: true,
  buildsOn: ["phy-current-voltage-resistance", "phy-power-efficiency"],
  leadsTo: ["phy-capacitance", "phy-transformers-ac"],
  usedIn: ["env-energy-sources"]
},

// ============================= SECTION PHY-H: Magnetism & Electromagnetism =============================

{
  id: "phy-magnetic-fields-force",
  sectionId: "PHY-H",
  order: 1,
  title: "Magnetic Fields, Force & Electromagnets",
  definition: "Magnetic fields surround magnets and current-carrying conductors, exerting force on other magnets or moving charges; electromagnets use electric current to produce a controllable magnetic field.",
  keyFacts: [
    "Magnetic field lines point from the North pole to the South pole outside a magnet, by convention",
    "Like magnetic poles repel; unlike poles attract — directly analogous to electric charge behavior",
    "A current-carrying wire produces a circular magnetic field around itself; the field's direction can be found using the right-hand rule",
    "An electromagnet is created by wrapping a current-carrying coil around a magnetic core (typically iron); its field strength increases with current, number of coil turns, and use of a suitable core material",
    "Unlike a permanent magnet, an electromagnet's field can be switched on/off and its strength adjusted by controlling the current"
  ],
  explanationSections: [
    { heading: "Why electromagnets are used instead of permanent magnets in many applications", body: "The controllability of electromagnets — switching the field on or off, and adjusting its strength via current — makes them essential for applications like electric motors, MRI machines, and industrial cranes for lifting scrap metal, where a fixed, always-on magnetic field would be far less useful than one that can be precisely controlled." }
  ],
  examPoints: [
    "A magnetic field exists around ANY current-carrying wire, not just around coiled/electromagnet configurations — the coil and core simply concentrate and strengthen the naturally-occurring field"
  ],
  relatedTopics: ["phy-electromagnetic-induction"],
  content: true,
  buildsOn: ["phy-electric-charge-coulomb"],
  leadsTo: ["phy-electromagnetic-induction"],
  usedIn: ["earth-a2", "earth-k3"]
},

{
  id: "phy-electromagnetic-induction",
  sectionId: "PHY-H",
  order: 2,
  title: "Electromagnetic Induction & EM Waves",
  definition: "Electromagnetic induction is the generation of an electric current from a changing magnetic field, the reverse relationship of how currents produce magnetic fields, and the basis for how electromagnetic waves propagate.",
  keyFacts: [
    "Faraday's Law: a changing magnetic flux through a conductor (loop or coil) induces an electromotive force (EMF), which drives a current if the circuit is closed",
    "Lenz's Law: the induced current flows in a direction that opposes the change in magnetic flux that caused it — a specific application of Conservation of Energy to electromagnetic induction",
    "This is the working principle behind electric generators, which convert mechanical motion (rotating a coil in a magnetic field) into electrical energy",
    "Electromagnetic waves are self-propagating oscillations of electric and magnetic fields, each field regenerating the other as the wave travels, requiring no medium — connecting directly back to the EM spectrum covered in Light & Optics"
  ],
  explanationSections: [
    { heading: "The symmetry between motors and generators", body: "An electric motor uses current flowing through a magnetic field to produce mechanical motion (force on a current-carrying conductor); a generator does the reverse — uses mechanical motion of a conductor through a magnetic field to induce current. The same physical setup can function as either a motor or a generator depending on whether electrical energy or mechanical energy is being supplied as the input." }
  ],
  examPoints: [
    "Lenz's Law (the induced current opposes the change that created it) is a direct consequence of Conservation of Energy — if the induced current instead reinforced the change, it would be creating energy from nothing"
  ],
  relatedTopics: ["phy-magnetic-fields-force", "phy-lenses-mirrors-em-spectrum"],
  content: true,
  buildsOn: ["phy-magnetic-fields-force", "phy-lenses-mirrors-em-spectrum"],
  leadsTo: ["phy-transformers-ac"],
  usedIn: ["b-radiation-laws", "f-remote-sensing", "a-ionosphere-exosphere"]
},

// ============================= SECTION PHY-I: Modern Physics (low priority) =============================

{
  id: "phy-atomic-structure",
  sectionId: "PHY-I",
  order: 1,
  title: "Atomic Structure & the Nucleus",
  definition: "Atoms consist of a dense central nucleus (protons and neutrons) surrounded by orbiting electrons; the number of protons defines an element, while isotopes of the same element vary in neutron number.",
  keyFacts: [
    "Protons: positively charged, found in the nucleus; atomic number = number of protons, defining the element",
    "Neutrons: no charge (neutral), found in the nucleus alongside protons; mass number = number of protons + neutrons",
    "Electrons: negatively charged, occupy the space around the nucleus in a neutral atom, equal in number to protons",
    "Isotopes: atoms of the same element (same proton number) with different numbers of neutrons, and therefore different mass numbers",
    "The nucleus is extremely small relative to the overall size of the atom, but contains almost all of the atom's mass"
  ],
  explanationSections: [
    { heading: "Scope note for this topic", body: "Per the syllabus's own guidance, this topic covers only the basics of atomic structure needed as a foundation for radioactivity and nuclear reactions — not detailed quantum mechanical models of electron behavior, which fall outside the intended scope for this exam preparation." }
  ],
  examPoints: [
    "Atomic number (protons) defines WHICH element an atom is; mass number (protons + neutrons) can vary between isotopes of the same element"
  ],
  relatedTopics: ["phy-radioactivity-nuclear"],
  content: true,
  buildsOn: ["phy-units-measurement", "math-3-4"],
  leadsTo: ["phy-radioactivity-nuclear"],
  usedIn: ["phy-radioactivity-nuclear"]
},

{
  id: "phy-radioactivity-nuclear",
  sectionId: "PHY-I",
  order: 2,
  title: "Radioactivity, Nuclear Fission & Fusion",
  definition: "Radioactivity is the spontaneous emission of particles or energy from unstable atomic nuclei; nuclear fission splits heavy nuclei to release energy, while nuclear fusion combines light nuclei, releasing even more energy per unit mass.",
  keyFacts: [
    "Alpha decay: emission of an alpha particle (2 protons + 2 neutrons, equivalent to a helium nucleus) — least penetrating, stopped by paper or skin",
    "Beta decay: emission of a beta particle (a high-speed electron or positron) — more penetrating than alpha, stopped by a few mm of aluminium",
    "Gamma decay: emission of high-energy electromagnetic radiation — most penetrating, requires thick lead or concrete to substantially block",
    "Nuclear fission: a heavy nucleus (e.g. uranium-235) splits into smaller nuclei when struck by a neutron, releasing energy and additional neutrons that can sustain a chain reaction — the basis of nuclear power plants",
    "Nuclear fusion: light nuclei (e.g. hydrogen isotopes) combine to form a heavier nucleus, releasing energy — the process that powers the Sun and stars, and releases more energy per unit mass than fission"
  ],
  explanationSections: [
    { heading: "Fission vs. fusion — opposite processes, both releasing energy", body: "Fission releases energy by splitting large, unstable nuclei apart; fusion releases energy by combining small nuclei together. Both processes move toward more stable nuclear configurations (roughly, toward iron on the scale of nuclear stability), which is why both directions — splitting heavy elements or combining light ones — can release energy, despite being opposite operations." }
  ],
  examPoints: [
    "Penetrating power order: alpha (least) < beta < gamma (most) — this ordering is a frequently tested direct-recall fact, along with which material stops each type",
    "Per the syllabus's own scope guidance, detailed nuclear physics, particle physics, and quantum mechanics are explicitly out of scope here — this topic stays at the basics-recognition level only"
  ],
  relatedTopics: ["phy-atomic-structure"],
  content: true,
  buildsOn: ["phy-atomic-structure", "math-3-1", "math-3-3"],
  leadsTo: ["phy-half-life-decay", "phy-fission-chain-reaction"],
  usedIn: ["earth-a4", "earth-c2", "earth-k4", "env-energy-sources", "env-soil-and-waste"]
},

// ============================= SECTION PHY-J: Universal Gravitation (low priority) =============================

{
  id: "phy-universal-gravitation",
  sectionId: "PHY-J",
  order: 1,
  title: "Newton's Law of Universal Gravitation",
  definition: "Newton's Law of Universal Gravitation states that every mass attracts every other mass with a force proportional to the product of their masses and inversely proportional to the square of the distance between them, underlying orbital motion.",
  keyFacts: [
    "Gravitational force: F = G × (m₁ × m₂) / r², where G is the universal gravitational constant (≈6.67×10⁻¹¹ N·m²/kg²)",
    "This single law explains both objects falling to Earth and the orbital motion of planets and satellites — the same force, described at different scales",
    "Gravitational field strength (g) at a location = GM/r², where M is the mass of the attracting body (e.g. Earth) and r is the distance from its center",
    "For a stable circular orbit, gravitational force provides exactly the centripetal force needed to keep an orbiting body moving in a curved path rather than a straight line"
  ],
  explanationSections: [
    { heading: "Scope note for this topic", body: "Per the syllabus's own guidance, this topic covers the law itself, gravitational field strength, and the basic concept of orbits — not detailed orbital mechanics (elliptical orbits, Kepler's laws in depth) or broader astrophysics, which are intentionally out of scope for this exam preparation." },
    { heading: "Same mathematical form as Coulomb's Law", body: "Universal Gravitation shares the same inverse-square structure as Coulomb's Law for electric force (F ∝ 1/r²) — both describe how force weakens rapidly with distance, despite describing entirely different fundamental interactions (gravitational vs. electromagnetic)." }
  ],
  formula: {
    name: "Newton's Law of Universal Gravitation",
    expression: "F = G × (m₁ × m₂) / r²",
    variables: [
      { symbol: "F", meaning: "gravitational force (N)" },
      { symbol: "G", meaning: "universal gravitational constant (≈6.67×10⁻¹¹ N·m²/kg²)" },
      { symbol: "m₁, m₂", meaning: "the two masses (kg)" },
      { symbol: "r", meaning: "distance between the centers of the two masses (m)" }
    ]

  },
  examPoints: [
    "This law and Coulomb's Law both follow an inverse-square relationship — recognizing this shared mathematical pattern is a useful cross-topic exam insight"
  ],
  relatedTopics: ["phy-gravity-weight-friction", "phy-electric-charge-coulomb"],
  content: true,
  buildsOn: ["phy-gravity-weight-friction", "math-3-1"],
  leadsTo: [],
  usedIn: ["earth-a5"]
},
// ============================= SECTION PHY-K: Units, Measurement & Vectors =============================

{
  id: "phy-units-measurement",
  sectionId: "PHY-K",
  order: 1,
  title: "SI Units, Prefixes & Dimensional Analysis",
  definition: "The Système International (SI) provides seven standardized base units for the fundamental quantities in physics; prefixes extend these to convenient scales, and dimensional analysis uses the units themselves to check whether equations are physically valid.",
  keyFacts: [
    "Seven SI base units: metre (m) for length, kilogram (kg) for mass, second (s) for time, ampere (A) for current, kelvin (K) for temperature, mole (mol) for amount, candela (cd) for luminous intensity",
    "Derived units are built from base units — e.g. newton (N) = kg·m/s², joule (J) = kg·m²/s², watt (W) = J/s, pascal (Pa) = N/m²",
    "Common SI prefixes (large to small): giga (G, 10⁹), mega (M, 10⁶), kilo (k, 10³), centi (c, 10⁻²), milli (m, 10⁻³), micro (μ, 10⁻⁶), nano (n, 10⁻⁹)",
    "Dimensional analysis checks equation validity by verifying both sides have the same dimensions (e.g. v = d/t gives m/s on both sides, confirming the equation is dimensionally consistent)",
    "Unit conversion uses multiplicative ratios equal to 1 (e.g. 1 km = 1000 m, so 5 km × (1000 m / 1 km) = 5000 m)"
  ],
  explanationSections: [
    { heading: "Why SI units matter", body: "Without a standardized system of units, scientific communication and engineering would be nearly impossible — a 'foot' in one country differs from another's, and recipes or formulas using 'cups' or 'pounds' cannot be reliably transferred between systems. The SI system provides a universal, precisely-defined set of units that allow measurements to be compared unambiguously worldwide." },
    { heading: "Dimensional analysis as an equation-checker", body: "Dimensional analysis is a powerful sanity-check tool: if the dimensions on both sides of an equation don't match, the equation is definitely wrong, regardless of any numerical calculation. For example, if a formula claimed 'force = mass × velocity', the dimensions wouldn't match (N vs. kg·m/s), immediately flagging the error even before plugging in numbers." }
  ],
  formula: {
    name: "Common unit conversions",
    expression: "1 \\text{ km} = 1000 \\text{ m} \\quad 1 \\text{ h} = 3600 \\text{ s} \\quad 1 \\text{ m/s} = 3.6 \\text{ km/h}",
    variables: [
      { symbol: "\\text{km, m, h, s, m/s, km/h}", meaning: "kilometre, metre, hour, second, metres per second, kilometres per hour" }
    ]

  },
  examPoints: [
    "Dimensional analysis can catch errors but cannot prove an equation is correct — it only proves it's not obviously wrong",
    "The SI system has seven BASE units; all other units (newtons, joules, watts, etc.) are DERIVED from combinations of these base units"
  ],
  commonMistakes: [
    "Confusing mass (kg) with weight (N) — mass is a base quantity, weight is a derived force quantity",
    "Forgetting that dimensional analysis only checks units, not the correctness of the equation itself"
  ],
  relatedTopics: ["phy-scalars-vectors", "phy-vector-operations"],
  content: true,
  buildsOn: ["math-2-2", "math-1-6", "math-3-4"],
  leadsTo: ["phy-scalars-vectors", "phy-kinematics", "phy-pressure-fluids"],
  usedIn: ["phy-temperature-heat", "phy-atmospheric-pressure-physics", "b-hydrostatic-equation", "b-radiation-laws", "f-pressure-instruments"]
},

{
  id: "phy-scalars-vectors",
  sectionId: "PHY-K",
  order: 2,
  title: "Scalars vs Vectors: Magnitude and Direction",
  definition: "Scalar quantities have only magnitude; vector quantities have both magnitude and direction. Distinguishing between them is essential for applying the right mathematical operations.",
  keyFacts: [
    "Scalar: has only magnitude (size). Examples: mass, temperature, time, distance, speed, energy",
    "Vector: has magnitude AND direction. Examples: displacement, velocity, acceleration, force, momentum, weight",
    "Two vectors are equal only if BOTH their magnitudes and directions match — a 5 N force pointing up is not equal to a 5 N force pointing right",
    "Vectors can be represented graphically as arrows, where the arrow length represents magnitude and the arrow direction shows direction",
    "Vector notation: bold (v), arrow above (→v), or with explicit components (vₓ, v_y)"
  ],
  explanationSections: [
    { heading: "Why the distinction matters for operations", body: "You can add scalars directly (3 kg + 5 kg = 8 kg), but you cannot simply add vector magnitudes — a 3 N force up plus a 4 N force right gives a 5 N force at an angle, not 7 N. Vector addition requires special methods (graphical or component-wise) because direction matters as much as magnitude for the result." },
    { heading: "Why this is essential for meteorology", body: "Meteorology uses vectors extensively — wind velocity (speed AND direction), pressure-gradient force, Coriolis force, and gravity all have both magnitude and direction. Understanding vectors here is the prerequisite for understanding how forces combine to create wind patterns in Meteorology's Forces Governing Wind topic." }
  ],
  commonMistakes: [
    "Treating speed and velocity as identical — speed is a scalar (e.g. 50 km/h), velocity is a vector (e.g. 50 km/h north)",
    "Assuming two vectors with the same magnitude are equal — direction matters equally"
  ],
  relatedTopics: ["phy-vector-operations", "phy-vector-applications", "c-forces-governing-wind"],
  content: true,
  buildsOn: ["math-7-1", "phy-units-measurement"],
  leadsTo: ["phy-vector-operations", "phy-kinematics"],
  usedIn: ["phy-vector-operations", "phy-vector-applications", "phy-newtons-laws", "c-forces-governing-wind", "b-coriolis-effect"]
},

{
  id: "phy-vector-operations",
  sectionId: "PHY-K",
  order: 3,
  title: "Vector Operations: Addition, Subtraction & Components",
  definition: "Vectors add and subtract by special rules that respect direction; decomposing vectors into perpendicular components makes calculations tractable.",
  keyFacts: [
    "Head-to-tail method: place the tail of the second vector at the head of the first; the resultant runs from the tail of the first to the head of the second",
    "Parallelogram method: complete a parallelogram with both vectors as adjacent sides; the diagonal from the common origin gives the resultant",
    "Component form: a vector v can be written as vₓ (horizontal) and v_y (vertical) components, where vₓ = v cos(θ) and v_y = v sin(θ) for angle θ from horizontal",
    "Vector addition via components: add x-components together, add y-components together, then recombine — much simpler than graphical methods for multiple vectors",
    "Vector subtraction: a − b is equivalent to a + (−b), where −b has the same magnitude as b but opposite direction"
  ],
  explanationSections: [
    { heading: "Why component decomposition is so powerful", body: "Component decomposition turns a 2D vector problem into two simple 1D problems that can be solved with ordinary arithmetic, then recombined. This is the standard approach used in physics, engineering, and meteorology for analysing forces, velocities, and accelerations in any direction." },
    { heading: "Why component method beats graphical for multiple vectors", body: "Graphical addition (head-to-tail or parallelogram) works well for two vectors, but becomes cumbersome for three or more — drawing accurate angles and lengths is error-prone. Component method scales easily: add all x-components, add all y-components, recombine, regardless of how many vectors are involved." }
  ],
  formula: {
    name: "Vector components and magnitude",
    expression: "v_x = v \\cos\\theta \\quad v_y = v \\sin\\theta \\quad |\\vec{v}| = \\sqrt{v_x^2 + v_y^2} \\quad \\theta = \\tan^{-1}(v_y / v_x)",
    variables: [
      { symbol: "v_x, v_y", meaning: "horizontal and vertical components of vector" },
      { symbol: "|\\vec{v}|", meaning: "magnitude of the vector" },
      { symbol: "\\theta", meaning: "angle from horizontal" }
    ]

  },
  examPoints: [
    "Two vectors can produce a zero resultant only if they are equal in magnitude AND opposite in direction",
    "Components must use the same angle reference — if one vector uses angle from horizontal and another uses angle from vertical, you cannot directly add their components"
  ],
  workedExample: {
    problem: "A boat moves 5 km east and 3 km north. Find the magnitude and direction of its displacement.",
    solution: "Components: 5 km (east/x-axis) and 3 km (north/y-axis). Magnitude = √(5² + 3²) = √(25+9) = √34 ≈ 5.83 km. Direction: tan⁻¹(3/5) = tan⁻¹(0.6) ≈ 31° north of east.",
    answer: "5.83 km at 31° north of east"
  },
  commonMistakes: [
    "Adding vector magnitudes instead of components: 3 + 4 = 7, NOT 5 (the correct 3-4-5 triangle answer)",
    "Confusing trig functions: cos for adjacent/hypotenuse, sin for opposite/hypotenuse, tan for opposite/adjacent"
  ],
  relatedTopics: ["phy-scalars-vectors", "phy-vector-applications", "phy-newtons-laws"],
  content: true,
  buildsOn: ["phy-scalars-vectors", "math-5-1", "math-5-2"],
  leadsTo: ["phy-vector-applications", "phy-kinematics", "phy-newtons-laws"],
  usedIn: ["phy-vector-applications", "phy-momentum-impulse", "c-forces-governing-wind"]
},

{
  id: "phy-vector-applications",
  sectionId: "PHY-K",
  order: 4,
  title: "Vector Applications: Force, Velocity, Wind & Wave Components",
  definition: "Vectors are applied throughout physics and atmospheric science wherever a quantity has both magnitude and direction — force, velocity, wind, wave direction, and many more.",
  keyFacts: [
    "Force vectors combine to give a net (resultant) force, which determines the object's acceleration via F = ma",
    "Velocity vectors combine when an object moves relative to a moving medium (e.g. an airplane's velocity relative to the ground = airplane's velocity through air + wind velocity)",
    "Wind has both speed AND direction: 'a 20 km/h wind from the northwest' specifies both magnitude (20) and direction (from NW, blowing toward SE)",
    "Vector resolution into components is essential for problems involving motion at an angle (e.g. projectile motion, a ball thrown at 30° above horizontal)",
    "Waves have direction too — wave direction and propagation direction are both vectors, with wave velocity being a vector quantity"
  ],
  explanationSections: [
    { heading: "Why vectors matter in atmospheric science", body: "Wind direction and speed together form a wind vector. Pressure-gradient force, Coriolis force, and friction are all vector forces acting on air parcels. To determine the actual wind direction and speed, meteorologists must add these force vectors — a process that depends entirely on the vector operations covered in the previous topic." },
    { heading: "Relative motion is a vector problem", body: "An airplane flying 'into a headwind' experiences a different ground speed than its airspeed because the wind vector subtracts from (or adds to) the airplane's velocity vector. Similarly, a swimmer crossing a river must account for the current's vector to actually reach the intended point on the other side." }
  ],
  formula: {
    name: "Relative velocity (general form)",
    expression: "\\vec{v}_{A/B} = \\vec{v}_A - \\vec{v}_B",
    variables: [
      { symbol: "\\vec{v}_{A/B}", meaning: "velocity of A relative to B" },
      { symbol: "\\vec{v}_A, \\vec{v}_B", meaning: "velocities of A and B in the same reference frame" }
    ]

  },
  examPoints: [
    "Wind direction is named for where it COMES FROM (a 'north wind' blows from north toward south) — this is opposite to the direction of motion, a common confusion",
    "Vector components allow motion at an angle to be split into horizontal and vertical parts, each analyzed independently"
  ],
  workedExample: {
    problem: "An airplane flies at 200 km/h due east relative to the air. A wind blows at 50 km/h from the north. Find the airplane's velocity relative to the ground.",
    solution: "Airplane's air velocity: 200 km/h east = (200, 0). Wind blows from north to south: 50 km/h south = (0, -50). Ground velocity = airplane + wind = (200, -50). Magnitude = √(200² + 50²) = √(40000 + 2500) = √42500 ≈ 206 km/h. Direction: tan⁻¹(50/200) = tan⁻¹(0.25) ≈ 14° south of east.",
    answer: "≈206 km/h at 14° south of east"
  },
  commonMistakes: [
    "Treating wind direction as where it's blowing TOWARD (wrong) rather than where it comes FROM (correct)",
    "Adding wind vector and airplane vector when they point in similar directions, when in fact the headwind/tailwind component should be considered separately"
  ],
  relatedTopics: ["phy-scalars-vectors", "phy-vector-operations", "phy-newtons-laws", "c-forces-governing-wind"],
  content: true,
  buildsOn: ["phy-vector-operations", "phy-newtons-laws"],
  leadsTo: ["c-forces-governing-wind"],
  usedIn: ["c-forces-governing-wind", "c-geostrophic-wind", "c-global-circulation"]
},

// ============================= SECTION PHY-C ADDITIONS: Fluid Dynamics =============================

{
  id: "phy-archimedes-principle",
  sectionId: "PHY-C",
  order: 5,
  title: "Archimedes' Principle & Buoyancy",
  definition: "Archimedes' Principle states that any object immersed in a fluid experiences an upward buoyant force equal to the weight of the fluid displaced by the object. This principle explains why some objects float and others sink.",
  keyFacts: [
    "Archimedes' Principle: the buoyant force on an object equals the weight of the fluid displaced by the object",
    "An object floats when its average density is less than the fluid's density; sinks when greater; is neutrally buoyant when equal",
    "Buoyant force depends only on the volume of fluid displaced, not on the object's mass or composition",
    "Apparent weight of submerged object = true weight - buoyant force",
    "A steel ship's hull encloses a large volume of air, making its overall average density (including air) less than water's — enabling it to float despite steel being denser than water"
  ],
  explanationSections: [
    { heading: "Why ships float and rocks sink", body: "A solid steel block sinks because its density (~7,800 kg/m³) is much greater than water's (1,000 kg/m³) — the buoyant force from the small volume of water it displaces is far less than the steel's weight. A steel ship, however, has a hollow hull filled with air, so its overall average density (steel mass / huge total volume) is much less than water's, and it floats." },
    { heading: "Real-world applications", body: "Submarines control buoyancy by adjusting water in ballast tanks: fill with water to submerge, push water out with compressed air to surface. Hot air balloons rise because the heated air inside is less dense than the surrounding cooler air — the buoyant force exceeds the balloon's total weight. Hydrometers measure fluid density by how deep they sink." }
  ],
  formula: {
    name: "Buoyant force (Archimedes' Principle)",
    expression: "F_b = \\rho_{fluid} \\times V_{displaced} \\times g",
    variables: [
      { symbol: "F_b", meaning: "buoyant force (N)" },
      { symbol: "\\rho_{fluid}", meaning: "density of the surrounding fluid (kg/m³)" },
      { symbol: "V_{displaced}", meaning: "volume of fluid displaced (m³)" },
      { symbol: "g", meaning: "gravitational field strength (m/s²)" }
    ]

  },
  examPoints: [
    "Buoyant force depends on the VOLUME of fluid displaced, not the weight of the object itself",
    "An object denser than the fluid still experiences buoyant force — but the buoyant force is less than the object's weight, so it sinks"
  ],
  commonMistakes: [
    "Thinking that heavier objects always sink — they do only if their AVERAGE DENSITY exceeds the fluid's, regardless of weight alone",
    "Confusing 'displaced fluid' with 'displaced water' — Archimedes' principle works for ANY fluid, not just water"
  ],
  relatedTopics: ["phy-density", "phy-pressure-fluids", "phy-fluid-dynamics"],
  content: true,
  buildsOn: ["phy-density", "phy-pressure-fluids", "phy-gravity-weight-friction"],
  leadsTo: ["phy-fluid-dynamics"],
  usedIn: ["b-static-stability", "d-adiabatic-cloud-formation"]
},

{
  id: "phy-fluid-dynamics",
  sectionId: "PHY-C",
  order: 6,
  title: "Bernoulli's Principle & Fluid Dynamics",
  definition: "Fluid dynamics describes fluids in motion. Bernoulli's principle states that in a flowing fluid, regions of higher flow speed have lower pressure. Continuity and Bernoulli's principle together explain many natural and engineered phenomena, from airplane lift to wind patterns.",
  keyFacts: [
    "Continuity equation: A₁v₁ = A₂v₂ — in a pipe with varying cross-section, fluid speed is higher where the area is smaller (volume flow rate is conserved)",
    "Bernoulli's Principle: in a flowing fluid, regions of higher flow speed have lower pressure, and regions of lower flow speed have higher pressure",
    "Viscosity: internal friction in fluids that opposes flow; air has low viscosity (flows easily), while honey has high viscosity (flows slowly)",
    "Laminar flow: smooth, layered flow at low speeds; turbulent flow: chaotic, mixing flow at high speeds (after a critical Reynolds number)",
    "Atmospheric application: wind blowing across a roof or between buildings creates pressure differences that can lift roofs or cause structural damage"
  ],
  explanationSections: [
    { heading: "Why a Venturi meter works", body: "A Venturi meter has a narrow constriction in a pipe; by the continuity equation, fluid speeds up through the constriction, and by Bernoulli's principle, pressure drops there. Measuring the pressure difference between the wide and narrow sections reveals the flow speed — a non-intrusive way to measure fluid flow used in everything from carburetors to blood flow measurement." },
    { heading: "How airplane wings generate lift", body: "An airplane wing (airfoil) is curved more on top than bottom, so air flows faster over the top than the bottom. By Bernoulli's principle, faster-moving air above the wing has lower pressure than the slower-moving air below — this pressure difference produces an upward lift force. (Note: this is a simplified explanation; real lift involves Newton's third law and circulation as well.)" }
  ],
  formula: {
    name: "Continuity equation & Bernoulli's equation",
    expression: "A_1 v_1 = A_2 v_2 \\quad P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}",
    variables: [
      { symbol: "A", meaning: "cross-sectional area (m²)" },
      { symbol: "v", meaning: "fluid speed (m/s)" },
      { symbol: "P", meaning: "pressure (Pa)" },
      { symbol: "\\rho", meaning: "fluid density (kg/m³)" },
      { symbol: "g", meaning: "gravitational field strength" },
      { symbol: "h", meaning: "height (m)" }
    ]

  },
  examPoints: [
    "Bernoulli's Principle applies to IDEAL fluids (incompressible, non-viscous, steady flow) — real fluids deviate from ideal behavior, especially at high speeds",
    "Continuity says: narrower section = faster flow. Bernoulli says: faster flow = lower pressure. The two principles work together in many real-world applications."
  ],
  commonMistakes: [
    "Thinking faster flow = higher pressure (it's the opposite: faster flow = LOWER pressure per Bernoulli)",
    "Forgetting that Bernoulli's equation includes THREE terms (pressure, kinetic energy density, potential energy density), not just pressure"
  ],
  relatedTopics: ["phy-pressure-fluids", "phy-archimedes-principle", "c-jet-stream"],
  content: true,
  buildsOn: ["phy-pressure-fluids", "phy-archimedes-principle", "phy-work-energy"],
  leadsTo: [],
  usedIn: ["c-jet-stream", "meteo-ocean-currents"]
},

// ============================= SECTION PHY-D ADDITIONS: Heat Transfer Details & Kinetic Theory =============================

{
  id: "phy-heat-transfer-mechanisms",
  sectionId: "PHY-D",
  order: 5,
  title: "Heat Transfer Mechanisms: Conduction, Convection & Radiation in Detail",
  definition: "Heat transfers by three mechanisms: conduction (through matter), convection (by fluid motion), and radiation (by electromagnetic waves). Each has distinct physics, governing equations, and applications.",
  keyFacts: [
    "Conduction rate (Fourier's law): Q/t = kAΔT/L — rate depends on thermal conductivity k, cross-sectional area A, temperature difference ΔT, and inversely on thickness L",
    "Thermal conductivity k varies widely: metals have high k (good conductors), air and insulators have low k (poor conductors, good insulators)",
    "Convection has two forms: natural (driven by buoyancy from density differences) and forced (driven by fans, pumps, or wind)",
    "Radiation rate (Stefan-Boltzmann law): P = σAT⁴ — power radiated is proportional to the fourth power of absolute temperature, where σ is the Stefan-Boltzmann constant",
    "Emissivity (ε) of a surface: a measure of how efficiently it radiates compared to a perfect blackbody (ε = 1); values range from ~0.03 (polished silver) to ~0.95 (matte black paint)"
  ],
  explanationSections: [
    { heading: "Why a metal spoon feels colder than a wooden spoon in the same soup", body: "Both spoons are at the same temperature, but metal has a much higher thermal conductivity than wood, so it conducts heat AWAY from your hand (or rather, your hand transfers heat TO the spoon) much faster. The nerve endings in your hand interpret this rapid heat loss as 'cold', even though the spoon itself isn't actually colder than the wooden one." },
    { heading: "Why the Sun's radiation dominates Earth's energy budget despite the enormous distance", body: "The Sun's surface temperature (~5,800 K) means its radiated power per unit area scales as T⁴ — quadrupling temperature increases radiation 256-fold. So the Sun's surface radiates enormous energy, and even at 150 million km away, Earth intercepts enough to power weather, life, and almost all atmospheric processes. Without the T⁴ relationship, Earth would receive far less solar energy." }
  ],
  formula: {
    name: "Fourier's law & Stefan-Boltzmann law",
    expression: "\\frac{Q}{t} = \\frac{kA\\Delta T}{L} \\quad P = \\sigma \\varepsilon A T^4",
    variables: [
      { symbol: "Q/t", meaning: "heat transfer rate (W)" },
      { symbol: "k", meaning: "thermal conductivity (W/m·K)" },
      { symbol: "A", meaning: "cross-sectional area (m²)" },
      { symbol: "\\Delta T", meaning: "temperature difference (K)" },
      { symbol: "L", meaning: "thickness (m)" },
      { symbol: "P", meaning: "radiated power (W)" },
      { symbol: "\\sigma", meaning: "Stefan-Boltzmann constant (5.67×10⁻⁸ W/m²·K⁴)" },
      { symbol: "\\varepsilon", meaning: "emissivity (0 to 1)" },
      { symbol: "T", meaning: "absolute temperature (K)" }
    ]

  },
  examPoints: [
    "Stefan-Boltzmann law: doubling absolute temperature increases radiated power 16-fold (2⁴), not 2-fold — the fourth-power dependence is critical",
    "Conduction requires a medium; convection requires a fluid; radiation requires neither — only radiation works through vacuum"
  ],
  commonMistakes: [
    "Forgetting to use absolute temperature (Kelvin) in Stefan-Boltzmann law, not Celsius",
    "Confusing 'conduction' (molecular collisions) with 'convection' (bulk fluid motion) — conduction can happen in a stationary solid, convection cannot"
  ],
  relatedTopics: ["phy-heat-transfer-equilibrium", "phy-temperature-heat", "b-heat-transfer", "b-greenhouse-effect"],
  content: true,
  buildsOn: ["phy-heat-transfer-equilibrium"],
  leadsTo: ["b-heat-transfer"],
  usedIn: ["b-heat-transfer", "b-radiation-laws", "a-vertical-structure", "env-air-pollution", "env-climate-change-response"]
},

{
  id: "phy-kinetic-theory",
  sectionId: "PHY-D",
  order: 6,
  title: "Kinetic Theory of Gases",
  definition: "The kinetic theory of gases explains the macroscopic properties of gases (pressure, temperature, volume) in terms of the microscopic motion of countless individual gas molecules — a foundational bridge between thermodynamics and atomic physics.",
  keyFacts: [
    "Basic assumptions: gas consists of a huge number of molecules in random motion, molecules are point-like (volume negligible compared to container), collisions are perfectly elastic, no intermolecular forces except during collisions",
    "Average kinetic energy of gas molecules is directly proportional to absolute temperature: KE_avg = (3/2)kT, where k is Boltzmann's constant",
    "Pressure of a gas arises from molecules colliding with the container walls: greater molecular speed (higher T) or more molecules (higher density) means more frequent, harder collisions = higher pressure",
    "Root-mean-square speed: v_rms = √(3kT/m) — at a given temperature, lighter molecules move faster than heavier ones (e.g. hydrogen faster than oxygen)",
    "Absolute zero (0 K) is the temperature at which (classically) all molecular motion ceases; the gas exerts zero pressure at this theoretical limit"
  ],
  explanationSections: [
    { heading: "Why temperature is really about molecular motion", body: "Kinetic theory reveals that temperature is not a fundamental 'amount of heat' but a measure of the average kinetic energy of the random molecular motion. Heating a gas speeds up its molecules; cooling slows them down. Absolute zero is the temperature where, classically, molecular motion would stop entirely — though quantum mechanics tells us there's still a tiny zero-point energy." },
    { heading: "Why a balloon shrinks when cooled", body: "Cool a gas and its molecules slow down (lower KE). They collide with the walls less often and less forcefully, so pressure drops. If the balloon isn't sealed, air flows out until internal pressure matches external — but with a flexible sealed balloon (like a hot-air balloon cooling), the lower internal pressure allows the atmospheric pressure outside to compress the balloon, making it shrink visibly." }
  ],
  formula: {
    name: "Kinetic theory: average KE and RMS speed",
    expression: "\\overline{KE} = \\frac{3}{2} k_B T \\quad v_{rms} = \\sqrt{\\frac{3 k_B T}{m}}",
    variables: [
      { symbol: "\\overline{KE}", meaning: "average kinetic energy per molecule (J)" },
      { symbol: "k_B", meaning: "Boltzmann constant (1.38×10⁻²³ J/K)" },
      { symbol: "T", meaning: "absolute temperature (K)" },
      { symbol: "v_{rms}", meaning: "root-mean-square speed of molecules (m/s)" },
      { symbol: "m", meaning: "mass of one molecule (kg)" }
    ]

  },
  examPoints: [
    "At the same temperature, lighter gas molecules move FASTER on average than heavier ones — this is why hydrogen escapes Earth's atmosphere more easily than oxygen or nitrogen",
    "The relationship KE ∝ T means absolute zero (0 K) corresponds to zero molecular kinetic energy — the lowest possible temperature"
  ],
  commonMistakes: [
    "Confusing 'average speed' with 'root-mean-square speed' — they're slightly different (RMS is always a bit higher due to the squaring emphasizing faster molecules)",
    "Forgetting that 'temperature' in these formulas is always ABSOLUTE (Kelvin), not Celsius or Fahrenheit"
  ],
  relatedTopics: ["phy-temperature-heat", "phy-thermodynamics-laws", "phy-pressure-fluids", "b-greenhouse-effect"],
  content: true,
  buildsOn: ["phy-states-of-matter", "phy-thermodynamics-laws"],
  leadsTo: [],
  usedIn: ["b-gas-law"]
},

// ============================= SECTION PHY-E ADDITION: Doppler Effect =============================

{
  id: "phy-doppler-effect",
  sectionId: "PHY-E",
  order: 4,
  title: "The Doppler Effect & Applications",
  definition: "The Doppler effect is the observed change in frequency of a wave when the source and observer are moving relative to each other. It explains why a siren's pitch changes as it passes you, and underlies technologies from radar to medical ultrasound.",
  keyFacts: [
    "Doppler effect: when source and observer move closer, observed frequency is HIGHER than emitted; when moving apart, observed frequency is LOWER",
    "For a stationary observer and moving source: f_observed = f_source × (v_wave / (v_wave ± v_source)), with + sign for source moving away, − for approaching",
    "Magnitude of the effect depends on the ratio of relative speed to wave speed: small ratio = small shift, large ratio = large shift",
    "Applications: Doppler radar (weather, speed guns), medical ultrasound, astronomy (redshift/blueshift of stars), sonar",
    "Redshift: light from stars moving away from us is shifted to longer (redder) wavelengths; blueshift: approaching stars are shifted to shorter (bluer) wavelengths — key evidence for the expanding universe"
  ],
  explanationSections: [
    { heading: "Why a siren's pitch changes as it passes you", body: "As a stationary observer, you hear sound waves emitted by the siren at their actual frequency only when the siren is at rest relative to you. As the siren approaches, each successive sound wave is emitted from a position slightly closer to you than the previous one, so the wave crests reach you more frequently — higher pitch. As the siren moves away, the opposite happens — lower pitch. The amount of shift is small for everyday speeds but large for fast-moving sources like racing cars." },
    { heading: "Why this matters for meteorology", body: "Doppler radar is the foundation of modern weather radar — it doesn't just measure where rain is, it measures how fast raindrops are moving toward or away from the radar. From this, meteorologists infer wind speed and direction, identify rotation in storms (a key tornado signature), and detect the mesocyclones that precede severe weather." }
  ],
  formula: {
    name: "Doppler effect (source moving, observer stationary)",
    expression: "f_{obs} = f_{src} \\times \\frac{v}{v \\pm v_{src}}",
    variables: [
      { symbol: "f_{obs}", meaning: "observed frequency (Hz)" },
      { symbol: "f_{src}", meaning: "source frequency (Hz)" },
      { symbol: "v", meaning: "wave speed (m/s)" },
      { symbol: "v_{src}", meaning: "source speed (m/s); + for receding, − for approaching" }
    ]

  },
  examPoints: [
    "The Doppler effect requires relative motion between source and observer — if both are stationary, the observed frequency equals the source frequency",
    "Doppler shift in light (redshift/blueshift) gave astronomers evidence that the universe is expanding — Edwin Hubble's key 1929 discovery"
  ],
  commonMistakes: [
    "Confusing source moving toward the observer with observer moving toward the source — the effect is similar but the formulas differ slightly",
    "Thinking the wavelength actually changes — it doesn't, the relative spacing of successive wave crests reaching the observer changes"
  ],
  relatedTopics: ["phy-wave-properties", "phy-sound-waves", "f-remote-sensing"],
  content: true,
  buildsOn: ["phy-sound-waves"],
  leadsTo: [],
  usedIn: ["f-remote-sensing"]
},

// ============================= SECTION PHY-F ADDITION: Lens & Mirror Image Formation =============================

{
  id: "phy-lens-mirror-imaging",
  sectionId: "PHY-F",
  order: 4,
  title: "Lens & Mirror Image Formation",
  definition: "Lenses and mirrors form images by refracting or reflecting light according to predictable rules. The image can be characterized by its type (real or virtual), orientation (upright or inverted), and size (magnified, reduced, or same size).",
  keyFacts: [
    "Real image: formed by actual convergence of light rays, can be projected onto a screen; always inverted relative to object",
    "Virtual image: formed where light rays APPEAR to diverge from, cannot be projected; always upright relative to object",
    "Convex (converging) lens: converges parallel light to a focal point on the far side; can form real or virtual images depending on object distance",
    "Concave (diverging) lens: diverges parallel light as if from a focal point on the same side as the object; always forms virtual, upright, reduced images",
    "Concave mirror: converges light; forms real, inverted images (when object is beyond focal point) or virtual, upright, magnified images (when object is within focal length — used as makeup/shaving mirrors)",
    "Mirror equation: 1/f = 1/v + 1/u, where f = focal length, v = image distance, u = object distance (sign convention: distances measured in front of mirror are positive)"
  ],
  explanationSections: [
    { heading: "Why magnifying mirrors work", body: "A concave (curved-in) makeup or shaving mirror has a focal length such that your face sits WITHIN the focal length. Light from your face reflects and diverges, but your eye traces the diverging rays back to a virtual point behind the mirror — producing a virtual, upright, magnified image. Stand farther back (beyond the focal point) and the same mirror gives a real, inverted image." },
    { heading: "Why convex mirrors are used for car side mirrors", body: "Convex (curved-out) mirrors always form virtual, upright, reduced images. This makes objects appear smaller and farther away than they are, but the trade-off is a much wider field of view — critical for car side mirrors to show more of the road behind. Most have the warning: 'Objects in mirror are closer than they appear.'" }
  ],
  formula: {
    name: "Mirror equation & lens equation",
    expression: "\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u} \\quad m = \\frac{-v}{u}",
    variables: [
      { symbol: "f", meaning: "focal length (m, + for convex, − for concave)" },
      { symbol: "v", meaning: "image distance from mirror/lens (m)" },
      { symbol: "u", meaning: "object distance from mirror/lens (m)" },
      { symbol: "m", meaning: "magnification (negative = inverted)" }
    ]

  },
  examPoints: [
    "The sign convention matters: object distance is always positive (object in front of mirror), but focal length sign depends on whether the mirror/lens converges or diverges light",
    "A real image can be projected on a screen; a virtual image cannot — a fundamental distinction with practical consequences"
  ],
  commonMistakes: [
    "Forgetting that virtual images are always upright, real images are always inverted — this is a reliable rule regardless of mirror/lens type",
    "Mixing up the sign of magnification: negative m = inverted image, positive m = upright image"
  ],
  relatedTopics: ["phy-reflection-refraction", "phy-lenses-mirrors-em-spectrum"],
  content: true,
  buildsOn: ["phy-lenses-mirrors-em-spectrum"],
  leadsTo: [],
  usedIn: []
},

// ============================= SECTION PHY-G ADDITION: Capacitance =============================

{
  id: "phy-capacitance",
  sectionId: "PHY-G",
  order: 5,
  title: "Capacitance & Capacitors",
  definition: "A capacitor is a device that stores electrical energy in an electric field. Capacitance measures a capacitor's ability to store charge per unit voltage. Capacitors are essential components in virtually all electronic circuits.",
  keyFacts: [
    "Capacitance C = charge Q / voltage V, measured in Farads (F); 1 Farad = 1 Coulomb/Volt",
    "A capacitor consists of two conducting plates separated by an insulator (dielectric); when voltage is applied, equal and opposite charges accumulate on the plates",
    "Parallel plate capacitor: C = ε₀A/d, where A is plate area, d is plate separation, ε₀ is the permittivity of free space",
    "Energy stored in a charged capacitor: E = ½CV² = ½QV = Q²/(2C)",
    "Capacitors in circuits block DC (steady current) but pass AC (changing current) — this is the basis of filtering, timing circuits, and AC coupling"
  ],
  explanationSections: [
    { heading: "Why a capacitor stores energy", body: "When a voltage is applied across a capacitor, electrons accumulate on one plate (making it negative) and are repelled from the other (making it positive). This charge separation creates an electric field between the plates, and energy is stored in that field. Disconnect the source, and the capacitor can hold its charge for a long time (slowly leaking through the dielectric and any connected circuit)." },
    { heading: "Why capacitors block DC but pass AC", body: "Direct current (DC) is a steady flow — once a capacitor charges to the source voltage, no more current flows. Alternating current (AC) constantly changes direction and magnitude, so the capacitor must constantly charge and discharge — current effectively flows 'through' it (via the charging/discharging process, not actual electron flow across the gap). This frequency-dependent behavior is what makes capacitors useful as filters and in tuning circuits." }
  ],
  formula: {
    name: "Capacitance, parallel plate, energy stored",
    expression: "C = \\frac{Q}{V} \\quad C = \\frac{\\varepsilon_0 A}{d} \\quad E = \\frac{1}{2}CV^2",
    variables: [
      { symbol: "C", meaning: "capacitance (Farads)" },
      { symbol: "Q", meaning: "charge stored (C)" },
      { symbol: "V", meaning: "voltage across capacitor (V)" },
      { symbol: "\\varepsilon_0", meaning: "permittivity of free space (8.85×10⁻¹² F/m)" },
      { symbol: "A", meaning: "plate area (m²)" },
      { symbol: "d", meaning: "plate separation (m)" },
      { symbol: "E", meaning: "energy stored (J)" }
    ]

  },
  examPoints: [
    "Capacitance depends on geometry (plate area, separation) and the dielectric material, NOT on the voltage applied or charge stored",
    "1 Farad is a HUGE unit — typical capacitors are in microfarads (μF) or picofarads (pF)"
  ],
  commonMistakes: [
    "Confusing capacitance (capacity to store charge, measured in F) with charge itself (measured in C) — these are different quantities",
    "Thinking a fully-charged capacitor has current flowing through it — in DC steady state, no current flows; energy is stored in the electric field, not in current"
  ],
  relatedTopics: ["phy-electric-field-potential", "phy-current-voltage-resistance", "phy-electromagnetic-induction"],
  content: true,
  buildsOn: ["phy-electric-field-potential"],
  leadsTo: [],
  usedIn: []
},

// ============================= SECTION PHY-H ADDITION: Transformers =============================

{
  id: "phy-transformers-ac",
  sectionId: "PHY-H",
  order: 3,
  title: "Transformers & AC Power",
  definition: "A transformer uses electromagnetic induction to step AC voltage up or down while changing current inversely. Transformers are essential for efficient electrical power transmission and for adapting voltages to different applications.",
  keyFacts: [
    "Transformer equation: V_p / V_s = N_p / N_s, where V = voltage, N = number of coil turns, p = primary (input), s = secondary (output)",
    "Step-up transformer: more turns on secondary (N_s > N_p) → output voltage higher than input; used to increase voltage for long-distance power transmission",
    "Step-down transformer: fewer turns on secondary (N_s < N_p) → output voltage lower than input; used to reduce household mains voltage (e.g. 230V to 12V for phone chargers)",
    "In an ideal transformer (100% efficient): V_p × I_p = V_s × I_s (power in = power out), so stepping up voltage steps down current proportionally",
    "Real transformers have small losses (resistive heating in coils, eddy currents in core, hysteresis) — typical efficiency 95-99% for large power transformers",
    "Transformers only work with AC (changing current) because DC would produce a constant magnetic flux with no changing flux, hence no induced EMF in the secondary"
  ],
  explanationSections: [
    { heading: "Why power grids step up voltage for transmission", body: "Power lost in transmission lines is P_loss = I²R, so reducing current reduces loss dramatically. For the same power delivered (P = VI), stepping up voltage by 10× reduces current by 10× and transmission losses by 100×. Transformers at power stations step voltage up to hundreds of kV for long-distance lines; local substations then step it back down to household voltages (120V/230V) for safe use." },
    { heading: "Why transformers only work with AC", body: "A transformer needs a CHANGING magnetic flux in its core to induce an EMF in the secondary coil (Faraday's Law). AC constantly varies, producing the needed changing flux. DC, once steady, produces a constant flux with no induced secondary EMF. This is why every device that plugs into a wall outlet (which provides AC) can use a transformer-based power supply, while DC circuits need different voltage-regulation methods." }
  ],
  formula: {
    name: "Transformer equations",
    expression: "\\frac{V_p}{V_s} = \\frac{N_p}{N_s} \\quad V_p I_p = V_s I_s \\text{ (ideal)}",
    variables: [
      { symbol: "V_p, V_s", meaning: "primary and secondary voltages" },
      { symbol: "N_p, N_s", meaning: "number of turns in primary and secondary coils" },
      { symbol: "I_p, I_s", meaning: "primary and secondary currents" }
    ]

  },
  examPoints: [
    "In an ideal transformer, stepping UP voltage steps DOWN current proportionally (and vice versa) — power is conserved",
    "Transformers are why AC became the standard for power grids, not DC — DC cannot be easily transformed to different voltages for efficient long-distance transmission"
  ],
  commonMistakes: [
    "Thinking transformers work with DC — they don't, because DC produces no changing magnetic flux",
    "Forgetting that stepping up voltage steps down current (and vice versa) — they are inversely related when power is conserved"
  ],
  relatedTopics: ["phy-electromagnetic-induction", "phy-circuits-power-energy", "phy-current-voltage-resistance"],
  content: true,
  buildsOn: ["phy-electromagnetic-induction", "phy-circuits-power-energy"],
  leadsTo: [],
  usedIn: ["env-energy-sources"]
},

// ============================= SECTION PHY-D ADDITION 2: Kinetic Theory of Heat =============================

// (Already added in Batch 3 — keeping this slot empty by skipping)

// (No additional topic here — Kinetic Theory was added in Batch 3)

// Note: Above comment is intentional, no actual topic object here.
// The next two topics are for PHY-I expansion only.

// ============================= SECTION PHY-I ADDITION: Half-Life & Radioactive Decay =============================

{
  id: "phy-half-life-decay",
  sectionId: "PHY-I",
  order: 3,
  title: "Half-Life, Decay Constant & Radioactive Dating",
  definition: "Radioactive decay is a random process where unstable nuclei emit radiation over time. The half-life is the time for half the atoms in a sample to decay — a characteristic constant for each radioactive isotope that enables dating ancient materials.",
  keyFacts: [
    "Half-life (t₁/₂): time for half the radioactive nuclei in a sample to decay; constant for each isotope regardless of initial amount or conditions",
    "After n half-lives, the fraction remaining is (1/2)ⁿ; after 1 half-life = 50%, after 2 = 25%, after 3 = 12.5%, etc.",
    "Decay constant λ: related to half-life by t₁/₂ = ln2/λ ≈ 0.693/λ",
    "Exponential decay: N(t) = N₀ × e^(-λt), where N₀ is the initial number of nuclei and N(t) is the number remaining at time t",
    "Radiocarbon dating: uses carbon-14's half-life (~5,730 years) to date once-living organic materials up to about 50,000 years old; other isotopes date different ranges (e.g. potassium-argon for millions of years)"
  ],
  explanationSections: [
    { heading: "Why half-life is constant regardless of sample size", body: "Radioactive decay is a random process where each atom has a fixed probability of decaying per unit time, but no memory of when it might decay. This means the DECAY RATE (decays per second) is proportional to how many atoms remain. If you start with 1000 atoms, you lose 50% in one half-life; if you start with 1000 billion, you still lose 50% in one half-life. The same fraction always decays in the same time — the half-life is independent of sample size." },
    { heading: "How carbon dating works", body: "While alive, organisms constantly exchange carbon with the environment, maintaining a constant ratio of radioactive carbon-14 to stable carbon-12. After death, no new carbon is taken in, and the C-14 decays with its 5,730-year half-life. By measuring the remaining C-14 to C-12 ratio in an artifact, scientists can estimate when the organism died. Limitations: only works for once-living things, only for materials <50,000 years old, and requires calibration for atmospheric C-14 levels over time." }
  ],
  formula: {
    name: "Radioactive decay and half-life",
    expression: "N(t) = N_0 \\times (\\frac{1}{2})^{t/t_{1/2}} = N_0 e^{-\\lambda t} \\quad t_{1/2} = \\frac{\\ln 2}{\\lambda}",
    variables: [
      { symbol: "N(t)", meaning: "number of nuclei remaining at time t" },
      { symbol: "N_0", meaning: "initial number of nuclei" },
      { symbol: "t_{1/2}", meaning: "half-life (s, min, years depending on isotope)" },
      { symbol: "\\lambda", meaning: "decay constant (per unit time)" }
    ]

  },
  examPoints: [
    "Half-life is independent of initial amount — a sample of any size loses half its radioactivity in one half-life",
    "After 10 half-lives, less than 0.1% of the original sample remains — a practical limit for detection"
  ],
  commonMistakes: [
    "Thinking the whole sample eventually decays — radioactive decay is exponential, never reaching zero; mathematically, it approaches but never reaches zero",
    "Confusing 'half-life' (time for half to decay) with 'average lifetime' (which is 1/λ = t₁/₂ / ln2 ≈ 1.44 × t₁/₂ — the average lifetime is LONGER than the half-life)"
  ],
  relatedTopics: ["phy-radioactivity-nuclear", "phy-atomic-structure"],
  content: true,
  buildsOn: ["phy-radioactivity-nuclear", "math-3-1", "math-6-2"],
  leadsTo: [],
  usedIn: ["earth-c2", "earth-k4"]
},

// ============================= SECTION PHY-I ADDITION: Fission & Chain Reactions =============================

{
  id: "phy-fission-chain-reaction",
  sectionId: "PHY-I",
  order: 4,
  title: "Nuclear Fission, Chain Reactions & Nuclear Power",
  definition: "Nuclear fission is the splitting of heavy atomic nuclei into smaller fragments, releasing energy and additional neutrons that can sustain a chain reaction. This is the physical basis of nuclear power plants and atomic weapons.",
  keyFacts: [
    "Fission process: a heavy nucleus (typically U-235) absorbs a slow neutron, becomes unstable, and splits into two smaller nuclei + 2-3 free neutrons + energy",
    "Chain reaction: the neutrons released by one fission can trigger further fissions in nearby nuclei; sustained when at least one neutron from each fission causes another fission (critical mass)",
    "Critical mass: minimum amount of fissile material needed to sustain a chain reaction; below this, neutrons escape before causing enough new fissions",
    "Moderator: material (e.g. water, graphite) that slows down fission neutrons to speeds optimal for causing further fissions in U-235",
    "Control rods: rods of neutron-absorbing material (e.g. boron, cadmium) inserted into the reactor to absorb excess neutrons and control the reaction rate",
    "Nuclear power plant: controlled chain reaction produces heat, which boils water to make steam, which drives turbines connected to generators producing electricity"
  ],
  explanationSections: [
    { heading: "Why a chain reaction can be self-sustaining or explosive", body: "If each fission produces on average one neutron that causes another fission, the chain reaction proceeds at a constant rate (steady power output — what a power plant wants). If more than one neutron per fission causes another fission, the reaction rate grows exponentially (an explosion). Control rods absorb the right number of neutrons to keep the reaction at exactly one neutron per fission — a delicate balance that requires continuous monitoring and adjustment." },
    { heading: "How a nuclear power plant differs from an atomic bomb", body: "A power plant uses control rods, low-enriched uranium (3-5% U-235), and careful design to keep the chain reaction at a steady, controlled rate producing steady heat. A bomb uses highly enriched uranium (>90% U-235) and no control mechanism, so the chain reaction grows exponentially in microseconds, releasing enormous energy in an uncontrolled explosion. Both rely on the same nuclear physics, but the engineering and geometry differ dramatically." }
  ],
  formula: {
    name: "Chain reaction multiplication factor",
    expression: "k = \\frac{\\text{neutrons in generation } n+1}{\\text{neutrons in generation } n}",
    variables: [
      { symbol: "k", meaning: "multiplication factor" },
      { symbol: "k = 1", meaning: "critical (steady rate, power plant)" },
      { symbol: "k < 1", meaning: "subcritical (reaction dies out)" },
      { symbol: "k > 1", meaning: "supercritical (reaction grows — uncontrolled if no controls)" }
    ]

  },
  examPoints: [
    "Critical mass is about shape AND material — a sphere has the least surface area for a given volume, minimizing neutron escape, which is why nuclear material is shaped into spheres",
    "Nuclear power plants are NOT at risk of 'exploding like a bomb' — the geometry, enrichment, and control systems make runaway reactions physically prevented by design"
  ],
  commonMistakes: [
    "Thinking nuclear reactors can explode like atomic bombs — they can't, due to low enrichment and geometry; worst case is a meltdown (overheating and fuel damage), not a nuclear explosion",
    "Confusing the role of moderators (slow down neutrons) with control rods (absorb neutrons) — they have opposite effects on the chain reaction"
  ],
  relatedTopics: ["phy-radioactivity-nuclear", "phy-half-life-decay", "phy-atomic-structure"],
  content: true,
  buildsOn: ["phy-radioactivity-nuclear"],
  leadsTo: [],
  usedIn: ["env-energy-sources"]
}
];