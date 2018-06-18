import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Post} from './post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private selectedPost = new BehaviorSubject<number>(1);
  currentPost = this.selectedPost.asObservable();

  constructor() {
  }

  changeSelectedId(id: number) {
    this.selectedPost.next(id);
  }

  public getPosts(): Post[] {
    let localStorageItem = JSON.parse(localStorage.getItem('posts'));
    return localStorageItem == null ? [] : localStorageItem.posts;
  }
}
