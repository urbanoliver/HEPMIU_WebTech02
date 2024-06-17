import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe<T> implements PipeTransform {

  transform(value: T, phrase: string): unknown {

    if(!Array.isArray(value) || !phrase){
      return value;
    }

    phrase = phrase.toLowerCase();

    return value.filter( el => Object.values(el)
    .join(' ')
    .toLowerCase()
    .includes(phrase)
    );
    
  }
}
