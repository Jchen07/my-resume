/**
 * Build-time CV generator. Renders `scripts/cv-template` to one print-quality, ATS-readable
 * PDF per app language and writes them to `public/assets/pdf/CV_Jie_Chen_<lang>.pdf`, which the
 * "Download CV" button then serves based on the active language.
 *
 * Run via `pnpm generate:cv` (also chained into `prebuild`). Uses the locally installed Google
 * Chrome through `playwright-core` — no browser download. If no usable Chrome/Chromium is
 * found it logs a warning and exits 0, leaving the committed PDFs in place so `pnpm build`
 * still succeeds on machines without a browser.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium, type Browser } from 'playwright-core';
import { PDFDocument } from 'pdf-lib';
import { AVAILABLE_LANGS, type AppLang } from '../src/app/core/shared/constants/languages.constants';
import { PROFILE } from '../src/app/core/shared/data/profile.data';
import { buildCvHtml, type CvI18n } from './cv-template/template.mts';

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = join(REPO_ROOT, 'public', 'assets', 'pdf');
const AUTHOR = 'Jie Chen';

const MAC_CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

function loadI18n(lang: AppLang): CvI18n {
  const raw = readFileSync(join(REPO_ROOT, 'public', 'i18n', `${lang}.json`), 'utf8');
  const json = JSON.parse(raw) as CvI18n;

  const missing: string[] = [];
  if (!json.cv?.summary) missing.push('cv.summary');
  for (const fact of PROFILE.experience) {
    if (!json.cv?.experience?.[fact.id]?.bullets?.length) {
      missing.push(`cv.experience.${fact.id}.bullets`);
    }
  }
  if (missing.length > 0) {
    throw new Error(`${lang}.json is missing required CV keys: ${missing.join(', ')}`);
  }
  return json;
}

async function launchChrome(): Promise<Browser | null> {
  for (const options of [{ channel: 'chrome' }, { executablePath: MAC_CHROME }, {}]) {
    try {
      return await chromium.launch(options);
    } catch {
      // try the next strategy
    }
  }
  return null;
}

async function renderPdf(browser: Browser, html: string): Promise<Uint8Array> {
  const page = await browser.newPage();
  try {
    await page.setContent(html, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    return await page.pdf({
      printBackground: true,
      preferCSSPageSize: true,
      tagged: true,
    });
  } finally {
    await page.close();
  }
}

/** Best-effort metadata pass: fills /Author (Chrome leaves it blank) and re-asserts Title/Lang. */
async function withMetadata(pdf: Uint8Array, i18n: CvI18n, lang: AppLang): Promise<Uint8Array> {
  try {
    const doc = await PDFDocument.load(pdf);
    doc.setAuthor(AUTHOR);
    doc.setTitle(i18n.cv.title);
    doc.setSubject(`${i18n.cv.headline} — ${i18n.cv.displayName}`);
    doc.setCreator('my-resume CV generator');
    doc.setLanguage(lang);
    return await doc.save({ useObjectStreams: false });
  } catch (error) {
    console.warn(`  metadata pass skipped for ${lang}: ${(error as Error).message}`);
    return pdf;
  }
}

async function main(): Promise<void> {
  mkdirSync(OUT_DIR, { recursive: true });

  const browser = await launchChrome();
  if (!browser) {
    console.warn(
      '[generate-cv-pdf] No Chrome/Chromium found — keeping the committed PDFs.\n' +
        '  Install Google Chrome, or run `pnpm exec playwright install chromium`, then rerun `pnpm generate:cv`.'
    );
    process.exit(0);
  }

  try {
    for (const lang of AVAILABLE_LANGS) {
      const i18n = loadI18n(lang);
      const html = buildCvHtml(PROFILE, i18n, lang);
      const rendered = await renderPdf(browser, html);
      const finalPdf = await withMetadata(rendered, i18n, lang);
      const outPath = join(OUT_DIR, `CV_Jie_Chen_${lang}.pdf`);
      writeFileSync(outPath, finalPdf);
      console.log(`[generate-cv-pdf] ${lang} -> ${outPath} (${(finalPdf.length / 1024).toFixed(1)} kB)`);
    }
  } finally {
    await browser.close();
  }
}

main().catch(error => {
  console.error('[generate-cv-pdf] failed:', error);
  process.exit(1);
});
