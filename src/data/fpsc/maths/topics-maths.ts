// topics-maths.ts — FPSC Basic Mathematics content bank
// BATCH 1: Section MATH-A (Number Systems & Arithmetic) — 8 topics.
// Schema follows integrated syllabus: Basic Mathematics (no calculus, matrices,
// linear algebra, complex numbers, or advanced statistics).
// Math formulas use $...$ (inline) and $$...$$ (block) for KaTeX rendering.

import type { Topic } from '@/types';

export const topics: Topic[] = [

// ════════════════════════════════════════════════════════════════════
// SECTION MATH-A: Number Systems & Arithmetic
// ════════════════════════════════════════════════════════════════════

{
  id: "math-1-1",
  sectionId: "MATH-A",
  order: 1,
  title: "Number Types: Natural, Whole, Integers, Rational, Irrational & Real",
  definition: "A number system is a structured way of representing quantities using a consistent set of symbols, operations, and rules. The real number system is the most commonly used in science and engineering and includes every number that can be placed on a continuous number line.",
  keyFacts: [
    "Natural numbers (N): 1, 2, 3, 4, ... — used for counting",
    "Whole numbers (W): 0, 1, 2, 3, ... — naturals plus zero",
    "Integers (Z): ..., -3, -2, -1, 0, 1, 2, 3, ... — wholes plus negatives",
    "Rational numbers (Q): can be written as p/q with integer p, q and q ≠ 0",
    "Irrational numbers: cannot be written as p/q — non-terminating, non-repeating decimals",
    "Real numbers (R): rational ∪ irrational — every number on the number line",
    "Every integer is rational (e.g., 5 = 5/1), but not every rational is an integer",
    "√2, π, and e are classic irrationals",
    "The hierarchy: N ⊂ W ⊂ Z ⊂ Q ⊂ R"
  ],
  explanationSections: [
    { heading: "1. The Hierarchy of Number Sets", body: "Number sets nest inside each other. Every natural number is also a whole number; every whole number is also an integer; every integer is also a rational number; every rational number is also a real number. The only place the nesting ends is the jump from rationals to all reals — beyond rationals, you reach irrationals, which are real but not rational." },
    { heading: "2. Rational vs Irrational: The Test", body: "A number is rational if and only if it can be written as p/q with integer p, q and q ≠ 0. This includes all terminating decimals (e.g., 0.75 = 3/4) and all repeating decimals (e.g., 0.333... = 1/3). Irrationals cannot be written in this form — their decimal expansion never terminates and never repeats. √2 is the classic example: no matter how many digits you compute, the pattern never repeats." },
    { heading: "3. Why This Matters in Practice", body: "In science you will see irrationals constantly: π (geometry, circular motion), e (exponential growth, radioactive decay), and √2, √3 (in physics formulas involving energy and motion). The fact that they are irrational does not make them less 'real' — they are called real numbers because every irrational still has a precise position on the number line." },
    { heading: "4. Common Misconceptions", body: "A frequent mistake is to assume that any decimal with many digits is irrational. The opposite is often true: 0.333... (repeating 3) is rational because 0.333... = 1/3 exactly. The distinguishing feature of an irrational decimal is that it neither terminates (like 0.5) nor repeats in a fixed pattern. Another common error: assuming a number with a square root is automatically irrational. √4 = 2 is rational; √9 = 3 is rational — the square root must be of a non-perfect square to be irrational." }
  ],
  examPoints: [
    "Test if √n is irrational by checking if n is a perfect square: √2, √3, √5, √6, √7 are irrational; √1, √4, √9, √16 are rational",
    "Sum of a non-zero rational and an irrational is ALWAYS irrational",
    "Product of a non-zero rational and an irrational is ALWAYS irrational",
    "Sum or product of two irrationals CAN BE rational — e.g., √2 × √2 = 2 (rational); √2 + (3 − √2) = 3 (rational)"
  ],
  comparisonTable: {
    headers: ["Set", "Symbol", "Includes", "Example"],
    rows: [
      ["Natural", "$\\mathbb{N}$", "1, 2, 3, ...", "5"],
      ["Whole", "$\\mathbb{W}$", "0, 1, 2, ...", "0"],
      ["Integer", "$\\mathbb{Z}$", "..., -2, -1, 0, 1, 2, ...", "-7"],
      ["Rational", "$\\mathbb{Q}$", "All p/q with q ≠ 0", "3/4, 0.5, -2/3"],
      ["Irrational", "—", "Non-repeating, non-terminating", "√2, π, e"],
      ["Real", "$\\mathbb{R}$", "All numbers on number line", "All of the above"]
    ]
  },
  workedExample: {
    problem: "Classify each of the following as natural, whole, integer, rational, or irrational: (a) -7, (b) 0, (c) 3/4, (d) √5, (e) π, (f) 8",
    solution: "(a) -7 is an integer (and rational, real). (b) 0 is a whole number (and integer, rational, real). (c) 3/4 is rational and real. (d) √5 is irrational (5 is not a perfect square) and real. (e) π is irrational and real. (f) 8 is natural, whole, integer, rational, and real.",
    answer: "(a) integer; (b) whole/integer; (c) rational; (d) irrational; (e) irrational; (f) natural"
  },
  commonMistakes: [
    "Assuming 0 is a natural number — in most definitions, N starts from 1, not 0",
    "Confusing 'non-terminating' with 'irrational' — 0.333... is non-terminating but rational",
    "Saying '√n is always irrational' — only true when n is not a perfect square"
  ],
  relatedTopics: ["math-1-2", "math-1-3", "math-1-4", "math-1-5"],
  content: true,
  buildsOn: [],
  leadsTo: ["math-1-2", "math-1-3", "math-1-5"],
  usedIn: ["math-1-6", "math-3-1", "math-3-2", "math-3-3", "phy-units-measurement", "ra-data-types"]
},

{
  id: "math-1-2",
  sectionId: "MATH-A",
  order: 2,
  title: "Order of Operations (BODMAS / PEMDAS)",
  definition: "The order of operations is a fixed sequence of rules for evaluating mathematical expressions. BODMAS (Brackets, Orders, Division, Multiplication, Addition, Subtraction) and PEMDAS (Parentheses, Exponents, Multiplication, Division, Addition, Subtraction) are the two common names for the same convention.",
  keyFacts: [
    "B: Brackets first (parentheses, braces, brackets)",
    "O / E: Orders or Exponents (powers, roots)",
    "D and M: Division and Multiplication, left to right (equal priority)",
    "A and S: Addition and Subtraction, left to right (equal priority)",
    "Multiplication and division have equal priority; do them left to right",
    "Addition and subtraction have equal priority; do them left to right",
    "Negation (−) is not subtraction; it has higher priority than subtraction"
  ],
  explanationSections: [
    { heading: "1. Why a Standard Order Exists", body: "Without a fixed order, the expression 2 + 3 × 4 could mean (2 + 3) × 4 = 20 or 2 + (3 × 4) = 14. Mathematics is unambiguous, so the convention is: multiplication before addition. The order is universal: brackets, then exponents, then multiplication/division, then addition/subtraction." },
    { heading: "2. The Equal-Priority Trap", body: "Multiplication and division are NOT 'multiplication first, then division'. They have the SAME priority. So 12 ÷ 3 × 2 = (12 ÷ 3) × 2 = 8, not 12 ÷ (3 × 2) = 2. Work strictly left to right when operations share priority." },
    { heading: "3. The Unary Minus vs Subtraction Minus", body: "In an expression like -3², the − is unary (negation), not subtraction. Convention: exponentiation binds tighter than unary minus, so -3² = -(3²) = -9. To square a negative number, use parentheses: (-3)² = 9." }
  ],
  formula: {
    name: "BODMAS evaluation sequence",
    expression: "B → O → D/M (left→right) → A/S (left→right)",
    variables: [
      { symbol: "B", meaning: "Brackets" },
      { symbol: "O", meaning: "Orders (exponents, roots)" },
      { symbol: "D, M", meaning: "Division, Multiplication (left to right)" },
      { symbol: "A, S", meaning: "Addition, Subtraction (left to right)" }
    ]
  },
  examPoints: [
    "12 ÷ 3 × 2 = 8, not 2 — work left to right for equal-priority operations",
    "-3² means -(3²) = -9, NOT (-3)² = 9",
    "Nested brackets: solve innermost first (curly → square → round)"
  ],
  workedExample: {
    problem: "Evaluate: 24 ÷ (2 + 4) × 3 − 2³ + 5",
    solution: "Step 1 — Brackets: (2 + 4) = 6, so expression becomes 24 ÷ 6 × 3 − 2³ + 5. Step 2 — Exponents: 2³ = 8. Expression: 24 ÷ 6 × 3 − 8 + 5. Step 3 — Division & Multiplication (left to right): 24 ÷ 6 = 4; 4 × 3 = 12. Expression: 12 − 8 + 5. Step 4 — Addition & Subtraction (left to right): 12 − 8 = 4; 4 + 5 = 9.",
    answer: "9"
  },
  commonMistakes: [
    "Doing division before multiplication regardless of order (use left to right)",
    "Treating -3² as (-3)² — the negation is unary, not in a bracket",
    "Forgetting to evaluate brackets first"
  ],
  relatedTopics: ["math-1-1", "math-1-5", "math-2-1"],
  content: true,
  buildsOn: ["math-1-1"],
  leadsTo: ["math-2-3", "math-2-6"],
  usedIn: ["math-2-4", "math-2-5", "math-8-3", "phy-kinematics"]
},

{
  id: "math-1-3",
  sectionId: "MATH-A",
  order: 3,
  title: "Prime Numbers, Factors & Multiples",
  definition: "A prime number is a natural number greater than 1 with exactly two factors: 1 and itself. A composite number has more than two factors. The Fundamental Theorem of Arithmetic states that every integer greater than 1 is either prime or can be expressed uniquely as a product of primes.",
  keyFacts: [
    "Prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, ...",
    "2 is the only even prime number",
    "1 is neither prime nor composite",
    "Composite numbers have more than two factors (e.g., 4 = 1×2×2×4, but as factors: 1, 2, 4)",
    "Every integer greater than 1 is either prime or composite",
    "Prime factorization: breaking a number into its prime factors (e.g., 60 = 2² × 3 × 5)",
    "Divisibility rule for 2: last digit is even",
    "Divisibility rule for 3: sum of digits divisible by 3",
    "Divisibility rule for 5: last digit is 0 or 5",
    "Divisibility rule for 9: sum of digits divisible by 9",
    "Divisibility rule for 11: alternating sum of digits divisible by 11"
  ],
  explanationSections: [
    { heading: "1. Why 1 is Neither Prime Nor Composite", body: "By definition, a prime has exactly two distinct factors. The number 1 has only one factor (itself), so it cannot be prime. The definition of composite also requires at least two distinct proper factors, which 1 does not have. This is not arbitrary — if 1 were prime, the Fundamental Theorem of Arithmetic would fail because every number could be factored in infinitely many ways." },
    { heading: "2. Prime Factorization", body: "Any integer greater than 1 can be written uniquely as a product of prime numbers. For example: 60 = 2 × 2 × 3 × 5 = 2² × 3 × 5. To find the prime factorization, divide by the smallest possible prime repeatedly until you reach 1. Example: 84 ÷ 2 = 42; 42 ÷ 2 = 21; 21 ÷ 3 = 7; 7 ÷ 7 = 1. So 84 = 2² × 3 × 7." },
    { heading: "3. Divisibility Rules in Practice", body: "These rules let you test divisibility without long division. For 11: 627 — compute 6 − 2 + 7 = 11, which is divisible by 11, so 627 is divisible by 11. For 9: 738 — sum = 7 + 3 + 8 = 18, divisible by 9, so 738 is divisible by 9. These shortcuts save significant time in exams." }
  ],
  examPoints: [
    "1 is neither prime nor composite — do not include it in either list",
    "2 is the only even prime; all other primes are odd",
    "For HCF, use the LOWEST power of common primes; for LCM, use the HIGHEST"
  ],
  workedExample: {
    problem: "Find the prime factorization of 180. Is 627 divisible by 11?",
    solution: "180: 180 ÷ 2 = 90; 90 ÷ 2 = 45; 45 ÷ 3 = 15; 15 ÷ 3 = 5; 5 ÷ 5 = 1. So 180 = 2² × 3² × 5. For 627: alternating sum = 6 − 2 + 7 = 11, which is divisible by 11, so YES, 627 = 11 × 57.",
    answer: "180 = 2² × 3² × 5; YES, 627 is divisible by 11"
  },
  commonMistakes: [
    "Counting 1 as a prime number (it is not)",
    "Stopping prime factorization too early — must reach 1",
    "Reversing HCF and LCM rules (lowest vs highest powers)"
  ],
  relatedTopics: ["math-1-4", "math-1-1"],
  content: true,
  buildsOn: ["math-1-1"],
  leadsTo: ["math-1-4"],
  usedIn: ["math-1-5", "math-2-4"]
},

{
  id: "math-1-4",
  sectionId: "MATH-A",
  order: 4,
  title: "HCF & LCM",
  definition: "The Highest Common Factor (HCF, also called GCD) of two or more numbers is the largest integer that divides each of them exactly. The Least Common Multiple (LCM) is the smallest positive integer that is a multiple of each of them.",
  keyFacts: [
    "HCF (GCD) = largest integer dividing all given numbers",
    "LCM = smallest positive integer divisible by all given numbers",
    "For two positive integers a and b: a × b = HCF(a,b) × LCM(a,b)",
    "HCF is found by multiplying the LOWEST powers of common prime factors",
    "LCM is found by multiplying the HIGHEST powers of all prime factors appearing",
    "Co-prime numbers have HCF = 1",
    "HCF ≤ smaller number; LCM ≥ larger number"
  ],
  explanationSections: [
    { heading: "1. Prime Factorization Method for HCF", body: "Write each number as a product of prime factors. HCF uses the LOWEST power of each prime that appears in ALL numbers. Example: 24 = 2³ × 3 and 36 = 2² × 3². Common primes: 2 (lowest power 2²) and 3 (lowest power 3¹). HCF = 2² × 3 = 12." },
    { heading: "2. Prime Factorization Method for LCM", body: "Using the same factorizations, LCM uses the HIGHEST power of each prime appearing in ANY number. For 24 and 36: highest powers of 2 (2³) and 3 (3²). LCM = 2³ × 3² = 8 × 9 = 72." },
    { heading: "3. The HCF-LCM Product Rule", body: "For any two positive integers a and b: a × b = HCF(a, b) × LCM(a, b). This is a fast verification and a quick way to find LCM when HCF is known: LCM = (a × b) ÷ HCF. Example: if a = 30, b = 36, HCF = 6, then LCM = (30 × 36) ÷ 6 = 180." },
    { heading: "4. Co-prime Numbers", body: "Two numbers are co-prime (or relatively prime) if their HCF is 1. They share no common factors greater than 1. Example: 8 and 15 are co-prime (HCF = 1) even though neither is prime. Co-prime numbers are important in many algorithms and in fraction simplification." }
  ],
  formula: {
    name: "HCF-LCM product relationship",
    expression: "a × b = HCF(a, b) × LCM(a, b)",
    variables: [
      { symbol: "a, b", meaning: "two positive integers" },
      { symbol: "HCF", meaning: "Highest Common Factor" },
      { symbol: "LCM", meaning: "Least Common Multiple" }
    ]
  },
  examPoints: [
    "HCF × LCM = a × b — use this to find LCM when HCF is known: LCM = (a × b) / HCF",
    "HCF of co-prime numbers is always 1",
    "LCM is always ≥ the larger number; HCF is always ≤ the smaller number"
  ],
  workedExample: {
    problem: "Find the HCF and LCM of 48 and 180.",
    solution: "48 = 2⁴ × 3. 180 = 2² × 3² × 5. HCF: lowest common powers = 2² × 3 = 12. LCM: highest powers = 2⁴ × 3² × 5 = 720. Verification: 48 × 180 = 8640; 12 × 720 = 8640. ✓",
    answer: "HCF = 12, LCM = 720"
  },
  commonMistakes: [
    "Confusing HCF and LCM — remember: HCF is what divides; LCM is what is divided by",
    "Using the wrong power of common primes (lowest for HCF, highest for LCM)",
    "Forgetting to include primes that appear in only one number when computing LCM"
  ],
  relatedTopics: ["math-1-3", "math-1-5"],
  content: true,
  buildsOn: ["math-1-3"],
  leadsTo: ["math-1-5", "math-1-8"],
  usedIn: ["math-8-4", "math-8-5"]
},

{
  id: "math-1-5",
  sectionId: "MATH-A",
  order: 5,
  title: "Fractions: Operations, Comparison & Conversion",
  definition: "A fraction represents part of a whole as a ratio. The numerator (top) counts the parts; the denominator (bottom) names the total number of equal parts. Operations on fractions follow specific rules for addition, subtraction, multiplication, and division.",
  keyFacts: [
    "Fraction a/b: a = numerator, b = denominator (b ≠ 0)",
    "Proper fraction: numerator < denominator (e.g., 3/7)",
    "Improper fraction: numerator ≥ denominator (e.g., 9/4)",
    "Mixed number: whole part + proper fraction (e.g., 2 1/4)",
    "Addition/subtraction: find common denominator first, then add/subtract numerators",
    "Multiplication: (a/b) × (c/d) = (a × c)/(b × d)",
    "Division: (a/b) ÷ (c/d) = (a/b) × (d/c)",
    "Simplification: divide numerator and denominator by their HCF",
    "Fraction to decimal: divide numerator by denominator",
    "Decimal to fraction: write digits over appropriate power of 10, then simplify"
  ],
  explanationSections: [
    { heading: "1. Adding and Subtracting Fractions", body: "To add or subtract fractions, you need a COMMON denominator. The simplest is the LCM of the two denominators. Then: a/b + c/d = (ad + bc)/bd. Example: 1/4 + 1/6. LCM(4, 6) = 12. Rewrite: 3/12 + 2/12 = 5/12. Subtraction follows the same pattern." },
    { heading: "2. Multiplying and Dividing Fractions", body: "Multiplication is straightforward: multiply numerators and denominators straight across, then simplify. (3/4) × (2/5) = 6/20 = 3/10. Division: invert the second fraction and multiply. (3/4) ÷ (2/5) = (3/4) × (5/2) = 15/8 = 1 7/8." },
    { heading: "3. Comparing Fractions", body: "Two methods: (1) cross-multiply: a/b > c/d iff ad > bc. (2) convert to decimals: 3/7 ≈ 0.4286, 5/12 ≈ 0.4167, so 3/7 > 5/12. Cross-multiplication is faster for exact comparison." },
    { heading: "4. Conversion Between Forms", body: "Fraction to decimal: divide. Decimal to fraction: write the digits as the numerator, and the appropriate power of 10 as the denominator, then simplify. 0.625 = 625/1000 = 5/8 (after dividing by HCF 125). Mixed to improper: multiply whole by denominator, add numerator: 2 1/4 = (2×4 + 1)/4 = 9/4." }
  ],
  examPoints: [
    "When adding fractions, you MUST find a common denominator first",
    "To compare a/b and c/d, cross-multiply: a/b > c/d iff ad > bc",
    "Dividing by a fraction is the same as multiplying by its reciprocal"
  ],
  workedExample: {
    problem: "Calculate: (3/4 + 1/6) × (2/5). Express as a simplified fraction.",
    solution: "Step 1: Common denominator for 4 and 6 is 12. 3/4 = 9/12; 1/6 = 2/12. Sum = 11/12. Step 2: Multiply by 2/5: (11/12) × (2/5) = 22/60. Step 3: Simplify. HCF(22, 60) = 2. Result = 11/30.",
    answer: "11/30"
  },
  commonMistakes: [
    "Adding numerators and denominators directly: 1/4 + 1/6 ≠ 2/10",
    "Forgetting to invert the second fraction when dividing",
    "Not simplifying after multiplying (leaving 22/60 instead of 11/30)"
  ],
  relatedTopics: ["math-1-2", "math-1-4", "math-1-6"],
  content: true,
  buildsOn: ["math-1-1", "math-1-2"],
  leadsTo: ["math-1-6", "math-1-7", "math-1-8"],
  usedIn: ["math-2-2", "math-8-1", "phy-density", "phy-pressure-fluids"]
},

{
  id: "math-1-6",
  sectionId: "MATH-A",
  order: 6,
  title: "Decimals, Rounding & Scientific Notation",
  definition: "Decimals are base-10 representations of numbers using a decimal point to separate whole and fractional parts. Rounding reduces precision to a specified number of significant figures or decimal places. Scientific notation expresses numbers as a × 10ⁿ where 1 ≤ a < 10.",
  keyFacts: [
    "Decimal place values: tenths (0.1), hundredths (0.01), thousandths (0.001), ...",
    "Rounding rule: if next digit is 5 or more, round UP; otherwise round DOWN",
    "Significant figures (sig figs) count all non-zero digits and zeros between them; leading zeros don't count",
    "Scientific notation: N × 10ⁿ where 1 ≤ |N| < 10 and n is an integer",
    "To convert to scientific notation, move decimal until single non-zero digit remains before the point",
    "Multiplying in scientific notation: multiply coefficients, ADD exponents",
    "Dividing in scientific notation: divide coefficients, SUBTRACT exponents"
  ],
  explanationSections: [
    { heading: "1. Decimal Place Value", body: "Each position to the right of the decimal point represents a power of 10: first place = 10⁻¹ = 0.1, second place = 10⁻² = 0.01, third place = 10⁻³ = 0.001. So 3.142 = 3 + 0.1 + 0.04 + 0.002. Operations follow the same rules as whole numbers, but alignment of decimal points is critical for addition and subtraction." },
    { heading: "2. Rounding Rules", body: "To round to N decimal places: look at the (N+1)th digit. If it is 5 or higher, round the Nth digit up. Otherwise, leave the Nth digit unchanged. Example: 3.1459 rounded to 2 decimal places — look at 3rd decimal (5), round up: 3.15. The 'banker's rounding' rule rounds to the nearest even digit when exactly 5, but standard school rounding always rounds 5 up." },
    { heading: "3. Significant Figures", body: "Significant figures are the meaningful digits in a measurement. Rules: (1) all non-zero digits are significant, (2) zeros between non-zero digits are significant, (3) leading zeros are NOT significant, (4) trailing zeros AFTER a decimal point ARE significant, (5) trailing zeros in a whole number are ambiguous. Example: 0.00420 has 3 sig figs (4, 2, 0); 4200 has 2 to 4 sig figs depending on context." },
    { heading: "4. Scientific Notation Applications", body: "Used in science for very large and very small numbers. 1.36 × 10³ = 1360; 6.022 × 10²³ = Avogadro's number; 1.6 × 10⁻¹⁹ = electron charge in Coulombs. To multiply: (2 × 10³) × (3 × 10⁴) = 6 × 10⁷. To divide: (8 × 10⁵) ÷ (2 × 10²) = 4 × 10³. Scientific notation keeps the coefficient between 1 and 10." }
  ],
  formula: {
    name: "Scientific notation",
    expression: "N = a × 10ⁿ,   where 1 ≤ |a| < 10, n ∈ ℤ",
    variables: [
      { symbol: "a", meaning: "coefficient (decimal with single non-zero digit before the point)" },
      { symbol: "n", meaning: "integer exponent (positive for large, negative for small)" },
      { symbol: "N", meaning: "the number being expressed" }
    ]
  },
  examPoints: [
    "Multiplying in scientific notation: multiply coefficients, ADD exponents",
    "Dividing in scientific notation: divide coefficients, SUBTRACT exponents",
    "Trailing zeros in scientific notation (e.g., 4.20 × 10³) indicate precision"
  ],
  workedExample: {
    problem: "Round 3.14159 to (a) 2 decimal places, (b) 4 significant figures. Also express 0.000450 in scientific notation.",
    solution: "(a) 2 d.p.: look at 3rd decimal (1) which is < 5, so round down: 3.14. (b) 4 s.f.: digits 3, 1, 4, 1 are significant; the 5th (5) is ≥ 5, so round up: 3.142. Scientific notation: 0.000450 → move decimal right 4 places → 4.50 × 10⁻⁴. Note trailing zero (50) is significant.",
    answer: "(a) 3.14; (b) 3.142; Scientific notation: 4.50 × 10⁻⁴"
  },
  commonMistakes: [
    "Rounding 0.5 to 0 (it should round UP to 1 by standard convention)",
    "Counting leading zeros as significant (0.0042 has 2 sig figs, not 4)",
    "Forgetting to adjust the exponent when the coefficient reaches 10 after rounding"
  ],
  relatedTopics: ["math-1-2", "math-1-7"],
  content: true,
  buildsOn: ["math-1-5"],
  leadsTo: ["math-3-4", "math-2-2"],
  usedIn: ["phy-units-measurement", "phy-temperature-heat", "b-radiation-laws", "ra-research-quality"]
},

{
  id: "math-1-7",
  sectionId: "MATH-A",
  order: 7,
  title: "Percentages & Percentage Change",
  definition: "A percentage is a fraction with denominator 100, denoted by the % symbol. Percentage change measures the relative increase or decrease of a quantity, expressed as a percentage of the original value.",
  keyFacts: [
    "X% = X/100 (as a decimal, divide by 100)",
    "To find X% of Y: (X/100) × Y",
    "To express a fraction as a percentage: multiply by 100",
    "Percentage change = ((New − Old) / Old) × 100%",
    "Percentage increase uses (New − Old); percentage decrease uses (Old − New) in the numerator",
    "Successive percentage changes: MULTIPLY the multipliers, do NOT add the percentages",
    "Reverse percentage: original = final / (1 ± rate)"
  ],
  explanationSections: [
    { heading: "1. Basic Percentage Operations", body: "To find X% of Y, convert X% to a decimal (X/100) and multiply by Y. Example: 25% of 80 = 0.25 × 80 = 20. To express a number as a percentage, multiply by 100: 0.375 = 37.5%. To find what percentage one number is of another: (part / whole) × 100: 15 is what % of 60? (15/60) × 100 = 25%." },
    { heading: "2. Percentage Change", body: "Percentage change = ((New − Old) / Old) × 100%. The denominator is ALWAYS the old value. Example: price went from 80 to 100. Change = (100 − 80)/80 × 100% = 25%. If price went from 100 to 80, change = (80 − 100)/100 × 100% = −20% (a 20% decrease)." },
    { heading: "3. Successive Percentages", body: "A 20% increase followed by a 20% decrease does NOT cancel out. Use multipliers: after 20% up, factor = 1.20; after 20% down, factor = 0.80. Net = 1.20 × 0.80 = 0.96, meaning a 4% net DECREASE, not 0%. The rule: successive changes multiply, they do not add." },
    { heading: "4. Reverse Percentages", body: "To find the original value before a percentage change: divide the final value by (1 + rate) for an increase, or (1 − rate) for a decrease. Example: after a 10% increase, value is 110. Original = 110 / 1.10 = 100. This is the most common error in exams — confusing original and final values." }
  ],
  formula: {
    name: "Percentage change",
    expression: "% change = (New − Old) / Old × 100%",
    variables: [
      { symbol: "New", meaning: "final value" },
      { symbol: "Old", meaning: "initial (reference) value" }
    ]
  },
  examPoints: [
    "Successive percentage changes are NOT additive — multiply the multipliers",
    "Percentage change always uses the ORIGINAL value as the base, not the new value",
    "To reverse a percentage (find original before increase): divide by (1 + rate)"
  ],
  workedExample: {
    problem: "A price increased by 20%, then decreased by 10%. What is the net percentage change from the original? Also: after a 25% increase the value is 250. What was the original?",
    solution: "Net change: 1.20 × 0.90 = 1.08 → net 8% increase. Reverse: original = 250 / 1.25 = 200.",
    answer: "Net 8% increase; original value was 200"
  },
  commonMistakes: [
    "Saying '20% increase then 20% decrease cancels out' — it gives a 4% net loss, not 0",
    "Using the new value (instead of old) as the base for percentage change",
    "Confusing 'successive discount 20% + 10%' (which is 28% effective) with a 30% discount"
  ],
  relatedTopics: ["math-1-5", "math-1-8"],
  content: true,
  buildsOn: ["math-1-5"],
  leadsTo: ["math-1-8", "math-8-5"],
  usedIn: ["math-8-1", "ra-descriptive-statistics", "env-air-pollution", "env-carry-capacity-and-footprint", "env-water-pollution-and-quality"]
},

{
  id: "math-1-8",
  sectionId: "MATH-A",
  order: 8,
  title: "Ratios, Proportions & Variation",
  definition: "A ratio compares two quantities. A proportion states that two ratios are equal. Direct variation means two quantities change together at a constant ratio; inverse variation means one increases as the other decreases such that their product is constant.",
  keyFacts: [
    "Ratio a:b = a/b; equivalent ratios: (a:b) = (ka:kb) for k ≠ 0",
    "To share Q in ratio a:b:c, parts are Q × a/(a+b+c), Q × b/(a+b+c), Q × c/(a+b+c)",
    "Direct proportion: y = kx (k is the constant of proportionality)",
    "Inverse proportion: y = k/x or xy = k (product is constant)",
    "Direct proportion test: doubling x doubles y",
    "Inverse proportion test: doubling x halves y",
    "Proportion problems: use cross-multiplication: a/b = c/d → ad = bc"
  ],
  explanationSections: [
    { heading: "1. Ratios and Sharing", body: "The ratio a:b tells you how a and b compare. To divide a quantity Q in ratio a:b, the parts are Q × a/(a+b) and Q × b/(a+b). For three parts a:b:c, the divisor becomes a+b+c. The parts always sum back to Q. Example: divide 720 in 2:3:4. Total parts = 9. Shares = 160, 240, 320." },
    { heading: "2. Direct Proportion", body: "Two quantities are directly proportional if y = kx for some constant k. Doubling x doubles y. Tripling x triples y. The graph is a straight line through the origin. Common examples: distance and time at constant speed; cost and quantity at unit price. To find k: k = y/x." },
    { heading: "3. Inverse Proportion", body: "Two quantities are inversely proportional if xy = k (constant), or y = k/x. Doubling x halves y. The graph is a hyperbola. Common examples: time and number of workers (more workers → less time); speed and travel time for fixed distance. To find k: k = xy." },
    { heading: "4. Solving Proportion Problems", body: "Use cross-multiplication: a/b = c/d → ad = bc. Example: if 3 books cost Rs. 450, how much do 7 cost? 3/450 = 7/x → 3x = 3150 → x = 1050. For inverse: if 6 workers finish in 10 days, how long for 10 workers? 6 × 10 = 10 × d → d = 6 days." }
  ],
  formula: {
    name: "Proportion (direct and inverse)",
    expression: "Direct: y = kx      Inverse: xy = k",
    variables: [
      { symbol: "k", meaning: "constant of proportionality" },
      { symbol: "x, y", meaning: "two varying quantities" }
    ]
  },
  examPoints: [
    "In direct proportion, the RATIO y/x is constant; in inverse, the PRODUCT xy is constant",
    "Cross-multiplication: a/b = c/d → ad = bc",
    "Inverse proportion is sometimes called 'inversely proportional' — do not confuse with 'decreasing'"
  ],
  workedExample: {
    problem: "Divide Rs. 720 among Ali, Bilal, and Chand in the ratio 2:3:4. If 6 workers finish a job in 10 days, how many days do 15 workers take (assuming inverse proportion)?",
    solution: "Ratio share: total parts = 9. Ali: 720 × 2/9 = 160. Bilal: 720 × 3/9 = 240. Chand: 720 × 4/9 = 320. Inverse proportion: 6 × 10 = 15 × d → d = 60/15 = 4 days.",
    answer: "Ali = 160, Bilal = 240, Chand = 320; 4 days"
  },
  commonMistakes: [
    "Adding the ratio numbers and dividing (9 ÷ 720 instead of 720 ÷ 9)",
    "Using direct-proportion reasoning for inverse-proportion problems",
    "Confusing 'inverse proportion' with 'decreasing' — inverse means specifically xy = constant"
  ],
  relatedTopics: ["math-1-5", "math-1-7"],
  content: true,
  buildsOn: ["math-1-5", "math-1-7"],
  leadsTo: ["math-2-1", "math-2-2", "math-8-3"],
  usedIn: ["phy-density", "phy-pressure-fluids", "phy-kinematics", "d-moisture-metrics"]
}, 

// ════════════════════════════════════════════════════════════════════
// SECTION MATH-B: Algebra
// ════════════════════════════════════════════════════════════════════

{
  id: "math-2-1",
  sectionId: "MATH-B",
  order: 1,
  title: "Averages & Weighted Averages",
  definition: "An average is a single value that summarizes a set of numbers. The arithmetic mean is the most common average. A weighted average assigns different importance (weights) to each value, producing a single representative number that reflects the relative significance of each input.",
  keyFacts: [
    "Arithmetic mean = (sum of all values) / (number of values)",
    "Median: middle value when data is sorted (or average of two middle values if n is even)",
    "Mode: most frequently occurring value",
    "Weighted mean = Σ(value × weight) / Σ(weight)",
    "Simple mean treats every value equally; weighted mean reflects differing importance",
    "Mean is sensitive to outliers; median is robust",
    "All three (mean, median, mode) are equal in a perfectly symmetric distribution"
  ],
  explanationSections: [
    { heading: "1. The Arithmetic Mean", body: "Add all values, then divide by how many there are. For example, the mean of 2, 4, 6, 8 is (2+4+6+8)/4 = 20/4 = 5. The mean is the 'balance point' of the data — values below the mean and above it are equally offset on average." },
    { heading: "2. The Weighted Mean", body: "When some values matter more than others, use weights. Example: a course has quiz (30% weight) and exam (70% weight). If quiz = 80 and exam = 90: weighted mean = (80 × 0.30 + 90 × 0.70) / (0.30 + 0.70) = (24 + 63)/1 = 87. The weights do not need to sum to 1, but you divide by their sum." },
    { heading: "3. When to Use Mean vs Median", body: "Use the mean for data that is roughly symmetric and has no extreme values. Use the median when there are outliers or skewed data (e.g., income data — one billionaire distorts the mean). For example, mean of 1, 2, 3, 4, 100 is 22, but the median is 3, which better represents 'typical' value." }
  ],
  formula: {
    name: "Arithmetic mean and weighted mean",
    expression: "x̄ = (Σxᵢ) / n      x̄_w = Σ(xᵢ · wᵢ) / Σ(wᵢ)",
    variables: [
      { symbol: "x̄", meaning: "arithmetic mean" },
      { symbol: "xᵢ", meaning: "individual data values" },
      { symbol: "n", meaning: "number of values" },
      { symbol: "x̄_w", meaning: "weighted mean" },
      { symbol: "wᵢ", meaning: "weight of each value" }
    ]
  },
  examPoints: [
    "For weighted average, weights don't need to sum to 1, but you divide by the total weight",
    "If you have a missing value, you can use the mean identity: sum = mean × n",
    "Median is the 50th percentile"
  ],
  workedExample: {
    problem: "A student's grade is calculated from three components: homework (weight 1, score 70), midterm (weight 2, score 80), and final exam (weight 3, score 90). Find the weighted mean.",
    solution: "Weighted sum = 70×1 + 80×2 + 90×3 = 70 + 160 + 270 = 500. Total weight = 1 + 2 + 3 = 6. Weighted mean = 500/6 ≈ 83.33.",
    answer: "83.33"
  },
  commonMistakes: [
    "Using simple mean when weights are given (or vice versa)",
    "Forgetting to divide by the total weight in weighted mean",
    "Choosing mean when median would better represent the data"
  ],
  relatedTopics: ["math-1-5", "math-2-4"],
  content: true,
  buildsOn: ["math-1-5", "math-1-7", "math-1-8"],
  leadsTo: ["math-8-1"],
  usedIn: ["math-8-1", "ra-descriptive-statistics", "g-pakistan-macroclimate"]
},

{
  id: "math-2-2",
  sectionId: "MATH-B",
  order: 2,
  title: "Unit Conversions",
  definition: "Unit conversion is the process of changing a measurement from one unit to another, using the multiplicative relationship between units. It is essential in science, engineering, and meteorology, where different systems (SI, metric, imperial) coexist.",
  keyFacts: [
    "1 km = 1000 m = 100,000 cm = 1,000,000 mm",
    "1 kg = 1000 g = 1,000,000 mg",
    "1 hour = 60 min = 3600 s",
    "1 day = 24 h = 1440 min = 86,400 s",
    "Temperature: °C to K → add 273.15; K to °C → subtract 273.15",
    "Temperature: °C to °F → multiply by 9/5, then add 32",
    "Speed: 1 km/h = 5/18 m/s; 1 m/s = 3.6 km/h",
    "Pressure: 1 atm = 1013.25 hPa = 101.325 kPa = 760 mmHg = 29.92 inHg",
    "Energy: 1 kWh = 3.6 × 10⁶ J = 3600 kJ"
  ],
  explanationSections: [
    { heading: "1. The Conversion Factor Method", body: "To convert from unit A to unit B, multiply by the ratio (B/A). This ratio equals 1, so it does not change the value, only the units. Example: convert 5 km to m. 5 km × (1000 m / 1 km) = 5000 m. The km cancels, leaving m." },
    { heading: "2. Temperature Conversions", body: "Temperature scales have different zero points, so simple multiplication does not work. To convert: °C → K: add 273.15. °C → °F: multiply by 9/5 then add 32. Example: 100°C = 100 × 9/5 + 32 = 180 + 32 = 212°F. Reverse conversions: K → °C subtract 273.15; °F → °C subtract 32, then multiply by 5/9." },
    { heading: "3. Speed and Pressure Conversions (Meteorology)", body: "Speed: 1 km/h = 1000 m / 3600 s = 1/3.6 m/s ≈ 0.2778 m/s. So 1 m/s = 3.6 km/h. Pressure in meteorology is typically measured in hPa (hectopascals) or mb (millibars), which are numerically equal. 1 hPa = 100 Pa. Standard atmospheric pressure = 1013.25 hPa = 760 mmHg." }
  ],
  examPoints: [
    "1 km/h = 5/18 m/s — memorize this exact fraction",
    "1 atm = 1013.25 hPa = 760 mmHg; 1 hPa = 1 mb (numerically equal)",
    "Temperature conversions use 9/5 and 5/9 ratios (these are not 2 and 1/2)"
  ],
  workedExample: {
    problem: "Convert (a) 90 km/h to m/s, (b) 25°C to °F, (c) 1013 hPa to mmHg.",
    solution: "(a) 90 × 5/18 = 450/18 = 25 m/s. (b) 25 × 9/5 + 32 = 45 + 32 = 77°F. (c) 1013 hPa × (760/1013.25) ≈ 1013 × 0.7501 ≈ 760 mmHg (essentially equal at standard pressure).",
    answer: "(a) 25 m/s; (b) 77°F; (c) ≈ 760 mmHg"
  },
  commonMistakes: [
    "Using 5/9 instead of 9/5 when going from °C to °F (the ratio is reversed)",
    "Forgetting to add 32 after multiplying by 9/5 in °C to °F",
    "Treating °C and K the same (they differ by 273.15, not 273)"
  ],
  relatedTopics: ["math-1-7", "math-1-6"],
  content: true,
  buildsOn: ["math-1-5", "math-1-6", "math-1-8"],
  leadsTo: ["phy-units-measurement"],
  usedIn: ["phy-units-measurement", "phy-pressure-fluids", "phy-temperature-heat", "f-pressure-instruments", "d-moisture-metrics", "env-air-pollution"]
},

{
  id: "math-2-3",
  sectionId: "MATH-B",
  order: 3,
  title: "Algebraic Expressions & Simplification",
  definition: "An algebraic expression combines numbers, variables, and operations. Simplification combines like terms and applies the order of operations to produce the simplest equivalent form.",
  keyFacts: [
    "Like terms have the same variable(s) raised to the same power(s): 3x and 5x are like; 3x and 3x² are not",
    "Coefficient: numerical factor of a term (in 5x², the coefficient is 5)",
    "Constant term: has no variable (e.g., 7 in 3x + 7)",
    "Distributive law: a(b + c) = ab + ac",
    "Order of operations: brackets, exponents, multiplication/division (left to right), addition/subtraction (left to right)",
    "FOIL expansion: (a + b)(c + d) = ac + ad + bc + bd"
  ],
  explanationSections: [
    { heading: "1. Identifying Like Terms", body: "Only terms with exactly the same variable part can be combined. 4x², -3x², and 7x² are like terms (sum = 8x²). But 4x² and 4x are NOT like (different powers). 5xy and 5x are NOT like (different variable count). The constants 7, -2, 4 are all like terms and can be summed." },
    { heading: "2. The Distributive Law", body: "When a term multiplies a sum in parentheses, it distributes: -3(2x - 5) = -6x + 15. Watch the sign carefully: a negative outside flips both signs inside. This is the most common source of errors in simplification. Forgetting the sign flip is the #1 algebra error." },
    { heading: "3. FOIL for Binomial Products", body: "To multiply two binomials: (a + b)(c + d) = ac + ad + bc + bd. The acronym FOIL reminds you: First (ac), Outer (ad), Inner (bc), Last (bd). This always works for two binomials. After expansion, combine like terms." }
  ],
  workedExample: {
    problem: "Simplify: 3(2x - 4) - 2(x + 1) + 5x",
    solution: "Step 1 — Distribute: 3(2x - 4) = 6x - 12; -2(x + 1) = -2x - 2. Expression: 6x - 12 - 2x - 2 + 5x. Step 2 — Group like terms: (6x - 2x + 5x) + (-12 - 2) = 9x - 14.",
    answer: "9x - 14"
  },
  commonMistakes: [
    "Sign errors when distributing a negative: -3(x - 4) = -3x + 12, NOT -3x - 12",
    "Trying to combine 3x with 3x² — they are not like terms",
    "Forgetting one of the four FOIL terms when expanding two binomials"
  ],
  relatedTopics: ["math-1-2", "math-2-4", "math-2-5"],
  content: true,
  buildsOn: ["math-1-1", "math-1-2"],
  leadsTo: ["math-2-4", "math-2-5", "math-2-6"],
  usedIn: ["math-2-7", "math-5-3", "phy-kinematics", "phy-work-energy", "b-gas-law"]
},

{
  id: "math-2-4",
  sectionId: "MATH-B",
  order: 4,
  title: "Factorization: Common Factor, Grouping & Identities",
  definition: "Factorization rewrites an expression as a product of factors. Common techniques include extracting the greatest common factor (GCF), grouping terms, and applying standard algebraic identities.",
  keyFacts: [
    "Greatest Common Factor (GCF): the largest factor common to all terms",
    "Factor by grouping: pair terms with common factors, then factor the pairs",
    "Difference of squares: a² - b² = (a + b)(a - b)",
    "Perfect square trinomials: a² + 2ab + b² = (a + b)²; a² - 2ab + b² = (a - b)²",
    "Trinomials of the form x² + bx + c: find two numbers that multiply to c and add to b",
    "Sum/difference of cubes: a³ + b³ = (a + b)(a² - ab + b²); a³ - b³ = (a - b)(a² + ab + b²)"
  ],
  explanationSections: [
    { heading: "1. Factoring Out the GCF", body: "First step in any factorization: extract the GCF. For 6x³ + 9x², the GCF is 3x². So 6x³ + 9x² = 3x²(2x + 3). If you skip this step, you'll often fail on the more complex factorizations." },
    { heading: "2. Factoring by Grouping", body: "Used for 4-term expressions. Group in pairs, factor each pair, then factor the common binomial. Example: ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y). The grouping works when the same binomial appears in both groups." },
    { heading: "3. Recognizing Identities", body: "Many factorizations match the standard identities. x² - 25 = x² - 5² = (x + 5)(x - 5) [difference of squares]. x² + 6x + 9 = (x + 3)² [perfect square trinomial]. Recognizing the pattern is faster than trial and error." }
  ],
  examPoints: [
    "Always factor out the GCF first",
    "Difference of squares: a² - b² = (a + b)(a - b) — but a² + b² does NOT factor over reals",
    "For x² + bx + c, find two numbers that multiply to c and add to b"
  ],
  workedExample: {
    problem: "Factor: (a) 6x³ + 9x², (b) x² - 16, (c) x² + 7x + 12.",
    solution: "(a) GCF = 3x². Result: 3x²(2x + 3). (b) Difference of squares: x² - 4² = (x + 4)(x - 4). (c) Need two numbers multiplying to 12 and adding to 7: those are 3 and 4. So x² + 7x + 12 = (x + 3)(x + 4). Check: 3×4 = 12 ✓; 3 + 4 = 7 ✓.",
    answer: "(a) 3x²(2x + 3); (b) (x + 4)(x - 4); (c) (x + 3)(x + 4)"
  },
  commonMistakes: [
    "Trying to factor a² + b² (it does not factor over real numbers)",
    "Forgetting to factor out the GCF first, leading to incomplete factorization",
    "For x² - bx + c, the signs in the binomial are different; for x² + bx + c, they are the same"
  ],
  relatedTopics: ["math-2-3", "math-2-5"],
  content: true,
  buildsOn: ["math-2-3", "math-1-3"],
  leadsTo: ["math-2-5", "math-2-6"],
  usedIn: ["math-2-7", "math-3-1"]
},

{
  id: "math-2-5",
  sectionId: "MATH-B",
  order: 5,
  title: "Standard Algebraic Identities",
  definition: "Algebraic identities are equations that hold true for all values of the variables. The standard identities are essential tools for expanding, factoring, and simplifying expressions efficiently.",
  keyFacts: [
    "(a + b)² = a² + 2ab + b²",
    "(a - b)² = a² - 2ab + b²",
    "a² - b² = (a + b)(a - b) — difference of squares",
    "(a + b)³ = a³ + 3a²b + 3ab² + b³",
    "(a - b)³ = a³ - 3a²b + 3ab² - b³",
    "a³ + b³ = (a + b)(a² - ab + b²)",
    "a³ - b³ = (a - b)(a² + ab + b²)"
  ],
  explanationSections: [
    { heading: "1. The Square Identities (Most Tested)", body: "(a+b)² is NOT a² + b² — the middle term 2ab is missing in that common error. Always remember: square of a sum is sum of squares PLUS twice the product. Same caution for (a-b)². The signs of the middle term and the squares match." },
    { heading: "2. Difference of Squares", body: "a² - b² factors as (a + b)(a - b). This is one of the most useful identities. Example: x² - 25 = (x + 5)(x - 5). Note: a² + b² does NOT factor over real numbers (it factors only over complex numbers as (a + bi)(a - bi))." },
    { heading: "3. Cube Identities", body: "Memorize in paired form: (a + b)³ and a³ + b³ both involve (a + b) as a factor; (a - b)³ and a³ - b³ both involve (a - b) as a factor. The second factor in each pair is a² - ab + b² or a² + ab + b² — the middle sign matches the original sign." }
  ],
  formula: {
    name: "Most-tested identity: square of a binomial",
    expression: "(a ± b)² = a² ± 2ab + b²",
    variables: [
      { symbol: "a, b", meaning: "any algebraic terms" },
      { symbol: "±", meaning: "use + for sum, − for difference; the middle term keeps the same sign" }
    ]
  },
  examPoints: [
    "Most common exam trap: (a + b)² ≠ a² + b² — the 2ab middle term is mandatory",
    "Use difference of squares whenever you see a² - b² form",
    "Recognize the identity even when terms are reordered: 4x² - 9 = (2x)² - 3² = (2x+3)(2x-3)"
  ],
  workedExample: {
    problem: "Expand (3x + 5)² and factor 16y² - 49.",
    solution: "Expansion: (3x)² + 2(3x)(5) + 5² = 9x² + 30x + 25. Factoring: 16y² - 49 = (4y)² - 7² = (4y + 7)(4y - 7).",
    answer: "9x² + 30x + 25 and (4y + 7)(4y - 7)"
  },
  commonMistakes: [
    "Writing (a + b)² = a² + b² — the single most common identity error",
    "Forgetting that the middle term in (a - b)² is -2ab, not +2ab",
    "Confusing (a + b)² (a² + 2ab + b²) with (a + b)(a + b) treated as ordinary multiplication"
  ],
  relatedTopics: ["math-2-3", "math-2-4", "math-2-6"],
  content: true,
  buildsOn: ["math-2-3", "math-2-4"],
  leadsTo: ["math-2-6", "math-3-1"],
  usedIn: ["math-3-2", "phy-work-energy"]
},

{
  id: "math-2-6",
  sectionId: "MATH-B",
  order: 6,
  title: "Linear Equations in One & Two Variables",
  definition: "A linear equation in one variable is of the form ax + b = 0. A linear equation in two variables is of the form ax + by = c. Both can be solved using inverse operations to isolate the variable(s).",
  keyFacts: [
    "One variable: isolate x using inverse operations (add/subtract, multiply/divide)",
    "Whatever you do to one side, do to the other",
    "Two variables: one equation has infinite solutions; two equations have a unique solution",
    "If variable appears on both sides, collect on one side first",
    "Distribute before combining like terms when parentheses are present",
    "Always verify by substituting back into the original equation"
  ],
  explanationSections: [
    { heading: "1. The Standard Solution Method (One Variable)", body: "Example: 3x + 7 = 25. Subtract 7: 3x = 18. Divide by 3: x = 6. The same operations work in reverse. The goal is to isolate the variable on one side of the equation." },
    { heading: "2. Variables on Both Sides", body: "When the variable appears on both sides (e.g., 5x - 3 = 2x + 9), first move all variable terms to one side and constants to the other. 5x - 2x = 9 + 3 → 3x = 12 → x = 4." },
    { heading: "3. Equations with Parentheses", body: "Distribute first to remove parentheses, then solve. Example: 2(x - 3) = 4x + 8. Distribute: 2x - 6 = 4x + 8. Subtract 2x: -6 = 2x + 8. Subtract 8: -14 = 2x. Divide: x = -7." },
    { heading: "4. Linear Equations in Two Variables", body: "A single equation like y = 2x + 1 has infinitely many solutions (one for each x). Two equations (a system) are needed to find a unique point. Methods for solving systems: substitution and elimination, covered in the next topic." }
  ],
  examPoints: [
    "Distribute before combining like terms when parentheses are present",
    "Move variables to one side, constants to the other — never mix",
    "Always verify by substitution"
  ],
  workedExample: {
    problem: "Solve: 4(2x - 1) - 3(x + 2) = 11",
    solution: "Distribute: 8x - 4 - 3x - 6 = 11. Combine like terms: 5x - 10 = 11. Add 10: 5x = 21. Divide: x = 21/5 = 4.2. Check: 4(2(4.2) - 1) - 3(4.2 + 2) = 4(7.4) - 3(6.2) = 29.6 - 18.6 = 11 ✓",
    answer: "x = 4.2"
  },
  commonMistakes: [
    "Sign error when distributing a negative: -3(x + 2) = -3x - 6, NOT -3x + 6",
    "Mixing operations: subtracting 7 from one side but dividing the other by 7",
    "Forgetting to substitute the solution back to verify"
  ],
  relatedTopics: ["math-2-3", "math-2-7"],
  content: true,
  buildsOn: ["math-2-3", "math-2-4"],
  leadsTo: ["math-2-7", "math-5-3"],
  usedIn: ["math-8-3", "math-8-4", "math-8-5", "phy-kinematics"]
},

{
  id: "math-2-7",
  sectionId: "MATH-B",
  order: 7,
  title: "Simultaneous Equations & Linear Inequalities",
  definition: "Simultaneous linear equations are two or more equations in the same variables whose common solution satisfies all equations simultaneously. A linear inequality is a statement that one linear expression is greater than, less than, or equal to another, with a range of solutions.",
  keyFacts: [
    "Substitution: solve one equation for one variable, substitute into the other",
    "Elimination: add or subtract equations to eliminate one variable",
    "Parallel lines: no solution (inconsistent)",
    "Identical lines: infinite solutions (dependent)",
    "Intersecting lines: unique solution (consistent, independent)",
    "Inequality symbols: <, >, ≤, ≥",
    "When multiplying or dividing by a NEGATIVE, the inequality sign REVERSES",
    "Adding/subtracting the same number from both sides does NOT reverse the sign",
    "Strict inequality (<) uses open circle on number line; non-strict (≤) uses closed circle"
  ],
  explanationSections: [
    { heading: "1. The Substitution Method", body: "Solve one equation for one variable in terms of the others, then substitute into the other equation. Example: from x = y + 3, substitute into 2x + y = 12 to get 2(y+3) + y = 12, so 3y = 6, y = 2, then x = 5." },
    { heading: "2. The Elimination Method", body: "Multiply equations to make coefficients of one variable equal in magnitude but opposite in sign, then add. Example: 2x + 3y = 12 and x - y = 1. Multiply the second by 3: 3x - 3y = 3. Add: 5x = 15, so x = 3, then y = 2." },
    { heading: "3. Linear Inequalities", body: "Use the same steps as equations, with one critical exception: multiplying or dividing by a negative flips the inequality sign. So -2x < 6 becomes x > -3 (sign flipped because we divided by -2). On a number line: open circle (○) means endpoint NOT included; closed (●) means included." }
  ],
  examPoints: [
    "Always check your answer by substituting into BOTH original equations",
    "If elimination gives 0 = 0, equations are dependent (infinite solutions)",
    "If elimination gives 0 = non-zero, equations are inconsistent (no solution)"
  ],
  workedExample: {
    problem: "Solve the system 2x + 3y = 12 and x - y = 1. Also solve the inequality -3x + 4 ≥ 13.",
    solution: "System: from the second, x = y + 1. Substitute: 2(y+1) + 3y = 12 → 5y = 10 → y = 2, x = 3. Check: 2(3) + 3(2) = 12 ✓; 3 - 2 = 1 ✓. Inequality: subtract 4: -3x ≥ 9. Divide by -3 (flip sign): x ≤ -3.",
    answer: "x = 3, y = 2; x ≤ -3"
  },
  commonMistakes: [
    "Forgetting to substitute back for the second variable in a system",
    "Adding equations when signs should be subtracted",
    "Forgetting to flip the inequality sign when dividing by a negative"
  ],
  relatedTopics: ["math-2-6"],
  content: true,
  buildsOn: ["math-2-6"],
  leadsTo: ["math-5-3"],
  usedIn: ["math-8-3", "phy-vector-operations"]
}, 
// ════════════════════════════════════════════════════════════════════
// SECTION MATH-C: Powers, Roots & Logarithms
// ════════════════════════════════════════════════════════════════════

{
  id: "math-3-1",
  sectionId: "MATH-C",
  order: 1,
  title: "Exponents & Laws of Exponents",
  definition: "An exponent indicates how many times a number (the base) is multiplied by itself. The laws of exponents provide rules for simplifying expressions involving powers and form the foundation for scientific notation, logarithms, and exponential growth/decay.",
  keyFacts: [
    "aᵐ × aⁿ = aᵐ⁺ⁿ (multiply: add exponents when bases are equal)",
    "aᵐ / aⁿ = aᵐ⁻ⁿ (divide: subtract exponents when bases are equal)",
    "(aᵐ)ⁿ = aᵐˣⁿ (power of a power: multiply exponents)",
    "(ab)ⁿ = aⁿbⁿ (power of a product)",
    "a⁰ = 1 for any a ≠ 0",
    "a⁻ⁿ = 1/aⁿ (negative exponent means reciprocal)",
    "a^(1/n) = ⁿ√a (fractional exponent means nth root)",
    "0ⁿ = 0 for n > 0; 0⁰ is undefined"
  ],
  explanationSections: [
    { heading: "1. The Five Core Laws", body: "These four laws (multiply, divide, power of a power, power of a product) cover almost all exponent problems. The key insight: exponents add when bases are the same and you are multiplying, and subtract when dividing. Power of a power multiplies the exponents. For example, (2³)² = 2⁶ = 64." },
    { heading: "2. Negative and Zero Exponents", body: "a⁰ = 1 for any non-zero a. This seems strange but is consistent: a³/a³ = a⁰ = 1. Negative exponents mean reciprocals: a⁻² = 1/a². This is how we move terms across fraction bars. Example: x⁻³ = 1/x³; 1/x⁻³ = x³." },
    { heading: "3. Fractional Exponents", body: "A fractional exponent represents a root: a^(1/2) = √a; a^(1/3) = ∛a. More generally, a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ. Example: 8^(2/3) = (8^(1/3))² = 2² = 4. Always compute the root first if it comes out cleanly." }
  ],
  examPoints: [
    "Memorize all 5 laws — they are the most-tested topic in this section",
    "Negative exponent ≠ negative number: 2⁻³ = 1/8, NOT -8",
    "0⁰ is undefined; 0ⁿ = 0 for n > 0"
  ],
  workedExample: {
    problem: "Simplify: (x⁵ · x⁻²) / x³",
    solution: "Numerator: x⁵⁺⁽⁻²⁾ = x³. Then x³ / x³ = x⁰ = 1.",
    answer: "1"
  },
  commonMistakes: [
    "Multiplying exponents when bases are different: 2³ × 3² ≠ 6⁵",
    "Treating a negative exponent as a negative number: 2⁻³ ≠ -8",
    "Forgetting that a⁰ = 1 only when a ≠ 0"
  ],
  relatedTopics: ["math-3-2", "math-3-3", "math-1-6"],
  content: true,
  buildsOn: ["math-1-1", "math-2-3"],
  leadsTo: ["math-3-2", "math-3-3", "math-3-4"],
  usedIn: ["math-6-2", "phy-radioactivity-nuclear", "phy-half-life-decay", "b-radiation-laws", "earth-c2"]
},

{
  id: "math-3-2",
  sectionId: "MATH-C",
  order: 2,
  title: "Square Roots, Cube Roots & Radicals",
  definition: "A square root of n is a number that, multiplied by itself, gives n. A cube root is a number that, multiplied by itself three times, gives n. Radical notation expresses these operations, and the laws of radicals mirror the laws of exponents.",
  keyFacts: [
    "√n: the principal (non-negative) square root",
    "∛n: cube root (can be negative, since odd roots preserve sign)",
    "√(ab) = √a · √b (radical of a product)",
    "√(a/b) = √a / √b (radical of a quotient, b ≠ 0)",
    "√(a²) = |a|, NOT simply a (absolute value matters for negative inputs)",
    "To rationalize 1/√a: multiply by √a/√a to get √a/a",
    "To rationalize 1/(a + √b): multiply by the conjugate (a − √b)/(a − √b)"
  ],
  explanationSections: [
    { heading: "1. Simplifying Radicals", body: "Look for perfect square (or perfect cube) factors inside the radical. √72 = √(36 × 2) = 6√2. For cube roots, look for perfect cube factors: ∛54 = ∛(27 × 2) = 3∛2. The goal is to extract the largest perfect power so that the remaining radicand has no perfect factors." },
    { heading: "2. The Absolute Value Trap", body: "√(a²) = |a|, not simply a. If a = -3, then a² = 9, and √9 = 3 = |−3|. In practice, when working with variable expressions whose sign is unknown, the radical of a square is the absolute value. In exams, when the radicand is known to be non-negative, the absolute value is implied." },
    { heading: "3. Rationalizing the Denominator", body: "Standard form has no radicals in the denominator. For 1/√3, multiply by √3/√3 to get √3/3. For 1/(a + √b), multiply by the conjugate (a − √b)/(a − √b) to get (a − √b)/(a² − b). This works because (a + √b)(a − √b) = a² − b, which is rational." }
  ],
  formula: {
    name: "Laws of radicals",
    expression: "√(ab) = √a · √b        √(a/b) = √a / √b",
    variables: [
      { symbol: "a, b", meaning: "non-negative real numbers" },
      { symbol: "√", meaning: "principal square root (non-negative)" }
    ]
  },
  examPoints: [
    "√ is non-negative by definition; you cannot have a negative square root in real numbers",
    "n√a is only defined for real numbers when n is odd (any real a) or when n is even and a ≥ 0",
    "Always simplify radicals as far as possible (extract perfect powers)"
  ],
  workedExample: {
    problem: "Simplify √75 and rationalize 5/√2.",
    solution: "√75 = √(25 × 3) = 5√3. For 5/√2, multiply by √2/√2: 5√2/2.",
    answer: "5√3 and 5√2/2"
  },
  commonMistakes: [
    "Writing √(a + b) = √a + √b (false in general)",
    "Forgetting absolute value: √(x²) = x is only true for x ≥ 0",
    "Stopping simplification too early (e.g., leaving √12 instead of 2√3)"
  ],
  relatedTopics: ["math-3-1", "math-3-3"],
  content: true,
  buildsOn: ["math-3-1", "math-1-1"],
  leadsTo: ["math-3-3", "math-4-2", "math-5-2"],
  usedIn: ["math-5-2", "phy-kinematics", "phy-work-energy", "phy-wave-properties"]
},

{
  id: "math-3-3",
  sectionId: "MATH-C",
  order: 3,
  title: "Logarithms: Definition, Laws & Applications",
  definition: "A logarithm answers the question: 'to what power must the base be raised to get a given number?' Logarithms are the inverse of exponentiation and have critical applications in science, including the Richter scale, pH, sound intensity, and radioactive decay.",
  keyFacts: [
    "log_b(x) = y means b^y = x (the fundamental definition)",
    "log_b(xy) = log_b(x) + log_b(y) (product rule)",
    "log_b(x/y) = log_b(x) - log_b(y) (quotient rule)",
    "log_b(xⁿ) = n · log_b(x) (power rule)",
    "log_b(1) = 0 for any base b",
    "log_b(b) = 1 for any base b",
    "Change of base: log_a(x) = log_b(x) / log_b(a)",
    "Common log: base 10, written log x or log₁₀ x",
    "Natural log: base e ≈ 2.718, written ln x",
    "Richter scale: M = log₁₀(A/A₀) — each unit = 10× amplitude",
    "pH = -log[H⁺] — each unit = 10× H⁺ concentration",
    "Sound intensity: dB = 10 log(I/I₀)",
    "Radioactive decay: N = N₀ · e^(-λt)"
  ],
  explanationSections: [
    { heading: "1. Reading Logarithmic Notation", body: "log₂(8) = 3 because 2³ = 8. The base is 2, the argument is 8, and the value 3 is the exponent. Read as 'log base 2 of 8 equals 3.' The argument must always be positive; the base must be positive and not equal to 1." },
    { heading: "2. The Three Laws", body: "The product rule, quotient rule, and power rule are derived directly from the laws of exponents. They let you simplify complex logarithmic expressions: log(20) = log(4 × 5) = log(4) + log(5). Note: log(xy) is NOT log(x) · log(y) — the product rule is about ADDITION, not multiplication." },
    { heading: "3. Real-World Applications", body: "Logarithms appear in many scientific scales: Richter scale for earthquakes (each unit = 10× amplitude, ~32× energy), pH for acidity (each unit = 10× H+ concentration), decibels for sound intensity, and exponential decay/growth models in physics and biology. Radioactive decay uses the natural exponential: N = N₀ · e^(-λt), where λ is the decay constant." }
  ],
  formula: {
    name: "Logarithm definition (the fundamental identity)",
    expression: "log_b(x) = y  ⟺  b^y = x",
    variables: [
      { symbol: "b", meaning: "base of the logarithm (b > 0, b ≠ 1)" },
      { symbol: "x", meaning: "argument (x > 0)" },
      { symbol: "y", meaning: "the logarithm value" }
    ]
  },
  examPoints: [
    "Each unit on the Richter scale represents a 10-fold increase in earthquake amplitude",
    "pH = -log[H⁺]; pH 7 is neutral, pH < 7 is acidic, pH > 7 is basic",
    "Change of base formula is essential for computing logs on a calculator that only has log and ln"
  ],
  workedExample: {
    problem: "If log_2(x) = 5, find x. Also, simplify log(100) + log(10) - log(1).",
    solution: "2^5 = 32, so x = 32. For the second: log(100) = 2, log(10) = 1, log(1) = 0. So 2 + 1 − 0 = 3.",
    answer: "x = 32 and simplified value = 3"
  },
  commonMistakes: [
    "Confusing log(xy) with log(x) · log(y) — the product rule is about ADDITION, not multiplication",
    "Trying to take log of 0 or a negative number (undefined in real numbers)",
    "Forgetting to flip log(x) and log(y) when computing log(x/y)"
  ],
  relatedTopics: ["math-3-1", "math-3-2"],
  content: true,
  buildsOn: ["math-3-1"],
  leadsTo: ["math-3-4"],
  usedIn: ["phy-sound-waves", "phy-half-life-decay", "earth-h4", "b-radiation-laws"]
},

{
  id: "math-3-4",
  sectionId: "MATH-C",
  order: 4,
  title: "Scientific Notation in Practice",
  definition: "Scientific notation expresses a number as a × 10ⁿ where 1 ≤ |a| < 10. It is the standard way to handle very large and very small numbers in science, and the rules for arithmetic in scientific notation are essential for clean calculations.",
  keyFacts: [
    "Format: N × 10ⁿ, where 1 ≤ |a| < 10 and n is an integer",
    "To convert: move decimal until one non-zero digit is to the left",
    "Move decimal right → exponent is NEGATIVE (small number)",
    "Move decimal left → exponent is POSITIVE (large number)",
    "Multiplying: (a × 10ᵐ) × (b × 10ⁿ) = (a × b) × 10ᵐ⁺ⁿ",
    "Dividing: (a × 10ᵐ) ÷ (b × 10ⁿ) = (a/b) × 10ᵐ⁻ⁿ",
    "Adding/subtracting: convert to same exponent first, then add/subtract coefficients",
    "Significant figures in scientific notation: trailing zeros after the decimal point ARE significant"
  ],
  explanationSections: [
    { heading: "1. Converting to Scientific Notation", body: "Move the decimal point until only one non-zero digit is to its left. The exponent equals the number of places moved, positive if moved left (large number), negative if moved right (small number). Example: 450,000 → 4.5 × 10⁵ (moved 5 places left). Example: 0.00032 → 3.2 × 10⁻⁴ (moved 4 places right)." },
    { heading: "2. Multiplication and Division", body: "Multiplying: multiply the coefficients and ADD the exponents. (3 × 10⁴) × (2 × 10³) = 6 × 10⁷. Dividing: divide the coefficients and SUBTRACT the exponents. (8 × 10⁶) ÷ (2 × 10²) = 4 × 10⁴. If the resulting coefficient is ≥ 10 or < 1, adjust the exponent." },
    { heading: "3. Addition and Subtraction", body: "For addition and subtraction, the exponents MUST be the same. Convert to the same exponent first, then add/subtract the coefficients. (3.2 × 10³) + (4.5 × 10²) = (3.2 × 10³) + (0.45 × 10³) = 3.65 × 10³. The result may need to be renormalized if the coefficient falls outside [1, 10)." }
  ],
  formula: {
    name: "Scientific notation form",
    expression: "N = a × 10ⁿ,   where 1 ≤ |a| < 10, n ∈ ℤ",
    variables: [
      { symbol: "a", meaning: "coefficient (decimal with single non-zero digit before the point)" },
      { symbol: "n", meaning: "integer exponent (positive for large, negative for small)" }
    ]
  },
  examPoints: [
    "Multiplying in scientific notation: multiply coefficients, ADD exponents",
    "Dividing in scientific notation: divide coefficients, SUBTRACT exponents",
    "Trailing zeros in scientific notation (e.g., 4.20 × 10³) indicate precision"
  ],
  workedExample: {
    problem: "Round 3.14159 to 2 decimal places and 4 significant figures. Also express 0.000450 in scientific notation and compute (2 × 10³) × (3 × 10⁴).",
    solution: "2 d.p.: look at 3rd decimal (1) < 5, round down: 3.14. 4 s.f.: digits 3, 1, 4, 1 are significant; the 5th (5) ≥ 5, round up: 3.142. Scientific notation: 0.000450 → 4.50 × 10⁻⁴. Multiplication: 2 × 3 = 6; 3 + 4 = 7; result 6 × 10⁷.",
    answer: "3.14; 3.142; 4.50 × 10⁻⁴; 6 × 10⁷"
  },
  commonMistakes: [
    "Rounding 0.5 to 0 (it should round UP to 1 by standard convention)",
    "Counting leading zeros as significant (0.0042 has 2 sig figs, not 4)",
    "Forgetting to adjust the exponent when the coefficient reaches 10 after rounding"
  ],
  relatedTopics: ["math-1-6", "math-3-1"],
  content: true,
  buildsOn: ["math-1-6", "math-3-1"],
  leadsTo: ["phy-units-measurement"],
  usedIn: ["phy-units-measurement", "phy-atomic-structure", "a-composition-today", "h-radiative-forcing"]
}, 
// ════════════════════════════════════════════════════════════════════
// SECTION MATH-D: Geometry & Mensuration
// ════════════════════════════════════════════════════════════════════

{
  id: "math-4-1",
  sectionId: "MATH-D",
  order: 1,
  title: "Basic Geometry: Points, Lines & Angles",
  definition: "Geometry is the branch of mathematics that studies points, lines, angles, surfaces, and solids. The fundamental building blocks are points (zero-dimensional), lines (one-dimensional), and planes (two-dimensional).",
  keyFacts: [
    "A point has position but no size",
    "A line extends infinitely in both directions",
    "A line segment has two endpoints",
    "A ray has one endpoint and extends infinitely in one direction",
    "Parallel lines never meet; perpendicular lines meet at 90°",
    "Acute angle: < 90°; Right: = 90°; Obtuse: > 90° and < 180°; Straight: 180°; Reflex: > 180° and < 360°",
    "Vertical (opposite) angles are equal when two lines cross",
    "Adjacent angles on a straight line sum to 180° (supplementary)",
    "Adjacent angles around a point sum to 360°",
    "Angles in a triangle sum to 180°",
    "Exterior angle of a triangle = sum of the two opposite interior angles"
  ],
  explanationSections: [
    { heading: "1. Types of Angles", body: "An angle is formed by two rays meeting at a vertex. Measured in degrees (°) or radians. Acute (< 90°), right (= 90°), obtuse (90°–180°), straight (= 180°), and reflex (> 180° and < 360°). A full rotation = 360°." },
    { heading: "2. Angle Relationships at Intersections", body: "When two lines cross, they form two pairs of vertical (opposite) angles, which are equal. Adjacent angles on a straight line are supplementary (sum to 180°). When a transversal crosses two parallel lines, alternate interior angles are equal, corresponding angles are equal, and co-interior (same-side) angles are supplementary." },
    { heading: "3. Angle Sum Theorems", body: "Sum of interior angles in a triangle = 180°. Sum of interior angles in a quadrilateral = 360°. Sum of interior angles in an n-gon = (n − 2) × 180°. The exterior angle of a triangle equals the sum of the two non-adjacent interior angles — useful for finding unknown angles in figures." }
  ],
  examPoints: [
    "Memorize: triangle = 180°, quadrilateral = 360°, n-gon = (n − 2) × 180°",
    "Exterior angle of a triangle = sum of the two opposite interior angles",
    "When two parallel lines are cut by a transversal, alternate interior angles are equal"
  ],
  workedExample: {
    problem: "In a triangle, two interior angles are 50° and 70°. Find the third angle and the exterior angle adjacent to the 70° angle.",
    solution: "Sum of interior angles = 180°. Third angle = 180° - 50° - 70° = 60°. Exterior angle at 70° = 180° - 70° = 110° (linear pair). Alternatively, exterior angle = sum of opposite interior angles = 50° + 60° = 110°.",
    answer: "Third interior angle = 60°; exterior angle at 70° = 110°"
  },
  commonMistakes: [
    "Summing the angles in a triangle as 360° (should be 180°)",
    "Forgetting the exterior angle is supplementary to its adjacent interior angle",
    "Confusing alternate interior angles with co-interior (same-side) angles"
  ],
  relatedTopics: ["math-4-2", "math-4-3", "math-4-4"],
  content: true,
  buildsOn: ["math-1-1"],
  leadsTo: ["math-4-2", "math-4-3", "math-5-1"],
  usedIn: ["math-5-3", "phy-scalars-vectors", "phy-reflection-refraction"]
},

{
  id: "math-4-2",
  sectionId: "MATH-D",
  order: 2,
  title: "Triangles & The Pythagorean Theorem",
  definition: "A triangle is a three-sided polygon. Triangles are classified by sides (equilateral, isosceles, scalene) or by angles (acute, right, obtuse). The Pythagorean theorem describes the special relationship between the sides of a right triangle.",
  keyFacts: [
    "Triangle types by sides: equilateral (3 equal), isosceles (2 equal), scalene (all different)",
    "Triangle types by angles: acute (all < 90°), right (one = 90°), obtuse (one > 90°)",
    "A triangle can have at most ONE obtuse or right angle",
    "Sum of interior angles = 180°",
    "Area = ½ × base × height (perpendicular height)",
    "Pythagorean theorem: in a right triangle, a² + b² = c² where c is the hypotenuse",
    "Common Pythagorean triples: (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25)",
    "Converse: if a² + b² = c², the triangle is right-angled",
    "Triangle inequality: the sum of any two sides must be greater than the third"
  ],
  explanationSections: [
    { heading: "1. The Pythagorean Theorem", body: "In any right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides. The hypotenuse is the longest side, opposite the right angle. Example: a ladder 13 m long with base 5 m from a wall reaches √(13² − 5²) = √(169 − 25) = √144 = 12 m up the wall." },
    { heading: "2. Pythagorean Triples", body: "Memorize the common triples (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25). Any multiple of a triple is also a triple: (6, 8, 10) is 2×(3, 4, 5). Recognizing a triple saves time in exams." },
    { heading: "3. Triangle Types and Properties", body: "Equilateral: all sides equal, all angles 60°. Isosceles: two sides equal, two base angles equal. Scalene: all sides and angles different. A right triangle has one 90° angle; the other two sum to 90°. The triangle inequality (sum of any two sides > third) must hold for any valid triangle." }
  ],
  formula: {
    name: "Pythagorean theorem",
    expression: "a² + b² = c²",
    variables: [
      { symbol: "a, b", meaning: "legs (sides adjacent to the right angle)" },
      { symbol: "c", meaning: "hypotenuse (side opposite the right angle, longest side)" }
    ]
  },
  examPoints: [
    "Memorize the Pythagorean triples — they save time on numerical problems",
    "Exterior angle of a triangle equals the sum of the two non-adjacent interior angles",
    "Always identify the right angle correctly; c is the hypotenuse (longest side)"
  ],
  workedExample: {
    problem: "A ladder 13 m long leans against a wall, with its base 5 m from the wall. How high up the wall does it reach?",
    solution: "By Pythagoras: 5² + h² = 13² → h² = 169 - 25 = 144 → h = 12 m.",
    answer: "12 m"
  },
  commonMistakes: [
    "Plugging the hypotenuse into the wrong side of the equation",
    "Assuming a triangle with sides 3, 4, 6 is right-angled (3² + 4² = 25 ≠ 36 = 6²)",
    "Forgetting the triangle inequality when checking if sides form a valid triangle"
  ],
  relatedTopics: ["math-4-1", "math-4-5", "math-4-6"],
  content: true,
  buildsOn: ["math-4-1", "math-3-2"],
  leadsTo: ["math-4-5", "math-5-2"],
  usedIn: ["math-5-2", "phy-vector-operations", "phy-kinematics"]
},

{
  id: "math-4-3",
  sectionId: "MATH-D",
  order: 3,
  title: "Quadrilaterals, Polygons & Angle Sums",
  definition: "A quadrilateral is a four-sided polygon. Different types (squares, rectangles, parallelograms, rhombuses, trapeziums) have specific properties of sides, angles, and diagonals. Polygons are closed plane figures with three or more straight sides.",
  keyFacts: [
    "Sum of interior angles of an n-gon = (n − 2) × 180°",
    "Sum of exterior angles of any convex polygon = 360°",
    "Square: 4 equal sides, 4 right angles, 2 diagonals of equal length",
    "Rectangle: opposite sides equal, 4 right angles, 2 diagonals of equal length",
    "Parallelogram: opposite sides parallel and equal, opposite angles equal",
    "Rhombus: 4 equal sides, opposite sides parallel, opposite angles equal, diagonals perpendicular",
    "Trapezium: at least one pair of parallel sides",
    "Square is a special rectangle, rectangle is a special parallelogram, parallelogram is a special trapezium"
  ],
  explanationSections: [
    { heading: "1. Quadrilateral Hierarchy", body: "Each shape is a special case of the one above it. A square has all the properties of a rectangle (4 right angles) and a rhombus (4 equal sides). A rectangle is a parallelogram with right angles. A parallelogram is a trapezium with two pairs of parallel sides." },
    { heading: "2. Angle Sum in Polygons", body: "Sum of interior angles = (n − 2) × 180°. For a triangle: (3 − 2) × 180° = 180°. Quadrilateral: (4 − 2) × 180° = 360°. Pentagon: 540°. Hexagon: 720°. Sum of exterior angles of any convex polygon = 360° (one full rotation)." },
    { heading: "3. Properties Summary", body: "Square: 4 equal sides, 4 right angles, diagonals bisect at 90°. Rectangle: opposite sides equal, 4 right angles, diagonals equal. Parallelogram: opposite sides parallel and equal, opposite angles equal, diagonals bisect each other. Rhombus: 4 equal sides, diagonals perpendicular but not equal. Trapezium: at least one pair of parallel sides." }
  ],
  examPoints: [
    "Quadrilateral angles always sum to 360°",
    "Exterior angles of any convex polygon sum to 360°",
    "Diagonals of a rectangle are equal; diagonals of a rhombus are perpendicular"
  ],
  workedExample: {
    problem: "Find the sum of interior angles of (a) a hexagon, (b) a decagon. Also, in a quadrilateral, three angles are 90°, 95°, and 100°. Find the fourth.",
    solution: "(a) (6 − 2) × 180° = 720°. (b) (10 − 2) × 180° = 1440°. Quadrilateral: 360° - 90° - 95° - 100° = 75°.",
    answer: "(a) 720°; (b) 1440°; fourth angle = 75°"
  },
  commonMistakes: [
    "Summing interior angles of a quadrilateral as 180° (should be 360°)",
    "Confusing interior and exterior angle sums (exterior = 360° for ALL convex polygons)",
    "Saying a trapezium has exactly one pair of parallel sides — it has at least one"
  ],
  relatedTopics: ["math-4-1", "math-4-2"],
  content: true,
  buildsOn: ["math-4-1"],
  leadsTo: ["math-4-5"],
  usedIn: ["math-4-5", "math-4-6"]
},

{
  id: "math-4-4",
  sectionId: "MATH-D",
  order: 4,
  title: "Circles: Parts, Properties & Formulas",
  definition: "A circle is the set of all points equidistant from a fixed center. The radius, diameter, circumference, and area are related by simple formulas. Circles have unique geometric properties involving chords, arcs, sectors, and tangents.",
  keyFacts: [
    "Radius r: distance from center to any point on the circle",
    "Diameter d: longest chord; d = 2r",
    "Circumference C = 2πr = πd",
    "Area A = πr²",
    "π ≈ 3.14159, ≈ 22/7 as a fraction",
    "Chord: any line segment connecting two points on the circle",
    "Arc: portion of the circumference",
    "Sector: pie-slice region bounded by two radii and an arc",
    "Segment: region bounded by a chord and an arc",
    "Tangent: line touching the circle at exactly one point; perpendicular to the radius at that point",
    "Secant: line intersecting the circle at two points"
  ],
  explanationSections: [
    { heading: "1. The Fundamental Circle Relationships", body: "The number π is the ratio of a circle's circumference to its diameter, approximately 3.14159. So C = πd = 2πr. Area A = πr². Note that the area formula has r² because area is a two-dimensional measure." },
    { heading: "2. Parts of a Circle", body: "A chord is any line segment with both endpoints on the circle; the diameter is the longest chord. An arc is a portion of the circumference. A sector is the region bounded by two radii and the arc between them. A segment is the region bounded by a chord and the arc." },
    { heading: "3. Tangent and Secant Properties", body: "A tangent line touches the circle at exactly one point and is perpendicular to the radius at that point. A secant line cuts the circle at two points. Two tangent segments from an external point to a circle are equal in length — useful in many geometry problems." }
  ],
  formula: {
    name: "Circumference and area of a circle",
    expression: "C = 2πr  =  πd      A = πr²",
    variables: [
      { symbol: "C", meaning: "circumference" },
      { symbol: "A", meaning: "area" },
      { symbol: "r", meaning: "radius" },
      { symbol: "d", meaning: "diameter (d = 2r)" },
      { symbol: "π", meaning: "≈ 3.14159" }
    ]
  },
  examPoints: [
    "Use diameter = 2 × radius and radius = diameter / 2 correctly",
    "Area is in square units; circumference is in linear units",
    "Two tangent segments from an external point to a circle are equal in length"
  ],
  workedExample: {
    problem: "Find the area and circumference of a circle with radius 7 cm.",
    solution: "Area = π × 7² = 49π ≈ 153.94 cm². Circumference = 2π × 7 = 14π ≈ 43.98 cm.",
    answer: "Area = 49π cm² ≈ 153.94 cm²; Circumference = 14π cm ≈ 43.98 cm"
  },
  commonMistakes: [
    "Using diameter instead of radius in the area formula (gives 4× the correct area)",
    "Confusing area of a sector (proportional to angle) with area of a full circle",
    "Saying π = 22/7 exactly — it's an approximation (use 22/7 when fractions are required)"
  ],
  relatedTopics: ["math-4-2", "math-4-5", "math-4-6"],
  content: true,
  buildsOn: ["math-4-1"],
  leadsTo: ["math-4-5", "math-4-6"],
  usedIn: ["phy-wave-properties", "c-global-circulation"]
},

{
  id: "math-4-5",
  sectionId: "MATH-D",
  order: 5,
  title: "Perimeter & Area of 2D Shapes",
  definition: "Perimeter is the total length around the boundary of a 2D shape. Area is the measure of the surface enclosed by the shape. The formulas for both depend on the specific shape, and the right formula must be applied to the right shape.",
  keyFacts: [
    "Square: Perimeter = 4s; Area = s²",
    "Rectangle: Perimeter = 2(L + W); Area = L × W",
    "Triangle: Area = ½ × base × height (perpendicular height)",
    "Heron's formula: Area = √(s(s-a)(s-b)(s-c)) where s = (a+b+c)/2",
    "Parallelogram: Area = base × height",
    "Trapezium: Area = ½ × (a + b) × h, where a, b are parallel sides",
    "Rhombus: Area = ½ × d₁ × d₂ (product of diagonals / 2)",
    "Circle: Area = πr²; Circumference = 2πr"
  ],
  explanationSections: [
    { heading: "1. Why Height Matters for Triangles", body: "A triangle's area depends on the perpendicular height from a base, not the lengths of the other two sides. The same triangle 'slid' along its base has the same area. This is why the area formula uses base × height, not all three sides." },
    { heading: "2. Heron's Formula", body: "When you know all three sides but not the height, use Heron's formula. First find s (half the perimeter), then compute √(s(s-a)(s-b)(s-c)). Useful for 'given three sides' problems. Quick test: for an equilateral triangle with side a, area = (√3/4)a²." },
    { heading: "3. Perimeter vs Area Units", body: "Perimeter is measured in LINEAR units (cm, m, km). Area is measured in SQUARE units (cm², m², km²). Confusion between the two is a common source of error — always check what the problem is asking for." }
  ],
  formula: {
    name: "Perimeter and area formulas (2D shapes)",
    expression: "Square: P=4s, A=s²      Triangle: A=½bh      Trapezium: A=½(a+b)h",
    variables: [
      { symbol: "P, A", meaning: "perimeter, area" },
      { symbol: "s", meaning: "side of square" },
      { symbol: "b, h", meaning: "base, perpendicular height" },
      { symbol: "a, b (trapezium)", meaning: "lengths of the two parallel sides" }
    ]
  },
  examPoints: [
    "Use perpendicular height, not slant length, for triangle area",
    "For Heron's formula, use semi-perimeter s = (a+b+c)/2, not full perimeter",
    "Area units are square (cm², m²); perimeter units are linear (cm, m)"
  ],
  workedExample: {
    problem: "A triangle has sides 13, 14, 15. Find its area.",
    solution: "Semi-perimeter: s = (13+14+15)/2 = 21. Area = √(21 · 8 · 7 · 6) = √7056 = 84 square units.",
    answer: "84 square units"
  },
  commonMistakes: [
    "For Heron's formula, using the full perimeter instead of half-perimeter",
    "Using slant side instead of perpendicular height in triangle/parallelogram area",
    "Computing area when perimeter is asked (or vice versa)"
  ],
  relatedTopics: ["math-4-2", "math-4-3", "math-4-4", "math-4-6"],
  content: true,
  buildsOn: ["math-4-2", "math-4-3", "math-4-4"],
  leadsTo: ["math-4-6"],
  usedIn: ["phy-pressure-fluids", "env-carry-capacity-and-footprint"]
},

{
  id: "math-4-6",
  sectionId: "MATH-D",
  order: 6,
  title: "Volume & Surface Area of 3D Shapes",
  definition: "Volume measures the 3D space enclosed by a solid. Surface area measures the total area of the outer surface. The formulas depend on the shape — cube, cuboid, cylinder, sphere, cone, or pyramid.",
  keyFacts: [
    "Cube: Volume = s³; Total Surface Area = 6s²",
    "Cuboid: Volume = L × W × H; Total SA = 2(LW + LH + WH)",
    "Cylinder: Volume = πr²h; Curved SA = 2πrh; Total SA = 2πr(r + h)",
    "Sphere: Volume = (4/3)πr³; Surface Area = 4πr²",
    "Cone: Volume = (1/3)πr²h; Curved SA = πrl where l = √(r² + h²)",
    "Pyramid: Volume = (1/3) × base area × height",
    "Cone is exactly 1/3 the volume of a cylinder with same base and height",
    "Sphere has smallest surface area for given volume of any 3D shape"
  ],
  explanationSections: [
    { heading: "1. The Cylinder vs Cone Relationship", body: "A cone is exactly 1/3 the volume of the cylinder with the same base and height. This is a beautiful geometric result: filling a cylinder with cones requires exactly 3 cones. The cone's curved surface area uses slant height (l), not vertical height (h). The slant height satisfies l = √(r² + h²) by Pythagoras." },
    { heading: "2. Sphere Formulas", body: "The sphere has the smallest surface area for a given volume of any 3D shape — which is why soap bubbles and water droplets are spherical. Both volume and SA depend only on radius. Memorize: V = (4/3)πr³ and SA = 4πr²." },
    { heading: "3. Unit Awareness", body: "Volume units are CUBIC (cm³, m³, liters). Surface area units are SQUARE (cm², m²). 1 liter = 1000 cm³ = 1 dm³. Always check units in word problems — converting between liters and cm³ is common." }
  ],
  formula: {
    name: "Volume and surface area (3D shapes)",
    expression: "Cube: V=s³, SA=6s²      Cylinder: V=πr²h, SA=2πr(r+h)      Sphere: V=(4/3)πr³, SA=4πr²",
    variables: [
      { symbol: "V", meaning: "volume" },
      { symbol: "SA", meaning: "total surface area" },
      { symbol: "s", meaning: "side of cube" },
      { symbol: "r, h", meaning: "radius, height" },
      { symbol: "l", meaning: "slant height of cone (√(r² + h²))" }
    ]
  },
  examPoints: [
    "Slant height vs vertical height in cones: l = √(r² + h²)",
    "Volume units are cubic (cm³, m³); surface area units are square (cm², m²)",
    "Cone = (1/3) × cylinder with same base and height"
  ],
  workedExample: {
    problem: "Find the volume and total surface area of a cylinder with radius 3 cm and height 10 cm.",
    solution: "Volume = π × 3² × 10 = 90π ≈ 282.74 cm³. Total SA = 2π(3)(3 + 10) = 2π(3)(13) = 78π ≈ 245.04 cm².",
    answer: "Volume = 90π cm³ ≈ 282.74 cm³; Total SA = 78π cm² ≈ 245.04 cm²"
  },
  commonMistakes: [
    "Using vertical height instead of slant height in cone's lateral surface area",
    "Confusing 'surface area' (curved only) with 'total surface area' (curved + top + bottom)",
    "Forgetting 1 liter = 1000 cm³ when converting units"
  ],
  relatedTopics: ["math-4-2", "math-4-4", "math-4-5"],
  content: true,
  buildsOn: ["math-4-5"],
  leadsTo: [],
  usedIn: ["phy-density", "phy-pressure-fluids", "earth-a3"]
},
// ════════════════════════════════════════════════════════════════════
// SECTION MATH-E: Coordinate Geometry & Graphs
// ════════════════════════════════════════════════════════════════════

{
  id: "math-5-1",
  sectionId: "MATH-E",
  order: 1,
  title: "Cartesian Plane & Coordinate System",
  definition: "The Cartesian plane is a 2D coordinate system formed by two perpendicular number lines (axes) intersecting at the origin. Every point on the plane is identified by an ordered pair (x, y) of coordinates, where x is the horizontal position and y is the vertical position.",
  keyFacts: [
    "Two axes: x-axis (horizontal) and y-axis (vertical)",
    "Origin O is at (0, 0), where axes intersect",
    "Points are written as (x, y): x first, then y",
    "x-coordinate: horizontal position (positive right, negative left)",
    "y-coordinate: vertical position (positive up, negative down)",
    "Four quadrants: I (++, upper right), II (-+, upper left), III (--, lower left), IV (+-, lower right)",
    "Points on the x-axis have y = 0",
    "Points on the y-axis have x = 0"
  ],
  explanationSections: [
    { heading: "1. Reading and Plotting Coordinates", body: "The point (3, 5) means 3 units right of the origin and 5 units up. The point (-2, -4) means 2 units left and 4 units down — it lies in Quadrant III. To plot, move along the x-axis first, then parallel to the y-axis. Points on an axis have one coordinate equal to 0." },
    { heading: "2. The Four Quadrants", body: "The axes divide the plane into four quadrants. Quadrant I (+, +): upper right. Quadrant II (-, +): upper left. Quadrant III (-, -): lower left. Quadrant IV (+, -): lower right. The origin (0, 0) is on the boundary, not in any quadrant." },
    { heading: "3. Why This Matters", body: "Coordinate geometry lets us translate geometric problems into algebraic ones. The position of a point, the slope of a line, the area of a polygon — all can be computed using just the coordinates. This is the foundation for graphs, functions, and data visualization." }
  ],
  examPoints: [
    "Coordinates are written as (x, y) — x comes FIRST, y second",
    "Points on x-axis have y = 0; points on y-axis have x = 0",
    "The origin (0, 0) is the only point belonging to both axes"
  ],
  workedExample: {
    problem: "Identify the quadrant of the following points: (a) (3, -2), (b) (-4, 5), (c) (-1, -6), (d) (2, 7).",
    solution: "(a) (3, -2): x>0, y<0 → Quadrant IV. (b) (-4, 5): x<0, y>0 → Quadrant II. (c) (-1, -6): x<0, y<0 → Quadrant III. (d) (2, 7): x>0, y>0 → Quadrant I.",
    answer: "(a) IV; (b) II; (c) III; (d) I"
  },
  commonMistakes: [
    "Swapping x and y coordinates — (3, 5) is NOT the same as (5, 3)",
    "Misidentifying quadrants by signs of coordinates",
    "Forgetting that (0, 5) and (5, 0) are completely different points"
  ],
  relatedTopics: ["math-5-2", "math-5-3", "math-5-4"],
  content: true,
  buildsOn: ["math-4-1"],
  leadsTo: ["math-5-2", "math-5-3", "math-7-1"],
  usedIn: ["phy-scalars-vectors", "phy-vector-operations", "c-upper-air-charts"]
},

{
  id: "math-5-2",
  sectionId: "MATH-E",
  order: 2,
  title: "Distance, Midpoint & Section Formula",
  definition: "The distance formula computes the straight-line distance between two points on the coordinate plane, derived from the Pythagorean theorem. The midpoint formula gives the point exactly halfway between two points. The section formula generalizes this for any internal division.",
  keyFacts: [
    "Distance: d = √[(x₂ - x₁)² + (y₂ - y₁)²]",
    "Midpoint: M = ((x₁ + x₂)/2, (y₁ + y₂)/2)",
    "Section formula (internal, ratio m:n): ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n))",
    "The distance formula is derived from the Pythagorean theorem",
    "The midpoint is the AVERAGE of the x-coordinates and the AVERAGE of the y-coordinates",
    "Distance is always non-negative"
  ],
  explanationSections: [
    { heading: "1. The Distance Formula", body: "Treat the two points as opposite corners of a right triangle. The horizontal leg is |x₂ - x₁|, the vertical leg is |y₂ - y₁|, and the hypotenuse is the distance. By Pythagoras: d² = (x₂ - x₁)² + (y₂ - y₁)², so d = √[(x₂ - x₁)² + (y₂ - y₁)²]." },
    { heading: "2. The Midpoint Formula", body: "The midpoint is the point exactly halfway between the two endpoints. The x-coordinate is the average of the two x-values; the y-coordinate is the average of the two y-values. M = ((x₁ + x₂)/2, (y₁ + y₂)/2). Note: it is an AVERAGE, not a sum or difference." },
    { heading: "3. The Section Formula", body: "For a point P that divides the line segment from A(x₁, y₁) to B(x₂, y₂) in the ratio m:n internally, P = ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n)). The midpoint is the special case where m = n = 1." }
  ],
  formula: {
    name: "Distance and midpoint formulas",
    expression: "d = √[(x₂ − x₁)² + (y₂ − y₁)²]      M = ((x₁ + x₂)/2, (y₁ + y₂)/2)",
    variables: [
      { symbol: "(x₁, y₁), (x₂, y₂)", meaning: "coordinates of the two points" },
      { symbol: "d", meaning: "Euclidean distance" },
      { symbol: "M", meaning: "midpoint" }
    ]
  },
  examPoints: [
    "Distance formula always gives a non-negative result (square root of sum of squares)",
    "Midpoint coordinates are AVERAGES, not sums or differences",
    "For collinear points, distance from A to C = distance from A to B + distance from B to C"
  ],
  workedExample: {
    problem: "Find the distance and midpoint between A(1, 2) and B(7, 10).",
    solution: "Distance = √[(7-1)² + (10-2)²] = √[36 + 64] = √100 = 10. Midpoint = ((1+7)/2, (2+10)/2) = (4, 6).",
    answer: "Distance = 10; Midpoint = (4, 6)"
  },
  commonMistakes: [
    "Subtracting in wrong order (use absolute value or square — squaring removes sign errors)",
    "Dividing by 2 only on one coordinate in the midpoint formula",
    "Using (x₁ + x₂) instead of averaging in the midpoint"
  ],
  relatedTopics: ["math-4-2", "math-5-1", "math-5-3"],
  content: true,
  buildsOn: ["math-5-1", "math-3-2", "math-4-2"],
  leadsTo: ["math-5-3"],
  usedIn: ["phy-vector-operations", "phy-kinematics", "earth-h3"]
},

{
  id: "math-5-3",
  sectionId: "MATH-E",
  order: 3,
  title: "Slope & Equations of Straight Lines",
  definition: "The slope of a line measures its steepness and direction. The equation of a line describes the relationship between x and y coordinates of all points on the line. Several forms (slope-intercept, point-slope, standard) are used depending on the information available.",
  keyFacts: [
    "Slope m = (y₂ - y₁)/(x₂ - x₁) = rise/run",
    "Positive slope: line rises from left to right",
    "Negative slope: line falls from left to right",
    "Zero slope: horizontal line (y = constant)",
    "Undefined slope: vertical line (x = constant)",
    "Slope-intercept form: y = mx + c (m = slope, c = y-intercept)",
    "Point-slope form: y - y₁ = m(x - x₁)",
    "Standard form: Ax + By = C",
    "Parallel lines: m₁ = m₂",
    "Perpendicular lines: m₁ × m₂ = -1"
  ],
  explanationSections: [
    { heading: "1. Reading Slope from the Equation", body: "In y = mx + c, the slope is the coefficient of x. In 2y = 4x + 6, rewrite as y = 2x + 3 — slope is 2, y-intercept is 3. The slope tells you: for every 1 unit right, the line goes 2 units up." },
    { heading: "2. Choosing the Right Form", body: "Use slope-intercept (y = mx + c) for graphing — easiest to visualize. Use point-slope (y - y₁ = m(x - x₁)) when you know one point and the slope. Use standard form (Ax + By = C) for integer coefficients and systems of equations. All three are equivalent forms of the same line." },
    { heading: "3. Parallel and Perpendicular Lines", body: "Parallel lines have the same slope but different y-intercepts. Perpendicular lines have slopes that are negative reciprocals: product = -1. Example: a line with slope 2/3 is perpendicular to one with slope -3/2. (Reciprocal AND sign change.)" }
  ],
  formula: {
    name: "Slope of a line through two points",
    expression: "m = (y₂ − y₁) / (x₂ − x₁)",
    variables: [
      { symbol: "m", meaning: "slope" },
      { symbol: "(x₁, y₁), (x₂, y₂)", meaning: "two points on the line" }
    ]
  },
  examPoints: [
    "Horizontal line: y = constant, slope = 0",
    "Vertical line: x = constant, slope = undefined",
    "Two lines are parallel iff their slopes are equal; perpendicular iff product = -1"
  ],
  workedExample: {
    problem: "Find the equation of the line through (1, 5) with slope 3. Then find a perpendicular line through (2, -1).",
    solution: "Using point-slope: y - 5 = 3(x - 1) → y = 3x + 2. For perpendicular: slope = -1/3. Using point-slope: y - (-1) = -(1/3)(x - 2) → y = -(1/3)x - 1/3.",
    answer: "y = 3x + 2 and y = -(1/3)x - 1/3"
  },
  commonMistakes: [
    "Sign error: perpendicular slope of 2/3 is -3/2 (reciprocal AND negative)",
    "Confusing y-intercept (where x = 0) with x-intercept (where y = 0)",
    "Trying to find a slope from a vertical line using the formula (denominator becomes 0)"
  ],
  relatedTopics: ["math-5-1", "math-5-2", "math-5-4"],
  content: true,
  buildsOn: ["math-5-1", "math-2-6"],
  leadsTo: ["math-5-4"],
  usedIn: ["phy-kinematics", "ra-correlation-regression", "earth-h3"]
},

{
  id: "math-5-4",
  sectionId: "MATH-E",
  order: 4,
  title: "Graph Reading, Functions & Interpretation",
  definition: "A graph visualizes the relationship between two variables. Interpreting graphs involves reading values, identifying trends, recognizing function types (linear, quadratic, exponential, logarithmic), and understanding the meaning of slope and intercepts in context.",
  keyFacts: [
    "Linear function: straight line (y = mx + c)",
    "Quadratic function: parabola (y = ax² + bx + c)",
    "Exponential function: rapid growth or decay (y = a · b^x)",
    "Logarithmic function: slow growth (y = a · log x)",
    "Slope of a curve at a point = slope of the tangent line at that point",
    "y-intercept: value of y when x = 0 (often the starting amount)",
    "x-intercept: value of x when y = 0 (often when something becomes zero or changes sign)",
    "Turning point: where the curve changes direction (max or min)",
    "Interpreting a graph: identify axes, units, scale, then describe the relationship"
  ],
  explanationSections: [
    { heading: "1. Identifying Function Types from Graphs", body: "A straight line means linear (constant rate of change). A U-shape (or inverted U) means quadratic (parabolic, with one turning point). A curve that shoots up rapidly (or approaches zero) means exponential. A curve that grows slowly at first and then faster means logarithmic. Identifying the type is the first step in interpretation." },
    { heading: "2. Slope in Real Contexts", body: "On a distance-time graph, slope is speed. On a velocity-time graph, slope is acceleration and the area under the curve is distance. On a cost-quantity graph, slope is unit price. On a temperature-time graph, slope is the rate of temperature change. Always identify the axes first — slope and area have context-specific meanings." },
    { heading: "3. Reading Off Values and Trends", body: "Given a value on one axis, find the corresponding value on the other axis. This is interpolation. If the value is outside the plotted range, it's extrapolation — a more uncertain process. Identify trends: increasing, decreasing, constant, cyclical, or irregular. Note the maximum, minimum, and any sudden changes (kinks or discontinuities)." }
  ],
  formula: {
    name: "Common function forms (recognition)",
    expression: "Linear: y = mx + c      Quadratic: y = ax² + bx + c      Exponential: y = a · b^x",
    variables: [
      { symbol: "m, c", meaning: "slope and y-intercept (linear)" },
      { symbol: "a, b, c", meaning: "coefficients (quadratic)" },
      { symbol: "a, b", meaning: "initial value and growth factor (exponential)" }
    ]
  },
  examPoints: [
    "Always label axes and units before interpreting a graph",
    "Slope units = (y-axis units) / (x-axis units), not abstract numbers",
    "A curve crossing zero is an intercept; a curve changing direction is a turning point"
  ],
  workedExample: {
    problem: "A distance-time graph shows a line from (0, 0) to (4, 100), where x is hours and y is kilometers. Find the speed.",
    solution: "Speed = slope = (100 - 0)/(4 - 0) = 25 km/h.",
    answer: "25 km/h"
  },
  commonMistakes: [
    "Mixing up the axes (reading time as distance, or vice versa)",
    "Forgetting to include units in the final answer",
    "Confusing exponential growth (curve shoots up) with linear growth (straight line)"
  ],
  relatedTopics: ["math-5-1", "math-5-2", "math-5-3"],
  content: true,
  buildsOn: ["math-5-3", "math-2-1"],
  leadsTo: ["math-8-1"],
  usedIn: ["phy-kinematics", "ra-data-visualization", "d-thermodynamic-diagrams"]
}, 
// ════════════════════════════════════════════════════════════════════
// SECTION MATH-F: Sequences, Series & Patterns
// ════════════════════════════════════════════════════════════════════

{
  id: "math-6-1",
  sectionId: "MATH-F",
  order: 1,
  title: "Arithmetic Sequences & Series",
  definition: "An arithmetic sequence is a sequence of numbers in which each term differs from the previous by a constant amount called the common difference. An arithmetic series is the sum of the terms of an arithmetic sequence.",
  keyFacts: [
    "Arithmetic sequence: a, a+d, a+2d, a+3d, ...",
    "Common difference d = (any term) − (previous term); constant for arithmetic",
    "First term a (or a₁), common difference d",
    "nth term formula: aₙ = a + (n-1)d",
    "Sum of first n terms: Sₙ = n/2 × [2a + (n-1)d]",
    "Alternative sum formula: Sₙ = n/2 × (first term + last term) = n/2 × (a + aₙ)",
    "Arithmetic mean of two numbers: (x + y)/2",
    "Number of terms: n = ((aₙ - a)/d) + 1"
  ],
  explanationSections: [
    { heading: "1. Identifying an Arithmetic Sequence", body: "Check if consecutive differences are constant. For 2, 5, 8, 11, 14, the differences are 3, 3, 3, 3 — constant — so this is arithmetic with a = 2 and d = 3. If the differences are not constant, the sequence is not arithmetic." },
    { heading: "2. The nth Term Formula", body: "Each term is a plus (n-1) times d. aₙ = a + (n-1)d. This lets you find any term without computing all preceding terms. Example: for 5, 8, 11, 14, ..., the 20th term = 5 + (20-1) × 3 = 5 + 57 = 62." },
    { heading: "3. The Sum Formula", body: "Sum of first n terms: Sₙ = n/2 × (2a + (n-1)d) = n/2 × (a + aₙ). The second form (n/2 × (first + last)) is often the easiest to remember. Example: sum of first 10 terms of 3, 7, 11, 15, ... : n=10, a=3, d=4. S₁₀ = 10/2 × (2(3) + 9(4)) = 5 × (6 + 36) = 5 × 42 = 210." }
  ],
  formula: {
    name: "Arithmetic sequence: nth term and sum",
    expression: "aₙ = a + (n − 1)d      Sₙ = (n/2) × [2a + (n − 1)d]",
    variables: [
      { symbol: "aₙ", meaning: "the nth term" },
      { symbol: "a", meaning: "first term" },
      { symbol: "d", meaning: "common difference" },
      { symbol: "n", meaning: "number of terms" },
      { symbol: "Sₙ", meaning: "sum of the first n terms" }
    ]
  },
  examPoints: [
    "If d > 0: increasing sequence; if d < 0: decreasing; if d = 0: constant",
    "Number of terms: n = ((aₙ − a)/d) + 1",
    "Arithmetic mean of x and y: (x + y)/2 — useful for inserting terms"
  ],
  workedExample: {
    problem: "Find the 15th term and the sum of the first 15 terms of the arithmetic sequence 4, 7, 10, 13, ...",
    solution: "a = 4, d = 3, n = 15. a₁₅ = 4 + (15-1) × 3 = 4 + 42 = 46. S₁₅ = 15/2 × (4 + 46) = 15/2 × 50 = 375.",
    answer: "a₁₅ = 46; S₁₅ = 375"
  },
  commonMistakes: [
    "Using the wrong index: a₁ is the first term, aₙ is the nth term",
    "Confusing arithmetic mean ((x+y)/2) with geometric mean (√(xy))",
    "Forgetting to use (n-1) in the nth term formula (it should be (n-1), not n)"
  ],
  relatedTopics: ["math-6-2", "math-6-3"],
  content: true,
  buildsOn: ["math-2-3", "math-2-6"],
  leadsTo: ["math-6-2", "math-6-3"],
  usedIn: ["math-8-1"]
},

{
  id: "math-6-2",
  sectionId: "MATH-F",
  order: 2,
  title: "Geometric Sequences & Series",
  definition: "A geometric sequence is a sequence in which each term is obtained by multiplying the previous term by a fixed non-zero number called the common ratio. A geometric series is the sum of the terms of a geometric sequence.",
  keyFacts: [
    "Geometric sequence: a, ar, ar², ar³, ...",
    "Common ratio r = (any term) / (previous term); constant for geometric",
    "First term a (or a₁), common ratio r",
    "nth term formula: aₙ = ar^(n-1)",
    "Sum of first n terms: Sₙ = a(1 - rⁿ)/(1 - r) for r ≠ 1",
    "Alternative form: Sₙ = a(rⁿ - 1)/(r - 1) for r > 1",
    "Sum of first n terms when r = 1: Sₙ = na",
    "Geometric mean of two numbers: √(xy)",
    "Infinite geometric series: S∞ = a/(1 - r) if |r| < 1 (converges); diverges if |r| ≥ 1"
  ],
  explanationSections: [
    { heading: "1. Identifying a Geometric Sequence", body: "Check if consecutive ratios are constant. For 2, 6, 18, 54, the ratios are 3, 3, 3 — constant — so this is geometric with a = 2 and r = 3. If the ratios are not constant, the sequence is not geometric. Negative ratios alternate signs: e.g., 2, -6, 18, -54, 162, ... has r = -3." },
    { heading: "2. The nth Term Formula", body: "Each term is a times r^(n-1). aₙ = ar^(n-1). Example: for 3, 6, 12, 24, ..., the 8th term = 3 × 2^7 = 3 × 128 = 384. If r is negative, alternate terms are negative." },
    { heading: "3. Sum and Infinite Sum", body: "For finite sum: Sₙ = a(1 - rⁿ)/(1 - r) when r ≠ 1. For infinite sum: S∞ = a/(1 - r), which converges only when |r| < 1. Example: 1 + 1/2 + 1/4 + 1/8 + ... has a = 1, r = 1/2. S∞ = 1/(1 - 1/2) = 2." }
  ],
  formula: {
    name: "Geometric sequence: nth term and sum",
    expression: "aₙ = a · r^(n−1)      Sₙ = a(1 − rⁿ) / (1 − r)      S∞ = a / (1 − r) for |r| < 1",
    variables: [
      { symbol: "aₙ", meaning: "the nth term" },
      { symbol: "a", meaning: "first term" },
      { symbol: "r", meaning: "common ratio" },
      { symbol: "n", meaning: "number of terms" },
      { symbol: "Sₙ", meaning: "sum of first n terms" },
      { symbol: "S∞", meaning: "sum of infinite series (only if |r| < 1)" }
    ]
  },
  examPoints: [
    "If |r| > 1: terms grow in magnitude (diverges)",
    "If |r| < 1: terms shrink toward 0 (infinite sum converges)",
    "If |r| = 1: terms don't shrink (diverges); if r = 1, all terms equal a"
  ],
  workedExample: {
    problem: "Find the 6th term and the sum of the first 6 terms of 3, 6, 12, 24, ... Also find the sum of the infinite series 1 + 1/3 + 1/9 + 1/27 + ...",
    solution: "First: a = 3, r = 2, n = 6. a₆ = 3 × 2^5 = 96. S₆ = 3(1 - 2^6)/(1 - 2) = 3(1 - 64)/(-1) = 3 × 63 = 189. Second: a = 1, r = 1/3, |r| < 1 so S∞ = 1/(1 - 1/3) = 1/(2/3) = 3/2.",
    answer: "a₆ = 96; S₆ = 189; S∞ = 3/2"
  },
  commonMistakes: [
    "Using the wrong sign in the sum formula — use the form that avoids negative denominators",
    "Trying to compute an infinite sum when |r| ≥ 1 (it diverges)",
    "Confusing geometric mean √(xy) with arithmetic mean (x + y)/2"
  ],
  relatedTopics: ["math-6-1", "math-6-3"],
  content: true,
  buildsOn: ["math-3-1", "math-6-1"],
  leadsTo: ["math-6-3"],
  usedIn: ["phy-half-life-decay", "phy-radioactivity-nuclear"]
},

{
  id: "math-6-3",
  sectionId: "MATH-F",
  order: 3,
  title: "Number Patterns & Series Problems",
  definition: "Number pattern recognition is the skill of identifying the rule that generates a sequence, then using that rule to find missing terms, predict future terms, or compute sums. Patterns may be arithmetic, geometric, or based on other rules (squares, cubes, Fibonacci, etc.).",
  keyFacts: [
    "Linear pattern: constant second difference (arithmetic sequence)",
    "Exponential pattern: constant ratio (geometric sequence)",
    "Square numbers: 1, 4, 9, 16, 25, ... (n²)",
    "Cube numbers: 1, 8, 27, 64, ... (n³)",
    "Triangular numbers: 1, 3, 6, 10, 15, ... (Tₙ = n(n+1)/2)",
    "Fibonacci: 1, 1, 2, 3, 5, 8, 13, ... (each term = sum of previous two)",
    "Method to identify: try differences first, then ratios, then other operations"
  ],
  explanationSections: [
    { heading: "1. The Pattern Identification Method", body: "Step 1: Write the sequence. Step 2: Compute first differences. If constant → arithmetic. Step 3: If not, compute second differences. If constant → quadratic. Step 4: If not, try ratios. If constant → geometric. Step 5: Otherwise, look for squares, cubes, factorials, or other rules." },
    { heading: "2. Common Named Patterns", body: "Square numbers: 1², 2², 3², 4², ... = 1, 4, 9, 16, 25. Cube numbers: 1³, 2³, 3³, 4³, ... = 1, 8, 27, 64. Triangular numbers Tₙ = n(n+1)/2 = 1, 3, 6, 10, 15. Fibonacci: F₁ = F₂ = 1, Fₙ = Fₙ₋₁ + Fₙ₋₂, giving 1, 1, 2, 3, 5, 8, 13, 21." },
    { heading: "3. Pattern Completion and Sums", body: "Once a pattern is identified, completing it or summing it is straightforward. For arithmetic and geometric, use the formulas from the previous topics. For other patterns (squares, cubes, factorials), there are known formulas (e.g., sum of first n squares = n(n+1)(2n+1)/6)." }
  ],
  formula: {
    name: "Common series sums",
    expression: "Σk = n(n+1)/2      Σk² = n(n+1)(2n+1)/6      Σk³ = [n(n+1)/2]²",
    variables: [
      { symbol: "Σk", meaning: "sum of first n natural numbers (1+2+...+n)" },
      { symbol: "Σk²", meaning: "sum of first n squares (1²+2²+...+n²)" },
      { symbol: "Σk³", meaning: "sum of first n cubes (1³+2³+...+n³)" },
      { symbol: "n", meaning: "number of terms" }
    ]
  },
  examPoints: [
    "First check differences; if constant, it's arithmetic",
    "If differences aren't constant, check ratios; if constant, it's geometric",
    "Famous patterns: 1, 4, 9, 16, 25 are squares; 1, 8, 27, 64 are cubes; 1, 1, 2, 3, 5, 8 is Fibonacci"
  ],
  workedExample: {
    problem: "Identify the pattern in each sequence and find the next term: (a) 3, 7, 11, 15, ?, (b) 2, 6, 18, 54, ?, (c) 1, 1, 2, 3, 5, 8, ?",
    solution: "(a) Differences: 4, 4, 4 (constant) → arithmetic with d = 4. Next = 19. (b) Ratios: 3, 3, 3 (constant) → geometric with r = 3. Next = 162. (c) Fibonacci (each = sum of previous two): 1, 1, 2, 3, 5, 8, 13, 21, ... Next = 13.",
    answer: "(a) 19; (b) 162; (c) 13"
  },
  commonMistakes: [
    "Stopping at differences when they're not constant without trying ratios",
    "Not recognizing common named sequences (squares, cubes, Fibonacci)",
    "Confusing the Fibonacci rule (sum of previous two) with arithmetic (constant difference)"
  ],
  relatedTopics: ["math-6-1", "math-6-2"],
  content: true,
  buildsOn: ["math-6-1", "math-6-2"],
  leadsTo: [],
  usedIn: ["math-8-1"]
},
// ════════════════════════════════════════════════════════════════════
// SECTION MATH-G: Vectors & 2D Geometry
// ════════════════════════════════════════════════════════════════════

{
  id: "math-7-1",
  sectionId: "MATH-G",
  order: 1,
  title: "Vectors: Notation, Magnitude, Operations & Components",
  definition: "A vector is a quantity that has both magnitude and direction. Vectors are fundamental in physics (force, velocity, acceleration) and meteorology (wind direction and speed). Geometrically, a vector is represented by a directed line segment; algebraically, by an ordered pair or triple of components.",
  keyFacts: [
    "A vector has both MAGNITUDE (size) and DIRECTION",
    "Notation: $\\vec{a}$ or $\\mathbf{a}$ (bold) or with an arrow on top",
    "Magnitude: $|\\vec{a}|$ (the length of the vector)",
    "Position vector: a vector from the origin to a point",
    "Two vectors are EQUAL iff they have the same magnitude and direction",
    "Component form: $\\vec{a} = a_x \\hat{i} + a_y \\hat{j}$, where $\\hat{i}, \\hat{j}$ are unit vectors",
    "Magnitude from components: $|\\vec{a}| = \\sqrt{a_x^2 + a_y^2}$",
    "Unit vector: a vector of magnitude 1 in a given direction, $\\hat{a} = \\vec{a}/|\\vec{a}|$",
    "Addition: $\\vec{a} + \\vec{b} = (a_x + b_x, a_y + b_y)$ (head-to-tail or parallelogram)",
    "Scalar multiplication: $k\\vec{a} = (k a_x, k a_y)$; reverses direction if k < 0",
    "Subtraction: $\\vec{a} - \\vec{b} = (a_x - b_x, a_y - b_y)$",
    "Dot product: $\\vec{a} \\cdot \\vec{b} = a_x b_x + a_y b_y = |\\vec{a}||\\vec{b}|\\cos\\theta$",
    "Perpendicular vectors: $\\vec{a} \\cdot \\vec{b} = 0$"
  ],
  explanationSections: [
    { heading: "1. Vector Basics and Magnitude", body: "A vector is a directed quantity: it has both a size (magnitude, e.g., 5 m/s) and a direction (e.g., northeast). The magnitude is the length of the vector when drawn as an arrow. Notation uses $\\vec{a}$ (with arrow) or bold a. The magnitude is written $|\\vec{a}|$ or just $a$ (when context is clear). For a 2D vector with components $(a_x, a_y)$, the magnitude is $|\\vec{a}| = \\sqrt{a_x^2 + a_y^2}$ — directly from the Pythagorean theorem." },
    { heading: "2. Vector Operations", body: "Addition is done component-wise: $(a_x, a_y) + (b_x, b_y) = (a_x + b_x, a_y + b_y)$. Geometrically, place the tail of the second vector at the head of the first (head-to-tail rule). Subtraction is similar: $(a_x, a_y) - (b_x, b_y) = (a_x - b_x, a_y - b_y)$. Scalar multiplication: $k(a_x, a_y) = (k a_x, k a_y)$ scales the magnitude by $|k|$ and reverses direction if k is negative." },
    { heading: "3. Components and Unit Vectors", body: "Any 2D vector can be written as $\\vec{a} = a_x \\hat{i} + a_y \\hat{j}$, where $\\hat{i} = (1, 0)$ and $\\hat{j} = (0, 1)$ are unit vectors along the x- and y-axes. The unit vector in the direction of $\\vec{a}$ is $\\hat{a} = \\vec{a}/|\\vec{a}|$. This is essential for converting between magnitude-direction form and component form." },
    { heading: "4. Dot Product (Concept)", body: "The dot product $\\vec{a} \\cdot \\vec{b} = a_x b_x + a_y b_y$ gives a scalar (not a vector). Geometrically, $\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta$, where $\\theta$ is the angle between them. Two vectors are perpendicular iff their dot product is 0. This is the basis for finding angles between vectors and testing orthogonality." }
  ],
  formula: {
    name: "Vector magnitude and dot product",
    expression: "|\\vec{a}| = \\sqrt{a_x^2 + a_y^2}      \\vec{a} \\cdot \\vec{b} = a_x b_x + a_y b_y",
    variables: [
      { symbol: "\\vec{a}, \\vec{b}", meaning: "vectors with components (aₓ, a_y) and (bₓ, b_y)" },
      { symbol: "|\\vec{a}|", meaning: "magnitude (length) of the vector" },
      { symbol: "\\vec{a} \\cdot \\vec{b}", meaning: "dot product (scalar result)" }
    ]
  },
  examPoints: [
    "Magnitude is always non-negative",
    "Two vectors are equal iff their components are equal (magnitude AND direction match)",
    "Dot product of perpendicular vectors is 0"
  ],
  workedExample: {
    problem: "Given $\\vec{a} = (3, 4)$ and $\\vec{b} = (1, 2)$, find: (a) the magnitude of each, (b) $\\vec{a} + \\vec{b}$, (c) the dot product $\\vec{a} \\cdot \\vec{b}$, (d) whether they are perpendicular.",
    solution: "(a) $|\\vec{a}| = \\sqrt{9 + 16} = 5$; $|\\vec{b}| = \\sqrt{1 + 4} = \\sqrt{5}$. (b) $\\vec{a} + \\vec{b} = (4, 6)$. (c) $\\vec{a} \\cdot \\vec{b} = 3(1) + 4(2) = 3 + 8 = 11$. (d) $\\vec{a} \\cdot \\vec{b} = 11 \\neq 0$, so they are NOT perpendicular.",
    answer: "(a) 5 and √5; (b) (4, 6); (c) 11; (d) not perpendicular"
  },
  commonMistakes: [
    "Confusing magnitude (always positive) with components (can be negative)",
    "Adding magnitudes instead of components: $|\\vec{a} + \\vec{b}| \\neq |\\vec{a}| + |\\vec{b}|$ in general",
    "Thinking the dot product is a vector — it is a SCALAR"
  ],
  relatedTopics: ["math-5-1", "math-5-2", "math-4-2"],
  content: true,
  buildsOn: ["math-5-1", "math-5-2", "math-3-2"],
  leadsTo: ["phy-scalars-vectors", "phy-vector-operations"],
  usedIn: ["phy-scalars-vectors", "phy-vector-operations", "phy-vector-applications", "phy-kinematics", "phy-newtons-laws", "b-coriolis-effect", "c-forces-governing-wind"]
},
// ════════════════════════════════════════════════════════════════════
// SECTION MATH-H: Word Problems & Applications
// ════════════════════════════════════════════════════════════════════

{
  id: "math-8-1",
  sectionId: "MATH-H",
  order: 1,
  title: "Statistics: Central Tendency & Dispersion",
  definition: "Statistics summarizes data with numerical measures. Central tendency (mean, median, mode) gives a single representative value. Dispersion (range, variance, standard deviation, percentiles) measures how spread out the data are around that center.",
  keyFacts: [
    "Mean: $\\bar{x} = \\frac{\\sum x_i}{n}$",
    "Median: middle value when data is sorted",
    "Mode: most frequently occurring value",
    "Range: max - min",
    "Variance (population): $\\sigma^2 = \\frac{\\sum (x_i - \\mu)^2}{n}$",
    "Variance (sample): $s^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n-1}$",
    "Standard deviation: $s = \\sqrt{\\text{variance}}$ (same units as data)",
    "Quartiles: Q1 (25%), Q2 = median (50%), Q3 (75%)",
    "Interquartile range (IQR) = Q3 - Q1 (robust to outliers)",
    "Empirical rule: ~68% within 1 SD, ~95% within 2 SD, ~99.7% within 3 SD for normal data"
  ],
  explanationSections: [
    { heading: "1. When to Use Each Measure of Center", body: "Use the mean for symmetric data without outliers. Use the median for skewed data or data with outliers (income, house prices). Use the mode for categorical data or to find the most common value. In a perfectly symmetric distribution, all three are equal." },
    { heading: "2. Standard Deviation Interpretation", body: "Standard deviation measures the average distance from the mean. Larger SD = more spread. For a normal (bell-shaped) distribution: ~68% of data is within 1 SD, ~95% within 2 SD, ~99.7% within 3 SD. This is the empirical rule and is essential for interpreting many scientific measurements." },
    { heading: "3. Population vs Sample Standard Deviation", body: "For the entire population, use $\\sigma = \\sqrt{\\sum(x_i - \\mu)^2/n}$. For a sample (most real-world cases), use $s = \\sqrt{\\sum(x_i - \\bar{x})^2/(n-1)}$. The $n-1$ (Bessel's correction) gives an unbiased estimate of the population variance." }
  ],
  formula: {
    name: "Standard deviation (sample)",
    expression: "s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}",
    variables: [
      { symbol: "s", meaning: "sample standard deviation" },
      { symbol: "x_i", meaning: "individual data values" },
      { symbol: "\\bar{x}", meaning: "sample mean" },
      { symbol: "n", meaning: "sample size" }
    ]
  },
  examPoints: [
    "Sample SD uses (n-1) in the denominator (Bessel's correction)",
    "The empirical rule (68-95-99.7) applies to normal distributions specifically",
    "Median is the 50th percentile and is robust to outliers"
  ],
  workedExample: {
    problem: "Find the variance and standard deviation of 2, 4, 4, 4, 5, 5, 7, 9 (treating as population).",
    solution: "Mean = 5. Deviations: -3, -1, -1, -1, 0, 0, 2, 4. Squared: 9, 1, 1, 1, 0, 0, 4, 16. Sum = 32. Variance = 32/8 = 4. SD = √4 = 2.",
    answer: "Variance = 4; SD = 2"
  },
  commonMistakes: [
    "Confusing sample vs population formulas (the n vs n-1 issue)",
    "Forgetting to take the square root at the end (giving variance, not SD)",
    "Using mean when median is more appropriate (e.g., with outliers)"
  ],
  relatedTopics: ["math-1-5", "math-1-8", "math-2-1"],
  content: true,
  buildsOn: ["math-2-1", "math-1-7", "math-5-4"],
  leadsTo: ["math-8-2"],
  usedIn: ["ra-descriptive-statistics", "ra-data-types", "meteo-forecast-skill", "env-carry-capacity-and-footprint", "env-air-pollution"]
},

{
  id: "math-8-2",
  sectionId: "MATH-H",
  order: 2,
  title: "Basic Probability",
  definition: "Probability quantifies the likelihood of an event on a scale from 0 (impossible) to 1 (certain). It is foundational to statistics, risk analysis, and scientific inference, and uses the relationship between favorable and total outcomes.",
  keyFacts: [
    "Classical probability: $P(E) = \\frac{\\text{number of favorable outcomes}}{\\text{total number of outcomes}}$",
    "Sample space: set of all possible outcomes (S)",
    "Event: a subset of the sample space",
    "Certain event: P = 1; Impossible event: P = 0",
    "All probabilities satisfy $0 \\leq P \\leq 1$",
    "Sum of all probabilities in a sample space = 1",
    "Complementary events: $P(A^c) = 1 - P(A)$",
    "Independent events: $P(A \\cap B) = P(A) \\times P(B)$",
    "Mutually exclusive events: $P(A \\cap B) = 0$",
    "Conditional probability: $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$"
  ],
  explanationSections: [
    { heading: "1. Classical vs Empirical Probability", body: "Classical probability assumes equally likely outcomes (e.g., a fair die: P(any face) = 1/6). Empirical probability is based on observed frequencies: P(E) ≈ (times E occurred) / (total trials). As the number of trials grows, empirical probability approaches the true value (Law of Large Numbers)." },
    { heading: "2. Complementary Events", body: "P(not E) = 1 - P(E) is often easier than computing P(E) directly. Example: P(at least one head in 3 coin flips) = 1 - P(all tails) = 1 - (1/2)³ = 7/8. This is the standard trick for 'at least one' problems." },
    { heading: "3. Independent vs Mutually Exclusive", body: "Independent events: can both occur; their joint probability is the product. Mutually exclusive: cannot both occur; their joint probability is 0; their OR probability is the sum. Critical distinction: 'independent' is about non-influence; 'mutually exclusive' is about impossibility of co-occurrence." }
  ],
  formula: {
    name: "Classical probability and complement",
    expression: "P(E) = \\frac{|E|}{|S|}      P(A^c) = 1 - P(A)",
    variables: [
      { symbol: "P(E)", meaning: "probability of event E" },
      { symbol: "|E|", meaning: "number of favorable outcomes" },
      { symbol: "|S|", meaning: "total number of outcomes in the sample space" },
      { symbol: "A^c", meaning: "complement of A (event A does NOT occur)" }
    ]
  },
  examPoints: [
    "All probabilities are between 0 and 1",
    "Sum of all probabilities in a sample space = 1",
    "Don't confuse independent (P(A∩B) = P(A)·P(B)) with mutually exclusive (P(A∩B) = 0)"
  ],
  workedExample: {
    problem: "A bag has 5 red, 3 blue, and 2 green balls. Find (a) P(red), (b) P(non-red), (c) P(at least one red in 2 draws without replacement).",
    solution: "Total = 10. (a) P(red) = 5/10 = 1/2. (b) P(non-red) = 5/10 = 1/2. (c) P(no red in 2 draws) = (5/10)(4/9) = 20/90 = 2/9. P(at least one red) = 1 - 2/9 = 7/9.",
    answer: "(a) 1/2; (b) 1/2; (c) 7/9"
  },
  commonMistakes: [
    "Forgetting to update counts in 'without replacement' problems",
    "Adding probabilities of independent events (should multiply) or multiplying mutually exclusive (should add)",
    "Computing P(E) > 1 (impossible) or P(E) < 0 (impossible)"
  ],
  relatedTopics: ["math-8-1", "math-2-1"],
  content: true,
  buildsOn: ["math-1-5", "math-8-1"],
  leadsTo: [],
  usedIn: ["ra-probability", "i-extreme-events"]
},

{
  id: "math-8-3",
  sectionId: "MATH-H",
  order: 3,
  title: "Speed, Distance & Time",
  definition: "The relationship between speed, distance, and time is one of the most applied in physics and daily life. The fundamental formula $d = vt$ connects all three, with extensions for average speed, relative speed, and unit conversion.",
  keyFacts: [
    "Distance = Speed × Time (d = vt)",
    "Speed = Distance / Time (v = d/t)",
    "Time = Distance / Speed (t = d/v)",
    "Average speed = total distance / total time (NOT the average of two speeds)",
    "Conversion: 1 km/h = 5/18 m/s; 1 m/s = 3.6 km/h",
    "For two equal distances at speeds v₁ and v₂: avg speed = 2v₁v₂/(v₁+v₂) (harmonic mean)",
    "Relative speed: when two objects move toward each other, their relative speed = sum; in same direction, difference",
    "For constant speed, the distance-time graph is a straight line through the origin"
  ],
  explanationSections: [
    { heading: "1. The Conversion Trick", body: "To convert km/h to m/s, multiply by 5/18 (since 1 km/h = 1000 m / 3600 s = 1/3.6 = 5/18 m/s). To convert m/s to km/h, multiply by 3.6. Example: 90 km/h = 90 × 5/18 = 25 m/s. This conversion is high-frequency in physics and meteorology (wind speeds are often in m/s or knots)." },
    { heading: "2. Average Speed Trap", body: "Average speed is NOT the average of two speeds. If you go 60 km at 30 km/h and return 60 km at 60 km/h, the average speed is NOT 45 km/h. Total distance = 120 km. Total time = 2 h + 1 h = 3 h. Average speed = 120/3 = 40 km/h. Use the harmonic mean formula for equal distances." },
    { heading: "3. Relative Speed", body: "When two objects move toward each other, their relative speed is the sum of their speeds. When in the same direction, it's the difference. Used for meeting problems and overtaking problems. Example: two trains 200 km apart, one at 60 km/h and the other at 80 km/h, moving toward each other: relative speed = 140 km/h, time to meet = 200/140 = 10/7 hours." }
  ],
  formula: {
    name: "Fundamental motion equation",
    expression: "d = v × t",
    variables: [
      { symbol: "d", meaning: "distance" },
      { symbol: "v", meaning: "speed (or velocity)" },
      { symbol: "t", meaning: "time" }
    ]
  },
  examPoints: [
    "Average speed = total distance / total time — never the arithmetic mean of speeds",
    "m/s to km/h: multiply by 3.6; km/h to m/s: multiply by 5/18",
    "For uniform motion problems, always list: d, v, t for each segment"
  ],
  workedExample: {
    problem: "A car travels 240 km in 4 hours. What is its average speed in km/h and m/s?",
    solution: "Average speed = 240/4 = 60 km/h. In m/s: 60 × 5/18 = 300/18 ≈ 16.67 m/s.",
    answer: "60 km/h ≈ 16.67 m/s"
  },
  commonMistakes: [
    "Averaging two speeds instead of computing total distance / total time",
    "Confusing which direction is positive in relative speed problems",
    "Forgetting unit conversion in meteorology (knots vs m/s vs km/h)"
  ],
  relatedTopics: ["math-1-5", "math-1-8", "math-1-7"],
  content: true,
  buildsOn: ["math-1-8", "math-2-6", "math-2-2"],
  leadsTo: ["phy-kinematics"],
  usedIn: ["phy-kinematics", "c-forces-governing-wind"]
},

{
  id: "math-8-4",
  sectionId: "MATH-H",
  order: 4,
  title: "Work, Rate & Pipes",
  definition: "Work-rate problems model how long it takes workers (or machines) to complete a task, given their individual rates. The key insight is that combined rates ADD, while combined times do not. Mixture problems (alligation) combine two or more substances in known ratios.",
  keyFacts: [
    "If a worker completes a job in t hours, their rate is 1/t job per hour",
    "Combined rate (independent workers) = sum of individual rates",
    "Time for combined work = 1 / (combined rate)",
    "Total work = rate × time (constant across all workers)",
    "Mixture problems: equate the total amount of solute before and after mixing",
    "Alligation: relates ratios of differences in concentration",
    "If 1 man does a job in 6 days and 1 woman in 12 days, together they do 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4 of the job per day, so 4 days to finish"
  ],
  explanationSections: [
    { heading: "1. The Work-Rate Framework", body: "Convert 'time to complete task' into 'rate of work' (1/time). Workers working together add their rates. If A does a job in 6 hours (rate = 1/6) and B in 4 hours (rate = 1/4), together their rate is 1/6 + 1/4 = 5/12, so time = 12/5 = 2.4 hours = 2 h 24 min. The result is always LESS than the faster worker's individual time." },
    { heading: "2. The Work-Rate Formula", body: "If M₁ workers each doing the job in T₁ hours and M₂ workers each doing it in T₂ hours, combined rate = M₁/T₁ + M₂/T₂. Time = 1 / combined rate. Equivalently, the 'man-hours' of work is fixed: T₁ × M₁ (if 1 worker) is the total work in worker-hours. So M₁/T₁ + M₂/T₂ = 1/T." },
    { heading: "3. Mixture Problems (Alligation)", body: "The total amount of solute (concentration × volume) is conserved. If 10 L of 30% acid is mixed with 20 L of 50% acid, total acid = 3 + 10 = 13 L in 30 L of mixture, giving 13/30 ≈ 43.3% concentration. The alligation shortcut: the ratio of two solutions to achieve a target concentration is inversely proportional to the differences in concentration." }
  ],
  formula: {
    name: "Work-rate equation",
    expression: "Rate_{total} = \\frac{1}{t_1} + \\frac{1}{t_2} + \\dots      Time = \\frac{1}{Rate_{total}}",
    variables: [
      { symbol: "t_i", meaning: "time for worker i alone to complete the job" },
      { symbol: "Rate_{total}", meaning: "combined rate (job per unit time)" },
      { symbol: "Time", meaning: "time for all workers together to complete the job" }
    ]
  },
  examPoints: [
    "Combined rate = sum of individual rates (work/time)",
    "If t₁ and t₂ are individual times, combined time = (t₁ × t₂) / (t₁ + t₂)",
    "In mixture problems, total solute is conserved"
  ],
  workedExample: {
    problem: "Pipe A fills a tank in 6 hours, pipe B in 4 hours. How long to fill the tank with both open?",
    solution: "Rate of A = 1/6 tank/hour. Rate of B = 1/4 tank/hour. Combined = 1/6 + 1/4 = 2/12 + 3/12 = 5/12 tank/hour. Time = 1 ÷ (5/12) = 12/5 = 2.4 hours = 2 hours 24 minutes.",
    answer: "2 hours 24 minutes"
  },
  commonMistakes: [
    "Adding times (1/6 + 1/4) instead of rates (1/6 + 1/4 also happens to give 5/12 here, but conceptually the method is rate-addition, not time-addition)",
    "Confusing work and rate (work = rate × time)",
    "Forgetting to convert minutes to hours (or vice versa) when final answer is asked in specific units"
  ],
  relatedTopics: ["math-8-3", "math-1-5", "math-1-8"],
  content: true,
  buildsOn: ["math-1-8", "math-2-6"],
  leadsTo: [],
  usedIn: ["phy-power-efficiency"]
},

{
  id: "math-8-5",
  sectionId: "MATH-H",
  order: 5,
  title: "Mixtures, Profit/Loss & Interest",
  definition: "Mixture problems involve combining substances of different concentrations. Profit and loss apply percentage calculations to commercial transactions. Simple and compound interest calculate the cost of borrowing or return on saving.",
  keyFacts: [
    "Alligation (for mixtures): ratio = (target - lower) : (higher - target)",
    "Profit % = (Profit / Cost Price) × 100",
    "Loss % = (Loss / Cost Price) × 100",
    "Selling Price (SP) = Cost Price (CP) ± Profit/Loss",
    "Discount is calculated on the marked price, not cost price",
    "Simple Interest: SI = P × r × t / 100, where P = principal, r = rate (% per year), t = years",
    "Compound Interest: A = P(1 + r/n)^(nt), where n = compounding periods per year",
    "For annual compounding: A = P(1 + r)^t",
    "Rule of 72: years to double ≈ 72 / rate%",
    "Effective rate: (1 + r/n)^n - 1"
  ],
  explanationSections: [
    { heading: "1. Alligation Method for Mixtures", body: "To find the ratio in which to mix two solutions of different concentrations to obtain a target concentration: difference between target and lower concentration is the part for the higher-concentration solution; difference between higher and target is the part for the lower-concentration solution. So mix in the ratio (target - lower) : (higher - target)." },
    { heading: "2. Simple vs Compound Interest", body: "In simple interest, interest is calculated only on the original principal every period. In compound interest, interest is calculated on principal PLUS accumulated interest — so the effective rate is higher and the amount grows exponentially. The Rule of 72 gives a quick approximation: years to double ≈ 72/rate%." },
    { heading: "3. Successive Discounts", body: "Two successive discounts of 20% and 10% are NOT the same as a 30% discount. Multiply the multipliers: 0.80 × 0.90 = 0.72, so the equivalent single discount is 28%, not 30%. For three successive discounts, multiply three factors. Profit/Loss percentages are always on COST price, while discounts are on MARKED price." }
  ],
  formula: {
    name: "Compound interest (annual compounding)",
    expression: "A = P × (1 + r)^t      SI = \\frac{P × r × t}{100}",
    variables: [
      { symbol: "A", meaning: "final amount (principal + interest)" },
      { symbol: "P", meaning: "principal (initial amount)" },
      { symbol: "r", meaning: "annual interest rate (as decimal for A, as % for SI)" },
      { symbol: "t", meaning: "time in years" }
    ]
  },
  examPoints: [
    "Profit % is always calculated on cost price, not selling price",
    "Discount is on marked price; profit is on cost price — never confuse",
    "Rule of 72 gives approximate doubling time at compound interest"
  ],
  workedExample: {
    problem: "Rs. 10,000 is invested at 10% compound interest for 3 years. Find the final amount. Also, two successive discounts of 20% and 10% on a Rs. 1000 item: what is the final price?",
    solution: "CI: A = 10000 × (1.10)³ = 10000 × 1.331 = 13,310. Discounts: 1000 × 0.80 = 800; 800 × 0.90 = 720. Effective discount = 28% (not 30%).",
    answer: "Final amount: Rs. 13,310; Final price after discounts: Rs. 720"
  },
  commonMistakes: [
    "Confusing profit (on cost) with markup (on selling) — same number only by coincidence",
    "Adding successive discounts instead of multiplying",
    "Calculating interest on the wrong base (year 2 should be on new principal, not original)"
  ],
  relatedTopics: ["math-1-3", "math-1-7", "math-8-3", "math-8-4"],
  content: true,
  buildsOn: ["math-1-7", "math-1-8", "math-2-6"],
  leadsTo: [],
  usedIn: []
}
];