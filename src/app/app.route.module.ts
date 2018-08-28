import { NgModule } from "../../node_modules/@angular/core";
import {  RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./authetication/login/login.component";
import { DrugInventoryModule } from "./drug-inventory/drug-inventory.module";
import { UserAuthGaurd } from "./authetication/login/auth.gaurd";

const routes:Routes=[
    {path:"",pathMatch:"full",redirectTo:"/login"},
    {path:"login",component:LoginComponent},
    {path:"drugs",loadChildren:"./drug-inventory/drug-inventory.module#DrugInventoryModule",canActivate:[UserAuthGaurd]}

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouteModule {

}