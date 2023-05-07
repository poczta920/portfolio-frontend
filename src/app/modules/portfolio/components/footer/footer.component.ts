import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="footer-container">

      <div class="am-date">
        Today is: {{currentDate| date:'dd.MM.yyyy'}}
      </div>


      <div class="am-author">Copyright &copy;Malina Adam </div>

    </div>
  `,
  styles: [`
    .footer-container {
      height: 40px;

      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between ;
      align-items: center;

      padding: 0 10px;

      background-color: red;
      color: white;
    }`
  ]
})
export class FooterComponent {
  currentDate = Date.now();
}
