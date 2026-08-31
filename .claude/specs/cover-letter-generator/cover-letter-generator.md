# Spec: AI Cover-Letter ("Presentation Letter") Generator

## Context

`CV_PROJECT_IDEAS.md` identifies **"zero AI / LLM work"** as the single biggest gap in Jie
Chen's résumé. This feature is the concrete answer to that gap: a generator that takes a job
posting plus the résumé data already in this repo and produces a tailored cover letter via the
Claude API.

It is a good first AI/LLM project specifically because it is **not** a generic prompt box:

1. It reuses the repo's structured CV data (`PROFILE` + the `home.*` / `cv.*` i18n prose) as
   model context — real context engineering, not a toy.
2. It leans on an existing strength — the site already ships `es` / `ca` / `en` / `zh-CN`
   translations — by generating the letter in the job posting's language.
3. It is genuinely useful to the author, which reads as motivated engineering.

**Status: spec only.** Implementation is deferred until the author is confident in the
direction. This document is the design of record; the "Implementation plan" section at the end
is what to execute later.

---

## Goals

- New lazy-loaded route that generates a cover letter from (a) a job posting and (b) the
  résumé data in `PROFILE` + i18n.
- Letter language, tone, and length are user-controlled; language defaults to the active UI
  language.
- Output streams token-by-token, is editable in place, and can be copied / downloaded.
- Depth features that distinguish it from a wrapper: ATS keyword-gap analysis, visible
  token/cost accounting, model picker.
- Labelled as a learning/portfolio experiment, consistent with `contact` / `login` /
  `resource-demo` / `aria-demo`.
- All UI chrome localised in the 4 existing catalogs.

## Non-goals

- No backend, no CI change. Deployment stays `pnpm deploy` (static → GitHub Pages).
- No account system, no persistence of generated letters server-side (localStorage only).
- No automated LinkedIn scraping (see constraint C2).
- Not wired into the résumé's home page in phase 1 (see "Scope" decision).

---

## Hard constraints discovered during exploration

### C1 — No secure place for an API key

The site is 100 % static (`@angular/build:application`, no `server`/`ssr` target; deployed via
`angular-cli-ghpages`). `src/environments/environment.ts` is committed and browser-evaluated —
it holds only `baseHref` / `baseUrl` / `production`. There is **no serverless piece anywhere**
and no `.github/` workflows. Anything calling `api.anthropic.com` from the browser must either
ship a key in client JS (unacceptable) or have the user supply their own.

The Anthropic TS SDK refuses to run in a browser unless constructed with
`dangerouslyAllowBrowser: true` (raw fetch equivalent: header
`anthropic-dangerous-direct-browser-access: true`).

### C2 — LinkedIn job URLs cannot be fetched client-side

LinkedIn requires auth, blocks scraping, and CORS forbids the cross-origin read anyway. A
pasted URL fetched from the browser will fail for LinkedIn specifically almost every time.
Reliable input is the **pasted job-description text**.

---

## Open decisions (author to confirm before implementing)

### D1 — API access model

| Option | Trade-off |
|---|---|
| **BYOK in `localStorage`** (recommended for phase 1) | User pastes their own Anthropic key; stored via the repo's safe `writeLocalStorage` wrapper; sent only to `api.anthropic.com`. Zero infra, deployable today. Only usable by someone who has a key — fine for a portfolio piece the author demos and whose code recruiters read. |
| Serverless proxy (Cloudflare Worker / Vercel fn) | Anyone can try it, key stays server-side. Adds a second deploy target, secret management, rate-limiting and a spend cap (a public portfolio endpoint can be drained). |
| **BYOK now, proxy later** (recommended overall) | Ship BYOK; put the base URL behind one constant (`ANTHROPIC_BASE_URL`) so a proxy can be swapped in as phase 2 with no UI change. |

**Recommendation:** BYOK now, proxy-ready. A visible in-UI disclaimer explains the key stays
in the browser. Never log the key; scrub it from any error surface.

