import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interface';
import {Observable, Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { templateJitUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books:Book[] = [];
  private booksUpdated = new Subject<Book[]>();

  constructor(private http : HttpClient) { }

  getBookUpdateListener():Observable<Book[]>{
    return this.booksUpdated.asObservable();
  }

  getBooks(){
    this.http.get<{message:string, books: Book[]}>('http://localhost:3100/books')
    .subscribe((data)=>{
      this.books = data.books;
      this.booksUpdated.next([...this.books]);
    });
  }

  addBook(book: Book):void{
    this.http.post<{message:string}>('http://localhost:3100/books', book)
    .subscribe((responseData)=>{
      console.log(responseData.message);
      this.books.push(book);
      this.booksUpdated.next([...this.books]);
    });
  }


}
