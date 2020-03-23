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

  constructor(
    private http:HttpClient
  ) { }
}
