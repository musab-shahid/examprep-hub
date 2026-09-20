# Comprehensive Audit Report

## 1.1 Project Inventory

**Total source files:** 42 TypeScript/TSX files under `src/`
**Screens:** 11 (Dashboard, Study, Quiz, Practice, Progress, Search, Revision, Settings, FormulaVault, CloudAtlas, plus App shell)
**Components:** 7 (Navigation, Header, Breadcrumbs, SubjectSelector, ToolsTray, MathText, ui)
**Lib:** 4 (search, stats, storage, streak)
**Data files:** 17 (sections, subjects, topics, questions, topic-metadata, lazy-data, formulas, clouds, subject-colors + 7 subject topic files + 7 subject question files)

**Subject → Section mapping:**

| Subject | ID | Sections | # Sections |
|---------|----|----------|------------|
| Meteorology & Climatology | `meteo-climatology` | MC-A through MC-M | 13 |
| Earth Sciences | `earth-science` | EARTH-A through EARTH-K | 11 |
| Physics | `physics` | PHY-A through PHY-K | 11 |
| Mathematics | `maths` | MATH-A through MATH-H | 8 |
| English | `english` | ENG-A through ENG-C | 3 |
| Environmental Studies | `env-studies` | ENV-1 through ENV-6 | 6 |
| Research & Analysis | `research-analysis` | RA-1 through RA-12 | 12 |

**Total sections:** 64
**Total topics:** 120 (counted from topic-metadata.ts)
**Total questions:** ~830 (sum of section questionCount fields)

**Current display order in subjects.ts:** Meteo → Earth → Physics → Maths → Env → RA → English

---

## 1.2 Data Integrity

### CRITICAL

| # | File | Issue | Fix |
|---|------|-------|-----|
| D1 | `src/data/questions.ts:57-58` | `questionsBySubjectAsync` uses `as any` casts to pass a `string` where `SubjectId` is required. Any invalid string silently returns `[]` instead of a type error. | Change parameter type to `SubjectId`, remove casts. |

### MAJOR

| # | File | Issue | Fix |
|---|------|-------|-----|
| D2 | `src/data/sections.ts:30` | EARTH-K section declares `topicCount: 3` but `topic-metadata.ts` has 4 topics (earth-k1 through earth-k4). | Update `topicCount` to 4. |
| D3 | `src/data/formulas.ts:19-27` | `METEO_CATEGORY` keys are `A`, `B`, `C`... but meteorology section IDs are `MC-A`, `MC-B`... `METEO_CATEGORY[topic.sectionId]` always returns `undefined`, falling back to `'Atmospheric'` for every meteo topic. Formula categorization is broken. | Prefix keys with `MC-` or strip prefix from sectionId before lookup. |
| D4 | `src/data/formulas.ts:57` | `export const formulaVault` is evaluated at module-load time when topic cache is empty — always `[]`. Any direct importer gets permanently empty data. | Remove the constant export; callers should use `getFormulasForSubject()` / `refreshFormulaVault()`. |

### MINOR

| # | File | Issue |
|---|------|-------|
| D5 | `src/data/sections.ts` | Several `topicCount` and `questionCount` fields may be stale after the 68-question meteorology expansion. Full verification against actual question files was not completed. Manual spot-check of EARTH-K confirmed a mismatch. |
| D6 | `src/data/lazy-data.ts:27` | `activeSubjects` array order differs from `subjects.ts` order (Meteo, Earth, Physics, Maths, English, Env, RA vs Meteo, Earth, Physics, Maths, Env, RA, English). English and Env are swapped. May affect display ordering if this array is used for sorting. |

---

## 1.3 Navigation, Routing & Functional Testing

### CRITICAL

