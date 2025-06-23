import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OpenLinkConfirmationDirective } from '@/app/core/shared/directives/open-link-confirmation.directive';

@Component({
  selector: 'jc-footer',
  standalone: true,
  imports: [OpenLinkConfirmationDirective],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
