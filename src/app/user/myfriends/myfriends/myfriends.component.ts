import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Friend } from 'src/app/shared/interfaces';
import { FriendsService } from '../../shared/friends.service';

@Component({
  selector: 'app-myfriends',
  templateUrl: './myfriends.component.html',
  styleUrls: ['./myfriends.component.scss'],
})
export class MyfriendsComponent implements OnInit {
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
