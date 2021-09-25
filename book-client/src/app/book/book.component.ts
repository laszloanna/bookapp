import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../interfaces/book.interface';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  private bookId: string;

  constructor(
    public bookService: BookService,
    private actRoute: ActivatedRoute) {
      this.bookId="";
      this.book={} as Book;
     }

  ngOnInit(): void {
    this.bookId = this.actRoute.snapshot.params._id;

    this.bookService.getBookById(this.bookId).subscribe((book)=>{
      this.book=book;
    });
  }

  onDelete(bookId:string){
    this.bookService.deleteBook(bookId);
  }

}
