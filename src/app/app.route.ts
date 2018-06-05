import { Routes,RouterModule } from '@angular/router';
import {  CategoriesComponent, TagsComponent, QuestionsComponent,QuestionAddUpdateComponent
 } from './components';

export const routes : Routes = [
    {
        path:'',
        redirectTo:'/categories',
        pathMatch:'full'
    },
    {
        path:'categories',
        component:CategoriesComponent
    },
    {
        path:'questions',
        component:QuestionsComponent
    },
    {
        path:'question/add',
        component:QuestionAddUpdateComponent
    },
    {
        path:'tags',
        component:TagsComponent
    }
];