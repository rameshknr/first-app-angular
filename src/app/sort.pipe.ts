import { Pipe, PipeTransform } from '@angular/core';
import { posts } from './posts/posts';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<posts>, ...args: number[]): Array<posts> {
    return value.sort((a,b)=> a.title.localeCompare(b.title));
  }

}
