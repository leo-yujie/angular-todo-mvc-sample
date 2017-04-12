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

  toggleItemEditing(item: TodoItem) {
    item.oldText = item.text;
    item.isEditing = !item.isEditing;
  }

  confirmItemEditing(item: TodoItem) {
    this.toggleItemEditing(item);
  }

  cancelItemEditing(item: TodoItem) {
    item.text = item.oldText;
    this.toggleItemEditing(item);
  }
}
