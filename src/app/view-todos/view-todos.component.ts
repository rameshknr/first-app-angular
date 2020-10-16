import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-view-todos',
  templateUrl: './view-todos.component.html',
  styleUrls: ['./view-todos.component.css']
})

export class ViewTodosComponent implements OnInit {
  
  todos: Array<Todo>= []
 
  constructor(private todoService: TodoService) { }

  addTodo(text: string){
    const completed:boolean = false
    this.todoService.addTodo({text,completed})
    this.ngOnInit();
  }
  editTodo(text: string){
    const completed:boolean = true
    this.todoService.editTodo({text,completed})
    this.ngOnInit();
  }
  deleteTodo(text: string){
    this.todoService.deleteTodo(text)
    this.ngOnInit();
  }


  ngOnInit(): void {
    this.todoService.fetchAllTodos()
    .subscribe((res: Array<Todo>)=> {
      console.log('In subscribe ', res);
        this.todos = res;

    })
  
  }

}
