import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-widget-latest-posts',
  templateUrl: './widget-latest-posts.component.html',
  styleUrls: ['./widget-latest-posts.component.css']
})
export class WidgetLatestPostsComponent implements OnInit {
  blogPosts: Array<BlogPost> = [];
  constructor(private ps: PostService) { }

  public posts: Subscription = new Subscription;
  ngOnInit(): void {
    this.posts = this.ps.getPosts(1, null, null).subscribe(ps =>
       this.blogPosts = ps.slice(0,3));
  }

}
