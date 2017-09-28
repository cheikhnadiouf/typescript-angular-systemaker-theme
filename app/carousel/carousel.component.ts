import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/switchMap';

import { CarouselService } from './carousel.service';
import { CarouselModel } from './carousel.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {

  carouselModel: CarouselModel = null;
  subObservable: any;
  errorMessage: string;

  constructor(private _carouselService: CarouselService, private route: ActivatedRoute) {


  }

  ngOnInit() {
      // async web request
      this._carouselService.get().subscribe(observableCarousel => this.carouselModel = observableCarousel
        , (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log('An error occurred:', err.error.message);
            this.errorMessage = 'An error occurred: ' + err.error.message;
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
            this.errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
          }
        }
      );
  }

  ngOnDestroy() {
      this.subObservable.unsubscribe();
  }
}
