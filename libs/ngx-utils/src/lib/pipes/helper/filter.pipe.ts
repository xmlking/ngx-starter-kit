import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(itemList: any[], filterTerm?: string, filterBy?: any) {
    if (!filterBy) {
      return itemList;
    }
    if (filterTerm === '') {
      return itemList;
    }
    filterBy = filterBy.toString();
    return itemList.filter((item: any) => {
      if (item[filterBy]) {
        return item[filterBy]
          .toString()
          .toLowerCase()
          .includes(filterTerm.toLowerCase());
      }
    });
  }
}
