import { TranslocoHttpLoader } from './transloco-loader';
import { isDevMode } from '@angular/core';
import { TranslocoOptions } from '@jsverse/transloco';
import { AVAILABLE_LANGS, DEFAULT_LANG } from '@/app/core/shared/constants/languages.constants';

export const translocoConfig: TranslocoOptions = {
  config: {
    availableLangs: [...AVAILABLE_LANGS],
    defaultLang: DEFAULT_LANG,
    reRenderOnLangChange: true,
    prodMode: !isDevMode(),
  },
  loader: TranslocoHttpLoader,
};
