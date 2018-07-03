import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import {BlogListComponent} from './blog-list/blog-list.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {BlogsNewComponent} from './blogs-new/blogs-new.component';
import {BlogEditComponent} from './blog-edit/blog-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    BlogsRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [BlogListComponent, BlogDetailComponent, BlogsNewComponent, BlogEditComponent]
})
export class BlogsModule { }
