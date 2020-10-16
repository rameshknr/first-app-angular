import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService]
})
export class PostsComponent implements OnInit {
  
  constructor(public httpClient: HttpClient,public postsService:PostsService) { }

  ngOnInit(): void {
    this.postsService.fetchAllPosts()
    .subscribe((res:any)=>
      {
        this.postsService.posts = res;
      })

  // var numbericArray:Array<number>= [2,3,4,1,5,8,11] 
  // var sortedArray:Array<number> = numbericArray.sort((a,b)=> a-b)
  // var sortedArrayDesc:Array<number> = numbericArray.sort((a,b)=> b-a)

  // console.log('sortedArrayDesc :    ' + sortedArrayDesc)
  // console.log('sortedArray :    ' + sortedArray)
    
  }

}
