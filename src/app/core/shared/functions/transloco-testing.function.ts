import { TranslocoTestingModule, TranslocoTestingOptions } from '@jsverse/transloco';
import en from '../../../../../public/i18n/en.json';
import es from '../../../../../public//i18n/es.json';

// https://jsverse.gitbook.io/transloco/advanced-topics/unit-testing
export function getTranslocoModule(options: TranslocoTestingOptions = {}) {
  return TranslocoTestingModule.forRoot({
    langs: { en, es },
    translocoConfig: {
      availableLangs: ['es', 'en'],
      defaultLang: 'es',
    },
    preloadLangs: true,
    ...options,
  });
}
