import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockNavbarComponent } from './stock-navbar.component';

describe('StockNavbarComponent', () => {
  let component: StockNavbarComponent;
  let fixture: ComponentFixture<StockNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
