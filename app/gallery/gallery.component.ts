import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/switchMap';

import { GalleryService } from './gallery.service';
import { GalleryModel } from './gallery.model';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {

  galleryModel: GalleryModel = null;
  errorMessage: String;

  @Input() galleryId: Number;

  constructor(private _galleryService: GalleryService, private route: ActivatedRoute) {


  }

  ngOnInit() {
    // async web request
    this._galleryService.get().subscribe(observableGallery => this.galleryModel = observableGallery.find(obj => obj.id === this.galleryId)
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
  }
}