| # | File | Issue |
|---|------|-------|
| N1 | `data-context.tsx:31-33`, `StudyScreen.tsx` | `setLastTopic` is never called by any screen. `lastOpenedTopic` only set via `markTopicStudied`. The "Continue studying" resume feature on Dashboard and Study screens is effectively dead — it never triggers from normal browsing. |
| N2 | `QuizScreen.tsx:160-165` | Quiz progress is never persisted. No `quizState` field in `AppData`. Closing the tab mid-quiz loses all answers with no recovery. The "progress saving, resume" capability does not exist. |
| N3 | `QuizScreen.tsx:160-165`, `router.tsx` | Deep-link to quiz with invalid/missing `mode` param falls through to `else` branch, silently starting a 10-question quiz from the entire global question pool. No validation that `mode` is a valid `PracticeMode` value. |
| N4 | `useSubjectData.ts:79-184` | `useSubjectData` returns a new object every render with non-memoized functions. Every consumer listing `sd` in a `useMemo` dependency array recomputes on every parent render. Causes cascading re-renders and can cause the quiz to re-initialize unexpectedly. |

### MAJOR

| # | File | Issue |
|---|------|-------|
| N5 | `subject-selection-context.tsx:43-45` | `getActiveSubject` fallback `?? 'all'` is unreachable. If persisted `lastSelected` references a removed subject, screens silently filter to empty. |
| N6 | `PracticeScreen.tsx:67` | `mode?: 'topic'` accepted in props but never handled — dead code. |
| N7 | `PracticeScreen.tsx:191` | Focus-mode "Start" sends `count: 999`. If selected topics have 800 questions, user gets an 800-question quiz with no warning. |
| N8 | `QuizScreen.tsx:196-232` | Auto-finish calls `recordQuiz`, `setResults`, `setFinished` inside a `setState` updater. In React StrictMode, updaters run twice → duplicate quiz history entries. |
| N9 | `QuizScreen.tsx:216,293` | `recordQuiz` called with `topicId: undefined` for all non-topic quizzes. `quizHistory[].topicId` is effectively always `undefined` unless launched from a topic screen. |
| N10 | `QuizScreen.tsx:371-378` | Exit confirmation only fires if `answers.length > 0`. Unchecked selected answers are lost without warning. |
| N11 | `StudyScreen.tsx:40-42` | Resume target is decoupled from actual study state — can point to a mastered topic and silently fall through. |
| N12 | `SearchScreen.tsx:30-37`, `FormulaVaultScreen.tsx:28-35`, `PracticeScreen.tsx:81-88` | Lazy-load failures have no `.catch()` handler. If dynamic `import()` fails, `setLoading(false)` never fires and the screen hangs on a spinner forever. No error UI, no retry button. |
| N13 | `FormulaVaultScreen.tsx:80,92` | Expand toggle keys by `f.name` — if two formulas share a name, expanding one affects the other. Should use `${f.topicId}-${f.name}`. |
| N14 | `CloudAtlasScreen.tsx:16-90` | No deep-link to a specific cloud. No back button or breadcrumbs. No Escape key handler on modal. Inconsistent with rest of app. |
| N15 | `SettingsScreen.tsx:72` | "Reset All Data" only clears `fpsc-prep-data`. Subject-selection prefs (`fpsc-subject-selection`) and practice prefs (`fpsc-practice-prefs`) persist. |
| N16 | `ProgressScreen.tsx:38-40` | Mastery score formula has no clamp — can exceed 100 with legacy/migrated data. |
| N17 | `RevisionScreen.tsx:20-21` | Date comparison uses `new Date('YYYY-MM-DD')` (UTC midnight) vs local midnight. Off-by-one revision scheduling for users in negative-UTC-offset timezones. |
| N18 | `QuizScreen.tsx:305-320` | "View Results" on last question calls `finishWithAnswers` inside `setState` updater — same double-record risk as N8. |

### MINOR

