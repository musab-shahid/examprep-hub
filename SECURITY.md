# Security policy

## Supported versions

Security fixes target the `main` branch of ExamPrep Hub.

## Reporting a vulnerability

Please **do not** open a public GitHub issue for sensitive reports.

- Prefer contacting the repository owner privately (GitHub Security Advisories on this repo if enabled, or the owner’s GitHub profile contact).
- Include: impact, steps to reproduce, and whether any credentials were exposed.

You should receive an acknowledgement when the owner is available; complex issues may take longer.

## Known design notes

### AI provider API keys

The current frontend can read `VITE_*_API_KEY` values for the multi-provider AI tutor. In Vite, those values are **bundled into client JavaScript**. Anyone can extract them from a deployed build or DevTools.

- **Do not** treat browser-bundled keys as secret in a multi-user production deployment.
- Prefer a server-side proxy with quotas, model allowlists, and non-`VITE_` secrets (planned remediation).
- **Rotate** any provider key that has ever been present in a public or shared frontend build.
- Enable provider-side spending alerts.

### Supabase

`VITE_SUPABASE_ANON_KEY` is expected to be public only when **Row Level Security** (and storage policies) correctly protect all data. Never rely on UI-only checks for authorization.

### Local progress data

Study progress is stored primarily in the browser (`localStorage`). Users on a shared device should export/clear data from Settings as appropriate.

## Safe response rendering

Tutor and math content may render HTML derived from KaTeX or Markdown. Treat model output as untrusted; prefer strict Markdown allowlists and avoid injecting arbitrary HTML from the model.
