import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boldFirst'
})
export class BoldFirstPipe implements PipeTransform {

  transform(text: string): string {
    const firstLetter = text.charAt(0).bold();
    const theRest = text.slice(1);
    return firstLetter + theRest;
  }

}
