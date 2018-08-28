import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    {
        path: "", component: AdminComponent,
        children: [
            { path: "", pathMatch: "full", redirectTo: "home" },
            { path: "home", component: HomeComponent }
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AdminModuleRoutes {

}