import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'jc-navbar',
  standalone: true,
  imports: [TranslocoDirective],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  options: { labelkey: string; href?: string }[] = [
    { labelkey: 'header.navbar.experience' },
    { labelkey: 'header.navbar.projects' },
    { labelkey: 'header.navbar.about-me' },
    { labelkey: 'header.navbar.contact' },
  ];
}
