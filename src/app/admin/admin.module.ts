import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AdminModuleRoutes } from './admin.module.routes';
import { MaterialModules } from '../material';
import { CoreModule } from '../core/core.module';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    AdminModuleRoutes,
    MaterialModules,
    CoreModule,
    FlexLayoutModule,
    FormsModule
  ],
  declarations: [AdminComponent, HomeComponent, ManageUsersComponent]
})
export class AdminModule { }
