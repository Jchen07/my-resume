import { AppLang } from '../constants/languages.constants';
import { DateRange } from './models/profile.interface';

const LOCALE_BY_LANG: Record<AppLang, string> = {
  es: 'es-ES',
  en: 'en-GB',
  'zh-CN': 'zh-CN',
};

/**
 * Formats a {@link DateRange} for the given app language, e.g. `Jan 2021 – Feb 2025` /
 * `ene 2021 – feb 2025` / `2021年1月 – 2025年1月`. `end: null` renders as `presentLabel`
 * (the localized "Present" string, supplied by the caller from i18n).
 *
 * Angular-free so the build-time CV generator can call it directly.
 */
export function formatDateRange(range: DateRange, lang: AppLang, presentLabel: string): string {
  const start = formatMonth(range.start, lang);
  const end = range.end === null ? presentLabel : formatMonth(range.end, lang);
  return `${start} – ${end}`;
}

function formatMonth(value: string, lang: AppLang): string {
  const [year, month] = value.split('-');
  const date = new Date(Number(year), Number(month) - 1, 1);
  return new Intl.DateTimeFormat(LOCALE_BY_LANG[lang], {
    month: 'short',
    year: 'numeric',
  }).format(date);
}
