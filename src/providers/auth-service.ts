import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
//import {cors} from 'flask_restful.utils ';
//import {Api} from 'flask_restful';
import 'rxjs/add/operator/map';
import { Headers, RequestOptions } from '@angular/http';
import { Http } from '@angular/http';




export class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

@Injectable()
export class AuthService {
  currentUser : User;
  data:any;
  http;
  constructor(http: Http ) {

    this.data = {};
    this.http = http;
  }

  public login(credentials) {
    if (credentials.username === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {



      var link = 'http://172.20.10.3/tycol_main/web/api/auth/login';
      var userData = JSON.stringify({username: credentials.username, password:credentials.password});
      return this.http.post(link,userData)
        .map((response: Response) => {
          // login successful if there's a jwt token in the response
          this.data = response.json();
          if (this.data.status == 'success') {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(this.data));
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            this.currentUser = new User(currentUser.data.username, currentUser.data.token);
            return true;
          }
        });

    }
  }

  public register(credentials) {
    if (credentials.username === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
