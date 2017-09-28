import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { CarouselComponent } from '../carousel/carousel.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
