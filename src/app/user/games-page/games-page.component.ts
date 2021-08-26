import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/shared/interfaces';
import { GamesService } from '../shared/games.service';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss'],
})
export class GamesPageComponent implements OnInit, OnDestroy {
  games: Game[] = [];
  gameSubscr: Subscription;

  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    setTimeout(() => {
      this.gameSubscr = this.gamesService.getAll().subscribe((games) => {
        this.games = games;
      });
    }, 500);
  }

  ngOnDestroy() {
    if (this.gameSubscr) {
      this.gameSubscr.unsubscribe();
    }
  }
}
