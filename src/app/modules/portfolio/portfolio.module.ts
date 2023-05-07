import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPortfolioComponent } from './layout-portfolio/layout-portfolio.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutMeDetailComponent } from './components/about-me-detail/about-me-detail.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RecentProjectsComponent } from './components/recent-projects/recent-projects.component';
import { SkillComponent } from './components/skill/skill.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';



@NgModule({
  declarations: [
    LayoutPortfolioComponent,
    PortfolioComponent,
    SidenavListComponent,
    AboutMeComponent,
    AboutMeDetailComponent,
    BannerComponent,
    FooterComponent,
    ProjectDetailComponent,
    ProjectsComponent,
    RecentProjectsComponent,
    SkillComponent,
    SkillsComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { }
