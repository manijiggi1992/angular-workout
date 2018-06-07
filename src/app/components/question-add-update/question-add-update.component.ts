import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormArray, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

import { Category, Question, Answer } from '../../model';
import { CategoryService, QuestionService, TagService } from '../../services';

@Component({
  templateUrl: './question-add-update.component.html',
  styleUrls: ['./question-add-update.component.scss']
})
export class QuestionAddUpdateComponent implements OnInit,OnDestroy {

  categories: Category[];
  sub: any;

  tags: string[];
  sub2: any;

  questionForm:FormGroup;
  question:Question;

  constructor(private fb:FormBuilder, private categoryService:CategoryService) { }

  ngOnInit() {
    this.question = new Question();
    this.createForm(this.question);

    this.sub = this.categoryService.getCategories()
                    .subscribe(categories => this.categories = categories);
  }

  createForm(question:Question){

    let fgs:FormGroup[] = question.answers.map(answer => {
      let fg = new FormGroup({
        answerText: new FormControl(answer.answerText,Validators.required),
        correct:new FormControl(answer.correct)
      });
      return fg;
    });
    let answersFA = new FormArray(fgs);

    let fcs:FormControl[] = question.tags.map(tag => {
      let fc = new FormControl(tag);
      return fc;
    });
    if (fcs.length==0) fcs = [new FormControl('')];
    let tagsFA = new FormArray(fcs);

    this.questionForm = this.fb.group({
      category : [(question.categories.length>0?question.categories[0]:''),Validators.required],
      questionText: [question.questionText, Validators.required],
      tags: '',
      tagsArray: tagsFA,
      answers: answersFA,
    });
    
  }

  get answers(): FormArray{
    return this.questionForm.get("answers") as FormArray;
  }

  ngOnDestroy(){

  }

}
