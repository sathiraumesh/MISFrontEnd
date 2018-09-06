import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';

import { AdminModuleRoutes } from './admin.module.routes';
import { MaterialModules } from '../material';
import { CoreModule } from '../core/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './admin/users/users.component';
import { AddUserComponent } from './admin/users/add-user/add-user.component';
import { UserComponent } from './admin/users/user-profile/user-profile.component';
import { UserListComponent } from './admin/users/user-list/user-list.component';
import { HomeComponent } from './admin/home/home.component';



@NgModule({
  imports: [
    CommonModule,
    AdminModuleRoutes,
    MaterialModules,
    CoreModule,
    FlexLayoutModule,
    FormsModule,
    
  ],
  declarations: [
    AdminComponent, 
    HomeComponent,  
    NavbarComponent, 
    UsersComponent, 
    AddUserComponent,
    UserComponent,
    UserListComponent
  ]
})
export class AdminModule { }
