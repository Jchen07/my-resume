import { createAction, props } from '@ngrx/store';
import { TestModel } from './models/test.model';

export const changeTitle = createAction('[Test Component] change title');
export const changeSuccess = createAction(
  '[Test Component] change success',
  props<{ testModels: TestModel }>()
);
