import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { course } from '../course/course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course: course;

  constructor(private route: ActivatedRoute,public courseService:CourseService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      let couTitle = params.get('title');
      let filteredList = this.courseService.courses.filter(cou => cou.title == couTitle);
      this.course = filteredList[0];
       console.log(course)
      // this.employeeService.fetchEmployee(empId)
      // .subscribe((res: Employee)=> {
      //   console.log(res);
      //   this.employee = res;

//      })
    });

  }

}
