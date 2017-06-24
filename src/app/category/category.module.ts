import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {CategoryListComponent} from './category-list/category-list.component';

import {CategoryService} from './shared/category.service';

@NgModule({
  declarations: [
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CategoryListComponent
  ],
  providers: [
    CategoryService
  ]
})
export class CategoryModule {
}
