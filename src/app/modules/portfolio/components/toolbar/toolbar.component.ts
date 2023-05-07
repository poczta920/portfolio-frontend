import {Component, EventEmitter, Output} from '@angular/core';
import {Breakpoint, BreakpointService} from "../../../../shared/service/breakpoint.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {


@Output()
public sidenavToggle = new EventEmitter;

breakpoint$: Observable<Breakpoint> = this.breakpointService.getChangeBreakpoint();
subscription: Subscription = new Subscription();

// @Input()
breakpoint: Breakpoint = {
  level: 0,
  value: ''
}

small: boolean = false;

constructor(private breakpointService: BreakpointService) {
}

ngOnInit(): void {
  this.subscription = this.breakpoint$
    .subscribe((v) => {
        this.small = v.level == 0 ? true : false;
      }
    )
}

onToggleSidenav() {
  this.sidenavToggle.emit();
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}

}
