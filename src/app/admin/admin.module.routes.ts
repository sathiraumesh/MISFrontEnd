import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "../core/profile/profile.component";
import { AddUserComponent } from "./users/add-user/add-user.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";


const routes: Routes = [
    {
        path: "", component: AdminComponent,
        children: [
            { path: "", pathMatch: "full", redirectTo: "home" },
            { path: "home", component: HomeComponent },
            { path: "profile", component: ProfileComponent },
            { path: "users", component:UsersComponent,children:[
                {path:"",pathMatch:"full",redirectTo:"home"},
                {path:"home",component:UserComponent},
                {path:"adduser",component:AddUserComponent}
            ] }
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