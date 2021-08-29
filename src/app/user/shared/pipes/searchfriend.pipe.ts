import { Pipe, PipeTransform } from '@angular/core';
import { Friend } from 'src/app/shared/interfaces';

@Pipe({
  name: 'searchfriend',
})
export class SearchfriendPipe implements PipeTransform {
  transform(friends: Friend[], search = ''): Friend[] {
    if (!search.trim()) {
      return friends;
    }

    return friends.filter((friend) => {
      return friend.name.toLowerCase().includes(search.toLowerCase());
    });
  }
}
