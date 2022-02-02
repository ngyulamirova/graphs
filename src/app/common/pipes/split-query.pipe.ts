import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitQuery'
})
export class SplitQueryPipe implements PipeTransform {

  transform(value: string): string {
    return value?.split('?')[0];
  }

}
