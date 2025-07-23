import { TranslocoHttpLoader } from './transloco-loader';
import { isDevMode } from '@angular/core';
import { TranslocoOptions } from '@jsverse/transloco';

export const translocoConfig: TranslocoOptions = {
  config: {
    availableLangs: ['es', 'en'],
    defaultLang: 'es',
    reRenderOnLangChange: true,
    prodMode: !isDevMode(),
  },
  loader: TranslocoHttpLoader,
};
