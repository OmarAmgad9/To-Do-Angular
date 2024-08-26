import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { TododeatialComponent } from './components/tododeatial/tododeatial.component';
import { ConactusComponent } from './components/conactus/conactus.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ApiTodoComponent } from './api-todo/api-todo.component';

export const routes: Routes = [
  {path: '', redirectTo: '/todos', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, title: 'Home'},
  {path: 'todos', component: ApiTodoComponent, title: 'todos'},
  {path: 'oldtodos', component: ToDoComponent, title: 'oldtodos'},
  {path: 'todos/:id', component: TododeatialComponent, title: 'todos detials'},
  {path: 'conactus', component: ConactusComponent, title: 'conact us'},
  {path: 'aboutus', component: AboutComponent, title: 'About us'},
  {path: '**', component: NotFoundComponent, title: 'Not Found'},


];
