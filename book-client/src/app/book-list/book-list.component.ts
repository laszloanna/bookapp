import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books = [
    {_id: 1, title: "First book", author: "asd1", summary: "Brief summary of the first book", genre: "fantasy"},
    {_id: 2, title: "Second book", author: "asd2", summary: "Brief summary of the second book", genre: "romance"},
    {_id: 3, title: "Third book", author: "asd3", summary: "Brief summary of the third book", genre: "horror"},
    {_id: 4, title: "Fourth book", author: "asd4", summary: "Brief summary of the fourth book", genre: "thriller"}
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
