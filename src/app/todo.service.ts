import { TodoItem } from './todo-item';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  todoItems: TodoItem[] = [
    {
      id: 1,
      text: 'item 1',
      done: false
    },
    {
      id: 2,
      text: 'item 2',
      done: true
    },
    {
      id: 3,
      text: 'item 3',
      done: false
    }
  ];

  constructor() { }

  addTodoText(todoText) {
    this.todoItems.push({
      id: this.todoItems.length + 1,
      text: todoText,
      done: false
    });
  }
}
