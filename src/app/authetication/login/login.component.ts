import { Component, OnInit } from '@angular/core';
import {  UserCredentials } from '../../models';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private error:boolean=false;

  user: UserCredentials = {
    username:"",
    password:"",
    role:""
  };

  constructor(private authService: AuthenticationService,private router:Router) { }


  ngOnInit() {
    this.authService.logout();
  }

// function used to log the user in when user clicks the button
  login(form:any) {
      if(!form.invalid){
          console.log(this.user);
        this.authService.login(this.user).subscribe(
          data => { 
            console.log(data);
            localStorage.setItem("token",data.token);
            this.authService.authenticateUser();
          },
          err => {
            this.error=true;;
            console.log(err)
          }
        );
      }
      else{
        this.error=false;
      }
    
    
  }





}
