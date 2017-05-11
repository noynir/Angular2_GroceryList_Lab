import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GroceryListItem} from "../../models/GroceryListItem";

@Component({
  selector: 'app-grocery-items-list',
  templateUrl: './grocery-items-list.component.html',
  styleUrls: ['./grocery-items-list.component.css']
})
export class GroceryItemsListComponent implements OnInit {

  @Input()
  private list: GroceryListItem[]

  @Output()
  private onItemChecked: EventEmitter<GroceryListItem> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onItemClicked(checkbox,listItem: GroceryListItem){
    listItem.isChecked = checkbox.checked;
    this.onItemChecked.emit(listItem);
  }

}
