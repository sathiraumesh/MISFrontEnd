import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../core/user.service';
import { MatTableDataSource, MatTable } from '@angular/material';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private columnDefs;
  private rowData: any;
  private gridApi;
  private gridColumnApi;

  constructor(private http: HttpClient, private userService: UserService) {

    this.columnDefs = [
      { headerName: 'First Name', field: 'firstName', },
      { headerName: 'Last Name', field: 'lastName', },
      { headerName: 'Birth Day', field: 'dateOfBirth' },
      { headerName: "Role", field: 'role',suppressFilter: true }

    ];

  }


  ngOnInit() {

  }


  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.userService.getUsers().subscribe(data => {

      this.rowData = data.users;
    })
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