import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../../core/student.service';
import { Students } from '../../../../models';


@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  private student: Students = {
    studentIndexNumber: "",
    studentName: "",
    studentDOB: "",
    studentAge: ""

  };

  ngOnInit() {
  }

  addStudent(form: any) {
    if (!form.invalid) {
      this.studentService.addStudent(this.student).subscribe(data => {
        console.log(data);

      }, err => {
        console.log(err);
      });
    }

  }
}
