import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByAge'
})
export class SortByAgePipe implements PipeTransform {
  transform(value: any[], order: string = 'asc'): any[] {
    if (!value || value.length <= 1) return value;

    return value.sort((a, b) => {
      if (order === 'asc') {
        return a.age - b.age;
      } else {
        return b.age - a.age;
      }
    });
  }
}
