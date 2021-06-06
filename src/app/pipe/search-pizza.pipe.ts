import { Pipe, PipeTransform } from '@angular/core';
import { Pizza } from '../data/schema/pizza'

@Pipe({
  name: 'searchPizza'
})
export class SearchPizzaPipe implements PipeTransform {

  transform(value: Pizza[], search: string): any {
    if(!search){
      return value;
    }
    return value.filter(v => v.name.toLowerCase().indexOf(search.toLowerCase()) > -1);
  }

}
