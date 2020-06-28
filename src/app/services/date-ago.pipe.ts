import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo',
  pure: true
})
export class DateAgoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      const intervals = {
        year: 31536000,
        month: 2592000,
        day: 86400,
        hour: 3600,
      };
      let counter;
      // tslint:disable-next-line: forin
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);
        if (counter > 0) {
          if (counter === 1) {
            return counter + ' ' + i + ' ago';
          } else {
            return counter + ' ' + i + 's ago';
          }
        }
      }
    }
    return value;
  }
}
