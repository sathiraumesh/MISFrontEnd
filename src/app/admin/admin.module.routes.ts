import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { ProfileComponent } from "../core/profile/profile.component";
import { AddUserComponent } from "./admin/users/add-user/add-user.component";
import { UsersComponent } from "./admin/users/users.component";
import { UserComponent } from "./admin/users/user-profile/user-profile.component";
import { UserListComponent } from "./admin/users/user-list/user-list.component";
import { HomeComponent } from "./admin/home/home.component";
import { StudentComponent } from "./admin/student/student.component";
import { AddStudentsComponent } from "./admin/student/add-students/add-students.component";
import { StudentProfileComponent } from "./admin/student/student-profile/student-profile.component";
import { ManageStudentMedicalHistoryComponent } from "./admin/student/manage-student-medical-history/manage-student-medical-history.component";
import { StudentListComponent } from "./admin/student/student-list/student-list.component";


const routes: Routes = [
    {
        path: "", component: AdminComponent,
        children: [
            { path: "", pathMatch: "full", redirectTo: "home" },
            { path: "home", component: HomeComponent },
            { path: "profile", component: ProfileComponent },
            {
                path: "users", component: UsersComponent, children: [
                    { path: "", pathMatch: "full", redirectTo: "home" },
                    { path: "home", component: UserListComponent },
                    { path: "adduser", component: AddUserComponent },
                    { path: ":id", component: UserComponent }
                ]
            },
            {
                path: "students", component: StudentComponent, children: [
                    { path: "", pathMatch: "full", redirectTo: "home" },
                    { path: "home", component: StudentListComponent },
                    { path: "addstudent", component: AddStudentsComponent },
                    { path: "managestudents", component: ManageStudentMedicalHistoryComponent },
                    { path: ":id", component: StudentProfileComponent }
                ]
            }
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