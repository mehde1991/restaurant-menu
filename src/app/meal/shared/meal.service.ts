import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Meal } from './meal.model';

@Injectable()
export class MealService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private mealsUrl = 'api/meal';

    constructor(private http: Http) { }

    getMeals(): Promise<Meal[]> {
        return this.http.get(this.mealsUrl)
            .toPromise()
            .then(response => response.json().data as Meal[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
