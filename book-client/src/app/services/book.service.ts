import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interface';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books:Book[] = [];
  private booksUpdated = new Subject<Book[]>();

  constructor() { }

  getBookUpdateListener():Observable<Book[]>{
    return this.booksUpdated.asObservable();
  }

  getBooks(): Book[]{
    return [...this.books];
  }

  addBook(book: Book):void{
    this.books.push(book);
    this.booksUpdated.next([...this.books]);
  }


}
