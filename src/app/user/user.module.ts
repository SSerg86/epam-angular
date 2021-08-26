import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/services/auth.guard.service';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { LibraryPageComponent } from './library-page/library-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UserLayoutComponent } from './shared/components/user-layout/user-layout.component';

@NgModule({
  declarations: [
    UserLayoutComponent,
    GamesPageComponent,
    LibraryPageComponent,
    GamesPageComponent,
    FriendsPageComponent,
    ProfilePageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
            canActivate: [AuthGuard],
          },
          {
            path: 'library',
            component: LibraryPageComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'friends',
            component: FriendsPageComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'profile',
            component: ProfilePageComponent,
            canActivate: [AuthGuard],
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class UserModule {}
