import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Meal} from '../shared/meal.model';
import {MealService} from '../shared/meal.service';
import {CartService} from '../../cart/shared/cart.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {
  meals: Meal[];
  meal: Meal;

  constructor(private mealService: MealService,
              private cartService: CartService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getMeals();
  }

  getMeals(): void {
    this.route
      .queryParams
      .subscribe(params => {
        let categoryId: number = params['category'];
        this.mealService.getMeals(categoryId)
          .subscribe(meals => this.meals = meals);
      })
  }

  addToCart(meal: Meal) {
    this.cartService.addMeal(meal);
  }
}
