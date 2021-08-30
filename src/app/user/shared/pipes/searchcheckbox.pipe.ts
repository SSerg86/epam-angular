import { Pipe, PipeTransform } from '@angular/core';
import { Game } from 'src/app/shared/interfaces';

@Pipe({
  name: 'searchcheckbox',
})
export class SearchcheckboxPipe implements PipeTransform {
  transform(games: Game[], search = ''): Game[] {
    if (!search.trim()) {
      return games;
    }

    return games.filter((game) => {
      return game.genre.toLowerCase().includes(search.toLowerCase());
    });
  }
}
