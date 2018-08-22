import { Component, OnInit } from '@angular/core';
import { User } from '../../models';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  authError:string;

  user:User ={
  username:"",
  password:""
  };

  

  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
  }


  login(){
    this.authService.login(this.user).subscribe(res=>{
      if(res.message){
        console.log(res.message);
        this.authError=res.message;
      }
      
    });
  }


  


}
