import { Injectable } from '@angular/core';

import { Joke } from '../models/Joke.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private STORAGE_KEY = 'favoriteJokes';
  favoriteJokes$ = new BehaviorSubject<Joke[]>([]);

  constructor() {
    const favorite = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
    if (favorite) {
      this.favoriteJokes$.next(favorite);
    }
  }

  changeFavoriteState(joke: Joke) {
    let favorite;
    const jokes = this.favoriteJokes$.value;

    if (joke.isFavorite) {
      favorite = jokes.filter((j: Joke) => j.id !== joke.id);
    } else {
      const favJoke = {
        ...joke,
        isFavorite: true,
      };
      favorite = [favJoke, ...jokes];
    }

    this.favoriteJokes$.next(favorite);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(favorite));
  }
}
