import { Component, OnInit } from '@angular/core';
import { User } from '../../models';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  authError: string;

  user: User = {
    username: "",
    password: ""
  };

  constructor(private authService: AuthenticationService) { }


  ngOnInit() {
  }

  login() {
    this.authService.login(this.user).subscribe(
      data => {
        this.authError = "";
        localStorage.setItem("token",data.token);
        console.log(data);
      },
      err => {
        this.authError = err.error.errors[0];
        console.log(err.error.errors[0]);
      }
    );
  }





}
