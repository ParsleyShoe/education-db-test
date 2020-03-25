import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './student.class';

@Pipe({
  name: 'studentSearch'
})
export class StudentSearchPipe implements PipeTransform {

  transform(students:Student[], searchCriteria:string = "".toLowerCase()):Student[] {
    if (searchCriteria === "") return students;
    let selectedStudents:Student[] = [];
    for (let student of students) {
      if (
        student.id.toString().includes(searchCriteria)
        || student.name.toLowerCase().includes(searchCriteria)
        || student.sat.toString().includes(searchCriteria)
        || student.gpa.toString().includes(searchCriteria)
        || (student.majorId != null && student.major.name.toLowerCase().includes(searchCriteria))
      ) selectedStudents.push(student);
    }
    return selectedStudents;
  }

}
