import { Component, OnInit } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-blogs-new',
  templateUrl: './blogs-new.component.html',
  styleUrls: ['./blogs-new.component.css']
})
export class BlogsNewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get(y) {
    console.log(y);
  }

}
