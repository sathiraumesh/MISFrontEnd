import { NgModule } from "../../../node_modules/@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DrugInventoryComponent } from "./drug-inventory/drug-inventory.component";
import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./list/list.component";

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