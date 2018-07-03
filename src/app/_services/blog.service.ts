import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient) { }

  getAllBlogs() {
    return this.httpClient.get<Post[]>('http://localhost:8080/blogs');
  }

  addBlog(blog: any) {
    console.log(blog);
    return this.httpClient.post('http://localhost:8080/blogs', blog);
  }

  getPost(id: number) {
    return this.httpClient.get<Post>(`http://localhost:8080/blogs/${id}`);
  }
}
