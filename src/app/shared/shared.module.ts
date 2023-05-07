import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        PageNotFoundComponent,
        FooterComponent
    ]
})
export class SharedModule { }
