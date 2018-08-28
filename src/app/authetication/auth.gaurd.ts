import { Injectable } from "@angular/core";
import { CanActivate, Router, CanActivateChild } from "@angular/router";
import { AuthenticationService } from "./authentication.service";

@Injectable()

export class UserAuthGaurd implements CanActivate {
    constructor(private authService: AuthenticationService, private router: Router) { }
    canActivate(): boolean {

        if(this.authService.getUserpermissions()===1){
            return true;
        }
        else if(this.authService.getUserpermissions()===2){
            return true;
        }
        else{
            this.router.navigate(["/login"]);
            return false;
        }


    }
}

export class AdminAuthGaurd implements CanActivate {
    constructor(private authService: AuthenticationService, private router: Router) { }
    canActivate(): boolean {
        if(this.authService.getUserpermissions()===2){
                return true;
        }
        else{
            this.router.navigate(["/login"]);
        }

    }
}