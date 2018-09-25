import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDrugComponent } from './register-drug.component';

describe('RegisterDrugComponent', () => {
  let component: RegisterDrugComponent;
  let fixture: ComponentFixture<RegisterDrugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDrugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
