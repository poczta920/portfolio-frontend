import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  template: `
    <div id="header">
      <app-banner></app-banner>
    </div>
    <div id="about-me">
      <app-about-me></app-about-me>
    </div>
    <div id="projects">
      <app-recent-projects></app-recent-projects>
    </div>
    <div id="contacts">Contacts</div>
  `,
  styles: [
  ]
})
export class PortfolioComponent {

}
