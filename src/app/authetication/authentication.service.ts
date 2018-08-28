import { Injectable } from '@angular/core';
import { AutheticationModule } from './authetication.module';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import * as jwt_decode from "jwt-decode";


@Injectable()
export class AuthenticationService {

  constructor(public http: HttpClient) { }

  login(user) {
    return this.http.post<any>("/api/authenticate", user);
  }

  loggedIn(){
    return !! localStorage.getItem("token");
  }
  getUserpermissions(){
    if(this.loggedIn()){
      return this.getDecodedAccessToken(localStorage.getItem("token")).role;
    }else{

    }
  }

  getDecodedAccessToken(token:string):any{
    try{
      return jwt_decode(token);
    }
    catch(err){
      return null;
    }
  }


  logout(){
    localStorage.clear();
  }
}
