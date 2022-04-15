import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';
@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styleUrls: ['./footer-posts.component.css']
})
export class FooterPostsComponent implements OnInit {
  constructor(private ps: PostService) { }

  blogPosts: Array<BlogPost> = [];
  private posts: Subscription = new Subscription;

  ngOnInit(): void {
    this.posts = this.ps.getPosts(1, null, null).subscribe(data =>
       this.blogPosts = data.slice(0,3));
  }


}
