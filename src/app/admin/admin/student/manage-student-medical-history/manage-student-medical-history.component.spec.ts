import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStudentMedicalHistoryComponent } from './manage-student-medical-history.component';

describe('ManageStudentMedicalHistoryComponent', () => {
  let component: ManageStudentMedicalHistoryComponent;
  let fixture: ComponentFixture<ManageStudentMedicalHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageStudentMedicalHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageStudentMedicalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
