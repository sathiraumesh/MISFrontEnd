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
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { InventoryComponent } from './drug-inventory/inventory/inventory.component';
import { AddDrugsComponent } from './drug-inventory/inventory/add-drugs/add-drugs.component';
import {DrugListComponent as InventoryDrugListComponent} from "./drug-inventory/inventory/drug-list/drug-list.component";
import { StockComponent } from './drug-inventory/inventory/stock/stock.component';
import { CreateStockComponent } from './drug-inventory/inventory/stock/create-stock/create-stock.component';
import { SavedStockComponent } from './drug-inventory/inventory/stock/saved-stock/saved-stock.component';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';
import { EditDrugComponent } from './drug-inventory/register-drug/edit-drug/edit-drug.component';
import { StockNavbarComponent } from './drug-inventory/inventory/stock/stock-navbar/stock-navbar.component';
import { StatsComponent } from './drug-inventory/inventory/stock/stats/stats.component'




@NgModule({

  imports: [
    CommonModule,
    DrugInventoryRouteModule,
    MaterialModules,
    FormsModule,
    ReactiveFormsModule
 
  ],
  declarations: [
    HomeComponent,
    DrugInventoryComponent,
    NavbarComponent,
    RegisterDrugComponent,
    AddDrugComponent,
    DrugListComponent,
    InventoryComponent,
    AddDrugsComponent,
    InventoryDrugListComponent,
    StockComponent,
    CreateStockComponent,
    SavedStockComponent,
    PopupDialogComponent,
    EditDrugComponent,
    StockNavbarComponent,
    StatsComponent
  ],
  entryComponents: [PopupDialogComponent,EditDrugComponent],
  exports:[]
})
export class DrugInventoryModule { }
