import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "../core/profile/profile.component";
import { ManageUsersComponent } from "./manage-users/manage-users.component";

const routes: Routes = [
    {
        path: "", component: AdminComponent,
        children: [
            { path: "", pathMatch: "full", redirectTo: "home" },
            { path: "home", component: HomeComponent },
            { path: "profile", component: ProfileComponent },
            { path: "manageusers", component: ManageUsersComponent }
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminModuleRoutes {

}