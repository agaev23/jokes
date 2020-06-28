import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { SearchSetting, SearchOptions } from '../models/SearchSetting.model';
import { Joke } from '../models/Joke.model';

interface SearchResponse {
  total: number;
  result: Joke[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private BASE_URL = 'https://api.chucknorris.io/';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.BASE_URL}/jokes/categories`);
  }

  getJoke(setting: SearchSetting): Observable<Joke[]> {
    switch (setting.option) {
      case SearchOptions.Random:
        return this.http.get<Joke>(`${this.BASE_URL}/jokes/random`).pipe(
          map((joke: Joke) => [joke]),
        );
        break;
      case SearchOptions.Categories:
        return this.http.get<Joke>(`${this.BASE_URL}/jokes/random?category=${setting.category}`).pipe(
          map((joke: Joke) => [joke]),
        );
        break;
      case SearchOptions.Search:
        return this.http.get<SearchResponse>(`${this.BASE_URL}/jokes/search?query=${setting.searchTerm}`).pipe(
         pluck('result')
        );
        break;
    }
  }
}
