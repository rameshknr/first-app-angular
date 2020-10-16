import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  //surveyQuestion:string = 'Who will win Dream11 IPL 2020'
  surveyQuestion:Array<string> = ['Who will win Dream11 IPL 2020',
                                  'Who will Score most runs Dream11 IPL 2020',
                                  'Who will take most wickets Dream11 IPL 2020']
  //choices:Array<string> = ['CSK - Chennai Super Kings', 'DC - Delhi Capitals','MI - Mumbai Indians']
  choices:Array<Array<string>> = [['CSK - Chennai Super Kings', 'DC - Delhi Capitals','MI - Mumbai Indians'],
                                  ['KL Rahul', 'Shreyas Iyer','du Plessis'],
                                  ['Bumarh', 'Rabada','Archer']]
  //radioSelectedString:string = null;
   radioSelectedString:Array<string> = ['','',''];
  constructor() { }
}
