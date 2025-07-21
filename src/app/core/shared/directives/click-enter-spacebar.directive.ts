import { Directive, HostListener, output } from '@angular/core';
import { KeysEnum } from '@/app/core/shared/models/keys.enum';

@Directive({
  selector: '[jcClickEnterSpacebar]',
})
export class ClickEnterSpacebarDirective {
  readonly clickedOrEnterOrSpaceBar = output<void>();

  @HostListener('click', ['$event'])
  handleClick() {
    this.clickedOrEnterOrSpaceBar.emit();
  }

  @HostListener('keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === KeysEnum.ENTER || event.key === KeysEnum.SPACE) {
      this.clickedOrEnterOrSpaceBar.emit();
    }
  }
}
