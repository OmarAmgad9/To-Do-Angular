import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDo } from '../../modules/to-do';
import { ToDoService } from '../../service/to-do.service';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  title:string="To Do List Application"
  imgLink:string = ""

  Tasks:string[] = [];
  newTask: string= '';
  isAvalible:boolean = false;

  todos: ToDo[] = [];
  newToDo: ToDo = {} as ToDo;

  constructor(private todoService: ToDoService){}
  ngOnInit():void{
    this.getToDos()
  }

  getToDos(){
    this.todoService.getTodos().subscribe(x=>{
      this.todos = x
    })
  }
  

  addTask(){
    if(this.newTask.trim() != ''){
      this.Tasks.push(this.newTask)
      this.newTask = ''
      this.isAvalible = true
    }
  }
  editTask(index:number, editNewTask:string): string | void
  {
    const updated = editNewTask.trim()

    if(updated !== ''){
      this.Tasks[index] == updated
    }
    else
    {
      editNewTask = this.Tasks[index]
      this.Tasks.splice(index, 1)
      if(this.Tasks.length <= 0){
        this.isAvalible = false
      }
      return this.newTask = editNewTask
    }
    this.newTask = ''
  }

  deleteTask(index:number){
    this.Tasks.splice(index, 1)
    if(this.Tasks.length <= 0){
      this.isAvalible = false
    }
  }


}
