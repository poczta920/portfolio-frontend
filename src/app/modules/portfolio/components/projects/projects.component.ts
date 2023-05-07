import { Component } from '@angular/core';
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-projects',
  template: `
    <div class="projects-container">
      <app-project-detail *ngFor="let project of projects$ | async">
      </app-project-detail>
    </div>


  `,
  styles: [
    `
      .projects-container {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        gap: 10px;
        justify-content: center;


      }
    `
  ]
})
export class ProjectsComponent {

  projects$: Observable<Project[]> = of(
    [
      {
        name: "GasMeter",
        description: "Analiza zużycia gazu"
      },
      {
        name: "Bill",
        description: "Rozliczenie rachunków domowych"
      }
    ]
  )

}


export interface Project {
  name: string,
  description: string

}

