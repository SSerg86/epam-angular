import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/shared/interfaces';
import { GamesService } from '../shared/games.service';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.scss'],
})
export class LibraryPageComponent implements OnInit {
  games: Game[] = [];
  gameSubscr: Subscription;

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.gameSubscr = this.gamesService.getLibrary().subscribe((games) => {
      this.games = games;
    });
  }

  ngOnDestroy() {
    if (this.gameSubscr) {
      this.gameSubscr.unsubscribe();
    }
  }

  isDownload(game: Game) {
    window.alert('Game is downloading!');
  }

  isShare(game: Game) {
    window.alert('Link has been saved for sharing!');
  }
}
