import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { OpenLinkConfirmationDirective } from '@/app/core/shared/directives/open-link-confirmation.directive';
import { environment } from '@/environments/environment';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'jc-navbar',
  imports: [TranslocoDirective, OpenLinkConfirmationDirective, FaIconComponent],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private static mail = 'jchen070702@gmail.com';

  options: { labelkey: string; href?: string; extern?: boolean }[] = [
    { labelkey: 'home', href: `${environment.baseHref}/home#home` },
    { labelkey: 'experience', href: `${environment.baseHref}/home#experience` },
    { labelkey: 'education', href: `${environment.baseHref}/home#education` },
    // { labelkey: 'projects' },
    // { labelkey: 'about-me' },
    { labelkey: 'contact', href: `mailto:${NavbarComponent.mail}`, extern: true },
  ];

  copyEmailToClipboard() {
    navigator.clipboard.writeText(NavbarComponent.mail);
  }
}
