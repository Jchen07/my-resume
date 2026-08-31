import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { Tab } from './tab/tab';
import { Pane } from './pane/pane';

@Component({
  selector: 'jc-content-child-demo',
  templateUrl: './content-child-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Tab, Pane],
})
export class ContentChildDemo {
  shouldShow = signal(false);

  show() {
    this.shouldShow.set(true);
  }
}
