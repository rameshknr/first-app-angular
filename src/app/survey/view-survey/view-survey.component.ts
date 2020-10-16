import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-survey',
  templateUrl: './view-survey.component.html',
  styleUrls: ['./view-survey.component.css']
})
export class ViewSurveyComponent implements OnInit {

  constructor(public surveyService:SurveyService, private router: Router) { }
  addSurvey(){
    this.router.navigate(['add-survey']);
  }
  ngOnInit(): void {
    console.log(this.surveyService.surveyQuestion)
  }

}