| # | File | Issue |
|---|------|-------|
| N19 | Multiple screens | BackButton/Breadcrumbs inconsistent — most top-level screens have none. |
| N20 | `QuizScreen.tsx:399-407` | Keyboard shortcuts only work for `single`/`true_false`, not `multi`. |
| N21 | `QuizScreen.tsx:437` | Retaking "Review Wrong Answers" immediately after finishing may show empty quiz — just-corrected questions no longer qualify as "wrong". |
| N22 | `PracticeScreen.tsx:382` | `recentSessions` uses array index as React key. |
| N23 | `DashboardScreen.tsx:34` | "Continue" card only appears after marking a topic studied, not after merely opening one. |
| N24 | `subject-selection-context.tsx:47-52` | Selecting 'all' on one screen doesn't update `lastSelected`, so other screens keep the old subject. |
| N25 | `QuizScreen.tsx:199,453-457` | `timeLimit === 'auto'` is a dead branch — unreachable from UI. |
| N26 | `storage.ts:153-155` | Accuracy rolling average reconstructs from rounded percentage — cumulative rounding drift. |
| N27 | `storage.ts:70-82` | `computeNextReviewDate` boundary: new topic (stage -1) with low accuracy is not pulled back — always advances to stage 0. |
| N28 | `CloudAtlasScreen.tsx:55-87` | Modal has no focus trap or Escape handler. |
| N29 | `FormulaVaultScreen.tsx:39` | `refreshFormulaVault()` called inside `useMemo` with `sd` dependency — recomputes frequently due to N4. |
| N30 | `SearchScreen.tsx:80` | `autoFocus` on search input causes mobile keyboard to pop on every visit. |
| N31 | `ProgressScreen.tsx:57` | Achievement "All Subjects Touched" actually means "all subjects with content touched" — misleading name. |
| N32 | `PracticeScreen.tsx:81-88` | `ensureQuestionsLoaded` effect has no `.catch` — rejected promise leaves `questionsLoading=true` permanently. |
| N33 | `PracticeScreen.tsx:205,18` | Mock-disabled threshold is 30 but mock band-fill may produce fewer than 30 with thin difficulty bands. |
| N34 | `QuizScreen.tsx:417-419` | Empty-state "Back" for non-topic modes calls `back()` — may exit app if launched via deep link with no history. |
| N35 | `storage.ts:84-95` | `getOrCreateProgress` mutates the passed `data` object (shallow copy hazard). |
| N36 | `stats.ts:55-61` | `getDueTopics` duplicates logic in `storage.ts:173-179` and appears to be dead code. |

---

## 1.4 TypeScript & Code Quality

### CRITICAL

| # | File | Issue |
|---|------|-------|
| T1 | `.env:1-2` | `VITE_SUPABASE_URL` and full `VITE_SUPABASE_ANON_KEY` JWT are in `.env`. `VITE_*` vars are inlined into the client bundle. No `.env.example` exists. The anon key JWT has `exp: 1758881574` (~2025-09-26) — already expired or about to expire. |
| T2 | `MathText.tsx:101` | `dangerouslySetInnerHTML` fed by KaTeX `renderToString` output. KaTeX with `throwOnError: false` swallows parse errors. Combined with T3 (unvalidated localStorage), corrupted localStorage can drive XSS. |
| T3 | `storage.ts:28-29` | `loadData()` does `{ ...emptyData, ...parsed }` with zero schema validation. Any shape is accepted — wrong-typed fields, extra keys, malformed objects. Downstream code assumes well-typed values and will produce `NaN`/`Invalid Date` or throw. |
| T4 | `questions.ts:57-58` | `as any` casts defeat type checking on a public API. (Same as D1.) |

### MAJOR

