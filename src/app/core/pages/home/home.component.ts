import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeTitle } from '@/app/state/test/test.actions';
import { Observable } from 'rxjs';
import { selectTestLoading, selectTestModel } from '@/app/state/test/test.selectors';
import { AsyncPipe, NgIf } from '@angular/common';
import { AppState } from '@/app/state/app.state';
import { TestModel } from '@/app/state/test/models/test.model';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'jc-home',
  standalone: true,
  imports: [AsyncPipe, NgIf, TranslocoPipe],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  testModel$: Observable<TestModel> = new Observable<TestModel>();
  loading$: Observable<boolean> = new Observable<boolean>();

  constructor(private _store: Store<AppState>) {}

  ngOnInit() {
    this.loading$ = this._store.select(selectTestLoading);
    this.testModel$ = this._store.select(selectTestModel);
    this._store.dispatch(changeTitle());
  }
}
