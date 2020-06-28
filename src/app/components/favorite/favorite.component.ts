import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';
import { Joke } from 'src/app/models/Joke.model';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  favoriteJokes: Joke[] = [];

  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.favoriteService.favoriteJokes$.subscribe((jokes: Joke[]) => {
      this.favoriteJokes = jokes;
    });
  }

  changeFavoriteState(joke: Joke) {
    this.favoriteService.changeFavoriteState(joke);
  }
}
