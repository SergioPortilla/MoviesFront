import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddMovieComponent} from './add-movie/add-movie.component';
import {Movie} from './movie';
import {User} from '../users/user';
import {MoviesService} from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  tarjetas: Movie[];
  dni = '';

  constructor(
    private service: MoviesService,
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddMovieComponent, {
      width: '750px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.findMovieById();
    });
  }

  findMovieById() {
    if (this.dni !== '') {
      this.service.getMovieById(this.dni).subscribe(data => {
        this.tarjetas = [data];
      });
    } else {
      this.findMovies();
    }
  }

  findMovies() {
    this.service.getMovies().subscribe(data => {
      this.tarjetas = data;
    });
  }

  ngOnInit(): void {
    this.findMovies();
    //   {
    //     Title: 'segunda peli',
    //     Duration: 121212,
    //     Synopsis: 'The Shiba Inu is the sdfs sf the six original and distinct spitz breeds of dog from Japan.' +
    //       '      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally' +
    //       '      bred for hunting.',
    //     UrlImg: 'https://m.media-amazon.com/images/M/MV5BMTU4OTQ4Nzg4MV5BMl5BanBnXkFtZTgwNjk0MTQyMjE@._V1_.jpg'
    //   },
    // ];
  }


}
