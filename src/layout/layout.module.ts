import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutComponent } from './layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  imports:      [ BrowserModule],
  declarations: [ LayoutComponent , NavBarComponent , CarouselComponent],
  exports: [ LayoutComponent, NavBarComponent ],
})
export class LayoutModule {  }
