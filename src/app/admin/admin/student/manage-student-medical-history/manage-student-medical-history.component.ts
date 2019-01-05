import { Component, OnInit, Inject } from '@angular/core';
import { StudentService } from '../../../../core/student.service';
import { Students } from '../../../../models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-manage-student-medical-history',
  templateUrl: './manage-student-medical-history.component.html',
  styleUrls: ['./manage-student-medical-history.component.css']
})
export class ManageStudentMedicalHistoryComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private studentService: StudentService, public dialogRef: MatDialogRef<ManageStudentMedicalHistoryComponent>) { }

  private student: Students = {
    studentRegistrationNumber: "",
    studentName: "",
    studentDOB: "",
    studentAge: ""
  };

  ngOnInit() {
  }

  editStudent(form, data) {

    if (!form.invalid) {
      this.dialogRef.close({
        edited: true,
        data: data
      })
    }
    console.log(form);
  }

  closeDialog() {
    this.dialogRef.close({ edited: false })
  }

}
