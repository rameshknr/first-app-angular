import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(public httpClient: HttpClient,public postsService:PostsService) { }

  ngOnInit(): void {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts')    
    .subscribe((res:any)=>
      {
        console.log(res)
        this.postsService.posts = res;

      })
  }

}
