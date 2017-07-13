import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneHider'
})
export class PhoneHiderPipe implements PipeTransform {

  transform(value: string): string {
    return '(xx) xxx-xx-xx';
  }

}
