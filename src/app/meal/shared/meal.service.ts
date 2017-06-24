import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Meal} from './meal.model';

@Injectable()
export class MealService {

  private mealsUrl = 'api/meal';

  constructor(private http: Http) {
  }

  getMeals(): Observable<Meal[]> {
    return this.http.get(this.mealsUrl)
      .map((res: Response) => res.json().data as Meal[])
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    const errMsg = (error.message) ? error.message : error.status ?
      `${error.status} - ${error.statusText}` : 'Server error';
    window.alert(`An error occurred: ${errMsg}`);
    return Observable.throw(errMsg);
  }
}
