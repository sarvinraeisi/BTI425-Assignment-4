import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {

  post: BlogPost = new BlogPost;
  private querySub: any;

  commentName!: string;
  commentText!: string;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params => {
      this.postService.getPostbyId(params['id']).subscribe(data => this.post = data);
    });
  }
  ngOnDestroy() {
    if (this.querySub) this.querySub.unsubscribe();
  }
  submitComment(f: NgForm) {
    this.post.comments.push({
      author: this.commentName,
      comment: this.commentText,
      date: new Date().toLocaleDateString()
    });

    this.postService.updatePostById(this.post._id,this.post).subscribe(() => {
      this.commentName = '';
      this.commentText = '';
      f.reset();
    });
  }

}
