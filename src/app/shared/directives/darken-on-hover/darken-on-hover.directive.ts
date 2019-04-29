import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[wpDarkenOnHover]'
})
export class DarkenOnHoverDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseover')
  darkenOn(){
    console.log("darkenOn");
  }

  @HostListener('mouseleave')
  darkenOff(){
    console.log("darkenOff");
  }
}
