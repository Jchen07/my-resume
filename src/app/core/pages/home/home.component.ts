import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { ButtonsBarComponent } from '@/app/core/pages/home/presentation-section/buttons-bar/buttons-bar.component';
import { ExperienceSectionComponent } from '@/app/core/pages/home/experience-section/experience-section.component';
import { PresentationSectionComponent } from '@/app/core/pages/home/presentation-section/presentation-section.component';

@Component({
  selector: 'jc-home',
  standalone: true,
  imports: [
    TranslocoDirective,
    ButtonsBarComponent,
    ExperienceSectionComponent,
    PresentationSectionComponent,
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
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
