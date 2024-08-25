import { ActionReducer, createReducer, on } from '@ngrx/store';
import { changeSuccess, changeTitle } from './test.actions';
import { TestState } from './models/test.state';

export const initialState: TestState = {
  loading: false,
  testModels: { title: '', backgroundColor: '' },
};

export const testReducers: ActionReducer<TestState> = createReducer(
  initialState,
  on(changeTitle, (state: TestState): TestState => {
    return { ...state, loading: true };
  }),
  on(changeSuccess, (state: TestState, { testModels }): TestState => {
    return { ...state, loading: false, testModels };
  })
);
