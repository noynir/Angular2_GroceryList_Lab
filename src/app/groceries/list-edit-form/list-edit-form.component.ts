import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GroceryList} from "../../models/GroceryList";

@Component({
  selector: 'app-list-edit-form',
  templateUrl: './list-edit-form.component.html',
  styleUrls: ['./list-edit-form.component.css']
})
export class ListEditFormComponent implements OnInit {

  @Input()
  private list: GroceryList;

  @Output()
  private onItemAdded: EventEmitter<string> = new EventEmitter();

  @Output()
  private onNameUpdated: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  onItemAdd(input){
    this.onItemAdded.emit(input.value);
    input.value = '';
  }


  onNameEdited(name:string){
    this.onNameUpdated.emit(name);
  }

}
