import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { FormsModule, ReactiveFormsModule }     from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireModule } from 'angularfire2';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { routes }   from './app.route';
import { AppComponent, LoginComponent, PasswordAuthComponent, 
         CategoriesComponent, TagsComponent, 
         QuestionsComponent, QuestionAddUpdateComponent } from './components';
import { AuthenticationService, CategoryService, TagService, QuestionService, AuthGuard } from './services';

import { UserActions, CategoryActions, TagActions, QuestionActions, UIStateActions  } from './store/actions';
import { CategoryEffects, TagEffects, QuestionEffects } from './store/effects';
import { default as reducer } from './store/app-store';

export const firebaseConfig = {
  apiKey: "AIzaSyCOopkldz9fvKxS5mWIGHw7RPVIkO4rLRM",
  authDomain: "my-angular-demo-b4d53.firebaseapp.com",
  databaseURL: "https://my-angular-demo-b4d53.firebaseio.com",
  storageBucket: "my-angular-demo-b4d53.appspot.com",
  messagingSenderId: "822762485216"
};

@NgModule({
  declarations: [
    AppComponent, LoginComponent, PasswordAuthComponent,
    CategoriesComponent, TagsComponent, 
    QuestionsComponent, QuestionAddUpdateComponent
  ],
  entryComponents: [
    LoginComponent, PasswordAuthComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,

    //firebase
    AngularFireModule.initializeApp(firebaseConfig),
    
    // Router
    RouterModule.forRoot(routes), 

    // Forms
    FormsModule,
    ReactiveFormsModule, 

    //Material
    MaterialModule,
    //Flex
    FlexLayoutModule,

    //store
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 20
    }),

    //ngrx effects
    EffectsModule.run(CategoryEffects),
    EffectsModule.run(TagEffects),
    EffectsModule.run(QuestionEffects)

  ],
  providers: [ 
    //Services
    AuthenticationService, AuthGuard,CategoryService, TagService, QuestionService,

     //Actions
    UserActions, CategoryActions, TagActions, QuestionActions, UIStateActions

  ],                                                                      
  bootstrap: [AppComponent]
})
export class AppModule { }
