import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `<div class="banner-container">

    <div class="banner-content">

      <div class="mat-headline-2 banner-title-1">Angular Agency</div>
      <span class="mat-headline-4 banner-title-2">Hi, I am Adam! I am Java developer</span>
      <span class="mat-h1 banner-title-3">Welcome to my Web Portfolio</span>
    </div>

  </div>
  `,
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

}
