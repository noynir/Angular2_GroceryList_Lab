import { Component, OnInit } from '@angular/core';
import {GroceryListService} from "../../services/grocery-list.service";
import {GroceryList} from "../../models/GroceryList";

@Component({
  selector: 'app-grocery-list-conntainer',
  templateUrl: './grocery-list-conntainer.component.html',
  styleUrls: ['./grocery-list-conntainer.component.css']
})
export class GroceryListContainerComponent implements OnInit {

  private groceryLists: GroceryList[];
  private selectedList: GroceryList;

  constructor(private listService: GroceryListService) { }

  ngOnInit() {
    this.getLists();
  }

  onListSubmitted(listName){
    this.listService.AddNewList(listName);
    this.getLists();
  }

  private getLists(){
    this.groceryLists = this.listService.GetLists();
  }

  private onSelectedList(list){
    this.selectedList=list;
  }

}
