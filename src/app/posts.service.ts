import { Injectable } from '@angular/core';
import { posts } from './posts/posts';
import { HttpClient } from '@angular/common/http';
const baseUrl: string =  'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public numbericArray:Array<number>= [2,3,4,1,5,8,11] 
  public posts: Array<posts> = [ ]
  constructor(public httpClient: HttpClient) { }
  fetchAllPosts(){
    return this.httpClient.get(baseUrl);
  }
}
