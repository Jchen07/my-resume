import { TestState } from './test/models/test.state';
import { ActionReducerMap } from '@ngrx/store';
import { testReducer } from './test/test.reducer';

export interface AppState {
  test: TestState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  test: testReducer,
};
