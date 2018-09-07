import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';

import {LayoutModule} from '../../layout/layout.module';
import { HttpModule } from '@angular/http';
import { UserService } from '../../service/user.service';
import { Authentication } from '../../service/authentication.service';

@NgModule({
  imports: [LayoutModule, HttpModule],
  declarations: [ HomeComponent ],
  exports: [HomeComponent],
  providers: [UserService, Authentication]
})
export class HomeModule {  }
