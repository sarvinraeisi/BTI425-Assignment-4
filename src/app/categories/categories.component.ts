import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '../post.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Array<any> | undefined;
  private categoriess: Subscription | undefined;

  constructor(private data: PostService) { }

  ngOnInit(): void {
    this.categoriess = this.data.getCategories().subscribe( data => 
      this.categories = data
      );
  }

}
