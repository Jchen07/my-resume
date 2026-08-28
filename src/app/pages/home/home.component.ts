import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';
import { PresentationSectionComponent } from './presentation-section/presentation-section.component';
import { EducationSectionComponent } from './education-section/education-section.component';

@Component({
  selector: 'jc-home',
  imports: [ExperienceSectionComponent, PresentationSectionComponent, EducationSectionComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
