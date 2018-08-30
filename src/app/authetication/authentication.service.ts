import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import * as jwt_decode from "jwt-decode";
import { Router } from '@angular/router';


@Injectable()
export class AuthenticationService {

  constructor(public http: HttpClient, private router: Router) { }

  // call the api from the back to retrive the user token
  login(user) {
    return this.http.post<any>("/api/authenticate", user);
  }

  // function for ensuring that the user is the by ensuring wether the token is there in the local storage
  loggedIn() {
    return !!localStorage.getItem("token");
  }

  //function for authenticating user and routing them to the correct direction
  authenticateUser() {
    if (this.getUserpermissions() === 1) {
      console.log(this.getUserpermissions());
      console.log(this.getUserId());
      this.router.navigate(["/drugs"]);
    }
    else if (this.getUserpermissions() === 2) {
      console.log(this.getUserId());
      console.log(this.getUserpermissions());
      this.router.navigate(["/admin"]);

    }
    else {

    }
  }

  // function for getting the user role by accessing the acess token in the local storage
  getUserpermissions() {
    if (this.loggedIn()) {
      return this.getDecodedAccessToken(localStorage.getItem("token")).role;
    } else {

    }
  }

  getUserId(){
    if(this.loggedIn()){
      return this.getDecodedAccessToken(localStorage.getItem("token")).id;
    }
  }


// function for decoding the access token
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch (err) {
      return null;
    }
  }

// function for clearing the local storage for clearing out the user
  logout() {
    localStorage.clear();
  }
}
