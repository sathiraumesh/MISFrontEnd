import { NgModule } from "../../../node_modules/@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentComponent } from "./student/student.component";

import { StudentProfileComponent } from "./student/student-profile/student-profile.component";
import { NavbarComponent } from "./navbar/navbar.component";


const routes: Routes = [
    {
        path: "", component: StudentComponent,
        children: [

            { path: "profile", component: StudentProfileComponent },
            { path: "nav-bar", component: NavbarComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)

    ],
    exports: [RouterModule]
})

export class StudentRouteModule {

}