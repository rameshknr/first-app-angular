import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { PostsComponent } from './posts/posts.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CardComponent } from './card/card.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ViewTodosComponent } from './view-todos/view-todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { DebitComponent } from './debit/debit.component';
import { CreditComponent } from './credit/credit.component';
import { SortPipe } from './sort.pipe';
import { SurveyModule } from './survey/survey.module';

const routes: Routes = [
  // {path:'', component: CourseComponent},
  // {path:'add', component: AddCourseComponent},
  // {path:'aboutus', component: ParentComponent},
  // {path:'posts', component:PostsComponent },
  // {path:'details/:title', component:CourseDetailComponent },
  {path: '', component: PostsComponent},
  {path: 'add', component: AddTodoComponent},
  {
    path: 'survey',
    loadChildren: () => import('./survey/survey.module').then(m => m.SurveyModule)
  },
  {path:'**', component: NotFoundComponent}

]
//  MatSliderModule,

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AddCourseComponent,
    PostsComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    CourseDetailComponent,
    ViewTodosComponent,
    AddTodoComponent,
    NotFoundComponent,
    DebitComponent,
    CreditComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatDatepickerModule,
    MatGridListModule,
    MatTooltipModule,
    SurveyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
