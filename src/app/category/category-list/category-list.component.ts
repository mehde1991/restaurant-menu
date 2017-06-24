import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service'

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories: Category[];

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(
        categories => {
          this.categories = categories;
        },
        error => {
          console.log(error);
        }
      )
  }

  filterMeals(category: Category) {
    this.router.navigate(['/meals'], { queryParams: { category: category.id} });
  }
}
