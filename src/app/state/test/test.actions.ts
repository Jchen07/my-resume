import { createAction, props } from '@ngrx/store';
import { TestModel } from './models/test.model';

export class TestComponentActionsType {
  static changeTitle = '[Test Component] changing title';
  static titleChanged = '[Test Component] change success';
}

export const changeTitle = createAction(TestComponentActionsType.changeTitle);
export const changeSuccess = createAction(
  TestComponentActionsType.titleChanged,
  props<{ testModels: TestModel }>()
);
