import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

interface Todo {
  task: string;
  isComplete: boolean;
  addedOn: Date;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
  newTodo: string = '';

  todos: Todo[] = [
    { task: 'learn golang', isComplete: false, addedOn: new Date() },
    { task: 'study', isComplete: false, addedOn: new Date() },
    { task: 'learn golang', isComplete: false, addedOn: new Date() },
  ];

  displayedColumns : string[] = ["isComplete", "task", "addedOn"];
  @ViewChild(MatTable) table!: MatTable<Todo>;

  addTodo() {
    if (this.newTodo.trim().length === 0) {
      return;
    }
    this.todos.push({ task: this.newTodo, isComplete: false, addedOn: new Date() });
    this.table.renderRows();
    this.newTodo = '';
  }
}
