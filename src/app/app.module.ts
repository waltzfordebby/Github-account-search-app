import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GithubaccountsearchComponent } from './components/githubaccountsearch/githubaccountsearch.component';
import { GithubsearchService} from './services/githubsearch.service';

@NgModule({
  declarations: [
    AppComponent,
    GithubaccountsearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [GithubsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
