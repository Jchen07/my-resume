import { Directive } from '@angular/core';

@Directive({
  selector: 'a[jcOpenLinkConfirmation]',
  standalone: true,
  host: {
    '(click)': 'confirmOpenLink($event)',
  },
})
export class OpenLinkConfirmationDirective {
  confirmOpenLink(event: MouseEvent) {
    // TODO: transloco
    const wantsOpenLink = window.confirm('Do you really want to open this link?');

    if (wantsOpenLink) {
      return;
    }

    event.preventDefault();
  }
}
