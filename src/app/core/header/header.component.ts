import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeButtonComponent } from '@/app/core/header/theme-button/theme-button.component';
import { TranslateButtonComponent } from '@/app/core/header/translate-button/translate-button.component';
import { NavbarComponent } from '@/app/core/header/navbar/navbar.component';

@Component({
  selector: 'jc-header',
  imports: [ThemeButtonComponent, TranslateButtonComponent, NavbarComponent],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
