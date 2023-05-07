import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me-detail',
  template: `
    <p class="about-me-details-container">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit laborum nulla veniam aliquam eum totam, dolor, vero dolorum consequuntur fugit consequatur, quaerat dolore reiciendis vel esse accusamus. Dolorum, error deleniti?Maiores, suscipit doloremque! Consectetur quo molestiae incidunt accusantium dolorem, exercitationem iste vitae nulla velit animi dignissimos ipsam saepe voluptatum, asperiores hic enim sapiente omnis nostrum totam quibusdam est facere ea?
    </p>

  `,
  styles: [
    `.about-me-details-container {
      padding-left: 15px;
      padding-right: 15px;
      text-indent: 1.5em;
      text-align: justify;
    }`

  ]
})
export class AboutMeDetailComponent {

}
