import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';

import {LayoutModule} from '../../layout/layout.module';

@NgModule({
  imports: [LayoutModule],
  declarations: [ HomeComponent ],
  exports: [HomeComponent]
})
export class HomeModule {  }
