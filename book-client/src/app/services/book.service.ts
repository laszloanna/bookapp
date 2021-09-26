import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interface';
import {Observable, Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private BACKEND_URL = environment.url + '/books/';

  private books:Book[] = [];
  private booksUpdated = new Subject<Book[]>();

  constructor(private http : HttpClient) { }

  getBookUpdateListener():Observable<Book[]>{
    return this.booksUpdated.asObservable();
  }

  getBooks(){
    this.http.get<{message:string, books: any}>(this.BACKEND_URL)
    .subscribe((data)=>{
      this.books = data.books;
      this.booksUpdated.next([...this.books]);
    });
  }

  // getBookById(bookId:string): Observable<Book>{
  //   return this.http.get<Book>(this.BACKEND_URL + bookId);
  // }

  getBookById(bookId:string){
    return {...this.books.find(b => b._id ===bookId)};
  }

  addBook(book: Book):void{
    this.http.post<{message:string, bookId:string}>(this.BACKEND_URL, book)
    .subscribe((responseData)=>{
      const id = responseData.bookId;
      book._id = id;
      this.books.push(book);
      this.booksUpdated.next([...this.books]);
    });
  }

  deleteBook(bookId:string){
    this.http.delete(this.BACKEND_URL + bookId)
    .subscribe(()=>{
      const updated = this.books.filter(book => book._id !== bookId);
      this.books = updated;
      this.booksUpdated.next([...updated]);
    });
  }

}
