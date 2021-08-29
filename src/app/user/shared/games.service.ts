import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FbCreateResponse, Game } from 'src/app/shared/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class GamesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Game[]> {
    return this.http.get(`${environment.fbDbUrl}/games.json`).pipe(
      map((response: { [key: string]: any }) => {
        return Object.keys(response).map((key) => ({
          ...response[key],
        }));
      })
    );
  }

  getLibrary(): Observable<Game[]> {
    return this.http.get(`${environment.fbDbUrl}/library.json`).pipe(
      map((response: { [key: string]: any }) => {
        return Object.keys(response).map((key) => ({
          ...response[key],
        }));
      })
    );
  }

  addToLibrary(game: Game): Observable<Game> {
    return this.http
      .post<Game>(`${environment.fbDbUrl}/library.json`, game)
      .pipe(
        map((response: FbCreateResponse) => {
          return {
            ...game,
            id: response.name,
            date: new Date(),
          };
        })
      );
  }
}
