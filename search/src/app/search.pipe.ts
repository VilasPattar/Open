import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items:any[], value:string): any[] {
    if(!value){
      return items;
    }

    if(!items){
      return [];
    }

    value=value.toLowerCase();

    return items.filter(item=>{return item.name.toLowerCase().includes(value)});   
  }

}
