import { Component, OnInit } from '@angular/core';
import { FormControl, Form, Validators } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { DrugInventoryService } from '../../../../../core/drug-inventory.service';
import { map, startWith } from 'rxjs/operators';
import { Drug } from '../../../../../models';
import { Router } from '@angular/router';


export interface User {
  name: string;
}
@Component({
  selector: 'drug-inventory-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {

  stockDrugContainer = [];
  selectdeOption: any = null;
  drugList: any;
  myControl = new FormControl();
  stockForm: FormGroup;
  // options: string[] = [];
  options: any[] = [
    // {quantity: "0", _id: "5bb79bc7740e96078af5955b", drugId: 10002, drugName: "Asprin", dosage: "40000mg"},
    // {quantity: "0", _id: "5bb8314b4936b403b8d3cb0b", drugId: 10004, drugName: "MAGNA", dosage: "400 ML"}
  ];
  filteredOptions: Observable<any[]>;

  constructor(private formBuilder: FormBuilder, private drugService: DrugInventoryService,private router:Router) {

  }

  ngOnInit() {

    this.getDrugDetails();


    this.stockForm = this.formBuilder.group({
      items: this.formBuilder.array([])
    });


    //Auto complete option pipe
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | any>(''),
        map(value => typeof value === 'string' ? value : value.drugName),
        map(drugName => drugName ? this._filter(drugName) : this.options.slice())
      );

    this.getDrugDetails();
  }




  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.drugName.toLowerCase().indexOf(filterValue) === 0);
  }


  displayFn(drug?: any): string | undefined {
    return drug ? drug.drugName : undefined;
  }


  get items() {
    return this.stockForm.get("items") as FormArray;
  }


  addItems() {


    if (!(this.selectdeOption == null)) {

      console.log("selected item");
      console.log(this.selectdeOption);

      if (!this.stockDrugContainer.includes(this.selectdeOption)) {

        const item = this.formBuilder.group({
          drugId: this.selectdeOption.drugId,
          drugName: this.selectdeOption.drugName,
          dosage: this.selectdeOption.dosage,
          drugShowName: new FormControl({ value: this.selectdeOption.drugName, disabled: true }),
          dosageShow: new FormControl({ value: this.selectdeOption.dosage, disabled: true }),
          quantity: new FormControl(0, Validators.compose([
            Validators.required,
            Validators.pattern('^(0|[1-9][0-9]*)$')
          ]))
        });

        this.stockDrugContainer.push(this.selectdeOption);
        this.items.push(item);
        console.log("added to the stock drug container");
        console.log(this.stockDrugContainer);
      }


    }



  }




  deleteItem(i) {

    console.log("deleting values");
    console.log(this.stockDrugContainer);
    console.log("deleting values drugID");
    console.log(this.items.at(i).value.drugId);
    var drugId = this.items.at(i).value.drugId;
    var index = -1;
    this.stockDrugContainer.forEach(function (item, j) {
      if (item.drugId == drugId) {
        index = j;
      }
    });

    if (index > -1) {
      console.log("conatined in the array");
      this.stockDrugContainer.splice(index, 1);
      console.log(this.stockDrugContainer);

    }
    this.items.removeAt(i);

  }




  getDrugDetails() {
    this.drugService.getDrugList().subscribe(data => {
      console.log("this is data");
      this.options = data;

      console.log(this.options);
      // console.log(this.options);
    }, err => {

    });
  }














  getselectedOption(option) {
    this.selectdeOption = option;
    console.log(this.selectdeOption);
  }


  // clearBox(event) {
  //    console.log(event.target.value = "");
  // }



  saveStock() {
    if (this.stockForm.valid) {
      console.log(this.stockForm.value)
      this.drugService.saveDrugStock(this.stockForm.value).subscribe(data => {
        console.log(data);
        this.stockDrugContainer = [];
        for (var i = 0; i < this.items.length; i++) {
          this.items.removeAt(i);
        }
      }, err => {
        console.log(err);
      });

    }

  }

  cancelStock() {
    
  }

}
