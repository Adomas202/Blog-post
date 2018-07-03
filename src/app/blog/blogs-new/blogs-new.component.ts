import {Component, ElementRef, OnInit, ViewChild, EventEmitter, Output} from '@angular/core';
import {Post} from '../../post';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../data.service';
import {BlogService} from '../../_services/blog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blogs-new',
  templateUrl: './blogs-new.component.html',
  styleUrls: ['./blogs-new.component.css']
})
export class BlogsNewComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('textInput') textInutRedf: ElementRef;
  @Output() postAdded = new EventEmitter<Post>();

  private nextId: number;
  public rForm: FormGroup;
  post: any;                     // A property for our submitted form
  text: string = '';
  name: string = '';
  titleAlert: string = 'This field is required';

  constructor(private data: DataService, private fb: FormBuilder, private blogService: BlogService, private router: Router) {

  }

  addPost(post) {
    this.text = post.text;
    this.name = post.name;
  }

  ngOnInit() {
    this.rForm = this.fb.group({
    'name': [null, Validators.required],
    'text': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
    'validate': ''
  });

    let posts = this.data.getPosts();
    if (posts.length == 0) {
      this.nextId = 0;
    } else {
      let maxId = posts[posts.length - 1].id;
      this.nextId = maxId + 1;
    }
  }

  private setLocalStoragePosts(posts: Post[]): void {
    localStorage.setItem('posts', JSON.stringify({posts: posts}));
  }

  public onPostAdded(name: string, text: string): void {
    let post = new Post(this.nextId, name, text);
    let posts = this.data.getPosts();
    posts.push(post);
    this.setLocalStoragePosts(posts);


    this.blogService.addBlog({name: name, description: text})
      .subscribe(response => {
          console.log('sekmingai pridetas');
          this.router.navigateByUrl('posts-list');
        },
        (error) => console.log(error),
        () => console.log('completed'));
  }
}

