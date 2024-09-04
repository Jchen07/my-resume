import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonsBarComponent } from '@/app/core/pages/home/presentation-section/buttons-bar/buttons-bar.component';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'jc-presentation-section',
  standalone: true,
  imports: [ButtonsBarComponent, TranslocoDirective],
  templateUrl: './presentation-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentationSectionComponent {}
