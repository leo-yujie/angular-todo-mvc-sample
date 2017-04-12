import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  title = 'todos';
  inputPlaceholder = 'What needs to be done?';
  inputValue = '';

  constructor() { }

  ngOnInit() {
  }

  inputKeyUp($event) {
    console.log($event);
  }

  inputEnterKeyUp(){
    console.log(this.inputValue);
  }
}
