import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { MessengerComponent } from '../messenger/messenger.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { ActiveEmailComponent } from '../login/active-email/active-email.component';
import { LoginComponent } from '../login/login.component';
import { MainComponent } from '../main/main.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { Page404Component } from '../page404/page404.component';
import { GuardService } from 'src/app/services/guard.service';
const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'messenger', component: MessengerComponent },
      { path: 'profile/:id', component: UserProfileComponent },
    ],
    canActivate: [GuardService],
  },
  { path: 'register', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'active-email', component: ActiveEmailComponent },
  { path: 'page-404', component: Page404Component },

  {
    path: '**',
    redirectTo: '/page-404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
