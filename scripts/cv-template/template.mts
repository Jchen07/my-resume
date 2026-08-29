import { readFileSync } from 'node:fs';
import { formatDateRange } from '../../src/app/core/shared/data/format-date.function';
import type { Profile } from '../../src/app/core/shared/data/models/profile.interface';
import type { AppLang } from '../../src/app/core/shared/constants/languages.constants';

/**
 * Vendored CJK face (OFL, from fontsource). Embedded as a data: URI so headless Chrome
 * subsets and embeds it as a real CID TrueType font — macOS system PingFang otherwise ends up
 * as non-extractable Type 3 glyphs in the PDF.
 */
function fontDataUri(file: string): string {
  const bytes = readFileSync(new URL(`./fonts/${file}`, import.meta.url));
  return `data:font/woff2;base64,${bytes.toString('base64')}`;
}
const NOTO_SC_400 = fontDataUri('NotoSansSC-400.woff2');
const NOTO_SC_700 = fontDataUri('NotoSansSC-700.woff2');

/**
 * Shape of the slice of `public/i18n/<lang>.json` the CV template reads. Kept deliberately
 * loose — the generator asserts key presence at runtime and `profile.data.spec.ts` locks the
 * `cv.*` contract.
 */
export interface CvI18n {
  home: {
    experience: Record<'first' | 'second', { title: string }>;
    education: Record<'first' | 'second', { title: string; subtitle: string; description: string }>;
  };
  cv: {
    title: string;
    displayName: string;
    headline: string;
    present: string;
    location: string;
    contact: Record<'email' | 'phone' | 'location' | 'linkedin' | 'github', string>;
    sections: Record<'summary' | 'experience' | 'skills' | 'education' | 'languages', string>;
    summary: string;
    experience: Record<'dxc' | 'indra', { bullets: string[] }>;
    skillGroups: Record<string, string>;
    languageNames: Record<string, string>;
    languageLevels: Record<string, string>;
  };
}

const EXPERIENCE_SLOT = { indra: 'second', dxc: 'first' } as const;
const EDUCATION_SLOT = { uoc: 'second', 'grado-daw': 'first' } as const;

