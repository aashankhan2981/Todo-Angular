import { EventEmitter,Component, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() eventEmitter:EventEmitter<Todo> = new EventEmitter()
  title:string=''
  desc:string=''
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(e:any){
    e.preventDefault()
    if(this.title!==''){
    const todoItem = {
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.eventEmitter.emit(todoItem)
    this.title=''
    this.desc=''
  }
  else{
    alert("Plz fill the fields first")
  }
  }
}
