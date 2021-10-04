import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDistance',
})
export class TimeDistancePipe implements PipeTransform {
  transform(value: Date, ...args: unknown[]): unknown {
    const startDay = new Date(value);
    const endDay = new Date();
    let millisBetween = startDay.getTime() - endDay.getTime();
    let days = millisBetween / (1000 * 3600 * 24);
    let day = Math.round(Math.abs(days));
    let year = Math.round(day / 365);
    let hour = Math.round(day * 24);
    let minute = Math.round(hour * 60);
    let second = minute * 60;
    if (second < 60) {
      return second + ' giây trước';
    } else if (minute < 60) {
      return minute + ' phút trước';
    } else if (hour < 24) {
      return hour + ' giờ trước';
    } else if (day < 365) {
      return day + ' ngày trước';
    } else {
      return year + ' năm trước';
    }
  }
}
