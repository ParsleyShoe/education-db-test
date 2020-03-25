import { Component, OnInit } from '@angular/core';
import { MajorService } from '../major.service';
import { Major } from '../major.class';

@Component({
  selector: 'app-major-code-check',
  templateUrl: './major-code-check.component.html',
  styleUrls: ['./major-code-check.component.css']
})
export class MajorCodeCheckComponent implements OnInit {

  major:Major = new Major();
  message:string = "";
  color:string;

  check():void {
    this.majorsvc.check(this.major.code).subscribe(
      res => {
        this.major = res;
        this.message = this.major.name;
        this.color = "#212529";
        console.debug("Major: ", res);
      },
      err => {
        this.message = "Major not found.";
        this.color = "red";
        console.error("Error checking code: ", err);
      }
    );
  };

  constructor(
    private majorsvc:MajorService
  ) { }

  ngOnInit(): void {
  }

}
