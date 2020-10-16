import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css']
})
export class AddSurveyComponent implements OnInit {

  //ch = document.getElementsByName('name');
  constructor(public surveyService:SurveyService, private router: Router) { }
  viewSurvey(){
    this.router.navigate(['view-survey']);
  }
  onItemChange(item:string,i:number){
    //this.surveyService.radioSelectedString =item;
    this.surveyService.radioSelectedString[i] = item;
  }

  addChoice(choice:string,i:number){
    //this.surveyService.choices.push(choice)
    this.surveyService.choices[i].push(choice)
  }
  ngOnInit(): void {
    console.log(this.surveyService.surveyQuestion)
  }

}
