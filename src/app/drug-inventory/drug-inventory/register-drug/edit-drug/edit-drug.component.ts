import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-drug',
  templateUrl: './edit-drug.component.html',
  styleUrls: ['./edit-drug.component.css']
})
export class EditDrugComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EditDrugComponent>){

  }

  ngOnInit() {
  }

  editDrug(form,data) {

    if(!form.invalid){
      this.dialogRef.close({edited:true,
                          data:data})
    }
    console.log(data);
  }

  closeDialog() {
    this.dialogRef.close({edited:false})
    console.log("closed");
  }

}
