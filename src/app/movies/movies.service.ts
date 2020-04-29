import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from './movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private registerUrl = 'http://localhost:8087/movies';

  constructor(private http: HttpClient) { }

  saveMovie(movieAdd) {
    this.http.post(this.registerUrl, movieAdd);
  }

  getMovieById(id: string) {
    return this.http.get<Movie>(this.registerUrl + '/' + id);
  }

  getMovies() {
    return this.http.get<Movie[]>(this.registerUrl);
  }

}
