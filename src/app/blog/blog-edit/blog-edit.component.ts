import { Component, OnInit } from '@angular/core';
import { Post } from '../../post';
import { DataService } from '../../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../../_services/blog.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  id: number;
  public name: string;
  public text: string;
  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  titleAlert: string = 'This field is required';

  constructor(private data: DataService, private fb: FormBuilder, private blogService: BlogService, private route: ActivatedRoute) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'text': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate': ''
    });
  }

  public ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.blogService.getPost(params.id)
          .subscribe(data => {
            console.log(data);
            this.post = data;
          });
      });

    this.data.currentPost.subscribe(id => this.id = id);
    this.data.changeSelectedId(this.id);
    let posts = this.getPosts();
    // posts = posts.filter((post)=>post.id == this.id);
    this.name = posts[0].name;
    this.text = posts[0].description;
  }

  onPostEdited(name: string, text: string) {
    let posts = this.getPosts();
    posts[this.id].name = name;
    posts[this.id].description = text;
    localStorage.setItem('posts', JSON.stringify({posts: posts}));
  }

  public getPosts() {
    // let localStorageItem = JSON.parse(localStorage.getItem('posts'));
    // return localStorageItem == null ? [] : localStorageItem.posts;
    this.route.params
      .subscribe(params => {
        this.blogService.getPost(params.id)
          .subscribe(data => {
            console.log(data);
            this.post = data;
          });
      });
  }

  onPostDelete() {
    // let posts = this.getPosts();
    // posts = posts.filter((post)=>post.id != this.id);
    // localStorage.setItem('posts', JSON.stringify({posts: posts}));
  }

}
