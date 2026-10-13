# Changelog

## 1.1.1 — quality baseline

### Engineering
- CI: lint, question-bank validate, unit tests, typecheck, build, bundle budget
- E2E: Playwright smoke (shell, PWA manifest/SW) + critical path journeys
- Storage: corrupt JSON recovery, topicProgress quarantine, flush tests
- AI tutor: prompt-shaping unit tests without network/keys
- Docs: README, CONTRIBUTING, SECURITY, PRIVACY, RELEASE

### Learning product (prior work on main)
- Adaptive selection, SM-2-style SR, daily 3-minute review
- Flashcards, sticky-miss / fragile-win analytics
- URL sync for shareable learn/practice/settings routes

### Known limitations
- AI provider keys via `VITE_*` remain client-visible until a server proxy is added
- In-memory quiz params are not in the URL (by design)

## 1.1.0

- Unified app version from `package.json`
- Operational README and security notes
