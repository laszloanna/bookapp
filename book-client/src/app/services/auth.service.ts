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
  private token: string;

  constructor(private http:HttpClient) { }

  createUser(user: User){
    this.http.post(this.BACKEND_URL + "signup", user)
    .subscribe(response => {
      console.log(response);
    })
  }

  login(email:string, password:string){
    const auth: Auth = {email: email, password: password};
    this.http.post<{token:string}>(this.BACKEND_URL + "login", auth)
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        console.log("Got token "+ token);
        console.log("This.token: "+this.token);
        //eddig jó: this.token megkapja az értéket
      })
  }

  getToken(){
    console.log("getToken called: " + this.token)
    //itt a this.token undefined, az interceptor nem kapja meg :(
    return this.token;
  }

}
