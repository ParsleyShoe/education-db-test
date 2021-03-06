import { Component, OnInit } from '@angular/core';
import { MajorService } from '../major.service';
import { Router } from '@angular/router';
import { Major } from '../major.class';

@Component({
  selector: 'app-major-create',
  templateUrl: './major-create.component.html',
  styleUrls: ['./major-create.component.css']
})
export class MajorCreateComponent implements OnInit {
  major:Major = new Major();

  save():void {
    this.major.minSat = Number(this.major.minSat);
    this.majorsvc.create(this.major).subscribe(
      res => {
        console.debug("Major: ", res);
        this.router.navigateByUrl("/majors/list");
      },
      err => {
        console.error("Error creating major: ", err);
      }
    );
  };

  constructor(
    private majorsvc:MajorService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

}
