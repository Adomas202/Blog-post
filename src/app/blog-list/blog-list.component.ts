import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  public posts: Post[];

  constructor() {
    this.posts = this.getPosts();
  }

  ngOnInit() {
  }

  public getPosts(): Post[] {
    let localStorageItem = JSON.parse(localStorage.getItem('posts'));
    return localStorageItem == null ? [] : localStorageItem.posts;
  }

  public inspectPost(id: number): void {
    
  }

}
