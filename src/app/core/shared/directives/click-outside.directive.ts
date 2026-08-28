import { Directive, ElementRef, output, inject } from '@angular/core';

@Directive({
  selector: '[jcClickOutside]',
  host: {
    '(document:click)': 'onDocumentClick($event.target)',
  },
})
export class ClickOutsideDirective {
  private readonly elementRef = inject(ElementRef);
  readonly clickedOutside = output<void>();

  onDocumentClick(targetElement: EventTarget | null): void {
    const isClickedInside = this.elementRef.nativeElement.contains(targetElement as Node | null);
    if (!isClickedInside) {
      this.clickedOutside.emit();
    }
  }
}
