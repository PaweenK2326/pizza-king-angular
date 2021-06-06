import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addPlus'
})
export class AddPlusPipe implements PipeTransform {

  transform(text: string): string {
    return '+ ' + text;
  }

}
