import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';

import { StudentRouteModule } from './student.module.routes';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModules } from '../material';

import { AddStudentComponent } from './student/add-student/add-student.component';


@NgModule({
  imports: [
    CommonModule,
    StudentRouteModule,
    MaterialModules

  ],
  declarations: [StudentComponent, StudentProfileComponent, NavbarComponent, AddStudentComponent]
})
export class StudentModule { }
