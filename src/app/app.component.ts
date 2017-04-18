import { TodoItem } from './todo-item';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

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

  addTodoText(todoText) {
    this.todoItems.push({
      id: this.todoItems.length + 1,
      text: todoText,
      done: false
    });
  }
}
