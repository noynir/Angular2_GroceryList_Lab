import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryListConntainerComponent } from './grocery-list-container.component';

describe('GroceryListConntainerComponent', () => {
  let component: GroceryListConntainerComponent;
  let fixture: ComponentFixture<GroceryListConntainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryListConntainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryListConntainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
