import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interface';
import {Observable, Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
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
    this.http.get<{message:string, books: any}>('http://localhost:3100/books')
    .subscribe((data)=>{
      this.books = data.books;
      this.booksUpdated.next([...this.books]);
    });
  }

  getBookById(bookId:string): Observable<Book>{
    return this.http.get<Book>('http://localhost:3100/books/' + bookId);
  }

  addBook(book: Book):void{
    this.http.post<{message:string, bookId:string}>('http://localhost:3100/books', book)
    .subscribe((responseData)=>{
      const id = responseData.bookId;
      book._id = id;
      this.books.push(book);
      this.booksUpdated.next([...this.books]);
    });
  }

  deleteBook(bookId:string){
    this.http.delete("http://localhost:3100/books/" + bookId)
    .subscribe(()=>{
      const updated = this.books.filter(book => book._id !== bookId);
      this.books = updated;
      this.booksUpdated.next([...updated]);
    });
  }



}
