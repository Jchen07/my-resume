import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { TimelineComponent } from '@/app/core/shared/components/timeline/timeline.component';
import { TagNameEnum } from '@/app/core/shared/components/tag/models/tag-name.enum';
import { TimeLine } from '@/app/core/shared/components/timeline/models/timeline.interface';

@Component({
  selector: 'jc-experience-section',
  standalone: true,
  imports: [TranslocoDirective, TimelineComponent],
  templateUrl: './experience-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSectionComponent implements OnInit {
  timeLines!: TimeLine[];

  constructor(private _translocoService: TranslocoService) {}

  ngOnInit() {
    this.setTimeLines();
  }

  setTimeLines(): void {
    this._translocoService.selectTranslateObject('home.experience.first').subscribe(firstJson => {
      this.timeLines = [
        {
          time: firstJson.time,
          tags: [
            TagNameEnum.ANGULAR,
            TagNameEnum.JAVA,
            TagNameEnum.SPRING_FRAMEWORK,
            TagNameEnum.TYPESCRIPT,
            TagNameEnum.POSTGRE_SQL,
          ],
          title: firstJson.title,
          icon: 'dxc_logo.svg',
          subtitle: 'DXC Technology',
          description: firstJson.description,
        },
      ];
    });
  }
}
