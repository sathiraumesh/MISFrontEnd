import { Component, OnInit } from '@angular/core';
//import{Student}from '../../../models';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

//   onClickMe(args) {
//     const self = this;
//     const filename = 'exportExcel.xlsx';
//     const json = JSON.stringify(self.spread.toJSON());
//     self.excelIO.save(json, function (blob) {
//       saveAs(blob, filename);
//   }, function (e) {
//       console.log(e);
//   });
//   }

}
