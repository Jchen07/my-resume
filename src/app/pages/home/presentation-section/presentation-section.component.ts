import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonsBarComponent } from './buttons-bar/buttons-bar.component';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'jc-presentation-section',
  imports: [ButtonsBarComponent, TranslocoDirective],
  templateUrl: './presentation-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentationSectionComponent {}
