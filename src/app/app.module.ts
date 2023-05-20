import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChronosCalendarLibModule } from 'chronos-calendar-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChronosCalendarLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
