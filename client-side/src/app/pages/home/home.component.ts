import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {Movie} from './../../models/movie.model'
import {MovieService} from './../../services/movie.service'
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  
  aba: number;
  avancar:boolean;
  user: User = new User();
  ocupations: SelectItem[];
  nome:string;
  idade:number;
  genders: SelectItem[];
  selectedGenders: string[] = [];
  selectedOcupation: string;
  movies: Movie[] = [];
  relevantMovies: Movie[] = [];
  targetMovies: Movie[] = [];

  constructor(private movieService:MovieService,
              private userService: UserService
            ) { }

  ngOnInit() {
    
   
    console.log(this.movies)

    this.ocupations = [
      {label: 'administrator', value: 'administrator'},
      {label: 'artist', value: 'artist'},
      {label: 'doctor', value: 'doctor'},
      {label: 'educator', value: 'educator'},
      {label: 'engineer', value: 'engineer'},
      {label: 'entertainment', value: 'entertainment'},
      {label: 'executive', value: 'executive'},
      {label: 'healthcare', value: 'healthcare'},
      {label: 'homemaker', value: 'homemaker'},
      {label: 'lawyer', value: 'lawyer'},
      {label: 'librarian', value: 'librarian'},
      {label: 'none', value: 'none'},
      {label: 'other', value: 'other'},
      {label: 'programmer', value: 'programmer'},
      {label: 'retired', value: 'retired'},
      {label: 'salesman', value: 'salesman'},
      {label: 'scientist', value: 'scientist'},
      {label: 'student', value: 'student'},
      {label: 'technician', value: 'technician'},
      {label: 'writer', value: 'writer'},
  ];
  
    this.genders = [
      {label: 'Action', value: 'Action'},
      {label: 'Adventure', value: 'Adventure'},
      {label: 'Animation', value: 'Animation'},
      {label: 'Children', value: 'Children'},
      {label: 'Comedy', value: 'Comedy'},
      {label: 'Crime', value: 'Crime'},
      {label: 'Documentary', value: 'Documentary'},
      {label: 'Fantasy', value: 'Fantasy'},
      {label: 'Film-Noir', value: 'Film-Noir'},
      {label: 'Horror', value: 'Horror'},
      {label: 'Musical', value: 'Musical'},
      {label: 'Mystery', value: 'Mystery'},
      {label: 'Romance', value: 'Romance'},
      {label: 'Sci-Fi', value: 'Sci-Fi'},
      {label: 'Thriller', value: 'Thriller'},
      {label: 'War', value: 'War'},
      {label: 'Western', value: 'Western'},
  ];

    this.aba = 0;
    this.avancar = false;
  }

  saveUser(){
    this.user.ocupation = this.selectedOcupation;
    this.user.ratings = [];
    this.userService.addUser(this.user);

    for (let index = 0; index < this.selectedGenders.length; index++) {
    this.movieService.findByGender(this.selectedGenders[index].toString()).subscribe(res =>res.forEach(element => {
      console.log(element);
      this.movies.push(element);
    })); 

    }
  
    this.avancar = true;
  }

  next(){
    this.aba++;
  }

  getRelevantMovies():void{

    

  }

}
