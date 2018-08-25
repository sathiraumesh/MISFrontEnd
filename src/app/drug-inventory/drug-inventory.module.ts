import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DrugInventoryComponent } from './drug-inventory/drug-inventory.component';
import { DrugInventoryRouteModule } from './drug-inventory.module.routes';
import { MaterialModules } from '../material';
import { ListComponent } from './list/list.component';



@NgModule({

  imports: [
    CommonModule,
    DrugInventoryRouteModule,
    MaterialModules

  ],
  declarations: [
    HomeComponent,
    DrugInventoryComponent,
    ListComponent
  ],
  exports:[]
})
export class DrugInventoryModule { }
