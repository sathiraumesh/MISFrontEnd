import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  constructor(private userService:UserService) { }
 users;
  ngOnInit() {
    this.getUsers();
  }
  getUsers(){
    this.userService.getUsers().subscribe(data=>{
      this.users=data;
    },
    err=>{
      console.log(err);
    }
    );
    
  }
}
