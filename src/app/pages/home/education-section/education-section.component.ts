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

    // Structured facts come from PROFILE; localized prose (incl. the subtitle) comes from the
    // matching entry in home.education.entries[] (same reverse-chronological order).
    const entries = educationJson.entries as {
      time: string;
      title: string;
      subtitle: string;
      description: string;
    }[];

    return PROFILE.education.map((fact, i) => ({
      time: entries[i].time,
      tags: fact.tags,
      title: entries[i].title,
      subtitle: entries[i].subtitle,
      icon: fact.logo,
      link: fact.institutionUrl,
      description: entries[i].description,
    }));
  });
}
