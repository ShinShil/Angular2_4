import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { HeaderComponent } from './header/header.component';

import 'hammerjs'

import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    FormControlsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
