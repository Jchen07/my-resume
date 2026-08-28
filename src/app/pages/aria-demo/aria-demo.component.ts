import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Listbox, Option } from '@angular/aria/listbox';

interface FrameworkOption {
  id: string;
  name: string;
  disabled?: boolean;
}

@Component({
  selector: 'jc-aria-demo',
  imports: [Listbox, Option],
  templateUrl: './aria-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'mx-auto flex max-w-md flex-col gap-4 px-4 py-12',
  },
})
export class AriaDemoComponent {
  protected readonly frameworks: FrameworkOption[] = [
    { id: 'angular', name: 'Angular' },
    { id: 'react', name: 'React' },
    { id: 'vue', name: 'Vue' },
    { id: 'svelte', name: 'Svelte' },
    { id: 'solid', name: 'Solid', disabled: true },
  ];

  protected readonly selected = signal<string[]>(['angular']);

  protected readonly selectedNames = computed(() =>
    this.frameworks
      .filter(framework => this.selected().includes(framework.id))
      .map(framework => framework.name)
      .join(', ')
  );
}
