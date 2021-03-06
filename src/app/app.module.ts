import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MajorListComponent } from './major/major-list/major-list.component';
import { MajorCreateComponent } from './major/major-create/major-create.component';
import { MajorEditComponent } from './major/major-edit/major-edit.component';
import { MajorDetailComponent } from './major/major-detail/major-detail.component';
import { MenuComponent } from './menu/menu/menu.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentCreateComponent } from './student/student-create/student-create.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { SortPipe } from './pipes/sort.pipe';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { MajorCodeCheckComponent } from './major/major-code-check/major-code-check.component';
import { MajorSearchPipe } from './major/major-search.pipe';
import { StudentSearchPipe } from './student/student-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MajorListComponent,
    MajorCreateComponent,
    MajorEditComponent,
    MajorDetailComponent,
    MenuComponent,
    StudentListComponent,
    StudentCreateComponent,
    StudentDetailComponent,
    StudentEditComponent,
    SortPipe,
    MenuItemComponent,
    MajorCodeCheckComponent,
    MajorSearchPipe,
    StudentSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
