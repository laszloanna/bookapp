import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { User } from '../interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BACKEND_URL = environment.url + '/users/';

  constructor(private http:HttpClient) { }

  createUser(user: User){
    this.http.post(this.BACKEND_URL + "signup", user)
    .subscribe(response => {
      console.log(response);
    })
  }

  login(email:string, password:string){
    const auth: Auth = {email: email, password:password};
    this.http.post(this.BACKEND_URL + "login", auth)
      .subscribe(response=>{
        console.log(response);
      })
  }
}
