import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Friend } from 'src/app/shared/interfaces';

import { MyfriendsService } from '../../shared/myfriends.service';

@Component({
  selector: 'app-myfriends',
  templateUrl: './myfriends.component.html',
  styleUrls: ['./myfriends.component.scss'],
})
export class MyfriendsComponent implements OnInit {
  myFriends: Friend[] = [];
  friendSubscr: Subscription;
  deleteSub: Subscription;
  searchFriend: string;

  constructor(private friendsService: MyfriendsService) {}

  ngOnInit(): void {
    this.friendSubscr = this.friendsService
      .getFriends()
      .subscribe((friends) => {
        this.myFriends = friends;

        let newArr = this.myFriends.filter((friend) => friend.isFriend == true);
        console.log(newArr);
      });
  }

  remove(id: string) {
    this.deleteSub = this.friendsService.remove(id).subscribe(() => {
      this.myFriends = this.myFriends.filter((friend) => friend.id !== id);
    });
    // update friends list
    // this.friendsService.update({});
  }

  ngOnDestroy() {
    if (this.friendSubscr) {
      this.friendSubscr.unsubscribe();
    }
    if (this.deleteSub) {
      this.deleteSub.unsubscribe();
    }
  }
}
