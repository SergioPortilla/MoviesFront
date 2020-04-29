import {Component, Inject, NgZone} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Movie, MovieAdd} from '../movie';
import {MoviesService} from '../movies.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {

  movieAdd: {Movie: MovieAdd, Dni: number};
  hour = 0;
  minute = 0;

  arrayOne(n: number): any[] {
    return Array(n);
  }

  constructor(
    private service: MoviesService,
    private http: HttpClient,
    private auth: MoviesService,
    public dialogRef: MatDialogRef<AddMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.movieAdd = { Movie : MovieAdd.createMock(), Dni: 0};
  }

  setDurationMovie(){
    this.movieAdd.Movie.Duration = this.hour * 60 + this.minute;
  }

  createMovie(): void {
    this.http.post('http://localhost:8087/movies', this.movieAdd).subscribe(
      res => {
        console.log(res);
      }, err => console.log(err)
    );
    this.dialogRef.close();
  }
  close(): void {
    this.dialogRef.close();
  }

}

export interface DialogData {
  animal: string;
}
