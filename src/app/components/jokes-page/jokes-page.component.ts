import { Component, OnInit } from '@angular/core';

import { SearchSetting } from 'src/app/models/SearchSetting.model';
import { DataService } from 'src/app/services/data.service';
import { Joke } from 'src/app/models/Joke.model';
import { FavoriteService } from 'src/app/services/favorite.service';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

@Component({
  selector: 'app-jokes-page',
  templateUrl: './jokes-page.component.html',
  styleUrls: ['./jokes-page.component.scss']
})
export class JokesPageComponent implements OnInit {

  jokes: Joke[] = [];
  favoriteJokes: Joke[] = [];
  isLoading = false;
  noResults = false;

  constructor(
    private dataService: DataService,
    private favoriteService: FavoriteService,
    ) { }

  ngOnInit() {
    this.favoriteService.favoriteJokes$.subscribe((jokes: Joke[]) => {
      this.favoriteJokes = jokes;
      this.setNewJokes(this.jokes);
    });
  }

  getJoke(setting: SearchSetting) {
    this.isLoading = true;
    this.dataService.getJoke(setting).pipe(
      catchError((err: HttpErrorResponse ) => {
        this.isLoading = false;
        alert(err.error.message);
        return of([]);
      })
    ).subscribe((jokes: Joke[]) => {
      this.setNewJokes(jokes);
      this.noResults = !jokes.length;
      this.isLoading = false;
    });
  }

  changeFavoriteState(joke: Joke) {
    this.favoriteService.changeFavoriteState(joke);
  }

  private isFavorite(joke: Joke): boolean {
    return this.favoriteJokes.some((j: Joke) => j.id === joke.id);
  }

  private setNewJokes(jokes: Joke[]) {
    this.jokes = jokes.map((joke: Joke) => ({
      ...joke,
      isFavorite: this.isFavorite(joke),
    }));
  }
}
