import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './Todo';

const baseUrl: string =  'http://localhost:3000/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  addTodo(todo: Todo){
    console.log(todo)
    //http communication change to localStorage
    // return this.httpClient.post(baseUrl, todo)
    let todoArray = JSON.parse(localStorage.getItem('mytodo')) || []
    todoArray.push(todo)
    localStorage.setItem('mytodo', JSON.stringify(todoArray));
  }

  fetchAllTodos(){
    // return this.httpClient.get(baseUrl)
    //create our own observable

    let observable= Observable.create(observer => {
      let todoArray = JSON.parse(localStorage.getItem('mytodo')) || []
      let activeTodo = todoArray.filter(todo => todo.completed == false)
        observer.next(activeTodo);
        console.log("am done");
        observer.complete(); // to show we are done with our processing
     
    });
    return observable;
  }

  editTodo(todo: Todo){
    let todoArray = JSON.parse(localStorage.getItem('mytodo')) || []
    let remainingTodo = todoArray.filter(to => to.text !== todo.text)
    remainingTodo.push(todo)
    console.log(remainingTodo)
    localStorage.setItem('mytodo', JSON.stringify(remainingTodo));

  }
  deleteTodo(text: string){
    let todoArray = JSON.parse(localStorage.getItem('mytodo')) || []
    let remainingTodo = todoArray.filter(todo => todo.text !== text)
    console.log(remainingTodo)
    localStorage.setItem('mytodo', JSON.stringify(remainingTodo));
  }
}
