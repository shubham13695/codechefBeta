import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { Authentication } from '../service/authentication.service';
import { AppComponent } from './app.component';
import { AppSettings } from '../config/app.config';
import { AppRoutes } from './app.routing';

import { HomeModule } from '../component/home/home.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    HomeModule,
  ],
  providers: [Authentication, AppSettings],
  bootstrap: [AppComponent]
})
export class AppModule { }
