import { NgModule } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

const modules = [
   MatIconModule,
   MatSidenavModule,
   MatMenuModule,
   MatToolbarModule,
   MatListModule,
   MatButtonModule,
   MatCardModule,
   MatChipsModule,
   MatFormFieldModule,
   MatSelectModule,
   MatInputModule,
   MatCheckboxModule,
   MatRadioModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
  ,
})export class MaterialModule {};