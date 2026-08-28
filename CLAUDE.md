# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal resume / portfolio SPA (`my-resume`), deployed to GitHub Pages under the `/my-resume/`
base href. The routed **`home`** page is the actual résumé; the `login`, `contact`,
`resource-demo`, and `content-child-demo` routes are Angular learning experiments (labelled as
such in `app.routes.ts`) and are not part of the résumé.

## Commands

Package manager is **pnpm** (pinned via `packageManager`). The dev server runs on **port 4202**,
not Angular's default 4200 — `environment.development.ts` hard-codes `http://localhost:4202` and
the Transloco loader fetches translations from that origin.

| Task | Command |
|---|---|
| Dev server | `pnpm start` (http://localhost:4202) |
| Production build | `pnpm build` → `dist/angular/browser/` |
| Dev watch build | `pnpm watch` |
| Unit tests (headless, one run) | `pnpm test` |
| Unit tests (watch) | `pnpm test:watch` |
| Coverage | `pnpm coverage` |
| Lint (includes formatting) | `pnpm lint` / `pnpm lint:fix` |
| Deploy to GitHub Pages | `pnpm deploy` |

Run one spec: `pnpm test -- --include=src/app/path/to/thing.component.spec.ts` (or temporarily
mark it with `describe.only` / `it.only`).

`prebuild` runs `node ./generate-build-info.js`, regenerating `src/build-info.ts` with a fresh
ISO `BUILD_TIMESTAMP` that cache-busts the i18n JSON fetch. It fires automatically before
`pnpm build` and inside `pnpm deploy`; `src/build-info.ts` is generated — never hand-edit it.

Lint is ESLint (typescript-eslint + angular-eslint) **with Prettier as an error-level rule**, so
`pnpm lint` fails on formatting drift. `prettier-plugin-tailwindcss` auto-sorts Tailwind class
lists.

## Stack

- **Angular 20**, fully standalone (no NgModules), **zoneless** (`provideZonelessChangeDetection`
  — `zone.js` is not a dependency).
- Build: `@angular/build:application` (esbuild); the default build configuration is `production`.
- **TypeScript strict** plus `noPropertyAccessFromIndexSignature`, `noImplicitOverride`,
  `noImplicitReturns`, `noFallthroughCasesInSwitch`; `strictTemplates` on.
- **Tailwind CSS v4** via `@tailwindcss/postcss` (`.postcssrc.json`); a single global
  `src/styles.css`. No per-component stylesheets (component schematic `style: none`; the
  `anyComponentStyle` budget is 2 kB). Dark mode is the `.dark` class on `<html>` (see
  `@custom-variant dark` in `styles.css`), toggled and persisted to `localStorage['theme']` by
  `ThemeButtonComponent`; an inline script in `index.html` applies it before first paint.
- **Transloco** for i18n (see the i18n section).
- **NgRx** store/effects/devtools are wired in `app.config.ts` and `src/app/state/`, but flagged
  "learning purposes" — only a dummy `test` slice exists. Real features do not use NgRx; do not
  extend it without checking with the owner.
- FontAwesome icons are registered in `AppComponent`; tech/brand logos are hand-written
  inline-SVG components in `src/app/core/shared/icons/`.
- `@angular/ssr` is installed and mentioned in TODOs, but **SSR is not set up** (no server entry
  or build target), and `environment.ts` reads `window.location.origin` at module load — the app
  is browser-only.

## Layout

- `@/*` is a path alias for `src/*`.
- `src/app/core/` — app shell and cross-cutting pieces: `header/` (navbar, theme switcher,
  language switcher), `footer/`, and `shared/` (`components/` tag + timeline, `directives/`,
  `pipes/`, `icons/`, `constants/`, `functions/`).
- `src/app/pages/` — routed pages, **all lazy `loadComponent`**. `pages/home/` is the résumé,
  assembled from `presentation-section`, `experience-section`, `education-section` (plus an
  unrouted `projects-section` placeholder). The other pages are learning demos.
- `src/app/state/` — NgRx scaffolding (learning only).
- `src/app/transloco/` — `transloco-config.ts` (runtime options) and `transloco-loader.ts`
  (HTTP loader).
- `src/environments/` — `environment.ts` (prod, base `/my-resume`) vs
  `environment.development.ts`, swapped by `fileReplacements` in the `development` build config.
- `public/` — copied verbatim to the web root: `i18n/*.json`, `assets/` (CV PDF, logos, fonts),
  `favicon.ico`.
- `README.md` is stale Angular-CLI boilerplate (claims v18, port 4200) — ignore it.

## Conventions

- Selector prefix **`jc`**: components are `kebab-case` elements (`jc-foo`), directives
  `camelCase` attributes (`jcFoo`). Enforced by ESLint.
- Every component is standalone with an explicit
  `changeDetection: ChangeDetectionStrategy.OnPush`. Page/feature components use external
  `templateUrl`; the small inline-SVG icon components (and the `content-child-demo` parts) use
  inline `template`.
- Prefer `inject()` over constructor params; use signal APIs (`signal`, `input()` /
  `input.required()`, `computed`, `effect`) — not `@Input()` / `@Output()` decorators.
- New control flow only: `@if` / `@for` / `@switch`, never `*ngIf` / `*ngFor`.
- Fields used only by the template are `protected`; enums are surfaced to templates as
  `protected readonly FOO = FooEnum`.
- Clean up RxJS subscriptions with `takeUntilDestroyed(this.destroyRef)`.
- File suffixes: `*.component.ts`, `*.directive.ts`, `*.pipe.ts`, `*.service.ts`, `*.enum.ts`,
  `*.interface.ts`, `*.model.ts`; enums/interfaces live in a `models/` folder next to their
  consumer.
- Prettier: single quotes, semicolons, `printWidth` 100, `arrowParens: avoid`,
  `bracketSameLine: true`, `trailingComma: es5`.

## i18n (Transloco)

- Languages: `es` (default), `en`, `zh-CN`. The language list is duplicated in **three files that
  must stay in sync**: `src/app/transloco/transloco-config.ts` (runtime), `transloco.config.ts`
  (root, for the keys-manager CLI), and
  `src/app/core/shared/functions/transloco-testing.function.ts` (tests).
- Translation JSON lives in **`public/i18n/`** (not `src/assets/` — the `rootTranslationsPath` in
  `transloco.config.ts` is stale). `TranslocoHttpLoader` fetches
  `${environment.baseUrl}/i18n/<lang>.json?v=<BUILD_TIMESTAMP>`.
- The language-switcher menu is driven by the `LANGUAGES` map in
  `core/header/translate-button/models/language.enum.ts` (key = Transloco lang code, value =
  display label).
- `AppComponent` keeps `<html lang>` in sync with the active language and picks the initial
  language from the browser (`zh` → `zh-CN`, and only languages present in
  `getAvailableLangs()`). The choice is **not persisted** across reloads.
- Résumé section components combine translated prose
  (`translocoService.selectTranslateObject('home.experience')`, keyed `first` / `second`) with
  structured data (company/school name, logo, link, tech tags) hard-coded in the component `.ts`.
- Tech-tag chips: to add one, extend `TagNameEnum`, add a color entry in
  `default-tag-color.enum.ts` (its `Record<TagNameEnum, …>` type forces this), add a `@case` in
  `tag.component.html`, and register the icon component in `tag.component.ts`.

## Testing

- **Vitest** (`@angular/build:unit-test` builder, `runner: vitest`, jsdom environment). Globals
  (`describe`/`it`/`expect`/`vi`) are on via `tsconfig.spec.json` `types: ["vitest/globals"]`.
  No `karma.conf.js`, no `vitest.config.ts` — the CLI builds the Vitest config from
  `angular.json` (the `test` target's `buildTarget` points at the `testing` build config). Runs
  zoneless-only; there is no `fakeAsync`/`tick` — use `await fixture.whenStable()`.
- Each component has a co-located `*.spec.ts` whose baseline is a `should create` check.
- Specs provide `provideZonelessChangeDetection()` and use `await fixture.whenStable()`. Specs
  that render translated content import `getTranslocoModule()`; specs using FontAwesome import
  `FontAwesomeTestingModule`. Pure logic is sometimes tested by instantiating the class
  directly, without TestBed.
- jsdom lacks some browser APIs (e.g. `navigator.clipboard`) — stub them in the spec before
  spying (`Object.defineProperty(navigator, 'clipboard', …)`).
