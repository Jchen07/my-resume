import { ChangeDetectionStrategy, Component, OnInit, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { TimelineComponent } from '@/app/core/shared/components/timeline/timeline.component';
import { TimeLine } from '@/app/core/shared/components/timeline/models/timeline.interface';
import { TagNameEnum } from '@/app/core/shared/components/tag/models/tag-name.enum';

@Component({
  selector: 'jc-education-section',
  imports: [TranslocoDirective, TimelineComponent],
  templateUrl: './education-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationSectionComponent implements OnInit {
  timeLines!: TimeLine[];

  private translocoService = inject(TranslocoService);

  private readonly destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.setTimeLines();
  }

  private setTimeLines(): void {
    this.translocoService
      .selectTranslateObject('home.education')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(educationJson => {
        this.timeLines = [
          {
            time: educationJson.second.time,
            title: educationJson.second.title,
            subtitle: educationJson.second.subtitle,
            icon: 'uoc_logo.webp',
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
