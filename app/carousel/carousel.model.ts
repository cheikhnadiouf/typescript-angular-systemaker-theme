export class CarouselModel {
  public animation: String;
  public interval: Number;
  public activeCarouselIndex: Number;
  public carousels:  Array<any>;
  constructor(c: any) {
    this.animation = c.animation;
    this.interval = c.interval;
    this.activeCarouselIndex = c.activeCarouselIndex;
    this.carousels = c.carousels;
  }
}


