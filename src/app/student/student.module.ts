import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { StudentRouteModule } from './student.module.routes';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRouteModule
<<<<<<< HEAD
=======

>>>>>>> a6f341a54746f27b08d757b586696a6e50a62d5f
  ],
  declarations: [StudentComponent, StudentProfileComponent]
})
export class StudentModule { }
