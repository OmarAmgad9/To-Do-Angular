import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../modules/to-do';


@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private apiUrl = "http://localhost:3000/todo"
  constructor(private httpClient:HttpClient) { }

  getTodos(): Observable<ToDo[]>
  {
    return this.httpClient.get<ToDo[]>(this.apiUrl);
  }
  createTodo(todo: ToDo): Observable<ToDo[]>
  {
    return this.httpClient.post<ToDo[]>(this.apiUrl, JSON.stringify(todo));
  }
  getTodoId(id:string): Observable<ToDo[]>
  {
    return this.httpClient.get<ToDo[]>(`${this.apiUrl}/${id}`);
  }
  updateTodo(todo: ToDo): Observable<ToDo[]>
  {
    return this.httpClient.put<ToDo[]>(`${this.apiUrl}/${todo.id}`, JSON.stringify(todo));
  }
  deleteToDo(todoId: string): Observable<void>
  {
    return this.httpClient.delete<void>(`${this.apiUrl}/${todoId}`)
  }

}
