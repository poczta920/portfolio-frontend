import { Component } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  template: `
    <div class="project-container">
      <mat-card>
        <mat-card-header>

          <mat-card-title>Shiba Inu</mat-card-title>
          <mat-card-subtitle>Dog Breed</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <p>
            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.
          </p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button>View</button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [
    `.project-container {
      max-width: 400px;
    }`
  ]
})
export class ProjectDetailComponent {

}
