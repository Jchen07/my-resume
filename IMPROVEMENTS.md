# Improvements

Repo-wide review — last updated **2026-08-31**.

**Baseline at time of review:** under Node 24.20.0, `pnpm lint` is clean, `pnpm test`
passes 56/56, and `pnpm build` succeeds at 511 kB initial (under the 600 kB budget).
Nothing is functionally broken; every item below is quality, robustness, process, or docs.

Checkboxes are unticked — tick them as they land.

---

## Correctness / robustness

- [ ] **Parallel-array zip by index in the résumé timelines.**
  `experience-section.component.ts:37` (`PROFILE.experience.map((fact, i) => ({ time: roles[i].time, … }))`)
  and the same pattern in `education-section.component.ts` assume the i18n
  `home.experience.roles[]` / `home.education.entries[]` array is exactly as long as
  `PROFILE`. If one language's JSON lags `PROFILE` by an entry (add a job, translate
  later), `roles[i]` is `undefined` and `.time` throws — the whole section renders blank
  for that language. Only `profile.data.spec.ts` guards the alignment, and there is no CI
  to run it. Fix: guard with `roles[i]?.` + skip/fallback, or `.slice` to the shorter
  length.

- [ ] **Unguarded `navigator.clipboard.writeText(...)`.** `navbar.component.ts:64`
  (`copyEmailToClipboard`) and `buttons-bar.component.ts:31` (`copyEmail`): no feature
  check, no `.catch`, no "copied!" feedback. On failure (permission denied / insecure
  context) it produces an unhandled promise rejection + console error and the user never
  learns whether the copy worked. Wrap in try/catch (mirroring `local-storage.function.ts`)
  and surface a transient confirmation.

- [ ] **`index.html` inline theme script reads `localStorage` directly** with no
  try/catch, even though the app ships `local-storage.function.ts` precisely because that
  access can throw (blocked storage / sandboxed context). A throw there aborts the
  pre-paint script. Wrap the `localStorage.getItem('theme')` call.

---

## Process / reproducibility

- [ ] **`pnpm-lock.yaml` is gitignored** (`.gitignore:52`). No locked dependency graph:
  every `pnpm install` can resolve different versions across ~40 `^`-ranged deps (Angular,
  NgRx, Tailwind, ESLint, …). `CLAUDE.md` already acknowledges this. Committing the
  lockfile is the single highest-leverage fix here.

- [ ] **No CI.** `.github/` does not exist. The `verify` skill (lint + build + test +
  browser smoke) is entirely manual, and deploy is a manual `pnpm deploy` from a
  workstation. Add a GitHub Actions workflow running the three automated checks on PRs —
  it would catch regressions the existing tests already cover.

- [ ] **Dependencies drifting behind latest.** FontAwesome 6 → 7 (major),
  `angular-cli-ghpages` 2 → 3, ESLint 9 → 10, TypeScript 6 → 7,
  `prettier-plugin-tailwindcss` 0.6 → 0.8. Not urgent; schedule a bump.

- [ ] **`pnpm-workspace.yaml` uses an `allowBuilds:` key.** pnpm's documented key for
  approving package build scripts is `onlyBuiltDependencies:` (list form). Verify the
  approvals actually take effect — watch `pnpm install` for an "Ignored build scripts"
  warning for `esbuild` / `@parcel/watcher` / `lmdb` / `msgpackr-extract`.

---

## Bundle / architecture

- [ ] **NgRx is shipped to production for nothing.** `@ngrx/store` + `/effects` +
  `/signals` + `/store-devtools`, plus an unconditional `provideStoreDevtools(...)`, are
  wired into `app.config.ts` for a "learning only" `test` slice that no résumé feature
  uses. Guard devtools behind `isDevMode()`, lazy-load the `/state-demo` scaffolding, or
  drop it.

- [ ] **Six learning-demo routes are live on the deployed portfolio** (`resource-demo`,
  `contact`, `login`, `aria-demo`, `state-demo`, `content-child-demo`), publicly
  reachable. `resource-demo` makes live calls to `api.github.com` and `swapi.info`.
  Acceptable if intentional — but decide deliberately whether they belong on the résumé
  domain (e.g. gate them behind a dev-only route config).

