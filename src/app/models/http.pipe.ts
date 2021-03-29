import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'http' })
export class HttpsPipe implements PipeTransform {
  transform(value: boolean): string {
    return value? 'HTTPS' : 'HTTP';
  }
}
