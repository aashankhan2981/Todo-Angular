import { Component, OnInit } from '@angular/core';
import {Todo} from '../../todo'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
   todos:Todo[]
    fromStorage:any
  constructor() {
    this.fromStorage = localStorage.getItem("todos")
    if(this.fromStorage!==null){
    this.todos = JSON.parse( this.fromStorage)
    console.log(this.todos)
  }
  else{
    this.todos = []
  } 
    
   }
  ngOnInit(): void {
  }
  getTodo(todo:Todo){
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  getChecked(todo:Todo){
  const index = this.todos.indexOf(todo)
  this.todos[index].active = !this.todos[index].active
  localStorage.setItem("todos",JSON.stringify(this.todos))


    
  }
  deleteTodo(todo:Todo){
    this.todos.splice((this.todos.indexOf(todo)),1)
    localStorage.setItem("todos",JSON.stringify(this.todos))

  }
}