function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function stripProtocol(url: string): string {
  return url.replace(/^https?:\/\//, '');
}

function contactRow(label: string, value: string): string {
  return `<div class="contact-row"><span class="contact-label">${esc(label)}</span> ${esc(value)}</div>`;
}

function experienceEntry(profile: Profile, i18n: CvI18n, lang: AppLang): string {
  return profile.experience
    .map(fact => {
      const prose = i18n.home.experience[EXPERIENCE_SLOT[fact.id]];
      const bullets = i18n.cv.experience[fact.id].bullets
        .map(b => `<li>${esc(b)}</li>`)
        .join('');
      const dates = formatDateRange(fact.dates, lang, i18n.cv.present);
      return `
        <article class="entry">
          <div class="entry-title">${esc(prose.title)}</div>
          <div class="entry-meta">${esc(fact.company)} &middot; ${esc(dates)}</div>
          <ul>${bullets}</ul>
        </article>`;
    })
    .join('');
}

function educationEntry(profile: Profile, i18n: CvI18n, lang: AppLang): string {
  return profile.education
    .map(fact => {
      const prose = i18n.home.education[EDUCATION_SLOT[fact.id]];
      const dates = formatDateRange(fact.dates, lang, i18n.cv.present);
      return `
        <article class="entry">
          <div class="entry-title">${esc(prose.title)}</div>
          <div class="entry-meta">${esc(fact.institution)} &middot; ${esc(dates)}</div>
          <p>${esc(prose.description)}</p>
        </article>`;
    })
    .join('');
}

function skillLines(profile: Profile, i18n: CvI18n): string {
  return profile.skills
    .map(group => {
      const label = i18n.cv.skillGroups[group.id] ?? group.id;
      return `<div class="skill-line"><span class="skill-label">${esc(label)}:</span> ${esc(
        group.items.join(', ')
      )}</div>`;
    })
    .join('');
}

function languageLine(profile: Profile, i18n: CvI18n): string {
  const parts = profile.languages.map(spoken => {
    const name = i18n.cv.languageNames[spoken.id] ?? spoken.id;
    const level = i18n.cv.languageLevels[spoken.level] ?? spoken.level;
    return `${name} — ${level}`;
  });
  return `<p>${esc(parts.join(', '))}</p>`;
}

/**
 * Builds a self-contained, single-column HTML CV for one language. Section order matches the
 * intended linear text-extraction order: name, headline, contact, summary, experience, skills,
 * education, languages. No multi-column layout, no tables, no floats.
 */
export function buildCvHtml(profile: Profile, i18n: CvI18n, lang: AppLang): string {
  const c = i18n.cv;
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8" />
<title>${esc(c.title)}</title>
<style>
  @font-face {
    font-family: "Noto Sans SC";
    font-weight: 400;
    src: url("${NOTO_SC_400}") format("woff2");
  }
  @font-face {
    font-family: "Noto Sans SC";
    font-weight: 700;
    src: url("${NOTO_SC_700}") format("woff2");
  }
  @page { size: A4; margin: 10mm 15mm; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: -apple-system, "Helvetica Neue", Arial, "Noto Sans SC", sans-serif;
    font-size: 10pt;
    line-height: 1.35;
    color: #1a1a1a;
  }
  header { margin-bottom: 8pt; }
  .name { font-size: 20pt; font-weight: 700; letter-spacing: 0.01em; }
  .headline { font-size: 11.5pt; color: #555; margin-top: 2pt; }
  .contact { margin-top: 6pt; font-size: 9pt; color: #333; }
  .contact-row { margin-bottom: 1pt; }
  .contact-label { font-weight: 700; }
  h2 {
    font-size: 11pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin: 10pt 0 5pt;
    padding-bottom: 2pt;
    border-bottom: 1px solid #9a9a9a;
    break-after: avoid;
  }
  .entry { margin-bottom: 6pt; break-inside: avoid; }
  .entry:last-child { margin-bottom: 0; }
  .entry-title { font-size: 10.5pt; font-weight: 700; }
  .entry-meta { font-size: 9pt; color: #444; margin-top: 1pt; }
  ul { margin: 2pt 0 0; padding-left: 14pt; }
  li { margin-bottom: 1pt; }
  p { margin: 2pt 0 0; }
  .skill-line { margin-bottom: 1pt; }
  .skill-label { font-weight: 700; }
</style>
</head>
<body>
  <header>
    <div class="name">${esc(c.displayName)}</div>
    <div class="headline">${esc(c.headline)}</div>
    <div class="contact">
      ${contactRow(c.contact.email, profile.contact.email)}
      ${contactRow(c.contact.phone, profile.contact.phone)}
      ${contactRow(c.contact.location, c.location)}
      ${contactRow(c.contact.linkedin, stripProtocol(profile.contact.linkedinUrl))}
      ${contactRow(c.contact.github, stripProtocol(profile.contact.githubUrl))}
    </div>
  </header>

  <section>
    <h2>${esc(c.sections.summary)}</h2>
    <p>${esc(c.summary)}</p>
  </section>

  <section>
    <h2>${esc(c.sections.experience)}</h2>
    ${experienceEntry(profile, i18n, lang)}
  </section>

  <section>
    <h2>${esc(c.sections.skills)}</h2>
    ${skillLines(profile, i18n)}
  </section>

  <section>
    <h2>${esc(c.sections.education)}</h2>
    ${educationEntry(profile, i18n, lang)}
  </section>

  <section>
    <h2>${esc(c.sections.languages)}</h2>
    ${languageLine(profile, i18n)}
  </section>
</body>
</html>`;
}
