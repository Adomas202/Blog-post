import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import {BlogModule} from './blog/blog.module';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
            BlogModule],
  exports: [RouterModule]
})

export class  AppRoutesModule {
}
