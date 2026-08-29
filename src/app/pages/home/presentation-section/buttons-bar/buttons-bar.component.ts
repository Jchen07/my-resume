import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoDirective, TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { OpenLinkConfirmationDirective } from '@/app/core/shared/directives/open-link-confirmation.directive';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { GlobalConstants } from '@/app/core/shared/constants/global.constants';

@Component({
  selector: 'jc-buttons-bar',
  imports: [TranslocoDirective, TranslocoPipe, OpenLinkConfirmationDirective, FaIconComponent],
  templateUrl: './buttons-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsBarComponent {
  private readonly translocoService = inject(TranslocoService);

  // The generated CV is one file per language (see scripts/generate-cv-pdf.mts); download
  // the one that matches the language currently shown on the site.
  private readonly activeLang = toSignal(this.translocoService.langChanges$, {
    initialValue: this.translocoService.getActiveLang(),
  });
  protected readonly cvHref = computed(() => `assets/pdf/CV_Jie_Chen_${this.activeLang()}.pdf`);
  protected readonly cvDownloadName = computed(() => `CV_Jie_Chen_${this.activeLang()}.pdf`);

  protected basicButtonStyles =
    'inline-flex items-center gap-2 rounded border fill-current px-3 py-2 font-mono text-[12.5px] transition cursor-pointer';
  protected primaryButtonStyles =
    'border-term-primary-border bg-term-primary-bg text-term-primary-fg hover:border-term-accent';
  protected secondaryButtonStyles =
    'border-term-border bg-term-panel text-term-fg hover:border-term-faint';

  protected copyEmail() {
    navigator.clipboard.writeText(GlobalConstants.email);
  }
}
