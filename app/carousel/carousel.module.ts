import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { CarouselComponent } from './carousel.component';
import { CarouselService } from './carousel.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    CarouselService
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  declarations: [CarouselComponent],
  exports: [CarouselComponent]
})
export class CarouselModule { }
