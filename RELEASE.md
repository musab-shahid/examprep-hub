# Release, rollback, backup, migration

## Release checklist (static host)

1. `main` is green on CI (`check` + `e2e`).
2. Version in `package.json` matches the release you intend (injected as `__APP_VERSION__`).
3. Build with only the `VITE_*` values you accept in the **public** client bundle.
4. `npm run build` → deploy the `dist/` directory (or your host’s equivalent).
5. Smoke on a real device:
   - Install / open installed PWA
   - Complete one short quiz; confirm progress after refresh
   - If a new SW is waiting, use **Update available → Restart** and confirm a single clean load
6. Optional: `npm run check:bundle` locally if you changed code-splitting.

## Rollback

- Redeploy the previous known-good `dist/` artifact, **or**
- Check out the previous git tag/commit, rebuild, and deploy that `dist/`.

Service workers: after rollback, users may still hold a waiting worker. The in-app update banner should prompt reload; if stuck, clear site data (users lose only non-exported local progress).

## User data backup / restore

| Action | Where |
|--------|--------|
| Export JSON | Settings → Download backup |
| Full reset | Settings → Reset (local only) |
| Corrupt load | App may restore from an internal backup key and show a one-shot warning |

There is **no automatic cross-device sync** in the default local-first path. Users moving phones should export on the old device and keep the file offline.

## Schema migration

- Progress shapes migrate on `loadData()` (legacy accuracy fields → correct/total, review stages, etc.).
- Prefer **additive** fields and migrations in `src/lib/storage.ts` over breaking renames of topic/question IDs.
- ID renames require **alias maps** so old `questionResults` / `topicProgress` keys still resolve — see CONTRIBUTING.

## AI / keys in a release

- Do **not** ship paid provider keys in a public frontend without a proxy and spend caps.
- Rotate any key that has appeared in a public build (SECURITY.md).

## GitHub

- Tag releases if you want navigable history: `git tag -a v1.1.0 -m "…" && git push origin v1.1.0`
- CI on `main` is the quality gate before deploy.
