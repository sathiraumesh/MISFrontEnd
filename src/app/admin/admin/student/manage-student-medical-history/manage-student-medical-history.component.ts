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
    studentAge: "",
    gender: "",
    studentFaculty: "",
    marritalStatus: "",
    studentNationality: "",
    studentPositionOfFamily: null,
    studentAddress: "",
    studentTermAddress: "",
    studentParentGuardian: "",
    studentBoardingRelative: "",
    studentAmountPaid: null,
    studentOccupationFather: "",
    studentOccupationMother: "",
    studentBursary: "",
    studentSchool: "",
    gamesPlayed: ""
  };

  ngOnInit() {
  }

  private studentData;
  private studentId;

  editStudent(form, data) {

    // if (!form.invalid) {
    //   this.dialogRef.close({
    //     edited: true,
    //     data: data
    //   })
    // }
    // console.log(form);

    if (!form.invalid) {
      this.studentData = data;
      this.studentId = data._id;
      this.studentService.editStudent(this.studentId, this.studentData).subscribe(data => {
        console.log(data);
      }, err => {
        console.log(err);
      });
    }
  }

  closeDialog() {
    this.dialogRef.close({ edited: false })
  }

}
