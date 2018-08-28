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

  login() {
    this.authService.login(this.user).subscribe(
      data => {
        this.authError = "";
          // console.log(data);
        localStorage.setItem("token",data.token);
        console.log(this.authService.getUserpermissions());
        this.router.navigate(["/drugs"]);
      },
      err => {
        this.authError = err.error.errors[0];
      }
    );
  }





}
