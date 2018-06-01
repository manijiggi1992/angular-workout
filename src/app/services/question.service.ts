import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs-extensions';

import { Question,Category } from '../model';
import { CategoryService } from './category.service';

@Injectable()
export class QuestionService {
  private _serviceUrl = 'http://localhost:3000/questions';  // URL to web api
  constructor(private http: Http) { 
  }

  getQuestions(): Observable<Question[]> { 
      let url = this._serviceUrl;
      return Observable.forkJoin(
         this.http.get(url).map<any,Question[]>(res => res.json()),
         this.CategoryService.getCategories()
      ).map((combined,index) => {
        let questions: Question[] = combined[0];
        let category: Category[] = combined[1];
        questions.forEach( q =>{
          q.categories = [];
          q.categoryIds.forEach(id => q.categories.push(categories.find( Element => element.id==id)))
        })
        return questions;
      })
  }

}