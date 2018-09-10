import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StudentComponent, StudentProfileComponent]
})
export class StudentModule { }
