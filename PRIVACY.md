# Privacy & data handling

ExamPrep Hub is designed as a **local-first** study app. This document describes what is stored where and what the optional AI features imply.

## What stays on your device

By default, progress lives in the **browser** (`localStorage` on this origin):

- Topics marked studied, spaced-repetition dates, quiz history
- Per-question results (latest outcome / strength signals used for adaptive practice)
- UI preferences that the app persists locally

**We do not operate a mandatory cloud account** for core study and quiz features. Clearing site data, using another browser, or another device starts from empty progress unless you restore a backup.

### Export and reset

- **Settings → Download backup** — JSON export of local study data for your own archival or migration.
- **Settings → Reset** — clears local progress on this browser (confirm prompts apply).

Treat backups as **personal study records**; do not share them if they include notes you consider private.

## Optional AI tutor

If you enable provider API keys (environment variables at build time, or whatever your host injects):

- Prompts can include **topic context**, **quiz stems**, **your selected answers**, and **short student-state summaries** (accuracy, weak items) so the model can explain mistakes.
- Those requests go to **third-party AI providers** you configured (e.g. Google, OpenRouter, Groq, OpenAI, Anthropic, xAI, Mistral, DeepSeek). Their retention and training policies apply.
- Model output can be **wrong**. Official answer keys in the question bank remain authoritative for scoring.

**Production note:** Keys prefixed with `VITE_` are visible in the client bundle. Prefer a server-side proxy before wide public deployment — see [SECURITY.md](./SECURITY.md).

## Analytics and tracking

The open-source app shell does **not** ship a third-party product analytics SDK in the core path described in this repository. If a host adds analytics, that is outside this document.

## Content provenance

Study material and MCQs are authored for exam-prep pedagogy. Prefer original teaching prose. Do not paste wholesale copyrighted textbooks into the banks. See [CONTRIBUTING.md](./CONTRIBUTING.md).

## Contact

Privacy or security concerns involving real user data or exposed credentials should follow [SECURITY.md](./SECURITY.md) (private report, not a public issue).
