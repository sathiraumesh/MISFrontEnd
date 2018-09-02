import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { ProfileComponent } from "../core/profile/profile.component";
import { AddUserComponent } from "./admin/users/add-user/add-user.component";
import { UsersComponent } from "./admin/users/users.component";
import { UserComponent } from "./admin/users/user/user.component";
import { UserListComponent } from "./admin/users/user-list/user-list.component";
import { HomeComponent } from "./admin/home/home.component";


const routes: Routes = [
    {
        path: "", component: AdminComponent,
        children: [
            { path: "", pathMatch: "full", redirectTo: "home" },
            { path: "home", component: HomeComponent },
            { path: "profile", component: ProfileComponent },
            { path: "users", component:UsersComponent,children:[
                {path:"",pathMatch:"full",redirectTo:"home"},
                {path:"home",component:UserListComponent},
                {path:"adduser",component:AddUserComponent},
                {path:":id",component:UserComponent}
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