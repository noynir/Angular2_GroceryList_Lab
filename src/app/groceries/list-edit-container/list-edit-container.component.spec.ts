import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEditContainerComponent } from './list-edit-container.component';

describe('ListEditContainerComponent', () => {
  let component: ListEditContainerComponent;
  let fixture: ComponentFixture<ListEditContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEditContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
