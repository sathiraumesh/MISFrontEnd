import { Component, OnInit } from '@angular/core';
import { User } from '../../models';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  authError: string;

  user: User = {
    username: "",
    password: "",
    role:0
  };

  constructor(private authService: AuthenticationService,private router:Router) { }


  ngOnInit() {
    this.authService.logout();
  }

// function used to log the user in when user clicks the button
  login() {
    this.authService.login(this.user).subscribe(
      data => { 
        localStorage.setItem("token",data.token);
        this.authService.authenticateUser();
      },
      err => {
        this.authError = err.error.errors[0];
      }
    );
  }





}
