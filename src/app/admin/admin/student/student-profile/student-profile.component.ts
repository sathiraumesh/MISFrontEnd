import { Component, OnInit } from '@angular/core';
import { Students } from '../../../../models';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../../../core/student.service';
import { MatDialog } from '@angular/material';
import { PopupDialogComponent } from '../../../popup-dialog/popup-dialog.component';
import { ManageStudentMedicalHistoryComponent } from '../manage-student-medical-history/manage-student-medical-history.component';


@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  student: any = {
  };
  constructor(private activeRoute: ActivatedRoute, private studentService: StudentService, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.getRouterParams();
  }

  getRouterParams() {
    console.log(this.activeRoute.snapshot.params.id);
    this.studentService.getStudent(this.activeRoute.snapshot.params.id).subscribe(data => {
      console.log(data);
      this.student = data;
    }, err => {
      console.log(err);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupDialogComponent, {
      width: "20%",
      data: "Are you sure",
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.studentService.deleteStudent(this.activeRoute.snapshot.params.id).subscribe(data => {
          console.log(data);
        },
          err => {
            console.log(err);
          });

        this.router.navigate(["/admin/students"]);

      } else {

      }
    });
  }

  editOpenDialog(): void {
    const earlyState = Object.assign({}, this.student);
    const dialogRef = this.dialog.open(ManageStudentMedicalHistoryComponent, {
      width: "60%",
      data: earlyState,
      autoFocus: false
    });

    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe(result => {

      if (result.edited) {
        this.studentService.editStudent(this.activeRoute.snapshot.params.id, result.data).subscribe(data => {
          console.log(result.data);
          this.student = result.data;
        }, err => {
          console.log(err);
        });
      } else {

      }
    });
  }
}
