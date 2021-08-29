import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Friend } from 'src/app/shared/interfaces';
import { FriendsService } from '../shared/friends.service';

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.scss'],
})
export class FriendsPageComponent implements OnInit {
  friends: Friend[] = [];
  friendSubscr: Subscription;

  constructor(private friendsService: FriendsService) {}

  ngOnInit(): void {
    this.friendSubscr = this.friendsService
      .getFriends()
      .subscribe((friends) => {
        this.friends = friends;

        let newArr = this.friends.filter((friend) => friend.isFriend == true);
        console.log(newArr);
      });
  }

  ngOnDestroy() {
    if (this.friendSubscr) {
      this.friendSubscr.unsubscribe();
    }
  }
}
