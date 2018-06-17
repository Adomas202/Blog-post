import {Component, ElementRef, OnInit, ViewChild, EventEmitter, Output} from '@angular/core';
import { Post } from '../../post';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-blogs-new',
  templateUrl: './blogs-new.component.html',
  styleUrls: ['./blogs-new.component.css']
})
export class BlogsNewComponent implements OnInit {
  @ViewChild( 'nameInput') nameInputRef: ElementRef;
  @ViewChild( 'textInput') textInutRedf: ElementRef;
  @Output() postAdded = new EventEmitter<Post>();

  private nextId: number;
  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  text: string = '';
  name: string = '';
  titleAlert: string = 'This field is required';

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'text': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate' : ''
    });

    let posts = this.getPosts();
    if (posts.length == 0) {
      this.nextId = 0;
    } else {
      let maxId = posts[posts.length - 1].id;
      this.nextId = maxId + 1;
    }
  }

  addPost(post) {
    this.text = post.text;
    this.name = post.name;
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
