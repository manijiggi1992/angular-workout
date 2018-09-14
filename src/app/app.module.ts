import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';

import { SharedModule } from  './shared/shared.module';
import { CoreModule } from './core/core.module';
import { RoutingModule } from  './routing/routing.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent, DashboardComponent,
  QuestionAddUpdateComponent, MyQuestionsComponent } from './components';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent, QuestionAddUpdateComponent, MyQuestionsComponent
  ],
  imports: [
    BrowserModule,

    //rwa modules
    SharedModule,
    CoreModule,
    RoutingModule,
    AdminModule

  ],
  providers: [ 

  ],                                                                      
  bootstrap: [AppComponent]
})
export class AppModule { }
