import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/interfaces/book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  genresList: string[];

  constructor( public dialogRef: MatDialogRef<NewBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Book,
    public bookService: BookService,
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

  addNewBook(form: FormGroup):void{
    if(form.valid){
      this.bookService.addBook(<Book>form.value)
      this.bookForm.reset();
      this.dialogRef.close();
    }
  }

}
