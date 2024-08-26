import { ChangeDetectorRef, Component } from '@angular/core';
import { ToDo } from '../modules/to-do';
import { ToDoService } from '../service/to-do.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-api-todo',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './api-todo.component.html',
  styleUrl: './api-todo.component.css'
})
export class ApiTodoComponent {
  todos: ToDo[]= [];
  newToDo: ToDo = {
    id: '',
    title: '',
    completed: false
  }

  constructor(private TodoService: ToDoService){

  }

  ngOnInit():void
  {
    this.getTodos()

  }

  // checkBox(todoId:string){
  //   todo = todo.completed
  //   this.TodoService.updateTodo(todoId, this.newToDo.completed).subscribe()
  // }
  getTodos(){
    this.TodoService.getTodos().subscribe(x=>{
      this.todos = x;
    })

  }
  createToDo():void
  {
    if(this.newToDo.title !== ''){
      this.newToDo.id = String(Math.random())
      this.TodoService.createTodo(this.newToDo).subscribe(response=>
        console.log("Data Send Successfully ", response)
      )
      this.newToDo.title = ''
    }
    this.getTodos()
  }
  deleteToDo(todoId:string):void
  {
    this.TodoService.deleteToDo(todoId).subscribe(response=>{
      console.log(response)
    })
    this.getTodos()
  }

}
