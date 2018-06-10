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

  autoTags:string[]=[];
  enteredTags:string[]=[];

  constructor(private fb:FormBuilder, 
              private categoryService:CategoryService,
              private tagService:TagService,
              private questionService:QuestionService,
              private router:Router) {

  }

  ngOnInit() {
    this.question = new Question();
    this.createForm(this.question);

    this.sub = this.categoryService.getCategories()
                    .subscribe(categories => this.categories = categories);

    this.sub2 = this.tagService.getTags()
                   .subscribe(tags => this.tags = tags);
    
    let questionControl = this.questionForm.get('questionText');

    questionControl.valueChanges.debounceTime(500).subscribe(v => this.computeAutotags());
    this.answers.valueChanges.debounceTime(500).subscribe(v => this.computeAutotags());
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
      ordered:[question.ordered],
      explanation: [question.explanation]
    },{validator:questionFormValidator}
    );
  }
  get answers(): FormArray{
    return this.questionForm.get("answers") as FormArray;
  }



  computeAutotags(){
    let formValue = this.questionForm.value;
    
    let allTextValue:string[] = [formValue.questionText];
    formValue.answers.forEach(answer => allTextValue.push(answer.answerText));

    let wordString:string = allTextValue.join("");
    
    let matchingTags:string[] = [];
    this.tags.forEach(tag => {
      let patt = new RegExp('\\b(' + tag.replace("+", "\\+") + ')\\b', "ig");
      if(wordString.match(patt))
        matchingTags.push(tag);
    });
    this.autoTags = matchingTags;
    this.setTagsArray();
  }
  get tagsArray():FormArray{
    return this.questionForm.get("tagsArray") as FormArray;
  }
  addTag(){
    let tag = this.questionForm.get("tags").value;
    console.log(tag)
    if(tag){
      if(this.enteredTags.indexOf(tag)<0)
        this.enteredTags.push(tag);
      this.questionForm.get("tags").setValue("");
    }
    this.setTagsArray();
  }
  removeEnteredTag(tag){
    this.enteredTags = this.enteredTags.filter(t => t !==tag);
    this.setTagsArray();
  }
  setTagsArray(){
    this.tagsArray.controls = [];
    [...this.autoTags,...this.enteredTags].forEach(tag => this.tagsArray.push(new FormControl(tag)));
  }

  saveQuestion(question:Question){
    this.questionService.saveQuestion(question).subscribe(responce =>{
      this.router.navigate(['/questions']);
    })
  }

  onSubmit(){
    this.questionForm.updateValueAndValidity();
    if(this.questionForm.invalid)
      return;

        //get question object from the forms
    console.log(this.questionForm.value);
    let question: Question = this.getQuestionFromFormValue(this.questionForm.value);
    console.log(question);

    //call saveQuestion
    this.saveQuestion(question);
  }

  getQuestionFromFormValue(formValue:any):Question{
    let question: Question;

    question = new Question();
    question.questionText = formValue.questionText;
    question.answers = formValue.answers;
    question.categoryIds = [formValue.category];
    question.tags = [...this.autoTags, ...this.enteredTags];
    question.ordered = formValue.odered;
    question.explanation = formValue.explanation;
    return question;
  }

  ngOnDestroy(){
    if (this.sub)
      this.sub.unsubscribe();
    if (this.sub2)
      this.sub2.unsubscribe();
  }

}
function questionFormValidator(fg: FormGroup): {[key: string]: boolean} {
  let answers:Answer[] = fg.get('answers').value;
  if(answers.filter(answer => answer.correct).length!==1)
    return {'correctAnswerCountInvalid':true};

  let tags: string[] = fg.get('tagsArray').value;
  if (tags.length  < 3)
    return {'tagCountInvalid': true}

  return null;
}