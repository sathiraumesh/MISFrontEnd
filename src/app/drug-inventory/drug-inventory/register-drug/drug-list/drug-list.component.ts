import { Component, OnInit } from '@angular/core';
import { DrugInventoryService } from '../../../../core/drug-inventory.service';
import { MatDialog } from '@angular/material';
import { PopupDialogComponent } from 'src/app/drug-inventory/popup-dialog/popup-dialog.component';
import { EditDrugComponent } from '../edit-drug/edit-drug.component';
import { doesNotThrow } from 'assert';

@Component({
  selector: 'app-drug-list',
  templateUrl: './drug-list.component.html',
  styleUrls: ['./drug-list.component.css']
})
export class DrugListComponent implements OnInit {

  constructor(private drugService: DrugInventoryService, private dialog: MatDialog) { }

  private columnDefs;
  private rowData: any;
  private gridApi;
  private gridColumnApi;
  private rowSelected: boolean = false;



  private selectedDrug: any = null;
  private drugId = null;
  private drug = null;



  ngOnInit() {

    this.columnDefs = [
      { headerName: 'Drug ID', field: 'drugId', },
      { headerName: 'Drug Name', field: 'drugName', },
      { headerName: 'Dosage', field: 'dosage' }
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





  // function for opening and closing the popup dialog 
  openDialog(): void {
    const dialogRef = this.dialog.open(PopupDialogComponent, {
      width: "20%",
      data: "Are you sure",
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        if (this.drugId !== null) {
          this.drugService.deletDrug(this.drugId).subscribe(data => {
            this.onRemoveSelected();
            console.log(data);
          }, err => { });
        }
        console.log("delete");


      }
      else {
        console.log("not delete");
      }
    });
  }

  editDialog(): void {





    if (this.drugId != null) {

      this.drugService.getDrug(this.drugId).subscribe(data => {
        this.drug = data;
        const dialogRef = this.dialog.open(EditDrugComponent, {
          width: "40%",
          data: this.drug,
          autoFocus: false
        });

        dialogRef.afterClosed().subscribe(result => {

         console.log(result);
         if(result.edited){
            this.drugService.editDrug(data.drugId,data).subscribe(data=>{
              console.log(data);
              var selectedData = this.gridApi.getSelectedRows();
              console.log(selectedData[0].drugId=result.data.drugId);
              console.log(selectedData[0].drugName=result.data.drugName);
              console.log(selectedData[0].dosage=result.data.dosage);
              var res = this.gridApi.updateRowData({ update: selectedData });

            },err=>{});
         }else{

         }

        });

      }, err => {

      });


    }


  }


  deselectItem() {
    this.gridApi.forEachNode(function (node) {
      node.setSelected(false);
    });
  }

  

  updateItems(drugId,drugName,dosage) {
    
    var selectedData = this.gridApi.getSelectedRows();
    console.log("sathira");
    console.log(selectedData[0].drugId=drugId);
    console.log(selectedData[0].drugName=drugName);
    console.log(selectedData[0].dosage=dosage);
    var res = this.gridApi.updateRowData({ update: selectedData });
}

}



