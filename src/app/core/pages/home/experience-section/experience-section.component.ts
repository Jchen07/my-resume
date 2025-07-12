import { ChangeDetectionStrategy, Component, OnInit, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { TimelineComponent } from '@/app/core/shared/components/timeline/timeline.component';
import { TagNameEnum } from '@/app/core/shared/components/tag/models/tag-name.enum';
import { TimeLine } from '@/app/core/shared/components/timeline/models/timeline.interface';

@Component({
  selector: 'jc-experience-section',
  imports: [TranslocoDirective, TimelineComponent],
  templateUrl: './experience-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSectionComponent implements OnInit {
  timeLines!: TimeLine[];

  private translocoService = inject(TranslocoService);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.setTimeLines();
  }

  setTimeLines(): void {
    this.translocoService
      .selectTranslateObject('home.experience.first')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(firstJson => {
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
