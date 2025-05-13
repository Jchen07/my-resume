import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { OpenLinkConfirmationDirective } from '@/app/core/shared/directives/open-link-confirmation.directive';

@Component({
  selector: 'jc-navbar',
  standalone: true,
  imports: [TranslocoDirective, OpenLinkConfirmationDirective],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  // TODO: urls?
  options: { labelkey: string; href?: string; extern?: boolean }[] = [
    { labelkey: 'experience' },
    { labelkey: 'education' },
    { labelkey: 'projects' },
    { labelkey: 'about-me' },
    { labelkey: 'contact', href: 'mailto:jchen070702@gmail.com', extern: true }, // TODO: canviar per un pagina de contacte amb opció de copiar email
  ];
}
