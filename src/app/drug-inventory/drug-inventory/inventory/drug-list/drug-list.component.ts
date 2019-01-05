import { Component, OnInit } from '@angular/core';
import { DrugInventoryService } from '../../../../core/drug-inventory.service';

@Component({
  selector: 'app-drug-list',
  templateUrl: './drug-list.component.html',
  styleUrls: ['./drug-list.component.css']
})
export class DrugListComponent implements OnInit {

  constructor(private drugService: DrugInventoryService) { }
  private columnDefs;
  private rowData: any;
  private gridApi;
  private gridColumnApi;
  private rowSelected: boolean = false;



  private selectedDrug: any = null;
  private drugId = null;
  private drug = null;
  private searchToggle = false;



  ngOnInit() {

    this.columnDefs = [
      { headerName: 'Drug ID', field: 'drugId', },
      { headerName: 'Drug Name', field: 'drugName', },
      { headerName: 'Dosage', field: 'dosage' },
      { headerName: 'Quantity', field: 'quantity' }
    ];

  }


  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.getDrugList();

  }


  onRowSelectedChange() {
    let selctedRows = this.gridApi.getSelectedRows();
    selctedRows.forEach(element => {
      this.selectedDrug = element;
      this.drugId = this.selectedDrug.drugId;
      console.log(this.drugId);

      this.rowSelected = true;

    });

  }

  onRemoveSelected() {
    var selectedData = this.gridApi.getSelectedRows();
    console.log(selectedData);
    var res = this.gridApi.updateRowData({ remove: selectedData });

  }


  getDrugList() {
    this.drugService.getDrugList().subscribe(data => {
      this.rowData = data;
    }, err => {
      console.log(err)
    });
  }


  selectByDrugID(event) {
    console.log(event.target.value);
    var selctedRows = this.gridApi.deselectAll();
    var roleFilterComponent = this.gridApi.getFilterInstance("drugId");

    roleFilterComponent.setModel({
      type: "contains",
      filter: event.target.value
    });
    this.rowSelected = false;
    this.gridApi.onFilterChanged();

  }

  selectByDrugName(event) {
    console.log(event.target.value);
    var selctedRows = this.gridApi.deselectAll();
    var roleFilterComponent = this.gridApi.getFilterInstance("drugName");

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
    var roleFilterComponent = this.gridApi.getFilterInstance("drugId");

    roleFilterComponent.setModel({
      type: "contains",
      filter: ""
    });


    selctedRows = this.gridApi.deselectAll();
    roleFilterComponent = this.gridApi.getFilterInstance("drugName");

    roleFilterComponent.setModel({
      type: "contains",
      filter: ""
    });


    this.rowSelected = false;
    this.gridApi.onFilterChanged();

  }

  // function for opening and closing the popup dialog 

  deselectItem() {
    this.gridApi.forEachNode(function (node) {
      node.setSelected(false);
    });
  }


  updateItems(drugId, drugName, dosage) {

    var selectedData = this.gridApi.getSelectedRows();
    console.log("sathira");
    console.log(selectedData[0].drugId = drugId);
    console.log(selectedData[0].drugName = drugName);
    console.log(selectedData[0].dosage = dosage);
    var res = this.gridApi.updateRowData({ update: selectedData });
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
