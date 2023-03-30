import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

interface Todo {
  title: string;
  isComplete: boolean;
  dueDate: Date;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
  newTodoTitle: string = '';
  newTodoDueDate! : Date;

  todos: Todo[] = [
    { title: 'learn golang', isComplete: false, dueDate: new Date(2023, 3, 4, 12, 48) },
    { title: 'study', isComplete: false, dueDate: new Date(2023, 3, 1, 13, 0) },
    { title: 'productive task', isComplete: false, dueDate: new Date(2023, 2, 31, 16, 30) },
  ];

  displayedColumns : string[] = ["isComplete", "title", "dueDate"];

  @ViewChild(MatTable) table!: MatTable<Todo>;

  addTodo() {
    if (this.newTodoTitle.trim().length === 0) {
      return;
    }
    this.todos.push({ title: this.newTodoTitle, isComplete: false, dueDate: this.newTodoDueDate });
    this.table.renderRows();
    this.newTodoTitle = '';
  }
}
