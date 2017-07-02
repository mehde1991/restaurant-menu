import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';

import {Meal} from './meal.model';

@Injectable()
export class MealService {

    private mealsUrl = 'api/meal';

    constructor(private http: Http) {
    }

    getMeals(categoryId: number): Observable<Meal[]> {
        return this.http.get(this.mealsUrl)
            .map(res => {
                return (res.json().data as Meal[])
                    .filter(meal => !categoryId || meal.categoryId === categoryId);
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        const errMsg = (error.message) ? error.message : error.status ?
            `${error.status} - ${error.statusText}` : 'Server error';
        window.alert(`An error occurred: ${errMsg}`);
        return Observable.throw(errMsg);
    }
}
