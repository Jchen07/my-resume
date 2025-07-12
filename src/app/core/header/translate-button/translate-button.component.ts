import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { LanguageEnum } from '@/app/core/header/translate-button/models/language.enum';
import { KeyValuePipe } from '@angular/common';
import { ClickOutsideDirective } from '@/app/core/shared/directives/click-outside.directive';
import { ClickEnterSpacebarDirective } from '@/app/core/shared/directives/click-enter-spacebar.directive';

@Component({
  selector: 'jc-translate-button',
  templateUrl: 'translate-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoPipe, KeyValuePipe, ClickOutsideDirective, ClickEnterSpacebarDirective],
})
export class TranslateButtonComponent {
  menuVisible = signal<boolean>(false);

  protected readonly languages = LanguageEnum;

  constructor(private _translocoService: TranslocoService) {}

  changeLanguage(language: string): void {
    this._translocoService.setActiveLang(language);
    this.hideMenu();
  }

  openDialog(): void {
    this.menuVisible.set(!this.menuVisible());
  }

  hideMenu(): void {
    this.menuVisible.set(false);
  }
}
