import { Component, input } from '@angular/core';
import { TagComponent } from '@/app/core/shared/components/tag/tag.component';
import { TimeLine } from '@/app/core/shared/components/timeline/models/timeline.interface';
import { NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import { OpenLinkConfirmationDirective } from '../../directives/open-link-confirmation.directive';

@Component({
  selector: 'jc-timeline',
  imports: [TagComponent, NgOptimizedImage, NgTemplateOutlet, OpenLinkConfirmationDirective],
  templateUrl: './timeline.component.html',
})
export class TimelineComponent {
  readonly timeLines = input.required<TimeLine[]>();
}
