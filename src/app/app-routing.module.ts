import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MajorListComponent } from './major/major-list/major-list.component';
import { MajorCreateComponent } from './major/major-create/major-create.component';
import { MajorEditComponent } from './major/major-edit/major-edit.component';
import { MajorDetailComponent } from './major/major-detail/major-detail.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentCreateComponent } from './student/student-create/student-create.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { MajorCodeCheckComponent } from './major/major-code-check/major-code-check.component';

const routes: Routes = [
  { path: "", redirectTo: "/majors/list", pathMatch: "full" },
  { path: "majors/code-check", component: MajorCodeCheckComponent },
  { path: "majors/create", component: MajorCreateComponent },
  { path: "students/create", component: StudentCreateComponent },
  { path: "majors/list", component: MajorListComponent },
  { path: "students/list", component: StudentListComponent },
  { path: "majors/edit/:id", component: MajorEditComponent },
  { path: "students/edit/:id", component: StudentEditComponent },
  { path: "majors/detail/:id", component: MajorDetailComponent },
  { path: "students/detail/:id", component: StudentDetailComponent },
  { path: "**", component: MajorListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
