import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { ClickEnterSpacebarDirective } from '@/app/core/shared/directives/click-enter-spacebar.directive';

@Component({
  selector: 'jc-navbar',
  standalone: true,
  imports: [TranslocoDirective, ClickEnterSpacebarDirective],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  // TODO: urls?
  options: { labelkey: string; href?: string }[] = [
    { labelkey: 'experience' },
    { labelkey: 'education' },
    { labelkey: 'projects' },
    { labelkey: 'about-me' },
    { labelkey: 'contact', href: 'mailto:jchen070702@gmail.com' }, // TODO: canviar per un pagina de contacte amb opció de copiar email
  ];
}
