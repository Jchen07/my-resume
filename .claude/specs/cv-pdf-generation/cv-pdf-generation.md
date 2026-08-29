# Spec: CV PDF Generation & Download (locale-aware)

## Context

`my-resume` is an Angular 22 personal portfolio SPA, deployed as **static files** to
GitHub Pages (no server, no SSR). The routed `home` page is the résumé, assembled from
`presentation-section`, `experience-section`, `education-section`, and an empty
`projects-section` placeholder.

The presentation section already has a **"Download CV" button** wired to a static file:

`src/app/pages/home/presentation-section/buttons-bar/buttons-bar.component.html`
→ `href="assets/pdf/CV_Jie_Chen.pdf"` with `download`, guarded by the
`jcOpenLinkConfirmation` directive (`[downloadMessage]="true"`).

That static PDF is hand-authored, Spanish-ish, and — verified with text extraction —
**parses badly**: section headings appear after their content, the most recent role is
last in the text stream, and dates are detached from their entries.

The site is localized with **Transloco** (`es` default, `en`, `zh-CN`). Language is
chosen at runtime and persisted to `localStorage['lang']`.

## Goal

Replace the static download with a **generated, single-column, ATS/LLM-readable CV PDF**
that reflects **the language currently active on the site**: if the visitor has switched
the UI to Chinese, the "Download CV" button must produce the Chinese CV; likewise for
Spanish and English. The CV must also look visually polished (typography, spacing,
hierarchy) — clean, not plain.

## Non-goals / Out of scope

- Multiple CV templates or themes, an in-app CV editor, or user-customizable sections.
- A dark-mode / theme-switchable PDF — the CV is always the light print design.
- Cover letters or any document other than the CV.
- A backend or serverless function for generation (deploy target is static hosting).
- Redesigning the on-site résumé sections. Their **data source** may be refactored for
  reuse (see §1), but their rendered appearance must not change.
- Download analytics.
- Producing publication-quality `zh-CN` copy automatically — human-reviewed translation
  is provided by the owner (see §6).

## Assumptions to confirm with the owner

1. "Print the content **at the moment**" means **the currently active language**, not
   unsaved runtime edits (a résumé has none). Content is otherwise static per language,
   so pre-rendering one PDF per language is acceptable **as long as** the button picks
   the file matching the active language at click time. If the owner instead wants the
   PDF to render the live DOM/Transloco state at click time, use Approach B in §2.
2. All three languages are generated; the current hand-authored
   `public/assets/pdf/CV_Jie_Chen.pdf` is removed once the generated set works.
3. The PDF filename stays Latin for every language: `CV_Jie_Chen_<lang>.pdf`
   (`CV_Jie_Chen_es.pdf`, `_en`, `_zh-CN`). Section headings inside the PDF are localized.
4. A **Projects** section is included and needs real data (this portfolio repo is the
   obvious first entry). If the owner declines, drop the section.

## Requirements

### 1. Data collection & single source of truth

Before writing any generation code, inventory every CV-relevant data source and record
findings in the implementation notes (see Deliverables).

**Known state at spec time:**

| Data | Where it lives now | Reusable? |
|---|---|---|
| Summary (1 sentence) | `home.presentation.description` in `public/i18n/*.json` | yes (too short for a CV summary) |
| Experience prose | `home.experience.{first,second}.{time,title,description}` in i18n JSON | yes |
| Experience structured (company, link, logo, tech tags) | **hard-coded, `private`** in `experience-section.component.ts` | not without refactor |
| Education prose | `home.education.{first,second}.{time,title,subtitle,description}` in i18n JSON | yes |
| Education structured (school, link, logo, tags) | hard-coded in `education-section.component.ts` | not without refactor |
| Email | `GlobalConstants.email` (`core/shared/constants/global.constants.ts`) | yes |
| LinkedIn URL | hard-coded in `buttons-bar.component.html` | not without refactor |
| GitHub URL (`github.com/Jchen07`) | hard-coded in `navbar.component.html` | not without refactor |
| Tech tags | `TagNameEnum` + `default-tag-color.ts` | partial — not a full skills list |

**Missing entirely — must be added as new data:**

- Phone number, location (city / region, remote/relocation flag).
- Job headline / target title (e.g. "Full-Stack Developer").
- A fuller professional summary (2–4 sentences).
- A complete, grouped skills list (languages, frameworks, tools, testing, etc.).
- Spoken languages with proficiency (Spanish, Catalan, English, Chinese).
- Projects (name, role, stack, links, 1–2 line description).
- Structured, locale-formattable dates for each role/degree
  (`{ start: 'YYYY-MM', end: 'YYYY-MM' | null }`; `null` = "Present"). This also fixes
  the incorrect "(5 years)" arithmetic in the current PDF.

**Deliverable of this step:** a single shared profile module — e.g.
`src/app/core/shared/data/profile.data.ts` (structured, language-agnostic facts) plus a
`cv.*` namespace in the i18n JSON (all localized prose and labels). **Both** the existing
home sections **and** the CV generator consume it. No CV content is hand-duplicated.
`experience-section` / `education-section` are refactored to read the structured facts
from this module (their templates and visible output stay identical).

