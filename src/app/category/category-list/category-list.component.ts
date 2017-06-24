import { Component, OnInit } from '@angular/core';

import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service'

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: Category[];
  constructor(private categoryService: CategoryService) { }

  getCategories(): void {
    this.categoryService
        .getCategories()
        .then(categories => this.categories = categories);
  }

  ngOnInit() {
    this.getCategories();
  }

}
