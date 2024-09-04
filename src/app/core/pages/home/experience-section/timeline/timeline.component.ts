import { Component } from '@angular/core';
import { TagComponent } from '@/app/core/shared/components/tag/tag.component';
import { TagNameEnum } from '@/app/core/shared/components/tag/models/tag-name.enum';

@Component({
  selector: 'jc-timeline',
  standalone: true,
  imports: [TagComponent],
  templateUrl: './timeline.component.html',
})
export class TimelineComponent {
  protected readonly TAG_NAME = TagNameEnum;
}
