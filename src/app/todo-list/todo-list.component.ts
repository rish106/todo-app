import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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
  dataSource = new MatTableDataSource<Todo>();
  newTodo: string = '';

  todos: Todo[] = [
    { task: 'learn golang', isComplete: false, addedOn: new Date() },
    { task: 'study', isComplete: false, addedOn: new Date() },
    { task: 'learn golang', isComplete: false, addedOn: new Date() },
  ];

  ngOnInit() {
    this.dataSource.data = this.todos;
  }

  displayedColumns : string[] = ["isComplete", "task", "addedOn"];

  addTodo() {
    if (this.newTodo.trim().length === 0) {
      return;
    }
    this.todos.push({ task: this.newTodo, isComplete: false, addedOn: new Date() });
    this.dataSource.data = this.todos;
    this.newTodo = '';
  }
}
