import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {CategoryListComponent} from './category-list/category-list.component';

import {CategoryService} from './shared/category.service';

import {CartModule} from '../cart/cart.module';

@NgModule({
  declarations: [
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CartModule
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
