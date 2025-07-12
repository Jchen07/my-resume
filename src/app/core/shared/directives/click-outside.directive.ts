import { Directive, ElementRef, HostListener, output } from '@angular/core';

@Directive({
  selector: '[jcClickOutside]',
})
export class ClickOutsideDirective {
  clickedOutside = output<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: HTMLElement): void {
    const isClickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!isClickedInside) {
      this.clickedOutside.emit();
    }
  }
}
