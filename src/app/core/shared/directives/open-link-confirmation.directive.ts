import { Directive, input } from '@angular/core';
import { translate } from '@jsverse/transloco';

@Directive({
  selector: 'a[jcOpenLinkConfirmation]',
  host: {
    '(click)': 'confirmOpenLink($event)',
  },
})
export class OpenLinkConfirmationDirective {
  readonly downloadMessage = input<boolean>(false);

  confirmOpenLink(event: MouseEvent) {
    const adress: string = (event.currentTarget as HTMLAnchorElement).href;

    let wantsOpenLink;
    if (this.downloadMessage()) {
      wantsOpenLink = window.confirm(translate('open-link-confirmation.download-message'));
    } else {
      wantsOpenLink = window.confirm(
        translate('open-link-confirmation.message') + '\n' + (adress ?? '')
      );
    }

    if (wantsOpenLink) {
      return;
    }

    event.preventDefault();
  }
}
