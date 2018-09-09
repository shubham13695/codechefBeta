import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutComponent } from './layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  imports:      [ BrowserModule],
  declarations: [ LayoutComponent , NavBarComponent ],
  exports: [ LayoutComponent, NavBarComponent ],
})
export class LayoutModule {  }
