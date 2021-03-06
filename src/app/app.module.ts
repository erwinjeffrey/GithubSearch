import { GithubService } from './services/github.service';
import { SearchComponent } from './components/profile/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReposComponent } from './components/profile/repos/repos.component';
import { profileDetailComponent } from './components/profile/profileDetail/profile.detail.component';
import { InvokeEntity } from './entities/InvokeEntity';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchComponent,
    ReposComponent,
    profileDetailComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    GithubService,
    InvokeEntity,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
