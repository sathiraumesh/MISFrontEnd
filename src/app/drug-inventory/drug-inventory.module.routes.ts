import { NgModule } from "../../../node_modules/@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DrugInventoryComponent } from "./drug-inventory/drug-inventory.component";

import { ListComponent } from "./list/list.component";
import { HomeComponent } from "src/app/drug-inventory/home/home.component";

const routes:Routes=[
    {path:"",component:DrugInventoryComponent,
    children:[
      {path :"",pathMatch:"full",redirectTo:"home"},
      {path:"home",component:HomeComponent},
      {path:"list",component:ListComponent}
    ]}
    
  ];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    
    ],
    exports:[RouterModule]
})

export class DrugInventoryRouteModule {

}