- [ ] **Dead code to remove:**
  - `ReversePipe` (`core/shared/pipes/reverse/`) — self-labeled throwaway, referenced
    nowhere but its own spec.
  - `ProjectsSectionComponent` — `<p>projects-section works!</p>` placeholder, not routed.
  - The commented-out async-pipe block and projects `<jc-projects-section>` line at the top
    of `home.component.html`.
  - The bogus `createEmbeddedView` context `{ $implicit: 'let variable', test: 'test' }` in
    `auth.directive.ts:26`.

---

## UX

- [ ] **`OpenLinkConfirmationDirective` fires a blocking native `window.confirm()` on
  every external link and the CV download** — footer, navbar, timeline company links,
  GitHub / LinkedIn / Download-CV buttons. On a portfolio that is a hostile speed bump for
  a recruiter clicking through. Prefer plain `target="_blank" rel="noopener"` with no
  interstitial, or reserve a non-blocking confirmation for genuinely surprising targets
  only.

- [ ] **Dropdown menu keyboard semantics.** `navbar` and `translate-button` menus have
  good `aria-expanded` / `aria-haspopup` / Escape handling, but don't move focus into the
  menu on open and lack the `role="menu"` / `role="menuitem"` + arrow-key navigation
  implied by `aria-haspopup`.

- [ ] **`presentation-section.component.html`** puts `aria-label="{{ t('title') }}"` on
  the `<section>` while a visible `<h1>` already labels it. Use `aria-labelledby` pointing
  at the `<h1>` (give it an `id`), or drop the attribute.

---

## SEO / metadata

- [ ] **Client-rendered SPA with no SSR / prerender.** Crawlers and social scrapers that
  don't execute JS see an empty `<jc-root>`. Prerendering just `/home` via `@angular/ssr`
  would fix the crawlability half cheaply.

- [ ] **No Open Graph / Twitter-card / canonical / `og:image` tags** in `index.html` →
  poor link previews whenever the résumé URL is shared.

- [ ] **No `robots.txt` / `sitemap.xml`** in `public/`.

---

## Test coverage gaps

- [ ] **All four custom directives have no specs:** `auth.directive.ts`,
  `click-outside.directive.ts`, `click-enter-spacebar.directive.ts`,
  `open-link-confirmation.directive.ts`.

- [ ] **`format-date.function.ts` has no spec** — it is pure, correctness-sensitive, and
  feeds both the on-site timelines and the generated CV PDF. Prime candidate for isolated
  unit tests (locale formatting, `end: null` → present label, month boundaries).

- [ ] **`local-storage.function.ts` has no spec** (the throw/degrade paths).

  (The 11 other spec-less files are trivial inline-SVG icon components — not a concern.)

---

## Docs drift

- [ ] **`README.md`** lists only 4 of the 6 learning routes (missing `aria-demo`,
  `state-demo`) and says the CV generator renders "the three PDFs" — there are 4 languages
  and 4 committed PDFs.

- [ ] **`CLAUDE.md` "Git / PRs"** says active development and PRs target `develop`, but the
  default branch is `main` and work happens on feature branches — the `develop` guidance
  looks stale.

- [ ] **`memory/MEMORY.md`** points at this `IMPROVEMENTS.md` as an existing "repo-wide
  review"; keep the pointer accurate as this file evolves.

---

## Minor

- [ ] **Committed CV PDFs are a binary source of truth** that must be manually regenerated
  (`pnpm generate:cv`) and committed whenever `profile.data.ts` or i18n prose changes.
  Nothing enforces freshness — consider a check (or a CI step) that diffs regenerated PDFs
  against the committed ones.

- [ ] **Typos:** `adress` (`open-link-confirmation.directive.ts:14`), `sintax`
  (`login.component.html:64`), "My portafolio Jie Chen" mixes EN + ES
  (`home.service.ts:8`, demo data).

- [ ] **Stray `console.log`** in `contact.component.ts:73` and
  `resource-demo.component.ts:17` (both learning demos).
