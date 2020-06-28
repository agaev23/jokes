import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from 'src/app/models/Joke.model';

@Component({
  selector: 'app-joke-item',
  templateUrl: './joke-item.component.html',
  styleUrls: ['./joke-item.component.scss']
})
export class JokeItemComponent implements OnInit {
  @Input() joke: Joke;
  @Input() isCustom = false;
  @Output() changeFavoriteState = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onchangeFavoriteState() {
    this.changeFavoriteState.emit();
  }
}
