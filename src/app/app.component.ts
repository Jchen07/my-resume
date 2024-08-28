import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@/app/core/header/header.component';
import { FooterComponent } from '@/app/core/footer/footer.component';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'jc-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, TranslocoDirective],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular';
}