### D2 — Job input

| Option | Trade-off |
|---|---|
| Paste job text only | Fully reliable, no third-party dependency, simplest. |
| **Text + optional URL** (recommended) | Textarea for the text, plus an optional URL field that tries a public reader proxy (`https://r.jina.ai/<url>`) and, on any failure, tells the user to paste the text. Works for open job boards; LinkedIn stays paste-only. The reader proxy is a third-party service — the URL is sent to it; note this in the disclaimer. |

**Recommendation:** Text + optional URL, text is the required field.

### D3 — Scope

| Option | Trade-off |
|---|---|
| Minimal MVP | Route + one non-streaming call + plain output + copy. Fastest demo, thin as a portfolio piece. |
| **Standalone route + full polish** (recommended for phase 1) | Everything in this spec, not wired into home. |
| Also wire into home | Above, plus un-comment and build `projects-section` in `home.component.html` to link this project + the repo. Good, but couples résumé changes to a learning demo — do it as phase 2 once the feature is real. |

**Recommendation:** Standalone route with full polish; wire `projects-section` in a later pass.

---

## Architecture

### Route

Add to `src/app/app.routes.ts`, same shape as the other demos:

```ts
{
  path: 'cover-letter', // TODO: This page is for learning purposes.
  loadComponent: () =>
    import('./pages/cover-letter/cover-letter.component').then(m => m.CoverLetterComponent),
},
```

No route-level providers (consistent with the repo). `provideHttpClient(withFetch())` is
already in `app.config.ts` — not needed for the SDK path (the SDK uses its own fetch), used
only by the optional reader-proxy fetch.

### File layout — `src/app/pages/cover-letter/`

| File | Responsibility |
|---|---|
| `cover-letter.component.ts` / `.html` / `.spec.ts` | Page: Signal Form, orchestration, streaming UI, results panel. `selector: 'jc-cover-letter'`, `OnPush`, standalone. |
| `services/anthropic-client.service.ts` | Thin wrapper over `@anthropic-ai/sdk` (lazy `import()` inside the route so it stays out of the main bundle). Exposes `streamMessage(params, { onText, signal })` → returns the final message + `usage`. Constructed per call with the current key + base URL + `dangerouslyAllowBrowser: true`. |
| `services/cv-context.function.ts` | Pure, Angular-free assembly of the model context from `PROFILE` + a translated `home.*` / `cv.*` object (passed in). Returns a compact structured string. Unit-tested directly. |
| `services/build-prompt.function.ts` | Pure. Builds the system prompt + structured user message from CV context + job text + options (language, tone, length, emphasis). Unit-tested directly. |
| `services/keyword-gap.function.ts` | Pure. Given the model's returned keyword list and `PROFILE.skills`, computes `{ matched: string[], missing: string[] }` (case-insensitive, trims, dedups). Unit-tested directly. |
| `services/cost.function.ts` | Pure. `usage` + model id → `{ inputCost, outputCost, total }` using the price table below. Unit-tested directly. |
| `models/*.ts` | `CoverLetterOptions`, `CoverLetterModel` (form model), `GenerationResult`, `ModelId` enum/union, per repo suffix conventions (`*.interface.ts` / `*.enum.ts` in `models/`). |

### Dependency

Add `@anthropic-ai/sdk` to `dependencies`. Import it with a dynamic `import()` inside the route
component/service so it is code-split into the lazy chunk, not the initial bundle. (The
`claude-api` skill requires the official SDK over a hand-rolled fetch client.)

### Form — Signal Forms (`@angular/forms/signals`)

Follow `src/app/pages/contact/contact.component.ts` exactly (the fullest existing example).

`CoverLetterModel`:

