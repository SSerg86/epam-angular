import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { LibraryPageComponent } from './library-page/library-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UserLayoutComponent } from './shared/components/user-layout/user-layout.component';

@NgModule({
  declarations: [UserLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: '/user/games',
        pathMatch: 'full',
      },
      {
        path: '',
        component: UserLayoutComponent,
        children: [
          {
            path: 'games',
            component: GamesPageComponent,
          },
          {
            path: 'library',
            component: LibraryPageComponent,
          },
          {
            path: 'friends',
            component: FriendsPageComponent,
          },
          {
            path: 'profile',
            component: ProfilePageComponent,
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class UserModule {}
