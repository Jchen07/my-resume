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
  protected timeLines!: TimeLine[];

  private readonly translocoService = inject(TranslocoService);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.setTimeLines();
  }

  setTimeLines(): void {
    this.translocoService
      .selectTranslateObject('home.experience')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(experienceJson => {
        this.timeLines = [
          {
            time: experienceJson.second.time,
            tags: [
              TagNameEnum.ANGULAR,
              TagNameEnum.JAVA,
              TagNameEnum.SPRING_FRAMEWORK,
              TagNameEnum.TYPESCRIPT,
              TagNameEnum.ORACLE,
            ],
            title: experienceJson.second.title,
            link: 'https://www.minsait.com/',
            subtitle: 'Indra (Minsait)',
            description: experienceJson.second.description,
          },
          {
            time: experienceJson.first.time,
            tags: [
              TagNameEnum.ANGULAR,
              TagNameEnum.JAVA,
              TagNameEnum.SPRING_FRAMEWORK,
              TagNameEnum.TYPESCRIPT,
              TagNameEnum.POSTGRE_SQL,
            ],
            title: experienceJson.first.title,
            icon: 'dxc_logo.svg',
            link: 'https://dxc.com/',
            subtitle: 'DXC Technology',
            description: experienceJson.first.description,
          },
        ];
      });
  }
}
