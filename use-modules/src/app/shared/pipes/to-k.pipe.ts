import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toK'
})
export class ToKPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value > 1000) {
      return Math.trunc(value / 1000) + 'K';
    }
    return value;
  }

}
