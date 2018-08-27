import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthenticationService } from "../authentication.service";

@Injectable()

export class AuthGaurd implements CanActivate{
    constructor (private authService:AuthenticationService,private router:Router){}

    canActivate():boolean{
       if(this.authService.loggedIn()){
           return true;
       }
       else{
           this.router.navigate(["/login"]);
       }
    }
}