import { Component, Input } from '@angular/core';
import { TagComponent } from '@/app/core/shared/components/tag/tag.component';
import { TimeLine } from '@/app/core/shared/components/timeline/models/timeline.interface';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'jc-timeline',
  standalone: true,
  imports: [TagComponent, NgOptimizedImage],
  templateUrl: './timeline.component.html',
})
export class TimelineComponent {
  @Input() timeLines!: TimeLine[];
}
