import { Component, OnInit } from '@angular/core';
import { DrugInventoryService } from '../../../core/drug-inventory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private drugService:DrugInventoryService) { }
  data;
  ngOnInit() {
    this.getDrugList();
  }

  getDrugList(){
    this.drugService.getDrugList().subscribe(data=>{
      this.data=data;
    },err=>{
     console.log(err)
    });
  }
}
