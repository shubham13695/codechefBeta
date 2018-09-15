import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports:      [ BrowserModule, RouterModule],
  declarations: [ LayoutComponent, NavBarComponent, FooterComponent],
  exports: [ LayoutComponent, NavBarComponent, FooterComponent ],
})
export class LayoutModule {  }
