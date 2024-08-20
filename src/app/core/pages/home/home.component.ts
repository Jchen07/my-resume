import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeSuccess, changeTitle } from '../../../state/test/test.actions';
import { Observable } from 'rxjs';
import { selectTestLoading, selectTestModel } from '../../../state/test/test.selector';
import { AsyncPipe, NgIf } from '@angular/common';
import { AppState } from '../../../state/app.state';
import { HomeService } from './home.service';
import { TestModel } from '../../../state/test/models/test.model';

@Component({
  selector: 'jc-home',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  providers: [HomeService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  testModel$: Observable<TestModel> = new Observable<TestModel>();
  loading$: Observable<boolean> = new Observable<boolean>();

  constructor(
    private _store: Store<AppState>,
    private _homeService: HomeService
  ) {}

  ngOnInit() {
    this.loading$ = this._store.select(selectTestLoading);
    this.testModel$ = this._store.select(selectTestModel);
    this._store.dispatch(changeTitle());
    this._homeService.testResponse().subscribe(res => {
      this._store.dispatch(changeSuccess({ testModels: res }));
    });
  }
}
