import { Component } from '@angular/core';
import {of} from "rxjs";

@Component({
  selector: 'app-skills',
  template: `
    <div class="skills-container">
      <p class="mat-h1">My Skills</p>
      <app-skill *ngFor="let skill of skills$|async" [name]="skill.name" [level]="skill.value"></app-skill>
    </div>
  `,
  styles: [`
    .skills-container {
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      align-self: flex-start;
      justify-self: flex-start;
      gap: 12px;
      padding-left: 15px;
      padding-bottom: 15px;
    }`]
})
export class SkillsComponent {
  skills$ = of([
    {
      name: 'Java',
      value: 60
    },
    {
      name: 'Hibernate',
      value: 70
    },
    {
      name: 'Angular',
      value: 50
    },
  ])
}
