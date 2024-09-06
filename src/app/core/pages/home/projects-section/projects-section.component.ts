import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'jc-projects-section',
  standalone: true,
  imports: [],
  templateUrl: './projects-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSectionComponent {}
