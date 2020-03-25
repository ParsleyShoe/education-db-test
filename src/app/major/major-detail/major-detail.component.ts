import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MajorService } from '../major.service';
import { Major } from '../major.class';

@Component({
  selector: 'app-major-detail',
  templateUrl: './major-detail.component.html',
  styleUrls: ['./major-detail.component.css']
})
export class MajorDetailComponent implements OnInit {
  major:Major = new Major();

  delete():void {
    this.majorsvc.remove(this.major).subscribe(
      res => {
        console.debug("Successfully deleted.", res);
        this.router.navigateByUrl("/majors/list");
      },
      err => {
        console.error("Error deleting major: ", err);
      }
    );
  };

  constructor(
    private route:ActivatedRoute,
    private majorsvc:MajorService,
    private router:Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id; //reads url and binds value of id
    this.majorsvc.get(id).subscribe(
      res => {
        this.major = res;
        console.debug("Major: ", res);
      },
      err => {
        console.error("Error calling Major.get(): ", err);
      }
    );
  }

}
