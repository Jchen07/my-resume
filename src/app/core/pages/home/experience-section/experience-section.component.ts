import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { TimelineComponent } from '@/app/core/pages/home/experience-section/timeline/timeline.component';

@Component({
  selector: 'jc-experience-section',
  standalone: true,
  imports: [TranslocoDirective, TimelineComponent],
  templateUrl: './experience-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSectionComponent {}
