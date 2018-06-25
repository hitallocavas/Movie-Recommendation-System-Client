import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Movie } from '../models/movie.model';

@Injectable()
export class MovieService {

  private url: string = "http://localhost";

  constructor(private http: Http) { }

  getMovies(){
    return this.http.get(this.url+"/movies/10")
    .map(res => res.json());
  }

  findByGender(category:string){
    return this.http.get(this.url+"/movies/findByGenrer/"+category)
      .map(res => res.json());
  }

}