import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {

  private url: string = "http://localhost";

  constructor(private http: Http) { }

  addUser(user){
    return this.http.post(this.url+"/users", JSON.stringify(user))
      .map(res => res.json());
  }

  getUsers(){
    return this.http.get(this.url+"/users")
      .map(res => res.json());
  }

}