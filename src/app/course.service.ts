import { Injectable } from '@angular/core';
import { course } from './course/course';
import { HttpClient } from '@angular/common/http';

const baseUrl: string = 'http://localhost:3000/courses/'

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  public courses: Array<course> = [ ]
  constructor( public httpClient: HttpClient) { }
  addCourse(course: course){
    return this.httpClient.post(baseUrl,course )
  }

  deleteCourse(index: number){
    return this.httpClient.delete(baseUrl + index)
  }

  fetchAllCourses(){
    return this.httpClient.get(baseUrl);
  }
}
