import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Meal} from '../shared/meal.model';
import {MealService} from '../shared/meal.service';

import 'rxjs/add/operator/map';

@Component({
    selector: 'app-meal-list',
    templateUrl: './meal-list.html',
    styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {
    meals:Meal[];
    meal:Meal;

    constructor(private mealService:MealService,
                private route:ActivatedRoute) {
    }

    getMeals():void {
        this.route
            .queryParams
            .subscribe(params => {
                let categoryId:number = params['category'];
                this.mealService.getMeals(categoryId)
                    .subscribe(meals => this.meals = meals);
            })
    }

    ngOnInit() {
        this.getMeals();
    }

}
