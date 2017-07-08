import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string, order: string): any {
    if (value.length > 0) {
      return value.sort((s1: { propName: string }, s2: { propName: string }) => {
        return order === 'downup' ? s1[propName] > s2[propName] : s1[propName] < s2[propName];
      })
    }
    return value;
  }

}
