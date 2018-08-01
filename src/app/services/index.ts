import {AuthenticationService} from './authentication.service';
import {CategoryService} from './category.service';
import {TagService} from './tag.service';
import {QuestionService} from './question.service';
import {AuthGuard} from './auth-guard';

export {
    AuthenticationService,
    CategoryService,
    TagService,
    QuestionService,
    AuthGuard
};

export default [
    AuthenticationService,
    CategoryService,
    TagService,
    QuestionService,
    AuthGuard
];