import { Component, input } from '@angular/core';

@Component({
  selector: 'jc-pane',
  standalone: true,
  template: `
    <div class="my-2 rounded-lg border-2 border-gray-200 bg-gray-50 p-4">
      <h3 class="mb-2 text-lg font-semibold text-gray-700">Pane Component</h3>
      <p class="mb-3 text-sm text-gray-500">This is pane with ID: {{ id() }}</p>
      <div class="border-t border-gray-200 pt-3">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class Pane {
  id = input.required<string>();
}
