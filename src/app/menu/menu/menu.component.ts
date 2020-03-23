import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus:Menu[] = [
    new Menu("Majors", "/majors/list", "List of majors"),
    new Menu("Students", "/students/list", "List of students")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
