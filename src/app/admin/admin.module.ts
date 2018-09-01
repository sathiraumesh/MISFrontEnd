import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AdminModuleRoutes } from './admin.module.routes';
import { MaterialModules } from '../material';
import { CoreModule } from '../core/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UserComponent } from './users/user/user.component';



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
    UserComponent
  ]
})
export class AdminModule { }
