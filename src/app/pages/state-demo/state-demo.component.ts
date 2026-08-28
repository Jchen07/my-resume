import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeTitle } from '@/app/state/test/test.actions';
import { testFeature } from '@/app/state/test/test.feature';
import { TestSignalStore } from '@/app/state/test-signal/test-signal.store';

@Component({
  selector: 'jc-state-demo',
  imports: [],
  templateUrl: './state-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'mx-auto flex max-w-3xl flex-col gap-8 px-4 py-12',
  },
})
export class StateDemoComponent {
  // --- Classic NgRx Store (actions -> reducer -> selectors, via createFeature) ---
  private readonly store = inject(Store);
  protected readonly classicLoading = this.store.selectSignal(testFeature.selectLoading);
  protected readonly classicModel = this.store.selectSignal(testFeature.selectTestModels);

  // --- @ngrx/signals SignalStore (state + computed + methods) ---
  protected readonly signalStore = inject(TestSignalStore);

  protected loadClassic(): void {
    this.store.dispatch(changeTitle());
  }

  protected loadSignal(): void {
    this.signalStore.loadTitle();
  }
}
