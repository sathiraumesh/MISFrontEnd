import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class StudentService {

  constructor(private http: HttpClient) { }

  addStudent(student) {
    return this.http.post<any>("/api/student/", student);
  }

  getStudentList() {
    return this.http.get<any>("/api/student/");
  }

  getStudent(id) {
    return this.http.get<any>("/api/student/" + id);
  }

  deleteStudent(id) {
    return this.http.delete<any>("/api/student/" + id);
  }

  editStudent(id, data) {
    return this.http.put<any>("/api/student/" + id, data);
  }
}
