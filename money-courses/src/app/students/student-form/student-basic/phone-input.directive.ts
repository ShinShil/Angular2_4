import { FormControl, NgControl } from '@angular/forms';
import { Directive, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appPhoneInput]'
})
export class PhoneInputDirective implements OnInit {

  el: HTMLInputElement;

  static formatValue(value: string): string {
    if (value) {
      value = value.replace(/\D/g, '');
      value = value.substr(0, 9);
    } else {
      value = '';
    }
    return value;
  }


  static formatInput(input: string): string {
    let res = '';
    input = input.replace(/\D/g, '');
    input = input.substr(0, 9);
    if (input.length > 0) {
      res = '(' + input.substr(0, 2) + (input.length > 2 ? ') ' : '')
        + input.substr(2, 3) + (input.length > 5 ? '-' : '')
        + input.substr(5, 2) + (input.length > 7 ? '-' : '')
        + input.substr(7, 2);
    }
    return res;
  }

  constructor(private elRef: ElementRef, private control: NgControl) {
    this.el = elRef.nativeElement;
  }

  ngOnInit() {

  }

  @HostListener('input') change(e: Event) {
    this.control.control.setValue(PhoneInputDirective.formatInput(this.control.control.value));
  }
}
