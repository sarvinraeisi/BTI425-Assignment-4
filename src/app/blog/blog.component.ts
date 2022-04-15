import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogPosts: Array<BlogPost> | undefined;
  page: number = 1;
  tag= null;
  category = null;
  querySub: any;
  //routeSub: any;
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.queryParams.subscribe(params => {
      if (params['tag']) {
        this.tag = params['tag'];
        this.category = null;
      } else {
        this.tag = null;
      }

      if(params['category']){
        this.category = params['category'];
        this.tag=null;
      }else{
        this.category = null;
      }
      this.getPage(+params['page'] || 1);
    });
  }

  getPage(num: number){
    this.querySub = this.postService.getPosts(num, this.tag, this.category).subscribe(data=>{
      if(data.length != 0){
        this.blogPosts = data;
        this.page = num;
      }
    });
  }

  onDestroy():void{
    if(this.querySub){
      this.querySub.unsubscribe();
    }
  }


}
