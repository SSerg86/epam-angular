import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Friend } from 'src/app/shared/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MyfriendsService {
  myFriends: Friend[];

  constructor(private http: HttpClient) {}

  getFriends(): Observable<Friend[]> {
    return this.http.get(`${environment.fbDbUrl}/myfriends.json`).pipe(
      map((response: { [key: string]: any }) => {
        return Object.keys(response).map((key) => ({
          ...response[key],
        }));
      })
    );
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(
      `${environment.fbDbUrl}/myfriends/${id}.json`
    );
  }

  update(friend: Friend): Observable<Friend> {
    return this.http.patch<Friend>(
      `${environment.fbDbUrl}/friends/${friend.id}.json`,
      friend
    );
  }
}
