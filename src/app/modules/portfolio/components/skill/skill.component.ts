import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-skill',
  template: `
    <div class="container-skill">
      <p class="mat-h2">{{name}} </p>
      <mat-progress-bar color="accent" mode="determinate" [value]="level"></mat-progress-bar>

    </div>
  `,
  styles: [`
    .container-skill {
      width: 90%;
      height: auto;
      display: flex;
      flex-flow: column nowrap;
      justify-content: start;
      background-color: white;
    }
    .container-skill > h3 {
    }`]
})
export class SkillComponent {
  @Input("name")
  name:string = ''

  @Input("level")
  level:number=0;



}
