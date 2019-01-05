import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../../core/student.service';
import { Router } from '@angular/router';
import { Students } from '../../../../models';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private studentService: StudentService, private router: Router) { }




  ngOnInit() {

    this.columnDefs = [
      { headerName: 'Student ID', field: 'studentId', },
      { headerName: 'Student Name', field: 'studentName', },
      { headerName: 'Student DOB', field: 'studentDOB', },
      { headerName: 'Student Age', field: 'studentAge' }
    ];
  }

  goToPath() {
    let path = "/admin/students/" + this.studentId;
    this.router.navigate([path]);
  }

  private columnDefs;
  private rowData: any;
  private gridApi;
  private gridColumnApi;
  private selectedStudent;
  private studentId;
  private rowSelected: boolean = false;
  private selectedRole = "ALL";
  private searchToggle = false;
  private searchNic = null;


  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.getStudentList();
  }

  onRowSelectedChange() {
    let selctedRows = this.gridApi.getSelectedRows();
    selctedRows.forEach(element => {
      this.selectedStudent = element;
      this.studentId = this.selectedStudent.studentId;
      console.log(this.studentId);

      this.rowSelected = true;

    });

  }

  onRemoveSelected() {
    var selectedData = this.gridApi.getSelectedRows();
    console.log(selectedData);
    var res = this.gridApi.updateRowData({ remove: selectedData });

  }

  getStudentList() {
    this.studentService.getStudentList().subscribe(data => {
      this.rowData = data;
    }, err => {
      console.log(err)
    });
  }

  selectByStudentID(event) {
    console.log(event.target.value);
    var selctedRows = this.gridApi.deselectAll();
    var roleFilterComponent = this.gridApi.getFilterInstance("studentId");

    roleFilterComponent.setModel({
      type: "contains",
      filter: event.target.value
    });
    this.rowSelected = false;
    this.gridApi.onFilterChanged();

  }

  selectByStudentName(event) {
    console.log(event.target.value);
    var selctedRows = this.gridApi.deselectAll();
    var roleFilterComponent = this.gridApi.getFilterInstance("studentName");

    roleFilterComponent.setModel({
      type: "contains",
      filter: event.target.value
    });
    this.rowSelected = false;
    this.gridApi.onFilterChanged();

  }

  clearFilters(fil1, fil2) {
    fil1.value = "";
    fil2.value = "";

    var selctedRows = this.gridApi.deselectAll();
    var roleFilterComponent = this.gridApi.getFilterInstance("studentId");

    roleFilterComponent.setModel({
      type: "contains",
      filter: ""
    });


    selctedRows = this.gridApi.deselectAll();
    roleFilterComponent = this.gridApi.getFilterInstance("studentName");

    roleFilterComponent.setModel({
      type: "contains",
      filter: ""
    });

    this.rowSelected = false;
    this.gridApi.onFilterChanged();

  }

  deselectItem() {
    this.gridApi.forEachNode(function (node) {
      node.setSelected(false);
    });
  }
}

