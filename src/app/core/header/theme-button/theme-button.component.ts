import { afterNextRender, ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ModeEnum } from '@/app/core/header/models/mode.enum';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'jc-theme-button',
  imports: [TranslocoPipe],
  templateUrl: 'theme-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeButtonComponent {
  public static readonly THEME_STORAGE_NAME: string = 'theme';

  protected rendered = signal<boolean>(false);
  protected readonly isDarkMode = signal<boolean>(
    document.documentElement.classList.contains('dark')
  );

  constructor() {
    // Swap the loading spinner for the real toggle once the browser has painted.
    // The signal write schedules change detection on its own under zoneless CD.
    afterNextRender((): void => {
      this.rendered.set(true);
    });
  }

  toggle(): void {
    this.setMode(this.isDarkMode() ? ModeEnum.LIGHT : ModeEnum.DARK);
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
