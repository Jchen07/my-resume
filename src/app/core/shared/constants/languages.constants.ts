/**
 * Single source of truth for the languages the app ships. Imported by the runtime Transloco
 * config, the testing helper, and the root `transloco.config.ts` (keys-manager CLI) — the last
 * via a relative path, since that file lives outside `src/` and can't use the `@/` alias.
 */
export const AVAILABLE_LANGS = ['es', 'ca', 'en', 'zh-CN'] as const;

export type AppLang = (typeof AVAILABLE_LANGS)[number];

/** Default / fallback language. */
export const DEFAULT_LANG: AppLang = 'es';

/** Language code -> display label; drives the language-switcher menu. */
export const LANGUAGES: Record<AppLang, string> = {
  es: 'Español',
  ca: 'Català',
  en: 'English',
  'zh-CN': '中文',
};
