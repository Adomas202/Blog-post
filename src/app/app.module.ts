import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogEditComponent } from './blog-detail/blog-edit/blog-edit.component';
import {RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogsNewComponent } from './blog-list/blogs-new/blogs-new.component';
import {FormsModule} from '@angular/forms';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogsComponent,
    BlogListComponent,
    BlogDetailComponent,
    BlogEditComponent,
    PageNotFoundComponent,
    BlogsNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: BlogListComponent},
      {path: 'posts-details', component: BlogDetailComponent},
      {path: 'posts-edit', component: BlogEditComponent},
      {path: 'posts-new', component: BlogsNewComponent},
      {path: '**', component: PageNotFoundComponent},
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
