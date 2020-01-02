import { Directive, ElementRef  } from '@angular/core';

@Directive({
  selector: '[appTestdirective]'
})
export class TestdirectiveDirective {

  constructor(private eleRef: ElementRef) { 
    eleRef.nativeElement.style.background = 'red';
  }

}
