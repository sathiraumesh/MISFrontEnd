import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { StudentRouteModule } from './student.module.routes';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRouteModule

  ],
  declarations: [StudentComponent, StudentProfileComponent]
})
export class StudentModule { }