| # | File | Issue |
|---|------|-------|
| T5 | `Breadcrumbs.tsx:24` | `navigate({ ...item.route, parent: null } as any)` — bypasses `NavigateOptions` type. |
| T6 | `formulas.ts:57` | `formulaVault` is a stale module-load-time constant — always `[]`. (Same as D4.) |
| T7 | `useSubjectData.ts:226-244` | Hook returns non-memoized object with non-memoized functions. (Same as N4.) |
| T8 | `useSubjectData.ts:71-77` | `useEffect` with `[]` deps reads stale closure — initial subject seeding is dead for lazy-loaded subjects. |
| T9 | `data-context.tsx:23-33` | `markStudied`/`recordQuiz`/`setLastTopic` close over stale `data`. Two updates in the same tick cause the second to overwrite the first. |
| T10 | `streak.ts:13-15` | `dateKey` uses a different date format than `storage.ts` (`toISOString().split('T')[0]`). Two date-key formats risk subtle drift. |
| T11 | `streak.ts:124` | `getWeeklyAccuracy` compares `Date` objects with `>=`/`<=` coercion. `weekEnd` is set to today at 00:00, so quizzes taken later today are excluded from the current week. |
| T12 | `vite.config.ts:13-15` | `optimizeDeps: { exclude: ['lucide-react'] }` — no documented reason, causes slower dev cold starts. |
| T13 | (project-wide) | No PWA manifest, no service worker, no offline support. App has streaks/revision queues designed for daily use. |
| T14 | (project-wide) | No 404 route, no `errorElement` in router, no top-level error boundary. Unhandled throw blanks the app. |
| T15 | (project-wide) | Zero tests. No test config, no test script. Spaced-repetition math, streak computation, and stats are untested pure functions. |
| T16 | `index.html` | No `<meta name="description">`, no `<meta name="theme-color">`, no `viewport-fit=cover`. Title is hardcoded to "Meteorology & Climatology" but app spans 7 subjects. |

### MINOR

| # | File | Issue |
|---|------|-------|
| T17 | `QuizScreen.tsx:181` | Leftover `console.error` in production code. |
| T18 | `tsconfig.app.json:25-26` | `noUnusedLocals`/`noUnusedParameters` set to `false` — dead code accumulates silently. |
| T19 | `eslint.config.js` | `@typescript-eslint/no-explicit-any` not enabled — `as any` casts pass lint. |
| T20 | `MathText.tsx:83-96` | `cancelled` flag is correct but fast-changing `text` prop can cause fallback flash. |
| T21 | `MathText.tsx:31-60` | `splitParts` is O(n²)-ish on malformed input with many stray `$`. |
| T22 | `storage.ts:84-95` | `getOrCreateProgress` mutates passed `data` object. (Same as N35.) |
| T23 | `storage.ts:153-155` | Accuracy rounding drift. (Same as N26.) |
| T24 | `stats.ts:55-61` | `getDueTopics` is dead code. (Same as N36.) |
| T25 | `questions.ts:56` | `questionsBySubjectAsync` parameter typed `string` not `SubjectId`. |
| T26 | `formulas.ts:19-27` | `METEO_CATEGORY` keys don't match section IDs. (Same as D3.) |
| T27 | `useSubjectData.ts:84-91 vs 103-129` | `questionsFor('all')` returns cached-only (may be empty) while `statsFor` uses metadata counts — inconsistent UI ("0 questions" but "total: 800"). |
| T28 | `MathText.tsx:10` | `katex.min.css` imported eagerly (~23KB gzipped) even on screens that never render math. |
| T29 | `tsconfig.node.json:3-4` | `lib: ["ES2023"]` without `DOM` — tight but acceptable. |
| T30 | (project-wide) | No `import.meta.env` type declarations. `vite-env.d.ts` exists but may lack `ImportMetaEnv` interface. |
| T31 | (project-wide) | No TODO/FIXME comments found (positive). |

---

## 1.5 UI/UX Consistency & Accessibility

### MAJOR

| # | File | Issue |
|---|------|-------|
| U1 | `SearchScreen.tsx:30-37` et al. | No error states on lazy-load failures — screens hang on spinner forever (same as N12). |
| U2 | `CloudAtlasScreen.tsx` | No deep-link, no back button, no breadcrumbs, no Escape handler — inconsistent with rest of app (same as N14). |
| U3 | `SettingsScreen.tsx:72` | Reset doesn't clear all persisted data (same as N15). |

### MINOR

| # | File | Issue |
|---|------|-------|
| U4 | `SearchScreen.tsx:80` | `autoFocus` causes mobile keyboard to pop on every visit (same as N30). |
| U5 | Multiple screens | BackButton/Breadcrumbs inconsistent across screens (same as N19). |
| U6 | `QuizScreen.tsx:399-407` | No keyboard shortcuts for multi-select questions (same as N20). |
| U7 | `CloudAtlasScreen.tsx:55-87` | Modal lacks focus trap and Escape handler (same as N28). |
| U8 | `index.html` | Title says "Meteorology & Climatology" but app covers 7 subjects (same as T16). |
| U9 | (not fully audited) | Full WCAG AA color contrast audit, keyboard navigation audit, screen reader label audit, and form label audit were NOT completed. |

