import { createFeature, createReducer, on } from '@ngrx/store';
import { changeSuccess, changeTitle } from './test.actions';
import { TestState } from './models/test.state';

export const initialState: TestState = {
  loading: false,
  testModels: { title: '', backgroundColor: '' },
};

/**
 * `createFeature` folds the reducer and the per-property selectors into one object,
 * replacing the separate `test.reducers.ts` + `test.selectors.ts`.
 * It exposes `selectTestState`, `selectLoading`, and `selectTestModels`.
 */
export const testFeature = createFeature({
  name: 'test',
  reducer: createReducer(
    initialState,
    on(changeTitle, (state): TestState => ({ ...state, loading: true })),
    on(changeSuccess, (state, { testModels }): TestState => ({
      ...state,
      loading: false,
      testModels,
    }))
  ),
});
