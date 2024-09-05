import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@/app/core/header/header.component';
import { FooterComponent } from '@/app/core/footer/footer.component';
import { getBrowserLang, TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'jc-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, TranslocoDirective],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular';
  lang: string | undefined;

  constructor(private _translocoService: TranslocoService) {
    // TODO: provar de nou si es pot fer alguna cosa al servidor perquè ja carregi el idioma que toca
    this.lang = getBrowserLang();
    if (this.lang !== undefined && this._translocoService.getActiveLang() !== this.lang) {
      this._translocoService.setActiveLang(this.lang);
    }
  }
}
