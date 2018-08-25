import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugInventoryComponent } from './drug-inventory.component';

describe('DrugInventoryComponent', () => {
  let component: DrugInventoryComponent;
  let fixture: ComponentFixture<DrugInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
