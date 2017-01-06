import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import {routing} from "./app.routing";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TempInComponent } from './temp-in/temp-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TempInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
