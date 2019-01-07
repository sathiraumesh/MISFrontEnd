import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../../core/student.service';
import { Students } from '../../../../models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {

  constructor(private studentService: StudentService, private router: Router) { }

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

  goToPath() {
    let path = "/admin/students/";
    this.router.navigate([path]);
  }

  addStudent(form: any) {
    if (!form.invalid) {
      //this.formatInputs();
      this.studentService.addStudent(this.student).subscribe(data => {
        console.log(data);
        this.goToPath();
      }, err => {
        console.log(err);
      });
    }

  }

  // formatInputs(){
  //   this.student.studentRegistrationNumber=this.student.studentRegistrationNumber.toUpperCase();
  //   this.student.studentName=this.student.studentName.toUpperCase();
  //   this.student.studentDOB=this.student.studentDOB.toUpperCase();
  //   console.log(String(this.student.));

  // }
}
