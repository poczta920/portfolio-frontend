import {Component} from '@angular/core';
import {BreakpointService} from "../../../shared/service/breakpoint.service";

@Component({
  selector: 'app-layout-portfolio',
  template: `
    <mat-sidenav-container>
      <mat-sidenav #sidenav role="navigation">
        <app-sidenav-list (sidenavClose)="sidenav.close()"></app-sidenav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <app-toolbar id="navbar" (sidenavToggle)="sidenav.toggle()"></app-toolbar>
        <div class="container">

          <router-outlet></router-outlet>

        </div>
        <div id="footer">
          <app-footer></app-footer>
        </div>

      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `mat-sidenav-container, mat-sidenav, mat-sidenav-content {
      height: 100%;
    }

    mat-sidenav {
      width: 250px;
    }

    .container {
      margin-left: auto;
      margin-right: auto;
      width: 90vw;
      min-height: 100vh;
    }
    `]
})
export class LayoutPortfolioComponent {
  private small: boolean = true;

  constructor(private breakpointService: BreakpointService) {
  }

}
