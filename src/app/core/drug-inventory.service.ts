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

  deletDrug(id){
    return this.http.delete<any>("api/drugs/"+id);
  }

  getDrug(id){
    return this.http.get<any>("api/drugs/"+id);
  }
  editDrug(id,data){
    return this.http.put<any>("api/drugs/"+id,data);
  }
  saveDrugStock(stock){
    return this.http.post<any>("api/drugs/stocks",stock);
  }
  
}
