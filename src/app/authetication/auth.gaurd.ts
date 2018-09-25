import { Injectable } from "@angular/core";
import { CanActivate, Router, CanActivateChild } from "@angular/router";
import { AuthenticationService } from "./authentication.service";

@Injectable()


export class AdminAuthGaurd implements CanActivate {
    constructor(private authService: AuthenticationService, private router: Router) { }
    canActivate(): boolean {
        if(this.authService.getUserpermissions()==="Admin"){
                return true;
        }
        else{
            this.router.navigate(["/login"]);
        }

    }
}

@Injectable()

export class DoctorAuthGaurd implements CanActivate {
    constructor(private authService: AuthenticationService, private router: Router) { }
    canActivate(): boolean {
        if(this.authService.getUserpermissions()==="Doctor"){
                return true;
        }
        else{
            this.router.navigate(["/login"]);
        }

    }
}

// export class Nurse implements CanActivate {
//     constructor(private authService: AuthenticationService, private router: Router) { }
//     canActivate(): boolean {
//         if(this.authService.getUserpermissions()==="Nurse"){
//                 return true;
//         }
//         else{
//             this.router.navigate(["/login"]);
//         }

//     }
// }