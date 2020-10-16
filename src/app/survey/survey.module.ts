import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSurveyComponent } from './view-survey/view-survey.component';
import { AddSurveyComponent } from './add-survey/add-survey.component';
import { RouterModule, Routes } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  {path: '', component: SurveyComponent ,
    children: [
      {path: 'view-survey', component: ViewSurveyComponent},
      {path: 'add-survey', component: AddSurveyComponent},
    ]
  },
 
]


@NgModule({
  declarations: [ViewSurveyComponent, AddSurveyComponent, SurveyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SurveyModule { }
