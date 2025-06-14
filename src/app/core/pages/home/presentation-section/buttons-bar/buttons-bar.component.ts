import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { OpenLinkConfirmationDirective } from '@/app/core/shared/directives/open-link-confirmation.directive';

@Component({
  selector: 'jc-buttons-bar',
  standalone: true,
  imports: [TranslocoDirective, OpenLinkConfirmationDirective],
  templateUrl: './buttons-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsBarComponent {
  // tailwind dark: doesn't work with @apply
  buttonStyles =
    'flex items-center text-sm sm:text-base gap-0.5 sm:gap-1.5 rounded-lg border border-gray-400 fill-neutral-800 px-1 sm:px-2.5 py-1 sm:py-0.5 hover:bg-neutral-900 hover:fill-neutral-200 hover:text-neutral-200 dark:fill-neutral-200 dark:hover:bg-gray-200 dark:hover:fill-neutral-800 dark:hover:text-neutral-700';
}
