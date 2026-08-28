import { Directive, ElementRef, HostListener, output, inject } from '@angular/core';

@Directive({
  selector: '[jcClickOutside]',
})
export class ClickOutsideDirective {
  private readonly elementRef = inject(ElementRef);
  readonly clickedOutside = output<void>();

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: EventTarget | null): void {
    const isClickedInside = this.elementRef.nativeElement.contains(targetElement as Node | null);
    if (!isClickedInside) {
      this.clickedOutside.emit();
    }
  }
}
