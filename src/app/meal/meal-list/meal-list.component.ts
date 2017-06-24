import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Meal } from '../shared/meal.model';
import { MealService } from '../shared/meal.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {
  meals: Meal[];
  meal: Meal;
  constructor(
      private mealService: MealService,
      private route: ActivatedRoute
  ) { }

  getMeals(): void {
    this.mealService
        .getMeals()
        .then(meals => this.meals = meals);
  }

  ngOnInit() {
    this.getMeals();
  }

}
