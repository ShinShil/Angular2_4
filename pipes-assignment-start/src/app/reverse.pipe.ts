import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class Reverse implements PipeTransform {

  transform(value: string, args ?: any): any {
    if (value.length > 0) {
      return value.split('').reverse().join('');
    }
    return value;
  }

}