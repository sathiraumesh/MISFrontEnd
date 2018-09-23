import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrugInventoryComponent } from './drug-inventory/drug-inventory.component';
import { DrugInventoryRouteModule } from './drug-inventory.module.routes';
import { MaterialModules } from '../material';
import { NavbarComponent } from './navbar/navbar.component';

import { RegisterDrugComponent } from './drug-inventory/register-drug/register-drug.component';
import { HomeComponent } from 'src/app/drug-inventory/drug-inventory/home/home.component';
import { AddDrugComponent } from './drug-inventory/register-drug/add-drug/add-drug.component';
import { DrugListComponent } from './drug-inventory/register-drug/drug-list/drug-list.component';




@NgModule({

  imports: [
    CommonModule,
    DrugInventoryRouteModule,
    MaterialModules
  ],
  declarations: [
    HomeComponent,
    DrugInventoryComponent,
    NavbarComponent,
    RegisterDrugComponent,
    AddDrugComponent,
    DrugListComponent
  ],
  exports:[]
})
export class DrugInventoryModule { }