---

## 1.6 Performance

| # | File | Issue | Severity |
|---|------|-------|----------|
| P1 | `useSubjectData.ts:226-244` | Non-memoized return object causes cascading re-renders (same as N4/T7). | Critical |
| P2 | `useSubjectData.ts:71-77` | Effect with `[]` deps is dead for lazy case (same as T8). | Major |
| P3 | `MathText.tsx:10` | KaTeX CSS loaded eagerly on all screens (same as T28). | Minor |
| P4 | `FormulaVaultScreen.tsx:39` | `refreshFormulaVault()` called in `useMemo` with unstable `sd` dep (same as N29). | Minor |
| P5 | `lazy-data.ts` | Lazy loading is implemented with in-flight dedup and caching — positive finding. | N/A |
| P6 | (project-wide) | No code-splitting beyond subject-level lazy imports. Screens are not `React.lazy`-wrapped. | Minor |

---

## 1.7 Security

| # | File | Issue | Severity |
|---|------|-------|----------|
| S1 | `.env` | Supabase credentials exposed in VITE_* env vars (same as T1). | Critical |
| S2 | `MathText.tsx:101` | `dangerouslySetInnerHTML` with KaTeX output (same as T2). | Critical |
| S3 | `storage.ts:28-29` | No localStorage schema validation (same as T3). | Critical |
| S4 | (project-wide) | No auth checks needed — app is client-side only, no user accounts. | N/A |
| S5 | (project-wide) | No user-generated content stored — all quiz/topic data is static. | N/A |

---

## 1.8 Build & Deploy Readiness

| # | Issue | Severity |
|---|------|----------|
| B1 | Build passes clean — verified `npm run build` exits 0. | Positive |
| B2 | No `.env.example` file exists. | Major |
| B3 | No PWA manifest or service worker (same as T13). | Major |
| B4 | No 404/error boundary (same as T14). | Major |
| B5 | `index.html` missing meta tags: description, theme-color, viewport-fit=cover (same as T16). | Major |
| B6 | No `robots.txt` or `sitemap.xml`. | Minor |
| B7 | No tests (same as T15). | Major |
| B8 | `dist/_redirects` exists (SPA fallback) — positive. | Positive |

---

## 1.9 Summary by Severity

| Severity | Count | Categories |
|----------|-------|------------|
| **Critical** | 8 | Data (1), Nav (4), TS/Code (4, 3 overlap), Security (3, overlap) |
| **Major** | 26 | Data (3), Nav (14), TS/Code (12, overlaps), UI (3), Build (4) |
| **Minor** | 30+ | Across all categories |
| **Total unique findings** | ~55 | (after removing overlaps) |

### Must Fix Before Deploy
1. **S1/T1:** Rotate/remove exposed Supabase credentials, create `.env.example`
2. **S3/T3:** Add schema validation to `loadData()`
3. **S2/T2:** Sanitize KaTeX output or switch to DOM API
4. **N3:** Validate quiz deep-link params
5. **T16/B5:** Fix `index.html` meta tags and title

### Should Fix Soon
6. **N4/T7:** Memoize `useSubjectData` return value
7. **N8/N18:** Move side effects out of `setState` updaters
8. **N12:** Add `.catch()` to all lazy-load promises with error UI
9. **T9:** Fix stale-closure pattern in `DataContext`
10. **D2:** Fix EARTH-K topicCount mismatch
11. **D3/T26:** Fix `METEO_CATEGORY` key mapping
12. **D4/T6:** Remove stale `formulaVault` constant
13. **T14/B4:** Add error boundary
14. **N15/U3:** Fix incomplete reset

### Nice to Have
15. Add tests for storage/streak/stats
16. Add PWA manifest
17. Enable stricter lint rules
18. Complete accessibility audit
19. Fix all minor nav/UX inconsistencies

