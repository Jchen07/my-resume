import { Component, input } from '@angular/core';
import { TagComponent } from '@/app/core/shared/components/tag/tag.component';
import { TimeLine } from '@/app/core/shared/components/timeline/models/timeline.interface';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'jc-timeline',
  imports: [TagComponent, NgOptimizedImage],
  templateUrl: './timeline.component.html',
})
export class TimelineComponent {
  protected readonly timeLines = input.required<TimeLine[]>();
}
