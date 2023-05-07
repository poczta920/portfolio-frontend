import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPortfolioComponent } from './layout-portfolio/layout-portfolio.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


const routes: Routes = [
  {
    path: 'portfolio',
    component: LayoutPortfolioComponent,
    children: [
      { path: '', component: PortfolioComponent },
    ],
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class PortfolioRoutingModule { }
