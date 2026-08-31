import { booleanAttribute, Directive, ElementRef, input, output, inject } from '@angular/core';

@Directive({
  selector: '[jcClickOutside]',
  host: {
    '(document:click)': 'onDocumentClick($event.target)',
  },
})
export class ClickOutsideDirective {
  private readonly elementRef = inject(ElementRef);

  /**
   * When `false`, the document listener is a no-op. Lets a host skip the work while its
   * popup is closed (e.g. `[jcClickOutside]="menuOpen()"`). A bare `jcClickOutside`
   * attribute enables it.
   */
  readonly enabled = input(true, { alias: 'jcClickOutside', transform: booleanAttribute });

  readonly clickedOutside = output<void>();

  onDocumentClick(targetElement: EventTarget | null): void {
    if (!this.enabled()) {
      return;
    }
    const isClickedInside = this.elementRef.nativeElement.contains(targetElement as Node | null);
    if (!isClickedInside) {
      this.clickedOutside.emit();
    }
  }
}
