import { Component, effect, inject, ChangeDetectionStrategy } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@/app/core/header/header.component';
import { FooterComponent } from '@/app/core/footer/footer.component';
import { getBrowserLang, TranslocoService } from '@jsverse/transloco';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  readLocalStorage,
  writeLocalStorage,
} from '@/app/core/shared/functions/local-storage.function';

@Component({
  selector: 'jc-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private static readonly LANG_STORAGE_KEY = 'lang';

  protected readonly title = 'my-resume';

  private readonly translocoService = inject(TranslocoService);
  private readonly faIconLibrary = inject(FaIconLibrary);
  private readonly document = inject(DOCUMENT);

  private readonly activeLang = toSignal(this.translocoService.langChanges$);

  constructor() {
    this.restoreInitialLang();
    this.addIconLibrary();

    // Keep <html lang> in sync and remember the choice for next visit.
    effect(() => {
      const lang = this.activeLang();
      if (!lang) {
        return;
      }
      this.document.documentElement.lang = lang;
      writeLocalStorage(AppComponent.LANG_STORAGE_KEY, lang);
    });
  }

  private restoreInitialLang(): void {
    const availableLangs = this.translocoService.getAvailableLangs() as string[];
    const browserLang = getBrowserLang();
    const normalizedBrowserLang = browserLang === 'zh' ? 'zh-CN' : browserLang;
    const stored = readLocalStorage(AppComponent.LANG_STORAGE_KEY);

    const preferred = [stored, normalizedBrowserLang].find(
      lang => lang != null && availableLangs.includes(lang)
    );

    if (preferred && preferred !== this.translocoService.getActiveLang()) {
      this.translocoService.setActiveLang(preferred);
    }
  }

  private addIconLibrary(): void {
    this.faIconLibrary.addIcons(faCopy, faGithub, faLinkedin, faEnvelope);
  }
}
