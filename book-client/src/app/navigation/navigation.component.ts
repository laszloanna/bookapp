import { Component, OnInit } from '@angular/core';
import { NavItem } from '../interfaces/nav.item.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navItems: NavItem[];

  constructor() {
    this.navItems=[
      { name: "Books", route:"/books"},
      { name: "My work", route:""},
      { name: "Favorites", route:""},
      { name: "To read", route:""},
      { name: "Profile", route:"/profile"},
      { name: "Sign out", route:""},
    ]
   }

  ngOnInit(): void {
  }

}
