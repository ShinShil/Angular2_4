import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextHider]'
})
export class TextHiderDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
   
  }

}
