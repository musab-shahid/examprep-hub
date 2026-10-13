# ExamPrep Hub

[![CI](https://github.com/musab-shahid/examprep-hub/actions/workflows/ci.yml/badge.svg)](https://github.com/musab-shahid/examprep-hub/actions/workflows/ci.yml)

Local-first PWA for **FPSC** and **HAT** exam preparation: structured topics, quizzes, spaced repetition, mastery tracking, flashcards, progress analytics, and an optional multi-provider AI tutor.

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-g6kmfx2a)

## Features

- FPSC & HAT tracks with subject banks, study material, and question banks
- Adaptive practice, mock exams, review modes, and SM-2-style spaced repetition
- Flashcards (key facts, formulas, idioms, traps)
- Progress, readiness estimate, sticky-miss analytics
- Offline-friendly shell (service worker + update prompt)
- Optional AI tutor (multiple providers) — see security notes below

## Prerequisites

- **Node.js 20+** (CI uses Node 20)
- npm 10+ (comes with Node)

```bash
node -v   # v20.x or newer
```

## Setup

```bash
git clone https://github.com/musab-shahid/examprep-hub.git
cd examprep-hub
npm ci
cp .env.example .env   # optional — fill only what you need
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Scripts

| Command | Purpose |
|--------|---------|
| `npm run dev` | Local Vite dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve `dist/` locally |
| `npm run lint` | ESLint (zero warnings) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | Domain unit tests (Node test runner via `tsx`) |
| `npm run validate:data` | Question-bank structural validation |
| `npm run check` | **lint → validate:data → test → typecheck → build** (same spirit as CI) |

## Environment variables

**Single template:** repository root [`.env.example`](./.env.example).  
Do not maintain a second matrix under `src/`.

| Variable | Visibility | Notes |
|----------|------------|--------|
| `VITE_SUPABASE_URL` | Public (client) | Optional |
| `VITE_SUPABASE_ANON_KEY` | Public (client) | Safe only with correct RLS |
| `VITE_*_API_KEY` (tutor providers) | **Client-bundled today** | Not secret in production builds — see [SECURITY.md](./SECURITY.md) |

Anything prefixed with `VITE_` is embedded at build time. For production multi-user tutor usage, move provider calls behind a server proxy and keep secrets **without** the `VITE_` prefix (planned; deferred intentionally for now).

## Architecture (short)

```
src/
  components/   UI (quiz chrome, tutor, layout, markdown)
  contexts/     Subject selection, etc.
  data/         Subjects, sections, topic/question banks (lazy)
  hooks/        Data + subject loaders
  lib/          Pure domain: storage, SR, adaptive pick, stats, flashcards…
  router/       In-app routes + path sync
  screens/      Full pages
scripts/        validate-question-bank, variant draft helpers
public/         PWA assets, service worker source material
```

**Progress** is local-first (`localStorage`), with migration for older field shapes.  
**Question IDs** are stable keys for results — validate with `npm run validate:data` before merging bank edits.

### Data flow (learning)

1. User studies topics / takes quizzes  
2. `recordQuizResult` updates accuracy window, ability, item strength, SR schedule  
3. Adaptive selection + daily review use that state  
4. Progress / readiness / sticky-miss analytics read the same store  

## Question banks

- Author topics/questions under `src/data/…`  
- Run `npm run validate:data` (also part of `npm run check` / CI)  
- Prefer teaching content that matches quiz stems; use `variantGroupId` for stem families  
- Draft helpers live under `scripts/` and `content-drafts/` (drafts are not production banks)

## PWA

- Custom service worker precache (see `vite-sw-plugin.js`)  
- Update banner asks before activating a new worker  
- Offline: shell and previously visited assets; AI tutor needs network  
- App version shown in Settings comes from `package.json` via `__APP_VERSION__`

## AI tutor

- Optional; models appear only when the corresponding key is set in `.env`  
- Generated answers can be wrong — bank answer keys remain authoritative  
- **Security:** keys in `VITE_*` are visible in the browser bundle; see [SECURITY.md](./SECURITY.md)  
- Proxy + quotas planned; not required for core study/quiz features  

## Testing & CI

- Unit tests cover spaced repetition, quiz signatures, mastery helpers, fixtures, router paths  
- GitHub Actions (`.github/workflows/ci.yml`): `npm ci` → lint → validate → test → typecheck → build  
- Node 20, lockfile-based install  

## Deployment

Typical static host: build with `npm run build`, publish `dist/`.

1. Set env vars for the **build** environment (only public `VITE_*` values you accept in the client)  
2. Build and deploy `dist/`  
3. Confirm service-worker update flow on a second visit  
4. Do **not** ship paid provider keys in a public frontend without a proxy  

Rollback: redeploy the previous `dist` artifact or git revision.

## Contributing

1. Branch from `main`  
2. Keep `npm run check` green  
3. For content: validate banks; avoid breaking stable question/topic IDs without aliases  
4. Prefer small PRs for logic vs large bank edits  

## License & content

Repository visibility does not by itself grant reuse rights to third-party exam materials. Prefer original teaching prose and properly licensed sources. Add an explicit `LICENSE` file if you intend open reuse of the app code.

## Version

App version is defined in [`package.json`](./package.json) and injected at build time as `__APP_VERSION__`.
