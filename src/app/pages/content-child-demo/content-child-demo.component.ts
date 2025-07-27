import { Component, signal } from '@angular/core';
import { Pane } from './pane/pane';
import { Tab } from './tab/tab';

@Component({
  selector: 'jc-content-child-demo',
  templateUrl: './content-child-demo.component.html',
  imports: [Tab, Pane],
})
export class ContentChildDemo {
  shouldShow = signal(false);

  show() {
    this.shouldShow.set(true);
  }
}
