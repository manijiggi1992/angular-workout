import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { MaterialModule   } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { routes } from './app.route';
import { AppComponent, CategoriesComponent, TagsComponent, QuestionsComponent } from './components';
import { CategoryService,TagService,QuestionService } from './services';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    QuestionsComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    CategoryService,
    TagService,
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
