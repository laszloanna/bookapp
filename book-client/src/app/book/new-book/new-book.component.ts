import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  genresList: string[];

  constructor( public dialogRef: MatDialogRef<NewBookComponent>,
    ) {

    this.bookForm = new FormGroup({
      'title': new FormControl(null,{validators:[Validators.required]}),
      'summary': new FormControl(null,{validators:[Validators.required]}),
      'genre': new FormControl(null,{validators:[Validators.required]}),
      'country': new FormControl(null),
      'length': new FormControl(null),
      'link': new FormControl(null)
    });

    this.genresList = [
      'adventure', 'historical', 'romance', 'fantasy', 'science-fiction', 'young adult',
      'children\'s book', 'non-fiction', 'thriller', 'horror', 'dystopian'
    ];
  }

  bookForm: FormGroup;


  ngOnInit(): void {}

  addNewBook(form: FormGroup){
    if(form.valid){
      alert("new book added");
      this.bookForm.reset();
      this.dialogRef.close();
    }
  }

}
