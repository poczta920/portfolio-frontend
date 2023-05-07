import { Injectable } from '@angular/core';
import {distinctUntilChanged, map, Observable, tap} from "rxjs";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  Breakpoints = Breakpoints;
  currentBreakpoint: string = '';
  level: number = 0;

  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.XLarge, Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
    .pipe(
      tap(value => console.log(value)),
      map(() => this.breakpointChanged()),
      distinctUntilChanged()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  getChangeBreakpoint(): Observable<Breakpoint> {
    return this.breakpoint$
  }

  private breakpointChanged(): Breakpoint {
    let breakpoint: Breakpoint = {
      level: 0,
      value: ''
    }

    if (this.breakpointObserver.isMatched(Breakpoints.XLarge)) {
      breakpoint.value = Breakpoints.XLarge;
      breakpoint.level = 1;
    } else if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
      breakpoint.value = Breakpoints.Large;
      breakpoint.level = 1;

    } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      breakpoint.value = Breakpoints.Medium;
      breakpoint.level = 1;

    } else if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
      breakpoint.value = Breakpoints.Small;
      breakpoint.level = 0;

    } else if (this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
      breakpoint.value = Breakpoints.XSmall;
      breakpoint.level = 0;
    } ;
    console.log('[BreakpointService]: ','Current breakpoint: ',  breakpoint);
    return breakpoint;
  }

}

export interface Breakpoint {
  level: number,
  value: string
}
