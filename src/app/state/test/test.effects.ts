import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HomeService } from '../../pages/home/home.service';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { TestModel } from '@/app/state/test/models/test.model';
import { TestComponentActionsType } from '@/app/state/test/test.actions';

export const loadTestModel$ = createEffect(
  (actions$ = inject(Actions), homeService = inject(HomeService)) => {
    return actions$.pipe(
      ofType(TestComponentActionsType.changeTitle),
      mergeMap(() =>
        homeService.testResponse().pipe(
          map((testModels: TestModel) => ({
            type: TestComponentActionsType.titleChanged,
            testModels,
          })),
          catchError(() => EMPTY)
        )
      )
    );
  },
  { functional: true }
);
