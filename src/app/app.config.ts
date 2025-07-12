import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from './state/app.state';
import { provideEffects } from '@ngrx/effects';
import { ROOT_EFFECTS } from '@/app/state/app.effects';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader/transloco-loader';
import { provideTransloco } from '@jsverse/transloco';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(ROOT_REDUCERS), // TODO: learning purposes
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), // TODO: learning purposes
    provideEffects(ROOT_EFFECTS), // TODO: learning purposes
    provideHttpClient(withFetch()),
    provideTransloco({
      config: {
        availableLangs: ['es', 'en'],
        defaultLang: 'es',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};
