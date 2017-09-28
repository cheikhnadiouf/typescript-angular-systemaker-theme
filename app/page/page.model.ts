export class PageModel {
  public id: Number;
  public title: String;
  public description: String;
  public body:  String;
  public template: String;
  public galleryId: Number;
  constructor(p: any) {
    this.id = p.id;
    this.title = p.title;
    this.description = p.description;
    this.body = p.body;
    this.template = p.template;
    this.galleryId = p.galleryId;
  }
}


