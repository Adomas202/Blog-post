import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {Post} from '../../post';
import {BlogService} from '../../_services/blog.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  public id: number;
  name: string;
  text: string;
  public post: Post;

  constructor(private data: DataService, private blogService: BlogService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.params
      .subscribe(params => {
        this.blogService.getPost(params.id)
          .subscribe(data =>  {
            console.log(data);
            this.post = data;
          });
      });


    // this.data.currentPost.subscribe(id => this.id = id);
    // this.data.changeSelectedId(this.id);
    // let posts = this.data.getPosts();
    // posts = posts.filter((post)=>post.id == this.id);
    // this.name = posts[0].name;
    // this.text = posts[0].text;
  }
}
