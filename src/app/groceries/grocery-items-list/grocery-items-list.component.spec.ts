import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryItemsListComponent } from './grocery-items-list.component';

describe('GroceryItemsListComponent', () => {
  let component: GroceryItemsListComponent;
  let fixture: ComponentFixture<GroceryItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