### 2. PDF generation approach

Evaluate and document the choice. The deciding constraints: static hosting, zoneless
Angular, a mandatory **CJK font** for `zh-CN`, "polished visual aspect", and "trigger
from the existing button".

**Approach C — build-time headless-Chrome render (recommended).**
A Node script (precedent: `generate-build-info.js`, already run on `prebuild`) renders a
dedicated print template — the same one described in §3 — once per language with
Playwright or Puppeteer (`devDependencies` only, never imported by app code) and writes
`public/assets/pdf/CV_Jie_Chen_<lang>.pdf` via `page.pdf({ tagged: true, printBackground: true })`.
The button (§4) resolves the active language and downloads the matching file.
- Pros: true one-click download, controlled filename + PDF metadata, tagged/linear
  output, full CSS control for visuals, **zero runtime bundle cost**, CJK handled by the
  headless browser's fonts (bundle Noto Sans SC / Noto Sans CJK for the render, or
  install it in CI).
- Cons: adds a dev dependency and a build step; the CI/build environment must have the
  CJK font available.

**Approach B — runtime print route + `window.print()`.**
A hidden/`noindex` `/cv` route renders the print template from live Transloco state; the
button calls `window.print()` (scoped via `@media print`). The user saves as PDF through
the browser.
- Pros: no dependencies, renders whatever language is active at that instant, perfect
  text/shaping, browser supplies CJK fonts.
- Cons: it is "Print → Save as PDF", not a one-click `.pdf` download; filename and
  browser header/footer are user-controlled (mitigate with `@page { margin }` and
  `document.title`); output varies slightly by browser.

**Rejected — runtime `pdfmake` / `jsPDF`.** Requires embedding or lazy-loading a
multi-MB CJK font in the browser bundle for `zh-CN`, hand-coding layout, and still
yields weaker typography than an HTML/CSS template. Cost outweighs benefit here.

Document the final decision and rationale in the implementation notes.

### 3. Print template & canonical structure

