import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { LanguageEnum } from '@/app/core/header/translate-button/models/language.enum';
import { KeyValuePipe } from '@angular/common';
import { ClickOutsideDirective } from '@/app/core/shared/directives/click-outside.directive';
import { ClickEnterSpacebarDirective } from '@/app/core/shared/directives/click-enter-spacebar.directive';

@Component({
  selector: 'jc-translate-button',
  standalone: true,
  templateUrl: 'translate-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoPipe, KeyValuePipe, ClickOutsideDirective, ClickEnterSpacebarDirective],
})
export class TranslateButtonComponent {
  @ViewChild('languageMenu', { static: true }) languageMenuDialog!: ElementRef<HTMLDivElement>;

  menuVisible = false;

  protected readonly languages = LanguageEnum;

  constructor(private _translocoService: TranslocoService) {}

  changeLanguage(language: string): void {
    this._translocoService.setActiveLang(language);
    this.hideMenu();
  }

  openDialog(): void {
    this.menuVisible = !this.menuVisible;
  }

  hideMenu(): void {
    this.menuVisible = false;
  }
}
