# Track enrollment — rollout notes

## Model
- **Track** registry: `src/data/tracks.ts`
- **Membership**: `AppData.trackMembership` (canonical focus + enrollments + `activeExamId`)
- **Subject UI prefs**: per-track buckets in `examprep-subject-selection` (not enrollment)
- **Progress**: global topic/question records; denominators use active scope

## Rollout / stale clients
1. New clients write `trackMembership` on every save (`sanitizeForSave`).
2. Every `loadData` / `normalizeLoaded` runs `ensureTrackMembership` so missing membership is migrated from **evidence only** (never default FPSC).
3. Old tabs: `storage` event reloads AppData when another tab saves.
4. Service worker still uses controlled skipWaiting (Update prompt). Cache name is hashed by the Vite SW plugin when assets change.
5. If an old bundle overwrites the primary key without membership, the next load of a new bundle re-runs migration from progress evidence.

## Reset / backup
- Full reset clears AppData and subject-selection (membership cleared).
- Backup JSON includes `trackMembership` when present.
- Restore path uses `normalizeLoaded` → membership validated.

## Rollback
- Revert to previous release; `trackMembership` is optional on `AppData`.
- Users keep topic progress either way.

## Manual smoke
1. Fresh profile → Home empty → Explore FPSC → Begin → Learn works.
2. Preview HAT without Begin → Practice blocked / gated.
3. Begin both tracks → Switch from Home → prefs restored per track.
4. FPSC profile “Met BS-17” → subject list unchanged; bs16-only tags hidden if present.
5. Reset all → no enrollments.
