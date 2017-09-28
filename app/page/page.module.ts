import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { PageService } from './page.service';
import { GalleryModule } from '../gallery/gallery.module';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    PageRoutingModule,
    MDBBootstrapModule.forRoot(),
    GalleryModule
  ],
  providers: [
    PageService
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  declarations: [PageComponent],
  exports: [PageComponent]
})
export class PageModule { }
