import { Http } from '@angular/http';
import { TodoService } from './todo.service';
import { TodoItem } from './todo-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app works!';
  todoItems: TodoItem[];

  constructor(private todoService: TodoService, private http: Http) {
  }

  ngOnInit() {
    this.http.get('assets/data.json').subscribe(response => {
      this.todoItems = this.todoService.todoItems = response.json();
    });
  }

  addTodoText(todoText) {
    this.todoService.addTodoText(todoText);
  }
}
