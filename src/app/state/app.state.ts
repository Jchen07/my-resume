import { TestState } from './test/models/test.state';
import { ActionReducerMap } from '@ngrx/store';
import { testReducers } from './test/test.reducers';

export interface AppState {
  test: TestState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  test: testReducers,
};
