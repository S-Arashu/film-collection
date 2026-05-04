import { Directive, ElementRef, inject, afterNextRender } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
  standalone: true,
})
export class AutofocusDirective {
  private el = inject<ElementRef<HTMLInputElement>>(ElementRef);

  constructor() {
    afterNextRender(() => {
      this.el.nativeElement.focus();
    });
  }
}
