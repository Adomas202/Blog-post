import { Component, OnInit } from '@angular/core';
import {Post} from '../../post';
import { DataService } from '../../data.service';
import {post} from 'selenium-webdriver/http';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  public id: number;
  public name: string;
  text: string;

  constructor(private data: DataService) { }

  public ngOnInit() {
    this.data.currentPost.subscribe(id => this.id = id);
    this.data.changeSelectedId(this.id);
    let posts = this.getPosts();
    posts = posts.filter((post)=>post.id == this.id);
    this.name = posts[0].name;
    this.text = posts[0].text;
  }

  onPostEdited(name: string, text: string) {
    let posts = this.getPosts();
    posts[this.id].name = name;
    posts[this.id].text = text;
    localStorage.setItem('posts', JSON.stringify({posts: posts}));
  }
  //
  // private setLocalStoragePosts(posts: Post[]): void {
  //   localStorage.setItem('posts', JSON.stringify({posts: posts}));
  // }

  public getPosts(): Post[] {
    let localStorageItem = JSON.parse(localStorage.getItem('posts'));
    return localStorageItem == null ? [] : localStorageItem.posts;
  }

}
