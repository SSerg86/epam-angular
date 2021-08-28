import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GamesService } from '../shared/games.service';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.scss'],
})
export class LibraryPageComponent implements OnInit {
  games = this.gamesService.getGames();
  gameSubscr: Subscription;

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.gameSubscr = this.gamesService.getLibrary().subscribe((games) => {
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
