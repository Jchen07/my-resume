import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { KeysEnum } from '@/app/core/shared/models/keys.enum';

@Directive({
  standalone: true,
  selector: '[jcClickEnterSpacebar]',
})
export class ClickEnterSpacebarDirective {
  @Output() clickedOrEnterOrSpaceBar = new EventEmitter();

  @HostListener('click', ['$event'])
  handleClick(event: KeyboardEvent) {
    this.clickedOrEnterOrSpaceBar.emit(event);
  }

  @HostListener('keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === KeysEnum.ENTER || event.key === KeysEnum.SPACE) {
      this.clickedOrEnterOrSpaceBar.emit(event);
    }
  }
}
