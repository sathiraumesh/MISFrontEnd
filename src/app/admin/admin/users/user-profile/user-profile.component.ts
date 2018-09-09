import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../models';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../core/user.service';
import { MatDialog } from '@angular/material';
import { PopupDialogComponent } from '../../../popup-dialog/popup-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserComponent implements OnInit {
 user:any={
 };
  constructor(private activeRoute:ActivatedRoute,private userService:UserService,private dialog: MatDialog,private router:Router) { }

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

  openDialog():void{
    const dialogRef=this.dialog.open(PopupDialogComponent,{
      width:"20%",
      data:"Are you sure"
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
          this.userService.deleteUser(this.activeRoute.snapshot.params.id).subscribe(data=>{
            console.log(data);
          },
          err=>{
            console.log(err);
          });

          this.router.navigate(["/admin/users"]);

      }else{

      }
    });
  }

  

}
