import { Directive } from '@angular/core';
import { translate } from '@jsverse/transloco';

@Directive({
  selector: 'a[jcOpenLinkConfirmation]',
  standalone: true,
  host: {
    '(click)': 'confirmOpenLink($event)',
  },
})
export class OpenLinkConfirmationDirective {
  confirmOpenLink(event: MouseEvent) {
    const wantsOpenLink = window.confirm(translate('open-link-confirmation.message'));

    if (wantsOpenLink) {
      return;
    }

    event.preventDefault();
  }
}
