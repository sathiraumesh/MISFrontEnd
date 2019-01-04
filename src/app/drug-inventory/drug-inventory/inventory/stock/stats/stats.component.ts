import { Component, OnInit } from '@angular/core';
import { DrugInventoryService } from 'src/app/core/drug-inventory.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private drugService: DrugInventoryService) { }
  columnDefs;
  rowData;

  ngOnInit() {

    this.columnDefs = [
      { headerName: 'Drug ID', field: 'drugId', },
      { headerName: 'Drug Name', field: 'drugName', },
      { headerName: 'Dosage', field: 'dosage' },
      { headerName: 'Quantity', field: 'quantity' }
    ];

    this.getDrugList();
  }


  getDrugList() {
    this.drugService.getDrugList().subscribe(data => {
      console.log(data);
      this.rowData = data;
    }, err => {
      console.log(err)
    });
  }


}
