import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestingService {

  constructor(private http:HttpClient) { }

  getList(){
    return this.http.get<any>("/api/authenticate");
  }
}
