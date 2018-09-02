import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../core/user.service';
import { User } from '../../../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { 

    this.columnDefs = [
      { headerName: 'First Name', field: 'firstName', },
      { headerName: 'Last Name', field: 'lastName', },
      { headerName: 'Birth Day', field: 'dateOfBirth' },
      { headerName: "Role", field: 'role',suppressFilter: true },
      {headerName:"contact No",field:'telePhoneNumber'}


    ];
  }
  
  private userList :User[]=[];
  ngOnInit() {

    // this.getUserLsit();
  }
  
  goToPath(){
   let  path="/admin/users/userinfo/"+this.userId;
    this.router.navigate([path]);
  }


  private columnDefs;
  private rowData: any;
  private gridApi;
  private gridColumnApi;
  private selectedName;
  private userId;

  getUserLsit(){
    this.userService.getUsers().subscribe(
      data=>{
        
        this.userList=data.users;
        console.log(data);
        console.log(this.userList);
        
      },err=>{}
    );
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.userService.getUsers().subscribe(data => {

      this.rowData = data.users;
    })
  }

  onRowSelectedChange(){
    let selctedRows=this.gridApi.getSelectedRows();
    selctedRows.forEach(element => {
      this.selectedName=element;
      this.userId=this.selectedName._id;
    });
    
  }


  selectRole() {
    var roleFilterComponent = this.gridApi.getFilterInstance("role");
    roleFilterComponent.setModel({
      type: "equals",
      filter: 1
    });

    this.gridApi.onFilterChanged();
  }
}
