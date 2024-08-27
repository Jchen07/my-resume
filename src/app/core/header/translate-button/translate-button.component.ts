import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'jc-translate-button',
  standalone: true,
  templateUrl: 'translate-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslateButtonComponent {
  changeLanguage(): void {
    // TODO: install and set multilanguage feature
  }
}
