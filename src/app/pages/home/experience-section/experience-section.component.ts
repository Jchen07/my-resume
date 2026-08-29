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

    // Structured facts come from PROFILE; localized prose stays in the i18n JSON, keyed
    // first (oldest) / second (most recent) as before.
    const proseBySlot = { indra: experienceJson.second, dxc: experienceJson.first } as const;

    return PROFILE.experience.map(fact => ({
      time: proseBySlot[fact.id].time,
      tags: fact.tags,
      title: proseBySlot[fact.id].title,
      icon: fact.logo,
      link: fact.companyUrl,
      subtitle: fact.company,
      description: proseBySlot[fact.id].description,
    }));
  });
}
