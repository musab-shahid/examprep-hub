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
  sectionId: "PHY-01",
  order: 1,
  title: "Kinematics: Distance, Displacement, Speed, Velocity & Acceleration",
  definition: "Kinematics describes motion using displacement, velocity, and acceleration without asking what force causes the motion. Mastering the definitions and the constant-acceleration equations is the foundation of almost every FPSC mechanics item.",
  keyFacts: [
    "Distance is scalar (path length); displacement is vector (change in position from start to end)",
    "Speed is scalar (distance/time); velocity is vector (displacement/time)",
    "Average velocity = total displacement / total time; instantaneous velocity is velocity at one instant",
    "Acceleration is rate of change of velocity. The four kinematic equations require constant acceleration",
    "Key equations: $v = u + at$, $s = ut + \\frac{1},
  {2}at^2$, $v^2 = u^2 + 2as$, $s = \\frac{(u+v)},
  {2}t$"
  ],
  explanationSections: [
    { heading: "Scalars vs vectors in motion", body: "A full lap can mean large distance but zero displacement. Average speed uses distance; average velocity uses displacement — they only match for straight one-way motion without reversal." },
    { heading: "How FPSC tests kinematics", body: "Typical items give three of $u,v,a,s,t$ under constant $a$. List knowns with a chosen positive direction, then pick the equation that avoids the unknown you do not need." },
    { heading: "Choosing the right equation", body: "Missing $t$? Use $v^2 = u^2 + 2as$. Missing $v$? Often $s = ut + \\frac{1},
  {2}at^2$. From rest, set $u = 0$ to simplify." }
  ],
  formula: [
    { name: "Velocity with time", expression: "v = u + at", variables: [{ symbol: "u", meaning: "initial velocity (m/s)" }, { symbol: "v", meaning: "final velocity (m/s)" }, { symbol: "a", meaning: "acceleration (m/s²)" }, { symbol: "t", meaning: "time (s)" }] },
    { name: "Displacement with time", expression: "s = ut + (1/2)at²", variables: [{ symbol: "s", meaning: "displacement (m)" }, { symbol: "u", meaning: "initial velocity (m/s)" }, { symbol: "a", meaning: "acceleration (m/s²)" }, { symbol: "t", meaning: "time (s)" }] },
    { name: "No-time equation", expression: "v² = u² + 2as", variables: [{ symbol: "v", meaning: "final velocity (m/s)" }, { symbol: "u", meaning: "initial velocity (m/s)" }, { symbol: "a", meaning: "acceleration (m/s²)" }, { symbol: "s", meaning: "displacement (m)" }] }
  ],
  methodChooser: [
    { when: "time $t$ is unknown", use: "$v^2 = u^2 + 2as$" },
    { when: "final speed $v$ is unknown", use: "$s = ut + \\frac{1},
  {2}at^2$" },
    { when: "starts from rest", use: "set $u = 0$" },
    { when: "comes to stop", use: "set $v = 0$; deceleration is negative if forward is positive" }
  ],
  limitCases: [
    { condition: "$a = 0$", result: "constant velocity: $s = ut$" },
    { condition: "$u = 0$", result: "$v = at$, $s = \\frac{1},
  {2}at^2$" },
    { condition: "$v = 0$ (braking)", result: "$s = -u^2/(2a)$ with $a < 0$ if forward positive" }
  ],
  comparisonTable: {
    headers: ["Quantity", "Type", "Uses", "Zero while moving?"],
    rows: [
      ["Distance", "Scalar", "Path length", "No"],
      ["Displacement", "Vector", "Change in position", "Yes (closed path)"],
      ["Speed", "Scalar", "Distance/time", "Only if not moving"],
      ["Velocity", "Vector", "Displacement/time", "Yes (closed path average)"]
    ]
  },
  workedExample: [
    { problem: "A car accelerates from rest at $2\\,\\mathrm{m/s^2}$ for $5\\,\\mathrm{s}$. Find final speed and distance travelled in a straight line.", solution: "$u=0$, $a=2\\,\\mathrm{m/s^2}$, $t=5\\,\\mathrm{s}$. $v=u+at=10\\,\\mathrm{m/s}$. $s=ut+\\frac{1},
  {2}at^2=25\\,\\mathrm{m}$. Check: $v^2=u^2+2as$ ⇒ $100=100$.", answer: "$10\\,\\mathrm{m/s}$, $25\\,\\mathrm{m}$" },
    { problem: "A bike at $20\\,\\mathrm{m/s}$ brakes at $4\\,\\mathrm{m/s^2}$ (deceleration). Stopping distance?", solution: "$u=20$, $v=0$, $a=-4$. $0=400+2(-4)s$ ⇒ $s=50\\,\\mathrm{m}$.", answer: "$50\\,\\mathrm{m}$" }
  ],
  commonMistakes: [
    "Confusing distance with displacement (and speed with velocity)",
    "Using constant-$a$ equations when acceleration is not constant",
    "Dropping the sign of deceleration",
    "Using final $v$ in $s=vt$ instead of average velocity",
    "Swapping $u$ and $v$ when rearranging"
  ],
  examPoints: [
    "Pick a positive direction before assigning signs",
    "Closed path: displacement can be zero while distance is not",
    "Missing time → $v^2=u^2+2as$",
    "Convert km/h to m/s by dividing by 3.6 when needed"
  ],
  relatedTopics: ["phy-newtons-laws", "phy-momentum-impulse"],
  buildsOn: ["math-8-3", "math-5-4", "phy-units-measurement", "phy-scalars-vectors"],
  leadsTo: ["phy-newtons-laws", "phy-momentum-impulse"],
  usedIn: ["phy-work-energy", "meteo-static-stability", "meteo-forces-governing-wind", "meteo-scales-of-motion"],
  content: true,
  },
  {
id: "phy-newtons-laws",
  sectionId: "PHY-01",
  order: 2,
  title: "Newton's Three Laws of Motion",
  definition: "Newton's laws link force and motion: inertia (1st), $F=ma$ for net force (2nd), and action–reaction pairs on different objects (3rd).",
  keyFacts: [
    "1st law: constant velocity (including rest) unless net external force acts",
    "2nd law: $\\vec{F}_{\\mathrm{net}} = m\\vec{a}$ — net force, not a single named force unless it is the only one",
    "3rd law: forces come in equal–opposite pairs acting on two different objects",
    "Mass is inertia (kg); weight is gravitational force (N) and can change with $g$",
    "Equilibrium means $\\vec{F}_{\\mathrm{net}}=0$, so $\\vec{a}=0$ (velocity constant, not necessarily zero)"
  ],
  explanationSections: [
    { heading: "Why the 3rd law does not cancel motion", body: "Action and reaction act on different objects. The book–table pair does not cancel the book's weight; the normal force balances weight on the book, while the book pushes the table separately." },
    { heading: "Net force is the working idea", body: "In $F=ma$, $F$ is the vector sum of all forces. Doubling net force doubles $a$; doubling mass halves $a$ for the same net force." },
    { heading: "How the exam traps you", body: "Moving at constant speed is allowed with zero net force. 'Equal and opposite' never means both forces act on the same free-body diagram as if they cancel a single object's motion by themselves." }
  ],
  formula: { name: "Newton's Second Law", expression: "F_net = m × a", variables: [{ symbol: "F_net", meaning: "net force (N)" }, { symbol: "m", meaning: "mass (kg)" }, { symbol: "a", meaning: "acceleration (m/s²)" }] },
  methodChooser: [
    { when: "finding acceleration from forces", use: "draw free-body diagram → sum forces → $a = F_{\\mathrm{net}}/m$" },
    { when: "object at constant velocity", use: "set $F_{\\mathrm{net}}=0$ (1st law / equilibrium)" },
    { when: "mass vs weight asked", use: "mass in kg; weight $W=mg$ in newtons" }
  ],
  limitCases: [
    { condition: "$F_{\\mathrm{net}}=0$", result: "$a=0$ — rest or steady velocity" },
    { condition: "same force, double mass", result: "half the acceleration" }
  ],
  comparisonTable: {
    headers: ["Idea", "Means", "Common error"],
    rows: [
      ["Mass", "Amount of matter / inertia (kg)", "Calling mass 'weight'"],
      ["Weight", "Gravitational force $mg$ (N)", "Treating weight as constant everywhere"],
      ["3rd law pair", "Equal–opposite on two bodies", "Putting both arrows on one body and cancelling"]
    ]
  },
  workedExample: [
    { problem: "A $5\\,\\mathrm{kg}$ box is pulled horizontally with $20\\,\\mathrm{N}$. Friction is $5\\,\\mathrm{N}$. Find acceleration.", solution: "$F_{\\mathrm{net}}=20-5=15\\,\\mathrm{N}$. $a=F/m=15/5=3\\,\\mathrm{m/s^2}$.", answer: "$3\\,\\mathrm{m/s^2}$" },
    { problem: "A $2\\,\\mathrm{kg}$ object moves at constant $4\\,\\mathrm{m/s}$ on a straight line. Net force?", solution: "Constant velocity ⇒ $a=0$ ⇒ $F_{\\mathrm{net}}=0$ (1st law).", answer: "$0\\,\\mathrm{N}$" }
  ],
  commonMistakes: [
    "Using $F=ma$ with one force while ignoring friction or components",
    "Thinking 3rd-law partners cancel on the same object",
    "Assuming motion requires a nonzero net force (false at constant velocity)",
    "Mixing mass (kg) and weight (N)",
    "Forgetting that $F$ in $F=ma$ is net force"
  ],
  examPoints: [
    "Constant velocity ⇒ net force zero",
    "3rd law: two objects, not two forces on one free-body diagram cancelling automatically",
    "Always identify $F_{\\mathrm{net}}$ before computing $a$"
  ],
  relatedTopics: ["phy-kinematics", "phy-gravity-weight-friction", "phy-momentum-impulse"],
  buildsOn: ["phy-kinematics", "phy-scalars-vectors"],
  leadsTo: ["phy-gravity-weight-friction", "phy-momentum-impulse", "phy-work-energy"],
  usedIn: ["phy-vector-applications", "meteo-coriolis-effect", "meteo-forces-governing-wind", "earth-f1", "earth-h1"],
  content: true,
  },
  {
id: "phy-gravity-weight-friction",
  sectionId: "PHY-01",
  order: 3,
  title: "Gravity, Weight & Friction",
  definition: "Near Earth, weight is $mg$. Friction opposes relative sliding (or impending slide) and is limited by the normal force and the coefficient of friction.",
  keyFacts: [
    "Weight $W = mg$ with $g \\approx 9.8\\,\\mathrm{m/s^2}$ (often $10$ in MCQs)",
    "Mass is constant; weight changes if $g$ changes",
    "Normal force $N$ is perpendicular to the surface",
    "Kinetic friction $f_k = \\mu_k N$ (opposes sliding); static friction $f_s \\le \\mu_s N$",
    "Friction direction is opposite the attempted or actual slip — not always 'backward' in word problems without care"
  ],
  explanationSections: [
    { heading: "Weight vs mass", body: "A 60 kg astronaut still has mass 60 kg in orbit but can feel weightless if in free fall with the craft. On Earth, scales read force related to $N$, often calibrated as weight." },
    { heading: "Friction and the normal force", body: "Larger $N$ allows larger maximum friction. On a horizontal surface with no vertical acceleration, $N=mg$. On slopes, $N=mg\\cos\\theta$ in the simple model." },
    { heading: "Exam focus", body: "Items mix $W=mg$ with $f=\\mu N$. Check whether the surface is horizontal and whether the object is sliding or at rest." }
  ],
  formula: [
    { name: "Weight", expression: "W = mg", variables: [{ symbol: "W", meaning: "weight (N)" }, { symbol: "m", meaning: "mass (kg)" }, { symbol: "g", meaning: "gravitational field strength (m/s²)" }] },
    { name: "Kinetic friction", expression: "f_k = μ_k N", variables: [{ symbol: "f_k", meaning: "kinetic friction (N)" }, { symbol: "μ_k", meaning: "coefficient of kinetic friction" }, { symbol: "N", meaning: "normal force (N)" }] }
  ],
  methodChooser: [
    { when: "horizontal surface, not accelerating vertically", use: "$N = mg$" },
    { when: "object sliding", use: "$f = \\mu_k N$ opposite velocity" },
    { when: "object at rest but may slip", use: "$f_s \\le \\mu_s N$ — use equality only at limiting equilibrium" }
  ],
  comparisonTable: {
    headers: ["Quantity", "Unit", "Depends on g?", "Notes"],
    rows: [
      ["Mass", "kg", "No", "Inertia; same everywhere"],
      ["Weight", "N", "Yes", "$W=mg$"],
      ["Normal force", "N", "Indirectly", "From surface contact"],
      ["Friction", "N", "Via N", "Opposes slip; $\\le \\mu N$ static"]
    ]
  },
  workedExample: [
    { problem: "Mass $10\\,\\mathrm{kg}$ on a horizontal floor; $\\mu_k=0.2$; $g=10\\,\\mathrm{m/s^2}$. Kinetic friction while sliding?", solution: "$N=mg=100\\,\\mathrm{N}$. $f_k=\\mu_k N=0.2\\times100=20\\,\\mathrm{N}$.", answer: "$20\\,\\mathrm{N}$" },
    { problem: "What is the weight of a $50\\,\\mathrm{kg}$ student? Take $g=10\\,\\mathrm{m/s^2}$.", solution: "$W=mg=50\\times10=500\\,\\mathrm{N}$.", answer: "$500\\,\\mathrm{N}$" }
  ],
  commonMistakes: [
    "Writing friction as $\\mu mg$ without checking that $N=mg$",
    "Using mass in place of weight in newton-unit answers",
    "Treating static friction as always $\\mu_s N$ (it can be less)",
    "Pointing friction in the wrong direction on free-body diagrams"
  ],
  examPoints: [
    "Weight in newtons; mass in kilograms",
    "Friction needs $N$ first",
    "MCQs often use $g=10\\,\\mathrm{m/s^2}$ for speed"
  ],
  relatedTopics: ["phy-newtons-laws", "phy-universal-gravitation"],
  buildsOn: ["phy-newtons-laws"],
  leadsTo: ["phy-universal-gravitation", "phy-momentum-impulse"],
  usedIn: ["phy-archimedes-principle", "meteo-hydrostatic-equation", "earth-a5"],
  content: true,
  },
  {
id: "phy-momentum-impulse",
  sectionId: "PHY-01",
  order: 4,
  title: "Momentum & Impulse",
  definition: "Momentum $\\vec{p}=m\\vec{v}$ measures motion quantity. Impulse is force applied over time and equals change in momentum.",
  keyFacts: [
    "Momentum $p = mv$ (vector); unit $\\mathrm{kg\\,m/s}$",
    "Impulse $J = F_{\\mathrm{avg}}\\Delta t = \\Delta p$",
    "For a system with no external force, total momentum is conserved",
    "Same impulse: larger $\\Delta t$ means smaller average force (airbags, crumple zones)",
    "Elastic vs inelastic collisions: momentum conserved if isolated; kinetic energy only in elastic"
  ],
  explanationSections: [
    { heading: "Impulse–momentum theorem", body: "A short, hard hit and a long, soft hit can deliver the same $\\Delta p$ with very different average forces. Exam stories about catching eggs or car safety hinge on increasing $\\Delta t$." },
    { heading: "Conservation", body: "If external forces are negligible during a quick collision, $m_1u_1+m_2u_2=m_1v_1+m_2v_2$ (1D)." },
    { heading: "Link to Newton", body: "From $F=ma=m\\Delta v/\\Delta t$, so $F\\Delta t=m\\Delta v=\\Delta p$." }
  ],
  formula: [
    { name: "Momentum", expression: "p = mv", variables: [{ symbol: "p", meaning: "momentum (kg·m/s)" }, { symbol: "m", meaning: "mass (kg)" }, { symbol: "v", meaning: "velocity (m/s)" }] },
    { name: "Impulse", expression: "J = F Δt = Δp", variables: [{ symbol: "J", meaning: "impulse (N·s)" }, { symbol: "F", meaning: "average force (N)" }, { symbol: "Δt", meaning: "time interval (s)" }] }
  ],
  methodChooser: [
    { when: "force and time given, find speed change", use: "$F\\Delta t = m\\Delta v$" },
    { when: "collision, isolated system", use: "conserve total momentum" },
    { when: "safety / soft landing story", use: "same $\\Delta p$, larger $\\Delta t$ ⇒ smaller $F_{\\mathrm{avg}}$" }
  ],
  workedExample: [
    { problem: "A $0.2\\,\\mathrm{kg}$ ball at $15\\,\\mathrm{m/s}$ is stopped in $0.03\\,\\mathrm{s}$. Average force?", solution: "$\\Delta p = 0 - m v = -3\\,\\mathrm{kg\\,m/s}$. $|F|=|\\Delta p|/\\Delta t=3/0.03=100\\,\\mathrm{N}$.", answer: "$100\\,\\mathrm{N}$ (magnitude)" },
    { problem: "Two masses $2\\,\\mathrm{kg}$ at $3\\,\\mathrm{m/s}$ and $1\\,\\mathrm{kg}$ at rest stick together. Common speed?", solution: "Inelastic: $(2)(3)+0=(3)v$ ⇒ $v=2\\,\\mathrm{m/s}$.", answer: "$2\\,\\mathrm{m/s}$" }
  ],
  commonMistakes: [
    "Conserving kinetic energy in every collision automatically",
    "Forgetting momentum is a vector (opposite directions)",
    "Using $F=ma$ with wrong time interval for average force",
    "Mixing impulse units (N·s) with energy (J)"
  ],
  examPoints: [
    "Impulse = area under F–t graph if given",
    "Isolated ⇒ momentum conserved",
    "Soft impact: increase time to reduce force"
  ],
  relatedTopics: ["phy-newtons-laws", "phy-work-energy"],
  buildsOn: ["phy-newtons-laws", "phy-kinematics"],
  leadsTo: ["phy-work-energy"],
  usedIn: ["phy-fluid-dynamics"],
  content: true,
  },
  {
id: "phy-work-energy",
  sectionId: "PHY-02",
  order: 1,
  title: "Work, Energy & Conservation",
  definition: "Work is force along displacement. Kinetic energy is energy of motion; gravitational potential energy depends on height. The work–energy theorem links net work to $\\Delta KE$.",
  keyFacts: [
    "Work $W = Fd\\cos\\theta$ (Joules); only the component of force along displacement does work",
    "Kinetic energy $KE = \\frac{1},
  {2}mv^2$",
    "Near Earth, $\\Delta PE_g = mgh$ (height change)",
    "Net work = change in kinetic energy",
    "Mechanical energy conserved if only conservative forces (e.g. gravity) do work — friction removes mechanical energy as heat"
  ],
  explanationSections: [
    { heading: "Work is not 'effort'", body: "Holding a heavy bag still does no work on the bag ($d=0$). Carrying at constant height with vertical force and horizontal displacement can mean zero work by that vertical force." },
    { heading: "Work–energy theorem", body: "Add up work by all forces (or use net force): that total equals $\\Delta KE$. Friction often does negative work and reduces speed." },
    { heading: "Conservation strategy", body: "If frictionless: $KE_i+PE_i=KE_f+PE_f$. With friction, track energy dissipated separately." }
  ],
  formula: [
    { name: "Work", expression: "W = Fd cosθ", variables: [{ symbol: "W", meaning: "work (J)" }, { symbol: "F", meaning: "force (N)" }, { symbol: "d", meaning: "displacement (m)" }, { symbol: "θ", meaning: "angle between F and d" }] },
    { name: "Kinetic energy", expression: "KE = (1/2)mv²", variables: [{ symbol: "m", meaning: "mass (kg)" }, { symbol: "v", meaning: "speed (m/s)" }] },
    { name: "Gravitational PE change", expression: "ΔPE = mgh", variables: [{ symbol: "m", meaning: "mass (kg)" }, { symbol: "g", meaning: "m/s²" }, { symbol: "h", meaning: "height change (m)" }] }
  ],
  methodChooser: [
    { when: "force and path known", use: "$W=Fd\\cos\\theta$" },
    { when: "speed change from forces", use: "work–energy: $W_{\\mathrm{net}}=\\Delta KE$" },
    { when: "height change, no friction", use: "mechanical energy conservation" }
  ],
  comparisonTable: {
    headers: ["Quantity", "Formula", "Unit", "Note"],
    rows: [
      ["Work", "$Fd\\cos\\theta$", "J", "Can be negative"],
      ["KE", "$\\frac{1},
  {2}mv^2$", "J", "Always ≥ 0"],
      ["PE (gravity)", "$mgh$", "J", "Depends on reference level"],
      ["Power", "$W/t$", "W", "See next topic"]
    ]
  },
  workedExample: [
    { problem: "A $3\\,\\mathrm{kg}$ box is lifted vertically $2\\,\\mathrm{m}$ at constant speed. Work by the lifter? ($g=10$)", solution: "Constant speed ⇒ lift force $=mg=30\\,\\mathrm{N}$. $W=Fd=60\\,\\mathrm{J}$. Also $\\Delta PE=mgh=60\\,\\mathrm{J}$.", answer: "$60\\,\\mathrm{J}$" },
    { problem: "Net work of $100\\,\\mathrm{J}$ is done on a $5\\,\\mathrm{kg}$ mass starting from rest. Final speed?", solution: "$W=\\Delta KE=\\frac{1},
  {2}mv^2$ ⇒ $100=\\frac{1},
  {2}(5)v^2$ ⇒ $v^2=40$ ⇒ $v\\approx 6.3\\,\\mathrm{m/s}$.", answer: "$\\sqrt{40}\\,\\mathrm{m/s}\\approx 6.3\\,\\mathrm{m/s}$" }
  ],
  commonMistakes: [
    "Ignoring $\\cos\\theta$ when force is not along the path",
    "Using $W=Fd$ for centripetal force on uniform circular motion (that force does no work)",
    "Forgetting friction's negative work in energy balances",
    "Treating PE reference as absolute without defining $h=0$"
  ],
  examPoints: [
    "Work unit joule (J) = N·m",
    "No displacement ⇒ no work",
    "Friction typically non-conservative"
  ],
  relatedTopics: ["phy-power-efficiency", "phy-momentum-impulse"],
  buildsOn: ["phy-newtons-laws", "phy-kinematics", "math-2-3"],
  leadsTo: ["phy-power-efficiency", "phy-thermodynamics-laws"],
  usedIn: ["phy-heat-transfer-equilibrium", "meteo-heat-transfer", "meteo-adiabatic-cloud-formation", "env-ecosystem-structure-and-energy-flow", "env-energy-sources"],
  content: true,
  },
  {
id: "phy-power-efficiency",
  sectionId: "PHY-02",
  order: 2,
  title: "Power & Efficiency",
  definition: "Power is the rate of doing work or transferring energy. Efficiency is useful output energy divided by total input energy.",
  keyFacts: [
    "Power $P = W/t = E/t$; unit watt (W) = J/s",
    "Also $P = Fv$ when force and velocity are along the same line",
    "Efficiency $\\eta = (E_{\\mathrm{useful}}/E_{\\mathrm{input}})\\times 100\\%$",
    "No real machine is 100% efficient — some energy becomes waste heat",
    "Same work in less time means greater power"
  ],
  explanationSections: [
    { heading: "Power vs energy", body: "Energy is the capacity to do work; power is how fast energy is transferred. Two motors can deliver the same energy; the faster one has higher power." },
    { heading: "Efficiency in MCQs", body: "Useful output is never greater than input. If efficiency is 25%, input energy is four times useful output." },
    { heading: "Link to circuits", body: "Electrical power $P=IV$ is the same idea: energy per time in another form — see circuits topics." }
  ],
  formula: [
    { name: "Power", expression: "P = W/t", variables: [{ symbol: "P", meaning: "power (W)" }, { symbol: "W", meaning: "work or energy (J)" }, { symbol: "t", meaning: "time (s)" }] },
    { name: "Efficiency", expression: "η = (E_out / E_in) × 100%", variables: [{ symbol: "E_out", meaning: "useful energy output (J)" }, { symbol: "E_in", meaning: "total energy input (J)" }] }
  ],
  methodChooser: [
    { when: "work and time given", use: "$P=W/t$" },
    { when: "force and constant speed", use: "$P=Fv$" },
    { when: "useful vs input energy", use: "efficiency ratio × 100%" }
  ],
  comparisonTable: {
    headers: ["Quantity", "Measures", "Unit"],
    rows: [
      ["Energy / work", "Total transfer", "J"],
      ["Power", "Rate of transfer", "W"],
      ["Efficiency", "Useful fraction", "% (dimensionless ratio)"]
    ]
  },
  workedExample: [
    { problem: "A machine does $1500\\,\\mathrm{J}$ of work in $5\\,\\mathrm{s}$. Power?", solution: "$P=W/t=1500/5=300\\,\\mathrm{W}$.", answer: "$300\\,\\mathrm{W}$" },
    { problem: "A motor takes $2000\\,\\mathrm{J}$ and delivers $500\\,\\mathrm{J}$ useful work. Efficiency?", solution: "$\\eta=(500/2000)\\times100\\%=25\\%$.", answer: "$25\\%$" }
  ],
  commonMistakes: [
    "Confusing joules (energy) with watts (power)",
    "Efficiency > 100% (impossible for passive machines)",
    "Using $P=Fv$ when force and velocity are not aligned",
    "Forgetting to convert minutes to seconds in $P=W/t$"
  ],
  examPoints: [
    "1 kW = 1000 W",
    "Higher power ≠ more total energy unless time is considered",
    "Efficiency always uses useful output over total input"
  ],
  relatedTopics: ["phy-work-energy"],
  buildsOn: ["phy-work-energy"],
  leadsTo: [],
  usedIn: ["env-energy-sources", "phy-circuits-power-energy"],
  content: true,
  },
  {
  id: "phy-states-of-matter",
  sectionId: "PHY-03",
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
  usedIn: ["phy-thermodynamics-laws", "meteo-moisture-metrics", "meteo-droplet-microphysics"]
},

{
  id: "phy-density",
  sectionId: "PHY-03",
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
  usedIn: ["phy-atmospheric-pressure-physics", "meteo-static-stability"]
},

{
  id: "phy-pressure-fluids",
  sectionId: "PHY-03",
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
  relatedTopics: ["phy-atmospheric-pressure-physics", "phy-density", "meteo-forces-governing-wind"],
  content: true,
  buildsOn: ["phy-density", "phy-units-measurement"],
  leadsTo: ["phy-atmospheric-pressure-physics", "phy-archimedes-principle", "phy-fluid-dynamics"],
  usedIn: ["meteo-hydrostatic-equation", "meteo-pressure-instruments"]
},

{
  id: "phy-atmospheric-pressure-physics",
  sectionId: "PHY-03",
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
  relatedTopics: ["phy-pressure-fluids", "meteo-forces-governing-wind"],
  content: true,
  buildsOn: ["phy-pressure-fluids", "phy-units-measurement"],
  leadsTo: ["meteo-hydrostatic-equation"],
  usedIn: ["meteo-hydrostatic-equation", "meteo-pressure-instruments", "env-air-pollution"]
},

// ============================= SECTION PHY-D: Heat & Thermodynamics =============================

{
  id: "phy-temperature-heat",
  sectionId: "PHY-04",
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
  relatedTopics: ["phy-thermal-expansion", "phy-heat-transfer-equilibrium", "meteo-local-seasonal-winds"],
  content: true,
  buildsOn: ["phy-units-measurement", "phy-states-of-matter"],
  leadsTo: ["phy-thermal-expansion", "phy-heat-transfer-equilibrium", "phy-thermodynamics-laws"],
  usedIn: ["meteo-vertical-structure", "meteo-heat-transfer"]
},

{
  id: "phy-thermal-expansion",
  sectionId: "PHY-04",
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
  sectionId: "PHY-04",
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
  relatedTopics: ["phy-temperature-heat", "phy-thermodynamics-laws", "meteo-heat-transfer"],
  content: true,
  buildsOn: ["phy-temperature-heat"],
  leadsTo: ["phy-heat-transfer-mechanisms", "phy-thermodynamics-laws"],
  usedIn: ["meteo-heat-transfer", "meteo-radiation-laws"]
},

{
  id: "phy-thermodynamics-laws",
  sectionId: "PHY-04",
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
  relatedTopics: ["phy-heat-transfer-equilibrium", "phy-states-of-matter", "meteo-adiabatic-cloud-formation", "meteo-lapse-rates"],
  content: true,
  buildsOn: ["phy-work-energy", "phy-temperature-heat", "phy-heat-transfer-equilibrium"],
  leadsTo: ["phy-kinetic-theory"],
  usedIn: ["meteo-lapse-rates", "meteo-static-stability", "meteo-adiabatic-cloud-formation", "meteo-moisture-metrics", "env-energy-sources", "env-climate-change-response"]
},

// ============================= SECTION PHY-E: Waves & Sound =============================

{
  id: "phy-wave-properties",
  sectionId: "PHY-05",
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
  usedIn: ["phy-electromagnetic-induction", "meteo-radiation-laws", "earth-h2"]
},

{
  id: "phy-wave-types",
  sectionId: "PHY-05",
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
  sectionId: "PHY-05",
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
  sectionId: "PHY-06",
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
  sectionId: "PHY-06",
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
  usedIn: ["meteo-remote-sensing"]
},

{
  id: "phy-lenses-mirrors-em-spectrum",
  sectionId: "PHY-06",
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
  relatedTopics: ["phy-reflection-refraction", "phy-wave-types", "meteo-remote-sensing"],
  content: true,
  buildsOn: ["phy-reflection-refraction"],
  leadsTo: ["phy-lens-mirror-imaging", "phy-electromagnetic-induction"],
  usedIn: ["meteo-radiation-laws", "meteo-remote-sensing"]
},

// ============================= SECTION PHY-G: Electricity =============================

{
  id: "phy-electric-charge-coulomb",
  sectionId: "PHY-07",
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
  sectionId: "PHY-07",
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
  sectionId: "PHY-07",
  order: 3,
  title: "Current, Voltage & Resistance (Ohm's Law)",
  definition: "Electric current is charge flow rate. Voltage is energy per charge. Resistance opposes current. Ohm's law links them for ohmic devices: $V=IR$.",
  keyFacts: [
    "Current $I = Q/t$; unit ampere (A)",
    "Voltage (potential difference) unit volt (V)",
    "Resistance unit ohm ($\\Omega$)",
    "Ohm's law: $V = IR$ (ohmic resistor at fixed temperature)",
    "Resistance often rises with temperature for metals"
  ],
  explanationSections: [
    { heading: "What each quantity means", body: "Current counts charge per second. Voltage is the 'push' or energy change per coulomb. Resistance is how strongly the device opposes current." },
    { heading: "Using Ohm's law", body: "Rearrange to $I=V/R$ or $R=V/I$. Only apply when the device is ohmic (linear $V$–$I$)." },
    { heading: "Exam habits", body: "Keep units consistent (mA → A). Series and parallel come in the next topic — here focus on a single resistor." }
  ],
  formula: { name: "Ohm's law", expression: "V = I R", variables: [{ symbol: "V", meaning: "voltage (V)" }, { symbol: "I", meaning: "current (A)" }, { symbol: "R", meaning: "resistance (Ω)" }] },
  methodChooser: [
    { when: "find current", use: "$I=V/R$" },
    { when: "find resistance from measurements", use: "$R=V/I$" },
    { when: "find voltage drop", use: "$V=IR$" }
  ],
  workedExample: [
    { problem: "A $12\\,\\mathrm{V}$ battery drives current through $4\\,\\Omega$. Current?", solution: "$I=V/R=12/4=3\\,\\mathrm{A}$.", answer: "$3\\,\\mathrm{A}$" },
    { problem: "A lamp takes $0.5\\,\\mathrm{A}$ from $230\\,\\mathrm{V}$. Resistance?", solution: "$R=V/I=230/0.5=460\\,\\Omega$.", answer: "$460\\,\\Omega$" }
  ],
  commonMistakes: [
    "Using $V=IR$ for non-ohmic devices without care",
    "Leaving current in mA while voltage in V",
    "Thinking high resistance always means high voltage (depends on current)",
    "Confusing resistance with resistivity"
  ],
  examPoints: [
    "Ohm's law is the default single-resistor tool",
    "Unit check: V, A, Ω",
    "Next step: combine resistors in series/parallel"
  ],
  relatedTopics: ["phy-electric-field-potential", "phy-circuits-power-energy"],
  buildsOn: ["phy-electric-field-potential"],
  leadsTo: ["phy-circuits-power-energy"],
  usedIn: ["phy-circuits-power-energy", "phy-transformers-ac"],
  content: true,
  },
  {
id: "phy-circuits-power-energy",
  sectionId: "PHY-07",
  order: 4,
  title: "Circuits: Series, Parallel, Power & Energy",
  definition: "Series resistors share current; parallel resistors share voltage. Electrical power is energy per time: $P=IV=I^2R=V^2/R$. Energy $E=Pt$.",
  keyFacts: [
    "Series: $R_{\\mathrm{eq}} = R_1+R_2+\\cdots$; same current through each",
    "Parallel: $1/R_{\\mathrm{eq}} = 1/R_1+1/R_2+\\cdots$; same voltage across each",
    "Power $P = IV = I^2R = V^2/R$",
    "Energy (kWh in households) = power × time",
    "In series, larger $R$ drops more voltage; in parallel, smaller $R$ draws more current"
  ],
  explanationSections: [
    { heading: "Series vs parallel intuition", body: "Series is one path — break one bulb and the string fails (ideal simple series). Parallel is multiple paths — one branch can fail while others run." },
    { heading: "Power formulas", body: "Use $I^2R$ when current is known; $V^2/R$ when voltage is known. For a fixed voltage supply, smaller $R$ means larger power." },
    { heading: "Exam strategy", body: "First find $R_{\\mathrm{eq}}$, then total current $I_{\\mathrm{tot}}=V/R_{\\mathrm{eq}}$, then branch currents or power as asked." }
  ],
  formula: [
    { name: "Series resistance", expression: "R_eq = R₁ + R₂ + …", variables: [{ symbol: "R_eq", meaning: "equivalent resistance (Ω)" }] },
    { name: "Parallel resistance (two)", expression: "1/R_eq = 1/R₁ + 1/R₂", variables: [{ symbol: "R_eq", meaning: "equivalent resistance (Ω)" }] },
    { name: "Electrical power", expression: "P = IV = I²R = V²/R", variables: [{ symbol: "P", meaning: "power (W)" }, { symbol: "I", meaning: "current (A)" }, { symbol: "V", meaning: "voltage (V)" }, { symbol: "R", meaning: "resistance (Ω)" }] }
  ],
  methodChooser: [
    { when: "resistors one after another", use: "series: add $R$" },
    { when: "resistors side by side on same two nodes", use: "parallel: add reciprocals" },
    { when: "power with known I and R", use: "$P=I^2R$" },
    { when: "power with known V and R", use: "$P=V^2/R$" }
  ],
  comparisonTable: {
    headers: ["Feature", "Series", "Parallel"],
    rows: [
      ["Current", "Same through all", "Splits among branches"],
      ["Voltage", "Splits across resistors", "Same across branches"],
      ["R_eq", "Larger than each", "Smaller than smallest"],
      ["Open one resistor", "Whole series stops", "Other branches can work"]
    ]
  },
  workedExample: [
    { problem: "Two resistors $3\\,\\Omega$ and $6\\,\\Omega$ in parallel on $12\\,\\mathrm{V}$. Find $R_{\\mathrm{eq}}$ and total current.", solution: "$1/R_{\\mathrm{eq}}=1/3+1/6=1/2$ ⇒ $R_{\\mathrm{eq}}=2\\,\\Omega$. $I=V/R=12/2=6\\,\\mathrm{A}$.", answer: "$2\\,\\Omega$, $6\\,\\mathrm{A}$" },
    { problem: "A $10\\,\\Omega$ heater on $100\\,\\mathrm{V}$. Power?", solution: "$P=V^2/R=10000/10=1000\\,\\mathrm{W}$.", answer: "$1000\\,\\mathrm{W}$ (1 kW)" }
  ],
  commonMistakes: [
    "Adding parallel resistances as $R_1+R_2$",
    "Assuming same current in parallel branches",
    "Using $P=IV$ with total V and a branch I incorrectly",
    "Forgetting energy = power × time when asked for kWh"
  ],
  examPoints: [
    "Draw the circuit and mark series vs parallel before calculating",
    "Three forms of power are equivalent for ohmic $R$",
    "Household bills use energy, not power alone"
  ],
  relatedTopics: ["phy-current-voltage-resistance", "phy-power-efficiency"],
  buildsOn: ["phy-current-voltage-resistance", "phy-power-efficiency"],
  leadsTo: ["phy-capacitance", "phy-transformers-ac"],
  usedIn: ["env-energy-sources"],
  content: true,
  },
  {
  id: "phy-magnetic-fields-force",
  sectionId: "PHY-08",
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
  sectionId: "PHY-08",
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
  usedIn: ["meteo-radiation-laws", "meteo-remote-sensing", "meteo-ionosphere-exosphere"]
},

// ============================= SECTION PHY-I: Modern Physics (low priority) =============================

{
  id: "phy-atomic-structure",
  sectionId: "PHY-09",
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
  sectionId: "PHY-09",
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
  sectionId: "PHY-10",
  order: 1,
  title: "Universal Gravitation",
  definition: "Every mass attracts every other mass with a force proportional to the product of masses and inversely proportional to the square of the separation of centres.",
  keyFacts: [
    "$F = G\\frac{m_1 m_2},
  {r^2}$ with $G$ the universal constant",
    "Force is always attractive along the line joining centres",
    "Field strength $g = GM/r^2$ near a spherical mass (outside)",
    "Weight on Earth is this force for Earth–object pair",
    "Doubling distance cuts force by 4; tripling cuts by 9"
  ],
  explanationSections: [
    { heading: "Inverse-square idea", body: "The same total 'influence' spreads over a sphere of area $4\\pi r^2$, so strength falls as $1/r^2$. This is the most tested quantitative pattern in this topic." },
    { heading: "Link to surface gravity", body: "On Earth, $mg = GMm/R^2$ so $g = GM/R^2$. Mass cancels — all objects fall with the same $g$ in vacuum near Earth." },
    { heading: "Exam comparisons", body: "Ratio problems: $\\frac{F'},
  {F} = \\frac{m_1'},
  {m_1}\\frac{m_2'},
  {m_2}\\frac{r^2},
  {r'^2}$. Often masses fixed and only $r$ changes." }
  ],
  formula: { name: "Newton's law of gravitation", expression: "F = G m₁ m₂ / r²", variables: [{ symbol: "F", meaning: "gravitational force (N)" }, { symbol: "G", meaning: "gravitational constant" }, { symbol: "m₁, m₂", meaning: "masses (kg)" }, { symbol: "r", meaning: "centre-to-centre distance (m)" }] },
  methodChooser: [
    { when: "ratio of forces when distance changes", use: "$F \\propto 1/r^2$" },
    { when: "surface g", use: "$g = GM/R^2$" },
    { when: "both masses and r change", use: "write full ratio with $m$ and $r^2$ factors" }
  ],
  limitCases: [
    { condition: "$r \\to \\infty$", result: "$F \\to 0$" },
    { condition: "double $r$, same masses", result: "$F$ becomes $F/4$" }
  ],
  workedExample: [
    { problem: "Gravitational force between two masses is $F$ at distance $r$. What is the force at distance $2r$?", solution: "$F' = G\\frac{m_1m_2},
  {(2r)^2} = F/4$.", answer: "$F/4$" },
    { problem: "If $r$ is halved, factor by which $F$ changes?", solution: "$r' = r/2$ ⇒ $F' = 4F$ (increases 4×).", answer: "4 times larger" }
  ],
  commonMistakes: [
    "Using $1/r$ instead of $1/r^2$",
    "Measuring $r$ to the surface incorrectly when centres matter for spheres",
    "Thinking gravity needs air or contact",
    "Confusing $G$ with $g$"
  ],
  examPoints: [
    "Highest-yield skill: inverse-square scaling",
    "Force mutual: same magnitude on both masses (3rd law)",
    "Compare with Coulomb's law structure (different constant and charges)"
  ],
  relatedTopics: ["phy-gravity-weight-friction", "phy-electric-charge-coulomb"],
  buildsOn: ["phy-gravity-weight-friction", "math-3-1"],
  leadsTo: [],
  usedIn: ["earth-a5"],
  content: true,
  },
  {
  id: "phy-units-measurement",
  sectionId: "PHY-11",
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
  usedIn: ["phy-temperature-heat", "phy-atmospheric-pressure-physics", "meteo-hydrostatic-equation", "meteo-radiation-laws", "meteo-pressure-instruments"]
},

{
  id: "phy-scalars-vectors",
  sectionId: "PHY-11",
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
  relatedTopics: ["phy-vector-operations", "phy-vector-applications", "meteo-forces-governing-wind"],
  content: true,
  buildsOn: ["math-7-1", "phy-units-measurement"],
  leadsTo: ["phy-vector-operations", "phy-kinematics"],
  usedIn: ["phy-vector-operations", "phy-vector-applications", "phy-newtons-laws", "meteo-forces-governing-wind", "meteo-coriolis-effect"]
},

{
  id: "phy-vector-operations",
  sectionId: "PHY-11",
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
  usedIn: ["phy-vector-applications", "phy-momentum-impulse", "meteo-forces-governing-wind"]
},

{
  id: "phy-vector-applications",
  sectionId: "PHY-11",
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
  relatedTopics: ["phy-scalars-vectors", "phy-vector-operations", "phy-newtons-laws", "meteo-forces-governing-wind"],
  content: true,
  buildsOn: ["phy-vector-operations", "phy-newtons-laws"],
  leadsTo: ["meteo-forces-governing-wind"],
  usedIn: ["meteo-forces-governing-wind", "meteo-geostrophic-wind", "meteo-global-circulation"]
},

// ============================= SECTION PHY-C ADDITIONS: Fluid Dynamics =============================

{
  id: "phy-archimedes-principle",
  sectionId: "PHY-03",
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
  usedIn: ["meteo-static-stability", "meteo-adiabatic-cloud-formation"]
},

{
  id: "phy-fluid-dynamics",
  sectionId: "PHY-03",
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
    expression: "A_1 v_1 = A_2 v_2 \\quad P + \\frac{1},
  {2}\\rho v^2 + \\rho g h = \\text{constant}",
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
  relatedTopics: ["phy-pressure-fluids", "phy-archimedes-principle", "meteo-jet-stream"],
  content: true,
  buildsOn: ["phy-pressure-fluids", "phy-archimedes-principle", "phy-work-energy"],
  leadsTo: [],
  usedIn: ["meteo-jet-stream", "meteo-ocean-currents"]
},

// ============================= SECTION PHY-D ADDITIONS: Heat Transfer Details & Kinetic Theory =============================

{
  id: "phy-heat-transfer-mechanisms",
  sectionId: "PHY-04",
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
    expression: "\\frac{Q},
  {t} = \\frac{kA\\Delta T},
  {L} \\quad P = \\sigma \\varepsilon A T^4",
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
  relatedTopics: ["phy-heat-transfer-equilibrium", "phy-temperature-heat", "meteo-heat-transfer", "meteo-greenhouse-effect"],
  content: true,
  buildsOn: ["phy-heat-transfer-equilibrium"],
  leadsTo: ["meteo-heat-transfer"],
  usedIn: ["meteo-heat-transfer", "meteo-radiation-laws", "meteo-vertical-structure", "env-air-pollution", "env-climate-change-response"]
},

{
  id: "phy-kinetic-theory",
  sectionId: "PHY-04",
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
    expression: "\\overline{KE} = \\frac{3},
  {2} k_B T \\quad v_{rms} = \\sqrt{\\frac{3 k_B T},
  {m}}",
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
  relatedTopics: ["phy-temperature-heat", "phy-thermodynamics-laws", "phy-pressure-fluids", "meteo-greenhouse-effect"],
  content: true,
  buildsOn: ["phy-states-of-matter", "phy-thermodynamics-laws"],
  leadsTo: [],
  usedIn: ["meteo-gas-law"]
},

// ============================= SECTION PHY-E ADDITION: Doppler Effect =============================

{
  id: "phy-doppler-effect",
  sectionId: "PHY-05",
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
    expression: "f_{obs} = f_{src} \\times \\frac{v},
  {v \\pm v_{src}}",
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
  relatedTopics: ["phy-wave-properties", "phy-sound-waves", "meteo-remote-sensing"],
  content: true,
  buildsOn: ["phy-sound-waves"],
  leadsTo: [],
  usedIn: ["meteo-remote-sensing"]
},

// ============================= SECTION PHY-F ADDITION: Lens & Mirror Image Formation =============================

{
  id: "phy-lens-mirror-imaging",
  sectionId: "PHY-06",
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
    expression: "\\frac{1},
  {f} = \\frac{1},
  {v} + \\frac{1},
  {u} \\quad m = \\frac{-v},
  {u}",
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
  sectionId: "PHY-07",
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
    expression: "C = \\frac{Q},
  {V} \\quad C = \\frac{\\varepsilon_0 A},
  {d} \\quad E = \\frac{1},
  {2}CV^2",
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
  sectionId: "PHY-08",
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
    expression: "\\frac{V_p},
  {V_s} = \\frac{N_p},
  {N_s} \\quad V_p I_p = V_s I_s \\text{ (ideal)}",
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
  sectionId: "PHY-09",
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
    expression: "N(t) = N_0 \\times (\\frac{1},
  {2})^{t/t_{1/2}} = N_0 e^{-\\lambda t} \\quad t_{1/2} = \\frac{\\ln 2},
  {\\lambda}",
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
  sectionId: "PHY-09",
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
    expression: "k = \\frac{\\text{neutrons in generation } n+1},
  {\\text{neutrons in generation } n}",
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