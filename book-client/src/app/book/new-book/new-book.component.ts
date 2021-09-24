import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  constructor() { }

  newPost : string = "";
  enteredValue: string = "";

  ngOnInit(): void {
  }

  onClick(): void {
    this.newPost = this.enteredValue;
  }

}
