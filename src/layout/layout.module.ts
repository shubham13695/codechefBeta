import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutComponent } from './layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, RouterModule],
  declarations: [ LayoutComponent , NavBarComponent ],
  exports: [ LayoutComponent, NavBarComponent ],
})
export class LayoutModule {  }
