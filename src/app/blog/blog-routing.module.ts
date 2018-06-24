import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BlogEditComponent} from './blog-edit/blog-edit.component';
import {BlogsNewComponent} from './blogs-new/blogs-new.component';
import {BlogListComponent} from './blog-list/blog-list.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';

const blogRoutes: Routes = [
  {path: 'posts-list', component: BlogListComponent},
  {path: 'posts-details', component: BlogDetailComponent},
  {path: 'posts-edit', component: BlogEditComponent},
  {path: 'posts-new', component: BlogsNewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(blogRoutes)],
  exports: [RouterModule]
})

export class BlogRoutingModule {

}
