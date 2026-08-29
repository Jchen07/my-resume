import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { TimelineComponent } from '@/app/core/shared/components/timeline/timeline.component';
import { TimeLine } from '@/app/core/shared/components/timeline/models/timeline.interface';
import { PROFILE } from '@/app/core/shared/data/profile.data';

@Component({
  selector: 'jc-education-section',
  imports: [TranslocoDirective, TimelineComponent],
  templateUrl: './education-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationSectionComponent {
  private readonly translocoService = inject(TranslocoService);

  private readonly education = toSignal(
    this.translocoService.selectTranslateObject('home.education')
  );

  protected readonly timeLines = computed<TimeLine[]>(() => {
    const educationJson = this.education();
    if (!educationJson) {
      return [];
    }

    // Structured facts come from PROFILE; localized prose (incl. the subtitle) stays in the
    // i18n JSON, keyed first (oldest) / second (most recent) as before.
    const proseBySlot = { uoc: educationJson.second, 'grado-daw': educationJson.first } as const;

    return PROFILE.education.map(fact => ({
      time: proseBySlot[fact.id].time,
      tags: fact.tags,
      title: proseBySlot[fact.id].title,
      subtitle: proseBySlot[fact.id].subtitle,
      icon: fact.logo,
      link: fact.institutionUrl,
      description: proseBySlot[fact.id].description,
    }));
  });
}
