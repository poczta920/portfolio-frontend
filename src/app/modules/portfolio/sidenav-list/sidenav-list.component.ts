import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  template: `
    <mat-list>
      <mat-list-item><a (click)="onSidenavClose()" routerLink=""> About me </a></mat-list-item>
      <mat-list-item><a (click)="onSidenavClose()" routerLink=""> Contact </a></mat-list-item>
      <mat-list-item><a (click)="onSidenavClose()" routerLink=""> Skills </a></mat-list-item>
      <mat-list-item><a (click)="onSidenavClose()" routerLink="/project"> Projects </a></mat-list-item>
    </mat-list>
  `,
  styles: []
})
export class SidenavListComponent {
  @Output()
  sidenavClose = new EventEmitter();

  onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
