import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AdminModuleRoutes } from './admin.module.routes';


@NgModule({
  imports: [
    CommonModule,
    AdminModuleRoutes
  ],
  declarations: [AdminComponent, HomeComponent]
})
export class AdminModule { }
