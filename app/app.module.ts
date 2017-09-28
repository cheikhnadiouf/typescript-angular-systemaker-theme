import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxGalleryModule } from 'ngx-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { CarouselModule } from './carousel/carousel.module';
import { GalleryModule } from './gallery/gallery.module';
import { PageModule } from './page/page.module';




@NgModule({
  declarations: [
    AppComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    NgxGalleryModule,
    SharedModule,
    HomeModule,
    CarouselModule,
    GalleryModule,
    PageModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  // To run any components in index.html page
  bootstrap: [AppComponent]
  // bootstrap: [AppComponent, ContainerComponent]
})
export class AppModule { }