One shared, single-column HTML/CSS template (used by Approach C's renderer or Approach
B's route). Print styles live in the **global `src/styles.css` under `@media print`**
(the project forbids per-component stylesheets); the `anyComponentStyle` budget does not
apply to global CSS.

**Canonical section order (must match the linear text-extraction order):**

1. Name
2. Headline / target title
3. Contact — each line prefixed with a text label:
   `Email:`, `Phone:`, `Location:`, `LinkedIn:`, `GitHub:`, `Portfolio:`
   (localized labels; never icon-only).
4. Professional summary
5. Experience — reverse-chronological (most recent first), each: title · company ·
   localized date range · bullet(s).
6. Skills — grouped, comma-separated, single column.
7. Projects — reverse-chronological.
8. Education — reverse-chronological.
9. Languages — spoken, with proficiency.

**Layout rules:** single column only; no CSS multi-column, no layout tables, no
right-aligned floating date boxes (they detach dates in extraction); dates on the same
line as their entry; 1–2 pages; standard embedded fonts (Latin + a CJK face for
`zh-CN`); `@page` margins set so no browser header/footer is needed.

Dates are formatted per active locale from the structured values in §1
(`Intl.DateTimeFormat` / Angular `DatePipe`), e.g. `Jan 2021 – Feb 2025` /
`ene 2021 – feb 2025` / `2021年1月 – 2025年2月`, `end: null` → localized "Present".

### 4. Integration with the existing button

In `buttons-bar.component.html` / `.component.ts`:

- Keep the LinkedIn link, the mailto "Contact" link, and the copy-email button
  unchanged.
- Replace the hard-coded `href="assets/pdf/CV_Jie_Chen.pdf"` so the download target is
  resolved from the **active Transloco language** (`TranslocoService.getActiveLang()` /
  `langChanges$`):
  - Approach C: `href` (or a click handler) points at `assets/pdf/CV_Jie_Chen_<lang>.pdf`,
    reactive to language changes; keep `download` and the `jcOpenLinkConfirmation`
    `[downloadMessage]="true"` confirmation.
  - Approach B: the button calls the print/generate action for the current language.
- Follow project conventions: `inject()`, signals (`toSignal` for `langChanges$`),
  `ChangeDetectionStrategy.OnPush`, `protected` template-only members, `jc` prefix.

### 5. AI / ATS readability (acceptance criteria)

- [ ] Text is selectable/copyable — no rasterized text, no text inside images.
- [ ] `pdftotext` (both with and without `-layout`) yields the sections in the §3
      canonical order, with every heading appearing **before** its content and the most
      recent experience **first**.
- [ ] Contact fields are recoverable as text with their labels (`Email:` etc.), not
      icon-dependent.
- [ ] `pdffonts` shows all fonts embedded (subset OK), no Type3 / bitmap fonts.
- [ ] `pdfinfo` shows `Title` (`CV — Jie Chen` localized is fine), `Author` (`Jie Chen`),
      and document `Lang` matching the file's language (`en` / `es` / `zh-CN`).
- [ ] No layout tables and no multi-column runs in the extracted text.
- [ ] 1–2 pages for each language (CJK line lengths differ — check `zh-CN` doesn't
      overflow or leave a near-empty page).

### 6. i18n

- Add a `cv.*` namespace to `public/i18n/es.json`, `en.json`, `zh-CN.json`: section
  headings, contact labels, "Present", the longer summary, and any CV-only prose
  (expanded experience bullets, project descriptions).
- `es` is the default and must be complete. `zh-CN` strings must be **human-quality** —
  provided/reviewed by the owner, not machine-stubbed.
- Follow the CLAUDE.md i18n workflow (keys-manager CLI; `AVAILABLE_LANGS` is the single
  language list).
- If experience/education prose is expanded for the CV, the home sections either share
  the new keys or keep their existing shorter keys — decide and document; do not fork
  the same fact into two unmanaged copies.

### 7. Verification

- [ ] Run the **`verify`** skill (lint + build + Vitest + browser smoke test, Node 24 /
      pnpm).
- [ ] Unit tests for the new profile module / generator wiring and for the button's
      language resolution (spec co-located, zoneless, `await fixture.whenStable()`).
- [ ] Approach C: `pnpm build` regenerates all three PDFs; each opens, is text-
      extractable, and passes every §5 check. Approach B: the `/cv` route prints
      correctly in Chromium and Firefox.
- [ ] Click "Download CV" with the site set to each of `es` / `en` / `zh-CN` and confirm
      the delivered PDF is in that language; the `jcOpenLinkConfirmation` dialog still
      fires; LinkedIn / Contact / copy-email are unaffected.
- [ ] If any runtime dependency or font is added to the app bundle, report the initial-
      bundle size delta and confirm `angular.json` budgets still pass. (Approach C should
      add **zero** runtime bundle weight.)
- [ ] `pnpm deploy` still produces a working static site with the PDFs present.

## Constraints

- **Static hosting only** — no runtime server/SSR. A build-time Node script is fine
  (`generate-build-info.js` sets the precedent; hook into `prebuild` / `postinstall` as
  appropriate).
- **Prefer zero runtime dependencies.** Any library or font shipped to the browser must
  be justified against bundle size. Puppeteer/Playwright are allowed as
  `devDependencies` only and must never be imported by application code.
- Reuse existing site data as the single source of truth (§1); no hand-duplicated résumé
  content.
- Print styles go in global `src/styles.css` under `@media print` — no per-component
  stylesheet (component schematic `style: none`).
- Do not change the visible design of the site. If Approach B adds a `/cv` route, it must
  be `noindex`, kept out of the nav, and rendered off-screen / print-only.
- Follow project conventions: standalone components, `ChangeDetectionStrategy.OnPush`,
  `inject()`, signal APIs, new control flow (`@if` / `@for`), `jc` selector prefix,
  file-suffix and `models/` rules, Prettier (single quotes, `printWidth` 100) + ESLint
  (Prettier is an error-level rule).
- pnpm (pinned), dev server on port 4202, Node per `.nvmrc`.
- Git: branch off **`develop`**; open the PR against `develop`, not `main`.

## Deliverables

1. Shared profile data module + `cv.*` i18n keys in all three languages; home sections
   refactored to consume the structured facts (no visible change).
2. Print template (single-column, §3) with `@media print` styles in `src/styles.css`.
3. Chosen generation mechanism implemented (Approach C script wired into the build, or
   Approach B `/cv` route) producing/serving `CV_Jie_Chen_<lang>.pdf` for
   `es` / `en` / `zh-CN`, with PDF metadata set.
4. `buttons-bar` wired so "Download CV" delivers the CV in the active language, with no
   regression to the other buttons or the confirmation dialog.
5. Tests per §7; the old static `CV_Jie_Chen.pdf` removed.
6. **Implementation notes** (`.claude/specs/cv-pdf-generation.notes.md` or the PR
   description): the data inventory from §1, the approach decision and rationale from §2,
   and the §5 verification output (`pdftotext` / `pdffonts` / `pdfinfo` excerpts) for
   each language.

## Open decisions for the owner

1. Approach **C** (build-time render, one-click download, recommended) vs **B** (runtime
   print route, live language, no deps but Print-dialog UX).
2. Source content for the missing data in §1 — phone, location, spoken-language
   proficiencies, full grouped skills list, expanded summary, project entries.
3. Include the Projects section? (Recommended: yes, starting with this portfolio repo —
   Angular 22, zoneless, Signals, NgRx, Transloco, Tailwind v4, Vitest.)
4. Expand the experience/education prose for the CV, or reuse the current short
   descriptions verbatim?
5. Confirm the Latin filename (`CV_Jie_Chen_zh-CN.pdf`) and localized in-document
   headings.
