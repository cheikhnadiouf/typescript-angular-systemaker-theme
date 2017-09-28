import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class SharedService {

  previousPath = '/';
  constructor(private _router: Router, private location: Location){}


  goLink(event, target) {
    this.setPreviousPath();
    // this._router.navigate([event.target.value]);
    this._router.navigate([target]);
    // to disable reload page with href empty
    event.preventDefault();


  }

  goSubLink(event, target){
    this.setPreviousPath();

    // this._router.navigate(['users', {outlets: { subsection: [target]}}]);
    // to disable reload page with href empty
    event.preventDefault();
  }

  directLink(event, id){
    this.setPreviousPath();
    // this._router.navigate(['directlink', id]);
    // or this._router.navigate(['users/' + id]);
    // to disable reload page with href empty
    // event.preventDefault();
  }

  backLink(event) {
    this.setPreviousPath();
    this.location.back();
    // to disable reload page with href empty
    event.preventDefault();
  }

  forwardLink(event) {
    this.setPreviousPath();
    this.location.forward();
    // to disable reload page with href empty
    event.preventDefault();
  }

  setPreviousPath() {
    this.previousPath = this._router.url;
  }

  getCurrentPath() {
    return this._router.url;
  }

}