import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  title = 'todos';
  inputPlaceholder = 'What needs to be done?';
  inputValue = '';

  @Output() addTodo = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  inputKeyUp($event) {
    console.log($event);
  }

  inputEnterKeyUp() {
    this.addTodo.emit(this.inputValue);
  }
}
