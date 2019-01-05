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
      { headerName: 'FIRST NAME', field: 'firstName', },
      { headerName: 'LAST NAME', field: 'lastName', },
      { headerName: 'BIRTH DAY', field: 'dateOfBirth' },
      { headerName: 'NIC NUMBER', field: 'nic' },
      { headerName: "ROLE", field: 'role', suppressFilter: true },
      { headerName: "CONTACT NUMBER", field: 'telePhoneNumber' }


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
  private searchToggle = false;
  private searchNic = null;



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
    var selctedRows = this.gridApi.deselectAll();
    var roleFilterComponent = this.gridApi.getFilterInstance("role");
    roleFilterComponent.setModel({
      type: "equals",
      filter: "Doctor"
    });
    this.selectedRole = "Doctors"
    this.rowSelected = false;
    this.gridApi.onFilterChanged();
  }

  selectByNIC(event) {
    console.log(event.target.value);
    var selctedRows = this.gridApi.deselectAll();
    var roleFilterComponent = this.gridApi.getFilterInstance("nic");

    roleFilterComponent.setModel({
      type: "contains",
      filter: event.target.value
    });
    this.rowSelected = false;
    this.gridApi.onFilterChanged();


  }

  selectByFirstName(event) {
    console.log(event.target.value);
    var selctedRows = this.gridApi.deselectAll();
    var roleFilterComponent = this.gridApi.getFilterInstance("firstName");

    roleFilterComponent.setModel({
      type: "contains",
      filter: event.target.value
    });
    this.rowSelected = false;
    this.gridApi.onFilterChanged();


  }

  selectByLastName(event) {
    console.log(event.target.value);
    var selctedRows = this.gridApi.deselectAll();
    var roleFilterComponent = this.gridApi.getFilterInstance("lastName");

    roleFilterComponent.setModel({
      type: "contains",
      filter: event.target.value
    });
    this.rowSelected = false;
    this.gridApi.onFilterChanged();


  }

  selectAll() {
    var selctedRows = this.gridApi.deselectAll();
    var roleFilterComponent = this.gridApi.getFilterInstance("role");
    roleFilterComponent.setModel(null);
    this.gridApi.onFilterChanged();
    this.rowSelected = false;
  }


  selectNurses() {
    var selctedRows = this.gridApi.deselectAll();
    var roleFilterComponent = this.gridApi.getFilterInstance("role");
    roleFilterComponent.setModel({
      type: "equals",
      filter: "Nurse"
    });
    this.selectedRole = "Nurses"
    this.rowSelected = false;
    this.gridApi.onFilterChanged();
  }


  clearFilters(fil1, fil2, fil3, fil0) {
    fil0.value = "ALL";
    fil1.value = "";
    fil2.value = "";
    fil3.value = ""
    this.selectAll();

    var selctedRows = this.gridApi.deselectAll();
    var roleFilterComponent = this.gridApi.getFilterInstance("lastName");

    roleFilterComponent.setModel({
      type: "contains",
      filter: ""
    });



    selctedRows = this.gridApi.deselectAll();
    roleFilterComponent = this.gridApi.getFilterInstance("firstName");

    roleFilterComponent.setModel({
      type: "contains",
      filter: ""
    });



    selctedRows = this.gridApi.deselectAll();
    roleFilterComponent = this.gridApi.getFilterInstance("nic");

    roleFilterComponent.setModel({
      type: "contains",
      filter: ""
    });

    this.rowSelected = false;
    this.gridApi.onFilterChanged();

  }

  toggleSearch() {
    if (!this.searchToggle) {
      this.searchToggle = true;
    }
    else {
      this.searchToggle = false;
    }

  }



}
