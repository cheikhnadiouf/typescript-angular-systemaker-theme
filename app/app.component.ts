import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Location, SharedService]
})
export class AppComponent implements OnInit, OnDestroy {

  router: any;

  constructor(private _router: Router, private route: ActivatedRoute, private location: Location, private sharedService: SharedService ){}

  ngOnInit() {
    this.router = this._router;
  }

  ngOnDestroy() {
  }
}
