import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { course } from '../course/course';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('courses')courses : course;
 // @Input('id')id : number;
  // @Output('userEnrolled')userEnrolled : EventEmitter<number> = new EventEmitter();
  
  // enroll(id){
  //   this.userEnrolled.emit(id);
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
