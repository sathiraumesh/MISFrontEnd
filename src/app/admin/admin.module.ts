import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';

import { AdminModuleRoutes } from './admin.module.routes';
import { MaterialModules } from '../material';
import { CoreModule } from '../core/core.module';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './admin/users/users.component';
import { AddUserComponent } from './admin/users/add-user/add-user.component';
import { UserComponent } from './admin/users/user-profile/user-profile.component';
import { UserListComponent } from './admin/users/user-list/user-list.component';
import { HomeComponent } from './admin/home/home.component';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';
import { EditUserComponent } from './admin/users/edit-user/edit-user.component';
import { StudentComponent } from './admin/student/student.component';
import { AddStudentsComponent } from './admin/student/add-students/add-students.component';
import { StudentProfileComponent } from './admin/student/student-profile/student-profile.component';
import { ManageStudentMedicalHistoryComponent } from './admin/student/manage-student-medical-history/manage-student-medical-history.component';





@NgModule({
  imports: [
    CommonModule,
    AdminModuleRoutes,
    MaterialModules,
    CoreModule,
    FormsModule,

  ],
  declarations: [
    AdminComponent,
    HomeComponent,
    NavbarComponent,
    UsersComponent,
    AddUserComponent,
    UserComponent,
    UserListComponent,
    PopupDialogComponent,
    EditUserComponent,
    StudentComponent,
    AddStudentsComponent,
    StudentProfileComponent,
    ManageStudentMedicalHistoryComponent


  ],
  entryComponents: [PopupDialogComponent,EditUserComponent],
})
export class AdminModule { }
