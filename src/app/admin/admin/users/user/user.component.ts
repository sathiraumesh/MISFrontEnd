import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../models';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../core/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 user:any;
  constructor(private activeRoute:ActivatedRoute,private userService:UserService) { }

  ngOnInit() {
    this.getRouteParams();
  }

  getRouteParams(){
   
    console.log(  this.activeRoute.snapshot.params.id);
    this.userService.getUser(this.activeRoute.snapshot.params.id).subscribe(data=>{
      console.log(data);
      this.user=data;
    },err=>{
      console.log(err);
    });
  
  }
}
