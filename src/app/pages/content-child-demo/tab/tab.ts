import { Component, ContentChildren, QueryList } from '@angular/core';
import { Pane } from '../pane/pane';

@Component({
  selector: 'jc-tab',
  template: `
    <div
      class="mb-4 rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div class="mb-4 rounded-md border-l-4 border-blue-500 bg-blue-50 p-3 dark:bg-blue-900/20">
        <h3 class="mb-2 text-sm font-semibold text-blue-800 dark:text-blue-200">Top Level Panes</h3>
        <p class="text-sm text-blue-700 dark:text-blue-300">
          {{ serializedPanes || 'No panes found' }}
        </p>
      </div>
      <div class="rounded-md border-l-4 border-green-500 bg-green-50 p-3 dark:bg-green-900/20">
        <h3 class="mb-2 text-sm font-semibold text-green-800 dark:text-green-200">
          Nested Panes (All Levels)
        </h3>
        <p class="text-sm text-green-700 dark:text-green-300">
          {{ serializedNestedPanes || 'No nested panes found' }}
        </p>
      </div>

      <!-- Render the actual pane content -->
      <div class="mt-6">
        <h3 class="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">
          Rendered Content:
        </h3>
        <div class="space-y-4">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
})
export class Tab {
  @ContentChildren(Pane) topLevelPanes!: QueryList<Pane>;
  @ContentChildren(Pane, { descendants: true }) arbitraryNestedPanes!: QueryList<Pane>;

  get serializedPanes(): string {
    return this.topLevelPanes ? this.topLevelPanes.map(p => p.id()).join(', ') : '';
  }
  get serializedNestedPanes(): string {
    return this.arbitraryNestedPanes ? this.arbitraryNestedPanes.map(p => p.id()).join(', ') : '';
  }
}
