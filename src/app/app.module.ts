import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { MovieService } from './movie.service';
import { MovieComponent } from './movie/movie.component';
import { PopularmoviesComponent } from './popularmovies/popularmovies.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TopmoviesComponent } from './topmovies/topmovies.component';
import { LatestmoviesComponent } from './latestmovies/latestmovies.component';
import { IntheatersComponent } from './intheaters/intheaters.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { SearchComponent } from './search/search.component';
import { MovietrailerComponent } from './movietrailer/movietrailer.component';
import { MoviecastComponent } from './moviecast/moviecast.component';
import { MoviecrewComponent } from './moviecrew/moviecrew.component';
import { PersonComponent } from './person/person.component';
import { PersoncastComponent } from './personcast/personcast.component';
import { PersoncrewComponent } from './personcrew/personcrew.component';
import { SearchexpandedComponent } from './searchexpanded/searchexpanded.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    PopularmoviesComponent,
    ToolbarComponent,
    TopmoviesComponent,
    LatestmoviesComponent,
    IntheatersComponent,
    UpcomingComponent,
    SearchComponent,
    MovietrailerComponent,
    MoviecastComponent,
    MoviecrewComponent,
    PersonComponent,
    PersoncastComponent,
    PersoncrewComponent,
    SearchexpandedComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
