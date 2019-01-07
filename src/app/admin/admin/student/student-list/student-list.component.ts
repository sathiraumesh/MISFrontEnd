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
      { headerName: 'Student Registration Number', field: 'studentRegistrationNumber', },
      { headerName: 'Student Name', field: 'studentName', },
      { headerName: 'Student DOB', field: 'studentDOB', },
      { headerName: 'Student Age', field: 'studentAge' },
      { headerName: 'Student Gender', field: 'gender' },
      { headerName: 'Student Faculty', field: 'studentFaculty' },
      { headerName: 'Student Marrital Status', field: 'marritalStatus' },
      { headerName: 'Student Nationality', field: 'studentNationality' },
      { headerName: 'Student Position of the Family', field: 'studentPositionOfFamily' },
      { headerName: 'Student Address', field: 'studentAddress' },
      { headerName: 'Student Term Address', field: 'studentTermAddress' },
      { headerName: 'Student Parent or Guardian', field: 'studentParentGuardian' },
      { headerName: 'Student Boarding or Relative', field: 'studentBoardingRelative' },
      { headerName: 'Student Amount Paid', field: 'studentAmountPaid' },
      { headerName: 'Occupation of Father', field: 'studentOccupationFather' },
      { headerName: 'Occupation of Mother', field: 'studentOccupationMother' },
      { headerName: 'Student Bursary', field: 'studentBursary' },
      { headerName: 'Student School', field: 'studentSchool' },
      { headerName: 'Games Played', field: 'gamesPlayed' }
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


  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.getStudentList();
  }

  onRowSelectedChange() {
    let selctedRows = this.gridApi.getSelectedRows();
    selctedRows.forEach(element => {
      this.selectedStudent = element;
      this.studentId = this.selectedStudent._id;
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
    var roleFilterComponent = this.gridApi.getFilterInstance("studentRegistrationNumber");

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

  selectByFaculty(event) {
    console.log(event.target.value);
    var selctedRows = this.gridApi.deselectAll();
    var roleFilterComponent = this.gridApi.getFilterInstance("Faculty");

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
    var roleFilterComponent = this.gridApi.getFilterInstance("studentRegistrationNumber");

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

