import { afterRender, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { NgIf, NgOptimizedImage, NgStyle } from '@angular/common';
import { ModeEnum } from '@/app/core/header/models/mode.enum';
import { TranslateIconColorEnum } from '@/app/core/header/models/translate-icon-color.enum';
import { KeysEnum } from '@/app/core/shared/models/keys.enum';

@Component({
  selector: 'jc-header',
  standalone: true,
  imports: [NgOptimizedImage, NgIf, NgStyle],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  rendered = false;
  translateIconColor: string = TranslateIconColorEnum.WHITE;

  protected readonly MODE_ENUM = ModeEnum;

  private readonly THEME_STORAGE_NAME: string = 'theme';

  constructor(private _changeDetection: ChangeDetectorRef) {
    afterRender((): void => {
      this._changeMode();
      this.rendered = true;
      this._changeDetection.markForCheck();
    });
  }

  isDarkMode(): boolean {
    return (
      localStorage.getItem(this.THEME_STORAGE_NAME) === ModeEnum.DARK ||
      (!(this.THEME_STORAGE_NAME in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  }

  setMode(mode: ModeEnum): void {
    document.cookie = `theme=${mode}; path=/;`;
    this._changeMode();
  }

  changeLanguage() {
    // TODO: install and set multilanguage feature
  }

  handleKeyUpMode(event: KeyboardEvent, mode: ModeEnum): void {
    if (event.key === KeysEnum.ENTER || event.key === KeysEnum.SPACE) {
      this.setMode(mode);
    }
  }

  private _changeMode(): void {
    if (this.isDarkMode()) {
      document.documentElement.classList.add(ModeEnum.DARK);
      this.translateIconColor = TranslateIconColorEnum.WHITE;
    } else {
      document.documentElement.classList.remove(ModeEnum.DARK);
      this.translateIconColor = TranslateIconColorEnum.BLACK;
    }
  }
}
