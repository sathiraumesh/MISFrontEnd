import { Component, OnInit } from '@angular/core';
import { Drug } from '../../../../models';
import { DrugInventoryService } from '../../../../core/drug-inventory.service';

@Component({
  selector: 'app-add-drug',
  templateUrl: './add-drug.component.html',
  styleUrls: ['./add-drug.component.css']
})
export class AddDrugComponent implements OnInit {

  drug: Drug = {
    drugId: null,
    drugName: null,
    dosage: null
  }
  constructor(private drugInventoryService: DrugInventoryService) { }

  ngOnInit() {
  }


  registerDrug(form: any) {
    if (!form.invalid) {
      this.drugInventoryService.registerDrug(this.drug).subscribe(data=>{
        console.log(data);
      },err=>{
        console.log(err);
      });


    }else{
      console.log("drug registration works");
    }
  }
}
