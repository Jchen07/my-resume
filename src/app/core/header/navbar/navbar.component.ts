import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { OpenLinkConfirmationDirective } from '@/app/core/shared/directives/open-link-confirmation.directive';
import { environment } from '@/environments/environment';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { GlobalConstants } from '@/app/core/shared/constants/global.constants';

interface NavbarOption {
  labelkey: string;
  href?: string;
  extern?: boolean;
}

@Component({
  selector: 'jc-navbar',
  imports: [TranslocoDirective, OpenLinkConfirmationDirective, FaIconComponent],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  options: NavbarOption[] = [
    { labelkey: 'home', href: `${environment.baseHref}/home#home` },
    { labelkey: 'experience', href: `${environment.baseHref}/home#experience` },
    { labelkey: 'education', href: `${environment.baseHref}/home#education` },
    // { labelkey: 'projects' },
    // { labelkey: 'about-me' },
    { labelkey: 'contact', href: `mailto:${GlobalConstants.email}`, extern: true },
  ];

  copyEmailToClipboard() {
    navigator.clipboard.writeText(GlobalConstants.email);
  }
}
