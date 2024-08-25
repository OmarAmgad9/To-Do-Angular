import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  Tasks:string[] = []
  newTask: string= ''
  isAvalible:boolean = false

  addTask(){
    if(this.newTask.trim() != ''){
      this.Tasks.push(this.newTask)
      this.newTask = ''
      this.isAvalible = true
    }
    console.log(this.newTask)
    console.log(`1111111111111`)
    console.log(this.Tasks)
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
    for(let i=0; i <= index; i++){
      if(i == index){
        console.log(i)
        this.Tasks.pop()
      }
    }
    if(this.Tasks = []){
      this.isAvalible = false
    }
  }
}
