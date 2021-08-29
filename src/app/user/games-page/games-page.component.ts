import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
  library: Game[] = [];
  gameSubscr: Subscription;
  searchGameByName: string;
  searchGameByPrice: string;
  filterAction: string;
  filterIndie: string;
  filterAdventure: string;

  form: FormGroup;
  Data: Array<any> = [
    { name: 'Indie', value: 'indie' },
    { name: 'Action', value: 'action' },
    { name: 'Adventure', value: 'adventure' },
  ];

  constructor(private gamesService: GamesService, private fb: FormBuilder) {
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required]),
    });
  }

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

  addToLibrary(game: Game) {
    this.gamesService.addToLibrary(game).subscribe(() => {
      return this.library.push(game);
    });
    window.alert('Game has been added to the library!');
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
