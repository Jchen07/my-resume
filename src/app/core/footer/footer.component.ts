import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'jc-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
