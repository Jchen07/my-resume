import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { HomeService } from '@/app/pages/home/home.service';
import { TestState } from '@/app/state/test/models/test.state';

const initialState: TestState = {
  loading: false,
  testModels: { title: '', backgroundColor: '' },
};

/**
 * The same `test` state as the classic NgRx feature, expressed as a `@ngrx/signals`
 * SignalStore — state + computed + methods in one place, no actions/reducers/selectors.
 */
export const TestSignalStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ testModels }) => ({
    title: computed(() => testModels().title),
  })),
  withMethods((store, homeService = inject(HomeService)) => ({
    loadTitle: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loading: true })),
        switchMap(() =>
          homeService
            .testResponse()
            .pipe(tap(testModels => patchState(store, { testModels, loading: false })))
        )
      )
    ),
    reset(): void {
      patchState(store, initialState);
    },
  }))
);
