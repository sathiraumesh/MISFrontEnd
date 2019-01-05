import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AutheticationModule } from '../authetication/authetication.module';
import { AuthenticationService } from '../authetication/authentication.service';

@Injectable()
export class UserService {

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  getuserDetails(id) {
    return this.http.get<any>("api/users/" + id);
  }

  getUserId() {
    if (this.authService.loggedIn()) {
      return this.authService.getDecodedAccessToken(localStorage.getItem("token")).id;
    }
  }

  getUser(userId) {
    return this.http.get<any>("api/users/" + userId);
  }

  getUsers() {
    return this.http.get<any>("api/users");
  }

  addUser(user) {
    return this.http.post<any>("api/users", user);
  }

  deleteUser(userId) {
    return this.http.delete<any>("api/users/" + userId);
  }

  editUser(userId, data) {
    return this.http.put<any>("api/users/" + userId, data);
  }

  resetUsersPassword(data, userId) {
    return this.http.put<any>("api/users/reset/ " + userId, data);
  }

}
