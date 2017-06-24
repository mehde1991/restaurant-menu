import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {MealListComponent} from './meal-list/meal-list.component';
import {MealViewComponent} from './meal-view/meal-view.component';

import {MealService} from './shared/meal.service';

import {CategoryModule} from '../category/category.module'

@NgModule({
  declarations: [
    MealListComponent,
    MealViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CategoryModule
  ],
  exports: [
    MealListComponent,
    MealViewComponent
  ],
  providers: [
    MealService
  ]
})
export class MealModule {
}
