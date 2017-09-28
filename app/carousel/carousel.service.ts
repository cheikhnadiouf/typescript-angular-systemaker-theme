import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CarouselModel } from './carousel.model';


@Injectable()
export class CarouselService {
  constructor(private _http: HttpClient) { }

  get(): Observable<CarouselModel> {
    const url = 'assets/api/carousels/mock.json';
    // const params = new HttpParams().set('color', 'red');
    // const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // return this._http.get(url, { headers: headers, params : params})
    //        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    return this._http.get(url)
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }


}