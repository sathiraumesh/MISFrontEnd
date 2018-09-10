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

  constructor(private userService: UserService, private router: Router) {

    this.columnDefs = [
      { headerName: 'First Name', field: 'firstName', },
      { headerName: 'Last Name', field: 'lastName', },
      { headerName: 'Birth Day', field: 'dateOfBirth' },
      { headerName: 'NIC Number', field: 'nic' },
      { headerName: "Role", field: 'role', suppressFilter: true },
      { headerName: "Contact Number", field: 'telePhoneNumber' }


    ];

  }

  private userList: User[] = [];
  ngOnInit() {

    // this.getUserLsit();
  }

  goToPath() {
    let path = "/admin/users/" + this.userId;
    this.router.navigate([path]);
  }


  private columnDefs;
  private rowData: any;
  private gridApi;
  private gridColumnApi;
  private selectedName;
  private userId;
  private rowSelected: boolean = false;
  private selectedRole = "ALL";



  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.userService.getUsers().subscribe(data => {
      console.log(data);
      this.rowData = data.users;
    })
  }

  onRowSelectedChange() {
    let selctedRows = this.gridApi.getSelectedRows();
    selctedRows.forEach(element => {
      this.selectedName = element;
      this.userId = this.selectedName._id;
      this.rowSelected = true;
    });

  }


  selectDoctors() {
    var selctedRows=this.gridApi.deselectAll();
    var roleFilterComponent = this.gridApi.getFilterInstance("role");
    roleFilterComponent.setModel({
      type: "equals",
      filter: "Doctor"
    });
    this.selectedRole = "Doctors"
    this.rowSelected = false;
    this.gridApi.onFilterChanged();
  }

  selectAll() {
    var selctedRows=this.gridApi.deselectAll();
    var roleFilterComponent = this.gridApi.getFilterInstance("role");
    roleFilterComponent.setModel(null);
    this.gridApi.onFilterChanged();
    this.rowSelected = false;
  }


  selectNurses() {
    var selctedRows=this.gridApi.deselectAll();
    var roleFilterComponent = this.gridApi.getFilterInstance("role");
    roleFilterComponent.setModel({
      type: "equals",
      filter: "Nurse"
    });
    this.selectedRole = "Nurses"
    this.rowSelected = false;
    this.gridApi.onFilterChanged();
  }

  
}
