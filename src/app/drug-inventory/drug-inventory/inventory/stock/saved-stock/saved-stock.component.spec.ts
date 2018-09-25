import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedStockComponent } from './saved-stock.component';

describe('SavedStockComponent', () => {
  let component: SavedStockComponent;
  let fixture: ComponentFixture<SavedStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
