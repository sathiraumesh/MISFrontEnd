import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../core/user.service';
import { User } from '../../../../models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService:UserService) { }
  
  private userList :User[]=[];
  ngOnInit() {

    this.getUserLsit();
  }
  
  getUserLsit(){
    this.userService.getUsers().subscribe(
      data=>{
        
        this.userList=data.users;
        console.log(data);
        console.log(this.userList);
        
      },err=>{}
    );
  }
}
