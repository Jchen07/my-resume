import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { TimelineComponent } from '@/app/core/shared/components/timeline/timeline.component';
import { TimeLine } from '@/app/core/shared/components/timeline/models/timeline.interface';
import { PROFILE } from '@/app/core/shared/data/profile.data';

@Component({
  selector: 'jc-experience-section',
  imports: [TranslocoDirective, TimelineComponent],
  templateUrl: './experience-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSectionComponent {
  private readonly translocoService = inject(TranslocoService);

  private readonly experience = toSignal(
    this.translocoService.selectTranslateObject('home.experience')
  );

  protected readonly timeLines = computed<TimeLine[]>(() => {
    const experienceJson = this.experience();
    if (!experienceJson) {
      return [];
    }

    // Structured facts come from PROFILE; localized prose comes from the matching entry in
    // home.experience.roles[] (same reverse-chronological order).
    const roles = experienceJson.roles as { time: string; title: string; description: string }[];

    return PROFILE.experience.map((fact, i) => ({
      time: roles[i].time,
      tags: fact.tags,
      title: roles[i].title,
      icon: fact.logo,
      link: fact.companyUrl,
      subtitle: fact.company,
      description: roles[i].description,
    }));
  });
}
