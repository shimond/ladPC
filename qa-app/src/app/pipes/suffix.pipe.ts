import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suffix'
})
export class SuffixPipe implements PipeTransform {

  transform(value: any, count = 1, char: string = '?'): any {
    return value + char.repeat(count);
  }

}
