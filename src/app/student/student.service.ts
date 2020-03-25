import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from './student.class';

const url:string = "http://localhost:5000/api/students";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  list():Observable<Student[]> {
    return this.http.get(`${url}`) as Observable<Student[]>;
  };
  get(id:any):Observable<Student> {
    return this.http.get(`${url}/${id}`) as Observable<Student>;
  };
  create(major:Student):Observable<Student> {
    return this.http.post(`${url}`, major) as Observable<Student>;
  };
  change(major:Student):Observable<any> {
    return this.http.put(`${url}/${major.id}`, major) as Observable<any>;
  };
  remove(major:Student):Observable<any> {
    return this.http.delete(`${url}/${major.id}`) as Observable<any>;
  };

  constructor(
    private http:HttpClient
  ) { }
}
