import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { MessengerComponent } from '../messenger/messenger.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: ClientComponent },
  { path: 'messenger', component: MessengerComponent },
  { path: 'sign-up', component: SignUpComponent },
  {path: 'user-profile', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
