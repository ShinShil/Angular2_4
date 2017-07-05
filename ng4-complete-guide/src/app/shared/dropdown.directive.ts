import { Directive, ElementRef, HostBinding, HostListener, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  dropdownClass = 'open';
  added = false;
  parent: any;
  @HostListener('click') mouseclick() {
    this.added ?
      this.renderer.removeClass(this.parent, this.dropdownClass) :
      this.renderer.addClass(this.parent, this.dropdownClass);
    this.added = !this.added;
  }
  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  }
  ngOnInit(): void {
     this.parent = this.renderer.parentNode(this.elRef.nativeElement);
  }

}
