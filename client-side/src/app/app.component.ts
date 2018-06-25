import { Component, OnInit } from '@angular/core';
import {MovieService} from "./services/movie.service";
import {Movie} from "./models/movie.model";
import { Rating } from './models/ratings.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private movies: Movie[] = [];
  private ratings: Rating[] = [];
  private ratingsfiltrados: Rating[] = [];
  constructor(private movieService: MovieService) { }

  ngOnInit() {

    // this.movieService.getRatings(20)
    //   .subscribe(data => this.ratings = data);
  }   
}