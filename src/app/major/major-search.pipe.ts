import { Pipe, PipeTransform } from '@angular/core';
import { Major } from './major.class';

@Pipe({
  name: 'majorSearch'
})
export class MajorSearchPipe implements PipeTransform {

  transform(majors:Major[], searchCriteria:string = "".toLowerCase()):Major[] {
    if (searchCriteria === "") return majors;
    let selectedMajors:Major[] = [];
    for (let major of majors) {
      if (
        major.id.toString().includes(searchCriteria)
        || major.code.toLowerCase().includes(searchCriteria)
        || major.name.toLowerCase().includes(searchCriteria)
        || major.minSat.toString().includes(searchCriteria)
      ) selectedMajors.push(major);
    }
    return selectedMajors;
  }

}