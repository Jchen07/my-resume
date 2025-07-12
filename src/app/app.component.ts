import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@/app/core/header/header.component';
import { FooterComponent } from '@/app/core/footer/footer.component';
import { getBrowserLang, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'jc-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private translocoService = inject(TranslocoService);

  title = 'angular';
  lang: string | undefined;

  constructor() {
    // TODO: https://github.com/Jchen07/my-resume/commit/8a1ab33a917b37d52f3e6fc78b333caf0d1904d3 SSR commit
    // TODO: provar de nou si es pot fer alguna cosa al servidor perquè ja carregi el idioma que toca (millora seo i en cas de internet lent no es vegi idioma anterior)
    // TODO: en cas d'haver canviat idioma guadar-lo per la següent
    this.lang = getBrowserLang();
    if (this.lang !== undefined && this.translocoService.getActiveLang() !== this.lang) {
      this.translocoService.setActiveLang(this.lang);
    }
  }
}
