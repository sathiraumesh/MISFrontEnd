import { NgModule } from "../../../node_modules/@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DrugInventoryComponent } from "./drug-inventory/drug-inventory.component";


import { RegisterDrugComponent } from "./drug-inventory/register-drug/register-drug.component";
import { HomeComponent } from "src/app/drug-inventory/drug-inventory/home/home.component";
import { AddDrugComponent } from "./drug-inventory/register-drug/add-drug/add-drug.component";
import { DrugListComponent } from "./drug-inventory/register-drug/drug-list/drug-list.component";
import { InventoryComponent } from "./drug-inventory/inventory/inventory.component";
import {DrugListComponent as InventoryDrugListComponent} from "./drug-inventory/inventory/drug-list/drug-list.component"
import { StockComponent } from "./drug-inventory/inventory/stock/stock.component";


const routes: Routes = [
    {
        path: "", component: DrugInventoryComponent,
        children: [
            { path: "", pathMatch: "full", redirectTo: "home" },
            { path: "home", component: HomeComponent },
            { path: "inventory", component: InventoryComponent,children:[
                { path: "", pathMatch: "full", redirectTo: "druglist" },
                {path:"druglist",component:InventoryDrugListComponent},
                {path:"stock",component:StockComponent}
            ]},
            {
                path: "register", component: RegisterDrugComponent, children: [
                    { path: "", pathMatch: "full", redirectTo: "druglist" },
                    { path: "druglist", component: DrugListComponent },
                    { path: "adddrug", component: AddDrugComponent },


                ]
            }

        ]
    }

];
@NgModule({
    imports: [
        RouterModule.forChild(routes)

    ],
    exports: [RouterModule]
})

export class DrugInventoryRouteModule {

}