| Field | Validation |
|---|---|
| `jobText: string` | `required`, `minLength(120)` |
| `jobUrl: string` | optional; `validate` for basic URL shape when non-empty |
| `apiKey: string` | `required`, `validate` → must start with `sk-ant-` |
| `language: 'es'\|'ca'\|'en'\|'zh-CN'\|'auto'` | `required`; default `'auto'` → resolves to active Transloco lang |
| `tone: 'formal'\|'enthusiastic'\|'concise'` | `required`; default `'formal'` |
| `length: 'short'\|'standard'` | `required`; default `'standard'` |
| `model: ModelId` | `required`; default `claude-opus-5` |
| `emphasis: string` | optional free text ("emphasise my Angular / micro-frontend work") |

Submit via `await submit(form, async submitted => { ... })`, mirroring the contact page.
`form().submitting()` disables the button and drives the streaming state.

### Generation flow

1. On submit: persist non-secret options (tone/length/language/model) and the key to
   `localStorage` via `writeLocalStorage` (keys `cl:opts`, `cl:key`). Read back on init.
2. If `jobUrl` set and `jobText` empty: `fetch('https://r.jina.ai/' + jobUrl)` with an
   `AbortSignal` (reuse the `resource-demo` abort pattern); on success prefill `jobText`, on
   failure show "couldn't read that URL — paste the description text".
3. Resolve `language: 'auto'` → `translocoService.getActiveLang()`.
4. Build context: `toSignal(selectTranslateObject(['home','cv']))` zipped with `PROFILE` via
   `cv-context.function.ts` (same technique as `experience-section.component.ts`).
5. `build-prompt.function.ts` → `{ system, messages }`.
6. `anthropicClient.streamMessage(...)` with `client.messages.stream({ model, max_tokens: 4096,
   system, messages })`. Append text deltas to a `letter = signal('')`; render live.
