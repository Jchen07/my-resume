import {
  afterNextRender,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  signal,
} from '@angular/core';
import { ModeEnum } from '@/app/core/header/models/mode.enum';
import { TranslocoPipe } from '@jsverse/transloco';
import { ClickEnterSpacebarDirective } from '@/app/core/shared/directives/click-enter-spacebar.directive';

@Component({
  selector: 'jc-theme-button',
  imports: [TranslocoPipe, ClickEnterSpacebarDirective],
  templateUrl: 'theme-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeButtonComponent {
  rendered = signal<boolean>(false);

  protected readonly MODE_ENUM = ModeEnum;

  private readonly THEME_STORAGE_NAME: string = 'theme';

  constructor(private _changeDetection: ChangeDetectorRef) {
    // TODO: delete?, ssr problem, right now it's not necessary
    afterNextRender((): void => {
      this.rendered.set(true);
      this._changeDetection.markForCheck();
    });
  }

  isDarkMode(): boolean {
    return document.documentElement.classList.contains('dark');
  }

  setMode(mode: ModeEnum): void {
    if (mode === ModeEnum.DARK) {
      localStorage.setItem(this.THEME_STORAGE_NAME, ModeEnum.DARK);
      document.documentElement.classList.add(ModeEnum.DARK);
    } else {
      localStorage.setItem(this.THEME_STORAGE_NAME, ModeEnum.LIGHT);
      document.documentElement.classList.remove(ModeEnum.DARK);
    }
  }
}
