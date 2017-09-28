import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxGalleryModule } from 'ngx-gallery';

import { GalleryComponent } from './gallery.component';
import { GalleryService } from './gallery.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    NgxGalleryModule
  ],
  providers: [
    GalleryService
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  declarations: [GalleryComponent],
  exports: [GalleryComponent]
})
export class GalleryModule { }
