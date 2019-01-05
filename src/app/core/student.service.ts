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

  getStudent(studentId) {
    return this.http.get<any>("/api/student/" + studentId);
  }

  deleteStudent(studentId) {
    return this.http.delete<any>("/api/student/" + studentId);
  }

  editStudent(studentId, data) {
    return this.http.put<any>("/api/student/" + studentId, data);
  }
}
