import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import {LayoutModule} from '../../layout/layout.module';
import { HttpModule } from '@angular/http';
import { UserService } from '../../service/user.service';
import { Authentication } from '../../service/authentication.service';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [LayoutModule, HttpModule, CommonModule, NgxSpinnerModule],
  declarations: [ HomeComponent ],
  exports: [HomeComponent],
  providers: [UserService, Authentication]
})
export class HomeModule {  }
