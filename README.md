# my-resume

Personal résumé / portfolio single-page app, built with **Angular 22** (standalone, zoneless)
and **Tailwind CSS v4**, deployed to GitHub Pages under the `/my-resume/` base href.

The routed `home` page is the actual résumé. The `login`, `contact`, `resource-demo`, and
`content-child-demo` routes are Angular learning experiments, not part of the résumé.

## Prerequisites

- **Node** `^22.22.3 || ^24.15.0 || >=26` (see `.nvmrc`)
- **pnpm** (pinned via `packageManager`; `corepack enable` will provide it)

## Commands

| Task | Command |
| --- | --- |
| Dev server (http://localhost:4202) | `pnpm start` |
| Production build → `dist/angular/browser/` | `pnpm build` |
| Dev watch build | `pnpm watch` |
| Unit tests (Vitest, one run) | `pnpm test` |
| Unit tests (watch) | `pnpm test:watch` |
| Coverage | `pnpm coverage` |
| Lint + format check | `pnpm lint` / `pnpm lint:fix` |
| Deploy to GitHub Pages | `pnpm deploy` |

Run one spec: `pnpm test -- --include=src/app/path/to/thing.component.spec.ts`.

## Stack

- Angular 22, fully standalone, zoneless (`provideZonelessChangeDetection`; no `zone.js`)
- Build: `@angular/build:application` (esbuild); tests: `@angular/build:unit-test` (Vitest + jsdom)
- TypeScript 6, strict, `strictTemplates`
- Tailwind CSS v4 via `@tailwindcss/postcss`; single global `src/styles.css`; dark mode via the
  `.dark` class on `<html>`
- i18n: [Transloco](https://jsverse.gitbook.io/transloco/) — `es` (default), `en`, `zh-CN`;
  translation JSON in `public/i18n/`
- State: NgRx `@ngrx/store` + `@ngrx/effects` and `@ngrx/signals` (learning scaffold only — no
  résumé feature depends on it)

See `CLAUDE.md` for architecture and conventions.
