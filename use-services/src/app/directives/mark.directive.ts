import { Directive, ElementRef, Renderer2, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMark]'
})
export class MarkDirective {

  @Input() color = 'red';
  
  @HostBinding('style.color') currentColor: string;

  @HostListener('mouseenter') changeColor(){
    this.currentColor = this.color;
  }

  @HostListener('mouseout')changeColorBack(){
    this.currentColor = 'black';
  }

  constructor(
    // private elementRef: ElementRef, private renderer: Renderer2
    ) {
    console.log('MarkDirective constructor');
    // Bad Practice
    // renderer.listen(elementRef.nativeElement, "mouseenter", () => {
    //   elementRef.nativeElement.style.color = this.color;
    // });

    // renderer.listen(elementRef.nativeElement, "mouseout", () => {
    //   elementRef.nativeElement.style.color = 'black';
    // });

  }

}
