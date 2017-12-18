import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';



@Injectable()
export class ClasshttpService {
  constructor(private http: Http) { }

  getAll(url:string) {
    return this.http.get(url, this.jwt()).map((response: Response) => response.json());
  }

  getById(id: number) {
    return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  }

  create(url:string,data:any) {
    return this.http.post(url, data, this.jwt()).map((response: Response) => response.json());
  }

  update(url:string,data:any) {
    return this.http.put(url, data, this.jwt()).map((response: Response) => response.json());
  }

  delete(url:string) {
    return this.http.delete(url, this.jwt()).map((response: Response) => response.json());
  }

  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.data.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
