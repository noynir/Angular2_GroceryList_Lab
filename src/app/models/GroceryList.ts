import {GroceryListItem} from "./GroceryListItem";
export class GroceryList {

  items: GroceryListItem[];

  constructor(public id: string, public name: string ){
    this.items = [];
  }
}
