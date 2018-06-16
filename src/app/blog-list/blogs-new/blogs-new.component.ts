import {Component, ElementRef, OnInit, ViewChild, EventEmitter, Output} from '@angular/core';
// import {EventEmitter} from 'selenium-webdriver';
import { Post } from '../../post';

@Component({
  selector: 'app-blogs-new',
  templateUrl: './blogs-new.component.html',
  styleUrls: ['./blogs-new.component.css']
})
export class BlogsNewComponent implements OnInit {
  @ViewChild( 'nameInput') nameInputRef: ElementRef;
  @ViewChild( 'textInput') textInutRedf: ElementRef;
  @Output() postAdded = new EventEmitter<Post>();

  constructor() { }

  ngOnInit() {
  }

  onAddPost() {
    const postName = this.nameInputRef.nativeElement.value;
    const postText = this.nameInputRef.nativeElement.value;
    const newPost = new Post(postName, postText);
    this.postAdded.emit(newPost);
  }

}
