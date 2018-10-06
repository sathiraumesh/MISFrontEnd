import { Component, OnInit } from '@angular/core';
import { FormControl, Form } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { DrugInventoryService } from '../../../../../core/drug-inventory.service';
import { map, startWith } from 'rxjs/operators';



@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {

  stockDrugContainer = [];
  selectdeOption: any = null;
  drugList: any;
  myControl = new FormControl();
  stockForm: FormGroup;
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  constructor(private formBuilder: FormBuilder, private drugService: DrugInventoryService) {

  }

  ngOnInit() {

    this.getDrugDetails();
    this.stockForm = this.formBuilder.group({
      items: this.formBuilder.array([])
    });

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }


  get items() {
    return this.stockForm.get("items") as FormArray;
  }

  addItems() {


    if (!(this.selectdeOption == null)) {


       console.log(this.selectdeOption);

      if (!this.stockDrugContainer.includes(this.selectdeOption)) {
        var detailSplit =  this.selectdeOption.split(" ");

        console.log(detailSplit);
        const item = this.formBuilder.group({
          drugId:detailSplit[3],
          drugName:detailSplit[0],
          dosage:detailSplit[1]+detailSplit[2],
          quantity: ""
        });

        this.stockDrugContainer.push(this.selectdeOption);
        this.items.push(item);
      
       console.log(this.stockDrugContainer);
      }


    }



  }




  deleteItem(i) {

    console.log("deleting values");
    console.log(this.stockDrugContainer);
    console.log(this.items.at(i).value);
    var index = this.stockDrugContainer.indexOf(this.items.at(i).value.drugName);
    if (index > -1) {
       console.log("conatined in the array");
      this.stockDrugContainer.splice(index, 1);
       console.log(this.stockDrugContainer);

    }
    this.items.removeAt(i);

  }




  getDrugDetails() {
    this.drugService.getDrugList().subscribe(data => {
      this.drugList = data;
      this.options = this.getDrugList(data);
      // console.log(data);
      // console.log(this.options);
    }, err => {

    });
  }


  getDrugList(data: any[]) {
    let drugListNames: string[] = [];

    data.forEach(function (item) {
      let detail = item.drugName +" "+ item.dosage+" "+item.drugId;
      // console.log(detail);
      drugListNames.push(detail);
    });

    return drugListNames;
  }




  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }




  getselectedOption(option) {
    this.selectdeOption = option;
    // console.log(this.selectdeOption);
  }


  clearBox(event) {
    // console.log(event.target.value = "");
  }




}
