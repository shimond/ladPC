import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appOnlyHebrew]'
})
export class OnlyHebrewDirective {

  @HostBinding('class.not-valid') isNotValid: boolean;

  @HostListener('keypress', ['$event']) onKeyPress(e: KeyboardEvent) {
    console.log('keypressed!', e.keyCode);
    if (e.keyCode < 1488 || e.keyCode > 1514) {
      e.preventDefault();
      this.isNotValid = true;
      setTimeout(() => {
        this.isNotValid = false;
      }, 500);
    }
  }

  constructor() {

  }

}
