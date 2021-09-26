import { Component, OnInit } from '@angular/core';
import { NavItem } from '../interfaces/nav.item.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navItems: NavItem[];

  constructor() {}

  ngOnInit(): void {
    this.navItems=[
      { name: "Books", route:""},
      { name: "My work", route:""},
      { name: "Profile", route:"/profile"},
      { name: "Sign up", route:"/signup"},
      { name: "Log in", route:"/login"},
      { name: "Log out", route:""}
    ]
  }

}
