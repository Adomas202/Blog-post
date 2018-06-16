import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  posts: Post[] = [
    new Post('Blogas', 'blogiukas' ),
    new Post('Kitas', 'Blogiukas' ),
  ];

  constructor() { }

  ngOnInit() {
  }

  onPostAdded(post: Post) {
    this.posts.push(post);
  }

}
