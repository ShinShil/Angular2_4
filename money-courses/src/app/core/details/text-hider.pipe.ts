import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'textHider'
})

export class TextHiderPipe implements PipeTransform {
    transform(value: string, ...args: any[]): any {
        // const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        // const arr = value.split('');
        // let res = '';
        // for (const e of arr) {
        //     if (e !== ' ') {
        //         res += possible.charAt(Math.floor(Math.random() * possible.length));
        //     } else {
        //         res += ' ';
        //     }
        // }
        return value;
    }
}