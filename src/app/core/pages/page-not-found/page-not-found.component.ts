import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'jc-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent {}
