import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { LoginComponent } from '../login/login.component';
import { MainComponent } from '../main/main.component';
import { MessengerComponent } from '../messenger/messenger.component';
import { PostFormComponent } from '../header/post-form/post-form.component';
import { PostsComponent } from '../main/posts/posts.component';
import { SearchComponent } from '../header/search/search.component';
import { SideBarMenuComponent } from '../main/side-bar-menu/side-bar-menu.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { StoryComponent } from '../main/story/story.component';
import { TimeDistancePipe } from 'src/app/pipes/time-distance.pipe';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@NgModule({
  declarations: [
    ClientComponent,
    HeaderComponent,
    PostFormComponent,
    FooterComponent,
    LoginComponent,
    PostsComponent,
    MessengerComponent,
    StoryComponent,
    SideBarMenuComponent,
    SearchComponent,
    MainComponent,
    SignUpComponent,
    TimeDistancePipe,
    UserProfileComponent
  ],
  imports: [CommonModule, ClientRoutingModule],
})
export class ClientModule {}