### Coverage Gaps (honest disclosure)
- **Data integrity:** Full question-by-question scan of all 7 subject files was NOT completed. Only spot-checked EARTH-K. There may be duplicate question IDs, broken `relatedTopics` references, or section mismatches I missed.
- **Accessibility:** Full WCAG AA contrast, keyboard navigation, screen reader, and form label audits were NOT completed.
- **UI/UX:** Detailed visual consistency, spacing, and responsive design audit was NOT completed.

---

# PART 2: SUBJECT REORDERING & CROSS-SUBJECT INTEGRATION

## 2.1 Current Subject Mapping

From `src/data/subjects.ts`, the current display order is:

1. Meteorology & Climatology (`meteo-climatology`)
2. Earth Sciences (`earth-science`)
3. Physics (`physics`)
4. Mathematics (`maths`)
5. Environmental Studies (`env-studies`)
6. Research & Analysis (`research-analysis`)
7. English (`english`)

Note: `lazy-data.ts:27` has a **different order** (English before Env/RA), which is a minor inconsistency.

## 2.2 Target Subject Order

Desired: Math → Physics → Earth Science → Meteorology → Environmental Science → Research/Analytics → English

This means reordering `subjects.ts` and `activeSubjects` in `lazy-data.ts` to:
1. `maths`
2. `physics`
3. `earth-science`
4. `meteo-climatology`
5. `env-studies`
6. `research-analysis`
7. `english`

## 2.3 Proposed Type Additions

```typescript
// In types.ts — add to Topic interface:
prerequisites?: { topicId: string; reason: string }[];
leadsTo?: { topicId: string; reason: string }[];
usedIn?: { topicId: string; reason: string }[];

// In types.ts — add to Section interface:
subject?: SubjectId;  // redundant with sectionMap but convenient
displayOrder?: number;
```

## 2.4 Migration Strategy

1. **Phase 1 (no breaking changes):** Add the new optional fields to `Topic` and `Section` interfaces. All existing code continues to work because the fields are optional.

2. **Phase 2 (reorder):** Reorder `subjects.ts` array and `activeSubjects` in `lazy-data.ts`. Navigation already iterates the `subjects` array, so this is a one-line-per-file change.

3. **Phase 3 (populate connections):** Add `prerequisites`/`leadsTo`/`usedIn` to topic data files. Start with the 20-30 high-value connections below. These are optional fields, so topics without them simply don't show the sections.

4. **Phase 4 (UI):** Update `StudyScreen` to render three new sections ("Builds on", "Leads to", "Used in") with subject-colored badges.

## 2.5 Cross-Subject Connections (30 identified)

