---
name: angular-upgrade
description: Step a my-resume major-version Angular upgrade (e.g. 22 → 23 → 24). Encodes the sequential ng-update process, the peer-dependency pre-bumps that otherwise make ng update hard-fail, the Node/TypeScript prerequisite check, and the standard modernization schematics. Use when asked to "upgrade Angular", "bump to Angular N", or "update the framework".
---

# Angular major upgrade for my-resume

Angular ships ~2 majors per year. Do this **one major at a time** — `ng update` refuses to skip
versions. Each major = its own commit (or PR), each passing the `verify` skill before the next.

Run everything on the Node the *target* Angular requires (see step 1), from the repo root, with
`nvm use <version> >/dev/null && …` and pnpm via corepack if needed.

## 1. Prerequisites (blocks the update)

- **Node**: check the target's requirement — `npm view @angular/cli@<major> engines.node`.
  Angular 22 needs `^22.22.3 || ^24.15.0 || >=26`. If the machine's Node doesn't satisfy it,
  `nvm install <ver>` and use that; update `.nvmrc` + the `engines` field in `package.json`.
- **TypeScript**: `ng update @angular/core@<major>` bumps it, but the pinned
  `typescript-eslint` devDep can block the install with an incompatible-peer error. Pre-bump it
  (see step 2).

## 2. Pre-bump peers that make `ng update` hard-fail

`ng update` aborts on `Incompatible peer dependencies`. Bump these *first* (edit `package.json`,
`pnpm install`), matched to the target Angular major:

| Package | Why | How to find the right version |
|---|---|---|
| `typescript-eslint` | peer-locks the TypeScript range | `npm view typescript-eslint@latest version` (8.x tracks new TS) |
| `angular-eslint` | tracks Angular majors | `npm view angular-eslint@<major> version` |
| `@fortawesome/angular-fontawesome` | peers `@angular/core` by major (v2→A20, v4→A21, v5→A22 …) | `npm view @fortawesome/angular-fontawesome@<v> peerDependencies` |
| `@ngrx/store` `@ngrx/effects` `@ngrx/store-devtools` `@ngrx/signals` | peer `@angular/core: ^<major>.0.0`; `ng update` hard-fails otherwise | `npm view @ngrx/store@<major> version` |
| `@jsverse/transloco` | peers `@angular/core: >=16`; usually fine, but check `dist-tags` — don't move to an `alpha`/`next` tag | `npm view @jsverse/transloco dist-tags` |
| `@angular/aria` | tracks Angular majors | `npm view @angular/aria@<major> version` |

Commit the pre-bumps separately ("chore: bump X for Angular N compat").

## 3. Run the update

```
nvm use <node> >/dev/null && pnpm ng update @angular/core@<major> @angular/cli@<major> angular-eslint@<major>
```

`ng update` requires a clean working tree — `git checkout src/build-info.ts` first if a build
dirtied it.

Review the auto-migrations it applies. Historically for this repo:
- **OnPush becomes default (v22+)**: the migration stamps `ChangeDetectionStrategy.Eager` on
  components lacking an explicit strategy. A new `angular-eslint` rule then flags those. Convert
  each to `OnPush` (this codebase is signal-based, so OnPush is correct everywhere) rather than
  leaving `Eager`.
- **`withFetch()`** may be removed from `provideHttpClient()` (fetch is the default) — fine.
- Migration may add `extendedDiagnostics` suppressions to `tsconfig.app/spec.json` and/or
  test-runner deps — review; drop the suppressions if the codebase has no matching warnings.

## 4. Run the standard modernization schematics

Most are no-ops here (already migrated) but run them to be sure:

```
pnpm ng generate @angular/core:self-closing-tags-migration
pnpm ng generate @angular/core:cleanup-unused-imports
pnpm ng generate @angular/core:signal-input-migration
pnpm ng generate @angular/core:output-migration
pnpm ng generate @angular/core:signal-queries-migration
```

## 5. Clean up

- Remove framework deps that became unused (past upgrades dropped `@angular/animations`,
  `@angular/platform-browser-dynamic`, `@angular/ssr`). Grep `src/` before removing.
- `pnpm peers check` should end with **no** issues; chase any remaining mismatch.
- If the initial bundle crossed the `maximumWarning` budget in `angular.json` purely from
  framework growth, bump the warning (keep `maximumError` at 1 MB) and note why.

## 6. Verify

Run the **`verify`** skill in full (lint + build + Vitest + browser smoke test). Then update
`CLAUDE.md` (version numbers, any changed defaults/APIs) and open the PR against **`develop`**.

## Notes for review / sub-agents

Tell any review agent to stay **read-only** and use `git diff develop...<branch>` — do not let
it `git checkout` / `git stash` (a review fork once left the tree on `develop` mid-session).
