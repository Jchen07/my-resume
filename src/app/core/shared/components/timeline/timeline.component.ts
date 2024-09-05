import { Component, Input } from '@angular/core';
import { TagComponent } from '@/app/core/shared/components/tag/tag.component';
import { TimeLine } from '@/app/core/shared/components/timeline/models/timeline.interface';

@Component({
  selector: 'jc-timeline',
  standalone: true,
  imports: [TagComponent],
  templateUrl: './timeline.component.html',
})
export class TimelineComponent {
  @Input() timeLines!: TimeLine[];
}
