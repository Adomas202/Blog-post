import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogPostItemComponent } from './blog-post-list/blog-post-item/blog-post-item.component';
import { BlogPostDetailsComponent } from './blog-post-list/blog-post-item/blog-post-details/blog-post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogPostListComponent,
    BlogPostItemComponent,
    BlogPostDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
