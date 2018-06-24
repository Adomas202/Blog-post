import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataService } from './data.service';
import { HomeComponent } from './home/home.component';
import {AppRoutesModule} from './app-routes.module';
import {BlogModule} from './blog/blog.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BlogModule,
    AppRoutesModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
