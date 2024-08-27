import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeButtonComponent } from '@/app/core/header/theme-button/theme-button.component';
import { TranslateButtonComponent } from '@/app/core/header/translate-button/translate-button.component';

@Component({
  selector: 'jc-header',
  standalone: true,
  imports: [ThemeButtonComponent, TranslateButtonComponent],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
