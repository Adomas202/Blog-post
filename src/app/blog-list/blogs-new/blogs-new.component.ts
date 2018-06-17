import {Component, ElementRef, OnInit, ViewChild, EventEmitter, Output} from '@angular/core';
import { Post } from '../../post';

@Component({
  selector: 'app-blogs-new',
  templateUrl: './blogs-new.component.html',
  styleUrls: ['./blogs-new.component.css']
})
export class BlogsNewComponent implements OnInit {

  private nextId: number;

  constructor() {
    let posts = this.getPosts();
    if (posts.length == 0) {
      this.nextId = 0;
    } else {
      let maxId = posts[posts.length - 1].id;
      this.nextId = maxId + 1;
    }
  }

  ngOnInit() {
  }

  public getPosts(): Post[] {
    let localStorageItem = JSON.parse(localStorage.getItem('posts'));
    return localStorageItem == null ? [] : localStorageItem.posts;
  }

  private setLocalStoragePosts(posts: Post[]): void {
    localStorage.setItem('posts', JSON.stringify({posts: posts}));
  }

  public onPostAdded(name: string, text: string): void {
    let post = new Post(this.nextId, name, text);
    let posts = this.getPosts();
    posts.push(post);
    this.setLocalStoragePosts(posts);
  }

}
