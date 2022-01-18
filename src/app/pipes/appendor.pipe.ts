import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendor'
})
export class AppendorPipe implements PipeTransform {

  transform(input: string, position: string, txtToAppend: string, ...args: unknown[]): unknown {
    return position === 'pre' ? txtToAppend + input : input + txtToAppend;
  }

}