import { Component } from '@angular/core';

interface Todo {
  task: string;
  is_complete: boolean;
  added_on: Date;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
  newTodo: string = '';

  todos: Todo[] = [
    { task: 'learn golang', is_complete: false, added_on: new Date() },
    { task: 'study', is_complete: false, added_on: new Date() },
    { task: 'learn golang', is_complete: false, added_on: new Date() },
  ];

  addTodo() {
    if (this.newTodo.trim().length === 0) {
      return;
    }
    this.todos.push({ task: this.newTodo, is_complete: false, added_on: new Date() });
    this.newTodo = '';
  }
}
