import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {
  transform(items: any[], filterName: string): any[] {
    if (!items || !filterName) {
      return items;
    }
    return items.filter(item => item.name.toLowerCase().includes(filterName.toLowerCase()));
  }
}
