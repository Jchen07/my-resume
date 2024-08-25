import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';
import { TestState } from './models/test.state';

export const selectTest = (state: AppState) => state.test;

export const selectTestModel = createSelector(selectTest, (state: TestState) => state.testModels);

export const selectTestLoading = createSelector(selectTest, (state: TestState) => state.loading);
