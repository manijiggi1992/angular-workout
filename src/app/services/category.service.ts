import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable'; 
import '../rxjs-extensions';

import { Category } from '../model/category';

@Injectable()
export class CategoryService{
    private _serviceUrl = "http://localhost:3000/categories";

    constructor(private http:Http){

    }

    getCategories():Observable<Category[]>{
        let url = this._serviceUrl;
        return this.http.get(url)
            .map(result => result.json());

    }
}

