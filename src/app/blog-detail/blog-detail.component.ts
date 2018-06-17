import { Component, OnInit } from '@angular/core';
import { DataService  } from '../data.service';
import {Post} from '../post';
import {filter} from 'rxjs/internal/operators';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  public id: number;
  name: string;
  text: string;
  public posts: Post[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentPost.subscribe(id => this.id = id);
    this.data.changeSelectedId(this.id);
    let posts = this.getPosts();
    posts = posts.filter((post)=>post.id == this.id);
    this.name = posts[0].name;
    this.text = posts[0].text;
  }

  // filterPost() {
  //   // let posts = JSON.parse(localStorage.getItem('posts'));
  //   // posts = posts.post;
  //
  //   // var
  //   // this.id = post[]
  //   // console.log(posts);
  // }

  // getById(this.id) {
  //   return posts
  // }

  public getPosts(): Post[] {
    let localStorageItem = JSON.parse(localStorage.getItem('posts'));
    return localStorageItem == null ? [] : localStorageItem.posts;
  }
}
