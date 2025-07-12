import { Directive, ElementRef, HostListener, output, inject } from '@angular/core';

@Directive({
  selector: '[jcClickOutside]',
})
export class ClickOutsideDirective {
  private elementRef = inject(ElementRef);

  clickedOutside = output<void>();

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: HTMLElement): void {
    const isClickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!isClickedInside) {
      this.clickedOutside.emit();
    }
  }
}
