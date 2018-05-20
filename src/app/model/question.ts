import {Category} from './category';

export class Question{
    id:number;
    questionText: string;
    answers: Answer[];
    ordered: boolean;
    tags: string[];
    categories: Category[];
}
class Answer {
  id: number;
  answerText: string;
  correct: boolean;
}