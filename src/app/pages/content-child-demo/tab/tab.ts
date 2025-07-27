import { Component, contentChild, contentChildren } from '@angular/core';
import { Pane } from '../pane/pane';

@Component({
  selector: 'jc-tab',
  template: `
    <div
      class="mb-4 rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <!-- ContentChild Examples -->
      <div class="mb-4 rounded-md border-l-4 border-blue-500 bg-blue-50 p-3 dark:bg-blue-900/20">
        <h3 class="mb-2 text-sm font-semibold text-blue-800 dark:text-blue-200">
          ContentChild Examples
        </h3>
        <p class="text-sm text-blue-700 dark:text-blue-300">
          First Pane ID: {{ firstPaneId() || 'None' }}
        </p>
        <p class="text-sm text-blue-700 dark:text-blue-300">
          Last Pane ID: {{ lastPaneId() || 'None' }}
        </p>
        <p class="text-sm text-blue-700 dark:text-blue-300">
          Last Pane ID with Descendants: {{ lastPaneWithDescendantsId() || 'None' }}
        </p>
      </div>

      <!-- ContentChildren Examples -->
      <div class="mb-4 rounded-md border-l-4 border-green-500 bg-green-50 p-3 dark:bg-green-900/20">
        <h3 class="mb-2 text-sm font-semibold text-green-800 dark:text-green-200">
          ContentChildren Examples
        </h3>
        <p class="text-sm text-green-700 dark:text-green-300">
          All Top Level Pane IDs: {{ allTopLevelPaneIds() || 'None' }}
        </p>
        <p class="text-sm text-green-700 dark:text-green-300">
          All Nested Pane IDs: {{ allNestedPaneIds() || 'None' }}
        </p>
      </div>

      <!-- Rendered Content -->
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
  // content child by default is descendants: true
  // content children by default is descendants: false

  // ContentChild examples - single components
  firstPane = contentChild<Pane>('firstPane', { descendants: false });
  lastPane = contentChild<Pane>('lastPane', { descendants: false });
  lastPaneWithDescendants = contentChild<Pane>('lastPane', { descendants: true });

  // ContentChildren examples - multiple components
  allTopLevelPanes = contentChildren<Pane>(Pane);
  allNestedPanes = contentChildren<Pane>(Pane, { descendants: true });

  // ContentChild getters
  firstPaneId(): string {
    const pane = this.firstPane();
    return pane ? pane.id() : '';
  }

  lastPaneId(): string {
    const pane = this.lastPane();
    return pane ? pane.id() : '';
  }

  lastPaneWithDescendantsId(): string {
    const pane = this.lastPaneWithDescendants();
    return pane ? pane.id() : '';
  }

  // ContentChildren getters
  allTopLevelPaneIds(): string {
    return this.allTopLevelPanes()
      .map(p => p.id())
      .join(', ');
  }

  allNestedPaneIds(): string {
    return this.allNestedPanes()
      .map(p => p.id())
      .join(', ');
  }
}
