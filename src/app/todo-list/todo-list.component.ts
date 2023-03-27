import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

interface Todo {
  title: string;
  isComplete: boolean;
  addedOn: Date;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
  newTodoTitle: string = '';

  todos: Todo[] = [
    { title: 'learn golang', isComplete: false, addedOn: new Date() },
    { title: 'study', isComplete: false, addedOn: new Date() },
    { title: 'productive task', isComplete: false, addedOn: new Date() },
  ];

  displayedColumns : string[] = ["isComplete", "title", "addedOn"];
  @ViewChild(MatTable) table!: MatTable<Todo>;

  addTodo() {
    if (this.newTodoTitle.trim().length === 0) {
      return;
    }
    this.todos.push({ title: this.newTodoTitle, isComplete: false, addedOn: new Date() });
    this.table.renderRows();
    this.newTodoTitle = '';
  }
}
