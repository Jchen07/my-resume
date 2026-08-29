# CV PDF generation — implementation notes

Implements `.claude/specs/cv-pdf-generation.md`. Branch `feat/cv-pdf-generation` (cut from
`chore/project-tooling`, **not** `develop` — `develop` is 13 commits behind and predates the
Angular 22 / Vitest / signals migration this work builds on).

## 1. Data inventory & the shared source of truth

Résumé data was split between i18n JSON (`home.*`) and hard-coded `private` fields in the
section components, and several CV fields had no source at all. Consolidated into:

- **`src/app/core/shared/data/profile.data.ts`** (`PROFILE`) — structured, language-agnostic
  facts: contact channels, per-role company/URL/logo/tags/`{start,end}` dates, education,
  grouped skills, spoken languages. Angular-free, relative imports only, so
  `scripts/generate-cv-pdf.mts` loads it through `tsx`.
- **`src/app/core/shared/data/models/profile.interface.ts`** — the types.
- **`src/app/core/shared/data/format-date.function.ts`** — `formatDateRange()`, locale-aware
  (`Intl.DateTimeFormat`), `end: null` → localized "Present". Shared by the (future) site use
  and the generator.
- **`cv.*` namespace** added to `public/i18n/{es,en,zh-CN}.json`: headline, section headings,
  contact labels, `present`, a tightened `summary`, `experience.{dxc,indra}.bullets` (one
  phrase per bullet — the DXC set is the 6 from the old PDF), skill-group labels, spoken
  language names + levels. Experience/education **titles** and education **descriptions** are
  reused from the existing `home.*` keys — not duplicated. All three languages are complete;
  `zh-CN` is hand-written and should get a native review.

`experience-section.component.ts` / `education-section.component.ts` were refactored to read
the structured facts from `PROFILE` (prose still via `selectTranslateObject`). Rendered output
is unchanged — locked by new assertions in their specs and confirmed in the browser.

Values seeded from the previous hand-authored `public/assets/pdf/CV_Jie_Chen.pdf` (now
deleted): phone `+34 651 68 36 55` (digits recovered from a corrupted font map — **confirm**),
the full skills list, spoken-language levels, and `Institut Montilivi`. `location` =
`Barcelona, Spain` per the owner. `Projects` section intentionally omitted.

Still open for the owner: exact months in each `DateRange`; the phone digits; `native` vs
`bilingual` for Spanish; final skills wording; a native `zh-CN` pass.

## 2. Approach & rationale

**Build-time headless-Chrome render (spec Approach C).** `scripts/generate-cv-pdf.mts` (run by
`pnpm generate:cv`, chained into `deploy`, **not** `prebuild` — Chrome's PDF bytes aren't
byte-stable, so regenerating on every build would dirty the tree) renders
`scripts/cv-template/template.mts` once per language and writes
`public/assets/pdf/CV_Jie_Chen_<lang>.pdf`. `buttons-bar.component.ts` computes the download
`href`/`download` from `TranslocoService.langChanges$`; `OpenLinkConfirmationDirective` and the
LinkedIn/mailto/copy-email buttons are untouched.

Deviations from the plan, all reducing footprint:

- **`playwright-core` + the system Google Chrome** (`channel: 'chrome'`, then an explicit
  macOS `executablePath`, then bundled) — no `playwright install chromium` download, no
  `pnpm-workspace.yaml` `allowBuilds` change. Falls back to a warning + `exit 0` if no browser
  is found, so `pnpm build` still works against the committed PDFs.
- **No `tsx`-vs-alias problem** — the data modules are relative-import-only; `tsx` resolves the
  whole graph. (Node 24 strips types natively too, but `tsx` also handles extensionless
  specifiers.)
- **`pdf-lib`** does a best-effort metadata pass (`/Author`, re-assert `/Title`,
  `/Subject`, `/Lang`); wrapped in try/catch — the tagged structure survives it.
- **CJK font vendored as `scripts/cv-template/fonts/NotoSansSC-{400,700}.woff2`** (OFL,
  simplified-Chinese subset, ~1.1 MB each), embedded into the template as `data:` URIs. macOS
  system PingFang otherwise renders as non-extractable **Type 3** outlines in headless Chrome —
  this was caught during verification and is the reason the font is vendored rather than
  relying on system fallback. Latin (es/en) uses the platform sans stack; those already embed
  cleanly as CID TrueType.

Template: single column, `@page { size: A4; margin: 10mm 15mm }`, section order
Name → Headline → Contact (text-labelled) → Summary → Experience (reverse-chron) → Skills
(grouped, one line each) → Education → Languages. Each language fits on **one page**.

## 3. Verification

`pnpm lint` clean · `pnpm build` clean (initial bundle 506 kB, unchanged — zero runtime cost)
· `pnpm test` 56 passed (was 41; +15: `profile.data.spec.ts`, extended `buttons-bar` /
`experience-section` / `education-section` specs).

Browser smoke (dev server, `pnpm start`): `/home` renders identically after the `PROFILE`
refactor (company/school names, logos, tag chips, timelines); language switch updates prose
**and** retargets the "Download CV" `href` (`…_es.pdf` → `…_en.pdf`).

Per-language PDF checks (`poppler`):

| file | Title | Author | Tagged | Pages | Page size | fonts | not-embedded | Type 3 |
|---|---|---|---|---|---|---|---|---|
| `CV_Jie_Chen_es.pdf` | `CV — Jie Chen` | `Jie Chen` | yes | 1 | A4 | 8 | 0 | 0 |
| `CV_Jie_Chen_en.pdf` | `CV — Jie Chen` | `Jie Chen` | yes | 1 | A4 | 8 | 0 | 0 |
| `CV_Jie_Chen_zh-CN.pdf` | `简历 — 陈杰` | `Jie Chen` | yes | 1 | A4 | 7 | 0 | 0 |

`pdftotext` (no `-layout` and `-layout`) on all three: linear order matches the template —
every section heading precedes its content, most-recent role (Indra) first, contact fields
recoverable as labelled text. `pdffonts` on the Chinese file: all rows `CID TrueType` /
`Identity-H` / `emb=yes` / `sub=yes` / `uni=yes`; the earlier Type 3 regression is gone. CJK
text copy-extracts correctly.

## 4. Files

- new: `src/app/core/shared/data/{profile.data.ts,format-date.function.ts,profile.data.spec.ts,models/profile.interface.ts}`
- new: `scripts/generate-cv-pdf.mts`, `scripts/cv-template/template.mts`,
  `scripts/cv-template/fonts/NotoSansSC-{400,700}.woff2`
- new: `public/assets/pdf/CV_Jie_Chen_{es,en,zh-CN}.pdf` (generated, committed)
- deleted: `public/assets/pdf/CV_Jie_Chen.pdf`
- changed: `public/i18n/{es,en,zh-CN}.json` (`cv.*` + tightened `summary`),
  `experience-section` / `education-section` (`.ts` + `.spec.ts`),
  `buttons-bar.component.{ts,html,spec.ts}`, `package.json` (`generate:cv`,
  devDeps `tsx` / `playwright-core` / `pdf-lib`), `README.md`, `CLAUDE.md`,
  `.claude/skills/verify/SKILL.md`
