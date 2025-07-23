import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
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
  // tailwind dark: doesn't work with @apply
  protected basicButtonStyles =
    'flex items-center text-sm sm:text-base gap-0.5 sm:gap-1.5 rounded-lg  fill-neutral-800 px-1 sm:px-2.5 py-1 sm:py-0.5 cursor-pointer';
  protected basicButtonColors =
    'border border-gray-400 hover:bg-neutral-900 hover:fill-neutral-200 hover:text-neutral-200 dark:fill-neutral-200 dark:hover:bg-gray-200 dark:hover:fill-neutral-800 dark:hover:text-neutral-700';

  protected copyEmail() {
    navigator.clipboard.writeText(GlobalConstants.email);
  }
}
