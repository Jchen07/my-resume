import { TranslocoTestingModule, TranslocoTestingOptions } from '@jsverse/transloco';
import { AVAILABLE_LANGS, DEFAULT_LANG } from '@/app/core/shared/constants/languages.constants';
import en from '../../../../../public/i18n/en.json';
import es from '../../../../../public/i18n/es.json';
import zhCN from '../../../../../public/i18n/zh-CN.json';

// https://jsverse.gitbook.io/transloco/advanced-topics/unit-testing
export function getTranslocoModule(options: TranslocoTestingOptions = {}) {
  return TranslocoTestingModule.forRoot({
    langs: { en, es, 'zh-CN': zhCN },
    translocoConfig: {
      availableLangs: [...AVAILABLE_LANGS],
      defaultLang: DEFAULT_LANG,
    },
    preloadLangs: true,
    ...options,
  });
}
