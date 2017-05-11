import {Component, Input, OnInit} from '@angular/core';
import {GroceryList} from "../../models/GroceryList";
import {GroceryListItem} from "../../models/GroceryListItem";
import {GroceryListService} from "../../services/grocery-list.service";

@Component({
  selector: 'app-list-edit-container',
  templateUrl: './list-edit-container.component.html',
  styleUrls: ['./list-edit-container.component.css']
})
export class ListEditContainerComponent implements OnInit {

  @Input()
  private list: GroceryList;

  constructor(private listService: GroceryListService) { }

  ngOnInit() {
  }

  itemChecked(item: GroceryListItem) {

    this.list.items[this.list.items.findIndex(listItem => listItem.id === item.id)] = item;
    this.listService.UpdateList(this.list);
  }

  itemAdded(title: string){
    let listItem = this.listService.createListItem(title);
    this.list.items.push(listItem);
    this.listService.UpdateList(this.list);
  }

  nameChanged(name:string){
    if(name){
      this.list.name = name;
      this.listService.UpdateList(this.list);
    }
  }
}
