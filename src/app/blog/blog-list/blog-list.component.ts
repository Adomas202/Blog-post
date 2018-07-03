import { Component, OnInit } from '@angular/core';
import { Post } from '../../post';
import { DataService } from '../../data.service';
import {BlogService} from '../../_services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  public posts: Post[];

  constructor(private dataService: DataService, private blogService: BlogService) {
    this.posts = this.dataService.getPosts();

    blogService.getAllBlogs()
      .subscribe(data => this.posts = data);
  }

  ngOnInit() {
  }

  public inspectPost(id: number): void {
    this.dataService.changeSelectedId(id);
  }

}
