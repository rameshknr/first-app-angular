import { Component, OnInit } from '@angular/core';
import { course } from './course';
import { CourseService } from '../course.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  deleteCourse(index: number){
    console.log(index)
    this.courseService.deleteCourse(index)
    .subscribe(res => console.log(res))
  }
  constructor(public courseService:CourseService) { }
 
  ngOnInit(): void {
    this.courseService.fetchAllCourses()
    .subscribe((res:any)=>
      {
        this.courseService.courses = res;
      })
  }

}
