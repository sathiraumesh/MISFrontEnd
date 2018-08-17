import { NgModule } from "../../node_modules/@angular/core";
import {  RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./authetication/login/login.component";

const routes:Routes=[
    {path:"",component:LoginComponent},
    {path: '**', redirectTo: "" }

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouteModule {

}