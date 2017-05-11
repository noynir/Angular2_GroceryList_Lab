import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-grocery-list-form',
  templateUrl: './grocery-list-form.component.html',
  styleUrls: ['./grocery-list-form.component.css']
})
export class GroceryListFormComponent implements OnInit {

  @Output()
  listSubmitted: EventEmitter<string> = new EventEmitter();



  constructor() { }

  ngOnInit() {

  }

  addNewList(input){
    this.listSubmitted.emit(input.value);
    input.value = '';
  }

}
