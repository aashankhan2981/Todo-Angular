import { EventEmitter,Component, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos-items',
  templateUrl: './todos-items.component.html',
  styleUrls: ['./todos-items.component.css']
})
export class TodosItemsComponent implements OnInit {
  @Input() i:number=0
  @Input() todo:Todo
  @Output() deletingTodo:EventEmitter<Todo> = new EventEmitter()
  @Output() Checking:EventEmitter<Todo> = new EventEmitter()
  constructor() {
    this.todo= {
      title:'',
      desc:"",
      active:true

    }
   }

  ngOnInit(): void {
  }
  Checked(todo:Todo){
    this.Checking.emit(todo)
  }
  Delete(todo:Todo){
      this.deletingTodo.emit(todo)

  }

}
