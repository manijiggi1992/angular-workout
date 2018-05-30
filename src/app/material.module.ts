import { NgModule } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

const modules = [
   MatIconModule,
   MatSidenavModule,
   MatMenuModule,
   MatToolbarModule,
   MatListModule,
   MatButtonModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
  ,
})export class MaterialModule {};