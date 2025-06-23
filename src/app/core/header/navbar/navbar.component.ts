import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { OpenLinkConfirmationDirective } from '@/app/core/shared/directives/open-link-confirmation.directive';
import { environment } from '@/environments/environment';

@Component({
  selector: 'jc-navbar',
  standalone: true,
  imports: [TranslocoDirective, OpenLinkConfirmationDirective],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  options: { labelkey: string; href?: string; extern?: boolean }[] = [
    { labelkey: 'home', href: `${environment.baseHref}/home#home` },
    { labelkey: 'experience', href: `${environment.baseHref}/home#experience` },
    { labelkey: 'education', href: `${environment.baseHref}/home#education` },
    // { labelkey: 'projects' },
    // { labelkey: 'about-me' },
    { labelkey: 'contact', href: 'mailto:jchen070702@gmail.com', extern: true }, // TODO: canviar per un pagina de contacte amb opció de copiar email
  ];
}
