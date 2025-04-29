import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExperienceSectionComponent } from '@/app/core/pages/home/experience-section/experience-section.component';
import { PresentationSectionComponent } from '@/app/core/pages/home/presentation-section/presentation-section.component';
import { EducationSectionComponent } from '@/app/core/pages/home/education-section/education-section.component';

@Component({
  selector: 'jc-home',
  standalone: true,
  imports: [ExperienceSectionComponent, PresentationSectionComponent, EducationSectionComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  // TODO: ngrx test, delete in the future
  // testModel$: Observable<TestModel> = new Observable<TestModel>();
  // loading$: Observable<boolean> = new Observable<boolean>();
  //
  // constructor(private _store: Store<AppState>) {}
  //
  // ngOnInit() {
  //   this.loading$ = this._store.select(selectTestLoading);
  //   this.testModel$ = this._store.select(selectTestModel);
  //   this._store.dispatch(changeTitle());
  // }
}
