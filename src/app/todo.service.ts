import { TodoItem } from './todo-item';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  todoItems: TodoItem[];

  constructor() {
  }

  addTodoText(todoText) {
    this.todoItems.push({
      id: this.todoItems.length + 1,
      text: todoText,
      done: false
    });
  }
}
