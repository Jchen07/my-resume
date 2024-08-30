import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeButtonComponent } from '@/app/core/header/theme-button/theme-button.component';
import { TranslateButtonComponent } from '@/app/core/header/translate-button/translate-button.component';
import { NavbarComponent } from '@/app/core/header/navbar/navbar.component';
import { ClickEnterSpacebarDirective } from '@/app/core/shared/directives/click-enter-spacebar.directive';

@Component({
  selector: 'jc-header',
  standalone: true,
  imports: [
    ThemeButtonComponent,
    TranslateButtonComponent,
    NavbarComponent,
    ClickEnterSpacebarDirective,
  ],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
}