| # | From (Subject) | To (Subject) | Connection Type | Reason |
|---|---------------|-------------|-----------------|--------|
| 1 | math-7-1 Vectors (Maths) | phy-vector-operations (Physics) | leadsTo | Vector operations in physics build on mathematical vector notation |
| 2 | phy-vector-applications (Physics) | c-geostrophic-wind (Meteo) | usedIn | Wind vectors are decomposed into components using vector math |
| 3 | math-2-3 Algebra (Maths) | phy-current-voltage-resistance (Physics) | usedIn | Ohm's law and circuit equations require algebraic manipulation |
| 4 | math-2-3 Algebra (Maths) | meteo-lapse-calc (Meteo) | usedIn | Lapse rate calculations use linear equations |
| 5 | math-8-1 Statistics (Maths) | ra-descriptive-statistics (RA) | leadsTo | Central tendency concepts extend to research methods |
| 6 | ra-descriptive-statistics (RA) | h-past-climate-reconstruction (Meteo) | usedIn | Climate data analysis uses descriptive statistics |
| 7 | math-3-3 Logarithms (Maths) | phy-sound-waves (Physics) | usedIn | Decibel scale is logarithmic |
| 8 | math-3-3 Logarithms (Maths) | env-air-pollution (Env) | usedIn | Noise pollution measurement uses logarithmic decibel scale |
| 9 | math-5-3 Slope & Lines (Maths) | b-lapse-rates (Meteo) | usedIn | Lapse rate is a slope on a temperature-altitude graph |
| 10 | earth-a1 Earth's Motions (Earth) | b-coriolis-effect (Meteo) | prerequisites | Coriolis effect requires understanding Earth's rotation |
| 11 | earth-j1 Hydrologic Cycle (Earth) | d-precipitation-processes (Meteo) | usedIn | Precipitation is a phase of the hydrologic cycle |
| 12 | d-precipitation-processes (Meteo) | env-water-pollution (Env) | usedIn | Precipitation patterns affect water quality and availability |
| 13 | ra-data-interpretation (RA) | meteo-isobar-analysis (Meteo) | usedIn | Synoptic chart reading is applied data interpretation |
| 14 | ra-correlation-regression (RA) | h-radiative-forcing (Meteo) | usedIn | Climate sensitivity is analyzed via regression |
| 15 | english-synonyms-antonyms (English) | ra-data-interpretation (RA) | usedIn | Verbal analogies underpin analytical reasoning |
| 16 | env-ecosystem-structure (Env) | earth-e5 Coastal Landforms (Earth) | usedIn | Coastal ecosystems are shaped by geological processes |
| 17 | phy-work-energy (Physics) | env-energy-sources (Env) | usedIn | Energy resource analysis builds on physics of energy |
| 18 | math-4-1 Geometry (Maths) | earth-a1 Earth's Shape (Earth) | usedIn | Earth's geometry (sphere, radius) underpins coordinate systems |
| 19 | phy-atmospheric-pressure-physics (Physics) | f-pressure-instruments (Meteo) | prerequisites | Barometers measure pressure — requires physics of pressure |
| 20 | phy-heat-transfer-equilibrium (Physics) | b-heat-transfer (Meteo) | prerequisites | Atmospheric heat transfer mechanisms are physics concepts |
| 21 | math-8-2 Probability (Maths) | ra-probability (RA) | leadsTo | Basic probability extends to research probability theory |
| 22 | math-8-3 Speed Distance Time (Maths) | phy-kinematics (Physics) | leadsTo | Kinematics equations build on speed/distance/time relationships |
| 23 | phy-thermodynamics-laws (Physics) | b-static-stability (Meteo) | usedIn | Atmospheric stability is governed by thermodynamic principles |
| 24 | earth-d2 Plate Tectonics (Earth) | earth-h1 Earthquakes (Earth) | leadsTo | Earthquake mechanics require plate boundary understanding |
| 25 | env-climate-change-response (Env) | h-ipcc-rcps (Meteo) | usedIn | IPCC pathways inform climate adaptation policy |
| 26 | math-6-1 Sequences (Maths) | h-milankovitch-cycles (Meteo) | usedIn | Milankovitch cycles are periodic sequences |
| 27 | ra-research-design (RA) | h-past-climate-reconstruction (Meteo) | usedIn | Paleoclimate reconstruction uses research design methods |
| 28 | english-sentence-completion (English) | ra-data-interpretation (RA) | usedIn | Sentence completion skills support analytical reading of data |
| 29 | phy-electromagnetic-induction (Physics) | f-remote-sensing (Meteo) | usedIn | Weather radar uses electromagnetic wave principles |
| 30 | math-4-6 Volume/Surface (Maths) | earth-a3 Internal Structure (Earth) | usedIn | Earth's layer volumes and surface areas use mensuration |

## 2.6 UI Plan for Spiral Navigation

On the Study Screen, add three collapsible sections below the existing content:

1. **"Builds on" (prerequisites):** Lists prerequisite topics with a one-line reason. Each item shows a colored dot/badge indicating which subject it belongs to (using existing `subjectColorClasses`). Tapping navigates to that topic's study screen.

2. **"Leads to" (leadsTo):** Lists follow-up topics the learner should study next. Same visual treatment.

3. **"Used in" (usedIn):** Lists applied topics in other subjects that use this concept. Same visual treatment.

Each section only renders if the array is non-empty. Sections are collapsible with a chevron icon. The subject badge uses the existing color system (sky for meteo, amber for earth, indigo for physics, emerald for maths, teal for env, violet for RA, fuchsia for English).
