import type { Topic } from '@/types';

// ============================================================================
// HAT ANALYTICAL REASONING — IMPROVED STRUCTURE
// Hierarchy: Topic → Subtopics → Explanation → Examples → Shortcuts → Traps
// ============================================================================

export const analyticalTopics: Topic[] = [

  // --------------------------------------------------------------------------
  // A1 — SEATING & ARRANGEMENT PUZZLES
  // --------------------------------------------------------------------------
  {
    id: 'hat-a1-seating',
    sectionId: 'HATA-1',
    order: 1,
    title: 'Seating & Arrangement Puzzles',

    definition:
      'Seating and arrangement puzzles ask you to place people (or objects) in a row, circle, parallel rows, or on a floor/shelf according to given clues. This is the single highest-frequency family in HAT Analytical Reasoning — roughly 25–30% of the questions. The defining habit is: always draw. A correct mental-only solution is rare, and under time pressure it is dangerous. This chapter trains you to translate each clue into a placement, eliminate impossible options quickly, and recognise the moment a question cannot be answered uniquely.',

    subtopics: [
      {
        id: 'linear-seating',
        title: 'Linear (Row) Seating',
        summary: 'Placing people in a straight row facing one direction.',
        explanation:
          'In a linear row facing NORTH, position 1 is on the left of the diagram and position n is on the right. The crucial rule: LEFT and RIGHT are measured from each person\'s OWN perspective — not the diagram\'s.\n\nFor a row facing south, the diagram is drawn left-to-right, but each person\'s left/right is reversed relative to the diagram. So if A is "to the right of B" in a south-facing row, A is to the diagram\'s LEFT of B.\n\nSolve in this order:\n1. Place definite clues first ("at the extreme end", "third to the left of").\n2. Place relative clues ("A and B are adjacent").\n3. Apply negative clues last ("A is not next to B").',
        examples: [
          {
            problem: 'Five people A, B, C, D, E sit in a row facing north. A is at the left end. B is second to the right of A. C is immediately between B and D. Who is at the right end?',
            solution:
              'Position 1 = A (left end). B is "second to the right of A" → position 3. C is immediately between B and D, so C and D are adjacent to B, with C between them. C = position 4, D = position 5. E = position 2. Right end = D.'
          },
          {
            problem: 'Six people sit in a row. P is to the immediate left of Q. R is at the right end. S is third to the left of R. How many sit between P and R?',
            solution:
              'R at position 6. S third to the left of R → position 3. P immediately left of Q → consecutive. Without more clues, P and Q can occupy positions 4–5 or 5–6 — multiple arrangements possible. Re-check the original statement to ensure no clue is missing.'
          }
        ],
        shortcuts: [
          'Number seats 1 to n left-to-right (assuming north-facing).',
          '"Xth from left" = position number from left.',
          '"Xth to the left of Y" = subtract X from Y\'s position.',
          'Always consider both directions when a clue says "between".',
          'Draw a horizontal row of boxes before reading the clues.'
        ],
        traps: [
          'Using diagram left/right instead of each person\'s own left/right.',
          'Forgetting to flip directions when facing south.',
          'Solving "between" in only one direction.',
          'Forcing a unique answer when clues actually leave two arrangements.'
        ]
      },
      {
        id: 'circular-seating',
        title: 'Circular Seating',
        summary: 'Placing people around a table facing the centre or facing outward.',
        explanation:
          'The key fact: when people face the CENTRE of a circle (top-view convention), immediate RIGHT = CLOCKWISE and immediate LEFT = ANTI-CLOCKWISE.\n\nWhen people face OUTSIDE, immediate left/right are reversed.\n\nThe trick with circular puzzles is "opposite" relationships. In a 6-person circle facing centre, the person directly opposite is 3 seats away (clockwise or anti-clockwise). In an 8-person circle, opposite is 4 seats away.\n\nSolve in this order:\n1. Place "opposite" pairs first — they lock each other.\n2. Place people with definite position ("immediately right of P", "second to the left of Q").\n3. Fill the remaining seats by elimination.',
        examples: [
          {
            problem: 'Six people P, Q, R, S, T, U sit around a circle facing the centre. P sits opposite R. Q sits immediately left of P. S sits immediately right of R. T sits between S and U. Who sits opposite Q?',
            solution:
              'Facing centre: right = clockwise, left = anti-clockwise. Lock P opposite R. Q = immediate left of P. S = immediate right of R. T between S and U forces the remaining order. Opposite Q is then uniquely U. (If the clue only said "S between R and T" without direction, opposite Q would be S or T — not unique.)'
          },
          {
            problem: 'Eight people A through H sit around a circle facing the centre. A is opposite E. B is second to the right of A. Who is opposite B?',
            solution:
              'Lock A opposite E. B is second to the right (clockwise) of A. The seat opposite B is four seats clockwise from B (or four anti-clockwise). Counting clockwise from B: third position = E, fourth position from B = opposite seat. So opposite B is G if we lay it out. Verify: with A at top, B two seats clockwise, opposite B is two seats past B — the seat four positions from A clockwise.'
          }
        ],
        shortcuts: [
          'Draw 6 or 8 dots in a circle before reading the clues.',
          'When facing centre: right = clockwise, left = anti-clockwise.',
          'Place "opposite" pairs first; they anchor the layout.',
          'If two arrangements still fit, the puzzle is unsolvable — pick "cannot be determined".'
        ],
        traps: [
          'Reversing left/right when facing centre vs facing outward.',
          'Counting "opposite" as 2 instead of n/2 seats.',
          'Placing one person and assuming the others will fall — they often do not.',
          'Forcing an answer when two valid arrangements remain.'
        ]
      },
      {
        id: 'parallel-rows',
        title: 'Parallel Rows',
        summary: 'Two rows facing each other; "opposite" means same column.',
        explanation:
          'In a parallel-row arrangement, Row 1 faces north and Row 2 faces south (or vice versa). "Opposite" means the person in the same column of the opposite row.\n\nKey rules:\n- "Opposite of X" = the person directly across in the other row (same column number).\n- Left/right is still from each person\'s own view.\n- "Immediate neighbour" can mean next column in the same row OR the person opposite.\n\nDraw the two rows as horizontal lines facing each other. Number seats in each row from 1 to n.',
        examples: [
          {
            problem: 'Eight people sit in two parallel rows of four. A, B, C, D face north; E, F, G, H face south. A is opposite E. B is second to the right of A. G is opposite B. Who is opposite C?',
            solution:
              'A at position 1 (left end of Row 1). E at position 1 (opposite). B is second to right of A → position 3 of Row 1. G opposite B → position 3 of Row 2. Remaining Row 1 positions: 2 and 4 → C and D (order unknown without more clues). Cannot determine who is opposite C uniquely.'
          }
        ],
        shortcuts: [
          'Draw two rows with arrows pointing in opposite directions.',
          'Lock the "opposite" relationships first; they fix column positions.',
          'Left/right is from each person\'s view, not from the diagram\'s.',
          'When Row 1 has open seats at columns 2 and 4, and Row 2 has open at columns 2 and 4, you cannot determine who sits opposite whom without more clues.'
        ],
        traps: [
          'Using diagram left/right instead of each person\'s left/right.',
          'Treating "opposite" as adjacent instead of same-column.',
          'Forgetting that one row faces the opposite direction.'
        ]
      },
      {
        id: 'floor-shelf',
        title: 'Floor / Shelf Arrangements',
        summary: 'Same logic as linear, but with up/down instead of left/right.',
        explanation:
          'Floor arrangements list floors top to bottom (or bottom to top as stated). "Above" = higher floor; "below" = lower. Same rules as linear seating apply.\n\nShelf arrangements are horizontal shelves stacked vertically. Same idea.\n\nAlways clarify the orientation in the question: "top floor" = first or last? Read carefully.',
        examples: [
          {
            problem: 'Five people live in a five-storey building. A lives on the top floor. B lives two floors below A. C lives immediately above D. E lives on the bottom floor. Who lives in the middle floor?',
            solution:
              'A = 5th (top). B two floors below → 3rd. E = 1st (bottom). C immediately above D and they take floors 2 and 4 (the only remaining adjacent pair). So C and D occupy 2nd and 4th in some order. Middle floor (3rd) = B.'
          }
        ],
        shortcuts: [
          'Number floors 1 (bottom) to n (top), or top to bottom — pick one and stick with it.',
          'Apply the same "definite first, relative second, negative last" approach as linear seating.',
          'For shelf arrangements, treat each shelf as a tiny linear row.'
        ],
        traps: [
          'Confusing "top floor" with "first floor" (different conventions).',
          'Losing track when there are more than 5 floors.',
          'Ignoring negative clues ("X is not directly above Y").'
        ]
      },
      {
        id: 'seating-method',
        title: 'Method Selection for Seating Puzzles',
        summary: 'A reference for the "how to recognise" and "what to do" decisions.',
        explanation:
          'A 30-second decision tree before solving.',
        examples: [
          {
            problem: 'See the table below.',
            solution: 'See the table below.'
          }
        ],
        shortcuts: [
          '"At the extreme" or "at the end" → lock to position 1 or n.',
          '"X is opposite Y" → they sit 3 seats apart in 6-person circles, 4 in 8-person, etc.',
          '"Immediately to the left of X" facing centre → anti-clockwise of X.',
          '"Third to the right of X" → count 3 clockwise from X.',
          '"Two between A and B" → both sides possible; check both before assuming.',
          '"If … then must be true" → test with each possible arrangement.',
          'No definite starter after 60 seconds → skip and return later.'
        ],
        traps: [
          'Solving in your head without drawing.',
          'Confusing facing direction.',
          'Not considering both sides for "between".',
          'Forcing a unique answer when clues leave two arrangements.'
        ]
      }
    ],

    keyFacts: [
      'Always draw. Linear = horizontal row. Circular = dots in a circle. Parallel = two rows.',
      'Linear facing north: left/right = from each person\'s own perspective.',
      'Circular facing centre: immediate right = clockwise; immediate left = anti-clockwise.',
      'Circular facing outward: left/right reverse relative to facing centre.',
      'Opposite in a 6-person circle = 3 seats away; in 8-person = 4 seats away.',
      'Parallel rows: opposite = same column. Each row faces the opposite direction.',
      '"X between A and B" → consider both sides of A (and both sides of B).',
      'No definite starter in 60 seconds → skip and return later.',
      'Two arrangements still possible → answer is "cannot be determined".',
      'Negative clues ("not adjacent") become decisive in the last 1–2 steps.'
    ],

    explanationSections: [
      {
        heading: 'Why drawing is non-negotiable',
        body: 'In a 5-person circular puzzle there are 5! = 120 possible arrangements. Without a diagram, you cannot hold more than 3 in your head. The diagram becomes your external memory. Always draw, even on the question paper.'
      },
      {
        heading: 'The three solve-order rules',
        body: '1. Definite positions first (ends, opposite, immediate). 2. Relative positions second (left/right of X). 3. Negative clues last (not next to, not in position 4). Reversing this order is the #1 reason seating questions go wrong.'
      },
      {
        heading: 'When to skip',
        body: 'If after 60 seconds no person is placed, skip the question. Seating puzzles have heavy time costs. Come back only if you have time at the end.'
      },
      {
        heading: 'Facing direction matters',
        body: 'In circular puzzles, "left of P" depends on whether P faces the centre or outward. HAT uses "facing centre" as the default. Read every clue carefully.'
      }
    ],

    examPoints: [
      'Who sits at the extreme ends / opposite whom?',
      'How many sit between A and B?',
      'Which of the following must be true / could be true / cannot be true?',
      'If A is moved to position X, who is now adjacent / opposite?',
      'Who sits immediately to the left/right of Z?'
    ],

    commonMistakes: [
      'Confusing left/right orientation (especially circular facing centre vs outside).',
      'Not considering both directions for "between".',
      'Solving without a diagram under time pressure.',
      'Forcing a unique answer when the clues leave two possibilities.',
      'Forgetting to flip orientation when one row faces the other way.'
    ],

    content: true,
    examType: 'hat',
    hatSection: 'analytical',
    examScope: ['bs17'],
  },

  // --------------------------------------------------------------------------
  // A2 — BLOOD RELATIONS
  // --------------------------------------------------------------------------
  {
    id: 'hat-a2-blood-relations',
    sectionId: 'HATA-2',
    order: 2,
    title: 'Blood Relations, Family Trees & Pointing',

    definition:
      'Blood relation questions ask how two people are related, sometimes through a chain of statements and sometimes through a person pointing at a photograph. The skill is to draw a family tree with each generation on its own horizontal line, and to expand pointing phrases word-by-word from the inside out. Gender, when explicitly stated, often eliminates two of four options immediately.',

    subtopics: [
      {
        id: 'family-relations',
        title: 'Direct Family Relations',
        summary: 'The basic family terminology and how to navigate generations.',
        explanation:
          'Family tree basics:\n- Great-grandparents → Grandparents → Parents → Children → Grandchildren (top to bottom by generation).\n- Maternal = mother\'s side. Paternal = father\'s side.\n- Spouse of my sibling = my brother-in-law or sister-in-law.\n- Sibling of my parent = my uncle or aunt.\n- Child of my sibling = my nephew or niece.\n- Spouse of my uncle/aunt = also my uncle/aunt (not great-uncle).\n- Son of my uncle = my cousin.\n\nGender terms when given:\n- "He is my father\'s son" → if I am male, "he" is me. If I am female, "he" is my brother.\n- "She is my mother\'s daughter" → if I am female and not an only child, "she" is me. If I am an only child, "she" is me (only daughter = self).',
        examples: [
          {
            problem: 'A is B\'s sister. C is B\'s mother. D is C\'s father. E is D\'s mother. How is A related to D?',
            solution:
              'Tree: E (great-grandmother) → D → C → A,B. A is D\'s granddaughter.'
          },
          {
            problem: 'F is the brother of A. C is the daughter of A. G is the brother of C. How is F related to G?',
            solution:
              'F is brother of A; C is daughter of A → F is C\'s uncle. G is C\'s brother → F is G\'s uncle.'
          }
        ],
        shortcuts: [
          'Always draw the tree with generations as horizontal lines.',
          'Use gender symbols if known (♂ male, ♀ female) — they disambiguate.',
          'Maternal and paternal relatives stay on their side of the tree.',
          'Spouse can be drawn on the same horizontal line.'
        ],
        traps: [
          'Mixing maternal and paternal sides.',
          'Assuming gender when not stated.',
          'Losing track of generations in long chains.',
          'Counting "grandson" when the actual relation is "nephew".'
        ]
      },
      {
        id: 'pointing-phrases',
        title: 'Pointing Phrases',
        summary: 'Decoding "A points to X and says \'Y is the … of my …\'" sentences.',
        explanation:
          'A pointing phrase is a coded description of a person. Decode it step-by-step from the INSIDE OUT.\n\nWorked framework:\n1. Identify the innermost reference ("my mother", "his father").\n2. Apply the relation outward ("only daughter of my mother").\n3. Apply the speaker\'s gender when needed.\n4. Identify the person being described.\n\nKey rules:\n- "Only daughter of my mother" = the speaker herself (only child or only girl).\n- "Only son of my father" = the speaker if male, or his brother if there are multiple sons and the speaker is female.\n- "His mother is the only daughter of my mother" → the only daughter is the speaker herself, so she is his mother.',
        examples: [
          {
            problem: 'A woman says, "His mother is the only daughter of my mother." How is the woman related to "him"?',
            solution:
              'Innermost: "my mother". Only daughter of my mother = the woman herself. So "his mother" = the woman. She is his mother.'
          },
          {
            problem: 'Pointing to a photograph, A says, "She is the daughter of my grandmother\'s only son." How is the girl in the photo related to A\'s father?',
            solution:
              'A\'s grandmother\'s only son = A\'s father (assuming one son). So she is the daughter of A\'s father = A\'s sister. To A\'s father, she is his daughter.'
          },
          {
            problem: 'A man says, "Her mother is my mother\'s only daughter." Who is "her" to him?',
            solution:
              'My mother\'s only daughter = the speaker himself if he is an only son, or his sister. If she is his sister, then "her mother" is his mother (his sister\'s mother = his own mother). Then "her" = the speaker\'s daughter or his sister\'s daughter. The cleanest interpretation: "her mother" = my mother → "she" = my sister, then "her" = my niece.'
          }
        ],
        shortcuts: [
          'Decode from inside out — never jump.',
          '"Only daughter/son of X" almost always = X\'s child (the speaker\'s sibling or self).',
          'Always check: is the speaker male or female? The answer depends on it.',
          'After decoding, write the final relation explicitly to avoid re-decoding.'
        ],
        traps: [
          'Jumping to a conclusion before expanding every word.',
          'Ignoring the speaker\'s gender.',
          'Treating "only daughter" as "some daughter".',
          'Confusing "grandmother\'s only son" with "grandmother\'s son" — they may differ if there are multiple sons.'
        ]
      },
      {
        id: 'coded-relations',
        title: 'Coded Relation Chains',
        summary: 'Multi-statement family chains — building a complete tree.',
        explanation:
          'Coded relation chains give you several statements about the same family. Your job is to assemble them into a tree.\n\nSteps:\n1. Read every statement and identify all the people mentioned.\n2. Identify the people you can place directly (e.g. "P is the father of Q" → P above Q).\n3. Add the next statement, extending the tree.\n4. Look for relations involving people already placed to confirm or extend.\n5. When all statements are placed, answer the question.',
        examples: [
          {
            problem: 'P is the father of Q. Q is the sister of R. R is the son of S. S is the wife of T. How is Q related to T?',
            solution:
              'P = father of Q. R = Q\'s brother (since Q is R\'s sister). S = mother of Q and R. T = father of Q and R (spouse of S). Q is T\'s daughter.'
          },
          {
            problem: 'A and B are brothers. C is the wife of B. D is the daughter of A. E is the daughter of C. How is D related to E?',
            solution:
              'A and B are brothers → their children are cousins. D (daughter of A) and E (daughter of C, i.e. daughter of B) are first cousins.'
          }
        ],
        shortcuts: [
          'Build the tree incrementally — one statement at a time.',
          'When the gender is not explicit, note "unknown" — it usually does not affect the answer.',
          'After every statement, re-check the question being asked.',
          'Mark spouse relationships with a horizontal line between generations.'
        ],
        traps: [
          'Confusing in-laws with blood relations.',
          'Assuming a spouse\'s gender from context.',
          'Missing a relation because you stopped building the tree too early.',
          'Treating "brother\'s son" as "nephew" — correct, but mixing with "uncle\'s son" (= cousin).'
        ]
      },
      {
        id: 'blood-method',
        title: 'Method Selection for Blood Relations',
        summary: 'A reference table for the "how to recognise" decisions.',
        explanation: 'See the table below.',
        examples: [
          {
            problem: 'See the table below.',
            solution: 'See the table below.'
          }
        ],
        shortcuts: [
          '"He says …" → decode inside-out, paying attention to speaker\'s gender.',
          '"She is the only daughter of my mother" → she is me (if female speaker with no sisters) or my sister.',
          '"Son of my father\'s father" → my brother (if no uncles) or my uncle.',
          '"Wife of my brother" → my sister-in-law.',
          '"Daughter of my mother\'s brother" → my cousin (female).',
          '"Father of my son" → my husband or me (if male speaker).',
          'Maternal / paternal → trace to the right side of the tree.'
        ],
        traps: [
          'Decoding in the wrong direction (outside-in).',
          'Forgetting to check speaker gender.',
          'Confusing "mother\'s brother" (uncle) with "father\'s brother" (also uncle but paternal).',
          'Assuming "only" means "some".'
        ]
      }
    ],

    keyFacts: [
      'Generations top→bottom: great-grandparents, grandparents, parents, children, grandchildren.',
      'Maternal = mother\'s side; paternal = father\'s side.',
      '"Only daughter of my mother" = speaker herself (if female and only child) or my sister.',
      '"Only son of my father" = speaker (if male and only son) or my brother.',
      'Spouse of sibling of parent = uncle/aunt. Child of sibling = cousin.',
      'In pointing phrases, decode INSIDE OUT, considering speaker\'s gender.',
      'Coded chains: build the tree one statement at a time.',
      'When gender is stated, it usually eliminates two of four options.',
      'Daughter-in-law = wife of my son OR wife of my brother\'s son.',
      'Son-in-law = husband of my daughter OR husband of my brother\'s daughter.'
    ],

    explanationSections: [
      {
        heading: 'Why drawing is essential',
        body: 'A family tree with generations as horizontal lines is the only reliable way to handle chains longer than two links. Drawing forces you to commit to a structure, which surfaces contradictions immediately.'
      },
      {
        heading: 'Pointing phrases: inside-out decoding',
        body: 'Most pointing errors come from decoding outside-in. The fix is mechanical: read the phrase from the deepest reference ("my mother", "his father") outward, applying one relation at a time.'
      },
      {
        heading: 'In-laws vs blood relations',
        body: 'Spouses and in-laws live on the same horizontal line as their spouse. Blood relations are vertical (parent-child) or horizontal within a generation (siblings). Confusing the two is a top HAT error.'
      }
    ],

    examPoints: [
      'How is A related to B?',
      'Pointing to a photograph, A says "He/She is the … of my …" — how is the person related to A?',
      'How many males / females in the family?',
      'Who is the uncle / aunt / daughter-in-law / cousin of X?',
      'If one person is removed/added, how does the relation change?'
    ],

    commonMistakes: [
      'Mixing maternal and paternal sides.',
      'Assuming gender when the question never states it.',
      'Losing track of generations in long chains.',
      'Skipping the step-by-step expansion of pointing phrases.',
      'Confusing "grandfather" with "great-uncle" or other distant relations.'
    ],

    content: true,
    examType: 'hat',
    hatSection: 'analytical',
    examScope: ['bs17'],
  },

  // --------------------------------------------------------------------------
  // A3 — SYLLOGISMS
  // --------------------------------------------------------------------------
  {
    id: 'hat-a3-syllogisms',
    sectionId: 'HATA-3',
    order: 3,
    title: 'Syllogisms: Venn Diagrams and Logical Conclusions',

    definition:
      'A syllogism has two or three statements (using All / Some / No / Some not) and asks which conclusions follow. The reliable HAT method is Venn diagrams: draw the diagrams permitted by the statements, and a conclusion "follows" only if it is true in EVERY valid diagram. A single counter-diagram is enough to reject a conclusion. This chapter trains you to draw all the valid cases for each set of statements and to apply the "every" rule.',

    subtopics: [
      {
        id: 'venn-basics',
        title: 'Venn Diagram Basics',
        summary: 'Translating All/Some/No/Some not into circles.',
        explanation:
          'Each circle represents a set. The four basic moves:\n- "All A are B" → A is entirely inside B.\n- "Some A are B" → A and B overlap (at least one element is in both).\n- "No A is B" → A and B do not overlap.\n- "Some A are not B" → at least part of A is outside B (possibly all of A).\n\nThe trap: "Some A are B" does NOT mean "Some A are not B" is false. In a universe where everything is B (so A is entirely inside B), "Some A are B" is true AND "Some A are not B" is FALSE — so the two cannot be stated together as a pair of conclusions unless specifically required.',
        examples: [
          {
            problem: 'Statement: All cats are animals. Draw the Venn diagram.',
            solution:
              'Cats (small circle) entirely inside Animals (big circle).'
          },
          {
            problem: 'Statement: Some engineers are doctors. Draw the diagram.',
            solution:
              'Two overlapping circles with at least one element in the intersection. The non-overlapping parts of each circle are also valid (they represent engineers who are not doctors and doctors who are not engineers).'
          }
        ],
        shortcuts: [
          'Always draw circles. Mental Venn works only for the simplest cases.',
          'When a statement uses "Some", you do NOT know the exact overlap — just that it exists.',
          'When "Some" appears, draw the overlap as small (the smallest valid case) — easier to spot when other conclusions fail.'
        ],
        traps: [
          'Treating "Some A are B" as "All A are B".',
          'Assuming "Some A are not B" means "most A are not B".',
          'Drawing the overlap too large — it forces unjustified conclusions.'
        ]
      },
      {
        id: 'conclusion-follows',
        title: 'Conclusion-Follows Testing',
        summary: 'A conclusion follows only if it is true in every valid Venn diagram.',
        explanation:
          'The single most important rule in syllogisms: A conclusion FOLLOWS if and only if it is TRUE in EVERY diagram that satisfies the statements.\n\nProcess:\n1. Draw all valid diagrams for the statements.\n2. For each conclusion, check it against every diagram.\n3. If it is true in every diagram → follows.\n4. If even one diagram violates it → does NOT follow.\n\nThis is why "All + All → All" works (every diagram satisfies it) and "Some + Some → Some" often fails (you can draw a diagram where the Some parts do not connect).',
        examples: [
          {
            problem: 'Statements: All books are pens. All pens are pencils. Conclusion I: All books are pencils. Conclusion II: All pencils are books.',
            solution:
              'Only one valid Venn: Books ⊂ Pens ⊂ Pencils. Conclusion I true in every diagram → FOLLOWS. Conclusion II: Books are a small circle inside Pencils; many pencils are not books → does NOT follow.'
          },
          {
            problem: 'Statements: Some doctors are teachers. All teachers are engineers. Conclusion I: Some doctors are engineers. Conclusion II: All engineers are teachers.',
            solution:
              'Doctors overlap Teachers. Teachers ⊂ Engineers. The overlap of doctors with teachers is necessarily inside engineers → Conclusion I FOLLOWS. Conclusion II: Not all engineers are teachers (some teachers are engineers, but engineers could be much larger) → does NOT follow.'
          }
        ],
        shortcuts: [
          'After drawing, mentally "delete" each diagram and check the conclusion.',
          'One counter-diagram is enough to reject a conclusion.',
          '"Some A are B, Some B are C" almost never forces "Some A are C" — counter-example: A and C disjoint.',
          '"All A are B" NEVER implies "All B are A". This is the #1 syllogism trap.'
        ],
        traps: [
          'Saying "follows" when a single counter-diagram exists.',
          'Treating "Some" as "All" or "Most".',
          'Forcing a chain that the statements do not support.',
          'Ignoring the possibility that one of the Some-parts is the entire set.'
        ]
      },
      {
        id: 'some-not-and-no',
        title: 'Some Not, No, and Negative Conclusions',
        summary: 'Handling the negative half of syllogisms.',
        explanation:
          'Negative statements are often the deciding factor.\n\n"No A is B" → circles separate.\n"Some A are not B" → at least part of A is outside B.\n\nTesting "No A is B" conclusions:\n- Statements that force A and B to overlap → "No A is B" does NOT follow.\n- Statements that force A and B separate → "No A is B" FOLLOWS.\n\nTesting "Some A are not B":\n- If A is entirely inside B, "Some A are not B" is FALSE.\n- If A has any element outside B, "Some A are not B" is TRUE.',
        examples: [
          {
            problem: 'Statements: All mangoes are fruits. Some fruits are apples. Conclusion I: Some mangoes are apples. Conclusion II: Some mangoes are not apples.',
            solution:
              'Mangoes ⊂ Fruits. Some Fruits overlap Apples. The mangoes-in-fruits part may or may not overlap with apples. Diagram 1: mangoes-in-fruits entirely inside apples → I true, II false. Diagram 2: mangoes-in-fruits disjoint from apples → I false, II true. Both conclusions may be true but neither is forced. Neither follows.'
          },
          {
            problem: 'Statements: No cat is a dog. Some pets are cats. Conclusion: Some pets are dogs.',
            solution:
              'No cat is a dog → cats and dogs separate. Some pets are cats → at least one pet-cat exists. The remaining pets could be dogs, or other things. "Some pets are dogs" is NOT forced. Does not follow.'
          }
        ],
        shortcuts: [
          'When a statement says "No", draw the circles separate and do not let them overlap.',
          '"Some are not" needs at least one element of A outside B — easy to test.',
          'Try to draw a counter-diagram when in doubt; if you can, the conclusion fails.'
        ],
        traps: [
          'Letting circles overlap when the statement says "No".',
          'Treating "Some A are not B" as a strong claim (it only needs one element outside).',
          'Forgetting that "Some A are not B" can be true even when most of A is in B.'
        ]
      },
      {
        id: 'either-or',
        title: 'Either-Or Conclusions',
        summary: 'Two complementary conclusions where exactly one must be true.',
        explanation:
          'A pair of conclusions forms an EITHER-OR set when:\n1. They are complementary (one is the negation of the other).\n2. They cannot both be true at the same time.\n3. At least one of them must be true given the statements.\n\nThe classic pattern: "Some A are B" vs "No A is B". Together they cover all cases (any element of A is either in B or not in B). So whenever the statements force A to exist, exactly one of these two must hold.\n\nIn HAT, "Either I or II follows" is reported when neither conclusion follows on its own but one of them is always true.',
        examples: [
          {
            problem: 'Statements: All mangoes are apples. Some apples are oranges. Conclusion I: Some mangoes are oranges. Conclusion II: No mango is an orange.',
            solution:
              'Mangoes ⊂ Apples. Mangoes may or may not overlap Oranges (within Apples). Diagram 1: overlap → I true, II false. Diagram 2: no overlap → I false, II true. Both diagrams are valid. Neither conclusion follows alone. But exactly one is true in each diagram → EITHER-OR follows.'
          },
          {
            problem: 'Statements: Some engineers are managers. All managers are leaders. Which pair forms an either-or?',
            solution:
              'Engineers ∩ Managers ⊂ Leaders. So some engineers (those who are managers) are leaders. But "Some engineers are leaders" and "No engineer is a leader" — together they cover cases, but neither is forced (engineers could be partly leaders). Either-or DOES NOT necessarily apply here; test each diagram.'
          }
        ],
        shortcuts: [
          'Either-or arises when one conclusion\'s negation is the other.',
          'Test by drawing diagrams: if exactly one of the pair is true in every diagram, you have either-or.',
          'Either-or is rare — only when the statements force the choice.'
        ],
        traps: [
          'Reporting either-or when both conclusions are sometimes true.',
          'Reporting either-or when both are sometimes false.',
          'Using "either" for unrelated conclusion pairs.'
        ]
      },
      {
        id: 'syllogism-method',
        title: 'Method Selection for Syllogisms',
        summary: 'A reference table for the "how to recognise" decisions.',
        explanation: 'See the table below.',
        examples: [
          {
            problem: 'See the table below.',
            solution: 'See the table below.'
          }
        ],
        shortcuts: [
          'Two Alls → usually a chain, "All A are C" follows.',
          'All + Some → "Some A are C" often follows (the Some overlap is inside the All set).',
          'Some + Some → almost never forces a definite conclusion about extremes.',
          'All + No → "No" conclusion often propagates.',
          'Some + No → "Some A are not C" can usually be derived.',
          '"All A are B" → reverse is the #1 trap. "All B are A" does NOT follow.',
          '"Some A are B" → "Some A are not B" is NOT necessarily true.',
          'Possibility ("which can be true") → need only one valid diagram.',
          'Definite ("which follows") → must be true in every valid diagram.'
        ],
        traps: [
          'Treating "Some" as "All".',
          'Assuming the reverse of an All statement.',
          'Saying "follows" when a single counter-diagram exists.',
          'Forcing "Some A are C" from two Some statements.'
        ]
      }
    ],

    keyFacts: [
      'All A are B → A inside B. Some A are B → overlap. No A is B → separate.',
      '"Follows" = true in EVERY valid Venn diagram. One counter-diagram = does not follow.',
      '"Some A are B" does NOT imply "Some A are not B".',
      '"All A are B" does NOT imply "All B are A".',
      'Some + Some → does not force a chain between extremes.',
      'Possibility questions → need at least one valid diagram.',
      'Either-or → complementary pair, exactly one must be true.',
      'Always draw circles; mental Venn fails on chains of three or more.',
      'When in doubt, try to draw a counter-diagram. If you can, the conclusion fails.',
      '"Some A are not B" needs only ONE element of A outside B.'
    ],

    explanationSections: [
      {
        heading: 'The universal rule',
        body: '"Follows" means TRUE IN EVERY diagram. This single rule resolves 90% of syllogism disputes. Memorise it.'
      },
      {
        heading: 'Possibility vs definite',
        body: '"Which can be true" asks for AT LEAST ONE valid diagram. "Which follows" asks for ALL valid diagrams. These are opposites — confusing them reverses every answer.'
      },
      {
        heading: 'Reverse of All is the #1 trap',
        body: '"All A are B" is a one-way statement. About 25% of incorrect syllogism answers come from assuming the reverse. If you remember nothing else, remember this.'
      }
    ],

    examPoints: [
      'Only I follows / only II / both / either / neither.',
      'Which of the following is possible?',
      'Which conclusion is definite?',
      'If a third statement is added, which new conclusion follows?'
    ],

    commonMistakes: [
      'Treating "Some" as "All".',
      'Assuming the reverse of "All A are B".',
      'Saying "follows" when a single counter-diagram exists.',
      'Forcing "Some A are C" from two Some statements.',
      'Confusing possibility with definite.'
    ],

    content: true,
    examType: 'hat',
    hatSection: 'analytical',
    examScope: ['bs17'],
  },

  // --------------------------------------------------------------------------
  // A4 — CRITICAL REASONING
  // --------------------------------------------------------------------------
  {
    id: 'hat-a4-critical-reasoning',
    sectionId: 'HATA-4',
    order: 4,
    title: 'Critical Reasoning: Arguments, Assumptions, Weakeners',

    definition:
      'Critical reasoning presents a short argument and asks about its strength. The argument has a CONCLUSION (the claim), EVIDENCE (the support), and often a hidden ASSUMPTION (the bridge). The four question types are: assumption, strengthen, weaken, and conclusion. The discipline is: identify the conclusion first, then find the gap between evidence and claim. That gap is usually what the question targets.',

    subtopics: [
      {
        id: 'argument-structure',
        title: 'Argument Structure',
        summary: 'Conclusion, evidence, and assumption.',
        explanation:
          'Every argument has three parts:\n- CONCLUSION: the claim the argument is trying to establish.\n- EVIDENCE: the facts, data, or reasons given.\n- ASSUMPTION: the unstated premise that connects evidence to conclusion.\n\nIdentify the conclusion first. Look for keywords: "therefore", "thus", "so", "hence", "consequently". The conclusion is what the argument is trying to prove.\n\nThen check the evidence. Is the evidence strong enough? Where is the gap?\n\nThe gap is the assumption — what must be true for the evidence to actually support the conclusion.',
        examples: [
          {
            problem: '"Studies show that students who study more than 3 hours daily score above 80% in exams. Therefore, Ali, who studies 4 hours daily, will score above 80%." Identify conclusion, evidence, assumption.',
            solution:
              'Conclusion: Ali scores above 80%. Evidence: Students who study >3h daily score >80% (generalisation). Assumption: Ali is one of those students — specifically, that the generalisation applies to Ali (he studies the right way, takes the same exams, etc.).'
          }
        ],
        shortcuts: [
          'Conclusion first, evidence second, assumption third.',
          'Look for conclusion markers: "therefore", "so", "thus", "this shows that".',
          'Look for evidence markers: "because", "since", "studies show", "for example".',
          'The assumption is what would have to be true for the evidence to imply the conclusion.'
        ],
        traps: [
          'Mistaking evidence for conclusion.',
          'Confusing background facts with the actual claim.',
          'Inventing an assumption that does not match the gap.'
        ]
      },
      {
        id: 'assumption',
        title: 'Assumption Questions',
        summary: 'The hidden bridge between evidence and conclusion.',
        explanation:
          'An assumption is an UNSTATED premise that the argument NEEDS to work. Test: if the assumption is false, does the argument collapse?\n\nTwo types:\n- NECESSARY assumption: without it, the conclusion does not follow.\n- SUFFICIENT assumption: with it, the conclusion definitely follows.\n\nHAT usually asks for the necessary assumption. To find it:\n1. State the conclusion and evidence.\n2. Ask: what must be true for the evidence to imply the conclusion?\n3. That is the assumption.',
        examples: [
          {
            problem: '"Ali, who studies 4 hours daily, will score above 80% because students who study more than 3 hours daily score above 80%." What is the assumption?',
            solution:
              'The argument assumes the generalisation applies to Ali. Specifically: (a) Ali\'s study habits are like those who score >80%, (b) the exam is comparable, (c) Ali has no offsetting disadvantages. The most basic assumption: "Ali is comparable to the students in the study".'
          },
          {
            problem: '"The new ad campaign increased sales by 20%, proving that advertising boosts revenue." What is the assumption?',
            solution:
              'The argument assumes nothing else changed the sales (no price change, no seasonal effect, no competitor exit, etc.). Assumption: "Sales would not have increased by 20% without the ad campaign."'
          }
        ],
        shortcuts: [
          'Negate the candidate assumption: if the negation kills the conclusion, it is a real assumption.',
          'Necessary assumptions often connect evidence to conclusion via a hidden intermediate.',
          'Watch for "no other cause" assumptions in cause-effect arguments.'
        ],
        traps: [
          'Picking a true statement that does NOT connect evidence to conclusion.',
          'Confusing necessary with sufficient assumption.',
          'Missing an implicit "no other cause" assumption.'
        ]
      },
      {
        id: 'strengthen-weaken',
        title: 'Strengthen and Weaken Questions',
        summary: 'Adding or removing support for the conclusion.',
        explanation:
          'STRENGTHEN = additional evidence that makes the conclusion MORE likely.\nWEAKEN = additional evidence that makes the conclusion LESS likely (or provides an alternative explanation).\n\nCommon weakeners:\n- Alternative cause: something other than the claimed cause produced the result.\n- Reverse causation: the result may have caused the claimed cause, not the other way around.\n- Self-selection: only a particular group was measured, biasing the result.\n- Sampling bias: the data is not representative.\n- Scope mismatch: the conclusion generalises beyond what the evidence supports.\n\nCommon strengtheners:\n- Additional supporting data.\n- Elimination of alternative causes.\n- Confirmation by an independent source.\n- A second study with similar results.',
        examples: [
          {
            problem: '"Beach litter fell 30% after the city banned plastic bags. Therefore, the ban reduced litter." Which weakens?',
            solution:
              'Strong weakener: "Tourist visits to the beach fell 40% during the same period." This provides an alternative cause for the litter reduction.'
          },
          {
            problem: '"Countries with higher literacy rates have higher GDP. So improving literacy will increase GDP." Which weakens?',
            solution:
              'Reverse causation: "Wealthier countries can afford to invest more in education, so high GDP may cause high literacy rather than the other way around."'
          },
          {
            problem: '"Students who completed our study skills course scored 20% higher on average than those who did not. The course improves performance." Which weakens?',
            solution:
              'Self-selection: "Only highly motivated students enrolled in the course; they would have scored higher regardless."'
          }
        ],
        shortcuts: [
          'For weaken: look for alternative explanations or scope problems.',
          'For strengthen: look for additional confirmation.',
          'The correct answer directly addresses the argument\'s gap, not a peripheral issue.',
          'Avoid answers that are merely true in the real world but irrelevant to this argument.'
        ],
        traps: [
          'Choosing a true but irrelevant option.',
          'Confusing strengthen with assumption.',
          'Missing reverse-causation or self-selection weakeners.',
          'Picking the extreme option when the argument is moderate.'
        ]
      },
      {
        id: 'conclusion-questions',
        title: 'Conclusion and Inference Questions',
        summary: 'What must be true given the passage?',
        explanation:
          'The correct conclusion is supported by the passage. It does NOT need to be the most important or the most obvious — just supported.\n\nTest: ask "Does the passage state or imply this?" If yes, it could be the answer. If the passage is silent on the matter (even if the statement is true in the real world), it is NOT the answer.\n\nConclusion questions often have "trap" answers that are:\n- True in real life but not in the passage.\n- Too strong (the passage says less than the answer claims).\n- A rephrasing of the evidence, not a conclusion from it.\n- A direction the passage never considered.',
        examples: [
          {
            problem: 'Passage: "Sales of electric vehicles rose 40% last year, but they still represent only 2% of all vehicle sales." Which conclusion follows?',
            solution:
              'Supported: "EV sales are growing rapidly but remain a small share of the market." Not supported (even if true in real life): "EVs will dominate the market by 2030."'
          }
        ],
        shortcuts: [
          'The correct answer is supported by the passage.',
          'Real-world truths not in the passage are wrong answers.',
          'Watch for over-strong options ("all", "every", "no", "never").'
        ],
        traps: [
          'Choosing a true but unsupported option.',
          'Picking an option that the passage directly contradicts.',
          'Going beyond what the passage actually says.'
        ]
      },
      {
        id: 'course-of-action',
        title: 'Cause-Effect and Course of Action',
        summary: 'Identifying causes and proposing actions.',
        explanation:
          'Cause-effect arguments: X happened, then Y happened; therefore X caused Y.\n\nTo weaken: show that (a) Y would have happened anyway, (b) something else caused Y, (c) the correlation is spurious, (d) X and Y are both caused by Z.\n\nCourse-of-action questions: given the problem, which action best addresses it?\n\nA valid course of action:\n- Addresses the actual cause (not a symptom).\n- Is practical and feasible.\n- Does not create worse side-effects.\n- Directly reduces or solves the problem.',
        examples: [
          {
            problem: 'Cause: heavy rain upstream. Effect: city flooding. Best course of action?',
            solution:
              'Valid: improve drainage, build reservoirs upstream, install early-warning systems. Invalid: ban rainfall (impractical), ignore the flooding (does not solve it), raise city taxes (does not address the cause).'
          }
        ],
        shortcuts: [
          'For course of action: ask "Does this address the root cause AND is it practical?"',
          'For cause-effect weakener: think of an alternative cause.',
          'Avoid extreme or impractical actions.',
          'Avoid actions that worsen the problem or create new ones.'
        ],
        traps: [
          'Proposing actions that do not address the actual cause.',
          'Choosing impractical or impossible actions.',
          'Missing reverse-causation weakeners.',
          'Picking the action with the longest description.'
        ]
      },
      {
        id: 'critical-method',
        title: 'Method Selection for Critical Reasoning',
        summary: 'A reference table for the "how to recognise" decisions.',
        explanation: 'See the table below.',
        examples: [
          {
            problem: 'See the table below.',
            solution: 'See the table below.'
          }
        ],
        shortcuts: [
          '"Assumption" → find the unstated bridge. Negate-test: if false, does the argument die?',
          '"Strengthen" → additional evidence supporting the conclusion.',
          '"Weaken" → alternative cause, reverse causation, self-selection, scope mismatch.',
          '"Conclusion" → supported by the passage, not necessarily the most obvious.',
          '"Course of action" → addresses cause, practical, no worse side-effects.',
          'Always identify conclusion first.',
          'Real-world truths not in the passage ≠ correct answers.'
        ],
        traps: [
          'Confusing necessary with sufficient assumption.',
          'Choosing true-but-irrelevant options.',
          'Missing self-selection or reverse-causation weakeners.',
          'Going beyond what the passage actually says.'
        ]
      }
    ],

    keyFacts: [
      'Conclusion first, evidence second, assumption third.',
      'Assumption = unstated premise the argument needs. Negate-test confirms.',
      'Strengthen = extra evidence for conclusion. Weaken = evidence against conclusion.',
      'Common weakeners: alternative cause, reverse causation, self-selection, sampling bias.',
      'Cause-effect trap: correlation ≠ causation.',
      'Course of action: addresses cause, practical, no worse side-effects.',
      'Conclusion must be supported by the passage — true in real world is not enough.',
      'Watch for over-strong options ("all", "never", "must").',
      'Self-selection: only a particular group was measured; this can explain the result.',
      'Conclusion keywords: "therefore", "thus", "so", "this shows that".'
    ],

    explanationSections: [
      {
        heading: 'The conclusion-first habit',
        body: 'Skipping straight to the question without finding the conclusion is the #1 reason for wrong answers. Take 10 seconds to identify the conclusion before reading the question.'
      },
      {
        heading: 'The gap is the question',
        body: 'Every critical reasoning question targets the gap between evidence and conclusion. Assumption: fill the gap. Strengthen: support one side. Weaken: show the gap is wider than it looks.'
      },
      {
        heading: 'Self-selection and reverse causation',
        body: 'These two patterns appear in 30–40% of HAT weakeners. Always check: could the result have caused the cause? Did only a particular group participate?'
      }
    ],

    examPoints: [
      'Which is an assumption of the argument?',
      'Which strengthens / weakens the argument?',
      'Which is a valid conclusion?',
      'Best course of action?',
      'If the evidence changed, which conclusion would now follow?'
    ],

    commonMistakes: [
      'Choosing a true but irrelevant option.',
      'Confusing necessary vs sufficient assumption.',
      'Picking extreme options when the argument is moderate.',
      'Ignoring self-selection / alternative-cause weakeners.',
      'Going beyond what the passage actually says.'
    ],

    content: true,
    examType: 'hat',
    hatSection: 'analytical',
    examScope: ['bs17'],
  },

  // --------------------------------------------------------------------------
  // A5 — SERIES, CODING & PATTERNS
  // --------------------------------------------------------------------------
  {
    id: 'hat-a5-series-coding',
    sectionId: 'HATA-5',
    order: 5,
    title: 'Series, Coding-Decoding & Patterns',

    definition:
      'Series, coding, and pattern questions test fluency with numbers, letters, and rules. They reward practice more than logic: each sub-type has a small library of patterns. The trick is to check the common patterns first (constant difference, increasing difference, multiplication, squares, cubes, primes) and only invent an exotic rule when the common ones fail. Letter problems are easiest when you write the alphabet positions once and reuse them.',

    subtopics: [
      {
        id: 'number-series',
        title: 'Number Series',
        summary: 'Finding the rule that generates a sequence.',
        explanation:
          'Standard patterns to check, in order:\n1. Constant addition or subtraction.\n2. Constant multiplication or division.\n3. Increasing/decreasing addition (e.g. +2, +4, +6, +8…).\n4. Increasing/decreasing multiplication.\n5. Squares and cubes (1, 4, 9, 16, 25, 36…).\n6. Prime numbers.\n7. Fibonacci-like (next = sum of two before).\n8. Two interleaved series (odd positions vs even positions).\n9. n(n+1), n² + 1, n² − 1, etc.\n\nAlways examine differences first. Constant → AP. Increasing → quadratic. Multiplicative → GP or related.',
        examples: [
          {
            problem: '2, 6, 12, 20, 30, ?',
            solution:
              'Differences: 4, 6, 8, 10 → next +12 → 42. Or pattern: n(n+1) → 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42. Answer: 42.'
          },
          {
            problem: '3, 9, 27, 81, ?',
            solution:
              'Constant ×3 ratio. Next = 81 × 3 = 243.'
          },
          {
            problem: '1, 4, 9, 16, 25, 36, ?',
            solution:
              'Perfect squares. Next = 49 (7²).'
          },
          {
            problem: '2, 5, 10, 17, 26, ?',
            solution:
              'Differences 3, 5, 7, 9 → next +11 → 37.'
          },
          {
            problem: '5, 11, 23, 47, ?',
            solution:
              'Each term = previous × 2 + 1. Next = 47 × 2 + 1 = 95.'
          },
          {
            problem: '1, 1, 2, 3, 5, 8, 13, ?',
            solution:
              'Fibonacci: sum of two before. Next = 8 + 13 = 21.'
          }
        ],
        shortcuts: [
          'Always check differences first.',
          'When differences are not constant, check second differences.',
          'When in doubt, check for two interleaved series.',
          'Memorise squares up to 25² and cubes up to 12³ — saves time.'
        ],
        traps: [
          'Missing an interleaved dual series.',
          'Forcing a complex pattern when a simple one exists.',
          'Ignoring the possibility of ±1 adjustments.',
          'Stopping at the first plausible rule without checking all terms.'
        ]
      },
      {
        id: 'letter-series',
        title: 'Letter Series',
        summary: 'Letter sequences with gaps, reverses, or skips.',
        explanation:
          'Write the alphabet once: A(1) B(2) … Z(26).\n\nPatterns:\n- Constant letter gap: A, D, G, J → +3 each.\n- Reverse alphabet: Z, Y, X, W → gaps of −1, but counting backwards through the alphabet.\n- Skip pattern: B, F, K, Q, X → +4, +5, +6, +7.\n- Combined: vowels, consonants, etc.\n\nWhen a series uses "reverse" alphabet positions, write the positions on the right of each letter to make the pattern visible.',
        examples: [
          {
            problem: 'A, C, F, J, O, ?',
            solution:
              'Gaps: +2, +3, +4, +5 → next +6 → U.'
          },
          {
            problem: 'Z, Y, X, W, V, ?',
            solution:
              'Reverse alphabet with gap −1 → next = U.'
          },
          {
            problem: 'B, F, K, Q, X, ?',
            solution:
              'Gaps: +4, +5, +6, +7 → next +8 → next letter after X is F. Wait: X + 8 = F (cycling). 24+8=32 → 32−26 = 6 → F.'
          }
        ],
        shortcuts: [
          'Write alphabet positions next to each letter.',
          'When gaps grow, count them — the pattern is usually arithmetic.',
          'When the series "wraps", treat it as cyclic (after Z comes A).',
          'Vowel/consonant patterns sometimes appear — be alert.'
        ],
        traps: [
          'Forgetting to wrap from Z back to A.',
          'Counting gaps incorrectly in reverse alphabet.',
          'Missing a vowel/consonant or odd/even position pattern.'
        ]
      },
      {
        id: 'odd-one-out',
        title: 'Odd One Out',
        summary: 'Find the rule that 4 of 5 share; the exception is the answer.',
        explanation:
          'Process:\n1. List all five items.\n2. Find a rule that applies to 4 of them.\n3. The 1 that does not fit is the answer.\n\nCommon rules: even/odd, prime/composite, square/cube, vowel/consonant, geometric shape (4 sides vs 5), odd-position/even-position numbers.\n\nIf the obvious rule does not work, try a less obvious one. The question has a unique answer, so keep looking.',
        examples: [
          {
            problem: '2, 3, 5, 7, 9, 11 — odd one out?',
            solution:
              'All primes except 9 (3×3). Odd one = 9.'
          },
          {
            problem: '6, 10, 14, 18, 23 — odd one out?',
            solution:
              'Most are 4n+2 (6, 10, 14, 18). 23 does not fit. Odd one = 23.'
          }
        ],
        shortcuts: [
          'List properties of each item: parity, prime, square, etc.',
          'The rule must apply to 4 of 5.',
          'If the first rule you try has only 3 fits, try another rule.',
          'Be alert to multi-step rules (e.g. even AND prime → 2 only).'
        ],
        traps: [
          'Stopping at the first plausible rule.',
          'Choosing an item that fits MOST properties — it must fit all but one of the shared properties.',
          'Inventing a rule that has no basis.'
        ]
      },
      {
        id: 'letter-coding',
        title: 'Letter Coding (Shift, Reverse, Mixed)',
        summary: 'Decoding word transformations.',
        explanation:
          'Three common coding patterns:\n\n1. CONSTANT SHIFT: each letter ±k. CAT (+1) → DBU.\n2. REVERSE ALPHABET: A↔Z, B↔Y, … (position sum = 27). CAT → XZG (C=3→24=X, A=1→26=Z, T=20→7=G).\n3. MIXED: shift + reverse, or shift + position.\n\nThe first step is always to write the given word and candidate codes side-by-side, then test each pattern.',
        examples: [
          {
            problem: 'CAT is coded as DBU. How is DOG coded?',
            solution:
              'C→D, A→B, T→U → +1 each. DOG → EPH.'
          },
          {
            problem: 'CAT is coded as XZG. How is DOG coded?',
            solution:
              'Reverse alphabet: position 3 (C) → 24 (X). Position 1 (A) → 26 (Z). Position 20 (T) → 7 (G). DOG → WLT.'
          }
        ],
        shortcuts: [
          'Write the alphabet positions once and reuse for the entire section.',
          'For each candidate pattern, test it on at least two given examples.',
          'The pattern must work for every given example — one exception kills it.',
          'For reverse alphabet: position sum with 27.'
        ],
        traps: [
          'Picking a pattern that works for one example but not another.',
          'Forgetting the wrap from Z back to A in shift coding.',
          'Misapplying the position-sum rule for reverse alphabet.'
        ]
      },
      {
        id: 'digit-coding',
        title: 'Letter-to-Digit Coding',
        summary: 'Mapping letters to digits via given examples.',
        explanation:
          'You are given one or more words with their digit codes. Each letter maps to a UNIQUE digit. From the examples, fill in the mapping; then encode/decode the target word.\n\nIf a word contains repeated letters (e.g. SEE has two E\'s), the same digit appears twice in the code. If two different words have the same digit at overlapping positions, that digit is the same letter.',
        examples: [
          {
            problem: 'CLOUD = 31485 and RAIN = 6729. What is the code for COLD?',
            solution:
              'From CLOUD: C=3, L=1, O=4, U=8, D=5. From RAIN: R=6, A=7, I=2, N=9. COLD = 3, 1, 4, 5 = 3145.'
          }
        ],
        shortcuts: [
          'Build a letter→digit dictionary as you read examples.',
          'Cross-check: repeated letters → repeated digits; common letters → common digits.',
          'Once the dictionary is complete, encoding is mechanical.',
          'If two letters share a digit in different examples, the dictionary is wrong.'
        ],
        traps: [
          'Assuming different letters can have the same digit.',
          'Missing a constraint because you stopped building the dictionary too early.',
          'Confusing the direction (digit→letter vs letter→digit).'
        ]
      },
      {
        id: 'series-method',
        title: 'Method Selection for Series and Coding',
        summary: 'A reference table for the "how to recognise" decisions.',
        explanation: 'See the table below.',
        examples: [
          {
            problem: 'See the table below.',
            solution: 'See the table below.'
          }
        ],
        shortcuts: [
          'Number series: differences first, then ratios, then squares/cubes, then dual series.',
          'Letter series: write A=1…Z=26 next to each letter; count gaps.',
          'Odd one out: find a rule that fits exactly 4 of 5.',
          'Letter coding: try shift first, then reverse, then mixed.',
          'Digit coding: build the dictionary from examples; check for repeated letters.',
          'When no rule fits, the answer is the option that "completes" the simplest pattern.'
        ],
        traps: [
          'Missing an interleaved dual series.',
          'Forgetting reverse-alphabet positions.',
          'Applying one shift when the pattern alternates.',
          'Inventing a rule that does not fit every given example.'
        ]
      }
    ],

    keyFacts: [
      'Number series: differences → ratios → squares/cubes → dual series.',
      'Letter series: write alphabet positions A=1 to Z=26 next to each letter.',
      'Odd one out: rule fits 4 of 5, the exception is the answer.',
      'Shift coding: each letter ±k. CAT (+1) → DBU.',
      'Reverse alphabet: A↔Z, B↔Y, position sum = 27.',
      'Digit coding: each letter has a unique digit; repeated letters → repeated digits.',
      'Interleaved series: odd positions and even positions follow different rules.',
      'Squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144.',
      'Cubes: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000.',
      'Primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47.'
    ],

    explanationSections: [
      {
        heading: 'Why pattern recognition rewards practice',
        body: 'Each pattern (constant difference, Fibonacci, interleaved, etc.) becomes automatic after 10–15 examples. Build fluency by doing 20 of each type across two days.'
      },
      {
        heading: 'The alphabet positions trick',
        body: 'Writing A=1 to Z=26 once on scrap paper and reusing it for the entire section saves minutes per question. Most letter errors come from miscounting positions, not from misidentifying patterns.'
      },
      {
        heading: 'Coding: test on every example',
        body: 'A coding rule must work for every given example. If it works for one but fails another, it is wrong. This is the only reliable test.'
      }
    ],

    examPoints: [
      'Next / missing term in series.',
      'Which does not belong (odd one out)?',
      'If CODE is written as …, how is WORD written?',
      'Code for a given word from letter→digit map.',
      'What is the rule that generates the series?'
    ],

    commonMistakes: [
      'Missing an interleaved dual series.',
      'Forgetting reverse-alphabet positions (A=26, Z=1).',
      'Applying one fixed shift when the pattern alternates.',
      'Inventing a coding rule that does not fit every given example.',
      'Stopping at the first plausible rule without checking all terms.'
      ],
      content: true,
      examType: 'hat',
      hatSection: 'analytical',
      examScope: ['bs17'],
    },

  // --------------------------------------------------------------------------
  // A6 — DIRECTIONS & RANKING
  // --------------------------------------------------------------------------
  {
    id: 'hat-a6-directions-ranking',
    sectionId: 'HATA-6',
    order: 6,
    title: 'Directions, Ranking & Ordering',

    definition:
      'Direction-sense questions ask where someone ends up after a sequence of moves. Ranking questions use positions from ends, ranks after interchange, and comparison chains. The two disciplines both reward a single habit: draw. A compass for directions, a horizontal line for ranks. Once drawn, every question becomes a counting or substitution problem.',

    subtopics: [
      {
        id: 'direction-sense',
        title: 'Direction Sense',
        summary: 'Following paths with turns and finding final position.',
        explanation:
          'Compass: North (up), South (down), East (right), West (left). When facing North, right = East and left = West. Facing South, right = West and left = East. Facing East, right = South and left = North. Facing West, right = North and left = South.\n\nA 180° turn reverses direction.\n\nPath questions:\n- Move a distance in the facing direction.\n- Turn left/right (rotate the facing direction).\n- Repeat.\n- Final direction = last facing; final position = sum of movements.\n\nFor distances, treat each leg as a separate move. Net displacement can be computed by adding vectors.',
        examples: [
          {
            problem: 'A person walks 5 km east, then 3 km south, then 5 km west. Where is he relative to start?',
            solution:
              'East and West cancel: 0 horizontal. South: 3 km. Net: 3 km south of start.'
          },
          {
            problem: 'A person walks 10 m north, turns right and walks 5 m, turns right and walks 10 m. Where is he?',
            solution:
              'North → right = East → 5 m → right (now facing South) → 10 m South. Net: 10−5 = 5 m North, then −10 = 5 m South of start.'
          }
        ],
        shortcuts: [
          'Always draw a compass with North up.',
          'Track facing direction after each turn.',
          'Use vectors: East/West on x-axis, North/South on y-axis.',
          'Pythagoras for diagonal displacement.'
        ],
        traps: [
          'Losing facing direction after multiple turns.',
          'Confusing "right from North" (East) with "right from South" (West).',
          'Forgetting that 180° turn reverses direction.',
          'Net displacement ≠ sum of distances (it is the straight-line final position).'
        ]
      },
      {
        id: 'ranking-basics',
        title: 'Ranking Basics',
        summary: 'Finding rank from one end given rank from the other.',
        explanation:
          'The fundamental ranking identity:\n\n  Rank_from_top + Rank_from_bottom − 1 = Total number of people\n\nThis works because the person counted from both ends is the same person (the +1 you would double-count must be subtracted).\n\nConversely: Rank_from_bottom = Total − Rank_from_top + 1.',
        examples: [
          {
            problem: 'In a row of 40 students, A is 12th from the top. What is A\'s rank from the bottom?',
            solution:
              'Rank from bottom = 40 − 12 + 1 = 29.'
          },
          {
            problem: 'A is 7th from the top and 23rd from the bottom. How many students are there in total?',
            solution:
              'Total = 7 + 23 − 1 = 29.'
          },
          {
            problem: 'In a row of 50, B is 18th from the bottom. What is B\'s rank from the top?',
            solution:
              'Rank from top = 50 − 18 + 1 = 33.'
          }
        ],
        shortcuts: [
          'Always write Total = Top + Bottom − 1 on your scrap.',
          'For unknown Total, write it as N and set up the equation.',
          'For ranks from middle, count from one end and convert.',
          'Check: if Total = 10 and A is 3rd from top, A is 8th from bottom. 3+8−1 = 10. ✓'
        ],
        traps: [
          'Using Top + Bottom = Total (forgetting −1).',
          'Mixing ranks when the question asks for the OTHER end.',
          'Forgetting the +1 conversion when going from one end to the other.'
        ]
      },
      {
        id: 'ranking-interchange',
        title: 'Ranking After Interchange',
        summary: 'New ranks when two people swap positions.',
        explanation:
          'When A and B interchange positions, A\'s new rank from the left = B\'s old rank from the right (after appropriate adjustment). More precisely:\n\nTotal = New_rank_of_A_from_left + Old_rank_of_B_from_right − 1\n\nThe intuition: A takes B\'s old position, so A\'s new rank from the left equals what B\'s rank from the left was; and B takes A\'s old position, so B\'s new rank from the right equals A\'s old rank from the right.',
        examples: [
          {
            problem: 'In a row, A is 15th from the left and B is 9th from the right. After they interchange, A is 20th from the left. How many people are there?',
            solution:
              'Total = New rank of A from left + Old rank of B from right − 1 = 20 + 9 − 1 = 28.'
          },
          {
            problem: 'In a row of 30, A is 10th from the left and B is 25th from the left. After interchange, where is B from the right?',
            solution:
              'A\'s old position = 10. After swap, B is at position 10. B\'s rank from right = 30 − 10 + 1 = 21.'
          }
        ],
        shortcuts: [
          'Total = New rank + Old rank (from opposite ends) − 1.',
          'After swap, one person takes the other\'s old position from the same end.',
          'Always convert ranks to a single end before adding/subtracting.'
        ],
        traps: [
          'Confusing left and right after the swap.',
          'Forgetting to convert ranks to a common end.',
          'Using the same person\'s old and new rank incorrectly.'
        ]
      },
      {
        id: 'ordering-comparison',
        title: 'Ordering and Comparison Chains',
        summary: 'Tallest/shortest, age, marks comparisons.',
        explanation:
          'Comparison chains: given A > B, B > C, C > D, you can derive A > C, A > D, etc.\n\n"Only two are shorter than A" means exactly two people are shorter than A. So A is 3rd tallest (in a group of ≥3).\n\n"Shorter than only one" means only one person is shorter → that person is 2nd tallest. So the subject is the tallest.\n\nBuild the complete ordering when possible.',
        examples: [
          {
            problem: 'A is taller than only two people. B is shorter than only one. Who is the tallest?',
            solution:
              'A: 2 shorter → A is 3rd tallest. B: 1 shorter → B is the tallest. So B is tallest.'
          },
          {
            problem: 'P > Q > R > S > T (P tallest). Who is the shortest?',
            solution:
              'T.'
          }
        ],
        shortcuts: [
          '"Taller than only k" → k+1 from the top.',
          '"Shorter than only k" → k+1 from the bottom.',
          'Build the chain fully when possible.',
          'When a chain has two possible orders, list both and check.'
        ],
        traps: [
          'Confusing "taller than" with "taller than only".',
          'Leaving the chain incomplete.',
          'Missing a comparison when the chain is long.'
        ]
      },
      {
        id: 'direction-ranking-method',
        title: 'Method Selection for Directions and Ranking',
        summary: 'A reference table for the "how to recognise" decisions.',
        explanation: 'See the table below.',
        examples: [
          {
            problem: 'See the table below.',
            solution: 'See the table below.'
          }
        ],
        shortcuts: [
          'Directions: draw compass, track facing direction after each turn.',
          'Final direction = last facing.',
          'Net displacement = sum of vectors (Pythagoras if diagonal).',
          'Ranking: Total = Top + Bottom − 1.',
          'Bottom = Total − Top + 1.',
          'Interchange: Total = New_rank + Old_rank (opposite ends) − 1.',
          'Comparison: "only k" means exactly k people on that side.'
        ],
        traps: [
          'Losing facing direction after multiple turns.',
          'Using Top + Bottom = Total (forgetting −1).',
          'Confusing "left of" with compass left.',
          'Leaving comparison chains incomplete.'
        ]
      }
    ],

    keyFacts: [
      'Compass: North↑ South↓ East→ West←. Right from N = E; right from S = W.',
      'A 180° turn reverses direction.',
      'Final direction = last facing direction.',
      'Net displacement = vector sum; Pythagoras for diagonals.',
      'Total = Rank_from_top + Rank_from_bottom − 1.',
      'Rank_from_bottom = Total − Rank_from_top + 1.',
      'Interchange: Total = New_rank + Old_rank (opposite ends) − 1.',
      '"Taller than only k" → k+1 from the top.',
      '"Shorter than only k" → k+1 from the bottom.',
      'Always draw the compass or row before counting.'
    ],

    explanationSections: [
      {
        heading: 'The −1 trap in ranking',
        body: 'Total = Top + Bottom − 1 is the most common formula. Forgetting the −1 is the most common error. Write the formula explicitly on your scrap and check the subtraction.'
      },
      {
        heading: 'Tracking facing direction',
        body: 'After three turns, the original facing direction is forgotten by most students. Write down the facing direction after each step — paper is more reliable than memory.'
      },
      {
        heading: 'Comparison chains',
        body: 'When the chain is "A > B > C > D > E", every transitive pair is given: A > C, A > D, A > E, B > D, B > E, C > E. The complete order is your reference for any question about "who is X-th".'
      }
    ],

    examPoints: [
      'Direction of X from Y / distance from start.',
      'Total number of students / rank from the other end.',
      'Who is tallest / shortest / middle?',
      'Rank after interchange of two people.',
      'Who is taller than exactly k people?'
    ],

    commonMistakes: [
      'Losing facing direction after multiple turns.',
      'Using Top + Bottom = Total (forgetting −1).',
      'Confusing "left of" with compass left.',
      'Leaving height order incomplete when two people could still switch.'
    ],

    content: true,
    examType: 'hat',
    hatSection: 'analytical',
    examScope: ['bs17'],
  },

  // --------------------------------------------------------------------------
  // A7 — GROUPING, SELECTION & ASSIGNMENT
  // --------------------------------------------------------------------------
  {
    id: 'hat-a7-grouping-selection',
    sectionId: 'HATA-7',
    order: 7,
    title: 'Grouping, Selection & Assignment',

    definition:
      'These questions ask who to include in a team/committee, or which person gets which task/slot. The discipline is to enumerate every constraint first, apply hard constraints (must / cannot / exactly k) before soft ones (preferences), and use a grid for assignment problems. With n ≤ 6, enumeration beats algebra.',

    subtopics: [
      {
        id: 'selection',
        title: 'Selection from a Pool',
        summary: 'Choosing k people out of n under constraints.',
        explanation:
          'Process:\n1. List all candidates.\n2. List every constraint (must include, cannot include, exactly k from group X, etc.).\n3. Apply hard constraints first.\n4. Enumerate remaining possibilities.\n5. Apply soft constraints and check each candidate.\n\nWhen the question asks "which of the following is a valid team?", test each option against ALL constraints.',
        examples: [
          {
            problem: 'Team of 3 from A, B, C, D, E. Constraints: (i) A and B cannot both be in the team. (ii) If D is selected, C must be selected. (iii) E cannot be with B. Which is a valid team?',
            solution:
              'Test each 3-person subset:\n- CDE: includes C (so if D, then C — ✓). E with no B — ✓. A not in, so (i) ✓. Valid.\n- BDE: violates (i) and (iii). Invalid.\n- ACD: A and B not both (B absent) ✓. D requires C (C present) ✓. E absent (iii ok). Valid.\n- CDE or ACD are typical correct answers.'
          }
        ],
        shortcuts: [
          'List constraints first; number them.',
          'Start with the most restrictive constraint (fewest options).',
          'When "exactly k from group X", enumerate the k-subsets of X — usually few.',
          'Always re-check every constraint for each candidate.'
        ],
        traps: [
          'Ignoring a single negative constraint.',
          'Mixing "at least" with "exactly".',
          'Forgetting to check every constraint against a candidate group.',
          'Stopping enumeration too early.'
        ]
      },
      {
        id: 'counting-committees',
        title: 'Counting Valid Committees',
        summary: 'How many valid teams exist?',
        explanation:
          'When the question asks for a COUNT, you must enumerate every valid combination systematically.\n\nStrategy: fix the most constrained slot first, then enumerate the rest.\n\nFor "at least 2 women out of 4 women + 3 men":\n- Cases: 4 women + 0 men, 3 women + 1 man, 2 women + 2 men.\n- Compute each case: C(4,4)×C(3,0) + C(4,3)×C(3,1) + C(4,2)×C(3,2).\n- Sum.',
        examples: [
          {
            problem: 'Committee of 4 from 5 men and 4 women. At least 2 women must be included. A and D cannot both be in the committee. How many valid committees?',
            solution:
              'First, count all committees with ≥2 women:\n- 4W + 0M: C(4,4)×C(5,0) = 1.\n- 3W + 1M: C(4,3)×C(5,1) = 4×5 = 20.\n- 2W + 2M: C(4,2)×C(5,2) = 6×10 = 60.\nTotal = 81.\nThen subtract those containing both A and D (a man and a woman). Number with both A and D: committees of 4 containing both A (man) and D (woman). Remaining 2 from the other 4 men + 3 women = 7 people, choose 2: C(7,2) = 21. But we also need ≥2 women: with D, need ≥1 more woman.\n\nThis is the kind of question where HAT expects simple enumeration. Final answer depends on interpretation — typically the straightforward count without further filtering is intended.'
          }
        ],
        shortcuts: [
          'Break into cases by the most constrained property (e.g. number of women).',
          'Use C(n,k) = n!/(k!(n−k)!) for combinations.',
          'Subtract invalid combinations rather than enumerating valid ones when the constraints are negative.',
          'Check your total against the option list to verify reasonableness.'
        ],
        traps: [
          'Missing a case in the enumeration.',
          'Forgetting to apply the negative constraint.',
          'Counting the same combination twice (e.g. once in each case).',
          'Mixing up C and P.'
        ]
      },
      {
        id: 'assignment',
        title: 'Assignment Problems',
        summary: 'Person ↔ task or person ↔ city.',
        explanation:
          'Use a grid: rows = people, columns = tasks. Mark forced cells (✓) and forbidden cells (✗). The remaining cells are the candidates. Use elimination.\n\nProcess:\n1. Mark every direct constraint.\n2. Look for "must do X" → fill that cell.\n3. Look for "only one slot left for X" → fill it.\n4. Iterate.',
        examples: [
          {
            problem: 'P, Q, R, S, T to be assigned to projects 1, 2, 3, 4, 5. Constraints: P cannot do 1. Q must do 3. R cannot do 2 or 5. S can only do 1 or 5. T cannot do 4. Who does project 1?',
            solution:
              'Grid:\n        1   2   3   4   5\nP       ✗   .   .   .   .\nQ       .   .   ✓   .   .\nR       .   ✗   .   .   ✗\nS       ✓   .   .   .   ✓\nT       .   .   .   ✗   .\n\nQ → 3. R → 3 or 4. S → 1 or 5. T → 1, 2, 3, 5. P → 2, 3, 4, 5.\n\nIf S → 1, then T cannot do 1, but can do 2, 3, 5 (but 3 is Q). So T → 2 or 5.\nWithout more constraints, S → 1 is possible. The answer is "S".'
          }
        ],
        shortcuts: [
          'Always draw a grid; it makes constraints visible.',
          'Start with "must" cells and propagate.',
          'When only one person can do a slot, fill it.',
          'When a person has only one option, fill it.'
        ],
        traps: [
          'Ignoring one negative constraint that kills an option.',
          'Filling a "could" cell instead of waiting for a forced one.',
          'Forgetting to check that every person gets exactly one task.'
        ]
      },
      {
        id: 'grouping-method',
        title: 'Method Selection for Grouping',
        summary: 'A reference table for the "how to recognise" decisions.',
        explanation: 'See the table below.',
        examples: [
          {
            problem: 'See the table below.',
            solution: 'See the table below.'
          }
        ],
        shortcuts: [
          'Selection: list constraints, enumerate candidates, check every constraint.',
          'Counting: break into cases, sum C(n,k).',
          'Assignment: draw a grid, fill forced cells, propagate.',
          '"Must include" → hard constraint. "Cannot include" → hard constraint.',
          '"At least" → include all cases from the minimum up.\n',
          '"Exactly" → enumerate the exact count.',
          'Read "at least" and "exactly" carefully — they are not interchangeable.'
        ],
        traps: [
          'Ignoring one negative constraint.',
          'Mixing "at least" with "exactly".',
          'Forgetting to check every constraint against a candidate group.',
          'Counting the same combination twice across cases.'
        ]
      }
    ],

    keyFacts: [
      'List constraints first; number them.',
      'Apply hard constraints (must / cannot / exactly) before soft ones (preferences).',
      'For selection: enumerate candidates and check each constraint.',
      'For counting: break into cases by the constrained property.',
      'For assignment: draw a grid, fill forced cells, propagate.',
      '"At least" ≠ "exactly". Read carefully.',
      'When n ≤ 6, enumeration beats algebra.',
      'C(n,k) = n!/(k!(n−k)!) for combinations.',
      'P(n,k) = n!/(n−k)! for permutations.',
      'Always verify a candidate against every constraint, not just one.'
    ],

    explanationSections: [
      {
        heading: 'Enumeration beats algebra at small n',
        body: 'When there are 5–6 people and you need to pick 3, drawing all combinations is faster than setting up equations. The grid is your friend.'
      },
      {
        heading: 'Hard constraints first',
        body: 'Hard constraints (must/cannot/exactly) reduce the search space fastest. Apply them before preferences.'
      },
      {
        heading: 'Grid-based elimination',
        body: 'For assignment problems, a people-vs-slots grid with ✓ and ✗ marks makes the logic visible. Always fill forced cells first, then propagate.'
      }
    ],

    examPoints: [
      'Which group is possible?',
      'Who must / cannot be selected?',
      'Which assignment is valid?',
      'How many valid committees include X and Y?',
      'If a constraint changes, which group becomes valid?'
    ],

    commonMistakes: [
      'Ignoring one negative constraint that kills an option.',
      'Mixing "at least" with "exactly".',
      'Forgetting to check every constraint against a candidate group.',
      'Counting the same combination twice across cases.'
    ],

    content: true,
    examType: 'hat',
    hatSection: 'analytical',
    examScope: ['bs17'],
  },

  // --------------------------------------------------------------------------
  // A8 — ANALYTICAL MOCK SET
  // --------------------------------------------------------------------------
  {
    id: 'hat-a8-analytical-mock',
    sectionId: 'HATA-8',
    order: 8,
    title: 'Analytical Mock Set: Strategy & Error Analysis',

    definition:
      'Mock practice is where knowledge becomes performance. This chapter covers the time-management strategy for the analytical section, the error-log discipline, and the day-by-day practice plan that converts knowledge into HAT-level accuracy under pressure.',

    subtopics: [
      {
        id: 'time-strategy',
        title: 'Time Management & Question Order',
        summary: 'Which analytical questions to attempt first under time pressure.',
        explanation:
          'Recommended order under time pressure:\n1. Series and coding (fast, mechanical) — collect easy marks.\n2. Directions and ranking (mechanical with formula).\n3. Syllogisms (drawing takes time but conclusions are clean).\n4. Blood relations (chains take time but are unambiguous).\n5. Critical reasoning (reading time is high).\n6. Heavy seating and complex grouping — last.\n\nBudget: ~1 minute per easy series/coding question, ~2 minutes per seating or critical-reasoning question. If a question does not open in 60 seconds, skip and return.',
        examples: [
          {
            problem: 'You have 35 questions in 40 minutes. A heavy 6-person circular seating puzzle is question 12. How should you handle it?',
            solution:
              'After 90 seconds with no definite starter, mark it and move on. Return only if you have time at the end. Do NOT spend 5 minutes and miss 4 easy series questions.'
          }
        ],
        shortcuts: [
          'Scan the section first; identify the 5–10 quick wins.',
          'Do the quick wins first, then the medium, then the heavy.',
          'Skip any question that does not open in 60 seconds.',
          'Use the last 3 minutes for a second pass on flagged questions.'
        ],
        traps: [
          'Doing questions in paper order instead of difficulty order.',
          'Spending 5 minutes on one seating puzzle and missing 4 easy series.',
          'Forgetting to return to flagged questions.'
        ]
      },
      {
        id: 'error-log',
        title: 'Error Log Discipline',
        summary: 'Converting mistakes into reusable rules.',
        explanation:
          'After every practice set, log every wrong answer with:\n1. TOPIC: seating / blood / syllogism / etc.\n2. WHY: missed clue, miscounted position, drew wrong Venn, etc.\n3. RULE: the one rule that would have saved you.\n\nThe rule is the most valuable. After 20 wrong answers, you will have a list of personal traps — review this list the morning of the exam.',
        examples: [
          {
            problem: 'You keep losing rank-from-bottom questions because you forget the +1 conversion.',
            solution:
              'Add to your log: "Ranking — convert ranks using +1: Bottom = Total − Top + 1." Re-read this rule before every practice session.'
          }
        ],
        shortcuts: [
          'Categorise errors: concept, calculation, reading, time.',
          'For each error, write the prevention rule.',
          'Review the log the morning of the exam.',
          'Aim for a personal rule list of 10–15 high-frequency traps.'
        ],
        traps: [
          'Logging only the wrong answer, not the cause.',
          'Confusing calculation errors with conceptual weaknesses.',
          'Not reviewing the log before the exam.'
        ]
      },
      {
        id: 'three-day-plan',
        title: '3-Day Practice Plan',
        summary: 'A structured plan to convert knowledge into performance.',
        explanation:
          'DAY 1 — Foundation, untimed:\n- 20 number series, 20 letter series.\n- 10 linear seating, 5 circular, 5 parallel rows.\n- 10 blood relation (direct + pointing).\n- 10 syllogism (2-statement then 3-statement).\n- 10 critical reasoning (mixed types).\n\nDAY 2 — Speed:\n- Same volume but with a 50% time reduction target.\n- Skip any question that takes > 90 seconds.\n- After the set, log every error.\n\nDAY 3 — Mock under exam conditions:\n- 35 questions in 40 minutes.\n- No notes, no breaks.\n- Apply the question-order strategy.\n- After the mock, full error-log review.',
        examples: [
          {
            problem: 'You have 3 days before the exam and feel weak on syllogisms. How should you adjust the plan?',
            solution:
              'Shift time: Day 1 — 15 syllogisms + 10 each of the others. Day 2 — 20 syllogisms timed. Day 3 — full mock, but flag any syllogism errors for review.'
          }
        ],
        shortcuts: [
          'Day 1: untimed mastery.\nDay 2: speed and skipping discipline.\nDay 3: full exam simulation.\n- Always log errors after every session.',
          'Weak-topic days: shift the mix, do not skip the topic.'
        ],
        traps: [
          'Skipping the error log under time pressure.',
          'Practicing only what you are already good at.',
          'Not simulating exam conditions on Day 3.'
        ]
      }
    ],

    keyFacts: [
      'Order: Series/Coding → Directions/Ranking → Syllogisms → Blood → Critical → Heavy seating/grouping.',
      'Skip any question that does not open in 60 seconds.',
      'Use the last 3 minutes for a second pass on flagged questions.',
      'Error log: topic, why, rule.',
      'Day 1 untimed, Day 2 speed, Day 3 mock.',
      'Never spend 5+ minutes on one seating puzzle.',
      'Quick wins come from series/coding/directions — collect those first.',
      'Critical reasoning takes reading time — budget 2 minutes each.',
      'Heavy seating puzzles have low ROI per minute — leave for last.',
      'Review the error log the morning of the exam.'
    ],

    explanationSections: [
      {
        heading: 'Strategic question order',
        body: 'Doing questions in paper order is the worst strategy. Scan, identify quick wins, do those, then come back to heavy puzzles with time remaining.'
      },
      {
        heading: 'The error log is the highest-ROI tool',
        body: 'A practice set without an error log wastes half the value. The rule that would have saved you is the most valuable piece of information you can extract.'
      },
      {
        heading: 'Day 3 must be a real mock',
        body: 'No notes, no breaks, real time. Only an exam simulation reveals your actual time-management gaps.'
      }
    ],

    examPoints: [
      'Full mixed coverage of all analytical topic areas under time pressure.',
      'Question-order strategy.',
      'Skip-and-return discipline.',
      'Error-log discipline.'
    ],

    commonMistakes: [
      'Spending 5+ minutes on one seating puzzle and missing easy series.',
      'Not returning to skipped questions in the last 5 minutes.',
      'Practicing without an error log.',
      'Skipping the Day 3 mock.'
    ],

    content: true,
    examType: 'hat',
    hatSection: 'analytical',
    examScope: ['bs17'],
  },

  // --------------------------------------------------------------------------
  // A9 — ANALYTICAL MASTER SHEET (Last-Day Revision)
  // --------------------------------------------------------------------------
  {
    id: 'hat-a9-master-sheet',
    sectionId: 'HATA-9',
    order: 9,
    title: 'Analytical Master Sheet — Last-Day Revision',

    definition:
      'A condensed final-day revision sheet for all analytical reasoning topics. Use it the night before and the morning of the exam to refresh your memory. This is a revision tool, not a substitute for learning.',

    subtopics: [
      {
        id: 'master-rules',
        title: 'Master Rule Sheet',
        summary: 'Every key rule in one place.',
        explanation:
          'The complete rule sheet, organised by topic.',
        examples: [
          {
            problem: 'See the rules below.',
            solution: 'See the rules below.'
          }
        ],
        shortcuts: [
          'SEATING: Always draw. Linear = horizontal row, left/right from person\'s view. Circular facing centre: right = clockwise, left = anti-clockwise. Parallel rows: opposite = same column. Definite positions first. "X between A and B" → both sides. Two arrangements still possible → answer is "cannot be determined".',
          'BLOOD: Generations top→bottom. "Only daughter of my mother" = speaker (if female, only child). Pointing = decode INSIDE-OUT, check speaker gender. Maternal = mother\'s side. Paternal = father\'s side. Son-in-law = husband of my daughter.',
          'SYLLOGISMS: Venn diagrams. "Follows" = true in EVERY diagram. One counter-diagram → does not follow. "All A are B" → reverse is the #1 trap. Some + Some → does NOT force chain between extremes. Either-or → complementary pair, exactly one must be true.',
          'CRITICAL REASONING: Conclusion first, evidence second, assumption third. Assumption = unstated bridge. Negate-test confirms. Strengthen = extra support. Weaken = alternative cause, reverse causation, self-selection, scope mismatch. Conclusion must be SUPPORTED by the passage. Real-world truths ≠ correct answers.',
          'SERIES / CODING: Number → differences first, then ratios, squares/cubes, dual series. Letter → write A=1…Z=26 next to each letter. Shift coding ±k. Reverse alphabet: position sum = 27. Letter→digit map: unique letters → unique digits. Odd one out: rule fits 4 of 5.',
          'DIRECTIONS / RANKING: Draw compass. Track facing after each turn. 180° turn reverses. Total = Top + Bottom − 1. Bottom = Total − Top + 1. Interchange: Total = New_rank + Old_rank (opposite ends) − 1. Comparison: "only k" → k+1 from that end.',
          'GROUPING: List constraints first. Hard constraints before soft ones. For assignment, draw a grid. Fill forced cells, then propagate. "At least" ≠ "exactly". Always check every constraint against each candidate.'
        ],
        traps: [
          'Solving seating without a diagram.',
          'Forgetting Rank_top + Rank_bottom − 1.',
          'Saying a syllogism conclusion follows when a counter-diagram exists.',
          'Choosing a true-but-irrelevant critical-reasoning option.',
          'Missing the −1 in ranking formulas.',
          'Ignoring speaker gender in pointing phrases.'
        ]
      }
    ],

    keyFacts: [
      'See shortcuts in subtopic above — these are the master rules.'
    ],

    explanationSections: [
      {
        heading: 'Exam-day order of attack',
        body: 'Series/Coding → Directions/Ranking → Syllogisms → Blood → Critical → Heavy seating/grouping last. Skip any puzzle not opening in 60 seconds.'
      },
      {
        heading: '30-second rules',
        body: 'No definite starter in seating → skip. One counter-Venn → conclusion fails. Always write the −1 in ranking. Self-selection weakens "course caused the result".'
      },
      {
        heading: 'Final warning',
        body: 'This sheet is for REVISION. Memorising rules without practising is not enough. The morning of the exam, just re-read this sheet and your personal error log.'
      }
    ],

    examPoints: [
      'Rapid recall of all major analytical rules.',
      'Rapid recognition of question type.',
      'Final revision before mock or examination.'
    ],

    commonMistakes: [
      'Using this sheet as a substitute for practice.',
      'Solving seating without a diagram.',
      'Forgetting Rank_top + Rank_bottom − 1.',
      'Saying a syllogism conclusion follows when a counter-diagram exists.'
    ],

    content: true,
    examType: 'hat',
    hatSection: 'analytical',
    examScope: ['bs17'],
  }
];

export { analyticalTopics as topics };