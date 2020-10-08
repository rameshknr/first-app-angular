import { Injectable } from '@angular/core';
import { posts } from './posts/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public posts: Array<posts> = [ ]
  constructor() { }
}
