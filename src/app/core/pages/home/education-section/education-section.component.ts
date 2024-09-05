import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { TimelineComponent } from '@/app/core/shared/components/timeline/timeline.component';
import { TimeLine } from '@/app/core/shared/components/timeline/models/timeline.interface';
import { TagNameEnum } from '@/app/core/shared/components/tag/models/tag-name.enum';

@Component({
  selector: 'jc-education-section',
  standalone: true,
  imports: [TranslocoDirective, TimelineComponent],
  templateUrl: './education-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationSectionComponent {
  timeLines!: TimeLine[];

  constructor(private _translocoService: TranslocoService) {
    this.setTimeLines();
  }

  private setTimeLines() {
    this._translocoService.selectTranslateObject('home.education').subscribe(educationJson => {
      this.timeLines = [
        {
          time: educationJson.second.time,
          title: educationJson.second.title,
          subtitle: educationJson.second.subtitle,
          description: educationJson.second.description,
        },
        {
          time: educationJson.first.time,
          tags: [
            TagNameEnum.VUE,
            TagNameEnum.PHP,
            TagNameEnum.CSHARP,
            TagNameEnum.JAVASCRIPT,
            TagNameEnum.MARIA_DB,
          ],
          title: educationJson.first.title,
          subtitle: educationJson.first.subtitle,
          description: educationJson.first.description,
        },
      ];
    });
  }
}
