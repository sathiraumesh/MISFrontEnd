import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  userId;
  userDetails;
  constructor(private userService:UserService) { }

  ngOnInit() {
   this.userId=this.userService.getUserId();
    console.log(this.userId);
   this.getUserData();
   
  }

  getUserData(){
    this.userService.getuserDetails(this.userId).subscribe(data=>{
      this.userDetails=data;
      console.log(data);
    });
  }

}
