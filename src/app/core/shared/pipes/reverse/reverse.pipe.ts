import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';

// TODO: This pipe is just to see how isolated tests works in Angular
@Pipe({ name: 'reverse' })
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return value;
    }
    return value.split('').reverse().join('');
  }
}
