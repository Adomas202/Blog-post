import { NgModule } from '@angular/core';
import {BlogListComponent} from './blog-list/blog-list.component';
import {BlogsNewComponent} from './blogs-new/blogs-new.component';
import {BlogEditComponent} from './blog-edit/blog-edit.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    BlogListComponent,
    BlogsNewComponent,
    BlogEditComponent,
    BlogDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})

export class BlogModule {}
