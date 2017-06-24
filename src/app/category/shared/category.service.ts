import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Category } from './category.model';

@Injectable()
export class CategoryService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private categoriesUrl = 'api/categories';

    constructor(private http: Http) { }

    getCategories(): Promise<Category[]> {
        return this.http.get(this.categoriesUrl)
            .toPromise()
            .then(response => response.json().data as Category[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
