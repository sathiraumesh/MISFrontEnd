import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DrugInventoryService {

  constructor(private http:HttpClient) { }

  getDrugList(){
    return this.http.get<any>("api/drugs");
  }

  registerDrug(drug){
    return this.http.post<any>("api/drugs/",drug);
  }
  
}
