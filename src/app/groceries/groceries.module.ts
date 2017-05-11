import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceriesListComponent } from './groceries-list/groceries-list.component';
import { GroceryListFormComponent } from './grocery-list-form/grocery-list-form.component';
import {GroceryListContainerComponent} from './grocery-list-conntainer/grocery-list-container.component';
import {GroceryListService} from "../services/grocery-list.service";
import { ListEditContainerComponent } from './list-edit-container/list-edit-container.component';
import { ListEditFormComponent } from './list-edit-form/list-edit-form.component';
import { GroceryItemsListComponent } from './grocery-items-list/grocery-items-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[GroceryListService],
  declarations: [GroceriesListComponent, GroceryListFormComponent, GroceryListContainerComponent, ListEditContainerComponent, ListEditFormComponent, GroceryItemsListComponent],
  exports:[GroceryListContainerComponent,ListEditContainerComponent]
})
export class GroceriesModule { }
