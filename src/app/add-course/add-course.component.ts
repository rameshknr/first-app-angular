import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  addCourse(title: string, summary: string){
    //this.courseService.courses.push({title,summary});
    this.courseService.addCourse({title, summary})
    .subscribe(res=>console.log(res))
  }
  constructor(public courseService:CourseService) { }

  ngOnInit(): void {
  }

}
