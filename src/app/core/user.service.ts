import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AutheticationModule } from '../authetication/authetication.module';
import { AuthenticationService } from '../authetication/authentication.service';

@Injectable()
export class UserService {

  constructor(private http:HttpClient,private authService:AuthenticationService) { }

  getuserDetails(id){
   return  this.http.get<any>("api/users/"+id);
  }

  getUserId(){
    if(this.authService.loggedIn()){
      return this.authService.getDecodedAccessToken(localStorage.getItem("token")).id;
    }
  }

  getUsers(){
    return this.http.get<any>("api/users");
  }
  
}
