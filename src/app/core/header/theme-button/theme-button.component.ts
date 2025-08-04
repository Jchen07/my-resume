import {
  afterNextRender,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  signal,
  inject,
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
  public static readonly THEME_STORAGE_NAME: string = 'theme';

  protected rendered = signal<boolean>(false);
  protected readonly MODE_ENUM = ModeEnum;
  protected readonly isDarkMode = signal<boolean>(
    document.documentElement.classList.contains('dark')
  );

  private changeDetection = inject(ChangeDetectorRef);

  constructor() {
    // TODO: delete?, ssr problem, right now it's not necessary
    afterNextRender((): void => {
      this.rendered.set(true);
      this.changeDetection.markForCheck();
    });
  }

  setMode(mode: ModeEnum): void {
    if (mode === ModeEnum.DARK) {
      localStorage.setItem(ThemeButtonComponent.THEME_STORAGE_NAME, ModeEnum.DARK);
      document.documentElement.classList.add(ModeEnum.DARK);
      this.isDarkMode.set(true);
    } else {
      localStorage.setItem(ThemeButtonComponent.THEME_STORAGE_NAME, ModeEnum.LIGHT);
      document.documentElement.classList.remove(ModeEnum.DARK);
      this.isDarkMode.set(false);
    }
  }
}
