import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  blogPost!: BlogPost;
  tags!: string;
 
  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.postService. getPostbyId(this.route.snapshot.params['id']).subscribe(
      (data: BlogPost) => {
        this.blogPost = data;
        this.tags = data.tags.toString();
      }
    );
  }
  formSubmit(f: NgForm){
    this.blogPost.tags = this.tags.split(',');
    this.blogPost.title = f.value.title;
    this.blogPost.featuredImage = f.value.image;
    this.blogPost.post = f.value.post;
    this.blogPost.category = f.value.category;
    this.postService.updatePostById(this.blogPost._id, this.blogPost).subscribe(
      () => {
        this.router.navigate(['/admin']);
      }
    );
  }
  deletePost(id: string){
    this.postService.deletePostById(this.blogPost._id).subscribe(
      () => {
        this.router.navigate(['/admin']);
      }
    );
  }
}
