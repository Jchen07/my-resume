import { afterNextRender, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Translation, TranslocoLoader } from '@jsverse/transloco';
import { HttpClient } from '@angular/common/http';
import { environment } from '@/environments/environment';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  private http = inject(HttpClient);
  private plataform = inject(PLATFORM_ID);

  getTranslation(lang: string) {
    return this.http.get<Translation>(`${environment.baseUrl}/i18n/${lang}.json`);
  }
}
