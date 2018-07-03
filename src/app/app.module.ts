import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataService } from './data.service';
import { HomeComponent } from './home/home.component';
import {AppRoutesModule} from './app-routes.module';
import {BlogsModule} from './blog/blogs.module';
import {HttpClientModule} from '@angular/common/http';
import {BlogListComponent} from './blog/blog-list/blog-list.component';
import {BlogDetailComponent} from './blog/blog-detail/blog-detail.component';
import {BlogsNewComponent} from './blog/blogs-new/blogs-new.component';
import {BlogEditComponent} from './blog/blog-edit/blog-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BlogsModule,
    AppRoutesModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
