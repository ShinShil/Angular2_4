import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mailHider'
})
export class MailHiderPipe implements PipeTransform {

  transform(value: any, mask: string): any {
    let res = '';
    if (!mask) {
      mask = 'x';
    }
    for (const val of value) {
      if (val !== '@' && val !== '.') {
        res = res.concat(mask);
      }else {
        res = res.concat(val);
      }
    }
    return res;
  }

}
