import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GroceryList} from "../../models/GroceryList";

@Component({
  selector: 'app-groceries-list',
  templateUrl: './groceries-list.component.html',
  styleUrls: ['./groceries-list.component.css']
})
export class GroceriesListComponent implements OnInit {

  @Input()
  lists: GroceryList[];

  @Output()
  listSelected: EventEmitter<GroceryList> = new EventEmitter();

  private selectedListID:string;

  constructor() { }

  ngOnInit() {
  }

  onListClick(list){
    this.listSelected.emit(list);
    this.selectedListID = list.id;
  }


}
