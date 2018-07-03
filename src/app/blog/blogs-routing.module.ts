import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogListComponent} from './blog-list/blog-list.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {BlogsNewComponent} from './blogs-new/blogs-new.component';
import {BlogEditComponent} from './blog-edit/blog-edit.component';

const routes: Routes = [
  {path: 'posts-list', component: BlogListComponent},
  {path: 'posts-details/:id', component: BlogDetailComponent},
  {path: 'posts-edit', component: BlogEditComponent},
  {path: 'posts-new', component: BlogsNewComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
