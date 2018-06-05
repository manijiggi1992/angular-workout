import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { MaterialModule   } from './material.module';
import { FlexLayoutModule, BREAKPOINT } from '@angular/flex-layout';
import { routes } from './app.route';
import { AppComponent, CategoriesComponent, TagsComponent, QuestionsComponent,QuestionAddUpdateComponent } from './components';
import { CategoryService,TagService,QuestionService } from './services';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    QuestionsComponent,
    TagsComponent,
    QuestionAddUpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CategoryService,
    TagService,
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
