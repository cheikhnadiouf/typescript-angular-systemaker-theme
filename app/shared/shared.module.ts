import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedService } from './shared.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    SharedService
  ],
  declarations: [],
  // To use any components here in other modules :
  exports: []
})
export class SharedModule {
}
