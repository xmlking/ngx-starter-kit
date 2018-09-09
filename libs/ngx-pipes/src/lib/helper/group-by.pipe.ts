import { Pipe, PipeTransform } from '@angular/core';

/**
 * <ul>
 *   <li *ngFor="let object of myArray | groupBy:'color'"></li>
 * </ul>
 */
@Pipe({ name: 'groupBy' })
export class GroupByPipe<T> implements PipeTransform {
  transform(collection: Array<T>, property: string): Array<{ key: string; value: [T] }> {
    // prevents the application from breaking if the array of objects doesn't exist yet
    if (!collection) {
      return null;
    }

    const groupedCollection = collection.reduce((previous, current) => {
      if (!previous[current[property]]) {
        previous[current[property]] = [current];
      } else {
        previous[current[property]].push(current);
      }

      return previous;
    }, {});

    // this will return an array of objects, each object containing a group of objects
    return Object.keys(groupedCollection).map(key => ({
      key,
      value: groupedCollection[key],
    }));
  }
}
