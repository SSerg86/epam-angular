import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../../../shared/interfaces';

@Pipe({
  name: 'searchGamesByPrice',
})
export class SearchByPricePipe implements PipeTransform {
  transform(games: Game[], range = '0'): Game[] {
    let price = parseInt(range);
    if (price === 0) {
      return games;
    }

    return games.filter((game) => {
      return game.price <= price;
    });
  }
}
