import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-projects',
  template: `
    <div class="recent-projects-container">
      <mat-divider></mat-divider>
      <p class="mat-headline-4 recent-projects-header">Recent projects</p>
      <app-projects class="recent-projects-content"></app-projects>
    </div>
  `,
  styles: [`
    .recent-projects-container {
      display: flex;
      flex-flow: column nowrap;
      justify-items: flex-end;
      gap: 5px;
      margin-bottom: 0;
    }

    .recent-projects-header {
      padding-top: 10px;
      text-align: center;
    }

    .recent-projects-content {
      max-width: 100%;
    }
  `
  ]
})
export class RecentProjectsComponent {

}
