import { Injectable } from '@angular/core';
import { AutheticationModule } from './authetication.module';
import { HttpClient } from '../../../node_modules/@angular/common/http';


@Injectable({
  providedIn: AutheticationModule
})
export class AuthenticationService {

  constructor(public http: HttpClient) { }

  login(user) {
    return this.http.post<any>("/api/authenticate", user);
  }
}
