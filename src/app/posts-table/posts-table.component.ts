import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Router} from '@angular/router';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css']
})
export class PostsTableComponent implements OnInit {
  blogPosts: Array<BlogPost> = [];
  pt: any;
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.pt = this.postService.getAllPosts().subscribe(data=>{
      this.blogPosts = data;
    });
  }
  rowClicked(e: { preventDefault: () => void; }, id: any){
    e.preventDefault();
    this.router.navigate(['/admin/post', id]);
  }

}
