import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../../core/student.service';
import { Students } from '../../../../models';

@Component({
  selector: 'app-manage-student-medical-history',
  templateUrl: './manage-student-medical-history.component.html',
  styleUrls: ['./manage-student-medical-history.component.css']
})
export class ManageStudentMedicalHistoryComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  private student: Students = {
    studentIndexNumber: "",
    studentName: "",
    studentDOB: "",
    studentAge: ""
  };

  ngOnInit() {
  }

}
