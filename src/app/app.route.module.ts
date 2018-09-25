import { NgModule } from "../../node_modules/@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./authetication/login/login.component";
import { DrugInventoryModule } from "./drug-inventory/drug-inventory.module";
import { UserAuthGaurd } from "./authetication/auth.gaurd";
import { StudentModule } from "./student/student.module";
import { AdminModule } from "./admin/admin.module";


const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "/login" },
    { path: "login", component: LoginComponent },
    { path: "drugs", loadChildren: "./drug-inventory/drug-inventory.module#DrugInventoryModule" },
    { path: "admin", loadChildren: "./admin/admin.module#AdminModule" },
    { path: "students", loadChildren: "./student/student.module#StudentModule" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouteModule {

}