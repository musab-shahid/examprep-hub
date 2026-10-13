# Contributing to ExamPrep Hub

## Before you push

```bash
npm ci
npm run check   # lint → validate:data → test → typecheck → build
```

CI runs the same sequence on every push and PR to `main`.

## Content (topics / questions)

1. Edit banks under `src/data/…`.
2. Keep **topic and question IDs stable** (progress and results key off them). Use alias maps if you must rename.
3. Run `npm run validate:data` — critical findings fail CI.
4. Prefer teaching explanations over policy residue (`actually`, `wait`, “closest answer”).
5. When adding stems for the same skill, set a shared `variantGroupId`.

## App code

- Prefer pure helpers in `src/lib/` with unit tests under `src/lib/__tests__/`.
- Path alias: `@/` → `src/`.
- Do not commit secrets. `VITE_*` values are public in the client bundle — see [SECURITY.md](./SECURITY.md).

## Pull requests

- Small PRs preferred (logic vs large bank edits).
- Describe user-visible impact and any migration notes for localStorage shapes.

## End-to-end smoke (optional locally)

```bash
npm run build
npx playwright install chromium
npm run test:e2e
```

CI runs this in a separate `e2e` job after the main `check` job.
