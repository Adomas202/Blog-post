import { Component, OnInit } from '@angular/core';
import {Post} from '../../post';
import { DataService } from '../../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private data: DataService, private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'text': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate': ''
    });
  }

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

  public getPosts(): Post[] {
    let localStorageItem = JSON.parse(localStorage.getItem('posts'));
    return localStorageItem == null ? [] : localStorageItem.posts;
  }

  onPostDelete() {
    let posts = this.getPosts();
    posts = posts.filter((post)=>post.id != this.id);
    localStorage.setItem('posts', JSON.stringify({posts: posts}));
  }

}
