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
