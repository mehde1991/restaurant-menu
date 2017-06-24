import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Category} from './category.model';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class CategoryService {
  private categoriesUrl = 'api/categories';
  private categories: Category[] = [];

  constructor(private http: Http) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get(this.categoriesUrl)
      .map((res: Response) => res.json().data as Category[])
      .catch(this.handleError);
  }

  getCategory(id: number): Category {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === id) {
        return this.categories[i];
      }
    }
    return null;
  }

  private handleError(error: any): Observable<any> {
    const errMsg = (error.message) ? error.message : error.status ?
      `${error.status} - ${error.statusText}` : 'Server error';
    window.alert(`An error occurred: ${errMsg}`);
    return Observable.throw(errMsg);
  }
}
