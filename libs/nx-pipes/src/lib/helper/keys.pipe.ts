import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  pure: true,
  name: 'keys'
})
export class KeysPipe implements PipeTransform {
  transform(value: any): { key: string; value: any }[] {
    return Object.keys(value).map(key => {
      return { key, value: value[key] };
    });
  }
}
