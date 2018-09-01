import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Authentication } from './authentication.service';

@NgModule({
  imports:      [ BrowserModule , HttpModule ],
  declarations: [ Authentication ],
  exports: [Authentication],
})
export class AuthenticationModule {  }
