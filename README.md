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
| Regenerate the CV PDFs | `pnpm generate:cv` |
| Deploy to GitHub Pages | `pnpm deploy` |

Run one spec: `pnpm test -- --include=src/app/path/to/thing.component.spec.ts`.

## CV PDF

The "Download CV" button serves a generated, single-page, ATS-readable PDF in the language the
site is currently showing — `public/assets/pdf/CV_Jie_Chen_<lang>.pdf`, one per Transloco
language. The résumé data is the shared `src/app/core/shared/data/profile.data.ts` (structured
facts) plus the `cv.*` / `home.*` keys in `public/i18n/*.json` (prose) — the same source the
on-site Experience/Education sections read.

`pnpm generate:cv` (also run by `pnpm deploy`) renders `scripts/cv-template/` to the three PDFs
via **headless Google Chrome** through `playwright-core`. It uses the locally installed Chrome —
no browser download — and falls back to a warning + exit 0 if none is found, leaving the
committed PDFs untouched. `pnpm build` / `pnpm test` do **not** regenerate them; commit the
refreshed PDFs when the résumé data changes.

- Needs Google Chrome installed, or `pnpm exec playwright install chromium`.
- Verifying the output (`pdftotext` / `pdffonts` / `pdfinfo`) needs `poppler`
  (`brew install poppler`).
- The CJK face (`scripts/cv-template/fonts/NotoSansSC-*.woff2`, OFL) is vendored so the Chinese
  PDF embeds real, extractable text instead of macOS PingFang Type 3 outlines.

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
