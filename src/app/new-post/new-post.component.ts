import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  blogPost: BlogPost = new BlogPost();
  tags!: string;
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
  }
  formSubmit(f: NgForm) {
    this.blogPost.tags = this.tags.split(",").map(tag => tag.trim());
    this.blogPost.title = f.value.title;
    this.blogPost.featuredImage = f.value.image;
    this.blogPost.isPrivate = false;
    this.blogPost.post = f.value.post;
    this.blogPost.category = f.value.category;
    this.blogPost.postDate = new Date().toLocaleDateString();
    this.blogPost.postedBy = "BTI425 Student"
    this.blogPost.views = 0;
    this.postService.newPost(this.blogPost).subscribe(data => {
      console.log(data);
      this.router.navigate(['admin']);
    });
  }
}
