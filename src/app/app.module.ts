import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { Authentication } from '../service/authentication.service';
import { AppComponent } from './app.component';
import { AppSettings } from '../config/app.config';
import { AppRoutes } from './app.routing';

import { HomeModule } from '../component/home/home.module';
import { LoginModule } from '../component/login/login.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    HomeModule,
    LoginModule,
  ],
  providers: [Authentication, AppSettings],
  bootstrap: [AppComponent]
})
export class AppModule { }
