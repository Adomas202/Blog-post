import {NgModule} from '@angular/core';
import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import {BlogListComponent} from './blog/blog-list/blog-list.component';
import {BlogDetailComponent} from './blog/blog-detail/blog-detail.component';
import {BlogsNewComponent} from './blog/blogs-new/blogs-new.component';
import {BlogEditComponent} from './blog/blog-edit/blog-edit.component';

const appRoutes: Routes = [
  {
    path: 'posts', loadChildren: 'app/blog/blog-list'
  },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutesModule {
}
