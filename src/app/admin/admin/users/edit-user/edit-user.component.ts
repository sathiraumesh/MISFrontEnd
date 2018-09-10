import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EditUserComponent>) { }

  ngOnInit() {
  }

  editUser(form,data) {

    if(!form.invalid){
      this.dialogRef.close({edited:true,
                          data:data})
    }
    console.log(form);
  }

  closeDialog() {
    this.dialogRef.close({edited:false})
  }
}