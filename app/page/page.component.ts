import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/switchMap';

import { PageService } from './page.service';
import { PageModel } from './page.model';

import { GalleryService } from '../gallery/gallery.service';
import { GalleryModel } from '../gallery/gallery.model';



@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy {

  errorMessage: string;
  pageModel: PageModel = null;
  routeId: Number;
  galleryModel: GalleryModel = null;

  constructor(private _pageService: PageService, private _route: ActivatedRoute, private _galleryService: GalleryService ){
  }

  ngOnInit() {

    this._route.params.subscribe(params => {
      this.routeId = +params['id'];
      // async web request
      this._pageService.get().subscribe(observablePage => this.pageModel = observablePage.find(obj => obj.id === this.routeId)
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

    });

  }

  ngOnDestroy() {
  }
}
