import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

export class GalleryModel {
  public id: Number;
  public options: NgxGalleryOptions[];
  public list: NgxGalleryImage[];
  constructor(g: any) {
    this.id = g.id;
    this.options = g.options;
    this.list = g.list;

  }
}


