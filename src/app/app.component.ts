import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@/app/core/header/header.component';
import { FooterComponent } from '@/app/core/footer/footer.component';
import { getBrowserLang, TranslocoService } from '@jsverse/transloco';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'jc-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'my-resume';
  lang: string | undefined;

  private translocoService = inject(TranslocoService);
  private faIconLibrary = inject(FaIconLibrary);
  private document = inject(DOCUMENT);

  constructor() {
    this.translateSetUp();
    this.syncHtmlLang();
    this.addIconLibrary();
  }

  private translateSetUp() {
    // TODO: https://github.com/Jchen07/my-resume/commit/8a1ab33a917b37d52f3e6fc78b333caf0d1904d3 SSR commit
    // TODO: provar de nou si es pot fer alguna cosa al servidor perquè ja carregi el idioma que toca (millora seo i en cas de internet lent no es vegi idioma anterior)
    // TODO: en cas d'haver canviat idioma guadar-lo per la següent
    const browserLang = getBrowserLang();
    this.lang = browserLang === 'zh' ? 'zh-CN' : browserLang;
    const availableLangs = this.translocoService.getAvailableLangs() as string[];
    if (
      this.lang !== undefined &&
      availableLangs.includes(this.lang) &&
      this.translocoService.getActiveLang() !== this.lang
    ) {
      this.translocoService.setActiveLang(this.lang);
    }
  }

  private syncHtmlLang() {
    this.translocoService.langChanges$
      .pipe(takeUntilDestroyed())
      .subscribe(lang => (this.document.documentElement.lang = lang));
  }

  private addIconLibrary() {
    this.faIconLibrary.addIcons(faCopy, faGithub, faLinkedin, faEnvelope);
  }
}
