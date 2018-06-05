import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Question }     from '../../model';
import { QuestionService } from '../../services';

import { Category }     from '../../model';
import { CategoryService } from '../../services'

@Component({
  selector: 'question-list',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions: Question[];
  categories:Category[];
  sub: any;

  constructor(private questionService: QuestionService,private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.sub = this.questionService.getQuestions()
                   .subscribe(questions => this.questions = questions);
  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }

}
