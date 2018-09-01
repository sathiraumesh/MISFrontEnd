import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../core/user.service';
import { User } from '../../../../models';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  private user: User = {
    username:"",
    password:"",
    firstName: "",
    lastName: "",
    email: "",
    role: 0,
    gender: "",
    dateOfBirth: "",
    telephoneNum: 0,
    nic:""

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
