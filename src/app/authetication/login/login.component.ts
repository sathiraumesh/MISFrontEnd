import { Component, OnInit } from '@angular/core';
import { User } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;

  username:string;
  password:string;

  constructor() { }

  ngOnInit() {
  }

}
