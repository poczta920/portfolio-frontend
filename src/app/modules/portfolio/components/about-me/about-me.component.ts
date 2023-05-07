import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  template: `
    <div class="about-me-container">
      <p class="mat-headline-4 about-me-header"> Who I'm?</p>
      <div class="about-me-details">
        <app-about-me-detail></app-about-me-detail>
      </div>

      <div class="skills">
        <app-skills></app-skills>
      </div>
    </div>`,
  styles: [`
    .about-me-container {
      display: grid;
      height: 100%;
      width: 100%;
      grid-template-columns: repeat(2, minmax(10px, 50%));
      grid-template-rows: repeat(2, minmax(auto, 100%));
      justify-items: center;
      align-items: start;
      gap: 5px
    }

    .about-me-details {

    }

    .about-me-header {
      padding-top: 10px;
      grid-column: span 2;

    }

    .skills {
      width: 100%;
    }

    @media screen and (max-width: 500px) {
      .about-me-container {
        grid-template-columns: repeat(1, minmax(10px, 100%));
        grid-template-rows: repeat(3, minmax(10px, auto));
      }
      .about-me-header {
        grid-column: span 1;
      }
    }
  `]
})
export class AboutMeComponent {

}
