import { Directive, output } from '@angular/core';
import { KeysEnum } from '@/app/core/shared/models/keys.enum';

@Directive({
  selector: '[jcClickEnterSpacebar]',
  host: {
    '(click)': 'handleClick()',
    '(keydown)': 'handleKeyDown($event)',
  },
})
export class ClickEnterSpacebarDirective {
  readonly clickedOrEnterOrSpaceBar = output<void>();

  handleClick() {
    this.clickedOrEnterOrSpaceBar.emit();
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === KeysEnum.ENTER || event.key === KeysEnum.SPACE) {
      this.clickedOrEnterOrSpaceBar.emit();
    }
  }
}
