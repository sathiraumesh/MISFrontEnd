import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/user.service';
import { User } from '../../models';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  private user: User = {
    username:"",
    password:"",
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    gender: "",
    dateOfBirth: "",
    telephoneNum: 0

  };

  ngOnInit() {
    // this.getUsers();
  }

  //   getUsers(){
  //     this.userService.getUsers().subscribe(data=>{
  //       this.users=data;
  //     },
  //     err=>{
  //       console.log(err);
  //     }
  //     );

  //   // }// end of getUsers();

  addUser(form: any) {
    this.userService.addUser(this.user).subscribe(data=>{
      console.log(data);

    },err=>{
      console.log(err);
    });
  }
}
