import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MoviesComponent } from './movies/movies.component';
import {MatCardModule} from '@angular/material/card';
import { ContentComponent } from './menu/content/content.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {AppRoutingModule} from './app-routing.module';
import { UsersComponent } from './users/users.component';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MoviesComponent,
    ContentComponent,
    AddMovieComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatTreeModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    AppRoutingModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [ HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
