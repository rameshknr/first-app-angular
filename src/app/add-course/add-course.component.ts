import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';

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

    this.router.navigate(['']);

  }
  constructor(public courseService:CourseService, private router: Router) { }

  ngOnInit(): void {
  }

}
