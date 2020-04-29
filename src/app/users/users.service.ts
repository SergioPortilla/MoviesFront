import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private registerUrl = 'http://localhost:8086/users/';

  constructor(private http: HttpClient) { }

  getUserByDni(dni: number) {
    return this.http.get<User>(this.registerUrl + dni);
  }

}
