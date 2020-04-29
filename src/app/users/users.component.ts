import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {UsersService} from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{

  user: User = User.createMock();
  dni: number;

  constructor( private service: UsersService ) { }

  searchUserByDni() {
    this.service.getUserByDni(this.dni).subscribe(data => {
      this.user = data;
    });
  }

}
