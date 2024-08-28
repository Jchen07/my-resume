import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'jc-translate-button',
  standalone: true,
  templateUrl: 'translate-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoPipe],
})
export class TranslateButtonComponent {
  changeLanguage(): void {
    // TODO: install and set multilanguage feature
  }
}
