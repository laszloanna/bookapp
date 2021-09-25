import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { NewBookComponent } from '../book/new-book/new-book.component';
import { Book } from '../interfaces/book.interface';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Book[] = [];
  bookSub: Subscription;

  constructor(
    public dialog: MatDialog,
    public bookService : BookService) {
      this.bookService.getBooks();
      this.bookSub = this.bookService.getBookUpdateListener().subscribe((books:Book[])=>{
        this.books = books;
      });
    }

  ngOnInit(): void {
  }

  openAddNewBookDialog(){
    const dialogRef = this.dialog.open(NewBookComponent, {
      width: '40rem'
    })
  }

  ngOnDestroy(): void {
    this.bookSub.unsubscribe();
  }

}