7. On completion: read `usage`; run `cost.function.ts`; show token + $ line.
8. Keyword gap: **one** call, ask the model to end the letter with a fenced
   ` ```json {"keywords": [...]} ` block listing the posting's key skills/tech; parse it
   out of the final text, strip it from the displayed letter, feed to `keyword-gap.function.ts`.
   (Avoids a second round-trip.)
9. Result panel: editable `<textarea>` bound to `letter`, **Copy** (guard
   `navigator.clipboard` per repo testing note), **Download .md** (Blob + object URL),
   **Regenerate**.

### Prompt design (in `build-prompt.function.ts`)

- **System:** "You are writing a job-application cover letter on behalf of the candidate
  described below. Write in {language}. Tone: {tone}. {length → target word count}. Use only
  facts from the candidate profile; do not invent employers, dates, or skills. Output only the
  letter body — no letterhead, no date, no `[placeholders]`. After the letter, append a fenced
  json block with a `keywords` array of the posting's most important skills/technologies."
- **User message:** three labelled sections — `CANDIDATE PROFILE` (the assembled context),
  `JOB POSTING` (raw pasted text), `EMPHASIS` (optional free text, else omitted).
- One request, no tools, no thinking config needed at this size.

### Model picker + cost table

Default `claude-opus-5` (per the `claude-api` skill: never downgrade silently). Picker offers:

| Model | ID | Input $/1M | Output $/1M |
|---|---|---|---|
| Claude Opus 5 (default) | `claude-opus-5` | 5.00 | 25.00 |
| Claude Sonnet 5 | `claude-sonnet-5` | 2.00 | 10.00 |
| Claude Haiku 4.5 | `claude-haiku-4-5` | 1.00 | 5.00 |

`cost.function.ts` holds this table as a `Record<ModelId, { in: number; out: number }>` and
computes `usage.input_tokens / 1e6 * in + usage.output_tokens / 1e6 * out`.

---

## i18n

New key group `cover-letter.*` in all four `public/i18n/*.json` (`es` is source of truth;
`es` first, then `ca` / `en` / `zh-CN`). Covers: page title/intro, every field label +
placeholder + validation message, tone/length/model option labels, button labels
(Generate / Regenerate / Copy / Download), the streaming/empty/error states, the token-cost
line, the keyword-gap panel ("You can back these up" / "Not evident in your CV"), and the
BYOK + reader-proxy disclaimer. Add a navbar entry only if the author wants it (default: no,
reachable by URL like the other demos).

Register the route label in the `app.routes.ts` learning-experiments comment and in
`CLAUDE.md`'s project description (list it beside `resource-demo` etc.).

---

## Security & privacy

- API key: `localStorage` only, via the try/catch `writeLocalStorage` wrapper. Never sent
  anywhere except `api.anthropic.com`. Never `console.log`'d. Scrubbed from any error string
  shown in the UI.
- `dangerouslyAllowBrowser: true` is a deliberate, disclosed choice for a BYOK tool — the UI
  states the key stays in the browser and is not transmitted to this site's author.
- Reader proxy: only reached when the user supplies a URL; the disclaimer names `r.jina.ai` as
  a third party that will receive that URL.
- No secrets in `environment.ts` or any committed file. `.env` is not introduced.
- Generated letters and job text stay client-side; nothing is persisted beyond `localStorage`
  on the user's machine.

---

## Testing (Vitest, per repo conventions)

- `cover-letter.component.spec.ts`: `should create`; form invalid when `jobText` too short /
  key missing / key malformed; submit button disabled while `submitting()`; import
  `getTranslocoModule()` for rendered copy; stub `navigator.clipboard` before spying.
- `cv-context.function.spec.ts`: given a fixed `PROFILE` + fake translated object → stable
  context string; asserts company/skill facts are present and index-aligned.
- `build-prompt.function.spec.ts`: language / tone / length / emphasis flow into the strings;
  the keyword-block instruction is always present.
- `keyword-gap.function.spec.ts`: matched vs missing, case-insensitive, dedup, trims.
- `cost.function.spec.ts`: known `usage` + each model id → expected dollar figures.
- Anthropic SDK is mocked (`vi.mock('@anthropic-ai/sdk')`); no network in tests.

## Verification (when built)

1. `pnpm lint && pnpm build && pnpm test` (the `verify` skill).
2. `pnpm start`, open `http://localhost:4202/cover-letter`.
3. Paste a real job description, paste a personal Anthropic key, Generate → letter streams in,
   token/cost line appears, keyword-gap panel populates, Copy + Download + Regenerate work.
4. Switch UI language → all chrome translated; `language: auto` follows it.
5. Reload → key + options restored from `localStorage`.
6. Malformed key → inline validation error, no request sent.
7. Kill network mid-stream → error state, key not leaked in the message.

---

## Implementation plan (execute later)

1. `pnpm add @anthropic-ai/sdk`.
2. Create `src/app/pages/cover-letter/` per the file-layout table; pure functions +
   their specs first (TDD-friendly, no Angular).
3. `anthropic-client.service.ts` with lazy `import('@anthropic-ai/sdk')` and streaming.
4. Component + template: Signal Form modelled on `contact.component.ts`; streaming result
   panel; localStorage restore/persist via `local-storage.function.ts`.
5. Optional reader-proxy fetch with `AbortSignal` (pattern from `resource-demo.component.ts`).
6. Add the route to `app.routes.ts` (with the learning-purposes comment).
7. Add `cover-letter.*` keys to `public/i18n/{es,ca,en,zh-CN}.json`.
8. Note the new demo in `CLAUDE.md`.
9. Run the `verify` skill; manual smoke test per "Verification".
10. (Phase 2, optional) serverless proxy + swap base URL; un-comment `projects-section` on
    home and link this project + the repo.

## Future phases

- **Proxy:** Cloudflare Worker holding the key, with an allowed-origin check and a hard monthly
  spend cap; app points `ANTHROPIC_BASE_URL` at it, BYOK field becomes optional.
- **Home integration:** build out `projects-section.component` (currently `works!` placeholder,
  commented out in `home.component.html`) to feature this + link the repo.
- **Depth:** multiple past letters as few-shot examples; per-paragraph regenerate; PDF export
  reusing `scripts/generate-cv-pdf.mts`'s Playwright setup.
