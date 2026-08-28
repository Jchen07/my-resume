/**
 * Single source of truth for the languages the app ships.
 *
 * Kept in sync manually with the root `transloco.config.ts` (keys-manager CLI), which cannot
 * import from `src/` through the `@/` path alias.
 */
export const AVAILABLE_LANGS = ['es', 'en', 'zh-CN'] as const;

export type AppLang = (typeof AVAILABLE_LANGS)[number];

/** Default / fallback language. */
export const DEFAULT_LANG: AppLang = 'es';

/** Language code -> display label; drives the language-switcher menu. */
export const LANGUAGES: Record<AppLang, string> = {
  es: 'Español',
  en: 'English',
  'zh-CN': '中文',
};
