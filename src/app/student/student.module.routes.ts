import { NgModule } from "../../../node_modules/@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentComponent } from "./student/student.component";

import { StudentProfileComponent } from "./student/student-profile/student-profile.component";
import { AddStudentComponent } from "./student/add-student/add-student.component";


const routes: Routes = [
    {
        path: "", component: StudentComponent,
        children: [

            { path: "profile", component: StudentProfileComponent },
            { path: "addstudent", component: AddStudentComponent }
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