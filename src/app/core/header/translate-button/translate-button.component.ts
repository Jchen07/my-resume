import { ChangeDetectionStrategy, Component, computed, signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { LANGUAGES } from '@/app/core/shared/constants/languages.constants';
import { KeyValuePipe } from '@angular/common';
import { ClickOutsideDirective } from '@/app/core/shared/directives/click-outside.directive';
import { ClickEnterSpacebarDirective } from '@/app/core/shared/directives/click-enter-spacebar.directive';

const LANG_SHORT: Record<string, string> = { es: 'ES', ca: 'CA', en: 'EN', 'zh-CN': '中' };

@Component({
  selector: 'jc-translate-button',
  templateUrl: 'translate-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoPipe, KeyValuePipe, ClickOutsideDirective, ClickEnterSpacebarDirective],
})
export class TranslateButtonComponent {
  menuVisible = signal<boolean>(false);

  protected readonly languages = LANGUAGES;

  private translocoService = inject(TranslocoService);

  private readonly activeLang = toSignal(this.translocoService.langChanges$, {
    initialValue: this.translocoService.getActiveLang(),
  });

  /** Short code shown on the button, e.g. `EN` / `中`. */
  protected readonly activeLabel = computed(() => {
    const lang = this.activeLang() ?? 'es';
    return LANG_SHORT[lang] ?? lang.slice(0, 2).toUpperCase();
  });

  changeLanguage(language: string): void {
    this.translocoService.setActiveLang(language);
    this.hideMenu();
  }

  openDialog(): void {
    this.menuVisible.update(visible => !visible);
  }

  hideMenu(): void {
    this.menuVisible.set(false);
  }
}
