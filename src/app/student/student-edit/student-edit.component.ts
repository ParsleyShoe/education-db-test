import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student.class';
import { Major } from 'src/app/major/major.class';
import { MajorService } from 'src/app/major/major.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  student:Student = new Student();
  majors:Major[] = [];

  save():void {
    this.student.sat = Number(this.student.sat);
    this.student.gpa = Number(this.student.gpa);
    this.student.majorId = Number(this.student.majorId);
    this.studentsvc.change(this.student).subscribe(
      res => {
        console.debug("Student: ", res);
        this.router.navigateByUrl("/students/list");
      },
      err => {
        console.error("Error saving edit to student: ", err);
      }
    );
  };

  constructor(
    private studentsvc:StudentService,
    private route:ActivatedRoute,
    private router:Router,
    private major:MajorService
  ) { }

  ngOnInit(): void {
    this.major.list().subscribe(
      res => {
        this.majors = res;
        console.debug("Majors: ", res);
      },
      err => { console.error("Error: ", err); }
    );
    let id = this.route.snapshot.params.id;
    this.studentsvc.get(id).subscribe(
      res => {
        this.student = res;
        console.debug("Student: ", res);
      },
      err => {
        console.error("Error getting student: ", err);
      }
    );
  }

}
